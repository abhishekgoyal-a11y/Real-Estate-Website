/** Replace with your WhatsApp number in international format without + */
export const WHATSAPP_E164 = '919876543210'

export const COMPANY_NAME = 'EliteEstate'

export const CONTACT_EMAIL = 'hello@eliteestate.in'

export const CONTACT_PHONE = '+91 98765 43210'

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_E164}`
  if (!message?.trim()) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
