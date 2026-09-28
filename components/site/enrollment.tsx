'use client'

import { motion } from 'motion/react'
import { SectionHeading } from './section-heading'

const EASE = [0.22, 1, 0.36, 1] as const

const steps = [
  { step: 'Step 1', title: 'Go through the prospectus and key school information.' },
  { step: 'Step 2', title: 'Complete the admission form online or at the reception desk.' },
  { step: 'Step 3', title: 'Prepare for and pass the entrance assessment for the chosen class.' },
  { step: 'Step 4', title: 'Welcome to the Ursuline Convent School family!' },
]

export function Enrollment() {
  return (
    <section id="admission" className="overflow-x-clip bg-brand-blue">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-5 lg:px-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-2"
        >
          <SectionHeading light eyebrow="Steps for Enrollment" title="Preparing Children for a Bright Future" />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            className="mt-6 text-xl font-semibold text-white"
          >
            Education · Inspiration · Success
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            className="mt-4 leading-relaxed text-white/80"
          >
            Our campus is built around the needs of young, growing learners, with a supportive atmosphere that makes
            every school day something to look forward to.
          </motion.p>
          <motion.a
            href="/admission/enquiry"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2, delay: 0 } }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-block rounded-sm bg-primary px-7 py-3 font-bold text-primary-foreground transition-colors hover:bg-white hover:text-navy"
          >
            Enquire Now
          </motion.a>
        </motion.div>

        {/* STEPS */}
        <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 40, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
              className="group relative rounded-sm border border-white/20 bg-white/5 p-7 transition-colors duration-300 hover:border-primary hover:bg-white/10"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15 + 0.25, duration: 0.5, ease: EASE }}
                className="inline-block font-heading text-6xl font-extrabold text-white/10 transition-colors duration-300 group-hover:text-primary/40"
                aria-hidden
              >
                {`0${i + 1}`}
              </motion.span>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{s.title}</h3>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}