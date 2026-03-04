import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const BASE_URL = "https://groupany.nl"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Groupany — Digitaal bureau voor ambitieuze bedrijven",
    template: "%s | Groupany",
  },
  description:
    "Groupany is een full-service digitaal bureau in Nederland. Software ontwikkeling, marketing, websites en social recruitment voor groeiende bedrijven.",
  keywords: [
    "digitaal bureau",
    "digital agency",
    "software ontwikkeling",
    "webdesign",
    "marketing bureau",
    "social recruitment",
    "Nederland",
    "Groupany",
  ],
  authors: [{ name: "Groupany", url: BASE_URL }],
  creator: "Groupany",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_GB",
    url: BASE_URL,
    siteName: "Groupany",
    title: "Groupany — Digitaal bureau voor ambitieuze bedrijven",
    description:
      "Software, websites, marketing en social recruitment. Voor groeiende bedrijven in Nederland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupany — Digital Agency Netherlands",
    description: "Software, websites, marketing en social recruitment.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={plusJakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
