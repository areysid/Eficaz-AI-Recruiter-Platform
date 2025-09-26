import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const recentCalls = [
  {
    id: "CL-001",
    agent: "Sales Assistant Pro",
    contact: "John Smith",
    phone: "+1 (555) 123-4567",
    duration: "2:34",
    status: "completed",
    time: "2 min ago",
    outcome: "Interested"
  },
  {
    id: "CL-002", 
    agent: "Support Bot v2",
    contact: "Emily Davis",
    phone: "+1 (555) 234-5678",
    duration: "1:12",
    status: "completed",
    time: "5 min ago",
    outcome: "Resolved"
  },
  {
    id: "CL-003",
    agent: "Lead Qualifier",
    contact: "Michael Chen",
    phone: "+1 (555) 345-6789",
    duration: "0:45",
    status: "failed",
    time: "8 min ago",
    outcome: "No Answer"
  },
  {
    id: "CL-004",
    agent: "Appointment Setter",
    contact: "Sarah Johnson",
    phone: "+1 (555) 456-7890",
    duration: "3:22",
    status: "ongoing",
    time: "10 min ago",
    outcome: "In Progress"
  },
  {
    id: "CL-005",
    agent: "Customer Survey",
    contact: "David Wilson",
    phone: "+1 (555) 567-8901",
    duration: "1:58",
    status: "completed",
    time: "15 min ago",
    outcome: "Feedback Collected"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="default" className="bg-success text-success-foreground"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
    case "failed":
      return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>;
    case "ongoing":
      return <Badge variant="secondary" className="bg-warning text-warning-foreground"><Clock className="h-3 w-3 mr-1" />Ongoing</Badge>;
    default:
      return <Badge variant="secondary"><AlertCircle className="h-3 w-3 mr-1" />{status}</Badge>;
  }
};

export function RecentCallsTable() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recent Calls
          <Button variant="outline" size="sm">View All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Call ID</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Outcome</TableHead>
              <TableHead>Time</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentCalls.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-mono text-sm">{call.id}</TableCell>
                <TableCell className="font-medium">{call.agent}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{call.contact}</div>
                    <div className="text-sm text-muted-foreground">{call.phone}</div>
                  </div>
                </TableCell>
                <TableCell>{call.duration}</TableCell>
                <TableCell>{getStatusBadge(call.status)}</TableCell>
                <TableCell>{call.outcome}</TableCell>
                <TableCell className="text-muted-foreground">{call.time}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}