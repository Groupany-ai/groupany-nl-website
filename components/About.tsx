interface AboutProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "Over ons",
    headline: "AI-technologie met strategisch advies",
    intro:
      "Groupany combineert de kracht van kunstmatige intelligentie met jarenlange ervaring in digitale strategie. Wij geloven dat technologie pas waardevol is wanneer het direct bijdraagt aan uw bedrijfsresultaat.",
    differentiators: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12 7H17L13 10L14.5 15L10 12L5.5 15L7 10L3 7H8L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        ),
        title: "AI-first aanpak",
        desc: "Wij zetten AI in als versneller, niet als vervanging. Hierdoor werken wij sneller en slimmer dan traditionele bureaus.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
        title: "24/7 beschikbaar",
        desc: "Onze AI-agents werken doorlopend. Dat betekent snellere oplevering en directe ondersteuning, ook buiten kantooruren.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Data-gedreven",
        desc: "Elke beslissing is onderbouwd met data. U ontvangt heldere rapportages zodat u altijd weet wat uw investering oplevert.",
      },
    ],
    values: [
      { label: "Transparantie", desc: "Geen verborgen kosten, geen vage beloftes. U weet altijd waar u aan toe bent." },
      { label: "Resultaat", desc: "Wij meten succes in uw groei, niet in gewerkte uren." },
      { label: "Innovatie", desc: "Wij blijven vooroplopen met de nieuwste technologieen om u een voorsprong te geven." },
    ],
    team: {
      headline: "Ons team",
      members: [
        { name: "Bart", role: "Oprichter & Strateeg", desc: "Combineert ondernemerschap met technische expertise." },
        { name: "Max", role: "AI Chief of Staff", desc: "Coordineert projecten en bewaakt kwaliteit." },
        { name: "Sam", role: "AI CTO", desc: "Architectuur, code en technische innovatie." },
        { name: "Jessica", role: "AI CCO", desc: "Marketing, content en klantcommunicatie." },
      ],
    },
  },
  en: {
    label: "About us",
    headline: "AI technology meets strategic consulting",
    intro:
      "Groupany combines the power of artificial intelligence with years of experience in digital strategy. We believe technology is only valuable when it directly contributes to your business results.",
    differentiators: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12 7H17L13 10L14.5 15L10 12L5.5 15L7 10L3 7H8L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        ),
        title: "AI-first approach",
        desc: "We use AI as an accelerator, not a replacement. This allows us to work faster and smarter than traditional agencies.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
        title: "24/7 available",
        desc: "Our AI agents work continuously. That means faster delivery and direct support, even outside office hours.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Data-driven",
        desc: "Every decision is backed by data. You receive clear reports so you always know what your investment delivers.",
      },
    ],
    values: [
      { label: "Transparency", desc: "No hidden costs, no vague promises. You always know where you stand." },
      { label: "Results", desc: "We measure success by your growth, not by hours worked." },
      { label: "Innovation", desc: "We stay ahead with the latest technologies to give you a competitive edge." },
    ],
    team: {
      headline: "Our team",
      members: [
        { name: "Bart", role: "Founder & Strategist", desc: "Combines entrepreneurship with technical expertise." },
        { name: "Max", role: "AI Chief of Staff", desc: "Coordinates projects and ensures quality." },
        { name: "Sam", role: "AI CTO", desc: "Architecture, code and technical innovation." },
        { name: "Jessica", role: "AI CCO", desc: "Marketing, content and client communication." },
      ],
    },
  },
}

export default function About({ lang }: AboutProps) {
  const t = copy[lang]

  return (
    <section id="over-ons" className="section-pad" style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16, marginBottom: 64 }}>
          <span className="section-label">{t.label}</span>
          <h2
            className="section-headline"
            style={{
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 600,
              color: "var(--color-text)",
            }}
          >
            {t.headline}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              maxWidth: 560,
              fontWeight: 400,
            }}
          >
            {t.intro}
          </p>
        </div>

        {/* Differentiators */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 64,
          }}
          className="grid-differentiators"
        >
          {t.differentiators.map((d, i) => (
            <div
              key={i}
              style={{
                padding: 32,
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-white)",
                transition: "box-shadow var(--duration-slow) var(--ease-out), transform var(--duration-base) var(--ease-out)",
              }}
              className="glow-card-blue"
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-primary-xlight)",
                  border: "1px solid var(--color-primary-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  marginBottom: 20,
                }}
              >
                {d.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  marginBottom: 8,
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  fontWeight: 400,
                }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
            marginBottom: 64,
          }}
          className="grid-values"
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {t.values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px 28px",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-white)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--color-primary)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text)" }}>
                      {v.label}
                    </h4>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-secondary)", paddingLeft: 40 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginBottom: 24,
              }}
            >
              {t.team.headline}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {t.team.members.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-white)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "var(--radius-md)",
                      background: i === 0 ? "var(--color-primary)" : "var(--color-bg-subtle)",
                      border: i === 0 ? "none" : "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: i === 0 ? "#fff" : "var(--color-text-muted)",
                      fontSize: 16,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {m.name[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)" }}>
                      {m.name}
                      {i > 0 && (
                        <span
                          style={{
                            marginLeft: 8,
                            padding: "2px 8px",
                            borderRadius: "var(--radius-full)",
                            background: "var(--color-primary-xlight)",
                            border: "1px solid var(--color-primary-border)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "var(--color-primary)",
                          }}
                        >
                          AI
                        </span>
                      )}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
                      {m.role} — {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
