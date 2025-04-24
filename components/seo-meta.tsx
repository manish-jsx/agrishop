import type { Metadata } from "next"
import Head from "next/head"

interface SEOMetaProps {
  title: string
  description: string
  keywords: string[]
  currentUrl: string
  alternateUrl: string
  lang: string
  alternateLang: string
}

export default function SEOMeta({
  title,
  description,
  keywords,
  currentUrl,
  alternateUrl,
  lang,
  alternateLang,
}: SEOMetaProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={alternateUrl} hrefLang={alternateLang} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}

export function generateMetadata({
  title,
  description,
  keywords,
}: {
  title: string
  description: string
  keywords: string[]
}): Metadata {
  return {
    title,
    description,
    keywords,
  }
}
