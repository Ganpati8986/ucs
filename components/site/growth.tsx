'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CalendarCheck, House, PenTool } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

const growthImages = [
  '/images/topstudents1.png',
  '/images/topstudents2.png',
]

const highlights = [
  {
    icon: House,
    title: 'Building Academic Careers',
    text: 'Supporting academic success alongside all-round personal development.',
  },
  {
    icon: PenTool,
    title: 'Great Opportunities',
    text: 'Room to grow in academics, arts, sport and leadership.',
  },
]

export function Growth() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1])

  useEffect(() => {
    const id = setInterval(
      () => setSlide(([i]) => [(i + 1) % growthImages.length, 1]),
      5000
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section id="growth" className="grid overflow-x-clip lg:grid-cols-[2fr_3fr]">
      {/* LEFT CONTENT */}
      <div className="bg-primary px-6 py-16 text-white md:px-12">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-lg text-balance text-3xl font-bold leading-tight md:text-4xl"
        >
          Ursuline Convent tracks every child&apos;s growth and development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          className="mt-5 max-w-lg font-medium"
        >
          We invest in strong, trusting relationships with our students so they grow in independence, confidence and
          academic understanding.
        </motion.p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: EASE }}
              whileHover={{ y: -6, transition: { duration: 0.25, delay: 0 } }}
            >
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.5 + i * 0.15,
                  type: 'spring',
                  stiffness: 260,
                  damping: 15,
                }}
                className="inline-flex"
              >
                <Icon className="size-10" aria-hidden />
              </motion.span>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-white/85">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/admission/enquiry"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2, delay: 0 } }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 font-bold transition-colors hover:bg-white hover:text-navy"
        >
          <CalendarCheck className="size-5" aria-hidden />
          Schedule an Appointment
        </motion.a>
      </div>

      {/* RIGHT IMAGE CAROUSEL */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative min-h-96 overflow-hidden bg-white"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute inset-0"
          >
            <Image
              src={growthImages[index]}
              alt="Students at Ursuline Convent School"
              fill
              priority={index === 0}
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {growthImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setSlide([i, i > index ? 1 : -1])}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-6 bg-navy' : 'w-2 bg-navy/40'
              )}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}