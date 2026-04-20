import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
import { retry } from "@octokit/plugin-retry";
import { execSync } from "node:child_process";
import { loadConfig } from "./config.js";
import { collectForRepo } from "./collector.js";
import { writeOutputs } from "./writer.js";
import type { IssueItem, PrItem } from "./types.js";

const ThrottledOctokit = Octokit.plugin(throttling, retry);

function resolveToken(): string {
  const envToken = process.env["GITHUB_TOKEN"];
  if (envToken) return envToken;
  try {
    const ghToken = execSync("gh auth token", { encoding: "utf8" }).trim();
    if (ghToken) {
      console.log("Using token from gh CLI");
      return ghToken;
    }
  } catch {
    // gh not installed or not logged in
  }
  throw new Error("No GitHub token found. Either set GITHUB_TOKEN or run `gh auth login`.");
}

async function main() {
  const token = resolveToken();
  const config = loadConfig();

  const octokit = new ThrottledOctokit({
    auth: token,
    baseUrl: config.github.api_url,
    throttle: {
      onRateLimit: (retryAfter: number, options: { method: string; url: string }, _octokit: unknown, retryCount: number) => {
        console.warn(`Rate limit hit for ${options.method} ${options.url} — retrying after ${retryAfter}s (attempt ${retryCount + 1})`);
        return retryCount < 3;
      },
      onSecondaryRateLimit: (_retryAfter: number, options: { method: string; url: string }) => {
        console.warn(`Secondary rate limit for ${options.method} ${options.url} — retrying`);
        return true;
      },
    },
  });

  const { since, users, repos } = config.tracking;
  console.log(`Collecting data since ${since} for ${users.length} users across ${repos.length} repos (${repos.length * 2} API calls)...`);

  const allPrItems: PrItem[] = [];
  const allIssueItems: IssueItem[] = [];

  for (const repo of repos) {
    const repoKey = `${repo.owner}/${repo.name}`;
    process.stdout.write(`  ${repoKey} ... `);
    const { prItems, issueItems } = await collectForRepo(
      octokit, repo.owner, repo.name, users, since, repo.bors,
    );
    allPrItems.push(...prItems);
    allIssueItems.push(...issueItems);
    console.log(`${prItems.length} PRs, ${issueItems.length} issues`);
  }

  const repoKeys = repos.map((r) => `${r.owner}/${r.name}`);
  await writeOutputs(since, repoKeys, allPrItems, allIssueItems);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
