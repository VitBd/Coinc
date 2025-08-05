import {
  Card,
  CardContent,
  CardDescription,
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
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { BtcIcon, EthIcon, UsdcIcon } from "@/components/icons/crypto-icons";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";


const transactions = [
  {
    icon: EthIcon,
    assetName: "Ethereum",
    assetSymbol: "ETH",
    daily: {
        amount: "+$20.50",
        percent: "+1.2%",
        isPositive: true,
    },
    apy: "5.8%",
    chain: "Ethereum",
    balance: {
        crypto: "2.5 ETH",
        usd: "$4,321.00",
    },
  },
  {
    icon: BtcIcon,
    assetName: "Bitcoin",
    assetSymbol: "BTC",
    daily: {
        amount: "-$50.75",
        percent: "-0.8%",
        isPositive: false,
    },
    apy: "3.2%",
    chain: "Bitcoin",
    balance: {
        crypto: "0.5 BTC",
        usd: "$32,123.50",
    },
  },
    {
    icon: UsdcIcon,
    assetName: "USD Coin",
    assetSymbol: "USDC",
    daily: {
        amount: "+$0.01",
        percent: "+0.01%",
        isPositive: true,
    },
    apy: "2.1%",
    chain: "Polygon",
    balance: {
        crypto: "1,250 USDC",
        usd: "$1,250.00",
    },
    },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your most recent deposits and yields.</CardDescription>
        </div>
        <Link href="#" className="text-sm font-medium text-primary hover:underline">
            View All
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Asset</TableHead>
              <TableHead>Daily</TableHead>
              <TableHead>APY</TableHead>
              <TableHead>Chain</TableHead>
              <TableHead className="text-right">Wallet Balance</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                        <transaction.icon className="h-8 w-8" />
                        <div>
                            <div>{transaction.assetName}</div>
                            <div className="text-muted-foreground">{transaction.assetSymbol}</div>
                        </div>
                    </div>
                </TableCell>
                <TableCell>
                    <div className={cn("font-semibold", transaction.daily.isPositive ? "text-primary" : "text-destructive")}>
                        {transaction.daily.amount}
                    </div>
                    <div className="text-muted-foreground text-xs">{transaction.daily.percent}</div>
                </TableCell>
                <TableCell className="font-semibold">{transaction.apy}</TableCell>
                <TableCell>
                    <Badge variant="secondary" className="bg-secondary/50 font-medium">
                        {transaction.chain}
                    </Badge>
                </TableCell>
                <TableCell className="text-right">
                    <div className="font-semibold">{transaction.balance.crypto}</div>
                    <div className="text-muted-foreground text-xs">{transaction.balance.usd}</div>
                </TableCell>
                <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="group rounded-md p-2 transition-colors hover:bg-[#add8e6]">
                            <MoreHorizontal className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
                        <DropdownMenuItem>Trade</DropdownMenuItem>
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
