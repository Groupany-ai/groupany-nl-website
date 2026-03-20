'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Lang = 'nl' | 'en'

const ARTICLES = {
  nl: [
    {
      slug: 'social-recruitment-zo-vindt-u-het-beste-talent',
      cat: 'Recruitment',
      color: '#F59E0B',
      title: 'Social recruitment: zo vindt u in 2026 het beste talent via LinkedIn en Meta',
      excerpt: 'Passief talent bereik je niet via traditionele vacaturesites. We laten zien hoe gerichte social media campagnes de juiste kandidaten aantrekken — sneller, goedkoper en persoonlijker dan je denkt.',
      date: 'Mrt 2026',
      time: '5',
      type: 'Gids',
    },
    {
      slug: 'ai-website-resultaten-mkb-gids',
      cat: 'Technologie',
      color: '#2563EB',
      title: 'Hoe AI uw website-resultaten verbetert: een praktische gids voor mkb-ondernemers',
      excerpt: 'AI is niet meer voorbehouden aan grote corporates. We laten zien welke AI-tools uw website sneller, slimmer en winstgevender maken — en hoe u er vandaag nog mee kunt beginnen.',
      date: 'Mrt 2026',
      time: '6',
      type: 'Gids',
    },
    {
      slug: 'emailmarketing-lokale-ondernemers',
      cat: 'Marketing',
      color: '#8B5CF6',
      title: 'E-mailmarketing voor lokale ondernemers: meer klanten met minder moeite',
      excerpt: 'E-mail heeft het hoogste rendement van alle marketingkanalen. Wij laten zien hoe mkb-bedrijven met een eenvoudige aanpak bestaande klanten activeren en nieuwe klanten binnenhalen.',
      date: 'Mrt 2026',
      time: '4',
      type: 'Artikel',
    },
    {
      slug: 'waarom-uw-website-meer-is-dan-een-visitekaartje',
      cat: 'Websites',
      color: '#2563EB',
      title: 'Waarom uw website meer is dan een digitaal visitekaartje',
      excerpt: 'Een professionele website is uw beste verkoper die 24/7 werkt. We laten zien hoe u er het maximale uithaalt en waarom dit de basis is van elke succesvolle digitale strategie.',
      date: 'Feb 2026',
      time: '4',
      type: 'Artikel',
    },
    {
      slug: 'google-ads-voor-mkb-zo-werkt-het',
      cat: 'Marketing',
      color: '#8B5CF6',
      title: 'Google Ads voor MKB: zo haalt u meer uit uw budget',
      excerpt: 'Veel mkb-bedrijven verspillen budget met slecht geconfigureerde Google Ads campagnes. Dit zijn de drie fouten die we het vaakst zien — en hoe u ze vermijdt.',
      date: 'Feb 2026',
      time: '5',
      type: 'Gids',
    },
    {
      slug: 'maatwerksoftware-wanneer-loont-het',
      cat: 'Software',
      color: '#10B981',
      title: 'Maatwerksoftware: wanneer loont de investering?',
      excerpt: 'Off-the-shelf software heeft limieten. We helpen u bepalen wanneer maatwerk de betere keuze is voor uw bedrijfsprocessen — en wanneer niet.',
      date: 'Feb 2026',
      time: '6',
      type: 'Analyse',
    },
    {
      slug: 'seo-voor-lokale-bedrijven-complete-gids',
      cat: 'Marketing',
      color: '#8B5CF6',
      title: 'SEO voor lokale bedrijven: de complete gids voor 2026',
      excerpt: 'Lokale SEO is de meest effectieve manier voor mkb-bedrijven om zichtbaar te worden. We beschrijven stap voor stap hoe u bovenaan in Google komt voor uw regio.',
      date: 'Feb 2026',
      time: '8',
      type: 'Gids',
    },
    {
      slug: 'webshop-laten-bouwen-alles-wat-u-weten-moet',
      cat: 'Websites',
      color: '#2563EB',
      title: 'Webshop laten bouwen: alles wat u moet weten in 2026',
      excerpt: 'Van platform keuze tot conversie-optimalisatie. Een complete gids voor ondernemers die een webshop willen laten bouwen zonder verrassingen.',
      date: 'Feb 2026',
      time: '7',
      type: 'Gids',
    },
    {
      slug: 'automatisering-voor-mkb-quick-wins',
      cat: 'Software',
      color: '#10B981',
      title: '5 automatiseringen die elke mkb-ondernemer zou moeten hebben',
      excerpt: 'Slimme automatisering bespaart u uren per week. We beschrijven de vijf meest impactvolle quick wins die u zonder grote investering kunt implementeren.',
      date: 'Feb 2026',
      time: '5',
      type: 'Artikel',
    },
  ],
  en: [
    {
      slug: 'social-recruitment-zo-vindt-u-het-beste-talent',
      cat: 'Recruitment',
      color: '#F59E0B',
      title: 'Social recruitment: how to find the best talent in 2026 via LinkedIn and Meta',
      excerpt: "Passive talent doesn't browse job boards. We show how targeted social media campaigns attract the right candidates — faster, cheaper and more personal than you'd think.",
      date: 'Mar 2026',
      time: '5',
      type: 'Guide',
    },
    {
      slug: 'ai-website-resultaten-mkb-gids',
      cat: 'Technology',
      color: '#2563EB',
      title: 'How AI improves your website results: a practical guide for SMB owners',
      excerpt: "AI is no longer reserved for large corporates. We show which AI tools make your website faster, smarter and more profitable — and how to start today.",
      date: 'Mar 2026',
      time: '6',
      type: 'Guide',
    },
    {
      slug: 'emailmarketing-lokale-ondernemers',
      cat: 'Marketing',
      color: '#8B5CF6',
      title: 'Email marketing for local businesses: more customers with less effort',
      excerpt: "Email has the highest ROI of all marketing channels. We show how SMB businesses use a simple approach to reactivate existing customers and win new ones.",
      date: 'Mar 2026',
      time: '4',
      type: 'Article',
    },
    {
      slug: 'waarom-uw-website-meer-is-dan-een-visitekaartje',
      cat: 'Websites',
      color: '#2563EB',
      title: 'Why your website is more than a digital business card',
      excerpt: 'A professional website is your best salesperson working 24/7. We show you how to get the most out of it and why this is the foundation of every successful digital strategy.',
      date: 'Feb 2026',
      time: '4',
      type: 'Article',
    },
    {
      slug: 'google-ads-voor-mkb-zo-werkt-het',
      cat: 'Marketing',
      color: '#8B5CF6',
      title: 'Google Ads for SMBs: getting more from your budget',
      excerpt: 'Many SMB companies waste budget on poorly configured Google Ads campaigns. These are the three mistakes we see most often — and how to avoid them.',
      date: 'Feb 2026',
      time: '5',
      type: 'Guide',
    },
    {
      slug: 'maatwerksoftware-wanneer-loont-het',
      cat: 'Software',
      color: '#10B981',
      title: 'Custom software: when does the investment pay off?',
      excerpt: "Off-the-shelf software has limits. We help you determine when custom development is the better choice for your business processes — and when it isn't.",
      date: 'Feb 2026',
      time: '6',
      type: 'Analysis',
    },
    {
      slug: 'seo-voor-lokale-bedrijven-complete-gids',
      cat: 'Marketing',
      color: '#8B5CF6',
      title: 'SEO for local businesses: the complete guide for 2026',
      excerpt: 'Local SEO is the most effective way for SMB companies to become visible. We describe step by step how to get to the top of Google for your region.',
      date: 'Feb 2026',
      time: '8',
      type: 'Guide',
    },
    {
      slug: 'webshop-laten-bouwen-alles-wat-u-weten-moet',
      cat: 'Websites',
      color: '#2563EB',
      title: 'Building a webshop: everything you need to know in 2026',
      excerpt: 'From platform choice to conversion optimization. A complete guide for entrepreneurs who want to build a webshop without surprises.',
      date: 'Feb 2026',
      time: '7',
      type: 'Guide',
    },
    {
      slug: 'automatisering-voor-mkb-quick-wins',
      cat: 'Software',
      color: '#10B981',
      title: '5 automations every SMB entrepreneur should have',
      excerpt: 'Smart automation saves you hours per week. We describe the five most impactful quick wins you can implement without major investment.',
      date: 'Feb 2026',
      time: '5',
      type: 'Article',
    },
  ],
}

