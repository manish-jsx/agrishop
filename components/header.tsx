"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "./language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Remove the getDictionary import and accept dictionary as a prop
export default function Header({ lang, dictionary }: { lang: string; dictionary: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Add location links to the navItems array
  const navItems = [
    { name: dictionary.nav.home, href: `/${lang}` },
    { name: dictionary.nav.products, href: `/${lang}/products` },
    { name: dictionary.nav.services, href: `/${lang}/services` },
    { name: dictionary.nav.blog || "Blog", href: `/${lang}/blog` },
    { name: dictionary.nav.about, href: `/${lang}/about` },
    { name: dictionary.nav.contact, href: `/${lang}/contact` },
  ]

  // Add locations dropdown after the existing nav items
  const locationItems = [
    { name: dictionary.locations?.banaras || "Banaras", href: `/${lang}/locations/banaras` },
    { name: dictionary.locations?.mughalsarai || "Mughalsarai", href: `/${lang}/locations/mughalsarai` },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-700">AgriShop</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-green-700 ${
                pathname === item.href ? "text-green-700" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Locations Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-green-700">
              {dictionary.nav.locations || "Locations"}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {locationItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLang={lang} languages={dictionary.languages} />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-green-700 ${
                      pathname === item.href ? "text-green-700" : "text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Locations in mobile menu */}
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-500 mb-2">{dictionary.nav.locations || "Locations"}</p>
                  {locationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-green-700 block py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
