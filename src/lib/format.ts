/**
 * Date and text formatting. Everything is UTC-based and locale-pinned so the
 * output is identical on every build machine.
 */

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

/** `2026-06-14` — for the `datetime` attribute on `<time>`. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** `Jun 14, 2026` */
export function formatDate(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

/** `Jun 2026` — from a Date. */
export function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/**
 * `Jan 2026` — from a `YYYY-MM` or `YYYY` string, as used in the experience and
 * education data files. Anything unparseable is passed through untouched.
 */
export function formatYearMonth(value: string): string {
  const match = /^(\d{4})(?:-(\d{2}))?$/.exec(value.trim());
  if (!match) return value;

  const [, year, month] = match;
  if (!month) return year!;

  const index = Number(month) - 1;
  return MONTHS[index] ? `${MONTHS[index]} ${year}` : year!;
}

/** `Jan 2026 — Present`. Collapses to a single value when start equals end. */
export function formatRange(start: string, end: string | null): string {
  const from = formatYearMonth(start);
  const to = end === null ? 'Present' : formatYearMonth(end);
  return from === to ? from : `${from} — ${to}`;
}

/** Truthy list joined with commas and a trailing "and". */
export function listToSentence(items: string[]): string {
  if (items.length <= 1) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`;
}

/**
 * Stable non-negative hash. Used to pick a deterministic generated visual for
 * projects that don't specify one, so the same project always looks the same.
 */
export function stableIndex(input: string, buckets: number): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % buckets;
}
