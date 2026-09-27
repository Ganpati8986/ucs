// import Link from 'next/link'
// import { cn } from '@/lib/utils'

// export function Logo({ variant = 'dark', className }: { variant?: 'dark' | 'light'; className?: string }) {
//   const light = variant === 'light'
//   return (
//     <Link href="/" className={cn('flex items-center gap-3', className)} aria-label="BVM International School home">
//       <span className="flex size-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground">
//         G
//       </span>
//       <span className="flex flex-col leading-tight">
//         <span className={cn('font-heading text-lg font-extrabold', light ? 'text-white' : 'text-navy')}>
//           Ursuline Convent
//         </span>
//         <span className={cn('text-[11px] font-medium uppercase tracking-wider', light ? 'text-white/70' : 'text-muted-foreground')}>
//           Affiliated to C.B.S.E Delhi School Code- 66245
//         </span>
//       </span>
//     </Link>
//   )
// }


import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  const light = variant === 'light'

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3', className)}
      aria-label="Ursuline Convent School home"
    >
      {/* Animated Logo */}
      <div className="logo-wrapper relative flex h-14 w-14 shrink-0 items-center justify-center">
        <div className="logo-glow absolute inset-1 rounded-full" />

        <Image
          src="/images/logo.png"
          alt="Ursuline Convent School Logo"
          width={56}
          height={56}
          className="logo-image relative z-10 h-14 w-14 object-contain"
          priority
        />
      </div>

      {/* School Name */}
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'school-name font-heading text-lg font-extrabold',
            light ? 'text-white' : 'text-navy'
          )}
        >
          Ursuline Convent School
          <span className="school-name-shine" />
        </span>

        <span
          className={cn(
            'affiliation-text font-bold text-[11px] uppercase tracking-wider',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          Affiliated to C.B.S.E Delhi School Code- 66245
          <span className="affiliation-shine" />
        </span>
      </span>
    </Link>
  )
}