"use client";

import React from 'react';

type ProductPreviewModalProps = {
  isOpen: boolean;
  title: string;
  image: string;
  priceLabel: string;
  onClose: () => void;
  buyUrl: string;
};

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({
  isOpen,
  title,
  image,
  priceLabel,
  onClose,
  buyUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
          <h3 className="text-base font-semibold text-[#1A1A1A]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 min-h-[40px] w-10 items-center justify-center rounded-lg border border-black/15 text-[#1A1A1A]"
            aria-label="Close preview"
          >
            x
          </button>
        </div>

        <div className="p-4">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-[#F5F5F7]">
            <img src={image} alt={title} className="h-auto w-full object-cover" />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-semibold text-[#AD7A00]">{priceLabel}</p>
            <a
              href={buyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 min-h-[44px] items-center rounded-xl bg-[#0F766E] px-5 text-sm font-semibold text-white"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
