import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J.S Traders - Premium Quality Chairs From Nepal',
  description: 'Premium manufacturer and wholesale supplier of high-quality chairs from Dillibazaar, Kathmandu, Nepal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}