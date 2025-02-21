import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import TechStack from "@/components/tech-stack"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ABOUT */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Software Engineer – Specializing in Modern Frontend
                  Development
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I build snappy, scalable, and visually engaging web
                  applications with a strong focus on React, Next.js, and
                  Tailwind CSS. Since 2023, I’ve been crafting intuitive user
                  experiences, optimizing performance, and working on projects
                  like Humaya Power and Acumens.inc. Always pushing for better,
                  faster, and more seamless digital experiences.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Shujaulislam" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shuja-ul-islam/"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com/Shujaulislam09" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:shujaulisla@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

