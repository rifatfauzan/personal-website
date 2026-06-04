"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import TextPressure from "@/components/ui/text-pressure"
import RotatingText from "@/components/ui/rotating-text"

const roles = [
  "Learner",
  "Developer",
  "Data Enthusiast",
]

const EASE_OUT = [0.23, 1, 0.32, 1] as const

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center py-20 md:py-0 overflow-hidden">
      {/* Decorative gradient blob — top right */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(66,133,244,0.08) 0%, rgba(66,133,244,0.03) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Decorative gradient blob — bottom left */}
      <div
        aria-hidden
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(66,133,244,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25, ease: EASE_OUT }}
              className="text-base md:text-lg text-zinc-500 mb-10 leading-relaxed"
            >
              Information Systems student with strong interest in{" "}
              <span className="font-semibold text-zinc-900">Data Analytics</span> and{" "}
              <span className="font-semibold text-zinc-900">Product Development</span>.
              Building things that matter.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.38, ease: EASE_OUT }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Primary CTA */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  className="bg-zinc-900 text-white hover:bg-zinc-800 px-5 h-10 rounded-lg font-medium text-sm transition-colors duration-150"
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

              {/* Divider */}
              <div className="w-px h-6 bg-zinc-200" />

              {/* Social icons */}
              <div className="flex items-center gap-1">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.15 }}>
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
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.15 }}>
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
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.15 }}>
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE_OUT }}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Subtle ring behind memoji */}
            <div
              aria-hidden
              className="absolute inset-0 m-auto w-[420px] h-[420px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(66,133,244,0.08) 0%, transparent 70%)",
              }}
            />
            {/* Gentle float — decorative, slow enough to not distract */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
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

      </div>
    </section>
  )
}

export default Hero
