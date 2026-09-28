// import type { Metadata } from 'next'
// import Image from 'next/image'
// import { PageBanner } from '@/components/site/page-banner'

// export const metadata: Metadata = { title: 'Photos Gallery' }

// const photos = [
//   { src: '/images/sch.png', caption: 'School Campus' },
//   { src: '/images/library.png', caption: 'Classroom Learning' },
//   { src: '/images/library.png', caption: 'Computer Lab' },
//   { src: '/images/oath3.png', caption: 'Sports Day' },
//   { src: '/images/2.png', caption: 'Activities' },
//   { src: '/images/trans.png', caption: 'School Transport' },
// ]

// export default function PhotosGalleryPage() {
//   return (
//     <>
//       <PageBanner title="Photos Gallery" trail={[{ label: 'Gallery' }]} />
//       <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
//         <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {photos.map((p) => (
//             <li key={p.src}>
//               <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
//                 <Image
//                   src={p.src}
//                   alt={p.caption}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
//                 />
//                 <figcaption className="absolute inset-x-0 bottom-0 bg-navy/85 px-4 py-3 text-sm font-bold text-white">
//                   {p.caption}
//                 </figcaption>
//               </figure>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   )
// }



'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { PageBanner } from '@/components/site/page-banner'

const EASE = [0.22, 1, 0.36, 1] as const

type GalleryPhoto = {
  src: string
  caption: string
}

type GalleryCategory = {
  id: string
  title: string
  photos: GalleryPhoto[]
}

/*
|--------------------------------------------------------------------------
| GALLERY DATA
|--------------------------------------------------------------------------
| You can add ANY number of images inside each category.
|--------------------------------------------------------------------------
*/

const galleryCategories: GalleryCategory[] = [
  {
    id: 'campus',
    title: 'School Campus',
    photos: [
      {
        src: '/images/sch.png',
        caption: 'School Campus',
      },
      {
        src: '/images/img2.JPG',
        caption: 'School Building',
      },
      {
        src: '/images/img4.JPG',
        caption: 'School Premises',
      },
    ],
  },

  {
    id: 'classroom',
    title: 'Classroom & Learning',
    photos: [
      {
        src: '/images/library.png',
        caption: 'Classroom Learning',
      },
      // {
      //   src: '/images/library.png',
      //   caption: 'Interactive Learning',
      // },
      // {
      //   src: '/images/library.png',
      //   caption: 'Students Learning',
      // },
    ],
  },

  {
    id: 'sports',
    title: 'Sports & Activities',
    photos: [
      {
        src: '/images/oath3.png',
        caption: 'Sports Day',
      },
      {
        src: '/images/2.png',
        caption: 'Outdoor Activities',
      },
      {
        src: '/images/oath3.png',
        caption: 'Student Activities',
      },
       {
        src: '/images/img6.JPG',
        caption: 'Sports Day',
      },
      {
        src: '/images/img7.JPG',
        caption: 'Outdoor Activities',
      },
      {
        src: '/images/img8.JPG',
        caption: 'Student Activities',
      },
    ],
  },

  {
    id: 'transport',
    title: 'School Transport',
    photos: [
      {
        src: '/images/trans.png',
        caption: 'School Transport',
      },
    ],
  },
]

