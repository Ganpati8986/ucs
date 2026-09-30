export type DisclosureDocument = {
  title: string
  file: string
}

export type DisclosureCategory = {
  category: string
  documents: DisclosureDocument[]
}

// To add a document: drop the PDF into /public/documents and add an entry below.
export const disclosures: DisclosureCategory[] = [
  {
    category: 'Documents & Information',
    documents: [
       { title: 'Mandatory Disclosure', file: '/documents/mand.pdf' },
      { title: 'Affiliation / Upgradation Letter', file: '/documents/affiliationletter.PDF' },
      { title: 'Society / Trust Registration Certificate', file: '/documents/socity.pdf'},
      { title: 'No Objection Certificate (NOC) by State Govt.', file: '/documents/NOC.pdf' },
      // { title: 'Recognition Certificate under RTE Act, 2009', file: '/documents/RTE.pdf' },
      { title: 'Building Safety Certificate', file: '/documents/Building.pdf' },
      { title: 'Fire Safety Certificate', file: '/documents/fire.pdf' },
      { title: 'DEO Certificate for Self Certification', file: '/documents/deo-certificate.pdf' },     
      { title: 'Water, Health & Sanitation Certificates', file: '/documents/water-healthsanitation.pdf' },
    ],
  },
  {
    category: 'Results & Academics',
    documents: [
      { title: 'Fee Structure 2026-27', file: '/documents/fee.pdf' },
      { title: 'Annual Academic Calendar 2026-27', file: '/documents/academic.pdf' },
      { title: 'School Management Committee (SMC) List', file: '/documents/smc-list.pdf' },
      { title: 'Parent Teacher Association (PTA) Members', file: '/documents/pta.pdf' },
      { title: 'Board Examination Results (Last 3 Years)', file: '/documents/board-results.pdf' },
    ],
  },
  {
    category: 'Staff & Infrastructure',
    documents: [
      { title: 'Staff (Teaching) Details', file: '/documents/teaching.pdf' },
      { title: 'School Infrastructure Details', file: '/documents/infra.pdf' },
    ],
  },
]
