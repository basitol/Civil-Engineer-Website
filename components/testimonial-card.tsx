import Image from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image: string
  className?: string
}

export function TestimonialCard({ quote, name, title, image, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300",
        className,
      )}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">{quote}</p>
    </div>
  )
}
