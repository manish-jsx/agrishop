import "server-only"
import type { Locale } from "./dictionaries/dictionaries"

// Define the dictionary type
export interface Dictionary {
  // Add any common dictionary properties here
  [key: string]: any
}

export interface SEODictionary {
  home: {
    title: string
    description: string
    keywords: string[]
  }
  products: {
    title: string
    description: string
    keywords: string[]
  }
  services: {
    title: string
    description: string
    keywords: string[]
  }
  blog: {
    title: string
    description: string
    keywords: string[]
  }
  contact: {
    title: string
    description: string
    keywords: string[]
  }
  about: {
    title: string
    description: string
    keywords: string[]
  }
}

// Import dictionaries
import * as enDict from "./dictionaries/en.json"
import * as hiDict from "./dictionaries/hi.json"

// Import SEO dictionaries
import * as enSEO from "./dictionaries/en-seo.json"
import * as hiSEO from "./dictionaries/hi-seo.json"

// Dictionary mapping
const dictionaries = {
  en: enDict,
  hi: hiDict,
}

// SEO Dictionary mapping
const seoDictionaries = {
  en: enSEO,
  hi: hiSEO,
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  // Default to English if the locale is not supported
  return dictionaries[locale as Locale] || dictionaries.en
}

export async function getSEODictionary(locale: string): Promise<SEODictionary> {
  // Default to English if the locale is not supported
  return seoDictionaries[locale as Locale] || seoDictionaries.en
}
