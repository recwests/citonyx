import type { Price } from '../src/data/schema';

export type VastOffer = {
  gpu_name?: string;
  dph_total?: number; // $/hour for the WHOLE offer (num_gpus GPUs)
  num_gpus?: number;
  geolocation?: string | null;
};

// GPUs we track, mapped from Vast's underscore names (e.g. "RTX_4090", "H100_SXM5") to our labels.
const TARGETS: { re: RegExp; gpu: string; gpuSlug: string }[] = [
  { re: /4090/i, gpu: 'RTX 4090', gpuSlug: 'rtx-4090' },
  { re: /H100/i, gpu: 'H100 80GB', gpuSlug: 'h100-80gb' },
];

// For each tracked GPU, take the cheapest PER-GPU price across offers (dph_total / num_gpus).
export function normalizeVast(offers: VastOffer[], now: string): Price[] {
  const out: Price[] = [];
  for (const t of TARGETS) {
    let min = Infinity;
    for (const o of offers) {
      if (!o.gpu_name || !t.re.test(o.gpu_name)) continue;
      const n = o.num_gpus ?? 1;
      if (typeof o.dph_total !== 'number' || n < 1) continue;
      const perGpu = o.dph_total / n;
      if (perGpu > 0 && perGpu < min) min = perGpu;
    }
    if (min !== Infinity) {
      out.push({
        provider: 'Vast.ai',
        providerSlug: 'vast',
        gpu: t.gpu,
        gpuSlug: t.gpuSlug,
        pricePerHourUsd: Math.round(min * 100) / 100,
        billing: 'on-demand',
        region: null,
        affiliateUrl: 'https://vast.ai/',
        sourceUrl: 'https://vast.ai/',
        updatedAt: now,
      });
    }
  }
  return out;
}
