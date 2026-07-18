---
title: Google AI Mode Silently Removed Text Fragments — Coverage Dropped from 70.9%
  to 0% (153K Citation Study)
description: 'OrganikPI May 2026 study: AI Mode #:~:text= fragment coverage fell from
  70.9% (Mar 2026) to 0% across 88,392 citations. Gemini doubled down: 51.8% to 84.1%.'
practice_type: measurement
confidence: verified
source: {url: 'https://organikpi.com/blog/seo-strategy/ai-mode-text-fragments-dead-153425-citations/',
  platform: web, author: Daniel Shashko}
published: 2026-05-19
updated: 2026-07-18
locale: en
tags: [google, ai-overviews, citation-behavior, text-fragments, gemini]
difficulty: advanced
related: [google-ai-mode-93-percent-zero-click, gemini-schema-responsive-52-percent-owned]
conflicts_with: []
manual: false
hub: measurement
---
## Summary
OrganikPI analyzed 153,425 citations across 6 platforms between March and May 2026. AI Mode silently removed text fragments (#:~:text=) from citation URLs — coverage dropped from 70.9% to 0%. Gemini went the opposite direction, increasing fragment coverage from 51.8% to 84.1%. The sentence-level signal is now only available through Gemini.
## Details
Out of 88,392 AI Mode citations in the May 2026 run, exactly zero carried a #:~:text= fragment — either a feature flag or citation renderer change. Citated sentences average 9.27 words and cluster in the first 37% of source pages. Practical impact: monitoring scripts scraping fragments from AI Mode now return empty strings. For research purposes, Gemini (84.1% fragment coverage) is now the only window into Google's sentence-level chunking. For AI Mode, monitor citation at the URL and domain level only. YouTube and Reddit dominate AI Mode citation volume across platforms.
