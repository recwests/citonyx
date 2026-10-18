---
title: Bing AI Performance Report Is the Only First-Party Citation Analytics
description: BWT AI Performance (public preview Feb 10, 2026) shows real citation
  events, cited URLs and grounding queries; the Oct 2026 Topics Portfolio beta clusters
  them into topics and opportunity queries.
practice_type: measurement
hub: measurement
confidence: verified
source: {url: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
  platform: web}
published: 2026-02-10
updated: 2026-10-18
locale: en
tags: [bing, ai-performance, copilot, analytics, citation-tracking, first-party-data]
difficulty: beginner
related: [bing-oai-searchbot-chatgpt-pipeline]
conflicts_with: []
manual: false
---
## Summary
Unlike Google Search Console (no AIO citation export) and ChatGPT/Perplexity/Claude (no webmaster tools), Bing exposes real citation events, cited-page URLs and the grounding queries that retrieved content. Microsoft frames the release as an early step toward Generative Engine Optimization tooling. It is free and underused; the October 2026 Topics Portfolio beta adds topic clusters and opportunity queries.

## Details
Grounding queries reveal the reformulated search phrases Copilot generates internally to retrieve content, not the user's original prompts. Limitations: the report shows citation frequency, not clicks or conversions, and it under-counts total ChatGPT visibility because it excludes the separate OAI-SearchBot pathway.
Topics Portfolio (added 13 October 2026, beta) clusters grounding queries where a site is cited into topics and lists opportunity queries where competitors are cited instead; each row shows Topic Size, Sites Cited and Queries. Bing warns the topic classification is AI-generated and can misfire, brand-name queries can surface as false opportunities, it only shows topics with sufficient ecosystem activity (small sites may see nothing), and the volumes are approximate ranges rather than exact counts. Because roughly 85% of citations are unique to a single engine, a Bing gap does not imply a ChatGPT gap. Treat high grounding events with low visible citations as an optimization queue: content is read but loses to alternatives.
