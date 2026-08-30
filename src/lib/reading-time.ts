/**
 * Reading-time estimation for blog posts.
 *
 * Posts can set `readingTime` in frontmatter to override this. When they don't,
 * it's derived from the raw markdown body at build time.
 */

const WORDS_PER_MINUTE = 220;

/** Rounded up to the nearest minute, minimum 1. */
export function estimateReadingTime(body: string | undefined): number {
  if (!body) return 1;

  const text = body
    // Fenced code blocks — skimmed, not read.
    .replace(/```[\s\S]*?```/g, ' ')
    // Inline code, images, link URLs, and markdown punctuation.
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~\-|]/g, ' ');

  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/** `6 min read` */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
