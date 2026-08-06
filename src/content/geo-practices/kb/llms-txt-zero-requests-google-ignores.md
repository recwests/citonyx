---
title: 'llms.txt: 800K+ Sites Published, 97% Get Zero AI Requests, Google Explicitly
  Ignores It'
description: 'Ahrefs studied 137,000 domains: ~28% publish llms.txt but 97% of those
  files got zero fetches in May 2026. Google confirms it ignores the file; coding
  agents fetch it ~5x more than AI search bots.'
practice_type: technical
confidence: verified
source: {url: 'https://ahrefs.com/blog/llmstxt-study/', platform: web, author: Hybrid
    Ranking}
published: 2026-07-13
updated: 2026-08-06
locale: en
tags: [llms-txt, technical-seo, google-position, robots-txt]
difficulty: intermediate
related: [llms-txt-adoption-2026, llms-txt-ai-discovery-files-competitive, cloudflare-three-tier-crawler-classification]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Despite hitting 800K+ sites, llms.txt sees negligible AI crawler traffic. Ahrefs studied 137,000 domains with Web Analytics: ~28% publish an llms.txt file, but 97% of those files received zero fetches in May 2026. Google's John Mueller called it a temporary crutch and confirmed Google Search explicitly ignores it; its guide now states llms.txt neither helps nor harms Google Search. Main utility is IDE agents, not search AI.

## Details
- Ahrefs (137,000 domains, May 2026): 28% publish llms.txt; 97% of those files got zero agent fetches; AI search bots fetch it roughly 5x less than coding agents.
- Google's Gary Illyes and John Mueller both confirmed Google ignores llms.txt; Anthropic and Perplexity publicly confirmed support; Claude Desktop and Perplexity respect it in retrieval workflows.
- The 800K adoption figure masks near-zero effectiveness for AI search citation. Presenc AI's State of llms.txt 2026 shows classic technology diffusion — early adopters in tech/cybersecurity, expanding into mainstream SaaS. IDE agents (Cursor, Continue, Cline) and some MCP integrations do use it for code documentation retrieval; the standard may merge with Model Context Protocol (MCP).
- Practical advice: implement only if auto-generated (Mintlify, Rank Math) or for developer documentation where IDE agent accuracy matters. It is cheap insurance, not an AI visibility lever.
