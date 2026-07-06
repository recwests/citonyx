import type { CollectionEntry } from 'astro:content';

type GeoPracticeEntry = CollectionEntry<'geoPractices'>;

export function entryUrl(entry: GeoPracticeEntry): { href: string; isAnchor: boolean } {
  const slug = entry.id.replace(/^.*[/\\]/, '').replace(/\.[^.]+$/, '');

  // Pillar articles have their own page
  if (entry.data.manual) {
    return { href: `/learn/${slug}`, isAnchor: false };
  }

  // KB entries: if hub exists and has a page → link to hub anchor
  const hub = entry.data.hub || entry.data.practice_type;
  if (hub) {
    return { href: `/learn/${hub}#entry-${slug}`, isAnchor: true };
  }

  // Fallback: /learn/all anchor
  return { href: `/learn/all#entry-${slug}`, isAnchor: true };
}
