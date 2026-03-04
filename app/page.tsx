'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Lang = 'nl' | 'en'

// ── Translations ───────────────────────────────────────────────────────────────
const T = {
  nl: {
    nav: {
      services: 'Diensten',
      work: 'Werkwijze',
      contact: 'Contact',
      cta: 'Gratis gesprek',
      ctaShort: 'Gesprek',
    },
    hero: {
      badge: 'Websites, software en marketing voor MKB · Amsterdam',
      title: ['Professionele websites.', 'Slimme software.', 'Marketing die werkt.'],
      sub: 'Wij bouwen professionele websites, maatwerksoftware en marketingcampagnes voor ambitieuze Nederlandse bedrijven.',
      cta1: 'Plan een gratis gesprek',
      cta2: 'Bekijk onze diensten',
    },
    services: {
      label: 'DIENSTEN',
      title: 'Alles wat uw\nbedrijf nodig heeft.',
      sub: 'Van professionele website tot volledige marketingcampagne. Snel geleverd, meetbaar resultaat.',
      items: [
        {
          num: '01',
          title: 'Websites',
          desc: 'Professionele websites, webshops en landingspagina\'s die converteren. Snel online, altijd mobiel geoptimaliseerd.',
          tags: ['WordPress', 'Next.js', 'Webshops', 'Landingspagina\'s'],
          highlight: false,
        },
        {
          num: '02',
          title: 'Software op Maat',
          desc: 'Maatwerk web-apps, bedrijfssoftware en slimme koppelingen. Van idee tot productie, snel en schaalbaar.',
          tags: ['Web Apps', 'API-koppelingen', 'SaaS', 'Automatisering'],
          highlight: true,
        },
        {
          num: '03',
          title: 'Marketing & SEO',
          desc: 'SEO, Google Ads, Meta Ads en content marketing die samenwerken. Data-gedreven, meetbaar en gericht op meer omzet.',
          tags: ['SEO', 'Google Ads', 'Meta Ads', 'Content'],
          highlight: false,
        },
        {
          num: '04',
          title: 'Social Recruitment',
          desc: 'Wij werven talent via social media. Van vacature tot aanbieding: persoonlijke campagnes die de juiste kandidaten aantrekken.',
          tags: ['LinkedIn Ads', 'Meta Recruitment', 'Employer Branding', 'Kandidaatflow'],
          highlight: false,
        },
      ],
    },
    how: {
      label: 'WERKWIJZE',
      title: 'Snel van start.\nSnel resultaat.',
      sub: 'Geen lange trajecten. Geen verrassingen. Vaste prijzen, heldere deadlines, altijd bereikbaar.',
      steps: [
        { num: '01', title: 'Kennismaking', desc: 'Vertel ons wat u nodig heeft. Binnen 24 uur sturen we een voorstel met prijs en planning.' },
        { num: '02', title: 'Ontwerp & Planning', desc: 'U krijgt een concreet plan: design, functionaliteiten en budget. Geen verrassingen achteraf.' },
        { num: '03', title: 'Bouwen & Opleveren', desc: 'Ons team levert snel en houdt u wekelijks op de hoogte. U ziet de voortgang live.' },
        { num: '04', title: 'Lanceren & Groeien', desc: 'Na oplevering meten en optimaliseren we continu, zodat uw investering meer en meer oplevert.' },
      ],
      trust: [
        { value: '100+', label: 'Projecten afgerond' },
        { value: '24/7', label: 'Beschikbaar' },
        { value: '<4u', label: 'Reactietijd' },
        { value: '100%', label: 'Vaste prijs' },
      ],
    },
    cta: {
      title: 'Klaar om te groeien?',
      sub: 'Plan een gratis kennismaking. U hoort binnen 24 uur van ons.',
      btn: 'Gesprek inplannen',
      emailLabel: 'Of e-mail ons op',
    },
    logos: 'Wij werken met',
    footer: {
      tagline: 'Websites, software en marketing voor ambitieuze ondernemers.',
      services: { title: 'Diensten', items: ['Websites', 'Software op Maat', 'Marketing & SEO', 'Social Recruitment'] },
      company: { title: 'Bedrijf', items: ['Over ons', 'Cases', 'Blog', 'Vacatures'] },
      contact: { title: 'Contact', email: 'hello@groupany.nl', city: 'Amsterdam, Nederland', kvk: 'KVK: 90123456', btw: 'BTW: NL004520193B01' },
      copy: '© 2026 Groupany. Alle rechten voorbehouden.',
      links: ['Privacy', 'Algemene voorwaarden'],
    },
  },
  en: {
    nav: {
      services: 'Services',
      work: 'Approach',
      contact: 'Contact',
      cta: 'Free consultation',
      ctaShort: 'Call',
    },
    hero: {
      badge: 'Websites, software and marketing for SMBs · Amsterdam',
      title: ['Professional websites.', 'Smart software.', 'Marketing that works.'],
      sub: 'We build professional websites, custom software and marketing campaigns for ambitious Dutch businesses.',
      cta1: 'Book a free call',
      cta2: 'Explore our services',
    },
    services: {
      label: 'SERVICES',
      title: 'Everything your\nbusiness needs.',
      sub: 'From professional website to full marketing campaign. Fast delivery, measurable results.',
      items: [
        {
          num: '01',
          title: 'Websites',
          desc: 'Professional websites, webshops and landing pages that convert. Online fast, always mobile-optimized.',
          tags: ['WordPress', 'Next.js', 'Webshops', 'Landing Pages'],
          highlight: false,
        },
        {
          num: '02',
          title: 'Custom Software',
          desc: 'Custom web apps, business software and smart integrations. From idea to production, fast and scalable.',
          tags: ['Web Apps', 'API Integrations', 'SaaS', 'Automation'],
          highlight: true,
        },
        {
          num: '03',
          title: 'Marketing & SEO',
          desc: 'SEO, Google Ads, Meta Ads and content marketing working together. Data-driven, measurable, focused on more revenue.',
          tags: ['SEO', 'Google Ads', 'Meta Ads', 'Content'],
          highlight: false,
        },
        {
          num: '04',
          title: 'Social Recruitment',
          desc: 'We recruit talent via social media. From vacancy to offer: personalised campaigns that attract the right candidates.',
          tags: ['LinkedIn Ads', 'Meta Recruitment', 'Employer Branding', 'Candidate Flow'],
          highlight: false,
        },
      ],
    },
    how: {
      label: 'HOW WE WORK',
      title: 'Quick start.\nQuick results.',
      sub: 'No long projects. No surprises. Fixed prices, clear deadlines, always reachable.',
      steps: [
        { num: '01', title: 'Intake', desc: 'Tell us what you need. Within 24 hours we send a proposal with price and timeline.' },
        { num: '02', title: 'Design & Planning', desc: 'You get a concrete plan: design, features and budget. No surprises afterwards.' },
        { num: '03', title: 'Build & Deliver', desc: 'Our team delivers fast and keeps you updated weekly. You see the progress live.' },
        { num: '04', title: 'Launch & Grow', desc: 'After delivery we measure and optimize continuously, so your investment returns more and more.' },
      ],
      trust: [
        { value: '100+', label: 'Projects completed' },
        { value: '24/7', label: 'Available' },
        { value: '<4h', label: 'Response time' },
        { value: '100%', label: 'Fixed price' },
      ],
    },
    cta: {
      title: 'Ready to grow?',
      sub: 'Book a free consultation. You\'ll hear from us within 24 hours.',
      btn: 'Book a call',
      emailLabel: 'Or email us at',
    },
    logos: 'We work with',
    footer: {
      tagline: 'Websites, software and marketing for ambitious entrepreneurs.',
      services: { title: 'Services', items: ['Websites', 'Custom Software', 'Marketing & SEO', 'Social Recruitment'] },
      company: { title: 'Company', items: ['About us', 'Cases', 'Blog', 'Vacancies'] },
      contact: { title: 'Contact', email: 'hello@groupany.nl', city: 'Amsterdam, Netherlands', kvk: 'CoC: 90123456', btw: 'VAT: NL004520193B01' },
      copy: '© 2026 Groupany. All rights reserved.',
      links: ['Privacy', 'Terms'],
    },
  },
}

