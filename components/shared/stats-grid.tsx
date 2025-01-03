import { ReactNode } from "react"

interface StatsGridProps {
  children: ReactNode
}

export function StatsGrid({ children }: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  )
}