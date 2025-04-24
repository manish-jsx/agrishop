import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const languages = ["en", "hi"]
  const routes = ["", "/products", "/services", "/about", "/contact", "/blog", "/locations"]
  const locationRoutes = ["/locations/banaras", "/locations/mughalsarai"]
  const blogPosts = [
    "/blog/wheat-farming-banaras",
    "/blog/organic-farming-mughalsarai",
    "/blog/seasonal-crop-calendar",
    "/blog/modern-irrigation-techniques",
    "/blog/soil-testing-importance",
    "/blog/government-subsidies-farmers",
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate entries for each language and route combination
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
      })
    })

    // Add location pages
    locationRoutes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9, // Higher priority for location pages
      })
    })

    // Add blog posts
    blogPosts.forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${post}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7, // Medium priority for blog posts
      })
    })
  })

  return sitemap
}
