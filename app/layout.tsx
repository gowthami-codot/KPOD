import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/landingV2/Header";
import Footer from "@/components/landingV2/Footer";
import AuthProvider from "@/components/auth/AuthContext";
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Krutrim",
  description: "AI Workloads with krutrim cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="app/favicon.ico" />
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Krutrim - India&#39;s own AI</title>
        <meta name="description" content="Scale your computational capabilities and experience the GPU services like never before" />
        <meta property="og:url" content="https://cloud.olakrutrim.com" />
        <meta property="og:image" content="https://olakrutrim.com/wp-content/uploads/2023/12/Krutrim-fevicon.png" />
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