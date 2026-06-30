import type { APIRoute } from 'astro';
import { readRunRecords, recordsToCsv } from '~/utils/leaderboard';

export const prerender = true;

export const GET: APIRoute = async () => {
  const records = readRunRecords();

  return new Response(recordsToCsv(records), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="citonyx-dataset.csv"',
    },
  });
};
