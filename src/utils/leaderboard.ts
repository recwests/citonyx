import fs from 'node:fs';
import path from 'node:path';

/**
 * Build-time aggregation of Citonyx measurement runs.
 *
 * Reads every real run file in `experiments/runs/` (date-named `YYYY-MM-DD.json`,
 * which deliberately excludes `schema.json` and any `*.example.json` placeholder)
 * and computes the public leaderboard metrics. Pure & typed: the only side effect
 * is the filesystem read in `readRunRecords()`, which runs at build time because
 * the leaderboard page is prerendered.
 */

export type RunRecord = {
  date: string;
  prompt_id: string;
  prompt: string;
  platform: string;
  query_method: string;
  model?: string | null;
  cited: boolean;
  citation_type?: string | null;
  position?: number | null;
  competitors?: string[];
  source_url?: string | null;
  response_excerpt?: string | null;
  run_index: number;
  notes?: string;
  calibration?: boolean | null;
  suspect?: boolean | null;
};

export type PlatformStat = {
  platform: string;
  total: number;
  cited: number;
  rate: number; // 0..1
};

export type CompetitorStat = {
  domain: string;
  count: number;
};

export type DateSeriesPoint = {
  date: string;
  platforms: Record<string, { total: number; cited: number; rate: number }>;
};

export type LeaderboardData = {
  totalRuns: number;
  citedRuns: number;
  overallRate: number; // 0..1
  distinctPrompts: number;
  /** Observed runs-per-prompt distribution over the current data (protocol target is >= 3). */
  runsPerPrompt: { min: number; max: number };
  distinctCompetitorDomains: number;
  lastUpdated: string | null;
  platforms: PlatformStat[];
  platformsCovered: string[];
  queryMethods: string[];
  topCompetitors: CompetitorStat[];
  byDate: DateSeriesPoint[];
  records: RunRecord[];
};

const RUNS_DIRNAME = path.join('experiments', 'runs');
const DATE_FILE_RE = /^\d{4}-\d{2}-\d{2}\.json$/;

/** Resolve the runs directory relative to the repo root (process.cwd() at build). */
export function getRunsDir(): string {
  return path.join(process.cwd(), RUNS_DIRNAME);
}

/** Read and flatten all real run records. Returns [] if the directory is missing. */
export function readRunRecords(dir: string = getRunsDir()): RunRecord[] {
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  const records: RunRecord[] = [];
  for (const file of files.filter((f) => DATE_FILE_RE.test(f)).sort()) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) records.push(...(parsed as RunRecord[]));
  }
  return records;
}

function rate(cited: number, total: number): number {
  return total > 0 ? cited / total : 0;
}

function noSearch_(notes: string | undefined): boolean {
  if (!notes) return false;
  return notes.split(';').some((t) => t.trim() === 'no_search');
}

function error_(notes: string | undefined): boolean {
  if (!notes) return false;
  return notes.split(';').some((t) => t.trim().startsWith('error'));
}

