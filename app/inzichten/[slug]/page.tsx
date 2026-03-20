import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* ═══════════════════════════════════════════════════════════════════════════
   ARTICLE DATA
   ═══════════════════════════════════════════════════════════════════════════ */

interface Article {
  slug: string
  title: string
  metaDescription: string
  category: string
  date: string
  readTime: number
  wordCount: number
  keywords: string[]
  ogImage: string
  author: string
  body: React.ReactNode
}

const ARTICLES: Record<string, Article> = {
  'online-marketing-mkb': {
    slug: 'online-marketing-mkb',
    title: 'Online marketing voor het MKB: de complete gids',
    metaDescription: 'Praktische marketinggids voor het MKB. Van SEO en Google Ads tot social media en email marketing.',
    category: 'Gids',
    date: '2026-03-15',
    readTime: 8,
    wordCount: 2400,
    keywords: ['online marketing mkb', 'digitale marketing', 'meer klanten'],
    ogImage: '/images/article-online-marketing-mkb.png',
    author: 'Bart Korpershoek',
    body: (
      <>
        <h2>Waarom online marketing onmisbaar is voor het MKB</h2>
        <p>Als MKB-ondernemer weet u het al: uw klanten zoeken online. 87 procent van de aankoopbeslissingen begint met een Google-zoekopdracht. Uw concurrent die wel investeert in online marketing pakt die klanten. Uw bedrijf dat niet investeert, ziet ze voorbijgaan.</p>
        <p>Maar online marketing voor het MKB is fundamenteel anders dan voor grote bedrijven. U heeft geen team van 20 marketeers, geen budget van honderdduizenden euro's en geen tijd om elke week een strategiesessie te houden. U heeft een praktische aanpak nodig die werkt met beperkte middelen.</p>
        <p>Bij Groupany helpen we MKB-bedrijven om hun marketingbudget zo effectief mogelijk in te zetten. In deze gids delen we alles wat u moet weten.</p>

        <h2>De vijf pijlers van online marketing</h2>
        <p>Online marketing bestaat uit vijf hoofdkanalen. U hoeft niet alles tegelijk te doen, maar u moet wel begrijpen wat elke pijler oplevert.</p>

        <h3>1. SEO (Zoekmachineoptimalisatie)</h3>
        <p>SEO zorgt ervoor dat u gevonden wordt in Google wanneer potentiële klanten zoeken naar uw product of dienst. Het is de meest duurzame vorm van online marketing: de investering betaalt zich maandenlang terug.</p>

        <h3>2. SEA (Google Ads)</h3>
        <p>Google Ads plaatst uw advertentie bovenaan de zoekresultaten. U betaalt per klik. Het voordeel: direct verkeer. Het nadeel: zodra u stopt met betalen, stopt het verkeer.</p>

        <h3>3. Social media marketing</h3>
        <p>LinkedIn, Instagram, Facebook, TikTok: elk platform heeft zijn eigen doelgroep en dynamiek. Voor B2B-bedrijven is LinkedIn veruit het effectiefst. Voor B2C hangt het af van uw doelgroep.</p>

        <h3>4. Email marketing</h3>
        <p>Vaak onderschat, maar email marketing levert de hoogste ROI van alle kanalen: gemiddeld 36 euro voor elke euro die u investeert. Het gaat niet om spammen met nieuwsbrieven, maar om gerichte communicatie.</p>

        <h3>5. Content marketing</h3>
        <p>Blogartikelen, whitepapers, video's, podcasts: content marketing positioneert u als expert in uw vakgebied. Het voedt uw SEO, social media en email marketing.</p>

        <h2>Waar begint u? Prioriteiten bepalen</h2>
        <p>Als u vandaag begint met online marketing, is dit de volgorde die wij aanraden:</p>
        <p><strong>Stap 1: Website op orde brengen.</strong> Zonder een snelle, professionele website zijn alle andere inspanningen een verspilling. Zorg dat uw website snel laadt, mobielvriendelijk is en duidelijke call-to-actions heeft.</p>
        <p><strong>Stap 2: Google Ads voor directe leads.</strong> Start met een klein budget (500 tot 1.000 euro per maand) om direct zichtbaar te zijn voor zoekende klanten. Dit genereert meteen leads terwijl u aan de langere termijn werkt.</p>
        <p><strong>Stap 3: SEO opbouwen.</strong> Begin met zoekwoordenonderzoek en publiceer maandelijks 2 tot 4 geoptimaliseerde artikelen. Na 6 maanden begint het organische verkeer het betaalde verkeer aan te vullen.</p>
        <p><strong>Stap 4: Email marketing opzetten.</strong> Verzamel emailadressen via uw website (lead magnets, nieuwsbriefformulieren) en stuur maandelijks waardevolle content.</p>
        <p><strong>Stap 5: Social media uitbreiden.</strong> Kies maximaal twee platforms en post consistent. Kwaliteit boven kwantiteit.</p>

        <h2>Budget verdelen: hoeveel investeert u waar?</h2>
        <p>Een veelgestelde vraag. Richtlijnen voor MKB-bedrijven per groeifase:</p>
        <p>Klein budget (1.000-2.000/maand): 60% Google Ads, 30% SEO, 10% tools en analytics.</p>
        <p>Gemiddeld budget (2.000-5.000/maand): 40% Google Ads, 30% SEO en content, 20% social media, 10% email marketing en tools.</p>
        <p>Groeibudget (5.000+/maand): 25% Google Ads, 30% SEO en content, 20% social media, 15% email marketing en automation, 10% analytics en experimentatie.</p>

        <h2>Tools die u nodig heeft</h2>
        <p>U hoeft geen duizenden euro's per maand aan tools uit te geven. De essentials: Google Analytics 4 (gratis), Google Search Console (gratis), Google Ads (budget-afhankelijk), Ahrefs of SEMrush (€99-199/maand), Mailchimp of Brevo (gratis tot €100/maand), Canva (gratis tot €13/maand), Buffer of Hootsuite (gratis tot €99/maand). Totale toolkosten: €100-400 per maand.</p>

        <h2>Meten en bijsturen</h2>
        <p>Zonder meting is marketing gokken. Wekelijkse metrics: website bezoekers per kanaal, conversieratio, kosten per lead per kanaal, keyword rankings, email open rate en click rate, social media bereik en engagement. Maak een dashboard in Google Looker Studio en besteed elke maandag 30 minuten aan analyse.</p>

        <h2>Veelgemaakte fouten</h2>
        <ol>
          <li>Alles tegelijk willen doen — focus op 2-3 kanalen</li>
          <li>Te snel stoppen — SEO heeft 6+ maanden nodig</li>
          <li>Geen duidelijke doelen stellen — &quot;25 leads per maand via Google&quot; is beter dan &quot;meer klanten&quot;</li>
          <li>De website verwaarlozen</li>
          <li>Niet meten</li>
          <li>Goedkoop inkopen — een SEO-bureau van €200/maand levert geen resultaat</li>
        </ol>

        <h2>Veelgestelde vragen</h2>
        <p><strong>Hoeveel moet ik als MKB&apos;er uitgeven aan online marketing?</strong></p>
        <p>Vuistregel is 5-10% van uw omzet. Maar begin met wat u zich kunt veroorloven en schaal op.</p>
        <p><strong>Hoe snel kan ik resultaten verwachten?</strong></p>
        <p>Google Ads direct. SEO na 3-6 maanden. Content marketing 6-12 maanden.</p>
        <p><strong>Moet ik een bureau inhuren of kan ik het zelf?</strong></p>
        <p>Hangt af van tijd en kennis. Veel MKB&apos;ers kiezen een hybride model.</p>
        <p><strong>Welk kanaal levert de meeste klanten op?</strong></p>
        <p>B2B: Google en LinkedIn. B2C: Google, Instagram en email marketing.</p>

        <h2>Conclusie</h2>
        <p>Online marketing is geen luxe meer voor het MKB, het is een noodzaak. Begin met de basis, bouw op, en wees consistent. Wilt u sparren? Neem contact met ons op.</p>
      </>
    ),
  },

  'processen-automatiseren': {
    slug: 'processen-automatiseren',
    title: 'Bedrijfsprocessen automatiseren: waar begint u?',
    metaDescription: 'Ontdek welke processen u kunt automatiseren, welke tools er zijn en hoeveel tijd en geld u bespaart.',
    category: 'Gids',
    date: '2026-03-14',
    readTime: 7,
    wordCount: 1900,
    keywords: ['automatiseren', 'workflow automatisering', 'processen stroomlijnen'],
    ogImage: '/images/article-processen-automatiseren.png',
    author: 'Bart Korpershoek',
    body: (
      <>
        <h2>Wat is procesautomatisering?</h2>
        <p>Procesautomatisering is het inzetten van technologie om handmatige, repetitieve taken over te nemen. Denk aan het automatisch versturen van facturen, het synchroniseren van klantgegevens tussen systemen of het automatisch opvolgen van leads.</p>
        <p>Het doel is simpel: tijd besparen, fouten verminderen en uw team laten focussen op werk dat echt waarde toevoegt.</p>

        <h2>Welke processen zijn geschikt?</h2>
        <p>Niet elk proces is geschikt voor automatisering. De beste kandidaten hebben deze kenmerken:</p>
        <ul>
          <li>Het proces is repetitief en voorspelbaar</li>
          <li>Er zijn duidelijke regels en triggers</li>
          <li>Het kost veel tijd als het handmatig wordt gedaan</li>
          <li>Fouten hebben directe gevolgen (financieel, reputatie)</li>
          <li>Het proces raakt meerdere systemen of afdelingen</li>
        </ul>
        <p>Vuistregel: als u of uw team dezelfde handeling meer dan vijf keer per week uitvoert, is het een kandidaat voor automatisering.</p>

        <h2>Voorbeelden per afdeling</h2>

        <h3>Sales</h3>
        <ul>
          <li>Automatische lead scoring op basis van websitegedrag</li>
          <li>Follow-up emails na een offerte-aanvraag</li>
          <li>CRM-updates bij statuswijzigingen</li>
          <li>Automatische afspraakplanning via Calendly of vergelijkbare tools</li>
        </ul>

        <h3>Finance</h3>
        <ul>
          <li>Factuurverwerking en automatische matching</li>
          <li>Herinneringen bij openstaande facturen</li>
          <li>Rapportages die automatisch worden gegenereerd</li>
          <li>Bonnetjes scannen en boeken via AI</li>
        </ul>

        <h3>HR</h3>
        <ul>
          <li>Onboarding checklists en automatische uitnodigingen</li>
          <li>Verlofregistratie en goedkeuringsflows</li>
          <li>Sollicitatie-screening op basis van criteria</li>
          <li>Automatische contractverlenging-herinneringen</li>
        </ul>

        <h3>Operations</h3>
        <ul>
          <li>Voorraadbeheer en automatische bestellingen</li>
          <li>Kwaliteitscontroles met automatische escalatie</li>
          <li>Projectupdates die automatisch naar stakeholders gaan</li>
          <li>Data-synchronisatie tussen ERP, CRM en andere systemen</li>
        </ul>

        <h2>Tools: van no-code tot maatwerk</h2>

        <h3>No-code</h3>
        <p>Tools zoals Zapier, Make (voorheen Integromat) en Microsoft Power Automate laten u workflows bouwen zonder programmeerkennis. Ideaal voor eenvoudige automatiseringen: als X gebeurt, doe dan Y.</p>
        <p>Kosten: €20-200 per maand. Geschikt voor: kleine tot middelgrote bedrijven met standaard processen.</p>

        <h3>Low-code</h3>
        <p>Platforms zoals Retool, Appsmith en Budibase geven u meer controle. U kunt interne tools bouwen met een visuele interface, aangevuld met code waar nodig.</p>
        <p>Kosten: €50-500 per maand. Geschikt voor: bedrijven met specifiekere behoeften.</p>

        <h3>AI-gestuurd</h3>
        <p>AI-agents kunnen complexere taken automatiseren: emails classificeren en beantwoorden, documenten analyseren, beslissingen nemen op basis van data. Dit is de volgende stap na traditionele automatisering.</p>
        <p>Kosten: variabel, afhankelijk van complexiteit. Geschikt voor: bedrijven die al basis-automatisering hebben.</p>

        <h3>Maatwerk</h3>
        <p>Voor processen die uniek zijn voor uw bedrijf, is maatwerk software de oplossing. Een op maat gebouwde applicatie die exact doet wat u nodig heeft.</p>
        <p>Kosten: vanaf €10.000 eenmalig. Geschikt voor: bedrijven met unieke processen of hoge volumes.</p>

        <h2>Het implementatieproces</h2>

        <h3>Stap 1: Inventarisatie</h3>
        <p>Breng alle processen in kaart. Vraag elk teamlid: welke taken kosten je de meeste tijd? Waar maak je de meeste fouten? Wat doe je dat een computer beter kan?</p>

        <h3>Stap 2: Prioriteren</h3>
        <p>Scoor elk proces op impact (tijdsbesparing, foutreductie, omzetverhoging) en haalbaarheid (complexiteit, kosten, doorlooptijd). Begin met high-impact, low-complexity processen.</p>

        <h3>Stap 3: Bouwen en testen</h3>
        <p>Start met een pilot. Automatiseer één proces, test het grondig en meet de resultaten. Pas aan waar nodig voordat u verder gaat.</p>

        <h3>Stap 4: Uitrollen en optimaliseren</h3>
        <p>Rol de automatisering uit naar het hele team. Monitor de eerste weken intensief. Optimaliseer op basis van feedback en data.</p>

        <h2>ROI berekenen</h2>
        <p>De ROI van automatisering is vaak verrassend hoog. Een simpel rekenvoorbeeld:</p>
        <p>Stel: een medewerker besteedt 10 uur per week aan handmatige taken die geautomatiseerd kunnen worden. Bij een uurtarief van €40 kost dat €400 per week, of €20.800 per jaar. Een automatiseringsoplossing die €5.000 kost, verdient zichzelf in minder dan 3 maanden terug.</p>
        <p>Daarnaast zijn er indirecte besparingen: minder fouten, snellere doorlooptijden, hogere medewerkerstevredenheid en schaalbaarheid zonder extra personeel.</p>

        <h2>Veelgestelde vragen</h2>
        <p><strong>Is automatisering alleen voor grote bedrijven?</strong></p>
        <p>Absoluut niet. Juist kleine bedrijven profiteren het meest, omdat elke uur die vrijkomt direct impact heeft.</p>
        <p><strong>Verliezen medewerkers hun baan door automatisering?</strong></p>
        <p>In de praktijk niet. Automatisering neemt saaie, repetitieve taken over. Medewerkers kunnen zich richten op werk dat meer voldoening geeft en meer waarde oplevert.</p>
        <p><strong>Hoe lang duurt een automatiseringsproject?</strong></p>
        <p>Een eenvoudige no-code automatisering: 1-2 dagen. Een complexer project: 2-8 weken. Maatwerk software: 2-6 maanden.</p>
        <p><strong>Wat als mijn processen veranderen?</strong></p>
        <p>Goede automatisering is flexibel. No-code tools zijn eenvoudig aan te passen. Bij maatwerk is het belangrijk om modulair te bouwen.</p>

        <h2>Tot slot</h2>
        <p>Procesautomatisering is geen luxe meer, het is een concurrentievoordeel. Begin klein, meet de resultaten en bouw van daaruit verder. Wilt u weten welke processen in uw bedrijf geschikt zijn voor automatisering? Neem contact met ons op voor een vrijblijvende inventarisatie.</p>
      </>
    ),
  },

  'recruitment-2026': {
    slug: 'recruitment-2026',
    title: 'Recruitment in 2026: hoe AI de juiste kandidaten vindt',
    metaDescription: 'AI verandert recruitment. Ontdek hoe u sneller en goedkoper de juiste mensen vindt zonder traditionele bureaus.',
    category: 'Gids',
    date: '2026-03-13',
    readTime: 7,
    wordCount: 1850,
    keywords: ['recruitment automatisering', 'ai recruitment', 'personeel werven'],
    ogImage: '/images/article-recruitment-2026.png',
    author: 'Bart Korpershoek',
    body: (
      <>
        <h2>De uitdagingen van recruitment in 2026</h2>
        <p>De arbeidsmarkt is krapper dan ooit. Gemiddeld duurt het 42 dagen om een vacature te vullen. Traditionele recruitmentbureaus rekenen 20-30% van het jaarsalaris. En ondanks die kosten is de kwaliteit van matches vaak teleurstellend.</p>
        <p>Tegelijkertijd veranderen de verwachtingen van kandidaten. Ze willen snel antwoord, een persoonlijke benadering en transparantie over het proces. Bedrijven die hier niet aan voldoen, verliezen de beste kandidaten aan concurrenten.</p>
        <p>De oplossing? AI-gestuurde recruitment die het proces sneller, goedkoper en effectiever maakt.</p>

        <h2>Hoe AI recruitment verandert</h2>
        <p>AI in recruitment gaat verder dan simpelweg cv&apos;s scannen. Moderne AI-tools kunnen:</p>
        <ul>
          <li>Actief kandidaten sourcing op LinkedIn en andere platforms</li>
          <li>Automatisch de beste matches identificeren op basis van vaardigheden, ervaring en cultuurfit</li>
          <li>Gepersonaliseerde berichten sturen die daadwerkelijk worden gelezen</li>
          <li>Het screeningsproces versnellen van weken naar uren</li>
          <li>Data-gedreven inzichten geven over uw recruitmentfunnel</li>
        </ul>
        <p>Het resultaat: betere kandidaten, sneller gevonden, tegen lagere kosten.</p>

        <h2>LinkedIn sourcing met AI</h2>
        <p>LinkedIn is de belangrijkste bron voor professioneel talent. Maar handmatig zoeken, filteren en berichten sturen is tijdrovend. AI-tools kunnen dit proces transformeren:</p>
        <p><strong>Intelligent zoeken:</strong> In plaats van simpele zoekfilters analyseert AI het volledige profiel van kandidaten. Het kijkt naar carrierepaden, vaardigheden, projecten en zelfs de toon van posts om de beste matches te vinden.</p>
        <p><strong>Gepersonaliseerde outreach:</strong> AI schrijft berichten die zijn afgestemd op elke individuele kandidaat. Geen generieke templates meer, maar berichten die refereren aan specifieke ervaring of interesses.</p>
        <p><strong>Timing en follow-ups:</strong> AI bepaalt het optimale moment om berichten te sturen en plant automatisch follow-ups in. De response rate stijgt gemiddeld met 40-60%.</p>

        <h2>Kandidaat matching en screening</h2>
        <p>Traditionele screening is tijdrovend en subjectief. Een recruiter bekijkt gemiddeld 6 seconden per cv. AI kan dieper en objectiever analyseren:</p>
        <p><strong>Skill matching:</strong> AI vergelijkt de vereiste vaardigheden met het profiel van de kandidaat, inclusief afgeleide vaardigheden die niet expliciet genoemd worden.</p>
        <p><strong>Cultuurfit analyse:</strong> Op basis van communicatiestijl, werkervaring en waarden kan AI inschatten hoe goed een kandidaat past bij uw bedrijfscultuur.</p>
        <p><strong>Predictieve analyse:</strong> AI voorspelt op basis van historische data welke kandidaten het meest waarschijnlijk succesvol zullen zijn in de rol.</p>

        <h2>Kosten vergelijking</h2>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Methode</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Kosten per hire</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Doorlooptijd</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Kwaliteit match</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Traditioneel bureau</td>
                <td style={{ padding: '12px 16px' }}>€8.000-15.000</td>
                <td style={{ padding: '12px 16px' }}>6-12 weken</td>
                <td style={{ padding: '12px 16px' }}>Gemiddeld</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Eigen recruiter</td>
                <td style={{ padding: '12px 16px' }}>€3.000-6.000</td>
                <td style={{ padding: '12px 16px' }}>4-8 weken</td>
                <td style={{ padding: '12px 16px' }}>Wisselend</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>AI-gestuurd recruitment</td>
                <td style={{ padding: '12px 16px' }}>€1.000-3.000</td>
                <td style={{ padding: '12px 16px' }}>2-4 weken</td>
                <td style={{ padding: '12px 16px' }}>Hoog</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Privacy en ethiek</h2>
        <p>AI in recruitment brengt verantwoordelijkheden met zich mee. Belangrijke aandachtspunten:</p>
        <p><strong>AVG-compliance:</strong> Zorg dat uw AI-tools voldoen aan de AVG. Kandidaatgegevens moeten veilig worden opgeslagen en verwerkt. Kandidaten hebben recht op inzage en verwijdering.</p>
        <p><strong>Bias voorkomen:</strong> AI-modellen kunnen onbewuste vooroordelen overnemen uit historische data. Regelmatige audits zijn essentieel om discriminatie te voorkomen.</p>
        <p><strong>Transparantie:</strong> Wees open naar kandidaten over het gebruik van AI in uw recruitmentproces. Dit is niet alleen ethisch, het is ook wettelijk verplicht onder de AI Act.</p>
        <p><strong>Menselijke beslissing:</strong> AI moet ondersteunen, niet beslissen. De uiteindelijke hiring decision moet altijd door een mens worden genomen.</p>

        <h2>Veelgestelde vragen</h2>
        <p><strong>Is AI-recruitment geschikt voor alle functies?</strong></p>
        <p>AI werkt het best voor functies met duidelijk meetbare vaardigheden. Voor senior management en zeer specialistische rollen blijft menselijke expertise essentieel.</p>
        <p><strong>Hoe voorkom ik dat kandidaten zich &quot;door een robot behandeld&quot; voelen?</strong></p>
        <p>Gebruik AI voor de backend-processen (sourcing, matching, scheduling) en zorg dat de kandidaatervaring persoonlijk blijft. De kandidaat hoeft niet te weten dat AI het eerste contact heeft voorbereid.</p>
        <p><strong>Wat is de ROI van AI-recruitment?</strong></p>
        <p>Gemiddeld 50-70% lagere kosten per hire en 40% snellere doorlooptijd. De exacte ROI hangt af van uw huidige recruitmentkosten en -volumes.</p>

        <h2>Tot slot</h2>
        <p>Recruitment in 2026 draait om slimmer werken, niet harder. AI-tools maken het mogelijk om sneller betere kandidaten te vinden, tegen een fractie van de traditionele kosten. De bedrijven die deze technologie omarmen, hebben een beslissend voordeel in de strijd om talent. Wilt u weten hoe AI uw recruitment kan verbeteren? Neem contact met ons op.</p>
      </>
    ),
  },

  'seo-uitbesteden': {
    slug: 'seo-uitbesteden',
    title: 'SEO uitbesteden: de complete gids voor bedrijven',
    metaDescription: 'Moet u SEO uitbesteden? Wat kost het, wat levert het op en waar let u op bij het kiezen van een SEO bureau?',
    category: 'Gids',
    date: '2026-03-16',
    readTime: 8,
    wordCount: 2300,
    keywords: ['seo uitbesteden', 'seo bureau', 'hoger in google'],
    ogImage: '/images/article-seo-uitbesteden.png',
    author: 'Bart Korpershoek',
    body: (
      <>
        <h2>Wat is SEO en waarom is het belangrijk?</h2>
        <p>SEO (Search Engine Optimization) is het geheel aan technieken om hoger te scoren in Google. Waarom dat belangrijk is? Omdat 75% van de zoekers nooit verder klikt dan pagina 1. Als u niet op pagina 1 staat voor relevante zoekwoorden, bestaat u niet voor die potentiële klanten.</p>
        <p>SEO is een langetermijninvestering. In tegenstelling tot advertenties stopt het verkeer niet zodra u stopt met betalen. Een goed geoptimaliseerde pagina kan maanden- tot jarenlang bezoekers opleveren.</p>

        <h2>Zelf doen vs uitbesteden</h2>
        <p>De eerste vraag die u moet beantwoorden: ga ik SEO zelf doen of besteed ik het uit?</p>
        <p><strong>Zelf doen is haalbaar als:</strong> u tijd heeft om het vak te leren (minimaal 10 uur per week), u technisch aangelegd bent, uw website relatief eenvoudig is en u geduld heeft voor een langere leercurve.</p>
        <p><strong>Uitbesteden is verstandiger als:</strong> u zich wilt focussen op uw kernactiviteiten, u sneller resultaat wilt, uw website technisch complex is, u concurreert in een competitieve markt of u niet de expertise in huis heeft.</p>
        <p>De meeste MKB-bedrijven kiezen voor uitbesteden, simpelweg omdat de opportuniteitskosten van zelf doen te hoog zijn.</p>

        <h2>Wat doet een SEO bureau?</h2>

        <h3>Technische SEO</h3>
        <p>De technische basis van uw website: laadsnelheid, mobiele weergave, crawlbaarheid, indexering, structured data, SSL-certificaat, URL-structuur. Een technisch gezonde website is de fundering waarop alles rust.</p>

        <h3>Content SEO</h3>
        <p>Het creëren en optimaliseren van content die aansluit bij zoekintentie. Dit omvat zoekwoordenonderzoek, het schrijven van geoptimaliseerde pagina&apos;s en blogartikelen, interne linking en het verbeteren van bestaande content.</p>

        <h3>Linkbuilding</h3>
        <p>Het verkrijgen van kwalitatieve links van andere websites naar uw website. Links zijn nog steeds een van de belangrijkste rankingfactoren. Goede linkbuilding is tijdrovend maar essentieel.</p>

        <h2>Resultaten verwachtingen</h2>
        <p>Wees realistisch over wat SEO kan opleveren en hoe snel:</p>
        <p><strong>Maand 1-3:</strong> Technische audit en fixes, zoekwoordenonderzoek, contentstrategie. Minimale zichtbare resultaten in rankings.</p>
        <p><strong>Maand 3-6:</strong> Eerste rankings verbeteren, organisch verkeer begint te groeien. Nog geen significante lead-impact.</p>
        <p><strong>Maand 6-12:</strong> Duidelijke groei in verkeer en leads. Top 10-posities voor belangrijke zoekwoorden. ROI wordt meetbaar.</p>
        <p><strong>Maand 12+:</strong> Exponentiële groei mogelijk. Domeinautoriteit stijgt, waardoor nieuwe content sneller rankt.</p>
        <p>Een bureau dat resultaten belooft binnen 4 weken is onbetrouwbaar. SEO kost tijd. Altijd.</p>

        <h2>Wat kost SEO uitbesteden?</h2>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Pakket</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Maandelijks</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Wat u krijgt</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Basis</td>
                <td style={{ padding: '12px 16px' }}>€500-1.000</td>
                <td style={{ padding: '12px 16px' }}>Technische SEO, basisoptimalisatie, maandelijkse rapportage</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Professioneel</td>
                <td style={{ padding: '12px 16px' }}>€1.000-2.500</td>
                <td style={{ padding: '12px 16px' }}>Alles in basis + contentcreatie, linkbuilding, strategisch advies</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Premium</td>
                <td style={{ padding: '12px 16px' }}>€2.500-5.000+</td>
                <td style={{ padding: '12px 16px' }}>Full-service SEO, dedicated specialist, wekelijkse rapportage</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Let op: bureaus die SEO aanbieden voor minder dan €500 per maand kunnen zelden kwalitatief werk leveren. SEO is arbeidsintensief en vereist expertise.</p>

        <h2>Red flags: waar moet u op letten?</h2>
        <ul>
          <li>Gegarandeerde #1-posities — niemand kan dat garanderen</li>
          <li>Geen transparantie over werkzaamheden</li>
          <li>Langlopende contracten zonder tussentijdse evaluatie</li>
          <li>Focus op vanity metrics (rankings) in plaats van business metrics (leads, omzet)</li>
          <li>Geen duidelijke strategie of roadmap</li>
          <li>Gebruik van black hat technieken (linkspam, keyword stuffing)</li>
          <li>Geen referenties of aantoonbare cases</li>
        </ul>

        <h2>Hoe meet u succes?</h2>
        <p>De belangrijkste KPI&apos;s voor SEO:</p>
        <ul>
          <li><strong>Organisch verkeer:</strong> het aantal bezoekers via Google</li>
          <li><strong>Keyword rankings:</strong> posities voor uw belangrijkste zoekwoorden</li>
          <li><strong>Conversies uit organisch verkeer:</strong> leads, aanvragen, aankopen</li>
          <li><strong>Domeinautoriteit:</strong> een score die aangeeft hoe sterk uw website is</li>
          <li><strong>Kosten per acquisitie (CPA):</strong> wat kost het om een klant te werven via SEO?</li>
        </ul>
        <p>Vraag uw bureau om maandelijkse rapportages met deze metrics. Als ze dat niet bieden, is dat een red flag.</p>

        <h2>Veelgestelde vragen</h2>
        <p><strong>Hoe lang duurt het voordat ik resultaat zie?</strong></p>
        <p>Reken op 3-6 maanden voor de eerste resultaten en 6-12 maanden voor significante impact.</p>
        <p><strong>Kan ik tussentijds stoppen?</strong></p>
        <p>Dat hangt af van uw contract. Wij raden aan om minimaal 6 maanden commitment af te spreken, maar met maandelijkse evaluatiemomenten.</p>
        <p><strong>Wat als ik al Google Ads draai?</strong></p>
        <p>SEO en Google Ads versterken elkaar. SEO verlaagt op termijn uw afhankelijkheid van betaalde advertenties.</p>
        <p><strong>Moet ik mijn hele website aanpassen?</strong></p>
        <p>Niet per se. Een goed bureau begint met een audit en prioriteert de wijzigingen met de meeste impact.</p>

        <h2>Tot slot</h2>
        <p>SEO uitbesteden is een van de beste investeringen die u als bedrijf kunt doen, mits u het juiste bureau kiest. Neem de tijd om bureaus te vergelijken, vraag naar cases en referenties, en kies een partner die transparant is over werkzaamheden en resultaten. Wilt u weten wat SEO voor uw bedrijf kan betekenen? Neem contact met ons op voor een vrijblijvend adviesgesprek.</p>
      </>
    ),
  },

  'software-op-maat': {
    slug: 'software-op-maat',
    title: 'Software op maat laten bouwen: de complete gids',
    metaDescription: 'Alles over maatwerk software: kosten, proces, technologie en tips. Van eerste idee tot live applicatie.',
    category: 'Gids',
    date: '2026-03-18',
    readTime: 8,
    wordCount: 2200,
    keywords: ['software op maat', 'maatwerk software', 'applicatie laten bouwen'],
    ogImage: '/images/article-software-op-maat.png',
    author: 'Bart Korpershoek',
    body: (
      <>
        <h2>Wat is maatwerk software?</h2>
        <p>Maatwerk software is software die specifiek voor uw bedrijf wordt ontworpen en gebouwd. In tegenstelling tot standaard software (zoals Salesforce, HubSpot of Exact) past maatwerk software zich aan uw processen aan, niet andersom.</p>
        <p>Denk aan: een intern platform voor vastgoedbeheer, een klantportaal met specifieke workflows, een dashboard dat data uit meerdere bronnen combineert, of een tool die een uniek bedrijfsproces automatiseert.</p>

        <h2>Kant-en-klaar vs maatwerk</h2>
        <p><strong>Kant-en-klaar is de betere keuze als:</strong> uw processen standaard zijn, u snel aan de slag wilt, uw budget beperkt is en de software 80%+ van uw behoeften dekt.</p>
        <p><strong>Maatwerk is de betere keuze als:</strong> standaard software uw processen niet ondersteunt, u een concurrentievoordeel wilt creëren, u specifieke integraties nodig heeft, u schaalbaarheid op maat nodig heeft of u volledige controle over uw data wilt.</p>
        <p>Veel bedrijven beginnen met standaard software en stappen over naar maatwerk wanneer ze tegen de beperkingen aanlopen. Dat is een logische evolutie.</p>

        <h2>Het ontwikkelproces</h2>

        <h3>Fase 1: Discovery en strategie</h3>
        <p>Voordat er een regel code wordt geschreven, moet duidelijk zijn wat u wilt bereiken. In deze fase brengen we uw processen in kaart, definiëren we de functionele eisen en maken we een technische architectuur.</p>
        <p>Doorlooptijd: 1-2 weken. Output: functioneel ontwerp, technisch design document, planning en begroting.</p>

        <h3>Fase 2: Design</h3>
        <p>Het ontwerp van de gebruikersinterface en gebruikerservaring. Wireframes, visuele ontwerpen en een klikbaar prototype geven u een concreet beeld van het eindresultaat voordat de bouw begint.</p>
        <p>Doorlooptijd: 1-3 weken. Output: UI/UX designs, klikbaar prototype.</p>

        <h3>Fase 3: Ontwikkeling</h3>
        <p>De daadwerkelijke bouw van de software. Bij Groupany werken we in sprints van 2 weken, zodat u regelmatig werkende software ziet en feedback kunt geven.</p>
        <p>Doorlooptijd: 4-16 weken (afhankelijk van complexiteit). Output: werkende software, documentatie.</p>

        <h3>Fase 4: Testen en lancering</h3>
        <p>Uitgebreid testen op functionaliteit, performance, beveiliging en gebruiksvriendelijkheid. Na goedkeuring wordt de software live gezet en worden gebruikers getraind.</p>
        <p>Doorlooptijd: 1-2 weken. Output: geteste, live applicatie.</p>

        <h3>Fase 5: Onderhoud en doorontwikkeling</h3>
        <p>Software is nooit &quot;af&quot;. Na lancering volgen updates, optimalisaties en nieuwe features op basis van gebruikersfeedback en veranderende behoeften.</p>

        <h2>Technologiekeuzes</h2>
        <p>De technologiestack heeft impact op performance, schaalbaarheid en onderhoudskosten. Onze standaard stack:</p>
        <p><strong>Frontend:</strong> Next.js (React) — snel, SEO-friendly, enorme community en ecosystem.</p>
        <p><strong>Backend:</strong> Node.js met TypeScript — consistent met frontend, type-safe, performant.</p>
        <p><strong>Database:</strong> PostgreSQL — betrouwbaar, schaalbaar, gratis. Voor specifieke use cases: MongoDB of Redis.</p>
        <p><strong>Hosting:</strong> Vercel, AWS of Hetzner — afhankelijk van requirements en budget.</p>
        <p><strong>AI-integratie:</strong> OpenAI, Anthropic of open-source modellen — waar AI waarde toevoegt.</p>

        <h2>Wat kost maatwerk software?</h2>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Type project</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Indicatie kosten</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Doorlooptijd</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Eenvoudige tool / dashboard</td>
                <td style={{ padding: '12px 16px' }}>€5.000-15.000</td>
                <td style={{ padding: '12px 16px' }}>4-8 weken</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Klantportaal / interne applicatie</td>
                <td style={{ padding: '12px 16px' }}>€15.000-40.000</td>
                <td style={{ padding: '12px 16px' }}>8-16 weken</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Complex platform / SaaS</td>
                <td style={{ padding: '12px 16px' }}>€40.000-100.000+</td>
                <td style={{ padding: '12px 16px' }}>16-32 weken</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Deze prijzen zijn indicatief. De werkelijke kosten hangen af van complexiteit, integraties en specifieke eisen. Wij werken met vaste prijzen: u weet vooraf exact wat u betaalt.</p>

        <h2>Onderhoud en doorontwikkeling</h2>
        <p>Reken op 15-20% van de initiële bouwkosten per jaar voor onderhoud. Dit dekt: beveiligingsupdates, bug fixes, server- en hostingkosten, kleine aanpassingen en technische support.</p>
        <p>Doorontwikkeling (nieuwe features) is apart en wordt per project begroot. Veel klanten werken met een vast maandelijks budget voor doorontwikkeling.</p>

        <h2>Veelgestelde vragen</h2>
        <p><strong>Hoe weet ik of ik maatwerk nodig heb?</strong></p>
        <p>Als u meer dan 20% van uw processen handmatig moet aanpassen aan standaard software, is maatwerk waarschijnlijk voordeliger op de lange termijn.</p>
        <p><strong>Wat als mijn requirements veranderen tijdens het project?</strong></p>
        <p>Dat is normaal. Onze agile werkwijze maakt het mogelijk om bij te sturen per sprint. Grote scopewijzigingen worden apart besproken en begroot.</p>
        <p><strong>Wie is eigenaar van de code?</strong></p>
        <p>U. Na oplevering en betaling bent u volledig eigenaar van alle broncode en documentatie.</p>
        <p><strong>Kan ik later wisselen van ontwikkelpartij?</strong></p>
        <p>Ja. Wij bouwen met standaard technologieën en leveren uitgebreide documentatie. Vendor lock-in is niet ons businessmodel.</p>

        <h2>Conclusie</h2>
        <p>Maatwerk software is een strategische investering die uw bedrijf kan transformeren. Het verschil tussen een goed en een slecht project zit in de voorbereiding, de communicatie en de keuze van de juiste partner. Wilt u weten wat maatwerk software voor uw bedrijf kan betekenen? Neem contact met ons op voor een vrijblijvend gesprek.</p>
      </>
    ),
  },

  'website-laten-maken': {
    slug: 'website-laten-maken',
    title: 'Professionele website laten maken: wat kost het en wat krijgt u?',
    metaDescription: 'Van budget tot technologie: alles wat u moet weten voor een professionele bedrijfswebsite in 2026.',
    category: 'Gids',
    date: '2026-03-17',
    readTime: 7,
    wordCount: 2100,
    keywords: ['website laten maken', 'website kosten', 'professionele website'],
    ogImage: '/images/article-website-laten-maken.png',
    author: 'Bart Korpershoek',
    body: (
      <>
        <h2>Waarom een professionele website essentieel is</h2>
        <p>Uw website is het digitale visitekaartje van uw bedrijf. 94% van de eerste indrukken is design-gerelateerd. Een bezoeker bepaalt binnen 0,05 seconden of uw website betrouwbaar oogt. Een slechte website kost u klanten, elke dag.</p>
        <p>Maar een professionele website gaat verder dan mooi design. Het is een verkoopinstrument dat 24/7 werkt: het trekt bezoekers aan via Google, overtuigt ze van uw expertise en converteert ze naar leads of klanten.</p>

        <h2>Typen websites</h2>
        <p>Niet elke website is hetzelfde. De keuze hangt af van uw doelen en budget:</p>
        <p><strong>Bedrijfswebsite (5-15 pagina&apos;s):</strong> De standaard voor de meeste MKB-bedrijven. Homepage, over ons, diensten, cases, contact. Doel: professionaliteit uitstralen en leads genereren.</p>
        <p><strong>Webshop:</strong> Voor bedrijven die producten online verkopen. Productpagina&apos;s, winkelwagen, betaalintegratie, voorraadbeheer. Complexer en duurder dan een bedrijfswebsite.</p>
        <p><strong>Platform / webapp:</strong> Voor bedrijven die een online dienst aanbieden. Gebruikersaccounts, dashboards, specifieke functionaliteit. Dit is maatwerk softwareontwikkeling.</p>
        <p><strong>Landingspagina:</strong> Eén pagina gericht op één doel: een aanmelding, een download, een aankoop. Ideaal voor campagnes en advertenties.</p>

        <h2>WordPress vs moderne alternatieven</h2>
        <p>WordPress domineert al jaren de markt, maar is dat nog steeds de beste keuze?</p>
        <p><strong>WordPress:</strong> Voordelen zijn het grote ecosystem, veel plugins en thema&apos;s en bekendheid. Nadelen zijn beveiligingsrisico&apos;s, trage laadtijden, regelmatig onderhoud nodig en afhankelijkheid van plugins.</p>
        <p><strong>Moderne alternatieven (Next.js, Astro, Webflow):</strong> Voordelen zijn razendsnelle laadtijden, betere beveiliging, geen plugin-afhankelijkheid en uitstekende SEO-performance. Nadelen zijn dat het technisch kennisintensiever is om te bouwen.</p>
        <p>Ons advies: voor nieuwe websites kiezen wij standaard voor Next.js. De performance en SEO-voordelen zijn significant. WordPress raden we alleen aan als u specifieke WordPress-plugins nodig heeft die geen alternatief hebben.</p>

        <h2>Wat kost een website?</h2>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Type website</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Indicatie kosten</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Doorlooptijd</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Landingspagina</td>
                <td style={{ padding: '12px 16px' }}>€1.000-3.000</td>
                <td style={{ padding: '12px 16px' }}>1-2 weken</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Bedrijfswebsite (5-15 pagina&apos;s)</td>
                <td style={{ padding: '12px 16px' }}>€3.000-8.000</td>
                <td style={{ padding: '12px 16px' }}>3-6 weken</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Webshop</td>
                <td style={{ padding: '12px 16px' }}>€5.000-20.000</td>
                <td style={{ padding: '12px 16px' }}>4-10 weken</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px' }}>Platform / webapp</td>
                <td style={{ padding: '12px 16px' }}>€15.000-100.000+</td>
                <td style={{ padding: '12px 16px' }}>8-32 weken</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Daarnaast zijn er doorlopende kosten: hosting (€10-100/maand), domein (€10-20/jaar), SSL-certificaat (vaak gratis), onderhoud (€50-200/maand).</p>

        <h2>Het bouwproces</h2>

        <h3>Stap 1: Intake en strategie</h3>
        <p>Wat zijn uw doelen? Wie is uw doelgroep? Welke acties moeten bezoekers ondernemen? Deze fase bepaalt de richting van alles dat volgt.</p>

        <h3>Stap 2: Content en structuur</h3>
        <p>De informatiearchitectuur: welke pagina&apos;s, in welke volgorde, met welke content. Content is de basis van een goede website. Design zonder content is decoratie.</p>

        <h3>Stap 3: Design</h3>
        <p>Het visuele ontwerp dat aansluit bij uw merkidentiteit. Wij ontwerpen altijd mobile-first: als het op een telefoon goed werkt, werkt het overal.</p>

        <h3>Stap 4: Ontwikkeling</h3>
        <p>De technische bouw. Performance, SEO en toegankelijkheid zijn geen afterthoughts maar uitgangspunten.</p>

        <h3>Stap 5: Content vullen en testen</h3>
        <p>Alle content wordt geplaatst, getest op verschillende apparaten en browsers, en geoptimaliseerd voor snelheid.</p>

        <h3>Stap 6: Lancering en optimalisatie</h3>
        <p>Na lancering monitoren we de performance en optimaliseren we op basis van echte gebruikersdata.</p>

        <h2>SEO en snelheid</h2>
        <p>Een mooie website die niet gevonden wordt, is waardeloos. SEO moet vanaf dag 1 onderdeel zijn van het bouwproces:</p>
        <ul>
          <li>Technische SEO: snelle laadtijden, mobielvriendelijk, gestructureerde data</li>
          <li>On-page SEO: geoptimaliseerde titels, meta descriptions, headings en content</li>
          <li>Performance: Core Web Vitals scoren (LCP, FID, CLS)</li>
        </ul>
        <p>Websites gebouwd met Next.js scoren consistent hoger op deze metrics dan WordPress-websites. Dat is meetbaar en significant.</p>

        <h2>Veelgestelde vragen</h2>
        <p><strong>Hoe lang duurt het om een website te laten maken?</strong></p>
        <p>Een bedrijfswebsite: 3-6 weken. Een webshop: 4-10 weken. Een platform: 8-32 weken. De doorlooptijd hangt vooral af van hoe snel u feedback geeft en content aanlevert.</p>
        <p><strong>Kan ik zelf content aanpassen?</strong></p>
        <p>Ja. Wij bouwen websites met een CMS (Content Management System) zodat u zelf teksten, afbeeldingen en pagina&apos;s kunt beheren zonder technische kennis.</p>
        <p><strong>Wat als ik al een website heb?</strong></p>
        <p>We kunnen uw bestaande website verbeteren of een volledig nieuwe website bouwen met migratie van bestaande content en SEO-waarde.</p>
        <p><strong>Is mijn website ook geschikt voor mobiel?</strong></p>
        <p>Altijd. Meer dan 60% van het webverkeer is mobiel. Wij ontwerpen mobile-first.</p>

        <h2>Conclusie</h2>
        <p>Een professionele website is de basis van uw online aanwezigheid. Het is een investering die zich terugverdient in leads, klanten en geloofwaardigheid. Kies een partner die niet alleen mooi design levert, maar ook denkt in performance, SEO en conversie. Wilt u weten wat een professionele website voor uw bedrijf kan betekenen? Neem contact met ons op.</p>
      </>
    ),
  },
}

