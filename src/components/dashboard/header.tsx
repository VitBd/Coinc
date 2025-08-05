"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/icons/logo";

export function DashboardHeader() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/concept", label: "Dashboard V2" },
    { href: "/dashboard-modal", label: "Modal" },
    { href: "/cards", label: "Cards" },
  ];

  return (
    <header className="flex justify-between items-center py-4 mb-4 md:mb-8">
      <LogoIcon className="h-8 w-auto" />
      <nav className="flex items-center space-x-4 md:space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
          <Moon className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button>Invest</Button>
      </nav>
    </header>
  );
}
