import Script from "next/script"

interface FAQItem {
  question: string
  answer: string
}

export function FAQStructuredData({ questions }: { questions: FAQItem[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export function LocalBusinessStructuredData({
  name,
  image,
  telephone,
  address,
  url,
  geo,
  openingHours,
}: {
  name: string
  image: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  url: string
  geo: {
    latitude: string
    longitude: string
  }
  openingHours: string[]
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image,
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    url,
    geo: {
      "@type": "GeoCoordinates",
      ...geo,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
    })),
  }

  return (
    <Script
      id="business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  )
}

export function ProductStructuredData({
  name,
  image,
  description,
  sku,
  brand,
  price,
  currency,
  availability,
  url,
  reviews,
}: {
  name: string
  image: string
  description: string
  sku: string
  brand: string
  price: number
  currency: string
  availability: string
  url: string
  reviews?: {
    author: string
    datePublished: string
    reviewBody: string
    reviewRating: {
      ratingValue: number
    }
  }[]
}) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image,
    description,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
    },
    ...(reviews && {
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        datePublished: review.datePublished,
        reviewBody: review.reviewBody,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.reviewRating.ratingValue,
        },
      })),
    }),
  }

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  )
}
