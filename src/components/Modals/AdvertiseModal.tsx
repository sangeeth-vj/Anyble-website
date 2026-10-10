import React, { useState } from 'react';
import { X, CheckCircle2, Store, Sparkles, MapPin, Eye, ArrowRight } from 'lucide-react';

interface AdvertiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvertiseModal: React.FC<AdvertiseModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('Artisan & Craft Studio');
  const [neighborhood, setNeighborhood] = useState('Indiranagar');
  const [phone, setPhone] = useState('');
  const [radiusKm, setRadiusKm] = useState(2);
  const [durationDays, setDurationDays] = useState(1);
  const [headline, setHeadline] = useState('Fresh Sourdough & Handcrafted Mugs');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const estimatedReach = Math.round(radiusKm * 1250 * durationDays);
  const totalCost = durationDays === 1 ? 49 : durationDays === 3 ? 129 : 289;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#f7f5ef] border border-[#dfe3dc] rounded-[24px] shadow-2xl p-6 sm:p-8 text-[#17211b] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#68736c] hover:text-[#17211b] hover:bg-[#e9efdf] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="eyebrow !mb-2.5">
            <span className="dot"></span>
            <span>ANYBLE LOCAL MERCHANT NETWORK</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-[26px] font-black tracking-tight text-[#17211b] font-display">
              Promote to neighbors for ₹49
            </h2>
            <div className="inline-flex items-baseline gap-1 bg-[#164b35] text-white px-3.5 py-1 rounded-full text-sm font-extrabold shrink-0">
              <span className="text-[#cce86b]">₹49</span>
              <span className="text-xs font-normal text-stone-200">/ promotion</span>
            </div>
          </div>
          <p className="text-[13px] text-[#68736c] mt-1.5 leading-relaxed">
            No giant corporate budgets, no complex bid managers. Target your actual neighborhood in 2 minutes.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-[#e9efdf] border border-[#c7d8be] rounded-[20px] text-center space-y-4">
            <div className="w-12 h-12 bg-[#164b35] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-[#cce86b]" />
            </div>
            <h3 className="text-xl font-black text-[#17211b] font-display">
              Promotion request received!
            </h3>
            <p className="text-sm text-[#17211b] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="font-extrabold">{businessName || 'Merchant'}</strong>! Our local neighborhood team will verify your business listing and send your ₹49 payment link to <strong className="font-extrabold">{phone}</strong> within 30 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-dark"
            >
              Back to Anyble
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Live Card Preview */}
            <div className="p-4 bg-white rounded-[18px] border border-[#dfe3dc] shadow-2xs">
              <div className="flex items-center justify-between text-xs text-[#68736c] mb-2 font-bold">
                <span className="flex items-center gap-1.5 text-[#164b35]">
                  <Sparkles className="w-3.5 h-3.5 text-[#164b35]" />
                  Live Preview of your Promoted Feed Card
                </span>
                <span className="text-[11px] font-mono">~{estimatedReach.toLocaleString('en-IN')} neighbors reached</span>
              </div>
              <div className="p-3.5 bg-[#f7f5ef] rounded-[14px] border border-[#dfe3dc] flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-[#164b35] text-[#cce86b] rounded-full">
                      Promoted · ₹49
                    </span>
                    <span className="text-xs font-extrabold text-[#17211b]">
                      {businessName || 'Your Business Name'}
                    </span>
                  </div>
                  <p className="text-xs text-[#17211b] font-bold">
                    {headline}
                  </p>
                  <p className="text-[11px] text-[#68736c] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#164b35]" />
                    <span>{neighborhood} · Within {radiusKm} km radius</span>
                  </p>
                </div>
                <div className="w-16 h-16 rounded-[12px] bg-[#e9efdf] flex items-center justify-center text-[#164b35] shrink-0 border border-[#c7d8be]">
                  <Store className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#17211b] mb-1">
                  Business / Store Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Clay & Co. Studio"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17211b] mb-1">
                  Category
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
                >
                  <option value="Artisan & Craft Studio">Artisan & Craft Studio</option>
                  <option value="Bakery & Gourmet Food">Bakery & Gourmet Food</option>
                  <option value="Bookstore & Stationery">Bookstore & Stationery</option>
                  <option value="Electronics & Repairs">Electronics & Repairs</option>
                  <option value="Vintage & Thrift Fashion">Vintage & Thrift Fashion</option>
                  <option value="Home & Nursery Plant">Home & Nursery Plant</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17211b] mb-1">
                  Neighborhood Colony / Pincode
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Indiranagar, 560038"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17211b] mb-1">
                  WhatsApp Contact Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#17211b] mb-1">
                Headline / Offer shown to neighbors
              </label>
              <input
                type="text"
                required
                maxLength={70}
                placeholder="e.g. 15% off hand-thrown coffee mugs this weekend"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#dfe3dc] rounded-[12px] text-sm text-[#17211b] focus:outline-hidden focus:border-[#164b35]"
              />
            </div>

            {/* Radius & Duration Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-white rounded-[16px] border border-[#dfe3dc]">
                <div className="flex justify-between text-xs font-bold text-[#17211b] mb-2">
                  <span>Target Radius</span>
                  <span className="text-[#164b35] font-mono font-black">{radiusKm} km</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={radiusKm}
                  onChange={(e) => setRadiusKm(Number(e.target.value))}
                  className="w-full accent-[#164b35] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#68736c] mt-1 font-mono">
                  <span>1 km (walk)</span>
                  <span>3 km (local)</span>
                  <span>5 km (zone)</span>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-[16px] border border-[#dfe3dc]">
                <div className="text-xs font-bold text-[#17211b] mb-2">
                  Campaign Duration
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  {[
                    { days: 1, label: '1 Day · ₹49' },
                    { days: 3, label: '3 Days · ₹129' },
                    { days: 7, label: '7 Days · ₹289' },
                  ].map((pkg) => (
                    <button
                      type="button"
                      key={pkg.days}
                      onClick={() => setDurationDays(pkg.days)}
                      className={`p-2 rounded-[10px] font-bold text-center border transition-all cursor-pointer ${
                        durationDays === pkg.days
                          ? 'bg-[#164b35] text-white border-[#164b35]'
                          : 'bg-[#faf9f5] border-[#dfe3dc] text-[#68736c] hover:border-stone-400'
                      }`}
                    >
                      {pkg.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total and Submit */}
            <div className="pt-4 border-t border-[#dfe3dc] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[11px] text-[#68736c] uppercase font-black">Total One-Time Fee</div>
                <div className="text-2xl font-black text-[#164b35] tabular-nums">
                  ₹{totalCost} <small className="text-xs font-normal text-[#68736c]">no subscription auto-renew</small>
                </div>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-light !py-2.5 flex-1 sm:flex-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-dark !py-2.5 flex-1 sm:flex-none"
                >
                  <span>Launch for ₹{totalCost} →</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
