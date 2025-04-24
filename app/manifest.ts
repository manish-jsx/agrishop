import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AgriShop - Your Complete Agriculture Solution",
    short_name: "AgriShop",
    description:
      "Government approved agriculture shop providing fertilizers, seeds, pesticides, and gardening solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#15803d",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
