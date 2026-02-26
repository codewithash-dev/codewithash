import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lawncare",
});

export default function LawnCareLayout({
  children,
}: { children: React.ReactNode }) {
  return <div className={plusJakarta.className}>{children}</div>;
}
