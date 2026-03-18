"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface DienstenProps {
  lang: Lang
}

export default function Diensten({ lang }: DienstenProps) {
  const t = copy.diensten[lang]

  return (
    <section
      id="diensten"
      className="section-pad"
      style={{ background: "var(--color-bg-elevated)" }}
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
                marginBottom: 12,
              }}
            >
              {t.headline}
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--color-text-secondary)",
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              {t.sub}
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {t.services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className="card"
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    letterSpacing: "0.02em",
                    marginBottom: 16,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                    color: "var(--color-text)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      style={{
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 500,
                        background: "var(--color-bg-alt)",
                        color: "var(--color-text-secondary)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #diensten [style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
