'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { useReveal } from '@/lib/useReveal'

interface ServicePageProps {
  serviceKey: 'software' | 'marketing' | 'research'
}

const CAP_ICONS: Record<string, string[]> = {
  software: ['code', 'layers', 'cpu', 'cloud', 'database', 'tool'],
  marketing: ['search', 'file', 'target', 'users', 'trending', 'chart'],
  research: ['globe', 'chart', 'shield', 'briefcase', 'search', 'trending'],
}

const TECH_STACKS: Record<string, string[]> = {
  software: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Python', 'Hetzner', 'Cloudflare', 'GitHub Actions'],
  marketing: ['Google Analytics', 'Google Ads', 'SEMrush', 'HubSpot', 'Mailchimp', 'LinkedIn Ads', 'Plausible', 'Ahrefs'],
  research: ['Claude', 'OpenAI', 'Brave Search', 'Python', 'Qdrant', 'LangChain', 'PostgreSQL', 'Notion'],
}

function CapIcon({ name, size = 18 }: { name: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
    layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></>,
    cloud: <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />,
    database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
    tool: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />,
    search: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
    file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
    trending: <><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-12" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || icons.code}
    </svg>
  )
}

export default function ServicePage({ serviceKey }: ServicePageProps) {
  const { t } = useTranslation()
  const revealRef = useReveal()

  const prefix = `servicePages.${serviceKey}`
  const icons = CAP_ICONS[serviceKey]
  const techStack = TECH_STACKS[serviceKey]

  return (
    <>
      <Nav />
      <main ref={revealRef}>
        {/* Hero */}
        <section className="subpage-hero">
          <div className="subpage-hero-pattern" />
          <div className="subpage-hero-gradient" />
          <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '800px' }}>
              <p className="label-caps reveal" style={{ marginBottom: '1.5rem' }}>
                {t(`${prefix}.title`)}
              </p>
              <h1 className="display-xl reveal reveal-delay-1">
                {t(`${prefix}.headline`)}
              </h1>
              <p className="body-lg reveal reveal-delay-2" style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)', maxWidth: '600px' }}>
                {t(`${prefix}.description`)}
              </p>
              <div className="reveal reveal-delay-3" style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link href="/contact" className="btn-primary">
                  {t(`${prefix}.ctaPrimary`)}
                </Link>
                <Link href="/" className="btn-secondary">
                  {t('cta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-py section-alt">
          <div className="container-main">
            <p className="label-caps reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {t(`${prefix}.capabilitiesLabel`)}
            </p>
            <div className="cap-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`cap-card reveal reveal-delay-${Math.min(i, 4)}`}>
                  <div className="cap-card-icon">
                    <CapIcon name={icons[i - 1]} />
                  </div>
                  <p className="cap-card-title">{t(`${prefix}.cap${i}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section-py">
          <div className="container-main">
            <p className="label-caps reveal" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
              {t(`${prefix}.processLabel`)}
            </p>
            <div className="process-timeline">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`timeline-step reveal reveal-delay-${Math.min(i, 4)}`}>
                  <div className="timeline-number">{i}</div>
                  <h3 className="timeline-title">{t(`${prefix}.proc${i}title`)}</h3>
                  <p className="timeline-desc">{t(`${prefix}.proc${i}desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack / Metrics (depends on service) */}
        {serviceKey === 'marketing' ? (
          <section className="section-py section-alt">
            <div className="container-main">
              <p className="label-caps reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {t(`${prefix}.metricsLabel`)}
              </p>
              <div className="metric-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`metric-card reveal reveal-delay-${Math.min(i, 4)}`}>
                    <p className="metric-label">{t(`${prefix}.metric${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="section-py section-alt">
            <div className="container-main">
              <p className="label-caps reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {t(`${prefix}.techLabel`)}
              </p>
              <div className="tech-grid reveal reveal-delay-1">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables */}
        <section className="section-py">
          <div className="container-main">
            <p className="label-caps reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {t(`${prefix}.deliverablesLabel`)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`cap-card reveal reveal-delay-${Math.min(i, 4)}`}
                >
                  <div className="cap-card-icon" style={{ background: 'rgba(34, 197, 94, 0.08)', color: '#059669' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text)', margin: 0, lineHeight: 1.6 }}>
                    {t(`${prefix}.del${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py cta-section">
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <h2 className="cta-h2 reveal">
              {t(`${prefix}.ctaHeadline`)}
            </h2>
            <p className="cta-sub reveal reveal-delay-1">
              {t('cta.subtitle')}
            </p>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">
                {t(`${prefix}.ctaPrimary`)}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
