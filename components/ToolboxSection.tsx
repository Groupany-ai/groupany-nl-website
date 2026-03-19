'use client'

import { useTranslation } from '@/lib/i18n/useTranslation'
import { useState, useEffect, useRef } from 'react'

/* ── Tool data with simple-icons slugs ────────────────────────── */
interface Tool {
  name: string
  slug: string
  color: string
  desc: string
  hasLogo?: boolean
}

/* ── All tools organized by category ────────────────────────── */
const ALL_CATEGORIES: { name: string; color: string; tools: Tool[] }[] = [
  {
    name: 'Development',
    color: '#2563eb',
    tools: [
      { name: 'GitHub', slug: 'github', color: '#181717', desc: 'Version control & CI/CD', hasLogo: true },
      { name: 'Docker', slug: 'docker', color: '#2496ED', desc: 'Containerization', hasLogo: true },
      { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1', desc: 'Database', hasLogo: true },
      { name: 'Redis', slug: 'redis', color: '#DC382D', desc: 'Caching & queues', hasLogo: true },
      { name: 'Prisma', slug: 'prisma', color: '#2D3748', desc: 'ORM', hasLogo: true },
      { name: 'Next.js', slug: 'nextdotjs', color: '#000000', desc: 'React framework', hasLogo: true },
      { name: 'React', slug: 'react', color: '#61DAFB', desc: 'UI library', hasLogo: true },
      { name: 'TypeScript', slug: 'typescript', color: '#3178C6', desc: 'Type-safe JavaScript', hasLogo: true },
      { name: 'Node.js', slug: 'nodedotjs', color: '#339933', desc: 'Server-side JS', hasLogo: true },
      { name: 'Python', slug: 'python', color: '#3776AB', desc: 'Scripting & ML', hasLogo: true },
      { name: 'Kubernetes', slug: 'kubernetes', color: '#326CE5', desc: 'Container orchestration', hasLogo: true },
      { name: 'Vercel', slug: 'vercel', color: '#000000', desc: 'Deployment', hasLogo: true },
      { name: 'GraphQL', slug: 'graphql', color: '#E10098', desc: 'API query language', hasLogo: true },
      { name: 'MongoDB', slug: 'mongodb', color: '#47A248', desc: 'Document database', hasLogo: true },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06B6D4', desc: 'Utility-first CSS', hasLogo: true },
      { name: 'Jest', slug: 'jest', color: '#C21325', desc: 'Testing framework', hasLogo: true },
    ],
  },
  {
    name: 'Marketing & Sales',
    color: '#059669',
    tools: [
      { name: 'Google Analytics', slug: 'googleanalytics', color: '#E37400', desc: 'Web analytics', hasLogo: true },
      { name: 'Google Ads', slug: 'googleads', color: '#4285F4', desc: 'Paid search', hasLogo: true },
      { name: 'Meta Ads', slug: 'meta', color: '#0081FB', desc: 'Social advertising', hasLogo: true },
      { name: 'LinkedIn', slug: 'linkedin', color: '#0A66C2', desc: 'B2B networking', hasLogo: true },
      { name: 'Mailchimp', slug: 'mailchimp', color: '#FFE01B', desc: 'Email marketing', hasLogo: true },
      { name: 'HubSpot', slug: 'hubspot', color: '#FF7A59', desc: 'CRM & automation', hasLogo: true },
      { name: 'SEMrush', slug: 'semrush', color: '#FF642D', desc: 'SEO & competitive intel', hasLogo: true },
      { name: 'Ahrefs', slug: 'ahrefs', color: '#FF8C00', desc: 'Backlink analysis', hasLogo: false },
      { name: 'Salesforce', slug: 'salesforce', color: '#00A1E0', desc: 'Enterprise CRM', hasLogo: false },
      { name: 'Intercom', slug: 'intercom', color: '#6AFDEF', desc: 'Customer messaging', hasLogo: true },
      { name: 'Hotjar', slug: 'hotjar', color: '#FF3C00', desc: 'Heatmaps & recordings', hasLogo: true },
      { name: 'Mixpanel', slug: 'mixpanel', color: '#7856FF', desc: 'Product analytics', hasLogo: true },
    ],
  },
  {
    name: 'Infrastructure & Cloud',
    color: '#d97706',
    tools: [
      { name: 'Cloudflare', slug: 'cloudflare', color: '#F38020', desc: 'CDN & security', hasLogo: true },
      { name: 'Hetzner', slug: 'hetzner', color: '#D50C2D', desc: 'European hosting', hasLogo: true },
      { name: 'DigitalOcean', slug: 'digitalocean', color: '#0080FF', desc: 'Cloud infrastructure', hasLogo: true },
      { name: 'Sentry', slug: 'sentry', color: '#362D59', desc: 'Error tracking', hasLogo: true },
      { name: 'Datadog', slug: 'datadog', color: '#632CA6', desc: 'Monitoring', hasLogo: true },
      { name: 'Terraform', slug: 'terraform', color: '#844FBA', desc: 'Infrastructure as code', hasLogo: true },
      { name: 'Nginx', slug: 'nginx', color: '#009639', desc: 'Web server & proxy', hasLogo: true },
      { name: "Let's Encrypt", slug: 'letsencrypt', color: '#003A70', desc: 'SSL certificates', hasLogo: true },
      { name: 'Grafana', slug: 'grafana', color: '#F46800', desc: 'Dashboards & alerts', hasLogo: true },
    ],
  },
  {
    name: 'AI & Machine Learning',
    color: '#8b5cf6',
    tools: [
      { name: 'Claude', slug: 'anthropic', color: '#D97757', desc: 'AI reasoning', hasLogo: true },
      { name: 'OpenAI', slug: 'openai', color: '#412991', desc: 'Language models', hasLogo: true },
      { name: 'LangChain', slug: 'langchain', color: '#1C3C3C', desc: 'LLM framework', hasLogo: true },
      { name: 'Qdrant', slug: 'qdrant', color: '#DC244C', desc: 'Vector database', hasLogo: false },
      { name: 'Pinecone', slug: 'pinecone', color: '#000000', desc: 'Vector search', hasLogo: false },
      { name: 'Hugging Face', slug: 'huggingface', color: '#FFD21E', desc: 'Model hub', hasLogo: true },
      { name: 'OpenRouter', slug: 'openrouter', color: '#6366F1', desc: 'Model routing', hasLogo: false },
      { name: 'Ollama', slug: 'ollama', color: '#000000', desc: 'Local models', hasLogo: true },
      { name: 'Replicate', slug: 'replicate', color: '#000000', desc: 'Model hosting', hasLogo: true },
      { name: 'ElevenLabs', slug: 'elevenlabs', color: '#000000', desc: 'Voice AI', hasLogo: true },
    ],
  },
  {
    name: 'Communication & Collaboration',
    color: '#ec4899',
    tools: [
      { name: 'Slack', slug: 'slack', color: '#4A154B', desc: 'Team messaging', hasLogo: true },
      { name: 'Discord', slug: 'discord', color: '#5865F2', desc: 'Community', hasLogo: true },
      { name: 'Twilio', slug: 'twilio', color: '#F22F46', desc: 'SMS & calls', hasLogo: true },
      { name: 'Notion', slug: 'notion', color: '#000000', desc: 'Documentation', hasLogo: true },
      { name: 'Linear', slug: 'linear', color: '#5E6AD2', desc: 'Project management', hasLogo: true },
      { name: 'Figma', slug: 'figma', color: '#F24E1E', desc: 'Design', hasLogo: true },
      { name: 'Miro', slug: 'miro', color: '#FFD02F', desc: 'Whiteboarding', hasLogo: true },
      { name: 'Zoom', slug: 'zoom', color: '#0B5CFF', desc: 'Video conferencing', hasLogo: true },
      { name: 'Google Workspace', slug: 'google', color: '#4285F4', desc: 'Productivity suite', hasLogo: false },
      { name: 'Microsoft Teams', slug: 'microsoftteams', color: '#6264A7', desc: 'Enterprise comms', hasLogo: false },
    ],
  },
  {
    name: 'Finance & Legal',
    color: '#0891b2',
    tools: [
      { name: 'Stripe', slug: 'stripe', color: '#635BFF', desc: 'Payments', hasLogo: true },
      { name: 'Mollie', slug: 'mollie', color: '#000000', desc: 'EU payments', hasLogo: false },
      { name: 'QuickBooks', slug: 'quickbooks', color: '#2CA01C', desc: 'Accounting', hasLogo: true },
      { name: 'Xero', slug: 'xero', color: '#13B5EA', desc: 'Bookkeeping', hasLogo: true },
      { name: 'DocuSign', slug: 'docusign', color: '#FFCD00', desc: 'E-signatures', hasLogo: false },
      { name: 'Wise', slug: 'wise', color: '#9FE870', desc: 'International transfers', hasLogo: true },
      { name: 'PayPal', slug: 'paypal', color: '#003087', desc: 'Online payments', hasLogo: true },
    ],
  },
  {
    name: 'Security & Compliance',
    color: '#dc2626',
    tools: [
      { name: 'Snyk', slug: 'snyk', color: '#4C4A73', desc: 'Dependency scanning', hasLogo: true },
      { name: 'SonarQube', slug: 'sonarqube', color: '#4E9BCD', desc: 'Code quality', hasLogo: false },
      { name: 'Vault', slug: 'vault', color: '#FFEC6E', desc: 'Secrets management', hasLogo: true },
      { name: 'Okta', slug: 'okta', color: '#007DC1', desc: 'Identity management', hasLogo: true },
      { name: 'Auth0', slug: 'auth0', color: '#EB5424', desc: 'Authentication', hasLogo: true },
      { name: 'Cloudflare WAF', slug: 'cloudflare', color: '#F38020', desc: 'Web application firewall', hasLogo: true },
      { name: 'CrowdStrike', slug: 'crowdstrike', color: '#FF0000', desc: 'Endpoint protection', hasLogo: false },
      { name: 'Palo Alto', slug: 'paloaltonetworks', color: '#F04E23', desc: 'Network security', hasLogo: true },
    ],
  },
]

/* Compute total tool count */
const TOTAL_TOOLS = ALL_CATEGORIES.reduce((sum, cat) => sum + cat.tools.length, 0)

/* Build orbital ring data from categories - rotating subset */
function buildOrbitTools(): { radius: number; speed: number; direction: 1 | -1; allTools: Tool[] }[] {
  const ring1Tools = [...ALL_CATEGORIES[0].tools.slice(0, 4), ...ALL_CATEGORIES[1].tools.slice(0, 4)]
  const ring2Tools = [...ALL_CATEGORIES[2].tools.slice(0, 4), ...ALL_CATEGORIES[3].tools.slice(0, 4)]
  const ring3Tools = [...ALL_CATEGORIES[4].tools.slice(0, 4), ...ALL_CATEGORIES[5].tools.slice(0, 2), ...ALL_CATEGORIES[6].tools.slice(0, 2)]

  return [
    { radius: 120, speed: 60, direction: 1, allTools: ring1Tools },
    { radius: 200, speed: 80, direction: -1, allTools: ring2Tools },
    { radius: 280, speed: 100, direction: 1, allTools: ring3Tools },
  ]
}

const ORBIT_DATA = buildOrbitTools()

/* Fallback letter icon when no SVG available */
function FallbackIcon({ name, color }: { name: string; color: string }) {
  const letter = name.charAt(0).toUpperCase()
  return (
    <span
      className="orbital-tool-fallback"
      style={{ color }}
    >
      {letter}
    </span>
  )
}

export default function ToolboxSection() {
  const { t } = useTranslation()
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <section className="section-py section-alt">
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="feature-eyebrow reveal" style={{ textAlign: 'center' }}>
            {t('toolbox.eyebrow')}
          </p>
          <h2
            className="feature-h2 reveal reveal-delay-1"
            style={{ textAlign: 'center', margin: '0 auto 8px', maxWidth: 600 }}
          >
            {t('toolbox.headline')}
          </h2>
          <p className="hero-sub reveal reveal-delay-2" style={{ marginBottom: 0 }}>
            {t('toolbox.subline')}
          </p>
        </div>

        {/* Orbital view for desktop */}
        <div className="orbital-container reveal reveal-delay-3">
          {/* Center node */}
          <div className="orbital-center">
            <div className="orbital-center-inner">
              <span>Max</span>
              <small>Agent Hub</small>
            </div>
            <div className="orbital-pulse" />
            <div className="orbital-pulse orbital-pulse-2" />
          </div>

          {/* SVG orbit tracks + connection lines */}
          <svg className="orbital-lines" viewBox="0 0 600 600">
            {ORBIT_DATA.map((orbit, i) => (
              <circle
                key={`ring-${i}`}
                cx="300"
                cy="300"
                r={orbit.radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="3 6"
                opacity="0.2"
              />
            ))}

            {ORBIT_DATA.flatMap((orbit, oi) =>
              orbit.allTools.map((tool, ti) => {
                const angle = ((360 / orbit.allTools.length) * ti - 90) * (Math.PI / 180)
                const x = 300 + orbit.radius * Math.cos(angle)
                const y = 300 + orbit.radius * Math.sin(angle)
                return (
                  <line
                    key={`line-${oi}-${ti}`}
                    x1="300"
                    y1="300"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="2 4"
                    className="orbital-connection-line"
                  />
                )
              })
            )}
          </svg>

          {/* Orbital rings */}
          {ORBIT_DATA.map((orbit, oi) => (
            <div
              key={oi}
              className="orbital-ring"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
                animationDuration: `${orbit.speed}s`,
                animationDirection: orbit.direction === -1 ? 'reverse' : 'normal',
              }}
            >
              {orbit.allTools.map((tool, ti) => {
                const angle = (360 / orbit.allTools.length) * ti
                return (
                  <div
                    key={tool.name}
                    className="orbital-tool"
                    style={{
                      '--tool-angle': `${angle}deg`,
                      '--orbit-radius': `${orbit.radius}px`,
                      '--orbit-speed': `${orbit.speed}s`,
                      '--orbit-dir': orbit.direction === -1 ? 'reverse' : 'normal',
                    } as React.CSSProperties}
                  >
                    <div
                      className={`orbital-tool-dot${hoveredTool === tool.name ? ' orbital-tool-active' : ''}`}
                      data-name={tool.name}
                      data-desc={tool.desc}
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      {tool.hasLogo ? (
                        <img
                          src={`/logos/${tool.slug}.svg`}
                          alt={tool.name}
                          className="orbital-tool-logo"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <FallbackIcon name={tool.name} color={tool.color} />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Mobile grid with real logos — all tools by category */}
        <div className="toolbox-mobile-grid">
          {ALL_CATEGORIES.map((cat, ci) => (
            <div key={cat.name} className={`toolbox-mobile-category reveal reveal-delay-${Math.min(ci + 1, 4)}`}>
              <h3 className="toolbox-mobile-category-name">
                <span className="toolbox-cat-dot" style={{ background: cat.color }} />
                {cat.name}
              </h3>
              <div className="toolbox-mobile-tools">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="toolbox-mobile-tool">
                    <div
                      className="toolbox-mobile-icon"
                      style={{ background: `${tool.color}12` }}
                    >
                      {tool.hasLogo ? (
                        <img
                          src={`/logos/${tool.slug}.svg`}
                          alt={tool.name}
                          className="toolbox-mobile-logo"
                          width={18}
                          height={18}
                        />
                      ) : (
                        <FallbackIcon name={tool.name} color={tool.color} />
                      )}
                    </div>
                    <div className="toolbox-mobile-info">
                      <strong>{tool.name}</strong>
                      <span>{tool.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
