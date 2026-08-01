---
title: Perplexity Runs 6-Stage RAG Pipeline — Only 5-10 Pages Retrieved Become 3-4
  Cited
description: 'Perplexity''s pipeline (BM25 + dense retriever + XGBoost reranker, 0.7
  threshold) retrieves 5-10 pages and cites 3-4. Crawler access is a binary gate:
  robots.txt/Cloudflare blocks remove pages'
practice_type: technical
hub: technical
confidence: experimental
source: {url: 'https://theplusaddons.com/blog/how-perplexity-ai-cites-wordpress/',
  platform: web}
published: 2026-07-06
updated: 2026-08-01
locale: en
tags: [perplexity, rag, algorithm, technical-seo, perplexitybot]
difficulty: advanced
related: [perplexity-cites-2x-more-than-chatgpt-claude, perplexity-freshness-premium-45-points]
conflicts_with: []
manual: false
---
## Summary
Perplexity runs a live six-stage retrieval pipeline — BM25 + dense retriever + XGBoost reranker with a 0.7 quality threshold — that retrieves 5-10 pages and cites only 3-4. Crawler access is a binary gate: PerplexityBot respects robots.txt, and pages blocked there or by a Cloudflare WAF cannot appear in answers at all (ThePlusAddons reverse-engineering).

## Details
- The L3 XGBoost gate evaluates entity clarity — pages with clear entity definitions and structured data pass more reliably; entity ambiguity or missing schema causes early-stage filtering.
- PerplexityBot respects robots.txt, so blocked pages cannot appear in answers; Cloudflare WAF silently blocks PerplexityBot on many sites; no amount of content quality compensates for a block.
- Action: allowlist AI crawlers, check Cloudflare, ensure clean indexation, canonicals and server-rendered HTML (most AI crawlers do not execute JavaScript), and expose llms.txt as an optional shortcut.
- Recency within 30 days provides a measurable boost.
- Even the most advanced frontier models achieve only 39-77% factual accuracy at the final answer stage, so citations themselves may contain inaccuracies.
