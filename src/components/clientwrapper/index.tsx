"use client";

import { GlobalStyle } from "@/styles/global";


export function ClientWrapper({ children }: { children: React.ReactNode }) {
    "use client";
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
  }