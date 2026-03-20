import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-[#1A1A1A] py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 text-center sm:px-6 md:grid-cols-2 md:text-left lg:px-8">
        <div>
          <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} J.S Traders Chair Factory. All rights reserved.</p>
          <p className="mt-2 text-sm text-white/70">Dillibazaar, Kathmandu, Nepal</p>
          <a href="https://wa.me/9779802357901" target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-white/80 hover:text-white">
            WhatsApp: +9779802357901
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm text-white/70 md:justify-end">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/products" className="hover:text-white">Products</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;