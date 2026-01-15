"use client";
import { ReactNode } from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/msalConfig";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const msalInstance = new PublicClientApplication(msalConfig);

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider attribute="class">
        {children}
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </MsalProvider>
  );
}