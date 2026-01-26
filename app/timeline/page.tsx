import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GanttChart } from "@/components/gantt-chart"
import { Calendar, CheckCircle2, Circle, Flag } from "lucide-react"

const milestones = [
  {
    id: 1,
    title: "ROV Prototype Complete",
    description: "First functional ROV prototype ready for testing",
    targetMonth: 9,
    achieved: true,
    workPackage: 1,
  },
  {
    id: 2,
    title: "3D Mapping Operational",
    description: "3D reconstruction system operational",
    targetMonth: 12,
    achieved: false,
    workPackage: 2,
  },
  {
    id: 3,
    title: "ROV Field Ready",
    description: "ROV certified for field deployment",
    targetMonth: 12,
    achieved: false,
    workPackage: 1,
  },
  {
    id: 4,
    title: "VQA System Deployed",
    description: "VQA model integrated and tested",
    targetMonth: 15,
    achieved: false,
    workPackage: 2,
  },
  {
    id: 5,
    title: "Multi-Robot Coordination Active",
    description: "Multiple ROVs coordinating successfully",
    targetMonth: 21,
    achieved: false,
    workPackage: 3,
  },
  {
    id: 6,
    title: "Simulation Tests Complete",
    description: "All simulation scenarios validated",
    targetMonth: 24,
    achieved: false,
    workPackage: 4,
  },
  {
    id: 7,
    title: "Field Trials Complete",
    description: "Real-world marine testing finished",
    targetMonth: 30,
    achieved: false,
    workPackage: 4,
  },
]

const phases = [
  {
    title: "Foundation Phase",
    months: "M0 - M12",
    description: "ROV development and initial AI model setup",
    status: "completed",
    color: "border-l-primary",
  },
  {
    title: "Development Phase",
    months: "M12 - M24",
    description: "Perception systems and multi-robot coordination",
    status: "in-progress",
    color: "border-l-secondary",
  },
  {
    title: "Validation Phase",
    months: "M24 - M36",
    description: "Testing, field trials, and final validation",
    status: "upcoming",
    color: "border-l-accent",
  },
]

export default function TimelinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>36-Month Project Timeline</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Project Timeline</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Track progress across all work packages from initiation to completion
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Gantt Chart */}
        <ScrollReveal className="py-12 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GanttChart />
          </div>
        </ScrollReveal>

        {/* Project Phases */}
        <ScrollReveal className="py-12 border-b border-border/40 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-center">Project Phases</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {phases.map((phase, index) => (
                <Card key={index} className={`border-l-4 ${phase.color}`}>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge
                        variant={
                          phase.status === "completed"
                            ? "default"
                            : phase.status === "in-progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {phase.status === "completed"
                          ? "Completed"
                          : phase.status === "in-progress"
                            ? "In Progress"
                            : "Upcoming"}
                      </Badge>
                      <span className="text-sm font-medium text-muted-foreground">{phase.months}</span>
                    </div>
                    <CardTitle>{phase.title}</CardTitle>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Milestones */}
        <ScrollReveal className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold">Key Milestones</h2>
              <p className="text-muted-foreground">Major achievements and target dates across all work packages</p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                {/* Milestones */}
                <div className="space-y-8">
                  {milestones.map((milestone) => (
                    <div key={milestone.id} className="relative flex gap-6">
                      {/* Icon */}
                      <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
                        {milestone.achieved ? (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background">
                            {milestone.targetMonth <= 11 ? (
                              <Circle className="h-6 w-6 text-muted-foreground" />
                            ) : (
                              <Flag className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <Card className="flex-1 border-border/50">
                        <CardContent className="p-6">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <Badge variant="outline">WP{milestone.workPackage}</Badge>
                            <Badge variant="secondary">Month {milestone.targetMonth}</Badge>
                            {milestone.achieved && <Badge className="bg-green-600">Achieved</Badge>}
                          </div>
                          <h3 className="mb-2 text-lg font-semibold">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Stats */}
        <ScrollReveal className="border-t border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="mb-2 text-3xl font-bold text-primary">11 / 36</div>
                <div className="text-sm text-muted-foreground">Months Completed</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-secondary">3 / 5</div>
                <div className="text-sm text-muted-foreground">Active Work Packages</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-accent">1 / 7</div>
                <div className="text-sm text-muted-foreground">Milestones Achieved</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-chart-2">~30%</div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
