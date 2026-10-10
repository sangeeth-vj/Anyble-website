import React from 'react';

interface FinalCtaProps {
  onOpenGetApp: () => void;
  onOpenAdvertise: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenGetApp, onOpenAdvertise }) => {
  return (
    <section className="py-[90px] bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="bg-[#164b35] text-white rounded-[32px] p-[55px] text-center shadow-lg relative overflow-hidden">
          
          <h2 className="text-[clamp(38px,6vw,66px)] tracking-[-3px] leading-none font-black text-white">
            Start with what's<br />around you.
          </h2>

          <p className="text-[#cbd8d0] text-[17px] max-w-[520px] mx-auto my-[18px] mb-[25px] leading-relaxed">
            Download Anyble and discover a different way to buy, sell and find local opportunities in your neighborhood.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.anyble.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime !text-[15px] !py-[13px] !px-[24px]"
            >
              Get the app →
            </a>

            <button
              onClick={onOpenGetApp}
              className="btn bg-[#285b46] text-white border border-[#47745f] hover:bg-[#346d55] !text-[14px]"
            >
              Scan QR / SMS
            </button>

            <button
              onClick={onOpenAdvertise}
              className="btn bg-transparent text-[#cbd8d0] border border-[#47745f] hover:text-white hover:bg-white/10 !text-[14px]"
            >
              Promote for ₹49
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2d5c47] flex flex-wrap items-center justify-center gap-5 text-xs text-[#cbd8d0]">
            <span>✓ 100% Free Peer-to-Peer</span>
            <span aria-hidden="true">·</span>
            <span>✓ Verified Phone Security</span>
            <span aria-hidden="true">·</span>
            <span>✓ Zero Take-Rate Commission</span>
          </div>

        </div>
      </div>
    </section>
  );
};
