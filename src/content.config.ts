import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Project categories. Drives the `/projects` filter bar and the card eyebrow.
 * Add an id here plus a label below and the filter picks it up automatically.
 */
const categoryIds = ['ai-ml', 'cloud', 'web', 'devops', 'other'] as const;
export type ProjectCategory = (typeof categoryIds)[number];

export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
  'ai-ml': 'AI/ML',
  cloud: 'Cloud',
  web: 'Web',
  devops: 'DevOps',
  other: 'Other',
};

/** Where a project actually stands. Kept small and honest — no "coming soon". */
const statusIds = ['live', 'in-development', 'complete', 'archived'] as const;
export type ProjectStatus = (typeof statusIds)[number];

export const PROJECT_STATUSES: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-development': 'In development',
  complete: 'Complete',
  archived: 'Archived',
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line, shown under the title. Aim for under 80 characters. */
      tagline: z.string(),
      /** Two or three sentences. The markdown body is optional extra detail. */
      description: z.string(),

      /** Exactly three should be `true` — they fill the homepage. */
      featured: z.boolean().default(false),

      /** Sort key for both the homepage and /projects. Newest first. */
      date: z.coerce.date(),

      category: z.enum(categoryIds),
      status: z.enum(statusIds).default('complete'),

      /** Order matters — the first four show on cards, all show on /projects. */
      technologies: z.array(z.string()).min(1),

      github: z.url().optional(),
      demo: z.url().optional(),

      /**
       * Optional screenshot. Put the file next to the markdown (or anywhere in
       * `src/`) and reference it relatively: `image: ./cover.png`.
       * Without one, ProjectVisual renders a generated diagram instead.
       */
      image: image().optional(),
      imageAlt: z.string().optional(),

      /**
       * Which generated visual to use when there's no `image` (1–6).
       * Defaults to a stable hash of the title.
       */
      visual: z.number().int().min(1).max(6).optional(),

      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),

      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      /** Up to three featured posts surface on the homepage. */
      featured: z.boolean().default(false),

      tags: z.array(z.string()).default([]),

      /** Minutes. Computed from the body when omitted. */
      readingTime: z.number().int().positive().optional(),

      /** Drafts render in `astro dev` but are excluded from production builds. */
      draft: z.boolean().default(false),

      /** Optional per-post social image. Falls back to the site default. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projects, blog };
