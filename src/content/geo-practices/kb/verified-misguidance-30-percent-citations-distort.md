---
title: 30.6% of AI Citations Distort Their Sources — Verified Misguidance Pattern
description: 'CITETRACE (May 2026): 11,200 queries, 112K responses, 761K citation
  pairs across 10 models. 30.6% citations distort source meaning. 96% of users encounter
  at least one misleading citation per'
practice_type: measurement
confidence: verified
source: {url: 'https://www.alphaxiv.org/abs/2605.28565', platform: web, author: CITETRACE}
published: 2026-05-15
updated: 2026-07-17
locale: en
tags: [citation-quality, verified-misguidance, hallucination, academic-research]
difficulty: advanced
related: [chatgpt-hallucination-rate-38-percent-citedash, perplexity-six-stage-rag-pipeline]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
CITETRACE dataset (11,200 queries, 112K responses, 761K citation pairs across 10 models and 5 providers) traces full citation chain: query → retrieved source → generated answer. 30.6% of citations distort their source meaning. 27.1% originate from domain-inappropriate sources. Provider differences explain 88-96% of citation quality variance — source selection governed more by factors beyond individual model capability than by LLMs themselves.

## Details
Three-dimension evaluation framework: intent-purpose alignment, source suitability, answer-source fidelity. Expert-validated matrices and five-level fidelity rubric applied. A 'Verified Misguidance' pattern emerges: models cite real, accessible sources yet systematically fail. Fidelity-suitability trade-off: faithful models select inappropriate sources and vice versa. In YMYL domains, suitability failure rate nearly doubles. Up to 96% of users encounter at least one structurally misleading citation per response. 28 Stack Exchange communities sampled. First resource for diagnosing structural citation failures in deployed search-augmented systems.
