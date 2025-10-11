"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const chartData = [
  { month: "January", total: 1860000, successful: 800000 },
  { month: "February", total: 3050000, successful: 2000000 },
  { month: "March", total: 2370000, successful: 1200000 },
  { month: "April", total: 8000000, successful: 5900000 },
  { month: "May", total: 2090000, successful: 1300000 },
  { month: "June", total: 2140000, successful: 1400000 },
];
const chartConfig = {
  total: {
    label: "Total",
    // icon: Monitor,
    // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
    color: "#2563eb",
    // OR a theme object with 'light' and 'dark' keys
    // theme: {
    //   light: "#2563eb",
    //   dark: "#dc2626",
    // },
  },
  successful: {
    label: "Successful",
    color: "#60a5fa",
    // theme: {
    //   light: "#2563eb",
    //   dark: "#dc2626",
    // },
  },
} satisfies ChartConfig;

export function AppBarChart() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-medium">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3).toUpperCase()}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
          />
          <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
