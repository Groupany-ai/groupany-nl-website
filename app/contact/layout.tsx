import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met Groupany. Plan een vrijblijvend gesprek of stuur een bericht.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
