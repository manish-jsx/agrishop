import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { getDictionary, getSEODictionary } from "./dictionaries"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ClientProviders from "./client-providers"
import { LocalBusinessStructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // Default to home page SEO if path is not specified
  const pageSEO = seoDict.home

  return {
    title: pageSEO.title,
    description: pageSEO.description,
    keywords: pageSEO.keywords,
    alternates: {
      canonical: `https://agrishop.com/${params.lang}`,
      languages: {
        en: `https://agrishop.com/en`,
        hi: `https://agrishop.com/hi`,
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  // Fetch dictionary on the server
  const dictionary = await getDictionary(params.lang)

  // Extract WhatsApp-related translations
  const whatsappDictionary = dictionary.whatsapp || {
    welcomeMessage: "Hello! 👋 Welcome to AgriShop. How can we help you today?",
    placeholderText: "Type your message...",
    sendButtonText: "Send",
    businessName: "AgriShop Support",
    businessHours: "Available 9 AM - 6 PM",
  }

  // Determine alternate language
  const alternateLang = params.lang === "en" ? "hi" : "en"

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        {/* Add hreflang tags */}
        <link rel="alternate" hrefLang="en" href={`https://agrishop.com/en`} />
        <link rel="alternate" hrefLang="hi" href={`https://agrishop.com/hi`} />
        <link rel="alternate" hrefLang="x-default" href={`https://agrishop.com/en`} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header lang={params.lang} dictionary={dictionary} />
          {children}
          <Footer lang={params.lang} dictionary={dictionary} />
          <ClientProviders whatsappDictionary={whatsappDictionary} />

          {/* Add structured data */}
          <LocalBusinessStructuredData
            name="AgriShop"
            description="Government approved agriculture shop providing fertilizers, seeds, pesticides, and gardening solutions in Banaras and Mughalsarai."
            address="123 Agriculture Road, Lanka, Varanasi, Uttar Pradesh 221005"
            telephone="+919876543210"
            email="contact@agrishop.com"
            url={`https://agrishop.com/${params.lang}`}
            geo={{
              latitude: "25.2677", // Approximate coordinates for Varanasi/Banaras
              longitude: "82.9913",
            }}
            areaServed={["Banaras", "Varanasi", "Mughalsarai", "Chandauli"]}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
