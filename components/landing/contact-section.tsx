'use client'

import { FormEvent, useState } from 'react'

import { DottedMap } from '@/components/ui/dotted-map'
import { Arrow, serviceMapMarkers } from './data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Briefcase,
  Check,
  Copy,
  Mail,
  Phone,
  Search,
} from 'lucide-react'
import { toast } from 'react-toastify'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  const { ref, isVisible } = useScrollAnimation()

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)

    setTimeout(() => setCopied(null), 2000)
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSending(true)
    setSent(false)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      service_type: formData.get('service_type'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Failed to send your request.'
        )
      }

      setSent(true)
      form.reset()
      toast.success('Your quote request has been sent successfully!')
    } catch (error) {
      console.error(error)
      toast.error(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your request.'
      )
      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section ref={ref} className="contact section" id="contact">
      <div className="contact-map" aria-hidden="true">
        <DottedMap
          width={150}
          height={75}
          mapSamples={4200}
          markers={serviceMapMarkers}
          dotColor="rgba(45,45,45,.19)"
          markerColor="#aa301a"
          dotRadius={0.22}
          pulse
        />
      </div>

      <div className="container contact-grid">
        <div
          className={`contact-copy ${isVisible
            ? 'animate-fade-in-from-left'
            : 'opacity-0'
            }`}
        >
          <span className="eyebrow">
            START A PROJECT
          </span>

          <h2>
            Let&apos;s build
            <br />
            something lasting.
          </h2>

          <p>
            Tell us about your project and our team will be in touch
            to discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col gap-4 mt-4 justify-center">
            <span className="flex gap-2 items-center group">
              <Phone size={15} />

              <p
                onClick={() => handleCopy('(+61) 424 775 116')}
                className="text-sm! font-bold cursor-pointer hover:text-[#dca75a] transition-colors flex items-center gap-2"
                title="Copy phone number"
              >
                (+61) 424 775 116

                {copied === '(+61) 424 775 116' ? (
                  <Check
                    size={14}
                    className="text-green-500"
                  />
                ) : (
                  <Copy
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400"
                  />
                )}
              </p>
            </span>

            <span className="flex gap-2 items-center group">
              <Mail size={15} />

              <p
                onClick={() =>
                  handleCopy('BULLPUP2024@outlook.com')
                }
                className="text-sm! font-bold cursor-pointer hover:text-[#dca75a] transition-colors flex items-center gap-2"
                title="Copy email address"
              >
                BULLPUP2024@outlook.com

                {copied === 'BULLPUP2024@outlook.com' ? (
                  <Check
                    size={14}
                    className="text-green-500"
                  />
                ) : (
                  <Copy
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400"
                  />
                )}
              </p>
            </span>

            {/* ABN */}
            <span className="flex gap-2 items-center group">
              <Search size={15} />

              <p
                onClick={() => handleCopy('86 675 953 349')}
                className="text-sm! font-bold cursor-pointer hover:text-[#dca75a] transition-colors flex items-center gap-2"
                title="Copy ABN"
              >
                (ABN): 86 675 953 349

                {copied === '86 675 953 349' ? (
                  <Check
                    size={14}
                    className="text-green-500"
                  />
                ) : (
                  <Copy
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400"
                  />
                )}
              </p>
            </span>
          </div>

          <div className="contact-meta">
            <span>
              SYDNEY · NSW
            </span>
          </div>
        </div>

        <form
          className={`flex flex-col gap-5 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 ${isVisible ? 'animate-fade-in-from-right' : 'opacity-0'
            }`}
          onSubmit={submit}
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              id="name"
              required
              name="name"
              placeholder="Your full name"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition-all focus:border-[#dca75a] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#dca75a]/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              id="email"
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition-all focus:border-[#dca75a] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#dca75a]/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="service_type" className="text-sm font-bold text-gray-700">
              Service type
            </label>
            <select
              id="service_type"
              required
              name="service_type"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition-all focus:border-[#dca75a] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#dca75a]/20 appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a service</option>
              <option value="Brick Restoration">Brick Restoration</option>
              <option value="New Builds">New Builds</option>
              <option value="Renovation">Renovation</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-bold text-gray-700">
              Project details
            </label>
            <textarea
              id="message"
              required
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              className="w-full resize-y rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition-all focus:border-[#dca75a] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#dca75a]/20"
            />
          </div>

          {/* Submit Button */}
          <button
            className="button w-full justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={sending}
          >
            {sending
              ? 'Sending...'
              : sent
                ? 'Request Received'
                : 'Request a Quote'}
            <Arrow />
          </button>
        </form>
      </div>
    </section>
  )
}