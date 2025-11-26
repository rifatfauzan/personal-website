"use client"

import dynamic from "next/dynamic"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

const Threads = dynamic(() => import("@/components/ui/threads"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-[#edebeb] to-[#edebeb]/50" aria-hidden />
})

export default function AmbientBackground() {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#edebeb] to-[#edebeb]/50" aria-hidden />
  }

  return (
    <div className="fixed inset-0 z-0 will-change-scroll" aria-hidden>
      <Threads color={[0, 0, 0]} amplitude={1} distance={0.05} enableMouseInteraction={false} />
    </div>
  )
}

