import type { Metadata } from 'next'
import { PageBanner } from '@/components/site/page-banner'
import { Growth } from '@/components/site/growth'
import { Facilities } from '@/components/site/facilities'

export const metadata: Metadata = { title: "Student's Corner" }

export default function StudentsCornerPage() {
  return (
    <>
      <PageBanner title="Student's Corner" />
      <Growth />
      <Facilities />
    </>
  )
}
