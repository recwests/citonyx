---
title: 'Split robots.txt Strategy: Allow Retrieval Bots, Block Training Bots'
description: 89% of AI crawler traffic is training/mixed, only 8% search-related.
  Allow OAI-SearchBot, PerplexityBot, Claude-Web. Block GPTBot, CCBot, Bytespider.
practice_type: technical
confidence: verified
source: {url: 'https://www.adfirm.net/blog/ai-crawler-control-2026/', platform: web}
published: 2026-07-19
updated: 2026-07-19
locale: en
tags: [robots-txt, crawler-management, training-vs-retrieval]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
hub: technical
---
## Summary

In 2026, AI crawlers probe constantly but value is uneven. Anthropic's training crawler hits 20,000+ pages per single referral sent. Best practice: allow OAI-SearchBot (ChatGPT citations), PerplexityBot, Google-Extended (AI Overviews); block GPTBot, CCBot, Bytespider, Meta-ExternalAgent. Use llms.txt for efficient brand fact delivery.

## Details

OpenAI runs two crawlers: OAI-SearchBot (citation/search, allow) and GPTBot (training, block). Same pattern for Anthropic (Claude-SearchBot vs ClaudeBot). Google-Extended controls Gemini training without affecting Googlebot. 73% of websites have no specific AI crawler rules. Audit access logs monthly — training scrapers often outnumber retrievers 5:1.
