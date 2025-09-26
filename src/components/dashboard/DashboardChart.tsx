import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const callVolumeData = [
  { name: "Mon", calls: 45, success: 38 },
  { name: "Tue", calls: 52, success: 44 },
  { name: "Wed", calls: 38, success: 31 },
  { name: "Thu", calls: 67, success: 55 },
  { name: "Fri", calls: 73, success: 62 },
  { name: "Sat", calls: 29, success: 24 },
  { name: "Sun", calls: 41, success: 35 },
];

const hourlyData = [
  { hour: "6AM", calls: 12 },
  { hour: "8AM", calls: 25 },
  { hour: "10AM", calls: 45 },
  { hour: "12PM", calls: 67 },
  { hour: "2PM", calls: 52 },
  { hour: "4PM", calls: 38 },
  { hour: "6PM", calls: 29 },
  { hour: "8PM", calls: 15 },
];

export function CallVolumeChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Call Volume (7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={callVolumeData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="calls" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Total Calls"
            />
            <Line 
              type="monotone" 
              dataKey="success" 
              stroke="hsl(var(--success))" 
              strokeWidth={2}
              name="Successful Calls"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function HourlyActivityChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Today's Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="calls" 
              fill="url(#gradient)" 
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-light))" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}