export default function PhotosGalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const [selectedImage, setSelectedImage] = useState<{
    categoryIndex: number
    imageIndex: number
  } | null>(null)

  const visibleCategories =
    activeCategory === 'all'
      ? galleryCategories
      : galleryCategories.filter(
          (category) => category.id === activeCategory
        )

  /*
  |--------------------------------------------------------------------------
  | LIGHTBOX
  |--------------------------------------------------------------------------
  */

  const openImage = (
    categoryIndex: number,
    imageIndex: number
  ) => {
    setSelectedImage({
      categoryIndex,
      imageIndex,
    })
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (!selectedImage) return

    const category =
      galleryCategories[selectedImage.categoryIndex]

    const nextIndex =
      selectedImage.imageIndex + 1

    if (nextIndex < category.photos.length) {
      setSelectedImage({
        categoryIndex: selectedImage.categoryIndex,
        imageIndex: nextIndex,
      })
    } else {
      setSelectedImage({
        categoryIndex: selectedImage.categoryIndex,
        imageIndex: 0,
      })
    }
  }

  const previousImage = () => {
    if (!selectedImage) return

    const category =
      galleryCategories[selectedImage.categoryIndex]

    const previousIndex =
      selectedImage.imageIndex - 1

    if (previousIndex >= 0) {
      setSelectedImage({
        categoryIndex: selectedImage.categoryIndex,
        imageIndex: previousIndex,
      })
    } else {
      setSelectedImage({
        categoryIndex: selectedImage.categoryIndex,
        imageIndex: category.photos.length - 1,
      })
    }
  }

  const selectedCategory =
    selectedImage !== null
      ? galleryCategories[selectedImage.categoryIndex]
      : null

  const selectedPhoto =
    selectedCategory && selectedImage
      ? selectedCategory.photos[selectedImage.imageIndex]
      : null

  return (
    <>
      <PageBanner
        title="Photos Gallery"
        trail={[{ label: 'Gallery' }]}
      />

      <section className="mx-auto max-w-7xl overflow-x-clip px-4 py-20 lg:px-8">

        {/* ==================================================
            GALLERY HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 15,
            }}
            className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10"
          >
            <Images className="size-7 text-primary" />
          </motion.div>

          <h1 className="mt-5 font-heading text-3xl font-extrabold text-navy md:text-4xl">
            School Photo Gallery
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
              ease: EASE,
            }}
            className="mt-3 text-muted-foreground"
          >
            Explore memorable moments, activities and
            experiences from our school community.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.25,
              duration: 0.6,
              ease: EASE,
            }}
            className="mx-auto mt-5 h-1 bg-primary"
          />
        </motion.div>

        {/* ==================================================
            CATEGORY FILTER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.6,
            ease: EASE,
          }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          <CategoryButton
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            All Photos
          </CategoryButton>

          {galleryCategories.map((category) => (
            <CategoryButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() =>
                setActiveCategory(category.id)
              }
            >
              {category.title}
            </CategoryButton>
          ))}
        </motion.div>

        {/* ==================================================
            CATEGORY SECTIONS
        ================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.45,
              ease: EASE,
            }}
          >
            {visibleCategories.map(
              (category) => {
                const originalCategoryIndex =
                  galleryCategories.findIndex(
                    (item) =>
                      item.id === category.id
                  )

                return (
                  <motion.div
                    key={category.id}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                    }}
                    className="mb-16 last:mb-0"
                  >
                    {/* Category title */}
                    <div className="mb-7 flex items-center gap-4">
                      <div>
                        <h2 className="font-heading text-2xl font-extrabold text-navy md:text-3xl">
                          {category.title}
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {category.photos.length}{' '}
                          {category.photos.length === 1
                            ? 'Photo'
                            : 'Photos'}
                        </p>
                      </div>

                      <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Images */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {category.photos.map(
                        (photo, imageIndex) => (
                          <motion.button
                            key={`${photo.src}-${imageIndex}`}
                            type="button"
                            onClick={() =>
                              openImage(
                                originalCategoryIndex,
                                imageIndex
                              )
                            }
                            initial={{
                              opacity: 0,
                              y: 35,
                              scale: 0.96,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            viewport={{
                              once: false,
                              amount: 0.1,
                            }}
                            transition={{
                              delay:
                                imageIndex * 0.08,
                              duration: 0.6,
                              ease: EASE,
                            }}
                            whileHover={{
                              y: -6,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            className="group relative block w-full overflow-hidden rounded-sm bg-background text-left shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <Image
                                src={photo.src}
                                alt={photo.caption}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              />

                              {/* Dark hover overlay */}
                              <motion.div
                                initial={{
                                  opacity: 0,
                                }}
                                whileHover={{
                                  opacity: 1,
                                }}
                                className="absolute inset-0 bg-navy/35"
                              />

                              {/* View text */}
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                }}
                                whileHover={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  duration: 0.25,
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <span className="rounded-full bg-white/95 px-5 py-2 text-sm font-bold text-navy shadow-lg">
                                  View Photo
                                </span>
                              </motion.div>
                            </div>

                            {/* Caption */}
                            <div className="bg-navy px-4 py-3">
                              <p className="text-sm font-bold text-white">
                                {photo.caption}
                              </p>
                            </div>
                          </motion.button>
                        )
                      )}
                    </div>
                  </motion.div>
                )
              }
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ==================================================
          LIGHTBOX
      ================================================== */}

      <AnimatePresence>
        {selectedPhoto && selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeImage}
          >
            {/* Close */}
            <motion.button
              type="button"
              onClick={closeImage}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="size-6" />
            </motion.button>

            {/* Previous */}
            {selectedCategory.photos.length > 1 && (
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  previousImage()
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="absolute left-4 z-20 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:left-8"
                aria-label="Previous photo"
              >
                <ChevronLeft className="size-7" />
              </motion.button>
            )}

            {/* Image */}
            <motion.div
              key={`${selectedPhoto.src}-${selectedImage?.imageIndex}`}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.35,
                ease: EASE,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="relative h-[75vh] w-full max-w-5xl"
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-1/2 w-full max-w-2xl -translate-x-1/2 translate-y-full pt-4 text-center">
                <p className="font-heading text-lg font-bold text-white">
                  {selectedPhoto.caption}
                </p>

                <p className="mt-1 text-sm text-white/60">
                  {selectedImage!.imageIndex + 1} /{' '}
                  {selectedCategory.photos.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            {selectedCategory.photos.length > 1 && (
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="absolute right-4 z-20 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:right-8"
                aria-label="Next photo"
              >
                <ChevronRight className="size-7" />
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ============================================================
   CATEGORY BUTTON
============================================================ */

function CategoryButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
        active
          ? 'bg-primary text-primary-foreground shadow-md'
          : 'bg-muted text-navy hover:bg-primary/10'
      }`}
    >
      {children}
    </motion.button>
  )
}
