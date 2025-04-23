import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  hi: () => import("./dictionaries/hi.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (locale !== "en" && locale !== "hi") {
    locale = "en" // Default to English if locale is not supported
  }
  return dictionaries[locale as "en" | "hi"]()
}
