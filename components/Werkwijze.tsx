"use client"

import ScrollReveal from "./ScrollReveal"

interface WerkwijzeProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "WERKWIJZE",
    headline: "Hoe het werkt",
    steps: [
      {
        num: "01",
        title: "Kennismaking",
        desc: "We bespreken uw uitdagingen en doelen. Gratis en vrijblijvend. Geen verkooppraatje \u2014 gewoon luisteren naar wat u nodig heeft.",
      },
      {
        num: "02",
        title: "Uw team aan het werk",
        desc: "Binnen een week staan uw AI-specialisten klaar. Ze werken, u beoordeelt. Elke week ontvangt u een voortgangsupdate.",
      },
      {
        num: "03",
        title: "Resultaat & groei",
        desc: "U ziet concreet resultaat. Wij optimaliseren continu. Na oplevering laten we u niet vallen \u2014 we groeien met u mee.",
      },
    ],
  },
  en: {
    label: "PROCESS",
    headline: "How it works",
    steps: [
      {
        num: "01",
        title: "Introduction",
        desc: "We discuss your challenges and goals. Free and without obligation. No sales pitch \u2014 just listening to what you need.",
      },
      {
        num: "02",
        title: "Your team at work",
        desc: "Within a week your AI specialists are ready. They work, you review. Every week you receive a progress update.",
      },
      {
        num: "03",
        title: "Results & growth",
        desc: "You see concrete results. We optimise continuously. After delivery we don\u2019t leave you \u2014 we grow with you.",
      },
    ],
  },
}

export default function Werkwijze({ lang }: WerkwijzeProps) {
  const t = copy[lang]

  return (
    <section
      id="werkwijze"
      className="section-pad"
      style={{ background: "var(--color-bg-white)" }}
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

        {/* Timeline */}
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
                {/* Timeline line + dot */}
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
                      background: i === 0 ? "var(--color-primary)" : "var(--color-bg)",
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
