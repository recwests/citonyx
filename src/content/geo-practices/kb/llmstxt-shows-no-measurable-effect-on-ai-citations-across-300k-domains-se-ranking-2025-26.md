---
title: llms.txt Shows No Measurable Effect on AI Citations Across 300K Domains (SE
  Ranking 2025-26)
description: 'SE Ranking analysis of ~300K domains: no statistically significant correlation
  between llms.txt and AI citation frequency. Removing the variable from the model
  improved prediction accuracy.'
practice_type: measurement
confidence: verified
source: {url: 'https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/',
  platform: web}
published: 2026-07-23
updated: 2026-08-09
locale: en
tags: [300k-domains, citation-effect, llms-txt, no-correlation, se-ranking]
difficulty: beginner
related: []
conflicts_with: []
manual: false
hub: measurement
---
## Summary
SE Ranking analyzed ~300K domains using statistical correlation plus XGBoost ML model: effectively zero correlation between llms.txt presence and AI citation frequency. Removing the llms.txt variable actually improved model accuracy. Trakkr independently confirmed on 37,894 domains: 6.8 citations with llms.txt vs 6.7 without (p=0.85).

## Details
No major AI provider (OpenAI, Google, Anthropic) has documented llms.txt as an input to citation pipelines. Adoption at ~10% of domains. OtterlyAI's 90-day bot audit: out of 62,100+ AI bot visits, only 84 requests targeted /llms.txt path. Ahrefs: 97% of llms.txt files receive zero requests. The file retains a niche use for developer documentation consumed by AI coding assistants, not general AI search visibility — treat it as future-proofing insurance with 10-min implementation cost.

**Conflicting finding:** llms.txt implementation documented 5x AI traffic increase — single highest-leverage technical GEO tactic. The Concurate case study documented a 5x increase in AI-referred traffic after implementing an llms.txt file at the domain root. Erlin data (500+ brands, 2026) confirms llms.txt drives +32% coverage lift in 11-17 days. Caveat: single case study with publication bias.(Sources: Stackmatix/Concurate 2026, Erlin 2026). Confidence: experimental.
