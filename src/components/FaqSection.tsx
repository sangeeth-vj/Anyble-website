import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-[85px] bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-[#17211b]">
            Questions, answered.
          </h2>
          <p className="text-[#68736c] text-[16px] max-w-[430px] leading-relaxed">
            Still curious? Start here, then jump into the app.
          </p>
        </div>

        {/* FAQ list matching HTML details style */}
        <div className="max-w-[800px] mx-auto space-y-[9px]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border border-[#dfe3dc] rounded-[15px] p-[18px_20px] transition-all"
              >
                <div
                  onClick={() => toggle(item.id)}
                  className="cursor-pointer font-extrabold text-[16px] text-[#17211b] flex items-center justify-between select-none"
                >
                  <span>{item.question}</span>
                  <span className="text-[#164b35] text-[18px] ml-4 transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <p className="text-[#68736c] pt-[12px] text-[14px] leading-relaxed border-t border-[#dfe3dc]/40 mt-3 animate-in fade-in duration-150">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact help prompt */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenContact}
            className="text-[13px] font-bold text-[#164b35] hover:text-[#e87d45] underline underline-offset-4 cursor-pointer"
          >
            Have another question? Speak with our community team →
          </button>
        </div>

      </div>
    </section>
  );
};
