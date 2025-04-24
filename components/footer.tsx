"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Remove the getDictionary import and accept dictionary as a prop
export default function Footer({ lang, dictionary }: { lang: string; dictionary: any }) {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">{dictionary.footer.about}</h3>
            <p className="text-gray-600">{dictionary.footer.aboutText}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">{dictionary.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-gray-600 hover:text-green-700">
                  {dictionary.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="text-gray-600 hover:text-green-700">
                  {dictionary.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="text-gray-600 hover:text-green-700">
                  {dictionary.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-gray-600 hover:text-green-700">
                  {dictionary.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">{dictionary.footer.products}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/products/fertilizers`} className="text-gray-600 hover:text-green-700">
                  {dictionary.products.fertilizers}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products/seeds`} className="text-gray-600 hover:text-green-700">
                  {dictionary.products.seeds}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products/pesticides`} className="text-gray-600 hover:text-green-700">
                  {dictionary.products.pesticides}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products/organic`} className="text-gray-600 hover:text-green-700">
                  {dictionary.products.organic}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">{dictionary.footer.newsletter}</h3>
            <p className="text-gray-600">{dictionary.footer.newsletterText}</p>
            <div className="flex gap-2">
              <Input type="email" placeholder={dictionary.footer.emailPlaceholder} className="max-w-[220px]" />
              <Button className="bg-green-700 hover:bg-green-800">{dictionary.footer.subscribe}</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600 text-sm">{dictionary.footer.copyright}</div>
      </div>
    </footer>
  )
}
