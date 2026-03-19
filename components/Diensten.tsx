"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface DienstenProps {
  lang: Lang
}

const SERVICE_ICONS = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
]

export default function Diensten({ lang }: DienstenProps) {
  const t = copy.diensten[lang]

  return (
    <section
      id="diensten"
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
                lineHeight: 1.6,
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
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-accent-subtle)",
                      color: "var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {SERVICE_ICONS[i]}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)" }}>
                    {s.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
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
