
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
import { MoreHorizontal, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const UsFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" viewBox="0 0 512 512" {...props}>
        <g>
            <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
            <g fill="#d80027">
                <path d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87zM244.87 122.435h229.556a257.35 257.35 0 0 0-59.07-66.783H244.87zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0 0 28.755-66.783H8.819a254.474 254.474 0 0 0 28.755 66.783z"></path>
            </g>
            <path fill="#0052b4" d="M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 0 0-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 0 0-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 0 0-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 0 0 0 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822z"></path>
        </g>
    </svg>
);

const EuFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
        <g>
            <circle cx="256" cy="256" r="256" fill="#0052b4"></circle>
            <g fill="#ffda44">
                <path d="m256.001 100.174 8.289 25.509h26.82l-21.699 15.765 8.289 25.509-21.699-15.766-21.7 15.766 8.289-25.509-21.699-15.765h26.821zM145.814 145.814l23.9 12.176 18.965-18.964-4.197 26.49 23.899 12.177-26.491 4.196-4.196 26.492-12.177-23.899-26.49 4.197 18.965-18.965zM100.175 256l25.509-8.289V220.89l15.764 21.7 25.51-8.289L151.191 256l15.767 21.699-25.51-8.288-15.764 21.699v-26.821zM145.814 366.186l12.177-23.9-18.964-18.965 26.491 4.198 12.175-23.899 4.197 26.491 26.49 4.196-23.896 12.177 4.195 26.49-18.965-18.965zM256.001 411.826l-8.29-25.509h-26.82l21.7-15.765-8.29-25.507 21.7 15.764 21.699-15.764-8.289 25.507 21.699 15.765h-26.821zM366.187 366.186l-23.899-12.176-18.966 18.965 4.197-26.492-23.897-12.176 26.49-4.196 4.196-26.491 12.176 23.899 26.49-4.198-18.965 18.967zM411.826 256l-25.509 8.289v26.821l-15.765-21.7-25.507 8.289L360.81 256l-15.765-21.699 25.508 8.289 15.764-21.7v26.822zM366.187 145.814l-12.177 23.9 18.965 18.965-26.492-4.198-12.175 23.899-4.196-26.491-26.49-4.197 23.897-12.176-4.197-26.489 18.967 18.964z" />
            </g>
        </g>
    </svg>
);

const CaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
    <g>
      <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
      <g fill="#d80027">
        <path d="M512 256c0-101.494-59.065-189.19-144.696-230.598v461.195C452.935 445.19 512 357.494 512 256zM0 256c0 101.494 59.065 189.19 144.696 230.598V25.402C59.065 66.81 0 154.506 0 256zM300.522 289.391l44.521-22.261-22.26-11.13v-22.261L278.261 256l22.261-44.522h-22.261L256 178.087l-22.261 33.391h-22.261L233.739 256l-44.522-22.261V256l-22.26 11.13 44.521 22.261-11.13 22.261h44.522v33.391h22.26v-33.391h44.522z"></path>
      </g>
    </g>
  </svg>
);


const currencyData = [
  {
    id: 'usd',
    icon: UsFlagIcon,
    name: 'US Dollars',
    symbol: 'USD',
    balance: '$0.00',
    pendingDeposit: '$0.00',
  },
  {
    id: 'eur',
    icon: EuFlagIcon,
    name: 'Euro',
    symbol: 'EUR',
    balance: '€0.00',
    pendingDeposit: '€0.00',
  },
  {
    id: 'cad',
    icon: CaFlagIcon,
    name: 'CAD',
    symbol: 'CAD',
    balance: 'CA$0.00',
    pendingDeposit: 'CA$0.00',
  }
];

export function CashAccount() {
  return (
    <Card className="bg-card">
      <CardHeader className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-bold">Cash Account</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">Receive Funds</Button>
            <Button>Quick Invest</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b-0 bg-muted hover:bg-muted">
              <TableHead>Currency</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Pending Deposit</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currencyData.map((currency) => (
              <TableRow key={currency.id} className="border-t">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <currency.icon className="h-8 w-8 rounded-full" />
                    <div>
                      <div className="font-semibold">{currency.name}</div>
                      <div className="text-xs text-muted-foreground">{currency.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold">{currency.balance}</TableCell>
                <TableCell className="font-semibold">{currency.pendingDeposit}</TableCell>
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
