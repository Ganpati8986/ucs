// import { Analytics } from '@vercel/analytics/next'
// import type { Metadata, Viewport } from 'next'
// import { Barlow, Roboto } from 'next/font/google'
// import { Header } from '@/components/site/header'
// import { Footer } from '@/components/site/footer'
// import { WhatsAppButton } from '@/components/site/whatsapp-button'
// import { AdmissionPopup } from '@/components/site/admission-popup'
// import './globals.css'

// const barlow = Barlow({
//   subsets: ['latin'],
//   weight: ['500', '600', '700', '800'],
//   variable: '--font-barlow',
// })

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   variable: '--font-roboto',
// })

// export const metadata: Metadata = {
//   title: {
//     default: 'BVM International School | Barnala, Punjab',
//     template: '%s | BVM International School',
//   },
//   description:
//     'BVM International School, Barnala — a CBSE school offering quality education, expert mentors, sports, co-curricular activities and a joyful learning environment.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
//       { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
//       { url: '/icon.svg', type: 'image/svg+xml' },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export const viewport: Viewport = {
//   colorScheme: 'light',
//   themeColor: '#12295c',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className={`${barlow.variable} ${roboto.variable}`}>
//       <body className="antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <WhatsAppButton />
//         <AdmissionPopup />
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }


import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Roboto } from 'next/font/google'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { AdmissionPopup } from '@/components/site/admission-popup'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    default: 'Ursuline Convent School Khalari',
    template: '%s | Ursuline Convent School Khalari',
  },
  description:
    'Ursuline Convent School, Khalari — a CBSE school offering quality education, expert mentors, sports, co-curricular activities and a joyful learning environment.',
  icons: {
    icon: [
      { url: '/logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/logo.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#12295c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${roboto.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <AdmissionPopup />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
