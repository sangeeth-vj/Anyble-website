import React from 'react';

interface HowItWorksProps {
  onOpenGetApp: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGetApp }) => {
  const steps = [
    {
      num: '01 / DISCOVER',
      title: 'Open & explore',
      desc: 'See nearby items or search for exactly what you need within your neighborhood radius.',
    },
    {
      num: '02 / FILTER',
      title: 'Make it yours',
      desc: 'Use category, price, distance, and verified condition filters to find genuine pre-loved treasures.',
    },
    {
      num: '03 / CONNECT',
      title: 'Contact directly',
      desc: 'Use one-click contact to talk with the seller. Private phone sharing only after seller approval.',
    },
    {
      num: '04 / MEET',
      title: 'Buy locally',
      desc: 'Agree on meeting details, inspect the product in person, and complete the exchange safely with UPI or cash.',
    },
  ];

  return (
    <section id="how-it-works" className="py-[85px] bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-[#17211b]">
            From “I need this”<br />to “found it.”
          </h2>
          <p className="text-[#68736c] text-[16px] max-w-[430px] leading-relaxed">
            The app is designed around a short, familiar journey.
          </p>
        </div>

        {/* 4 Steps Grid matching HTML specimen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="border-t-2 border-[#164b35] pt-[17px] flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] text-[#e87d45] font-black tracking-wider block uppercase">
                  {step.num}
                </span>
                <h3 className="text-[20px] font-extrabold text-[#17211b] mt-[12px] mb-[7px] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#68736c] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
