
"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BtcIcon, EthIcon, UsdcIcon } from "@/components/icons/crypto-icons";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { format, subDays } from "date-fns";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";


const riskLevelColors = {
  low: "from-[#1D9970] to-[#41D1A5]",
  medium: "from-blue-500 to-blue-400",
  high: "from-yellow-500 to-yellow-400",
};

const iconMap: { [key: string]: React.ElementType } = {
  btc: BtcIcon,
  eth: EthIcon,
  usdc: UsdcIcon,
};

type Asset = {
  id: string;
  name: string;
  value: string;
  usdValue: string;
  dailyProfitLossPercent: string;
  dailyProfitLoss: string;
  sevenDayApy: string;
  thirtyDayApy: string;
  ninetyDayApy: string;
  oneHundredEightyDayApy: string;
  oneYearApy: string;
  totalProfitLoss: string;
};

export interface PortfolioDetail {
    performanceMetrics: { metric: string; value: string; }[];
    allocations: { name: string; value: number; fill: string; }[];
    useCaseFit: string;
}

export interface PortfolioCardProps {
  title: string;
  riskLevel: "low" | "medium" | "high";
  assets: Asset[];
  details?: PortfolioDetail;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isOwned?: boolean;
  onShowToast: () => void;
}

const allocationData = [
    { strategy: "CeFi Delta Neutral", lowRisk: "45%", midRisk: "45%" },
    { strategy: "DeFi Market Neutral", lowRisk: "35%", midRisk: "15%" },
    { strategy: "Low-Risk Directional (hedged/no leverage)", lowRisk: "20%", midRisk: "10%" },
    { strategy: "Mid-Risk Directional Strategies", lowRisk: "—", midRisk: "25%" },
    { strategy: "High-Risk Directional Strategies", lowRisk: "—", midRisk: "5%" },
];

const chartData = Array.from({ length: 30 }, (_, i) => ({ name: `Day ${i + 1}`, value: 1000 + Math.random() * 200 + i * 10 }));

const formatDateLabel = (tickItem: string, index: number) => {
    if (index % 7 === 0) { 
      const date = subDays(new Date(), chartData.length - 1 - index);
      return format(date, "MMM d");
    }
    return "";
};

