import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Waves, Eye, Network, TestTube, BookOpen } from "lucide-react"

const workPackages = [
  {
    id: 1,
    title: "ROV Development & Integration",
    shortTitle: "ROV Development",
    description:
      "Design and development of a robust underwater ROV platform equipped with sensors, cameras, and communication systems suitable for integration with AI models.",
    icon: Waves,
    color: "bg-primary/10 text-primary",
    leadPartner: "Dubai Future Lab",
    slug: "rov-development",
  },
  {
    id: 2,
    title: "Perception & Communication Systems",
    shortTitle: "Perception Systems",
    description:
      "Development of perception systems including 3D mapping, visual question answering, and image captioning using Vision Language Models (VLMs).",
    icon: Eye,
    color: "bg-secondary/10 text-secondary",
    leadPartner: "Khalifa University",
    slug: "perception-systems",
  },
  {
    id: 3,
    title: "Multi-Robot Decision Making",
    shortTitle: "Multi-Robot Systems",
    description:
      "Development of decision-making algorithms for coordinating multiple ROVs using generative AI for path planning and task allocation.",
    icon: Network,
    color: "bg-accent/10 text-accent",
    leadPartner: "Khalifa University",
    slug: "multi-robot-systems",
  },
  {
    id: 4,
    title: "Testing & Validation",
    shortTitle: "Testing",
    description:
      "Comprehensive testing in simulation, controlled pool environments, and real-world marine scenarios to validate system performance.",
    icon: TestTube,
    color: "bg-chart-2/10 text-chart-2",
    leadPartner: "Dubai Future Lab",
    slug: "testing-validation",
  },
  {
    id: 5,
    title: "Dissemination & Exploitation",
    shortTitle: "Dissemination",
    description:
      "Publication of research findings, presentation at conferences, and engagement with the scientific and industrial community.",
    icon: BookOpen,
    color: "bg-chart-3/10 text-chart-3",
    leadPartner: "Khalifa University",
    slug: "dissemination",
  },
]

export default function WorkPackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Work Packages</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Five integrated work packages advancing underwater robotics through AI and VLMs
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Work Packages Grid */}
        <ScrollReveal className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:gap-8">
              {workPackages.map((wp) => {
                const Icon = wp.icon

                return (
                  <Card key={wp.id} className="overflow-hidden border-border/50 transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${wp.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Badge variant="outline">WP{wp.id}</Badge>
                            </div>
                            <CardTitle className="mb-2 text-2xl">{wp.title}</CardTitle>
                            <CardDescription className="text-base">{wp.description}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Lead Partner</div>
                          <div className="mt-1 font-medium">{wp.leadPartner}</div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button asChild>
                          <Link href={`/work-packages/${wp.slug}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
