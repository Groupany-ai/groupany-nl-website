"use client"

import ScrollReveal from "./ScrollReveal"

interface DienstenProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "DIENSTEN",
    headline: "Wat we voor u doen",
    services: [
      {
        icon: "\u2699\ufe0f",
        title: "Software op maat",
        desc: "Van idee tot werkende applicatie in weken, niet maanden. Web apps, koppelingen en automatiseringen die uw bedrijf sneller maken.",
        link: "Meer info \u2192",
      },
      {
        icon: "\ud83d\udcc8",
        title: "Marketing & groei",
        desc: "Meer leads, meer klanten, meer omzet. Google Ads, SEO en social media \u2014 meetbaar en transparant.",
        link: "Meer info \u2192",
      },
      {
        icon: "\ud83c\udf10",
        title: "Websites",
        desc: "Professionele websites die presteren. Snel, veilig, en gebouwd om te converteren. Opgeleverd in 3 weken.",
        link: "Meer info \u2192",
      },
      {
        icon: "\ud83d\udc65",
        title: "Social recruitment",
        desc: "Vind de juiste kandidaten via sociale kanalen. Zonder bureau-fees. Effectief en betaalbaar.",
        link: "Meer info \u2192",
      },
    ],
  },
  en: {
    label: "SERVICES",
    headline: "What we do for you",
    services: [
      {
        icon: "\u2699\ufe0f",
        title: "Custom software",
        desc: "From idea to working application in weeks, not months. Web apps, integrations and automations that accelerate your business.",
        link: "Learn more \u2192",
      },
      {
        icon: "\ud83d\udcc8",
        title: "Marketing & growth",
        desc: "More leads, more customers, more revenue. Google Ads, SEO and social media \u2014 measurable and transparent.",
        link: "Learn more \u2192",
      },
      {
        icon: "\ud83c\udf10",
        title: "Websites",
        desc: "Professional websites that perform. Fast, secure, and built to convert. Delivered in 3 weeks.",
        link: "Learn more \u2192",
      },
      {
        icon: "\ud83d\udc65",
        title: "Social recruitment",
        desc: "Find the right candidates through social channels. Without agency fees. Effective and affordable.",
        link: "Learn more \u2192",
      },
    ],
  },
}

export default function Diensten({ lang }: DienstenProps) {
  const t = copy[lang]

  return (
    <section
      id="diensten"
      className="section-pad"
      style={{ background: "var(--color-bg-white)" }}
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
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
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
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--color-primary)",
                  }}
                >
                  {s.link}
                </span>
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
