# github-contrib-tracker

Collects GitHub contribution data (pull requests and issues) for a fixed set of people and repositories, and commits the results as JSON, CSV, and Markdown files. Runs automatically every day via GitHub Actions.

## What is tracked

For each combination of person and repository, the tool records — over a configurable lookback window (default: 90 days):

| Metric | Description |
|--------|-------------|
| PRs Opened | Pull requests created by the person |
| PRs Merged | Pull requests created and merged |
| PRs Closed | Pull requests closed without merging |
| Issues Opened | Issues created by the person |
| Issues Closed | Issues created by the person that are now closed |

### People

- [oliver-butterley](https://github.com/oliver-butterley)
- [truonghoangle](https://github.com/truonghoangle)
- [MarkusFerdinandDablander](https://github.com/MarkusFerdinandDablander)
- [a-dangelo](https://github.com/a-dangelo)
- [Zhang-Liao](https://github.com/Zhang-Liao)
- [mpenciak](https://github.com/mpenciak)
- [astefano](https://github.com/astefano)
- [faenuccio](https://github.com/faenuccio)
- [ChristianoBraga](https://github.com/ChristianoBraga)
- [jinxinglim](https://github.com/jinxinglim)
- [mkovaxx](https://github.com/mkovaxx)

### Repositories

- [AeneasVerif/aeneas](https://github.com/AeneasVerif/aeneas)
- [AeneasVerif/charon](https://github.com/AeneasVerif/charon)
- [leanprover/cslib](https://github.com/leanprover/cslib)
- [verus-lang/verus](https://github.com/verus-lang/verus)
- [leanprover-community/mathlib4](https://github.com/leanprover-community/mathlib4)

## Output

Each run writes three files to `data/YYYY-MM-DD/`:

| File | Description |
|------|-------------|
| `contributions.json` | Full structured data with metadata |
| `contributions.csv` | Flat table, easy to open in a spreadsheet |
| `contributions.md` | Human-readable Markdown report with one table per repository |

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

The script tries `GITHUB_TOKEN` first, then falls back to `gh auth token` automatically. Output files are written to `data/YYYY-MM-DD/`.

To check types without running:

```bash
npm run typecheck
```

## Configuration

Edit `config.yaml` to change what is tracked:

```yaml
tracking:
  lookback_days: 90   # how far back to look from the run date

  users:
    - some-github-username

  repos:
    - owner: some-org
      name: some-repo
```

Changes take effect on the next run.

## Automated schedule

A GitHub Actions workflow (`.github/workflows/collect.yml`) runs the collector daily at **06:00 UTC** and commits the output files back to this repository. You can also trigger it manually from the Actions tab using **Run workflow**.

The workflow requires no configuration beyond a repository secret. The built-in `GITHUB_TOKEN` is used automatically — no personal access token is needed for the workflow itself (as long as all tracked repos are public).

For private repositories in the tracked list, create a PAT with `repo` scope and add it as a repository secret named `GH_PAT`, then update the workflow's `GITHUB_TOKEN` env line to `GH_PAT: ${{ secrets.GH_PAT }}`.
