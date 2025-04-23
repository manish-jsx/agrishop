import Image from "next/image"
import { getDictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Leaf, Sprout, Droplets, Home, Sun, Warehouse } from "lucide-react"

export default async function ServicesPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  // Service categories
  const serviceCategories = [
    {
      id: "terrace",
      name: dict.servicesPage.categories.terrace,
      icon: <Home className="h-5 w-5" />,
    },
    {
      id: "professional",
      name: dict.servicesPage.categories.professional,
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      id: "hydroponics",
      name: dict.servicesPage.categories.hydroponics,
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      id: "greenhouse",
      name: dict.servicesPage.categories.greenhouse,
      icon: <Warehouse className="h-5 w-5" />,
    },
    {
      id: "vegetable",
      name: dict.servicesPage.categories.vegetable,
      icon: <Sprout className="h-5 w-5" />,
    },
    {
      id: "lawn",
      name: dict.servicesPage.categories.lawn,
      icon: <Sun className="h-5 w-5" />,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner */}
      <section className="bg-green-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">{dict.servicesPage.title}</h1>
            <p className="text-gray-100 text-lg mb-6">{dict.servicesPage.subtitle}</p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {dict.servicesPage.contactButton}
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{dict.servicesPage.categoriesTitle}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.servicesPage.categoriesSubtitle}</p>
          </div>

          <Tabs defaultValue="terrace" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="mb-8 h-auto p-1">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 py-2 px-4">
                    {category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Terrace Gardening */}
            <TabsContent value="terrace">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Terrace Gardening"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{dict.servicesPage.terrace.title}</h3>
                  <p className="text-gray-600">{dict.servicesPage.terrace.description}</p>
                  <ul className="space-y-2">
                    {dict.servicesPage.terrace.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-700 hover:bg-green-800">{dict.servicesPage.learnMoreButton}</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Professional Gardening */}
            <TabsContent value="professional">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Professional Gardening"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{dict.servicesPage.professional.title}</h3>
                  <p className="text-gray-600">{dict.servicesPage.professional.description}</p>
                  <ul className="space-y-2">
                    {dict.servicesPage.professional.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-700 hover:bg-green-800">{dict.servicesPage.learnMoreButton}</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Hydroponics */}
            <TabsContent value="hydroponics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Hydroponics" fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{dict.servicesPage.hydroponics.title}</h3>
                  <p className="text-gray-600">{dict.servicesPage.hydroponics.description}</p>
                  <ul className="space-y-2">
                    {dict.servicesPage.hydroponics.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-700 hover:bg-green-800">{dict.servicesPage.learnMoreButton}</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Greenhouse */}
            <TabsContent value="greenhouse">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Greenhouse Setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{dict.servicesPage.greenhouse.title}</h3>
                  <p className="text-gray-600">{dict.servicesPage.greenhouse.description}</p>
                  <ul className="space-y-2">
                    {dict.servicesPage.greenhouse.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-700 hover:bg-green-800">{dict.servicesPage.learnMoreButton}</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Vegetable Farming */}
            <TabsContent value="vegetable">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Vegetable Farming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{dict.servicesPage.vegetable?.title || "Vegetable Farming"}</h3>
                  <p className="text-gray-600">
                    {dict.servicesPage.vegetable?.description ||
                      "Professional vegetable farming services for home gardens and small farms."}
                  </p>
                  <ul className="space-y-2">
                    {(
                      dict.servicesPage.vegetable?.features || [
                        "Seasonal vegetable selection",
                        "Soil preparation and planting",
                        "Pest management solutions",
                        "Harvesting guidance",
                      ]
                    ).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-700 hover:bg-green-800">{dict.servicesPage.learnMoreButton}</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Lawn & Grass */}
            <TabsContent value="lawn">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Lawn & Grass" fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{dict.servicesPage.lawn?.title || "Lawn & Grass Services"}</h3>
                  <p className="text-gray-600">
                    {dict.servicesPage.lawn?.description ||
                      "Professional lawn care and grass maintenance services for beautiful outdoor spaces."}
                  </p>
                  <ul className="space-y-2">
                    {(
                      dict.servicesPage.lawn?.features || [
                        "Lawn installation and renovation",
                        "Regular maintenance and mowing",
                        "Fertilization and weed control",
                        "Disease and pest management",
                      ]
                    ).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-green-700 hover:bg-green-800">{dict.servicesPage.learnMoreButton}</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              {dict.servicesPage.process?.title || "Our Service Process"}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {dict.servicesPage.process?.subtitle || "We follow a systematic approach to deliver the best results"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-2">
                {dict.servicesPage.process?.step1?.title || "Consultation"}
              </h3>
              <p className="text-gray-600">
                {dict.servicesPage.process?.step1?.description ||
                  "We discuss your needs and requirements to understand your goals."}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-2">
                {dict.servicesPage.process?.step2?.title || "Planning"}
              </h3>
              <p className="text-gray-600">
                {dict.servicesPage.process?.step2?.description ||
                  "We create a detailed plan tailored to your specific requirements."}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-2">
                {dict.servicesPage.process?.step3?.title || "Implementation"}
              </h3>
              <p className="text-gray-600">
                {dict.servicesPage.process?.step3?.description ||
                  "Our experts execute the plan with precision and care."}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-2">
                {dict.servicesPage.process?.step4?.title || "Support"}
              </h3>
              <p className="text-gray-600">
                {dict.servicesPage.process?.step4?.description ||
                  "We provide ongoing support and maintenance to ensure long-term success."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            {dict.servicesPage.cta?.title || "Ready to Transform Your Garden or Farm?"}
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            {dict.servicesPage.cta?.description ||
              "Contact us today to discuss how our services can help you achieve your agricultural and gardening goals."}
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
            {dict.servicesPage.cta?.button || "Contact Us Now"}
          </Button>
        </div>
      </section>
    </main>
  )
}
