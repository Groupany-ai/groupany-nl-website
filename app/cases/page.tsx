"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

type Lang = "nl" | "en"

const CASES = [
  {
    client: "Tom van der Berg",
    company: "Berg Fietsen",
    sector: { nl: "Retail & E-commerce", en: "Retail & E-commerce" },
    tag: { nl: "Webshop + SEO", en: "Webshop + SEO" },
    color: "#2563EB",
    title: {
      nl: "Volledige webshop live in 3 weken — meer omzet dan de fysieke winkel",
      en: "Full webshop live in 3 weeks — more revenue than the physical store",
    },
    challenge: {
      nl: "Tom runde een fietsenwinkel in Amsterdam met een verouderde website die geen online bestellingen ondersteunde. In de zomer liep hij 40% van zijn potentiële omzet mis — mensen zochten online en vonden zijn concurrenten.",
      en: "Tom ran a bike shop in Amsterdam with an outdated website that didn't support online orders. In summer he was missing 40% of potential revenue — people searched online and found his competitors.",
    },
    result: {
      nl: "Groupany bouwde een volledige webshop in 3 weken: productpagina's, betaalintegratie, voorraadbeheer en lokale SEO. In de eerste maand na lancering genereerde de webshop meer omzet dan de fysieke winkel op zijn drukste zaterdagen.",
      en: "Groupany built a full webshop in 3 weeks: product pages, payment integration, inventory management and local SEO. In the first month after launch, the webshop generated more revenue than the physical store on its busiest Saturdays.",
    },
    quote: {
      nl: "In 3 weken hadden we een volledige webshop. Sneller dan verwacht, netter dan verwacht. Precies wat we nodig hadden.",
      en: "In 3 weeks we had a full webshop. Faster than expected, cleaner than expected. Exactly what we needed.",
    },
    metrics: [
      { v: "3w", l: { nl: "Van briefing tot live", en: "Brief to live" } },
      { v: "+140%", l: { nl: "Online omzet maand 1", en: "Online revenue month 1" } },
      { v: "1×", l: { nl: "Vaste prijs, geen verrassingen", en: "Fixed price, no surprises" } },
    ],
  },
  {
    client: "Lisa Martens",
    company: "Martens Makelaars",
    sector: { nl: "Vastgoed & Makelaardij", en: "Real Estate" },
    tag: { nl: "Google Ads + SEO", en: "Google Ads + SEO" },
    color: "#8B5CF6",
    title: {
      nl: "Google Ads campagne 3× efficiënter — meer leads, minder kosten",
      en: "Google Ads campaign 3× more efficient — more leads, lower cost",
    },
    challenge: {
      nl: "Lisa's makelaarskantoor gaf maandelijks €2.400 uit aan Google Ads zonder duidelijke resultaten. De campagnes waren slecht ingericht: brede zoekwoorden, geen conversietracking, en advertentieteksten die niet converterden.",
      en: "Lisa's real estate agency spent €2,400 monthly on Google Ads without clear results. The campaigns were poorly configured: broad keywords, no conversion tracking, and ad copy that didn't convert.",
    },
    result: {
      nl: "Na een volledige campagneherstructurering door Groupany: conversietracking ingericht, zoekwoorden uitgedund, advertentieteksten herschreven. Kosten per lead daalden met 68%. Meer leads per maand bij 40% lager budget.",
      en: "After a full campaign restructure by Groupany: conversion tracking set up, keywords tightened, ad copy rewritten. Cost per lead dropped 68%. More leads per month at 40% lower budget.",
    },
    quote: {
      nl: "Onze Google Ads campagne draait nu 3x zo efficiënt. Meer leads, minder kosten. Groupany begrijpt ons bedrijf echt.",
      en: "Our Google Ads campaign is now 3× more efficient. More leads, lower cost. Groupany truly understands our business.",
    },
    metrics: [
      { v: "3×", l: { nl: "Efficiënter", en: "More efficient" } },
      { v: "-68%", l: { nl: "Kosten per lead", en: "Cost per lead" } },
      { v: "+55%", l: { nl: "Meer leads/maand", en: "More leads/month" } },
    ],
  },
  {
    client: "Jeroen Hoek",
    company: "Hoek Logistiek",
    sector: { nl: "Transport & Logistiek", en: "Transport & Logistics" },
    tag: { nl: "Maatwerksoftware", en: "Custom Software" },
    color: "#10B981",
    title: {
      nl: "Maatwerk planningssysteem vervangt 5 Excel-sheets — 12 uur per week bespaard",
      en: "Custom planning system replaces 5 Excel sheets — 12 hours saved per week",
    },
    challenge: {
      nl: "Jeroen's transportbedrijf werkte met 5 verschillende Excel-sheets voor planning, rittenregistratie, facturatie en klantencontact. Medewerkers kopieerden dagelijks data tussen systemen. Fouten kostten klantrelaties.",
      en: "Jeroen's transport company operated with 5 different Excel sheets for planning, route logging, invoicing and client contact. Staff copied data between systems daily. Errors cost client relationships.",
    },
    result: {
      nl: "Groupany bouwde een maatwerk webapplicatie die alle processen integreert: rittenplanning, GPS-koppeling, automatische facturatie en klantportaal. Implementatietijd: 6 weken. Besparing: 12 uur per week per medewerker.",
      en: "Groupany built a custom web application integrating all processes: route planning, GPS integration, automatic invoicing and client portal. Implementation time: 6 weeks. Saving: 12 hours per week per employee.",
    },
    quote: {
      nl: "Ze bouwden de software die we nodig hadden en dachten mee over oplossingen die we zelf niet hadden bedacht.",
      en: "They built the software we needed and contributed solutions we hadn't even thought of ourselves.",
    },
    metrics: [
      { v: "6w", l: { nl: "Implementatietijd", en: "Implementation" } },
      { v: "12u", l: { nl: "Bespaard per week", en: "Saved per week" } },
      { v: "0", l: { nl: "Data-entry fouten", en: "Data entry errors" } },
    ],
  },
]

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function CasesPage() {
  const [lang, setLang] = useState<Lang>("nl")
  useEffect(() => {
    const b = navigator.language?.slice(0, 2)
    if (b === "en") setLang("en")
  }, [])

  return (
    <main style={{ minHeight: "100vh", background: "#FAFBFF", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif" }}>
      {/* Nav */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(226,232,240,0.8)",
        padding: "0 24px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#0F172A", textDecoration: "none", letterSpacing: "-0.02em" }}>
          Groupany
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/#diensten" style={{ fontSize: 14, color: "#64748B", textDecoration: "none", fontWeight: 500 }}>
            {lang === "nl" ? "Diensten" : "Services"}
          </Link>
          <Link href="/blog" style={{ fontSize: 14, color: "#64748B", textDecoration: "none", fontWeight: 500 }}>Blog</Link>
          <Link href="/cases" style={{ fontSize: 14, color: "#2563EB", textDecoration: "none", fontWeight: 700, background: "rgba(37,99,235,0.07)", padding: "6px 14px", borderRadius: 8 }}>Cases</Link>
          <Link href="/#contact" style={{
            fontSize: 14, fontWeight: 700, color: "#fff",
            background: "#2563EB", padding: "9px 20px", borderRadius: 9,
            textDecoration: "none",
          }}>
            {lang === "nl" ? "Gratis gesprek" : "Free call"}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>
              {lang === "nl" ? "CASES" : "CASES"}
            </div>
            <h1 style={{
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#0F172A",
              letterSpacing: "-0.03em", marginBottom: 18, lineHeight: 1.1,
            }}>
              {lang === "nl" ? "Resultaten die spreken voor zich." : "Results that speak for themselves."}
            </h1>
            <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.72 }}>
              {lang === "nl"
                ? "Echte projecten, echte cijfers. Zo ziet ons werk eruit in de praktijk."
                : "Real projects, real numbers. This is what our work looks like in practice."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {CASES.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              {/* Top accent */}
              <div style={{ height: 5, background: `linear-gradient(to right, ${c.color}, ${c.color}55)` }} />

              <div style={{ padding: "40px 40px 36px" }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: c.color,
                    background: `${c.color}12`, padding: "4px 12px",
                    borderRadius: 99, letterSpacing: "0.06em",
                  }}>
                    {c.tag[lang]}
                  </span>
                  <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>
                    {c.client} · {c.company} · {c.sector[lang]}
                  </span>
                </div>

                <h2 style={{
                  fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, color: "#0F172A",
                  marginBottom: 28, letterSpacing: "-0.015em", lineHeight: 1.25,
                }}>
                  {c.title[lang]}
                </h2>

                {/* Two columns: challenge/result + metrics */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
                  <div>
                    {/* Challenge */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#CBD5E1", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                        {lang === "nl" ? "Uitdaging" : "Challenge"}
                      </div>
                      <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.72 }}>{c.challenge[lang]}</p>
                    </div>

                    {/* Result */}
                    <div style={{ marginBottom: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#CBD5E1", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                        {lang === "nl" ? "Resultaat" : "Result"}
                      </div>
                      <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.72 }}>{c.result[lang]}</p>
                    </div>

                    {/* Quote */}
                    <div style={{
                      padding: "18px 22px",
                      background: `${c.color}07`,
                      border: `1px solid ${c.color}18`,
                      borderRadius: 14,
                    }}>
                      <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.72, fontStyle: "italic", margin: 0 }}>
                        "{c.quote[lang]}"
                      </p>
                      <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: "#0F172A" }}>
                        {c.client}, {c.company}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 160 }}>
                    {c.metrics.map(m => (
                      <div key={m.v} style={{
                        textAlign: "center",
                        padding: "20px 16px",
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: 14,
                      }}>
                        <div style={{ fontSize: 30, fontWeight: 900, color: c.color, lineHeight: 1, letterSpacing: "-0.02em" }}>{m.v}</div>
                        <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, marginTop: 6, lineHeight: 1.4 }}>{m.l[lang]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(145deg, #0B1120 0%, #0F1E3A 50%, #0B1120 100%)",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-20%", left: "30%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 560, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: "-0.02em" }}>
            {lang === "nl" ? "Uw project hier?" : "Your project here?"}
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>
            {lang === "nl"
              ? "Plan een gratis kennismaking. Binnen 24 uur weten we of we een match zijn."
              : "Book a free consultation. Within 24 hours we will know if we are a match."}
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 32px", borderRadius: 11,
              background: "#2563EB", color: "#fff",
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              boxShadow: "0 8px 32px rgba(37,99,235,0.45)",
            }}
          >
            {lang === "nl" ? "Gesprek inplannen" : "Book a call"} <IconArrow />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#080E1C", padding: "40px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#fff", textDecoration: "none", letterSpacing: "-0.02em" }}>
          Groupany
        </Link>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 12 }}>
          © 2026 Groupany. Alle rechten voorbehouden.
        </p>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 24 }}>
          <Link href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
          <Link href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</Link>
          <Link href="/cases" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Cases</Link>
          <Link href="/#contact" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Contact</Link>
        </div>
      </footer>
    </main>
  )
}
