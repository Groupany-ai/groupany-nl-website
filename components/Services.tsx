interface ServicesProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "Onze diensten",
    headline: "Alles wat uw bedrijf nodig heeft om te groeien",
    sub: "Van strategie tot uitvoering. Wij combineren technologie, creativiteit en data om meetbare resultaten te leveren.",
    cta: "Meer informatie",
    services: [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 12v8M12 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
        title: "Software ontwikkeling",
        desc: "Maatwerk webapplicaties, API-integraties, AI-oplossingen en dashboards. Wij bouwen schaalbare systemen die meegroeien met uw business.",
        tags: ["Next.js", "Node.js", "AI/ML", "API integraties"],
        href: "#contact",
        accent: "#2563EB",
        bg: "rgba(37,99,235,0.04)",
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 15L8 10L12 14L16 8L19 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
        title: "Marketing",
        desc: "SEO, SEA, content marketing en e-mailcampagnes die daadwerkelijk converteren. Data-gedreven aanpak met transparante rapportages.",
        tags: ["SEO/SEA", "Content", "E-mail", "Analytics"],
        href: "#contact",
        accent: "#6366F1",
        bg: "rgba(99,102,241,0.04)",
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="3" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7 19h8M11 16v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Websites",
        desc: "Professionele bedrijfswebsites die snel laden, goed gevonden worden en bezoekers omzetten in klanten. Inclusief CMS en hosting.",
        tags: ["Webdesign", "CMS", "SEO-klaar", "Hosting"],
        href: "#contact",
        accent: "#10B981",
        bg: "rgba(16,185,129,0.04)",
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="14" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M2 19c0-3.314 2.686-6 6-6M20 19c0-3.314-2.686-6-6-6M11 13c3.314 0 6 2.686 6 6M11 13c-3.314 0-6 2.686-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
        title: "Social recruitment",
        desc: "Vacatures invullen via gerichte social media campagnes. Wij targeten de juiste kandidaten op LinkedIn, Meta en TikTok voor uw openstaande functies.",
        tags: ["LinkedIn", "Meta Ads", "TikTok", "Employer branding"],
        href: "#contact",
        accent: "#F59E0B",
        bg: "rgba(245,158,11,0.04)",
      },
    ],
  },
  en: {
    label: "Our services",
    headline: "Everything your business needs to grow",
    sub: "From strategy to execution. We combine technology, creativity, and data to deliver measurable results.",
    cta: "Learn more",
    services: [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 12v8M12 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
        title: "Software development",
        desc: "Custom web apps, API integrations, AI solutions and dashboards. We build scalable systems that grow with your business.",
        tags: ["Next.js", "Node.js", "AI/ML", "API integrations"],
        href: "#contact",
        accent: "#2563EB",
        bg: "rgba(37,99,235,0.04)",
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 15L8 10L12 14L16 8L19 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
        title: "Marketing",
        desc: "SEO, SEA, content marketing and email campaigns that actually convert. Data-driven approach with transparent reporting.",
        tags: ["SEO/SEA", "Content", "Email", "Analytics"],
        href: "#contact",
        accent: "#6366F1",
        bg: "rgba(99,102,241,0.04)",
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="3" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7 19h8M11 16v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Websites",
        desc: "Professional business websites that load fast, rank well and convert visitors into customers. Includes CMS and hosting.",
        tags: ["Webdesign", "CMS", "SEO-ready", "Hosting"],
        href: "#contact",
        accent: "#10B981",
        bg: "rgba(16,185,129,0.04)",
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="14" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M2 19c0-3.314 2.686-6 6-6M20 19c0-3.314-2.686-6-6-6M11 13c3.314 0 6 2.686 6 6M11 13c-3.314 0-6 2.686-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
        title: "Social recruitment",
        desc: "Fill vacancies through targeted social media campaigns. We target the right candidates on LinkedIn, Meta and TikTok for your open positions.",
        tags: ["LinkedIn", "Meta Ads", "TikTok", "Employer branding"],
        href: "#contact",
        accent: "#F59E0B",
        bg: "rgba(245,158,11,0.04)",
      },
    ],
  },
}

export default function Services({ lang }: ServicesProps) {
  const t = copy[lang]

  return (
    <section id="diensten" className="section-pad" style={{ background: "var(--color-bg-white)" }}>
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
              maxWidth: 480,
              fontWeight: 400,
            }}
          >
            {t.sub}
          </p>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {t.services.map((service, idx) => (
            <a
              key={idx}
              href={service.href}
              className="glow-card-blue"
              style={{
                display: "block",
                padding: "32px",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                background: service.bg,
                textDecoration: "none",
                color: "inherit",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-bg-white)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: service.accent,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  marginBottom: 20,
                  fontWeight: 400,
                }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      background: "var(--color-bg-white)",
                      border: "1px solid var(--color-border)",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--color-text-secondary)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                style={{
                  position: "absolute",
                  top: 32,
                  right: 32,
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-bg-white)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text-muted)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 52,
            padding: "40px",
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-mid) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
          className="cta-card"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              {lang === "nl"
                ? "Benieuwd wat wij voor u kunnen betekenen?"
                : "Wondering what we can do for you?"}
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontWeight: 400, lineHeight: 1.5 }}>
              {lang === "nl"
                ? "Plan een vrijblijvend gesprek. Geen salespitch — gewoon eerlijk advies."
                : "Book a no-obligation call. No sales pitch — just honest advice."}
            </p>
          </div>
          <a
            href="#contact"
            style={{
              flexShrink: 0,
              padding: "13px 28px",
              borderRadius: "var(--radius-full)",
              background: "var(--color-primary)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              boxShadow: "var(--shadow-primary-lg)",
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
            {lang === "nl" ? "Plan een gesprek" : "Book a call"}
          </a>
        </div>
      </div>
    </section>
  )
}
