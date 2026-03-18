"use client"

import { useState } from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import Diensten from "./Diensten"
import Waarom from "./Waarom"
import Resultaten from "./Resultaten"
import Werkwijze from "./Werkwijze"
import OverOns from "./OverOns"
import Contact from "./Contact"
import Footer from "./Footer"
import type { Lang } from "@/lib/i18n"

export default function PageClient() {
  const [lang, setLang] = useState<Lang>("nl")

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Diensten lang={lang} />
        <Waarom lang={lang} />
        <Resultaten lang={lang} />
        <Werkwijze lang={lang} />
        <OverOns lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
