// 'use client'

// import { useMemo, useState } from 'react'
// import { Download, ExternalLink, Eye, FileText, Search } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// import { disclosures, type DisclosureDocument } from '@/lib/disclosures'

// export function MandatoryDisclosure() {
//   const [query, setQuery] = useState('')
//   const [active, setActive] = useState<DisclosureDocument | null>(null)

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase()
//     if (!q) return disclosures
//     return disclosures
//       .map((c) => ({ ...c, documents: c.documents.filter((d) => d.title.toLowerCase().includes(q)) }))
//       .filter((c) => c.documents.length > 0)
//   }, [query])

//   const total = disclosures.reduce((sum, c) => sum + c.documents.length, 0)
//   let serial = 0

//   return (
//     <section id="disclosure" className="bg-muted py-20">
//       <div className="mx-auto max-w-7xl px-4 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold uppercase md:text-4xl">
//             <span className="text-primary">Mandatory</span> <span className="text-navy">Public Disclosure</span>
//           </h2>
//           <p className="mt-2 text-muted-foreground">As per CBSE norms &middot; {total} documents available</p>
//           <div className="mx-auto mt-4 h-1 w-16 bg-primary" aria-hidden />
//         </div>

//         <div className="relative mx-auto mt-10 max-w-md">
//           <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
//           <label htmlFor="disclosure-search" className="sr-only">Search documents</label>
//           <Input
//             id="disclosure-search"
//             type="search"
//             placeholder="Search documents..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="h-11 bg-background pl-9"
//           />
//         </div>

//         <div className="mt-10 flex flex-col gap-8">
//           {filtered.length === 0 && (
//             <p className="text-center text-muted-foreground">No documents match your search.</p>
//           )}
//           {filtered.map((cat) => (
//             <div key={cat.category} className="overflow-hidden rounded-sm bg-background shadow-md">
//               <h3 className="bg-navy px-5 py-3 text-lg font-bold uppercase text-white">{cat.category}</h3>
//               <ul className="divide-y">
//                 {cat.documents.map((doc) => {
//                   serial += 1
//                   return (
//                     <li key={doc.file} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
//                       <span className="w-8 shrink-0 text-sm font-bold text-primary">{String(serial).padStart(2, '0')}</span>
//                       <FileText className="hidden size-5 shrink-0 text-navy sm:block" aria-hidden />
//                       <span className="flex-1 font-medium text-navy">{doc.title}</span>
//                       <div className="flex gap-2">
//                         <Button size="sm" onClick={() => setActive(doc)} aria-label={`View ${doc.title}`}>
//                           <Eye aria-hidden /> View
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="outline"
//                           render={<a href={doc.file} download />}
//                           nativeButton={false}
//                           aria-label={`Download ${doc.title}`}
//                         >
//                           <Download aria-hidden /> Download
//                         </Button>
//                       </div>
//                     </li>
//                   )
//                 })}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
//         <DialogContent className="flex h-[90vh] flex-col sm:max-w-4xl">
//           <DialogHeader className="pr-8">
//             <DialogTitle className="text-lg font-bold text-navy">{active?.title}</DialogTitle>
//             <DialogDescription>BVM International School &middot; Mandatory Public Disclosure</DialogDescription>
//           </DialogHeader>
//           {active && (
//             <>
//               <iframe src={active.file} title={active.title} className="min-h-0 flex-1 rounded-sm border" />
//               <div className="flex justify-end gap-2">
//                 <Button variant="outline" size="sm" render={<a href={active.file} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
//                   <ExternalLink aria-hidden /> Open in new tab
//                 </Button>
//                 <Button size="sm" render={<a href={active.file} download />} nativeButton={false}>
//                   <Download aria-hidden /> Download
//                 </Button>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   )
// }



'use client'

