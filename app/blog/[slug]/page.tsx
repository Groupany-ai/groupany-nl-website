import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [
    { slug: 'social-recruitment-zo-vindt-u-het-beste-talent' },
    { slug: 'ai-website-resultaten-mkb-gids' },
    { slug: 'emailmarketing-lokale-ondernemers' },
    { slug: 'waarom-uw-website-meer-is-dan-een-visitekaartje' },
    { slug: 'google-ads-voor-mkb-zo-werkt-het' },
    { slug: 'maatwerksoftware-wanneer-loont-het' },
    { slug: 'seo-voor-lokale-bedrijven-complete-gids' },
    { slug: 'webshop-laten-bouwen-alles-wat-u-weten-moet' },
    { slug: 'automatisering-voor-mkb-quick-wins' },
  ]
}

type ArticleContent = {
  title: string
  cat: string
  color: string
  date: string
  time: string
  excerpt: string
  body: string[][]
}

const ARTICLES: Record<string, ArticleContent> = {
  'waarom-uw-website-meer-is-dan-een-visitekaartje': {
    title: 'Waarom uw website meer is dan een digitaal visitekaartje',
    cat: 'Websites',
    color: '#2563EB',
    date: 'Februari 2026',
    time: '4',
    excerpt: 'Een professionele website is uw beste verkoper die 24/7 werkt. We laten zien hoe u er het maximale uithaalt.',
    body: [
      ['p', 'Veel ondernemers zien hun website nog steeds als een digitaal visitekaartje — iets wat u "moet hebben" maar verder weinig bijdraagt. Die gedachte kost u dagelijks omzet.'],
      ['h2', 'Uw website werkt 24/7 — uw personeel niet'],
      ['p', 'Een professionele website is uw meest hardwerkende medewerker. Terwijl u slaapt, ontvangt uw site bezoekers, beantwoordt vragen, toont uw portfolio en leidt potentiële klanten naar contact. Geen salaris, geen vakantie, geen ziekteverzuim.'],
      ['p', 'Bedrijven met een goed geoptimaliseerde website genereren gemiddeld 3-4 keer meer leads dan bedrijven met een basissite. Dat verschil zit niet in de opmaak — het zit in de structuur, de teksten en de gebruikerservaring.'],
      ['h2', 'Wat een goede website doet'],
      ['ul', 'Vertrouwen wekken in de eerste 3 seconden|Uw unieke meerwaarde helder communiceren|Bezoekers naar een concrete actie leiden (bellen, mailen, aanvragen)|Gevonden worden in Google voor relevante zoekopdrachten|24/7 beschikbaar zijn voor vragen en contact'],
      ['h2', 'De drie grootste fouten die wij zien'],
      ['p', 'Na het bouwen van honderden websites zien we dezelfde fouten keer op keer:'],
      ['ul', 'Te vaag over wat het bedrijf doet: "Wij zijn specialist in totaaloplossingen" zegt niets. Concreet zijn converteert.|Geen duidelijke call-to-action: bezoekers moeten zelf uitzoeken hoe ze contact opnemen.|Niet mobielgeoptimaliseerd: meer dan 60% van uw bezoekers komt via telefoon.'],
      ['h2', 'De investering die zichzelf terugverdient'],
      ['p', 'Een professionele website kost eenmalig tussen de €1.500 en €5.000, afhankelijk van omvang en complexiteit. Eén extra klant per maand dankzij een betere website betaalt die investering terug in het eerste kwartaal.'],
      ['p', 'De vraag is niet of u een goede website kunt betalen. De vraag is of u het kunt veroorloven om het niet te doen.'],
      ['callout', 'Wilt u weten wat een betere website voor uw omzet betekent? Plan een gratis gesprek. We analyseren uw huidige site en geven eerlijk advies.'],
    ],
  },
  'google-ads-voor-mkb-zo-werkt-het': {
    title: 'Google Ads voor MKB: zo haalt u meer uit uw budget',
    cat: 'Marketing',
    color: '#8B5CF6',
    date: 'Februari 2026',
    time: '5',
    excerpt: 'Veel mkb-bedrijven verspillen budget met slecht geconfigureerde Google Ads campagnes. Dit zijn de drie fouten die we het vaakst zien.',
    body: [
      ['p', 'Google Ads is het krachtigste advertentieplatform voor mkb-bedrijven die direct resultaat willen. Maar het is ook het platform waarop het meeste geld verloren gaat door slechte instellingen.'],
      ['h2', 'Waarom Google Ads perfect is voor MKB'],
      ['p', 'In tegenstelling tot SEO ziet u bij Google Ads direct resultaat. U verschijnt bovenaan Google voor exacte zoekopdrachten van mensen die nu op zoek zijn naar uw product of dienst. U betaalt alleen als iemand daadwerkelijk klikt.'],
      ['p', 'Met een budget van €500-€1.500 per maand kunnen mkb-bedrijven effectief adverteren in hun regio en branche — als de campagne goed is ingericht.'],
      ['h2', 'De drie duurste fouten'],
      ['ul', 'Broad match keywords zonder negatieve zoekwoorden: u betaalt voor onrelevante klikken van mensen die u nooit zouden bellen.|Geen conversietracking: zonder meting weet u niet welke campagnes werken. U optimaliseert in het donker.|Te generieke advertentieteksten: "Kwaliteit en betrouwbaarheid" onderscheidt u niet. Specifiek zijn converteert.'],
      ['h2', 'Hoe een goede campagne eruitziet'],
      ['ul', 'Tight ad groups: één thema per advertentiegroep, 5-10 gerelateerde zoekwoorden|Negatieve zoekwoorden lijst: minimaal 30 termen bij de start, wekelijks uitbreiden|Locatietargeting: focus op uw werkgebied, niet op heel Nederland|Conversiemeting: telefoontjes, formulieren en chatgesprekken bijhouden|Wekelijkse optimalisatie: slechte zoektermen uitsluiten, budget verschuiven naar wat werkt'],
      ['h2', 'Realistische verwachtingen'],
      ['p', 'Een Google Ads campagne die goed is ingericht, heeft 2-4 weken nodig om te optimaliseren. Verwacht geen wonderen in week één. Verwacht wel dat u na 90 dagen een systeem heeft dat structureel kwalitatieve leads genereert.'],
      ['p', 'De gemiddelde kost per lead in onze campagnes ligt 40-60% lager dan het branchegemiddelde — puur door betere inrichting en continue optimalisatie.'],
      ['callout', 'Wilt u weten hoeveel u nu verspilt aan Google Ads, of hoe u met een nieuw budget snel resultaat boekt? Plan een gratis audit.'],
    ],
  },
  'maatwerksoftware-wanneer-loont-het': {
    title: 'Maatwerksoftware: wanneer loont de investering?',
    cat: 'Software',
    color: '#10B981',
    date: 'Februari 2026',
    time: '6',
    excerpt: 'Off-the-shelf software heeft limieten. We helpen u bepalen wanneer maatwerk de betere keuze is.',
    body: [
      ['p', 'De meeste bedrijven beginnen met standaardsoftware: een off-the-shelf CRM, een generieke facturatietool, een standaard webshop. Dat is verstandig — totdat de software uw groei begint te remmen.'],
      ['h2', 'Wanneer standaardsoftware niet meer volstaat'],
      ['ul', 'U werkt met veel handmatige Excel-exports om data tussen systemen te koppelen|Uw team werkt met omslachtige workarounds omdat de software uw proces niet ondersteunt|U betaalt voor features die u nooit gebruikt, maar mist features die u elke dag nodig heeft|Integratie met uw andere systemen kost meer dan het bespaard'],
      ['p', 'Dit zijn de signalen dat maatwerk de betere keuze is. Niet eerder — want standaardsoftware is goedkoper, sneller te implementeren en vaker bijgewerkt.'],
      ['h2', 'Wat maatwerk u oplevert'],
      ['p', 'Maatwerksoftware is gebouwd precies voor uw processen. Geen onnodige complexiteit, geen compromissen. De resultaten die we bij klanten zien:'],
      ['ul', 'Tijdsbesparing van 5-15 uur per week per medewerker door wegvallen van handmatige handelingen|Minder fouten door geautomatiseerde validatie en koppelingen|Schaalbaarheid: de software groeit mee met uw bedrijf|Concurrentievoordeel: uw concurrenten gebruiken dezelfde standaardoplossingen — u niet'],
      ['h2', 'De investering'],
      ['p', 'Maatwerksoftware begint bij circa €5.000 voor een eenvoudige tool en loopt op tot €50.000+ voor complexe systemen. De terugverdientijd is gemiddeld 12-18 maanden, daarna pure besparing.'],
      ['p', 'Wij werken altijd met een vaste prijs en een helder projectplan. Geen verrassingen achteraf.'],
      ['h2', 'Ons advies'],
      ['p', 'Begin altijd met een analyse van uw huidige processen. Vaak blijkt dat 80% van de problemen oplosbaar is met betere configuratie van bestaande software, of een slimme koppeling tussen systemen. Maatwerk is de stap daarna — als die analyse dat rechtvaardigt.'],
      ['callout', 'Twijfelt u of maatwerk of een standaardoplossing de beste keuze is voor uw situatie? Plan een gratis gesprek en we geven u eerlijk advies.'],
    ],
  },
  'seo-voor-lokale-bedrijven-complete-gids': {
    title: 'SEO voor lokale bedrijven: de complete gids voor 2026',
    cat: 'Marketing',
    color: '#8B5CF6',
    date: 'Februari 2026',
    time: '8',
    excerpt: 'Lokale SEO is de meest effectieve manier voor mkb-bedrijven om zichtbaar te worden. Stap voor stap naar de top van Google.',
    body: [
      ['p', 'Als iemand in uw regio zoekt op "loodgieter Amsterdam" of "accountant Utrecht", wil u bovenaan staan. Dat is het doel van lokale SEO — en het is de meest kosteneffectieve marketing die een lokaal bedrijf kan doen.'],
      ['h2', 'De basis: Google Bedrijfsprofiel'],
      ['p', 'Meer dan 50% van de lokale zoekopdrachten eindigt zonder dat de gebruiker de website bezoekt — ze bellen direct vanuit Google. Een volledig, bijgewerkt Google Bedrijfsprofiel is daarom de meest directe investering die u kunt doen.'],
      ['ul', 'Vul alle velden volledig in: openingstijden, beschrijving, categorieën|Voeg minimaal 10 kwalitatieve foto\'s toe (extern, intern, team, werk)|Reageer op alle reviews, zowel positief als negatief|Publiceer wekelijks een bericht via uw profiel|Voeg vragen en antwoorden toe die klanten stellen'],
      ['h2', 'On-page SEO: uw website optimaliseren'],
      ['p', 'Elke pagina op uw website moet geoptimaliseerd zijn voor specifieke zoekwoorden die uw potentiële klanten gebruiken:'],
      ['ul', 'Gebruik uw locatie + dienst in titel-tags: "Loodgieter Amsterdam | [Bedrijfsnaam]"|Maak aparte pagina\'s voor elke dienst in elke gemeente die u bedient|Voeg uw NAP-gegevens (naam, adres, telefoonnummer) toe aan elke pagina|Schrijf lokale content: cases, projecten, klantenverhalen uit uw regio'],
      ['h2', 'Linkbuilding voor lokale SEO'],
      ['p', 'Lokale links zijn goud waard: vermeldingen in de plaatselijke krant, samenwerking met andere lokale bedrijven, lidmaatschap van de KvK of branchevereniging. Elk van deze links vertelt Google dat u echt en relevant bent in uw regio.'],
      ['h2', 'Resultaten en tijdlijn'],
      ['p', 'Lokale SEO is een marathonstrategie, geen sprint. Verwacht na 3 maanden eerste verbeteringen, na 6 maanden substantieel meer verkeer, na 12 maanden structurele posities die uw concurrenten moeilijk kunnen bijhouden.'],
      ['p', 'De klanten die het langst met ons werken, genereren 70-80% van hun leads via organisch zoekverkeer. Dat is het compound effect van SEO.'],
      ['callout', 'Wilt u weten hoe uw bedrijf scoort in Google vergeleken met uw concurrenten? We maken een gratis SEO-analyse voor u.'],
    ],
  },
  'webshop-laten-bouwen-alles-wat-u-weten-moet': {
    title: 'Webshop laten bouwen: alles wat u moet weten in 2026',
    cat: 'Websites',
    color: '#2563EB',
    date: 'Februari 2026',
    time: '7',
    excerpt: 'Van platform keuze tot conversie-optimalisatie. Een complete gids voor ondernemers die een webshop willen laten bouwen.',
    body: [
      ['p', 'Een webshop laten bouwen is een investering die u jaren plezier van heeft — mits u de juiste keuzes maakt aan het begin. Veel ondernemers kiezen het verkeerde platform, onderschatten de kosten of missen cruciale functies. Dit artikel helpt u die fouten te vermijden.'],
      ['h2', 'Platform keuze: de drie opties'],
      ['p', 'Er zijn drie realistische opties voor een professionele webshop:'],
      ['ul', 'WooCommerce (WordPress): flexibel, goedkoop in aanschaf, maar vereist meer onderhoud. Geschikt voor bedrijven met specifieke wensen en technische begeleiding.|Shopify: snel te lanceren, eenvoudig te beheren, maar minder flexibel en hogere maandelijkse kosten. Geschikt voor productgedreven webshops met een standaard workflow.|Maatwerk (Next.js/React): maximale flexibiliteit, geen platform-afhankelijkheid, hogere startskosten maar geen licentiekosten. Geschikt voor complexe webshops met eigen processen.'],
      ['h2', 'Wat een webshop moet hebben'],
      ['ul', 'Snel: elke seconde laadtijd kost 7% conversie. Streef naar <2 seconden.|Mobielgeoptimaliseerd: 65% van online aankopen start op mobiel.|Duidelijke productpagina\'s: meerdere foto\'s, duidelijke beschrijvingen, zichtbare prijs|Eenvoudig afrekenproces: zo min mogelijk stappen, gastbestellingen mogelijk maken|Betrouwbaarheidsignalen: SSL-certificaat, betaalopties, retourbeleid zichtbaar|Koppeling met uw administratie: voorraad en bestellingen automatisch bijhouden'],
      ['h2', 'Kosten en terugverdientijd'],
      ['p', 'Een professionele webshop kost tussen de €3.000 en €15.000 eenmalig, plus €50-€200 per maand voor hosting en onderhoud. Met een gemiddelde orderwaarde van €50 en een conversiepercentage van 1-2% heeft u bij 200 bezoekers per dag potentieel €1.000-€2.000 omzet per dag.'],
      ['h2', 'De meestgemaakte fout'],
      ['p', 'De meestgemaakte fout is te zuinig zijn op de productpagina\'s. Professionele productfoto\'s en duidelijke, overtuigende beschrijvingen hebben meer invloed op conversie dan welke technische optimalisatie dan ook.'],
      ['callout', 'Wilt u een webshop laten bouwen die echt converteert? Plan een gratis gesprek en we bespreken uw situatie, budget en het juiste platform voor u.'],
    ],
  },
  'automatisering-voor-mkb-quick-wins': {
    title: '5 automatiseringen die elke mkb-ondernemer zou moeten hebben',
    cat: 'Software',
    color: '#10B981',
    date: 'Februari 2026',
    time: '5',
    excerpt: 'Slimme automatisering bespaart u uren per week. De vijf meest impactvolle quick wins voor mkb-bedrijven.',
    body: [
      ['p', 'Automatisering klinkt complex en duur. Maar de meest waardevolle automatiseringen zijn juist eenvoudig, goedkoop en leveren direct resultaat. Hier zijn de vijf die we bij vrijwel elk mkb-bedrijf implementeren:'],
      ['h2', '1. Automatische factuurverwerking'],
      ['p', 'Facturen handmatig verwerken kost gemiddeld 15 minuten per factuur. Met automatische verwerking via uw boekhoudpakket (Exact, Twinfield) of een koppeling met Make.com daalt dit naar <1 minuut. Bij 50 facturen per maand bespaart u meer dan 10 uur.'],
      ['h2', '2. Leadopvolging zonder nadenken'],
      ['p', 'Elke lead die via uw website binnenkomt, ontvangt automatisch een bevestigingsemail, wordt ingepland in uw agenda en verschijnt in uw CRM. U hoeft er niets meer aan te doen — de opvolging gebeurt vanzelf.'],
      ['h2', '3. Voorraadbeheer en inkoopautomatisering'],
      ['p', 'Zodra een product onder een drempelwaarde komt, wordt automatisch een inkooporder aangemaakt. Nooit meer stockouts, nooit meer handmatig tellen. Zeker voor webshops is dit een enorme tijdsbesparing.'],
      ['h2', '4. Klantcommunicatie op autopilot'],
      ['p', 'Orderbevestigingen, verzendnotificaties, herinneringen voor verlenging of onderhoud — al deze berichten kunnen volledig automatisch worden verstuurd op het juiste moment. Uw klanten krijgen betere service, u besteedt er geen tijd aan.'],
      ['h2', '5. Rapportages en dashboards'],
      ['p', 'In plaats van wekelijks handmatig data uit uw systemen te kopiëren, heeft u een live dashboard dat uw meest belangrijke KPI\'s toont: omzet, leads, openstaande facturen, websiteverkeer. Altijd actueel, altijd beschikbaar.'],
      ['h2', 'Aan de slag'],
      ['p', 'De meeste van deze automatiseringen zijn te implementeren in 1-2 dagen werk. De investering verdient zich terug in de eerste maand — in tijd, in minder fouten en in minder stress.'],
      ['callout', 'Wilt u weten welke automatiseringen het meeste impact hebben voor uw specifieke situatie? Plan een gratis gesprek en we maken een concrete analyse.'],
    ],
  },
  'social-recruitment-zo-vindt-u-het-beste-talent': {
    title: 'Social recruitment: zo vindt u in 2026 het beste talent via LinkedIn en Meta',
    cat: 'Recruitment',
    color: '#F59E0B',
    date: 'Maart 2026',
    time: '5',
    excerpt: 'Passief talent bereik je niet via traditionele vacaturesites. Gerichte social media campagnes maken het verschil.',
    body: [
      ['h2', 'Waarom traditionele vacaturesites tekort schieten'],
      ['p', 'Het grootste talent in uw sector is niet actief op zoek. Ze zijn tevreden bij hun huidige werkgever maar niet onbereikbaar. Via LinkedIn en Meta bereikt u precies die mensen die u zoekt.'],
      ['h2', 'Hoe werkt een social recruitment campagne?'],
      ['p', 'We beginnen met een scherpe doelgroepanalyse: functies, sectoren, regio en ervaringsniveau. Op basis daarvan bouwen we gerichte advertentiesegmenten. De vacaturetekst schrijven we opnieuw: persoonlijk, authentiek en employer-branding-first.'],
      ['h2', 'Wat kunt u verwachten?'],
      ['p', 'Een gemiddelde campagne voor een niche rol levert 15 tot 40 kwalitatieve sollicitaties op in 2 tot 4 weken. De kosten per sollicitatie liggen structureel lager dan bij traditionele bureaus.'],
      ['callout', 'Van briefing tot actieve campagne in 3 werkdagen. U hoeft er niets voor te doen.'],
    ],
  },
  'ai-website-resultaten-mkb-gids': {
    title: 'Hoe AI uw website-resultaten verbetert: een praktische gids voor mkb-ondernemers',
    cat: 'Technologie',
    color: '#2563EB',
    date: 'Maart 2026',
    time: '6',
    excerpt: 'AI is niet meer voorbehouden aan grote corporates. Wij laten zien welke tools uw website slimmer maken.',
    body: [
      ['h2', 'AI voor uw website: wat werkt er echt?'],
      ['p', 'De meeste mkb-ondernemers horen veel over AI maar weten niet waar te beginnen. Goed nieuws: u hoeft geen technicus te zijn om AI in te zetten voor betere websiteresultaten.'],
      ['h2', '1. Slimme chatbot voor leadgeneratie'],
      ['p', 'Een AI-chatbot die 24/7 bezoekersvragen beantwoordt en contactgegevens verzamelt. Gemiddeld 30 tot 50 procent meer leads zonder extra marketingbudget. Installatietijd: minder dan een dag.'],
      ['h2', '2. AI-gegenereerde productbeschrijvingen'],
      ['p', 'Voor webshops met grote productcatalogi schrijft AI consistente, SEO-geoptimaliseerde beschrijvingen op schaal. Kwaliteitscontrole blijft menselijk werk.'],
      ['h2', '3. Gepersonaliseerde content per bezoeker'],
      ['p', 'AI past uw websitecontent aan op basis van het gedrag van de bezoeker. Terugkerende klant ziet andere content dan een nieuwe bezoeker. Conversieratio stijgt gemiddeld met 15 tot 25 procent.'],
      ['callout', 'Kies een toepassing, test het 30 dagen, meet het resultaat. Wij helpen u bij de selectie en implementatie.'],
    ],
  },
  'emailmarketing-lokale-ondernemers': {
    title: 'E-mailmarketing voor lokale ondernemers: meer klanten met minder moeite',
    cat: 'Marketing',
    color: '#8B5CF6',
    date: 'Maart 2026',
    time: '4',
    excerpt: 'E-mail heeft het hoogste rendement van alle marketingkanalen. Zo werkt het voor lokale mkb-bedrijven.',
    body: [
      ['h2', 'Waarom e-mail nog steeds het beste kanaal is'],
      ['p', 'Social media bereikt gemiddeld 2 tot 5 procent van uw volgers organisch. Een e-mail bereikt 95 procent van uw lijst. De gemiddelde ROI van e-mailmarketing ligt op 42 euro voor elke geïnvesteerde euro.'],
      ['h2', 'Stap 1: Bouw een e-maillijst op'],
      ['p', 'Vraag bij elk contactmoment om een e-mailadres. Bied een klein voordeel in ruil: korting, gratis adviesgesprek of een nuttige gids. Kwaliteit gaat voor kwantiteit.'],
      ['h2', 'Stap 2: Stuur de juiste e-mails op het juiste moment'],
      ['p', 'Begin met twee e-mails per maand: een met nuttige inhoud en een met een aanbod. Automatiseer een welkomst-e-mail voor nieuwe abonnees. Dit alleen al verhoogt de klantretentie aanzienlijk.'],
      ['h2', 'Stap 3: Meet wat werkt'],
      ['p', 'Let op open rate, klikratio en directe omzet. Pas uw aanpak elk kwartaal aan op basis van de data.'],
      ['callout', 'Groupany bouwt uw e-mailmarketingstrategie van a tot z. Vraag een gratis scan aan van uw huidige aanpak.'],
    ],
  },

}

