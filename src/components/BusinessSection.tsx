import React from 'react';
import { Sparkles } from 'lucide-react';

interface BusinessSectionProps {
  onOpenAdvertise: () => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({ onOpenAdvertise }) => {
  return (
    <section id="for-businesses" className="py-[85px] bg-[#efe7d5] text-[#17211b]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] items-center">
          
          {/* Left Column matching HTML specimen */}
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              <span>FOR SMALL & LOCAL BUSINESSES</span>
            </div>

            <h2 className="text-[clamp(38px,5vw,62px)] leading-none tracking-[-2px] font-black text-[#17211b]">
              Your next customer could be around the corner.
            </h2>

            <p className="text-[#68736c] my-5 text-[17px] leading-relaxed max-w-lg">
              Promote your business inside a local marketplace without committing to a huge advertising budget.
            </p>

            <button
              onClick={onOpenAdvertise}
              className="btn btn-dark"
            >
              Advertise your business →
            </button>
          </div>

          {/* Right Column: Giant Price & Checklist matching HTML specimen */}
          <div className="bg-[#f7f3e8]/70 p-6 sm:p-8 rounded-[24px] border border-[#e1dac9]">
            <div className="text-[76px] sm:text-[84px] font-black leading-none text-[#164b35] tracking-[-5px]">
              ₹49 <small className="text-[16px] tracking-normal font-bold text-[#68736c]">/ promotion</small>
            </div>

            <div className="grid gap-[12px] my-5 text-[14px] font-bold text-[#17211b]">
              <div className="bg-white px-[15px] py-[13px] rounded-[12px] border border-[#e1dac9] flex items-center gap-2 shadow-2xs">
                <span className="text-[#164b35] font-extrabold">✓</span>
                <span>Reach people near your business</span>
              </div>
              <div className="bg-white px-[15px] py-[13px] rounded-[12px] border border-[#e1dac9] flex items-center gap-2 shadow-2xs">
                <span className="text-[#164b35] font-extrabold">✓</span>
                <span>Simple local promotion</span>
              </div>
              <div className="bg-white px-[15px] py-[13px] rounded-[12px] border border-[#e1dac9] flex items-center gap-2 shadow-2xs">
                <span className="text-[#164b35] font-extrabold">✓</span>
                <span>Designed for small businesses</span>
              </div>
              <div className="bg-white px-[15px] py-[13px] rounded-[12px] border border-[#e1dac9] flex items-center gap-2 shadow-2xs">
                <span className="text-[#164b35] font-extrabold">✓</span>
                <span>Start small. Learn what works.</span>
              </div>
            </div>

            {/* Authentic Merchant Proof Badge */}
            <div className="pt-4 border-t border-[#e1dac9] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-200 shrink-0 border border-[#e1dac9]">
                <img
                  src="/assets/images/nearbuy_bookstore_owner_1791488312883.jpg"
                  alt="Independent Bookseller"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[12px] text-[#68736c] leading-snug">
                <b className="text-[#17211b]">Sunita M.</b>: “Within 3 hours of our ₹49 promotion, 18 neighbors walked in to pick up stationery books.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
