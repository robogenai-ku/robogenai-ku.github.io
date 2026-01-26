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
          <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-16 sm:pb-10 lg:px-8 lg:pt-20 lg:pb-20">
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

        {/* Partner Logos Section */}
        <ScrollReveal className="border-b border-border/40 bg-muted/35">
          <div className="mx-auto max-w-7xl sm:px-6 sm:py-5 lg:px-8 pt-5">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70">
                  Partnerships
                </p>
                <h2 className="mt-1 text-base font-semibold tracking-tight text-balance sm:text-lg">
                  Initiative powered by
                </h2>
              </div>

              <div className="grid w-full max-w-md grid-cols-2 gap-3">
                <div className="group flex items-center justify-center rounded-xl border border-border/40 px-0 py-0 shadow-[0_12px_28px_-22px_oklch(var(--primary)/0.45)] backdrop-blur-sm transition hover:border-primary/40 hover:bg-background">
                  <Image
                    src="/logos/DFL-full.webp"
                    alt="DFL Company"
                    width={160}
                    height={64}
                    className="h-12 w-auto object-contain opacity-80 transition group-hover:opacity-100"
                  />
                </div>
                <div className="group flex items-center justify-center rounded-xl border border-border/40 px-0 py-0 shadow-[0_12px_28px_-22px_oklch(var(--primary)/0.45)] backdrop-blur-sm transition hover:border-primary/40 hover:bg-background">
                  <Image
                    src="/logos/ku-full.png"
                    alt="Khalifa University"
                    width={360}
                    height={300}
                    className="h-20 w-50 object-contain opacity-80 transition group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* What / Why / How Section */}
        <ScrollReveal className="border-b border-border/40 py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="relative w-full overflow-hidden border-border/50 bg-background/40 backdrop-blur-md shadow-[0_24px_80px_-60px_oklch(var(--primary)/0.6)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.08)_40%,transparent_70%),radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
              <CardContent className="relative z-10 p-8 sm:p-10">
                <div className="max-w-3xl">
                  <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                    Next-Generation Underwater Robotic System 
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                    Integrating Generative AI and Vision-Language Models (VLMs) for intelligent, context-aware marine exploration and monitoring.
                  </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr_1fr]">
                  <Card className="relative min-w-0 overflow-hidden border-border/50 bg-gradient-to-br from-background via-bg-secondary/15 to-primary/10 shadow-[0_20px_60px_-40px_oklch(var(--primary)/0.6)]">
                    <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255, 255, 255, 0.35),transparent_55%)]" />
                    <div className="relative z-10 overflow-hidden rounded bg-muted">
                      <Image
                        src="/cards/what.jpg"
                        alt="Abstract marine robotics concept"
                        width={640}
                        height={240}
                        className="h-24 w-full object-cover"
                      />
                    </div>
                    <CardContent className="relative z-10 p-5">
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

                  <Card className="min-w-0 border-border/40 bg-secondary/8 backdrop-blur-sm">
                    <div className="overflow-hidden rounded bg-muted">
                      <Image
                        src="/cards/why.jpg"
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
                        <li>The project supports UAE's innovation goals in marine technology and sustainable ocean monitoring.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="min-w-0 border-border/40 bg-accent/15 backdrop-blur-sm">
                    <div className="overflow-hidden rounded bg-muted">
                      <Image
                        src="/cards/how.jpg"
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
                  <h3 className="mb-2 text-xl font-semibold">ROV Development</h3>
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
