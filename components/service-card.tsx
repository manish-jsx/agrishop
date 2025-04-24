interface ServiceCardProps {
  name: string
  icon: string
  description: string
}

export default function ServiceCard({ name, icon, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
