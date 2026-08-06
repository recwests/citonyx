---
title: ChatGPT leaves 85% of retrieved pages uncited — 33% of citations come from
  fan-out queries
description: 'AirOps (548,534 retrieved pages, 15,000 prompts): ChatGPT cites only
  15% of retrieved pages; 32.9% of cited pages surface only via internal fan-out queries
  invisible to keyword tools.'
practice_type: measurement
confidence: verified
source: {url: 'https://www.airops.com/report/influence-of-retrieval-fanout-and-google-serps-in-chatgpt',
  platform: web, author: AirOps}
published: 2026-05-30
updated: 2026-08-06
locale: en
tags: [citation-factors, citation-rate, zyppy]
difficulty: intermediate
related: [prompt-content-alignment-dominant-citation-predictor, zyppy-evidence-weighted-citation-factors]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
AI search engines use two-stage source selection: retrieval (boolean yes/no) then scoring (competitive). Retrieval is necessary but citation is earned through structural and authority signals. AirOps examined 548,534 pages retrieved across 15,000 prompts: ChatGPT cites only 15% of retrieved pages, and 32.9% of cited pages appear only through fan-out queries with zero search volume.

## Details
- AirOps dataset: 548,534 retrieved pages, 15,000 prompts, 43,233 total queries including fan-out; 89.6% of searches fired two or more fan-out sub-queries; 95% of fan-out queries have zero monthly search volume in keyword tools.
- Pages ranking first in Google are cited at a 43.2% rate, 3.5x higher than pages beyond the top 20; yet 55.8% of all cited pages ranked in the top 20 for some query. Tracking only primary keywords misses a third of citation paths — cover long-tail and adjacent topics.
- Nanjing University feature-level optimization study (arxiv 2604.19113): AI engines apply multi-objective scoring across content alignment, structural extractability, source authority, and entity specificity. The page with the clearest, most directly relevant answer block wins the citation slot — not necessarily highest domain authority. Study of 114,034 URL-query observations found a measurable SEO floor below which AI citation becomes statistically unlikely.
- Two-stage process explains why some high-authority domains get retrieved but never cited. Named authors (odds 1.40) and listicle formats favored. DeepSeek values entity clarity (1.4x weight), heading structure (1.3x), content depth (1.2x).
