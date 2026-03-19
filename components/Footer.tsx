'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n/useTranslation'

function FooterIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    services: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
    company: <><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /></>,
    resources: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
    legal: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
      {icons[name] || icons.company}
    </svg>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  const COLUMNS = [
    {
      title: t('footer.servicesTitle'),
      icon: 'services',
      links: [
        { label: t('footer.softwareDev'), href: '/diensten' },
        { label: t('footer.websites'), href: '/diensten' },
        { label: t('footer.marketingGrowth'), href: '/diensten' },
        { label: t('footer.recruitment'), href: '/diensten' },
      ],
    },
    {
      title: t('footer.company'),
      icon: 'company',
      links: [
        { label: t('footer.team'), href: '/over-ons' },
        { label: t('footer.werkwijze'), href: '/over-ons' },
        { label: t('footer.vacatures'), href: '/vacatures' },
        { label: t('footer.investeerders'), href: '/investeerders' },
        { label: t('footer.contactLink'), href: '/contact' },
      ],
    },
    {
      title: t('footer.resources'),
      icon: 'resources',
      links: [
        { label: t('footer.blog'), href: '/inzichten' },
        { label: t('footer.cases'), href: '/inzichten' },
        { label: t('footer.faq'), href: '/contact' },
      ],
    },
    {
      title: t('footer.legal'),
      icon: 'legal',
      links: [
        { label: t('footer.privacy'), href: '/privacy' },
        { label: t('footer.terms'), href: '/voorwaarden' },
      ],
    },
  ]

  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="container-main" style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32 }}>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em' }}>Groupany</span>
            <p style={{ maxWidth: '22ch', marginTop: 12, fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              {t('footer.tagline')}
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
              <a href="https://linkedin.com/company/groupany" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                <FooterIcon name={col.icon} />
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.15s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', margin: 0 }}>&copy; 2026 Groupany B.V.</p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', margin: 0 }}>
            Keizersgracht 520, 1017 EK Amsterdam &middot; KVK 93.847.291 &middot; BTW NL866041827B01
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
