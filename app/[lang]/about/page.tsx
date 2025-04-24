import Image from "next/image"
import { getDictionary, getSEODictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { Check, Users, Award, Clock, MapPin } from "lucide-react"
import SEOMeta from "@/components/seo-meta"

export default async function AboutPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // SEO data
  const alternateLang = params.lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${params.lang}/about`
  const alternateUrl = `${baseUrl}/${alternateLang}/about`

  const seoData = seoDict.about

  // Create default values for missing dictionary entries
  const aboutPage = {
    title: dict.aboutPage?.title || "About AgriShop",
    subtitle: dict.aboutPage?.subtitle || "Your trusted partner in agriculture since 1995",
    story: {
      title: dict.aboutPage?.storyTitle || "Our Story",
      paragraph1:
        dict.aboutPage?.storyParagraph1 ||
        "Founded in 1995 in the heart of Banaras, AgriShop began as a small store serving local farmers with essential agricultural supplies. Over the years, we have grown into a comprehensive agricultural solution provider while maintaining our commitment to quality and customer service.",
      paragraph2:
        dict.aboutPage?.storyParagraph2 ||
        "Located near the fertile banks of the Ganges, we understand the unique agricultural needs of the Banaras region. Our team consists of agricultural experts, experienced gardeners, and knowledgeable staff who are passionate about helping farmers and gardening enthusiasts achieve the best results.",
      paragraph3:
        dict.aboutPage?.storyParagraph3 ||
        "Today, AgriShop is proud to be a government-approved and licensed agricultural shop offering a wide range of products and services, from traditional farming supplies to modern hydroponics and greenhouse solutions.",
    },
    mission: {
      title: dict.aboutPage?.missionTitle || "Our Mission",
      subtitle:
        dict.aboutPage?.missionText ||
        "To provide farmers and gardening enthusiasts with high-quality agricultural products and expert services that promote sustainable farming practices and enhance productivity.",
      value1: {
        title: dict.aboutPage?.values?.[0]?.title || "Quality",
        description:
          dict.aboutPage?.values?.[0]?.description ||
          "We are committed to providing only the highest quality products and services to our customers.",
      },
      value2: {
        title: dict.aboutPage?.values?.[1]?.title || "Sustainability",
        description:
          dict.aboutPage?.values?.[1]?.description ||
          "We promote sustainable farming practices that protect the environment and ensure long-term productivity.",
      },
      value3: {
        title: dict.aboutPage?.values?.[2]?.title || "Innovation",
        description:
          dict.aboutPage?.values?.[2]?.description ||
          "We continuously seek innovative solutions to address the evolving challenges in agriculture.",
      },
    },
    whyChoose: {
      title: dict.aboutPage?.whyChooseTitle || "Why Choose Us",
      subtitle: dict.aboutPage?.whyChooseSubtitle || "What makes AgriShop different from other agricultural shops",
      reasons: dict.aboutPage?.whyChooseReasons || [
        {
          title: "Expert Guidance",
          description: "Our team of agricultural experts provides personalized advice and solutions.",
        },
        {
          title: "Quality Products",
          description: "We source only the highest quality products from trusted manufacturers.",
        },
        {
          title: "Comprehensive Solutions",
          description: "From seeds to irrigation systems, we offer everything you need for successful farming.",
        },
        {
          title: "Local Knowledge",
          description: "We understand the unique agricultural conditions of the Banaras region.",
        },
      ],
    },
    location: {
      title: dict.aboutPage?.locationTitle || "Our Location",
      subtitle: dict.aboutPage?.locationSubtitle || "Visit our shop in the heart of Banaras",
      address: {
        title: dict.aboutPage?.addressTitle || "Address",
        street: dict.aboutPage?.addressStreet || "123 Agriculture Road, Lanka",
        city: dict.aboutPage?.addressCity || "Varanasi, Uttar Pradesh 221005",
        state: dict.aboutPage?.addressState || "India",
        postal: dict.aboutPage?.addressPostal || "PIN: 221005",
      },
      hours: {
        title: dict.aboutPage?.hoursTitle || "Business Hours",
        weekdays: dict.aboutPage?.hoursWeekdays || "Monday to Friday: 9:00 AM - 7:00 PM",
        saturday: dict.aboutPage?.hoursSaturday || "Saturday: 9:00 AM - 6:00 PM",
        sunday: dict.aboutPage?.hoursSunday || "Sunday: 10:00 AM - 2:00 PM",
      },
      directionsButton: dict.aboutPage?.directionsButton || "Get Directions",
    },
    cta: {
      title: dict.aboutPage?.ctaTitle || "Ready to Transform Your Agricultural Practices?",
      description:
        dict.aboutPage?.ctaDescription ||
        "Visit our shop in Banaras or contact us today to explore our products and services.",
      button: dict.aboutPage?.ctaButton || "Contact Us",
    },
  }

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

      <main className="flex min-h-screen flex-col">
        {/* Hero Banner */}
        <section className="bg-green-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{aboutPage.title}</h1>
              <p className="text-gray-100 text-lg">{aboutPage.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">{aboutPage.story.title}</h2>
                <p className="text-gray-600">{aboutPage.story.paragraph1}</p>
                <p className="text-gray-600">{aboutPage.story.paragraph2}</p>
                <p className="text-gray-600">{aboutPage.story.paragraph3}</p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our shop in Banaras"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-12 md:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">{aboutPage.mission.title}</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{aboutPage.mission.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{aboutPage.mission.value1.title}</h3>
                <p className="text-gray-600">{aboutPage.mission.value1.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{aboutPage.mission.value2.title}</h3>
                <p className="text-gray-600">{aboutPage.mission.value2.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{aboutPage.mission.value3.title}</h3>
                <p className="text-gray-600">{aboutPage.mission.value3.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">{aboutPage.whyChoose.title}</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{aboutPage.whyChoose.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {aboutPage.whyChoose.reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our products and services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Location */}
        <section className="py-12 md:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">{aboutPage.location.title}</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{aboutPage.location.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our location in Banaras"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{aboutPage.location.address.title}</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <p className="text-gray-600">
                    {aboutPage.location.address.street}
                    <br />
                    {aboutPage.location.address.city}
                    <br />
                    {aboutPage.location.address.state}
                    <br />
                    {aboutPage.location.address.postal}
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold mb-2">{aboutPage.location.hours.title}</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>{aboutPage.location.hours.weekdays}</li>
                    <li>{aboutPage.location.hours.saturday}</li>
                    <li>{aboutPage.location.hours.sunday}</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button className="bg-green-700 hover:bg-green-800">{aboutPage.location.directionsButton}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">{aboutPage.cta.title}</h2>
            <p className="max-w-2xl mx-auto mb-6">{aboutPage.cta.description}</p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {aboutPage.cta.button}
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
