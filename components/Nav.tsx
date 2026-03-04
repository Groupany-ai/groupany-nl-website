"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface NavProps {
  lang: "nl" | "en"
  onLangChange: (lang: "nl" | "en") => void
}

const copy = {
  nl: {
    diensten: "Diensten",
    overOns: "Over ons",
    blog: "Blog",
    cases: "Cases",
    contact: "Contact",
    ctaText: "Gratis kennismaken",
    ctaShort: "Contact",
  },
  en: {
    diensten: "Services",
    overOns: "About us",
    blog: "Blog",
    cases: "Cases",
    contact: "Contact",
    ctaText: "Free consultation",
    ctaShort: "Contact",
  },
}

export default function Nav({ lang, onLangChange }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) var(--ease-out), border-color var(--duration-slow)",
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--color-border-subtle)" : "transparent"}`,
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 28px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                background: "var(--color-primary)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="5" width="7" height="7" rx="2" fill="white" opacity="0.9" />
                <rect x="11" y="2" width="5" height="5" rx="1.5" fill="white" opacity="0.65" />
                <rect x="11" y="9" width="5" height="7" rx="1.5" fill="white" opacity="0.65" />
              </svg>
            </span>
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              Groupany
            </span>
          </Link>

          {/* Nav links - desktop */}
          <nav className="nav-links" style={{ alignItems: "center" }}>
            {[
              { href: "#diensten", label: t.diensten },
              { href: "#over-ons", label: t.overOns },
              { href: "#blog", label: t.blog },
              { href: "#cases", label: t.cases },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  transition: "color var(--duration-base)",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            {/* Language toggle */}
            <div className="lang-toggle">
              <button
                className={`lang-toggle-btn${lang === "nl" ? " active" : ""}`}
                onClick={() => onLangChange("nl")}
              >
                NL
              </button>
              <button
                className={`lang-toggle-btn${lang === "en" ? " active" : ""}`}
                onClick={() => onLangChange("en")}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              style={{
                padding: "9px 20px",
                borderRadius: "var(--radius-full)",
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                background: "var(--color-primary)",
                boxShadow: "var(--shadow-primary)",
                transition: "background var(--duration-base), box-shadow var(--duration-base), transform var(--duration-base)",
                letterSpacing: "-0.01em",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "var(--color-primary-dark)"
                el.style.transform = "translateY(-1px)"
                el.style.boxShadow = "var(--shadow-primary-lg)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "var(--color-primary)"
                el.style.transform = "translateY(0)"
                el.style.boxShadow = "var(--shadow-primary)"
              }}
            >
              <span className="nav-cta-text">{t.ctaText}</span>
              <span className="nav-cta-short" style={{ display: "none" }}>{t.ctaShort}</span>
            </a>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "none",
                width: 36,
                height: 36,
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-white)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexDirection: "column",
                gap: 5,
                padding: "9px 8px",
              }}
              aria-label="Menu"
            >
              <span style={{ width: 18, height: 1.5, background: "var(--color-text)", borderRadius: 2, display: "block", transition: `all var(--duration-base)`, transform: mobileOpen ? "rotate(45deg) translate(4px, 5px)" : "none" }} />
              <span style={{ width: 18, height: 1.5, background: "var(--color-text)", borderRadius: 2, display: "block", opacity: mobileOpen ? 0 : 1, transition: `opacity var(--duration-base)` }} />
              <span style={{ width: 18, height: 1.5, background: "var(--color-text)", borderRadius: 2, display: "block", transition: `all var(--duration-base)`, transform: mobileOpen ? "rotate(-45deg) translate(4px, -5px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderTop: "1px solid var(--color-border)",
              padding: "16px 28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {[
              { href: "#diensten", label: t.diensten },
              { href: "#over-ons", label: t.overOns },
              { href: "#blog", label: t.blog },
              { href: "#cases", label: t.cases },
              { href: "#contact", label: t.contact },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 4px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-border-subtle)",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="lang-toggle">
                <button className={`lang-toggle-btn${lang === "nl" ? " active" : ""}`} onClick={() => onLangChange("nl")}>NL</button>
                <button className={`lang-toggle-btn${lang === "en" ? " active" : ""}`} onClick={() => onLangChange("en")}>EN</button>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "var(--radius-full)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                  background: "var(--color-primary)",
                }}
              >
                {t.ctaShort}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
