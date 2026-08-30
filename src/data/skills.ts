/**
 * Skills, grouped into practices rather than listed as a badge wall.
 *
 * Add a group by appending to this array — the section renders every group as
 * a row and needs no other change. Deliberately no proficiency ratings.
 */

export type SkillGroup = {
  id: string;
  label: string;
  /** One editorial line on how you actually work in this area. */
  summary: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    summary: 'Comfortable moving between typed application code and quick scripting.',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'Bash', 'C'],
  },
  {
    id: 'web',
    label: 'Web Development',
    summary: 'Server-first rendering, accessible interfaces, honest performance budgets.',
    items: [
      'React',
      'Next.js',
      'Astro',
      'Node.js',
      'Express',
      'FastAPI',
      'Tailwind CSS',
      'REST APIs',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    summary: 'Reproducible infrastructure, containerised workloads, pipelines that fail loudly.',
    items: [
      'AWS',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Linux',
      'Nginx',
      'Prometheus',
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    summary: 'From notebook to endpoint — training, evaluation, and serving models in production.',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Hugging Face',
      'LangChain',
      'OpenCV',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    summary: 'The day-to-day surface: version control, data stores, and deployment targets.',
    items: [
      'Git',
      'GitHub',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Firebase',
      'Vercel',
      'Postman',
      'VS Code',
    ],
  },
];
