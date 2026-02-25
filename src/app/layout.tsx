import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import GSAPPageReveal from "@/app/components/GSAPPageReveal";
import BackgroundStars from "@/app/components/BackgroundStars";
import SmoothScroll from "@/app/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codewithash.com"),
  title: "Code with Ash",
  description: "Portfolio & Projects by Ashley Henderson",
  openGraph: {
    title: "Code with Ash",
    description: "Portfolio & Projects by Ashley Henderson",
    type: "website",
    url: "https://www.codewithash.com",
  },
  twitter: {
    card: "summary",
    title: "Code with Ash",
    description: "Portfolio & Projects by Ashley Henderson",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white relative`}>
        <SmoothScroll>
          <BackgroundStars />
          <SiteNav />
          <GSAPPageReveal />
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
