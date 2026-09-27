// import Image from 'next/image'
// import { CalendarCheck, House, PenTool, Play } from 'lucide-react'

// export function Growth() {
//   return (
//     <section id="growth" className="grid lg:grid-cols-2">
//       <div className="bg-primary px-6 py-16 text-white md:px-16">
//         <h2 className="max-w-lg text-balance text-3xl font-bold leading-tight md:text-4xl">
//           Ursuline Convent tracks every child&apos;s growth and development
//         </h2>
//         <p className="mt-5 max-w-lg font-medium">
//           We invest in strong, trusting relationships with our students so they grow in independence, confidence and
//           academic understanding.
//         </p>
//         <div className="mt-10 grid gap-8 sm:grid-cols-2">
//           <div>
//             <House className="size-10" aria-hidden />
//             <h3 className="mt-4 text-xl font-bold">Building Academic Careers</h3>
//             <p className="mt-2 text-white/85">Supporting academic success alongside all-round personal development.</p>
//           </div>
//           <div>
//             <PenTool className="size-10" aria-hidden />
//             <h3 className="mt-4 text-xl font-bold">Great Opportunities</h3>
//             <p className="mt-2 text-white/85">Room to grow in academics, arts, sport and leadership.</p>
//           </div>
//         </div>
//         <a
//           href="/admission/enquiry"
//           className="mt-10 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 font-bold hover:bg-white hover:text-navy"
//         >
//           <CalendarCheck className="size-5" aria-hidden />
//           Schedule an Appointment
//         </a>
//       </div>
//       <div className="relative min-h-96">
//         <Image src="/images/computer-lab.png" alt="Students working in the BVM computer lab" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy/30">
//           <span className="flex size-20 items-center justify-center rounded-full bg-white text-primary shadow-xl">
//             <Play className="ml-1 size-8 fill-current" aria-hidden />
//           </span>
//           <span className="font-heading text-lg font-bold text-white">Watch Video!</span>
//           <span className="text-sm text-white/85">Education, Inspiration, Success</span>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CalendarCheck, House, PenTool, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

const growthImages = [
  '/images/topstudents1.png',
  '/images/topstudents2.png',
]

export function Growth() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % growthImages.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="growth" className="grid lg:grid-cols-2">
      <div className="bg-primary px-6 py-16 text-white md:px-16">
        <h2 className="max-w-lg text-balance text-3xl font-bold leading-tight md:text-4xl">
          Ursuline Convent tracks every child&apos;s growth and development
        </h2>
        <p className="mt-5 max-w-lg font-medium">
          We invest in strong, trusting relationships with our students so they grow in independence, confidence and
          academic understanding.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <House className="size-10" aria-hidden />
            <h3 className="mt-4 text-xl font-bold">Building Academic Careers</h3>
            <p className="mt-2 text-white/85">Supporting academic success alongside all-round personal development.</p>
          </div>
          <div>
            <PenTool className="size-10" aria-hidden />
            <h3 className="mt-4 text-xl font-bold">Great Opportunities</h3>
            <p className="mt-2 text-white/85">Room to grow in academics, arts, sport and leadership.</p>
          </div>
        </div>
        <a
          href="/admission/enquiry"
          className="mt-10 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 font-bold hover:bg-white hover:text-navy"
        >
          <CalendarCheck className="size-5" aria-hidden />
          Schedule an Appointment
        </a>
      </div>

      <div className="relative min-h-96 overflow-hidden">
        {growthImages.map((src, i) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              i === index ? 'opacity-100' : 'opacity-0'
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt="Students at Ursuline Convent School"
              fill
              priority={i === 0}
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        ))}

        {/* Video overlay stays fixed on top of whichever slide is showing */}
        {/* <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-navy/30">
          <span className="flex size-20 items-center justify-center rounded-full bg-white text-primary shadow-xl">
            <Play className="ml-1 size-8 fill-current" aria-hidden />
          </span>
          <span className="font-heading text-lg font-bold text-white">Watch Video!</span>
          <span className="text-sm text-white/85">Education, Inspiration, Success</span>
        </div> */}

        {/* Carousel dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {growthImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/60'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}