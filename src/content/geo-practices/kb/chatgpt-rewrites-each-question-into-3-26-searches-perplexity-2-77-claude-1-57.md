---
title: ChatGPT Rewrites Each Question Into 3.26 Searches, Perplexity 2.77, Claude
  1.57
description: 'Per-answer query rewriting differs by engine: 3.26 queries on ChatGPT,
  2.77 on Perplexity, 1.57 on Claude, which drives how wide each engine''s citation
  pool gets.'
practice_type: technical
hub: technical
confidence: experimental
source: {url: 'https://bugviso.com/blog/ai-search-citation-sources', platform: web,
  author: BugViso}
published: 2026-10-22
updated: 2026-10-22
locale: en
tags: [query-fan-out, citation-factors, per-engine-strategy, citation-behavior]
difficulty: advanced
related: []
conflicts_with: [query-fan-out-8-to-12-subqueries]
manual: false
---
## Summary
Logging its own 400-answer run, BugViso measured the fan-out each engine performs before answering: ChatGPT averaged 3.26 search queries per answer, Perplexity 2.77 and Claude 1.57. Perplexity also cited 14.4 sources per answer from 376 distinct domains, while ChatGPT cited 2.1 sources from 84 domains over the same 100 answers.

## Details
- More rewritten queries reach more long-tail pages, which helps explain Perplexity's wide citation net; fewer queries concentrate the pool and make each slot harder to win.
- Citation policy compounds the effect: Gemini grounds a source to each supported sentence, Perplexity lists everything it read, ChatGPT attaches a couple of sources to its claims.
- The retrieval stack also differs, since Gemini grounds on Google Search while the others run their own tooling, so a page that feeds one engine may never reach another.
- Note the conflict: Otterly's tool-based count reports 8-12 sub-queries per prompt, so treat absolute fan-out as method-dependent and use it only to size the competing URL set.
