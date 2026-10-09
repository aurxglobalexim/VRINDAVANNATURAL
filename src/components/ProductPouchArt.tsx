import React, { useState } from 'react';
import { AyurvedicProduct, BRAND_IMAGES } from '../data/products';
import { VrindavanEmblem, VrindavanFullLogo } from './VrindavanLogo';

interface ProductPouchArtProps {
  product: AyurvedicProduct;
  selectedWeight?: string;
  viewMode?: 'packaging' | 'studio';
  className?: string;
}

/**
 * Exact per-photo cylindrical jar label coordinates (calibrated to each 1024x1024 studio jar photo)
 */
function getJarCalibration(studioImage: string) {
  if (studioImage === BRAND_IMAGES.fruitBotanical) {
    // studio_jar_amla_triphala
    return {
      left: '39.2%',
      top: '46.8%',
      width: '36.1%',
      height: '27.4%',
      hasTopLidPatch: true,
      hasBeetrootCapPatch: false,
      hasBowlWoodPatch: false,
    };
  }
  if (studioImage === BRAND_IMAGES.rootsBark) {
    // studio_jar_ashwagandha_shatavari
    return {
      left: '37.3%',
      top: '41.3%',
      width: '31.0%',
      height: '30.5%',
      hasTopLidPatch: false,
      hasBeetrootCapPatch: false,
      hasBowlWoodPatch: false,
    };
  }
  if (studioImage === BRAND_IMAGES.beetrootRuby) {
    // studio_jar_beetroot_ruby
    return {
      left: '38.4%',
      top: '42.0%',
      width: '30.4%',
      height: '31.0%',
      hasTopLidPatch: false,
      hasBeetrootCapPatch: true,
      hasBowlWoodPatch: false,
    };
  }
  if (studioImage === BRAND_IMAGES.barkShikakai) {
    // studio_jar_bark_shikakai
    return {
      left: '35.9%',
      top: '42.1%',
      width: '32.0%',
      height: '28.2%',
      hasTopLidPatch: false,
      hasBeetrootCapPatch: false,
      hasBowlWoodPatch: false,
    };
  }
  // Default: studio_jar_moringa_greens
  return {
    left: '38.2%',
    top: '42.2%',
    width: '31.8%',
    height: '30.2%',
    hasTopLidPatch: false,
    hasBeetrootCapPatch: false,
    hasBowlWoodPatch: true,
  };
}

