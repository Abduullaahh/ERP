import { Sidebar } from "@/components/sidebar/main-sidebar"

export function SiteSidebar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Sidebar />
      </div>
    </header>
  )
}