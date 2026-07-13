---
title: GSC AI Performance Reports Visible Via /ai URL Hack for Platform Properties
description: Add '/ai' to Google Search Console platform property URLs to see generative
  AI performance reports for social and video content (X, YouTube).
practice_type: tools
confidence: verified
source: {url: 'https://www.seroundtable.com/google-ai-performance-reports-platform-properties-41663.html',
  platform: web, author: Barry Schwartz}
published: 2026-07-10
updated: 2026-07-13
locale: en
tags: [google-search-console, ai-performance, platform-properties, social-content,
  youtube]
difficulty: intermediate
related: [gsc-ai-mode-segmentation, gsc-generative-ai-controls-global]
conflicts_with: []
manual: false
hub: tools
---
## Summary
Discovered by Kenichi Suzuki: add '/ai' after 'search-analytics' or 'discover' in GSC platform property URL to see AI performance reports for social/video content. Works for platform properties (X, YouTube) but not normal web properties.
## Details
Hack to access generative AI performance data for social/video content properties in GSC. URL pattern: /search-analytics/ai or /discover/ai. Example: https://search.google.com/search-console/performance/search-analytics/ai?resource_id=sc-creator-profile. Does not work for standard web properties but Google is expanding native AI performance report access. Reveals how social content performs in Google's AI features — critical for brands with YouTube/X presence.
