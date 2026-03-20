import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import '../styles/variables.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'J.S Traders Chair Factory | Luxury Ergonomic Seating',
  description: 'Premium ergonomic and executive chairs crafted for high-performance workspaces in Nepal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}