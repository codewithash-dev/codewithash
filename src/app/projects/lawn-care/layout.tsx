import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lawncare",
});

export const metadata: Metadata = {
  title: "Lawn Care OS",
  description: "The full 6-in-1 vertical SaaS suite for lawn care businesses.",
  openGraph: {
    title: "Lawn Care OS",
    description: "The full 6-in-1 vertical SaaS suite for lawn care businesses.",
    type: "website",
    images: [{ url: "/lawn-care/assets/images/modern_saas_dashboard.png", width: 1200, height: 630, alt: "Lawn Care OS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawn Care OS",
    description: "The full 6-in-1 vertical SaaS suite for lawn care businesses.",
    images: ["/lawn-care/assets/images/modern_saas_dashboard.png"],
  },
};

export default function LawnCareLayout({
  children,
}: { children: React.ReactNode }) {
  return <div className={plusJakarta.className}>{children}</div>;
}
