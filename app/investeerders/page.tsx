import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Investeerders',
  description: 'Investeren in Groupany. Digitale dienstverlening met bewezen technologie.',
}

export default function InvesteerdersPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{paddingTop:120, paddingBottom:80}}>
          <div className="container-main" style={{maxWidth:720, textAlign:'center'}}>
            <h1 style={{fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, marginBottom:16}}>Investeerders</h1>
            <p style={{fontSize:'1.125rem', color:'var(--text-secondary)', lineHeight:1.7, marginBottom:40}}>
              Groupany combineert bewezen technologie met digitale dienstverlening. Wij groeien snel en staan altijd open voor gesprekken met gelijkgestemde investeerders.
            </p>
            <p style={{fontSize:'1rem', color:'var(--text-secondary)', lineHeight:1.7, marginBottom:32}}>
              Wij runnen meerdere bedrijven op onze eigen infrastructuur, genereren omzet en bewijzen het model elke dag. Interesse? Laten we praten.
            </p>
            <a href="mailto:investeerders@groupany.nl" className="btn-primary">Neem contact op</a>
            <p style={{marginTop:16, fontSize:'0.875rem', color:'var(--text-tertiary)'}}>investeerders@groupany.nl</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
