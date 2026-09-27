'use client'

import { Clock, HelpCircle, Mail, MapPin } from 'lucide-react'
import { school } from '@/lib/site'
import { SectionHeading } from './section-heading'

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Address: ${data.get('address')}`,
      '',
      `${data.get('details')}`,
    ].join('\n')
    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent('Admission Enquiry')}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-sm border border-input bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30'

  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
      <div>
        <SectionHeading eyebrow="Get In Touch" title="Give Your Child the Best Start" />
        <p className="mt-4 text-muted-foreground">
          Make sure your children receive an outstanding education and every chance for all-round growth.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" required placeholder="Name" autoComplete="name" className={inputClass} />
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
          <label className="sr-only" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={inputClass} />
          <label className="sr-only" htmlFor="address">Address</label>
          <input id="address" name="address" placeholder="Address" autoComplete="street-address" className={inputClass} />
          <label className="sr-only" htmlFor="details">Additional Details</label>
          <textarea id="details" name="details" rows={5} placeholder="Additional Details" className={`${inputClass} sm:col-span-2`} />
          <button
            type="submit"
            className="w-fit rounded-sm bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-navy"
          >
            Submit Request
          </button>
        </form>
      </div>

      <div className="rounded-sm bg-navy p-8 text-white md:p-10">
        <h3 className="text-2xl font-bold">Contact Info</h3>
        <ul className="mt-8 flex flex-col gap-7">
          <ContactRow icon={MapPin} title="Our Location">
            {school.address}
          </ContactRow>
          <ContactRow icon={Mail} title="Quick Contact">
            Email:{' '}
            <a href={`mailto:${school.email}`} className="hover:text-primary">
              {school.email}
            </a>
            <br />
            Call Us:{' '}
            <a href={school.landlineHref} className="hover:text-primary">
              {school.landline}
            </a>
          </ContactRow>
          <ContactRow icon={Clock} title="Opening Hours">
            Monday – Saturday 09:00 AM – 02:00 PM
          </ContactRow>
          <ContactRow icon={HelpCircle} title="Have a Question?">
            Reach out to us any time — we&apos;re happy to help.
          </ContactRow>
        </ul>
        <iframe
          title="Ursuline Convent School Khalari location map"
          src="https://www.google.com/maps?q=Ursuline+Convent+School,+P.O.+Khalari,+Ranchi,+Jharkhand+829205&output=embed"
          className="mt-8 h-56 w-full rounded-sm border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-heading font-bold">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{children}</p>
      </div>
    </li>
  )
}
