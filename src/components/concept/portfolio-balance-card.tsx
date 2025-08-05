import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PortfolioBalanceCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Portfolio Balance</CardTitle>
        <Button variant="secondary">Manage</Button>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">Available to invest</p>
      </CardContent>
    </Card>
  );
}
