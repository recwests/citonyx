---
title: Wrong ARIA Labels Break AI Agents More Than Missing Ones
description: In 100 purpose-built agent tests, ChatGPT Agent clicked a mislabelled
  Cancel button in 25 of 25 runs. Misleading accessible names beat absent ones for
  damaging task success.
practice_type: technical
confidence: experimental
source: {url: 'https://merj.com/blog/agent-interaction-research', platform: web, author: Giacomo
    Zecchini}
published: 2026-10-20
updated: 2026-10-20
locale: en
tags: [agentic-web, accessibility, technical-audit, webmcp]
difficulty: advanced
related: [agentic-seo-requires-agent-first-content-structure-pages-with-this-format-receive-67-more-ai-citations]
conflicts_with: []
manual: false
hub: technical
---
## Summary
MERJ ran 100 task-level tests plus production-page runs on browser agents. When two buttons carried deliberately swapped ARIA labels, ChatGPT Agent clicked Cancel first in 25 of 25 runs, while screenshot-based Claude Computer Use and Perplexity's Comet went straight to Save. Average success rates climbed from roughly 30% to 60% between November 2025 and March 2026.

## Details
Failure stages: perception, grounding, planning, execution, recovery and manipulation.

- Common blockers include div-as-button, icon-only controls without names, transparent click-eating overlays, content-visibility hidden elements, cookie banners and virtual scrolling.
- Automated checkers confirm a label exists, not that it is true; axe-core's label-content-name-mismatch rule is off by default.
- Fix in the design system, then run task-level tests on your own checkout, booking and form journeys rather than trusting scanners.
