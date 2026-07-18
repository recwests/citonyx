---
title: 'The #1 GEO robots.txt Mistake: Blocking OAI-SearchBot Instead of GPTBot Kills
  ChatGPT Citations'
description: 'OpenAI runs 3 bots: GPTBot (training), OAI-SearchBot (search index),
  ChatGPT-User (fetches). Block OAI-SearchBot = zero ChatGPT citations. Most teams
  conflate them.'
practice_type: technical
confidence: verified
source: {url: 'https://scoregeo.ai/blog/ai-bots-robots-txt-truth', platform: web,
  author: ScoreGEO}
published: 2026-05-01
updated: 2026-07-18
locale: en
tags: [robots-txt, technical-seo, gptbot, chatgpt]
difficulty: advanced
related: [cloudflare-three-tier-crawler-classification, ssr-no-js-ai-crawlers]
conflicts_with: []
manual: false
hub: technical
---
## Summary
OpenAI runs three separate bots: GPTBot (training opt-out), OAI-SearchBot (ChatGPT search index), ChatGPT-User (user fetches). Blocking OAI-SearchBot kills ChatGPT search citations instantly. 2024-era advice to block GPTBot blocked all three — a persistent GEO mistake. Same pattern exists for Anthropic (ClaudeBot vs Claude-SearchBot).
## Details
Live audit of major sites (June 2026): NYT blocks all AI bots (licensing strategy); Wikipedia allows all; most French SaaS allow by default. ScoreGEO recommends allow-listing all retrieval bots. Google-Extended is an opt-out for Gemini training — blocking it doesn't affect AI Overviews. PerplexityBot has stealth crawler issues (Cloudflare de-listed Aug 2025). Non-compliant bots (Bytespider) need server-level blocking, not just robots.txt. Writesonic testing confirmed AI crawlers don't execute JS — Vercel's 1.3B fetches analysis confirmed near-zero JS execution across GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot. Implement allow-list strategy: allow OAI-SearchBot, Claude-SearchBot, PerplexityBot, Google-Extended; block training bots selectively.
