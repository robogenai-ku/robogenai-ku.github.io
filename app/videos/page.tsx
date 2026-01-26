"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "ROV Demo Dive",
    description: "Field footage from the latest ROV integration tests in controlled waters.",
    thumbnail: "/videos/thumbnails/dummy.png",
    videoUrl: "/videos/dummy.mp4",
  },
  {
    id: 2,
    title: "Perception Stack Overview",
    description: "A short walkthrough of the perception pipeline and mapping results.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Multi-Robot Coordination",
    description: "Highlights from the multi-robot decision-making simulation runs.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Pool Validation Tests",
    description: "Testing session showing system stability and control response.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 5,
    title: "AI Captioning Demo",
    description: "Automatic image captioning for underwater scenes in action.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Project Highlights",
    description: "A quick recap of milestones and field achievements.",
    thumbnail: "/placeholder.svg",
  },
]

export default function VideosPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [isExpandedOpen, setIsExpandedOpen] = useState(false)
  const closeTimeoutRef = useRef<number | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const expandedVideo = videos.find((video) => video.id === expandedId) || null

  useEffect(() => {
    if (expandedId !== null) {
      const raf = requestAnimationFrame(() => setIsExpandedOpen(true))
      return () => cancelAnimationFrame(raf)
    }
    setIsExpandedOpen(false)
  }, [expandedId])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [expandedId])

  const handleOpen = (id: number) => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setExpandedId(id)
  }

  const handleClose = () => {
    setIsExpandedOpen(false)
    closeTimeoutRef.current = window.setTimeout(() => {
      setExpandedId(null)
      closeTimeoutRef.current = null
    }, 200)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Videos</h1>
              <p className="text-lg text-muted-foreground text-balance">
                A curated library of project demos, experiments, and field highlights.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => handleOpen(video.id)}
                  className="cursor-pointer text-left transition-transform duration-200 ease-out hover:scale-[1.02]"
                >
                  <Card className="h-full overflow-hidden border-border/50 transition-colors duration-200 hover:bg-muted/40 hover:shadow-lg">
                    <div className="relative aspect-video w-full bg-muted">
                      <img
                        src={video.thumbnail}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="space-y-2 p-4">
                      <div className="text-base font-semibold">{video.title}</div>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {expandedVideo && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm transition-opacity duration-200 ${
              isExpandedOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <button
              type="button"
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={handleClose}
              aria-label="Close video preview"
            />
            <Card
              className={`relative z-10 flex h-[70vh] w-[70vw] max-w-5xl flex-col overflow-hidden border-border/60 shadow-xl transition-all duration-200 ease-out ${
                isExpandedOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4 border-b border-border/60">
                <div>
                  <CardTitle className="text-2xl">{expandedVideo.title}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{expandedVideo.description}</p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="flex min-h-0 flex-1 flex-col p-0">
                {expandedVideo.videoUrl ? (
                  <div className="flex min-h-0 flex-1 bg-muted">
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover"
                      src={expandedVideo.videoUrl}
                      poster={expandedVideo.thumbnail}
                      controls
                      playsInline
                    />
                  </div>
                ) : (
                  <div className="flex min-h-0 flex-1 bg-muted">
                    <img
                      src={expandedVideo.thumbnail}
                      alt={`${expandedVideo.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
