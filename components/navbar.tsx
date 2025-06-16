"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Adjust this value based on your navbar height
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
    <header className="sticky top-0 z-50 w-full glass-card border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white">
          Rifatmon
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link 
            href="#home" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'home')}
          >
            Home
          </Link>
          <Link 
            href="#tech" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'tech')}
          >
            Tech Stack
          </Link>
          <Link 
            href="#projects" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'projects')}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            onClick={(e) => handleScroll(e, 'contact')}
          >
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white/10 hover:text-white">
          Resume
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-in slide-in-from-top duration-300">
          <div className="p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
            <nav className="flex flex-col gap-4">
              <Link
                href="#home"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'home')}
              >
                Home
              </Link>
              <Link
                href="#tech"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'tech')}
              >
                Tech Stack
              </Link>
              <Link
                href="#projects"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'projects')}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => handleScroll(e, 'contact')}
              >
                Contact
              </Link>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                Resume
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
