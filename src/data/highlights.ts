/**
 * Certifications, hackathons, and technical milestones.
 *
 * Compact by design — a scannable strip, not a second résumé. If this list
 * grows past ~8 entries, prune rather than paginate.
 */

export type Highlight = {
  title: string;
  /** Issuer, event, or platform. */
  source: string;
  /** Year, or "Mon YYYY" for something recent. */
  date: string;
  kind: 'Certification' | 'Award' | 'Hackathon' | 'Milestone';
  /** One short line of context. Optional. */
  detail?: string;
  /** Credential or write-up link. Optional. */
  url?: string;
};

// TODO: replace with your real certifications and achievements. Delete rather
// than pad — an honest short list reads better than a long speculative one.
export const highlights: Highlight[] = [
  {
    title: 'Associate Cloud Engineer',
    source: 'Google Cloud',
    date: '2026',
    kind: 'Certification',
    detail: 'Deploying and operating workloads on Google Cloud.',
    url: 'https://www.credly.com/users/scsbalaji',
  },
  {
    title: 'Solutions Architect – Associate',
    source: 'Amazon Web Services',
    date: '2025',
    kind: 'Certification',
    detail: 'Designing resilient, cost-aware architectures on AWS.',
    url: 'https://www.credly.com/users/scsbalaji',
  },
  {
    title: 'Runner-up, Cloud Track',
    source: 'Smart India Hackathon',
    date: '2025',
    kind: 'Hackathon',
    detail: 'Built a resource-reclamation service for idle cloud workloads in 36 hours.',
  },
  {
    title: '30 Google Cloud skill badges',
    source: 'Cloud Skills Boost',
    date: '2025',
    kind: 'Milestone',
    detail: 'Hands-on labs across compute, networking, data, and ML.',
    url: 'https://www.cloudskillsboost.google/public_profiles/scsbalaji',
  },
  {
    title: '500+ problems solved',
    source: 'LeetCode',
    date: '2025',
    kind: 'Milestone',
    detail: 'Consistent practice in data structures, graphs, and dynamic programming.',
    url: 'https://leetcode.com/u/scsbalaji',
  },
  {
    title: 'TensorFlow Developer Certificate',
    source: 'TensorFlow',
    date: '2024',
    kind: 'Certification',
    detail: 'Building and training models for vision, text, and time-series tasks.',
  },
];
