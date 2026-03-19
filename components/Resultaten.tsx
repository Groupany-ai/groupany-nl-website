"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface ResultatenProps {
  lang: Lang
}

export default function Resultaten({ lang }: ResultatenProps) {
  const t = copy.resultaten[lang]

  return (
    <section
      id="resultaten"
      className="section-pad"
      style={{ background: "var(--color-bg)" }}
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

        {/* Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {t.metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    fontWeight: 700,
                    color: i % 2 === 0 ? "var(--color-accent)" : "var(--color-text)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: 8,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  {m.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Case study */}
        <ScrollReveal>
          <div
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(28px, 4vw, 48px)",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <span className="section-label" style={{ marginBottom: 16, display: "block" }}>
              {t.caseLabel}
            </span>
            <h3
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 600,
                marginBottom: 4,
                letterSpacing: "-0.02em",
              }}
            >
              {t.caseTitle}
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--color-text-muted)",
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              {t.caseSub}
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                marginBottom: 28,
                maxWidth: 640,
              }}
            >
              {t.caseDesc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {t.caseStats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--color-bg-alt)",
                    borderRadius: "var(--radius-md)",
                    padding: "16px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: 2,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 14,
                color: "var(--color-text-muted)",
                fontStyle: "italic",
              }}
            >
              {t.caseMore}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #resultaten [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          #resultaten [style*="grid-template-columns: repeat(4"],
          #resultaten [style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
