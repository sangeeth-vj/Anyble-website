import React from 'react';
import { Search, Heart, Bell, Plus, PhoneCall, User, Home, MapPin, SlidersHorizontal } from 'lucide-react';
import flowerPotsImg from '../assets/images/nearbuy_flower_pots_1791536449733.jpg';
import tshirtImg from '../assets/images/nearbuy_black_tshirt_1791536476944.jpg';
import bikeImg from '../assets/images/anyble_commuter_bike_1791535829216.jpg';
import booksImg from '../assets/images/nearbuy_bookstore_owner_1791488312883.jpg';

// Safe image component that guarantees the phone mockup image never breaks:
// 1. First tries the imported asset from Vite
// 2. If that fails, tries the public folder URL
// 3. If that fails, shows a graceful placeholder graphic
const SafePhoneImage: React.FC<{
  src: string;
  publicFallback: string;
  alt: string;
  className?: string;
}> = ({ src, publicFallback, alt, className = 'w-full h-full object-cover' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      onError={(e) => {
        const target = e.currentTarget;
        if (!target.dataset.triedPublic) {
          target.dataset.triedPublic = 'true';
          target.src = publicFallback;
        } else if (!target.dataset.triedFallback) {
          target.dataset.triedFallback = 'true';
          // Neutral green SVG placeholder so it never shows a broken icon
          target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='%23e7ede4'/><circle cx='80' cy='80' r='24' fill='%23164b35' opacity='0.25'/></svg>";
        }
      }}
    />
  );
};

