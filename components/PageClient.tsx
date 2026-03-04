"use client"

import { useState } from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import Services from "./Services"

export default function PageClient() {
  const [lang, setLang] = useState<"nl" | "en">("nl")

  return (
    <>
      <Nav lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
      </main>
    </>
  )
}
