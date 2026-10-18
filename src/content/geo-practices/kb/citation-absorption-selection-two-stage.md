---
title: Citation Absorption > Citation Selection — Two-Stage Measurement
description: Being listed as a source is not the same as shaping the answer. Measure
  selection rate (appearing) and absorption score, then test claim-by-claim whether
  your facts survive in the answer.
practice_type: measurement
confidence: verified
source: {url: 'https://arxiv.org/html/2604.25707v2', platform: web}
published: 2026-04-29
updated: 2026-10-18
locale: en
tags: [absorption, selection, research, framework, claim-accuracy]
difficulty: advanced
related: [bing-ai-performance-report-citation-analytics, citation-absorption-vs-selection]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Across 602 prompts and 21k citations: ChatGPT cites fewer sources but with 0.27 mean influence (high depth); Perplexity cites about 16 per answer but only 0.065 influence. Q&A formatting alone did NOT improve absorption — evidence density (definitions, numbers, comparisons, steps) did. A citation is not influence: an answer can cite your page while describing the category with a competitor's framing.

## Details
"Evidence-container design": write modular passages, each carrying a distinct citable claim, with definitions, statistics, comparisons and procedural steps. A dashboard should track 5 metrics: selection rate, citation breadth, absorption score, support quality, coverage equity. Avoid a single visibility number.
Seerly's claim-absorption protocol (2026) tests one decision-relevant claim at a time, scoring claim inclusion and wording accuracy per prompt, engine and date: keep topic, URL, evidence set and prompts fixed, change one variable, wait for recrawl cycles, and stop when inclusion is stable. An isolated change is a lead, not proof of causation. In the same Princeton dataset, Q&A-formatted pages showed lower mean influence than non-Q&A pages.
