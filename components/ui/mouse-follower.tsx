"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export default function MouseFollower() {
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.6 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 240)
      mouseY.set(e.clientY - 240)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden
      className="fixed pointer-events-none z-0 w-[480px] h-[480px] rounded-full hidden md:block"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle at center, rgba(66,133,244,0.07) 0%, rgba(66,133,244,0.02) 45%, transparent 70%)",
        filter: "blur(32px)",
      }}
    />
  )
}
