'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { Megaphone, Bell, Trophy, ChevronLeft, ChevronRight, Pin } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ============================================================
   DATA
============================================================ */

const updates = [
  {
    text: 'Admission Open for Class Nursery to Class IX (Session 2026-27)',
    href: '/admission',
  },
]

const announcements = [
  {
    date: '2026',
    title: 'Admission Open for Class Nursery to Class IX (Session 2026-27)',
    image: '/images/3.png',
  },
  //   {
  //     date: '26 to 31-Dec-2025',
  //     title: 'Winter break / Cold-wave closure',
  //     image: '/images/announcements/winter-break.jpg',
  //   },
  //   {
  //     date: '3-Jan-2026',
  //     title: 'Regular school days (classes / exams)',
  //     image: '/images/announcements/regular-day.jpg',
  //   },
]

const achievers = [
  { name: '', cls: '', image: '/images/an (3).png' },
  { name: '', cls: '', image: '/images/an (7).png' },
  { name: '', cls: '', image: '/images/an (2).png' },

  { name: '', cls: '', image: '/images/an (5).png' },
  { name: '', cls: '', image: '/images/an (4).png' },
  { name: '', cls: '', image: '/images/an (8).png' },

  { name: '', cls: '', image: '/images/an (6).png' },
  { name: '', cls: '', image: '/images/an (1).png' },
]

const EASE = [0.22, 1, 0.36, 1] as const

/* ============================================================
   SHARED CARD SHELL
============================================================ */

function CardShell({
  icon,
  title,
  headerClass,
  children,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  headerClass: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay, duration: 0.7, ease: EASE }}
      whileHover={{ y: -6, transition: { duration: 0.25, delay: 0 } }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-shadow hover:shadow-xl"
    >
      <div
        className={cn(
          'flex items-center gap-2.5 px-5 py-4 font-heading text-lg font-bold text-white',
          headerClass
        )}
      >
        <motion.span
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ delay: delay + 0.3, type: 'spring', stiffness: 260, damping: 15 }}
          className="flex"
        >
          {icon}
        </motion.span>
        <span className="text-balance">{title}</span>
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </motion.div>
  )
}

/* ============================================================
   COLUMN 1 — LATEST UPDATES
============================================================ */

function LatestUpdates() {
  return (
    <CardShell
      icon={<Bell className="size-5 shrink-0" />}
      title="Latest Updates"
      headerClass="bg-gradient-to-r from-navy to-brand-blue"
      delay={0}
    >
      <div className="flex flex-1 flex-col justify-between gap-6 p-5">
        <ul className="space-y-4">
          {updates.map((u, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: EASE }}
              className="flex gap-3"
            >
              <motion.span
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                className="mt-0.5 flex"
              >
                <Pin className="size-5 shrink-0 text-primary" />
              </motion.span>
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {u.text}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={updates[0]?.href ?? '#'}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="group inline-flex w-fit items-center gap-1 self-end text-sm font-bold text-primary hover:underline"
        >
          More{' '}
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </CardShell>
  )
}

/* ============================================================
   COLUMN 2 — RECENT ANNOUNCEMENTS
============================================================ */

function RecentAnnouncements() {
  return (
    <CardShell
      icon={<Megaphone className="size-5 shrink-0" />}
      title="Recent Announcements"
      headerClass="bg-gradient-to-r from-primary to-orange-500"
      delay={0.15}
    >
      <ul className="divide-y divide-border/60 p-2">
        {announcements.map((a, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: EASE }}
            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
          >
            <div className="relative size-14 shrink-0 overflow-hidden rounded-lg border border-border">
              <Image src={a.image} alt="" fill className="object-cover" sizes="56px" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-primary">{a.date}</p>
              <p className="truncate text-sm font-medium text-foreground">{a.title}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </CardShell>
  )
}

/* ============================================================
   COLUMN 3 — ACHIEVERS CAROUSEL
============================================================ */

function AchieversCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % achievers.length), 5000)
    return () => clearInterval(id)
  }, [])

  const go = (dir: number) => setIndex((i) => (i + dir + achievers.length) % achievers.length)
  const current = achievers[index]

  return (
    <CardShell
      icon={<Trophy className="size-5 shrink-0" />}
      title="Achievers @ 2025 (Class - X)"
      headerClass="bg-gradient-to-r from-navy via-blue-600 to-white"
      delay={0.3}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center gap-4 bg-secondary/40 p-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous achiever"
          className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-transform hover:scale-110"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="relative aspect-[4/5] w-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.9 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute inset-0 overflow-hidden rounded-xl border-4 border-white shadow-lg"
            >
              <Image
                src={current.image}
                alt={current.name || `Achiever ${index + 1}`}
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next achiever"
          className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-transform hover:scale-110"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="flex gap-1.5">
          {achievers.map((a, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to achiever ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === index ? 'w-6 bg-primary' : 'w-1.5 bg-navy/30'
              )}
            />
          ))}
        </div>
      </div>
    </CardShell>
  )
}

/* ============================================================
   EXPORT — THREE-COLUMN SECTION
============================================================ */

export function HomeHighlights() {
  return (
    <section className="mx-auto max-w-7xl overflow-x-clip px-6 py-14 md:px-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <LatestUpdates />
        <RecentAnnouncements />
        <AchieversCarousel />
      </div>
    </section>
  )
}