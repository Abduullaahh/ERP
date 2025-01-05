import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Enterprise ERP System",
  description: "Welcome to the Enterprise ERP System",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Building2 className="mr-2 h-6 w-6" />
            Enterprise ERP
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                This ERP system has revolutionized how we manage our business operations, 
                providing unprecedented clarity and efficiency across all departments.
              </p>
              <footer className="text-sm">Abdullah Tahir, CEO</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Enterprise ERP
              </h1>
              <p className="text-sm text-muted-foreground">
                Your complete business management solution
              </p>
            </div>
            <div className="grid gap-4">
              <Link href="/login">
                <Button className="w-full">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="w-full">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}