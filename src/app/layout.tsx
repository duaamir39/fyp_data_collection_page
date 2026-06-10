import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOHO Shield AI | Enterprise Network Security for Small Businesses",
  description: "Protect your office network from unknown threats with AI-based detection for small office networks. Join our Security Research Pilot.",
  keywords: [
    "cybersecurity",
    "network security",
    "small business security",
    "AI threat detection",
    "SDN security",
    "SOHO network monitor",
    "device quarantine",
    "office network protection",
    "final year project pilot"
  ],
  authors: [{ name: "Computer Science Researchers" }],
  openGraph: {
    title: "SOHO Shield AI | Enterprise Network Security for Small Businesses",
    description: "Protect your office network from unknown threats with AI-based detection for small office networks. Join our Security Research Pilot.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOHO Shield AI | Enterprise Network Security for Small Businesses",
    description: "Protect your office network with intelligent threat detection and automated isolation.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased bg-brand-dark-950 text-gray-100 min-h-screen selection:bg-brand-purple/30 selection:text-brand-purple-light">
        <div className="relative overflow-hidden min-h-screen">
          {/* Background glowing effects */}
          <div className="glow-orb bg-brand-blue w-[500px] h-[500px] top-[-100px] left-[-100px]" />
          <div className="glow-orb bg-brand-purple w-[600px] h-[600px] bottom-[-200px] right-[-200px]" />
          
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
