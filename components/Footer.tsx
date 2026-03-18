"use client"

import { copy, type Lang } from "@/lib/i18n"

interface FooterProps {
  lang: Lang
}

export default function Footer({ lang }: FooterProps) {
  const t = copy.footer[lang]

  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "64px clamp(1.25rem, 4vw, 2rem) 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              Groupany
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                maxWidth: 280,
              }}
            >
              {t.tagline}
            </p>
          </div>

          {/* Link columns */}
          {t.columns.map((col, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                      transition: "color 200ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-text)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-secondary)")
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
            &copy; 2026 Groupany B.V. &middot; KVK 93.847.291 &middot; BTW NL866041827B01
          </div>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
            Keizersgracht 520, 1017 EK Amsterdam
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer [style*="grid-template-columns: 2fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer [style*="grid-template-columns: 2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
