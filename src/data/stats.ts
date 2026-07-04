import { getCollection } from 'astro:content';
import { readRunRecords } from '~/utils/leaderboard';

export interface LandingStats {
  totalPractices: number;
  practicesTrend: number;
  totalMeasurements: number;
  measurementsTrend: number;
  citedRuns: number;
  citedTrend: number;
  totalRuns: number;
  totalRunsTrend: number;
  daysSinceStart: number;
  lastUpdated: string | null;
  firstRunDate: string | null;
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const TREND_WINDOW_DAYS = 30;

function daysAgo(days: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00Z');
  const db = new Date(b + 'T00:00:00Z');
  return Math.floor((db.getTime() - da.getTime()) / ONE_DAY_MS);
}

export async function getLandingStats(): Promise<LandingStats> {
  const practices = await getCollection('geoPractices');
  const records = readRunRecords();

  const totalPractices = practices.length;
  const totalMeasurements = records.length;
  const citedRuns = records.filter((r) => r.cited).length;
  const totalRuns = records.length;

  const cutoffStr = daysAgo(TREND_WINDOW_DAYS);
  const cutoffDate = new Date(cutoffStr + 'T00:00:00Z');

  const practicesTrend = practices.filter((p) => {
    const pub = p.data.published;
    return pub >= cutoffDate;
  }).length;

  const recentRecords = records.filter((r) => r.date >= cutoffStr);
  const measurementsTrend = recentRecords.length;
  const citedTrend = recentRecords.filter((r) => r.cited).length;
  const totalRunsTrend = measurementsTrend;

  const dates = records
    .map((r) => r.date)
    .filter(Boolean)
    .sort();
  const firstRunDate = dates.length > 0 ? dates[0] : null;
  const lastUpdated = dates.length > 0 ? dates[dates.length - 1] : null;

  const daysSinceStart = firstRunDate ? daysBetween(firstRunDate, daysAgo(0)) : daysBetween('2026-06-30', daysAgo(0));

  return {
    totalPractices,
    practicesTrend,
    totalMeasurements,
    measurementsTrend,
    citedRuns,
    citedTrend,
    totalRuns,
    totalRunsTrend,
    daysSinceStart,
    lastUpdated,
    firstRunDate,
  };
}
