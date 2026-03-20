'use client'
import { useState, useEffect, useRef } from 'react'

const CASES = [
  {
    name: 'Propty',
    category: 'Software Platform',
    title: 'Vastgoedbeheer volledig geautomatiseerd',
    desc: 'Een compleet SaaS platform voor vastgoedbeheer. Van huurincasso en onderhoud tot bewonersportaal. Gebouwd om schaalbaar te groeien.',
    image: '/images/case-propty.png?v=3',
    logo: '/logos/propty.svg',
  },
  {
    name: 'Autoranq',
    category: 'SEO Automation',
    title: 'SEO automatisering op schaal',
    desc: 'AI-powered SEO platform dat organisch verkeer laat groeien. Geautomatiseerde content, technische audits en ranking tracking voor 200+ websites.',
    image: '/images/case-autoranq.png?v=3',
    logo: '/logos/autoranq.svg',
  },
  {
    name: 'Webgroeiers',
    category: 'Web Agency',
    title: 'Digitaal bureau voor het MKB',
    desc: 'Websites, webshops en online marketing voor lokale ondernemers. Snel, betaalbaar en persoonlijk. Van strategie tot oplevering.',
    image: '/images/case-webgroeiers.png?v=3',
    logo: '/logos/webgroeiers.svg',
  },
  {
    name: 'KLM Component Services',
    category: 'Enterprise Salesforce',
    title: 'Salesforce voor vliegtuigonderdelen',
    desc: 'Custom Salesforce development en integraties voor KLM Component Services. Logistiek platform voor vliegtuigonderdelen, niet alleen voor KLM maar voor luchtvaartmaatschappijen wereldwijd.',
    image: '/images/case-klm.png?v=3',
    logo: '/logos/klm.svg',
  },
]

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0)
  const [fade, setFade] = useState(true)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % CASES.length)
        setFade(true)
      }, 300)
    }, 7000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused])

  const handleClick = (i: number) => {
    if (i === active) return
    setFade(false)
    setTimeout(() => {
      setActive(i)
      setFade(true)
    }, 200)
  }

  const current = CASES[active]

  return (
    <div
      className="showcase-split"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="showcase-nav">
        {CASES.map((item, i) => (
          <button
            key={i}
            className={`showcase-nav-item ${i === active ? 'showcase-nav-active' : ''}`}
            onClick={() => handleClick(i)}
          >
            <span className="showcase-nav-name">{item.name}</span>
            <span className="showcase-nav-cat">{item.category}</span>
            {i === active && !paused && <div className="showcase-nav-progress" key={`prog-${active}`} />}
          </button>
        ))}
      </div>
      <div className="showcase-content">
        <div className={`showcase-panel ${fade ? 'showcase-panel-visible' : ''}`}>
          <div className="showcase-image-wrap">
            <img src={current.image} alt={current.name} className="showcase-image" />
            <div className="showcase-image-logo">
              <img src={current.logo} alt={current.name} />
            </div>
          </div>
          <div className="showcase-info">
            <h3 className="showcase-info-title">{current.title}</h3>
            <p className="showcase-info-desc">{current.desc}</p>
            <a href="/inzichten" className="showcase-info-link">Lees meer <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}
