---
title: Google Lighthouse now audits llms.txt and agentic browsing readiness
description: Chrome Lighthouse 13.3 (May 2026) added an Agentic Browsing audit category
  testing llms.txt presence, WebMCP support, accessibility-tree quality and CLS —
  an agent-era readiness signal.
practice_type: technical
confidence: experimental
source: {url: 'https://qail.ai/llms-txt-implementation-guide/', platform: web}
published: 2026-08-06
updated: 2026-08-06
locale: en
tags: [lighthouse, webmcp, agent-readiness]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
hub: technical
---
## Summary
Lighthouse 13.3, released May 2026, added an Agentic Browsing audit category with four readiness tests: llms.txt presence, WebMCP protocol support, accessibility-tree quality and Cumulative Layout Shift. Developer tools like Cursor, Continue, Aider and Mintlify MCP actively consume llms.txt when present.

## Details
- There is an explicit tension inside Google: the search team says llms.txt is not used for Google Search, while the Chrome team audits for it.
- The file is most valuable for products with APIs or technical documentation that coding agents consume.
- It does not replace schema markup, server-side rendering or machine-callable endpoints; treat it as a low-effort hygiene signal, not a ranking lever.
