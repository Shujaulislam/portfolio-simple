"use client"

import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-background opacity-80 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 relative z-10"
      >
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Title & Subtitle */}
          <div className="space-y-4 w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/[1.1] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Let’s Build Something Cool! <span className="text-white">🚀</span> 
            </h1>
            <p className="mx-auto max-w-[600px] text-base sm:text-lg md:text-xl text-muted-foreground">
              Have an idea or just want to say hi? Fill out the form below or
              connect with me via email and socials.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <ContactForm />
          </div>

          {/* Alternative Contact Methods */}
          <div className="flex items-center justify-center space-x-6 text-muted-foreground">
            <Link
              
              href="mailto:shujauisla@gmail.com"
              className="flex items-center space-x-2 hover:text-foreground transition"
            >
              <Mail size={20} />
              <span>Email</span>
            </Link>
            <Link
              href="https://linkedin.com/in/shuja-ul-islam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-foreground transition"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Shujaulislam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-foreground transition"
            >
              <Github size={20} />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
