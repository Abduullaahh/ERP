import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Users2,
  Package,
  FileText,
  HeartHandshake,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard | Enterprise ERP",
  description: "Example dashboard page for the ERP system",
}

export default function DashboardPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, here is an overview of your business.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Inventory Items
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180 since last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {/* TODO: Add Chart Component */}
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Chart placeholder
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              Latest actions across all modules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    New invoice created
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <HeartHandshake className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    New customer added
                  </p>
                  <p className="text-sm text-muted-foreground">
                    15 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <AlertCircle className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Low stock alert
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1 hour ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}