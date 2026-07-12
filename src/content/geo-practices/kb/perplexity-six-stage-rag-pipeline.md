---
title: Perplexity Runs 6-Stage RAG Pipeline — Only 5-10 Pages Retrieved Become 3-4
  Cited
description: 'AuthorityTech analysis reveals Perplexity''s 6-stage pipeline: retrieval
  → L3 XGBoost entity gate → recency boost → only 3-4 of 5-10 retrieved pages actually
  cited.'
practice_type: technical
confidence: verified
source: {url: 'https://authoritytech.io/blog/how-perplexity-selects-sources-algorithm-2026',
  platform: web, author: AuthorityTech}
published: 2026-07-06
updated: 2026-07-12
locale: en
tags: [perplexity, rag, algorithm, citation-behavior]
difficulty: advanced
related: [perplexity-cites-2x-more-than-chatgpt-claude, perplexity-freshness-premium-45-points]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Perplexity uses a 6-stage RAG pipeline: retrieves 5-10 pages, then filters through an L3 XGBoost gate evaluating entity clarity. Recency within 30 days provides measurable boost. Only 3-4 pages from the initial retrieval are ultimately cited. Frontier models achieve only 39-77% factual accuracy at final stage.

## Details
This pipeline explains Perplexity's unique citation behavior. The L3 XGBoost gate evaluates entity clarity as a core signal — pages with clear entity definitions and structured data pass more reliably. Entity ambiguity or missing schema causes early-stage filtering. Even the most advanced frontier models achieve only 39-77% factual accuracy in Perplexity's final answer stage, meaning citations themselves may contain inaccuracies. For brands: entity clarity and structured data are prerequisites for Perplexity citations.
