import Image from 'next/image'
import { SectionHeading } from './section-heading'

const facilities = [
  {
    image: '/images/7.png',
    title: 'Extra-Curricular Activities',
    text: 'Hands-on activities that bring classroom concepts to life and deepen understanding.',
  },
  {
    image: '/images/9.png',
    title: 'Sports',
    text: 'Games and athletics that teach teamwork, fair play, discipline and lifelong health.',
  },
  {
    image: '/images/fr.png',
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
    <section id="facilities" className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Facilities"
          title="Always Seeking the Best for Our Students"
          className="mx-auto max-w-3xl"
        />
        <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Ursuline Convent School inspires children to explore, create, communicate and stay optimistic. We believe education is not about
          filling a vessel — it is about lighting a spark.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f) => (
            <article key={f.title} className="group overflow-hidden rounded-sm bg-white shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="border-t-4 border-primary p-6">
                <h3 className="text-lg font-bold uppercase text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
