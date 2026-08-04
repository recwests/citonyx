---
title: Markdown Is Not an AI-SEO Shortcut — Bots Find It Four Ways, Use Varies
description: 'Botify''s live-server experiment: bots discover Markdown via links,
  head tags, llms.txt, or content negotiation. GPTBot took 1,273 reads via links/head;
  purpose-built AI tools request Markdown ~100%'
practice_type: technical
hub: technical
confidence: experimental
source: {url: 'https://botify.com/blog/markdown-new-research-insights', platform: web}
published: 2026-08-04
updated: 2026-08-04
locale: en
tags: [markdown, crawler-behavior, http-negotiation, llms-txt, bot-optimization, html-vs-markdown]
difficulty: advanced
related: [llms-txt-adoption-2026]
conflicts_with: []
manual: false
---
## Summary
Markdown is not a guaranteed AI-SEO shortcut. Botify's live experiment found bots discover Markdown four ways, with GPTBot taking 1,273 reads via direct links and head tags. The HTTP content-negotiation path gets the fewest requests because most crawlers default to HTML, but purpose-built AI assistants request Markdown nearly every time.

## Details
Botify (Jul 13, 2026): Mike Levin's experiment on a self-hosted server without a CDN, so every AI bot request lands in access logs. Four discovery paths: standard hyperlinks, <link rel="alternate"> in the head, llms.txt, and HTTP Accept-header content negotiation. GPTBot 1,273 combined reads (links + head discovery); ClaudeBot 615; Meta 470; the content-negotiation channel saw the fewest requests (most crawlers still default to HTML). Purpose-built AI tools request Markdown close to 100% of the time (e.g., Claude Code), while legacy crawlers prefer HTML; Markdown cuts page weight 3-5x. Verdict: low-risk future-proofing, not a shortcut — measure per-bot behavior first.
