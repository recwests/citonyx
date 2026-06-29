# CiteLab — Measurement Harness (skeleton)

CiteLab is a GEO testbed: it measures whether AI answer engines (ChatGPT,
Perplexity, Google AI Overviews, Gemini, Bing/Copilot) **cite this site** for
the questions our content targets.

This directory holds the **measurement data + schema + docs**, plus the
**Gemini grounding runner** (`runner.py`) — the first auto channel. It lives
outside `src/`, has no `.ts`/`.astro` files, and is **not part of the Astro
build**.

## Running the runner (Gemini grounding channel)

`runner.py` is the **only auto channel implemented so far**: Gemini 2.5 Flash +
Google Search grounding (official API, free tier). Perplexity (Sonar API) is the
next auto channel; ChatGPT, Google AI Overviews and Bing/Copilot stay manual
(see the platforms table below).

```bash
# the key lives in ~/.config/citelab/secrets.env as GEMINI_API_KEY=...
# `set -a` exports it to the python child; secrets.env has no `export` lines.
set -a; source ~/.config/citelab/secrets.env; set +a
PYTHONPATH=~/.local/citelab-libs python3 experiments/runner.py --limit 3   # smoke test
PYTHONPATH=~/.local/citelab-libs python3 experiments/runner.py             # full panel (N=3)
```

Config via env (all overridable): `N` (repeats/prompt, default 3),
`TARGET_DOMAIN` (default `citelab-eks.pages.dev`), `MODEL` (default
`gemini-2.5-flash`). `--limit K` runs only the first K prompts.

Each prompt × `run_index` produces one record (validated against
`runs/schema.json`) appended to `runs/<YYYY-MM-DD>.json`. The runner reads
`GEMINI_API_KEY` from `os.environ` only and never prints it. Deps:
`requirements.txt` (`google-genai`, `pyyaml`, optional `jsonschema`).

**Detecting our citation.** Gemini returns grounding chunks where `web.uri` is a
`vertexaisearch…/grounding-api-redirect/…` Google redirect — **not** the real
url. The real source **domain is in `web.title`** (e.g. `forbes.com`), so the
runner detects citation **only** via the sanitised `web.title` (bare lowercase
domain): the normalised title domain must equal `TARGET_DOMAIN`, be a subdomain
of it, or be a parent of it. There is no substring fallback (it risks false
positives).

The **raw prompt is sent verbatim** — we do not append any "cite your sources"
nudge, so we measure citation behavior for the real query. Gemini may answer
from memory without searching; when a call succeeds but issues no
`web_search_queries` and returns no chunks, the record's `notes` is set to
`no_search` (so `cited:false` from "didn't search" is distinguishable from
"searched but didn't cite us").

## Measurement-first principle

Decisions about content and structure are made **only against measured citation
data**, never against assumptions. We measure the current state _before_
changing anything, then measure again after, and attribute change to evidence.

## What's here

```
experiments/
  prompts.yaml              # the target query panel (experiment inputs)
  runs/
    schema.json             # JSON Schema (draft-07) for one run record
    YYYY-MM-DD.json         # one file per measurement date (array of records)
    2026-06-29.example.json # EXAMPLE record — not real data
  README.md
```

## How a run is recorded

- **One file per date**, named `runs/YYYY-MM-DD.json`.
- Each file contains a **JSON array of run records**.
- Each record validates against `runs/schema.json` (one prompt × one platform ×
  one repeat). Required fields: `date`, `prompt_id`, `prompt`, `platform`,
  `query_method`, `cited`, `run_index`.
- `prompt_id` references an `id` in `prompts.yaml`; `prompt` copies the text used
  at run time so records stay interpretable even if the panel evolves.

### Attribution fields (so a citation is interpretable, not just a yes/no)

- `citation_type` — `link` (clickable source, strongest) / `quote` (our text
  quoted) / `mention` (brand named, no link) / `none`. A bare `cited:true` hides
  this difference, which is exactly what GEO analysis lives on.
- `model` — the specific model/version behind the platform at run time
  (e.g. `sonar`, `gemini-2.0-flash`). Lets us tell a model update apart from a
  content change.
- `query_method` — `api` vs `manual`; the same platform can answer differently
  via API vs UI, so it is recorded explicitly (and is required).
- `response_excerpt` — short verbatim snippet around the citation; AI answers are
  not replayable, so this is the only durable evidence (esp. for manual runs).

## N≥3 rule (non-determinism)

AI answers are non-deterministic: the same prompt can cite different sources on
different runs. Every prompt × platform combination is run **at least 3 times**
(`run_index` 1..N) so citation rate is measured as a frequency, not a single
coin flip.

## Baseline before content

Establish a **baseline** citation rate across the panel _before_ publishing or
changing content. Without a baseline there is nothing to attribute later gains
(or losses) to.

## Platforms: auto-measurable vs manual

Recorded in `platform`:

| Platform       | How (later sprint)                                   |
| -------------- | ---------------------------------------------------- |
| `gemini`       | Auto — Gemini grounding API (free tier)              |
| `perplexity`   | Auto — Perplexity Sonar API (cheap, returns sources) |
| `google_aio`   | Manual — Google AI Overviews, observed by hand       |
| `chatgpt`      | Manual — observed by hand                            |
| `bing_copilot` | Manual — observed by hand                            |

## Hard rule: no UI scraping

Do **NOT** scrape the ChatGPT or Perplexity web UIs — it violates their Terms of
Service. Manual platforms are recorded by hand; automated platforms use their
official APIs only.
