import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vacatures',
  description: 'Werken bij Groupany. Word onderdeel van ons team in Amsterdam.',
}

export default function VacaturesPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{paddingTop:120, paddingBottom:80}}>
          <div className="container-main" style={{maxWidth:720, textAlign:'center'}}>
            <h1 style={{fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, marginBottom:16}}>Werken bij Groupany</h1>
            <p style={{fontSize:'1.125rem', color:'var(--text-secondary)', lineHeight:1.7, marginBottom:40}}>
              Wij zijn een klein, snel team gevestigd in Amsterdam. Wij waarderen vakmanschap, autonomie en resultaat boven proces. Als u wilt werken aan de voorhoede van technologie en digitale groei, neem contact op.
            </p>
            <p style={{fontSize:'1rem', color:'var(--text-secondary)', lineHeight:1.7, marginBottom:32}}>
              Of u nu developer, marketeer, ontwerper of strateeg bent, wij horen graag van u.
            </p>
            <a href="mailto:vacatures@groupany.nl" className="btn-primary">Stuur uw verhaal</a>
            <p style={{marginTop:16, fontSize:'0.875rem', color:'var(--text-tertiary)'}}>vacatures@groupany.nl</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
