---
title: Deep Research Agents Achieve Only 39-77% Factual Accuracy Despite 94%+ Link
  Validity
description: 'arXiv (May 2026): 14 LLMs benchmarked. Frontier models: link validity
  94%+, relevance 80%+, but factual accuracy only 39-77%. More retrieval (2→150 tool
  calls) drops accuracy by 42%.'
practice_type: measurement
confidence: verified
source: {url: 'https://arxiv.org/html/2605.06635', platform: web}
published: 2026-05-10
updated: 2026-07-17
locale: en
tags: [deep-research, factual-accuracy, retrieval-scaling, benchmarking]
difficulty: advanced
related: [perplexity-six-stage-rag-pipeline, verified-misguidance-30-percent-citations-distort]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
First source attribution evaluation framework for LLM deep research agents using reproducible AST parser to extract/evaluate inline citations from Markdown reports. 14 closed/open-source LLMs across 3 dimensions: link validity (94%+), topical relevance (80%+), but factual accuracy against source content only 39-77%. Ablation: scaling tool calls from 2 to 150 drops Fact Check accuracy ~42%.

## Details
Even strongest frontier models show critical disconnect between surface-level citation quality and factual reliability. Framework retrieves actual cited content enabling human/model evaluators to judge each citation against source. Rubric-based LLM-as-a-judge calibrated through human review. More retrieval does NOT produce more accurate citations — contrary to intuition. For GEO practitioners: deep research outputs may cite sources correctly but still misrepresent them. Citation surface quality (valid links) is not a proxy for factual reliability.
