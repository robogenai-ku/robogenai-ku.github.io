import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const dynamicParams = false
export const dynamic = "force-static"

export async function generateStaticParams() {
  // Get the keys from your workPackagesData object (e.g., ["rov-development", ...])
  return Object.keys(workPackagesData).map((slug) => ({
    slug: slug,
  }));
}

const workPackagesData: Record<string, any> = {
  "rov-development": {
    id: 1,
    title: "ROV Development & Integration",
    description:
      "Design and development of a robust underwater ROV platform equipped with sensors, cameras, and communication systems suitable for integration with AI models.",
    status: "in-progress",
    progress: 65,
    startMonth: 0,
    duration: 12,
    leadPartner: "Universidad Politécnica de Madrid",
    image: "/placeholder.svg",
    objectives: [
      "Design ROV mechanical structure with modular architecture",
      "Integrate high-resolution cameras and sonar sensors",
      "Implement underwater acoustic communication protocols",
      "Ensure waterproof housing and durability for deep-sea operations",
    ],
    tasks: [
      {
        id: 1,
        title: "ROV Mechanical Design",
        description: "Complete mechanical design and structural analysis of ROV frame",
        startMonth: 0,
        duration: 3,
        status: "completed",
        progress: 100,
      },
      {
        id: 2,
        title: "Sensor Integration",
        description: "Integrate cameras, sonar, and environmental sensors",
        startMonth: 3,
        duration: 4,
        status: "in-progress",
        progress: 70,
      },
      {
        id: 3,
        title: "Communication System Setup",
        description: "Implement underwater acoustic communication",
        startMonth: 6,
        duration: 3,
        status: "in-progress",
        progress: 40,
      },
      {
        id: 4,
        title: "System Integration Testing",
        description: "Test integrated ROV systems",
        startMonth: 9,
        duration: 3,
        status: "not-started",
        progress: 0,
      },
    ],
    milestones: [
      {
        id: 1,
        title: "ROV Prototype Complete",
        description: "First functional ROV prototype ready for testing",
        targetMonth: 9,
        achieved: true,
      },
      {
        id: 2,
        title: "ROV Field Ready",
        description: "ROV certified for field deployment",
        targetMonth: 12,
        achieved: false,
      },
    ],
    deliverables: [
      "D1.1 - ROV Design Specification Document",
      "D1.2 - Integrated ROV Prototype",
      "D1.3 - Testing and Validation Report",
    ],
  },
  "perception-systems": {
    id: 2,
    title: "Perception & Communication Systems",
    description:
      "Development of perception systems including 3D mapping, visual question answering, and image captioning using Vision Language Models (VLMs).",
    status: "in-progress",
    progress: 35,
    startMonth: 6,
    duration: 18,
    leadPartner: "INESC TEC",
    image: "/placeholder.svg",
    objectives: [
      "Implement 3D mapping and reconstruction from stereo vision",
      "Develop VQA system for answering queries about underwater scenes",
      "Create image captioning for marine species identification",
      "Build multimodal communication interface for human-robot interaction",
    ],
    tasks: [
      {
        id: 1,
        title: "3D Mapping Implementation",
        description: "Develop 3D reconstruction algorithms from stereo vision",
        startMonth: 6,
        duration: 6,
        status: "in-progress",
        progress: 50,
      },
      {
        id: 2,
        title: "VQA Model Development",
        description: "Train and deploy Visual Question Answering model",
        startMonth: 9,
        duration: 6,
        status: "in-progress",
        progress: 30,
      },
      {
        id: 3,
        title: "Image Captioning System",
        description: "Build marine species identification and captioning",
        startMonth: 12,
        duration: 6,
        status: "not-started",
        progress: 0,
      },
      {
        id: 4,
        title: "Multimodal Interface",
        description: "Create user interface for human-robot interaction",
        startMonth: 18,
        duration: 6,
        status: "not-started",
        progress: 0,
      },
    ],
    milestones: [
      {
        id: 1,
        title: "3D Mapping Operational",
        description: "3D reconstruction system operational",
        targetMonth: 12,
        achieved: false,
      },
      {
        id: 2,
        title: "VQA System Deployed",
        description: "VQA model integrated and tested",
        targetMonth: 15,
        achieved: false,
      },
    ],
    deliverables: [
      "D2.1 - 3D Mapping System",
      "D2.2 - VQA Model and Interface",
      "D2.3 - Image Captioning System",
      "D2.4 - Integrated Perception Platform",
    ],
  },
  "multi-robot-systems": {
    id: 3,
    title: "Multi-Robot Decision Making",
    description:
      "Development of decision-making algorithms for coordinating multiple ROVs using generative AI for path planning and task allocation.",
    status: "not-started",
    progress: 0,
    startMonth: 12,
    duration: 15,
    leadPartner: "University of Porto",
    image: "/placeholder.svg",
    objectives: [
      "Implement multi-agent coordination framework",
      "Develop GenAI-based path planning algorithms",
      "Create optimal task allocation among robots",
      "Build collision avoidance and safety systems",
    ],
    tasks: [
      {
        id: 1,
        title: "Multi-Agent Framework",
        description: "Develop coordination framework for multiple ROVs",
        startMonth: 12,
        duration: 5,
        status: "not-started",
        progress: 0,
      },
      {
        id: 2,
        title: "GenAI Path Planning",
        description: "Implement generative AI for dynamic path planning",
        startMonth: 15,
        duration: 6,
        status: "not-started",
        progress: 0,
      },
      {
        id: 3,
        title: "Task Allocation Algorithm",
        description: "Create optimal task distribution among robots",
        startMonth: 18,
        duration: 4,
        status: "not-started",
        progress: 0,
      },
      {
        id: 4,
        title: "Collision Avoidance",
        description: "Build real-time collision avoidance system",
        startMonth: 21,
        duration: 6,
        status: "not-started",
        progress: 0,
      },
    ],
    milestones: [
      {
        id: 1,
        title: "Multi-Robot Coordination Active",
        description: "Multiple ROVs coordinating successfully",
        targetMonth: 21,
        achieved: false,
      },
    ],
    deliverables: [
      "D3.1 - Multi-Agent Coordination Framework",
      "D3.2 - GenAI Path Planning System",
      "D3.3 - Task Allocation Module",
      "D3.4 - Safety and Collision Avoidance System",
    ],
  },
  "testing-validation": {
    id: 4,
    title: "Testing & Validation",
    description:
      "Comprehensive testing in simulation, controlled pool environments, and real-world marine scenarios to validate system performance.",
    status: "not-started",
    progress: 0,
    startMonth: 18,
    duration: 12,
    leadPartner: "Universidad Politécnica de Madrid",
    objectives: [
      "Conduct comprehensive simulation testing",
      "Perform controlled pool environment tests",
      "Execute real-world field trials in marine environments",
      "Validate AI model accuracy and robustness",
    ],
    tasks: [
      {
        id: 1,
        title: "Simulation Testing",
        description: "Comprehensive testing in simulated environments",
        startMonth: 18,
        duration: 4,
        status: "not-started",
        progress: 0,
      },
      {
        id: 2,
        title: "Pool Testing",
        description: "Controlled environment testing in pool facilities",
        startMonth: 21,
        duration: 3,
        status: "not-started",
        progress: 0,
      },
      {
        id: 3,
        title: "Field Trials Preparation",
        description: "Prepare for real-world marine testing",
        startMonth: 24,
        duration: 3,
        status: "not-started",
        progress: 0,
      },
      {
        id: 4,
        title: "Marine Field Trials",
        description: "Execute field trials in real marine environments",
        startMonth: 27,
        duration: 3,
        status: "not-started",
        progress: 0,
      },
    ],
    milestones: [
      {
        id: 1,
        title: "Simulation Tests Complete",
        description: "All simulation scenarios validated",
        targetMonth: 24,
        achieved: false,
      },
      {
        id: 2,
        title: "Field Trials Complete",
        description: "Real-world marine testing finished",
        targetMonth: 30,
        achieved: false,
      },
    ],
    deliverables: [
      "D4.1 - Simulation Test Results",
      "D4.2 - Pool Test Report",
      "D4.3 - Field Trial Documentation",
      "D4.4 - Final Validation Report",
    ],
  },
  dissemination: {
    id: 5,
    title: "Dissemination & Exploitation",
    description:
      "Publication of research findings, presentation at conferences, and engagement with the scientific and industrial community.",
    status: "in-progress",
    progress: 45,
    startMonth: 0,
    duration: 36,
    leadPartner: "INESC TEC",
    objectives: [
      "Publish research papers in high-impact journals",
      "Present findings at international conferences",
      "Create comprehensive project documentation",
      "Engage with stakeholders and potential users",
    ],
    tasks: [
      {
        id: 1,
        title: "Publication Strategy",
        description: "Develop publication and dissemination strategy",
        startMonth: 0,
        duration: 6,
        status: "completed",
        progress: 100,
      },
      {
        id: 2,
        title: "Conference Presentations",
        description: "Present at major robotics and AI conferences",
        startMonth: 6,
        duration: 24,
        status: "in-progress",
        progress: 40,
      },
      {
        id: 3,
        title: "Journal Publications",
        description: "Publish in peer-reviewed journals",
        startMonth: 12,
        duration: 24,
        status: "in-progress",
        progress: 30,
      },
      {
        id: 4,
        title: "Stakeholder Engagement",
        description: "Workshops and demonstrations for stakeholders",
        startMonth: 18,
        duration: 18,
        status: "not-started",
        progress: 0,
      },
    ],
    milestones: [
      {
        id: 1,
        title: "First Publications Released",
        description: "Initial research papers published",
        targetMonth: 12,
        achieved: true,
      },
      {
        id: 2,
        title: "Project Website Live",
        description: "Comprehensive project website launched",
        targetMonth: 6,
        achieved: true,
      },
    ],
    deliverables: [
      "D5.1 - Dissemination Strategy Document",
      "D5.2 - Published Research Papers",
      "D5.3 - Conference Presentations",
      "D5.4 - Final Project Report",
    ],
  },
}

