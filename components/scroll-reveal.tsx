"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.3,
  className = ""
}: ScrollRevealProps) {
  const directionVariants = {
    up: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    down: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 }
    },
    left: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    right: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    }
  }

  const variants = directionVariants[direction]

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ 
        once: true, 
        amount: 0.3,
        margin: "-100px 0px -100px 0px"
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
