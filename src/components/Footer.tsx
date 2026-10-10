import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnybleLogo } from './AnybleLogo';

interface FooterProps {
  onOpenGetApp: () => void;
  onOpenAdvertise: () => void;
  onOpenCareers: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenGetApp,
  onOpenAdvertise,
  onOpenCareers,
  onOpenContact,
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#101814] text-[#dbe3dd] py-[55px] pb-[25px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Footer Grid matching HTML specimen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-[30px]">
          
          {/* Logo & Description */}
          <div>
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 focus:outline-hidden"
              aria-label="Anyble Home"
            >
              <AnybleLogo theme="dark" size="md" />
            </a>

            <p className="text-[#9ca9a1] text-[13px] mt-[12px] max-w-[250px] leading-relaxed">
              A local-first marketplace for buying, selling, discovering and connecting.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-extrabold text-[14px] mb-[12px]">Product</h4>
            <div className="space-y-[8px] text-[13px]">
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#how-it-works');
                }}
                className="block text-[#9ca9a1] hover:text-white transition-colors"
              >
                How it works
              </a>
              <a
                href="#nearby"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#nearby');
                }}
                className="block text-[#9ca9a1] hover:text-white transition-colors"
              >
                Nearby
              </a>
              <a
                href="#for-businesses"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#for-businesses');
                }}
                className="block text-[#9ca9a1] hover:text-white transition-colors"
              >
                For businesses
              </a>
              <a
                href="#safety"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#safety');
                }}
                className="block text-[#9ca9a1] hover:text-white transition-colors"
              >
                Safety & trust
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.anyble.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#cce86b] font-bold hover:underline"
              >
                Google Play Store ↗
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-extrabold text-[14px] mb-[12px]">Company</h4>
            <div className="space-y-[8px] text-[13px]">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#about');
                }}
                className="block text-[#9ca9a1] hover:text-white transition-colors"
              >
                About us
              </a>
              <button
                onClick={onOpenCareers}
                className="block text-[#9ca9a1] hover:text-white transition-colors cursor-pointer text-left"
              >
                Careers
              </button>
              <button
                onClick={onOpenContact}
                className="block text-[#9ca9a1] hover:text-white transition-colors cursor-pointer text-left"
              >
                Contact
              </button>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#faq');
                }}
                className="block text-[#9ca9a1] hover:text-white transition-colors"
              >
                Help & FAQ
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-extrabold text-[14px] mb-[12px]">Legal</h4>
            <div className="space-y-[8px] text-[13px]">
              <button
                onClick={() => setActiveLegalModal('Privacy policy')}
                className="block text-[#9ca9a1] hover:text-white transition-colors cursor-pointer text-left"
              >
                Privacy policy
              </button>
              <button
                onClick={() => setActiveLegalModal('Terms')}
                className="block text-[#9ca9a1] hover:text-white transition-colors cursor-pointer text-left"
              >
                Terms
              </button>
              <button
                onClick={() => setActiveLegalModal('Community guidelines')}
                className="block text-[#9ca9a1] hover:text-white transition-colors cursor-pointer text-left"
              >
                Community guidelines
              </button>
              <button
                onClick={() => setActiveLegalModal('Advertising policy')}
                className="block text-[#9ca9a1] hover:text-white transition-colors cursor-pointer text-left"
              >
                Advertising policy
              </button>
            </div>
          </div>

        </div>

        {/* Foot Bottom matching HTML specimen */}
        <div className="border-t border-[#29342f] mt-[40px] pt-[20px] text-[#75827b] text-[12px] flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© 2026 Anyble. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Made for local discovery.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#9ca9a1] hover:text-white cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101814]/80 backdrop-blur-xs">
          <div className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-[24px] border border-[#dfe3dc] shadow-2xl space-y-4 text-[#17211b]">
            <div className="flex items-center justify-between pb-3 border-b border-[#dfe3dc]">
              <h3 className="text-lg font-bold text-[#17211b]">
                {activeLegalModal}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="text-stone-500 hover:text-stone-900 cursor-pointer font-bold text-sm"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-[#68736c] space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed">
              <p>
                <strong className="text-[#17211b]">Anyble Core Covenant:</strong> Anyble operates under strict local-first privacy and community safety standards.
              </p>
              <p>
                <strong className="text-[#17211b]">No Third-Party Brokers:</strong> We do not broker your personal phone number, browsing habits, or geolocation data to data brokers.
              </p>
              <p>
                <strong className="text-[#17211b]">Direct Handover Protocol:</strong> All personal peer-to-peer exchanges occur directly between verified neighbors. We strongly recommend public meeting spots during daylight hours and direct in-person payment via UPI or cash upon visual inspection.
              </p>
              <p>
                <strong className="text-[#17211b]">Advertising Integrity:</strong> The ₹49 promotion tier is reserved exclusively for registered local merchants, independent craftspersons, and micro-studios with verified physical neighborhood locations.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="btn btn-dark !py-2 !px-4 !text-xs"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
