

import { DashboardHeader } from '@/components/dashboard/header';
import { SummaryCard, type SummaryCardProps } from '@/components/dashboard/summary-card';
import { PortfolioCard, type PortfolioCardProps } from '@/components/dashboard/portfolio-card';
import { OtherBalances } from '@/components/dashboard/other-balances';
import { RecentTransactions } from '@/components/dashboard/recent-transactions';
import type { ChartData } from '@/components/dashboard/summary-card';

// Helper function to generate smoother chart data
const generateSmoothChartData = (base: number, points: number, volatility: number, trend: number) => {
  let value = base;
  const data = Array.from({ length: points }, (_, i) => {
    const fluctuation = (Math.random() - 0.5) * volatility * (Math.sin(i / 5) * 0.5 + 0.5);
    value += trend + fluctuation;
    return { name: `Day ${i + 1}`, value: value };
  });
  return data;
};


const summaryData: SummaryCardProps = {
  options: ["Total Portfolio Balance", "Trade & Cash Accounts", "Daily Earn Account", "Growth Account"],
  portfolios: {
    "Total Portfolio Balance": {
      amount: "$45,231.89",
      change: 2.5,
      changeType: "positive",
      changePeriod: "vs last month",
      chartData: generateSmoothChartData(44000, 30, 200, 50),
      chartColor: "hsl(var(--chart-1))",
    },
    "Trade & Cash Accounts": {
      amount: "$22,615.94",
      change: -1.2,
      changeType: "negative",
      changePeriod: "vs last month",
      chartData: generateSmoothChartData(22800, 30, 150, -10),
      chartColor: "hsl(var(--chart-2))",
    },
    "Daily Earn Account": {
      amount: "$11,307.97",
      change: 0.8,
      changeType: "positive",
      changePeriod: "vs last month",
      chartData: generateSmoothChartData(11200, 30, 50, 5),
      chartColor: "hsl(var(--chart-3))",
    },
    "Growth Account": {
      amount: "$11,307.97",
      change: 5.1,
      changeType: "positive",
      changePeriod: "vs last month",
      chartData: generateSmoothChartData(10500, 30, 300, 30),
      chartColor: "hsl(var(--chart-4))",
    }
  }
};

const totalEarningsData = {
  title: "Total Earnings",
  amount: "$1,231.89",
  change: 12.5,
  changeType: "positive" as const,
  changePeriod: "vs last month",
  chartData: generateSmoothChartData(1100, 30, 50, 5),
  chartColor: "hsl(var(--primary))",
};

