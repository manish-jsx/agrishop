import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner Skeleton */}
      <section className="bg-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Skeleton className="h-10 w-3/4 bg-green-600 mb-4" />
            <Skeleton className="h-6 w-full bg-green-600" />
          </div>
        </div>
      </section>

      {/* Contact Information Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Skeleton className="h-12 w-12 rounded-full mb-4" />
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Skeleton */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Skeleton */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <Skeleton className="h-8 w-64 mb-6" />
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-32 w-full rounded-md" />
                </div>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            {/* Map Skeleton */}
            <Skeleton className="h-[500px] rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  )
}
