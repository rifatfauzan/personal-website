"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

const navItems = [
  { label: "Home", id: "home" },
  { label: "Tools", id: "tech" },
  { label: "Experiences", id: "experiences" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
]

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
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className="sticky top-0 z-50 w-full bg-[#fafaf9]/90 backdrop-blur-sm border-b border-zinc-200"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-zinc-900 tracking-tight flex items-center gap-1">
          Rifatmon
          <span className="w-1.5 h-1.5 rounded-full bg-[#4285f4] mb-3 flex-shrink-0" />
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map(({ label, id }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + i * 0.05, ease: EASE_OUT }}
            >
              <Link
                href={`#${id}`}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150"
                onClick={(e) => handleScroll(e, id)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div whileTap={{ scale: 0.88 }} style={{ display: "inline-flex" }}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-700 hover:bg-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                >
                  <X />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                >
                  <Menu />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            style={{ transformOrigin: "top" }}
            className="container md:hidden py-4"
          >
            <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm">
              <nav className="flex flex-col gap-4">
                {navItems.map(({ label, id }, i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04, ease: EASE_OUT }}
                  >
                    <Link
                      href={`#${id}`}
                      className="text-zinc-600 hover:text-zinc-900 transition-colors"
                      onClick={(e) => handleScroll(e, id)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.04, ease: EASE_OUT }}
                >
                  <Link
                    href="https://drive.google.com/file/d/1U9gGqdFryXGmCFve_AcN4nP8msPGk3CW/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#4285f4] hover:text-[#4285f4]/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
