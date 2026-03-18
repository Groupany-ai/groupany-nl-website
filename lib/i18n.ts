export type Lang = "nl" | "en"

export const copy = {
  nav: {
    nl: {
      links: [
        { label: "Diensten", href: "#diensten" },
        { label: "Resultaten", href: "#resultaten" },
        { label: "Werkwijze", href: "#werkwijze" },
        { label: "Over ons", href: "#over-ons" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Neem contact op",
    },
    en: {
      links: [
        { label: "Services", href: "#diensten" },
        { label: "Results", href: "#resultaten" },
        { label: "Process", href: "#werkwijze" },
        { label: "About", href: "#over-ons" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Get in touch",
    },
  },

  hero: {
    nl: {
      headline: "Websites, software en marketing\ndie echt werken.",
      sub: "Geen vage beloftes. Vaste prijzen. Opgeleverd binnen de afgesproken termijn. Van MKB tot scale-up.",
      cta1: "Plan een gesprek",
      cta2: "Bekijk ons werk",
      trust: "Keizersgracht 520, Amsterdam  ·  KVK 93.847.291  ·  Nederlands bedrijf",
    },
    en: {
      headline: "Websites, software and marketing\nthat actually work.",
      sub: "No vague promises. Fixed prices. Delivered on time. From SME to scale-up.",
      cta1: "Schedule a call",
      cta2: "See our work",
      trust: "Keizersgracht 520, Amsterdam  ·  KVK 93.847.291  ·  Dutch company",
    },
  },

  diensten: {
    nl: {
      label: "DIENSTEN",
      headline: "Drie dingen. Allemaal goed.",
      sub: "Geen halve oplossingen. Wij leveren compleet, op tijd en binnen budget.",
      services: [
        {
          num: "01",
          title: "Websites & webshops",
          desc: "Professionele websites die er niet alleen mooi uitzien, maar ook klanten opleveren. Van landingspagina tot complete webshop. Opgeleverd in 3 weken.",
          deliverables: ["Responsive design", "SEO-geoptimaliseerd", "CMS naar keuze", "Opgeleverd in 3 weken"],
        },
        {
          num: "02",
          title: "Software op maat",
          desc: "Web apps, koppelingen en automatiseringen die uw bedrijf sneller maken. Geen standaard templates. Gebouwd voor uw situatie.",
          deliverables: ["Maatwerk applicaties", "API-koppelingen", "Automatiseringen", "Doorlopend onderhoud"],
        },
        {
          num: "03",
          title: "Marketing & SEO",
          desc: "Gevonden worden, bezoekers aantrekken, klanten converteren. Google Ads, SEO, social media. Meetbaar en transparant.",
          deliverables: ["Google Ads beheer", "Zoekmachineoptimalisatie", "Social media", "Maandelijkse rapportage"],
        },
        {
          num: "04",
          title: "Recruitment",
          desc: "Vind de juiste kandidaten via gerichte campagnes. Zonder bureau-fees. Effectief en betaalbaar.",
          deliverables: ["Social recruitment", "Vacaturecampagnes", "Employer branding", "Kosten per aanname inzicht"],
        },
      ],
    },
    en: {
      label: "SERVICES",
      headline: "Three things. All done well.",
      sub: "No half measures. We deliver complete, on time and within budget.",
      services: [
        {
          num: "01",
          title: "Websites & webshops",
          desc: "Professional websites that look great and generate customers. From landing pages to complete webshops. Delivered in 3 weeks.",
          deliverables: ["Responsive design", "SEO-optimised", "CMS of your choice", "Delivered in 3 weeks"],
        },
        {
          num: "02",
          title: "Custom software",
          desc: "Web apps, integrations and automations that accelerate your business. No templates. Built for your situation.",
          deliverables: ["Custom applications", "API integrations", "Automations", "Ongoing maintenance"],
        },
        {
          num: "03",
          title: "Marketing & SEO",
          desc: "Get found, attract visitors, convert customers. Google Ads, SEO, social media. Measurable and transparent.",
          deliverables: ["Google Ads management", "Search engine optimisation", "Social media", "Monthly reporting"],
        },
        {
          num: "04",
          title: "Recruitment",
          desc: "Find the right candidates through targeted campaigns. Without agency fees. Effective and affordable.",
          deliverables: ["Social recruitment", "Job campaigns", "Employer branding", "Cost per hire insights"],
        },
      ],
    },
  },

  waarom: {
    nl: {
      label: "WAAROM GROUPANY",
      headline: "Waarom bedrijven voor ons kiezen.",
      items: [
        {
          title: "Vaste prijzen, geen verrassingen",
          desc: "Vooraf weet u wat het kost. Geen uurtje-factuurtje, geen meerwerk zonder overleg.",
        },
        {
          title: "Sneller dan u verwacht",
          desc: "Waar andere bureaus weken plannen, leveren wij in dagen. Niet omdat we haasten, maar omdat we slimmer werken.",
        },
        {
          title: "Alles onder een dak",
          desc: "Design, development, marketing, content. U hoeft niet drie bureaus te managen. Wij regelen het.",
        },
        {
          title: "Reactietijd onder 4 uur",
          desc: "Geen wekenlange radiostilte. U heeft een vraag, u krijgt antwoord. Dezelfde dag.",
        },
      ],
    },
    en: {
      label: "WHY GROUPANY",
      headline: "Why businesses choose us.",
      items: [
        {
          title: "Fixed prices, no surprises",
          desc: "You know the cost upfront. No hourly billing, no scope creep without discussion.",
        },
        {
          title: "Faster than you expect",
          desc: "Where other agencies plan for weeks, we deliver in days. Not by rushing, but by working smarter.",
        },
        {
          title: "Everything under one roof",
          desc: "Design, development, marketing, content. You don't need three agencies. We handle it.",
        },
        {
          title: "Response time under 4 hours",
          desc: "No weeks of radio silence. You have a question, you get an answer. Same day.",
        },
      ],
    },
  },

  resultaten: {
    nl: {
      label: "RESULTATEN",
      headline: "Resultaten spreken harder dan beloftes.",
      metrics: [
        { value: "< 4 uur", label: "Reactietijd" },
        { value: "3x", label: "Sneller dan traditioneel" },
        { value: "100%", label: "Vaste prijzen" },
        { value: "4.9/5", label: "Klanttevredenheid" },
      ],
      caseLabel: "CASE STUDY",
      caseTitle: "Propty",
      caseSub: "Vastgoedbeheersoftware",
      caseDesc: "Een compleet platform voor vastgoedbeheer, gebouwd en onderhouden door ons team. Van concept tot productie, met meer dan 420.000 regels code en echte betalende klanten in de Nederlandse markt.",
      caseStats: [
        { value: "420K+", label: "Regels code" },
        { value: "< 3 mnd", label: "Naar productie" },
        { value: "Actief", label: "In de markt" },
      ],
      caseMore: "Meer projecten volgen binnenkort",
    },
    en: {
      label: "RESULTS",
      headline: "Results speak louder than promises.",
      metrics: [
        { value: "< 4 hrs", label: "Response time" },
        { value: "3x", label: "Faster than traditional" },
        { value: "100%", label: "Fixed pricing" },
        { value: "4.9/5", label: "Client satisfaction" },
      ],
      caseLabel: "CASE STUDY",
      caseTitle: "Propty",
      caseSub: "Property management software",
      caseDesc: "A complete property management platform, built and maintained by our team. From concept to production, with over 420,000 lines of code and real paying customers in the Dutch market.",
      caseStats: [
        { value: "420K+", label: "Lines of code" },
        { value: "< 3 mo", label: "To production" },
        { value: "Active", label: "In market" },
      ],
      caseMore: "More projects coming soon",
    },
  },

  werkwijze: {
    nl: {
      label: "WERKWIJZE",
      headline: "In vier stappen van idee naar resultaat.",
      steps: [
        {
          num: "01",
          title: "Kennismaking",
          desc: "We bellen. Geen verkooppraatje. Gewoon luisteren naar wat u nodig heeft. Duurt 20 minuten.",
        },
        {
          num: "02",
          title: "Voorstel & prijs",
          desc: "Binnen 48 uur heeft u een helder voorstel. Met scope, planning en vaste prijs. Akkoord? Dan beginnen we.",
        },
        {
          num: "03",
          title: "Oplevering",
          desc: "U krijgt elke week een update. U geeft feedback. Wij verwerken het. Geen verrassingen bij de eindoplevering.",
        },
        {
          num: "04",
          title: "Groei",
          desc: "Na oplevering laten we u niet vallen. Marketing, optimalisatie, doorontwikkeling. We groeien met u mee.",
        },
      ],
    },
    en: {
      label: "PROCESS",
      headline: "From idea to result in four steps.",
      steps: [
        {
          num: "01",
          title: "Introduction",
          desc: "We call. No sales pitch. Just listening to what you need. Takes 20 minutes.",
        },
        {
          num: "02",
          title: "Proposal & price",
          desc: "Within 48 hours you have a clear proposal. With scope, timeline and fixed price. Agreed? We start.",
        },
        {
          num: "03",
          title: "Delivery",
          desc: "You get weekly updates. You give feedback. We process it. No surprises at final delivery.",
        },
        {
          num: "04",
          title: "Growth",
          desc: "After delivery we don't leave you. Marketing, optimisation, further development. We grow with you.",
        },
      ],
    },
  },

  overOns: {
    nl: {
      label: "OVER ONS",
      headline: "Gevestigd aan de Keizersgracht.",
      story: "Groupany is een digitaal bureau in Amsterdam dat software bouwt, websites ontwikkelt, marketing runt en recruitment automatiseert. Wij zijn geen traditioneel bureau dat alleen maar levert en doorschuift. Wij zijn een vaste partner die meebouwt aan uw groei.",
      story2: "Ons team combineert menselijke expertise met de nieuwste technologie. Zo leveren wij resultaten die normaal alleen voor grote bedrijven zijn weggelegd. Sneller, transparanter en betaalbaarder.",
      diffTitle: "Wat ons anders maakt",
      diffs: [
        {
          title: "Wij bouwen het zelf ook",
          desc: "Wij runnen zelf meerdere bedrijven op dezelfde technologie. Als wij zeggen dat iets werkt, is dat omdat wij het dagelijks gebruiken.",
        },
        {
          title: "Alles onder een dak",
          desc: "Software, websites, marketing en recruitment bij een team. Geen gedoe met vijf bureaus die niet communiceren.",
        },
        {
          title: "Eerlijke prijzen",
          desc: "Gevestigd aan de Keizersgracht, ingeschreven bij de KvK, met een echt team. Eerlijke tarieven, duidelijke offertes.",
        },
      ],
      teamTitle: "Ons team",
      team: [
        { name: "Bart", role: "Oprichter & strateeg", isHuman: true },
        { name: "Max", role: "Chief of Staff", isHuman: false },
        { name: "Sam", role: "CTO", isHuman: false },
        { name: "Jessica", role: "CCO", isHuman: false },
      ],
      address: "Keizersgracht 520\n1017 EK Amsterdam",
    },
    en: {
      label: "ABOUT US",
      headline: "Based on the Keizersgracht.",
      story: "Groupany is a digital agency in Amsterdam that builds software, develops websites, runs marketing and automates recruitment. We are not a traditional agency that just delivers and moves on. We are a permanent partner that builds alongside your growth.",
      story2: "Our team combines human expertise with the latest technology. This way we deliver results that are normally only available to large companies. Faster, more transparent and more affordable.",
      diffTitle: "What makes us different",
      diffs: [
        {
          title: "We build it ourselves too",
          desc: "We run multiple companies on the same technology ourselves. When we say something works, it is because we use it daily.",
        },
        {
          title: "Everything under one roof",
          desc: "Software, websites, marketing and recruitment with one team. No hassle with five agencies that don't communicate.",
        },
        {
          title: "Honest prices",
          desc: "Based on the Keizersgracht, registered at the Chamber of Commerce, with a real team. Fair rates, clear proposals.",
        },
      ],
      teamTitle: "Our team",
      team: [
        { name: "Bart", role: "Founder & strategist", isHuman: true },
        { name: "Max", role: "Chief of Staff", isHuman: false },
        { name: "Sam", role: "CTO", isHuman: false },
        { name: "Jessica", role: "CCO", isHuman: false },
      ],
      address: "Keizersgracht 520\n1017 EK Amsterdam",
    },
  },

  contact: {
    nl: {
      label: "CONTACT",
      headline: "Nieuwsgierig? Plan een vrijblijvend gesprek.",
      sub: "Geen verplichtingen. Geen verkooppraatje. Gewoon 20 minuten om te kijken of we bij elkaar passen.",
      form: {
        name: "Naam",
        email: "E-mailadres",
        phone: "Telefoon",
        service: "Waar kunnen we u mee helpen?",
        serviceOptions: ["Websites & webshops", "Software op maat", "Marketing & SEO", "Recruitment", "Anders"],
        message: "Uw bericht",
        submit: "Verstuur bericht",
        sending: "Versturen...",
        sent: "Bericht verstuurd!",
      },
      info: {
        title: "Contactgegevens",
        address: "Keizersgracht 520\n1017 EK Amsterdam",
        email: "info@groupany.nl",
        phone: "+31 20 XXX XXXX",
        note: "Wij reageren binnen 4 uur op werkdagen.",
      },
    },
    en: {
      label: "CONTACT",
      headline: "Curious? Schedule a no-obligation call.",
      sub: "No commitments. No sales pitch. Just 20 minutes to see if we are a good fit.",
      form: {
        name: "Name",
        email: "Email address",
        phone: "Phone",
        service: "How can we help you?",
        serviceOptions: ["Websites & webshops", "Custom software", "Marketing & SEO", "Recruitment", "Other"],
        message: "Your message",
        submit: "Send message",
        sending: "Sending...",
        sent: "Message sent!",
      },
      info: {
        title: "Contact details",
        address: "Keizersgracht 520\n1017 EK Amsterdam",
        email: "info@groupany.nl",
        phone: "+31 20 XXX XXXX",
        note: "We respond within 4 hours on business days.",
      },
    },
  },

  footer: {
    nl: {
      tagline: "Uw digitale partner in Amsterdam. Software, websites en marketing die werken.",
      columns: [
        {
          title: "Diensten",
          links: [
            { label: "Websites & webshops", href: "#diensten" },
            { label: "Software op maat", href: "#diensten" },
            { label: "Marketing & SEO", href: "#diensten" },
            { label: "Recruitment", href: "#diensten" },
          ],
        },
        {
          title: "Bedrijf",
          links: [
            { label: "Over ons", href: "#over-ons" },
            { label: "Werkwijze", href: "#werkwijze" },
            { label: "Resultaten", href: "#resultaten" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Informatie",
          links: [
            { label: "Privacybeleid", href: "#" },
            { label: "Algemene voorwaarden", href: "#" },
          ],
        },
      ],
    },
    en: {
      tagline: "Your digital partner in Amsterdam. Software, websites and marketing that work.",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Websites & webshops", href: "#diensten" },
            { label: "Custom software", href: "#diensten" },
            { label: "Marketing & SEO", href: "#diensten" },
            { label: "Recruitment", href: "#diensten" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About us", href: "#over-ons" },
            { label: "Process", href: "#werkwijze" },
            { label: "Results", href: "#resultaten" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Information",
          links: [
            { label: "Privacy policy", href: "#" },
            { label: "Terms & conditions", href: "#" },
          ],
        },
      ],
    },
  },
}
