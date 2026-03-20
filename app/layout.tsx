import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://groupany.nl'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Groupany | Uw digitale partner in Amsterdam',
    template: '%s | Groupany',
  },
  description:
    'Software op maat, professionele websites en datagedreven marketing. Vaste prijzen, geen verrassingen. Gevestigd aan de Keizersgracht in Amsterdam.',
  keywords: [
    'digitaal bureau Amsterdam',
    'software op maat',
    'website laten maken',
    'marketing bureau',
    'SEO bureau Amsterdam',
    'social recruitment',
    'Groupany',
    'Amsterdam',
    'MKB',
  ],
  authors: [{ name: 'Groupany', url: BASE_URL }],
  creator: 'Groupany',
  publisher: 'Groupany',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: BASE_URL,
    siteName: 'Groupany',
    title: 'Groupany | Uw digitale partner in Amsterdam',
    description: 'Software op maat, professionele websites en datagedreven marketing. Vaste prijzen, geen verrassingen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groupany | Uw digitale partner in Amsterdam',
    description: 'Software op maat, professionele websites en datagedreven marketing.',
  },
}

const organisationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Groupany',
      url: BASE_URL,
      description: 'Groupany is een digitaal bureau in Amsterdam dat software bouwt, websites ontwikkelt en marketing runt.',
      email: 'info@groupany.nl',
      foundingDate: '2024',
      founders: [{ '@type': 'Person', name: 'Bart Korpershoek' }],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Keizersgracht 520',
        postalCode: '1017 EK',
        addressLocality: 'Amsterdam',
        addressCountry: 'NL',
      },
      sameAs: ['https://linkedin.com/company/groupany'],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Groupany',
      description: 'Uw digitale partner in Amsterdam.',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet" />
        <link rel="canonical" href={BASE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('groupany-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();` }} />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
