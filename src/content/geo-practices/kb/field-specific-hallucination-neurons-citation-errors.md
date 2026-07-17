---
title: Field-Specific Hallucination Neurons (FH-Neurons) Causally Linked to Citation
  Errors
description: 'arXiv (April 2026): 9 models, 108K references tested. Author names fail
  most. Reasoning distillation degrades recall. Sparse FH-neurons identified. Suppressing
  them improves accuracy 6pp.'
practice_type: measurement
confidence: verified
source: {url: 'https://arxiv.org/pdf/2604.18880', platform: web}
published: 2026-04-25
updated: 2026-07-17
locale: en
tags: [hallucination-neurons, model-interpretability, citation-mechanisms, mechanistic-interpretability]
difficulty: advanced
related: [chatgpt-hallucination-rate-38-percent-citedash, ghostcite-80-percent-increase-invalid-academic-citations]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
First study localizing citation hallucination to specific neurons inside LLMs. Author names fail far more often than other bibliographic fields across all models. Reasoning-oriented distillation (DeepSeek-R1 variants) degrades recall severely — 0.4% total accuracy vs non-distilled counterpart. Elastic-net regularization identifies sparse field-specific FH-neurons in Qwen2.5-32B-Instruct that causally drive citation hallucination.

## Details
Probes trained on one field transfer at near-chance to others — hallucination signals don't generalize across fields (author vs title vs year). Causal intervention: amplifying FH-neurons at β=4.0 collapses Title accuracy from 76.3% to 4.7%, Authors from 17.5% to 8.5%. Suppressing FH-neurons at β=0 raises Title accuracy 6.5pp, Authors 6.2pp. Random ablation uniformly degrades all fields. Partial positive spillover to non-targeted fields under moderate suppression. Enables lightweight detection and mitigation of citation hallucination using internal model signals alone, without external retrieval.
