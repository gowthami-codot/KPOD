import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Krutrim",
  description: "Krutrim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
