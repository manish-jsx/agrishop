import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQStructuredData } from "@/components/structured-data"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description?: string
  faqs: FAQItem[]
  className?: string
}

export default function FAQSection({ title, description, faqs, className = "" }: FAQSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Add structured data for SEO */}
        <FAQStructuredData questions={faqs} />
      </div>
    </section>
  )
}
