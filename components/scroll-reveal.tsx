"use client"

import type { HTMLAttributes } from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

type ScrollRevealProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article"
}

export function ScrollReveal({ as = "section", children, ...props }: ScrollRevealProps) {
  const Component = as === "div" ? motion.div : as === "article" ? motion.article : motion.section
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches)
    }

    handleChange(mediaQuery)

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }

    // Fallback for older browsers.
    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (shouldReduceMotion || isMobile || isInView) {
      setIsVisible(true)
    }
  }, [isInView, isMobile, shouldReduceMotion])

  useEffect(() => {
    if (isVisible || shouldReduceMotion || isMobile) {
      return
    }
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }
    if (!ref.current || typeof window === "undefined") {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    if (rect.top <= window.innerHeight * 0.9) {
      setIsVisible(true)
    }
  }, [isVisible, isMobile, shouldReduceMotion])

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionReveal}
      {...props}
    >
      {children}
    </Component>
  )
}