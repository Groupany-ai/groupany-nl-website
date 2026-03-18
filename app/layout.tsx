import type { Metadata } from "next"
import "./globals.css"

const BASE_URL = "https://groupany.nl"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Groupany — Uw digitale team. Altijd aan het werk.",
    template: "%s | Groupany",
  },
  description:
    "Software, marketing en websites — gebouwd door AI-specialisten die dag en nacht voor u werken. Sneller. Slimmer. Betaalbaarder.",
  keywords: [
    "digitaal bureau",
    "software op maat",
    "website laten maken",
    "marketing bureau",
    "social recruitment",
    "AI bureau Nederland",
    "Groupany",
    "Amsterdam",
  ],
  authors: [{ name: "Groupany", url: BASE_URL }],
  creator: "Groupany",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: BASE_URL,
    siteName: "Groupany",
    title: "Groupany — Uw digitale team. Altijd aan het werk.",
    description:
      "Software, marketing en websites — gebouwd door AI-specialisten die dag en nacht voor u werken.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupany — Uw digitale team",
    description: "Software, marketing en websites. Sneller. Slimmer. Betaalbaarder.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
