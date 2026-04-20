import { readFileSync } from "node:fs";
import { load } from "js-yaml";
import type { Config } from "./types.js";

export function loadConfig(path = "config.yaml"): Config {
  const raw = load(readFileSync(path, "utf8")) as Record<string, unknown>;

  const tracking = raw["tracking"] as Record<string, unknown> | undefined;
  if (!tracking) throw new Error("config.yaml: missing 'tracking' section");

  const since = tracking["since"];
  if (typeof since !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(since))
    throw new Error("config.yaml: tracking.since must be a YYYY-MM-DD date string");

  const users = tracking["users"];
  if (!Array.isArray(users) || users.length === 0)
    throw new Error("config.yaml: tracking.users must be a non-empty array");

  const repos = tracking["repos"];
  if (!Array.isArray(repos) || repos.length === 0)
    throw new Error("config.yaml: tracking.repos must be a non-empty array");

  for (const r of repos) {
    if (typeof r !== "object" || r === null || !("owner" in r) || !("name" in r))
      throw new Error(`config.yaml: each repo must have 'owner' and 'name', got: ${JSON.stringify(r)}`);
  }

  const github = (raw["github"] as Record<string, unknown> | undefined) ?? {};

  return {
    github: {
      api_url: (github["api_url"] as string | undefined) ?? "https://api.github.com",
    },
    tracking: {
      since,
      users: users as string[],
      repos: repos as Array<{ owner: string; name: string; bors?: boolean }>,
    },
  };
}
