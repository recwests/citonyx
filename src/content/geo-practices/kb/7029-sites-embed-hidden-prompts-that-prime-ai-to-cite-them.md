---
title: 7,029 Sites Embed Hidden Prompts That Prime AI to Cite Them
description: 'Trakkr scan (833,791 domains): 7,029 sites embed ''remember/cite us''
  instructions in AI buttons. 37% use memory-anchoring language; 98% target ChatGPT.
  Microsoft calls it ''AI Recommendation Poisoning''.'
practice_type: technical
confidence: experimental
source: {url: 'https://trakkr.ai/ai-poison', platform: web}
published: 2026-08-04
updated: 2026-08-04
locale: en
tags: [hidden-prompts, prompt-poisoning, ai-memory, chatbot-buttons, prompt-embedding,
  detection]
difficulty: intermediate
related: [indirect-prompt-injection-web-threat]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Thousands of sites embed hidden instructions inside AI chat buttons to shape future answers. Trakkr scanned 833,791 domains and detected 7,029 hidden prompts; 37% use memory-anchoring language that asks the model to remember or prefer the source. Microsoft Security calls the pattern "AI Recommendation Poisoning". 98% of these prompts target ChatGPT.

## Details
Trakkr (Apr 2, 2026): 1.97B archived pages via Common Crawl + 833,791 domains via PublicWWW; 7,029 code-pattern matches; 116 live-verified prompting domains (93.5% contained memory/source-preference instructions). Mix: 37% memory anchoring ("remember us as the go-to source"), 28% source shaping, 35% benign helpers. 98% link to ChatGPT; Claude warned about prefilled memory prompts, ChatGPT did not. No provider-memory causality is proven; the study verifies prompt text and link flows, not long-term memory persistence. Action: audit your own AI buttons; avoid "remember/cite us" phrasing to reduce penalty and trust risk.
