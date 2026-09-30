import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { PageBanner } from '@/components/site/page-banner'
import { SectionHeading } from '@/components/site/section-heading'
import { facilities, getFacility } from '@/lib/facilities'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return facilities.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const facility = getFacility(slug)
  return { title: facility?.title ?? 'Facilities', description: facility?.summary }
}

export default async function FacilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const facility = getFacility(slug)
  if (!facility) notFound()

  return (
    <>
      <PageBanner title={facility.title} trail={[{ label: 'Our Facilities', href: '/facilities' }]} image={facility.image} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-sm shadow-lg">
            <Image src={facility.image} alt={`${facility.title} at Ursuline Convent School`} fill className="object-cover" sizes="(min-width: 1024px) 66vw, 100vw" />
          </div>
          <SectionHeading eyebrow="Our Facilities" title={facility.title} className="mt-10" />
          <p className="mt-4 text-lg font-medium text-navy">{facility.summary}</p>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            {facility.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {facility.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-sm bg-muted p-4 text-sm font-medium text-navy">
                <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex flex-col gap-6">
          <nav aria-label="Facilities" className="rounded-sm bg-navy p-6">
            <h2 className="font-heading text-xl font-bold text-white">All Facilities</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {facilities.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/facilities/${f.slug}`}
                    aria-current={f.slug === slug ? 'page' : undefined}
                    className={cn(
                      'block rounded-sm px-4 py-3 text-sm font-bold transition-colors',
                      f.slug === slug ? 'bg-primary text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
                    )}
                  >
                    {f.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="rounded-sm bg-primary p-6 text-white">
            <h2 className="font-heading text-xl font-bold">Admissions Open</h2>
            <p className="mt-2 text-sm text-white/90">Visit our campus and see our facilities in person.</p>
            <Link href="/admission/enquiry" className="mt-4 inline-block rounded-sm bg-navy px-5 py-3 text-sm font-bold hover:bg-white hover:text-navy">
              Enquire Now
            </Link>
          </div>
        </aside>
      </section>
    </>
  )
}
