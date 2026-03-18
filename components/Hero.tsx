"use client"

import ScrollReveal from "./ScrollReveal"
import { copy, type Lang } from "@/lib/i18n"

interface HeroProps {
  lang: Lang
}

export default function Hero({ lang }: HeroProps) {
  const t = copy.hero[lang]

  return (
    <section
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
              fontSize: "clamp(36px, 5.5vw, 64px)",
              lineHeight: 1.08,
              color: "var(--color-text)",
              maxWidth: 820,
              margin: "0 auto 24px",
              whiteSpace: "pre-line",
              letterSpacing: "-0.01em",
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
              maxWidth: 560,
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
