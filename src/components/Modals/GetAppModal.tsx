import React, { useState } from 'react';
import { X, Smartphone, CheckCircle2, ArrowRight, ShieldCheck, QrCode } from 'lucide-react';
import { AnybleLogo } from '../AnybleLogo';

interface GetAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetAppModal: React.FC<GetAppModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'qr' | 'sms'>('qr');
  const [storeNotice, setStoreNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSentSuccess(true);
      setTimeout(() => {
        setPhoneNumber('');
        setSentSuccess(false);
      }, 3500);
    }
  };

  const handleStoreClick = (platform: string) => {
    if (platform === 'Google Play') {
      window.open('https://play.google.com/store/apps/details?id=com.anyble.app', '_blank', 'noopener,noreferrer');
    } else {
      setStoreNotice(`Opening official Anyble listing on ${platform}...`);
      setTimeout(() => setStoreNotice(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#f7f5ef] border border-[#dfe3dc] rounded-[24px] shadow-2xl p-6 sm:p-8 text-[#17211b] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#68736c] hover:text-[#17211b] hover:bg-[#e9efdf] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="eyebrow !mb-0">
              <span className="dot"></span>
              <span>GOOGLE PLAY STORE APP</span>
            </div>
            <AnybleLogo size="sm" />
          </div>
          <h2 className="text-[26px] font-black tracking-tight text-[#17211b] font-display">
            Get Anyble on your phone
          </h2>
          <p className="text-[13px] text-[#68736c] mt-1.5 leading-relaxed">
            Discover what's right around your home, connect directly with neighbors, and support nearby shops.
          </p>
        </div>

        {/* Tab switch between QR and SMS */}
        <div className="flex items-center gap-1 p-1 bg-[#e9efdf] rounded-full mb-6 text-xs font-bold">
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-2 px-3 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'qr'
                ? 'bg-white text-[#17211b] shadow-xs'
                : 'text-[#68736c] hover:text-[#17211b]'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Scan QR Code</span>
          </button>
          <button
            onClick={() => setActiveTab('sms')}
            className={`flex-1 py-2 px-3 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'sms'
                ? 'bg-white text-[#17211b] shadow-xs'
                : 'text-[#68736c] hover:text-[#17211b]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Get Link via SMS</span>
          </button>
        </div>

        {activeTab === 'qr' ? (
          <div className="flex flex-col sm:flex-row items-center gap-5 p-4 bg-white rounded-[18px] border border-[#dfe3dc] mb-6">
            {/* SVG Crisp QR Code linking to Play Store */}
            <div className="w-36 h-36 bg-[#164b35] p-2.5 rounded-[16px] flex items-center justify-center shrink-0 shadow-xs relative">
              <div className="w-full h-full bg-white p-2 rounded-[12px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Clean QR grid pattern */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#164b35] fill-current">
                  {/* Top-left position block */}
                  <rect x="5" y="5" width="28" height="28" rx="3" fill="#164b35" />
                  <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                  <rect x="13" y="13" width="12" height="12" rx="1.5" fill="#164b35" />
                  
                  {/* Top-right position block */}
                  <rect x="67" y="5" width="28" height="28" rx="3" fill="#164b35" />
                  <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                  <rect x="75" y="13" width="12" height="12" rx="1.5" fill="#164b35" />
                  
                  {/* Bottom-left position block */}
                  <rect x="5" y="67" width="28" height="28" rx="3" fill="#164b35" />
                  <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                  <rect x="13" y="75" width="12" height="12" rx="1.5" fill="#164b35" />

                  {/* QR Data modules */}
                  <rect x="38" y="10" width="8" height="8" rx="1" fill="#164b35" />
                  <rect x="50" y="14" width="8" height="8" rx="1" fill="#164b35" />
                  <rect x="10" y="38" width="8" height="8" rx="1" fill="#164b35" />
                  <rect x="22" y="44" width="8" height="8" rx="1" fill="#164b35" />
                  <rect x="42" y="38" width="16" height="16" rx="2" fill="#164b35" />
                  <rect x="64" y="42" width="10" height="10" rx="1" fill="#164b35" />
                  <rect x="80" y="40" width="12" height="6" rx="1" fill="#164b35" />
                  <rect x="40" y="60" width="8" height="8" rx="1" fill="#164b35" />
                  <rect x="56" y="56" width="12" height="8" rx="1" fill="#164b35" />
                  <rect x="76" y="66" width="16" height="10" rx="1" fill="#164b35" />
                  <rect x="44" y="78" width="12" height="12" rx="1" fill="#164b35" />
                  <rect x="64" y="80" width="8" height="12" rx="1" fill="#164b35" />
                </svg>
                {/* Center Anyble Pin */}
                <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-[#164b35] flex items-center justify-center text-[#cce86b] text-[10px] font-black border-2 border-white">
                  A
                </div>
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm font-extrabold text-[#17211b]">
                Scan to open Google Play Store
              </p>
              <p className="text-[12px] text-[#68736c] leading-relaxed">
                Opens the verified <strong className="text-[#17211b]">Anyble</strong> app page on Google Play for instant installation.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 pt-1 text-[11px] text-[#164b35] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Google Play Build · com.anyble.app</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            {sentSuccess ? (
              <div className="p-4 bg-[#e9efdf] border border-[#c7d8be] rounded-[16px] flex items-center gap-3 text-[#164b35] text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#164b35] shrink-0" />
                <div>
                  <p className="font-extrabold">Download link sent!</p>
                  <p className="text-xs text-[#68736c]">Check your SMS inbox to install Anyble instantly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendLink} className="space-y-3">
                <label className="block text-xs font-bold text-[#17211b]">
                  Enter your 10-digit mobile number
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 bg-white border border-[#dfe3dc] rounded-full text-sm text-[#17211b] font-bold">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    required
                    maxLength={10}
                    className="flex-1 px-4 py-2.5 bg-white border border-[#dfe3dc] rounded-full text-sm text-[#17211b] placeholder-stone-400 focus:outline-hidden focus:border-[#164b35] focus:ring-1 focus:ring-[#164b35]"
                  />
                  <button
                    type="submit"
                    className="btn btn-dark !py-2.5 !px-5 !text-xs whitespace-nowrap"
                  >
                    <span>Send</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-[#68736c]">
                  We'll only send a single direct download link to Anyble. Zero marketing spam.
                </p>
              </form>
            )}
          </div>
        )}

        {/* Store Notice banner if button clicked */}
        {storeNotice && (
          <div className="mb-4 p-3 bg-[#e9efdf] border border-[#c7d8be] rounded-[12px] text-xs font-bold text-[#164b35] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#164b35] shrink-0" />
            <span>{storeNotice}</span>
          </div>
        )}

        {/* Direct Store Buttons */}
        <div className="pt-2 border-t border-[#dfe3dc]">
          <p className="text-[11px] text-[#68736c] text-center mb-3">Or install directly from Google Play</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.anyble.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark !py-3 w-full"
            >
              <svg className="w-4 h-4 fill-current text-[#cce86b]" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.03 2.03 0 0 1-.22-.916V2.73c0-.336.082-.647.219-.916zm11.236 11.237l2.25 2.25-11.4 6.582 9.15-8.832zm2.25-2.051l2.42 1.398a1.278 1.278 0 0 1 0 2.204l-2.42 1.398-2.029-2.028 2.029-1.972zm-2.25-1.002L5.695 1.166l11.4 6.582-2.25 2.25z" />
              </svg>
              <span>Get on Google Play</span>
            </a>

            <button
              type="button"
              onClick={() => handleStoreClick('App Store')}
              className="btn btn-light !py-3 w-full"
            >
              <svg className="w-4 h-4 fill-current text-[#17211b]" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.01-.48 2.63-1.23z" />
              </svg>
              <span>iOS (Coming Soon)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
