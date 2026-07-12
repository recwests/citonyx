---
title: Cloudflare Three-Tier AI Crawler Classification — Search, Agent, Training
description: From Sep 15, 2026, Cloudflare blocks multi-purpose crawlers by default
  on ad-supported pages. Publishers can granularly allow/block each tier.
practice_type: technical
provider: tavily
confidence: verified
source: {url: 'https://blog.cloudflare.com/content-independence-day-ai-options/',
  platform: web, author: Cloudflare}
published: 2026-07-01
updated: 2026-07-06
locale: en
tags: [technical-seo, robots-txt, llms-txt]
difficulty: intermediate
related: [73-percent-websites-block-ai-crawlers, ai-crawler-economics-gptbot-1255-1]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Cloudflare's new policy (July 2026) classifies crawlers into Search (indexing), Agent (chatbots, browser-use agents), and Training (model training). From September 15, 2026, Training and Agent crawlers blocked by default on ad-supported pages. Most significant infrastructure-level shift in AI crawler governance.

## Details
Google, Microsoft, and Apple operate multi-purpose crawlers affected. Google supports robots.txt for AI opt-out (Google-Extended). Apple has Applebot-Extended. Bing supports content=noarchive meta tag. Defensible starting policy: allow search/retrieval crawlers (OAI-SearchBot, PerplexityBot, Claude-SearchBot), opt out of training via explicit disallows. Publishers now have granular control over which crawler categories access their content. Combined with training-only crawler economics data (GPTBot 1,255:1, ClaudeBot 20,583:1 crawl-to-referral ratio), this enables precise content access policy.
