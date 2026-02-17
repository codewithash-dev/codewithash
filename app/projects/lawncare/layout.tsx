import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lawn Care Style Portfolio - Code with Ash',
  description: 'A premium project showcase inspired by Lawn Care OS. Dark theme, emerald accents, and featured work cards.',
};

export default function LawnCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
