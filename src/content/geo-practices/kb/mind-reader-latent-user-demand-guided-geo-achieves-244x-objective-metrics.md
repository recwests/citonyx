---
title: 'Mind Reader: latent user demand-guided GEO achieves 2.44x objective metrics'
description: 'ACL 2026 paper: Decomposition-Recombination Query Augmentation + Reasoning
  Coverage Content Optimization. Up to 2.44x objective metrics, 1.23x subjective over
  baselines on GEO-Bench.'
practice_type: tools
hub: tools
confidence: experimental
source: {url: 'https://aclanthology.org/2026.acl-long.1894.pdf', platform: web}
published: 2026-07-21
updated: 2026-07-21
locale: en
tags: [mind-reader, latent-demands, content-strategy, rl]
difficulty: advanced
related: []
conflicts_with: []
manual: false
---
## Summary
Mind Reader (ACL 2026) addresses the limitation of existing GEO methods that only optimize for explicit query tokens, ignoring latent user search demands. Two modules: (1) DRQA — decomposes queries into diverse semantic perspectives via entity graph random walks, captures latent intents, recombines into variants; (2) RCCO — uses RL with reasoning-coverage reward to align content with GSE reasoning. Up to 2.44x objective, 1.23x subjective improvement. Introduces PC-GEO dataset.

## Details
Key insight: generative search engines infer user search demands through multi-step reasoning, not just keyword matching. DRQA enriches queries with latent semantics. RCCO encourages content to cover both query-specific personalized and cross-query shared reasoning information. RL-based optimization with reasoning-coverage reward signal. Models the underlying user demand rather than surface-level query tokens. Published at ACL 2026 main conference.
