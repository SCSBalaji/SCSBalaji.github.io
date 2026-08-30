# scsbalaji.tech

Personal portfolio for **SCS Balaji** — Computer Science Engineer working across
software engineering, cloud & DevOps, AI/ML, and modern web development.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).
Statically generated, no UI framework, and **no JavaScript bundle** — the handful
of client scripts (theme toggle, scroll reveal, nav tracking, project filter,
contact form) are small enough that Astro inlines all of them into the HTML.

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run build` | `astro check` (type-checks every `.astro` file) then a production build into `dist/` |
| `npm run build:fast` | Build without the type-check pass |
| `npm run check` | Type-check only |
| `npm run preview` | Serves `dist/` locally |

---

## Before you deploy

Four things need your attention. Everything else is optional.

1. **Add `public/resume.pdf`.** The Résumé button in the nav, the mobile menu, and
   the hero all point at `/resume.pdf`. Until the file exists those links 404. If
   you'd rather host it elsewhere, change `site.resume` in
   [src/data/site.ts](src/data/site.ts) to the external URL instead.
2. **Replace the placeholder content.** Every invented value is marked with a
   `// TODO:` comment — search the repo for `TODO:` to find them all. See
   [Where the content lives](#where-the-content-lives).
3. **Wire up the contact form.** It ships in placeholder mode. See
   [Wiring up the contact form](#wiring-up-the-contact-form).
4. **Check `site.url`.** It's `https://scsbalaji.tech`, and it's what canonical
   URLs, Open Graph tags, the sitemap, and the JSON-LD all derive from. If you
   deploy anywhere else, change it.

---

## Where the content lives

There is no CMS and no admin UI. Content is TypeScript data files plus markdown,
and each piece of content has exactly one home.

| What | Where | Notes |
| --- | --- | --- |
| Name, role, email, hero copy, SEO defaults, nav | [src/data/site.ts](src/data/site.ts) | **Start here.** Almost everything else references it. |
| Skills | [src/data/skills.ts](src/data/skills.ts) | Five groups, each with a short line on what you actually do with it |
| Experience | [src/data/experience.ts](src/data/experience.ts) | Timeline entries, newest first |
| Education | [src/data/education.ts](src/data/education.ts) | Newest first — degree, then diploma, then school |
| Highlights | [src/data/highlights.ts](src/data/highlights.ts) | Certifications, hackathons, milestones |
| Public profiles | [src/data/profiles.ts](src/data/profiles.ts) | Also feeds the `sameAs` array in the Person structured data |
| Projects | [src/content/projects/](src/content/projects/) | One markdown file per project |
| Blog posts | `src/content/blog/` | Empty. Add a markdown file and the whole blog wakes up |

The data files are plain arrays. Add, remove, or reorder entries and the sections
follow — nothing is hardcoded in a component.

### Adding a project

Drop a markdown file in [src/content/projects/](src/content/projects/). The
filename becomes the slug. The schema is defined and commented in
[src/content.config.ts](src/content.config.ts):

```yaml
---
title: Cloudledger
tagline: Cost visibility for small teams running on AWS   # one line, under ~80 chars
description: >-
  Two or three sentences. Shown in full on the homepage spotlight cards.
featured: true          # exactly three projects should be true — they fill the homepage
date: 2026-06-14        # sort key, newest first
category: cloud         # ai-ml | cloud | web | devops | other
status: live            # live | in-development | complete | archived
technologies:           # order matters — the first four show on compact cards
  - TypeScript
  - Astro
github: https://github.com/you/cloudledger
demo: https://cloudledger.example.com   # optional
visual: 1               # optional, 1–6
draft: false
---

Optional markdown body. Not rendered yet — there are no per-project detail
pages — so treat it as notes for future you.
```

Only `title`, `tagline`, `description`, `date`, `category`, and `technologies`
are required. `astro check` will tell you precisely what's missing.

**Project imagery.** Projects work without a screenshot: if you omit `image`,
[ProjectVisual.astro](src/components/ProjectVisual.astro) renders one of six
generated technical diagrams (a ledger chart, a delivery pipeline, a sample grid,
a peer mesh, a document stack, a time series) drawn from the same hairlines and
accent colour as the rest of the site. Pin one with `visual: 1`–`6`, or leave it
off and a stable hash of the title picks one.

To use a real screenshot instead, put the file next to the markdown and reference
it relatively — Astro optimises and generates the responsive `srcset`:

```yaml
image: ./cover.png
imageAlt: The Cloudledger dashboard showing month-to-date spend by service
```

### Adding a blog post

There are no posts yet, and that's deliberate: `/blog` and the homepage strip
render a designed empty state instead of filler articles. Both switch to real
listings automatically the moment the first file lands in `src/content/blog/`.

```yaml
---
title: Notes on cloud cost visibility for small teams
description: One or two sentences. Used in the listing and as the meta description.
pubDate: 2026-08-22
updatedDate: 2026-08-30   # optional
tags: [aws, cost, observability]
featured: true            # up to three featured posts surface on the homepage
draft: false
---

Your post, in markdown.
```

- **Reading time** is computed from the body. Override with `readingTime: 7` if
  you disagree with the estimate.
- **Drafts** (`draft: true`) render in `astro dev` with a visible "Draft — hidden
  in production" marker, are excluded from production builds entirely, and carry
  `noindex` if you reach one directly.
- Post pages get **BlogPosting** structured data, a canonical URL, and an
  automatic sitemap entry.
- Add `cover: ./hero.png` for a per-post social image; otherwise posts fall back
  to the site's OG card.

The empty state's "On the list" topics live in
[BlogEmptyState.astro](src/components/blog/BlogEmptyState.astro) — worth updating
to reflect what you're actually planning, or deleting once posts exist.

> During builds with an empty blog collection, Astro logs
> `The collection "blog" does not exist or is empty.` a few times. It's noise from
> `getCollection('blog')`, it's harmless, and it disappears with your first post.

---

## Wiring up the contact form

Out of the box `site.contact.endpoint` is `null`, which puts the form in
**placeholder mode**: it validates every field, shows real inline errors, moves
focus to the first invalid input, and on a valid submit hands off to the
visitor's mail client. Nothing pretends to have been sent.

To make it post for real, set the endpoint — no component changes needed:

```ts
// src/data/site.ts
contact: {
  endpoint: 'https://api.web3forms.com/submit',
  fields: { access_key: 'your-access-key' },   // posted alongside name/email/message
},
```

Any endpoint that accepts a `POST` of form data and answers `2xx` works —
[Web3Forms](https://web3forms.com), [Formspree](https://formspree.io), or your own
serverless route. `fields` is for whatever extra keys your provider needs.
[Contact.astro](src/components/sections/Contact.astro) handles the loading,
success, validation, and error states either way, and includes an off-screen
honeypot field for spam.

---

## Design system

Everything visual is defined once in [src/styles/global.css](src/styles/global.css):
the light and dark palettes, the fluid type scale, spacing rhythm, radii, the two
shadows, and the custom utilities (`shell`, `mono-label`, `grid-texture`,
`measure`, `link-underline`, `icon-button`).

Colour flows through **one** layer of indirection. Raw values are plain CSS
variables on `:root` and `.dark`; `@theme inline` promotes them to Tailwind tokens.
That means markup writes `text-ink` or `bg-canvas` and never needs a `dark:`
variant for colour — switching themes swaps the variables underneath.

**One accent colour** (copper `#B4530A` light / amber `#F0A05A` dark) carries the
status dot, link underlines, focus rings, the active nav rule, and exactly one
element in each project visual. To rebrand the site, change `--accent`,
`--accent-hover`, `--accent-wash`, and `--accent-contrast` in both blocks.

Two things worth knowing before you edit CSS:

- `@import "tailwindcss" source("..")` on line 1 roots Tailwind's class detection
  at `src/`. Without it, Tailwind crawls the whole project — including the docs
  snapshot under `.agents/` — and the stylesheet grows tenfold. Leave it.
- Astro's component-scoped `<style>` blocks are **unlayered**, so they outrank
  every Tailwind utility regardless of order. Don't set `display` in a scoped
  block on an element that also needs a responsive display utility; that's why
  `icon-button` is a real `@utility` rather than a scoped rule.

Dark mode respects the OS on a first visit, remembers an explicit choice in
`localStorage`, and is applied by an inline script in
[BaseLayout.astro](src/layouts/BaseLayout.astro) before first paint, so there's no
flash. That same script adds `.js` to `<html>`, which is what enables the
scroll-reveal animations — with JavaScript off, all content is visible and static.

Motion is subtle by design and every animation is disabled under
`prefers-reduced-motion: reduce`.

---

## SEO

Handled centrally by [src/lib/seo.ts](src/lib/seo.ts) and
[BaseLayout.astro](src/layouts/BaseLayout.astro), so pages only pass a title and
description:

- Per-page titles via `seo.titleTemplate`, meta descriptions, canonical URLs
- Open Graph and Twitter card tags
- **Person** and **WebSite** structured data site-wide, **BreadcrumbList** on
  subpages, **BlogPosting** on posts, cross-referenced by `@id`
- `sitemap-index.xml` via `@astrojs/sitemap` (404 excluded), and
  [public/robots.txt](public/robots.txt) pointing at it
- `noindex` on `/404` and on drafts

The social card at `/og.png` is composed as SVG and rasterised by `sharp` at build
time — no headless browser, no extra dependency. Its copy lives in the `TAGLINE`
constant in [src/pages/og.png.ts](src/pages/og.png.ts) (deliberately shorter than
the SEO description, which is written for search results and too long to set at
that size).

---

## Optional polish

- **Real brand logos.** Profiles render as mono two-letter monograms (`GH`, `IN`,
  `LC`…) so the section stays consistent and pulls in no icon library. To use real
  marks, add each SVG path to [src/lib/icons.ts](src/lib/icons.ts), swap `mark`
  for an `icon` field in [src/data/profiles.ts](src/data/profiles.ts), and render
  `<Icon>` in place of the `.mark` span in
  [Profiles.astro](src/components/sections/Profiles.astro).
- **Apple touch icon.** [public/favicon.svg](public/favicon.svg) is theme-aware
  and covers browsers, but iOS ignores SVG icons. Add a 180×180
  `public/apple-touch-icon.png` and a matching `<link rel="apple-touch-icon">` in
  `BaseLayout.astro` if you care about home-screen bookmarks.
- **Analytics.** Nothing is included. If you add something, prefer a
  script-free/cookieless provider so the zero-JS budget survives.

---

## Project layout

```
src/
├── content/
│   ├── projects/          # one .md per project
│   └── blog/              # one .md per post (empty)
├── content.config.ts      # collection schemas — the source of truth for frontmatter
├── data/                  # site config + the non-markdown content
├── lib/                   # content queries, formatters, icons, SEO builders
├── layouts/BaseLayout.astro
├── components/
│   ├── ui/                # Button, Icon, Tag, Section, Eyebrow, StatusDot, …
│   ├── sections/          # the nine homepage sections, in order
│   └── blog/              # PostCard, BlogEmptyState
├── pages/
│   ├── index.astro        # the single-page main experience
│   ├── projects/index.astro
│   ├── blog/index.astro
│   ├── blog/[...slug].astro
│   ├── 404.astro
│   └── og.png.ts          # build-time social card
└── styles/global.css      # the entire design system
```

## Deploying

`npm run build` produces a fully static `dist/`. Any static host works — Netlify,
Cloudflare Pages, GitHub Pages, Vercel — with build command `npm run build` and
output directory `dist`. No adapter, no server runtime, no environment variables.
