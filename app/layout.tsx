import type { Metadata } from "next"
import "./globals.css"

const BASE_URL = "https://groupany.nl"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Groupany | Uw technologiepartner in Amsterdam",
    template: "%s | Groupany",
  },
  description:
    "Websites, software en marketing die echt werken. Vaste prijzen, geen verrassingen. Gevestigd aan de Keizersgracht in Amsterdam.",
  keywords: [
    "digitaal bureau Amsterdam",
    "software op maat",
    "website laten maken",
    "marketing bureau",
    "social recruitment",
    "Groupany",
    "Amsterdam",
    "MKB",
  ],
  authors: [{ name: "Groupany", url: BASE_URL }],
  creator: "Groupany",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: BASE_URL,
    siteName: "Groupany",
    title: "Groupany | Uw technologiepartner in Amsterdam",
    description: "Websites, software en marketing die echt werken. Vaste prijzen, geen verrassingen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupany | Uw technologiepartner in Amsterdam",
    description: "Websites, software en marketing die echt werken. Vaste prijzen, geen verrassingen.",
  },
  robots: { index: true, follow: true },
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
