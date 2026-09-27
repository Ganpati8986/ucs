// import type { Metadata } from 'next'
// import { Eye, Target } from 'lucide-react'
// import { PageBanner } from '@/components/site/page-banner'
// import { CoreValues } from '@/components/site/core-values'

// export const metadata: Metadata = { title: 'Mission & Vision' }

// const blocks = [
//   {
//     icon: Eye,
//     title: 'Our Vision',
//     text: 'To be a school where every child grows into a confident, compassionate and responsible citizen, equipped with knowledge, character and the curiosity to keep learning for life.',
//   },
//   {
//     icon: Target,
//     title: 'Our Mission',
//     text: 'To provide a joyful, value-based and student-centred education that balances academic excellence with sport, arts and life skills, in partnership with parents and the community.',
//   },
// ]

// export default function MissionVisionPage() {
//   return (
//     <>
//       <PageBanner title="Mission & Vision" trail={[{ label: 'About', href: '/about' }]} />
//       <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-2 lg:px-8">
//         {blocks.map(({ icon: Icon, title, text }) => (
//           <article key={title} className="flex flex-col gap-5 rounded-sm bg-navy p-10 text-white">
//             <span className="flex size-14 items-center justify-center rounded-full bg-primary">
//               <Icon className="size-7" aria-hidden />
//             </span>
//             <h2 className="font-heading text-3xl font-extrabold">{title}</h2>
//             <p className="leading-relaxed text-white/80">{text}</p>
//           </article>
//         ))}
//       </section>
//       <CoreValues />
//     </>
//   )
// }


import type { Metadata } from 'next'
import { Eye, HeartHandshake, Target, TrendingUp, CheckCircle2, ExternalLink } from 'lucide-react'
import { PageBanner } from '@/components/site/page-banner'
import { CoreValues } from '@/components/site/core-values'

export const metadata: Metadata = { title: 'Mission & Vision' }

const blocks = [
  {
    icon: Eye,
    title: 'Vision Statement',
    text: 'To facilitate all-round development of each student through a sound spiritual, intellectual, emotional and physical education based on human values of love, truth, justice and peace, to serve the whole of humanity.',
  },
  {
    icon: Target,
    title: 'Mission Statement',
    text: 'To provide a safe and nurturing environment that promotes academic excellence, and to empower every student through education.',
  },
  {
    icon: HeartHandshake,
    title: "School's Values",
    text: 'Practicing equality, cordial relationships, an inclusive environment and positive thinking.',
  },
  {
    icon: TrendingUp,
    title: 'Areas of Strength',
    list: [
      'Providing opportunities to the teachers for professional development.',
      'A conducive atmosphere for teachers to work to their potential.',
      'A platform for students to explore and grow their talents.',
    ],
  },
]

const traditionEmphases = [
  'A lively concern for the personal vocation and moral formation of each student.',
  'Preparation of students for their influential role in the family and in society, especially in the moral sphere.',
  'A real care for the less able and under-privileged, so that they may develop their talents and gifts.',
  'The formation of a Christian conscience regarding social justice.',
  'Training in making responsible personal decisions, and in accepting leadership through genuine conviction and a sense of right values.',
  'A world view that transcends religious differences, national barriers and economic pressures.',
]

export default function MissionVisionPage() {
  return (
    <>
      <PageBanner title="Mission & Vision" trail={[{ label: 'About', href: '/about' }]} />

      {/* Vision / Mission / Values / Strengths */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-2 lg:px-8">
        {blocks.map(({ icon: Icon, title, text, list }) => (
          <article key={title} className="flex flex-col gap-5 rounded-sm bg-navy p-10 text-white">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary">
              <Icon className="size-7" aria-hidden />
            </span>
            <h2 className="font-heading text-3xl font-extrabold">{title}</h2>
            {text && <p className="leading-relaxed text-white/80">{text}</p>}
            {list && (
              <ul className="flex flex-col gap-3">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-white/80">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      {/* The Ursuline Tradition — Aims and Objectives */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-extrabold text-navy md:text-4xl">
            The Ursuline Tradition
          </h2>
          <p className="mt-2 text-center font-medium uppercase tracking-wide text-primary">
            Aims &amp; Objectives
          </p>
          <div className="mx-auto mt-4 h-1 w-16 bg-primary" aria-hidden />

          <div className="mt-10 flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              The Congregation of the Ursulines of Tildonk was founded in 1832 by Reverend Fr. John Cornelius
              Martin Lambertz, Parish Priest of Tildonk, in Belgium &mdash; one of 39 branches of the Ursulines
              founded in 1535 by St. Angela Merici in Italy. St. Angela chose St. Ursula as patroness of the
              order; this saint has, for centuries, been looked upon as patroness of virgins, teachers and
              students. Today the daughters of St. Angela, known as the Ursulines, number about 16,000, spread
              all over the world.
            </p>
            <p>
              The first Ursuline Sisters came to Ranchi on 13th January 1903. At present there are about 50
              houses of the Ursulines in India. The education of girls and women is the main work of the
              Ursulines; their purpose in education is to renew family and social life.
            </p>
            <p>
              In June 1980, the Associated Cement Company, Khalari, handed over its six-month-old Modern English
              Medium School to the Ursuline Sisters. The school is open to students of all castes and creeds;
              their religious feelings and freedom of conscience are respected in the school, though any public
              and organized worship other than Catholic may not be carried out on the school premises.
            </p>
            <p>
              The aim of the school is to prepare students spiritually, intellectually, morally and socially to
              live as worthy citizens in society and in the world today. Whatever the necessary changes in
              educational structures and methods, there are certain emphases which the Ursuline tradition seeks
              to value and retain:
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-4 rounded-sm bg-background p-8 shadow-md">
            {traditionEmphases.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-relaxed text-navy">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 leading-relaxed text-muted-foreground">
            We want our students to be persons for others. Values like deceit, egoism, a craze for possession and
            a spirit of competition that takes advantage of the weakness of others have no room in our
            educational purpose.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://ucschoolkhalari.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-7 py-3 font-bold text-white hover:bg-primary"
            >
              Visit Ursuline Convent School
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <CoreValues />
    </>
  )
}
