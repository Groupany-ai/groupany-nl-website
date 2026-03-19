"use client"

import { useState } from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import Diensten from "./Diensten"
import Waarom from "./Waarom"
import Resultaten from "./Resultaten"
import Werkwijze from "./Werkwijze"
import OverOns from "./OverOns"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollReveal from "./ScrollReveal"
import type { Lang } from "@/lib/i18n"

export default function PageClient() {
  const [lang, setLang] = useState<Lang>("nl")

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Diensten lang={lang} />
        <Waarom lang={lang} />
        <Resultaten lang={lang} />
        <Werkwijze lang={lang} />
        <OverOns lang={lang} />

        {/* CTA Section */}
        <section
          className="section-pad"
          style={{
            background: "var(--color-bg-alt)",
            textAlign: "center",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="container">
            <ScrollReveal>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  marginBottom: 12,
                }}
              >
                {lang === "nl" ? "Klaar om te beginnen?" : "Ready to get started?"}
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--color-text-secondary)",
                  maxWidth: 480,
                  margin: "0 auto 32px",
                  lineHeight: 1.6,
                }}
              >
                {lang === "nl"
                  ? "Plan een vrijblijvend gesprek en ontdek wat wij voor u kunnen betekenen."
                  : "Schedule a free call and discover what we can do for your business."
                }
              </p>
              <a href="#contact" className="btn-primary">
                {lang === "nl" ? "Neem contact op" : "Get in touch"}
              </a>
            </ScrollReveal>
          </div>
        </section>

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