function getStatusBadge(status: string) {
  const variants = {
    "in-progress": { label: "In Progress", variant: "default" as const },
    "not-started": { label: "Not Started", variant: "secondary" as const },
    completed: { label: "Completed", variant: "outline" as const },
  }
  return variants[status as keyof typeof variants] || variants["not-started"]
}

function getProgressStyle(status: string) {
  switch (status) {
    case "completed":
      return "bg-emerald-500"
    case "in-progress":
      return "bg-sky-500"
    default:
      return "bg-slate-300"
  }
}

export default async function WorkPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const wp = workPackagesData[slug]

  if (!wp) {
    notFound()
  }

  const statusInfo = getStatusBadge(wp.status)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <ScrollReveal className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/work-packages">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work Packages
              </Link>
            </Button>

            <Card className="overflow-hidden border-border/50">
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="outline">WP{wp.id}</Badge>
                      <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                    </div>
                    <CardTitle className="text-3xl">{wp.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-base text-muted-foreground leading-relaxed">{wp.description}</p>
                    <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Lead Partner</div>
                        <div className="mt-1 font-medium">{wp.leadPartner}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Duration</div>
                        <div className="mt-1 font-medium">{wp.duration} months</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Start Month</div>
                        <div className="mt-1 font-medium">M{wp.startMonth}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Progress</div>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className={`h-full rounded-full transition-all ${getProgressStyle(wp.status)}`}
                              style={{ width: `${wp.progress}%` }}
                              role="progressbar"
                              aria-valuenow={wp.progress}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="min-w-[3rem] text-right text-xs font-semibold text-foreground">
                            {wp.progress}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Key Objectives</div>
                      <ul className="mt-3 space-y-2 text-sm">
                        {wp.objectives.slice(0, 3).map((objective: string, index: number) => (
                          <li key={index} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
                <div className="p-6 pt-0 md:p-8 md:pl-0 md:pt-8">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-muted md:h-full md:min-h-[320px]">
                    <img
                      src={wp.image || "/placeholder.svg"}
                      alt={`${wp.title} illustration`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
