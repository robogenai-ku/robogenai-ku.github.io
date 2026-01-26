import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Waves, Brain, Network, Microscope, Database } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <ScrollReveal className="relative overflow-hidden border-b border-border/40">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Project Period: 2025-2027
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
                Underwater Robotics Meets <span className="text-primary">Generative AI</span>
              </h1>

              <p className="mb-10 text-lg text-muted-foreground leading-relaxed text-balance">
                Integrating Vision Language Models and Generative AI in autonomous underwater vehicles for advanced
                marine exploration and monitoring.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/work-packages">
                    Explore Work Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/publications">View Publications</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* What / Why / How Section */}
        <ScrollReveal className="border-b border-border/40 py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="w-full border-border/50">
              <CardContent className="p-8 sm:p-10">
                <div className="max-w-3xl">
                  <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                    Next-Generation Underwater Robotic System 
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                    Integrating Generative AI and Vision-Language Models (VLMs) for intelligent, context-aware marine exploration and monitoring.
                  </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr_1fr]">
                  <Card className="min-w-0 border-border/50">
                    <div className="overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src="/placeholder.svg"
                        alt="Abstract marine robotics concept"
                        width={640}
                        height={240}
                        className="h-24 w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="mb-3 text-lg font-semibold">What</h3>
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        <li>Deploy coordinated teams of autonomous underwater vehicles (AUVs) capable of efficiently surveying large areas.</li>
                        <li>Combine visual, chemical, and acoustic sensing to generate high-resolution 3D maps of underwater environments.</li>
                        <li>Use these 3D reconstructions to build digital twins that enable long-term monitoring, simulation, and predictive modeling.</li>
                        <li>Develop underwater-adapted vision-language models that can interpret video, describe scenes, answer questions, detect anomalies, and support ecological insights.</li>
                        <li>Enable real-time detection of pollution events, ecological changes, hazards, and structural degradation.</li>
                        <li>Improve underwater communication through integrated acoustic and optical links.</li>
                        <li>Ensure continuous, energy-aware operation via optimized navigation, cooperative behaviors, and distributed recharging.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="min-w-0 border-border/50">
                    <div className="overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src="/placeholder.svg"
                        alt="Underwater research motivation"
                        width={640}
                        height={240}
                        className="h-24 w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="mb-3 text-lg font-semibold">Why</h3>
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        <li>Underwater environments are complex, data-rich, and difficult to interpret in real-time.</li>
                        <li>There is a growing need for autonomous, AI-enabled robotic systems to perform long-term monitoring and environmental analysis.</li>
                        <li>Generative AI can summarize, interpret, and visualize underwater sensor data efficiently.</li>
                        <li>The project supports UAE’s innovation goals in marine technology and sustainable ocean monitoring.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="min-w-0 border-border/50">
                    <div className="overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src="/placeholder.svg"
                        alt="Workflow for underwater AI systems"
                        width={640}
                        height={240}
                        className="h-24 w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="mb-3 text-lg font-semibold">How</h3>
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        <li>Develop customized ROVs with multi-sensor capabilities.</li>
                        <li>Train Vision-Language Models (VLMs) for underwater perception.</li>
                        <li>Enable robotic swarms for wide-area coverage and cooperative decision-making.</li>
                        <li>Build multi-modal analytics for underwater data integration and interpretation.</li>
                        <li>Validate through simulation, lab, and real-world testing.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Key Features Section */}
        <ScrollReveal className="border-b border-border/40 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Advancing Marine Robotics
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
                Five integrated work packages combining cutting-edge AI with underwater robotics
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Waves className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">WP1: ROV Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Advanced underwater vehicles equipped with sensors, cameras, and communication systems designed for
                    AI integration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Vision Language Models</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    3D mapping, visual question answering, and image captioning systems for intelligent underwater
                    perception.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Network className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Multi-Robot Coordination</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Decision-making algorithms for coordinating multiple AUVs in complex marine
                    environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10">
                    <Microscope className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Testing & Validation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive validation from simulation to real-world marine scenarios ensuring robust performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
                    <Database className="h-6 w-6 text-chart-3" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Open Research</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Publishing findings, presenting at conferences, and engaging with the scientific community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-accent/15 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Explore More</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    Discover detailed information about each work package, timeline, and research outputs.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/work-packages">
                      View All Work Packages
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        {/*<section className="border-b border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Work Packages</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-secondary">36</div>
                <div className="text-sm text-muted-foreground">Project Months</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Partner Institutions</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-chart-2">15+</div>
                <div className="text-sm text-muted-foreground">Research Team Members</div>
              </div>
            </div>
          </div>
        </section>*/}

        {/* CTA Section */}
        <ScrollReveal className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Join Our Research Journey
              </h2>
              <p className="mb-8 text-lg text-muted-foreground text-balance">
                Stay updated on our progress, publications, and opportunities for collaboration in underwater AI
                robotics.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