const portfolioCardsData: PortfolioCardProps[] = [
  {
    title: 'Low Risk: A Stable Yield strategy for our most conservative investors.',
    riskLevel: 'low',
    assets: [
      {
        id: 'btc',
        name: 'BTC',
        value: '50.017',
        usdValue: '15,201.50',
        dailyProfitLossPercent: '0.0145',
        dailyProfitLoss: '17.97 BTC',
        sevenDayApy: '5.12',
        thirtyDayApy: '5.15',
        ninetyDayApy: '5.21',
        oneHundredEightyDayApy: '5.25',
        oneYearApy: '5.30',
        totalProfitLoss: '8.8398 BTC',
      },
    ],
    details: {
      performanceMetrics: [
        { metric: "Target Yield (APY)", value: "8.00%" },
        { metric: "2024 APR", value: "8.37%" },
        { metric: "2024 APY", value: "8.67%" },
        { metric: "YTD APR (2025)", value: "7.25%" },
        { metric: "YTD APY (2025)", value: "7.49%" },
        { metric: "Trailing 12-Month APR", value: "6.78%" },
        { metric: "Trailing 12-Month APY", value: "6.98%" },
        { metric: "Cumulative Return (as of 2025)", value: "11.4%" },
        { metric: "Sharpe Ratio", value: "4.23" },
        { metric: "Max Monthly Drawdown", value: "-0.39%" },
        { metric: "Avg. Drawdown", value: "-0.94%" },
        { metric: "Avg. Recovery Time (Days)", value: "2.5" },
      ],
      allocations: [
        { name: "CeFi Delta Neutral", value: 45, fill: "var(--color-chart-1)" },
        { name: "DeFi Market Neutral", value: 35, fill: "var(--color-chart-2)" },
        { name: "Low-Risk Directional", value: 20, fill: "var(--color-chart-3)" },
      ],
      useCaseFit: "Ideal for conservative investors seeking stable, uncorrelated returns with minimal volatility. A great diversifier for a traditional portfolio.",
    }
  },
  {
    title: 'Medium Risk: An Enhanced Yield portfolio for long-term growth.',
    riskLevel: 'medium',
    assets: [
      {
        id: 'eth',
        name: 'ETH',
        value: '75.000',
        usdValue: '25,000.00',
        dailyProfitLossPercent: '0.0250',
        dailyProfitLoss: '25.00 ETH',
        sevenDayApy: '7.20',
        thirtyDayApy: '7.15',
        ninetyDayApy: '7.30',
        oneHundredEightyDayApy: '7.45',
        oneYearApy: '7.60',
        totalProfitLoss: '12.1234 ETH',
      },
    ],
    details: {
      performanceMetrics: [
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
      ],
      allocations: [
        { name: "CeFi Delta Neutral", value: 45, fill: "var(--color-chart-1)" },
        { name: "DeFi Market Neutral", value: 15, fill: "var(--color-chart-2)" },
        { name: "Low-Risk Directional", value: 10, fill: "var(--color-chart-3)" },
        { name: "Mid-Risk Directional", value: 25, fill: "var(--color-chart-4)" },
        { name: "High-Risk Directional", value: 5, fill: "var(--color-chart-5)" },
      ],
      useCaseFit: "Suitable for investors with a moderate risk appetite looking for enhanced returns through a diversified multi-strategy approach.",
    }
  },
  {
    title: 'High Risk: An Alpha Strategy for experienced, ambitious investors.',
    riskLevel: 'high',
    assets: [
      {
        id: 'usdc',
        name: 'USDC',
        value: '10000.00',
        usdValue: '10,000.00',
        dailyProfitLossPercent: '0.0500',
        dailyProfitLoss: '50.00 USDC',
        sevenDayApy: '9.95',
        thirtyDayApy: '9.85',
        ninetyDayApy: '9.70',
        oneHundredEightyDayApy: '9.55',
        oneYearApy: '9.40',
        totalProfitLoss: '25.4321 USDC',
      },
    ],
     details: {
      performanceMetrics: [
        { metric: "Target Yield (APY)", value: "18.00%" },
        { metric: "2024 APR", value: "20.15%" },
        { metric: "2024 APY", value: "22.50%" },
        { metric: "YTD APR (2025)", value: "9.50%" },
        { metric: "YTD APY (2025)", value: "10.10%" },
        { metric: "Trailing 12-Month APR", value: "15.75%" },
        { metric: "Trailing 12-Month APY", value: "17.25%" },
        { metric: "Cumulative Return (as of 2025)", value: "35.5%" },
        { metric: "Sharpe Ratio", value: "2.89" },
        { metric: "Max Monthly Drawdown", value: "-8.15%" },
        { metric: "Avg. Drawdown", value: "-2.50%" },
        { metric: "Avg. Recovery Time (Days)", value: "5.1" },
      ],
      allocations: [
        { name: "Mid-Risk Directional", value: 50, fill: "var(--color-chart-4)" },
        { name: "High-Risk Directional", value: 50, fill: "var(--color-chart-5)" },
      ],
      useCaseFit: "Designed for aggressive investors comfortable with higher volatility, aiming for maximum returns by capitalizing on market inefficiencies and directional bets.",
    }
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 mx-auto w-full max-w-[1420px]">
        <DashboardHeader />
        
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
          <SummaryCard {...summaryData} />
          <SummaryCard {...totalEarningsData} />
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Your Portfolios</h2>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
            {portfolioCardsData.map((portfolio) => (
              <PortfolioCard key={portfolio.title} {...portfolio} />
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-3 lg:items-stretch">
          <div className="lg:col-span-1">
            <OtherBalances />
          </div>
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
}
