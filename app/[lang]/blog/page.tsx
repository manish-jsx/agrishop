import Image from "next/image"
import Link from "next/link"
import { getDictionary, getSEODictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import SEOMeta from "@/components/seo-meta"

export default async function BlogPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // SEO data
  const alternateLang = params.lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${params.lang}/blog`
  const alternateUrl = `${baseUrl}/${alternateLang}/blog`

  const blogTitle = params.lang === "en" ? "Agriculture Blog | AgriShop Banaras" : "कृषि ब्लॉग | एग्रीशॉप बनारस"
  const blogDescription =
    params.lang === "en"
      ? "Expert farming tips, agricultural advice, and local insights for farmers in Banaras and Mughalsarai regions."
      : "बनारस और मुगलसराय क्षेत्रों के किसानों के लिए विशेषज्ञ खेती युक्तियां, कृषि सलाह और स्थानीय अंतर्दृष्टि।"

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title:
        params.lang === "en"
          ? "Best Practices for Wheat Farming in Banaras Region"
          : "बनारस क्षेत्र में गेहूं की खेती के लिए सर्वोत्तम प्रथाएं",
      excerpt:
        params.lang === "en"
          ? "Learn about the optimal techniques for wheat cultivation in the unique soil conditions of Banaras."
          : "बनारस की अनूठी मिट्टी की स्थितियों में गेहूं की खेती के लिए इष्टतम तकनीकों के बारे में जानें।",
      image: "/placeholder.svg?height=300&width=500",
      date: "2023-11-15",
      slug: "wheat-farming-banaras",
      category: params.lang === "en" ? "Crop Cultivation" : "फसल की खेती",
    },
    {
      id: 2,
      title:
        params.lang === "en"
          ? "Organic Farming Techniques for Mughalsarai Farmers"
          : "मुगलसराय के किसानों के लिए जैविक खेती तकनीक",
      excerpt:
        params.lang === "en"
          ? "Discover sustainable and organic farming methods that work well in the Mughalsarai agricultural landscape."
          : "मुगलसराय के कृषि परिदृश्य में अच्छी तरह से काम करने वाली टिकाऊ और जैविक खेती विधियों का पता लगाएं।",
      image: "/placeholder.svg?height=300&width=500",
      date: "2023-10-28",
      slug: "organic-farming-mughalsarai",
      category: params.lang === "en" ? "Organic Farming" : "जैविक खेती",
    },
    {
      id: 3,
      title:
        params.lang === "en"
          ? "Seasonal Crop Calendar for Eastern Uttar Pradesh"
          : "पूर्वी उत्तर प्रदेश के लिए मौसमी फसल कैलेंडर",
      excerpt:
        params.lang === "en"
          ? "A comprehensive guide to what crops to plant and when in the Banaras and Mughalsarai regions."
          : "बनारस और मुगलसराय क्षेत्रों में कौन सी फसलें कब लगानी हैं, इसका एक व्यापक मार्गदर्शक।",
      image: "/placeholder.svg?height=300&width=500",
      date: "2023-09-15",
      slug: "seasonal-crop-calendar",
      category: params.lang === "en" ? "Seasonal Farming" : "मौसमी खेती",
    },
    {
      id: 4,
      title:
        params.lang === "en"
          ? "Modern Irrigation Techniques for Water Conservation"
          : "जल संरक्षण के लिए आधुनिक सिंचाई तकनीक",
      excerpt:
        params.lang === "en"
          ? "Explore efficient irrigation systems that help conserve water while ensuring optimal crop growth."
          : "कुशल सिंचाई प्रणालियों का अन्वेषण करें जो इष्टतम फसल विकास सुनिश्चित करते हुए पानी का संरक्षण करने में मदद करती हैं।",
      image: "/placeholder.svg?height=300&width=500",
      date: "2023-08-22",
      slug: "modern-irrigation-techniques",
      category: params.lang === "en" ? "Irrigation" : "सिंचाई",
    },
    {
      id: 5,
      title:
        params.lang === "en"
          ? "Soil Testing and Analysis: Why It's Essential for Farmers"
          : "मिट्टी परीक्षण और विश्लेषण: यह किसानों के लिए आवश्यक क्यों है",
      excerpt:
        params.lang === "en"
          ? "Understand the importance of regular soil testing and how it can significantly improve your crop yield."
          : "नियमित मिट्टी परीक्षण के महत्व को समझें और यह आपकी फसल उपज में कैसे महत्वपूर्ण सुधार कर सकता है।",
      image: "/placeholder.svg?height=300&width=500",
      date: "2023-07-10",
      slug: "soil-testing-importance",
      category: params.lang === "en" ? "Soil Management" : "मिट्टी प्रबंधन",
    },
    {
      id: 6,
      title:
        params.lang === "en"
          ? "Government Subsidies and Schemes for Farmers in Uttar Pradesh"
          : "उत्तर प्रदेश में किसानों के लिए सरकारी सब्सिडी और योजनाएं",
      excerpt:
        params.lang === "en"
          ? "A comprehensive guide to available government support, subsidies, and schemes for farmers in the region."
          : "क्षेत्र के किसानों के लिए उपलब्ध सरकारी समर्थन, सब्सिडी और योजनाओं के लिए एक व्यापक मार्गदर्शिका।",
      image: "/placeholder.svg?height=300&width=500",
      date: "2023-06-05",
      slug: "government-subsidies-farmers",
      category: params.lang === "en" ? "Agricultural Policies" : "कृषि नीतियां",
    },
  ]

  // Featured post is the first one
  const featuredPost = blogPosts[0]
  // Regular posts are the rest
  const regularPosts = blogPosts.slice(1)

  return (
    <>
      <SEOMeta
        title={blogTitle}
        description={blogDescription}
        keywords="agriculture blog Banaras, farming tips Mughalsarai, organic farming Banaras, wheat farming Banaras, soil testing Mughalsarai, irrigation techniques Banaras"
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {params.lang === "en" ? "Agriculture Blog" : "कृषि ब्लॉग"}
              </h1>
              <p className="text-gray-100 text-lg">
                {params.lang === "en"
                  ? "Expert farming tips and agricultural insights for Banaras and Mughalsarai regions"
                  : "बनारस और मुगलसराय क्षेत्रों के लिए विशेषज्ञ खेती युक्तियां और कृषि अंतर्दृष्टि"}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">{params.lang === "en" ? "Featured Article" : "विशेष लेख"}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    {new Date(featuredPost.date).toLocaleDateString(params.lang === "en" ? "en-US" : "hi-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                <p className="text-gray-600">{featuredPost.excerpt}</p>
                <Link href={`/${params.lang}/blog/${featuredPost.slug}`}>
                  <Button className="bg-green-700 hover:bg-green-800">
                    {params.lang === "en" ? "Read More" : "और पढ़ें"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">{params.lang === "en" ? "Recent Articles" : "हाल के लेख"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString(params.lang === "en" ? "en-US" : "hi-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/${params.lang}/blog/${post.slug}`}
                      className="text-green-700 hover:text-green-800 font-medium inline-flex items-center"
                    >
                      {params.lang === "en" ? "Read More" : "और पढ़ें"}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">{params.lang === "en" ? "Popular Topics" : "लोकप्रिय विषय"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: params.lang === "en" ? "Organic Farming" : "जैविक खेती", slug: "organic-farming" },
                { name: params.lang === "en" ? "Soil Management" : "मिट्टी प्रबंधन", slug: "soil-management" },
                { name: params.lang === "en" ? "Irrigation" : "सिंचाई", slug: "irrigation" },
                { name: params.lang === "en" ? "Crop Diseases" : "फसल रोग", slug: "crop-diseases" },
                { name: params.lang === "en" ? "Fertilizers" : "उर्वरक", slug: "fertilizers" },
                { name: params.lang === "en" ? "Seasonal Farming" : "मौसमी खेती", slug: "seasonal-farming" },
                { name: params.lang === "en" ? "Farm Equipment" : "कृषि उपकरण", slug: "farm-equipment" },
                { name: params.lang === "en" ? "Government Schemes" : "सरकारी योजनाएं", slug: "government-schemes" },
              ].map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/${params.lang}/blog/topics/${topic.slug}`}
                  className="bg-white border rounded-lg p-4 text-center hover:bg-green-50 transition-colors"
                >
                  <span className="font-medium">{topic.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              {params.lang === "en" ? "Subscribe to Our Newsletter" : "हमारे न्यूज़लेटर की सदस्यता लें"}
            </h2>
            <p className="max-w-2xl mx-auto mb-6">
              {params.lang === "en"
                ? "Get the latest farming tips, agricultural news, and local insights delivered to your inbox."
                : "नवीनतम खेती युक्तियां, कृषि समाचार और स्थानीय अंतर्दृष्टि अपने इनबॉक्स में प्राप्त करें।"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={params.lang === "en" ? "Your email address" : "आपका ईमेल पता"}
                className="px-4 py-2 rounded-md w-full"
              />
              <Button className="bg-white text-green-700 hover:bg-gray-100">
                {params.lang === "en" ? "Subscribe" : "सदस्यता लें"}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
