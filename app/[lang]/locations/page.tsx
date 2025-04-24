import Image from "next/image"
import Link from "next/link"
import { getDictionary, getSEODictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import SEOMeta from "@/components/seo-meta"

export default async function LocationsPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // SEO data
  const alternateLang = params.lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${params.lang}/locations`
  const alternateUrl = `${baseUrl}/${alternateLang}/locations`

  const locationsTitle = params.lang === "en" ? "Our Locations | AgriShop" : "हमारे स्थान | एग्रीशॉप"
  const locationsDescription =
    params.lang === "en"
      ? "Visit our agriculture shops in Banaras and Mughalsarai for high-quality fertilizers, seeds, pesticides, and gardening solutions."
      : "उच्च गुणवत्ता वाले उर्वरक, बीज, कीटनाशक और बागवानी समाधान के लिए बनारस और मुगलसराय में हमारी कृषि दुकानों पर जाएं।"

  // Location data
  const locations = [
    {
      id: "banaras",
      name: dict.locations.banaras,
      address: "123 Agriculture Road, Lanka, Varanasi, Uttar Pradesh 221005",
      image: "/placeholder.svg?height=300&width=500",
      phone: "+91 98765 43210",
      email: "banaras@agrishop.com",
      hours: {
        weekdays:
          params.lang === "en" ? "Monday-Saturday: 9:00 AM - 7:00 PM" : "सोमवार-शनिवार: सुबह 9:00 बजे - शाम 7:00 बजे",
        sunday: params.lang === "en" ? "Sunday: 10:00 AM - 2:00 PM" : "रविवार: सुबह 10:00 बजे - दोपहर 2:00 बजे",
      },
      specialties: [
        params.lang === "en" ? "Banarasi Vegetables Seeds" : "बनारसी सब्जियों के बीज",
        params.lang === "en" ? "Ganga Basin Soil Mix" : "गंगा बेसिन मिट्टी मिश्रण",
        params.lang === "en" ? "Traditional Farming Tools" : "पारंपरिक खेती के उपकरण",
      ],
    },
    {
      id: "mughalsarai",
      name: dict.locations.mughalsarai,
      address: "456 Station Road, Mughalsarai, Chandauli, Uttar Pradesh 232101",
      image: "/placeholder.svg?height=300&width=500",
      phone: "+91 98765 43211",
      email: "mughalsarai@agrishop.com",
      hours: {
        weekdays:
          params.lang === "en" ? "Monday-Saturday: 9:00 AM - 7:00 PM" : "सोमवार-शनिवार: सुबह 9:00 बजे - शाम 7:00 बजे",
        sunday: params.lang === "en" ? "Sunday: 10:00 AM - 2:00 PM" : "रविवार: सुबह 10:00 बजे - दोपहर 2:00 बजे",
      },
      specialties: [
        params.lang === "en" ? "Mughalsarai Wheat Seeds" : "मुगलसराय गेहूं के बीज",
        params.lang === "en" ? "Chandauli Rice Seeds" : "चंदौली चावल के बीज",
        params.lang === "en" ? "Local Fertilizer Mix" : "स्थानीय उर्वरक मिश्रण",
      ],
    },
  ]

  return (
    <>
      <SEOMeta
        title={locationsTitle}
        description={locationsDescription}
        keywords="agriculture shop Banaras, agriculture shop Mughalsarai, fertilizer shop Banaras, fertilizer shop Mughalsarai, seeds shop Banaras, seeds shop Mughalsarai"
        currentUrl={currentUrl}
        alternateUrl={alternateUrl}
        lang={params.lang}
        alternateLang={alternateLang}
      />

      <main className="flex min-h-screen flex-col">
        {/* Hero Banner */}
        <section className="bg-green-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{dict.locations.title}</h1>
              <p className="text-gray-100 text-lg">{dict.locations.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Locations List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">
                        {params.lang === "en" ? "Contact Information" : "संपर्क जानकारी"}
                      </h3>
                      <p className="text-gray-600">
                        {params.lang === "en" ? "Phone" : "फोन"}: {location.phone}
                      </p>
                      <p className="text-gray-600">
                        {params.lang === "en" ? "Email" : "ईमेल"}: {location.email}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">{params.lang === "en" ? "Business Hours" : "व्यापार के घंटे"}</h3>
                      <p className="text-gray-600">{location.hours.weekdays}</p>
                      <p className="text-gray-600">{location.hours.sunday}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">
                        {params.lang === "en" ? "Location Specialties" : "स्थान विशेषताएं"}
                      </h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {location.specialties.map((specialty, index) => (
                          <li key={index}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/${params.lang}/locations/${location.id}`}>
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        {params.lang === "en" ? "View Details" : "विवरण देखें"}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Finder */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              {params.lang === "en" ? "Find Your Nearest Store" : "अपना निकटतम स्टोर खोजें"}
            </h2>
            <p className="max-w-2xl mx-auto mb-6">
              {params.lang === "en"
                ? "Enter your location to find the nearest AgriShop store and get directions."
                : "निकटतम एग्रीशॉप स्टोर खोजने और दिशा-निर्देश प्राप्त करने के लिए अपना स्थान दर्ज करें।"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="text"
                placeholder={params.lang === "en" ? "Enter your location" : "अपना स्थान दर्ज करें"}
                className="px-4 py-2 rounded-md w-full"
              />
              <Button className="bg-green-700 hover:bg-green-800">{dict.locations.findNearest}</Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              {params.lang === "en" ? "Need Agricultural Advice?" : "कृषि सलाह चाहिए?"}
            </h2>
            <p className="max-w-2xl mx-auto mb-6">
              {params.lang === "en"
                ? "Our agricultural experts are available at both locations to provide personalized advice for your farming needs."
                : "हमारे कृषि विशेषज्ञ आपकी खेती की जरूरतों के लिए व्यक्तिगत सलाह प्रदान करने के लिए दोनों स्थानों पर उपलब्ध हैं।"}
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {params.lang === "en" ? "Contact Us" : "संपर्क करें"}
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
