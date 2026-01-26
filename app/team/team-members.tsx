"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail } from "lucide-react"
import { teamMembers } from "./team-data"

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function TeamMembers() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const toggleExpanded = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col gap-6">
      {teamMembers.map((member) => {
        const isExpanded = expandedIds.has(member.id)
        return (
          <Card
            key={member.id}
            className={`flex w-full flex-col border-border/50 transition-shadow hover:shadow-lg md:flex-row ${
              isExpanded ? "h-auto" : "h-[360px]"
            }`}
          >
            <CardHeader className="md:w-80 md:flex-shrink-0">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative group cursor-pointer">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.photoUrl || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="pointer-events-none absolute left-0 top-full z-20 mt-3 w-48 opacity-0 transition-opacity duration-300 delay-250 group-hover:opacity-100">
                    <div className="rounded-xl border border-border/60 bg-background/95 p-3 shadow-xl backdrop-blur">
                      <Avatar className="h-40 w-40">
                        <AvatarImage src={member.photoUrl || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p
                className={`mb-2 text-sm text-muted-foreground leading-relaxed ${
                  isExpanded ? "" : "max-h-28 overflow-hidden"
                }`}
              >
                {member.bio}
              </p>
              <Button
                variant="link"
                size="sm"
                className="mb-4 h-auto cursor-pointer p-0 text-sm text-[var(--link-accent)] hover:text-[color-mix(in oklab, var(--link-accent) 85%, black)]"
                onClick={() => toggleExpanded(member.id)}
              >
                {isExpanded ? "Show less" : "Show more"}
              </Button>

              <div className="mb-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Institution
                </div>
                <div className="text-sm">{member.institution}</div>
              </div>

              <div className="mb-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Expertise</div>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <a
                    href={`mailto:${member.email}`}
                    onClick={(event) => {
                      event.preventDefault()
                      window.open(`mailto:${member.email}`, "_blank", "noopener,noreferrer")
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
