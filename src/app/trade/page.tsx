
import { DashboardHeader } from "@/components/dashboard/header";
import { ReceiveFunds } from "@/components/trade/receive-funds";

export default function TradePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 mx-auto w-full max-w-6xl">
        <DashboardHeader />
        <ReceiveFunds />
      </main>
    </div>
  );
}
