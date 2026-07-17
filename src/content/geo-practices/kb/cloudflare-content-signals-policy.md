---
title: Cloudflare Content Signals Policy — Cite But Don't Train
description: New robots.txt extension declares post-fetch usage (search/ai-input/ai-train).
  Set ai-train=no while ai-input=yes to stay citable but not trained on.
practice_type: technical
confidence: verified
source: {url: 'https://blog.cloudflare.com/content-signals-policy/', platform: web,
  author: Cloudflare}
published: 2025-09-24
updated: 2026-07-17
locale: en
tags: [csp, content-signals, ai-train, ai-input, robots-txt]
difficulty: intermediate
related: [cloudflare-block-ai-bots-chatgpt-invisibility]
conflicts_with: []
manual: false
hub: technical
---
## Summary
Content Signals lets you express post-fetch usage: search (index/links), ai-input (RAG/grounding), ai-train (model training). A site can set ai-train=no, ai-input=yes to be cited in AI answers while refusing training use — the cleanest "cite but don't train" stance.

## Details
Cloudflare auto-serves the policy for 3.8M+ managed-robots.txt domains. From Sept 15 2026, new Cloudflare domains default to blocking Training and Agent bots on ad pages; Search stays allowed. Signals are preferences, not enforceable walls — bad actors (Bytespider) ignore robots.txt; enforce at WAF/firewall level. The policy is framed as a reservation of rights under EU DSM Directive Art. 4.
