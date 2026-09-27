import type { Metadata } from 'next'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { PageBanner } from '@/components/site/page-banner'
import { SectionHeading } from '@/components/site/section-heading'

export const metadata: Metadata = { title: 'Principal Message' }

export default function PrincipalMessagePage() {
  return (
    <>
      <PageBanner title="Principal Message" trail={[{ label: 'About', href: '/about' }]} />
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-20 lg:grid-cols-5 lg:px-8">
        <figure className="lg:col-span-2">
          <div className="relative aspect-square overflow-hidden rounded-sm border-b-4 border-primary shadow-lg">
            <Image src="/images/nirmala.png" alt="Principal of BVM International School" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <figcaption className="mt-4">
            <p className="font-heading text-xl font-bold text-navy">The Principal</p>
            <p className="text-sm text-muted-foreground">Ursuline Convent School, Khalari</p>
          </figcaption>
        </figure>
      <div className="lg:col-span-3">
  <SectionHeading eyebrow="From the Principal's Desk" title="Greetings from the Principal's Desk" />
  <Quote className="mt-6 size-10 text-primary" aria-hidden />
  <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
    <p>
      As we stand at the threshold of a new academic session, I extend a hearty and warm welcome to all my
      students, staff and parents. Each academic year is a new height scaled, another dream realized, with new
      targets set for the future. Each member of this institution is devoted to turning dreams and aspirations
      into reality through sincerity and perseverance.
    </p>
    <p>
      We, the faculty members of Ursuline Convent School Khalari, always try to maintain the highest quality in
      academic standards and provide the most conducive environment for our students&apos; holistic growth and
      development. We also strive to instill the core values of respect, integrity, compassion and excellence in
      our students so they meet the ever-changing and global challenges. Our dedicated and highly qualified staff
      stand as exemplary role models for our students, thereby keeping the ethos of our school shining bright.
    </p>
    <p>
      Nelson Mandela rightly said, &ldquo;Education is the most powerful weapon you can use to change the
      world.&rdquo; There is only one thing that changes the world &mdash; it is education, and UCSK is the pillar
      of formal education. Along with providing academics, we aspire to instill values, life skills and habits
      that make our students stand out and make a difference in society. We provide our students with ample
      opportunities to develop 21st-century skills such as collaboration, teamwork, critical thinking, emotional
      balance, time management and much more.
    </p>
    <p>
      &ldquo;Education is a shared commitment between dedicated teachers, motivated students and enthusiastic
      parents with high expectations.&rdquo; We wish to thank all the parents for their faith in UC School.
      Let&apos;s partner together, so that we can see children being successful in whatever path they choose to
      tread.
    </p>
    <p className="font-semibold text-navy">
      Principal,
      <br />
      Dr. Sr. Nirmala
      <br />
      Ursuline Convent School, Khalari
    </p>
  </div>
</div>
      </section>
    </>
  )
}
