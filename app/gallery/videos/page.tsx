import type { Metadata } from 'next'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { PageBanner } from '@/components/site/page-banner'

export const metadata: Metadata = { title: 'Video Gallery' }

const videos = [
  { thumb: '/images/sch.png', title: 'Campus Tour' },
  { thumb: '/images/3.png', title: 'Annual Sports Meet' },
  { thumb: '/images/7.png', title: 'Science Exhibition' },
  { thumb: '/images/fr.png', title: 'Annual Day Celebration' },
]

export default function VideoGalleryPage() {
  return (
    <>
      <PageBanner title="Video Gallery" trail={[{ label: 'Gallery' }]} />
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2">
          {videos.map((v) => (
            <li key={v.title} className="overflow-hidden rounded-sm bg-white shadow-md">
              <div className="relative aspect-video bg-navy">
                <Image src={v.thumb} alt="" fill className="object-cover opacity-70" sizes="(min-width: 640px) 50vw, 100vw" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <Play className="ml-1 size-7 fill-current" aria-hidden />
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-4 border-primary p-5">
                <h2 className="font-heading text-lg font-bold text-navy">{v.title}</h2>
                <span className="text-xs font-bold uppercase text-muted-foreground">Coming soon</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
