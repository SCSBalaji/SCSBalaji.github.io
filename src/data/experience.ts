/**
 * Work experience, newest first.
 *
 * Add an entry by prepending an object to this array — the timeline renders
 * whatever is here. Leave `end: null` for a role you're currently in.
 */

export type Experience = {
  role: string;
  organization: string;
  /** Short label — "Remote", "Bengaluru, IN", "Hybrid · Chennai". Optional. */
  location?: string;
  type?: 'Internship' | 'Full-time' | 'Part-time' | 'Freelance' | 'Open Source';
  /** `YYYY-MM`. Rendered as "Mon YYYY". */
  start: string;
  /** `YYYY-MM`, or null while ongoing. */
  end: string | null;
  /** One or two sentences on the remit — not a bullet list. */
  summary: string;
  /** Concrete outcomes. Keep to 2–3; this is a portfolio, not a résumé. */
  points?: string[];
  technologies?: string[];
};

// TODO: replace every entry below with your real experience.
export const experience: Experience[] = [
  {
    role: 'Cloud Engineering Intern',
    organization: 'Nimbus Systems',
    location: 'Remote',
    type: 'Internship',
    start: '2026-01',
    end: null,
    summary:
      'Working on the internal delivery platform — the Terraform modules, container base images, and pipelines that every product team deploys through.',
    points: [
      'Rebuilt the staging environment as reusable Terraform modules, cutting new-service provisioning from a day of manual setup to a single merge.',
      'Added container image scanning and policy gates to CI so vulnerable base layers fail the build instead of reaching staging.',
    ],
    technologies: ['Terraform', 'AWS', 'Docker', 'GitHub Actions', 'Kubernetes'],
  },
  {
    role: 'Machine Learning Intern',
    organization: 'Verdant Analytics',
    location: 'Chennai, IN',
    type: 'Internship',
    start: '2025-05',
    end: '2025-08',
    summary:
      'Took a document-classification prototype from a research notebook to a versioned service the product team could call.',
    points: [
      'Restructured the training pipeline around reproducible runs and a held-out evaluation set, replacing ad-hoc notebook accuracy checks.',
      'Shipped the model behind a FastAPI endpoint with batching and a cached tokenizer, holding p95 latency under 200 ms.',
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker'],
  },
  {
    role: 'Technical Lead',
    organization: 'Campus Developer Community',
    location: 'On campus',
    type: 'Open Source',
    start: '2024-08',
    end: '2025-04',
    summary:
      'Ran the build side of the student developer community — workshops, project mentoring, and the tooling everyone used.',
    points: [
      'Led hands-on sessions on Git, containers, and cloud fundamentals for roughly 120 students across two semesters.',
      'Mentored four project teams through their first end-to-end deployment, including CI and environment configuration.',
    ],
    technologies: ['Git', 'Linux', 'Docker', 'Google Cloud'],
  },
];
