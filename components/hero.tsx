"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const roles = [
  "Software Engineer",
  "ML Enthusiast",
  "UI/UX Designer",
  "Problem Solver"
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = 100
    const deletingSpeed = 50
    const waitTime = 2000

    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, waitTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, deletingSpeed)
    } else {
      if (displayText === currentRole) {
        setIsWaiting(true)
        return
      }
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentRoleIndex, isDeleting, isWaiting])

  return (
    <section id="home" className="relative py-20 md:py-32 transform -rotate-[0.5deg]">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 transform hover:-translate-y-2 transition-transform duration-300">
            Hi, I'm Rifat!<br />
            A{" "}
            <span className="text-blue-400 relative">
              {displayText}
              <span className="animate-blink ml-1">|</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            I am a student specializing in developing websites with various frameworks, also have keen interest in data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View Projects
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
              Contact Me
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
              <Link href="https://github.com/rifatfauzan" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mr-8 absolute right-40 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:rotate-180">
          {/* <Image
            src="/Cigo.png"
            alt="My Spirit Character"
            width={400}
            height={400}
            className="object-contain"
          /> */}
        </div>
      </div>
    </section>
  )
}
