# github-contrib-tracker

Collects GitHub contribution data (pull requests and issues) for a configured set of people and repositories, and commits the results as JSON, CSV, and Markdown files. Runs automatically every day via GitHub Actions.

## What is tracked

For each person and repository defined in [`config.yaml`](config.yaml), the tool records all activity since the configured start date:

| Metric | Description |
|--------|-------------|
| PRs Opened | Pull requests created by the person |
| PRs Merged | Pull requests created and merged |
| PRs Closed | Pull requests closed without merging |
| Issues Opened | Issues created by the person |
| Issues Closed | Issues created by the person that are now closed |

The report is grouped by calendar quarter, most recent first.

## Output

Each run writes three files to `data/YYYY-MM-DD/`:

| File | Description |
|------|-------------|
| `contributions.json` | Full raw data (all PR and issue items with metadata) |
| `contributions.csv` | Team totals per repo per quarter, easy to open in a spreadsheet |
| `contributions.md` | Human-readable report: quarterly → per-project with PR title list |

## Running locally

The easiest way is via the `gh` CLI — no token management needed:

```bash
gh auth login        # one-time setup
npm install
npm run collect
```

Alternatively, set a token explicitly:

```bash
export GITHUB_TOKEN=ghp_your_token_here
npm run collect
```

Output files are written to `data/YYYY-MM-DD/`.

## Configuration

People, repositories, and the start date are all configured in [`config.yaml`](config.yaml). Changes take effect on the next run.

## Automated schedule

A GitHub Actions workflow (`.github/workflows/collect.yml`) runs the collector daily at **06:00 UTC** and commits the output files back to this repository. You can also trigger it manually from the Actions tab using **Run workflow**.

The built-in `GITHUB_TOKEN` is used automatically — no personal access token needed as long as all tracked repos are public. For private repos, create a PAT with `repo` scope, add it as a secret named `GH_PAT`, and update the `GITHUB_TOKEN` env line in the workflow accordingly.
