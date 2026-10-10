import React from 'react';

interface SafetyAndTrustProps {
  onOpenContact: () => void;
}

export const SafetyAndTrust: React.FC<SafetyAndTrustProps> = ({ onOpenContact }) => {
  const trustCards = [
    {
      icon: '◉',
      title: 'Clear information',
      desc: 'Encourage honest descriptions, useful original photos and transparent pricing in all listings.',
    },
    {
      icon: '✓',
      title: 'Safety guidance',
      desc: 'Practical tips for communication, public meetups, daytime handovers and responsible local transactions.',
    },
    {
      icon: '⚑',
      title: 'Report & support',
      desc: 'Give users clear ways to report suspicious listings or behaviour and speak with real human community support.',
    },
  ];

  return (
    <section id="safety" className="py-[85px] bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-[#17211b]">
            Local only works<br />when it feels safe.
          </h2>
          <p className="text-[#68736c] text-[16px] max-w-[430px] leading-relaxed">
            Trust isn't a badge added at the end. It should be part of the experience.
          </p>
        </div>

        {/* Feature Grid matching HTML specimen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
          {trustCards.map((card, idx) => (
            <article
              key={idx}
              className="bg-white border border-[#dfe3dc] p-[28px] rounded-[24px] min-h-[220px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,33,27,0.06)] flex flex-col justify-start"
            >
              <div className="text-[27px] mb-[25px] text-[#164b35] font-black leading-none select-none">
                {card.icon}
              </div>
              <h3 className="text-[20px] font-extrabold text-[#17211b] mb-[8px] tracking-tight">
                {card.title}
              </h3>
              <p className="text-[#68736c] text-[14px] leading-relaxed">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Direct Contact Button */}
        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={onOpenContact}
            className="text-[13px] font-bold text-[#164b35] hover:text-[#e87d45] underline underline-offset-4 cursor-pointer"
          >
            Have safety questions or need help? Contact Safety Support →
          </button>
        </div>

      </div>
    </section>
  );
};
