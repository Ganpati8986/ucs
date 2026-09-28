'use client'

import { Clock, HelpCircle, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { school } from '@/lib/site'
import { SectionHeading } from './section-heading'

const EASE = [0.22, 1, 0.36, 1] as const

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
    'w-full rounded-sm border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/30'

  const fields = [
    <input key="name" id="name" name="name" required placeholder="Name" autoComplete="name" className={inputClass} />,
    <input key="email" id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />,
    <input key="phone" id="phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={inputClass} />,
    <input key="address" id="address" name="address" placeholder="Address" autoComplete="street-address" className={inputClass} />,
  ]

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-7xl gap-12 overflow-x-clip px-4 py-20 lg:grid-cols-2 lg:px-8"
    >
      {/* LEFT: FORM */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <SectionHeading eyebrow="Get In Touch" title="Give Your Child the Best Start" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="mt-4 text-muted-foreground"
        >
          Make sure your children receive an outstanding education and every chance for all-round growth.
        </motion.p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="name">Name</label>
          <label className="sr-only" htmlFor="email">Email</label>
          <label className="sr-only" htmlFor="phone">Phone</label>
          <label className="sr-only" htmlFor="address">Address</label>
          <label className="sr-only" htmlFor="details">Additional Details</label>

          {fields.map((field, i) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: EASE }}
            >
              {field}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
            className="sm:col-span-2"
          >
            <textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Additional Details"
              className={inputClass}
            />
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.5, ease: EASE }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2, delay: 0 } }}
            whileTap={{ scale: 0.97 }}
            className="w-fit rounded-sm bg-primary px-8 py-3 font-bold text-primary-foreground transition-colors hover:bg-navy"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>

      {/* RIGHT: CONTACT INFO */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="rounded-sm bg-navy p-8 text-white md:p-10"
      >
        <h3 className="text-2xl font-bold">Contact Info</h3>
        <ul className="mt-8 flex flex-col gap-7">
          <ContactRow icon={MapPin} title="Our Location" index={0}>
            {school.address}
          </ContactRow>
          <ContactRow icon={Mail} title="Quick Contact" index={1}>
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
          <ContactRow icon={Clock} title="Opening Hours" index={2}>
            Monday – Saturday 08:00 AM – 02:00 PM
          </ContactRow>
          <ContactRow icon={HelpCircle} title="Have a Question?" index={3}>
            Reach out to us any time — we&apos;re happy to help.
          </ContactRow>
        </ul>

        <motion.iframe
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
          title="Ursuline Convent School Khalari location map"
          src="https://www.google.com/maps?q=Ursuline+Convent+School,+P.O.+Khalari,+Ranchi,+Jharkhand+829205&output=embed"
          className="mt-8 h-56 w-full rounded-sm border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  title,
  index = 0,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  index?: number
  children: React.ReactNode
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2 + index * 0.12, duration: 0.6, ease: EASE }}
      className="flex gap-4"
    >
      <motion.span
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.35 + index * 0.12,
          type: 'spring',
          stiffness: 260,
          damping: 15,
        }}
        whileHover={{ scale: 1.15, rotate: 8 }}
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary"
      >
        <Icon className="size-5" />
      </motion.span>
      <div>
        <p className="font-heading font-bold">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{children}</p>
      </div>
    </motion.li>
  )
}