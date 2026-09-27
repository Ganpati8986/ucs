import Image from 'next/image'
import { CheckCircle2, GraduationCap, Smile, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'

const leftList = ['Striving for Excellence', 'Wide Opportunities', 'Inspiring Environment']
const rightList = ['Quality Education', 'Academic Achievement', 'Dedicated Mentors']

const stats = [
  { value: '2500+', label: 'Total Students' },
  { value: '2500+', label: 'Happy Families' },
  { value: '60+', label: 'Expert Teachers' },
  { value: '25+', label: 'Years of Trust' },
]

const features = [
  { icon: GraduationCap, title: 'Expert Teachers', text: 'Qualified, caring educators who know each child by name.' },
  { icon: Smile, title: 'Joyful Environment', text: 'Safe, cheerful spaces designed so learning feels like play.' },
  { icon: Sparkles, title: 'Favorable Opportunities', text: 'Clubs, events and competitions that let every talent shine.' },
]

export function About() {
  return (
    <>
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
        <div id="gallery" className="relative">
          <Image
            src="/images/3.png"
            alt="Students learning in a bright BVM classroom"
            width={720}
            height={520}
            className="w-full rounded-sm object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 right-6 hidden rounded-sm bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
            <p className="font-heading text-3xl font-extrabold">CBSE</p>
            <p className="text-sm font-medium">Affiliated, New Delhi</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="A Haven for Learners" title="Ursuline Convent School , Khalari" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
Ursuline Convent School, Khalari is affiliated to the Central Board of Secondary Education, New Delhi (School Code 66246, Affiliation No. 3430050, Post – Khalari, District – Ranchi, State – Jharkhand, Pin Code – 829205). Blessed with a dedicated management, faculty and staff, the school promotes value-based education to nurture every student's talents and skills, in line with CBSE norms. Teachers regularly undergo CBSE Patna's Capacity Building Programme and in-house training via the Ranchi Sahodaya School Complex to sharpen their teaching skills, while varied competitions and co-curricular activities help students grow and prepare for future success — all within a collaborative environment built by the management, teachers, parents and students together.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[leftList, rightList].map((list, i) => (
              <ul key={i} className="flex flex-col gap-3">
                {list.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-medium text-navy">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
            As an open and welcoming school, we invite every student to take part and make their voice heard.
          </p>
        </div>
      </section>

      <section aria-label="School statistics" className="bg-navy">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 text-center md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm font-medium uppercase tracking-wider text-white/75">{s.label}</dt>
              <dd className="font-heading text-4xl font-extrabold text-primary md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Together, we can change the world"
          title="A Home of Learning that Lifts Every Student Higher"
          className="mx-auto max-w-3xl"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted-foreground">
          We aim to create a practical, child-centred setting where learning is genuinely fun — helping children
          discover who they are and grow into their fullest potential.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-sm border-b-4 border-primary bg-white p-8 text-center shadow-md transition-colors hover:bg-navy"
            >
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <Icon className="size-8" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold uppercase text-navy group-hover:text-white">{title}</h3>
              <p className="mt-3 text-muted-foreground group-hover:text-white/80">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
          At Ursuline Convent School we help children gain knowledge, express themselves creatively, communicate with confidence and face
          life with a positive attitude.
        </p>
      </section>
    </>
  )
}
