import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsLoading() {
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

      {/* Search and Filter Skeleton */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Skeleton className="h-10 w-full md:w-96 rounded-md" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-24 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Skeleton */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-10 w-32 rounded-full" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-[200px] w-full" />
                  <CardContent className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <div className="flex items-center justify-between mt-4">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-9 w-24 rounded-md" />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Local Products Highlight Skeleton */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Skeleton className="h-[200px] w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Products Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-5 w-full md:w-96" />
            </div>
            <Skeleton className="h-10 w-32 mt-4 md:mt-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-[200px] w-full" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <div className="flex items-center justify-between mt-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-9 w-24 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Skeleton */}
      <section className="py-12 bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-4 bg-green-600" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto mb-6 bg-green-600" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 mx-auto sm:mx-0 rounded-md bg-green-600" />
            <Skeleton className="h-12 w-40 mx-auto sm:mx-0 rounded-md bg-green-600" />
          </div>
        </div>
      </section>
    </main>
  )
}
