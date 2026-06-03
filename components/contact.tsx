"use client"

import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import { motion } from "motion/react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:rifat.fauzan8@gmail.com",
    color: "text-[#EA4335]",
    hoverBg: "hover:bg-[#EA4335]/8",
    hoverBorder: "hover:border-[#EA4335]/30",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://www.github.com/rifatfauzan",
    color: "text-zinc-800",
    hoverBg: "hover:bg-zinc-100",
    hoverBorder: "hover:border-zinc-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/",
    color: "text-[#0A66C2]",
    hoverBg: "hover:bg-[#0A66C2]/8",
    hoverBorder: "hover:border-[#0A66C2]/30",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/rifatfauzannn",
    color: "text-[#E4405F]",
    hoverBg: "hover:bg-[#E4405F]/8",
    hoverBorder: "hover:border-[#E4405F]/30",
  },
]

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 text-zinc-900"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.08, ease: EASE_OUT }}
          className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto"
        >
          Feel free to connect with me on social media or send me an email.
        </motion.p>

        <div className="flex justify-center items-center gap-6 flex-wrap">
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
                className={`flex flex-col items-center justify-center gap-3 w-28 h-28 rounded-xl bg-white border border-zinc-200 shadow-sm transition-colors duration-200 ${link.hoverBg} ${link.hoverBorder} hover:shadow-md`}
                title={link.name}
              >
                <IconComponent size={36} className={link.color} />
                <span className="text-zinc-700 font-medium text-sm text-center">{link.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
