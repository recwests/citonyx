---
title: ChatGPT Search cites only 15% of retrieved pages — four-gate funnel model
description: 'AirOps study of 548K pages: ChatGPT Search retrieves via Bing index,
  checks OAI-SearchBot crawl access, then cites only 15% based on structure, freshness,
  and authority.'
practice_type: technical
hub: technical
confidence: verified
source: {url: 'https://tygartmedia.com/chatgpt-search-citations-2026/', platform: web,
  author: Will Tygart}
published: 2026-07-03
updated: 2026-08-05
locale: en
tags: [chatgpt, citation-behavior, citation-factors, oai-searchbot, bing-index, citation-rate]
difficulty: intermediate
related: [bing-top-3-80-percent-chatgpt-citation-correlation, chatgpt-two-stage-bing-rerank]
conflicts_with: []
manual: false
---
## Summary

ChatGPT Search runs a three-stage pipeline: Bing index retrieval, OAI-SearchBot crawlability check, then citation selection. Only 15% of retrieved pages get cited. Most sites fail at gates 1-2 (not in Bing top 20 or blocking OAI-SearchBot).

## Details

AirOps analyzed 548,534 pages. 87% of SearchGPT citations match Bing top-10 results (Seer Interactive). Pages with JSON-LD markup: 38.5% citation rate vs 32.0% without. Optimal word count: 500-2,000 words. Pages over 5,000 words cited less than pages under 500. Content updated within 30 days receives 3.2x more citations. Sites with 32,000+ referring domains are 3.5x more likely to be cited. Minimum tracking: server log monitoring for OAI-SearchBot, manual citation audits on 10 priority queries weekly, Bing position tracking.
