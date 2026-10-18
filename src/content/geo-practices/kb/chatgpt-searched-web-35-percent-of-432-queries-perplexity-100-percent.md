---
title: ChatGPT Searched the Web for Only 35% of 432 Queries; Perplexity Searched for
  100%
description: A 432-question, four-engine test on 9 Sep 2026 found ChatGPT attached
  0.9 sources per answer and searched only 35% of the time, while Perplexity attached
  16.4 and always searched.
practice_type: measurement
confidence: experimental
source: {url: 'https://isonic.ai/blog/how-we-tested-what-ai-engines-cite', platform: web}
published: 2026-10-18
updated: 2026-10-18
locale: en
tags: [citation-behavior, multi-model, reference-data, search-rate]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
hub: measurement
---
## Summary
In a 432-question test run on 9 September 2026, iSonic measured how often four engines searched the web. ChatGPT (gpt-5.5) searched for only 153 of 432 questions, 35%, and attached 0.9 sources per answer. Claude searched 52%, Gemini 50%, and Perplexity always searched, attaching 16.4 sources per answer.

## Details
Each engine was pinned to one model version and sent identical questions through DataForSEO's API with web search on. Sources attached per answer: ChatGPT 0.9, Claude 2.2, Gemini 3.4, Perplexity 16.4. When an engine answers from training rather than live search, no source is attached and no creator is credited. Caveats: one day, one topic (AI and creator work), one model per engine, and a 1,024-token output cap. Implication: a third of ChatGPT answers are unciteable because no retrieval happened at all.
