/**
 * Public profiles.
 *
 * Every profile renders as a mono lettermark tile so the section stays visually
 * consistent regardless of which platforms you add — no mismatched brand logos,
 * no external icon dependency. See README.md if you'd rather use real marks.
 *
 * `sameAs` entries are also emitted into the Person structured data.
 */

export type Profile = {
  platform: string;
  /** 2-letter mono monogram shown in the tile. */
  mark: string;
  /** Your handle exactly as it appears on the platform. */
  handle: string;
  url: string;
  /** One short line on what someone will find there. */
  context: string;
  /** Include in the Person JSON-LD `sameAs` array. Default true. */
  sameAs?: boolean;
};

// TODO: replace every username and URL below with your real profiles.
// Delete any platform you don't actively maintain.
export const profiles: Profile[] = [
  {
    platform: 'GitHub',
    mark: 'GH',
    handle: '@scsbalaji',
    url: 'https://github.com/scsbalaji',
    context: 'Source for everything on this site, plus the smaller tools that never got a write-up.',
  },
  {
    platform: 'LinkedIn',
    mark: 'IN',
    handle: 'scsbalaji',
    url: 'https://www.linkedin.com/in/scsbalaji',
    context: 'Full professional history and the best place to reach me about roles.',
  },
  {
    platform: 'LeetCode',
    mark: 'LC',
    handle: '@scsbalaji',
    url: 'https://leetcode.com/u/scsbalaji',
    context: 'Daily problem-solving practice — mostly graphs and dynamic programming lately.',
  },
  {
    platform: 'GeeksforGeeks',
    mark: 'GF',
    handle: 'scsbalaji',
    url: 'https://www.geeksforgeeks.org/user/scsbalaji',
    context: 'Practice track and the occasional article on data structures.',
  },
  {
    platform: 'Kaggle',
    mark: 'KG',
    handle: '@scsbalaji',
    url: 'https://www.kaggle.com/scsbalaji',
    context: 'Notebooks and competition work, largely tabular and vision problems.',
  },
  {
    platform: 'Credly',
    mark: 'CR',
    handle: 'scsbalaji',
    url: 'https://www.credly.com/users/scsbalaji',
    context: 'Verifiable badges for every certification listed above.',
  },
  {
    platform: 'Cloud Skills Boost',
    mark: 'GC',
    handle: 'scsbalaji',
    url: 'https://www.cloudskillsboost.google/public_profiles/scsbalaji',
    context: 'Google Cloud labs and learning paths, with completed skill badges.',
  },
];
