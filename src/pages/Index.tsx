import { Phone, Bot, BarChart3, Clock, TrendingUp, Users, Calendar, Zap } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RecentCallsTable } from "@/components/dashboard/RecentCallsTable";
import { AgentStatusCard } from "@/components/dashboard/AgentStatusCard";
import { QuickActionsCard } from "@/components/dashboard/QuickActionsCard";
import { CallVolumeChart, HourlyActivityChart } from "@/components/dashboard/DashboardChart";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Prateek</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your AI voice agents today.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Calls Today"
            value="247"
            change="+12% from yesterday"
            changeType="positive"
            icon={Phone}
            iconColor="text-primary"
          />
          <MetricCard
            title="Active Agents"
            value="8"
            change="2 paused"
            changeType="neutral"
            icon={Bot}
            iconColor="text-success"
          />
          <MetricCard
            title="Success Rate"
            value="87.2%"
            change="+3.1% this week"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-primary"
          />
          <MetricCard
            title="Avg Call Duration"
            value="2:34"
            change="-15s from last week"
            changeType="positive"
            icon={Clock}
            iconColor="text-muted-foreground"
          />
        </div>

        {/* Charts and Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CallVolumeChart />
          </div>
          <QuickActionsCard />
        </div>

        {/* Hourly Activity and Agent Status */}
        <div className="grid gap-6 lg:grid-cols-2">
          <HourlyActivityChart />
          <AgentStatusCard />
        </div>

        {/* Recent Calls Table */}
        <RecentCallsTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
