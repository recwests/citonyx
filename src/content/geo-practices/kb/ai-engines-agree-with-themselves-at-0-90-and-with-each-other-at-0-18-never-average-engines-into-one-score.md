---
title: 'AI Engines Agree With Themselves at 0.90 and With Each Other at 0.18: Never
  Average Engines Into One Score'
description: 'Hendricks: the strongest cross-engine overlap of cited domains is a
  per-question Jaccard of 0.181 (Perplexity vs AI Overviews); Perplexity re-asked
  38 minutes later agrees with itself at 0.900.'
practice_type: measurement
hub: measurement
confidence: verified
source: {url: 'https://hendricks.ai/research/the-answer-index', platform: web}
published: 2026-10-19
updated: 2026-10-19
locale: en
tags: [cross-engine-overlap, measurement-design, jaccard, citation-decay]
difficulty: advanced
related: [aeoseo-source-pools-overlap-only-18-grossman-sigir-2026]
conflicts_with: []
manual: false
---
## Summary
Hendricks measured cited-domain overlap between four engines on the same 480 questions. The strongest pair, Perplexity and Google AI Overviews, shares a mean per-question Jaccard of 0.181; every pair involving ChatGPT sits at 0.020 or below. Re-asked 38 minutes later, Perplexity agrees with itself at 0.900 and AI Overviews at 0.622.

## Details
- Other pairs: Perplexity and Gemini 0.151, Gemini and AI Overviews 0.151 (462 questions), ChatGPT and Gemini 0.013, ChatGPT and AI Overviews 0.011.
- ChatGPT and Gemini were not re-run, so no self-agreement figure is claimed for them.
- Method: one capture on 2026-09-01 through a commercial search-data API, immutable run files, 1,919 of 1,920 probes measured.
- Practical consequence: a blended multi-engine visibility score hides the fact that each engine is a separate retrieval supply chain; report one line per engine, and treat single-run per-engine numbers as noisy.
