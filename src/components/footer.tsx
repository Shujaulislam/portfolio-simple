"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 — Built by Shuja. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/Shujaulislam" target="_blank">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110 hover:bg-accent">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/shuja-ul-islam/" target="_blank">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110 hover:bg-accent">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://twitter.com/Shujaulislam09" target="_blank">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110 hover:bg-accent">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
          <Link href="mailto:shujaulisla@gmail.com">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110 hover:bg-accent">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}