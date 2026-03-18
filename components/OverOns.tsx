"use client"

import ScrollReveal from "./ScrollReveal"

interface OverOnsProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "OVER ONS",
    headline: "Technologie met een menselijk gezicht",
    story:
      "Bart richtte Groupany op vanuit een eenvoudige overtuiging: technologie moet bedrijven sterker maken, niet ingewikkelder. Door AI-specialisten te combineren met menselijke strategie, levert Groupany resultaat dat traditionele bureaus niet kunnen evenaren \u2014 sneller, transparanter en betaalbaarder.",
    values: [
      {
        title: "Transparantie",
        desc: "Geen verborgen kosten, geen vage beloftes. U weet altijd waar u aan toe bent.",
      },
      {
        title: "Resultaatgericht",
        desc: "Wij meten succes in uw groei, niet in gewerkte uren.",
      },
      {
        title: "Innovatief",
        desc: "Wij blijven vooroplopen met de nieuwste technologie\u00ebn om u een voorsprong te geven.",
      },
    ],
    teamTitle: "Ons team",
    team: [
      { name: "Bart", role: "Oprichter", isHuman: true },
      { name: "Max", role: "AI Chief of Staff", isHuman: false },
      { name: "Sam", role: "AI CTO", isHuman: false },
      { name: "Jessica", role: "AI CCO", isHuman: false },
    ],
    address: "Keizersgracht 520, 1017 EK Amsterdam",
  },
  en: {
    label: "ABOUT US",
    headline: "Technology with a human face",
    story:
      "Bart founded Groupany from a simple conviction: technology should make businesses stronger, not more complicated. By combining AI specialists with human strategy, Groupany delivers results that traditional agencies cannot match \u2014 faster, more transparent and more affordable.",
    values: [
      {
        title: "Transparency",
        desc: "No hidden costs, no vague promises. You always know where you stand.",
      },
      {
        title: "Results-driven",
        desc: "We measure success by your growth, not by hours worked.",
      },
      {
        title: "Innovative",
        desc: "We stay ahead with the latest technologies to give you a competitive edge.",
      },
    ],
    teamTitle: "Our team",
    team: [
      { name: "Bart", role: "Founder", isHuman: true },
      { name: "Max", role: "AI Chief of Staff", isHuman: false },
      { name: "Sam", role: "AI CTO", isHuman: false },
      { name: "Jessica", role: "AI CCO", isHuman: false },
    ],
    address: "Keizersgracht 520, 1017 EK Amsterdam",
  },
}

export default function OverOns({ lang }: OverOnsProps) {
  const t = copy[lang]

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
              className="serif"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
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
          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 18px)",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              maxWidth: 640,
              margin: "0 auto 56px",
              textAlign: "center",
            }}
          >
            {t.story}
          </p>
        </ScrollReveal>

        {/* Values */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 64,
          }}
        >
          {t.values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  background: "var(--color-bg-white)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                }}
              >
                <h4
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "var(--color-text)",
                  }}
                >
                  {v.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {v.desc}
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
            {/* Team */}
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
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
                        background: m.isHuman ? "var(--color-primary)" : "var(--color-bg-alt)",
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
                            background: "rgba(37,99,235,0.08)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "var(--color-primary)",
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

            {/* Address */}
            <div
              style={{
                background: "var(--color-bg-white)",
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
              <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>
                Groupany B.V.
              </div>
              <div style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                {t.address}
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
