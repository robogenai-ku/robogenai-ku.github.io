"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface WorkPackage {
  id: number
  title: string
  startMonth: number
  duration: number
  status: string
  color: string
}

const workPackages: WorkPackage[] = [
  {
    id: 1,
    title: "ROV Development",
    startMonth: 0,
    duration: 12,
    status: "in-progress",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Perception Systems",
    startMonth: 6,
    duration: 18,
    status: "in-progress",
    color: "bg-secondary",
  },
  {
    id: 3,
    title: "Multi-Robot Systems",
    startMonth: 12,
    duration: 15,
    status: "not-started",
    color: "bg-accent",
  },
  {
    id: 4,
    title: "Testing & Validation",
    startMonth: 18,
    duration: 12,
    status: "not-started",
    color: "bg-chart-2",
  },
  {
    id: 5,
    title: "Dissemination",
    startMonth: 0,
    duration: 36,
    status: "in-progress",
    color: "bg-chart-3",
  },
]

const totalMonths = 36
const currentMonth = 11 // Current progress in the project (Month 11)

export function GanttChart() {
  return (
    <Card className="overflow-hidden border-border/50">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Project Timeline</h3>
          <Badge variant="secondary">Current: Month {currentMonth}</Badge>
        </div>

        {/* Timeline Header */}
        <div className="mb-4 flex gap-2">
          <div className="w-48 shrink-0" /> {/* Space for WP labels */}
          <div className="flex flex-1 gap-1">
            {Array.from({ length: totalMonths }, (_, i) => (
              <div key={i} className="flex-1 text-center text-xs text-muted-foreground">
                {i % 6 === 0 ? `M${i}` : ""}
              </div>
            ))}
          </div>
        </div>

        {/* Work Packages */}
        <div className="space-y-3">
          {workPackages.map((wp) => {
            const startPercentage = (wp.startMonth / totalMonths) * 100
            const widthPercentage = (wp.duration / totalMonths) * 100
            const currentProgress = Math.min(((currentMonth - wp.startMonth) / wp.duration) * 100, 100)
            const isActive = currentMonth >= wp.startMonth && currentMonth < wp.startMonth + wp.duration

            return (
              <div key={wp.id} className="flex gap-2">
                {/* WP Label */}
                <div className="w-48 shrink-0 flex items-center gap-2">
                  <Badge variant="outline" className="shrink-0">
                    WP{wp.id}
                  </Badge>
                  <span className="text-sm font-medium truncate">{wp.title}</span>
                </div>

                {/* Timeline */}
                <div className="relative flex flex-1 items-center">
                  {/* Background Grid */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: totalMonths }, (_, i) => (
                      <div
                        key={i}
                        className={`flex-1 border-l border-border/30 ${i === currentMonth ? "bg-accent/10" : ""}`}
                      />
                    ))}
                  </div>

                  {/* WP Bar */}
                  <div
                    className="absolute h-8 rounded-md"
                    style={{
                      left: `${startPercentage}%`,
                      width: `${widthPercentage}%`,
                    }}
                  >
                    {/* Full bar (background) */}
                    <div className={`h-full rounded-md ${wp.color} opacity-20`} />

                    {/* Progress bar */}
                    {isActive && currentProgress > 0 && (
                      <div
                        className={`absolute top-0 h-full rounded-md ${wp.color}`}
                        style={{ width: `${Math.max(currentProgress, 0)}%` }}
                      />
                    )}

                    {/* Completed bar */}
                    {currentMonth >= wp.startMonth + wp.duration && (
                      <div className={`absolute top-0 h-full w-full rounded-md ${wp.color}`} />
                    )}

                    {/* Bar Label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground/80">{wp.duration}m</span>
                    </div>
                  </div>

                  {/* Current Month Indicator */}
                  {currentMonth >= wp.startMonth && currentMonth < wp.startMonth + wp.duration && (
                    <div
                      className="absolute top-0 h-8 w-0.5 bg-foreground"
                      style={{
                        left: `${(currentMonth / totalMonths) * 100}%`,
                      }}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Current Month Indicator Line */}
        <div className="mt-4 flex gap-2">
          <div className="w-48 shrink-0" />
          <div className="relative flex-1">
            <div
              className="absolute top-0 h-2 w-0.5 bg-foreground"
              style={{
                left: `${(currentMonth / totalMonths) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-primary opacity-20" />
            <span>Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-primary" />
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-foreground" />
            <span>Current Month</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
