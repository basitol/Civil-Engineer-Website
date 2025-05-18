import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
  subtitleClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? "text-center" : "", "mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
      {subtitle && (
        <p className={cn("text-lg text-muted-foreground max-w-3xl", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
