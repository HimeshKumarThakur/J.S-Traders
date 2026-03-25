"use client";

import Image from 'next/image';
import { useState } from 'react';
import ProductPreviewModal from './ProductPreviewModal';

const tabs = ['Tables', 'Chair Parts', 'Chairs', 'Furnitures'] as const;
type Tab = (typeof tabs)[number];

const tabData: Record<Tab, { title: string; image: string; price: string }[]> = {
  Tables: [
    {
      title: 'Reception Table 1.6m',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 55,000',
    },
    {
      title: 'Executive Desk 035',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 45,000',
    },
  ],
  'Chair Parts': [
    {
      title: 'Hydraulic Base',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 3,000',
    },
    {
      title: 'PU Wheels',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 1,200',
    },
  ],
  Chairs: [
    {
      title: 'Ergo High Back 1705',
      image: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 13,000',
    },
    {
      title: 'Zodiac Mesh Grey',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 13,000',
    },
  ],
  Furnitures: [
    {
      title: '4-Seater Workstation II',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 48,000',
    },
    {
      title: 'Storage Combo Unit',
      image: 'https://images.unsplash.com/photo-1519710884006-40dffb95f4e1?auto=format&fit=crop&w=1000&q=80',
      price: 'NPR 39,000',
    },
  ],
};

export default function CategoryTabsShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>('Tables');
  const [selectedItem, setSelectedItem] = useState<{ title: string; image: string; price: string } | null>(null);

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-[700] tracking-tight text-[#1A1A1A] sm:text-3xl">Chair Parts and office essentials for every setup</h2>

        <div className="mt-5 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`h-11 min-h-[44px] rounded-xl px-4 text-sm font-semibold transition ${
                activeTab === tab ? 'bg-[#0F766E] text-white' : 'border border-black/10 bg-[#F5F5F7] text-[#1A1A1A]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {tabData[activeTab].map((item) => (
            <article key={item.title} className="rounded-2xl border border-black/10 bg-[#F5F5F7] p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white">
                <button
                  type="button"
                  className="h-full w-full"
                  onClick={() => setSelectedItem(item)}
                  aria-label={`Preview ${item.title}`}
                >
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
                </button>
              </div>
              <div className="pt-3">
                <h3 className="text-base font-[700] text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-1 text-sm text-black/65">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        {selectedItem && (
          <ProductPreviewModal
            isOpen={Boolean(selectedItem)}
            title={selectedItem.title}
            image={selectedItem.image}
            priceLabel={selectedItem.price}
            onClose={() => setSelectedItem(null)}
            buyUrl={`https://wa.me/9779861829728?text=${encodeURIComponent(
              `Hello, I want to buy ${selectedItem.title}. Please share details.`,
            )}`}
          />
        )}
      </div>
    </section>
  );
}
