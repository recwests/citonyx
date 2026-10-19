---
title: Diagnosing citation failures lifts citation rates 40% while editing only 5%
  of the text
description: 'arXiv 2603.09296 (March 2026): diagnosing why a document is not cited
  and repairing it lifted citation rates 40%+ while editing just 5% of content versus
  25% for generic rewrites.'
practice_type: content
confidence: verified
source: {url: 'https://arxiv.org/abs/2603.09296', platform: arxiv}
published: 2026-10-19
updated: 2026-10-19
locale: en
tags: [citation-failures, citation-repair, long-tail]
difficulty: advanced
related: [mind-reader-latent-user-demand-guided-geo-achieves-244x-objective-metrics]
conflicts_with: []
manual: false
hub: content
---
## Summary
An arXiv paper introduces citation-failure diagnosis for GEO: instead of applying generic rewrite rules, AgentGEO identifies why a specific document is not cited and applies targeted repairs. It reports over 40% relative citation-rate improvement while modifying only 5% of content, versus 25% for baseline methods.

## Details
- "Diagnosing and Repairing Citation Failures in Generative Engine Optimization" (arXiv:2603.09296, March 2026) argues existing GEO methods measure influence rather than citation.
- The authors build a taxonomy of citation-failure modes, an agentic repair system (AgentGEO) that iterates until a citation is achieved, and a document-centric benchmark testing generalisation across held-out queries.
- AgentGEO gains over 40% relative citation-rate improvement while editing only 5% of content, against 25% for generic baselines.
- The paper also finds generic optimisation can harm long-tail content, and that some documents cannot be fixed by optimisation alone. Caveat: preprint, benchmark conditions.
