---
title: Cloudflare Monetization Gateway lets publishers charge AI agents per-use via
  x402 micropayments
description: Cloudflare's Monetization Gateway (July 1, 2026) lets sites charge for
  pages, APIs, datasets, and MCP tools in stablecoins over x402; Pay Per Crawl evolves
  into Pay Per Use.
practice_type: monetization
hub: monetization
confidence: experimental
source: {url: 'https://blog.cloudflare.com/monetization-gateway/', platform: web}
published: 2026-08-10
updated: 2026-08-10
locale: en
tags: [ai-agents, x402, micropayments, publisher-revenue, stablecoin]
difficulty: advanced
related: [cloudflare-three-tier-crawler-classification]
conflicts_with: []
manual: false
---
## Summary
Cloudflare launched the Monetization Gateway (July 1, 2026), letting publishers charge for any Cloudflare-protected asset - web pages, datasets, APIs, or MCP tools - via x402 HTTP micropayments settled in stablecoins, evolving its Pay Per Crawl product into a broader Pay Per Use model.

## Details
- x402 is an open protocol (25+ industry members) built on the 402 status code: sub-second settlement, fractional-cent payments, no buyer account needed - designed for autonomous agents carrying wallets.
- Launch partners: Ceramic.ai (pay-per-query when content appears in its search results) and You.com (agents pay on demand for premium content); publishers get query and citation data back.
- Context: 52% of crawler requests are now AI training (up from 22% in spring 2025, per Cloudflare); AWS CloudFront shipped x402 support too (GA, USDC on Base/Solana) within two weeks.
- Caveats: Cloudflare's gateway is waitlist-only with no pricing or timeline, and from September 15, 2026 mixed-use training crawlers are blocked by default on ad-supported pages.
