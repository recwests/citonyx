import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('geoPractices');

  const practices = entries
    .map((entry) => {
      const slug = entry.id.replace(/^.*[/\\]/, '').replace(/\.[^.]+$/, '');
      const { data } = entry;
      const pathSegment = data.practice_type || data.hub;

      return {
        slug,
        title: data.title,
        description: data.description,
        practice_type: data.practice_type ?? null,
        difficulty: data.difficulty,
        tags: data.tags,
        published: data.published.toISOString(),
        updated: data.updated.toISOString(),
        locale: data.locale,
        confidence: data.confidence ?? null,
        provider: data.provider ?? null,
        source: data.source
          ? { url: data.source.url, platform: data.source.platform, author: data.source.author ?? null }
          : null,
        related: data.related ?? [],
        url: pathSegment ? `https://citonyx.com/learn/${pathSegment}#entry-${slug}` : null,
      };
    })
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());

  const envelope = {
    generated: new Date().toISOString(),
    count: practices.length,
    practices,
  };

  return new Response(JSON.stringify(envelope, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
