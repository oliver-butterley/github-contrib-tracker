import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { format as formatCsv } from "@fast-csv/format";
import { Writable } from "node:stream";
import type { CsvRow, IssueItem, PrItem } from "./types.js";

// ── Quarter helpers ────────────────────────────────────────────────────────────

function quarterOf(dateStr: string): string {
  const d = new Date(dateStr);
  const q = Math.floor(d.getUTCMonth() / 3) + 1;
  return `Q${q} ${d.getUTCFullYear()}`;
}

function quarterLabel(q: string): string {
  const [qPart, year] = q.split(" ") as [string, string];
  const idx = parseInt(qPart[1]!) - 1;
  const ranges = ["Jan–Mar", "Apr–Jun", "Jul–Sep", "Oct–Dec"];
  return `${q} (${ranges[idx]} ${year})`;
}

function sortedQuartersDesc(keys: string[]): string[] {
  return [...new Set(keys)].sort((a, b) => {
    const [aq, ay] = a.split(" ") as [string, string];
    const [bq, by] = b.split(" ") as [string, string];
    if (ay !== by) return parseInt(by) - parseInt(ay);
    return parseInt(bq[1]!) - parseInt(aq[1]!); // higher Q first within same year
  });
}

// ── CSV helpers ────────────────────────────────────────────────────────────────

async function writeCsv(filePath: string, rows: CsvRow[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const sink = new Writable({
      write(chunk: Buffer, _enc, cb) { chunks.push(chunk); cb(); },
    });
    const stream = formatCsv({ headers: true });
    stream.pipe(sink);
    sink.on("finish", async () => { await writeFile(filePath, Buffer.concat(chunks)); resolve(); });
    sink.on("error", reject);
    stream.on("error", reject);
    for (const row of rows) stream.write(row);
    stream.end();
  });
}

// ── Markdown builder ──────────────────────────────────────────────────────────

function buildMarkdown(
  since: string,
  generatedAt: string,
  repoKeys: string[],
  allPrItems: PrItem[],
  allIssueItems: IssueItem[],
): string {
  // Group items by quarter then by repo
  const prByQR = new Map<string, Map<string, PrItem[]>>();
  const issueByQR = new Map<string, Map<string, IssueItem[]>>();

  for (const item of allPrItems) {
    const q = quarterOf(item.createdAt);
    if (!prByQR.has(q)) prByQR.set(q, new Map());
    const byRepo = prByQR.get(q)!;
    if (!byRepo.has(item.repo)) byRepo.set(item.repo, []);
    byRepo.get(item.repo)!.push(item);
  }

  for (const item of allIssueItems) {
    const q = quarterOf(item.createdAt);
    if (!issueByQR.has(q)) issueByQR.set(q, new Map());
    const byRepo = issueByQR.get(q)!;
    if (!byRepo.has(item.repo)) byRepo.set(item.repo, []);
    byRepo.get(item.repo)!.push(item);
  }

  const allQuarters = sortedQuartersDesc([
    ...prByQR.keys(),
    ...issueByQR.keys(),
  ]);

  const lines: string[] = [
    `# Contribution Report`,
    ``,
    `Generated: ${generatedAt.slice(0, 10)}  |  Data since: ${since}`,
    ``,
  ];

  for (const q of allQuarters) {
    lines.push(`## ${quarterLabel(q)}`, ``);

    for (const repoKey of repoKeys) {
      const prs = prByQR.get(q)?.get(repoKey) ?? [];
      const issues = issueByQR.get(q)?.get(repoKey) ?? [];

      if (prs.length === 0 && issues.length === 0) continue;

      const prsMerged = prs.filter((p) => p.state === "merged").length;
      const prsClosed = prs.filter((p) => p.state === "closed").length;
      const issuesClosed = issues.filter((i) => i.state === "closed").length;

      lines.push(`### ${repoKey}`, ``);
      lines.push(
        `PRs: **${prs.length} opened** · ${prsMerged} merged · ${prsClosed} closed` +
        `  |  Issues: **${issues.length} opened** · ${issuesClosed} closed`,
        ``,
      );

      if (prs.length > 0) {
        const sorted = [...prs].sort((a, b) => {
          const order = { merged: 0, open: 1, closed: 2 };
          return order[a.state] - order[b.state] || b.number - a.number;
        });
        lines.push(`**Pull requests:**`, ``);
        for (const pr of sorted) {
          const stateTag = pr.state === "merged" ? "merged" : pr.state === "open" ? "open" : "closed";
          lines.push(`- [#${pr.number} ${pr.title}](${pr.url}) — ${pr.user} — ${stateTag}`);
        }
        lines.push(``);
      }

      if (issues.length > 0) {
        const sorted = [...issues].sort((a, b) => {
          const order = { open: 0, closed: 1 };
          return order[a.state] - order[b.state] || b.number - a.number;
        });
        lines.push(`**Issues:**`, ``);
        for (const issue of sorted) {
          lines.push(`- [#${issue.number} ${issue.title}](${issue.url}) — ${issue.user} — ${issue.state}`);
        }
        lines.push(``);
      }
    }
  }

  return lines.join("\n");
}

// ── CSV rows (team totals per repo per quarter) ───────────────────────────────

function buildCsvRows(
  repoKeys: string[],
  allPrItems: PrItem[],
  allIssueItems: IssueItem[],
): CsvRow[] {
  const rows: CsvRow[] = [];

  const quarters = new Set([
    ...allPrItems.map((p) => quarterOf(p.createdAt)),
    ...allIssueItems.map((i) => quarterOf(i.createdAt)),
  ]);

  for (const q of sortedQuartersDesc([...quarters])) {
    for (const repoKey of repoKeys) {
      const [owner, name] = repoKey.split("/") as [string, string];
      const prs = allPrItems.filter((p) => p.repo === repoKey && quarterOf(p.createdAt) === q);
      const issues = allIssueItems.filter((i) => i.repo === repoKey && quarterOf(i.createdAt) === q);
      if (prs.length === 0 && issues.length === 0) continue;
      rows.push({
        quarter: q,
        owner,
        repo: name,
        prs_opened: prs.length,
        prs_merged: prs.filter((p) => p.state === "merged").length,
        prs_closed: prs.filter((p) => p.state === "closed").length,
        issues_opened: issues.length,
        issues_closed: issues.filter((i) => i.state === "closed").length,
      });
    }
  }

  return rows;
}

// ── Public entry point ────────────────────────────────────────────────────────

export async function writeOutputs(
  since: string,
  repoKeys: string[],
  allPrItems: PrItem[],
  allIssueItems: IssueItem[],
): Promise<void> {
  const generatedAt = new Date().toISOString();
  const runDate = generatedAt.slice(0, 10);
  const dir = join("data", runDate);
  await mkdir(dir, { recursive: true });

  // JSON — full raw data
  await writeFile(
    join(dir, "contributions.json"),
    JSON.stringify({ generatedAt, since, prItems: allPrItems, issueItems: allIssueItems }, null, 2) + "\n",
  );

  // CSV — team totals per repo per quarter
  await writeCsv(join(dir, "contributions.csv"), buildCsvRows(repoKeys, allPrItems, allIssueItems));

  // Markdown — quarterly grouped report
  const md = buildMarkdown(since, generatedAt, repoKeys, allPrItems, allIssueItems);
  await writeFile(join(dir, "contributions.md"), md);

  console.log(`Wrote output to ${dir}/`);
}
