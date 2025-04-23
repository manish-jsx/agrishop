import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
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

      {/* Our Story Skeleton */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Skeleton className="h-8 w-64 mb-4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-[400px] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Our Mission Skeleton */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-40 mx-auto mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
