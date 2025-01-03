"use client"

import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
}

export function PageHeader({ title, description, buttonText, onButtonClick }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {buttonText && (
        <Button onClick={onButtonClick}>{buttonText}</Button>
      )}
    </div>
  )
}