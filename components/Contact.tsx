"use client"

import { useState } from "react"

interface ContactProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "Contact",
    headline: "Laten we kennismaken",
    sub: "Heeft u een vraag of wilt u weten wat wij voor uw bedrijf kunnen betekenen? Neem gerust contact op.",
    form: {
      naam: "Naam",
      email: "E-mailadres",
      telefoon: "Telefoonnummer",
      dienst: "Waar kunnen wij u mee helpen?",
      dienstOptions: ["Software ontwikkeling", "Marketing", "Websites", "Social recruitment", "Anders"],
      bericht: "Uw bericht",
      submit: "Verstuur bericht",
      sending: "Versturen...",
      success: "Bedankt! Wij nemen zo snel mogelijk contact met u op.",
    },
    info: {
      title: "Contactgegevens",
      address: ["Keizersgracht 520", "1017 EK Amsterdam"],
      email: "info@groupany.nl",
      phone: "+31 (0)20 XXX XXXX",
      kvk: "KVK: 93.847.291",
      btw: "BTW: NL866041827B01",
      hours: "Ma — Vr: 09:00 — 18:00",
      hoursNote: "AI-agents: 24/7 bereikbaar",
    },
  },
  en: {
    label: "Contact",
    headline: "Let\u2019s get in touch",
    sub: "Have a question or want to know what we can do for your business? Feel free to reach out.",
    form: {
      naam: "Name",
      email: "Email address",
      telefoon: "Phone number",
      dienst: "How can we help you?",
      dienstOptions: ["Software development", "Marketing", "Websites", "Social recruitment", "Other"],
      bericht: "Your message",
      submit: "Send message",
      sending: "Sending...",
      success: "Thank you! We will get back to you as soon as possible.",
    },
    info: {
      title: "Contact details",
      address: ["Keizersgracht 520", "1017 EK Amsterdam"],
      email: "info@groupany.nl",
      phone: "+31 (0)20 XXX XXXX",
      kvk: "KVK: 93.847.291",
      btw: "BTW: NL866041827B01",
      hours: "Mon — Fri: 09:00 — 18:00",
      hoursNote: "AI agents: available 24/7",
    },
  },
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "var(--radius-md)",
  border: "1px solid var(--color-border)",
  background: "var(--color-bg-white)",
  fontSize: 14,
  fontFamily: "var(--font-sans)",
  color: "var(--color-text)",
  outline: "none",
  transition: "border-color var(--duration-base)",
}

export default function Contact({ lang }: ContactProps) {
  const t = copy[lang]
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--color-bg-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16, marginBottom: 56 }}>
          <span className="section-label">{t.label}</span>
          <h2
            className="section-headline"
            style={{
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 500,
              color: "var(--color-text)",
            }}
          >
            {t.headline}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              maxWidth: 480,
              fontWeight: 400,
            }}
          >
            {t.sub}
          </p>
        </div>

        {/* Split layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="grid-contact"
        >
          {/* Form */}
          <div
            style={{
              padding: 36,
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--color-border)",
              background: "var(--color-bg-subtle)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 24px" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "var(--radius-full)",
                    background: "rgba(5,150,105,0.1)",
                    border: "1px solid rgba(5,150,105,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "#059669",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text)" }}>
                  {t.form.success}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginBottom: 6 }}>
                    {t.form.naam} *
                  </label>
                  <input
                    type="text"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginBottom: 6 }}>
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginBottom: 6 }}>
                      {t.form.telefoon}
                    </label>
                    <input
                      type="tel"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginBottom: 6 }}>
                    {t.form.dienst}
                  </label>
                  <select
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2364748B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      paddingRight: 44,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  >
                    <option value="">—</option>
                    {t.form.dienstOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginBottom: 6 }}>
                    {t.form.bericht} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: 8,
                    padding: "14px 32px",
                    borderRadius: "var(--radius-full)",
                    background: "var(--color-primary)",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "var(--shadow-primary)",
                    transition: "background var(--duration-base), transform var(--duration-base)",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "var(--color-primary-dark)"
                    el.style.transform = "translateY(-1px)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "var(--color-primary)"
                    el.style.transform = "translateY(0)"
                  }}
                >
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
              {t.info.title}
            </h3>

            {/* Address */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-primary-xlight)",
                  border: "1px solid var(--color-primary-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 4.5 5 10 5 10s5-5.5 5-10c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)", marginBottom: 4 }}>
                  {t.info.address[0]}
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                  {t.info.address[1]}
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-primary-xlight)",
                  border: "1px solid var(--color-primary-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 6l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)", marginBottom: 4 }}>
                  {t.info.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-primary-xlight)",
                  border: "1px solid var(--color-primary-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.62 7.79c.78 1.63 2.1 2.95 3.73 3.73l1.25-1.25a.75.75 0 01.77-.18c.84.28 1.75.43 2.68.43.41 0 .75.34.75.75v2.63c0 .41-.34.75-.75.75C7.29 14.65 1.35 8.71 1.35 3.15c0-.41.34-.75.75-.75H4.73c.41 0 .75.34.75.75 0 .93.15 1.84.43 2.68a.75.75 0 01-.18.77L4.48 7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)", marginBottom: 4 }}>
                  {t.info.phone}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="divider-gradient-blue" />

            {/* Business details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{t.info.kvk}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{t.info.btw}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{t.info.hours}</p>
              <p style={{ fontSize: 12, color: "var(--color-primary)", fontWeight: 600 }}>{t.info.hoursNote}</p>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                width: "100%",
                height: 200,
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0!2d4.8866!3d52.3643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609eee0fc04f1%3A0x0!2sKeizersgracht%20520%2C%201017%20EK%20Amsterdam!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "var(--radius-xl)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Groupany kantoor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
