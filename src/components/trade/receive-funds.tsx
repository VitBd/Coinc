
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <div>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Receive Funds</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <UsFlagIcon className="h-10 w-10 rounded-full" />
                                <div>
                                    <p className="font-semibold">US Dollars</p>
                                    <p className="text-sm text-muted-foreground">Balance $0.00</p>
                                </div>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </CardContent>
                </Card>
                
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
