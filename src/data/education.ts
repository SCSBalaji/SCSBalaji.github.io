/**
 * Education, newest first: degree → diploma → school.
 *
 * Kept deliberately compact — this section sits below Projects and Experience
 * in the visual hierarchy and should stay that way.
 */

export type Education = {
  institution: string;
  /** "B.E." / "Diploma" / "Higher Secondary". */
  qualification: string;
  /** The field of study, when it's separate from the qualification. */
  field?: string;
  location?: string;
  start: string;
  end: string;
  /** One line of context: focus area, coursework, result. Optional. */
  detail?: string;
};

// TODO: replace with your real institutions, dates, and details.
export const education: Education[] = [
  {
    institution: 'Anna University',
    qualification: 'B.E.',
    field: 'Computer Science and Engineering',
    location: 'Tamil Nadu, IN',
    start: '2022',
    end: '2026',
    detail:
      'Coursework in distributed systems, machine learning, and computer networks. Final-year work focused on cloud-native deployment patterns.',
  },
  {
    institution: 'Government Polytechnic College',
    qualification: 'Diploma',
    field: 'Computer Engineering',
    location: 'Tamil Nadu, IN',
    start: '2019',
    end: '2022',
    detail: 'First class with distinction. Introduced to systems programming and databases here.',
  },
  {
    institution: 'St. Joseph Higher Secondary School',
    qualification: 'Higher Secondary',
    field: 'Computer Science stream',
    location: 'Tamil Nadu, IN',
    start: '2017',
    end: '2019',
  },
];
