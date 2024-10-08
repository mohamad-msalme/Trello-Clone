import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextThemeProvider } from "@/components/NextThemeProvider";

import "./globals.css";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={inter.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
