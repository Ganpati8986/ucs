import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Enrollment } from '@/components/site/enrollment'
import { CoreValues } from '@/components/site/core-values'
import { Growth } from '@/components/site/growth'
import { Facilities } from '@/components/site/facilities'
import { Contact } from '@/components/site/contact'
import { Testimonials } from '@/components/site/testimonials'
import { HomeHighlights } from '@/components/site/home-highlights'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeHighlights />
      <About />
      <Enrollment />
      <CoreValues />
      <Growth />
      <Facilities />
      <Contact />
      <Testimonials />
    </>
  )
}
