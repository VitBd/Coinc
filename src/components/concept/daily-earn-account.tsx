
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BtcIcon, EthIcon, UsdcIcon, TetherIcon, DaiIcon } from "@/components/icons/crypto-icons";
import { ChevronUp, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const assetData = [
  {
    id: 'btc',
    icon: BtcIcon,
    name: 'Bitcoin',
    symbol: 'BTC',
    apy: '8.0% APY',
    balance: '$0.00',
    balanceCrypto: '0 BTC',
    thirtyDayEarn: '$0',
    thirtyDayEarnCrypto: '0 BTC',
    totalEarn: '$0',
    totalEarnCrypto: '0 BTC',
    apyColor: 'text-primary'
  },
  {
    id: 'eth',
    icon: EthIcon,
    name: 'Ethereum',
    symbol: 'ETH',
    apy: '0.9% APY',
    balance: '$0.00',
    balanceCrypto: '0 ETH',
    thirtyDayEarn: '$0',
    thirtyDayEarnCrypto: '0 ETH',
    totalEarn: '$0',
    totalEarnCrypto: '0 ETH',
    apyColor: 'text-primary'
  },
  {
    id: 'usdc',
    icon: UsdcIcon,
    name: 'USD Coin',
    symbol: 'USDC',
    apy: '7.8% APY',
    balance: '$0.00',
    balanceCrypto: '0 USDC',
    thirtyDayEarn: '$0',
    thirtyDayEarnCrypto: '0 USDC',
    totalEarn: '$0',
    totalEarnCrypto: '0 USDC',
    apyColor: 'text-primary'
  },
  {
    id: 'usdt',
    icon: TetherIcon,
    name: 'Tether',
    symbol: 'USDT',
    apy: '7.8% APY',
    balance: '$0.00',
    balanceCrypto: '0 USDT',
    thirtyDayEarn: '$0',
    thirtyDayEarnCrypto: '0 USDT',
    totalEarn: '$0',
    totalEarnCrypto: '0 USDT',
    apyColor: 'text-primary'
  },
  {
    id: 'dai',
    icon: DaiIcon,
    name: 'Dai',
    symbol: 'DAI',
    apy: '0.0% APY',
    balance: '$0.00',
    balanceCrypto: '0 DAI',
    thirtyDayEarn: '$0',
    thirtyDayEarnCrypto: '0 DAI',
    totalEarn: '$0',
    totalEarnCrypto: '0 DAI',
    apyColor: 'text-muted-foreground'
  }
];

const summaryStats = [
    {
      icon: UsdcIcon,
      label: 'Stablecoins',
      apy: '7.8% APY'
    },
    {
      icon: EthIcon,
      label: 'Ethereum ETH',
      apy: '0.9% APY'
    },
    {
      icon: BtcIcon,
      label: 'Bitcoin BTC',
      apy: '8.0% APY'
    }
];

export function DailyEarnAccount() {
  const [showDetails, setShowDetails] = React.useState(true);

  return (
    <Card className="bg-card">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Daily Earn Account</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowDetails(!showDetails)} className="text-muted-foreground hover:text-foreground">
              Hide Details <ChevronUp className={cn("ml-2 h-4 w-4 transition-transform", !showDetails && "rotate-180")} />
            </Button>
            <Button>Earn</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className={cn("p-6 pt-4 transition-all duration-300", showDetails ? "opacity-100" : "opacity-0 h-0 p-0 overflow-hidden")}>
        <div className="py-4">
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex" style={{ gap: '40px' }}>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Total Balance</p>
              <p className="text-2xl font-semibold">$1,234.56</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">30-day Earn</p>
              <p className="text-2xl font-semibold">$56.78</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Total Earn</p>
              <p className="text-2xl font-semibold">$234.56</p>
            </div>
          </div>
          <div className="flex items-center ml-10" style={{ gap: '40px' }}>
            {summaryStats.map(stat => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="h-10 w-10" />
                <div>
                  <p className="text-sm font-semibold">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary -mt-1">{stat.apy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-b-0 bg-muted/50 hover:bg-muted/50">
              <TableHead>Asset</TableHead>
              <TableHead>APY</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>30-day Earn</TableHead>
              <TableHead>Total Earn</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assetData.map((asset) => (
              <TableRow key={asset.id} className="border-t">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <asset.icon className="h-8 w-8" />
                    <div>
                      <div className="font-semibold">{asset.name}</div>
                      <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className={cn("font-semibold", asset.apyColor)}>{asset.apy}</TableCell>
                <TableCell>
                  <div className="font-semibold">{asset.balance}</div>
                  <div className="text-xs text-muted-foreground">{asset.balanceCrypto}</div>
                </TableCell>
                <TableCell>
                   <div className="font-semibold">{asset.thirtyDayEarn}</div>
                   <div className="text-xs text-muted-foreground">{asset.thirtyDayEarnCrypto}</div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold">{asset.totalEarn}</div>
                  <div className="text-xs text-muted-foreground">{asset.totalEarnCrypto}</div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Details</DropdownMenuItem>
                      <DropdownMenuItem>Deposit</DropdownMenuItem>
                      <DropdownMenuItem>Withdraw</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
