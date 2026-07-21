---
title: 'MAGEO: multi-agent GEO framework with engine-specific strategy learning'
description: 'arXiv (2604.19516): 4-agent framework (Preference, Planner, Editor,
  Evaluator) with reusable Skill Bank. Achieves 3x WLV over heuristic baselines. Engine-specific
  preference modeling adds ~19% lift.'
practice_type: tools
confidence: experimental
source: {url: 'https://arxiv.org/html/2604.19516v1', platform: web}
published: 2026-07-21
updated: 2026-07-21
locale: en
tags: [mageo, multi-agent, skill-learning, engine-specific]
difficulty: advanced
related: []
conflicts_with: []
manual: false
hub: tools
---
## Summary
MAGEO (arXiv 2604.19516, Apr 2026) reframes GEO as strategy learning with a multi-agent framework. Four coordinated agents (Preference, Planner, Editor, Evaluator) collaborate through iterative Generate-Evaluate-Select loops. Validated editing patterns are distilled into reusable engine-specific skills. Achieves WLV 4.52 on GPT-5.2 (vs 1.33 for best heuristic). Engine-specific preference modeling contributes ~19%, Skill Bank contributes ~13%. Introduces MSME-GEO-Bench for multi-engine evaluation.

## Details
Twin Branch Evaluation Protocol enables causal attribution of content edits in black-box engines. DSV-CF dual-axis metric unifies semantic visibility with attribution accuracy while penalizing spurious citations. MAGEO Lite uses ~2.9x tokens of GEO Quote but achieves ~3x WLV. False citation ratio falls from 0.058 (GEO Quote) to 0.043 (MAGEO Full). Strategy skill distillation transfers optimization experience across sessions and engines.
