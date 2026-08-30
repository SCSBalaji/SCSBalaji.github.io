/**
 * Social card, rendered once at build time.
 *
 * Composed as SVG in the site's own design language, then rasterised with sharp
 * — which Astro already depends on for image optimisation — because Twitter,
 * LinkedIn, and Slack won't render an SVG `og:image`. No extra dependency and
 * no headless browser.
 *
 * Text uses a system font stack: the build machine won't have the site's web
 * fonts installed, so asking for them would silently fall back anyway.
 */
import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { site } from '~/data/site';

const W = 1200;
const H = 630;

// Single-quoted family names: these land inside double-quoted XML attributes,
// so a double quote here would terminate the attribute and break the parse.
const SANS = "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "Consolas, 'DejaVu Sans Mono', 'Courier New', monospace";

const INK = '#1c1917';
const INK_2 = '#57534e';
const INK_3 = '#8b857f';
const LINE = '#e6e3e0';
const CANVAS = '#fafaf9';
const ACCENT = '#b4530a';

/**
 * The card's own tagline. Deliberately not `site.seo.description`: that one is
 * written for search results and is too long to set at this size. Edit here.
 */
const TAGLINE =
  'Software engineering, cloud infrastructure, and applied machine learning — built end to end.';

/** `&`, `<`, and `>` are the only characters that can break SVG text content. */
function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Greedy wrap at a character budget. SVG has no text flow, so lines have to be
 * split up front — approximating by character count is plenty for one short
 * string at a fixed size.
 */
function wrap(text: string, maxChars: number, maxLines: number): string[] {
  const lines: string[] = [];
  let line = '';

  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;

    if (next.length > maxChars && line) {
      lines.push(line);
      if (lines.length === maxLines) return lines;
      line = word;
    } else {
      line = next;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function buildCard(): string {
  const step = 60;
  const grid = [
    ...Array.from({ length: Math.ceil(W / step) - 1 }, (_, i) => `M${(i + 1) * step} 0V${H}`),
    ...Array.from({ length: Math.ceil(H / step) - 1 }, (_, i) => `M0 ${(i + 1) * step}H${W}`),
  ].join('');

  // Quiet technical motif, top right — the same dot-grid vocabulary the project
  // visuals use, with a single accent cell.
  const dots: string[] = [];
  for (let col = 0; col < 6; col += 1) {
    for (let row = 0; row < 3; row += 1) {
      const cx = 942 + col * 34;
      const cy = 108 + row * 34;
      const on = col === 4 && row === 1;
      dots.push(
        `<circle cx="${cx}" cy="${cy}" r="${on ? 5 : 3}" fill="${on ? ACCENT : '#d2cdc7'}" />`,
      );
    }
  }

  const focus = escapeXml(site.focus.join('  ·  '));
  const tagline = wrap(TAGLINE, 56, 2)
    .map(
      (line, i) =>
        `<text x="80" y="${404 + i * 38}" font-family="${SANS}" font-size="27" fill="${INK_3}">${escapeXml(line)}</text>`,
    )
    .join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${CANVAS}" />
  <path d="${grid}" stroke="${INK}" stroke-opacity="0.045" stroke-width="1" fill="none" />

  <rect x="80" y="96" width="56" height="3" fill="${ACCENT}" />
  ${dots.join('')}

  <text x="80" y="136" font-family="${MONO}" font-size="21" fill="${ACCENT}">${escapeXml(site.domain)}</text>

  <text x="80" y="252" font-family="${SANS}" font-size="96" font-weight="600" letter-spacing="-3.4" fill="${INK}">${escapeXml(site.name)}</text>
  <text x="80" y="318" font-family="${SANS}" font-size="34" font-weight="400" letter-spacing="-0.6" fill="${INK_2}">${escapeXml(site.role)}</text>

  ${tagline}

  <path d="M80 512H1120" stroke="${LINE}" stroke-width="1" fill="none" />

  <text x="80" y="556" font-family="${MONO}" font-size="21" fill="${INK_2}">${focus}</text>
</svg>`;
}

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(buildCard())).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
