import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LocalDiscovery } from './components/LocalDiscovery';
import { MainFeatures } from './components/MainFeatures';
import { NearbyExperience } from './components/NearbyExperience';
import { HowItWorks } from './components/HowItWorks';
import { BusinessSection } from './components/BusinessSection';
import { SafetyAndTrust } from './components/SafetyAndTrust';
import { PersonalizationSection } from './components/PersonalizationSection';
import { AppExperience } from './components/AppExperience';
import { AboutSection } from './components/AboutSection';
import { CommunityStories } from './components/CommunityStories';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { GetAppModal } from './components/Modals/GetAppModal';
import { AdvertiseModal } from './components/Modals/AdvertiseModal';
import { ContactModal } from './components/Modals/ContactModal';
import { CareersModal } from './components/Modals/CareersModal';

export default function App() {
  const [getAppModalOpen, setGetAppModalOpen] = useState(false);
  const [advertiseModalOpen, setAdvertiseModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#17211b] flex flex-col font-sans selection:bg-[#cce86b] selection:text-[#17211b]">
      
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        onOpenGetApp={() => setGetAppModalOpen(true)}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        onOpenCareers={() => setCareersModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. HERO */}
        <Hero
          onExploreApp={() => setGetAppModalOpen(true)}
          onSeeHowItWorks={() => scrollToSection('how-it-works')}
        />

        {/* 2. LOCAL DISCOVERY */}
        <LocalDiscovery />

        {/* 3. MAIN FEATURES */}
        <MainFeatures onExploreApp={() => setGetAppModalOpen(true)} />

        {/* 4. NEARBY EXPERIENCE (Interactive Simulator) */}
        <NearbyExperience onOpenGetApp={() => setGetAppModalOpen(true)} />

        {/* 5. HOW IT WORKS (01 Discover, 02 Filter, 03 Connect, 04 Meet) */}
        <HowItWorks onOpenGetApp={() => setGetAppModalOpen(true)} />

        {/* 6. BUSINESS SECTION (₹49 Promotion) */}
        <BusinessSection onOpenAdvertise={() => setAdvertiseModalOpen(true)} />

        {/* 7. SAFETY & TRUST */}
        <SafetyAndTrust onOpenContact={() => setContactModalOpen(true)} />

        {/* 8. PERSONALIZATION (User Control) */}
        <PersonalizationSection />

        {/* 9. APP EXPERIENCE (Interactive Mockup Tabs) */}
        <AppExperience onOpenGetApp={() => setGetAppModalOpen(true)} />

        {/* 10. ABOUT */}
        <AboutSection />

        {/* 11. COMMUNITY / STORIES */}
        <CommunityStories />

        {/* 12. FAQ */}
        <FaqSection onOpenContact={() => setContactModalOpen(true)} />

        {/* 13. FINAL CTA */}
        <FinalCta
          onOpenGetApp={() => setGetAppModalOpen(true)}
          onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        />
      </main>

      {/* 14. FOOTER */}
      <Footer
        onOpenGetApp={() => setGetAppModalOpen(true)}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
        onOpenCareers={() => setCareersModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <GetAppModal
        isOpen={getAppModalOpen}
        onClose={() => setGetAppModalOpen(false)}
      />

      <AdvertiseModal
        isOpen={advertiseModalOpen}
        onClose={() => setAdvertiseModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <CareersModal
        isOpen={careersModalOpen}
        onClose={() => setCareersModalOpen(false)}
      />

    </div>
  );
}
