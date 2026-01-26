import { Card, CardContent } from "@/components/ui/card"
import { teamMembersCompact } from "./team-members-compact-data"

export function TeamMembersCompact() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {teamMembersCompact.map((member) => (
        <Card key={member.id} className="border-border/50">
          <CardContent className="p-5 text-center">
            <div className="text-base font-semibold">{member.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{member.role}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
