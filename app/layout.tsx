import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";

import Header from "@/components/landingV2/Header";
import Footer from "@/components/landing/Footer";

import AuthProvider from "@/components/auth/AuthContext";
import { Providers } from './providers';

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Krutrim",
  description: "AI Workloads with krutrim cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="app/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Providers>
          <NextUIProvider>
            <AuthProvider>
              <Header />
              <Toaster />
              {children}
              <Footer />
            </AuthProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
