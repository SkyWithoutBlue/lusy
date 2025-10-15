import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lusy",
  description: "Discover the beauty of modern design with glassmorphic effects. A stunning showcase of contemporary web design.",
  keywords: ["glassmorphic", "modern design", "web development", "UI/UX", "Next.js"],
  authors: [{ name: "Lusy" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#9A8A88",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
