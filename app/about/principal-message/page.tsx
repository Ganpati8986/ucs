'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { motion } from 'motion/react'
import { PageBanner } from '@/components/site/page-banner'
import { SectionHeading } from '@/components/site/section-heading'

const EASE = [0.22, 1, 0.36, 1] as const

export default function PrincipalMessagePage() {
  const paragraphs = [
    {
      text: (
        <>
          As we stand at the threshold of a new academic session, I extend a hearty and warm welcome to all my
          students, staff and parents. Each academic year is a new height scaled, another dream realized, with new
          targets set for the future. Each member of this institution is devoted to turning dreams and aspirations
          into reality through sincerity and perseverance.
        </>
      ),
    },
    {
      text: (
        <>
          We, the faculty members of Ursuline Convent School Khalari, always try to maintain the highest quality in
          academic standards and provide the most conducive environment for our students&apos; holistic growth and
          development. We also strive to instill the core values of respect, integrity, compassion and excellence in
          our students so they meet the ever-changing and global challenges. Our dedicated and highly qualified staff
          stand as exemplary role models for our students, thereby keeping the ethos of our school shining bright.
        </>
      ),
    },
    {
      text: (
        <>
          Nelson Mandela rightly said, &ldquo;Education is the most powerful weapon you can use to change the
          world.&rdquo; There is only one thing that changes the world &mdash; it is education, and UCSK is the pillar
          of formal education. Along with providing academics, we aspire to instill values, life skills and habits
          that make our students stand out and make a difference in society. We provide our students with ample
          opportunities to develop 21st-century skills such as collaboration, teamwork, critical thinking, emotional
          balance, time management and much more.
        </>
      ),
    },
    {
      text: (
        <>
          &ldquo;Education is a shared commitment between dedicated teachers, motivated students and enthusiastic
          parents with high expectations.&rdquo; We wish to thank all the parents for their faith in UC School.
          Let&apos;s partner together, so that we can see children being successful in whatever path they choose to
          tread.
        </>
      ),
    },
  ]

  return (
    <>
      <PageBanner
        title="Principal Message"
        trail={[{ label: 'About', href: '/about' }]}
      />

      <section className="mx-auto grid max-w-7xl items-start gap-12 overflow-x-clip px-4 py-20 lg:grid-cols-5 lg:px-8">

        {/* =========================
            LEFT: PRINCIPAL IMAGE
        ========================== */}
        <motion.figure
          initial={{ opacity: 0, x: -70, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          className="lg:col-span-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: EASE,
            }}
            whileHover={{
              scale: 1.02,
              transition: {
                duration: 0.3,
              },
            }}
            className="relative aspect-square overflow-hidden rounded-sm border-b-4 border-primary shadow-lg"
          >
            <Image
              src="/images/nirmala.png"
              alt="Principal of Ursuline Convent School, Khalari"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />

            {/* Subtle image overlay animation */}
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: EASE,
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/10 skew-x-12"
            />
          </motion.div>

          <motion.figcaption
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.35,
              duration: 0.6,
              ease: EASE,
            }}
            className="mt-4"
          >
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.45,
                duration: 0.5,
                ease: EASE,
              }}
              className="font-heading text-xl font-bold text-navy"
            >
              The Principal
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.55,
                duration: 0.5,
                ease: EASE,
              }}
              className="text-sm text-muted-foreground"
            >
              Ursuline Convent School, Khalari
            </motion.p>
          </motion.figcaption>
        </motion.figure>

        {/* =========================
            RIGHT: MESSAGE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          className="lg:col-span-3"
        >
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
          >
            <SectionHeading
              eyebrow="From the Principal's Desk"
              title="Greetings from the Principal's Desk"
            />
          </motion.div>

          {/* Quote Icon */}
          <motion.div
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
            viewport={{ once: false }}
            transition={{
              delay: 0.25,
              type: 'spring',
              stiffness: 220,
              damping: 15,
            }}
            className="mt-6 origin-left"
          >
            <Quote
              className="size-10 text-primary"
              aria-hidden
            />
          </motion.div>

          {/* Message Paragraphs */}
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
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
                  delay: 0.15 + index * 0.12,
                  duration: 0.6,
                  ease: EASE,
                }}
              >
                {paragraph.text}
              </motion.p>
            ))}

            {/* Principal Signature */}
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
                amount: 0.2,
              }}
              transition={{
                delay: 0.65,
                duration: 0.7,
                ease: EASE,
              }}
              className="font-semibold text-navy"
            >
              Principal,
              <br />
              Dr. Sr. Nirmala
              <br />
              Ursuline Convent School, Khalari
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  )
}