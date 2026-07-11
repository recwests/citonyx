---
title: ChatGPT Only Cites ~15% of Pages It Retrieves — Two-Stage Source Selection
description: 'Zyppy research: AI engines use two-stage source selection. Retrieval
  is yes/no, citation is earned through structural and authority signals. ChatGPT
  cites 7-8 sources but only 15% of retrieved.'
practice_type: measurement
provider: manual
confidence: verified
source: {url: 'https://authoritytech.io/blog/ai-search-ranking-factors-citation-2026',
  platform: web, author: Authority Tech / Zyppy}
published: 2026-05-30
updated: 2026-07-11
locale: en
tags: [retrieval-rate, citation-rate, two-stage-process, ranking-factors, zyppy]
difficulty: intermediate
related: [prompt-content-alignment-dominant-citation-predictor, zyppy-evidence-weighted-citation-factors]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
AI search engines use two-stage source selection: retrieval (boolean yes/no) then scoring (competitive). Retrieval is necessary but citation is earned through structural and authority signals. ChatGPT cites only ~15% of pages it retrieves.

## Details
Nanjing University feature-level optimization study (arxiv 2604.19113): AI engines apply multi-objective scoring across content alignment, structural extractability, source authority, and entity specificity. The page with the clearest, most directly relevant answer block wins the citation slot — not necessarily highest domain authority. Study of 114,034 URL-query observations found a measurable SEO floor below which AI citation becomes statistically unlikely. Google's AI features rely on core Search ranking systems to retrieve pages — so Google crawlability remains essential. Two-stage process explains why some high-authority domains get retrieved but never cited. Named authors (odds 1.40) and listicle formats favored. DeepSeek values entity clarity (1.4x weight), heading structure (1.3x), content depth (1.2x).
