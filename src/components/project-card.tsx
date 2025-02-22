import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-border/50 hover:border-primary/50">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-3 transition-colors group-hover:text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/5 px-2.5 py-1.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-colors hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link 
          href={link} 
          target="_blank" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
        >
          <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}

