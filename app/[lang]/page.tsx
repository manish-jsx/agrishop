import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "./dictionaries"
import ProductCard from "@/components/product-card"
import ServiceCard from "@/components/service-card"
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  const featuredProducts = [
    {
      id: 1,
      name: dict.products.fertilizers,
      image: "/placeholder.svg?height=200&width=300",
      description: dict.productDescriptions.fertilizers,
    },
    {
      id: 2,
      name: dict.products.seeds,
      image: "/placeholder.svg?height=200&width=300",
      description: dict.productDescriptions.seeds,
    },
    {
      id: 3,
      name: dict.products.pesticides,
      image: "/placeholder.svg?height=200&width=300",
      description: dict.productDescriptions.pesticides,
    },
    {
      id: 4,
      name: dict.products.organic,
      image: "/placeholder.svg?height=200&width=300",
      description: dict.productDescriptions.organic,
    },
  ]

  const services = [
    {
      id: 1,
      name: dict.services.terraceGarden,
      icon: "🏡",
      description: dict.serviceDescriptions.terraceGarden,
    },
    {
      id: 2,
      name: dict.services.floristGardening,
      icon: "🌸",
      description: dict.serviceDescriptions.floristGardening,
    },
    {
      id: 3,
      name: dict.services.homeVegetable,
      icon: "🥬",
      description: dict.serviceDescriptions.homeVegetable,
    },
    {
      id: 4,
      name: dict.services.subsidized,
      icon: "💰",
      description: dict.serviceDescriptions.subsidized,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-green-600 px-3 py-1 text-sm rounded-full">{dict.hero.badge}</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.hero.title}</h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">{dict.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  {dict.hero.primaryButton}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-green-700"
                >
                  {dict.hero.secondaryButton}
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span>{dict.hero.rating}</span>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Agriculture shop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Government Approval Banner */}
      <section className="bg-green-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <span className="font-semibold text-green-800">{dict.approvalBanner.text}</span>
            <div className="flex items-center gap-2">
              <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">{dict.approvalBanner.license}</span>
              <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">{dict.approvalBanner.approved}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{dict.sections.products}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.sections.productsDescription}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                viewText={dict.common.viewDetails}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`/${params.lang}/products`}
              className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
            >
              {dict.common.viewAll} <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{dict.sections.services}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.sections.servicesDescription}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} name={service.name} icon={service.icon} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="About our shop" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">{dict.sections.about}</h2>
              <p className="text-gray-600">{dict.aboutSection.paragraph1}</p>
              <p className="text-gray-600">{dict.aboutSection.paragraph2}</p>
              <ul className="space-y-2">
                {dict.aboutSection.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-1">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-green-700 hover:bg-green-800">{dict.common.learnMore}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{dict.sections.contact}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.contactSection.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-medium text-lg mb-2">{dict.contactSection.phone}</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-medium text-lg mb-2">{dict.contactSection.email}</h3>
              <p className="text-gray-600">contact@agrishop.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-medium text-lg mb-2">{dict.contactSection.address}</h3>
              <p className="text-gray-600">123 Agriculture Road, Farming District</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }]
}
