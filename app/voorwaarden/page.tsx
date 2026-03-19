'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VoorwaardenPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'clamp(8rem, 16vw, 12rem)' }}>
        <div className="container-narrow" style={{ paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
          <h1 className="display-lg" style={{ marginBottom: '2.5rem' }}>Algemene Voorwaarden</h1>
          <div className="flex flex-col gap-6 body-md">
            <p>
              Door gebruik te maken van groupany.nl gaat u akkoord met deze voorwaarden. Groupany biedt informatie en diensten aan op een as-is basis.
            </p>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>Gebruik van deze site</h2>
            <p>
              De inhoud van deze site is voor informatieve doeleinden. Alle inhoud is copyright Groupany 2026.
            </p>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>Contact</h2>
            <p>
              Vragen? Mail ons op{' '}
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
