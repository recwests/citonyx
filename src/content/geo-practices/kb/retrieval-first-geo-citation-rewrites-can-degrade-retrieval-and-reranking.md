---
title: 'Retrieval-first GEO: citation rewrites can degrade retrieval and reranking'
description: July 2026 critical survey of 45 GEO studies and SAGEO Arena preprint
  found that optimizing for citations can actually impair retrieval. Technical accessibility
  must come before citation optimization.
practice_type: technical
confidence: verified
source: {url: 'https://neuraladx.com/why-ai-citation-optimisation-can-backfire-retrieval-first/',
  platform: web}
published: 2026-07-01
updated: 2026-07-01
locale: en
tags: [retrieval-first, citation-degradation, pipeline, sageo, survey]
difficulty: advanced
related: []
conflicts_with: []
manual: false
hub: technical
---
## Summary
A July 2026 critical survey of 45 GEO studies and the SAGEO Arena preprint found that citation-oriented content rewrites can impair retrieval and reranking. Optimizing for quotability may alter semantic focus and relevance signals, degrading end-to-end performance.

## Details
The July 2026 GEO survey describes a pipeline spanning search activation, crawling/indexing, retrieval, reranking/context allocation, citation, prominence, and user behavior. Its key caution: 'citation-oriented rewrites can impair retrieval.' The SAGEO Arena preprint (Feb 2026) evaluates optimization in a fuller retrieval-reranking-generation setting and reports existing approaches can degrade performance. Google states its generative features use RAG to retrieve relevant pages from its Search index — a page must be indexed and eligible. OpenAI says OAI-SearchBot access is needed for full content inclusion. Perplexity says blocking PerplexityBot prevents full text indexing. Only 38% of Google AI Overview citations came from top-10 organic results in early 2026 (down from 76% a year earlier). Strategy: prioritize crawlability, indexation, and semantic relevance first; apply citation optimization only after technical accessibility is established.
