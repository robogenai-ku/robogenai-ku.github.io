"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ImageIcon, Video, Search } from "lucide-react"
import Image from "next/image"

const mediaAssets = [
  {
    id: 1,
    title: "Perception Stack Overview",
    description: "A short walkthrough of the perception pipeline and mapping results.",
    type: "video",
    url: "/placeholder.svg",
    thumbnailUrl: "/videos/thumbnails/PSO.jpg",
    videoUrl: "/videos/PSO.mp4",
    category: "mapping",
    tags: ["perception", "mapping", "pipeline"],
    capturedAt: "2024-04-18",
  },
  {
    id: 2,
    title: "Multi-Robot Coordination",
    description: "Highlights from the multi-robot decision-making simulation runs.",
    type: "video",
    url: "/placeholder.svg",
    thumbnailUrl: "/videos/thumbnails/MRC.jpg",
    videoUrl: "/videos/MRC.mp4",
    category: "multi-robot",
    tags: ["coordination", "simulation", "multi-robot"],
    capturedAt: "2024-03-30",
  },
  {
    id: 3,
    title: "Pool Validation Tests",
    description: "Testing session showing system stability and control response.",
    type: "video",
    url: "/placeholder.svg",
    thumbnailUrl: "/videos/thumbnails/PVT.jpg",
    videoUrl: "/videos/PVT.mp4",
    category: "test-results",
    tags: ["validation", "control", "tests"],
    capturedAt: "2024-02-14",
  },
  {
    id: 4,
    title: "3D Underwater Map",
    description: "Generated 3D reconstruction of coral reef using stereo vision",
    type: "image",
    url: "/3d-coral-reef-reconstruction-visualization.jpg",
    thumbnailUrl: "/3d-coral-reef-reconstruction.jpg",
    category: "mapping",
    tags: ["3D mapping", "coral", "reconstruction"],
    capturedAt: "2024-06-10",
  },
]

const categoryLabels: Record<string, string> = {
  rov: "ROV",
  mapping: "3D Mapping & AI",
  "multi-robot": "Multi-Robot",
  "test-results": "Testing",
  event: "Events",
}

export default function MediaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedMedia, setSelectedMedia] = useState<(typeof mediaAssets)[0] | null>(null)

  const filteredMedia = mediaAssets.filter((media) => {
    const matchesSearch =
      searchQuery === "" ||
      media.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      media.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      media.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesType = typeFilter === "all" || media.type === typeFilter
    const matchesCategory = categoryFilter === "all" || media.category === categoryFilter

    return matchesSearch && matchesType && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
                <ImageIcon className="h-4 w-4" />
                <span>{mediaAssets.length} Media Assets</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Media Gallery</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Photos, videos, and visual documentation of the RoboGenAI project
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal className="border-b border-border/40 bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search media by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Tabs value={typeFilter} onValueChange={setTypeFilter} className="w-full sm:w-auto">
                <TabsList className="grid w-full grid-cols-3 sm:w-[280px]">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="image">Images</TabsTrigger>
                  <TabsTrigger value="video">Videos</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="rov">ROV</SelectItem>
                  <SelectItem value="mapping">3D Mapping & AI</SelectItem>
                  <SelectItem value="multi-robot">Multi-Robot</SelectItem>
                  <SelectItem value="test-results">Testing</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredMedia.length} of {mediaAssets.length} items
            </div>
          </div>
        </ScrollReveal>

        {/* Media Grid */}
        <ScrollReveal className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMedia.map((media) => (
                <Card
                  key={media.id}
                  className="group cursor-pointer overflow-hidden border-border/50 transition-all hover:shadow-lg"
                  onClick={() => setSelectedMedia(media)}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={media.thumbnailUrl || "/placeholder.svg"}
                      alt={media.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {media.type === "video" && (
                      <div className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white">
                        <Video className="h-4 w-4" />
                      </div>
                    )}
                    <Badge className="absolute top-2 right-2" variant="secondary">
                      {categoryLabels[media.category]}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 font-semibold leading-tight">{media.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {media.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {media.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredMedia.length === 0 && (
                <div className="col-span-full">
                  <Card className="border-border/50">
                    <CardContent className="py-12 text-center">
                      <ImageIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                      <h3 className="mb-2 text-lg font-semibold">No media found</h3>
                      <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Media Detail Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
      <DialogContent className="max-h-[85vh] h-auto !w-[70vw] !max-w-[70vw] overflow-hidden sm:!max-w-[70vw]">
        {selectedMedia && (
          <div className="flex max-h-[85vh] min-h-0 flex-col gap-6 md:flex-row">
            <div className="flex w-full flex-col gap-6 md:w-[15%] pt-4">
              <DialogHeader>
                <DialogTitle>{selectedMedia.title}</DialogTitle>
                <DialogDescription>{selectedMedia.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-sm font-medium">Category</div>
                  <Badge variant="secondary">{categoryLabels[selectedMedia.category]}</Badge>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedMedia.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium">Captured Date</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(selectedMedia.capturedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-start justify-center min-h-0 self-start p-4">
              {selectedMedia.type === "video" && selectedMedia.videoUrl ? (
                <video
                  className="max-h-[calc(85vh-4rem)] w-full rounded-lg bg-muted object-cover"
                  src={selectedMedia.videoUrl}
                  poster={selectedMedia.thumbnailUrl || selectedMedia.url || "/placeholder.svg"}
                  controls
                  playsInline
                />
              ) : (
                <Image
                  src={selectedMedia.url || "/placeholder.svg"}
                  alt={selectedMedia.title}
                  width={1280}
                  height={720}
                  className="max-h-[calc(85vh-4rem)] w-full rounded-lg bg-muted object-cover"
                />
              )}
            </div>
          </div>
        )}
      </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
