---
title: AI Crawlers Operate on ~2s Hard Timeout — FCP Under 0.4s Correlates with 6.7
  AI Citations
description: 'Two converging findings: AI systems fetch pages with ~2s timeout (HTTP
  499), and SE Ranking finds pages with FCP under 0.4s average 6.7 citations vs 2.1
  for slower pages — a 3.2x gap.'
practice_type: technical
hub: technical
confidence: verified
source: {url: 'https://moz.com/blog/strategies-to-dominate-ai-search', platform: web,
  author: Michael King}
published: 2026-06-03
updated: 2026-08-05
locale: en
tags: [page-speed, ttfb, fcp, http-499, ai-crawler-timeout, ai-citations]
difficulty: intermediate
related: [js-rendered-content-77-percent-fail, ai-crawlers-activity-40-percent-2026]
conflicts_with: []
manual: false
---
## Summary

Two converging speed-citation findings. AI crawlers operate on a ~2s hard timeout — HTTP 499 errors indicate the AI client closed connection before server responded. Separately, SE Ranking 2026 research shows pages with First Contentful Paint under 0.4s average 6.7 AI citations vs 2.1 for slower pages — a 3.2x gap. Page speed is a measurable AI citation factor.

## Details

Unlike Googlebot, AI engines fetch pages on-demand when generating answers. Server response >2s → HTTP 499 → AI moves to next source. Edge caching via CDN is the fastest fix. SE Ranking's FCP study builds on this: FCP under 0.4s is a more aggressive threshold than Core Web Vitals recommend, suggesting AI retrieval is more speed-sensitive than traditional crawlers. Indig and Gauge analysis of 1.2 million AI responses confirmed speed as a binary gate. SparkToro study of 2,961 queries found ChatGPT overwhelmingly cites pages loading under 2 seconds. Practical: optimize FCP aggressively for key pages — minimize render-blocking resources, use CDN caching, preload critical CSS. A server taking >2s or with FCP >0.4s both reduce the probability of content entering the AI's context window.
