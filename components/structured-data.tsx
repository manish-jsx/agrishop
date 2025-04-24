interface LocalBusinessProps {
  name: string
  description: string
  address: string
  telephone: string
  email: string
  url: string
  geo?: {
    latitude: string
    longitude: string
  }
  areaServed?: string[]
}

export function LocalBusinessStructuredData({
  name,
  description,
  address,
  telephone,
  email,
  url,
  geo,
  areaServed,
}: LocalBusinessProps) {
  const addressParts = address.split(", ")

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts[0] || "",
      addressLocality: addressParts[1] || "",
      addressRegion: addressParts[2]?.split(" ")[0] || "",
      postalCode: addressParts[2]?.split(" ")[1] || "",
      addressCountry: "IN",
    },
    geo: geo
      ? {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        }
      : undefined,
    areaServed: areaServed?.map((area) => ({
      "@type": "City",
      name: area,
    })),
    telephone,
    email,
    url,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface ProductProps {
  name: string
  description: string
  image: string
  price: string
  url: string
}

export function ProductStructuredData({ name, description, image, price, url }: ProductProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    image,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: price.replace("₹", ""),
      availability: "https://schema.org/InStock",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface FAQProps {
  questions: {
    question: string
    answer: string
  }[]
}

export function FAQStructuredData({ questions }: FAQProps) {
  const structuredData = {
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

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