/** Aggregate run records into the leaderboard view model. Pure. */
export function aggregate(records: RunRecord[]): LeaderboardData {
  const active = records.filter((r) => !r.calibration);

  // Per-platform counts (total, cited, noSearch, error)
  const platformMap = new Map<string, { total: number; cited: number; noSearch: number; error: number }>();
  // Per-date, per-platform counts
  const dateMap = new Map<string, Map<string, { total: number; cited: number; noSearch: number; error: number }>>();
  // Competitor frequency
  const competitorMap = new Map<string, number>();

  // Runs per prompt_id (drives the data-derived "repeats" statement).
  const promptCounts = new Map<string, number>();
  const methods = new Set<string>();
  let lastUpdated: string | null = null;
  let overallCited = 0;
  let overallDenom = 0;

  for (const r of active) {
    promptCounts.set(r.prompt_id, (promptCounts.get(r.prompt_id) ?? 0) + 1);
    if (r.query_method) methods.add(r.query_method);
    if (r.date && (lastUpdated === null || r.date > lastUpdated)) lastUpdated = r.date;

    const ns = noSearch_(r.notes) ? 1 : 0;
    const err = error_(r.notes) ? 1 : 0;
    if (ns || err) continue;

    overallDenom += 1;
    if (r.cited) overallCited += 1;

    const p = platformMap.get(r.platform) ?? { total: 0, cited: 0, noSearch: 0, error: 0 };
    p.total += 1;
    if (r.cited) p.cited += 1;
    p.noSearch += ns;
    p.error += err;
    platformMap.set(r.platform, p);

    const perDate = dateMap.get(r.date) ?? new Map();
    const dp = perDate.get(r.platform) ?? { total: 0, cited: 0, noSearch: 0, error: 0 };
    dp.total += 1;
    if (r.cited) dp.cited += 1;
    dp.noSearch += ns;
    dp.error += err;
    perDate.set(r.platform, dp);
    dateMap.set(r.date, perDate);

    for (const domain of r.competitors ?? []) {
      competitorMap.set(domain, (competitorMap.get(domain) ?? 0) + 1);
    }
  }

  const platforms: PlatformStat[] = [...platformMap.entries()]
    .map(([platform, { total, cited }]) => ({ platform, total, cited, rate: rate(cited, total) }))
    .sort((a, b) => b.total - a.total || a.platform.localeCompare(b.platform));

  const topCompetitors: CompetitorStat[] = [...competitorMap.entries()]
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count || a.domain.localeCompare(b.domain));

  const byDate: DateSeriesPoint[] = [...dateMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, perDate]) => ({
      date,
      platforms: Object.fromEntries(
        [...perDate.entries()].map(([platform, { total, cited }]) => [
          platform,
          { total, cited, rate: rate(cited, total) },
        ])
      ),
    }));

  const promptRunCounts = [...promptCounts.values()];
  const runsPerPrompt = promptRunCounts.length
    ? { min: Math.min(...promptRunCounts), max: Math.max(...promptRunCounts) }
    : { min: 0, max: 0 };

  return {
    totalRuns: active.length,
    citedRuns: overallCited,
    overallRate: rate(overallCited, overallDenom),
    distinctPrompts: promptCounts.size,
    runsPerPrompt,
    distinctCompetitorDomains: competitorMap.size,
    lastUpdated,
    platforms,
    platformsCovered: platforms.map((p) => p.platform),
    queryMethods: [...methods].sort(),
    topCompetitors,
    byDate,
    records,
  };
}

/** Convenience: read + aggregate in one call (build-time). */
export function getLeaderboardData(): LeaderboardData {
  return aggregate(readRunRecords());
}

// ── f0-leaderboard: per-group aggregation (canon Runner §6) ──────────────

export type AggregatedGroup = {
  kind: 'target' | 'control';
  platform: string;
  model?: string;
  n: number;
  cited: number;
  rate: number;
  ciLow: number;
  ciHigh: number;
  noSearch: number;
  error: number;
  suspect: number;
};

export type AggregateStatsResult = {
  groups: AggregatedGroup[];
  lastRunDate: string | null;
};

function wilsonCI(k: number, n: number, z = 1.96): { low: number; high: number } {
  if (n === 0) return { low: 0, high: 0 };
  const p = k / n;
  const z2 = z * z;
  const denom = 1 + z2 / n;
  const center = (p + z2 / (2 * n)) / denom;
  const margin = (z * Math.sqrt((p * (1 - p) + z2 / (4 * n)) / n)) / denom;
  return {
    low: Math.max(0, center - margin),
    high: Math.min(1, center + margin),
  };
}

