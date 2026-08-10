---
title: AutoGEO auto-extracts engine preferences and rewrites content for higher LLM
  visibility (ICLR 2026)
description: ICLR 2026 framework extracts content-preference rules from generative
  engines and rewrites documents to raise visibility while preserving utility; AutoGEOMini
  trains a cost-effective RL optimizer.
practice_type: tools
hub: tools
confidence: verified
source: {url: 'https://github.com/cxcscmu/AutoGEO', platform: github}
published: 2026-08-10
updated: 2026-08-10
locale: en
tags: [framework, rule-extraction, reinforcement-learning, auto-optimization, measurement,
  geoscore]
difficulty: advanced
related: []
conflicts_with: []
manual: false
---
## Summary
AutoGEO (ICLR 2026, GitHub cxcscmu/AutoGEO) automates Generative Engine Optimization by mining each generative engine's content preferences and rewriting documents to maximize visibility while preserving utility, evaluated with GEO score (visibility) and GEU score (utility) across three engines and three datasets.

## Details
- Three components: rule extraction (mines preferences per engine and dataset), AutoGEOAPI (prompt-based rewriter), and AutoGEOMini (a Qwen1.7B model optimized with GRPO reinforcement learning).
- Supports Gemini, GPT, and Claude engines across Researchy-GEO, E-commerce, and GEO-Bench datasets; rule sets are engine-specific and must be re-extracted when switching engines.
- AutoGEOMini needs 2x A100-class GPUs (~4h SFT, ~48h GRPO) - a cheaper alternative to API-based rewriting at scale.
- Open source (MIT); paper: Wu, Zhong, Kim, Xiong, "What Generative Search Engines Like and How to Optimize Web Content Cooperatively".
