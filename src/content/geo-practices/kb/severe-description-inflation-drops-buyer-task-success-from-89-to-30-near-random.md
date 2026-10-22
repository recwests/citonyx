---
title: Severe Description Inflation Drops Buyer Task Success From 89% to 30%, Near
  Random
description: 'When listings stop distinguishing tools buyer agents pick by list position:
  Amazon task success fell 89% to 30% (random 28%), Instagram 77% to 40%.'
practice_type: measurement
confidence: verified
source: {url: 'https://arxiv.org/html/2610.28454', platform: arxiv}
published: 2026-10-22
updated: 2026-10-22
locale: en
tags: [agentic-search, position-bias, citation-quality, tool-selection]
difficulty: advanced
related: [seller-agents-invent-their-own-geo-300-character-tool-descriptions-inflate-unprompted,
  unsupported-listing-claims-differ-7-9x-by-model-gemini-3-8-flash-4-7-per-description]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Under mild inflation buyer agents kept their task success, but under severe inflation descriptions converged (Jaccard similarity rose from 0.1 to 0.6-0.8) and buyers fell back on list position: Amazon success dropped from 89% to about 30% against a 28% random baseline, and Instagram from 77% to 40%.

## Details
- The most capable tool lost at least ten points of choice share in 7 of 10 seller-model and platform combinations, falling from about 63% to as low as 11% on Amazon.
- Tools that answered almost nothing were chosen 867-1,926 times per market once they described themselves as full scrapers; under original descriptions no buyer picked them.
- Lesson: when every option makes the same claims, position in the candidate list becomes the ranking signal, which is also how over-optimised corpora degrade answer quality.
- Buyer agents were Claude Code (Opus 5) and Codex (GPT-5.6 Sol), and effects replicated across both, so this is not one harness's quirk.
