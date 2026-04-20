export interface RepoSlug {
  owner: string;
  name: string;
  bors?: boolean;
}

export interface Config {
  github: {
    api_url: string;
  };
  tracking: {
    since: string; // YYYY-MM-DD fixed start date
    users: string[];
    repos: RepoSlug[];
  };
}

export interface PrItem {
  number: number;
  title: string;
  url: string;
  user: string;
  repo: string; // "owner/name"
  state: "merged" | "open" | "closed";
  createdAt: string; // YYYY-MM-DD
}

export interface IssueItem {
  number: number;
  title: string;
  url: string;
  user: string;
  repo: string; // "owner/name"
  state: "open" | "closed";
  createdAt: string; // YYYY-MM-DD
}

export interface CsvRow {
  quarter: string;
  owner: string;
  repo: string;
  prs_opened: number;
  prs_merged: number;
  prs_closed: number;
  issues_opened: number;
  issues_closed: number;
}
