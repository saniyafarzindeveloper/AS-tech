import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AS Tech Studio",
  description: "Digital execution partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}