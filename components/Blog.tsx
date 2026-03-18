interface BlogProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    label: "Insights",
    headline: "Kennis en inzichten",
    sub: "Wij delen graag onze expertise. Lees onze artikelen over AI, digitale strategie en groei.",
    more: "Meer artikelen",
    articles: [
      {
        title: "Hoe AI uw bedrijf kan versterken",
        excerpt:
          "Kunstmatige intelligentie is niet langer voorbehouden aan grote corporaties. Ontdek hoe ook het MKB profiteert van slimme automatisering.",
        date: "Binnenkort",
        category: "AI & Strategie",
        accent: "#2563EB",
      },
      {
        title: "De toekomst van digitale bureaus",
        excerpt:
          "Het traditionele bureaumodel verandert fundamenteel. Lees hoe AI-agents en automatisering de manier van werken transformeren.",
        date: "Binnenkort",
        category: "Toekomst",
        accent: "#6366F1",
      },
      {
        title: "5 redenen voor software op maat",
        excerpt:
          "Standaardsoftware past zelden perfect. Wij leggen uit waarom maatwerk vaak de betere investering is voor groeiende bedrijven.",
        date: "Binnenkort",
        category: "Software",
        accent: "#10B981",
      },
    ],
  },
  en: {
    label: "Insights",
    headline: "Knowledge and insights",
    sub: "We like to share our expertise. Read our articles about AI, digital strategy and growth.",
    more: "More articles",
    articles: [
      {
        title: "How AI can strengthen your business",
        excerpt:
          "Artificial intelligence is no longer reserved for large corporations. Discover how SMEs also benefit from smart automation.",
        date: "Coming soon",
        category: "AI & Strategy",
        accent: "#2563EB",
      },
      {
        title: "The future of digital agencies",
        excerpt:
          "The traditional agency model is fundamentally changing. Read how AI agents and automation are transforming the way we work.",
        date: "Coming soon",
        category: "Future",
        accent: "#6366F1",
      },
      {
        title: "5 reasons for custom software",
        excerpt:
          "Off-the-shelf software rarely fits perfectly. We explain why custom development is often the better investment for growing companies.",
        date: "Coming soon",
        category: "Software",
        accent: "#10B981",
      },
    ],
  },
}

export default function Blog({ lang }: BlogProps) {
  const t = copy[lang]

  return (
    <section id="blog" className="section-pad" style={{ background: "var(--color-bg)" }}>
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

        {/* Article cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="grid-blog"
        >
          {t.articles.map((article, i) => (
            <article
              key={i}
              className="glow-card-blue"
              style={{
                padding: 32,
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-white)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                cursor: "pointer",
              }}
            >
              {/* Category + date */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    background: `${article.accent}0A`,
                    border: `1px solid ${article.accent}25`,
                    fontSize: 11,
                    fontWeight: 700,
                    color: article.accent,
                  }}
                >
                  {article.category}
                </span>
                <span style={{ fontSize: 12, color: "var(--color-text-muted)", fontWeight: 500 }}>
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  lineHeight: 1.3,
                }}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  fontWeight: 400,
                  flex: 1,
                }}
              >
                {article.excerpt}
              </p>

              {/* Read more */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  marginTop: 4,
                }}
              >
                {lang === "nl" ? "Lees meer" : "Read more"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