export default function BlogPage() {
  const [lang, setLang] = useState<Lang>('nl')
  const [filter, setFilter] = useState('Alles')

  useEffect(() => {
    const userLang = navigator.language?.startsWith('en') ? 'en' : 'nl'
    setLang(userLang as Lang)
  }, [])

  const articles = ARTICLES[lang]
  const cats = lang === 'nl' ? ['Alles', 'Websites', 'Marketing', 'Software'] : ['All', 'Websites', 'Marketing', 'Software']
  const activeAll = cats[0]
  const filtered = filter === activeAll ? articles : articles.filter(a => a.cat === filter)

  return (
    <div style={{ minHeight: '100vh', background: '#FAFBFF', fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif' }}>
      {/* Nav */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', paddingTop: 16, paddingLeft: 24, paddingRight: 24 }}>
        <nav style={{
          width: '100%', maxWidth: 1200,
          background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(226,232,240,0.8)',
          borderRadius: 16, padding: '0 24px', height: 56,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          <a href="/" style={{ fontWeight: 800, fontSize: 18, color: '#0F172A', textDecoration: 'none', letterSpacing: '-0.02em' }}>Groupany</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="/#diensten" style={{ fontSize: 14, color: '#64748B', textDecoration: 'none', padding: '6px 14px', borderRadius: 8, fontWeight: 500 }}>
              {lang === 'nl' ? 'Diensten' : 'Services'}
            </a>
            <a href="/#werkwijze" style={{ fontSize: 14, color: '#64748B', textDecoration: 'none', padding: '6px 14px', borderRadius: 8, fontWeight: 500 }}>
              {lang === 'nl' ? 'Werkwijze' : 'Approach'}
            </a>
            <a href="/blog" style={{ fontSize: 14, color: '#2563EB', textDecoration: 'none', padding: '6px 14px', borderRadius: 8, fontWeight: 700, background: 'rgba(37,99,235,0.06)' }}>Blog</a>
            <a href="/#contact" style={{
              fontSize: 14, fontWeight: 700, color: '#fff',
              background: '#2563EB', padding: '8px 18px', borderRadius: 9,
              textDecoration: 'none', marginLeft: 8,
            }}>
              {lang === 'nl' ? 'Gratis gesprek' : 'Free call'}
            </a>
          </div>
        </nav>
      </header>

      <main style={{ paddingTop: 100 }}>
        {/* Header */}
        <section style={{ padding: '64px 24px 48px', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', marginBottom: 14 }}>
              {lang === 'nl' ? 'KENNISBANK' : 'KNOWLEDGE BASE'}
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: 18, lineHeight: 1.1 }}>
              {lang === 'nl' ? 'Praktische kennis voor ambitieuze ondernemers' : 'Practical knowledge for ambitious entrepreneurs'}
            </h1>
            <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.72 }}>
              {lang === 'nl'
                ? 'Geen jargon. Geen verkooppraatjes. Alleen eerlijke inzichten over websites, software en marketing die werken.'
                : 'No jargon. No sales talk. Just honest insights about websites, software and marketing that work.'
              }
            </p>
          </motion.div>
        </section>

        {/* Featured article */}
        {articles[0] && (
          <section style={{ padding: '0 24px 48px', maxWidth: 1200, margin: '0 auto' }}>
            <motion.a
              href={`/blog/${articles[0].slug}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'block', textDecoration: 'none',
                background: 'linear-gradient(145deg, #0B1120 0%, #0F1E3A 100%)',
                borderRadius: 24, padding: '48px',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.16)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: '-20%', right: '-10%', width: 400, height: 400,
                background: 'radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)',
                filter: 'blur(40px)', pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                    color: articles[0].color, background: `${articles[0].color}20`,
                    padding: '4px 12px', borderRadius: 99,
                  }}>{articles[0].cat}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                    {lang === 'nl' ? 'Uitgelicht' : 'Featured'}
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14, maxWidth: 560, lineHeight: 1.2 }}>
                  {articles[0].title}
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.72, maxWidth: 520, marginBottom: 24 }}>
                  {articles[0].excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: '#2563EB' }}>
                  {lang === 'nl' ? 'Lees artikel' : 'Read article'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.a>
          </section>
        )}

        {/* Filter tabs */}
        <section style={{ padding: '0 24px 32px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {cats.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 18px', borderRadius: 99, fontSize: 14, fontWeight: 600,
                  cursor: 'pointer', border: '1.5px solid',
                  background: filter === cat ? '#2563EB' : 'transparent',
                  color: filter === cat ? '#fff' : '#64748B',
                  borderColor: filter === cat ? '#2563EB' : '#E2E8F0',
                  transition: 'all 0.15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Article grid */}
        <section style={{ padding: '0 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {filtered.map((article, i) => (
              <motion.a
                key={article.slug}
                href={`/blog/${article.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: '#fff', borderRadius: 20,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: 4, background: `linear-gradient(to right, ${article.color}, ${article.color}77)` }} />
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                      color: article.color, background: `${article.color}12`,
                      padding: '3px 10px', borderRadius: 99,
                    }}>{article.cat}</span>
                    <span style={{ fontSize: 11, color: '#CBD5E1', fontWeight: 600 }}>{article.type}</span>
                  </div>
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: '#0F172A', lineHeight: 1.38, marginBottom: 10, letterSpacing: '-0.01em' }}>{article.title}</h2>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65, marginBottom: 18 }}>{article.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: '#CBD5E1' }}>
                    <span>{article.date}</span>
                    <span style={{ color: article.color, fontWeight: 700 }}>
                      {article.time} min {lang === 'nl' ? 'lezen' : 'read'} →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: '#0F172A', padding: '40px 24px', textAlign: 'center' }}>
        <a href="/" style={{ fontWeight: 800, fontSize: 18, color: '#fff', textDecoration: 'none' }}>Groupany</a>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 12 }}>© 2026 Groupany. Alle rechten voorbehouden.</p>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 24 }}>
          <a href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
          <a href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</a>
          <a href="/#contact" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Contact</a>
        </div>
      </footer>
    </div>
  )
}
