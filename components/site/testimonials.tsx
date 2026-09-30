'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'It is wonderful to see how much effort the school puts in every single day to make sure our children learn in the best possible way.',
    name: 'Parent, Class 4',
  },
  {
    quote:
      'Ursuline Convent School blends kindness with strong academics. The focus on values and leadership has made a real difference to our son.',
    name: 'Parent, Class 8',
  },
  {
    quote:
      'The teachers recognise what makes each child special and build on it. Our whole family is grateful for everything the school does.',
    name: 'Parent, Class 2',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="bg-muted">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">What Our Parents Say!</p>
        <figure className="relative mt-6" aria-live="polite">
          <Quote className="absolute -left-2 -top-6 size-20 text-navy/10 md:-left-10" aria-hidden />
          <blockquote className="relative text-balance font-heading text-2xl font-semibold italic leading-relaxed text-brand-blue md:text-3xl">
            {`“${t.quote}”`}
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-wider text-navy">{t.name}</figcaption>
        </figure>
        <div className="mt-10 flex items-center justify-center gap-8">
          <button type="button" onClick={() => go(-1)} className="flex items-center gap-2 text-sm font-bold text-navy hover:text-primary">
            <ArrowLeft className="size-4" aria-hidden /> Prev
          </button>
          <span className="text-sm text-muted-foreground">
            {index + 1} / {testimonials.length}
          </span>
          <button type="button" onClick={() => go(1)} className="flex items-center gap-2 text-sm font-bold text-navy hover:text-primary">
            Next <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}
