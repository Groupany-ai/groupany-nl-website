"use client"

interface FooterProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    columns: [
      {
        title: "Diensten",
        links: ["Software op maat", "Marketing & groei", "Websites", "Social recruitment"],
      },
      {
        title: "Bedrijf",
        links: ["Over ons", "Werkwijze", "Resultaten", "Contact"],
      },
      {
        title: "Informatie",
        links: ["Privacybeleid", "Algemene voorwaarden", "Cookie-instellingen"],
      },
    ],
    contact: {
      title: "Contact",
      address: "Keizersgracht 520\n1017 EK Amsterdam",
      email: "info@groupany.nl",
    },
  },
  en: {
    columns: [
      {
        title: "Services",
        links: ["Custom software", "Marketing & growth", "Websites", "Social recruitment"],
      },
      {
        title: "Company",
        links: ["About us", "Process", "Results", "Contact"],
      },
      {
        title: "Information",
        links: ["Privacy policy", "Terms & conditions", "Cookie settings"],
      },
    ],
    contact: {
      title: "Contact",
      address: "Keizersgracht 520\n1017 EK Amsterdam",
      email: "info@groupany.nl",
    },
  },
}

export default function Footer({ lang }: FooterProps) {
  const t = copy[lang]

  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "64px clamp(1.25rem, 4vw, 2rem) 32px",
      }}
    >
      <div className="container">
        {/* Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
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
                letterSpacing: "-0.02em",
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
              {lang === "nl"
                ? "Uw digitale team. Software, marketing en websites \u2014 gebouwd door AI-specialisten."
                : "Your digital team. Software, marketing and websites \u2014 built by AI specialists."}
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
                    key={link}
                    href="#"
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                      transition: "color 200ms",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >
                    {link}
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
