"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  Building2, 
  LayoutDashboard, 
  Users2, 
  Package, 
  FileText, 
  HeartHandshake,
  Menu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Package,
  },
  {
    title: "HR",
    href: "/hr",
    icon: Users2,
  },
  {
    title: "Finance",
    href: "/finance",
    icon: FileText,
  },
  {
    title: "CRM",
    href: "/crm",
    icon: HeartHandshake,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <>
      {/* Mobile hamburger menu */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-background transition-transform duration-200 ease-in-out md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-14 items-center border-b px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="font-bold">Enterprise ERP</span>
          </Link>
        </div>
        <nav className="flex-1 border-r space-y-1 p-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}