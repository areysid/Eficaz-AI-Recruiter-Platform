import { useState } from "react";
import { Bell, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner"; // ✅ Sonner import

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [agentPrompt, setAgentPrompt] = useState("");

  const handleCreate = () => {
    setOpen(false);

    toast.success("Agent Created", {
      description: `Agent "${agentName}" was successfully created.`,
      style: {
        background: "linear-gradient(135deg, #10b981, #34d399)", // emerald gradient
        color: "white",
      },
    });

    // Later: API call to actually create the agent
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search agents, calls, or campaigns..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* ✅ Create Agent Modal inside header */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="gradient" size="sm">Create Agent</Button>
          </DialogTrigger>

          <DialogContent className="max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <DialogHeader>
              <DialogTitle>Create New Agent</DialogTitle>
              <DialogDescription>
                Fill out the details to create your agent.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {/* ✅ Agent Type Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2">Agent Type</label>
                <Select onValueChange={(value) => console.log("Selected:", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select agent type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recruitment">Recruitment Agent – AI agents that screen, interview, and onboard candidates at scale</SelectItem>
                    <SelectItem value="lead">Lead Qualification Agent – Calls every lead to ask qualifying questions, answer FAQs, and warmly introduce the business</SelectItem>
                    <SelectItem value="onboarding">Onboarding Agent – Conducts personalized guidance calls to warmly onboard users</SelectItem>
                    <SelectItem value="cart">Cart Abandonment Agent – Calls customers with abandoned items in carts, recovering sales</SelectItem>
                    <SelectItem value="support">Customer Support Agent – Provides 24/7 inbound call answering for FAQs and triage</SelectItem>
                    <SelectItem value="reminder">Reminder Agent – Automates reminders, from EMIs to form deadlines</SelectItem>
                    <SelectItem value="announcement">Announcement Agent – Keeps users engaged with feature upgrades and launches</SelectItem>
                    <SelectItem value="frontdesk">Front Desk Agent – Answers calls to handle clinic, hotel, and office scheduling</SelectItem>
                    <SelectItem value="survey">Survey Agent – Automated NPS, feedback & product surveys</SelectItem>
                    <SelectItem value="cod">COD Confirmation Agent – Handles last mile logistics tasks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Agent Name</label>
                <Input
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="E.g. SupportBot"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Welcome Message</label>
                <Input
                  value={welcomeMsg}
                  onChange={(e) => setWelcomeMsg(e.target.value)}
                  placeholder="Hello! I’m here to help …"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Agent Prompt</label>
                <Textarea
                  value={agentPrompt}
                  onChange={(e) => setAgentPrompt(e.target.value)}
                  placeholder="You are an AI agent that …"
                  className="min-h-[100px] resize-y" // ✅ resizable vertically
                />
              </div>
            </div>

            <DialogFooter className="mt-6">
              <Button variant="gradient" onClick={handleCreate}>
                Create Agent
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* User dropdown remains unchanged */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden text-left lg:block">
                <p className="text-sm font-medium">Prateek Jadia</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>API Keys</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
