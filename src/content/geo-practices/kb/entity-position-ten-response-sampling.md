---
title: Entity Position in AI Search — How to Track with 10-Response Sampling
description: 'Graphite''s methodology for measuring entity position in AI responses:
  10 responses gives ~1 position error. Position is probabilistic but measurable.'
practice_type: measurement
confidence: verified
source: {url: 'https://graphite.io/five-percent/how-to-track-entity-position-in-ai',
  platform: web, author: Gregory Druck}
published: 2026-04-22
updated: 2026-07-13
locale: en
tags: [entity-position, sampling, methodology]
difficulty: advanced
related: [platform-citation-divergence-breadth-depth, prompt-content-alignment-dominant-citation-predictor]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Graphite establishes entity position as a measurable metric in AI responses. Position = rank in list averaged over responses. 10 responses = mean absolute error ~1 position (90.6% within 2 positions). Sequential sampling reduces responses needed by 57%. Focus on visibility first, position second.
## Details
Based on 200 entity comparison prompts, 400 responses each from GPT-5.2. Position defined same way as Google Search Console (average rank when entity appears). Key findings: (1) visibility (how often entity appears) and position correlated — higher visibility = better position, (2) top positions more stable than bottom, (3) 10 responses sufficient for coarse tracking, (4) sequential sampling can reduce responses 57% for required precision. Formula: t-distribution confidence interval for mean. Standard deviation of position: 37% of entities < 2.0. Practical: measure visibility first, only measure position once visibility is high.
