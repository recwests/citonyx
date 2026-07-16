---
title: Search and Training AI Crawlers Are Separate — Allow Citation Bots, Block Training
  Only If Deliberate
description: OAI-SearchBot/PerplexityBot/ClaudeBot power citations; GPTBot/Google-Extended
  affect training only. Blocking the wrong one invisibilizes you.
practice_type: technical
confidence: verified
source: {url: 'https://okara.ai/blog/robots-txt-for-ai-crawlers', platform: web, author: Okara
    AI}
published: 2026-06-24
updated: 2026-07-16
locale: en
tags: [robots-txt, technical-seo, citation-access]
difficulty: beginner
related: [schema-markup-2-3x-citation-lift, anthropic-three-crawler-bots]
conflicts_with: []
manual: false
hub: technical
---
## Summary
AI crawlers split into search/citation bots and training bots. Blocking GPTBot only opts you out of model training; blocking OAI-SearchBot, PerplexityBot, or ClaudeBot removes you from that engine's answers entirely. They are governed by separate robots.txt lines.

## Details
OpenAI's OAI-SearchBot powers ChatGPT citations while GPTBot is training-only. Google-Extended opts you out of Gemini/Vertex generative use but not Search or AI Overviews. NYT-style blanket blocks make brands absent from AI answers. If visibility is the goal, allow search/index crawlers unconditionally and make a separate, deliberate decision on training bots. Verify with a 200 response and CDN/WAF allowlist checks — a misconfigured block on the citation bot is the silent killer of GEO efforts.
