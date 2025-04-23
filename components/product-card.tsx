import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  image: string
  description: string
  viewText: string
}

export default function ProductCard({ name, image, description, viewText }: ProductCardProps) {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4">
          <Button variant="outline" className="w-full">
            {viewText}
          </Button>
        </div>
      </div>
    </div>
  )
}
