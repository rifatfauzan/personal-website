"use client"

import { Mail, Linkedin, Instagram, Github, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://www.github.com/rifatfauzan", color: "hover:text-zinc-200" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/rifat-fauzan-0b648b2b0/", color: "hover:text-[#0A66C2]" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/rifatfauzannn", color: "hover:text-[#E4405F]" },
]

function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-900 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(66,133,244,0.12) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="text-[11px] font-bold text-white tracking-[0.3em] uppercase mb-6"
        >
          Let's connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.06, ease: EASE_OUT }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.14, ease: EASE_OUT }}
        >
          <motion.a
            href="mailto:rifat.fauzan8@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASE_OUT }}
            className="inline-flex items-center gap-2 text-xl md:text-2xl text-[#4285f4] font-medium group transition-colors duration-150 hover:text-[#4285f4]/80"
          >
            rifat.fauzan8@gmail.com
            <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </motion.a>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mt-12">
          {socialLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: 0.22 + i * 0.08, ease: EASE_OUT }}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`text-zinc-500 transition-colors duration-150 ${link.color}`}
                >
                  <Icon size={22} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
