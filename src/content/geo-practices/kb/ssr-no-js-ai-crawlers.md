---
title: AI Crawlers Mostly Do Not Execute JavaScript — Server-Render Citation Content
description: Vercel analysis of 1.3B fetches found near-zero JS execution for GPTBot,
  ClaudeBot, PerplexityBot, OAI-SearchBot; only Google-Extended renders JS.
practice_type: technical
confidence: verified
source: {url: 'https://ranqo.ai/blog/schema-markup-for-ai-citations', platform: web,
  author: Ranqo}
published: 2026-04-27
updated: 2026-07-16
locale: en
tags: [technical-seo, ssr]
difficulty: intermediate
related: [js-rendered-content-77-percent-fail, schema-markup-2-3x-citation-lift]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Most AI crawlers ignore client-side rendered content. Core facts — pricing, features, comparisons, FAQs — must live in the initial server HTML, not injected after hydration. This is the single most common reason good content never appears in AI answers.

## Details
A Vercel analysis of 1.3 billion AI crawler fetches found near-zero JavaScript execution across GPTBot, ClaudeBot, PerplexityBot, and OAI-SearchBot; only Google-Extended inherits Googlebot's rendering pipeline. ClaudeBot fetches pages live and is blind to JS SPAs without SSR. Ship static or server-rendered HTML for your most citation-valuable content; JSON-LD must be in the server response, never injected client-side by a tag manager. Pair with the search-vs-training-crawler-split rule to ensure the citation bot can actually fetch the rendered page.
