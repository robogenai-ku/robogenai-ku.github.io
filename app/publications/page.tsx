"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, ExternalLink, FileText, Search } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "Vision-Language Models for Underwater Ecological Monitoring",
    authors: ["Rim ElTobgui", "Saverio Iacoponi", "Sajid Javid", "Federico Renda", "Giulia De Masi", "Jorge Dias"],
    type: "conference",
    venue: "2025 IEEE International Workshop on Metrology for the Sea; Learning to Measure Sea Health Parameters (MetroSea)",
    year: 2025,
    month: 11,
    keywords: ["vision-language models", "underwater monitoring", "segmentation", "coral reefs", "marine robotics, ", "ecological assessment", "multimodal reasoning"],
    status: "published",
    doi: "10.1109/MetroSea66681.2025.11245715",
    abstract:
      "This work presents SeaQuery, a dual-path visionlanguage system for underwater ecological monitoring that combines segmentation-derived metrics with multimodal reasoning. The system employs two pathways: a segmentation-guided path using a pre-trained SegFormer model to extract quantitative ecological metrics (coral cover, bleaching extent, species counts), and a vision-language path with PaliGemma2-3B for contextual scene understanding. Both pathways feed into a Gemma2 decoder that generates responses by integrating pixel-derived metrics with visual features. Evaluation on CoralScapes and CoralVQA datasets shows the dual-path architecture achieves 95.0% accuracy in benthic analysis captioning and 39.8% exact match accuracy on visual question answering, outperforming individual pathways (77.4% captioning for segmentation alone, 35.0%VQA for vision-language alone). The results confirm that the design provides an efficient and reliable method for ecological assessment in marine robotics missions.",
  },
  {
    id: 2,
    title: "Multi-Ocular Perception for Autonomous Underwater Monitoring",
    authors: ["Rim ElTobgui", "Vidya Sudevan", "Saverio Iacoponi", "Sajid Javid", "Giulia De Masi", "Federico Renda", "Jorge Dias"],
    type: "preprint",
    status: "submitted",
  },
  {
    id: 3,
    title: "Semantic 3D Underwater Scene Analysis for Ecological Monitoring",
    authors: ["Vidya Sudevan", "Rim ElTobgui", "Jorge Dias"],
    type: "preprint",
    status: "submitted",
  },
]

const typeLabels: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  report: "Technical Report",
  thesis: "Thesis",
}

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const hasKeywords = publications.some((pub) => Array.isArray(pub.keywords) && pub.keywords.length > 0)
  const hasYears = publications.some((pub) => Number.isFinite(pub.year))

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      searchQuery === "" ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (hasKeywords &&
        Array.isArray(pub.keywords) &&
        pub.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase())))

    const matchesType = typeFilter === "all" || pub.type === typeFilter
    const matchesYear =
      yearFilter === "all" ||
      (Number.isFinite(pub.year) && pub.year.toString() === yearFilter)

    return matchesSearch && matchesType && matchesYear
  })

  const years = Array.from(
    new Set(publications.map((p) => p.year).filter((year) => Number.isFinite(year)))
  ).sort((a, b) => b - a)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
                <BookOpen className="h-4 w-4" />
                <span>{publications.length} Publications</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Publications</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Research papers, conference proceedings, and technical reports from the RoboGenAI project
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
                  placeholder={hasKeywords ? "Search publications, authors, or keywords..." : "Search publications or authors..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="journal">Journal</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="preprint">Preprint</SelectItem>
                  <SelectItem value="report">Technical Report</SelectItem>
                </SelectContent>
              </Select>

              {/* Year Filter */}
              {hasYears && (
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredPublications.length} of {publications.length} publications
            </div>
          </div>
        </ScrollReveal>

        {/* Publications List */}
        <ScrollReveal className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {filteredPublications.map((pub) => (
                <Card key={pub.id} className="border-border/50 transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{typeLabels[pub.type]}</Badge>
                      {Number.isFinite(pub.year) && <Badge variant="outline">{pub.year}</Badge>}
                      {pub.status === "submitted" && <Badge variant="default">Under Review</Badge>}
                    </div>
                    <CardTitle className="mb-2 text-xl leading-tight">{pub.title}</CardTitle>
                    <CardDescription className="text-base">{pub.authors.join(", ")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {pub.venue && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Venue</div>
                        <div className="text-sm">{pub.venue}</div>
                      </div>
                    )}

                    {pub.abstract && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Abstract</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                      </div>
                    )}

                    {hasKeywords && Array.isArray(pub.keywords) && pub.keywords.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {pub.doi && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" asChild>
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Publication
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {filteredPublications.length === 0 && (
                <Card className="border-border/50">
                  <CardContent className="py-12 text-center">
                    <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 text-lg font-semibold">No publications found</h3>
                    <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
