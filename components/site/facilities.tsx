'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { SectionHeading } from './section-heading'

const EASE = [0.22, 1, 0.36, 1] as const

const facilities = [
  {
    image: '/images/7.png',
    title: 'Extra-Curricular Activities',
    text: 'Hands-on activities that bring classroom concepts to life and deepen understanding.',
  },
  {
    image: '/images/img7.jpg',
    title: 'Sports',
    text: 'Games and athletics that teach teamwork, fair play, discipline and lifelong health.',
  },
  {
    image: '/images/fr3.png',
    title: 'Co-Curricular',
    text: 'A secure, caring setting that nurtures social, emotional, cultural and physical growth.',
  },
  {
    image: '/images/trans.png',
    title: 'Transportation',
    text: 'Safe, reliable school buses so the journey to and from school is stress-free.',
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="overflow-x-clip bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Facilities"
          title="Always Seeking the Best for Our Students"
          className="mx-auto max-w-3xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-muted-foreground"
        >
          Ursuline Convent School inspires children to explore, create, communicate and stay optimistic. We believe education is not about
          filling a vessel — it is about lighting a spark.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, index) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
              className="group overflow-hidden rounded-sm bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="relative border-t-4 border-primary p-6">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: '2.5rem' }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.5, ease: EASE }}
                  className="mb-3 block h-0.5 bg-primary"
                  aria-hidden
                />
                <h3 className="text-lg font-bold uppercase text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}