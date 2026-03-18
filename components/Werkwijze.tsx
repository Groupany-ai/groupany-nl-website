"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface WerkwijzeProps {
  lang: Lang
}

export default function Werkwijze({ lang }: WerkwijzeProps) {
  const t = copy.werkwijze[lang]

  return (
    <section
      id="werkwijze"
      className="section-pad"
      style={{ background: "var(--color-bg-elevated)" }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
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

        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          {t.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  paddingBottom: i < t.steps.length - 1 ? 48 : 0,
                  position: "relative",
                }}
              >
                {/* Timeline */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    width: 48,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: i === 0 ? "var(--color-accent)" : "var(--color-bg-alt)",
                      border: i === 0 ? "none" : "2px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      color: i === 0 ? "#fff" : "var(--color-text-secondary)",
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  {i < t.steps.length - 1 && (
                    <div
                      style={{
                        width: 2,
                        flex: 1,
                        background: "var(--color-border)",
                        marginTop: 8,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: 8 }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                      color: "var(--color-text)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
