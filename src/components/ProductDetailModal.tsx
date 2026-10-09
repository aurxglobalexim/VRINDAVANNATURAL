import React, { useState } from 'react';
import { X, MessageCircle, Clock, Droplets, Scale } from 'lucide-react';
import { AyurvedicProduct, WHATSAPP_NUMBER } from '../data/products';
import { ProductPouchArt } from './ProductPouchArt';

interface ProductDetailModalProps {
  product: AyurvedicProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const [selectedPackIndex, setSelectedPackIndex] = useState<number>(0); // Default 100g
  const [quantity, setQuantity] = useState<number>(1);

  const selectedPack = product.packSizes[selectedPackIndex] || product.packSizes[0];
  const unitPrice = selectedPack.priceINR;
  const totalPrice = unitPrice * quantity;

  const whatsappText = encodeURIComponent(
    `Namaste VRINDAVAN NATURAL'S! 🌿\n\nI would like to order:\n• Product: ${product.name} (${product.hindiName}) - Flat Jar\n• Pack Size: ${selectedPack.weight}\n• Quantity: ${quantity}\n• Total: ₹${totalPrice}\n\nPlease share payment & dispatch details.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-[#0B1911]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F9F6F0] border-t sm:border border-[#14281D]/15 rounded-t-2xl sm:rounded-xl shadow-2xl overflow-y-auto md:overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Always visible on both mobile and desktop) */}
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="fixed sm:absolute top-5 right-4 sm:top-3.5 sm:right-3.5 z-40 w-10 h-10 rounded-full bg-[#F9F6F0]/95 text-[#14281D] hover:bg-[#14281D] hover:text-[#F9F6F0] border border-[#14281D]/15 transition-colors flex items-center justify-center shadow-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Flat Jar Showcase & Specs */}
        <div className="w-full md:w-[46%] bg-[#F4EFE1] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#14281D]/10 shrink-0">
          <div className="relative aspect-square w-full">
            <ProductPouchArt
              product={product}
              selectedWeight={selectedPack.weight}
            />
          </div>

          {/* Botanical Specifications Table */}
          <div className="p-4 sm:p-5 space-y-2.5 bg-[#F4F0E6] border-t border-[#14281D]/10 text-xs">
            <div className="flex items-center justify-between gap-2 py-1 border-b border-[#14281D]/10">
              <span className="text-[#14281D]/65 shrink-0">Botanical Name</span>
              <span className="font-medium text-[#14281D] text-right">{product.botanicalName}</span>
            </div>
            <div className="flex items-center justify-between gap-2 py-1 border-b border-[#14281D]/10">
              <span className="text-[#14281D]/65 shrink-0">Plant Part Used</span>
              <span className="font-medium text-[#14281D] text-right">{product.plantPartUsed}</span>
            </div>
            <div className="flex items-center justify-between gap-2 pt-1">
              <span className="text-[#14281D]/65 shrink-0">Packaging</span>
              <span className="font-medium text-[#8C6635] text-right">
                Food-Grade Flat Plastic Jar
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase & Ritual Module */}
        <div className="w-full md:w-[54%] p-4 sm:p-7 md:overflow-y-auto space-y-5">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#8C6635] font-medium">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.hindiName}</span>
            </div>

            <h2
              id="modal-product-title"
              className="font-serif-display text-2xl sm:text-3xl font-bold text-[#14281D] mt-1"
            >
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#14281D]/80 leading-relaxed mt-2">
              {product.shortDescription}
            </p>
          </div>

          {/* Pack Size Selection & Price */}
          <div className="pt-3 border-t border-[#14281D]/10">
            <div className="flex items-baseline justify-between mb-2.5">
              <span className="text-xs font-semibold text-[#14281D]/75">
                Select Flat Jar Weight
              </span>
              <span className="text-xs text-[#1B4332] font-medium">
                In Stock · Fresh Batch
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {product.packSizes.map((pack, idx) => {
                const isSelected = idx === selectedPackIndex;
                return (
                  <button
                    key={pack.weight}
                    type="button"
                    onClick={() => setSelectedPackIndex(idx)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#14281D] bg-[#14281D] text-[#F9F6F0] shadow-xs'
                        : 'border-[#14281D]/15 bg-white/70 text-[#14281D] hover:border-[#14281D]/40'
                    }`}
                  >
                    <div className="text-xs font-mono-tabular font-semibold">
                      {pack.weight}
                    </div>
                    <div
                      className={`text-sm font-mono-tabular font-bold mt-0.5 ${
                        isSelected ? 'text-[#D4B982]' : 'text-[#14281D]'
                      }`}
                    >
                      ₹{pack.priceINR}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <div className="flex items-center justify-between border border-[#14281D]/20 rounded-lg bg-white px-3 py-2 sm:w-32">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center text-base font-medium text-[#14281D] hover:bg-[#14281D]/5 rounded cursor-pointer"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="font-mono-tabular text-sm font-semibold text-[#14281D]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 flex items-center justify-center text-base font-medium text-[#14281D] hover:bg-[#14281D]/5 rounded cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] py-3 px-4 rounded-lg bg-[#1F5E3B] text-white hover:bg-[#184B2F] transition-colors text-xs sm:text-sm font-medium flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Order on WhatsApp · ₹{totalPrice}</span>
            </a>
          </div>

          {/* Wellness Benefits */}
          <div className="pt-4 border-t border-[#14281D]/10">
            <h3 className="font-serif-display text-lg font-bold text-[#14281D] mb-2">
              Benefits
            </h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14281D]/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8934A] mt-2 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Use Instructions */}
          <div className="p-4 rounded-lg bg-[#EFECE4] border border-[#14281D]/10 space-y-3">
            <h3 className="font-serif-display text-lg font-bold text-[#14281D]">
              How to Use
            </h3>

            <p className="text-xs sm:text-sm text-[#14281D]/85 leading-relaxed">
              {product.usageInstructions.dailyRitual}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#14281D]/10 text-xs">
              <div>
                <div className="text-[#14281D]/60 font-medium flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5 text-[#8C6635]" />
                  <span>Serving</span>
                </div>
                <p className="text-[#14281D] font-medium mt-0.5">
                  {product.usageInstructions.recommendedServing}
                </p>
              </div>
              <div>
                <div className="text-[#14281D]/60 font-medium flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-[#8C6635]" />
                  <span>Medium</span>
                </div>
                <p className="text-[#14281D] font-medium mt-0.5">
                  {product.usageInstructions.anupanaOrMedium}
                </p>
              </div>
              <div>
                <div className="text-[#14281D]/60 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8C6635]" />
                  <span>Best Time</span>
                </div>
                <p className="text-[#14281D] font-medium mt-0.5">
                  {product.usageInstructions.bestTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
