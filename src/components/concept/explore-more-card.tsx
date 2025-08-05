import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ExploreMoreCard() {
  return (
    <Card className="flex flex-col items-center justify-center text-center bg-card/50 border-dashed">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">Explore More Products</h3>
        <p className="text-muted-foreground text-sm mt-2 mb-4">Discover other ways to grow your crypto assets.</p>
        <Button>
            Discover <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
