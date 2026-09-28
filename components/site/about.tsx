// import Image from 'next/image'
// import { CheckCircle2, GraduationCap, Smile, Sparkles } from 'lucide-react'
// import { SectionHeading } from './section-heading'

// const leftList = ['Striving for Excellence', 'Wide Opportunities', 'Inspiring Environment']
// const rightList = ['Quality Education', 'Academic Achievement', 'Dedicated Mentors']

// const stats = [
//   { value: '2500+', label: 'Total Students' },
//   { value: '2500+', label: 'Happy Families' },
//   { value: '60+', label: 'Expert Teachers' },
//   { value: '25+', label: 'Years of Trust' },
// ]

// const features = [
//   { icon: GraduationCap, title: 'Expert Teachers', text: 'Qualified, caring educators who know each child by name.' },
//   { icon: Smile, title: 'Joyful Environment', text: 'Safe, cheerful spaces designed so learning feels like play.' },
//   { icon: Sparkles, title: 'Favorable Opportunities', text: 'Clubs, events and competitions that let every talent shine.' },
// ]

// export function About() {
//   return (
//     <>
//       <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
//         <div id="gallery" className="relative">
//           <Image
//             src="/images/img.JPG"
//             alt="Students learning in a bright BVM classroom"
//             width={720}
//             height={520}
//             className="w-full rounded-sm object-cover shadow-xl"
//           />
//           <div className="absolute -bottom-6 right-6 hidden rounded-sm bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
//             <p className="font-heading text-3xl font-extrabold">CBSE</p>
//             <p className="text-sm font-medium">Affiliated, New Delhi</p>
//           </div>
//         </div>

//         <div>
//           <SectionHeading eyebrow="A Haven for Learners" title="Ursuline Convent School , Khalari" />
//           <p className="mt-5 leading-relaxed text-muted-foreground">
// Ursuline Convent School, Khalari is affiliated to the Central Board of Secondary Education, New Delhi (School Code 66246, Affiliation No. 3430050, Post – Khalari, District – Ranchi, State – Jharkhand, Pin Code – 829205). Blessed with a dedicated management, faculty and staff, the school promotes value-based education to nurture every student's talents and skills, in line with CBSE norms. Teachers regularly undergo CBSE Patna's Capacity Building Programme and in-house training via the Ranchi Sahodaya School Complex to sharpen their teaching skills, while varied competitions and co-curricular activities help students grow and prepare for future success — all within a collaborative environment built by the management, teachers, parents and students together.
//           </p>
//           <div className="mt-6 grid gap-3 sm:grid-cols-2">
//             {[leftList, rightList].map((list, i) => (
//               <ul key={i} className="flex flex-col gap-3">
//                 {list.map((item) => (
//                   <li key={item} className="flex items-center gap-2 font-medium text-navy">
//                     <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </div>
//           <p className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
//             As an open and welcoming school, we invite every student to take part and make their voice heard.
//           </p>
//         </div>
//       </section>

