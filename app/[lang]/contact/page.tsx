import Image from "next/image"
import { getDictionary, getSEODictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SEOMeta from "@/components/seo-meta"
import { FAQStructuredData } from "@/components/structured-data"
import ContactForm from "@/components/contact-form"

export default async function ContactPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const seoDict = await getSEODictionary(params.lang)

  // SEO data
  const alternateLang = params.lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${params.lang}/contact`
  const alternateUrl = `${baseUrl}/${alternateLang}/contact`

  const seoData = seoDict.contact

  // Default values for missing dictionary entries
  const contactPage = {
    title: dict.contactPage?.title || "Contact Us",
    subtitle: dict.contactPage?.subtitle || "We're here to help with all your agricultural needs",
    phone: {
      title: dict.contactPage?.phone?.title || "Phone",
      number: dict.contactPage?.phone?.number || "+91 98765 43210",
      support: dict.contactPage?.phone?.support || "Available Monday to Saturday, 9am-7pm",
    },
    email: {
      title: dict.contactPage?.email?.title || "Email",
      address: dict.contactPage?.email?.address || "contact@agrishop.com",
      support: dict.contactPage?.email?.support || "We'll respond within 24 hours",
    },
    hours: {
      title: dict.contactPage?.hours?.title || "Business Hours",
      weekdays: dict.contactPage?.hours?.weekdays || "Monday-Saturday: 9:00 AM - 7:00 PM",
      weekend: dict.contactPage?.hours?.weekend || "Sunday: 10:00 AM - 2:00 PM",
    },
    form: {
      title: dict.contactPage?.form?.title || "Send Us a Message",
      name: dict.contactPage?.form?.name || "Your Name",
      namePlaceholder: dict.contactPage?.form?.namePlaceholder || "Enter your name",
      email: dict.contactPage?.form?.email || "Email",
      emailPlaceholder: dict.contactPage?.form?.emailPlaceholder || "Enter your email",
      phone: dict.contactPage?.form?.phone || "Phone Number",
      phonePlaceholder: dict.contactPage?.form?.phonePlaceholder || "Enter your phone number",
      subject: dict.contactPage?.form?.subject || "Subject",
      subjectPlaceholder: dict.contactPage?.form?.subjectPlaceholder || "What is this regarding?",
      message: dict.contactPage?.form?.message || "Your Message",
      messagePlaceholder: dict.contactPage?.form?.messagePlaceholder || "Type your message here...",
      submit: dict.contactPage?.form?.submit || "Send Message",
    },
    validation: {
      required: dict.contactPage?.validation?.required || "This field is required",
      invalidEmail: dict.contactPage?.validation?.invalidEmail || "Please enter a valid email address",
      minLength: dict.contactPage?.validation?.minLength || "This field must be at least {min} characters",
    },
    success: dict.contactPage?.success || "Your message has been sent successfully. We'll get back to you soon!",
    error: dict.contactPage?.error || "There was an error sending your message. Please try again.",
    location: {
      title: dict.contactPage?.location?.title || "Our Location",
      address: dict.contactPage?.location?.address || "123 Agri Road, Lanka, Varanasi, Uttar Pradesh 221005",
      directions: dict.contactPage?.location?.directions || "How to Reach Us",
      directionsList: dict.contactPage?.location?.directionsList || [
        "Located near Lanka Gate, Banaras Hindu University",
        "10 minutes from Varanasi Cantt Railway Station",
        "15 minutes from Lal Bahadur Shastri International Airport",
        "Landmark: Opposite to Bank of Baroda",
      ],
    },
    faq: {
      title: dict.contactPage?.faq?.title || "Frequently Asked Questions",
      description:
        dict.contactPage?.faq?.description || "Find answers to common questions about our products and services",
      questions: dict.contactPage?.faq?.questions || [
        {
          question: "Do you offer home delivery?",
          answer:
            "Yes, we offer home delivery for orders above ₹500 within Varanasi city limits. For areas outside the city, delivery charges may apply.",
        },
        {
          question: "How can I check if a product is in stock?",
          answer: "You can call us at our phone number or send us a WhatsApp message to check product availability.",
        },
        {
          question: "Do you provide installation services for irrigation systems?",
          answer:
            "Yes, we provide professional installation services for all irrigation systems purchased from our shop.",
        },
        {
          question: "Can you help with soil testing?",
          answer:
            "Yes, we offer soil testing services to help you understand the composition and nutrient content of your soil.",
        },
      ],
    },
  }

  const faqItems = contactPage.faq.questions.map((q) => ({
    question: q.question,
    answer: q.answer,
  }))

  const formDictionary = {
    form: contactPage.form,
    validation: contactPage.validation,
    success: contactPage.success,
    error: contactPage.error,
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
      <FAQStructuredData questions={faqItems} />

      <main className="flex min-h-screen flex-col">
        {/* Hero Banner */}
        <section className="bg-green-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{contactPage.title}</h1>
              <p className="text-gray-100 text-lg">{contactPage.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-medium text-lg mb-2">{contactPage.phone.title}</h3>
                <p className="text-gray-600">{contactPage.phone.number}</p>
                <p className="text-gray-600 mt-1">{contactPage.phone.support}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-medium text-lg mb-2">{contactPage.email.title}</h3>
                <p className="text-gray-600">{contactPage.email.address}</p>
                <p className="text-gray-600 mt-1">{contactPage.email.support}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-medium text-lg mb-2">{contactPage.hours.title}</h3>
                <p className="text-gray-600">{contactPage.hours.weekdays}</p>
                <p className="text-gray-600">{contactPage.hours.weekend}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <ContactForm dictionary={formDictionary} />

              {/* Map and Location */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">{contactPage.location.title}</h2>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                    <p className="text-gray-600">{contactPage.location.address}</p>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Map location"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-3">{contactPage.location.directions}</h3>
                  <ul className="space-y-2">
                    {contactPage.location.directionsList.map((direction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-1">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        </div>
                        <span className="text-gray-600">{direction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">{contactPage.faq.title}</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{contactPage.faq.description}</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {contactPage.faq.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <Image src="/whatsapp-icon.svg" alt="WhatsApp" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                {dict.contactPage?.whatsappCta?.title || "Get Quick Responses on WhatsApp"}
              </h2>
            </div>
            <p className="max-w-2xl mx-auto mb-6">
              {dict.contactPage?.whatsappCta?.description ||
                "For faster responses, reach out to us on WhatsApp. Our team is available to answer your questions and provide assistance."}
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {dict.contactPage?.whatsappCta?.button || "Chat on WhatsApp"}
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
