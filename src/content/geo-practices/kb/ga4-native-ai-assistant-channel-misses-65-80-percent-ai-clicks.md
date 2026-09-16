---
title: GA4 ships native AI Assistant channel — but misses 65-80% of AI clicks
description: GA4's native 'AI Assistant' channel (May 2026) recognizes ChatGPT, Gemini,
  Copilot, DeepSeek, Grok via referrer. But 65-80% of AI clicks arrive with no referrer,
  landing in Direct.
practice_type: measurement
hub: measurement
confidence: verified
source: {url: 'https://insightland.org/blog/how-to-track-chatgpt-perplexity-and-gemini-traffic-in-ga4-a-complete-2026-setup-guide/',
  platform: web}
published: 2026-05-13
updated: 2026-05-13
locale: en
tags: [ga4, ai-assistant, dark-traffic, tracking]
difficulty: intermediate
related: []
conflicts_with: []
manual: false
---
## Summary
GA4 added a native 'AI Assistant' channel on May 13, 2026, automatically categorizing traffic from recognized AI platforms. However, only 15-20% of ChatGPT clicks and less than 5% of Claude clicks carry a referrer header, meaning 65-80% of AI clicks land in Direct.

## Details
The native channel recognizes ChatGPT, Gemini, DeepSeek, Copilot, and Grok. Perplexity and Claude are NOT on Google's list as of writing. Google's own AI Overviews and AI Mode traffic is classified as Organic Search, not AI Assistant. To capture the unreferred slice, teams need: (1) a custom channel group with regex matching AI domains, (2) server-side referer enrichment via GTM server container or edge function, and (3) Measurement Protocol for stripped-referrer clicks. A fully instrumented stack (custom channel + GTM + BigQuery export) achieves ~75-90% coverage vs ~15-25% from native alone. GA4 caps event retention at 14 months; export to BigQuery early for trend data. The AI Assistant channel is forward-only — historical sessions keep old classifications.
