import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import SiteNav from '@/components/SiteNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code with Ash',
  description: 'Portfolio & Projects by Ashley Henderson',
  openGraph: {
    title: 'Code with Ash',
    description: 'Portfolio & Projects by Ashley Henderson',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Code with Ash',
    description: 'Portfolio & Projects by Ashley Henderson',
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteNav />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}