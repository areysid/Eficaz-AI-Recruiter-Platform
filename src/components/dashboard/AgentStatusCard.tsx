import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bot, Play, Pause, Settings, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const agents = [
  {
    id: "AG-001",
    name: "Sales Assistant Pro",
    status: "active",
    calls: 23,
    successRate: 87,
    avgDuration: "2:15",
    type: "Sales"
  },
  {
    id: "AG-002", 
    name: "Support Bot v2",
    status: "active",
    calls: 18,
    successRate: 94,
    avgDuration: "1:42",
    type: "Support"
  },
  {
    id: "AG-003",
    name: "Lead Qualifier",
    status: "paused",
    calls: 12,
    successRate: 76,
    avgDuration: "1:28",
    type: "Qualification"
  },
  {
    id: "AG-004",
    name: "Appointment Setter",
    status: "active",
    calls: 31,
    successRate: 82,
    avgDuration: "3:05",
    type: "Scheduling"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge variant="default" className="bg-success text-success-foreground">Active</Badge>;
    case "paused":
      return <Badge variant="secondary" className="bg-warning text-warning-foreground">Paused</Badge>;
    case "inactive":
      return <Badge variant="outline">Inactive</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export function AgentStatusCard() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Active Agents
          <Button variant="outline" size="sm">Manage All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {agents.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{agent.name}</h4>
                  {getStatusBadge(agent.status)}
                </div>
                <p className="text-sm text-muted-foreground">{agent.type} • {agent.calls} calls today</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium">{agent.successRate}% success</div>
                <div className="text-xs text-muted-foreground">Avg: {agent.avgDuration}</div>
              </div>
              <Progress value={agent.successRate} className="w-16" />
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  {agent.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Agent</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}