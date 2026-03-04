interface HeroProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    badge: "Geregistreerd in Nederland",
    headline: ["Laat jouw bedrijf", "groeien met slimme", "digitale oplossingen"],
    sub: "Wij helpen ambitieuze bedrijven met software op maat, professionele websites, resultaatgerichte marketing en social recruitment. Betrouwbaar, snel en transparant.",
    cta1: "Plan een gratis kennismaking",
    cta2: "Bekijk onze cases",
    statsLabel: "Waarom bedrijven ons kiezen",
    stats: [
      { value: "100+", label: "tevreden klanten" },
      { value: "24/7", label: "ondersteuning" },
      { value: "<4u", label: "reactietijd" },
      { value: "100%", label: "NL eigendom" },
    ],
    trustLine: "KVK geregistreerd · Gevestigd in Nederland · ISO-27001 compliant",
    clientsLabel: "Vertrouwd door groeiende bedrijven",
  },
  en: {
    badge: "Registered in the Netherlands",
    headline: ["Scale your business", "with smart digital", "solutions"],
    sub: "We help ambitious companies with custom software, professional websites, results-driven marketing and social recruitment. Reliable, fast and transparent.",
    cta1: "Book a free consultation",
    cta2: "View our cases",
    statsLabel: "Why companies choose us",
    stats: [
      { value: "100+", label: "happy clients" },
      { value: "24/7", label: "support" },
      { value: "<4h", label: "response time" },
      { value: "100%", label: "Dutch-owned" },
    ],
    trustLine: "KVK registered · Based in the Netherlands · ISO-27001 compliant",
    clientsLabel: "Trusted by growing companies",
  },
}

// Minimal client logos as SVG text marks (placeholder — replace with real logos)
const clients = [
  "GratisVerhuizen",
  "Solvari",
  "Werkspot",
  "Thuisbaas",
  "Handyman",
  "HomeDone",
]

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang]

  return (
    <section
      id="hero"
      className="dot-grid-light section-pad"
      style={{
        paddingTop: 160,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="grid-hero">
          {/* Left — copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Trust badge */}
            <div>
              <span className="badge-blue">
                <span className="dot" />
                {t.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline"
              style={{
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
                maxWidth: 540,
              }}
            >
              {t.headline[0]}{" "}
              <span className="gradient-text-blue">{t.headline[1]}</span>{" "}
              {t.headline[2]}
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                maxWidth: 460,
                fontWeight: 400,
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas"
              style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}
            >
              <a
                href="#contact"
                className="shimmer-btn-blue"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: "var(--radius-full)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  boxShadow: "var(--shadow-primary-lg)",
                  transition: "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(-2px)"
                  el.style.boxShadow = "0 12px 40px rgba(37,99,235,0.5)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "var(--shadow-primary-lg)"
                }}
              >
                {t.cta1}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#cases"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: "var(--radius-full)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  textDecoration: "none",
                  background: "var(--color-bg-white)",
                  border: "1.5px solid var(--color-border)",
                  letterSpacing: "-0.01em",
                  transition: "border-color var(--duration-base), box-shadow var(--duration-base), transform var(--duration-base)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "var(--color-primary-border)"
                  el.style.boxShadow = "0 4px 16px rgba(37,99,235,0.08)"
                  el.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "var(--color-border)"
                  el.style.boxShadow = "none"
                  el.style.transform = "translateY(0)"
                }}
              >
                {t.cta2}
              </a>
            </div>

            {/* Trust line */}
            <p
              style={{
                fontSize: 12,
                color: "var(--color-text-muted)",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {t.trustLine}
            </p>
          </div>

          {/* Right — visual */}
          <div
            className="hero-visual-wrap"
            style={{ position: "relative" }}
          >
            {/* Stats card */}
            <div
              style={{
                background: "var(--color-bg-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-2xl)",
                padding: "36px 32px",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: 28,
                }}
              >
                {t.statsLabel}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "28px 32px",
                }}
              >
                {t.stats.map((s) => (
                  <div key={s.value} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span
                      style={{
                        fontSize: 40,
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "var(--color-primary)",
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--color-text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="divider-gradient-blue" style={{ marginTop: 32, marginBottom: 20 }} />

              {/* Mini trust signals */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M7.5 1.5L9.25 5.25L13.5 5.75L10.5 8.5L11.25 12.75L7.5 10.75L3.75 12.75L4.5 8.5L1.5 5.75L5.75 5.25L7.5 1.5Z" fill="var(--color-warning)" stroke="var(--color-warning)" strokeWidth="1" strokeLinejoin="round" />
                      </svg>
                    ),
                    text: "4.9 / 5 gemiddelde klantbeoordeling",
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M7.5 2L9 5.5H13L10 7.5L11.5 11L7.5 9L3.5 11L5 7.5L2 5.5H6L7.5 2Z" fill="none" stroke="var(--color-success)" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M5 7.5L7 9.5L11 5.5" stroke="var(--color-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                    text: "KVK: 93.847.291 · BTW: NL866041827B01",
                  },
                ].map(({ icon, text }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--color-bg-subtle)",
                        border: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--color-text-secondary)",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent badge */}
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                background: "var(--color-primary)",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "var(--radius-lg)",
                fontSize: 13,
                fontWeight: 700,
                boxShadow: "var(--shadow-primary-lg)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              🇳🇱 Nederlands bedrijf
            </div>
          </div>
        </div>

        {/* Client marquee */}
        <div style={{ marginTop: 72 }}>
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-text-placeholder)",
              marginBottom: 24,
            }}
          >
            {t.clientsLabel}
          </p>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div className="marquee-track">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    marginRight: 56,
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--color-text-dim)",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
