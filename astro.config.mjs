// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://scsbalaji.tech',
  trailingSlash: 'never',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Two faces only: a grotesk for everything narrative, a mono for the
  // technical layer (eyebrows, metadata, tags, dates).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Sans',
      // Deliberately not `--font-sans`: that name collides with Tailwind's own
      // theme variable. global.css aliases it via `@theme inline`.
      cssVariable: '--font-grotesk',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-code',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],

  image: {
    // Tailwind lives in a cascade layer, so Astro's responsive styles would
    // always win over utility classes on <Image>. Opt out and style with Tailwind.
    responsiveStyles: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
