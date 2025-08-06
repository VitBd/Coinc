import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronRight, Wallet, Link as LinkIcon, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

const balanceItems = [
  {
    icon: <Wallet className="h-6 w-6 text-muted-foreground" />,
    title: "Fiat Balance",
    amount: "$1,234.56",
  },
  {
    icon: <LinkIcon className="h-6 w-6 text-muted-foreground" />,
    title: "Crypto Balances",
    amount: "1.25 BTC",
  },
  {
    icon: <Archive className="h-6 w-6 text-muted-foreground" />,
    title: "Legacy Products",
    amount: "3 Active",
  },
];

export function OtherBalances() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>Other Balances</CardTitle>
        <CardDescription>Your other available balances.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-around space-y-4">
          {balanceItems.map((item, index) => (
            <div key={item.title} className="group flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors hover:bg-secondary">
              <div className="flex items-center gap-4">
                {item.icon}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.amount}</p>
                </div>
              </div>
              <div className="rounded-md p-2 transition-colors group-hover:bg-background">
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
