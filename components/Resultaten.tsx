"use client"

import ScrollReveal from "./ScrollReveal"

interface ResultatenProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "RESULTATEN",
    headline: "Resultaten die spreken",
    metrics: [
      { value: "< 4 uur", label: "Reactietijd", color: "var(--color-primary)" },
      { value: "3x", label: "Sneller dan traditioneel", color: "var(--color-success)" },
      { value: "24/7", label: "Beschikbaar", color: "var(--color-terracotta)" },
      { value: "\u20ac50K+", label: "Bespaard per klant per jaar", color: "var(--color-primary)" },
    ],
    caseTitle: "Onze eerste klanten ervaren...",
    caseItems: [
      "Snellere oplevering dan verwacht",
      "Directe communicatie zonder tussenpersonen",
      "Meetbaar resultaat binnen de eerste maand",
      "Vaste prijzen zonder verrassingen achteraf",
    ],
  },
  en: {
    label: "RESULTS",
    headline: "Results that speak for themselves",
    metrics: [
      { value: "< 4 hrs", label: "Response time", color: "var(--color-primary)" },
      { value: "3x", label: "Faster than traditional", color: "var(--color-success)" },
      { value: "24/7", label: "Available", color: "var(--color-terracotta)" },
      { value: "\u20ac50K+", label: "Saved per client per year", color: "var(--color-primary)" },
    ],
    caseTitle: "Our first clients experience...",
    caseItems: [
      "Faster delivery than expected",
      "Direct communication without intermediaries",
      "Measurable results within the first month",
      "Fixed prices without surprises",
    ],
  },
}

export default function Resultaten({ lang }: ResultatenProps) {
  const t = copy[lang]

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

        {/* Metric cards */}
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
                  background: "var(--color-bg-white)",
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
                    color: m.color,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    marginBottom: 8,
                    fontFamily: "var(--font-display)",
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

        {/* Case study teaser */}
        <ScrollReveal>
          <div
            style={{
              background: "var(--color-bg-white)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "40px 48px",
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
                color: "var(--color-text)",
              }}
            >
              {t.caseTitle}
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {t.caseItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-success)",
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: "24px",
                      flexShrink: 0,
                    }}
                  >
                    \u2713
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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
          #resultaten [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
          #resultaten [style*="padding: 40px 48px"] {
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
