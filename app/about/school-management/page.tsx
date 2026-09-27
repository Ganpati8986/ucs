// import type { Metadata } from 'next'
// import { UserRound } from 'lucide-react'
// import { PageBanner } from '@/components/site/page-banner'
// import { SectionHeading } from '@/components/site/section-heading'

// export const metadata: Metadata = { title: 'School Management' }

// const members = [
//   { role: 'Chairman', text: 'Guides the long-term vision of the school and its commitment to quality education.' },
//   { role: 'Manager', text: 'Oversees administration, infrastructure and the smooth day-to-day running of the school.' },
//   { role: 'Principal', text: 'Leads academics, staff development and the overall well-being of every student.' },
//   { role: 'Vice Principal', text: 'Coordinates the timetable, examinations and co-curricular programmes.' },
//   { role: 'Academic Coordinator', text: 'Supports teachers with curriculum planning, assessment and teaching methods.' },
//   { role: 'Administrative Officer', text: 'Handles admissions, records, fees and communication with parents.' },
// ]

// export default function SchoolManagementPage() {
//   return (
//     <>
//       <PageBanner title="School Management" trail={[{ label: 'About', href: '/about' }]} />
//       <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
//         <SectionHeading
//           align="center"
//           eyebrow="Our Leadership"
//           title="The Team Behind BVM"
//           className="mx-auto max-w-3xl"
//         />
//         <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-muted-foreground">
//           Our management committee brings together educators and community leaders who share one goal: giving every
//           child a safe, inspiring place to learn.
//         </p>
//         <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {members.map((m) => (
//             <li key={m.role} className="flex flex-col items-center gap-4 rounded-sm border-b-4 border-primary bg-white p-8 text-center shadow-md">
//               <span className="flex size-20 items-center justify-center rounded-full bg-muted text-navy">
//                 <UserRound className="size-9" aria-hidden />
//               </span>
//               <h2 className="font-heading text-xl font-bold text-navy">{m.role}</h2>
//               <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   )
// }



'use client'

import { useState } from 'react'
import { Download, ExternalLink, Eye, FileText, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { PageBanner } from '@/components/site/page-banner'

type BookListDoc = {
  label: string
  file: string
}

// Update these paths to wherever the actual class-wise PDFs are stored, e.g. /documents/book-list/class-1.pdf
const bookList: BookListDoc[] = [
  { label: 'Nursery', file: '/documents/classnur%20book-list.pdf' },
  { label: 'LKG', file: '/documents/classlkg%20book-list.pdf' },
  { label: 'UKG', file: '/documents/classukg%20book-list.pdf' },
  { label: 'Class 1', file: '/documents/class1%20book-list.pdf' },
  { label: 'Class 2', file: '/documents/class2%20book-list.pdf' },
  { label: 'Class 3', file: '/documents/class3%20book-list.pdf' },
  { label: 'Class 4', file: '/documents/class4%20book-list.pdf' },
  { label: 'Class 5', file: '/documents/class5%20book-list.pdf' },
  { label: 'Class 6', file: '/documents/class6%20book-list.pdf' },
  { label: 'Class 7', file: '/documents/class7%20book-list.pdf' },
  { label: 'Class 8', file: '/documents/class8%20book-list.pdf' },
  { label: 'Class 9', file: '/documents/class9%20book-list.pdf' },
  { label: 'Class 10', file: '/documents/class10%20book-list.pdf' },
]

const COMBINED_BOOK_LIST = '/documents/Books List 2026-2027.pdf'

export default function BookListPage() {
  const [active, setActive] = useState<BookListDoc | null>(null)

  return (
    <>
      <PageBanner title="Books List 2026-2027" trail={[{ label: 'Academics', href: '/academics' }]} />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Combined book list for the full session */}
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-navy text-white">
            <GraduationCap className="size-6" aria-hidden />
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-navy">Books List 2026-2027</h2>
          <a
            href={COMBINED_BOOK_LIST}
            download
            className="ml-auto flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-navy"
          >
            <Download className="size-4" aria-hidden />
            Download
          </a>
        </div>

        {/* Class-wise book list — same list format as Documents & Information */}
        <div className="overflow-hidden rounded-sm bg-background shadow-md">
          <h2 className="bg-navy px-6 py-4 text-lg font-bold uppercase tracking-wide text-white">
            Book List &middot; Class Nursery to X
          </h2>

          <ul className="divide-y">
            {bookList.map((doc, i) => (
              <li
                key={doc.file}
                className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 shrink-0 text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <FileText className="size-5 shrink-0 text-navy" aria-hidden />
                  <span className="font-medium text-navy">{doc.label}</span>
                </div>

                <div className="flex shrink-0 gap-2">
                  <Button size="sm" onClick={() => setActive(doc)} aria-label={`View ${doc.label} book list`}>
                    <Eye aria-hidden /> View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    render={<a href={doc.file} download />}
                    nativeButton={false}
                    aria-label={`Download ${doc.label} book list`}
                  >
                    <Download aria-hidden /> Download
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* View / download dialog for the selected class */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="flex h-[90vh] flex-col sm:max-w-4xl">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-lg font-bold text-navy">{active?.label} Book List</DialogTitle>
            <DialogDescription>Ursuline Convent School &middot; Books List 2026-2027</DialogDescription>
          </DialogHeader>
          {active && (
            <>
              <iframe
                src={active.file}
                title={`${active.label} book list`}
                className="min-h-0 flex-1 rounded-sm border"
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  render={<a href={active.file} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                >
                  <ExternalLink aria-hidden /> Open in new tab
                </Button>
                <Button size="sm" render={<a href={active.file} download />} nativeButton={false}>
                  <Download aria-hidden /> Download
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
