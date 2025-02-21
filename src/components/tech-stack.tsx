"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
]

function TechCard({ category, skills }: { category: string; skills: string[] }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      x.set(xPct)
      y.set(yPct)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full perspective-1000"
    >
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 h-full transform-style-3d transition-shadow duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-4 transform translate-z-20">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 transform-style-3d"
              whileHover={{
                scale: 1.1,
                translateZ: 20,
                transition: { duration: 0.2 },
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <TechCard key={tech.category} category={tech.category} skills={tech.skills} />
      ))}
    </div>
  )
}

