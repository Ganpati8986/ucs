import type { Metadata } from 'next'
import { PageBanner } from '@/components/site/page-banner'
import { About } from '@/components/site/about'
import { CoreValues } from '@/components/site/core-values'
import { Testimonials } from '@/components/site/testimonials'

export const metadata: Metadata = { title: 'About Us' }

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" trail={[{ label: 'About' }]} />
      <About />
      <CoreValues />
      <Testimonials />
    </>
  )
}
