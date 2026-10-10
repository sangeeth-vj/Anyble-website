import React, { useState } from 'react';
import { Sparkles, Shield, RefreshCw } from 'lucide-react';

export const PersonalizationSection: React.FC = () => {
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [purgedMessage, setPurgedMessage] = useState(false);

  const handlePurge = () => {
    setPurgedMessage(true);
    setTimeout(() => setPurgedMessage(false), 2500);
  };

  return (
    <section className="py-[85px] bg-[#f7f5ef] border-b border-[#dfe3dc]/80">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              <span>OPTIONAL ON-DEVICE INTELLIGENCE</span>
            </div>
            <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-[#17211b]">
              Your taste is yours.<br />Always in your hands.
            </h2>
          </div>
          <p className="text-[#68736c] text-[16px] max-w-[430px] leading-relaxed">
            Most platforms secretly track browsing across websites to build ad dossiers. Anyble treats recommendations as a private tool that is off by default.
          </p>
        </div>

        {/* Interactive Personalization Toggle Card */}
        <div className="bg-white rounded-[24px] border border-[#dfe3dc] p-6 sm:p-9 shadow-sm max-w-4xl">
          
          {/* Top Interactive Switch */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-7 border-b border-[#dfe3dc] gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="text-[18px] font-black text-[#17211b]">
                  Local Interest Personalization
                </span>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wide ${
                  isPersonalized ? 'bg-[#164b35] text-[#cce86b]' : 'bg-[#e9efdf] text-[#17211b]'
                }`}>
                  {isPersonalized ? 'Active (Opted-in)' : 'Standard (Disabled)'}
                </span>
              </div>
              <p className="text-[13px] text-[#68736c] max-w-xl">
                {isPersonalized
                  ? 'Your feed highlights categories you frequently view (e.g., ceramics, cameras) while keeping strict neighborhood proximity sorting.'
                  : 'Pure chronological & distance sorting. No interest weighting or category prioritization applied.'}
              </p>
            </div>

            {/* Toggle Switch Button */}
            <button
              onClick={() => setIsPersonalized(!isPersonalized)}
              className={`relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                isPersonalized ? 'bg-[#164b35]' : 'bg-[#dfe3dc]'
              }`}
              role="switch"
              aria-checked={isPersonalized}
              aria-label="Toggle personalization setting"
            >
              <span
                className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  isPersonalized ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Interactive Simulation Display */}
          <div className="py-6">
            <p className="text-[11px] font-black text-[#68736c] uppercase tracking-wider mb-3">
              How your feed behaves in this mode:
            </p>

            {isPersonalized ? (
              <div className="p-5 bg-[#e9efdf]/60 border border-[#c7d8be] rounded-[18px] space-y-3.5 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black text-[#164b35]">
                    <Sparkles className="w-4 h-4 text-[#164b35]" />
                    <span>Personalized Mode: Relevant items highlighted nearby</span>
                  </div>
                  <button
                    onClick={handlePurge}
                    className="text-xs text-[#164b35] underline hover:text-[#0f3626] font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset stored profile</span>
                  </button>
                </div>
                {purgedMessage && (
                  <p className="text-xs bg-[#164b35] text-white p-2.5 rounded-[12px] font-bold">
                    Local interest cache purged successfully.
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-white rounded-[14px] border border-[#dfe3dc]">
                    <span className="text-[10px] text-[#164b35] font-black uppercase tracking-wider block">Learned Affinity</span>
                    <span className="font-extrabold text-[#17211b] mt-0.5 block">Handmade Pottery</span>
                    <span className="text-[11px] text-[#68736c] mt-1 block">Surfaced Clay & Co. Planters (350 m away)</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-[14px] border border-[#dfe3dc]">
                    <span className="text-[10px] text-[#164b35] font-black uppercase tracking-wider block">Learned Affinity</span>
                    <span className="font-extrabold text-[#17211b] mt-0.5 block">Mechanical Tech</span>
                    <span className="text-[11px] text-[#68736c] mt-1 block">Surfaced Keychron K2 (1.8 km away)</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-[14px] border border-[#dfe3dc]">
                    <span className="text-[10px] text-[#164b35] font-black uppercase tracking-wider block">Storage Location</span>
                    <span className="font-extrabold text-[#17211b] mt-0.5 block">100% On-Device</span>
                    <span className="text-[11px] text-[#68736c] mt-1 block">Never leaves your smartphone</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-[#faf9f5] border border-[#dfe3dc] rounded-[18px] space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-[#17211b]">
                  <Shield className="w-4 h-4 text-[#164b35]" />
                  <span>Standard Mode: Zero taste profiles stored</span>
                </div>
                <p className="text-[13px] text-[#68736c] leading-relaxed">
                  Anyble only uses your physical location coordinates to display listings strictly ordered from nearest to farthest (e.g. 250m, 400m, 800m). No clicks, dwell times, or search terms are used to profile you.
                </p>
              </div>
            )}
          </div>

          {/* Three Non-Negotiable Privacy Guarantees */}
          <div className="pt-6 border-t border-[#dfe3dc] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <span className="text-[11px] font-black text-[#e87d45] tracking-wider block uppercase mb-1">
                01. No Trackers
              </span>
              <h4 className="font-extrabold text-[#17211b] text-[15px] mb-1">
                Zero Third Parties
              </h4>
              <p className="text-[#68736c] leading-relaxed">
                We do not integrate Facebook Pixel, ad broker SDKs, or external marketing telemetry.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-black text-[#e87d45] tracking-wider block uppercase mb-1">
                02. Architecture
              </span>
              <h4 className="font-extrabold text-[#17211b] text-[15px] mb-1">
                On-Device Only
              </h4>
              <p className="text-[#68736c] leading-relaxed">
                If enabled, taste preferences are calculated directly on your phone, not in remote ad databases.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-black text-[#e87d45] tracking-wider block uppercase mb-1">
                03. Control
              </span>
              <h4 className="font-extrabold text-[#17211b] text-[15px] mb-1">
                One-Click Erasure
              </h4>
              <p className="text-[#68736c] leading-relaxed">
                A single tap in app settings wipes all local browsing history and restarts in raw chronological mode.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
