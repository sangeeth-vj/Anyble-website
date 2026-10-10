import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { AnybleLogo } from './AnybleLogo';

interface NavbarProps {
  onOpenGetApp: () => void;
  onOpenAdvertise: () => void;
  onOpenCareers: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetApp,
  onOpenAdvertise,
  onOpenCareers,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f7f5ef]/90 backdrop-blur-md border-b border-[#dfe3dc] transition-colors">
      <div className="max-w-[1180px] w-[92%] mx-auto h-[76px] flex items-center justify-between">
        
        {/* Zone 1: Official App Wordmark with Purple Spark & Squircle Icon */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2 focus:outline-hidden"
          aria-label="Anyble Home"
        >
          <AnybleLogo size="md" />
        </a>

        {/* Zone 2: Links */}
        <nav className="hidden lg:flex items-center gap-[25px] text-[14px] font-semibold text-[#17211b]">
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#how-it-works');
            }}
            className="hover:text-[#e87d45] transition-colors"
          >
            How it works
          </a>
          <a
            href="#nearby"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#nearby');
            }}
            className="hover:text-[#e87d45] transition-colors"
          >
            Nearby
          </a>
          <a
            href="#for-businesses"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#for-businesses');
            }}
            className="hover:text-[#e87d45] transition-colors"
          >
            Business
          </a>
          <a
            href="#safety"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#safety');
            }}
            className="hover:text-[#e87d45] transition-colors"
          >
            Safety
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#about');
            }}
            className="hover:text-[#e87d45] transition-colors"
          >
            About
          </a>
          <button
            onClick={onOpenCareers}
            className="hover:text-[#e87d45] transition-colors cursor-pointer text-left"
          >
            Careers
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-[#e87d45] transition-colors cursor-pointer text-left"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions matching HTML specimen buttons */}
        <div className="hidden sm:flex items-center gap-[10px]">
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#faq');
            }}
            className="btn btn-light !text-[14px] !py-[10px] !px-[19px]"
          >
            Help
          </a>
          <button
            onClick={onOpenGetApp}
            className="btn btn-dark !text-[14px] !py-[10px] !px-[20px]"
          >
            Get the app
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenGetApp}
            className="btn btn-dark !text-xs !py-2 !px-3.5"
          >
            Get app
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#17211b] hover:text-[#e87d45] rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f7f5ef] border-b border-[#dfe3dc] px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium text-stone-800">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="py-1 text-[#08241A] font-semibold"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#how-it-works');
              }}
              className="py-1 text-stone-700"
            >
              How It Works
            </a>
            <a
              href="#nearby"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#nearby');
              }}
              className="py-1 text-stone-700"
            >
              Nearby Discovery
            </a>
            <a
              href="#for-businesses"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#for-businesses');
              }}
              className="py-1 text-stone-700"
            >
              For Businesses (₹49)
            </a>
            <a
              href="#safety"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#safety');
              }}
              className="py-1 text-stone-700"
            >
              Safety & Trust
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="py-1 text-stone-700"
            >
              About Anyble
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faq');
              }}
              className="py-1 text-stone-700"
            >
              Help / FAQ
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCareers();
              }}
              className="text-left py-1 text-stone-700 cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left py-1 text-stone-700 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvertise();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-[#0D3728] border border-[#0D3728] rounded-xl cursor-pointer"
            >
              Promote Business for ₹49
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetApp();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#0D3728] rounded-xl cursor-pointer"
            >
              Get the App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
