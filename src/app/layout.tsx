import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CookiesProvider } from "next-client-cookies/server";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { GameContextProvider } from "@/lib/context/game-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-50 dark:bg-black"}>
        <GameContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CookiesProvider>
              {children}
              <Toaster />
            </CookiesProvider>
          </ThemeProvider>
        </GameContextProvider>
      </body>
    </html>
  );
}
