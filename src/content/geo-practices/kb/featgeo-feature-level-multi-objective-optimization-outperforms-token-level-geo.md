---
title: 'FeatGEO: feature-level multi-objective optimization outperforms token-level
  GEO'
description: 'arXiv paper (2604.19113): FeatGEO abstracts webpages into structural,
  content, and linguistic properties for optimization. Consistently beats token-level
  baselines across 3 engines on GEO-Bench.'
practice_type: tools
confidence: experimental
source: {url: 'https://arxiv.org/abs/2604.19113', platform: web}
published: 2026-07-21
updated: 2026-07-21
locale: en
tags: [featgeo, feature-optimization, geo-bench, multi-objective]
difficulty: advanced
related: []
conflicts_with: []
manual: false
hub: tools
---
## Summary
FeatGEO (arXiv 2604.19113, Apr 2026) proposes a feature-level multi-objective optimization framework for GEO that abstracts webpages into interpretable structural, content, and linguistic properties. Unlike token-level text rewriting, FeatGEO optimizes over a feature space and uses a language model to realize configurations into text. Experiments on GEO-Bench across 3 generative engines show consistent citation visibility improvements while maintaining content quality.

## Details
Key finding: citation behavior is more strongly influenced by document-level content properties than by isolated lexical edits. Learned feature configurations generalize across language models of different scales. Decouples high-level optimization from surface-level generation. Addresses the trade-off between citation visibility and content quality. Represents a shift from ad hoc GEO rules to principled feature-based optimization.
