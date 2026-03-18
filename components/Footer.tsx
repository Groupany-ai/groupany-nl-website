import Link from "next/link"

interface FooterProps {
  lang: "nl" | "en"
}

const copy = {
  nl: {
    diensten: {
      title: "Diensten",
      links: [
        { label: "Software ontwikkeling", href: "#diensten" },
        { label: "Marketing", href: "#diensten" },
        { label: "Websites", href: "#diensten" },
        { label: "Social recruitment", href: "#diensten" },
      ],
    },
    bedrijf: {
      title: "Bedrijf",
      links: [
        { label: "Over ons", href: "#over-ons" },
        { label: "Cases", href: "#cases" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Privacybeleid", href: "/privacy" },
        { label: "Algemene voorwaarden", href: "/voorwaarden" },
      ],
    },
    contact: {
      title: "Contact",
      address: ["Keizersgracht 520", "1017 EK Amsterdam"],
      email: "info@groupany.nl",
      phone: "+31 (0)20 XXX XXXX",
    },
    brand: "Groupany is een full-service digitaal bureau gevestigd in Amsterdam. Wij combineren AI-technologie met strategisch advies om bedrijven te laten groeien.",
    copyright: "\u00A9 2026 Groupany B.V.",
    kvk: "KVK 93.847.291",
    btw: "BTW NL866041827B01",
  },
  en: {
    diensten: {
      title: "Services",
      links: [
        { label: "Software development", href: "#diensten" },
        { label: "Marketing", href: "#diensten" },
        { label: "Websites", href: "#diensten" },
        { label: "Social recruitment", href: "#diensten" },
      ],
    },
    bedrijf: {
      title: "Company",
      links: [
        { label: "About us", href: "#over-ons" },
        { label: "Cases", href: "#cases" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms & conditions", href: "/voorwaarden" },
      ],
    },
    contact: {
      title: "Contact",
      address: ["Keizersgracht 520", "1017 EK Amsterdam"],
      email: "info@groupany.nl",
      phone: "+31 (0)20 XXX XXXX",
    },
    brand: "Groupany is a full-service digital agency based in Amsterdam. We combine AI technology with strategic consulting to help businesses grow.",
    copyright: "\u00A9 2026 Groupany B.V.",
    kvk: "KVK 93.847.291",
    btw: "BTW NL866041827B01",
  },
}

export default function Footer({ lang }: FooterProps) {
  const t = copy[lang]

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  }

  const linkStyle: React.CSSProperties = {
    fontSize: 14,
    color: "var(--color-text-secondary)",
    textDecoration: "none",
    fontWeight: 400,
    transition: "color var(--duration-base)",
    lineHeight: 1.5,
  }

  return (
    <footer
      style={{
        background: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-border)",
        padding: "72px 28px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Main grid */}
        <div className="grid-footer">
          {/* Brand column */}
          <div className="footer-brand" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  background: "var(--color-primary)",
                  borderRadius: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="5" width="7" height="7" rx="2" fill="white" opacity="0.9" />
                  <rect x="11" y="2" width="5" height="5" rx="1.5" fill="white" opacity="0.65" />
                  <rect x="11" y="9" width="5" height="7" rx="1.5" fill="white" opacity="0.65" />
                </svg>
              </span>
              <span style={{ fontSize: 17, fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
                Groupany
              </span>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: 300 }}>
              {t.brand}
            </p>
          </div>

          {/* Diensten */}
          <div style={columnStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", letterSpacing: "-0.01em", marginBottom: 4 }}>
              {t.diensten.title}
            </p>
            {t.diensten.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-primary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bedrijf */}
          <div style={columnStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", letterSpacing: "-0.01em", marginBottom: 4 }}>
              {t.bedrijf.title}
            </p>
            {t.bedrijf.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-primary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            ))}
            {t.resources.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-primary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div style={columnStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", letterSpacing: "-0.01em", marginBottom: 4 }}>
              {t.contact.title}
            </p>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              {t.contact.address[0]}<br />
              {t.contact.address[1]}
            </p>
            <a href={`mailto:${t.contact.email}`} style={{ ...linkStyle, color: "var(--color-primary)", fontWeight: 500 }}>
              {t.contact.email}
            </a>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
              {t.contact.phone}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
            {t.copyright} · {t.kvk} · {t.btw}
          </p>
          <p style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
            Keizersgracht 520, 1017 EK Amsterdam
          </p>
        </div>
      </div>
    </footer>
  )
}
