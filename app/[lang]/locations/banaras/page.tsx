import Image from "next/image"
import { getDictionary, getSEODictionary } from "../../dictionaries"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Check } from "lucide-react"
import SEOMeta from "@/components/seo-meta"
import { LocalBusinessStructuredData } from "@/components/structured-data"
import Link from "next/link"

export default async function BanarasLocationPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // SEO data
  const alternateLang = params.lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${params.lang}/locations/banaras`
  const alternateUrl = `${baseUrl}/${alternateLang}/locations/banaras`

  const seoData = seoDict.locations?.banaras || {
    title: "AgriShop Banaras | Best Agriculture Shop in Varanasi",
    description:
      "Visit our Banaras store for high-quality fertilizers, seeds, pesticides, and gardening solutions. Located near Lanka Gate, serving farmers since 1995.",
    keywords:
      "agriculture shop Banaras, fertilizer shop in Banaras, organic farming Banaras, कृषि सलाह बनारस, best fertilizer shop near me Banaras, खेती की दवा बनारस, Banaras agriculture market, buy organic fertilizer online Banaras",
  }

  // Popular products in Banaras
  const popularProducts = [
    {
      name: params.lang === "en" ? "Ganga Basin Soil Mix" : "गंगा बेसिन मिट्टी मिश्रण",
      description:
        params.lang === "en"
          ? "Special soil mix enriched with Ganga basin minerals, perfect for local crops"
          : "गंगा बेसिन खनिजों से समृद्ध विशेष मिट्टी मिश्रण, स्थानीय फसलों के लिए एकदम सही",
      price: "₹350/bag",
    },
    {
      name: params.lang === "en" ? "Banarasi Vegetable Seeds Kit" : "बनारसी सब्जी बीज किट",
      description:
        params.lang === "en"
          ? "Collection of vegetable seeds specially selected for Banaras climate"
          : "बनारस जलवायु के लिए विशेष रूप से चयनित सब्जी बीजों का संग्रह",
      price: "₹450/kit",
    },
    {
      name: params.lang === "en" ? "Organic Vermicompost" : "जैविक वर्मीकम्पोस्ट",
      description:
        params.lang === "en"
          ? "100% organic vermicompost produced locally in Banaras"
          : "बनारस में स्थानीय रूप से उत्पादित 100% जैविक वर्मीकम्पोस्ट",
      price: "₹280/bag",
    },
  ]

  // Agricultural services in Banaras
  const services = [
    {
      name: params.lang === "en" ? "Soil Testing" : "मिट्टी परीक्षण",
      description:
        params.lang === "en"
          ? "Comprehensive soil analysis for Banaras region farms"
          : "बनारस क्षेत्र के खेतों के लिए व्यापक मिट्टी विश्लेषण",
    },
    {
      name: params.lang === "en" ? "Terrace Garden Setup" : "छत पर बगीचा सेटअप",
      description:
        params.lang === "en"
          ? "Complete terrace gardening solutions for Banaras homes"
          : "बनारस के घरों के लिए पूर्ण छत बागवानी समाधान",
    },
    {
      name: params.lang === "en" ? "Crop Advisory" : "फसल सलाहकार",
      description:
        params.lang === "en"
          ? "Expert advice on crops suitable for Banaras climate"
          : "बनारस जलवायु के लिए उपयुक्त फसलों पर विशेषज्ञ सलाह",
    },
  ]

  return (
    <>
      <SEOMeta
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        currentUrl={currentUrl}
        alternateUrl={alternateUrl}
        lang={params.lang}
        alternateLang={alternateLang}
      />

      <LocalBusinessStructuredData
        name="AgriShop Banaras"
        description="Government approved agriculture shop providing fertilizers, seeds, pesticides, and gardening solutions in Banaras."
        address="123 Agriculture Road, Lanka, Varanasi, Uttar Pradesh 221005"
        telephone="+919876543210"
        email="banaras@agrishop.com"
        url={currentUrl}
        geo={{
          latitude: "25.2677",
          longitude: "82.9913",
        }}
        areaServed={["Banaras", "Varanasi", "Lanka", "BHU"]}
      />

      <main className="flex min-h-screen flex-col">
        {/* Hero Banner */}
        <section className="bg-green-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {params.lang === "en" ? "AgriShop Banaras" : "एग्रीशॉप बनारस"}
              </h1>
              <p className="text-gray-100 text-lg">
                {params.lang === "en"
                  ? "Your trusted agriculture partner in the heart of Banaras"
                  : "बनारस के केंद्र में आपका विश्वसनीय कृषि साथी"}
              </p>
              <div className="mt-6 inline-block bg-green-600 px-3 py-1 text-sm rounded-full">
                {params.lang === "en" ? "Government Approved" : "सरकार द्वारा अनुमोदित"}
              </div>
            </div>
          </div>
        </section>

        {/* Location Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  {params.lang === "en" ? "Visit Our Banaras Store" : "हमारे बनारस स्टोर पर जाएं"}
                </h2>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">{params.lang === "en" ? "Address" : "पता"}</p>
                    <p className="text-gray-600">
                      123 Agriculture Road, Lanka
                      <br />
                      Near Banaras Hindu University
                      <br />
                      Varanasi, Uttar Pradesh 221005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">{params.lang === "en" ? "Contact" : "संपर्क"}</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">banaras@agrishop.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">{params.lang === "en" ? "Business Hours" : "व्यापार के घंटे"}</p>
                    <p className="text-gray-600">
                      {params.lang === "en"
                        ? "Monday-Saturday: 9:00 AM - 7:00 PM"
                        : "सोमवार-शनिवार: सुबह 9:00 बजे - शाम 7:00 बजे"}
                    </p>
                    <p className="text-gray-600">
                      {params.lang === "en" ? "Sunday: 10:00 AM - 2:00 PM" : "रविवार: सुबह 10:00 बजे - दोपहर 2:00 बजे"}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-green-700 hover:bg-green-800">
                    {params.lang === "en" ? "Get Directions" : "दिशा-निर्देश प्राप्त करें"}
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={params.lang === "en" ? "AgriShop Banaras Store" : "एग्रीशॉप बनारस स्टोर"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                {params.lang === "en" ? "Popular Products in Banaras" : "बनारस में लोकप्रिय उत्पाद"}
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                {params.lang === "en"
                  ? "Our bestselling agricultural products specifically for Banaras region farmers"
                  : "बनारस क्षेत्र के किसानों के लिए विशेष रूप से हमारे सबसे अधिक बिकने वाले कृषि उत्पाद"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-green-700">{product.price}</span>
                    <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                      {params.lang === "en" ? "View Details" : "विवरण देखें"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href={`/${params.lang}/products`} className="text-green-700 hover:text-green-800 font-medium">
                {params.lang === "en" ? "View All Products" : "सभी उत्पाद देखें"} →
              </Link>
            </div>
          </div>
        </section>

        {/* Agricultural Services */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                {params.lang === "en" ? "Agricultural Services in Banaras" : "बनारस में कृषि सेवाएं"}
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                {params.lang === "en"
                  ? "Professional agricultural services tailored for Banaras region"
                  : "बनारस क्षेत्र के लिए अनुकूलित पेशेवर कृषि सेवाएं"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-green-100">
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    {params.lang === "en" ? "Book Service" : "सेवा बुक करें"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AgriShop Banaras */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                {params.lang === "en" ? "Why Choose AgriShop Banaras?" : "एग्रीशॉप बनारस को क्यों चुनें?"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {params.lang === "en" ? "Local Expertise" : "स्थानीय विशेषज्ञता"}
                    </h3>
                    <p className="text-gray-600">
                      {params.lang === "en"
                        ? "Our team understands the unique agricultural conditions of Banaras region"
                        : "हमारी टीम बनारस क्षेत्र की अनूठी कृषि स्थितियों को समझती है"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {params.lang === "en" ? "Quality Products" : "गुणवत्तापूर्ण उत्पाद"}
                    </h3>
                    <p className="text-gray-600">
                      {params.lang === "en"
                        ? "We source only the highest quality agricultural products from trusted suppliers"
                        : "हम केवल विश्वसनीय आपूर्तिकर्ताओं से उच्चतम गुणवत्ता वाले कृषि उत्पाद प्राप्त करते हैं"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {params.lang === "en" ? "Government Approved" : "सरकार द्वारा अनुमोदित"}
                    </h3>
                    <p className="text-gray-600">
                      {params.lang === "en"
                        ? "Licensed and approved by agricultural authorities"
                        : "कृषि अधिकारियों द्वारा लाइसेंस प्राप्त और अनुमोदित"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={params.lang === "en" ? "Farming in Banaras" : "बनारस में खेती"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Testimonials */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                {params.lang === "en" ? "What Banaras Farmers Say" : "बनारस के किसान क्या कहते हैं"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Farmer" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rajesh Kumar</h3>
                    <p className="text-sm text-gray-600">Farmer, Lanka Area</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {params.lang === "en"
                    ? "AgriShop has been my go-to store for all farming needs for the past 10 years. Their products are specifically suited for our local soil conditions in Banaras."
                    : "पिछले 10 वर्षों से एग्रीशॉप सभी कृषि आवश्यकताओं के लिए मेरी पसंदीदा दुकान रही है। उनके उत्पाद विशेष रूप से बनारस में हमारी स्थानीय मिट्टी की स्थितियों के लिए उपयुक्त हैं।"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Farmer" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sunita Devi</h3>
                    <p className="text-sm text-gray-600">Vegetable Grower, BHU Area</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {params.lang === "en"
                    ? "The specialized vegetable seeds I purchased from AgriShop Banaras have given me the best yield in years. Their expert advice for local growing conditions is invaluable."
                    : "एग्रीशॉप बनारस से खरीदे गए विशेष सब्जी के बीजों ने मुझे वर्षों में सबसे अच्छी उपज दी है। स्थानीय उगाने की स्थितियों के लिए उनकी विशेषज्ञ सलाह अमूल्य है।"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              {params.lang === "en" ? "Visit Our Banaras Store Today" : "आज ही हमारे बनारस स्टोर पर जाएं"}
            </h2>
            <p className="max-w-2xl mx-auto mb-6">
              {params.lang === "en"
                ? "Experience personalized agricultural solutions tailored for the Banaras region"
                : "बनारस क्षेत्र के लिए अनुकूलित व्यक्तिगत कृषि समाधानों का अनुभव करें"}
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
