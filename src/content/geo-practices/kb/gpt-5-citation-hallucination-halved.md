---
title: GPT-5 Nano Halved Citation Hallucination vs GPT-4o — Claude Haiku 4.5 Increased
  8%
description: Naser audited 10 LLMs generating 69,557 citations. GPT-5-mini hallucinates
  at 11.4% (down from GPT-4o-mini 45.3%). Multi-model consensus = 95.6% accuracy.
practice_type: measurement
confidence: verified
source: {url: 'https://arxiv.org/abs/2603.03299', platform: arxiv, author: Naser}
published: 2026-02-01
updated: 2026-07-07
locale: en
tags: [citation-hallucination, chatgpt, claude, multi-model]
difficulty: advanced
related: []
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Naser (2026) audited 10 LLMs generating 69,557 citations across 4 domains. Hallucination rates ranged from 11.4% (GPT-5-mini) to 56.8% (kimi-K2.5). OpenAI reduced hallucination 33.9% between generations; Anthropic increased 8%. No model hallucinates when unprompted — hallucination is prompt-induced.

## Details
Multi-model consensus filter: 3+ LLMs citing same work yields 95.6% accuracy (5.8x improvement over single model's 16.5%). Within-prompt repetition: 2+ replications = 88.9% accuracy. GhostCite (arXiv:2602.06718): 13 LLMs hallucinate at 14.23-94.93%, with 80.9% increase in paper invalid citations in 2025. CITE-AI benchmark: only 64.2% of AI-cited papers actually exist; only 41.8% attributable to claimed paper. Practical implication: always verify AI citations independently.
