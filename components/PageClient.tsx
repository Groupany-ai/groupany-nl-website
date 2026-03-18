"use client"

import { useState } from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import Diensten from "./Diensten"
import Resultaten from "./Resultaten"
import Werkwijze from "./Werkwijze"
import OverOns from "./OverOns"
import Contact from "./Contact"
import Footer from "./Footer"

export default function PageClient() {
  const [lang, setLang] = useState<"nl" | "en">("nl")

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Diensten lang={lang} />
        <Resultaten lang={lang} />
        <Werkwijze lang={lang} />
        <OverOns lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
