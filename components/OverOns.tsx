"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface OverOnsProps {
  lang: Lang
}

export default function OverOns({ lang }: OverOnsProps) {
  const t = copy.overOns[lang]

  return (
    <section
      id="over-ons"
      className="section-pad"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 12, display: "block" }}>
              {t.label}
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              {t.headline}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto 56px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                marginBottom: 16,
              }}
            >
              {t.story}
            </p>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
              }}
            >
              {t.story2}
            </p>
          </div>
        </ScrollReveal>

        {/* Differentiators */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 64,
          }}
        >
          {t.diffs.map((d, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                }}
              >
                <h4
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "var(--color-text)",
                  }}
                >
                  {d.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {d.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Team + Address */}
        <ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 20,
                  color: "var(--color-text)",
                }}
              >
                {t.teamTitle}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {t.team.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: m.isHuman ? "var(--color-accent)" : "var(--color-bg-alt)",
                        border: m.isHuman ? "none" : "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: m.isHuman ? "#fff" : "var(--color-text-muted)",
                        fontSize: 14,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {m.name[0]}
                    </div>
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>
                        {m.name}
                      </span>
                      {!m.isHuman && (
                        <span
                          style={{
                            marginLeft: 6,
                            padding: "2px 7px",
                            borderRadius: 999,
                            background: "var(--color-accent-subtle)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "var(--color-accent)",
                          }}
                        >
                          AI
                        </span>
                      )}
                      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                        {m.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 14, color: "var(--color-text-muted)", marginBottom: 8, fontWeight: 500 }}>
                {lang === "nl" ? "Adres" : "Address"}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>Groupany B.V.</div>
              <div style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                {t.address}
              </div>
              <div style={{ marginTop: 16, fontSize: 13, color: "var(--color-text-muted)" }}>
                KVK 93.847.291
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #over-ons [style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          #over-ons [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
