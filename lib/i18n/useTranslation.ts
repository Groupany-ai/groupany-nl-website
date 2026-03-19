'use client'

import { useState, useEffect, useCallback } from 'react'
import en from './en.json'
import nl from './nl.json'

const translations: Record<string, typeof nl> = { nl, en }

export type Locale = 'nl' | 'en'

const STORAGE_KEY = 'groupany-locale'
const LANG_EVENT = 'langchange'

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return current
}

export function useTranslation() {
  const [locale, setLocaleState] = useState<Locale>('nl')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && translations[stored]) {
      setLocaleState(stored)
    }

    const handler = () => {
      const current = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (current && translations[current]) {
        setLocaleState(current)
      }
    }
    window.addEventListener(LANG_EVENT, handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener(LANG_EVENT, handler)
      window.removeEventListener('storage', handler)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale)
    setLocaleState(newLocale)
    document.documentElement.lang = newLocale
    window.dispatchEvent(new Event(LANG_EVENT))
  }, [])

  const t = useCallback((key: string): string => {
    const val = getNestedValue(translations[locale] as unknown as Record<string, unknown>, key)
    if (typeof val === 'string') return val
    const fallback = getNestedValue(translations.nl as unknown as Record<string, unknown>, key)
    return typeof fallback === 'string' ? fallback : key
  }, [locale])

  const tArray = useCallback((key: string): string[] => {
    const val = getNestedValue(translations[locale] as unknown as Record<string, unknown>, key)
    if (Array.isArray(val)) return val
    const fallback = getNestedValue(translations.nl as unknown as Record<string, unknown>, key)
    return Array.isArray(fallback) ? fallback : [key]
  }, [locale])

  return { t, tArray, locale, setLocale }
}
