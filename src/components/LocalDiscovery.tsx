import React from 'react';
import { Clock, PackageX, Store, HeartHandshake } from 'lucide-react';

export const LocalDiscovery: React.FC = () => {
  return (
    <section className="py-[75px] bg-[#f7f5ef] border-b border-[#dfe3dc]/80">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Visual Neighborhood Narrative + Contrast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Documentary Neighborhood Photo Card */}
          <div className="lg:col-span-5 relative rounded-[24px] overflow-hidden shadow-sm min-h-[360px] flex flex-col justify-end border border-[#dfe3dc]">
            <img
              src="/assets/images/nearbuy_hero_community_1791488253333.jpg"
              alt="Vibrant neighborhood street with local cafes and artisan shops"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#164b35]/95 via-black/35 to-transparent"></div>
            
            <div className="relative p-7 text-white space-y-2 z-10">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#cce86b] block">
                Everyday Neighborhood Commerce
              </span>
              <h3 className="text-[22px] font-black leading-tight text-white tracking-tight">
                Real streets. Real people. Zero packaging waste.
              </h3>
              <p className="text-[13px] text-[#cbd8d0] leading-relaxed">
                When you discover locally on Anyble, buying an item is as simple as an evening stroll down your colony or stepping into an independent shop around the corner.
              </p>
            </div>
          </div>

          {/* 4 Differentiation Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            
            <div className="p-6 bg-white rounded-[24px] border border-[#dfe3dc] shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e9efdf] text-[#164b35] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-extrabold text-[#17211b] mb-1">
                  Minutes, not multi-day shipping
                </h4>
                <p className="text-[13px] text-[#68736c] leading-relaxed">
                  Why wait four days for a parcel truck? Request contact, meet a neighbor 400m away, inspect firsthand, and bring it home today.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#dfe3dc]/60 text-[11px] font-bold text-[#164b35]">
                Anyble vs 4-Day Transit
              </div>
            </div>

            <div className="p-6 bg-white rounded-[24px] border border-[#dfe3dc] shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#fceded] text-[#e87d45] flex items-center justify-center mb-4">
                  <PackageX className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-extrabold text-[#17211b] mb-1">
                  Inspect in person, zero returns
                </h4>
                <p className="text-[13px] text-[#68736c] leading-relaxed">
                  No misleading stock photos. Test the bike brakes, inspect the wood grain, and pay only when you are 100% satisfied.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#dfe3dc]/60 text-[11px] font-bold text-[#e87d45]">
                Direct Physical Confidence
              </div>
            </div>

            <div className="p-6 bg-white rounded-[24px] border border-[#dfe3dc] shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e9efdf] text-[#164b35] flex items-center justify-center mb-4">
                  <Store className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-extrabold text-[#17211b] mb-1">
                  Local shops get seen for ₹49
                </h4>
                <p className="text-[13px] text-[#68736c] leading-relaxed">
                  Independent bakeries, framers, and ceramic studios get affordable hyper-local visibility right on your lane.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#dfe3dc]/60 text-[11px] font-bold text-[#164b35]">
                Accessible Promotion
              </div>
            </div>

            <div className="p-6 bg-white rounded-[24px] border border-[#dfe3dc] shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e9efdf] text-[#164b35] flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-extrabold text-[#17211b] mb-1">
                  Keeps value in neighborhood
                </h4>
                <p className="text-[13px] text-[#68736c] leading-relaxed">
                  Zero commission taken by conglomerates. Your money stays within your locality and fosters real neighbor relationships.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#dfe3dc]/60 text-[11px] font-bold text-[#164b35]">
                Circular Economy
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
