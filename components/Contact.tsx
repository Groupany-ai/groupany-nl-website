"use client"

import { useState } from "react"
import ScrollReveal from "./ScrollReveal"

interface ContactProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "CONTACT",
    headline: "Laten we kennismaken",
    form: {
      name: "Naam",
      email: "E-mailadres",
      phone: "Telefoon",
      service: "Waar kunnen we u mee helpen?",
      serviceOptions: ["Software op maat", "Marketing & groei", "Websites", "Social recruitment", "Anders"],
      message: "Uw bericht",
      submit: "Verstuur bericht",
    },
    info: {
      title: "Contactgegevens",
      address: "Keizersgracht 520\n1017 EK Amsterdam",
      email: "info@groupany.nl",
      phone: "+31 20 XXX XXXX",
      note: "Wij reageren binnen 4 uur op werkdagen.",
    },
  },
  en: {
    label: "CONTACT",
    headline: "Let\u2019s get acquainted",
    form: {
      name: "Name",
      email: "Email address",
      phone: "Phone",
      service: "How can we help you?",
      serviceOptions: ["Custom software", "Marketing & growth", "Websites", "Social recruitment", "Other"],
      message: "Your message",
      submit: "Send message",
    },
    info: {
      title: "Contact details",
      address: "Keizersgracht 520\n1017 EK Amsterdam",
      email: "info@groupany.nl",
      phone: "+31 20 XXX XXXX",
      note: "We respond within 4 hours on business days.",
    },
  },
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-bg)",
  color: "var(--color-text)",
  outline: "none",
  transition: "border-color 200ms",
}

export default function Contact({ lang }: ContactProps) {
  const t = copy[lang]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "var(--color-bg-white)" }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 12, display: "block" }}>
              {t.label}
            </span>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                color: "var(--color-text)",
              }}
            >
              {t.headline}
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 48,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input
                  type="text"
                  placeholder={t.form.name}
                  required
                  style={inputStyle}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
                <input
                  type="email"
                  placeholder={t.form.email}
                  required
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>
              <input
                type="tel"
                placeholder={t.form.phone}
                style={inputStyle}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              />
              <select
                style={{ ...inputStyle, color: formData.service ? "var(--color-text)" : "var(--color-text-muted)" }}
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              >
                <option value="" disabled>{t.form.service}</option>
                {t.form.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <textarea
                placeholder={t.form.message}
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              />
              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                {t.form.submit}
              </button>
            </form>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{t.info.title}</h3>

              <div>
                <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 4, fontWeight: 500 }}>
                  {lang === "nl" ? "Adres" : "Address"}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                  Groupany B.V.{"\n"}{t.info.address}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 4, fontWeight: 500 }}>
                  E-mail
                </div>
                <a
                  href={`mailto:${t.info.email}`}
                  style={{ fontSize: 15, color: "var(--color-primary)", fontWeight: 500 }}
                >
                  {t.info.email}
                </a>
              </div>

              <div>
                <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 4, fontWeight: 500 }}>
                  {lang === "nl" ? "Telefoon" : "Phone"}
                </div>
                <a
                  href={`tel:${t.info.phone.replace(/\s/g, "")}`}
                  style={{ fontSize: 15, fontWeight: 500 }}
                >
                  {t.info.phone}
                </a>
              </div>

              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(5,150,105,0.06)",
                  border: "1px solid rgba(5,150,105,0.15)",
                  fontSize: 14,
                  color: "var(--color-success)",
                  fontWeight: 500,
                }}
              >
                {t.info.note}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact [style*="grid-template-columns: 1.2fr"] {
            grid-template-columns: 1fr !important;
          }
          #contact [style*="grid-template-columns: 1fr 1fr"][style*="gap: 16"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
