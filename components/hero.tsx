"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TextPressure from "@/components/TextPressure"
import RotatingText from "@/components/RotatingText"

const roles = [
  " Learner",
  " Problem Solver",
  " Data Enthusiast"
]

export default function Hero() {

  return (
    <section id="home" className="relative py-20 md:py-32 transform -rotate-[0.5deg]">
      <div className="container">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-black mb-6 transform hover:-translate-y-2 transition-transform duration-300"
          >
            Hi, I'm             <TextPressure
              text="Rifat!"
              textColor="#000000"
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
                mainClassName="text-black"
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
            I am a student with interest in developing websites with various frameworks, also have keen interest in data analytics.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10" asChild>
              <Link href="https://github.com/rifatfauzan" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10" asChild>
              <Link href="https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
