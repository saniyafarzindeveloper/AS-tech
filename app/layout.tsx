
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import Closed from "@/components/landing-page/Closed";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "A S Tech Studio",
  description: "Digital execution partner",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Closed />
      {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}