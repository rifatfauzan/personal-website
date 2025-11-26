"use client"

import { useEffect, useState } from "react"

export function usePrefersReducedMotion() {
  const getPreference = () => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return false
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPreference)

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return prefersReducedMotion
}

