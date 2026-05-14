"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Experiences from "@/components/experiences"

function HorizontalSections() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["40vw", "0vw"])

  return (
    <div ref={containerRef} style={{ height: "200vh" }}>
      <div
        className="sticky top-16 overflow-hidden"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <motion.div style={{ x }} className="h-full overflow-y-auto">
          <Experiences />
        </motion.div>
      </div>
    </div>
  )
}

export default HorizontalSections
