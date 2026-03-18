interface CasesProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "Cases",
    headline: "Resultaten die spreken",
    sub: "Wij werken samen met ambitieuze bedrijven aan concrete groei. Binnenkort delen wij hier onze eerste casestudies.",
    comingSoon: "Binnenkort beschikbaar",
    comingSoonDesc: "Wij werken momenteel aan meerdere projecten. Wilt u de eerste zijn met een gepubliceerde case study?",
    cta: "Word onze eerste case",
    cases: [
      {
        client: "Propty",
        challenge: "Vastgoedplatform had behoefte aan geautomatiseerde leadgeneratie en een modern CRM-systeem.",
        solution: "Maatwerk webapplicatie met AI-gestuurde leadscoring en geautomatiseerde opvolging.",
        results: [
          { value: "3x", label: "meer leads per maand" },
          { value: "40%", label: "hogere conversie" },
        ],
        tags: ["Software", "AI", "CRM"],
        accent: "#2563EB",
      },
    ],
  },
  en: {
    label: "Cases",
    headline: "Results that speak",
    sub: "We partner with ambitious companies to drive concrete growth. Soon we will share our first case studies here.",
    comingSoon: "Coming soon",
    comingSoonDesc: "We are currently working on multiple projects. Want to be the first with a published case study?",
    cta: "Become our first case",
    cases: [
      {
        client: "Propty",
        challenge: "Real estate platform needed automated lead generation and a modern CRM system.",
        solution: "Custom web application with AI-driven lead scoring and automated follow-up.",
        results: [
          { value: "3x", label: "more leads per month" },
          { value: "40%", label: "higher conversion" },
        ],
        tags: ["Software", "AI", "CRM"],
        accent: "#2563EB",
      },
    ],
  },
}

export default function Cases({ lang }: CasesProps) {
  const t = copy[lang]

  return (
    <section id="cases" className="section-pad" style={{ background: "var(--color-bg-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16, marginBottom: 56 }}>
          <span className="section-label">{t.label}</span>
          <h2
            className="section-headline"
            style={{
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 500,
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
              maxWidth: 480,
              fontWeight: 400,
            }}
          >
            {t.sub}
          </p>
        </div>

        {/* Case card */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }} className="grid-cases">
          {t.cases.map((c, i) => (
            <div
              key={i}
              className="case-card"
              style={{
                padding: 36,
                background: "var(--color-bg-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-md)",
                    background: c.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {c.client[0]}
                </div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text)" }}>{c.client}</p>
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                          background: "var(--color-bg-white)",
                          border: "1px solid var(--color-border)",
                          fontSize: 10,
                          fontWeight: 700,
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                  {lang === "nl" ? "Uitdaging" : "Challenge"}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-secondary)" }}>{c.challenge}</p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                  {lang === "nl" ? "Oplossing" : "Solution"}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-secondary)" }}>{c.solution}</p>
              </div>

              <div className="divider-gradient-blue" style={{ marginBottom: 24 }} />

              <div style={{ display: "flex", gap: 32 }}>
                {c.results.map((r, ri) => (
                  <div key={ri}>
                    <span style={{ fontSize: 32, fontWeight: 800, color: c.accent, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {r.value}
                    </span>
                    <p style={{ fontSize: 12, color: "var(--color-text-secondary)", fontWeight: 500, marginTop: 4 }}>
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div
            style={{
              padding: 36,
              borderRadius: "var(--radius-xl)",
              border: "2px dashed var(--color-border)",
              background: "var(--color-bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "var(--radius-lg)",
                background: "var(--color-primary-xlight)",
                border: "1px solid var(--color-primary-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-primary)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text)" }}>{t.comingSoon}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-secondary)", maxWidth: 280 }}>
              {t.comingSoonDesc}
            </p>
            <a
              href="#contact"
              style={{
                marginTop: 8,
                padding: "10px 24px",
                borderRadius: "var(--radius-full)",
                background: "var(--color-primary)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "var(--shadow-primary)",
                transition: "background var(--duration-base), transform var(--duration-base)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "var(--color-primary-dark)"
                el.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "var(--color-primary)"
                el.style.transform = "translateY(0)"
              }}
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
