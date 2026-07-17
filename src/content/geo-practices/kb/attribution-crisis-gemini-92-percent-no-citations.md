---
title: Attribution Crisis — Gemini Provides Zero Citations in 92% of Answers
description: 'Cambridge Data & Policy (April 2026): ~14K conversations analyzed. Gemini
  provides 0 clickable citations in 92% of answers. Perplexity visits ~10 pages per
  query but cites only 3-4. Ecosystem'
practice_type: measurement
confidence: verified
source: {url: 'https://www.cambridge.org/core/journals/data-and-policy/article/attribution-crisis-in-llm-search-results-estimating-ecosystem-exploitation/170DD0B88E5F5AEA8F69F2E9AF1328E3',
  platform: web}
published: 2026-04-15
updated: 2026-07-17
locale: en
tags: [attribution-gap, citation-efficiency, ecosystem-exploitation, academic-research]
difficulty: advanced
related: [ai-attribution-gap-54x-undercount, claude-attribution-gap-ga4-vs-survey]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Cambridge Data & Policy (April 2026) analyzes ~14,000 LMArena conversation logs with search-enabled LLMs. Three exploitation patterns: (1) no search — 34% Gemini and 24% GPT-4o answers generated without fetching online content; (2) no citation — Gemini provides 0 clickable citations in 92% of answers; (3) high-volume low-credit — Perplexity Sonar visits ~10 relevant pages per query but cites only 3-4.

## Details
Negative binomial hurdle model: average query by Gemini or Sonar leaves ~3 relevant websites uncited. GPT-4o's smaller uncited gap explained by selective log disclosures, not better attribution. Citation efficiency varies 0.19-0.45 per additional URL visited across model variants. Upgrading reasoning module can double efficiency. Perplexity exhibits highest ecosystem exploitation: ~10 median sites visited with 5.0 median attribution gap. Best-in-class variants yield ~0.43 citations/extra URL vs baseline ~0.19. RAG implementation choices can more than double payoff from each additional page.
