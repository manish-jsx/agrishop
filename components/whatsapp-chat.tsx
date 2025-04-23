"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send } from "lucide-react"

interface WhatsAppChatProps {
  phoneNumber: string
  welcomeMessage: string
  placeholderText: string
  sendButtonText: string
  businessName: string
  businessHours: string
}

export default function WhatsAppChat({
  phoneNumber,
  welcomeMessage,
  placeholderText,
  sendButtonText,
  businessName,
  businessHours,
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Format phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "")

    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Reset the message input
    setMessage("")
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        aria-label="Open WhatsApp Chat"
      >
        <div className="relative w-10 h-10">
          <Image src="/whatsapp-icon.svg" alt="WhatsApp" fill className="object-contain" />
        </div>
      </button>

      {/* WhatsApp Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[320px] sm:w-[350px] rounded-lg shadow-xl bg-white transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/whatsapp-icon.svg" alt="WhatsApp" fill className="object-contain" />
            </div>
            <div>
              <h3 className="font-bold">{businessName}</h3>
              <p className="text-xs text-green-100">{businessHours}</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-200" aria-label="Close chat">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 bg-gray-100 h-[250px] overflow-y-auto">
          <div className="bg-white p-3 rounded-lg shadow-sm inline-block max-w-[85%]">
            <p className="text-sm">{welcomeMessage}</p>
            <p className="text-xs text-gray-500 text-right mt-1">
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholderText}
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button onClick={handleSendMessage} className="bg-green-500 hover:bg-green-600" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}