//       <section aria-label="School statistics" className="bg-navy">
//         <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 text-center md:grid-cols-4 lg:px-8">
//           {stats.map((s) => (
//             <div key={s.label} className="flex flex-col-reverse gap-1">
//               <dt className="text-sm font-medium uppercase tracking-wider text-white/75">{s.label}</dt>
//               <dd className="font-heading text-4xl font-extrabold text-primary md:text-5xl">{s.value}</dd>
//             </div>
//           ))}
//         </dl>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
//         <SectionHeading
//           align="center"
//           eyebrow="Together, we can change the world"
//           title="A Home of Learning that Lifts Every Student Higher"
//           className="mx-auto max-w-3xl"
//         />
//         <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted-foreground">
//           We aim to create a practical, child-centred setting where learning is genuinely fun — helping children
//           discover who they are and grow into their fullest potential.
//         </p>
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {features.map(({ icon: Icon, title, text }) => (
//             <div
//               key={title}
//               className="group rounded-sm border-b-4 border-primary bg-white p-8 text-center shadow-md transition-colors hover:bg-navy"
//             >
//               <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
//                 <Icon className="size-8" aria-hidden />
//               </span>
//               <h3 className="mt-5 text-xl font-bold uppercase text-navy group-hover:text-white">{title}</h3>
//               <p className="mt-3 text-muted-foreground group-hover:text-white/80">{text}</p>
//             </div>
//           ))}
//         </div>
//         <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
//           At Ursuline Convent School we help children gain knowledge, express themselves creatively, communicate with confidence and face
//           life with a positive attitude.
//         </p>
//       </section>
//     </>
//   )
// }




'use client'

import Image from 'next/image'
import { CheckCircle2, GraduationCap, Smile, Sparkles } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from './section-heading'

const leftList = [
  'Striving for Excellence',
  'Wide Opportunities',
  'Inspiring Environment',
]

const rightList = [
  'Quality Education',
  'Academic Achievement',
  'Dedicated Mentors',
]

const stats = [
  { value: 2500, suffix: '+', label: 'Total Students' },
  { value: 2500, suffix: '+', label: 'Happy Families' }, // TODO: set real family count
  { value: 60, suffix: '+', label: 'Expert Teachers' },
  { value: 25, suffix: '+', label: 'Years of Trust' },
]

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Teachers',
    text: 'Qualified, caring educators who know each child by name.',
  },
  {
    icon: Smile,
    title: 'Joyful Environment',
    text: 'Safe, cheerful spaces designed so learning feels like play.',
  },
  {
    icon: Sparkles,
    title: 'Favorable Opportunities',
    text: 'Clubs, events and competitions that let every talent shine.',
  },
]

function AnimatedNumber({
  value,
  suffix = '',
  duration = 1800,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  const isInView = useInView(ref, {
    margin: '-100px',
  })

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime

      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Smooth ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easedProgress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 overflow-x-clip px-4 py-20 lg:grid-cols-2 lg:px-8"
      >
        {/* IMAGE */}
        <motion.div
          id="gallery"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <Image
            src="/images/img.JPG"
            alt="Students learning at Ursuline Convent School"
            width={720}
            height={520}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-sm object-cover shadow-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="absolute -bottom-6 right-6 hidden rounded-sm bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block"
          >
            <p className="font-heading text-3xl font-extrabold">CBSE</p>
            <p className="text-sm font-medium">Affiliated, New Delhi</p>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading
            eyebrow="A Haven for Learners"
            title="Ursuline Convent School, Khalari"
          />

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Ursuline Convent School, Khalari is affiliated to the
            Central Board of Secondary Education, New Delhi (School
            Code 66246, Affiliation No. 3430050, Post – Khalari,
            District – Ranchi, State – Jharkhand, Pin Code – 829205).
            Blessed with a dedicated management, faculty and staff,
            the school promotes value-based education to nurture every
            student's talents and skills, in line with CBSE norms.
            Teachers regularly undergo CBSE Patna's Capacity Building
            Programme and in-house training via the Ranchi Sahodaya
            School Complex to sharpen their teaching skills, while
            varied competitions and co-curricular activities help
            students grow and prepare for future success — all within
            a collaborative environment built by the management,
            teachers, parents and students together.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[leftList, rightList].map((list, i) => (
              <ul key={i} className="flex flex-col gap-3">
                {list.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-2 font-medium text-navy"
                  >
                    <CheckCircle2
                      className="size-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>

          <p className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
            As an open and welcoming school, we invite every student
            to take part and make their voice heard.
          </p>
        </motion.div>
      </section>

      {/* ANIMATED STATISTICS */}
      <section
        aria-label="School statistics"
        className="relative overflow-hidden bg-navy"
      >
        {/* Decorative background */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.04, 0.09, 0.04],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary blur-3xl"
        />

        <dl className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 text-center md:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col gap-2"
            >
              {/* Label (dt stays first in the DOM for valid markup) */}
              <dt className="text-sm font-medium uppercase tracking-wider text-white/75 transition-colors duration-300 group-hover:text-white md:text-base">
                {stat.label}
              </dt>

              {/* Number (shown first visually) */}
              <dd className="order-first font-heading text-4xl font-extrabold text-primary transition-transform duration-300 group-hover:scale-110 md:text-5xl lg:text-6xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </dd>

              {/* Bottom decoration */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.5,
                }}
                className="order-last mx-auto mt-2 h-0.5 bg-primary"
              />
            </motion.div>
          ))}
        </dl>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Together, we can change the world"
          title="A Home of Learning that Lifts Every Student Higher"
          className="mx-auto max-w-3xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted-foreground"
        >
          We aim to create a practical, child-centred setting where
          learning is genuinely fun — helping children discover who
          they are and grow into their fullest potential.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, delay: 0 },
              }}
              className="group rounded-sm border-b-4 border-primary bg-white p-8 text-center shadow-md transition-colors hover:bg-navy"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
              >
                <Icon className="size-8" aria-hidden />
              </motion.span>

              <h3 className="mt-5 text-xl font-bold uppercase text-navy group-hover:text-white">
                {title}
              </h3>

              <p className="mt-3 text-muted-foreground group-hover:text-white/80">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground"
        >
          At Ursuline Convent School we help children gain knowledge,
          express themselves creatively, communicate with confidence
          and face life with a positive attitude.
        </motion.p>
      </section>
    </>
  )
}