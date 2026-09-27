import type { Metadata } from 'next'
import { PageBanner } from '@/components/site/page-banner'
import { Facilities } from '@/components/site/facilities'

export const metadata: Metadata = { title: 'Our Facilities' }

export default function FacilitiesPage() {
  return (
    <>
      <PageBanner title="Our Facilities" />
      <Facilities />
    </>
  )
}
