import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Phone, Calendar, Upload, Zap } from "lucide-react";

const quickActions = [
  {
    title: "Knowledge Base",
    description: "Upload your knowledge base",
    icon: Plus,
    action: "knowledge-base",
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
        {/* ✅ Grid respects card width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {quickActions.map((action) => (
            <Button
              key={action.action}
              variant={action.gradient ? "gradient" : "outline"}
              className="h-auto w-full flex flex-col items-start gap-2 p-4 text-left whitespace-normal"
            >
              <action.icon className="h-5 w-5 shrink-0" />
              <div className="w-full">
                <div className="font-medium">{action.title}</div>
                {/* ✅ Allow wrapping */}
                <div className="text-xs opacity-80 break-words">
                  {action.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

