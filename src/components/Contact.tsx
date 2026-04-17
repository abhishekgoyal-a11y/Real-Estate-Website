import { motion, useReducedMotion } from 'framer-motion'
import { type FormEvent, useState } from 'react'
import { whatsappUrl } from '../config'

export function Contact() {
  const reduce = useReducedMotion()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const waText = `Hi, I'm ${name || '...'} (${phone || 'no phone'}). ${message}`

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-blue">
              Contact
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
              Tell us what you are looking for
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              A specialist will respond shortly. For faster replies, message us
              on WhatsApp.
            </p>
            <a
              href={whatsappUrl(
                "Hi EliteEstate, I'd like to speak about a property.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              <WhatsAppGlyph className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <motion.form
            onSubmit={onSubmit}
            className="rounded-3xl border border-ink/5 bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-page px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-blue/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-page px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-blue/40"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-y rounded-xl border border-ink/10 bg-page px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-blue/40"
                  placeholder="Budget, preferred locality, timeline..."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-ink/90"
              >
                Send message
              </button>
              <a
                href={whatsappUrl(waText)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-ink/10 px-6 text-sm font-semibold text-ink transition hover:border-accent-gold/50 hover:text-accent-gold"
              >
                Send via WhatsApp
              </a>
            </div>

            {sent && (
              <p className="mt-4 text-sm font-medium text-accent-blue" role="status">
                Thank you — we&apos;ll be in touch shortly.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  )
}
