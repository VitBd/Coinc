
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, Printer, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BtcIcon, EthIcon, UsdcIcon, TetherIcon, DaiIcon } from "@/components/icons/crypto-icons";
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

interface Currency {
    id: string;
    name: string;
    balance: string;
    icon: React.ElementType;
}

const currencyData: Currency[] = [
    { id: 'usd', name: 'US Dollars', balance: '$0.00', icon: UsFlagIcon },
    { id: 'eur', name: 'Euro', balance: '€0.00', icon: EuFlagIcon },
    { id: 'cad', name: 'CAD', balance: 'CA$0.00', icon: CaFlagIcon },
    { id: 'btc', name: 'Bitcoin', balance: '0.0001 BTC', icon: BtcIcon },
    { id: 'eth', name: 'Ethereum', balance: '0.002 ETH', icon: EthIcon },
    { id: 'usdc', name: 'USD Coin', balance: '200 USDC', icon: UsdcIcon },
];

interface DetailRowProps {
  label: string;
  value: string | string[];
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => {
  const { toast } = useToast();
  const valueString = Array.isArray(value) ? value.join(" ") : value;

  const handleCopy = () => {
    navigator.clipboard.writeText(valueString);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied.`,
    });
  };

  return (
    <div className="flex items-start justify-between py-3">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {Array.isArray(value) ? (
          value.map((line, index) => (
            <p key={index} className="text-sm text-muted-foreground">{line}</p>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">{value}</p>
        )}
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};


export function ReceiveFunds() {
  const [selectedCurrency, setSelectedCurrency] = React.useState<Currency>(currencyData[0]);

  const bankDetails = [
    { label: "Bank Name", value: "Lead Bank" },
    { label: "Bank Address", value: ["1801 Main St., Kansas City, MO 64108,", "United States of America"] },
    { label: "Account Name", value: "BCB PAYMENTS LTD" },
    { label: "Address of Beneficiary", value: ["5 Merchant Square London, W1 2AS", "United Kingdom"] },
    { label: "Account/IBAN Number", value: "1234567890" },
    { label: "Routing Number", value: "123456789" },
    { label: "Memo", value: "1223272-7DF49AA2" },
  ];

  const allDetailsString = bankDetails.map(d => `${d.label}: ${Array.isArray(d.value) ? d.value.join(' ') : d.value}`).join('\n');
  const { toast } = useToast();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(allDetailsString);
    toast({
      title: "Copied to clipboard",
      description: "All bank details have been copied.",
    });
  };

  const SelectedIcon = selectedCurrency.icon;

  return (
    <div>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Receive Funds</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <SelectedIcon className="h-10 w-10 rounded-full" />
                                        <div>
                                            <p className="font-semibold">{selectedCurrency.name}</p>
                                            <p className="text-sm text-muted-foreground">Balance {selectedCurrency.balance}</p>
                                        </div>
                                    </div>
                                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
                        {currencyData.map((currency) => {
                             const Icon = currency.icon;
                             return (
                                <DropdownMenuItem key={currency.id} onSelect={() => setSelectedCurrency(currency)}>
                                    <div className="flex items-center gap-3 w-full">
                                        <Icon className="h-10 w-10 rounded-full" />
                                        <div>
                                            <p className="font-semibold">{currency.name}</p>
                                            <p className="text-sm text-muted-foreground">Balance {currency.balance}</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                             )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
                
                <div>
                    <h2 className="text-lg font-semibold mb-2">Wire Transfer</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Use SWIFT/Wire Transfer at your bank to send funds to Coinchange bank account shown below.
                    </p>
                    <Card className="bg-muted/50">
                        <CardContent className="p-4">
                            {bankDetails.slice(0, 6).map((detail, index) => (
                                <React.Fragment key={detail.label}>
                                    <DetailRow label={detail.label} value={detail.value} />
                                    {index < bankDetails.length - 2 && <Separator />}
                                </React.Fragment>
                            ))}
                             <Separator />
                             <div className="flex items-start justify-between py-3">
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Memo</p>
                                    <p className="text-sm text-muted-foreground">{bankDetails[6].value}</p>
                                    <p className="text-xs text-muted-foreground mt-2 max-w-md">
                                        Please include Your Memo code in the additional instructions of your wire. Failure to provide Your Memo code will significantly delay processing of the deposited funds, and may require you to contact Coinchange.
                                    </p>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
                                    navigator.clipboard.writeText(bankDetails[6].value);
                                    toast({ title: "Copied to clipboard", description: "Memo has been copied." });
                                }}>
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="w-full lg:w-auto">
                        <Printer className="mr-2 h-4 w-4" /> Print
                    </Button>
                    <Button className="w-full lg:w-auto" onClick={handleCopyToClipboard}>
                        <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold">Wire Transfer Deposit Instructions</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>To minimize delays please follow instructions below. Your funds may be rejected and returned to the originator bank account if requirements are not met.</p>
                    <Separator />
                    <p>Include your Memo code in the additional instructions of your wire. Failure to provide Memo code will significantly delay processing and may require you to contact Coinchange.</p>
                    <Separator />
                    <p><strong>NOTE:</strong> Only transfers from U.S. banks in USD currency will be accepted.</p>
                    <Separator />
                    <p><strong>NOTE:</strong> ACH transfers not accepted.</p>
                    <Separator />
                    <p><strong>NOTE:</strong> Funding from third-party account is <strong>not permitted</strong>. Name on originating bank account must match the name on your Coinchange account.</p>
                    <Separator />
                    <div>
                        <p className="text-foreground font-semibold">Transfer fees</p>
                        <p>No fee (your bank may charge you a fee to send wire transfer)</p>
                    </div>
                     <Separator />
                    <div>
                        <p className="text-foreground font-semibold">Processing time</p>
                        <p>same day</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
