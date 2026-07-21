---
title: 'AgenticGEO: self-evolving agentic system with MAP-Elites archive, 46.4% average
  gains'
description: 'arXiv (2603.20213): self-evolving agentic GEO using MAP-Elites archive
  for diverse strategy evolution + Co-Evolving Critic. Preserves 98.1% performance
  with only 41.2% of engine feedback.'
practice_type: tools
confidence: experimental
source: {url: 'https://doi.org/10.48550/arxiv.2603.20213', platform: web}
published: 2026-07-21
updated: 2026-07-21
locale: en
tags: [agenticgeo, self-evolving, map-elites, co-evolving-critic]
difficulty: advanced
related: []
conflicts_with: []
manual: false
hub: tools
---
## Summary
AgenticGEO (arXiv 2603.20213, Mar 2026) formulates GEO as a content-conditioned control problem with self-evolving strategies. Uses MAP-Elites archive to evolve diverse compositional strategies, not fixed heuristics. Co-Evolving Critic serves as surrogate evaluator and planner, reducing expensive engine interactions. Achieves 46.4% average gains over 14 baselines across 3 datasets. Preserves 98.1% performance using only 41.2% of engine feedback. Robust cross-domain transferability demonstrated on MS MARCO and E-Commerce.

## Details
Outperforms static heuristic strategies (Keyword Stuffing, Authoritative) and Supervised Fine-Tuning baselines. On Qwen2.5-32B-Instruct: Overall 25.48 vs AutoGEO 23.71. Critic is calibrated using limited real feedback then refined through continuous self-reflection. Archive-driven co-evolution admits sublinear regret bound. Represents shift from ad hoc rule engineering to structured learning process for GEO.
