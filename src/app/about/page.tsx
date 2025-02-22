"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github } from "lucide-react"
import { motion } from "framer-motion"

const timelineData = [
  {
    year: "2023",
    title: "Dove into React.js & Front-End Development",
    description: "Started working with React.js and Tailwind CSS, building reusable UI components and interactive web apps.",
    icon: "react"
  },
  {
    year: "2023 (Mid)",
    title: "Internship & Next.js Exploration",
    description: "Interned as a Frontend Developer at Sale Gully Retail Pvt Ltd, contributing to the ACUMENS.inc website. Post-internship, I picked up Next.js and built the Humaya Power website.",
    icon: "nextjs"
  },
  {
    year: "2024",
    title: "Building Scalable & Engaging UI Experiences",
    description: "Worked on a practice e-commerce platform, learned React Native basics, and built a high-converting SaaS marketing website for the Multy Messaging Platform.",
    icon: "mobile"
  },
  {
    year: "Present",
    title: "Creating Impact-Driven Digital Products",
    description: "Developing modern, performant, and visually compelling front-end solutions while experimenting with UI animations, 3D visuals, and seamless user interactions.",
    icon: "code"
  }
];

const strengthsData = [
  {
    title: "My Core Strengths",
    points: [
      "Building visually engaging, highly interactive UI experiences 🎨✨",
      "Optimizing performance while maintaining sleek animations ⚡",
      "Writing scalable, reusable React/Next.js components 🏗️",
      "Ensuring responsiveness and accessibility without bloat 🌍"
    ]
  },
  {
    title: "My Philosophy",
    points: [
      "Minimal dependencies—only use external libraries when truly needed 🔍",
      "Avoid generic, card-heavy designs; focus on immersive layouts 🚀",
      "Animations should enhance UX, not just look flashy 🎭",
      "Write clean, readable code that future me won’t hate 🧼"
    ]
  }
];

const funFacts = [
  {
    question: "First serious coding experience?",
    answer: "When I realized CSS can actually make things move instead of just looking pretty.",
    icon: "💡"
  },
  {
    question: "Favorite UI design trend?",
    answer: "Minimal, futuristic, and engaging—no boring static pages allowed!",
    icon: "⚡"
  },
  {
    question: "Biggest pet peeve in development?",
    answer: "When people use 5 libraries for things that could be done in 5 lines of code.",
    icon: "🐛"
  },
  {
    question: "Dark mode or light mode?",
    answer: "Dark mode. If you use light mode, we need to talk. ☠️",
    icon: "🎉"
  }
];



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="flex-1 space-y-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/[1.1] bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground"
              >
                Passionate About Creating Exceptional Web Experiences
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground"
              >
                As a frontend engineer, I believe in the power of clean code and intuitive design to create impactful digital solutions.
              </motion.p>
              <motion.blockquote 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="border-l-4 bg-accent/10 p-4 rounded-lg border-primary pl-4 italic text-lg"
              >
                "The best code is no code at all. Every line of code we write is code that needs to be debugged, maintained, and eventually deprecated."
              </motion.blockquote>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{scale: 1.05, rotate: 2 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/developer-illustration.svg"
                  alt="Developer Illustration"
                  fill
                  className="object-contain shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-accent/5">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          >
            My Journey
          </motion.h2>
          <div className="relative">
            {/* Vertical line for mobile, Horizontal for desktop */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-border transform md:hidden" />
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-border transform -translate-y-1/2" />
            <div className="space-y-12 md:space-y-0 md:flex md:justify-between md:items-start md:gap-4">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start pl-12 md:pl-0 md:flex-col md:items-center md:flex-1"
                >
                  {/* Timeline dot and icon */}
                  <div className="absolute left-0 top-0 md:static md:mb-4 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center relative z-10"
                    >
                      {item.icon === 'react' && <span className="text-lg">⚛️</span>}
                      {item.icon === 'nextjs' && <span className="text-lg">🔄</span>}
                      {item.icon === 'mobile' && <span className="text-lg">📱</span>}
                      {item.icon === 'code' && <span className="text-lg">💻</span>}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <motion.div 
                    className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-[250px]"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="text-2xl font-bold text-primary mb-2 md:text-center">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2 md:text-center">{item.title}</h3>
                    <p className="text-muted-foreground md:text-center">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          >
            Core Strengths & Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {strengthsData.map((strength, index) => (
              <motion.div 
                key={strength.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg border shadow-md transition-all duration-300 ${index % 2 === 0 ? "bg-accent/10" : "bg-card"}`}
              >
                <h3 className="text-2xl font-bold mb-4">{strength.title}</h3>
                <ul className="space-y-3">
                  {strength.points.map((point, pointIndex) => (
                    <motion.li 
                      key={point} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + pointIndex * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + pointIndex * 0.1 }}
                        className="w-2 h-2 rounded-full bg-primary" 
                      />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-accent/5">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          >
            Fun Facts About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative h-[200px] [perspective:1000px]"
              >
                <motion.div 
                  className="absolute inset-0 w-full h-full [transform-style:preserve-3d] cursor-pointer duration-150"
                  whileHover={{ rotateY: 180 }}
                  whileTap={{ rotateY: 180 }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-card p-6 rounded-lg border shadow-sm flex flex-col items-center justify-center text-center">
                    <span className="text-3xl mb-4">{fact.icon}</span>
                    <h3 className="text-xl font-bold text-primary">{fact.question}</h3>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-card p-6 rounded-lg border shadow-sm flex items-center justify-center text-center [transform:rotateY(180deg)]">
                    <p className="text-muted-foreground">{fact.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Let's Build Something Amazing Together!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and ideas.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="https://github.com/yourusername" target="_blank">
              <Button size="lg" variant="outline" className="text-lg">
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}