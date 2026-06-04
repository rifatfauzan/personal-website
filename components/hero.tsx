"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import TextPressure from "@/components/ui/text-pressure"
import RotatingText from "@/components/ui/rotating-text"

const roles = ["Student", "Developer"]

const EASE_OUT = [0.23, 1, 0.32, 1] as const

function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center py-16 md:py-0 overflow-hidden"
    >
      <div className="container relative z-10 py-8 md:py-0">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 56, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.05 }}
          className="relative rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="max-w-xl">
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: EASE_OUT }}
                className="text-5xl md:text-7xl font-bold text-zinc-900 mb-4 leading-none tracking-tighter"
              >
                Hi! I'm{" "}
                <TextPressure
                  text="Rifat!"
                  textColor="#4285f4"
                  flex={true}
                  weight={true}
                  width={true}
                  italic={true}
                  scale={false}
                  minFontSize={40}
                  className="inline-block"
                />
                <br />
                <span className="inline-flex items-center gap-2">
                  <span className="text-black font-normal">A</span>
                  <RotatingText
                    texts={roles}
                    mainClassName="text-[#4285f4]"
                    rotationInterval={2500}
                    staggerDuration={0.01}
                    staggerFrom="first"
                    auto={true}
                    loop={true}
                    splitBy="characters"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.36, ease: EASE_OUT }}
                className="text-base md:text-lg text-zinc-500 mb-10 leading-relaxed"
              >
                Information Systems student with strong interest in{" "}
                <span className="font-semibold text-zinc-900">Data Analytics</span> and{" "}
                <span className="font-semibold text-zinc-900">Product Development</span>.
                Building things that matter.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: EASE_OUT }}
                className="flex flex-wrap items-center gap-3"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                  <Button
                    className="bg-zinc-900 text-white hover:bg-zinc-800 px-5 h-10 rounded-lg font-medium text-sm transition-colors duration-150 shadow-sm"
                    asChild
                  >
                    <Link
                      href="https://docs.google.com/document/d/1W78U8AUBN7HR0Z-cUMlneXQpgVvTH16Rrs6ZjCEjG0M/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      My Resume
                    </Link>
                  </Button>
                </motion.div>

                <div className="w-px h-6 bg-zinc-300/60" />

                <div className="flex items-center gap-1">
                  <motion.div whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.15 }}>
                    <Link
                      href="https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex items-center justify-center w-10 h-10 rounded-lg text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors duration-150"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.15 }}>
                    <Link
                      href="https://github.com/rifatfauzan"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex items-center justify-center w-10 h-10 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-150"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.15 }}>
                    <Link
                      href="https://www.instagram.com/rifatfauzannn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex items-center justify-center w-10 h-10 rounded-lg text-[#E4405F] hover:bg-[#E4405F]/10 transition-colors duration-150"
                    >
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 48, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 75, damping: 18, delay: 0.18 }}
              className="hidden md:flex justify-center items-center relative"
            >
              <motion.div
                animate={reduce ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[520px]"
              >
                <Image
                  src="/memoji/memoji.png"
                  alt="Rifat"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  sizes="(min-width: 1024px) 520px, 70vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
