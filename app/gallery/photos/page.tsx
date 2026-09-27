import type { Metadata } from 'next'
import Image from 'next/image'
import { PageBanner } from '@/components/site/page-banner'

export const metadata: Metadata = { title: 'Photos Gallery' }

const photos = [
  { src: '/images/sch.png', caption: 'School Campus' },
  { src: '/images/library.png', caption: 'Classroom Learning' },
  { src: '/images/library.png', caption: 'Computer Lab' },
  { src: '/images/oath3.png', caption: 'Sports Day' },
  { src: '/images/2.png', caption: 'Activities' },
  { src: '/images/trans.png', caption: 'School Transport' },
]

export default function PhotosGalleryPage() {
  return (
    <>
      <PageBanner title="Photos Gallery" trail={[{ label: 'Gallery' }]} />
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <li key={p.src}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy/85 px-4 py-3 text-sm font-bold text-white">
                  {p.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
