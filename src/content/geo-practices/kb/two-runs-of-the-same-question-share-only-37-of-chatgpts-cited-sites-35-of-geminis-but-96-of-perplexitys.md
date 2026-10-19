---
title: Two Runs of the Same Question Share Only 37% of ChatGPT's Cited Sites, 35%
  of Gemini's, but 96% of Perplexity's
description: 'Prefer''s Sept 2026 study of 960 answers: re-running one question shares
  37% of sites on ChatGPT, 35% on Gemini, 68% on Claude and 96% on Perplexity, so
  one run is not enough.'
practice_type: measurement
confidence: experimental
source: {url: 'https://tryprefer.com/data/ai-answer-study', platform: web}
published: 2026-10-19
updated: 2026-10-19
locale: en
tags: [run-to-run-variance, repeat-measurement, citation-sampling]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Prefer's 13 September 2026 study asked 80 GEO questions three times each to ChatGPT, Perplexity, Gemini and Claude through an API, producing 960 answers. Two runs of the same question shared on average 37% of the sites cited on ChatGPT, 35% on Gemini, 68% on Claude and 96% on Perplexity.

## Details
- Perplexity cited exactly the same sites in 199 of 240 run pairs, Claude in 55 of 179, ChatGPT in 27 of 206 and Gemini in only 2 of 200.
- All three answers to each question came back within 23 seconds, so this is moment-to-moment non-determinism, not drift over time.
- Prefer's method divides shared sites by all sites cited across both runs and averages over pairs; counting empty runs as sharing nothing lowers ChatGPT to 34% and Gemini to 31%.
- Action: run every tracked prompt at least three times per engine, and record whether the run searched the web, since 99 uncited answers had simply skipped search.
