import React, { useState } from 'react';
import { Compass, Navigation, SlidersHorizontal, MapPin, Eye, Check } from 'lucide-react';
import { NEARBY_PRODUCTS } from '../data/mockData';
import { ProductListing } from '../types';

interface NearbyExperienceProps {
  onOpenGetApp: () => void;
}

export const NearbyExperience: React.FC<NearbyExperienceProps> = ({ onOpenGetApp }) => {
  const [maxRadiusMeters, setMaxRadiusMeters] = useState<number>(1500);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<ProductListing>(NEARBY_PRODUCTS[0]);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  // Filter listings based on radius and category
  const filteredProducts = NEARBY_PRODUCTS.filter((product: ProductListing) => {
    const matchesRadius = product.distanceMeters <= maxRadiusMeters;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesRadius && matchesCategory;
  });

  const handleCopyContact = (product: ProductListing) => {
    setCopiedContact(product.id);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  return (
    <section id="nearby" className="py-[85px] bg-[#164b35] text-white overflow-hidden">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Header matching HTML specimen */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] items-start sm:items-end mb-[35px]">
          <div>
            <div className="inline-flex gap-2 items-center bg-[#285b46] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#cce86b] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#cce86b]"></span>
              <span>Living Proximity View</span>
            </div>
            <h2 className="text-[clamp(34px,5vw,54px)] leading-none tracking-[-2px] font-black text-white">
              Imagine opening the app<br />and looking around.
            </h2>
          </div>
          <p className="text-[#cbd8d0] text-[16px] max-w-[430px] leading-relaxed">
            Not an endless catalogue. A living view of useful things, people and businesses around you.
          </p>
        </div>

        {/* Featured 2-Card Showcase matching HTML specimen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-12">
          
          {/* Card 1: Things with a second life */}
          <article className="bg-[#285b46] border border-[#47745f] rounded-[24px] p-[22px] transition-transform duration-200 hover:-translate-y-1">
            <div className="h-[240px] rounded-[18px] relative overflow-hidden flex items-end p-[15px] shadow-inner">
              <img
                src="/assets/images/nearbuy_flower_pots_1791536449733.jpg"
                alt="Second life terracotta planters"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="bg-white text-[#17211b] py-1.5 px-3 rounded-full text-xs font-black shadow-xs">
                  Popular nearby
                </span>
                <span className="text-[#cce86b] font-black text-sm bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                  1.4 km
                </span>
              </div>
            </div>
            <h3 className="text-[24px] font-extrabold text-white mt-[18px] mb-[6px] tracking-tight">
              Things with a second life.
            </h3>
            <p className="text-[#cbd8d0] text-[14px] leading-relaxed">
              Furniture, electronics, books, bikes and more—from people who no longer need them.
            </p>
          </article>

          {/* Card 2: Local business */}
          <article className="bg-[#285b46] border border-[#47745f] rounded-[24px] p-[22px] transition-transform duration-200 hover:-translate-y-1">
            <div className="h-[240px] rounded-[18px] relative overflow-hidden flex items-end p-[15px] shadow-inner">
              <img
                src="/assets/images/nearbuy_bookstore_owner_1791488312883.jpg"
                alt="Independent neighborhood bookstore"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="bg-white text-[#17211b] py-1.5 px-3 rounded-full text-xs font-black shadow-xs">
                  Local business
                </span>
                <span className="text-[#cce86b] font-black text-sm bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                  2.0 km
                </span>
              </div>
            </div>
            <h3 className="text-[24px] font-extrabold text-white mt-[18px] mb-[6px] tracking-tight">
              Discover what's around.
            </h3>
            <p className="text-[#cbd8d0] text-[14px] leading-relaxed">
              Local stores and services can reach nearby customers without needing a giant advertising budget.
            </p>
          </article>

        </div>

        {/* Interactive Radius Controls Bar */}
        <div className="p-5 sm:p-6 bg-[#214e3b] rounded-[22px] border border-[#3b6b55] shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          
          {/* Radius Selector */}
          <div className="space-y-2 flex-1 max-w-md">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#cbd8d0] flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#cce86b]" />
                Interactive Discovery Radius:
              </span>
              <span className="font-mono text-sm font-black text-[#cce86b] tabular-nums">
                {maxRadiusMeters < 1000 ? `${maxRadiusMeters} m` : `${(maxRadiusMeters / 1000).toFixed(1)} km`}
              </span>
            </div>
            
            <input
              type="range"
              min="500"
              max="2500"
              step="250"
              value={maxRadiusMeters}
              onChange={(e) => setMaxRadiusMeters(Number(e.target.value))}
              aria-label="Filter radius"
              className="w-full accent-[#cce86b] cursor-pointer h-2 bg-[#164b35] rounded-lg"
            />

            <div className="flex justify-between text-[11px] text-[#9db2a5] font-mono">
              <span>500 m (6 min walk)</span>
              <span>1.5 km (colony radius)</span>
              <span>2.5 km (neighborhood)</span>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-[#164b35] rounded-xl overflow-x-auto border border-[#2d5c47]">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'home', label: 'Home & Garden' },
              { id: 'fashion', label: 'Fashion' },
              { id: 'vehicles', label: 'Vehicles' },
              { id: 'books', label: 'Books' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#cce86b] text-[#17211b] shadow-xs'
                    : 'text-[#cbd8d0] hover:text-white hover:bg-[#285b46]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Live Filtered Products Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveItem(product)}
              className="bg-[#285b46] border border-[#47745f] rounded-[20px] p-3 text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#cce86b] cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-[150px] rounded-[14px] overflow-hidden bg-black/20 relative">
                  <img
                    src={product.imageUrl || '/assets/images/nearbuy_flower_pots_1791536449733.jpg'}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-[#cce86b] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                    {product.distance}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-white tabular-nums">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-[#cbd8d0] uppercase font-bold">{product.condition}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1 mt-0.5">{product.title}</h4>
                  <p className="text-[11px] text-[#9db2a5] truncate">{product.location}</p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#3b6b55] flex items-center justify-between text-[11px]">
                <span className="text-[#cbd8d0]">Seller: {product.sellerName}</span>
                <span className="text-[#cce86b] font-bold">Request Contact →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-5 bg-[#285b46] border border-[#47745f] rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#cce86b] text-[#17211b] flex items-center justify-center font-black text-lg">
              ⌖
            </span>
            <div>
              <p className="text-sm font-extrabold text-white">Want to browse all 300+ live listings in your PIN code?</p>
              <p className="text-xs text-[#cbd8d0]">Open Anyble to explore interactive pins, maps and instant chat.</p>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.anyble.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lime shrink-0"
          >
            Open in Google Play →
          </a>
        </div>

      </div>
    </section>
  );
};
