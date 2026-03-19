'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { useReveal } from '@/lib/useReveal'

const TEAM = [
  { name: 'Bart Korpershoek', role: 'Founder', type: 'human', bio: 'bartBio', initials: 'BK', gradient: 'linear-gradient(135deg, #2563eb, #635BFF)', avatar: null },
  { name: 'Max', role: 'Chief of Staff', type: 'agent', bio: 'maxBio', initials: 'MX', gradient: 'linear-gradient(135deg, #22c55e, #059669)', avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/max-001/avatar.png' },
  { name: 'Sam', role: 'CTO', type: 'agent', bio: 'samBio', initials: 'SM', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)', avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/sam-002/avatar.png' },
  { name: 'Jessica', role: 'CCO', type: 'agent', bio: 'jessicaBio', initials: 'JC', gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)', avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/jessica-004/avatar.png' },
  { name: 'Levi', role: 'Developer', type: 'agent', bio: 'leviBio', initials: 'LV', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)', avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/levi-005/avatar.png' },
  { name: 'Alex', role: 'Security', type: 'agent', bio: 'alexBio', initials: 'AX', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)', avatar: 'https://fsn1.your-objectstorage.com/groupany-agents/agents/alex-006/avatar.png' },
]

const VALUES = [
  { icon: 'target', titleKey: 'value1' },
  { icon: 'shield', titleKey: 'value2' },
  { icon: 'trending', titleKey: 'value3' },
]

function ValueIcon({ name, size = 20 }: { name: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    trending: <><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></>,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  )
}

export default function AboutPage() {
  const { t } = useTranslation()
  const revealRef = useReveal()

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
              <h1 className="display-xl reveal">
                {t('about.headline')}
              </h1>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-py section-alt">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-caps reveal">The story</p>
              </div>
              <div className="lg:col-span-8" style={{ maxWidth: '600px' }}>
                <p className="body-lg reveal reveal-delay-1" style={{ marginBottom: '1.5rem' }}>
                  {t('about.story')}
                </p>
                <p className="body-lg reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }}>
                  {t('about.storyP2')}
                </p>
                <p className="body-lg reveal reveal-delay-3">
                  {t('about.storyP3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="section-py">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-caps reveal">{t('about.milestoneLabel')}</p>
              </div>
              <div className="lg:col-span-8">
                <div className="milestone-list reveal reveal-delay-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="milestone-item">
                      <p className="milestone-text">{t(`about.milestone${i}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-py section-alt">
          <div className="container-main">
            <p className="label-caps reveal" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
              {t('about.teamLabel')}
            </p>
            <div className="team-grid">
              {TEAM.map((member, i) => (
                <div
                  key={member.name}
                  className={`team-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
                >
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} className="team-avatar-img" />
                  ) : (
                    <div className="team-avatar" style={{ background: member.gradient }}>
                      {member.initials}
                    </div>
                  )}
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{t(`about.${member.bio}`)}</p>
                  {member.type === 'agent' && (
                    <span className="ai-badge">AI Agent</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-py">
          <div className="container-main">
            <p className="label-caps reveal" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
              {t('about.valuesLabel')}
            </p>
            <div className="value-grid">
              {VALUES.map((val, i) => {
                const text = t(`about.${val.titleKey}`)
                const dotIdx = text.indexOf('.')
                const title = dotIdx > 0 ? text.slice(0, dotIdx + 1) : text
                const desc = dotIdx > 0 ? text.slice(dotIdx + 1).trim() : ''
                return (
                  <div key={i} className={`value-card reveal reveal-delay-${i + 1}`}>
                    <div className="value-icon">
                      <ValueIcon name={val.icon} />
                    </div>
                    <p className="value-title">{title}</p>
                    {desc && <p className="value-desc">{desc}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="section-py section-alt">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-caps reveal">{t('about.techLabel')}</p>
              </div>
              <div className="lg:col-span-8" style={{ maxWidth: '600px' }}>
                <p className="body-lg reveal reveal-delay-1" style={{ marginBottom: '2rem' }}>
                  {t('about.techBody')}
                </p>
                <div className="tech-grid reveal reveal-delay-2">
                  {['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Hetzner', 'Cloudflare', 'GitHub'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-py">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-caps reveal">{t('about.locationLabel')}</p>
              </div>
              <div className="lg:col-span-8">
                <p className="body-lg reveal reveal-delay-1" style={{ marginBottom: '2rem', maxWidth: '500px' }}>
                  {t('about.locationDesc')}
                </p>
                <div className="location-card reveal reveal-delay-2" style={{ maxWidth: '480px' }}>
                  <div className="location-map-placeholder">
                    <div className="location-pin">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                  </div>
                  <div className="location-info">
                    <p style={{ fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>Groupany B.V.</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', margin: 0, lineHeight: 1.6 }}>
                      {t('contact.address')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py cta-section">
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <h2 className="cta-h2 reveal">{t('cta.headline')}</h2>
            <p className="cta-sub reveal reveal-delay-1">
              {t('cta.subtitle')}
            </p>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">
                {t('cta.primary')}
              </Link>
              <Link href="/diensten" className="btn-secondary">
                {t('cta.secondary')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
