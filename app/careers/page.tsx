// import type { Metadata } from 'next'
// import { Briefcase, Mail } from 'lucide-react'
// import { PageBanner } from '@/components/site/page-banner'
// import { SectionHeading } from '@/components/site/section-heading'
// import { school } from '@/lib/site'

// export const metadata: Metadata = { title: 'Careers' }

// const openings = [
//   { role: 'PGT – Mathematics', type: 'Full-time', req: 'M.Sc. Mathematics, B.Ed.' },
//   { role: 'TGT – English', type: 'Full-time', req: 'M.A./B.A. English, B.Ed.' },
//   { role: 'PRT – Primary Teacher', type: 'Full-time', req: 'Graduate with B.Ed./D.El.Ed.' },
//   { role: 'Sports Coach', type: 'Full-time', req: 'B.P.Ed./M.P.Ed.' },
// ]

// export default function CareersPage() {
//   return (
//     <>
//       <PageBanner title="Careers" />
//       <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
//         <SectionHeading eyebrow="Join Our Team" title="Current Openings" />
//         <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
//           We are always looking for passionate educators who love working with children. Send your resume to{' '}
//           <a href={`mailto:${school.email}`} className="font-bold text-primary hover:underline">
//             {school.email}
//           </a>{' '}
//           with the position in the subject line.
//         </p>
//         <ul className="mt-10 grid gap-5 md:grid-cols-2">
//           {openings.map((o) => (
//             <li key={o.role} className="flex flex-col gap-4 rounded-sm border-l-4 border-primary bg-white p-6 shadow-md sm:flex-row sm:items-center sm:justify-between">
//               <div className="flex items-start gap-4">
//                 <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-navy">
//                   <Briefcase className="size-5" aria-hidden />
//                 </span>
//                 <div>
//                   <h2 className="font-heading text-lg font-bold text-navy">{o.role}</h2>
//                   <p className="text-sm text-muted-foreground">
//                     {o.type} · {o.req}
//                   </p>
//                 </div>
//               </div>
//               <a
//                 href={`mailto:${school.email}?subject=${encodeURIComponent(`Application: ${o.role}`)}`}
//                 className="flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-navy"
//               >
//                 <Mail className="size-4" aria-hidden />
//                 Apply
//               </a>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   )
// }




import type { Metadata } from 'next'
import { Briefcase, Mail, Send } from 'lucide-react'
import { PageBanner } from '@/components/site/page-banner'
import { SectionHeading } from '@/components/site/section-heading'
import { school } from '@/lib/site'

export const metadata: Metadata = { title: 'Careers' }

// No roles open right now — add objects here ({ role, type, req }) when a position opens up,
// and the list below will render automatically instead of the "no openings" message.
const openings: { role: string; type: string; req: string }[] = []

export default function CareersPage() {
  const hasOpenings = openings.length > 0

  return (
    <>
      <PageBanner title="Careers" />
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Join Our Team" title="Current Openings" />
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          We are always looking for passionate educators who love working with children. Send your resume to{' '}
          <a href={`mailto:${school.email}`} className="font-bold text-primary hover:underline">
            {school.email}
          </a>{' '}
          with the position in the subject line.
        </p>

        {hasOpenings ? (
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {openings.map((o) => (
              <li
                key={o.role}
                className="flex flex-col gap-4 rounded-sm border-l-4 border-primary bg-white p-6 shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-navy">
                    <Briefcase className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-navy">{o.role}</h2>
                    <p className="text-sm text-muted-foreground">
                      {o.type} · {o.req}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${school.email}?subject=${encodeURIComponent(`Application: ${o.role}`)}`}
                  className="flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-navy"
                >
                  <Mail className="size-4" aria-hidden />
                  Apply
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-sm border-l-4 border-primary bg-white p-10 text-center shadow-md">
            <span className="flex size-14 items-center justify-center rounded-full bg-muted text-navy">
              <Briefcase className="size-6" aria-hidden />
            </span>
            <h2 className="font-heading text-xl font-bold text-navy">No Openings Right Now</h2>
            <p className="max-w-md text-muted-foreground">
              There are no current vacancies at Ursuline Convent School. We&apos;re always glad to hear from
              talented educators, though — send us your resume below and we&apos;ll reach out as soon as a
              suitable position opens up.
            </p>
            <a
              href={`mailto:${school.email}?subject=${encodeURIComponent('Resume for Future Openings')}`}
              className="mt-2 flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-navy"
            >
              <Send className="size-4" aria-hidden />
              Send Resume for Future Openings
            </a>
          </div>
        )}
      </section>
    </>
  )
}