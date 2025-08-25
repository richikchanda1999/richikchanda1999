import type React from "react";
import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import MatrixRain from "./components/MatrixRain";
import SakuraParticles from "./components/SakuraParticles";
import AnimatedCursor from "./components/AnimatedCursor";
import ScrollProgress from "./components/ScrollProgress";
import type { Metadata } from "next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Richik Chanda | Full Stack Engineer",
  description:
    "Full stack engineer with 3+ years experience building scalable web applications and blockchain solutions. Based in Kolkata, India.",
  keywords: [
    "Richik Chanda",
    "Full Stack Developer",
    "Blockchain Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Kolkata",
    "India",
  ],
  authors: [
    { name: "Richik Chanda", url: "https://github.com/richikchanda1999" },
  ],
  creator: "Richik Chanda",
  publisher: "Richik Chanda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://richik.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Richik Chanda | Full Stack Engineer",
    description:
      "Full stack engineer with 3+ years experience building scalable web applications and blockchain solutions.",
    url: "https://richik.me",
    siteName: "Richik's corner on the internet",
    images: [
      {
        url: "/me_og.jpg",
        width: 1200,
        height: 630,
        alt: "Richik Chanda - Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richik Chanda | Full Stack Engineer",
    description:
      "Full stack engineer with 3+ years experience building scalable web applications and blockchain solutions.",
    images: ["/me_og.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <MatrixRain />
          <SakuraParticles />
          <ScrollProgress />
          <AnimatedCursor />
          <Navbar />
          <main className="pt-navbar-height">{children}</main>
          <footer className="border-t border-40 py-6 text-center text-muted-foreground">
            <div className="container mx-auto">
              <p className="font-mono text-sm">
                © {new Date().getFullYear()} Richik Chanda. All rights
                reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
