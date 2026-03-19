'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'clamp(8rem, 16vw, 12rem)' }}>
        <div className="container-narrow" style={{ paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
          <h1 className="display-lg" style={{ marginBottom: '2.5rem' }}>Privacybeleid</h1>
          <div className="flex flex-col gap-6 body-md">
            <p>
              Groupany (&quot;wij&quot;, &quot;ons&quot;) respecteert uw privacy. Dit beleid legt uit hoe wij uw informatie verzamelen, gebruiken en beschermen wanneer u groupany.nl bezoekt.
            </p>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>Gegevens die wij verzamelen</h2>
            <p>
              Wij verzamelen alleen informatie die u vrijwillig verstrekt via e-mail of contactformulieren. Wij gebruiken geen tracking pixels of advertentiecookies van derden.
            </p>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>Contact</h2>
            <p>
              Vragen over dit beleid? Mail ons op{' '}
              <a href="mailto:info@groupany.nl" style={{ color: 'var(--accent)' }}>info@groupany.nl</a>.
            </p>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
              Groupany B.V. &middot; Keizersgracht 520, 1017 EK Amsterdam &middot; KVK 93.847.291
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
