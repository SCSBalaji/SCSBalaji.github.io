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
    institution: 'Neil Gogte Institute of Technology',
    qualification: 'B.E.',
    field: 'Computer Science and Engineering',
    location: 'Telangana, IN',
    start: '2024',
    end: '2027',
    detail:
      'Coursework in JAVA, Object Oriented Programming, Database Management System, Artificial Intellignece, Machine Learning, and Computer Networks.',
  },
  {
    institution: 'Government Institute of Electronics',
    qualification: 'Diploma',
    field: 'Artificial Intelligence & Machine Learning',
    location: 'Telangana, IN',
    start: '2021',
    end: '2024',
    detail: 'First class with distinction. Introduced to programming languages and databases here.',
  },
  {
    institution: 'Defence Laboratories School',
    qualification: 'CBSE',
    field: '6th Class to 10th Class',
    location: 'Telangana, IN',
    start: '2016',
    end: '2021',
  },
];
