"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import TextPressure from "@/components/ui/text-pressure"
import RotatingText from "@/components/ui/rotating-text"

const roles = [
  "Developer",
  "Data Analyst",
  "Problem Solver",
  "Designer",
  "Learner",
]

const EASE_OUT = [0.23, 1, 0.32, 1] as const

function Hero() {
  const headingMotionProps = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay: 0.15, ease: EASE_OUT }
  }

  const paragraphMotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.3, ease: EASE_OUT }
  }

  const iconRowMotionProps = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.45, ease: EASE_OUT }
  }

  const imageMotionProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.2, ease: EASE_OUT }
  }

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center py-16 md:py-0 transform -rotate-[0.5deg]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <motion.h1
              {...headingMotionProps}
              className="text-4xl md:text-7xl font-bold text-zinc-900 mb-6"
            >
              Hi! I'm...&nbsp;&nbsp;<TextPressure
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
              <span className="inline-flex items-center gap-0">
                <span className="mr-3">A</span>
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
              {...paragraphMotionProps}
              className="text-lg md:text-xl text-zinc-600 mb-8"
            >
              Information Systems student with strong interest in{" "}
              <span className="font-bold text-[#4285f4]">Data Analytics</span> and{" "}
              <span className="font-bold text-[#4285f4]">Products</span>.
            </motion.p>
            <motion.div
              {...iconRowMotionProps}
              className="flex gap-4 mt-8"
            >
              <motion.div whileTap={{ scale: 0.95 }} style={{ display: 'inline-flex' }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile in a new tab">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }} style={{ display: 'inline-flex' }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-zinc-400 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                  asChild
                >
                  <Link href="https://github.com/rifatfauzan" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile in a new tab">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }} style={{ display: 'inline-flex' }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F]/10 hover:text-[#E4405F] transition-colors"
                  asChild
                >
                  <Link href="https://www.instagram.com/rifatfauzannn/" target="_blank" rel="noopener noreferrer" aria-label="Open Instagram profile in a new tab">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            {...imageMotionProps}
            className="hidden md:flex justify-end items-center -mr-40"
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/memoji/memoji.png"
                alt="Rifat"
                width={600}
                height={600}
                className="w-full h-auto drop-shadow-lg"
                sizes="(min-width: 1024px) 600px, 70vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
