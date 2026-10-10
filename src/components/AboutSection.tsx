import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-[85px] bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-[#17211b]">
            We're building a<br />more local internet.
          </h2>
          <p className="text-[#68736c] text-[16px] max-w-[430px] leading-relaxed">
            Anyble is designed around a simple idea: technology should make nearby opportunities easier to notice—not make local people invisible.
          </p>
        </div>

        {/* Story Grid matching HTML specimen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          
          <article className="bg-white border border-[#dfe3dc] rounded-[24px] p-[28px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,33,27,0.06)] flex flex-col justify-between">
            <div className="text-[21px] font-semibold text-[#17211b] leading-[1.3] mb-[20px]">
              “The best deal isn't always the one shipped from far away. Sometimes it's sitting a few streets from you.”
            </div>
            <div className="text-[13px] text-[#68736c] font-medium">
              — Our product philosophy
            </div>
          </article>

          <article className="bg-white border border-[#dfe3dc] rounded-[24px] p-[28px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,33,27,0.06)] flex flex-col justify-between">
            <div className="text-[21px] font-semibold text-[#17211b] leading-[1.3] mb-[20px]">
              Buyers get discovery. Sellers get visibility. Small businesses get an affordable place to be seen.
            </div>
            <div className="text-[13px] text-[#68736c] font-medium">
              — What we're trying to connect
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
