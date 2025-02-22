"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold text-lg">Shuja</span>
          </Link>
          <Button
            variant="ghost"
            className="md:hidden transition-transform hover:scale-105 hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-14 md:top-0 left-0 right-0 bg-background md:bg-transparent flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 p-4 md:p-0 border-b md:border-0`}
        >
          <Link
            href="/about"
            className="text-sm font-medium transition-all hover:text-foreground/80 hover:scale-105 w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium transition-all hover:text-foreground/80 hover:scale-105 w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-all hover:text-foreground/80 hover:scale-105 w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/resume.pdf"
            target="blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto transition-transform hover:scale-105 hover:bg-accent rounded-md border border-transparent hover:border-accent"
          >
            Resume
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
