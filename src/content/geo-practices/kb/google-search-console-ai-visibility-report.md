---
title: Google Search Console now reports AI-search impressions — measure them as a
  separate line
description: Google's GenAI performance reports (June 3, 2026) in Search Console expose
  AI impressions (AI Overviews / AI Mode). Split them from blue-link impressions and
  track citations as their own KPI line.
practice_type: measurement
hub: measurement
confidence: experimental
source: {url: 'https://www.searchenginejournal.com/google-reports-ai-search-impressions-how-to-read-them/582824',
  platform: web}
published: 2026-06-25
updated: 2026-08-09
locale: en
tags: [ai-overviews, attribution, citation-tracking, genai-reports, google, google-search-console]
difficulty: beginner
related: []
conflicts_with: []
manual: false
---
## Summary
Google now reports AI Search impressions — from AI Overviews and AI Mode — inside Search Console (GenAI performance reports launched June 3, 2026). This gives site owners a native, deterministic signal of how often a page is shown inside Google's AI answers alongside traditional queries. Segment AI impressions from blue-link impressions and track citations and brand mentions as a separate, explicit KPI.

## Details
- Google announced the Generative AI reports on June 3 2026 for Search and Discover. The Search report shows impressions from AI Overviews and AI Mode, segmentable by page, country, device and date, but excludes queries, clicks, CTR and position (SEJ, Aug 2026). Search Labs is excluded; Discover has its own report.
- A separate opt-out control lets sites exclude content from AI Overviews/AI Mode while staying in organic results; the default is inclusion, so absence from AI surfaces is usually a content-signal problem, not an opt-out.
- Counting semantics differ from classic search: at property level, two URLs from the same site in one answer count as one impression; in AI Overviews a link must be scrolled or expanded into view to count; in AI Mode a follow-up question is a new query. Property-level and page-level impressions aggregate differently, so page totals may not sum to the property total.
- Diagnostic use: compare AI-visible pages with organic performance — high organic with low AI visibility often means the page does not give a clean answer (hidden in tabs or JavaScript, indirect headings); modest organic with high AI visibility points to useful definitions, statistics or comparisons worth studying.
- A page can win AI impressions without getting clicks, so impression counts inside AI Overviews/AI Mode are an independent signal distinct from classic blue-link ranking.
- Relate AI impressions to where your site is named as a citation source, since AI can reference you without a visible link; previously GEO tracking required third-party tools that sample responses, and this first-party data democratizes measurement for every site with Search Console.
- Review the AI Search report alongside citation tracking and referral clicks each week.
- Caveat: numbers still represent impressions, not citations or mentions; the semantics of what Google counts as an AI impression may evolve with the AI Overviews/AI Mode merge announced at I/O 2026.
