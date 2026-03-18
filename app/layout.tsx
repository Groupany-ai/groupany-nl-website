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
    description:
      "Websites, software en marketing die echt werken. Vaste prijzen, geen verrassingen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupany | Uw technologiepartner in Amsterdam",
    description: "Websites, software en marketing die echt werken. Vaste prijzen, geen verrassingen.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
