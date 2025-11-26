"use client"

import type React from "react"

import { memo } from "react"
import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import { motion } from "motion/react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

const Contact = memo(function Contact() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=rifat.fauzan8@gmail.com",
      color: "text-[#EA4335]",
      bgColor: "hover:bg-[#EA4335]/10",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://www.github.com/rifatfauzan",
      color: "text-[#333333]",
      bgColor: "hover:bg-[#333333]/10",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/",
      color: "text-[#0A66C2]",
      bgColor: "hover:bg-[#0A66C2]/10",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/rifatfauzannn",
      color: "text-[#E4405F]",
      bgColor: "hover:bg-[#E4405F]/10",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.h2 
          {...(!prefersReducedMotion && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.6 }
          })}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 text-black"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          {...(!prefersReducedMotion && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.6, delay: 0.1 }
          })}
          className="text-center text-black/80 mb-12 max-w-2xl mx-auto"
        >
          Feel free to connect with me on social media or send me an email.
        </motion.p>

        <motion.div
          {...(!prefersReducedMotion && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.6, delay: 0.2 }
          })}
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center gap-3 w-28 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${link.bgColor} hover:shadow-lg hover:scale-105`}
                title={link.name}
              >
                <IconComponent size={40} className={`${link.color} transition-colors`} />
                <span className="text-black font-medium text-sm text-center">{link.name}</span>
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})

export default Contact