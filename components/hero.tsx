"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import TextPressure from "@/components/ui/text-pressure"
import RotatingText from "@/components/ui/rotating-text"
import { memo } from "react"

const roles = [
  " Learner",
  " Problem Solver",
]

const Hero = memo(function Hero() {

  return (
    <section id="home" className="relative py-20 md:py-32 transform -rotate-[0.5deg]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-black mb-6 transform hover:-translate-y-2 transition-transform duration-300 will-change-transform"
          >
            Hi! I'm      <TextPressure
              text="Rifat!"
              textColor="#f5d20a"
              flex={true}
              weight={true}
              width={true}
              italic={true}
              scale={false}
              minFontSize={40}
              className="inline-block"
            />
            <br />
            <span className="inline-flex items-center gap-1">
              A {" "}
              <RotatingText
                texts={roles}
                mainClassName="text-[#f5d20a]"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-black/80 mb-8"
          >
            I am an Information Systems student with strong interest in <span className="font-bold" style={{ color: '#f5d20a' }}>Data Analytics</span> and <span className="font-bold" style={{ color: '#f5d20a' }}>Products</span>.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 transition-colors hover:text-[#f5d20a]" asChild>
              <Link href="https://github.com/rifatfauzan" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 transition-colors hover:text-[#f5d20a]" asChild>
              <Link href="https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 transition-colors hover:text-[#f5d20a]" asChild>
              <Link href="https://www.instagram.com/rifatfauzannn/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex justify-end items-center -mr-40"
        >
          <div className="relative w-full max-w-2xl">
            <Image
              src="/memoji.png"
              alt="Rifat"
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Hero
