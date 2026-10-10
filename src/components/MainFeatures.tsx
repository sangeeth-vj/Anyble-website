import React from 'react';

interface MainFeaturesProps {
  onExploreApp: () => void;
}

const features = [
  {
    icon: '⌖',
    title: 'Nearby discovery',
    desc: 'See items available around your location and discover useful finds before looking farther away.',
  },
  {
    icon: '✦',
    title: 'Personal, if you want',
    desc: 'Turn recommendations on when you want a more tailored marketplace. Your experience stays in your hands.',
  },
  {
    icon: '↗',
    title: 'One-tap contact',
    desc: 'No complicated journey. When you find something interesting, contact the seller directly through the app.',
  },
  {
    icon: '⌕',
    title: 'Search that feels simple',
    desc: 'Search, categories and filters help you get from “maybe” to the right item quickly.',
  },
  {
    icon: '♡',
    title: 'Save what matters',
    desc: "Keep interesting products in your wishlist and use the cart when you're ready to organise purchases.",
  },
  {
    icon: '◎',
    title: 'Built for real people',
    desc: 'Clear profiles, transparent listings and safety guidance help make local buying feel more comfortable.',
  },
];

export const MainFeatures: React.FC<MainFeaturesProps> = () => {
  return (
    <section className="py-[85px] bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-[#17211b]">
            More local.<br />More useful.
          </h2>
          <p className="text-[#68736c] text-[16px] max-w-[430px] leading-relaxed">
            Big marketplaces give you everything. Anyble starts with a simpler question: <b className="text-[#17211b]">what is useful around you?</b>
          </p>
        </div>

        {/* Feature Grid matching HTML specimen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
          {features.map((feat, idx) => (
            <article
              key={idx}
              className="bg-white border border-[#dfe3dc] p-[28px] rounded-[24px] min-h-[220px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,33,27,0.06)] flex flex-col justify-start"
            >
              <div className="text-[27px] mb-[25px] text-[#164b35] font-black leading-none select-none">
                {feat.icon}
              </div>
              <h3 className="text-[20px] font-extrabold text-[#17211b] mb-[8px] tracking-tight">
                {feat.title}
              </h3>
              <p className="text-[#68736c] text-[14px] leading-relaxed">
                {feat.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
