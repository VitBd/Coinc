"use client";

import * as React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format, subDays } from "date-fns";

export interface ChartData {
  name: string;
  value: number;
}

type PortfolioData = {
  amount: string;
  change: number;
  changeType: "positive" | "negative";
  changePeriod: string;
  chartData: ChartData[];
  chartColor: string;
};

export interface SummaryCardProps {
  title?: string;
  options?: string[];
  portfolios?: Record<string, PortfolioData>;
  amount?: string;
  change?: number;
  changeType?: "positive" | "negative";
  changePeriod?: string;
  chartData?: ChartData[];
  chartColor?: string;
}

export function SummaryCard({
  title,
  options,
  portfolios,
  ...props
}: SummaryCardProps) {
  const [selectedOption, setSelectedOption] = React.useState(
    options?.[0] || ""
  );
  const [timeframe, setTimeframe] = React.useState("1m");

  const data = portfolios ? portfolios[selectedOption] : props;

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  
  if (!data.amount) {
    return null;
  }

  const chartId = React.useId();

  const formatDateLabel = (tickItem: string, index: number) => {
    // Assuming the data is for the last 30 days
    if (data.chartData && index % 7 === 0) { // Show label every 7 days
      const date = subDays(new Date(), data.chartData.length - 1 - index);
      return format(date, "MMM d");
    }
    return "";
  };


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          {options && portfolios ? (
            <Select onValueChange={handleOptionChange} defaultValue={selectedOption}>
              <SelectTrigger className="w-auto border-0 !bg-transparent p-0 text-base font-semibold focus:ring-0 focus:ring-offset-0 h-auto gap-2">
                <SelectValue placeholder="Select portfolio" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
          )}
          <div className="flex items-center gap-1">
            {["1m", "3m", "1Y"].map((t) => (
              <Button
                key={t}
                variant="ghost"
                size="sm"
                className={cn("h-7 px-2 text-xs", timeframe === t && "bg-secondary text-secondary-foreground")}
                onClick={() => setTimeframe(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-4xl font-bold">{data.amount}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            {data.changeType === "positive" ? (
              <ArrowUp className="h-4 w-4 mr-1 text-primary" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1 text-destructive" />
            )}
            <span
              className={cn(
                data.changeType === "positive" ? "text-primary" : "text-destructive"
              )}
            >
              {data.change}%
            </span>
            <span className="ml-1">{data.changePeriod}</span>
          </div>
        </div>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.chartData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id={`color-${chartId}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={data.chartColor} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={data.chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <Tooltip
                cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={data.chartColor}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#color-${chartId})`}
                dot={false}
              />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatDateLabel}
               />
              <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} hide={true} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