const ALL_SLUGS = Object.keys(ARTICLES)

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC PARAMS & METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = ARTICLES[params.slug]
  if (!article) {
    return { title: 'Artikel niet gevonden' }
  }

  const BASE_URL = 'https://groupany.nl'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `${BASE_URL}${article.ogImage}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: 'Founder & CEO',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Groupany',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/inzichten/${article.slug}`,
    },
    wordCount: article.wordCount,
    keywords: article.keywords.join(', '),
  }

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      url: `${BASE_URL}/inzichten/${article.slug}`,
      images: [
        {
          url: article.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
      authors: [article.author],
      locale: 'nl_NL',
      siteName: 'Groupany',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
      images: [article.ogImage],
    },
    alternates: {
      canonical: `${BASE_URL}/inzichten/${article.slug}`,
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   HELPER: format date
   ═══════════════════════════════════════════════════════════════════════════ */

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES[params.slug]

  if (!article) {
    return (
      <>
        <Nav />
        <main>
          <section className="section-py" style={{ paddingTop: 120, textAlign: 'center' }}>
            <div className="container-narrow">
              <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700 }}>Artikel niet gevonden</h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: 16 }}>
                Het artikel dat u zoekt bestaat niet of is verplaatst.
              </p>
              <Link
                href="/inzichten"
                style={{
                  display: 'inline-block',
                  marginTop: 24,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                &larr; Terug naar Inzichten
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `https://groupany.nl${article.ogImage}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: 'Founder & CEO',
      url: 'https://groupany.nl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Groupany',
      url: 'https://groupany.nl',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://groupany.nl/inzichten/${article.slug}`,
    },
    wordCount: article.wordCount,
    keywords: article.keywords.join(', '),
  }

  return (
    <>
      <Nav />
      <main>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Back link + Hero */}
        <section className="section-py" style={{ paddingTop: 120, paddingBottom: 48 }}>
          <div className="container-narrow">
            <Link
              href="/inzichten"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                marginBottom: 32,
                transition: 'color 0.15s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
              Terug naar Inzichten
            </Link>

            {/* Meta */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent)',
                }}
              >
                {article.category}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                {formatDate(article.date)}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                {article.readTime} min leestijd
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 16,
                color: 'var(--text)',
              }}
            >
              {article.title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              {article.metaDescription}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                BK
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>
                  {article.author}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                  Founder &amp; CEO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article hero image */}
        <section style={{ paddingBottom: 48 }}>
          <div className="container-narrow">
            <div
              style={{
                width: '100%',
                height: 'clamp(200px, 30vw, 400px)',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.02))',
              }}
            >
              <img
                src={article.ogImage}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Article body */}
        <section style={{ paddingBottom: 64 }}>
          <div className="container-narrow">
            <div className="article-body">
              {article.body}
            </div>
          </div>

          {/* Article body styles */}
          <style>{`
            .article-body h2 {
              font-size: clamp(1.25rem, 2vw, 1.625rem);
              font-weight: 700;
              color: var(--text);
              margin-top: 48px;
              margin-bottom: 16px;
              line-height: 1.3;
              letter-spacing: -0.01em;
            }
            .article-body h2:first-child {
              margin-top: 0;
            }
            .article-body h3 {
              font-size: clamp(1rem, 1.5vw, 1.25rem);
              font-weight: 600;
              color: var(--text);
              margin-top: 32px;
              margin-bottom: 12px;
              line-height: 1.4;
            }
            .article-body p {
              font-size: 1rem;
              line-height: 1.75;
              color: var(--text-secondary);
              margin-bottom: 16px;
            }
            .article-body strong {
              color: var(--text);
              font-weight: 600;
            }
            .article-body ul, .article-body ol {
              margin: 16px 0;
              padding-left: 24px;
              color: var(--text-secondary);
            }
            .article-body li {
              font-size: 1rem;
              line-height: 1.75;
              margin-bottom: 8px;
            }
            .article-body table {
              background: var(--bg-elevated);
              border: 1px solid var(--border);
              border-radius: 8px;
              overflow: hidden;
            }
            .article-body th {
              background: var(--bg-alt);
              color: var(--text);
            }
            .article-body td {
              color: var(--text-secondary);
            }
          `}</style>
        </section>

        {/* CTA */}
        <section className="section-py section-alt">
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                marginBottom: 12,
                color: 'var(--text)',
              }}
            >
              Wilt u weten wat wij voor u kunnen betekenen?
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.6,
                marginBottom: 24,
                maxWidth: 500,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Plan een vrijblijvend gesprek en ontdek hoe Groupany uw bedrijf kan helpen groeien.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 44,
                padding: '0 28px',
                fontSize: '0.9rem',
                borderRadius: 'var(--radius-full)',
              }}
            >
              Neem contact op
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
