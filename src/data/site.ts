/**
 * Site-wide identity, navigation, and SEO defaults.
 *
 * This is the first file to edit. Everything marked `TODO:` is placeholder
 * content — replace it and the whole site updates.
 */

export const site = {
  name: 'SCS Balaji',
  shortName: 'Balaji',
  domain: 'scsbalaji.tech',
  url: 'https://scsbalaji.tech',

  /** Shown under the hero name and used in the Person structured data. */
  role: 'Computer Science Engineer',

  // TODO: replace with your real contact address.
  email: 'hello@scsbalaji.tech',

  // TODO: replace with your city / region.
  location: 'Tamil Nadu, India',
  timezone: 'IST · UTC+5:30',

  /**
   * Drop your PDF at `public/resume.pdf`. Until then this link 404s —
   * see README.md.
   */
  resume: '/resume.pdf',

  /** The four practice areas. Rendered as the hero metadata strip. */
  focus: [
    'Software Engineering',
    'Cloud & DevOps',
    'AI & Machine Learning',
    'Modern Web',
  ],

  /**
   * Current status. Set `active: false` to hide the indicator entirely
   * rather than leaving a stale label up.
   */
  status: {
    active: true,
    label: 'Open to 2026 opportunities', // TODO: keep this accurate.
  },

  hero: {
    greeting: "Hi, I'm Balaji.",
    headline:
      'Computer Science Engineer building with cloud, AI/ML and modern web technologies.',
    // TODO: rewrite in your own voice — this is the most-read paragraph on the site.
    description:
      'I design and ship systems end to end: the infrastructure underneath, the models that make them useful, and the interfaces people actually touch. Most of my work lives at the seam between cloud platforms and applied machine learning.',
    note: 'Currently deepening my work in platform engineering and applied ML.',
  },

  seo: {
    title: 'SCS Balaji — Computer Science Engineer',
    titleTemplate: '%s · SCS Balaji',
    description:
      'Personal portfolio of SCS Balaji, a Computer Science Engineer working across software engineering, cloud & DevOps, AI/ML and modern web development.',
    /** Generated at build time by `src/pages/og.png.ts`. */
    ogImage: '/og.png',
    locale: 'en_IN',
    // TODO: add your X/Twitter handle (including the @) or leave null to omit the tag.
    twitter: null as string | null,
  },

  /**
   * Contact form target.
   *
   * `endpoint: null` keeps the form in placeholder mode: it still validates,
   * still runs every loading/error state, and hands off to the visitor's mail
   * client on submit. To make it post for real, set this to a form endpoint
   * (Web3Forms, Formspree, or your own route) — no component changes needed.
   * See README.md → "Wiring up the contact form".
   */
  contact: {
    endpoint: null as string | null,
    /** Extra fields posted alongside name/email/message (e.g. an access key). */
    fields: {} as Record<string, string>,
  },
} as const;

/**
 * Primary navigation — one list, identical on every page.
 *
 * `hash` items point at a homepage section (`#skills` on `/`, `/#skills`
 * elsewhere). `href` items are real routes. `sections` lists the homepage
 * section ids that should light this item up as you scroll past them.
 */
export const nav = [
  { label: 'Projects', href: '/projects', sections: ['work'] },
  { label: 'Skills', hash: 'skills' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Blog', href: '/blog', sections: ['writing'] },
  { label: 'Contact', hash: 'contact' },
] as const;

export type NavItem = (typeof nav)[number];

export type SiteConfig = typeof site;
