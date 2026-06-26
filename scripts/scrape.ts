import { readFileSync, writeFileSync } from 'node:fs';
import { normalizeVast } from './normalize';
import { pricesArraySchema, type Price } from '../src/data/schema';

const KEY = process.env.VAST_API_KEY;
if (!KEY) throw new Error('VAST_API_KEY is required');

const now = new Date().toISOString().slice(0, 10);
const current: Price[] = JSON.parse(readFileSync('src/data/prices.json', 'utf8'));
const manual = current.filter((r) => r.providerSlug !== 'vast'); // keep manual rows for other providers

// POST search: on-demand, verified, rentable offers for the GPUs we track.
const body = {
  limit: 300,
  type: 'ondemand',
  verified: { eq: true },
  rentable: { eq: true },
  gpu_name: { in: ['RTX_4090', 'H100_SXM5', 'H100_PCIE', 'H100_NVL', 'H100_80GB'] },
};
const res = await fetch('https://console.vast.ai/api/v0/bundles/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${KEY}`,
  },
  body: JSON.stringify(body),
});
if (!res.ok) throw new Error(`Vast.ai API ${res.status}: ${(await res.text()).slice(0, 300)}`);

const data = (await res.json()) as { offers?: unknown[] };
const vast = normalizeVast((data.offers ?? []) as Parameters<typeof normalizeVast>[0], now);
if (vast.length === 0) throw new Error('Vast returned no usable offers for tracked GPUs');

const merged = [...manual, ...vast];
pricesArraySchema.parse(merged); // fail loud → CI red, bad data never deploys
writeFileSync('src/data/prices.json', JSON.stringify(merged, null, 2) + '\n');
console.log(`wrote ${merged.length} rows (${vast.length} from Vast: ${vast.map((v) => `${v.gpu} $${v.pricePerHourUsd}`).join(', ')})`);
