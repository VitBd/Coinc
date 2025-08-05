

"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, subDays } from "date-fns";

const performanceMetrics = [
  { metric: "Target Yield (APY)", value: "12.00%" },
  { metric: "2024 APR", value: "14.45%" },
  { metric: "2024 APY", value: "15.38%" },
  { metric: "YTD APR (2025)", value: "7.94%" },
  { metric: "YTD APY (2025)", value: "8.16%" },
  { metric: "Trailing 12-Month APR", value: "10.19%" },
  { metric: "Trailing 12-Month APY", value: "10.64%" },
  { metric: "Cumulative Return (as of 2025)", value: "19.2%" },
  { metric: "Sharpe Ratio", value: "3.57" },
  { metric: "Max Monthly Drawdown", value: "-3.57%" },
  { metric: "Avg. Drawdown", value: "-0.97%" },
  { metric: "Avg. Recovery Time (Days)", value: "3.2" },
];

const allocationData = [
    { strategy: "CeFi Delta Neutral", lowRisk: "45%", midRisk: "45%" },
    { strategy: "DeFi Market Neutral", lowRisk: "35%", midRisk: "15%" },
    { strategy: "Low-Risk Directional (hedged/no leverage)", lowRisk: "20%", midRisk: "10%" },
    { strategy: "Mid-Risk Directional Strategies", lowRisk: "—", midRisk: "25%" },
    { strategy: "High-Risk Directional Strategies", lowRisk: "—", midRisk: "5%" },
];

const riskLevelColors = {
  low: "from-[#1D9970] to-[#41D1A5]",
  medium: "from-blue-500 to-blue-400",
  high: "from-yellow-500 to-yellow-400",
};


const useCaseFit =
  "Suitable for investors with a moderate risk appetite looking for enhanced returns through a diversified multi-strategy approach.";

const chartData = Array.from({ length: 30 }, (_, i) => ({ name: `Day ${i + 1}`, value: 1000 + Math.random() * 200 + i * 10 }));

const formatDateLabel = (tickItem: string, index: number) => {
    if (index % 7 === 0) { 
      const date = subDays(new Date(), chartData.length - 1 - index);
      return format(date, "MMM d");
    }
    return "";
};


const InfoRow = ({
  metric,
  value,
}: {
  metric: string;
  value: string;
}) => (
    <div className="flex justify-between py-4 text-sm border-t">
      <span className="text-muted-foreground">{metric}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
);

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const dateLabel = subDays(new Date(), 30 - parseInt(label.replace('Day ', '')));
      return (
        <div className="p-2 bg-background border rounded-md shadow-lg text-sm">
          <p className="font-bold">{format(dateLabel, "MMMM d, yyyy")}</p>
          <p className="text-foreground">
            <span className="font-medium">Portfolio Value: </span>
            <span className="font-semibold text-primary">{`$${(payload[0].value as number).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
          </p>
        </div>
      );
    }
  
    return null;
  };

export function DashboardModal() {
  return (
    <div className="flex justify-center items-start p-8">
      <div className="w-[80%] max-w-[64rem]">
        <Card className="w-full bg-card border-border/30 overflow-hidden rounded-lg relative">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-6 w-6 z-10">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </Button>
          <CardHeader className="p-6 pb-0">
            <CardTitle className="text-2xl font-bold">
              Medium Risk BTC Portfolio
            </CardTitle>
          </CardHeader>
          <div className="px-6">
              <div className={cn("h-1 w-full bg-gradient-to-r my-4", riskLevelColors['medium'])} />
          </div>
          <CardContent className="grid grid-cols-5 gap-x-8 px-6 pt-2 pb-6 items-start">
            <div className="col-span-2 flex flex-col h-full pt-2">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Performance Metrics (Net of Fees)
              </h3>
              <div className="flex-grow">
                {performanceMetrics.map((metric) => (
                  <InfoRow key={metric.metric} {...metric} />
                ))}
              </div>
            </div>
            <div className="col-span-3 flex flex-col h-full space-y-8 pt-2">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  BTC Portfolio Allocations
                </h3>
                <div className="rounded-md border mt-4">
                  <Table>
                      <TableHeader>
                          <TableRow className="bg-secondary/30">
                              <TableHead className="font-semibold text-muted-foreground whitespace-nowrap text-sm">Strategy Type</TableHead>
                              <TableHead className="text-right font-semibold text-muted-foreground whitespace-nowrap text-sm">Low-Risk BTC</TableHead>
                              <TableHead className="text-right font-semibold text-muted-foreground whitespace-nowrap text-sm">Mid-Risk BTC</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {allocationData.map((row) => (
                              <TableRow key={row.strategy}>
                                  <TableCell className="font-medium text-muted-foreground whitespace-nowrap text-sm">{row.strategy}</TableCell>
                                  <TableCell className="text-right font-semibold text-foreground text-sm">{row.lowRisk}</TableCell>
                                  <TableCell className="text-right font-semibold text-foreground text-sm">{row.midRisk}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                      <TableFooter>
                          <TableRow className="bg-secondary/30">
                              <TableCell className="font-bold text-muted-foreground text-sm">Total</TableCell>
                              <TableCell className="text-right font-bold text-foreground text-sm">100%</TableCell>
                              <TableCell className="text-right font-bold text-foreground text-sm">100%</TableCell>
                          </TableRow>
                      </TableFooter>
                  </Table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Use Case Fit
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{useCaseFit}</p>
                 <div className="h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <Tooltip
                                cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }}
                                content={<CustomTooltip />}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#chartColor)"
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
                            <YAxis domain={['dataMin', 'dataMax']} hide={true} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
