'use client'

import { Award, BookOpen, Lightbulb, Presentation, Search, Users } from 'lucide-react'
import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

const values = [
  { icon: BookOpen, title: 'Commitment', text: 'Devoted to giving every child a sound education and a successful path ahead.' },
  { icon: Award, title: 'Excellence', text: 'Raising the bar so students have stronger academic and career prospects.' },
  { icon: Presentation, title: 'Responsibility', text: 'We own our role in nurturing knowledge, morals and values in each learner.' },
  { icon: Lightbulb, title: 'Inspiration', text: 'Motivating children with the encouragement they need to flourish.' },
  { icon: Search, title: 'Opportunities', text: 'Opening doors so every student can grow into their full potential.' },
  { icon: Users, title: 'Mentorship', text: 'Thoughtful guidance that supports each child at every stage of growth.' },
]

export function CoreValues() {
  return (
    <section id="values" className="mx-auto max-w-7xl overflow-x-clip px-4 py-20 lg:px-8">
      {/* HEADING */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl font-bold uppercase md:text-4xl"
        >
          <span className="text-primary">Our Core</span> <span className="text-navy">Values</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          className="mt-2 text-muted-foreground"
        >
          Values That Shape the Future
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '4rem' }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
          className="mx-auto mt-4 h-1 bg-primary"
          aria-hidden
        />
      </div>

      {/* CARDS */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(({ icon: Icon, title, text }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: (index % 3) * 0.15, duration: 0.7, ease: EASE }}
            whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
            className="group flex min-h-56 flex-col items-center justify-center rounded-sm bg-muted p-8 text-center shadow-md transition-colors hover:bg-primary"
          >
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: (index % 3) * 0.15 + 0.3,
                type: 'spring',
                stiffness: 260,
                damping: 15,
              }}
              className="flex"
            >
              <Icon className="size-8 text-navy group-hover:text-white" aria-hidden />
            </motion.span>
            <h3 className="mt-4 text-2xl font-bold uppercase text-navy group-hover:text-white">{title}</h3>
            <p className="mt-3 max-h-0 overflow-hidden text-sm text-white opacity-0 transition-all group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}