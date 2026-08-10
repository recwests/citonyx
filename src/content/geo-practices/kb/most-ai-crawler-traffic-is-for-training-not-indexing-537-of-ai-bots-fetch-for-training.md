---
title: 'Most AI Crawler Traffic Is for Training, Not Indexing: 53.7% of AI Bots Fetch
  for Training'
description: 'Foglift classified 65,527 AI crawler requests: 53.7% training, 32% indexing,
  14.3% user-triggered fetch. Blocking training bots won''t stop citation crawls.'
practice_type: technical
hub: technical
confidence: verified
source: {url: 'https://foglift.io/research/generative-engine-optimization-statistics',
  platform: web}
published: 2026-08-10
updated: 2026-08-10
locale: en
tags: [technical-seo, robots-txt]
difficulty: intermediate
related: [search-vs-training-crawler-split]
conflicts_with: []
manual: false
---
## Summary
Analyzing 65,527 classified AI crawler requests (Jun 11-Aug 9 2026), Foglift found 53.7% served training, 32% indexing and 14.3% user-triggered fetch. Because most bot traffic trains models rather than indexes pages, blocking 'training' bots in robots.txt may not change citation visibility — a key distinction for technical GEO teams.

## Details
- Training crawler share 53.7%, indexing 32%, user-triggered fetch 14.3% (Foglift Research, latest 60-day window).
- A page can be training-scraped and still never appear in answers, because live citation comes from the indexing/fetch path.
- Practical audit: separate training vs indexing vs user-fetch in your access logs before deciding what robots.txt blocks — default 'block all AI bots' rules can be too broad.
- Related context (ROI Revolution, Aug 7 2026): Cloudflare defaults from Sep 15 2026 block training and agent bots by default on ad pages; Google's John Mueller says Google does not use llms.txt or llms-author.txt files.
