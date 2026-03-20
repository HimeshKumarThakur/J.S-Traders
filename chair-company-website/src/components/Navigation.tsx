import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold">Chair Company</h1>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-900 hover:text-gray-700">
                  Home
                </Link>
                <Link href="/products" className="text-gray-900 hover:text-gray-700">
                  Products
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-gray-700">
                  About
                </Link>
                <Link href="/help" className="text-gray-900 hover:text-gray-700">
                  Help
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-gray-700">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;