---
title: Anthropic Runs 3 Separate Crawler User-Agents With Distinct Functions
description: ClaudeBot (training), Claude-Web (real-time browsing), and anthropic-ai
  (catch-all) can be independently controlled in robots.txt for granular AI visibility
  management.
practice_type: technical
confidence: verified
source: {url: 'https://seo.yatna.ai/seo-academy/robots-txt-guide-ai-crawlers-2026/',
  platform: web, author: Rejith Krishnan}
published: 2026-06-15
updated: 2026-07-14
locale: en
tags: [robots-txt, claude-crawlers, technical-seo, crawl-control]
difficulty: beginner
related: [cloudflare-three-tier-crawler-classification, 73-percent-websites-block-ai-crawlers]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Anthropic operates three distinct crawlers: ClaudeBot (training data), Claude-Web (live user browsing), and anthropic-ai (catch-all). Blocking ClaudeBot removes content from Claude's knowledge base; blocking Claude-Web prevents live citations. Each can be independently controlled in robots.txt.

## Details
The three-bot model mirrors OpenAI's split (GPTBot for training, ChatGPT-User for browsing, OAI-SearchBot for search). Google-Extended controls Gemini/Vertex training without affecting Google Search indexing. PerplexityBot covers both training and search. The industry recommendation: block training crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended) while allowing search/browsing crawlers (ChatGPT-User, Claude-Web, OAI-SearchBot, PerplexityBot) to maintain citation visibility without contributing to model training.
