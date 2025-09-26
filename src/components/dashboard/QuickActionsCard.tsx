import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Phone, Calendar, Upload, Zap } from "lucide-react";

const quickActions = [
  {
    title: "Create Agent",
    description: "Build a new AI voice agent",
    icon: Plus,
    action: "create-agent",
    gradient: true
  },
  {
    title: "Make Call",
    description: "Start an immediate call",
    icon: Phone,
    action: "make-call",
    gradient: false
  },
  {
    title: "Schedule Campaign",
    description: "Plan batch calling campaign",
    icon: Calendar,
    action: "schedule-campaign", 
    gradient: false
  },
  {
    title: "Upload Contacts",
    description: "Import contact lists",
    icon: Upload,
    action: "upload-contacts",
    gradient: false
  }
];

export function QuickActionsCard() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.action}
              variant={action.gradient ? "gradient" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4"
            >
              <action.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-xs opacity-80">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}