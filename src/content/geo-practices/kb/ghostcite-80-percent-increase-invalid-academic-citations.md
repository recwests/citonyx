---
title: GhostCite — 80.9% Increase in Invalid Citations in Published AI/ML Papers (2025)
description: 'arXiv (2026): 56,381 papers, 2.2M citations analyzed. 1.07% contain
  invalid citations, +80.9% in 2025. LLM hallucination rates 14-95% across 13 models.
  Error propagation across papers documented.'
practice_type: measurement
confidence: verified
source: {url: 'https://arxiv.org/html/2602.06718v2', platform: web}
published: 2026-02-10
updated: 2026-07-17
locale: en
tags: [ghost-citations, academic-integrity, hallucination-benchmark, paper-quality]
difficulty: advanced
related: [semrush-sixty-two-percent-ghost-citations, chatgpt-hallucination-rate-38-percent-citedash]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Three complementary experiments: (1) 13 LLMs benchmarked on citation generation — all hallucinate at 14-95% rates (6.7x gap). LLMs preferentially hallucinate recent publications (27.6% for 2000 → 98.8% for 2025). (2) 2.2M citations from 56,381 papers at top venues (NeurIPS, ICML, AAAI, etc., 2020-2025). 739 confirmed invalid citations across 604 papers (1.07%). 80.9% increase in 2025. 68 papers (11.3%) contain multiple invalid citations (batch-generation pattern).

## Details
Repeated invalid citations propagate across papers — same erroneous title appears in 16 papers, suggesting copy from contaminated sources. CiteVerifier framework: cascaded multi-source retrieval + calibrated similarity matching. Survey of 97 researchers: 87.2% use AI tools, 76.7% of reviewers don't thoroughly check references, 74.5% view peer review as ineffective at catching citation errors. ICLR 2026 established explicit AI usage guidelines allowing desk rejection for hallucinated refs. BibTeX study: only 50.9% LLM-generated entries fully correct.
