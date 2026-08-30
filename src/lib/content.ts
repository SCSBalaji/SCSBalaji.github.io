/**
 * Collection queries. Pages call these instead of `getCollection()` directly so
 * draft filtering and sort order can never drift between routes.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { PROJECT_CATEGORIES, type ProjectCategory } from '~/content.config';
import { estimateReadingTime } from './reading-time';

export type Project = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'blog'>;

/** Drafts are visible while developing, never in a production build. */
const includeDrafts = !import.meta.env.PROD;

/** All projects, newest first. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) =>
    includeDrafts ? true : !data.draft,
  );

  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** The starred projects that fill the homepage. */
export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.data.featured);

  // If nothing is starred yet, fall back to the newest so the homepage is never
  // empty — better than a blank section while content is still being written.
  return (featured.length > 0 ? featured : projects).slice(0, limit);
}

/** Category ids actually present in the collection, in canonical order. */
export function getUsedCategories(projects: Project[]): ProjectCategory[] {
  const used = new Set(projects.map((p) => p.data.category));
  return (Object.keys(PROJECT_CATEGORIES) as ProjectCategory[]).filter((id) =>
    used.has(id),
  );
}

/** All published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('blog', ({ data }) =>
    includeDrafts ? true : !data.draft,
  );

  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Up to three featured posts for the homepage; falls back to the newest. */
export async function getFeaturedPosts(limit = 3): Promise<Post[]> {
  const posts = await getPosts();
  const featured = posts.filter((p) => p.data.featured);
  return (featured.length > 0 ? featured : posts).slice(0, limit);
}

/** Frontmatter wins; otherwise estimate from the body. */
export function readingTimeFor(post: Post): number {
  return post.data.readingTime ?? estimateReadingTime(post.body);
}

/** Every tag in use, with counts, most frequent first. */
export function collectTags(posts: Post[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
