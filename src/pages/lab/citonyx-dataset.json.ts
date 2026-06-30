import type { APIRoute } from 'astro';
import { readRunRecords } from '~/utils/leaderboard';

export const prerender = true;

export const GET: APIRoute = async () => {
  const records = readRunRecords();

  return new Response(JSON.stringify(records, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': 'attachment; filename="citonyx-dataset.json"',
    },
  });
};
