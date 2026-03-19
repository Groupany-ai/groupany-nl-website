import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Knowledge Center | Groupany - Insights on AI, Technology & Business',
  description: 'Expert insights, guides, and case studies about building and scaling businesses with AI agents. Software development, marketing, operations.',
  openGraph: {
    title: 'Knowledge Center | Groupany',
    description: 'Expert insights on AI-native business operations.',
    type: 'website',
  },
}

const ARTICLES = [
  {
    title: 'The complete guide to AI agents in business operations',
    excerpt: 'Everything you need to know about deploying AI agents for software development, marketing, and strategy.',
    category: 'Guide',
    slug: 'ai-agents-business-operations',
    readTime: 12,
    date: '2026-03-15',
    image: '/images/article-ai-agents.png',
  },
  {
    title: 'Why we stopped hiring and started deploying',
    excerpt: 'How Groupany runs four companies with a team of six humans and five AI agents.',
    category: 'Behind the scenes',
    slug: 'why-we-stopped-hiring',
    readTime: 8,
    date: '2026-03-12',
    image: '/images/team-abstract.png',
  },
  {
    title: 'Software development in 2026: AI-native from day one',
    excerpt: 'The traditional dev agency model is broken. Here is what is replacing it.',
    category: 'Opinion',
    slug: 'software-development-2026',
    readTime: 6,
    date: '2026-03-10',
    image: '/images/article-software.png',
  },
  {
    title: 'Building a 420K LOC platform with AI agents',
    excerpt: 'A technical deep dive into how Propty is built, tested, and deployed by AI.',
    category: 'Case Study',
    slug: 'propty-case-study',
    readTime: 15,
    date: '2026-03-08',
    image: '/images/article-case-study.png',
  },
  {
    title: 'The real cost of AI vs traditional teams',
    excerpt: 'A transparent comparison of costs, speed, and quality between AI-native and traditional approaches.',
    category: 'Analysis',
    slug: 'cost-ai-vs-traditional',
    readTime: 10,
    date: '2026-03-05',
    image: '/images/article-cost-analysis.png',
  },
  {
    title: 'Marketing automation that actually works',
    excerpt: 'How our AI marketing agent generates leads, writes content, and runs campaigns autonomously.',
    category: 'Guide',
    slug: 'marketing-automation-guide',
    readTime: 9,
    date: '2026-03-01',
    image: '/images/article-marketing.png',
  },
  {
    title: 'What is OpenClaw and why it matters for AI agents',
    excerpt: 'A deep dive into the open-source AI agent framework powering production deployments.',
    category: 'Guide',
    slug: 'what-is-openclaw',
    readTime: 11,
    date: '2026-02-26',
  },
  {
    title: 'The best open source AI tools in 2026',
    excerpt: 'A practical guide to LangChain, Qdrant, Ollama, vLLM, OpenClaw, and more for CTOs building their AI stack.',
    category: 'Guide',
    slug: 'open-source-ai-tools-2026',
    readTime: 13,
    date: '2026-02-22',
  },
  {
    title: 'AI agents vs chatbots: what is the difference and why it matters',
    excerpt: 'A clear explanation of the difference between AI agents and chatbots, with real-world examples.',
    category: 'Explainer',
    slug: 'ai-agents-vs-chatbots',
    readTime: 9,
    date: '2026-02-18',
  },
  {
    title: 'How to build an AI-native company from day one',
    excerpt: 'A practical framework for founders starting new companies with AI-first operations.',
    category: 'Framework',
    slug: 'building-ai-native-company',
    readTime: 12,
    date: '2026-02-14',
  },
  {
    title: 'AI security and compliance: what every business needs to know',
    excerpt: 'GDPR, data handling, credential management, and audit trails for AI-native operations.',
    category: 'Guide',
    slug: 'ai-security-compliance',
    readTime: 11,
    date: '2026-02-10',
  },
  {
    title: 'The future of work: how AI agents are reshaping teams',
    excerpt: 'How AI agents are changing team structures, roles, and the human-AI collaboration model.',
    category: 'Thought Leadership',
    slug: 'future-of-work-ai-agents',
    readTime: 11,
    date: '2026-02-06',
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
          <span className="article-read-time">{readTime} min read</span>
        </div>
        <h3 className="article-card-title">{title}</h3>
        <p className="article-card-excerpt">{excerpt}</p>
        <Link href={`/insights/${slug}`} className="article-link">
          Read more
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
            <h1 className="insights-h1">Knowledge Center</h1>
            <p className="insights-sub">
              Insights, guides, and case studies about building and scaling
              businesses with technology.
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
                <img src="/images/article-case-study.png" alt="Propty case study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="featured-content">
                <span className="article-category">Case Study</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, margin: '12px 0', lineHeight: 1.3 }}>
                  How we manage a 420,000-line codebase with AI agents
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
                  A deep dive into how Propty, a property management platform, is
                  built and maintained by AI-native teams.
                </p>
                <Link href="/inzichten/propty-case-study" className="article-link">
                  Read case study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="section-py section-alt">
          <div className="container-main">
            <h2 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 700, marginBottom: 32 }}>
              Latest Insights
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
              Stay informed
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
              Monthly insights on AI, technology, and business operations. No spam.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
