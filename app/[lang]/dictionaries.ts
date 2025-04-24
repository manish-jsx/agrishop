import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  hi: () => import("./dictionaries/hi.json").then((module) => module.default),
}

const seoDictionaries = {
  en: () => import("./seo-en.json").then((module) => module.default),
  hi: () => import("./seo-hi.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (locale !== "en" && locale !== "hi") {
    locale = "en" // Default to English if locale is not supported
  }
  return dictionaries[locale as "en" | "hi"]()
}

export const getSEODictionary = async (locale: string) => {
  if (locale !== "en" && locale !== "hi") {
    locale = "en" // Default to English if locale is not supported
  }
  return seoDictionaries[locale as "en" | "hi"]()
}
