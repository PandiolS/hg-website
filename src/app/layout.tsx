import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Higherd",
  description: "Description of the website",
  keywords: ["Higherd", "Higherd.de", "Higherd.de"],
  authors: [{ name: "Higherd", url: "https://www.higherd.de" }],
  creator: "Higherd",
  publisher: "Higherd",
  robots: "index, follow",
  icons: {
    icon: "images/favicon.ico",
    shortcut: "images/favicon.ico",
    apple: "images/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Higherd",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}