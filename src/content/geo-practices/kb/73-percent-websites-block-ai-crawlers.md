---
title: 73% of Websites Have Technical Barriers Blocking AI Crawlers
description: OtterlyAI study of 1M+ citations found 73% of sites block AI crawlers
  via robots.txt, CDN rules, or JS rendering issues. Fix crawler access before anything
  else.
practice_type: technical
hub: technical
confidence: experimental
source: {url: 'https://otterly.ai/blog/the-ai-citations-report-2026', platform: web,
  author: Thomas Peham}
published: 2026-07-06
updated: 2026-08-01
locale: en
tags: [technical-seo, robots-txt]
difficulty: beginner
related: [schema-markup-2-3x-citation-lift]
conflicts_with: []
manual: false
---
## Summary
OtterlyAI analyzed 1M+ citations across ChatGPT, Perplexity, and Google AI Overviews (Jan-Feb 2026): 73% of sites have technical barriers — robots.txt disallows, CDN user-agent rules and JavaScript-only rendering — that block GPTBot, ChatGPT-User, ClaudeBot and PerplexityBot. A perfectly written article an AI cannot fetch will never be cited, so audit crawler access before anything else.

## Details
- Fix order matters: check robots.txt for Disallow against GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, OAI-Searchbot; allowlist AI crawlers in Cloudflare/AWS/Akamai; make critical content visible without JavaScript.
- Community platforms dominate 52.5% of citations vs 47.5% brand domains.
- Reddit is the #1 most-cited domain across ChatGPT, AI Overviews and Perplexity.
- Google AI Overviews show the strongest brand preference (59.8% of citations) vs ChatGPT 44.7% and Perplexity 28.9%.
- Content structured with schema markup, chunked format and clear source attribution gets 3-5x more citations.
- Caveat: vendor-conducted study, so treat figures as directional; check server logs for crawler names and treat each engine as a separate citation environment.
