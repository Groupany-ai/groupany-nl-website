"use client"

import ScrollReveal from "./ScrollReveal"

interface HeroProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    headline: "Uw digitale team.\nAltijd aan het werk.",
    sub: "Software, marketing en websites \u2014 gebouwd door AI-specialisten die dag en nacht voor u werken. Sneller. Slimmer. Betaalbaarder.",
    cta1: "Plan een kennismaking",
    cta2: "Bekijk ons werk",
    trust: "KVK 93.847.291 \u00b7 Keizersgracht 520, Amsterdam \u00b7 Nederlands bedrijf",
  },
  en: {
    headline: "Your digital team.\nAlways at work.",
    sub: "Software, marketing and websites \u2014 built by AI specialists who work for you around the clock. Faster. Smarter. More affordable.",
    cta1: "Schedule an introduction",
    cta2: "See our work",
    trust: "KVK 93.847.291 \u00b7 Keizersgracht 520, Amsterdam \u00b7 Dutch company",
  },
}

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang]

  return (
    <section
      className="dot-pattern"
      style={{
        background: "var(--color-bg)",
        paddingTop: "clamp(7rem, 14vw, 10rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        paddingLeft: "clamp(1.25rem, 4vw, 2rem)",
        paddingRight: "clamp(1.25rem, 4vw, 2rem)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <ScrollReveal>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1.08,
              color: "var(--color-text)",
              maxWidth: 800,
              margin: "0 auto 24px",
              whiteSpace: "pre-line",
            }}
          >
            {t.headline}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.65,
              color: "var(--color-text-secondary)",
              maxWidth: 580,
              margin: "0 auto 40px",
            }}
          >
            {t.sub}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <a href="#contact" className="btn-primary">
              {t.cta1}
            </a>
            <a href="#resultaten" className="btn-secondary">
              {t.cta2}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            style={{
              fontSize: 13,
              color: "var(--color-text-muted)",
              letterSpacing: "0.01em",
            }}
          >
            {t.trust}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
