import { getPermalink, getAsset } from './utils/permalinks';

// NOTE: GitHub links target https://github.com/recwests/citonyx — they go live once the repo is renamed/published under that account.
const GITHUB_URL = 'https://github.com/recwests/citonyx';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Leaderboard',
      href: getPermalink('/lab/leaderboard'),
    },
    {
      text: 'Practices',
      href: getPermalink('/learn'),
    },
    {
      text: 'State of GEO',
      href: getPermalink('/state-of-geo'),
    },
    {
      text: 'llms.txt',
      href: getAsset('/llms.txt'),
    },
  ],
  actions: [{ text: 'GitHub', href: GITHUB_URL, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'GEO Practices',
      links: [
        { text: 'What is GEO', href: getPermalink('/learn/what-is-geo') },
        { text: 'AI Citation Signals', href: getPermalink('/learn/ai-citation-signals') },
        { text: 'Brand Mentions vs Backlinks', href: getPermalink('/learn/brand-mentions-vs-backlinks') },
        { text: 'All Practices', href: getPermalink('/learn/all') },
      ],
    },
    {
      title: 'Lab',
      links: [
        { text: 'AI Citation Leaderboard', href: getPermalink('/lab/leaderboard') },
        { text: 'Dataset (JSON)', href: getPermalink('/lab/citonyx-dataset.json') },
        { text: 'Dataset (CSV)', href: getPermalink('/lab/citonyx-dataset.csv') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'llms.txt', href: getAsset('/llms.txt') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // Activates after the repo is renamed/published as recwests/citonyx.
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: GITHUB_URL },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="${GITHUB_URL}">Citonyx</a> · All rights reserved.
  `,
};
