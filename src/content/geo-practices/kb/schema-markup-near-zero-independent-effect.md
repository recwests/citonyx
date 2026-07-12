---
title: Schema Markup Has Near-Zero Independent Effect on AI Citations — Ahrefs 1,885-Page
  Controlled Study
description: 'Ahrefs tracked 1,885 pages adding schema vs 4,000 controls. Result:
  zero meaningful citation lift on any AI platform. Schema compounds quality but doesn''t
  stand alone.'
practice_type: schema-markup
confidence: verified
source: {url: 'https://ahrefs.com/blog/schema-ai-citations/', platform: web, author: Louise
    Linehan}
published: 2026-05-15
updated: 2026-07-07
locale: en
tags: [ahrefs, research, citation-hallucination]
difficulty: advanced
related: [schema-markup-2-3x-citation-lift, faq-rich-results-deprecated-signal-remains]
conflicts_with: [schema-markup-2-3x-citation-lift]
manual: false
hub: schema-markup
---
## Summary
Ahrefs tracked 1,885 pages that added JSON-LD schema between August 2025 and March 2026, matched against 4,000 control pages. Schema produced no significant citation lift: AI Overviews -4.6%, AI Mode +2.4%, ChatGPT +2.2%. The schema-citation correlation is a confound — authoritative sites use both schema and quality content.

## Details
SearchVIU's experiment confirmed AI crawlers don't parse hidden schema: when product info existed only in JSON-LD with no visible HTML, Claude recovered 0/8 prices, Gemini only half. Writesonic tested 6 AI crawlers: JSON-LD scored 0/6 readability. Ahrefs' 6M URL analysis found schema-cited pages are 3x more likely to carry JSON-LD — but controlled experiment disproved causation. FAQPage markup showed no lift from markup alone; only the visible Q&A content mattered. Mechanism is indirect: schema improves traditional search ranking, and AI draws from that pool. Server-rendered schema in initial HTML is table stakes.
