import { SectionHeading } from './section-heading'

const steps = [
  { step: 'Step 1', title: 'Go through the prospectus and key school information.' },
  { step: 'Step 2', title: 'Complete the admission form online or at the reception desk.' },
  { step: 'Step 3', title: 'Prepare for and pass the entrance assessment for the chosen class.' },
  { step: 'Step 4', title: 'Welcome to the Ursuline Convent School family!' },
]

export function Enrollment() {
  return (
    <section id="admission" className="bg-brand-blue">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading light eyebrow="Steps for Enrollment" title="Preparing Children for a Bright Future" />
          <h3 className="mt-6 text-xl font-semibold text-white">Education · Inspiration · Success</h3>
          <p className="mt-4 leading-relaxed text-white/80">
            Our campus is built around the needs of young, growing learners, with a supportive atmosphere that makes
            every school day something to look forward to.
          </p>
          <a
            href="/admission/enquiry"
            className="mt-8 inline-block rounded-sm bg-primary px-7 py-3 font-bold text-primary-foreground hover:bg-white hover:text-navy"
          >
            Enquire Now
          </a>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
          {steps.map((s, i) => (
            <li key={s.step} className="relative rounded-sm border border-white/20 bg-white/5 p-7">
              <span className="font-heading text-6xl font-extrabold text-white/10" aria-hidden>
                {`0${i + 1}`}
              </span>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{s.title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
