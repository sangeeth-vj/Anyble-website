import React, { useState } from 'react';
import { Smartphone, Home, Search, Plus, PhoneCall, User, Heart, Bell, MapPin, ArrowRight, Check, SlidersHorizontal, BookOpen, Laptop, Shirt, Bed, Home as HomeIcon, Briefcase, Wrench, Trophy, Gift, Car, Clock, Star, Settings, ChevronRight, Package, CheckCircle2 } from 'lucide-react';
import { AnybleLogo } from './AnybleLogo';

interface AppExperienceProps {
  onOpenGetApp: () => void;
}

type TabType = 'home' | 'search' | 'details' | 'requests' | 'sell' | 'profile';

export const AppExperience: React.FC<AppExperienceProps> = ({ onOpenGetApp }) => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [requestedContact, setRequestedContact] = useState(false);
  const [requestsSubTab, setRequestsSubTab] = useState<'received' | 'sent'>('sent');

  const tabList = [
    {
      id: 'home' as TabType,
      label: 'Home Feed',
      tagline: 'Set location, categories & nearby listings',
      description: 'Pinpoint your pincode, explore curated categories, and discover freshest items on the platform.',
    },
    {
      id: 'search' as TabType,
      label: 'Search & Categories',
      tagline: '10 dedicated local categories',
      description: 'Browse Books, Electronics, Fashion, Furniture, Home & Garden, Jobs, Services, Sports, Toys & Vehicles.',
    },
    {
      id: 'details' as TabType,
      label: 'Request Contact',
      tagline: 'Protected phone privacy system',
      description: 'View seller profile, location pincode, and tap "Request Contact" to get seller phone numbers after approval.',
    },
    {
      id: 'requests' as TabType,
      label: 'Requests Dashboard',
      tagline: 'Received & Sent request tracking',
      description: 'Review incoming buyer requests and track pending approvals with real-time status updates.',
    },
    {
      id: 'sell' as TabType,
      label: 'Post for Free',
      tagline: '3-Step friction-free listing',
      description: 'Step 1: Category, Step 2: Photos, Step 3: Details. Give unused things a second life in 60 seconds.',
    },
    {
      id: 'profile' as TabType,
      label: 'Neighbor Profile',
      tagline: 'Trust, ratings & listings',
      description: 'Track your Active listings, Sold items, Star reviews, and Saved wishlist with transparent reputation.',
    },
  ];

  return (
    <section className="py-[85px] bg-[#e5edda] text-[#17211b] overflow-hidden">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Header matching HTML specimen */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">
            <span className="dot"></span>
            <span>THE APP EXPERIENCE</span>
          </div>
          <h2 className="text-[clamp(36px,5vw,58px)] leading-none tracking-[-2px] font-black text-[#17211b]">
            A marketplace that learns what you care about—only if you let it.
          </h2>
          <p className="text-[#68736c] text-[16px] my-4 leading-relaxed">
            Personalized recommendations can help you find relevant products without making the entire experience feel automated. Click through the six screens below.
          </p>

          {/* Checklist with HTML tick circles */}
          <div className="grid gap-[10px] my-5">
            <div className="flex items-center gap-3 text-[14px] font-bold text-[#17211b]">
              <span className="tick-circle">✓</span>
              <span>Choose your interests</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] font-bold text-[#17211b]">
              <span className="tick-circle">✓</span>
              <span>Get relevant recommendations</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] font-bold text-[#17211b]">
              <span className="tick-circle">✓</span>
              <span>Switch personalization off whenever you want</span>
            </div>
          </div>
        </div>

        {/* Interactive Layout: Tabs on left, Phone in middle/right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Tab Selector List (6 columns) */}
          <div className="lg:col-span-6 space-y-2.5">
            {tabList.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3.5 rounded-[18px] border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-white border-[#164b35] ring-2 ring-[#164b35]/20 shadow-xs'
                      : 'bg-white/70 border-[#c5d5ba] hover:bg-white'
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                    isActive ? 'bg-[#164b35] text-[#cce86b]' : 'bg-[#e5edda] text-[#164b35]'
                  }`}>
                    {tab.id === 'home' && <Home className="w-4 h-4" />}
                    {tab.id === 'search' && <Search className="w-4 h-4" />}
                    {tab.id === 'details' && <PhoneCall className="w-4 h-4" />}
                    {tab.id === 'requests' && <Clock className="w-4 h-4" />}
                    {tab.id === 'sell' && <Plus className="w-4 h-4" />}
                    {tab.id === 'profile' && <User className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-extrabold ${isActive ? 'text-[#164b35]' : 'text-[#17211b]'}`}>
                        {tab.label}
                      </h3>
                      {isActive && (
                        <span className="text-[10px] font-bold text-[#164b35] bg-[#cce86b]/40 px-2 py-0.5 rounded-full uppercase">
                          Viewing in App
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#68736c] mt-0.5 leading-snug">
                      {tab.description}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.anyble.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <span>See the app →</span>
              </a>

              <button
                onClick={onOpenGetApp}
                className="btn btn-light"
              >
                Scan QR / SMS Link
              </button>
            </div>
          </div>

          {/* Interactive Mobile Phone Mockup (6 columns) */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="relative w-full max-w-[340px] bg-[#0E1A14] p-3.5 rounded-[44px] shadow-2xl border-4 border-stone-800/80">
              
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <span className="text-[9px] text-white font-mono">1:42</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A3828]"></span>
              </div>

              {/* Screen Body */}
              <div className="relative bg-[#FAFAFC] rounded-[34px] overflow-hidden pt-8 pb-2 text-[#15271E] flex flex-col h-[610px] shadow-inner font-sans">
                
                {/* 1. SCREEN: HOME */}
                {activeTab === 'home' && (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="px-4 pb-2 bg-white border-b border-stone-100">
                      <div className="flex items-center gap-1 text-[10px] text-stone-500">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>Set location</span>
                        <span className="text-[8px]">▼</span>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <AnybleLogo size="sm" />
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-stone-700" />
                          <Bell className="w-4 h-4 text-stone-700" />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between bg-stone-100/90 rounded-full px-3 py-1.5 text-xs">
                        <span className="text-stone-400 text-[11px] truncate">Search for anything...</span>
                        <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[9px] font-bold text-stone-800 border border-stone-200">
                          <SlidersHorizontal className="w-2.5 h-2.5" /> Filter
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-3.5 py-2.5 space-y-3">
                      <div className="bg-[#FFF1EB] border border-[#FED7AA] rounded-xl p-2.5 flex justify-between items-center gap-2">
                        <div className="space-y-1 flex-1">
                          <p className="text-xs font-bold text-stone-900 leading-tight">Got things you don't use?</p>
                          <p className="text-[10px] text-stone-600">Give them a second life.</p>
                          <span className="inline-block mt-0.5 px-2 py-0.5 bg-white text-[9px] font-bold text-stone-900 rounded-full border border-stone-200">
                            Post for free →
                          </span>
                        </div>
                        <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 shadow-2xs border border-[#FED7AA]/60">
                          <img
                            src="/assets/images/anyble_banner_lifestyle_1791535966109.jpg"
                            alt="Preloved goods"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-bold text-stone-900">Recently listed</span>
                          <span className="text-[10px] text-stone-500">See all &gt;</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2 rounded-xl border border-stone-200 space-y-1">
                            <div className="w-full h-20 bg-stone-100 rounded-lg overflow-hidden">
                              <img
                                src="/assets/images/nearbuy_flower_pots_1791536449733.jpg"
                                alt="Flower pot"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <span className="text-xs font-bold block tabular-nums">₹150</span>
                            <p className="text-[10px] font-bold truncate">Flower pot</p>
                            <p className="text-[8px] text-stone-500">Ottappunna · 4 Sep</p>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-stone-200 space-y-1">
                            <div className="w-full h-20 bg-stone-100 rounded-lg overflow-hidden">
                              <img
                                src="/assets/images/anyble_commuter_bike_1791535829216.jpg"
                                alt="Commuter Motorbike"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <span className="text-xs font-bold block tabular-nums">₹30,000</span>
                            <p className="text-[10px] font-bold truncate">Motorbike</p>
                            <p className="text-[8px] text-stone-500">Viyyakurissi · 2 Sep</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. SCREEN: SEARCH & CATEGORIES */}
                {activeTab === 'search' && (
                  <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in duration-150">
                    <div className="px-4 py-2 bg-white border-b border-stone-100 flex items-center gap-2">
                      <div className="flex-1 flex items-center justify-between bg-stone-100 rounded-full px-3 py-1.5 text-xs">
                        <span className="text-stone-700 text-[11px] font-medium">Search listings...</span>
                        <SlidersHorizontal className="w-3 h-3 text-stone-600" />
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 mb-2">Browse categories</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[
                            { name: 'Books', icon: BookOpen },
                            { name: 'Electronics', icon: Laptop },
                            { name: 'Fashion', icon: Shirt },
                            { name: 'Furniture', icon: Bed },
                            { name: 'Home & Garden', icon: HomeIcon },
                            { name: 'Jobs', icon: Briefcase },
                            { name: 'Services', icon: Wrench },
                            { name: 'Sports', icon: Trophy },
                            { name: 'Toys & Kids', icon: Gift },
                            { name: 'Vehicles', icon: Car },
                          ].map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <div key={cat.name} className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-stone-200 shadow-2xs">
                                <div className="w-7 h-7 rounded-lg bg-[#FAF5EE] flex items-center justify-center text-stone-700">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[11px] font-medium text-stone-800">{cat.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. SCREEN: PRODUCT DETAILS & REQUEST CONTACT */}
                {activeTab === 'details' && (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
                      <div className="w-full h-36 bg-stone-100 rounded-xl overflow-hidden relative shadow-2xs border border-stone-200">
                        <img
                          src="/assets/images/nearbuy_black_tshirt_1791536476944.jpg"
                          alt="Sport Activewear T-shirt"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full shadow-2xs">
                          <Heart className="w-3.5 h-3.5 text-stone-700" />
                        </button>
                      </div>

                      <div className="space-y-1">
                        <span className="text-2xl font-black text-stone-900 tabular-nums">₹200</span>
                        <h3 className="text-base font-bold text-stone-900">T shirt</h3>
                        <div className="flex items-center gap-2 pt-0.5">
                          <span className="px-2 py-0.5 bg-stone-100 text-stone-700 text-[10px] rounded-full font-medium">Fashion</span>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] rounded-full font-bold">Brand New</span>
                          <span className="text-[10px] text-stone-400">28d ago</span>
                        </div>
                      </div>

                      {/* Seller Card */}
                      <div className="p-2.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                            F
                          </div>
                          <div>
                            <span className="text-xs font-bold text-stone-900 block">Faseen</span>
                            <span className="text-[10px] text-amber-600 font-semibold">★★★★★ 5.0 (2)</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-stone-100 text-stone-800 font-semibold px-2 py-1 rounded-full border border-stone-200">
                          View profile
                        </span>
                      </div>

                      {/* Description & Location */}
                      <div className="text-xs space-y-1 pt-1">
                        <span className="font-bold text-stone-900 block">Description</span>
                        <p className="text-stone-600 text-[11px]">Good product. Breathable cotton athletic fit.</p>
                      </div>

                      <div className="text-xs space-y-1 pt-1">
                        <span className="font-bold text-stone-900 block">Location</span>
                        <div className="flex items-center justify-between text-[11px] text-stone-700">
                          <span className="flex items-center gap-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                            Pallippadi, Karimba
                          </span>
                          <span className="font-mono bg-stone-100 px-1.5 py-0.5 rounded text-stone-600 font-semibold">678597</span>
                        </div>
                      </div>
                    </div>

                    {/* Sticky Bottom "Request Contact" Bar */}
                    <div className="p-3 bg-white border-t border-stone-200">
                      <button
                        onClick={() => setRequestedContact(!requestedContact)}
                        className="w-full p-3 bg-black text-white rounded-2xl flex items-center justify-between hover:bg-stone-900 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 text-left">
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                            <PhoneCall className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-bold block">
                              {requestedContact ? 'Contact Requested!' : 'Request Contact'}
                            </span>
                            <span className="text-[10px] text-stone-300 block">
                              {requestedContact ? 'Sent to Faseen for approval' : "Get seller's phone number after approval"}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. SCREEN: REQUESTS DASHBOARD */}
                {activeTab === 'requests' && (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="px-4 py-2 bg-white border-b border-stone-100 text-center">
                      <h3 className="text-base font-bold text-stone-900 font-display">Requests</h3>
                      <div className="mt-2 flex bg-stone-100 p-0.5 rounded-xl text-xs font-medium">
                        <button
                          onClick={() => setRequestsSubTab('received')}
                          className={`flex-1 py-1.5 rounded-lg ${requestsSubTab === 'received' ? 'bg-white text-black shadow-xs font-bold' : 'text-stone-500'}`}
                        >
                          Received (0)
                        </button>
                        <button
                          onClick={() => setRequestsSubTab('sent')}
                          className={`flex-1 py-1.5 rounded-lg ${requestsSubTab === 'sent' ? 'bg-white text-black shadow-xs font-bold' : 'text-stone-500'}`}
                        >
                          Sent (1)
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                      {requestsSubTab === 'sent' ? (
                        <div className="bg-white p-3.5 rounded-2xl border border-stone-200 space-y-3 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                                T
                              </div>
                              <div>
                                <span className="text-xs font-bold text-stone-900 block">Test1</span>
                                <span className="text-[10px] text-stone-400">1d ago</span>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 bg-stone-100 text-stone-700 text-[10px] rounded-full font-semibold flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5 text-stone-500" />
                              Pending
                            </span>
                          </div>

                          <div className="p-2 bg-stone-50 rounded-xl flex items-center gap-2.5">
                            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-stone-200">
                              <img
                                src="/assets/images/nearbuy_flower_pots_1791536449733.jpg"
                                alt="Flower pot"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-stone-900">Flower pot</p>
                              <p className="text-[11px] font-bold text-[#0D3728]">₹150</p>
                            </div>
                          </div>

                          <button className="w-full py-1.5 bg-stone-100 text-stone-800 text-[11px] font-semibold rounded-lg border border-stone-200">
                            View profile
                          </button>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-stone-400 text-xs">
                          No pending requests received yet.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 5. SCREEN: POST FOR FREE (3-STEP SELL) */}
                {activeTab === 'sell' && (
                  <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in duration-150">
                    <div className="px-4 py-2 bg-white border-b border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-900">What are you selling?</span>
                      <span className="text-[11px] text-stone-400">Cancel</span>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                      {/* Step Indicator */}
                      <div className="flex items-center justify-between text-[11px] font-bold text-stone-600 px-2">
                        <div className="flex items-center gap-1.5 text-black">
                          <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">1</span>
                          <span>Category</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-400">
                          <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-[10px]">2</span>
                          <span>Photos</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-400">
                          <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-[10px]">3</span>
                          <span>Details</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-stone-500 mb-2">Choose the most relevant category</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[
                            { name: 'Books', icon: BookOpen },
                            { name: 'Electronics', icon: Laptop },
                            { name: 'Fashion', icon: Shirt, active: true },
                            { name: 'Furniture', icon: Bed },
                            { name: 'Home & Garden', icon: HomeIcon },
                            { name: 'Jobs', icon: Briefcase },
                          ].map((c) => {
                            const Icon = c.icon;
                            return (
                              <div
                                key={c.name}
                                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 ${
                                  c.active
                                    ? 'bg-stone-50 border-black ring-1 ring-black'
                                    : 'bg-white border-stone-200'
                                }`}
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#FAF5EE] flex items-center justify-center text-stone-800">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-stone-900 text-xs">{c.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white border-t border-stone-200">
                      <button className="w-full py-2.5 bg-black text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 6. SCREEN: PROFILE */}
                {activeTab === 'profile' && (
                  <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in duration-150">
                    <div className="px-4 py-2 bg-white border-b border-stone-100 flex items-center justify-between">
                      <h3 className="text-base font-bold text-stone-900 font-display">Profile</h3>
                      <Settings className="w-4 h-4 text-stone-700" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {/* Avatar and name */}
                      <div className="text-center space-y-1">
                        <div className="w-16 h-16 rounded-full bg-[#0D3728] text-white border-2 border-stone-200 mx-auto flex items-center justify-center font-bold text-lg font-display relative shadow-xs">
                          <span>SV</span>
                          <span className="absolute bottom-0 right-0 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[10px] ring-2 ring-white">
                            ✓
                          </span>
                        </div>
                        <h4 className="text-sm font-black text-stone-900 mt-1">Sangeeth VJ</h4>
                        <p className="text-[10px] text-stone-400">sangeethvj2007@gmail.com</p>
                        <p className="text-[10px] text-amber-600 font-semibold">☆☆☆☆☆ 0.0 (0 reviews)</p>
                      </div>

                      {/* Stats Card */}
                      <div className="p-3 bg-white rounded-2xl border border-stone-200 grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="flex flex-col items-center">
                          <Package className="w-3.5 h-3.5 text-stone-500 mb-0.5" />
                          <span className="font-bold text-stone-900 block mt-0.5">0</span>
                          <span className="text-[10px] text-stone-500">Active</span>
                        </div>
                        <div className="border-x border-stone-100 flex flex-col items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-stone-500 mb-0.5" />
                          <span className="font-bold text-stone-900 block mt-0.5">0</span>
                          <span className="text-[10px] text-stone-500">Sold</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Star className="w-3.5 h-3.5 text-stone-500 mb-0.5" />
                          <span className="font-bold text-stone-900 block mt-0.5">0</span>
                          <span className="text-[10px] text-stone-500">Reviews</span>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="bg-white rounded-2xl border border-stone-200 divide-y divide-stone-100 text-xs font-semibold text-stone-800">
                        <div className="p-3 flex items-center justify-between">
                          <span>My Listings</span>
                          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                        <div className="p-3 flex items-center justify-between">
                          <span>Saved Listings</span>
                          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                        <div className="p-3 flex items-center justify-between">
                          <span>Reviews</span>
                          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                        <div className="p-3 flex items-center justify-between">
                          <span>Help & Support</span>
                          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom App Navigation Bar (Always visible) */}
                <div className="px-3 pt-2 pb-1 border-t border-stone-200 bg-white grid grid-cols-5 gap-1 items-center text-center text-[9px] text-stone-600">
                  <button
                    onClick={() => setActiveTab('home')}
                    className={`flex flex-col items-center cursor-pointer ${activeTab === 'home' ? 'text-black font-bold' : ''}`}
                  >
                    <Home className="w-4 h-4" />
                    <span className="mt-0.5">Home</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('search')}
                    className={`flex flex-col items-center cursor-pointer ${activeTab === 'search' ? 'text-black font-bold' : ''}`}
                  >
                    <Search className="w-4 h-4" />
                    <span className="mt-0.5">Search</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('sell')}
                    className="flex flex-col items-center -mt-3 cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('requests')}
                    className={`flex flex-col items-center cursor-pointer ${activeTab === 'requests' ? 'text-black font-bold' : ''}`}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span className="mt-0.5">Requests</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex flex-col items-center cursor-pointer ${activeTab === 'profile' ? 'text-black font-bold' : ''}`}
                  >
                    <User className="w-4 h-4" />
                    <span className="mt-0.5">Profile</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

