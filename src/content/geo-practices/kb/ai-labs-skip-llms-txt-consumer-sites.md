---
title: AI Labs Don't Use llms.txt on Their Own Consumer Front Doors — Docs Only
description: 'HTTP Archive: chatgpt.com, claude.ai, gemini.google.com lack llms.txt.
  But docs.anthropic.com, docs.perplexity.ai have one. Value is for agent-readiness,
  not marketing.'
practice_type: technical
provider: tavily
confidence: verified
source: {url: 'https://caseyrb.com/blog/state-of-llms-txt-adoption', platform: web}
published: 2026-07-11
updated: 2026-07-11
locale: en
tags: [llms-txt, ai-labs, case-study, market-data, research]
difficulty: beginner
related: [llms-txt-adoption-2026, llms-txt-ai-discovery-files-competitive, llms-txt-784-implementations-unconfirmed]
conflicts_with: []
manual: false
hub: technical
---
## Summary
HTTP Archive (Casey Burridge, 2026): chatgpt.com, claude.ai, and gemini.google.com all lack llms.txt files on their consumer-facing sites. But docs.anthropic.com, docs.perplexity.ai, and docs.x.ai have one. AI labs use llms.txt for documentation, not marketing.

## Details
This pattern reveals llms.txt's actual value proposition: agent-readiness for technical documentation, not consumer marketing visibility. Every major AI lab uses llms.txt on docs sites where AI agents need structured access to technical content. None use it on their marketing front doors. For GEO practitioners: llms.txt belongs on documentation, API references, knowledge bases, and data repositories — content AI agents need to reference. It is unlikely to drive citation lift for marketing or ecommerce pages. Google confirmed llms.txt has no impact on search visibility or rankings (June 2026).
