export type Facility = {
  slug: string
  title: string
  image: string
  summary: string
  body: string[]
  highlights: string[]
}

export const facilities: Facility[] = [
  {
    slug: 'sports',
    title: 'Sports',
    image: '/images/3.png',
    summary: 'Games and athletics that teach teamwork, fair play, discipline and lifelong health.',
    body: [
      'Physical education is part of every student\u2019s weekly timetable at Ursuline Convent School. Our spacious playgrounds and trained coaches help children discover the sports they love and build the stamina to enjoy them.',
      'Students take part in inter-house tournaments, zonal and district competitions, and an annual sports meet that celebrates effort as much as results.',
    ],
    highlights: ['Cricket, football and basketball', 'Athletics track and field events', 'Yoga and fitness sessions', 'Indoor games: chess, table tennis, carrom'],
  },
  {
    slug: 'co-curricular',
    title: 'Co-Curricular',
    image: '/images/7.png',
    summary: 'A secure, caring setting that nurtures social, emotional, cultural and physical growth.',
    body: [
      'Co-curricular programmes run alongside the academic calendar so that learning goes well beyond textbooks. Clubs, assemblies and celebrations give every child a stage.',
      'Through debates, quizzes, music, dance and art, students gain confidence, communication skills and an appreciation for culture.',
    ],
    highlights: ['Music, dance and theatre', 'Art and craft studio', 'Debate, quiz and elocution', 'Festival and cultural celebrations'],
  },
  {
    slug: 'extra-curricular',
    title: 'Extra-Curricular',
    image: '/images/fr.png',
    summary: 'Hands-on activities that bring classroom concepts to life and deepen understanding.',
    body: [
      'Science exhibitions, educational excursions and project-based activities help children connect what they learn to the real world.',
      'Our computer lab and activity rooms support coding, robotics and experiments that spark curiosity.',
    ],
    highlights: ['Science and maths exhibitions', 'Computer lab and coding club', 'Educational field trips', 'Eco and community service clubs'],
  },
  {
    slug: 'transportation',
    title: 'Transportation',
    image: '/images/trans.png',
    summary: 'Safe, reliable school buses so the journey to and from school is stress-free.',
    body: [
      'Ursuline Convent School operates a fleet of school buses covering Khalari and the nearby villages of Ranchi district. Every route is planned for safety and punctuality.',
      'Buses are driven by experienced drivers and accompanied by an attendant, and parents can contact the transport desk for route and timing details.',
    ],
    highlights: ['Routes across Khalari and nearby areas', 'Trained drivers and attendants', 'GPS-enabled buses', 'First-aid kits on every bus'],
  },
]

export function getFacility(slug: string) {
  return facilities.find((f) => f.slug === slug)
}
