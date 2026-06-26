import { describe, it, expect } from 'vitest';
import { normalizeVast } from '../scripts/normalize';
import { pricesArraySchema } from '../src/data/schema';

describe('normalizeVast', () => {
  it('uses per-GPU price (dph_total/num_gpus), takes the min per model, validates schema', () => {
    const offers = [
      { gpu_name: 'RTX_4090', dph_total: 0.68, num_gpus: 2, geolocation: 'US' }, // 0.34/gpu
      { gpu_name: 'RTX_4090', dph_total: 0.62, num_gpus: 2 }, // 0.31/gpu (cheaper)
      { gpu_name: 'H100_SXM5', dph_total: 4.0, num_gpus: 2 }, // 2.00/gpu
    ];
    const out = normalizeVast(offers, '2026-06-26');
    expect(() => pricesArraySchema.parse(out)).not.toThrow();
    expect(out.find((r) => r.gpuSlug === 'rtx-4090')?.pricePerHourUsd).toBe(0.31);
    expect(out.find((r) => r.gpuSlug === 'h100-80gb')?.pricePerHourUsd).toBe(2);
  });

  it('returns empty when no tracked GPU matches', () => {
    expect(normalizeVast([{ gpu_name: 'RTX_3060', dph_total: 0.1, num_gpus: 1 }], '2026-06-26')).toEqual([]);
  });
});
