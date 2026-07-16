---
title: 'llms.txt: 800K+ Sites Published, 97% Get Zero AI Requests, Google Explicitly
  Ignores It'
description: 'OtterlyAI 90-day log study found 84 hits out of 62K+ AI bot requests
  (0.1%). Google''s Gary Illyes and John Mueller confirmed no support. Ahrefs tracked
  137K domains: 97% zero requests.'
practice_type: technical
confidence: verified
source: {url: 'https://hybridranking.com/blog/llms-txt-one-year-later', platform: web,
  author: Hybrid Ranking}
published: 2026-07-13
updated: 2026-07-16
locale: en
tags: [llms-txt, technical-seo, google-position, robots-txt]
difficulty: intermediate
related: [llms-txt-adoption-2026, llms-txt-ai-discovery-files-competitive, cloudflare-three-tier-crawler-classification]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Despite hitting 800K+ sites, llms.txt sees negligible AI crawler traffic. Ahrefs (June 2026) confirmed no major LLM provider supports it. SE Ranking's 300K-domain study (Nov 2025) found no measurable improvement in AI citations from having llms.txt. Google explicitly confirmed it ignores the file. Only ~2% of 1M sites have it. The file's main utility is for IDE agents (Cursor, Continue, Claude Code) and some MCP integrations, not search AI.

## Details
Ahrefs (June 2026) confirmed no major LLM provider supports llms.txt. Google's Gary Illyes and John Mueller both confirmed Google ignores it. Anthopic and Perplexity publicly confirmed support; Claude Desktop and Perplexity both respect it in retrieval workflows. The 800K adoption figure masks near-zero effectiveness for AI search citation. Presenc AI's State of llms.txt 2026 report shows adoption follows classic technology diffusion — early adopters in tech/cybersecurity, expanding into mainstream SaaS. IDE agents (Cursor, Continue, Cline) and some MCP integrations do use it for code documentation retrieval. The standard may merge with Model Context Protocol (MCP). Practical advice: implement only if auto-generated (Mintlify, Rank Math) or for developer documentation where IDE agent accuracy matters.
