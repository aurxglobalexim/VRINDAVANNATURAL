import React, { useState } from 'react';
import { X, Trash2, MessageCircle, CheckCircle2, Copy, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { AyurvedicProduct, PackSizeOption, WHATSAPP_NUMBER } from '../data/products';

export interface TrayItem {
  product: AyurvedicProduct;
  pack: PackSizeOption;
  quantity: number;
}

interface OrderTrayDrawerProps {
  isOpen: boolean;
  items: TrayItem[];
  currency: 'INR' | 'USD';
  onClose: () => void;
  onUpdateQuantity: (productId: string, weight: string, delta: number) => void;
  onRemoveItem: (productId: string, weight: string) => void;
  onClearTray: () => void;
}

export const OrderTrayDrawer: React.FC<OrderTrayDrawerProps> = ({
  isOpen,
  items,
  currency,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearTray,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState<'UPI / Bank' | 'Cash on Delivery' | 'Bulk / Export Quote'>('UPI / Bank');
  const [copied, setCopied] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  const currencySymbol = currency === 'INR' ? '₹' : '$';
  const subtotal = items.reduce((sum, item) => {
    const price = currency === 'INR' ? item.pack.priceINR : item.pack.priceUSD;
    return sum + price * item.quantity;
  }, 0);

  const freeShippingThreshold = currency === 'INR' ? 699 : 45;
  const shippingFee = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : currency === 'INR' ? 60 : 8;
  const grandTotal = subtotal + shippingFee;

  const generateOrderSummaryText = (orderRef?: string) => {
    const lines = [
      `Namaste VRINDAVAN NATURAL'S! 🌿`,
      orderRef ? `Order Reference: ${orderRef}` : `New Ayurvedic Wellness Order`,
      ``,
      `*Selected Herbal Powders:*`,
      ...items.map((item, idx) => {
        const unit = currency === 'INR' ? item.pack.priceINR : item.pack.priceUSD;
        return `${idx + 1}. ${item.product.name} (${item.pack.weight}) × ${item.quantity} = ${currencySymbol}${unit * item.quantity}`;
      }),
      ``,
      `Subtotal: ${currencySymbol}${subtotal}`,
      `Shipping: ${shippingFee === 0 ? 'Complimentary' : `${currencySymbol}${shippingFee}`}`,
      `*Total Payable: ${currencySymbol}${grandTotal}*`,
      `Preferred Payment: ${paymentMode}`,
    ];

    if (customerName.trim() || customerPhone.trim() || customerAddress.trim()) {
      lines.push(
        ``,
        `*Customer & Delivery Details:*`,
        `Name: ${customerName.trim() || 'Not specified'}`,
        `Phone: ${customerPhone.trim() || 'Not specified'}`,
        `Delivery Address: ${customerAddress.trim() || 'Not specified'}`
      );
    }

    return lines.join('\n');
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    generateOrderSummaryText()
  )}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateOrderSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmDirectOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      setFormError('Please enter your name, phone number, and delivery address to confirm.');
      return;
    }
    setFormError(null);
    const refId = `VN-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(refId);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#0B1911]/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Order Tray and Checkout"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#F9F6F0] h-full shadow-2xl border-l border-[#14281D]/15 flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#14281D] text-[#F9F6F0] flex items-center justify-between">
          <div>
            <h2 className="font-serif-display text-xl font-bold tracking-wide">
              Your Ayurvedic Order Tray
            </h2>
            <p className="text-xs text-[#D4B982]">
              Direct from VRINDAVAN NATURAL&apos;S Apothecary
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Order Tray"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {confirmedOrderId ? (
            <div className="p-6 rounded-xl bg-white border border-[#14281D]/15 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1F5E3B]/15 text-[#1F5E3B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono-tabular text-[#8C6635] font-semibold">
                ORDER CONFIRMED · #{confirmedOrderId}
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#14281D]">
                Dhanyawad, {customerName}!
              </h3>
              <p className="text-xs sm:text-sm text-[#14281D]/80 leading-relaxed">
                Your fresh small-batch herbal order has been registered with VRINDAVAN NATURAL&apos;S
                dispatch desk. You can also send your receipt directly to our WhatsApp desk for
                instant tracking updates.
              </p>

              <div className="p-3.5 rounded-lg bg-[#F4F0E6] text-left text-xs font-mono-tabular space-y-1 text-[#14281D]">
                <div className="font-semibold text-[#8C6635] mb-1">Receipt Summary:</div>
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.pack.weight}`} className="flex justify-between">
                    <span>
                      {item.product.name} ({item.pack.weight}) × {item.quantity}
                    </span>
                    <span>
                      {currencySymbol}
                      {(currency === 'INR' ? item.pack.priceINR : item.pack.priceUSD) *
                        item.quantity}
                    </span>
                  </div>
                ))}
                <div className="border-t border-[#14281D]/15 pt-1.5 mt-1.5 flex justify-between font-bold">
                  <span>Total ({paymentMode})</span>
                  <span>
                    {currencySymbol}
                    {grandTotal}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    generateOrderSummaryText(confirmedOrderId)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1F5E3B] text-white hover:bg-[#184B2F] transition-colors text-xs font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Receipt on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setConfirmedOrderId(null);
                    onClearTray();
                    onClose();
                  }}
                  className="w-full py-2 px-4 rounded-lg border border-[#14281D]/20 text-xs font-medium text-[#14281D] hover:bg-[#14281D]/5 cursor-pointer"
                >
                  Continue Exploring Botanicals
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EFECE4] border border-[#14281D]/10 flex items-center justify-center mx-auto text-[#8C6635]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#14281D]">
                Your Order Tray is Empty
              </h3>
              <p className="text-xs sm:text-sm text-[#14281D]/70 max-w-xs mx-auto leading-relaxed">
                Select any of our 14 shade-dried Ayurvedic herbal powders to build your personalized
                wellness or hair care ritual.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#14281D] text-[#F9F6F0] text-xs font-medium hover:bg-[#1D3A2A] transition-colors cursor-pointer"
              >
                <span>Browse All 14 Botanicals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Free Delivery Progress */}
              <div className="p-3 rounded-lg bg-[#EFECE4] border border-[#14281D]/10 text-xs">
                {subtotal >= freeShippingThreshold ? (
                  <p className="text-[#1F5E3B] font-medium">
                    ✓ Complimentary pan-India shipping unlocked on your order.
                  </p>
                ) : (
                  <p className="text-[#14281D]/80">
                    Add{' '}
                    <span className="font-mono-tabular font-semibold text-[#14281D]">
                      {currencySymbol}
                      {freeShippingThreshold - subtotal}
                    </span>{' '}
                    more for complimentary delivery (Free above {currencySymbol}
                    {freeShippingThreshold}).
                  </p>
                )}
              </div>

              {/* Itemized List */}
              <div className="space-y-3">
                {items.map((item) => {
                  const unitPrice =
                    currency === 'INR' ? item.pack.priceINR : item.pack.priceUSD;
                  return (
                    <div
                      key={`${item.product.id}-${item.pack.weight}`}
                      className="p-3.5 rounded-lg bg-white border border-[#14281D]/10 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-8 h-8 rounded-full shrink-0 border border-[#B8934A]/50 shadow-inner"
                          style={{ backgroundColor: item.product.powderColorHex }}
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-[#14281D] truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-[#14281D]/65 font-mono-tabular">
                            {item.pack.weight} · {currencySymbol}
                            {unitPrice} each
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center border border-[#14281D]/15 rounded-md bg-[#F9F6F0]">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.pack.weight, -1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#14281D] hover:bg-[#14281D]/10 cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="px-2 text-xs font-mono-tabular font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.pack.weight, 1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#14281D] hover:bg-[#14281D]/10 cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id, item.pack.weight)}
                          aria-label={`Remove ${item.product.name}`}
                          className="p-1.5 text-[#14281D]/45 hover:text-red-700 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Customer Delivery & Payment Verification Form */}
              <form onSubmit={handleConfirmDirectOrder} className="space-y-3 pt-3 border-t border-[#14281D]/10">
                <h3 className="font-serif-display text-lg font-bold text-[#14281D]">
                  Delivery &amp; Dispatch Details
                </h3>

                {formError && (
                  <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-md p-2.5">
                    {formError}
                  </p>
                )}

                <div>
                  <label className="block text-xs font-medium text-[#14281D]/80 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g., Aarav Deshmukh"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#14281D]/20 focus:outline-none focus:border-[#14281D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#14281D]/80 mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g., +91 98230 XXXXX"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#14281D]/20 focus:outline-none focus:border-[#14281D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#14281D]/80 mb-1">
                    Complete Delivery Address &amp; PIN Code *
                  </label>
                  <textarea
                    rows={2}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="House/Flat No., Street, City, State & Postal Code"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#14281D]/20 focus:outline-none focus:border-[#14281D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#14281D]/80 mb-1">
                    Payment Preference
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['UPI / Bank', 'Cash on Delivery', 'Bulk / Export Quote'] as const).map(
                      (mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setPaymentMode(mode)}
                          className={`py-1.5 px-2 rounded-md text-[11px] font-medium border transition-colors cursor-pointer truncate ${
                            paymentMode === mode
                              ? 'bg-[#14281D] text-[#F9F6F0] border-[#14281D]'
                              : 'bg-white text-[#14281D]/75 border-[#14281D]/15 hover:border-[#14281D]/40'
                          }`}
                        >
                          {mode}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Subtotal Breakdown */}
                <div className="p-3.5 rounded-lg bg-[#EFECE4] space-y-1.5 text-xs font-mono-tabular">
                  <div className="flex justify-between text-[#14281D]/75">
                    <span>Botanicals Subtotal</span>
                    <span>
                      {currencySymbol}
                      {subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#14281D]/75">
                    <span>Shipping &amp; Packaging</span>
                    <span>
                      {shippingFee === 0 ? 'FREE' : `${currencySymbol}${shippingFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#14281D] pt-1.5 border-t border-[#14281D]/15">
                    <span>Total Amount</span>
                    <span>
                      {currencySymbol}
                      {grandTotal}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#1F5E3B] text-white hover:bg-[#184B2F] transition-colors text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order via WhatsApp ({currencySymbol}{grandTotal})</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="submit"
                      className="py-2.5 px-3 rounded-lg bg-[#14281D] text-[#F9F6F0] hover:bg-[#1D3A2A] transition-colors text-xs font-medium cursor-pointer whitespace-nowrap"
                    >
                      Confirm Order Online
                    </button>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="py-2.5 px-3 rounded-lg border border-[#14281D]/20 bg-white text-[#14281D] hover:bg-[#14281D]/5 transition-colors text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#1F5E3B]" />
                          <span>Copied Text</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Order Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
