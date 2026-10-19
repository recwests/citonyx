---
title: On-Domain Controls Cut a 5.7x AEO Win Down to a Suggestive 1.8x
description: 'A log-based natural experiment on glasp.co: raw ChatGPT referrals grew
  5.7x, untreated pages on the same domain grew 3.5x, and the intervention-aligned
  level break was 1.82x (placebo p=0.16).'
practice_type: measurement
confidence: experimental
source: {url: 'https://arxiv.org/abs/2606.04362', platform: arxiv}
published: 2026-10-19
updated: 2026-10-19
locale: en
tags: [attribution, platform-tailwind, natural-experiment, referral-traffic]
difficulty: advanced
related: []
conflicts_with: []
manual: false
hub: measurement
---
## Summary
A field study on glasp.co applied an AEO bundle to its /youtube/ corpus in January 2026 while the rest of the domain stayed untreated. Raw monthly ChatGPT referrals grew 5.7x, but untreated pages grew 3.5x from the same platform tailwind. The interrupted-time-series level break was 1.82x (95% CI 1.31 to 2.54), and a placebo test gave p=0.16.

## Details
- Treatment bundle: URL canonicalization, demand mining from AI-bot 404 logs, question-form titles and standalone lead summaries, plus an SEO guard that locked pages still earning Google clicks.
- Robustness: engaged sessions 2.27x, excluding the early-May spike 1.83x, alternative pre-window 2.07x, all with HAC p=0.001.
- SEO safety: organic clicks to treated pages fell about 25%, in line with a site-wide fall of about 20%, and impressions stayed near baseline with no deindexation.
- No support for a flywheel effect: treated organic search was flat to declining, not rising.
- Limits: observational, one domain, one engine, bundled tactics, short noisy pre-period.
