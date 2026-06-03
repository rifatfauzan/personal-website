"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fafaf9]/90 backdrop-blur-sm border-b border-zinc-200">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-zinc-900">
          Rifatmon
        </Link>
        <nav className="hidden md:flex gap-6">
          {[
            { label: "Home", id: "home" },
            { label: "Tools", id: "tech" },
            { label: "Experiences", id: "experiences" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150"
              onClick={(e) => handleScroll(e, id)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://drive.google.com/file/d/1U9gGqdFryXGmCFve_AcN4nP8msPGk3CW/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#4285f4] hover:text-[#4285f4]/80 transition-colors duration-150"
          >
            Resume
          </Link>
        </nav>
        <motion.div whileTap={{ scale: 0.88 }} style={{ display: 'inline-flex' }}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-700 hover:bg-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-in slide-in-from-top duration-300">
          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
            <nav className="flex flex-col gap-4">
              {[
                { label: "Home", id: "home" },
                { label: "Tools", id: "tech" },
                { label: "Experiences", id: "experiences" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  onClick={(e) => handleScroll(e, id)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="https://drive.google.com/file/d/1U9gGqdFryXGmCFve_AcN4nP8msPGk3CW/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4285f4] hover:text-[#4285f4]/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
