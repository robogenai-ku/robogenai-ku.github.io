import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ExternalLink, Building2 } from "lucide-react"
import { teamMembers } from "./team-data"
import { teamMembersCompact } from "./team-members-compact-data"
import { TeamMembers } from "./team-members"
import { TeamMembersCompact } from "./team-members-compact"

const institutions = [
  {
    id: 1,
    name: "Khalifa University",
    country: "UAE",
    website: "https://www.ku.ac.ae",
  },
  {
    id: 2,
    name: "Dubai Future Lab",
    country: "Dubai",
    website: "https://www.dubaifuture.ae/initiatives/future-design-and-acceleration/dubai-future-labs",
  },
]
export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
                <Users className="h-4 w-4" />
                <span>{teamMembers.length+teamMembersCompact.length} Team Members</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Our Team</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Meet the researchers and engineers advancing underwater robotics through AI
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Institutions */}
        <ScrollReveal className="border-b border-border/40 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold">Partner Institutions</h2>
            <div className="grid gap-6 md:place-content-center md:[grid-template-columns:repeat(auto-fit,minmax(16rem,26rem))]">
              {institutions.map((inst) => (
                <Card key={inst.id} className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Building2 className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 font-semibold">{inst.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{inst.country}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={inst.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Team Members */}
        <ScrollReveal className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold">Research Team</h2>
            <div className="mb-8 flex justify-center">
              <div className="flex h-12 w-full max-w-3xl items-center justify-center rounded-full border border-white/40 bg-white/70 px-6 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 shadow-sm backdrop-blur">
                <img
                  src="/logos/KU.png"
                  alt="Khalifa University logo"
                  className="mr-3 h-6 w-6 flex-shrink-0 object-scale-down"
                />
                Khalifa University
              </div>
            </div>
            <TeamMembers />
            <div className="mt-10 mb-8 flex justify-center">
              <div className="flex h-12 w-full max-w-3xl items-center justify-center rounded-full border border-white/40 bg-white/70 px-6 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 shadow-sm backdrop-blur">
                <img
                  src="/logos/DFL.png"
                  alt="DFL logo"
                  className="mr-3 h-8 w-8 flex-shrink-0 object-scale-down"
                />
                Dubai Future Lab
              </div>
            </div>
            <TeamMembersCompact />
          </div>
        </ScrollReveal>

        {/* Join Section */}
        <ScrollReveal className="border-t border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Join Our Team</h2>
              <p className="mb-6 text-muted-foreground text-balance">
                Interested in collaborating or joining the RoboGenAI project? We welcome researchers, students, and
                industry partners.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
