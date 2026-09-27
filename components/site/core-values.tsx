import { Award, BookOpen, Lightbulb, Presentation, Search, Users } from 'lucide-react'

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
    <section id="values" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">
          <span className="text-primary">Our Core</span> <span className="text-navy">Values</span>
        </h2>
        <p className="mt-2 text-muted-foreground">Values That Shape the Future</p>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary" aria-hidden />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group flex min-h-56 flex-col items-center justify-center rounded-sm bg-muted p-8 text-center shadow-md transition-colors hover:bg-primary"
          >
            <Icon className="size-8 text-navy group-hover:text-white" aria-hidden />
            <h3 className="mt-4 text-2xl font-bold uppercase text-navy group-hover:text-white">{title}</h3>
            <p className="mt-3 max-h-0 overflow-hidden text-sm text-white opacity-0 transition-all group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