// ── Colors per service ─────────────────────────────────────────────────────────
const SVC_COLORS = ['#2563EB', '#8B5CF6', '#10B981', '#F59E0B']

// ── SVG icons ──────────────────────────────────────────────────────────────────
function IconCode() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 7.5c0 1.5.5 2.8 1.4 3.8C5.9 12.3 5 13.8 5 15.5 5 18 7 20 9.5 20c.5 0 1-.1 1.5-.2V22h2v-2.2c.5.1 1 .2 1.5.2 2.5 0 4.5-2 4.5-4.5 0-1.7-.9-3.2-2.4-4.2C17.5 10.3 18 9 18 7.5 18 4.5 15.5 2 12 2z" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M6 10h12" />
    </svg>
  )
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function IconPeople() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
const SVC_ICONS = [IconCode, IconBrain, IconChart, IconPeople]

// ── Hero Visual ────────────────────────────────────────────────────────────────
function HeroVisual({ lang }: { lang: Lang }) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 3000)
    return () => clearInterval(t)
  }, [])

  const agents = lang === 'nl'
    ? [
        { name: 'Sam · Software', status: tick % 3 === 0 ? 'Website v2 opgeleverd…' : 'React app bouwen…', dot: '#2563EB' },
        { name: 'Max · Projectleider', status: tick % 3 === 1 ? 'Sprint coördineren…' : 'Klant bijwerken…', dot: '#10B981' },
        { name: 'Jessica · Marketing', status: tick % 3 === 2 ? 'Google Ads campagne live…' : 'SEO analyse uitvoeren…', dot: '#8B5CF6' },
      ]
    : [
        { name: 'Sam · Software', status: tick % 3 === 0 ? 'Website v2 delivered…' : 'Building React app…', dot: '#2563EB' },
        { name: 'Max · Project lead', status: tick % 3 === 1 ? 'Coordinating sprint…' : 'Client update sent…', dot: '#10B981' },
        { name: 'Jessica · Marketing', status: tick % 3 === 2 ? 'Google Ads campaign live…' : 'Running SEO analysis…', dot: '#8B5CF6' },
      ]

  const statsLabel = lang === 'nl'
    ? [{ v: '24', l: 'Taken voltooid' }, { v: '5', l: 'Actieve agents' }, { v: '<4u', l: 'Reactietijd' }]
    : [{ v: '24', l: 'Tasks done' }, { v: '5', l: 'Active agents' }, { v: '<4h', l: 'Response time' }]

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 500, margin: '0 auto' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: '-30% -20%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.13) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Main glass card */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative', zIndex: 1,
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: 'blur(28px) saturate(200%)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 24px 80px rgba(37,99,235,0.12), 0 4px 20px rgba(0,0,0,0.07)',
          borderRadius: 24, padding: '26px 26px 22px',
        }}
      >
        {/* Window chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.06em' }}>
            GROUPANY CONTROL CENTER
          </span>
        </div>

        {/* Agent rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '11px 14px',
                background: i === 0 ? 'rgba(37,99,235,0.06)' : 'rgba(248,250,252,0.85)',
                borderRadius: 12,
                border: i === 0 ? '1px solid rgba(37,99,235,0.14)' : '1px solid rgba(226,232,240,0.7)',
              }}
            >
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: a.dot, boxShadow: `0 0 0 3px ${a.dot}28`, flexShrink: 0,
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}>{a.name}</div>
                <div style={{ fontSize: 11, color: '#64748B', marginTop: 1 }}>{a.status}</div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#64748B', letterSpacing: '0.04em' }}>
                {lang === 'nl' ? 'ACTIEF' : 'ACTIVE'}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10, marginTop: 18,
          padding: '14px 10px',
          background: 'rgba(15,23,42,0.04)',
          borderRadius: 12,
        }}>
          {statsLabel.map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#0F172A' }}>{s.v}</div>
              <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating badge bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          position: 'absolute', bottom: -18, right: -14, zIndex: 2,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.09)',
          borderRadius: 13, padding: '9px 14px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 0 3px rgba(16,185,129,0.22)' }} />
        <span style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap' }}>
          {lang === 'nl' ? '5 agents actief' : '5 agents active'}
        </span>
      </motion.div>

      {/* Floating notification top */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        style={{
          position: 'absolute', top: -16, left: -14, zIndex: 2,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.09)',
          borderRadius: 13, padding: '9px 14px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontSize: 16 }}>🚀</span>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0F172A' }}>
            {lang === 'nl' ? 'AI workflow gestart' : 'AI workflow started'}
          </div>
          <div style={{ fontSize: 10, color: '#94A3B8' }}>
            {lang === 'nl' ? '2 minuten geleden' : '2 minutes ago'}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ── Video Section ──────────────────────────────────────────────────────────────
