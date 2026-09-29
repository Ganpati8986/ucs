export const school = {
  name: 'Ursuline Convent School',
  shortName: 'UCS',
  affiliation: 'Affiliated to CBSE, New Delhi',
  address: 'Ursuline Convent, Khalari, Ranchi',
  phone: '+91-91131 07421',
  phoneHref: 'tel:+918292547635',
  landline: '91131 07421',
  landlineHref: 'tel:+918292547635',
  email: 'ucskhalari@gmail.com',
  hours: 'Mon-Sat: 8am – 2pm',
  whatsappHref: 'https://wa.me/918292547635',
}

export type NavItem = { 
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Principal Message', href: '/about/principal-message' },
      { label: 'Book-List', href: '/about/school-management' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    label: 'Our Facilities',
    href: '/facilities',
    children: [
      { label: 'Sports', href: '/facilities/sports' },
      { label: 'Co-Curricular', href: '/facilities/co-curricular' },
      { label: 'Extra-Curricular', href: '/facilities/extra-curricular' },
      { label: 'Transportation', href: '/facilities/transportation' },
    ],
  },
  {
    label: 'Admission',
    href: '/admission',
    children: [
      { label: 'Steps for Enrollment', href: '/admission' },
      { label: 'Enquiry Form', href: '/admission/enquiry' },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery/photos',
    children: [
      { label: 'Photos Gallery', href: '/gallery/photos' },
      { label: 'Video Gallery', href: '/gallery/videos' },
    ],
  },
  { label: "Student's Corner", href: '/students-corner' },
  { label: 'Disclosure', href: '/mandatory-disclosure' },
  { label: 'Careers', href: '/careers' },
]

export function isNavActive(pathname: string, item: NavItem) {
  if (item.href === '/') return pathname === '/'
  const prefixes = [item.href, ...(item.children?.map((c) => c.href) ?? [])]
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`))
}
