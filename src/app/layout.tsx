import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gather Labs | Making everyday life easier",
  description: "Smart AI-powered apps that learn what you need. From meal planning to wardrobe management, we're simplifying the routines that matter.",
  keywords: ["AI", "apps", "smart apps", "Gather Labs", "Gather Kitchen", "meal planning", "wardrobe management"],
  openGraph: {
    title: "Gather Labs | Making everyday life easier",
    description: "Smart AI-powered apps that learn what you need and help you get it done.",
    url: "https://gatherlabs.io",
    siteName: "Gather Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gather Labs | Making everyday life easier",
    description: "Smart AI-powered apps that learn what you need and help you get it done.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
