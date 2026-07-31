---
title: Schema Markup Has Near-Zero Independent Effect on AI Citations — Ahrefs 1,885-Page
  Controlled Study
description: 'Ahrefs tracked 1,885 pages adding schema vs 4,000 controls. Result:
  zero meaningful citation lift on any AI platform. Schema compounds quality but doesn''t
  stand alone.'
practice_type: schema-markup
hub: schema-markup
confidence: verified
source: {url: 'https://ahrefs.com/blog/schema-ai-citations/', platform: web, author: Louise
    Linehan}
published: 2026-05-15
updated: 2026-07-31
locale: en
tags: [ahrefs, research, citation-hallucination]
difficulty: advanced
related: [schema-markup-2-3x-citation-lift, faq-rich-results-deprecated-signal-remains]
conflicts_with: [schema-markup-2-3x-citation-lift]
manual: false
---
## Summary
Ahrefs tracked 1,885 pages that added JSON-LD schema between August 2025 and March 2026, matched against 4,000 control pages in a difference-in-differences design on pages already receiving 100+ AI Overview citations. Schema produced no significant citation lift: AI Overviews -4.6%, AI Mode +2.4%, ChatGPT +2.2%. The schema-citation correlation is a confound — authoritative sites use both schema and quality content.

## Details
Four robustness tests (t-test, DiD, event study, symmetric window) confirmed the null result. A parallel searchVIU experiment found five AI systems (ChatGPT, Claude, Perplexity, Gemini, AI Mode) ignored JSON-LD and extracted only visible HTML during live retrieval — when product info existed only in schema, Claude recovered 0/8 prices. Ahrefs' 6M URL analysis found schema-cited pages are 3x more likely to carry JSON-LD, but the controlled experiment disproved causation. Caveat: the study covers already-cited pages only; schema may still help uncited pages get crawled or indexed, and it remains essential for rich results and entities. Server-rendered schema in initial HTML is table stakes.
