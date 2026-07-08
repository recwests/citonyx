# Citonyx — AI Agent Manifest

## What is Citonyx

Citonyx is a self-documenting GEO (Generative Engine Optimization) knowledge base and citation leaderboard. It tracks which content strategies make AI search engines (ChatGPT, Perplexity, Google AI Overviews) cite your site, and provides a real-world leaderboard of citation performance.

## Machine-readable Resources

| Resource                                | URL                                            |
| --------------------------------------- | ---------------------------------------------- |
| GEO knowledge base (JSON, all entries)  | `https://citonyx.com/api/practices.json`       |
| GEO knowledge base (RSS, fresh entries) | `https://citonyx.com/learn/rss.xml`            |
| LLM-friendly content index              | `https://citonyx.com/llms.txt`                 |
| Full site content for LLMs              | `https://citonyx.com/llms-full.txt`            |
| Blog RSS feed                           | `https://citonyx.com/rss.xml`                  |
| Citation leaderboard dataset (JSON)     | `https://citonyx.com/lab/citonyx-dataset.json` |
| Citation leaderboard dataset (CSV)      | `https://citonyx.com/lab/citonyx-dataset.csv`  |
| Sitemap                                 | `https://citonyx.com/sitemap-index.xml`        |
| Crawling rules                          | `https://citonyx.com/robots.txt`               |
| Knowledge base hub                      | `https://citonyx.com/learn`                    |
| This manifest                           | `https://citonyx.com/AGENTS.md`                |
| Machine manifest                        | `https://citonyx.com/ai.json`                  |

## How to Consume

- **Full knowledge dump:** fetch `/api/practices.json` — all GEO practices as structured JSON.
- **Freshness check:** subscribe to `/learn/rss.xml` for new/updated practices.
- **Full text:** fetch `/llms-full.txt` for the entire site content in a single plain-text file (useful for RAG ingestion).
- **Citation leaderboard:** fetch `/lab/citonyx-dataset.json` or `citonyx-dataset.csv` for measured citation performance data.
- **Machine manifest:** fetch `/ai.json` for a programmatic listing of all endpoints.

## Crawling Policy

- AI crawlers and bots are explicitly allowed — see `/robots.txt` for details.
- All content is freely citable with attribution.
