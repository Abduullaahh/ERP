import { SiteSidebar } from "@/components/sidebar/site-header"
import { ThemeToggle } from "@/components/sidebar/theme-toggle"
import { UserNav } from "@/components/sidebar/user-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-[240px,1fr]">
        <SiteSidebar />
      <div className="flex flex-col w-full">
        <header className="border-b px-8 py-2 h-14">
          <div className="flex items-center justify-end space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-16">
          {children}
        </main>
      </div>
    </div>
  )
}