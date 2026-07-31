---
title: Bing AI Performance Report Is the Only First-Party Citation Analytics
description: BWT AI Performance dashboard (public preview Feb 10, 2026) reveals real
  citation events, cited URLs, and grounding queries from Copilot/Bing AI/ChatGPT-linked
  surfaces. Free and underused.
practice_type: measurement
confidence: verified
source: {url: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
  platform: web, author: Microsoft Bing}
published: 2026-02-10
updated: 2026-07-31
locale: en
tags: [bing, ai-performance, copilot, analytics, citation-tracking, first-party-data]
difficulty: beginner
related: [bing-oai-searchbot-chatgpt-pipeline]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
Unlike Google Search Console (no AIO citation export) and ChatGPT/Perplexity/Claude (no webmaster tools), Bing exposes real citation events, cited-page URLs, and the grounding queries that retrieved content. Microsoft frames the release as "an early step toward Generative Engine Optimization (GEO) tooling." It reports total citations, average cited pages, and page-level visibility trends across Copilot and Bing AI summaries. Free and underused.

## Details
Grounding queries reveal the reformulated search phrases Copilot generates internally to retrieve content — not the user's original prompts. Limitations: the report shows citation frequency, not clicks or conversions, and currently lacks API access (confirmed on Microsoft's backlog by Fabrice Canel). It under-counts total ChatGPT visibility because it excludes the separate OAI-SearchBot pathway. Google has no equivalent dashboard, so Bing data is the only first-party citation source; patterns found there (clear headings, tables, FAQ structure, freshness) are expected to transfer to other engines. Treat "high grounding events but low visible citations" as an optimization queue: content is read but loses to alternatives.
