// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { ArrowLeft, ArrowRight } from 'lucide-react'
// import { cn } from '@/lib/utils'

// const slides = [
//   {
//     image: '/images/hero-campus.png',
//     title: 'Quality Education, Brighter Tomorrows',
//     text: 'At BVM, every child gets a first-rate education and the encouragement to chase big goals while building strong character.',
//   },
//   {
//     image: '/images/classroom.png',
//     title: 'Where Curious Minds Thrive',
//     text: 'Bright classrooms, caring teachers and a curriculum that makes curiosity the heart of every lesson.',
//   },
//    {
//     image: '/images/hero-campus.png',
//     title: 'Quality Education, Brighter Tomorrows',
//     text: 'At BVM, every child gets a first-rate education and the encouragement to chase big goals while building strong character.',
//   },
//   {
//     image: '/images/classroom.png',
//     title: 'Where Curious Minds Thrive',
//     text: 'Bright classrooms, caring teachers and a curriculum that makes curiosity the heart of every lesson.',
//   },
// ]

// export function Hero() {
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
//     return () => clearInterval(id)
//   }, [])

//   const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length)

//   return (
//     <section id="home" aria-roledescription="carousel" aria-label="Highlights" className="relative h-[560px] overflow-hidden md:h-[680px]">
//       {slides.map((slide, i) => (
//         <div
//           key={slide.title}
//           className={cn('absolute inset-0 transition-opacity duration-1000', i === index ? 'opacity-100' : 'opacity-0')}
//           aria-hidden={i !== index}
//         >
//           <Image src={slide.image} alt="" fill priority={i === 0} className="object-cover" sizes="100vw" />
//           <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 via-brand-blue/30 to-transparent" />
//           <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-20">
//             <h1 className="max-w-3xl text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
//               {slide.title}
//             </h1>
//             <p className="mt-6 max-w-xl text-pretty text-lg font-medium text-white/95">{slide.text}</p>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a href="/admission" className="rounded-sm bg-primary px-7 py-3 font-bold text-primary-foreground hover:bg-white hover:text-navy">
//                 Admissions Open
//               </a>
//               <a href="/about" className="rounded-sm border-2 border-white px-7 py-3 font-bold text-white hover:bg-white hover:text-navy">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={() => go(-1)}
//         aria-label="Previous slide"
//         className="absolute left-4 top-1/2 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full border-4 border-navy bg-white text-navy hover:bg-primary hover:text-white md:flex"
//       >
//         <ArrowLeft className="size-5" />
//       </button>
//       <button
//         type="button"
//         onClick={() => go(1)}
//         aria-label="Next slide"
//         className="absolute right-4 top-1/2 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full border-4 border-navy bg-white text-navy hover:bg-primary hover:text-white md:flex"
//       >
//         <ArrowRight className="size-5" />
//       </button>

//       <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
//         {slides.map((s, i) => (
//           <button
//             key={s.title}
//             type="button"
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             aria-current={i === index}
//             className={cn('h-2 rounded-full transition-all', i === index ? 'w-8 bg-primary' : 'w-2 bg-white/70')}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: '/images/sch.png',
    title: 'Shaping Futures with Purpose',
    text: 'At Ursuline Convent School, we nurture confident learners through quality education, strong values, and opportunities to discover their true potential.',
  },
  {
    image: '/images/img.JPG',
    title: 'Learning Beyond the Classroom',
    text: 'Education comes alive through meaningful experiences that encourage students to explore, question, create, and grow with confidence.',
  },
  {
    image: '/images/img3.JPG',
    title: 'Inspiring Curious Young Minds',
    text: 'With caring teachers and an engaging learning environment, we encourage curiosity, creativity, and a lifelong love for learning.',
  },
  {
    image: '/images/img2.JPG',
    title: 'Building Character for Life',
    text: 'We believe true education goes beyond academics by developing discipline, kindness, responsibility, and respect in every student.',
  },
  {
    image: '/images/img8.JPG',
    title: 'Discover. Learn. Achieve.',
    text: 'Every child is encouraged to explore their strengths, overcome challenges, and take confident steps toward a successful future.',
  },
  {
    image: '/images/img6.JPG',
    title: 'Growing Together, Achieving Together',
    text: 'Through a supportive school community, we help students develop confidence, leadership, and the skills they need for tomorrow.',
  },
]
// Cycle: slide-in from right -> zoom from center -> slide-in from left -> slide-in from top -> repeat.
// A 5th, 6th... slide just continues the same cycle (index % 4).
const enterAnimations = ['enter-right', 'enter-zoom', 'enter-left', 'enter-top']

const announcements = [
  // 'Admissions open for session 2026-27',
  // 'Annual Day celebration on 15th December',
  // 'Class X & XII board results declared',
  // 'Winter vacation from 25th Dec to 2nd Jan',
  'Admissions Open for Nursery to Class IX (Session 2026-2027)'
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [transitionCount, setTransitionCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  // Bumps every time the active slide changes, so the entering slide's
  // content div gets a fresh key and its enter-animation replays.
  useEffect(() => {
    setTransitionCount((c) => c + 1)
  }, [index])

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative h-[426px] overflow-hidden md:h-[560px]"
    >
      {slides.map((slide, i) => {
        const isActive = i === index
        const variant = enterAnimations[i % enterAnimations.length]

        return (
          <div
            key={i}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              isActive ? 'z-10 opacity-100' : 'z-0 opacity-0'
            )}
            aria-hidden={!isActive}
          >
            {/* Keyed so it remounts (and replays its enter animation) only
                the moment this slide becomes active. */}
          <div
  key={isActive ? `active-${transitionCount}` : `idle-${i}`}
  className={cn('absolute inset-0', isActive && variant)}
>
  <div className="ken-burns absolute inset-0">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
                </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 via-brand-blue/30 to-transparent" />
              <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-20">
                <h1 className="max-w-3xl text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg font-medium text-white/95">
                  {slide.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/admission"
                    className="rounded-sm bg-primary px-7 py-3 font-bold text-primary-foreground hover:bg-white hover:text-navy"
                  >
                    Admissions Open
                  </a>
                  <a
                    href="/about"
                    className="rounded-sm border-2 border-white px-7 py-3 font-bold text-white hover:bg-white hover:text-navy"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Arrows + dots — single row, no duplicate dots block below this */}
      <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 md:bottom-16">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="hidden items-center justify-center text-primary transition-colors hover:text-primary/70 md:flex"
        >
          <ArrowLeft className="size-6" />
        </button>

        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-8 bg-primary' : 'w-2 bg-white/70'
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="hidden items-center justify-center text-primary transition-colors hover:text-primary/70 md:flex"
        >
          <ArrowRight className="size-6" />
        </button>
      </div>

      {/* Announcement marquee — carousel footer */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-3 bg-navy/90 px-4 py-2 backdrop-blur-sm md:px-6">
        <div className="flex shrink-0 items-center gap-2 text-white">
          <Bell className="bell-ring size-5 text-primary" />
          <span className="hidden font-heading text-sm font-bold uppercase tracking-wide sm:inline">
            Announcements
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap text-sm font-medium text-white/90">
            <span className="flex gap-16">
              {announcements.map((a, idx) => (
                <span key={`a-${idx}`}>{a}</span>
              ))}
            </span>
            {/* Duplicate copy — required for a seamless loop, hidden from AT */}
            <span className="flex gap-16" aria-hidden="true">
              {announcements.map((a, idx) => (
                <span key={`b-${idx}`}>{a}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}