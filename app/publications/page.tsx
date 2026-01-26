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
    title: "title name",
    authors: ["A, A.", "B, B.", "C, C."],
    type: "journal",
    venue: "IEEE Journal of Oceanic Engineering",
    year: 2024,
    month: 6,
    keywords: ["underwater robotics", "vision language models", "marine exploration"],
    status: "published",
    doi: "10.1109/JOE.2024.123456",
    abstract:
      "summary.",
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

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      searchQuery === "" ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesType = typeFilter === "all" || pub.type === typeFilter
    const matchesYear = yearFilter === "all" || pub.year.toString() === yearFilter

    return matchesSearch && matchesType && matchesYear
  })

  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a)

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
                  placeholder="Search publications, authors, or keywords..."
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
                      <Badge variant="outline">{pub.year}</Badge>
                      {pub.status === "submitted" && <Badge variant="default">Under Review</Badge>}
                    </div>
                    <CardTitle className="mb-2 text-xl leading-tight">{pub.title}</CardTitle>
                    <CardDescription className="text-base">{pub.authors.join(", ")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Venue</div>
                      <div className="text-sm">{pub.venue}</div>
                    </div>

                    {pub.abstract && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Abstract</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                      </div>
                    )}

                    <div className="mb-4 flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>

                    {pub.doi && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" asChild>
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Publication
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Download PDF
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
