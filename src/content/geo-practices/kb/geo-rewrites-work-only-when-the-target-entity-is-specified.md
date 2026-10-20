---
title: GEO Rewrites Work Only When the Target Entity Is Specified
description: 'VoteGEO-Bench, 2,939 query cells across US and Japanese elections: target-unspecified
  rewrites produced one significant gain in 36 settings, target-specified rewrites
  24.'
practice_type: content
hub: content
confidence: verified
source: {url: 'https://arxiv.org/html/2610.21330v1', platform: arxiv, author: 'Shiqi
    Zhang, Xiaokui Xiao'}
published: 2026-10-20
updated: 2026-10-20
locale: en
tags: [rewriting, entity-targeting, research, benchmarking]
difficulty: advanced
related: [restructure-not-rewrite-17pct-lift, retrieval-first-geo-citation-rewrites-can-degrade-retrieval-and-reranking]
conflicts_with: []
manual: false
---
## Summary
An arXiv benchmark covering 2,939 query cells found target-unspecified GEO rewrites rarely increased exposure: one significant positive result across 36 settings, versus 24 for rewrites that explicitly named the target. Structure strategies gained up to 4.28 points of mention coverage on top-tier targets, while evidence and style strategies moved little.

## Details
Setup: 28,200 election query cells, 17,251 webpages, 11 rewriting strategies, three engines, temperature 0.

- Because 92% of US pages mention both major parties, a rewrite without a stated target does not tell the engine whose visibility should rise.
- Content implication: name the entity you want credited in headings and claims.
- Prefer restructuring and comparative argumentation over adding quotes or synonyms, which produced the weakest effects.
