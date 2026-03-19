'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { useReveal } from '@/lib/useReveal'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <svg
          className={`faq-chevron ${open ? 'open' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className="faq-answer"
        style={{
          maxHeight: open ? '200px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const { t } = useTranslation()
  const revealRef = useReveal()
  const [formState, setFormState] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value || '',
      service: (form.elements.namedItem('service') as HTMLSelectElement)?.value || '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      source: 'groupany.nl contact form',
    }

    try {
      const res = await fetch('https://dev.groupany.ai/api/crm/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-workspace-id': 'cmm0zw66p0004fg22ukne3551',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          notes: `Service interest: ${data.service}

Message: ${data.message}

Source: ${data.source}`,
          status: 'new',
        }),
      })

      if (res.ok) {
        setFormState('sent')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      <Nav />
      <main ref={revealRef}>
        {/* Hero */}
        <section className="subpage-hero">
          <div className="subpage-hero-pattern" />
          <div className="subpage-hero-gradient" />
          <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '600px' }}>
              <h1 className="display-xl reveal">
                {t('contact.headline')}
              </h1>
              <p className="body-lg reveal reveal-delay-1" style={{ marginTop: 'clamp(1rem, 2vw, 1.5rem)' }}>
                {t('contact.subline')}
              </p>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="section-py">
          <div className="container-main">
            <div className="contact-split">
              {/* Form */}
              <div>
                <form
                  className="reveal"
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}
                >
                  {formState === 'sent' && (
                    <div style={{background:'#F0FDF4', border:'1px solid #DCFCE7', borderRadius:8, padding:'12px 16px', fontSize:'0.875rem', color:'#059669'}}>
                      Thank you! We will get back to you within 24 hours.
                    </div>
                  )}
                  {formState === 'error' && (
                    <div style={{background:'#FEF2F2', border:'1px solid #FECACA', borderRadius:8, padding:'12px 16px', fontSize:'0.875rem', color:'#dc2626'}}>
                      Something went wrong. Please try again or email us directly at info@groupany.nl.
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="form-label">{t('contact.company')}</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="form-label">{t('contact.service')}</label>
                      <select
                        id="service"
                        name="service"
                        className="form-input"
                        defaultValue=""
                      >
                        <option value="" disabled>{t('contact.servicePlaceholder')}</option>
                        <option value="software">{t('contact.serviceSoftware')}</option>
                        <option value="marketing">{t('contact.serviceMarketing')}</option>
                        <option value="research">{t('contact.serviceResearch')}</option>
                        <option value="other">{t('contact.serviceOther')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="form-input"
                      placeholder={t('contact.messagePlaceholder')}
                      style={{ resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn-primary" disabled={formState === 'sending'}>
                      {formState === 'sending' ? 'Sending...' : t('contact.submit')}
                    </button>
                  </div>
                </form>
              </div>

              {/* Info card */}
              <div>
                <div className="contact-info-card reveal reveal-delay-1">
                  <div className="contact-info-item">
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">
                      <a href="mailto:hello@groupany.ai">{t('contact.emailAddress')}</a>
                    </p>
                  </div>
                  <div className="contact-info-item">
                    <p className="contact-info-label">{t('contact.phoneLabel')}</p>
                    <p className="contact-info-value">{t('contact.phone')}</p>
                  </div>
                  <div className="contact-info-item">
                    <p className="contact-info-label">Office</p>
                    <p className="contact-info-value">{t('contact.address')}</p>
                  </div>
                  <div className="contact-info-item">
                    <p className="contact-info-label">{t('contact.officeHoursLabel')}</p>
                    <p className="contact-info-value">{t('contact.officeHours')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-py section-alt">
          <div className="container-main" style={{ maxWidth: '720px' }}>
            <p className="label-caps reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              {t('contact.faqLabel')}
            </p>
            <div className="faq-list reveal reveal-delay-1">
              {[1, 2, 3, 4].map((i) => (
                <FAQItem
                  key={i}
                  question={t(`contact.faq${i}q`)}
                  answer={t(`contact.faq${i}a`)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
