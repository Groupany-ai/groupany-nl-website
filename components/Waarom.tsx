"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface WaaromProps {
  lang: Lang
}

export default function Waarom({ lang }: WaaromProps) {
  const t = copy.waarom[lang]

  return (
    <section
      id="waarom"
      className="section-pad"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 12, display: "block" }}>
              {t.label}
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {t.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  padding: "28px 24px",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                    color: "var(--color-text)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #waarom [style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
