'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { GraduationCap } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { school } from '@/lib/site'

const classes = [
  'Nursery',
  'LKG',
  'UKG',
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

const inputClass =
  'w-full rounded-sm border border-input bg-white px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30'

export function AdmissionPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = [
      `Student Name: ${data.get('student')}`,
      `Parent Name: ${data.get('parent')}`,
      `Class Applying For: ${data.get('class')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
    ].join('\n')
    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent('Admission Enquiry 2026-27')}&body=${encodeURIComponent(body)}`
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto rounded-sm p-0 sm:max-w-3xl">
        <div className="grid md:grid-cols-5">
          <div className="relative hidden bg-navy md:col-span-2 md:block">
            <Image src="/images/7.png" alt="" fill className="object-cover opacity-40" sizes="300px" />
            <div className="relative flex h-full flex-col justify-end gap-3 p-6 text-white">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary">
                <GraduationCap className="size-6" aria-hidden />
              </span>
              <p className="font-heading text-2xl font-extrabold leading-tight">Admissions Open 2026-27</p>
              <p className="text-sm text-white/80">Nursery to Class XII · {school.affiliation}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-6 md:col-span-3 md:p-8">
            <div className="flex flex-col gap-2 pr-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary md:hidden">Admissions Open 2026-27</p>
              <DialogTitle className="font-heading text-2xl font-extrabold text-navy">Admission Enquiry Form</DialogTitle>
              <DialogDescription>
                Share a few details and our admissions team will get back to you shortly.
              </DialogDescription>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
              <Field label="Student Name" htmlFor="popup-student">
                <input id="popup-student" name="student" required className={inputClass} />
              </Field>
              <Field label="Parent Name" htmlFor="popup-parent">
                <input id="popup-parent" name="parent" required autoComplete="name" className={inputClass} />
              </Field>
              <Field label="Class Applying For" htmlFor="popup-class">
                <select id="popup-class" name="class" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select class
                  </option>
                  {classes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Phone" htmlFor="popup-phone">
                <input id="popup-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
              </Field>
              <Field label="Email" htmlFor="popup-email" className="sm:col-span-2">
                <input id="popup-email" name="email" type="email" autoComplete="email" className={inputClass} />
              </Field>
              <button
                type="submit"
                className="mt-2 rounded-sm bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-navy sm:col-span-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string
  htmlFor: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={htmlFor} className="text-xs font-bold text-navy">
        {label}
      </label>
      {children}
    </div>
  )
}
