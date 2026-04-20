import type { Octokit } from "@octokit/rest";
import type { IssueItem, PrItem } from "./types.js";

interface SearchItem {
  number: number;
  title: string;
  html_url: string;
  state: string;
  created_at: string;
  user: { login: string } | null;
  pull_request?: { merged_at: string | null };
}

async function searchItems(octokit: Octokit, q: string): Promise<SearchItem[]> {
  const items: SearchItem[] = [];
  for await (const response of octokit.paginate.iterator(
    "GET /search/issues",
    { q, per_page: 100 },
  )) {
    items.push(...(response.data as SearchItem[]));
  }
  return items;
}

export async function collectForRepo(
  octokit: Octokit,
  owner: string,
  repo: string,
  users: string[],
  since: string,
  bors = false,
): Promise<{ prItems: PrItem[]; issueItems: IssueItem[] }> {
  const repoKey = `${owner}/${repo}`;
  // Multiple author: qualifiers are OR'd by GitHub search
  const authorFilter = users.map((u) => `author:${u}`).join("+");
  const base = `repo:${repoKey}+created:>=${since}+${authorFilter}`;

  const [rawPrs, rawIssues] = await Promise.all([
    searchItems(octokit, `${base}+type:pr`),
    searchItems(octokit, `${base}+type:issue`),
  ]);

  const userSet = new Set(users);

  const prItems: PrItem[] = rawPrs
    .filter((item) => userSet.has(item.user?.login ?? ""))
    .map((item) => {
      const nativeMerge = item.pull_request?.merged_at != null;
      const borsMerge = bors && item.title.startsWith("[Merged by Bors]");
      const merged = nativeMerge || borsMerge;
      const state: PrItem["state"] = merged ? "merged" : item.state === "open" ? "open" : "closed";
      return {
        number: item.number,
        title: borsMerge ? item.title.replace(/^\[Merged by Bors\] - /, "") : item.title,
        url: item.html_url,
        user: item.user?.login ?? "unknown",
        repo: repoKey,
        state,
        createdAt: item.created_at.slice(0, 10),
      };
    });

  const issueItems: IssueItem[] = rawIssues
    .filter((item) => userSet.has(item.user?.login ?? ""))
    .map((item) => ({
      number: item.number,
      title: item.title,
      url: item.html_url,
      user: item.user?.login ?? "unknown",
      repo: repoKey,
      state: item.state === "open" ? "open" : "closed",
      createdAt: item.created_at.slice(0, 10),
    }));

  return { prItems, issueItems };
}
