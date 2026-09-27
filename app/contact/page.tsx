import type { Metadata } from 'next'
import { PageBanner } from '@/components/site/page-banner'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = { title: 'Contact Us' }

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" trail={[{ label: 'About', href: '/about' }]} />
      <Contact />
    </>
  )
}
