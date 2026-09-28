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


'use client'

import {
  Eye,
  HeartHandshake,
  Target,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { motion } from 'motion/react'
import { CoreValues } from '@/components/site/core-values'

const EASE = [0.22, 1, 0.36, 1] as const

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

export default function MissionVisionContent() {
  return (
    <>
      {/* =====================================================
          VISION / MISSION / VALUES / STRENGTHS
      ====================================================== */}
      <section className="mx-auto grid max-w-7xl gap-6 overflow-x-clip px-4 py-20 md:grid-cols-2 lg:px-8">
        {blocks.map(({ icon: Icon, title, text, list }, index) => (
          <motion.article
            key={title}
            initial={{
              opacity: 0,
              y: 60,
              x: index % 2 === 0 ? -25 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.75,
              ease: EASE,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.25,
              },
            }}
            className="group flex flex-col gap-5 rounded-sm bg-navy p-10 text-white shadow-md"
          >
            {/* Icon */}
            <motion.span
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -45,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                delay: 0.15 + index * 0.12,
                type: 'spring',
                stiffness: 240,
                damping: 15,
              }}
              whileHover={{
                scale: 1.12,
                rotate: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="flex size-14 items-center justify-center rounded-full bg-primary"
            >
              <Icon
                className="size-7"
                aria-hidden
              />
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                delay: 0.25 + index * 0.12,
                duration: 0.5,
                ease: EASE,
              }}
              className="font-heading text-3xl font-extrabold"
            >
              {title}
            </motion.h2>

            {/* Description */}
            {text && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  delay: 0.35 + index * 0.12,
                  duration: 0.6,
                  ease: EASE,
                }}
                className="leading-relaxed text-white/80"
              >
                {text}
              </motion.p>
            )}

            {/* List */}
            {list && (
              <ul className="flex flex-col gap-3">
                {list.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: false,
                    }}
                    transition={{
                      delay:
                        0.35 +
                        index * 0.12 +
                        itemIndex * 0.1,
                      duration: 0.5,
                      ease: EASE,
                    }}
                    className="flex items-start gap-3 leading-relaxed text-white/80"
                  >
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        delay:
                          0.4 +
                          index * 0.12 +
                          itemIndex * 0.1,
                        type: 'spring',
                        stiffness: 250,
                        damping: 15,
                      }}
                    >
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        aria-hidden
                      />
                    </motion.span>

                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Bottom animated line */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: '100%',
                opacity: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                delay: 0.55 + index * 0.12,
                duration: 0.7,
                ease: EASE,
              }}
              className="mt-auto h-px bg-white/10"
            />
          </motion.article>
        ))}
      </section>

      {/* =====================================================
          THE URSULINE TRADITION
      ====================================================== */}
      <section className="bg-muted py-20 overflow-x-clip">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
          >
            <h2 className="text-center font-heading text-3xl font-extrabold text-navy md:text-4xl">
              The Ursuline Tradition
            </h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
                ease: EASE,
              }}
              className="mt-2 text-center font-medium uppercase tracking-wide text-primary"
            >
              Aims &amp; Objectives
            </motion.p>

            {/* Animated divider */}
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 64,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
                ease: EASE,
              }}
              className="mx-auto mt-4 h-1 bg-primary"
              aria-hidden
            />
          </motion.div>

          {/* Historical Content */}
          <div className="mt-10 flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
            >
              The Congregation of the Ursulines of Tildonk was founded in 1832 by Reverend Fr. John Cornelius
              Martin Lambertz, Parish Priest of Tildonk, in Belgium &mdash; one of 39 branches of the Ursulines
              founded in 1535 by St. Angela Merici in Italy. St. Angela chose St. Ursula as patroness of the
              order; this saint has, for centuries, been looked upon as patroness of virgins, teachers and
              students. Today the daughters of St. Angela, known as the Ursulines, number about 16,000, spread
              all over the world.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: EASE,
              }}
            >
              The first Ursuline Sisters came to Ranchi on 13th January 1903. At present there are about 50
              houses of the Ursulines in India. The education of girls and women is the main work of the
              Ursulines; their purpose in education is to renew family and social life.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: EASE,
              }}
            >
              In June 1980, the Associated Cement Company, Khalari, handed over its six-month-old Modern English
              Medium School to the Ursuline Sisters. The school is open to students of all castes and creeds;
              their religious feelings and freedom of conscience are respected in the school, though any public
              and organized worship other than Catholic may not be carried out on the school premises.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: EASE,
              }}
            >
              The aim of the school is to prepare students spiritually, intellectually, morally and socially to
              live as worthy citizens in society and in the world today. Whatever the necessary changes in
              educational structures and methods, there are certain emphases which the Ursuline tradition seeks
              to value and retain:
            </motion.p>
          </div>

          {/* =================================================
              TRADITION EMPHASES
          ================================================== */}
          <motion.ul
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: EASE,
            }}
            className="mt-8 flex flex-col gap-4 rounded-sm bg-background p-8 shadow-md"
          >
            {traditionEmphases.map((item, index) => (
              <motion.li
                key={item}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.1,
                }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                  ease: EASE,
                }}
                whileHover={{
                  x: 5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="flex items-start gap-3 leading-relaxed text-navy"
              >
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    type: 'spring',
                    stiffness: 250,
                    damping: 15,
                  }}
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                </motion.span>

                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Closing Paragraph */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              ease: EASE,
            }}
            className="mt-8 leading-relaxed text-muted-foreground"
          >
            We want our students to be persons for others. Values like deceit, egoism, a craze for possession and
            a spirit of competition that takes advantage of the weakness of others have no room in our
            educational purpose.
          </motion.p>

          {/* =================================================
              VISIT SCHOOL BUTTON
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: EASE,
            }}
            className="mt-10 flex justify-center"
          >
            <motion.a
              href="https://ucschoolkhalari.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: {
                  duration: 0.2,
                },
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-7 py-3 font-bold text-white transition-colors hover:bg-primary"
            >
              Visit Ursuline Convent School

              <motion.span
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <ExternalLink
                  className="size-4"
                  aria-hidden
                />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <CoreValues />
    </>
  )
}