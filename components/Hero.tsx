"use client"

import ScrollReveal from "./ScrollReveal"
import { type Lang } from "@/lib/i18n"

interface HeroProps {
  lang: Lang
}

const TECH_LOGOS = [
  "Next.js", "React", "TypeScript", "PostgreSQL", "Stripe", "Cloudflare", "Hetzner", "Docker",
]

const PROJECTS_NL = [
  { icon: "globe", label: "Website redesign", status: "Live", progress: 100, color: "#22c55e" },
  { icon: "code", label: "CRM koppeling", status: "In ontwikkeling", progress: 72, color: "#3b82f6" },
  { icon: "chart", label: "SEO campagne", status: "Actief", progress: 85, color: "#a855f7" },
  { icon: "mail", label: "Email automatisering", status: "Gepland", progress: 30, color: "#f59e0b" },
]

const PROJECTS_EN = [
  { icon: "globe", label: "Website redesign", status: "Live", progress: 100, color: "#22c55e" },
  { icon: "code", label: "CRM integration", status: "In development", progress: 72, color: "#3b82f6" },
  { icon: "chart", label: "SEO campaign", status: "Active", progress: 85, color: "#a855f7" },
  { icon: "mail", label: "Email automation", status: "Planned", progress: 30, color: "#f59e0b" },
]

export default function Hero({ lang }: HeroProps) {
  const projects = lang === "nl" ? PROJECTS_NL : PROJECTS_EN

  return (
    <>
      <section
        style={{
          paddingTop: "clamp(130px, 16vw, 180px)",
          paddingBottom: "clamp(60px, 8vw, 96px)",
          paddingLeft: "clamp(20px, 4vw, 32px)",
          paddingRight: "clamp(20px, 4vw, 32px)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "clamp(32px, 4vw, 64px)",
              alignItems: "center",
            }}
          >
            {/* Left column: Copy */}
            <div>
              <ScrollReveal>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    marginBottom: 24,
                  }}
                >
                  {lang === "nl"
                    ? <>Vertrouwd door <strong style={{ color: "var(--color-text)" }}>meerdere bedrijven</strong> in Nederland</>
                    : <>Trusted by <strong style={{ color: "var(--color-text)" }}>multiple companies</strong> in the Netherlands</>
                  }
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "var(--color-text)",
                    margin: "0 0 24px",
                    maxWidth: 560,
                  }}
                >
                  {lang === "nl"
                    ? "Uw zakelijke groei begint hier."
                    : "Your business growth starts here."
                  }
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.3vw, 1.125rem)",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                    maxWidth: 480,
                    margin: "0 0 32px",
                  }}
                >
                  {lang === "nl"
                    ? "Software op maat, professionele websites en resultaatgerichte marketing. Van concept tot oplevering, alles onder een dak."
                    : "Custom software, professional websites and results-driven marketing. From concept to delivery, everything under one roof."
                  }
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                  <a href="#contact" className="btn-primary">
                    {lang === "nl" ? "Gratis kennismaken" : "Free introduction"}
                  </a>
                  <a href="#diensten" className="btn-secondary">
                    {lang === "nl" ? "Onze diensten" : "Our services"}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Avatar stack */}
                  <div style={{ display: "flex" }}>
                    {["B", "M", "S", "J"].map((letter, i) => (
                      <div
                        key={letter}
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: i === 0 ? "var(--color-accent)" : "var(--color-bg-alt)",
                          border: i === 0 ? "2px solid var(--color-bg)" : "2px solid var(--color-bg)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                          color: i === 0 ? "#fff" : "var(--color-text-muted)",
                          marginLeft: i === 0 ? 0 : -8,
                          zIndex: 4 - i,
                          position: "relative",
                        }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                    {lang === "nl"
                      ? "Meer dan 10 projecten opgeleverd"
                      : "More than 10 projects delivered"
                    }
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column: Project visual */}
            <div>
              <ScrollReveal delay={0.2}>
                <div
                  style={{
                    background: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02), 0 12px 40px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)",
                  }}
                >
                  {/* Browser chrome */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--color-border)",
                      background: "var(--color-bg-alt)",
                    }}
                  >
                    <div style={{ display: "flex", gap: 6 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: 24,
                        background: "var(--color-bg)",
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        color: "var(--color-text-muted)",
                      }}
                    >
                      mijnproject.nl
                    </div>
                  </div>

                  {/* Project cards */}
                  <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                    {projects.map((item, i) => (
                      <div
                        key={item.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "12px 14px",
                          background: "var(--color-bg)",
                          border: "1px solid var(--color-border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          opacity: 0,
                          transform: "translateY(8px)",
                          animation: "cardIn 0.4s ease forwards",
                          animationDelay: `${0.6 + i * 0.12}s`,
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "var(--radius-sm)",
                            background: "var(--color-border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                            flexShrink: 0,
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {item.icon === "globe" && <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>}
                            {item.icon === "code" && <><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></>}
                            {item.icon === "chart" && <><path d="M18 20V10M12 20V4M6 20v-6"/></>}
                            {item.icon === "mail" && <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></>}
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>{item.label}</div>
                          <div style={{ fontSize: 11, fontWeight: 500, color: item.color }}>{item.status}</div>
                        </div>
                        <div style={{ width: 60, height: 4, background: "var(--color-border-subtle)", borderRadius: 2, overflow: "hidden", flexShrink: 0 }}>
                          <div
                            style={{
                              height: "100%",
                              width: `${item.progress}%`,
                              background: item.color,
                              borderRadius: 2,
                              transition: "width 1s ease",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats bar */}
                  <div
                    style={{
                      display: "flex",
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    {[
                      { value: "99.9%", label: "Uptime" },
                      { value: "< 4h", label: lang === "nl" ? "Reactietijd" : "Response" },
                      { value: "100%", label: lang === "nl" ? "Vaste prijs" : "Fixed price" },
                    ].map((stat, i) => (
                      <div
                        key={stat.label}
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 2,
                          padding: "14px 8px",
                          borderLeft: i > 0 ? "1px solid var(--color-border)" : "none",
                        }}
                      >
                        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)" }}>{stat.value}</span>
                        <span style={{ fontSize: 10, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Floating cards overlay effect */}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes cardIn {
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 900px) {
            section > div > div[style*="grid-template-columns: 1.1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Logo strip */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            textAlign: "center",
            margin: "0 0 14px",
          }}
        >
          {lang === "nl" ? "Technologie en partners" : "Technology and partners"}
        </p>
        <div
          style={{
            overflow: "hidden",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 48,
              animation: "marqueeScroll 25s linear infinite",
              width: "max-content",
            }}
          >
            {[...TECH_LOGOS, ...TECH_LOGOS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  )
}
