import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AyurvedicProduct, WHATSAPP_NUMBER } from '../data/products';
import { ProductPouchArt } from './ProductPouchArt';

interface ProductCardProps {
  product: AyurvedicProduct;
  onSelectProduct: (product: AyurvedicProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
}) => {
  const [selectedPackIdx, setSelectedPackIdx] = useState<number>(0); // Default 100gm as shown on reference jar

  const currentPack = product.packSizes[selectedPackIdx] || product.packSizes[0];
  const price = currentPack.priceINR;

  const whatsappMessage = encodeURIComponent(
    `Namaste VRINDAVAN NATURAL'S! 🌿\nI would like to order:\n• ${product.name} (${product.hindiName}) - Flat Jar\n• Pack Size: ${currentPack.weight}\n• Price: ₹${price}\nPlease share order confirmation & delivery details.`
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <article className="group bg-[#FAF8F3] border border-[#14281D]/12 rounded-xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 flex flex-col justify-between shadow-2xs">
      {/* Top Visual Container: Official VRINDAVAN NATURAL'S Square Studio Poster */}
      <div>
        <div
          onClick={() => onSelectProduct(product)}
          className="relative aspect-square w-full bg-[#F4EFE1] cursor-pointer overflow-hidden border-b border-[#14281D]/10"
        >
          <ProductPouchArt
            product={product}
            selectedWeight={currentPack.weight}
            viewMode="packaging"
          />
        </div>

        {/* Clean Card Body: Metadata, Name, Short Description */}
        <div className="p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs text-[#8C6635]">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-medium shrink-0">{product.hindiName}</span>
              <span aria-hidden="true" className="shrink-0">·</span>
              <span className="text-[#14281D]/65 truncate">{product.botanicalName}</span>
            </div>
            <span className="font-mono-tabular font-bold text-sm sm:text-base text-[#14281D] shrink-0">
              ₹{price}
            </span>
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="font-serif-display text-lg sm:text-xl font-bold text-[#14281D] group-hover:text-[#1F5E3B] transition-colors cursor-pointer leading-snug tracking-tight"
          >
            {product.name}
          </h3>

          <p className="text-xs sm:text-[13px] text-[#14281D]/80 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer: Pack Size Selector + WhatsApp Order Button */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 space-y-3">
        <div className="flex items-center gap-1 p-1 bg-[#EFECE4] rounded-lg">
          {product.packSizes.map((pack, idx) => (
            <button
              key={pack.weight}
              type="button"
              onClick={() => setSelectedPackIdx(idx)}
              className={`flex-1 py-1.5 text-xs font-mono-tabular font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedPackIdx === idx
                  ? 'bg-[#14281D] text-[#F9F6F0] shadow-2xs'
                  : 'text-[#14281D]/70 hover:text-[#14281D]'
              }`}
            >
              {pack.weight}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[42px] py-2.5 px-3 sm:px-4 rounded-lg bg-[#1F5E3B] text-white hover:bg-[#17492D] transition-colors text-xs sm:text-sm font-medium flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp / Order Now</span>
          </a>

          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="min-h-[42px] py-2.5 px-3.5 rounded-lg border border-[#14281D]/20 bg-white text-[#14281D] hover:bg-[#14281D] hover:text-[#F9F6F0] transition-colors text-xs font-medium cursor-pointer whitespace-nowrap shrink-0"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
};
