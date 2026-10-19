---
title: 'SIGIR ''26: Four gatekeeper factors decisive for AI citation (schema markup
  NOT tested)'
description: 252K-trial controlled study across 6 LLMs found topic match, price, freshness
  timestamp, and list position are decisive for AI citation (odds ratios above 100);
  schema was never in the 18-factor test.
practice_type: content
hub: content
confidence: verified
source: {url: 'https://auspia.ai/blog/how-to-get-cited-by-ai-search-fix-the-4-factors-that-matter',
  platform: web}
published: 2026-05-01
updated: 2026-10-19
locale: en
tags: [sigir, citation-factors, schema-myth, research, gatekeeper, rag]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
---
## Summary
A controlled 252,000-trial SIGIR '26 study across 6 LLMs found four gatekeeper factors decisive for AI citation: topic match, visible price, recent timestamp, and list position. Odds ratios ranged from 6 to over 10,000. A separate Ahrefs study of 1,885 pages found JSON-LD added no meaningful citation lift.

## Details
The viral claim that schema markup has zero effect on AI citations is technically correct but for the wrong reason: the SIGIR study (Vishwakarma et al., SIGIR '26) never tested schema at all. Its 18-factor taxonomy covered content match, completeness, trustworthiness, readability, competitive standing, and freshness. Schema was absent from all categories. The Ahrefs May 2026 controlled study of 1,885 pages adding JSON-LD vs. 4,000 controls found no meaningful citation lift on Google AI Overviews (-4.6%), AI Mode (+2.4%), or ChatGPT (+2.2%). A separate searchVIU test found major AI models don't read JSON-LD during live retrieval. Priority order for fixes: (1) topic match, (2) publish price or range, (3) update timestamp, (4) competitive positioning. Secondary factors include specs, comparisons, confident language, and evidence backing.

Merged detail from the primary source (arXiv:2605.25517, Sprinklr, SIGIR 2026):
- Design: two anonymized candidate sources differing in exactly one of 18 factors, counterbalanced order, five repeated runs, brand names replaced to remove familiarity bias.
- The four gatekeepers won the first citation in all six models with odds ratios above 100: topic relevance, explicit price information, a recent timestamp and list position.
- Secondary factors with odds ratios 2.1 to 243: missing specifications, less comprehensive coverage, hedged language, missing evidence, internal contradictions, keyword gaps and absent comparisons.
- Keyword gap alone produced odds ratios of 9.41 (Gemini 2.5), 14.4 (GPT-5 Mini) and 40.0 (GPT-5.2).
- Model sensitivity differs: Kimi-K2 was significant on 83% of factors, Gemini-2.5-Flash on 33%.
- Limits: only two injected documents and a synthetic anonymized corpus, so estimates are pairwise preferences rather than full multi-document competition.
