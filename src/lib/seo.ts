/**
 * SEO helpers: title composition, absolute URLs, and JSON-LD builders.
 *
 * All structured data is generated from `src/data/*` so it can never drift from
 * what's rendered on the page.
 */

import { site } from '~/data/site';
import { profiles } from '~/data/profiles';
import { education } from '~/data/education';

/** Applies the title template unless the page opts out (e.g. the homepage). */
export function buildTitle(title?: string, exact = false): string {
  if (!title) return site.seo.title;
  if (exact) return title;
  return site.seo.titleTemplate.replace('%s', title);
}

/** Absolute URL for canonical/OG tags. Strips the trailing slash. */
export function absoluteUrl(path: string, base: URL | string = site.url): string {
  const url = new URL(path, base);
  url.pathname = url.pathname.replace(/\/+$/, '') || '/';
  return url.href.replace(/\/$/, '') || site.url;
}

/** The `sameAs` array for the Person entity. */
function sameAs(): string[] {
  return profiles.filter((p) => p.sameAs !== false).map((p) => p.url);
}

export function personSchema() {
  const alumni = education.map((entry) => ({
    '@type': 'EducationalOrganization',
    name: entry.institution,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    givenName: site.shortName,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.seo.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
    },
    knowsAbout: site.focus,
    alumniOf: alumni,
    sameAs: sameAs(),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: `${site.name} — Portfolio`,
    description: site.seo.description,
    inLanguage: 'en',
    publisher: { '@id': `${site.url}/#person` },
  };
}

type PostSchemaInput = {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  updatedDate?: Date;
  tags?: string[];
  image?: string;
};

export function blogPostingSchema(post: PostSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${post.url}#post`,
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    keywords: post.tags?.length ? post.tags.join(', ') : undefined,
    image: post.image,
    author: { '@id': `${site.url}/#person` },
    publisher: { '@id': `${site.url}/#person` },
    isPartOf: { '@id': `${site.url}/#website` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
  };
}

type BreadcrumbEntry = { name: string; url: string };

export function breadcrumbSchema(entries: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.url,
    })),
  };
}