import { useMemo, useState } from 'react'
import { Download, ExternalLink, Eye, FileText, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { disclosures, type DisclosureDocument } from '@/lib/disclosures'

const generalInfo: { label: string; value: string }[] = [
  { label: 'Name of the School', value: 'URSULINE CONVENT SCHOOL' },
  { label: 'Affiliation No. (If applicable)', value: '3430050' },
  { label: 'School Code (If applicable)', value: '66246' },
  { label: 'Complete Address with Pin Code', value: 'P O KHALARI DISTT RANCHI JHARKHAND - 829205' },
  { label: 'Principal Name & Qualification', value: 'DR. SR. NIRMALA SAMUEL (B. Sc., B. Ed. M.Ed., Ph.D)' },
  { label: 'School Email ID', value: 'ucskhalari@gmail.com' },
  { label: 'Contact Details', value: '91131 07421' },
]

export function MandatoryDisclosure() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<DisclosureDocument | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return disclosures
    return disclosures
      .map((c) => ({ ...c, documents: c.documents.filter((d) => d.title.toLowerCase().includes(q)) }))
      .filter((c) => c.documents.length > 0)
  }, [query])

  const total = disclosures.reduce((sum, c) => sum + c.documents.length, 0)
  let serial = 0

  return (
    <section id="disclosure" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">
            <span className="text-primary">Mandatory</span> <span className="text-navy">Public Disclosure</span>
          </h2>
          <p className="mt-2 text-muted-foreground">As per CBSE norms &middot; {total} documents available</p>
          <div className="mx-auto mt-4 h-1 w-16 bg-primary" aria-hidden />
        </div>

        {/* A - General Information */}
        <div className="mt-12 overflow-hidden rounded-sm bg-background shadow-md">
          <h3 className="bg-navy px-5 py-3 text-lg font-bold uppercase text-white">
            General Information
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="w-16 border-b-2 border-primary/40 px-5 py-3 text-center text-sm font-bold text-navy">
                    S. No.
                  </th>
                  <th className="border-b-2 border-primary/40 px-5 py-3 text-sm font-bold text-navy">
                    Information
                  </th>
                  <th className="border-b-2 border-primary/40 px-5 py-3 text-sm font-bold text-navy">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {generalInfo.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? 'bg-muted/40' : undefined}>
                    <td className="px-5 py-4 text-center text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="px-5 py-4 text-sm font-medium text-navy">{row.label}</td>
                    <td className="px-5 py-4 text-sm text-foreground">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-md">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <label htmlFor="disclosure-search" className="sr-only">Search documents</label>
          <Input
            id="disclosure-search"
            type="search"
            placeholder="Search documents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 bg-background pl-9"
          />
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">No documents match your search.</p>
          )}
          {filtered.map((cat) => (
            <div key={cat.category} className="overflow-hidden rounded-sm bg-background shadow-md">
              <h3 className="bg-navy px-5 py-3 text-lg font-bold uppercase text-white">{cat.category}</h3>
              <ul className="divide-y">
                {cat.documents.map((doc) => {
                  serial += 1
                  return (
                    <li key={doc.file} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                      <span className="w-8 shrink-0 text-sm font-bold text-primary">{String(serial).padStart(2, '0')}</span>
                      <FileText className="hidden size-5 shrink-0 text-navy sm:block" aria-hidden />
                      <span className="flex-1 font-medium text-navy">{doc.title}</span>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => setActive(doc)} aria-label={`View ${doc.title}`}>
                          <Eye aria-hidden /> View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          render={<a href={doc.file} download />}
                          nativeButton={false}
                          aria-label={`Download ${doc.title}`}
                        >
                          <Download aria-hidden /> Download
                        </Button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="flex h-[90vh] flex-col sm:max-w-4xl">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-lg font-bold text-navy">{active?.title}</DialogTitle>
            <DialogDescription>BVM International School &middot; Mandatory Public Disclosure</DialogDescription>
          </DialogHeader>
          {active && (
            <>
              <iframe src={active.file} title={active.title} className="min-h-0 flex-1 rounded-sm border" />
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" render={<a href={active.file} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
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
    </section>
  )
}