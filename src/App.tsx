import React, { useState } from 'react';
import {
  MessageCircle,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import {
  PRODUCTS,
  AyurvedicProduct,
  BRAND_IMAGES,
  QUALITY_PILLARS,
  RITUAL_GUIDES,
  WHATSAPP_NUMBER,
} from './data/products';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { VrindavanFullLogo } from './components/VrindavanLogo';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<AyurvedicProduct | null>(null);
  const [storyImgError, setStoryImgError] = useState(false);

  const directWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Namaste VRINDAVAN NATURAL'S! 🌿 I would like to inquire about your 100% natural Ayurvedic herbal powders."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#14281D] overflow-x-hidden">
      {/* Sticky Top Header with Properly Adjusted Official VRINDAVAN NATURALS Logo */}
      <header className="sticky top-0 z-40 h-16 sm:h-20 bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#14281D]/10 px-3.5 sm:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto h-full flex items-center justify-between gap-3">
          {/* Zone 1: Official VRINDAVAN NATURALS Logo */}
          <a
            href="#"
            aria-label="VRINDAVAN NATURALS Home"
            className="shrink-0 flex items-center py-1"
          >
            <VrindavanFullLogo className="h-10 sm:h-12 md:h-14 w-auto" />
          </a>

          {/* Zone 2: Clean Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#14281D]/85"
          >
            <a
              href="#collection"
              className="hover:text-[#085820] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Products
            </a>
            <a
              href="#heritage"
              className="hover:text-[#085820] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Our Story
            </a>
            <a
              href="#rituals"
              className="hover:text-[#085820] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              How to Use
            </a>
            <a
              href="#contact"
              className="hover:text-[#085820] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary WhatsApp Order Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#14281D] text-[#F9F6F0] hover:bg-[#1F5E3B] transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4B982] shrink-0" />
              <span className="hidden xs:inline sm:inline">WhatsApp Order</span>
              <span className="xs:hidden sm:hidden">Order</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-10 h-10 rounded-lg border border-[#14281D]/15 bg-white/80 text-[#14281D] flex items-center justify-center cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden sticky top-16 z-30 bg-[#F4F0E6] border-b border-[#14281D]/15 px-4 py-4 shadow-lg">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-[#14281D]">
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#14281D]/5 transition-colors"
            >
              Products (14 Herbal Powders)
            </a>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#14281D]/5 transition-colors"
            >
              Founder &amp; Brand Story
            </a>
            <a
              href="#rituals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#14281D]/5 transition-colors"
            >
              How to Use
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#14281D]/5 transition-colors"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-lg bg-[#1F5E3B] text-white font-medium text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#D4B982]" />
                <span>Order Directly on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* SECTION 1: FULL-WIDTH AYURVEDIC THEME HERO BANNER */}
        <section className="relative bg-[#091C12] text-[#F9F6F0] overflow-hidden border-b border-[#B8934A]/30 min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
          {/* Full-Bleed Ayurvedic Botanical Background Image */}
          <img
            src={BRAND_IMAGES.heroAyurvedicBg}
            alt="Traditional Ayurvedic herbs, moringa leaves, amla berries, and stone mortar in golden sunlight"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-[68%_center] sm:object-center"
          />

          {/* Directional Scrim: Strong Readability on Mobile & Left Desktop, Clear Herbs on Right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(95deg, rgba(7, 22, 13, 0.95) 0%, rgba(10, 29, 18, 0.88) 46%, rgba(12, 33, 20, 0.52) 78%, rgba(12, 33, 20, 0.25) 100%)',
            }}
          />

          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24">
            <div className="max-w-xl text-left">
              {/* Brand Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#C5A059]" />
                <span className="text-[11px] sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#E6C67C]">
                  Pure • Natural • Ayurvedic
                </span>
              </div>

              {/* Main Display Headline */}
              <h1
                className="font-serif-display text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#FAF7F0]"
                style={{ textWrap: 'balance' }}
              >
                Goodness of Nature for a Healthier You
              </h1>

              {/* Description Paragraph */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#EFECE4]/90 leading-[1.7] max-w-lg">
                Experience the authentic potency of traditional Indian herbs. Our
                100% natural Ayurvedic herbal powders are gently shade-dried and
                finely milled with zero artificial colours, flavours, or
                preservatives.
              </p>

              {/* Dedicated Founder Attribution Line */}
              <div className="mt-4 pt-3.5 border-t border-white/15 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#EFECE4]/85">
                <span className="text-[#E6C67C] font-medium">Founder:</span>
                <strong className="font-semibold text-white tracking-wide">
                  Mr. Nikhil P. Wankar
                </strong>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
                <a
                  href="#collection"
                  className="h-12 px-6 sm:px-7 rounded-lg bg-[#C5A059] text-[#0E2016] hover:bg-[#D4B26E] transition-colors text-sm font-semibold inline-flex items-center justify-center gap-2.5 whitespace-nowrap shadow-lg"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 sm:px-7 rounded-lg bg-[#14281D]/90 border border-[#D4B982]/55 text-[#F9F6F0] hover:bg-[#1F5E3B] hover:border-[#1F5E3B] transition-colors text-sm font-medium inline-flex items-center justify-center gap-2.5 whitespace-nowrap backdrop-blur-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4B982]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CLEAN 14-PRODUCT CATALOG */}
        <section
          id="collection"
          className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
        >
          <div className="mb-8 sm:mb-10">
            <h2
              className="font-serif-display text-2xl sm:text-4xl font-bold text-[#14281D] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Our Ayurvedic Herbal Powders
            </h2>
            <p className="text-xs sm:text-base text-[#14281D]/75 mt-2 max-w-2xl">
              100% pure, natural, and shade-dried Ayurvedic botanical powders. Tap any product for full benefits and usage instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={(p) => setActiveProduct(p)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: BRAND STORY, FOUNDER MR. NIKHIL P. WANKAR & 100% NATURAL QUALITY PILLARS */}
        <section
          id="heritage"
          className="bg-[#132A1E] text-[#F9F6F0] border-y border-[#B8934A]/25 py-12 sm:py-16 lg:py-24"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Image: Clean Artisanal Herbal Processing */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 shadow-xl aspect-4/3 bg-[#1A3828]">
                  {!storyImgError ? (
                    <img
                      src={BRAND_IMAGES.storyCraftsmanship}
                      alt="Traditional Ayurvedic botanical grinding and shade-drying craftsmanship at VRINDAVAN NATURAL'S"
                      referrerPolicy="no-referrer"
                      onError={() => setStoryImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center">
                      <span className="font-serif-display text-xl text-[#D4B982]">
                        Traditional Vedic Craftsmanship
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Narrative: Brand Story & Founder Mr. Nikhil P. Wankar */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4B982]">
                  <span>Our Vedic Heritage</span>
                  <span aria-hidden="true">·</span>
                  <span>100% Natural Guarantee</span>
                </div>

                <h2
                  className="font-serif-display text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#FAF7F0] leading-[1.15]"
                  style={{ textWrap: 'balance' }}
                >
                  Honoring the Living Intelligence of Whole Indian Herbs.
                </h2>

                <p className="text-sm sm:text-base text-[#E2DDD2]/85 leading-relaxed">
                  <strong>VRINDAVAN NATURAL&apos;S</strong> was established to restore
                  trust, transparency, and farm-fresh potency to everyday Ayurvedic
                  wellness. Whether it is tender emerald Moringa leaves cured in indoor
                  shade, deseeded Amla fruit, or triple-sieved Shikakai pods, every
                  flat jar delivers the unadulterated herb in its finest natural form.
                </p>

                {/* Founder Attribution Box */}
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-xl bg-[#1A3626] border border-[#C5A059]/35 space-y-2.5">
                  <p className="font-serif-display font-medium text-sm sm:text-lg text-[#FAF7F0] leading-relaxed">
                    &ldquo;Our promise is simple: we never put anything into a VRINDAVAN
                    NATURAL&apos;S jar that we would not serve at our own family table.
                    When nature provides complete nourishment in every leaf, root, and
                    seed, our duty is simply to protect its purity from soil to spoon.&rdquo;
                  </p>
                  <div className="pt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
                    <div>
                      <div className="font-serif-display text-base sm:text-lg font-bold text-[#D4B982]">
                        Mr. Nikhil P. Wankar
                      </div>
                      <div className="text-xs text-[#E2DDD2]/75">
                        Founder, VRINDAVAN NATURAL&apos;S · India
                      </div>
                    </div>
                    <div className="text-xs font-mono-tabular text-[#D4B982]">
                      100% Pure · Zero Adulteration
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 4 Quality Pillars */}
            <div className="pt-8 sm:pt-10 border-t border-white/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {QUALITY_PILLARS.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="p-4 sm:p-5 rounded-xl bg-[#183324]/70 border border-white/10 space-y-2"
                  >
                    <div className="text-xs font-mono-tabular text-[#D4B982]">
                      {pillar.index}. QUALITY STANDARD
                    </div>
                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#FAF7F0]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#E2DDD2]/80 leading-relaxed pt-1">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW TO USE GUIDE */}
        <section
          id="rituals"
          className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 space-y-8 sm:space-y-10"
        >
          <div className="max-w-2xl space-y-2">
            <h2
              className="font-serif-display text-2xl sm:text-4xl font-bold text-[#14281D] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              How to Use Our Herbal Powders
            </h2>
            <p className="text-xs sm:text-base text-[#14281D]/80 leading-relaxed">
              Simple, traditional ways to enjoy VRINDAVAN NATURAL&apos;S powders in your daily wellness and hair care routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {RITUAL_GUIDES.map((guide) => (
              <div
                key={guide.step}
                className="p-5 sm:p-6 rounded-xl bg-white border border-[#14281D]/12 space-y-2.5"
              >
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#14281D]">
                  {guide.step}
                </h3>
                <p className="text-xs font-semibold text-[#1F5E3B]">
                  Herbs: {guide.herbs}
                </p>
                <p className="text-xs sm:text-sm text-[#14281D]/80 leading-relaxed">
                  {guide.instruction}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CONTACT SECTION */}
        <section
          id="contact"
          className="bg-[#EFECE4] border-t border-[#14281D]/12 py-12 sm:py-16 lg:py-20"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto p-5 sm:p-10 rounded-2xl bg-white border border-[#14281D]/12 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#14281D]/10 pb-5">
                <div>
                  <h2
                    className="font-serif-display text-xl sm:text-3xl font-bold text-[#14281D] leading-tight"
                    style={{ textWrap: 'balance' }}
                  >
                    Connect with VRINDAVAN NATURAL&apos;S
                  </h2>
                  <p className="text-xs sm:text-sm text-[#14281D]/75 mt-1">
                    Reach out directly on WhatsApp for retail orders, bulk quantities, and dispatch assistance.
                  </p>
                </div>

                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1F5E3B] text-white hover:bg-[#17492D] transition-colors text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F9F6F0] border border-[#14281D]/10 flex justify-between items-center gap-2">
                  <span className="text-[#14281D]/65">Brand Name</span>
                  <span className="font-semibold text-[#14281D] text-right">
                    VRINDAVAN NATURAL&apos;S
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F9F6F0] border border-[#14281D]/10 flex justify-between items-center gap-2">
                  <span className="text-[#14281D]/65">Founder</span>
                  <span className="font-semibold text-[#14281D] text-right">
                    Mr. Nikhil P. Wankar
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F9F6F0] border border-[#14281D]/10 flex justify-between items-center gap-2">
                  <span className="text-[#14281D]/65">Quality Promise</span>
                  <span className="font-medium text-[#14281D] text-right">
                    100% Pure · Natural · Ayurvedic
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F9F6F0] border border-[#14281D]/10 flex justify-between items-center gap-2">
                  <span className="text-[#14281D]/65">Dispatch Hours</span>
                  <span className="font-medium text-[#14281D] text-right">
                    Mon – Sat · 9:00 AM to 7:00 PM IST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-[#0E1F16] text-[#E2DDD2]/80 border-t border-[#B8934A]/20 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <VrindavanFullLogo variant="light" className="h-11 sm:h-13 w-auto" />
              <p className="text-xs text-[#D4B982]">
                100% Natural Ayurvedic Herbal Powders · Founded by Mr. Nikhil P. Wankar
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs">
              <a href="#collection" className="hover:text-white transition-colors">
                Products
              </a>
              <a href="#heritage" className="hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#rituals" className="hover:text-white transition-colors">
                How to Use
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[#E2DDD2]/55">
            <p className="max-w-3xl leading-relaxed">
              Disclaimer: All VRINDAVAN NATURAL&apos;S products are traditional 100% natural
              Ayurvedic herbal powders intended for general dietary nourishment and
              botanical personal care. Not intended to diagnose, treat, cure, or prevent
              any disease.
            </p>
            <p className="shrink-0">
              © {new Date().getFullYear()} VRINDAVAN NATURAL&apos;S. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}
