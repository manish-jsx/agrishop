import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "../dictionaries"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default async function ProductsPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  // Product categories
  const categories = [
    {
      id: "fertilizers",
      name: dict.products.fertilizers,
    },
    {
      id: "seeds",
      name: dict.products.seeds,
    },
    {
      id: "pesticides",
      name: dict.products.pesticides,
    },
    {
      id: "organic",
      name: dict.products.organic,
    },
    {
      id: "tools",
      name: dict.productsPage.categories.tools,
    },
    {
      id: "irrigation",
      name: dict.productsPage.categories.irrigation,
    },
    {
      id: "hydroponics",
      name: dict.productsPage.categories.hydroponics,
    },
    {
      id: "greenhouse",
      name: dict.productsPage.categories.greenhouse,
    },
  ]

  // Sample products for each category
  const productsByCategory = {
    fertilizers: [
      {
        id: 1,
        name: dict.productsPage.items.fertilizer1,
        price: "₹450",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.bestseller,
      },
      {
        id: 2,
        name: dict.productsPage.items.fertilizer2,
        price: "₹380",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: dict.productsPage.items.fertilizer3,
        price: "₹520",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.organic,
      },
      {
        id: 4,
        name: dict.productsPage.items.fertilizer4,
        price: "₹290",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    seeds: [
      {
        id: 1,
        name: dict.productsPage.items.seed1,
        price: "₹120",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.hybrid,
      },
      {
        id: 2,
        name: dict.productsPage.items.seed2,
        price: "₹85",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: dict.productsPage.items.seed3,
        price: "₹150",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.organic,
      },
      {
        id: 4,
        name: dict.productsPage.items.seed4,
        price: "₹95",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    pesticides: [
      {
        id: 1,
        name: dict.productsPage.items.pesticide1,
        price: "₹350",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: dict.productsPage.items.pesticide2,
        price: "₹420",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.bestseller,
      },
      {
        id: 3,
        name: dict.productsPage.items.pesticide3,
        price: "₹280",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 4,
        name: dict.productsPage.items.pesticide4,
        price: "₹390",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    organic: [
      {
        id: 1,
        name: dict.productsPage.items.organic1,
        price: "₹320",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.organic,
      },
      {
        id: 2,
        name: dict.productsPage.items.organic2,
        price: "₹280",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.organic,
      },
      {
        id: 3,
        name: dict.productsPage.items.organic3,
        price: "₹450",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.organic,
      },
      {
        id: 4,
        name: dict.productsPage.items.organic4,
        price: "₹180",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.organic,
      },
    ],
    tools: [
      {
        id: 1,
        name: dict.productsPage.items.tool1,
        price: "₹650",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: dict.productsPage.items.tool2,
        price: "₹450",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: dict.productsPage.items.tool3,
        price: "₹1200",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.bestseller,
      },
      {
        id: 4,
        name: dict.productsPage.items.tool4,
        price: "₹350",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    irrigation: [
      {
        id: 1,
        name: dict.productsPage.items.irrigation1,
        price: "₹850",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: dict.productsPage.items.irrigation2,
        price: "₹1200",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: dict.productsPage.items.irrigation3,
        price: "₹320",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 4,
        name: dict.productsPage.items.irrigation4,
        price: "₹480",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    hydroponics: [
      {
        id: 1,
        name: dict.productsPage.items.hydroponics1,
        price: "₹2500",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.new,
      },
      {
        id: 2,
        name: dict.productsPage.items.hydroponics2,
        price: "₹1800",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: dict.productsPage.items.hydroponics3,
        price: "₹950",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 4,
        name: dict.productsPage.items.hydroponics4,
        price: "₹3200",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    greenhouse: [
      {
        id: 1,
        name: dict.productsPage.items.greenhouse1,
        price: "₹12000",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: dict.productsPage.items.greenhouse2,
        price: "₹8500",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: dict.productsPage.items.greenhouse3,
        price: "₹4500",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 4,
        name: dict.productsPage.items.greenhouse4,
        price: "₹2800",
        image: "/placeholder.svg?height=200&width=200",
        badge: dict.productsPage.badges.bestseller,
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner */}
      <section className="bg-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{dict.productsPage.title}</h1>
            <p className="text-gray-100 text-lg">{dict.productsPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder={dict.productsPage.searchPlaceholder} className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {dict.productsPage.filter}
              </Button>
              <Button variant="outline" size="sm">
                {dict.productsPage.sort}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="fertilizers" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(productsByCategory).map(([categoryId, products]) => (
              <TabsContent key={categoryId} value={categoryId}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden group">
                      <div className="relative">
                        <div className="aspect-square relative overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        {product.badge && (
                          <Badge className="absolute top-2 right-2 bg-green-600" variant="secondary">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-lg">{product.price}</span>
                          <Button size="sm" className="bg-green-700 hover:bg-green-800">
                            {dict.productsPage.viewDetails}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Local Products Highlight */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight">{dict.productsPage.localProducts.title}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.productsPage.localProducts.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Banarasi Vegetables"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{dict.productsPage.localProducts.item1.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{dict.productsPage.localProducts.item1.description}</p>
                <Link
                  href={`/${params.lang}/products/local-vegetables`}
                  className="text-green-700 hover:text-green-800 font-medium text-sm inline-flex items-center"
                >
                  {dict.common.learnMore}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Ganga Basin Soil"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{dict.productsPage.localProducts.item2.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{dict.productsPage.localProducts.item2.description}</p>
                <Link
                  href={`/${params.lang}/products/ganga-soil`}
                  className="text-green-700 hover:text-green-800 font-medium text-sm inline-flex items-center"
                >
                  {dict.common.learnMore}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Traditional Farming Tools"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{dict.productsPage.localProducts.item3.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{dict.productsPage.localProducts.item3.description}</p>
                <Link
                  href={`/${params.lang}/products/traditional-tools`}
                  className="text-green-700 hover:text-green-800 font-medium text-sm inline-flex items-center"
                >
                  {dict.common.learnMore}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{dict.productsPage.seasonal.title}</h2>
              <p className="text-gray-600 mt-2">{dict.productsPage.seasonal.subtitle}</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              {dict.productsPage.seasonal.viewAll}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Seasonal product ${i}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2 bg-orange-500" variant="secondary">
                    {dict.productsPage.badges.seasonal}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg mb-1">{dict.productsPage.seasonal[`product${i}`]}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg">₹{120 + i * 50}</span>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">
                      {dict.productsPage.viewDetails}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">{dict.productsPage.cta.title}</h2>
          <p className="max-w-2xl mx-auto mb-6">{dict.productsPage.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {dict.productsPage.cta.primaryButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-700"
            >
              {dict.productsPage.cta.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
