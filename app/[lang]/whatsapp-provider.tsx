"use client"

import WhatsAppChat from "@/components/whatsapp-chat"

interface WhatsAppProviderProps {
  whatsappDictionary: {
    welcomeMessage: string
    placeholderText: string
    sendButtonText: string
    businessName: string
    businessHours: string
  }
}

export default function WhatsAppProvider({ whatsappDictionary }: WhatsAppProviderProps) {
  return (
    <WhatsAppChat
      phoneNumber="+919876543210" // Replace with your actual WhatsApp business number
      welcomeMessage={whatsappDictionary.welcomeMessage}
      placeholderText={whatsappDictionary.placeholderText}
      sendButtonText={whatsappDictionary.sendButtonText}
      businessName={whatsappDictionary.businessName}
      businessHours={whatsappDictionary.businessHours}
    />
  )
}
