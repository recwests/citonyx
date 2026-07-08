import type { APIRoute } from 'astro';
import { SITE } from 'astrowind:config';

export const prerender = true;

export const GET: APIRoute = async () => {
  const manifest = {
    name: SITE.name,
    description:
      'Practical GEO (Generative Engine Optimization) practices for optimizing your content for AI search engines like ChatGPT, Perplexity, and Google AI Overviews.',
    site: SITE.site,
    resources: {
      knowledge_base_json: new URL('/api/practices.json', SITE.site).href,
      knowledge_base_rss: new URL('/learn/rss.xml', SITE.site).href,
      llms_txt: new URL('/llms.txt', SITE.site).href,
      llms_full_txt: new URL('/llms-full.txt', SITE.site).href,
      blog_rss: new URL('/rss.xml', SITE.site).href,
      leaderboard_dataset_json: new URL('/lab/citonyx-dataset.json', SITE.site).href,
      leaderboard_dataset_csv: new URL('/lab/citonyx-dataset.csv', SITE.site).href,
      sitemap: new URL('/sitemap-index.xml', SITE.site).href,
      robots: new URL('/robots.txt', SITE.site).href,
      hubs: new URL('/learn', SITE.site).href,
      agents_md: new URL('/AGENTS.md', SITE.site).href,
    },
    crawling: {
      ai_crawlers: 'allowed',
      citation: 'free',
    },
    generated: new Date().toISOString(),
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
