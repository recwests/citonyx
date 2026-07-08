import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from 'astrowind:config';

export const prerender = true;

export const GET = async () => {
  const entries = await getCollection('geoPractices');

  const items = entries
    // freshness feed: don't push deprecated or stale entries to agents
    .filter((entry) => entry.data.confidence !== 'deprecated' && entry.data.isStale !== true)
    .map((entry) => {
      const slug = entry.id.replace(/^.*[/\\]/, '').replace(/\.[^.]+$/, '');
      const { data } = entry;
      const pathSegment = data.practice_type || data.hub;

      return {
        link: pathSegment
          ? new URL(`learn/${pathSegment}#entry-${slug}`, SITE.site).href
          : new URL('learn', SITE.site).href,
        title: data.title,
        description: data.description,
        pubDate: data.updated,
      };
    })
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const rss = await getRssString({
    title: `${SITE.name} — GEO Practices`,
    description: 'Fresh GEO/AI-citation practices from the Citonyx knowledge base.',
    site: SITE.site,
    items,
    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
