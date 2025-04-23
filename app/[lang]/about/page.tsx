import Image from "next/image"
import { getDictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { Check, Users, Award, Clock, MapPin } from "lucide-react"

export default async function AboutPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner */}
      <section className="bg-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{dict.aboutPage.title}</h1>
            <p className="text-gray-100 text-lg">{dict.aboutPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">{dict.aboutPage.story.title}</h2>
              <p className="text-gray-600">{dict.aboutPage.story.paragraph1}</p>
              <p className="text-gray-600">{dict.aboutPage.story.paragraph2}</p>
              <p className="text-gray-600">{dict.aboutPage.story.paragraph3}</p>
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
            <h2 className="text-3xl font-bold tracking-tight">{dict.aboutPage.mission.title}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.aboutPage.mission.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{dict.aboutPage.mission.value1.title}</h3>
              <p className="text-gray-600">{dict.aboutPage.mission.value1.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{dict.aboutPage.mission.value2.title}</h3>
              <p className="text-gray-600">{dict.aboutPage.mission.value2.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{dict.aboutPage.mission.value3.title}</h3>
              <p className="text-gray-600">{dict.aboutPage.mission.value3.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{dict.aboutPage.whyChoose.title}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.aboutPage.whyChoose.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {dict.aboutPage.whyChoose.reasons.map((reason, index) => (
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
            <h2 className="text-3xl font-bold tracking-tight">{dict.aboutPage.location.title}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{dict.aboutPage.location.subtitle}</p>
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
              <h3 className="text-2xl font-bold">{dict.aboutPage.location.address.title}</h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                <p className="text-gray-600">
                  {dict.aboutPage.location.address.street}
                  <br />
                  {dict.aboutPage.location.address.city}
                  <br />
                  {dict.aboutPage.location.address.state}
                  <br />
                  {dict.aboutPage.location.address.postal}
                </p>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold mb-2">{dict.aboutPage.location.hours.title}</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>{dict.aboutPage.location.hours.weekdays}</li>
                  <li>{dict.aboutPage.location.hours.saturday}</li>
                  <li>{dict.aboutPage.location.hours.sunday}</li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="bg-green-700 hover:bg-green-800">{dict.aboutPage.location.directionsButton}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">{dict.aboutPage.cta.title}</h2>
          <p className="max-w-2xl mx-auto mb-6">{dict.aboutPage.cta.description}</p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
            {dict.aboutPage.cta.button}
          </Button>
        </div>
      </section>
    </main>
  )
}
