"use client"

import WhatsAppProvider from "./whatsapp-provider"

interface ClientProvidersProps {
  whatsappDictionary: {
    welcomeMessage: string
    placeholderText: string
    sendButtonText: string
    businessName: string
    businessHours: string
  }
}

export default function ClientProviders({ whatsappDictionary }: ClientProvidersProps) {
  return (
    <>
      <WhatsAppProvider whatsappDictionary={whatsappDictionary} />
    </>
  )
}
