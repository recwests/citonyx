import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, METADATA } from 'astrowind:config';
import { entryUrl } from '~/utils/entry';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('geoPractices');
  entries.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  const summary =
    METADATA?.description ||
    'Practical GEO (Generative Engine Optimization) practices for getting cited by AI search engines.';

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${summary}`,
    '',
    '## GEO Practices',
    '',
    ...entries.map((entry) => {
      const url = new URL(entryUrl(entry).href, SITE.site).href;
      return `- [${entry.data.title}](${url}): ${entry.data.description}`;
    }),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
