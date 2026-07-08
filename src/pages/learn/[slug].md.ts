import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const getSlug = (id: string) => id.replace(/^.*[/\\]/, '').replace(/\.[^.]+$/, '');
const isoDate = (date: Date) => date.toISOString().slice(0, 10);

export async function getStaticPaths() {
  const entries = await getCollection('geoPractices');
  return entries.map((entry) => ({
    params: { slug: getSlug(entry.id) },
    props: { id: entry.id },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const entries = await getCollection('geoPractices');
  const entry = entries.find((e) => e.id === props.id);
  if (!entry) {
    return new Response('Not found', { status: 404 });
  }

  const slug = getSlug(entry.id);
  const pathSegment = entry.data.practice_type || entry.data.hub;
  const url = pathSegment ? `https://citonyx.com/learn/${pathSegment}#entry-${slug}` : null;

  const parts: string[] = [];
  parts.push(`# ${entry.data.title}`);
  parts.push('');
  parts.push(`> ${entry.data.description}`);
  parts.push('');
  if (url) {
    parts.push(`URL: ${url}`);
  }
  parts.push(`Published: ${isoDate(entry.data.published)}  Updated: ${isoDate(entry.data.updated)}`);
  parts.push('');
  parts.push(entry.body ?? '');
  parts.push('');

  return new Response(parts.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
