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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#18181b]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white">
          Rifatmon
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#home"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'home')}
          >
            Home
          </Link>
          <Link
            href="#tech"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'tech')}
          >
            Tools
          </Link>
          <Link
            href="#experiences"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'experiences')}
          >
            Experiences
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'projects')}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'contact')}
          >
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1U9gGqdFryXGmCFve_AcN4nP8msPGk3CW/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Resume
          </Link>
        </nav>
        <motion.div whileTap={{ scale: 0.88 }} style={{ display: 'inline-flex' }}>
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-in slide-in-from-top duration-300">
          <div className="p-6 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-[0_2px_8px_rgba(255,255,255,0.05)] transition-all bg-[#18181b]">
            <nav className="flex flex-col gap-4">
              <Link
                href="#home"
                className="text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'home')}
              >
                Home
              </Link>
              <Link
                href="#tech"
                className="text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'tech')}
              >
                Tools
              </Link>
              <Link
                href="#experiences"
                className="text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'experiences')}
              >
                Experiences
              </Link>
              <Link
                href="#projects"
                className="text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'projects')}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'contact')}
              >
                Contact
              </Link>
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
