import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Inzichten | Groupany - Gidsen over marketing, software en groei',
  description: 'Praktische gidsen en artikelen over online marketing, SEO, software op maat, recruitment en procesautomatisering voor het MKB.',
  openGraph: {
    title: 'Inzichten | Groupany',
    description: 'Praktische gidsen over marketing, software en bedrijfsgroei.',
    type: 'website',
  },
}

const ARTICLES = [
  {
    title: 'Software op maat laten bouwen: de complete gids',
    excerpt: 'Alles over maatwerk software: kosten, proces, technologie en tips. Van eerste idee tot live applicatie.',
    category: 'Gids',
    slug: 'software-op-maat',
    readTime: 8,
    date: '2026-03-18',
    image: '/images/article-software-op-maat.png',
  },
  {
    title: 'Professionele website laten maken: wat kost het en wat krijgt u?',
    excerpt: 'Van budget tot technologie: alles wat u moet weten voor een professionele bedrijfswebsite in 2026.',
    category: 'Gids',
    slug: 'website-laten-maken',
    readTime: 7,
    date: '2026-03-17',
    image: '/images/article-website-laten-maken.png',
  },
  {
    title: 'SEO uitbesteden: de complete gids voor bedrijven',
    excerpt: 'Moet u SEO uitbesteden? Wat kost het, wat levert het op en waar let u op bij het kiezen van een SEO bureau?',
    category: 'Gids',
    slug: 'seo-uitbesteden',
    readTime: 8,
    date: '2026-03-16',
    image: '/images/article-seo-uitbesteden.png',
  },
  {
    title: 'Online marketing voor het MKB: de complete gids',
    excerpt: 'Praktische marketinggids voor het MKB. Van SEO en Google Ads tot social media en email marketing.',
    category: 'Gids',
    slug: 'online-marketing-mkb',
    readTime: 8,
    date: '2026-03-15',
    image: '/images/article-online-marketing-mkb.png',
  },
  {
    title: 'Bedrijfsprocessen automatiseren: waar begint u?',
    excerpt: 'Ontdek welke processen u kunt automatiseren, welke tools er zijn en hoeveel tijd en geld u bespaart.',
    category: 'Gids',
    slug: 'processen-automatiseren',
    readTime: 7,
    date: '2026-03-14',
    image: '/images/article-processen-automatiseren.png',
  },
  {
    title: 'Recruitment in 2026: hoe AI de juiste kandidaten vindt',
    excerpt: 'AI verandert recruitment. Ontdek hoe u sneller en goedkoper de juiste mensen vindt zonder traditionele bureaus.',
    category: 'Gids',
    slug: 'recruitment-2026',
    readTime: 7,
    date: '2026-03-13',
    image: '/images/article-recruitment-2026.png',
  },
]

function ArticleCard({ title, excerpt, category, slug, readTime, image }: {
  title: string
  excerpt: string
  category: string
  slug: string
  readTime: number
  date?: string
  image?: string
}) {
  return (
    <article className="article-card">
      <div
        className="article-card-image"
        style={{
          height: 180,
          borderRadius: '12px 12px 0 0',
          overflow: 'hidden',
        }}
      >
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.02))' }} />
        )}
      </div>
      <div className="article-card-body">
        <div className="article-card-meta">
          <span className="article-category">{category}</span>
          <span className="article-read-time">{readTime} min leestijd</span>
        </div>
        <h3 className="article-card-title">{title}</h3>
        <p className="article-card-excerpt">{excerpt}</p>
        <Link href={`/inzichten/${slug}`} className="article-link">
          Lees meer
        </Link>
      </div>
    </article>
  )
}

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="section-py" style={{ paddingTop: 120 }}>
          <div className="container-main">
            <h1 className="insights-h1">Inzichten</h1>
            <p className="insights-sub">
              Praktische gidsen over marketing, software, SEO en bedrijfsgroei.
            </p>
          </div>
        </section>

        {/* Featured article */}
        <section className="section-py">
          <div className="container-main">
            <div className="featured-article">
              <div
                className="featured-image"
                style={{
                  height: 300,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                <img src="/images/article-software-op-maat.png" alt="Software op maat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="featured-content">
                <span className="article-category">Gids</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, margin: '12px 0', lineHeight: 1.3 }}>
                  Software op maat laten bouwen: de complete gids
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
                  Alles over maatwerk software: kosten, proces, technologie en tips.
                  Van eerste idee tot live applicatie.
                </p>
                <Link href="/inzichten/software-op-maat" className="article-link">
                  Lees de gids
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="section-py section-alt">
          <div className="container-main">
            <h2 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 700, marginBottom: 32 }}>
              Alle artikelen
            </h2>
            <div className="articles-grid">
              {ARTICLES.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter signup */}
        <section className="section-py">
          <div className="container-main" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 700, marginBottom: 8 }}>
              Blijf op de hoogte
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
              Maandelijkse inzichten over marketing, technologie en groei. Geen spam.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
