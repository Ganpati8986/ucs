import type { Metadata } from 'next'
import { PageBanner } from '@/components/site/page-banner'
import { MandatoryDisclosure } from '@/components/site/mandatory-disclosure'

export const metadata: Metadata = { title: 'Mandatory Disclosure' }

export default function MandatoryDisclosurePage() {
  return (
    <>
      <PageBanner title="Mandatory Disclosure" />
      <MandatoryDisclosure />
    </>
  )
}
