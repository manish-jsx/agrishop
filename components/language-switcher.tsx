"use client"
import { usePathname, useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher({
  currentLang,
  languages,
}: {
  currentLang: string
  languages: Record<string, string>
}) {
  const router = useRouter()
  const pathname = usePathname()

  const languageOptions = [
    { code: "en", name: languages.en || "English" },
    { code: "hi", name: languages.hi || "हिंदी" },
  ]

  const switchLanguage = (locale: string) => {
    // Get the path without the locale
    const pathWithoutLocale = pathname.replace(`/${currentLang}`, "")

    // Construct the new path with the selected locale
    const newPath = `/${locale}${pathWithoutLocale || ""}`

    // Navigate to the new path
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={currentLang === language.code ? "bg-accent" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
