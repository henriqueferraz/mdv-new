import type { Metadata } from "next";
import { Header } from "@/components/header";
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
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-b from-pink-300 to-pink-200",
          fontSans.variable
        )}>
        <div className='min-h-screen'>
          <Header />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}