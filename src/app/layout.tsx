import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MDV - Pesquisa de Satisfação",
  description: "Pesquisa de satisfação - MDV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <div className=' container mx-auto h-screen text-xs bg-gradient-to-b from-pink-300 to-pink-200 sm:text-lg'>
          <Header />
          <div className=' pt-20'>
            <label></label>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}