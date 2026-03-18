"use client"

import { useState } from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import Services from "./Services"
import About from "./About"
import Cases from "./Cases"
import Blog from "./Blog"
import Contact from "./Contact"
import Footer from "./Footer"

export default function PageClient() {
  const [lang, setLang] = useState<"nl" | "en">("nl")

  return (
    <>
      <Nav lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Cases lang={lang} />
        <Blog lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
