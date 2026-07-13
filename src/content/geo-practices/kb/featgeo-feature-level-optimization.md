---
title: 'FeatGEO: Feature-Level Page Optimization Outperforms Token-Level Rewriting
  for AI Citation'
description: arXiv paper (Apr 2026) abstracts pages into structural, content, and
  linguistic features. Optimizing at feature level generalizes across LLMs of different
  scales. Outperforms token-level baselines.
practice_type: tools
confidence: experimental
source: {url: 'https://arxiv.org/abs/2604.19113', platform: arxiv, author: FeatGEO
    (arXiv)}
published: 2026-04-30
updated: 2026-07-13
locale: en
tags: [featgeo, feature-optimization, multi-objective, document-properties, research]
difficulty: advanced
related: [document-structure-17-percent-citation-lift, data-rich-content-19-stats-5x-citations]
conflicts_with: []
manual: false
hub: tools
---
## Summary
FeatGEO (arXiv, April 2026) introduces a framework that abstracts pages into structural, content, and linguistic features — optimizing at the feature level instead of rewriting individual tokens. Citation behavior is influenced more by document-level content properties than isolated lexical edits. Learned feature configurations generalize across LLMs of different scales.

## Details
The FeatGEO framework decomposes pages into three feature layers: structural (headings, schema, formatting), content (data density, claim types, source attribution), and linguistic (readability, sentence length, vocabulary). By optimizing features rather than rewriting text, the method avoids overfitting to any single LLM. The framework is particularly valuable for enterprise-scale content where per-page rewriting is impractical. Generalization across model scales (GPT-4o, Llama-3, Claude-3.5) confirms feature optimization as a durable approach.
