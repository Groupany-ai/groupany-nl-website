import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over ons',
  description: 'Leer ons team kennen. Groupany is een digitaal bureau in Amsterdam dat software bouwt, websites ontwikkelt en marketing runt.',
}

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return children
}
