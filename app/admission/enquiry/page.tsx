import type { Metadata } from 'next'
import { PageBanner } from '@/components/site/page-banner'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = { title: 'Enquiry Form' }

export default function EnquiryPage() {
  return (
    <>
      <PageBanner title="Enquiry Form" trail={[{ label: 'Admission', href: '/admission' }]} />
      <Contact />
    </>
  )
}
