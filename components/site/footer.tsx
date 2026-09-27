// 'use client'

// import { AtSign, Camera, Send, ThumbsUp } from 'lucide-react'
// import { school } from '@/lib/site'
// import { Logo } from './logo'
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";


// const links = [
//   { label: 'About Us', href: '/about' },
//   { label: 'Photo Gallery', href: '/gallery/photos' },
//   { label: "Student's Corner", href: '/students-corner' },
//   { label: 'Admission Guidelines', href: '/admission' },
//   { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
//   { label: 'Contact Us', href: '/contact' },
// ]

// export function Footer() {
//   function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     const email = new FormData(e.currentTarget).get('newsletter')
//     window.location.href = `mailto:${school.email}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(`Please add ${email} to the BVM mailing list.`)}`
//   }

//   return (
//     <footer className="bg-navy text-white">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
//         <div>
//           <Logo variant="light" />
//           <p className="mt-5 text-sm leading-relaxed text-white/75">
//             A leading CBSE school in Khalari, committed to academic excellence, strong values and the all-round
//             development of every child.
//           </p>
//         </div>

//         <nav aria-label="Footer">
//           <h2 className="text-lg font-bold">Links</h2>
//           <ul className="mt-5 flex flex-col gap-3">
//             {links.map((l) => (
//               <li key={l.label}>
//                 <a href={l.href} className="flex items-center gap-2 text-sm text-white/80 hover:text-primary">
//                   <span className="size-1.5 rounded-full bg-primary" aria-hidden />
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div>
//           <h2 className="text-lg font-bold">Quick Contact</h2>
//           <ul className="mt-5 flex flex-col gap-3 text-sm text-white/80">
//             <li>{school.address}</li>
//             <li>
//               <span className="font-bold text-white">Mobile:</span>{' '}
//               <a href={school.phoneHref} className="hover:text-primary">{school.phone}</a>
//             </li>
//             <li>
//               <span className="font-bold text-white">Email:</span>{' '}
//               <a href={`mailto:${school.email}`} className="hover:text-primary">{school.email}</a>
//             </li>
//           </ul>
//           <div className="mt-6 flex gap-3">
//             {[
//               {
//                 icon: FaFacebookF,
//                 label: "Facebook",
//                 color: "text-[#1877F2]",
//                 href: "https://www.facebook.com/people/Ursuline-Convent-SchoolKhalari/100068658888850/#",
//                 hover: "hover:bg-[#1877F2]",
//               },
//               {
//                 icon: FaInstagram,
//                 label: "Instagram",
//                 color: "text-[#E4405F]",
//                 href: "https://www.instagram.com/yourpage",
//                 hover: "hover:bg-[#E4405F]",
//               },
//               {
//                 icon: FaYoutube,
//                 label: "YouTube",
//                 color: "text-[#FF0000]",
//                 href: "https://www.youtube.com/@ursulineconventschoolkhala8107/shorts",
//                 hover: "hover:bg-[#FF0000]",
//               },
//             ].map(({ icon: Icon, label, color, hover }) => (
//               <a
//                 key={label}
//                 href="#"
//                 aria-label={label}
//                 className={`group flex size-10 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:border-transparent ${hover}`}
//               >
//                 <Icon
//                   className={`size-4 ${color} transition-colors duration-300 group-hover:text-white`}
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="rounded-sm bg-primary p-6">
//           <h2 className="text-lg font-bold">Email Send</h2>
//           <p className="mt-2 text-sm text-white/90">Get school news and updates in your inbox.</p>
//           <form onSubmit={handleSubscribe} className="mt-5 flex">
//             <label htmlFor="newsletter" className="sr-only">Email address</label>
//             <input
//               id="newsletter"
//               name="newsletter"
//               type="email"
//               required
//               placeholder="Email"
//               className="min-w-0 flex-1 rounded-l-sm border border-white/60 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/80 outline-none focus:border-white"
//             />
//             <button type="submit" aria-label="Subscribe" className="rounded-r-sm bg-navy px-4 hover:bg-white hover:text-navy">
//               <Send className="size-4" />
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="border-t border-white/10 py-5 text-center text-sm text-primary">
//         {`©${new Date().getFullYear()} U C S. All Rights Reserved.`}
//       </div>
//     </footer>
//   )
// }


