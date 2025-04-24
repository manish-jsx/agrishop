import { Skeleton } from "@/components/ui/skeleton"

export default function ServicesLoading() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner Skeleton */}
      <section className="bg-green-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Skeleton className="h-10 w-3/4 bg-green-600 mb-4" />
            <Skeleton className="h-6 w-full bg-green-600 mb-6" />
            <Skeleton className="h-12 w-40 bg-green-600 rounded-md" />
          </div>
        </div>
      </section>

      {/* Service Categories Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-12 w-40 rounded-md" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Skeleton className="h-[400px] rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Skeleton className="h-10 w-40 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
