import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { PageBanner } from '@/components/site/page-banner'
import { Enrollment } from '@/components/site/enrollment'
import { SectionHeading } from '@/components/site/section-heading'

export const metadata: Metadata = { title: 'Admission' }

const documents = [
  'Birth certificate of the child',
  'Transfer certificate from previous school (Class 2 onwards)',
  'Report card of the last class attended',
  'Aadhaar card of the child and parents',
  'Four recent passport-size photographs',
  'Proof of residence',
]

export default function AdmissionPage() {
  return (
    <>
      <PageBanner title="Steps for Enrollment" trail={[{ label: 'Admission' }]} />
      <Enrollment />
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeading eyebrow="Admission Guidelines" title="Documents Required" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-sm bg-white p-5 shadow-sm">
                <FileText className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm font-medium text-navy">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
