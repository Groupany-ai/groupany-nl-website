"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface WaaromProps {
  lang: Lang
}

export default function Waarom({ lang }: WaaromProps) {
  const t = copy.waarom[lang]
  const label = t.label
  const headline = t.headline

  return (
    <section
      id="waarom"
      className="section-pad"
      style={{ background: "var(--color-bg-section)" }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 12, display: "block" }}>
              {label}
            </span>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                color: "var(--color-text)",
              }}
            >
              {headline}
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {t.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  padding: "28px 24px",
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
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
