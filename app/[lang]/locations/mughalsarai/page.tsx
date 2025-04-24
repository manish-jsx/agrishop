import Image from "next/image"
import { getDictionary, getSEODictionary } from "../../dictionaries"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Check } from "lucide-react"
import SEOMeta from "@/components/seo-meta"
import { LocalBusinessStructuredData } from "@/components/structured-data"
import Link from "next/link"

export default async function MughalsaraiLocationPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // SEO data
  const alternateLang = params.lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${params.lang}/locations/mughalsarai`
  const alternateUrl = `${baseUrl}/${alternateLang}/locations/mughalsarai`

  const seoData = seoDict.locations?.mughalsarai || {
    title: "AgriShop Mughalsarai | Premier Agriculture Shop in Chandauli",
    description:
      "Visit our Mughalsarai store for premium agricultural supplies, fertilizers, seeds, and farm equipment. Serving local farmers with quality products since 1995.",
    keywords:
      "agriculture suppliers Mughalsarai, fertilizer shop in Mughalsarai, बीज विक्रेता मुगलसराय, farm equipment dealers Mughalsarai, कृषि यंत्र मुगलसराय, Mughalsarai fertilizer price, soil fertility Mughalsarai",
  }

  // Popular products in Mughalsarai
  const popularProducts = [
    {
      name: params.lang === "en" ? "Chandauli Rice Seeds" : "चंदौली चावल के बीज",
      description:
        params.lang === "en"
          ? "Premium rice seeds specially developed for Mughalsarai soil conditions"
          : "मुगलसराय की मिट्टी की स्थितियों के लिए विशेष रूप से विकसित प्रीमियम चावल के बीज",
      price: "₹420/kg",
    },
    {
      name: params.lang === "en" ? "NPK Fertilizer Mix" : "एनपीके उर्वरक मिश्रण",
      description:
        params.lang === "en"
          ? "Balanced fertilizer mix formulated for Mughalsarai region crops"
          : "मुगलसराय क्षेत्र की फसलों के लिए तैयार संतुलित उर्वरक मिश्रण",
      price: "₹550/bag",
    },
    {
      name: params.lang === "en" ? "Farm Equipment Set" : "कृषि उपकरण सेट",
      description:
        params.lang === "en"
          ? "Essential farming tools for local agricultural practices"
          : "स्थानीय कृषि प्रथाओं के लिए आवश्यक खेती के उपकरण",
      price: "₹1,200/set",
    },
  ]

  // Agricultural services in Mughalsarai
  const services = [
    {
      name: params.lang === "en" ? "Farm Equipment Rental" : "कृषि उपकरण किराया",
      description:
        params.lang === "en"
          ? "Rent modern farming equipment for your agricultural needs"
          : "अपनी कृषि आवश्यकताओं के लिए आधुनिक खेती के उपकरण किराए पर लें",
    },
    {
      name: params.lang === "en" ? "Crop Disease Management" : "फसल रोग प्रबंधन",
      description:
        params.lang === "en"
          ? "Expert solutions for crop diseases common in Mughalsarai region"
          : "मुगलसराय क्षेत्र में आम फसल रोगों के लिए विशेषज्ञ समाधान",
    },
    {
      name: params.lang === "en" ? "Precision Farming" : "सटीक खेती",
      description:
        params.lang === "en"
          ? "Modern farming techniques to maximize yield in local conditions"
          : "स्थानीय परिस्थितियों में उपज को अधिकतम करने के लिए आधुनिक खेती तकनीक",
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
        name="AgriShop Mughalsarai"
        description="Government approved agriculture shop providing fertilizers, seeds, pesticides, and gardening solutions in Mughalsarai."
        address="456 Station Road, Mughalsarai, Chandauli, Uttar Pradesh 232101"
        telephone="+919876543211"
        email="mughalsarai@agrishop.com"
        url={currentUrl}
        geo={{
          latitude: "25.2833",
          longitude: "83.1167",
        }}
        areaServed={["Mughalsarai", "Chandauli", "Ghazipur"]}
      />

      <main className="flex min-h-screen flex-col">
        {/* Hero Banner */}
        <section className="bg-green-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {params.lang === "en" ? "AgriShop Mughalsarai" : "एग्रीशॉप मुगलसराय"}
              </h1>
              <p className="text-gray-100 text-lg">
                {params.lang === "en"
                  ? "Your trusted agriculture partner in Mughalsarai"
                  : "मुगलसराय में आपका विश्वसनीय कृषि साथी"}
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
                  {params.lang === "en" ? "Visit Our Mughalsarai Store" : "हमारे मुगलसराय स्टोर पर जाएं"}
                </h2>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">{params.lang === "en" ? "Address" : "पता"}</p>
                    <p className="text-gray-600">
                      456 Station Road
                      <br />
                      Near Railway Station
                      <br />
                      Mughalsarai, Chandauli
                      <br />
                      Uttar Pradesh 232101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">{params.lang === "en" ? "Contact" : "संपर्क"}</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                    <p className="text-gray-600">mughalsarai@agrishop.com</p>
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
                  alt={params.lang === "en" ? "AgriShop Mughalsarai Store" : "एग्रीशॉप मुगलसराय स्टोर"}
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
                {params.lang === "en" ? "Popular Products in Mughalsarai" : "मुगलसराय में लोकप्रिय उत्पाद"}
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                {params.lang === "en"
                  ? "Our bestselling agricultural products specifically for Mughalsarai region farmers"
                  : "मुगलसराय क्षेत्र के किसानों के लिए विशेष रूप से हमारे सबसे अधिक बिकने वाले कृषि उत्पाद"}
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
                {params.lang === "en" ? "Agricultural Services in Mughalsarai" : "मुगलसराय में कृषि सेवाएं"}
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                {params.lang === "en"
                  ? "Professional agricultural services tailored for Mughalsarai region"
                  : "मुगलसराय क्षेत्र के लिए अनुकूलित पेशेवर कृषि सेवाएं"}
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

        {/* Farm Equipment Section */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={params.lang === "en" ? "Farm Equipment" : "कृषि उपकरण"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  {params.lang === "en" ? "Farm Equipment for Mughalsarai Farmers" : "मुगलसराय के किसानों के लिए कृषि उपकरण"}
                </h2>
                <p className="text-gray-600">
                  {params.lang === "en"
                    ? "We offer a wide range of modern and traditional farming equipment suited for the agricultural needs of Mughalsarai region farmers. Visit our store to explore our collection of high-quality tools and machinery."
                    : "हम मुगलसराय क्षेत्र के किसानों की कृषि आवश्यकताओं के लिए उपयुक्त आधुनिक और पारंपरिक खेती उपकरणों की एक विस्तृत श्रृंखला प्रदान करते हैं। हमारे उच्च गुणवत्ता वाले उपकरणों और मशीनरी के संग्रह का पता लगाने के लिए हमारी दुकान पर जाएं।"}
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>{params.lang === "en" ? "Power tillers and cultivators" : "पावर टिलर और कल्टीवेटर"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>{params.lang === "en" ? "Irrigation equipment" : "सिंचाई उपकरण"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>
                      {params.lang === "en" ? "Sprayers and fertilizer applicators" : "स्प्रेयर और उर्वरक एप्लिकेटर"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>{params.lang === "en" ? "Traditional farming tools" : "पारंपरिक खेती के उपकरण"}</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <Button className="bg-green-700 hover:bg-green-800">
                    {params.lang === "en" ? "Explore Equipment" : "उपकरण देखें"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Testimonials */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                {params.lang === "en" ? "What Mughalsarai Farmers Say" : "मुगलसराय के किसान क्या कहते हैं"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Farmer" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ramesh Singh</h3>
                    <p className="text-sm text-gray-600">Wheat Farmer, Mughalsarai</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {params.lang === "en"
                    ? "The wheat seeds from AgriShop Mughalsarai have consistently given me 20% higher yield compared to other seeds I've tried. Their knowledge of local farming conditions is exceptional."
                    : "एग्रीशॉप मुगलसराय के गेहूं के बीजों ने मुझे लगातार अन्य बीजों की तुलना में 20% अधिक उपज दी है जिन्हें मैंने आजमाया है। स्थानीय खेती की स्थितियों का उनका ज्ञान असाधारण है।"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Farmer" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Meena Devi</h3>
                    <p className="text-sm text-gray-600">Rice Grower, Chandauli</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {params.lang === "en"
                    ? "I've been buying fertilizers from AgriShop Mughalsarai for over 5 years. Their custom fertilizer mix for our local soil has improved my crop quality significantly."
                    : "मैं 5 साल से अधिक समय से एग्रीशॉप मुगलसराय से उर्वरक खरीद रही हूं। हमारी स्थानीय मिट्टी के लिए उनके कस्टम उर्वरक मिश्रण ने मेरी फसल की गुणवत्ता में काफी सुधार किया है।"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              {params.lang === "en" ? "Visit Our Mughalsarai Store Today" : "आज ही हमारे मुगलसराय स्टोर पर जाएं"}
            </h2>
            <p className="max-w-2xl mx-auto mb-6">
              {params.lang === "en"
                ? "Experience personalized agricultural solutions tailored for the Mughalsarai region"
                : "मुगलसराय क्षेत्र के लिए अनुकूलित व्यक्तिगत कृषि समाधानों का अनुभव करें"}
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