export function aggregateStats(records: RunRecord[], controlDomains: string[]): AggregateStatsResult {
  type Acc = {
    total: number;
    cited: number;
    noSearch: number;
    error: number;
    suspect: number;
  };

  const active = records.filter((r) => !r.calibration);
  let lastRunDate: string | null = null;

  const targetAcc = new Map<string, Acc>();
  const controlAcc = new Map<string, Acc>();

  for (const r of active) {
    if (r.date && (lastRunDate === null || r.date > lastRunDate)) {
      lastRunDate = r.date;
    }

    const ns = noSearch_(r.notes) ? 1 : 0;
    const err = error_(r.notes) ? 1 : 0;
    const sus = r.suspect ? 1 : 0;
    const cit = r.cited ? 1 : 0;

    if (r.platform && r.model) {
      const tKey = `${r.platform}\0${r.model}`;
      let t = targetAcc.get(tKey);
      if (!t) {
        t = { total: 0, cited: 0, noSearch: 0, error: 0, suspect: 0 };
        targetAcc.set(tKey, t);
      }
      t.total += 1;
      t.cited += cit;
      t.noSearch += ns;
      t.error += err;
      t.suspect += sus;
    }

    const cKey = r.platform;
    let c = controlAcc.get(cKey);
    if (!c) {
      c = { total: 0, cited: 0, noSearch: 0, error: 0, suspect: 0 };
      controlAcc.set(cKey, c);
    }
    c.total += 1;
    c.noSearch += ns;
    c.error += err;
    c.suspect += sus;

    if (r.competitors && controlDomains.some((d) => r.competitors!.includes(d))) {
      c.cited += 1;
    }
  }

  const groups: AggregatedGroup[] = [];

  for (const [tKey, acc] of targetAcc) {
    const sepIdx = tKey.indexOf('\0');
    const platform = tKey.slice(0, sepIdx);
    const model = tKey.slice(sepIdx + 1);
    const n = acc.total - acc.noSearch - acc.error;
    const rate = n > 0 ? acc.cited / n : 0;
    const ci = wilsonCI(acc.cited, n);
    groups.push({
      kind: 'target',
      platform,
      model,
      n,
      cited: acc.cited,
      rate,
      ciLow: ci.low,
      ciHigh: ci.high,
      noSearch: acc.noSearch,
      error: acc.error,
      suspect: acc.suspect,
    });
  }

  for (const [platform, acc] of controlAcc) {
    const n = acc.total - acc.noSearch - acc.error;
    const rate = n > 0 ? acc.cited / n : 0;
    const ci = wilsonCI(acc.cited, n);
    groups.push({
      kind: 'control',
      platform,
      n,
      cited: acc.cited,
      rate,
      ciLow: ci.low,
      ciHigh: ci.high,
      noSearch: acc.noSearch,
      error: acc.error,
      suspect: acc.suspect,
    });
  }

  return { groups, lastRunDate };
}

/** Human label for a platform enum value. */
export function platformLabel(platform: string): string {
  const labels: Record<string, string> = {
    chatgpt: 'ChatGPT',
    perplexity: 'Perplexity',
    gemini: 'Gemini',
    google_aio: 'Google AI Overviews',
    bing_copilot: 'Bing Copilot',
  };
  return labels[platform] ?? platform;
}

/** Format a 0..1 rate as a percentage string with one decimal. */
export function formatRate(r: number): string {
  return `${(r * 100).toFixed(1)}%`;
}

/**
 * Human label for the observed runs-per-prompt distribution, e.g. "2–3 runs per prompt"
 * (min !== max) or "3 runs per prompt" (all equal). Reflects the real data, not the target.
 */
export function formatRepeats(min: number, max: number): string {
  if (max <= 0) return 'no runs yet';
  const n = min === max ? String(min) : `${min}–${max}`;
  return `${n} runs per prompt`;
}

/** Serialize run records to CSV (header + rows). Array-valued and nullable fields are handled. */
export function recordsToCsv(records: RunRecord[]): string {
  const columns: (keyof RunRecord)[] = [
    'date',
    'prompt_id',
    'prompt',
    'platform',
    'query_method',
    'model',
    'cited',
    'citation_type',
    'position',
    'competitors',
    'source_url',
    'response_excerpt',
    'run_index',
    'notes',
  ];

  const escape = (value: unknown): string => {
    if (value === null || value === undefined) return '';
    let s: string;
    if (Array.isArray(value)) s = value.join('|');
    else s = String(value);
    if (/[",\n\r]/.test(s)) s = `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const lines = [columns.join(',')];
  for (const r of records) {
    lines.push(columns.map((c) => escape(r[c])).join(','));
  }
  return lines.join('\n') + '\n';
}