const InfoRow: React.FC<{ label: string; children?: React.ReactNode; value?: string; valueClassName?: string }> = ({ label, value, valueClassName, children }) => (
    <>
        <div className="flex justify-between py-4 text-sm border-t">
            <span className="text-muted-foreground">{label}</span>
            {children || <span className={cn("font-semibold text-foreground", valueClassName)}>{value}</span>}
        </div>
    </>
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


export function PortfolioCardV2({
  title,
  riskLevel,
  assets,
  details,
  isExpanded,
  onToggleExpand,
  isOwned = true,
  onShowToast,
}: PortfolioCardProps) {
  const asset = assets[0];
  
  const [risk, ...descriptionParts] = title.split(': ');
  const description = descriptionParts.join(': ').replace(/, a .* investors\.$/, '.');

  const AssetIcon = asset ? iconMap[asset.id.toLowerCase()] : null;

  if (!asset || !details) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No assets in this portfolio.</p>
        </CardContent>
      </Card>
    );
  }
  
  const dailyProfitLossValue = asset.dailyProfitLoss.split(' ')[0];

  return (
    <Dialog>
    <Card className="flex flex-col overflow-hidden !rounded-lg border-border/30 bg-card">
        <CardHeader className="p-0">
            <div className="bg-[#35393C] px-5 py-4">
                 <div className="flex items-center gap-4">
                    {AssetIcon && <AssetIcon className="h-16 w-16" />}
                    <div className="flex-grow">
                        <CardTitle className="text-lg font-bold text-foreground">
                            <DialogTrigger asChild>
                                <a href="#" className="flex items-center text-[#00CCFF] hover:underline">
                                    {risk} <ArrowUpRight className="ml-1 h-5 w-5" />
                                </a>
                            </DialogTrigger>
                        </CardTitle>
                        <Separator className="my-1 bg-border/20" />
                        <p className="text-sm font-normal text-muted-foreground h-10 mt-1">{description}</p>
                    </div>
                </div>
            </div>
        </CardHeader>
        <div className={cn("h-2.5 w-full bg-gradient-to-r", riskLevelColors[riskLevel])} />
        
        <CardContent className="bg-card p-7">
            <div className="mb-8">
                <div>
                    <p className="text-sm font-normal text-gray-400">Total value</p>
                    <p className={cn("text-3xl font-semibold", isOwned ? "text-primary" : "text-foreground")}>
                        {asset.value} <span className="text-muted-foreground">{asset.name}</span>
                    </p>
                    <p className="text-2xl font-semibold text-foreground">${asset.usdValue}</p>
                </div>
            </div>
            
            <div className="space-y-0 text-sm">
                <InfoRow label="Daily Profit/Loss">
                  <span className="font-semibold text-foreground">
                    <span className={cn(isOwned ? "text-primary" : "text-foreground")}>{asset.dailyProfitLossPercent}%</span> / {dailyProfitLossValue} {asset.name}
                  </span>
                </InfoRow>
                <InfoRow label="Total Profit/Loss" value={`${asset.totalProfitLoss}`} valueClassName={cn(isOwned ? "text-primary" : "text-foreground")} />
            </div>

            <Collapsible open={isExpanded} onOpenChange={onToggleExpand}>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-foreground py-2">Historic Performance</h4>
                    <CollapsibleTrigger asChild>
                        <button className="text-sm font-normal text-[#00CCFF] hover:underline">
                          {isExpanded ? 'collapse' : 'expand'}
                        </button>
                    </CollapsibleTrigger>
                </div>
                <div className="h-px bg-border" />
                <div className="space-y-0 text-sm">
                  <InfoRow label="7-Day APY" value={`${asset.sevenDayApy}%`} valueClassName="text-foreground" />
                  <InfoRow label="30-Day APY" value={`${asset.thirtyDayApy}%`} valueClassName="text-foreground" />
                  <InfoRow label="90-Day APY" value={`${asset.ninetyDayApy}%`} valueClassName="text-foreground" />
                  <CollapsibleContent className="space-y-0">
                    <InfoRow label="180-Day APY" value={`${asset.oneHundredEightyDayApy}%`} valueClassName="text-foreground" />
                    <InfoRow label="1-Year APY" value={`${asset.oneYearApy}%`} valueClassName="text-foreground" />
                  </CollapsibleContent>
                </div>
              </div>
            </Collapsible>
        </CardContent>

        <CardFooter className="mt-auto flex space-x-4 bg-card px-7 pb-7">
            <Button variant="default" className="h-12 flex-1 rounded-md text-sm font-medium">
                {isOwned ? "+ Add Funds" : "Subscribe"}
            </Button>
            {isOwned ? (
                 <Button className="h-12 flex-[2] rounded-md bg-[#35393C] text-sm font-medium text-foreground hover:bg-secondary/80">
                    Transfer Out to Trade account
                 </Button>
            ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex-[2]" tabIndex={0}>
                        <Button 
                            className="h-12 w-full rounded-md bg-[#35393C] text-sm font-medium text-foreground hover:bg-secondary/80"
                            variant="secondary" 
                            disabled={!isOwned}
                            onClick={!isOwned ? onShowToast : undefined}
                        >
                            Transfer Funds
                        </Button>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>No active account</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            )}
        </CardFooter>
    </Card>
      {details && (
        <DialogContent className="max-w-[64rem] bg-card border-border/30 p-0">
             <Card className="w-full bg-card border-0 overflow-hidden rounded-lg relative">
                <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-6 w-6 z-10">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                </DialogTrigger>
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
                        {details.performanceMetrics.map((metric) => (
                        <InfoRow key={metric.metric} label={metric.metric} value={metric.value} />
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
                        <p className="text-sm text-muted-foreground mb-4">{details.useCaseFit}</p>
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
                                    <RechartsTooltip
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
        </DialogContent>
      )}
    </Dialog>
  );
}
