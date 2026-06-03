"use client"

import type React from "react"

import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import { motion } from "motion/react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

function Contact() {
  const headingMotionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.35, ease: EASE_OUT }
  }

  const paragraphMotionProps = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.35, delay: 0.08, ease: EASE_OUT }
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rifat.fauzan8@gmail.com",
      color: "text-[#EA4335]",
      bgColor: "hover:bg-[#EA4335]/10",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://www.github.com/rifatfauzan",
      color: "text-white",
      bgColor: "hover:bg-white/10",
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
          {...headingMotionProps}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          {...paragraphMotionProps}
          className="text-center text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Feel free to connect with me on social media or send me an email.
        </motion.p>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {socialLinks.map((link, i) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
                whileTap={{ scale: 0.96 }}
                className={`flex flex-col items-center justify-center gap-3 w-28 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-colors duration-200 ${link.bgColor} hover:shadow-lg hover-scale`}
                title={link.name}
              >
                <IconComponent size={40} className={`${link.color} transition-colors`} />
                <span className="text-white font-medium text-sm text-center">{link.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact