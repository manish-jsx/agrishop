import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { getDictionary } from "./dictionaries"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ClientProviders from "./client-providers"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
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

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header lang={params.lang} dictionary={dictionary} />
          {children}
          <Footer lang={params.lang} dictionary={dictionary} />
          <ClientProviders whatsappDictionary={whatsappDictionary} />
        </ThemeProvider>
      </body>
    </html>
  )
}
