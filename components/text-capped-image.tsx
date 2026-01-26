"use client"

import { useEffect, useState } from "react"

type TextCappedImageProps = {
  targetId: string
  className?: string
  children: React.ReactNode
}

export function TextCappedImage({ targetId, className, children }: TextCappedImageProps) {
  const [maxHeight, setMaxHeight] = useState<number | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const handleChange = () => setEnabled(mql.matches)
    handleChange()

    if ("addEventListener" in mql) {
      mql.addEventListener("change", handleChange)
      return () => mql.removeEventListener("change", handleChange)
    }

    mql.addListener(handleChange)
    return () => mql.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (!enabled) {
      setMaxHeight(null)
      return
    }

    const target = document.getElementById(targetId)
    if (!target) {
      setMaxHeight(null)
      return
    }

    const update = () => {
      const height = target.getBoundingClientRect().height
      setMaxHeight(height > 0 ? Math.round(height) : null)
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(target)
    window.addEventListener("resize", update)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [enabled, targetId])

  const style = maxHeight ? { maxHeight: `${maxHeight}px` } : undefined

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