function renderBody(body: string[][]) {
  return body.map((item, i) => {
    const [type, content] = item
    if (type === 'p') return (
      <p key={i} style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 18 }}>{content}</p>
    )
    if (type === 'h2') return (
      <h2 key={i} style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginTop: 40, marginBottom: 14 }}>{content}</h2>
    )
    if (type === 'ul') return (
      <ul key={i} style={{ marginBottom: 18, paddingLeft: 0, listStyle: 'none' }}>
        {content.split('|').map((item, j) => (
          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10, fontSize: 16, color: '#475569', lineHeight: 1.65 }}>
            <span style={{ color: '#2563EB', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
            {item}
          </li>
        ))}
      </ul>
    )
    if (type === 'callout') return (
      <div key={i} style={{
        marginTop: 32, padding: '24px 28px', borderRadius: 16,
        background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 100%)',
        border: '1px solid rgba(37,99,235,0.15)',
      }}>
        <p style={{ fontSize: 16, color: '#1E40AF', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{content}</p>
        <a href="/#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
          background: '#2563EB', color: '#fff', fontWeight: 700, fontSize: 14,
          padding: '10px 22px', borderRadius: 10, textDecoration: 'none',
        }}>
          Gratis gesprek plannen →
        </a>
      </div>
    )
    return null
  })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES[params.slug]
  if (!article) notFound()

  return (
    <div style={{ minHeight: '100vh', background: '#FAFBFF', fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif' }}>
      {/* Nav */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', paddingTop: 16, paddingLeft: 24, paddingRight: 24 }}>
        <nav style={{
          width: '100%', maxWidth: 1200,
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(226,232,240,0.8)',
          borderRadius: 16, padding: '0 24px', height: 56,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          <a href="/" style={{ fontWeight: 800, fontSize: 18, color: '#0F172A', textDecoration: 'none' }}>Groupany</a>
          <a href="/blog" style={{ fontSize: 14, color: '#64748B', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            ← Alle artikelen
          </a>
        </nav>
      </header>

      <main style={{ paddingTop: 96, paddingBottom: 80 }}>
        <article style={{ maxWidth: 740, margin: '0 auto', padding: '48px 24px 0' }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                color: article.color, background: `${article.color}12`,
                padding: '4px 12px', borderRadius: 99,
              }}>{article.cat}</span>
              <span style={{ fontSize: 12, color: '#CBD5E1' }}>{article.date} · {article.time} min lezen</span>
            </div>
            <h1 style={{
              fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 900, color: '#0F172A',
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 18,
            }}>{article.title}</h1>
            <p style={{ fontSize: 19, color: '#64748B', lineHeight: 1.72, fontWeight: 400 }}>{article.excerpt}</p>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'linear-gradient(to right, #E2E8F0, transparent)', marginBottom: 40 }} />

          {/* Body */}
          <div>{renderBody(article.body)}</div>

          {/* Back */}
          <div style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid #E2E8F0' }}>
            <a href="/blog" style={{ fontSize: 14, color: '#64748B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              ← Terug naar alle artikelen
            </a>
          </div>
        </article>
      </main>

      <footer style={{ background: '#0F172A', padding: '40px 24px', textAlign: 'center' }}>
        <a href="/" style={{ fontWeight: 800, fontSize: 18, color: '#fff', textDecoration: 'none' }}>Groupany</a>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 12 }}>© 2026 Groupany. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  )
}
