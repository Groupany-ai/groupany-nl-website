'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation, type Locale } from '@/lib/i18n/useTranslation'
import ThemeToggle from './ThemeToggle'

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
]

export default function Nav() {
  const { t, locale, setLocale } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const NAV_LINKS = [
    { href: '/diensten', label: t('nav.services') },
    { href: '/inzichten', label: t('footer.insights') },
    { href: '/over-ons', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <>
      <nav
        className={`nav-bar ${scrolled ? 'nav-scrolled' : ''}`}
      >
        <div className="nav-inner">
          <Link href="/" className='nav-logo' style={{ fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.03em' }}>
            Groupany
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className='nav-link' style={{ textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="lang-container" style={{ display: 'flex', alignItems: 'center', gap: 2, padding: 3, borderRadius: '999px', marginRight: 4 }}>
              {LOCALES.map(({ code, label }) => (
                <button key={code} onClick={() => setLocale(code)} className={code === locale ? 'lang-active' : ''}>{label}</button>
              ))}
            </div>
            <ThemeToggle />
            <Link href="/contact" className="btn-primary nav-cta" style={{ height: 36, padding: '0 16px', fontSize: '0.8125rem', borderRadius: 'var(--radius-full)' }}>
              {t('nav.getStarted')}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}>
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed inset-0 z-40 md:hidden" style={{ background: 'var(--bg)', paddingTop: 80, opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none', transition: 'opacity 0.25s ease' }}>
        <div className="container-main" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '16px 0', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 600, color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)', letterSpacing: '-0.02em' }}>
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {LOCALES.map(({ code, label }) => (
              <button key={code} onClick={() => setLocale(code)} style={{
                padding: '8px 16px', fontSize: '0.875rem', fontWeight: locale === code ? 700 : 400,
                color: locale === code ? 'var(--text)' : 'var(--text-tertiary)',
                background: locale === code ? 'var(--bg-alt)' : 'transparent',
                border: locale === code ? '1px solid var(--border)' : '1px solid transparent',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer',
              }}>{label}</button>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ fontSize: '1rem', padding: '0 32px' }}>
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
