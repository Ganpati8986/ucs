import { MessageCircle } from 'lucide-react'
import { school } from '@/lib/site'

export function WhatsAppButton() {
  return (
    <a
      href={school.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7 fill-white stroke-[#25d366]" />
    </a>
  )
}