interface HeroProps {
  onExploreApp: () => void;
  onSeeHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreApp, onSeeHowItWorks }) => {
  return (
    <section id="home" className="py-[70px] pb-[45px] overflow-hidden bg-[#f7f5ef]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-[50px] items-center">
          
          {/* Left Column: Editorial Value Proposition matching HTML */}
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              <span>A marketplace built around your neighbourhood</span>
            </div>

            <h1 className="text-[clamp(44px,6.5vw,80px)] leading-[0.96] tracking-[-3.5px] font-black text-[#17211b] max-w-[720px]">
              What you need might already be <em className="not-italic text-[#164b35]">nearby.</em>
            </h1>

            <p className="text-[18px] text-[#68736c] max-w-[570px] my-6 leading-relaxed">
              Buy, sell and discover useful things from people around you. Anyble brings local discovery, simple contact and optional personalized recommendations into one place.
            </p>

            {/* Hero Buttons */}
            <div className="flex gap-3 flex-wrap items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.anyble.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <span>Explore the app →</span>
              </a>

              <button
                onClick={onSeeHowItWorks}
                className="btn btn-light"
              >
                See how it works
              </button>
            </div>

            {/* Trust statement matching HTML specimen */}
            <div className="flex gap-5 flex-wrap mt-6 text-[13px] text-[#68736c]">
              <span>✓ <b className="text-[#17211b]">Local-first</b></span>
              <span>✓ <b className="text-[#17211b]">Direct contact</b></span>
              <span>✓ <b className="text-[#17211b]">Your choice</b></span>
            </div>
          </div>

          {/* Right Column: Rotated Phone Visual with Floater Card */}
          <div className="relative min-h-[520px] flex items-center justify-center lg:justify-end">
            
            {/* Playful tilted phone matching HTML specimen */}
            <div className="relative w-[285px] h-[550px] bg-[#111] border-[9px] border-[#111] rounded-[40px] shadow-[0_25px_70px_rgba(25,56,43,0.22)] overflow-hidden lg:rotate-3 transition-transform duration-300 hover:rotate-0">
              
              {/* Dynamic Island Pill */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30"></div>

              {/* Screen Content */}
              <div className="h-full bg-[#f5f3ec] p-[16px] pt-7 flex flex-col justify-between font-sans text-[#17211b] select-none">
                
                <div>
                  <div className="flex justify-between items-center text-[11px] font-extrabold text-[#17211b]">
                    <span>9:41</span>
                    <span className="tracking-widest">•••</span>
                  </div>

                  <div className="text-[23px] font-black tracking-[-1px] my-3 mt-4 text-[#17211b] flex items-center justify-between">
                    <span>Good morning 👋</span>
                    <div className="flex items-center gap-1.5 text-stone-600">
                      <Heart className="w-4 h-4 text-stone-700" />
                      <Bell className="w-4 h-4 text-stone-700" />
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-white border border-[#dfe3dc] p-[10px] rounded-[13px] text-[#68736c] text-[12px] flex items-center gap-2 shadow-2xs">
                    <Search className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">Search nearby items</span>
                  </div>

                  {/* Mini-map illustration */}
                  <div className="h-[95px] my-3 rounded-[17px] bg-gradient-to-br from-[#d7e7c8] via-[#e5eed5] to-[#f2dfbb] relative border border-[#dfe3dc]/80 overflow-hidden shadow-2xs">
                    {/* Simulated road grid */}
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#164b35_1px,transparent_1px)] [background-size:12px_12px]"></div>
                    {/* Pulsing Proximity Pin */}
                    <div className="absolute left-[42%] top-[35%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-7 h-7 rounded-full bg-[#164b35] text-white flex items-center justify-center text-[10px] font-black shadow-md border-2 border-white animate-pulse">
                        ⌖
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[9px] font-bold text-[#164b35] shadow-2xs flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>Indiranagar · 1.4 km radius</span>
                    </div>
                  </div>

                  {/* 4 Authentic Products Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    
                    {/* Product 1 */}
                    <div className="bg-white rounded-[14px] p-2 border border-[#dfe3dc]/70 shadow-2xs">
                      <div className="h-[76px] rounded-[10px] overflow-hidden bg-stone-100">
                        <SafePhoneImage
                          src={flowerPotsImg}
                          publicFallback="/assets/images/nearbuy_flower_pots_1791536449733.jpg"
                          alt="Flower pots"
                        />
                      </div>
                      <small className="block mt-1 font-extrabold text-[11px] text-[#17211b] truncate">Flower pots</small>
                      <span className="text-[10px] text-[#68736c] font-semibold">₹300 · 0.8 km</span>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white rounded-[14px] p-2 border border-[#dfe3dc]/70 shadow-2xs">
                      <div className="h-[76px] rounded-[10px] overflow-hidden bg-stone-100">
                        <SafePhoneImage
                          src={tshirtImg}
                          publicFallback="/assets/images/nearbuy_black_tshirt_1791536476944.jpg"
                          alt="Active T-shirt"
                        />
                      </div>
                      <small className="block mt-1 font-extrabold text-[11px] text-[#17211b] truncate">Active T-shirt</small>
                      <span className="text-[10px] text-[#68736c] font-semibold">₹450 · 1.2 km</span>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white rounded-[14px] p-2 border border-[#dfe3dc]/70 shadow-2xs">
                      <div className="h-[76px] rounded-[10px] overflow-hidden bg-stone-100">
                        <SafePhoneImage
                          src={bikeImg}
                          publicFallback="/assets/images/anyble_commuter_bike_1791535829216.jpg"
                          alt="Motorbike"
                        />
                      </div>
                      <small className="block mt-1 font-extrabold text-[11px] text-[#17211b] truncate">Motorbike</small>
                      <span className="text-[10px] text-[#68736c] font-semibold">₹38,000 · 2.5 km</span>
                    </div>

                    {/* Product 4 */}
                    <div className="bg-white rounded-[14px] p-2 border border-[#dfe3dc]/70 shadow-2xs">
                      <div className="h-[76px] rounded-[10px] overflow-hidden bg-stone-100">
                        <SafePhoneImage
                          src={booksImg}
                          publicFallback="/assets/images/nearbuy_bookstore_owner_1791488312883.jpg"
                          alt="Book bundle"
                        />
                      </div>
                      <small className="block mt-1 font-extrabold text-[11px] text-[#17211b] truncate">Book bundle</small>
                      <span className="text-[10px] text-[#68736c] font-semibold">₹250 · 0.4 km</span>
                    </div>

                  </div>
                </div>

                {/* Bottom App Nav */}
                <div className="pt-2 border-t border-[#dfe3dc] grid grid-cols-4 gap-1 text-center text-[9px] font-bold text-[#68736c]">
                  <div className="text-[#164b35] flex flex-col items-center">
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Requests</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <User className="w-3.5 h-3.5" />
                    <span>Profile</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floater Badge matching HTML specimen */}
            <div className="float-card absolute left-2 lg:-left-6 bottom-8 z-20 max-w-[215px]">
              <b className="text-[13px] text-[#17211b] font-extrabold">Near you · 1.4 km</b>
              <small className="block text-[11px] text-[#68736c] font-medium mt-1 leading-snug">
                4 new items match your interests today.
              </small>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
