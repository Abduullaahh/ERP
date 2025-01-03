import { Metadata } from "next"
import { Package, AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { StatCard } from "@/components/shared/stat-card"
import { StatsGrid } from "@/components/shared/stats-grid"

export const metadata: Metadata = {
  title: "Inventory | Enterprise ERP",
  description: "Example dashboard page for the ERP system",
}

export default function InventoryPage() {
  return (
    <div className="container space-y-8 py-8">
      <PageHeader
        title="Inventory Management"
        description="Manage your products, stock levels, and suppliers"
        buttonText="Add Product"
      />
      <StatsGrid>
        <StatCard
          title="Total Products"
          value="2,543"
          description="+20 new this month"
          icon={Package}
        />
        <StatCard
          title="Low Stock Items"
          value="15"
          description="Requires attention"
          icon={AlertCircle}
          iconClassName="text-destructive"
        />
        <StatCard
          title="Incoming Stock"
          value="+1,250"
          description="Expected this week"
          icon={ArrowUpRight}
        />
        <StatCard
          title="Outgoing Stock"
          value="-850"
          description="Shipped this week"
          icon={ArrowDownRight}
        />
      </StatsGrid>
    </div>
  )
}