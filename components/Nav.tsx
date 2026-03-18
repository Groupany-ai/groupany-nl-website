"use client"

import { useState, useEffect } from "react"

interface NavProps {
  lang: "nl" | "en"
  setLang: (lang: "nl" | "en") => void
}

const links = {
  nl: [
    { label: "Diensten", href: "#diensten" },
    { label: "Resultaten", href: "#resultaten" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Over ons", href: "#over-ons" },
    { label: "Contact", href: "#contact" },
  ],
  en: [
    { label: "Services", href: "#diensten" },
    { label: "Results", href: "#resultaten" },
    { label: "Process", href: "#werkwijze" },
    { label: "About", href: "#over-ons" },
    { label: "Contact", href: "#contact" },
  ],
}

export default function Nav({ lang, setLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const cta = lang === "nl" ? "Neem contact op" : "Get in touch"

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(1.25rem, 4vw, 2rem)",
          transition: "background 300ms, box-shadow 300ms, backdrop-filter 300ms",
          background: scrolled ? "rgba(250,249,246,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <a
            href="#"
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            Groupany
          </a>

          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {links[lang].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              className="hide-mobile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: 3,
                background: "var(--color-bg-alt)",
                border: "1px solid var(--color-border)",
                borderRadius: 999,
              }}
            >
              {(["NL", "EN"] as const).map((l) => {
                const val = l.toLowerCase() as "nl" | "en"
                const active = lang === val
                return (
                  <button
                    key={l}
                    onClick={() => setLang(val)}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      color: active ? "var(--color-text)" : "var(--color-text-muted)",
                      background: active ? "var(--color-bg-white)" : "none",
                      border: "none",
                      boxShadow: active ? "var(--shadow-sm)" : "none",
                      transition: "all 200ms",
                    }}
                  >
                    {l}
                  </button>
                )
              })}
            </div>

            <a
              href="#contact"
              className="btn-primary hide-mobile"
              style={{ padding: "10px 20px", fontSize: 14 }}
            >
              {cta}
            </a>

            <button
              className="show-mobile-only"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 8,
                background: "none",
                border: "none",
              }}
            >
              <span style={{ width: 22, height: 2, background: "var(--color-text)", borderRadius: 2, transition: "transform 300ms", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ width: 22, height: 2, background: "var(--color-text)", borderRadius: 2, transition: "opacity 200ms", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ width: 22, height: 2, background: "var(--color-text)", borderRadius: 2, transition: "transform 300ms", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: 64,
            zIndex: 99,
            background: "rgba(250,249,246,0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {links[lang].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: 24, fontWeight: 600, color: "var(--color-text)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ marginTop: 16 }}
          >
            {cta}
          </a>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {(["NL", "EN"] as const).map((l) => {
              const val = l.toLowerCase() as "nl" | "en"
              return (
                <button
                  key={l}
                  onClick={() => { setLang(val); setMobileOpen(false) }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 700,
                    color: lang === val ? "#fff" : "var(--color-text-secondary)",
                    background: lang === val ? "var(--color-primary)" : "var(--color-bg-alt)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {l}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
