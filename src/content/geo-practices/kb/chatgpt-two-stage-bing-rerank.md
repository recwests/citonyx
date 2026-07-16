---
title: ChatGPT Citation Pipeline Is Two-Stage — Bing Retrieval Then Fine-Tuned Re-Rank
description: ChatGPT uses Bing to retrieve candidates, then a fine-tuned model re-ranks
  by answer fit, domain authority, source consensus; zero JS execution.
practice_type: technical
confidence: experimental
source: {url: 'https://www.promptalpha.ai/blog/how-chatgpt-decides-what-to-cite',
  platform: web, author: PromptAlpha Team}
published: 2026-02-14
updated: 2026-07-16
locale: en
tags: [chatgpt, bing, technical-seo, ssr, citation-behavior]
difficulty: advanced
related: [ssr-no-js-ai-crawlers, chatgpt-first-party-site-68-percent-citations]
conflicts_with: []
manual: false
hub: technical
---
## Summary
ChatGPT's two-stage pipeline (Bing retrieval → fine-tuned re-rank on answer fit, domain authority, source consensus) means SSR/SSG is mandatory — OpenAI crawlers execute zero JavaScript.

## Details
Based on studies covering 9.6M queries, 680M citations, 400K+ pages, ChatGPT searches the web only for some conversations, uses Bing to fetch candidate pages, then re-ranks by content-answer fit, domain authority, and cross-source consensus. Critical technical constraint: zero JavaScript execution by any OpenAI crawler, so server-side rendering / static generation is mandatory for AI visibility. Strong Bing visibility directly improves ChatGPT candidate inclusion. Source consensus (multiple reputable sources agreeing) is a key re-rank signal — corroborate claims across independent domains.
