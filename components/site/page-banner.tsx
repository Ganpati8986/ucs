import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageBanner({
  title,
  trail = [],
  image = '/images/sch.png',
}: {
  title: string
  trail?: { label: string; href?: string }[]
  image?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image src={image} alt="" fill priority className="-z-10 object-cover opacity-25" sizes="100vw" />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-16 lg:px-8 lg:py-20">
        <h1 className="font-heading text-4xl font-extrabold text-white md:text-5xl text-balance">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/80">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            {trail.map((t) => (
              <li key={t.label} className="flex items-center gap-2">
                <ChevronRight className="size-4" aria-hidden />
                {t.href ? (
                  <Link href={t.href} className="hover:text-primary">
                    {t.label}
                  </Link>
                ) : (
                  <span>{t.label}</span>
                )}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <ChevronRight className="size-4" aria-hidden />
              <span className="text-primary" aria-current="page">
                {title}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