export const ProductPouchArt: React.FC<ProductPouchArtProps> = React.memo(({
  product,
  selectedWeight = '100g',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const weightFormatted =
    selectedWeight === '1kg'
      ? '1kg'
      : selectedWeight.endsWith('g')
      ? `${selectedWeight}m`
      : selectedWeight;

  const jarCal = getJarCalibration(product.studioImage);

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#E8E0CE] ${className}`}
    >
      {/* 1. OPTIMIZED STUDIO PHOTOGRAPH BASE */}
      {!imgError && (
        <img
          src={product.studioImage}
          alt={`${product.name} (${product.devanagariName}) in flat clear plastic jar`}
          width={720}
          height={720}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Soft Sunlit Top Header Wash */}
      <div
        className="absolute inset-x-0 top-0 h-[25%] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(248, 245, 236, 0.96) 0%, rgba(246, 241, 228, 0.85) 60%, rgba(244, 239, 224, 0) 100%)',
        }}
      />

      {/* Soft Right-Side Cream Vignette so the 4 Benefit Icons Read Clearly */}
      <div
        className="absolute inset-y-0 right-0 w-[33%] pointer-events-none"
        style={{
          background:
            'linear-gradient(270deg, rgba(246, 242, 231, 0.92) 0%, rgba(246, 242, 231, 0.65) 65%, rgba(246, 242, 231, 0) 100%)',
        }}
      />

      {/* Retouch patches to keep lids and wooden bowls 100% clean across all studio bases */}
      {jarCal.hasBowlWoodPatch && (
        <div
          className="absolute left-[13%] bottom-[27%] w-[20%] h-[13%] rounded-full pointer-events-none opacity-90"
          style={{
            background:
              'radial-gradient(ellipse at center, #593416 0%, rgba(89,52,22,0.75) 58%, transparent 82%)',
          }}
        />
      )}
      {jarCal.hasTopLidPatch && (
        <div
          className="absolute left-[42.5%] top-[29.2%] w-[29.5%] h-[5.2%] rounded-[50%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, #259B48 0%, #158035 70%, #0E6929 100%)',
          }}
        />
      )}
      {jarCal.hasBeetrootCapPatch && (
        <div
          className="absolute left-[48.2%] top-[28.2%] w-[10.8%] h-[6.8%] rounded-xs pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #167A37 0%, #1C8B41 50%, #11682D 100%)',
          }}
        />
      )}

      {/* ==================== 2. TOP HEADER BAR (OFFICIAL LOGO LEFT + SCRIPT SLOGAN RIGHT) ==================== */}
      <div className="relative z-20 flex items-start justify-between px-2.5 sm:px-3.5 pt-2.5">
        {/* Top-Left Official VRINDAVAN NATURALS Logo */}
        <div className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
          <VrindavanFullLogo className="h-8 sm:h-10 md:h-11 w-auto" />
        </div>

        {/* Top-Right Handwritten Script Slogan */}
        <div className="text-right pt-0.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="font-script-slogan text-[13px] sm:text-[16px] font-bold leading-[1.02] text-[#144B21]">
            <div>Goodness of Nature</div>
            <div>for a Healthier You</div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="h-[1px] w-5 sm:w-8 bg-[#144B21]/70" />
            <svg
              className="w-2.5 h-2 sm:w-3 sm:h-2.5 text-[#1E6825]"
              viewBox="0 0 20 14"
              fill="currentColor"
            >
              <path d="M1 12C3 4 11 1 19 2C16 9 9 13 1 12Z" />
            </svg>
            <span className="h-[1px] w-5 sm:w-8 bg-[#144B21]/70" />
          </div>
        </div>
      </div>

      {/* ==================== 3. FLUSH CYLINDRICAL JAR STICKER (3D WRAP) ==================== */}
      <div
        className="absolute z-20 overflow-hidden flex flex-col justify-between"
        style={{
          left: jarCal.left,
          top: jarCal.top,
          width: jarCal.width,
          height: jarCal.height,
          backgroundColor: '#FAF8F2',
          backgroundImage:
            'radial-gradient(circle at 80% 25%, rgba(212, 198, 168, 0.28) 0%, transparent 62%)',
          borderTopLeftRadius: '50% 4px',
          borderTopRightRadius: '50% 4px',
          borderBottomLeftRadius: '50% 7px',
          borderBottomRightRadius: '50% 7px',
          boxShadow:
            'inset 0 1.5px 2.5px rgba(0,0,0,0.22), inset 0 -1.5px 2px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.18)',
        }}
      >
        {/* Top Gold Foil Hairline Border of Label */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#8A6827] via-[#DFC076] to-[#7A5B20] shrink-0" />

        {/* Left Cylindrical Edge Micro-Text Lines */}
        <div className="absolute left-0.5 top-2 bottom-4 w-1 flex flex-col justify-between opacity-35 pointer-events-none">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="block w-full h-[1px] bg-[#14281D]" />
          ))}
        </div>

        {/* Sticker Top Row: Official Brand Logo + Veg Mark & 100% Natural Leaf */}
        <div className="flex items-start justify-between px-1.5 sm:px-2 pt-1 pl-2 sm:pl-2.5">
          <div className="flex items-center gap-1">
            <VrindavanEmblem className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 shrink-0" />
            <div className="leading-none">
              <span className="block font-serif-display font-extrabold text-[5.5px] sm:text-[6.5px] text-[#085820] tracking-tight">
                VRINDAVAN
              </span>
              <span className="block font-serif-display font-extrabold text-[5.5px] sm:text-[6.5px] text-[#085820] tracking-tight -mt-0.5">
                NATURALS
              </span>
              <span className="block font-devanagari font-bold text-[3.8px] sm:text-[4.5px] text-[#085820] mt-0.5">
                शुद्ध आयुर्वेदिक उत्पाद
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-0.5 pr-0.5">
            <div className="w-2 h-2 border border-[#147A37] flex items-center justify-center bg-white">
              <span className="w-1 h-1 rounded-full bg-[#147A37]" />
            </div>
            <div className="px-1 py-0.5 rounded-tl-sm rounded-br-sm bg-[#1D7E34] text-white text-[3.8px] sm:text-[4.5px] font-bold leading-none whitespace-nowrap">
              100% NATURAL
            </div>
          </div>
        </div>

        {/* Sticker Center: Bold Black Product Name + Red Devanagari Name */}
        <div className="px-1.5 sm:px-2 pl-2 sm:pl-2.5 my-auto text-left">
          <h4 className="font-serif-display font-extrabold text-[8.5px] sm:text-[10.5px] text-[#161A16] leading-[1.05] tracking-tight truncate">
            {product.labelTitle}
          </h4>
          <p className="font-devanagari font-bold text-[8px] sm:text-[9.5px] text-[#D62828] leading-tight mt-0.5 truncate">
            {product.devanagariName}
          </p>
        </div>

        {/* Sticker Lower Section: 3 Purity Lines + Mini Bowl */}
        <div className="px-1.5 sm:px-2 pl-2 sm:pl-2.5 pb-1 flex items-end justify-between gap-1">
          <div className="text-[4.2px] sm:text-[5px] font-semibold text-[#1E241E] leading-[1.26] space-y-[1px]">
            <div className="border-b border-[#14281D]/15 pb-[0.5px] whitespace-nowrap">
              No Artificial Flavour
            </div>
            <div className="border-b border-[#14281D]/15 pb-[0.5px] whitespace-nowrap">
              No Artificial Colour
            </div>
            <div className="whitespace-nowrap">No Artificial Preservatives</div>
          </div>

          {/* Mini Bowl Illustration on Right of Sticker */}
          <div className="relative w-6 sm:w-7 h-4.5 sm:h-5.5 shrink-0 flex flex-col items-center justify-end pr-0.5">
            <div
              className="w-4 sm:w-4.5 h-1.5 sm:h-2 rounded-t-full -mb-0.5 z-10"
              style={{
                background: `radial-gradient(circle, ${product.powderSecondaryHex}, ${product.powderColorHex})`,
              }}
            />
            <div
              className="w-5 sm:w-5.5 h-1.5 sm:h-2 rounded-b-full border-t border-[#5C3516]"
              style={{
                background: 'linear-gradient(135deg, #A46A35, #6B3E17)',
              }}
            />
          </div>
        </div>

        {/* Bottom Green Band of Sticker with Weight Pill */}
        <div className="w-full px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-[#0F5C24] via-[#187A35] to-[#0B4D1D] flex items-center justify-between">
          <span className="px-1.5 py-[1px] rounded-full bg-white text-[#14281D] font-mono-tabular font-bold text-[4.8px] sm:text-[5.8px] leading-none shadow-2xs">
            {weightFormatted}
          </span>
          <span className="text-[3.8px] sm:text-[4.5px] text-white/90 font-semibold tracking-wider">
            PURE AYURVEDIC
          </span>
        </div>

        {/* Realistic 3D Cylindrical Shading & Vertical Jar Gloss Reflection Across Sticker */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(90deg, rgba(15,12,8,0.34) 0%, rgba(15,12,8,0.10) 8%, rgba(255,255,255,0.32) 20%, rgba(255,255,255,0.04) 36%, rgba(0,0,0,0) 62%, rgba(15,12,8,0.12) 86%, rgba(15,12,8,0.38) 100%)',
          }}
        />
      </div>

      {/* ==================== 4. RIGHT SIDE: 4 STACKED CIRCULAR BENEFIT ICONS ==================== */}
      <div className="absolute right-1.5 sm:right-2.5 top-[27%] bottom-[22%] z-20 flex flex-col justify-between max-w-[92px] sm:max-w-[115px]">
        {product.posterHighlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full border-[1.5px] sm:border-[1.8px] border-[#1A4D25] bg-[#FAF7EE]/92 backdrop-blur-[1px] flex items-center justify-center shrink-0 text-[#1A4D25] shadow-xs">
              {idx === 0 && (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" />
                </svg>
              )}
              {idx === 1 && (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" />
                </svg>
              )}
              {idx === 2 && (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 21H10L11 14H7.5C7.12 14 6.76 13.78 6.6 13.45C6.43 13.12 6.47 12.73 6.7 12.43L13 4H14L13 11H16.5C16.88 11 17.24 11.22 17.4 11.55C17.57 11.88 17.53 12.27 17.3 12.57L11 21Z" />
                </svg>
              )}
              {idx === 3 && (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C12 3 15.5 7.5 15.5 11.5C15.5 14.5 13.9 16.5 12 16.5C10.1 16.5 8.5 14.5 8.5 11.5C8.5 7.5 12 3 12 3ZM5 11C7.5 11 9.5 13 10.5 15.5C8 16 5 14.5 5 11ZM19 11C19 14.5 16 16 13.5 15.5C14.5 13 16.5 11 19 11ZM4 18H20V20H4V18Z" />
                </svg>
              )}
            </div>
            <span className="text-[6.8px] sm:text-[8.2px] font-bold text-[#142818] leading-[1.15] whitespace-pre-line drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});