// Locale-based video: Dutch (v7) or English (v8)
const VIDEO_URL_NL = 'https://groupany.fsn1.your-objectstorage.com/media/groupany-nl-v1.mp4'
const VIDEO_URL_EN = 'https://groupany.fsn1.your-objectstorage.com/media/groupany-nl-v1.mp4'

function VideoSection({ lang }: { lang: Lang }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  const handleVideoClick = () => {
    if (playing) {
      videoRef.current?.pause()
      setPlaying(false)
    }
  }

  const label = lang === 'nl'
    ? 'Bekijk hoe Groupany werkt'
    : 'See how Groupany works'

  const videoUrl = lang === 'nl' ? VIDEO_URL_NL : VIDEO_URL_EN
  const duration = '0:30'

  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            {lang === 'nl' ? 'IN ACTIE' : 'IN ACTION'}
          </div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: 10 }}>
            {label}
          </h2>
          <p style={{ fontSize: 16, color: '#64748B', maxWidth: 460, margin: '0 auto' }}>
            {lang === 'nl'
              ? 'Software bouwen, AI automatiseren, marketing schalen — in 30 seconden.'
              : 'Build software, automate with AI, scale marketing — in 30 seconds.'}
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(37,99,235,0.14), 0 8px 24px rgba(0,0,0,0.10)',
            border: '1px solid rgba(226,232,240,0.8)',
            cursor: 'pointer',
            aspectRatio: '16/9',
            background: '#080E1C',
          }}
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            playsInline
            preload="metadata"
          />

          {/* Play overlay */}
          {!playing && (
            <div
              onClick={e => { e.stopPropagation(); handlePlay() }}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(8,14,28,0.55)',
                backdropFilter: 'blur(2px)',
                cursor: 'pointer',
              }}
            >
              {/* Play button */}
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                marginBottom: 18,
                transition: 'transform 0.18s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.10)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#2563EB">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>

              {/* Label */}
              <div style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 99, padding: '6px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{label}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{duration}</span>
              </div>
            </div>
          )}

          {/* Duration badge */}
          <div style={{
            position: 'absolute', bottom: 14, right: 16,
            background: 'rgba(0,0,0,0.6)', borderRadius: 6, padding: '3px 8px',
            fontSize: 12, fontWeight: 700, color: '#fff',
            opacity: playing ? 0 : 1, transition: 'opacity 0.2s',
          }}>
            {duration}
          </div>
        </motion.div>

        {/* Chips below */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          {(lang === 'nl'
            ? ['Websites', 'Software op Maat', 'Marketing & SEO']
            : ['Websites', 'Custom Software', 'Marketing & SEO']
          ).map(tag => (
            <span key={tag} style={{
              padding: '5px 14px', borderRadius: 99,
              fontSize: 12, fontWeight: 700,
              background: 'rgba(37,99,235,0.07)',
              color: '#2563EB',
              border: '1px solid rgba(37,99,235,0.14)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────────
// ── FAQ Item ────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8F0',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 4,
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 22px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 15, fontWeight: 700, color: '#0F172A',
          gap: 12,
        }}
      >
        <span>{q}</span>
        <span style={{ fontSize: 20, lineHeight: 1, color: '#94A3B8', flexShrink: 0 }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 22px 18px', fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('nl')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const t = T[lang]

  useEffect(() => {
    const b = navigator.language?.slice(0, 2)
    if (b !== 'nl') setLang('en')
  }, [])

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: t.nav.services, href: '#diensten' },
    { label: t.nav.work, href: '#werkwijze' },
    { label: 'Social Recruitment', href: '#social-recruitment' },
    { label: 'Blog', href: '/blog' },
    { label: 'Cases', href: '/cases' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <div style={{ fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif', background: '#FAFBFF', color: '#0F172A' }}>

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled || menuOpen ? 'rgba(255,255,255,0.90)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(22px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(22px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226,232,240,0.5)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.05)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/logo-black.png" alt="Groupany" style={{ height: 28, width: 'auto' }} />
          </a>

          {/* Desktop nav links */}
          <nav className="nav-links" style={{ flex: 1, justifyContent: 'center' }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                style={{ fontSize: 14, fontWeight: 600, color: '#475569', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >{l.label}</a>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, marginLeft: 'auto' }}>
            <div className="lang-toggle">
              <button className={`lang-toggle-btn${lang === 'nl' ? ' active' : ''}`} onClick={() => setLang('nl')}>NL</button>
              <button className={`lang-toggle-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>

            <a href="#contact" className="nav-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '9px 20px', borderRadius: 9,
                background: '#2563EB', color: '#fff',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(37,99,235,0.28)',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <span className="nav-cta-text">{t.nav.cta}</span>
              <span className="nav-cta-short" style={{ display: 'none' }}>{t.nav.ctaShort}</span>
            </a>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                display: 'none',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#0F172A', padding: '4px',
              }}
              className="hamburger"
              aria-label="Menu"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{
            background: 'rgba(255,255,255,0.97)',
            borderTop: '1px solid #E2E8F0',
            padding: '20px 24px 28px',
          }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '13px 0',
                  fontSize: 18, fontWeight: 700, color: '#0F172A',
                  textDecoration: 'none', borderBottom: '1px solid #F1F5F9',
                }}
              >{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: 20, padding: '14px',
                background: '#2563EB', color: '#fff',
                borderRadius: 12, fontSize: 16, fontWeight: 700,
                textDecoration: 'none',
              }}
            >{t.nav.cta}</a>
          </div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64,
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 80% 70% at 75% 45%, rgba(37,99,235,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 5% 90%, rgba(139,92,246,0.04) 0%, transparent 55%),
          #FAFBFF
        `,
      }}>
        {/* Animated background blobs */}
        <motion.div
          animate={{ x: [0, 30, -15, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '15%', right: '10%',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ x: [0, -25, 20, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{
            position: 'absolute', bottom: '20%', left: '5%',
            width: 350, height: 350, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)', pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ x: [0, 40, -10, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
          style={{
            position: 'absolute', top: '60%', right: '30%',
            width: 250, height: 250, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }}
        />
        <div className="grid-hero" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 999,
                background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.16)',
                marginBottom: 24,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.04em' }}>
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.65 }}
              style={{ fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.08, color: '#0F172A', marginBottom: 24, letterSpacing: '-0.025em' }}
            >
              {t.hero.title.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
              style={{ fontSize: 18, color: '#475569', lineHeight: 1.72, maxWidth: 460, marginBottom: 36 }}
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}
            >
              <a href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 11,
                  background: '#2563EB', color: '#fff',
                  fontSize: 15, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(37,99,235,0.36)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(37,99,235,0.42)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.36)' }}
              >
                {t.hero.cta1} <IconArrow />
              </a>
              <a href="#diensten"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 11,
                  background: 'transparent', color: '#0F172A',
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                  border: '1.5px solid #E2E8F0', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.color = '#2563EB' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#0F172A' }}
              >
                {t.hero.cta2}
              </a>
            </motion.div>
          </div>

          {/* Right — hidden on mobile via CSS */}
          <div className="hero-visual-wrap">
            <HeroVisual lang={lang} />
          </div>
        </div>
      </section>

      {/* ── Video Section ───────────────────────────────────────────────────── */}
      <VideoSection lang={lang} />

      {/* ── Partner Logos ────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', background: '#fff', padding: '28px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#CBD5E1', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t.logos}
            </span>
          </div>
          {/* Row 1 — AI & Cloud */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36, flexWrap: 'wrap', marginBottom: 16 }}>
            {[
              { name: 'OpenAI',      color: '#000000' },
              { name: 'Anthropic',   color: '#C96442' },
              { name: 'Google',      color: '#4285F4' },
              { name: 'AWS',         color: '#FF9900' },
              { name: 'Microsoft',   color: '#00A4EF' },
              { name: 'Vercel',      color: '#000000' },
            ].map(l => (
              <span key={l.name} style={{
                fontSize: 15, fontWeight: 800,
                color: '#D1D5DB',
                letterSpacing: '-0.01em',
                opacity: 0.9,
              }}>
                {l.name}
              </span>
            ))}
          </div>
          {/* Row 2 — Dev & Marketing tools */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
            {[
              'GitHub', 'Stripe', 'HubSpot', 'Shopify', 'Google Ads', 'Meta Ads',
            ].map(l => (
              <span key={l} style={{
                fontSize: 13, fontWeight: 700,
                color: '#D1D5DB',
                letterSpacing: '-0.01em',
              }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section id="diensten" className="section-pad" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', marginBottom: 12 }}>
              {t.services.label}
            </div>
            <h2 className="section-headline"
              style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, marginBottom: 16, whiteSpace: 'pre-line' }}
            >
              {t.services.title}
            </h2>
            <p style={{ fontSize: 17, color: '#64748B', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              {t.services.sub}
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid-services">
            {t.services.items.map((s, i) => {
              const isDark = s.highlight
              const Icon = SVC_ICONS[i]
              const color = SVC_COLORS[i]
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  whileHover={{ y: -5 }}
                  style={{
                    padding: '36px 32px',
                    borderRadius: 20,
                    background: isDark
                      ? 'linear-gradient(145deg, #0F172A 0%, #1B2A4A 100%)'
                      : 'rgba(255,255,255,0.85)',
                    backdropFilter: isDark ? 'none' : 'blur(20px)',
                    WebkitBackdropFilter: isDark ? 'none' : 'blur(20px)',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(226,232,240,0.9)',
                    boxShadow: isDark
                      ? '0 28px 56px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.04)'
                      : '0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 13,
                    background: isDark ? `${color}28` : `${color}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22,
                    color: isDark ? (color === '#8B5CF6' ? '#C4B5FD' : '#93C5FD') : color,
                  }}>
                    <Icon />
                  </div>

                  <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.25)' : '#CBD5E1', letterSpacing: '0.08em', marginBottom: 8 }}>
                    {s.num}
                  </div>

                  <h3 style={{ fontSize: 21, fontWeight: 800, color: isDark ? '#FFFFFF' : '#0F172A', marginBottom: 12, lineHeight: 1.25, letterSpacing: '-0.015em' }}>
                    {s.title}
                  </h3>

                  <p style={{ fontSize: 15, color: isDark ? 'rgba(255,255,255,0.62)' : '#64748B', lineHeight: 1.72, marginBottom: 24 }}>
                    {s.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '4px 10px', borderRadius: 99,
                        fontSize: 11, fontWeight: 700,
                        background: isDark ? 'rgba(255,255,255,0.08)' : `${color}0F`,
                        color: isDark ? 'rgba(255,255,255,0.5)' : color,
                        border: isDark ? '1px solid rgba(255,255,255,0.09)' : 'none',
                      }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How We Work ─────────────────────────────────────────────────────── */}
      <section id="werkwijze" className="section-pad" style={{
        background: `
          radial-gradient(ellipse 60% 60% at 100% 50%, rgba(37,99,235,0.04) 0%, transparent 70%),
          #F8FAFC
        `,
      }}>
        <div className="grid-how" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Left */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', marginBottom: 12 }}>
              {t.how.label}
            </div>
            <h2 className="section-headline"
              style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, marginBottom: 18, whiteSpace: 'pre-line' }}
            >
              {t.how.title}
            </h2>
            <p style={{ fontSize: 17, color: '#64748B', lineHeight: 1.72, maxWidth: 400, marginBottom: 40 }}>
              {t.how.sub}
            </p>

            {/* Trust stats grid */}
            <div className="grid-trust">
              {(lang === 'nl' ? [
                { value: '100+', label: 'Projecten afgerond', sub: 'En groeiende portfoliogroei', gradient: 'from-blue-600 to-blue-400', icon: '🚀' },
                { value: '24/7', label: 'Beschikbaar', sub: 'Dag en nacht bereikbaar', gradient: 'from-emerald-500 to-teal-400', icon: '⚡' },
                { value: '<4u', label: 'Reactietijd', sub: 'Eerste reactie gegarandeerd', gradient: 'from-violet-600 to-purple-400', icon: '⏱' },
                { value: '100%', label: 'Vaste prijs', sub: 'Nooit meer dan afgesproken', gradient: 'from-amber-500 to-orange-400', icon: '✓' },
              ] : [
                { value: '100+', label: 'Projects completed', sub: 'And growing fast', gradient: 'from-blue-600 to-blue-400', icon: '🚀' },
                { value: '24/7', label: 'Available', sub: 'Day and night, always reachable', gradient: 'from-emerald-500 to-teal-400', icon: '⚡' },
                { value: '<4h', label: 'Response time', sub: 'First response guaranteed', gradient: 'from-violet-600 to-purple-400', icon: '⏱' },
                { value: '100%', label: 'Fixed price', sub: 'Never more than agreed', gradient: 'from-amber-500 to-orange-400', icon: '✓' },
              ]).map(s => (
                <div key={s.label} style={{
                  position: 'relative',
                  padding: '24px 22px',
                  background: 'rgba(255,255,255,0.90)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(226,232,240,0.9)',
                  borderRadius: 18,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(to right, ${s.gradient.includes('blue') ? '#2563EB, #60A5FA' : s.gradient.includes('emerald') ? '#10B981, #34D399' : s.gradient.includes('violet') ? '#7C3AED, #A78BFA' : '#F59E0B, #FB923C'})`,
                  }} />
                  <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{
                    fontSize: 32, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 4,
                    background: `linear-gradient(135deg, ${s.gradient.includes('blue') ? '#1D4ED8, #3B82F6' : s.gradient.includes('emerald') ? '#059669, #10B981' : s.gradient.includes('violet') ? '#6D28D9, #8B5CF6' : '#D97706, #F59E0B'})`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{s.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', marginBottom: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: '#94A3B8' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {t.how.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(37,99,235,0.04)' }}
                style={{ display: 'flex', gap: 20, padding: '22px 18px', borderRadius: 16, transition: 'background 0.2s', cursor: 'default' }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'rgba(37,99,235,0.09)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: 12, fontWeight: 800, color: '#2563EB',
                }}>
                  {step.num}
                </div>
                <div style={{ paddingTop: 2 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', marginBottom: 5 }}>{step.title}</div>
                  <div style={{ fontSize: 15, color: '#64748B', lineHeight: 1.68 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
              {lang === 'nl' ? 'WAT KLANTEN ZEGGEN' : 'WHAT CLIENTS SAY'}
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              {lang === 'nl' ? 'Resultaten die voor zich spreken.' : 'Results that speak for themselves.'}
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {(lang === 'nl' ? [
              {
                quote: 'In 3 weken hadden we een volledige webshop. Sneller dan verwacht, netter dan verwacht. Precies wat we nodig hadden.',
                name: 'Tom van der Berg',
                role: 'Eigenaar, Berg Fietsen',
                stars: 5,
              },
              {
                quote: 'Onze Google Ads campagne draait nu 3x zo efficiënt. Meer leads, minder kosten. Groupany begrijpt ons bedrijf echt.',
                name: 'Lisa Martens',
                role: 'Directeur, Martens Makelaars',
                stars: 5,
              },
              {
                quote: 'Ze bouwden de software die we nodig hadden en dachten mee over oplossingen die we zelf niet hadden bedacht.',
                name: 'Jeroen Hoek',
                role: 'CEO, Hoek Logistiek',
                stars: 5,
              },
            ] : [
              {
                quote: 'We had a full webshop in 3 weeks. Faster than expected, cleaner than expected. Exactly what we needed.',
                name: 'Tom van der Berg',
                role: 'Owner, Berg Cycles',
                stars: 5,
              },
              {
                quote: 'Our Google Ads campaign is now 3x more efficient. More leads, lower cost. Groupany truly understands our business.',
                name: 'Lisa Martens',
                role: 'Director, Martens Real Estate',
                stars: 5,
              },
              {
                quote: 'They built the software we needed and contributed solutions we hadn\'t even thought of ourselves.',
                name: 'Jeroen Hoek',
                role: 'CEO, Hoek Logistics',
                stars: 5,
              },
            ]).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: i === 1 ? 'linear-gradient(145deg, #0F172A, #1B2A4A)' : '#F8FAFC',
                  borderRadius: 20,
                  border: i === 1 ? '1px solid rgba(255,255,255,0.07)' : '1px solid #E2E8F0',
                  boxShadow: i === 1 ? '0 24px 48px rgba(0,0,0,0.18)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
                  {[...Array(t.stars)].map((_, si) => (
                    <span key={si} style={{ color: '#FBBF24', fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{
                  fontSize: 16, lineHeight: 1.72, marginBottom: 24,
                  color: i === 1 ? 'rgba(255,255,255,0.82)' : '#374151',
                  fontStyle: 'italic',
                }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: `hsl(${220 + i * 40}, 70%, 55%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 800, color: '#fff',
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: i === 1 ? '#fff' : '#0F172A' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: i === 1 ? 'rgba(255,255,255,0.45)' : '#94A3B8' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ─────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', marginBottom: 10 }}>
                {lang === 'nl' ? 'KENNISBANK' : 'INSIGHTS'}
              </div>
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                {lang === 'nl' ? 'Kennis die uw\nbedrijf verder helpt.' : "Knowledge that\ngrows your business."}
              </h2>
            </div>
            <a href="/blog" style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              {lang === 'nl' ? 'Alle artikelen' : 'All articles'} <IconArrow />
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {(lang === 'nl' ? [
              { slug: 'waarom-uw-website-meer-is-dan-een-visitekaartje', cat: 'Websites', color: '#2563EB', title: 'Waarom uw website meer is dan een digitaal visitekaartje', excerpt: 'Een professionele website is uw 24/7 verkoper. We laten zien hoe u er het maximale uithaalt.', date: 'Feb 2026', time: '4 min' },
              { slug: 'google-ads-voor-mkb-zo-werkt-het', cat: 'Marketing', color: '#8B5CF6', title: 'Google Ads voor MKB: zo haalt u meer uit uw budget', excerpt: 'Veel mkb-bedrijven gooien geld weg met Google Ads. Dit zijn de drie fouten die we het vaakst zien.', date: 'Feb 2026', time: '5 min' },
              { slug: 'maatwerksoftware-wanneer-loont-het', cat: 'Software', color: '#10B981', title: 'Maatwerksoftware: wanneer loont de investering?', excerpt: 'Off-the-shelf software heeft limieten. We helpen u bepalen wanneer maatwerk de betere keuze is.', date: 'Feb 2026', time: '6 min' },
            ] : [
              { slug: 'waarom-uw-website-meer-is-dan-een-visitekaartje', cat: 'Websites', color: '#2563EB', title: 'Why your website is more than a digital business card', excerpt: 'A professional website is your 24/7 salesperson. We show you how to get the most out of it.', date: 'Feb 2026', time: '4 min' },
              { slug: 'google-ads-voor-mkb-zo-werkt-het', cat: 'Marketing', color: '#8B5CF6', title: 'Google Ads for SMBs: getting more from your budget', excerpt: 'Many SMB companies waste money on Google Ads. These are the three mistakes we see most often.', date: 'Feb 2026', time: '5 min' },
              { slug: 'maatwerksoftware-wanneer-loont-het', cat: 'Software', color: '#10B981', title: 'Custom software: when does the investment pay off?', excerpt: 'Off-the-shelf software has limits. We help you determine when custom is the better choice.', date: 'Feb 2026', time: '6 min' },
            ]).map((article, i) => (
              <motion.a
                key={article.slug}
                href={`/blog/${article.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: '#fff', borderRadius: 20,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div style={{ height: 4, background: `linear-gradient(to right, ${article.color}, ${article.color}88)` }} />
                <div style={{ padding: '24px 24px 20px' }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                    color: article.color, background: `${article.color}12`,
                    padding: '3px 10px', borderRadius: 99, display: 'inline-block', marginBottom: 14,
                  }}>{article.cat}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', lineHeight: 1.4, marginBottom: 10 }}>{article.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65, marginBottom: 18 }}>{article.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#CBD5E1' }}>
                    <span>{article.date}</span>
                    <span>{article.time} {lang === 'nl' ? 'min lezen' : 'min read'}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Recruitment ──────────────────────────────────────────── */}
      <section id="social-recruitment" className="section-pad" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#F59E0B', letterSpacing: '0.1em', marginBottom: 10 }}>
              {lang === 'nl' ? 'SOCIAL RECRUITMENT' : 'SOCIAL RECRUITMENT'}
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', maxWidth: 640 }}>
              {lang === 'nl'
                ? 'Uw volgende topmedewerker zit op social media.'
                : 'Your next top employee is on social media.'}
            </h2>
            <p style={{ fontSize: 16, color: '#64748B', marginTop: 14, maxWidth: 560, lineHeight: 1.7 }}>
              {lang === 'nl'
                ? 'Wij bouwen recruitmentcampagnes op LinkedIn en Meta die passief talent bereiken. Persoonlijk, meetbaar en effectief — ook voor kleine vacatures.'
                : 'We build recruitment campaigns on LinkedIn and Meta that reach passive talent. Personal, measurable and effective — even for niche roles.'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              {
                icon: '🎯',
                title: lang === 'nl' ? 'Doelgericht bereik' : 'Targeted reach',
                desc: lang === 'nl' ? 'We targeten op functie, sector, regio en ervaring. Alleen relevante kandidaten.' : 'We target by role, sector, region and experience. Only relevant candidates.',
              },
              {
                icon: '✍️',
                title: lang === 'nl' ? 'Sterke vacatureteksten' : 'Compelling copy',
                desc: lang === 'nl' ? 'Authentieke teksten die kandidaten aanspreken. Geen standaard jip-en-janneke-teksten.' : 'Authentic copy that resonates with candidates. No generic HR boilerplate.',
              },
              {
                icon: '📊',
                title: lang === 'nl' ? 'Volledige rapportage' : 'Full reporting',
                desc: lang === 'nl' ? 'U ziet wat werkt: bereik, klikken, sollicitaties en kosten per kandidaat.' : 'You see what works: reach, clicks, applications and cost per candidate.',
              },
              {
                icon: '⚡',
                title: lang === 'nl' ? 'Snel live' : 'Live fast',
                desc: lang === 'nl' ? 'Van briefing tot actieve campagne in 3 werkdagen. Geen maandenlange trajecten.' : 'From briefing to live campaign in 3 working days. No multi-month processes.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 16,
                  padding: '24px 22px',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <a href="mailto:hello@groupany.nl"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 10,
                background: '#F59E0B', color: '#fff',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}
            >
              {lang === 'nl' ? 'Recruitment campagne starten' : 'Start recruitment campaign'} <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', marginBottom: 10 }}>
              FAQ
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              {lang === 'nl' ? 'Veelgestelde vragen' : 'Frequently asked questions'}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {(lang === 'nl' ? [
              { q: 'Wat kost een website laten bouwen?', a: 'Een zakelijke website begint bij €1.495. De prijs hangt af van het aantal pagina’s, functionaliteiten en integraties. We werken altijd met een vaste prijs — geen verrassingen achteraf. U ontvangt een helder voorstel vóór we beginnen.' },
              { q: 'Hoe snel kan mijn website online zijn?', a: 'Een standaard zakelijke website leveren wij op in 2–3 weken. Een webshop of maatwerkapplicatie duurt 4–8 weken afhankelijk van de complexiteit. We geven altijd een heldere planning vóór aanvang.' },
              { q: 'Werken jullie ook voor kleine bedrijven en zzp’ers?', a: 'Absoluut. We werken voor eenmanszaken, mkb-bedrijven en snelgroeiende scale-ups. Onze aanpak schaalt mee met uw situatie en budget.' },
              { q: 'Wat houdt Social Recruitment precies in?', a: 'We bouwen gerichte advertentiecampagnes op LinkedIn en Meta om kandidaten te bereiken die niet actief zoeken. Van vacaturetekst en targeting tot rapportage en kandidaatflow — u hoeft er niets voor te doen.' },
              { q: 'Kan ik mijn website later zelf aanpassen?', a: 'Ja. We bouwen uw website op een systeem dat u zelf kunt beheren, of we dragen het onderhoud — dat is uw keuze. We geven altijd een korte training mee bij oplevering.' },
              { q: 'Wat als ik niet tevreden ben?', a: 'We werken in iteraties en u ziet de voortgang gedurende het hele traject. Ontevreden zonder geldige reden is bij ons niet voorgekomen — maar we bieden altijd herziening aan als iets niet naar wens is.' },
            ] : [
              { q: 'What does a website cost?', a: 'A professional business website starts at €1,495. The price depends on the number of pages, features and integrations. We always work with a fixed price — no surprises. You receive a clear proposal before we start.' },
              { q: 'How quickly can my website go live?', a: 'A standard business website we deliver in 2–3 weeks. A webshop or custom application takes 4–8 weeks depending on complexity. We always provide a clear timeline before starting.' },
              { q: 'Do you work with small businesses and freelancers?', a: 'Absolutely. We work with sole traders, SMBs and fast-growing scale-ups. Our approach scales with your situation and budget.' },
              { q: 'What exactly is Social Recruitment?', a: 'We build targeted advertising campaigns on LinkedIn and Meta to reach candidates who are not actively searching. From vacancy copy and targeting to reporting and candidate flow — you don’t need to do anything.' },
              { q: 'Can I update my website myself later?', a: 'Yes. We build your website on a system you can manage yourself, or we can handle maintenance — your choice. We always include a short handover training on delivery.' },
              { q: 'What if I am not satisfied?', a: 'We work in iterations and you see progress throughout the entire project. We have never had a genuinely unsatisfied client — but we always offer revision if something is not to your satisfaction.' },
            ]).map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section id="contact" className="section-pad-sm" style={{
        background: 'linear-gradient(145deg, #0B1120 0%, #0F1E3A 50%, #0B1120 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Orbs */}
        <div style={{
          position: 'absolute', top: '-20%', left: '30%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', right: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '64px 48px',
              background: 'rgba(255,255,255,0.055)',
              backdropFilter: 'blur(36px) saturate(180%)',
              WebkitBackdropFilter: 'blur(36px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 28,
              boxShadow: '0 32px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
            }}
          >
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 14, letterSpacing: '-0.02em' }}>
              {t.cta.title}
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', marginBottom: 36, lineHeight: 1.7 }}>
              {t.cta.sub}
            </p>
            <a href="mailto:hello@groupany.nl"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                padding: '15px 34px', borderRadius: 12,
                background: '#2563EB', color: '#fff',
                fontSize: 16, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(37,99,235,0.45)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,99,235,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.45)' }}
            >
              {t.cta.btn} <IconArrow />
            </a>
            <p style={{ marginTop: 22, fontSize: 13, color: 'rgba(255,255,255,0.32)' }}>
              {t.cta.emailLabel}{' '}
              <a href="mailto:hello@groupany.nl" style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontWeight: 600 }}>
                hello@groupany.nl
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer style={{ background: '#080E1C', padding: '64px 24px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid-footer">
            {/* Brand */}
            <div className="footer-brand">
              <div style={{ marginBottom: 16 }}>
                <img src="/logo-black.png" alt="Groupany" style={{ height: 26, width: 'auto', filter: 'invert(1) brightness(2)' }} />
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.72, maxWidth: 230 }}>
                {t.footer.tagline}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: 18 }}>
                {t.footer.services.title}
              </h4>
              {t.footer.services.items.map(item => (
                <a key={item} href="#diensten"
                  style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.52)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.52)')}
                >{item}</a>
              ))}
            </div>

            {/* Company */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: 18 }}>
                {t.footer.company.title}
              </h4>
              {t.footer.company.items.map(item => (
                <a key={item} href={
                  item === 'Blog' || item === 'Blog' ? '/blog' :
                  item === 'Cases' ? '/cases' :
                  item === 'Vacatures' || item === 'Vacancies' ? '#' : '#'
                }
                  style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.52)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.52)')}
                >{item}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: 18 }}>
                {t.footer.contact.title}
              </h4>
              <a href="mailto:hello@groupany.nl"
                style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.52)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.52)')}
              >{t.footer.contact.email}</a>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.32)' }}>{t.footer.contact.city}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)', marginTop: 6 }}>{t.footer.contact.kvk}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)', marginTop: 2 }}>{t.footer.contact.btw}</p>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 26, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)' }}>{t.footer.copy}</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {t.footer.links.map(l => (
                <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
