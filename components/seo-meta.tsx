import Head from "next/head"

interface SEOMetaProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  currentUrl: string
  alternateUrl: string
  lang: string
  alternateLang: string
}

export default function SEOMeta({
  title,
  description,
  keywords,
  ogImage = "/og-image.jpg",
  currentUrl,
  alternateUrl,
  lang,
  alternateLang,
}: SEOMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "hi_IN"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang tags */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" href={currentUrl} hrefLang={lang} />
      <link rel="alternate" href={alternateUrl} hrefLang={alternateLang} />
      <link rel="alternate" href={lang === "en" ? currentUrl : alternateUrl} hrefLang="x-default" />
    </Head>
  )
}
