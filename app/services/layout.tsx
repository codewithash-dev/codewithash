import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Code with Ash',
  description: 'Website development, mobile apps, full-stack applications, and UI/UX. Design, build, and deploy with Code with Ash.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
