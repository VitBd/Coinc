import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface YieldProductCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    apy: string;
}

export function YieldProductCard({ icon, title, description, apy }: YieldProductCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        {icon}
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <p className="text-primary font-bold pt-2">{apy}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button variant="ghost" className="p-0 h-auto text-foreground">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
