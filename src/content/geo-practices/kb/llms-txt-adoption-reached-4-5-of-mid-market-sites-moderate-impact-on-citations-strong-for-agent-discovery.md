---
title: llms.txt adoption reached 4-5% of mid-market sites — moderate impact on citations,
  strong for agent discovery
description: llms.txt (proposed by Jeremy Howard Sep 2024) adopted by 4-5% of mid-market
  sites by mid-2026. Current evidence shows no direct citation boost but helps AI
  agents discover pages faster.
practice_type: technical
hub: technical
confidence: experimental
source: {url: 'https://ottawaseo.com/seo-statistics/ai-search-statistics-2026/', platform: web}
published: 2026-07-28
updated: 2026-07-28
locale: en
tags: [llms-txt, technical-seo, agent-discovery, robots-txt]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
---
## Summary

llms.txt adoption grew from near-zero in 2024 to ~4-5% of mid-market sites by mid-2026. Contentful's June 2026 analysis: no confirmed evidence that llms.txt directly boosts AI citations. However, it helps AI coding assistants (Cursor, Copilot) find documentation faster. Strongest use case is SaaS/developer tool documentation. Major limitation: AI crawlers must be allowed in robots.txt first — many sites block GPTBot/ClaudeBot/PerplexityBot.

## Details

Companies like Stripe, Vercel, Supabase, Mintlify use llms.txt for AI documentation discovery. Recommended architecture: robots.txt (allow AI crawlers) + sitemap.xml + llms.txt + schema.org markup + semantic HTML. Key mistakes: listing too many URLs (AI prefers curated signals), contradicting robots.txt, ignoring content quality (expertise + authority still matter most). For agentic AI future, it may become more important — AI agents increasingly navigate websites autonomously. Common implementation errors include treating llms.txt as SEO magic and not pairing with proper schema.