'use client'

import { Send } from 'lucide-react'
import { school } from '@/lib/site'
import { Logo } from './logo'

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Photo Gallery', href: '/gallery/photos' },
  { label: "Student's Corner", href: '/students-corner' },
  { label: 'Admission Guidelines', href: '/admission' },
  { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
  { label: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Ursuline-Convent-SchoolKhalari/100068658888850/',
    color: 'text-[#1877F2]',
    hover: 'hover:bg-[#1877F2]',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/yourpage',
    color: 'text-[#E4405F]',
    hover: 'hover:bg-[#E4405F]',
  },
  {
    icon: FaYoutube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@ursulineconventschoolkhala8107/shorts',
    color: 'text-[#FF0000]',
    hover: 'hover:bg-[#FF0000]',
  },
]

export function Footer() {
  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const email = new FormData(e.currentTarget).get('newsletter')

    if (!email) return

    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(
      'Newsletter signup'
    )}&body=${encodeURIComponent(
      `Please add ${email} to the school mailing list.`
    )}`
  }

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* =========================
            SCHOOL INFO
        ========================== */}
        <div>
          <Logo variant="light" />

          <p className="mt-5 text-sm leading-relaxed text-white/75">
            A leading CBSE school in Khalari, committed to academic excellence,
            strong values and the all-round development of every child.
          </p>
        </div>

        {/* =========================
            FOOTER LINKS
        ========================== */}
        <nav aria-label="Footer Navigation">
          <h2 className="text-lg font-bold">
            Links
          </h2>

          <ul className="mt-5 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-primary"
                >
                  <span
                    className="size-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
                    aria-hidden="true"
                  />

                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* =========================
            QUICK CONTACT
        ========================== */}
        <div>
          <h2 className="text-lg font-bold">
            Quick Contact
          </h2>

          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/80">

            <li>
              {school.address}
            </li>

            <li>
              <span className="font-bold text-white">
                Mobile:
              </span>{' '}

              <a
                href={school.phoneHref}
                className="transition-colors duration-300 hover:text-primary"
              >
                {school.phone}
              </a>
            </li>

            <li>
              <span className="font-bold text-white">
                Email:
              </span>{' '}

              <a
                href={`mailto:${school.email}`}
                className="transition-colors duration-300 hover:text-primary"
              >
                {school.email}
              </a>
            </li>
          </ul>

          {/* =========================
              SOCIAL MEDIA
          ========================== */}
          <div className="mt-6 flex gap-3">
            {socialLinks.map(
              ({
                icon: Icon,
                label,
                color,
                href,
                hover,
              }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                  className={`group flex size-10 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-transparent ${hover}`}
                >
                  <Icon
                    className={`size-4 ${color} transition-colors duration-300 group-hover:text-white`}
                  />
                </a>
              )
            )}
          </div>
        </div>

        {/* =========================
            NEWSLETTER
        ========================== */}
        <div className="rounded-sm bg-primary p-6">
          <h2 className="text-lg font-bold">
            Email Send
          </h2>

          <p className="mt-2 text-sm text-white/90">
            Get school news and updates in your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-5 flex"
          >
            <label
              htmlFor="newsletter"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="newsletter"
              name="newsletter"
              type="email"
              required
              placeholder="Email"
              className="min-w-0 flex-1 rounded-l-sm border border-white/60 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/80 outline-none focus:border-white"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-r-sm bg-navy px-4 transition-colors duration-300 hover:bg-white hover:text-navy"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* =========================
          COPYRIGHT
      ========================== */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-primary">
        {`©${new Date().getFullYear()} U C S. All Rights Reserved.`}
      </div>
    </footer>
  )
}
