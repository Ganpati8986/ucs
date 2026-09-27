'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Clock, Mail, Menu, Phone, X } from 'lucide-react'
import { isNavActive, navItems, school } from '@/lib/site'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          <InfoItem icon={<Phone className="size-5" />} label="Call Us:" value={school.phone} href={school.phoneHref} />
          <InfoItem icon={<Mail className="size-5" />} label="Email Us:" value={school.email} href={`mailto:${school.email}`} />
          <InfoItem icon={<Clock className="size-5" />} label="Opening Hours:" value={school.hours} />
          {/* <Link
            href="/contact"
            className="rounded-sm bg-primary px-5 py-4 font-bold text-primary-foreground transition-colors hover:bg-navy"
          >
            Log In
          </Link> */}
        </div>
        <button
          type="button"
          className="rounded-sm bg-navy p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <nav aria-label="Main" className="bg-navy">
        <ul className="mx-auto hidden max-w-7xl items-center gap-7 px-8 lg:flex">
          {navItems.map((item) => {
            const active = isNavActive(pathname, item)
            return (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-1 border-b-2 py-6 text-[15px] font-bold uppercase transition-colors hover:text-primary',
                    active ? 'border-primary text-primary' : 'border-transparent text-white',
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-4" aria-hidden />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-56 translate-y-2 border-t-2 border-primary bg-white py-2 opacity-0 shadow-lg transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? 'page' : undefined}
                          className={cn(
                            'block px-5 py-2 text-[15px] font-medium hover:bg-muted hover:text-primary',
                            pathname === child.href ? 'text-primary' : 'text-navy/80',
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        {open && (
          <ul id="mobile-nav" className="flex flex-col px-4 pb-4 lg:hidden">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-3 text-sm font-bold uppercase hover:text-primary',
                    isNavActive(pathname, item) ? 'text-primary' : 'text-white',
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="flex flex-col pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-white/75 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a href={school.phoneHref} className="text-sm text-white/80">
                {school.phone} · {school.email}
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-primary" aria-hidden>
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        {href ? (
          <a href={href} className="text-sm font-bold text-navy hover:text-primary">
            {value}
          </a>
        ) : (
          <span className="text-sm font-bold text-navy">{value}</span>
        )}
      </div>
    </div>
  )
}
