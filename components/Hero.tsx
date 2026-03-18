"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface HeroProps {
  lang: Lang
}

/* Tech logos for marquee */
const TECH_LOGOS = [
  "Next.js", "React", "TypeScript", "PostgreSQL", "Stripe", "Cloudflare",
]

/* Deliverable cards for the right column visual */
const DELIVERABLES_NL = [
  { icon: "globe", label: "Website", status: "Live", color: "#22c55e" },
  { icon: "chart", label: "Analytics", status: "Actief", color: "#3b82f6" },
  { icon: "code", label: "API koppeling", status: "Deployed", color: "#a855f7" },
  { icon: "mail", label: "Email campagne", status: "Verzonden", color: "#f59e0b" },
]

const DELIVERABLES_EN = [
  { icon: "globe", label: "Website", status: "Live", color: "#22c55e" },
  { icon: "chart", label: "Analytics", status: "Active", color: "#3b82f6" },
  { icon: "code", label: "API integration", status: "Deployed", color: "#a855f7" },
  { icon: "mail", label: "Email campaign", status: "Sent", color: "#f59e0b" },
]

const ICONS: Record<string, string> = {
  globe: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  chart: "M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-4h2v16h-2V5zm4 8h2v8h-2v-8zm4-4h2v12h-2V9z",
  code: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  mail: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
}

export default function Hero({ lang }: HeroProps) {
  const t = copy.hero[lang]
  const deliverables = lang === "nl" ? DELIVERABLES_NL : DELIVERABLES_EN

  return (
    <>
      {/* Hero section */}
      <section className="hero-grid-nl">
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-columns-nl">
            {/* Left column */}
            <div className="hero-left-nl">
              <ScrollReveal>
                <span className="hero-eyebrow-nl">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {lang === "nl" ? "Gevestigd aan de Keizersgracht, Amsterdam" : "Based on the Keizersgracht, Amsterdam"}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="hero-h1-nl serif">
                  {lang === "nl"
                    ? "Software, websites en marketing die resultaat opleveren"
                    : "Software, websites and marketing that deliver results"}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="hero-sub-nl">
                  {lang === "nl"
                    ? "Wij zijn uw technologiepartner. Van software op maat tot resultaatgerichte marketing. Sneller, slimmer en betaalbaarder dan traditionele bureaus."
                    : "We are your technology partner. From custom software to results-driven marketing. Faster, smarter and more affordable than traditional agencies."}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="hero-cta-group-nl">
                  <a href="#contact" className="btn-primary">
                    {lang === "nl" ? "Vraag een offerte aan" : "Request a quote"}
                  </a>
                  <a href="#diensten" className="btn-secondary">
                    {lang === "nl" ? "Bekijk onze diensten" : "View our services"}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="hero-trust-nl">
                  KVK 93.847.291 · Keizersgracht 520, Amsterdam
                </p>
              </ScrollReveal>
            </div>

            {/* Right column: Deliverables visual */}
            <div className="hero-right-nl">
              <ScrollReveal delay={0.2}>
                <div className="hero-visual-nl">
                  {/* Visual header */}
                  <div className="visual-header-nl">
                    <div className="visual-dots-nl">
                      <span style={{ background: "#ef4444" }} />
                      <span style={{ background: "#f59e0b" }} />
                      <span style={{ background: "#22c55e" }} />
                    </div>
                    <span className="visual-title-nl">
                      {lang === "nl" ? "Project overzicht" : "Project overview"}
                    </span>
                  </div>

                  {/* Deliverable cards */}
                  <div className="visual-cards-nl">
                    {deliverables.map((item, i) => (
                      <div
                        key={item.label}
                        className="visual-card-nl"
                        style={{ animationDelay: `${0.6 + i * 0.12}s` }}
                      >
                        <div className="visual-card-icon-nl" style={{ color: item.color }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d={ICONS[item.icon]} />
                          </svg>
                        </div>
                        <div className="visual-card-info-nl">
                          <span className="visual-card-label-nl">{item.label}</span>
                          <span className="visual-card-status-nl" style={{ color: item.color }}>
                            {item.status}
                          </span>
                        </div>
                        <div className="visual-card-bar-nl">
                          <div
                            className="visual-card-bar-fill-nl"
                            style={{
                              background: item.color,
                              animationDelay: `${0.9 + i * 0.12}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini stats row */}
                  <div className="visual-stats-nl">
                    <div className="visual-stat-nl">
                      <span className="visual-stat-value-nl">99.9%</span>
                      <span className="visual-stat-label-nl">Uptime</span>
                    </div>
                    <div className="visual-stat-nl">
                      <span className="visual-stat-value-nl">&lt; 4 uur</span>
                      <span className="visual-stat-label-nl">{lang === "nl" ? "Reactietijd" : "Response"}</span>
                    </div>
                    <div className="visual-stat-nl">
                      <span className="visual-stat-value-nl">100%</span>
                      <span className="visual-stat-label-nl">{lang === "nl" ? "Vaste prijs" : "Fixed price"}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Logo marquee strip */}
      <section className="logo-strip-nl">
        <p className="logo-strip-label-nl">
          {lang === "nl" ? "Technologie die wij gebruiken" : "Technology we use"}
        </p>
        <div className="logo-marquee-wrapper-nl">
          <div className="logo-marquee-nl">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((name, i) => (
              <span key={`${name}-${i}`} className="logo-marquee-item-nl">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
