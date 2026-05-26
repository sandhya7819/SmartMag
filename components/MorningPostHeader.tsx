"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, Bell, Youtube, ChevronDown, Plus, X, Globe, Milestone } from "lucide-react";

// Mega menu data for World category
const worldMegaData: Record<string, Array<{ title: string; url: string; img: string; date: string; score?: string }>> = {
  opinion: [
    {
      title: "Metro: Classical Music Plan at Some Stations for ‘More Soothing Journeys’",
      url: "/morning-post/metro-classical-music-plan",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/1766125eb688c592f17ce9325bf16862-450x327.jpeg",
      date: "Jan 16, 2021"
    },
    {
      title: "Extreme Cold Weather Makes Snow Removal Challenging in Edmonton in Year 2023",
      url: "/morning-post/extreme-cold-weather-snow-removal",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a5ba38ea3ce8e534051fb60d25b40db6-450x369.jpeg",
      date: "Jan 15, 2021"
    }
  ],
  tech: [
    {
      title: "Stanford’s Mobile Robot Can Learn From Humans to Cook, Clean, Do Laundry",
      url: "/morning-post/stanfords-mobile-robot-learns",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/04b14f3f5c9fbe2fac1ba38f7c8c6987-450x300.jpeg",
      date: "Jan 10, 2021"
    },
    {
      title: "OnePlus 12 Pro Will Focus on a Premium Build Over Camera Performance",
      url: "/morning-post/oneplus-12-pro-premium-build",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2021/01/569a9b21b79b7a25fa3333af1e144612-450x300.jpeg",
      date: "Jan 9, 2021"
    },
    {
      title: "Why Are iPhones More Expensive Than Most of The Android Phones?",
      url: "/morning-post/why-iphones-more-expensive",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2021/01/5fd48e89c0dba8fb3db8c5dc06a9c071-450x253.jpeg",
      date: "Jan 8, 2021"
    },
    {
      title: "Explore Latest Innovations for Your Retail Workers with Microsoft Teams",
      url: "/morning-post/explore-innovations-microsoft-teams",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/bf240241b47162fde1f22070c5e66f9f-450x300.jpeg",
      date: "Jan 8, 2021"
    }
  ],
  markets: [
    {
      title: "Markets Review: Indexes, Bonds, ETFs, Forex, Key Commodities",
      url: "/morning-post/review-post-points",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/6b05d1824ef595cbfcd83bb0bb30fba6-450x300.jpeg",
      date: "Jan 15, 2021",
      score: "9.1"
    },
    {
      title: "Red Sea Crisis: Oil Markets Make Contingency Plans for Weeks of Chaos",
      url: "/morning-post/red-sea-crisis-oil-markets",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2021/01/francesco-boncompagni-dEBvDbDH4P4-unsplash-450x300.jpg",
      date: "Jan 15, 2021"
    },
    {
      title: "FTSE 100 Live: What’s Moving UK Markets, Pound (GBP/USD); Retail Sales",
      url: "/morning-post/ftse-100-live-uk-markets",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2021/01/jamie-street-VP4WmibxvcY-unsplash-450x338.jpg",
      date: "Jan 15, 2021"
    },
    {
      title: "European Stocks Close Higher as Earnings Ramp Up; Watches of Switzerland Down 36%",
      url: "/morning-post/european-stocks-close-higher",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2021/01/oren-elbaz-Wf1opKy4iaI-unsplash-450x299.jpg",
      date: "Jan 14, 2021"
    }
  ]
};

// Mega menu data for Technology category
const techMegaData = [
  {
    title: "Rewiring the Brain: The Neural Code of Traumatic Memories",
    url: "/morning-post/rewiring-the-brain",
    img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/05e8d3749345658da25d0aaf8dedaa9f-450x253.jpeg",
    date: "Mar 11, 2022"
  },
  {
    title: "How T-Mobile is Winning 5G Race Around the World, an Analysis",
    url: "/morning-post/how-t-mobile-is-winning",
    img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/8393dcd293c071a97913c774f41d5694-450x313.jpeg",
    date: "Mar 11, 2022"
  },
  {
    title: "Kamay Ventures Invests in Sensify for Food Preservation Tech",
    url: "/morning-post/kamay-ventures-invests",
    img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a85181005fbac5d98c948f5813fb305d-450x282.jpeg",
    date: "Mar 11, 2022"
  },
  {
    title: "Japans Moon Rover Faces Power Crisis Just One Day into Lunar Mission",
    url: "/morning-post/japans-moon-rover-faces-power",
    img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/6e778db1db32676c0070efa76595ea57-450x338.jpeg",
    date: "Mar 11, 2022"
  },
  {
    title: "Google Home Tips & Tricks: Master your Nest Mini, Audio & Hub",
    url: "/morning-post/google-home-tips-tricks",
    img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/94a0f26b611b391370fb8ef48a54ed29-450x563.jpeg",
    date: "Jan 11, 2021",
    isVideo: true
  }
];

export default function MorningPostHeader() {
  const [activeWorldSubcat, setActiveWorldSubcat] = useState("opinion");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white relative z-40">
        
        {/* 1. Desktop Top Bar */}
        <div className="bg-white border-b border-gray-100 py-3 hidden lg:block">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[12px] font-extrabold uppercase tracking-wider text-gray-700 font-sans">
            
            {/* Navigation links */}
            <nav className="flex items-center gap-8 relative">
              <Link href="/morning-post" className="hover:text-[#3f51b5] transition-colors border-b-2 border-[#3f51b5] pb-0.5">Home</Link>
              
              {/* Features Dropdown Menu */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1 hover:text-[#3f51b5] transition-colors uppercase">
                  Features <ChevronDown size={12} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 shadow-2xl rounded-sm py-3 hidden group-hover:block z-50 animate-fade-in font-normal normal-case text-gray-800">
                  <a href="#" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#3f51b5] transition-colors font-bold text-[13px]">58+ Unique Demos</a>
                  <a href="#" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#3f51b5] transition-colors font-bold text-[13px]">Post Styles</a>
                  <a href="#" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#3f51b5] transition-colors font-bold text-[13px]">Category Layouts</a>
                  <a href="#" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#3f51b5] transition-colors font-bold text-[13px]">Header Styles</a>
                  <a href="#" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#3f51b5] transition-colors font-bold text-[13px]">bbPress Forums</a>
                  <a href="#" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#3f51b5] transition-colors font-bold text-[13px]">Google AMP</a>
                </div>
              </div>

              {/* World Mega Menu */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1 hover:text-[#3f51b5] transition-colors uppercase">
                  World <ChevronDown size={12} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                {/* Large Mega Menu Box */}
                <div className="absolute left-1/2 -translate-x-[200px] mt-2 w-[850px] bg-white border border-gray-100 shadow-2xl rounded-sm hidden group-hover:grid grid-cols-5 z-50 animate-fade-in text-gray-800 font-sans p-6 gap-6">
                  {/* Left sub-cats list */}
                  <div className="col-span-1 border-r border-gray-100 pr-4 space-y-1.5 flex flex-col justify-start">
                    {[
                      { key: "opinion", label: "Opinion" },
                      { key: "tech", label: "Featured Tech" },
                      { key: "markets", label: "Featured Markets" }
                    ].map((sub) => (
                      <button
                        key={sub.key}
                        onMouseEnter={() => setActiveWorldSubcat(sub.key)}
                        className={`text-left text-[13px] font-bold py-2 px-3 rounded-sm transition-all duration-200 ${
                          activeWorldSubcat === sub.key
                            ? "bg-[#3f51b5]/10 text-[#3f51b5] pl-4 border-l-2 border-[#3f51b5]"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                    <div className="pt-2 mt-2 border-t border-gray-50">
                      <Link href="#" className="text-[#3f51b5] font-bold text-[12px] hover:underline flex items-center gap-1">
                        View All <Globe size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Right 4-column articles */}
                  <div className="col-span-4 grid grid-cols-4 gap-4">
                    {worldMegaData[activeWorldSubcat]?.map((art, idx) => (
                      <div key={idx} className="space-y-2 group/card cursor-pointer">
                        <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100">
                          <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                          {art.score && (
                            <div className="absolute top-2 left-2 bg-[#3f51b5] text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded-sm">
                              ★ {art.score}
                            </div>
                          )}
                        </div>
                        <h4 className="text-[12px] font-bold leading-tight text-gray-900 group-hover/card:text-[#3f51b5] transition-colors line-clamp-3">
                          {art.title}
                        </h4>
                        <span className="text-[9px] text-gray-400 font-semibold">{art.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Politics link */}
              <Link href="#" className="hover:text-[#3f51b5] transition-colors">Politics</Link>

              {/* Technology Mega Menu */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1 hover:text-[#3f51b5] transition-colors uppercase">
                  Technology <ChevronDown size={12} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                {/* Large 5-column Mega Menu */}
                <div className="absolute left-1/2 -translate-x-[400px] mt-2 w-[1120px] bg-white border border-gray-100 shadow-2xl rounded-sm hidden group-hover:grid grid-cols-5 z-50 animate-fade-in text-gray-800 font-sans p-6 gap-5">
                  {techMegaData.map((art, idx) => (
                    <div key={idx} className="space-y-2.5 group/tcard cursor-pointer">
                      <div className="aspect-[16/11] overflow-hidden rounded-sm relative bg-gray-100">
                        <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover/tcard:scale-105 transition-transform duration-500" />
                        {art.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg text-[#3f51b5]">
                              ▶
                            </span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-[12px] font-extrabold leading-tight text-gray-900 group-hover/tcard:text-[#3f51b5] transition-colors line-clamp-3">
                        {art.title}
                      </h4>
                      <span className="text-[9px] text-gray-400 font-semibold">{art.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Markets link */}
              <Link href="#" className="hover:text-[#3f51b5] transition-colors">Markets</Link>

              {/* Buy Theme link */}
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="text-red-500 hover:text-red-600 transition-colors font-extrabold">Buy Theme</a>
            </nav>

            {/* Right date & search trigger */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 font-semibold font-mono">Monday, May 25, 2026</span>
              <button onClick={() => setIsSearchOpen(true)} className="text-gray-600 hover:text-black transition-colors" aria-label="Open Search">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Blue/Indigo Brand Bar */}
        <div className="bg-[#3f51b5] py-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#3f51b5] to-[#2d3b95] mix-blend-overlay"></div>
          <div className="container mx-auto max-w-[1200px] px-4 flex flex-row justify-between items-center relative z-10">
            
            {/* Social Icons (left) */}
            <div className="hidden lg:flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center" aria-label="Facebook"><Facebook size={15} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center" aria-label="Twitter"><Twitter size={15} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center" aria-label="Instagram"><Instagram size={15} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center" aria-label="Youtube"><Youtube size={15} /></a>
            </div>

            {/* Centered Typography Branding Logo */}
            <div className="flex-1 lg:flex-initial text-center lg:text-left flex justify-center">
              <Link href="/morning-post" className="text-center group inline-block">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase font-serif italic text-white leading-none">
                  MORNING<span className="text-blue-200">POST</span>
                </h1>
                <p className="text-[9px] font-bold text-blue-100 tracking-[0.45em] uppercase mt-2.5 opacity-90 font-sans">Global Perspective, Local Insights</p>
              </Link>
            </div>

            {/* Subscribe Button (right) */}
            <div className="hidden lg:block">
              <a href="http://eepurl.com/hq-3Xb" target="_blank" rel="noopener" className="bg-white text-[#3f51b5] px-6 py-3 text-[11px] font-black uppercase tracking-wider hover:bg-blue-50 transition-all rounded-sm shadow-xl flex items-center gap-2">
                <Bell size={13} className="text-[#3f51b5]" /> Subscribe Now
              </a>
            </div>

            {/* Mobile layout controls */}
            <div className="flex lg:hidden items-center gap-4">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-white hover:text-blue-200" aria-label="Open Search">
                <Search size={22} />
              </button>
              <button onClick={() => setIsMobileOpen(true)} className="p-2 text-white hover:text-blue-200" aria-label="Open menu">
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bottom Hot Topics Bar */}
        <div className="bg-[#f8f9fa] border-b border-gray-100 py-3.5">
          <div className="container mx-auto max-w-[1200px] px-4 flex items-center">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#3f51b5] uppercase tracking-wider whitespace-nowrap bg-[#3f51b5]/5 py-1 px-2.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              Hot Topics:
            </div>
            <div className="flex gap-7 text-[12px] font-bold text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide ml-5 flex-1 pr-4">
              <a href="#" className="hover:text-[#3f51b5] transition-colors">#TrumpTrial</a>
              <a href="#" className="hover:text-[#3f51b5] transition-colors">#Earthquake</a>
              <a href="#" className="hover:text-[#3f51b5] transition-colors">#StormIsha</a>
              <a href="#" className="hover:text-[#3f51b5] transition-colors">#AntiAbortion</a>
              <a href="#" className="hover:text-[#3f51b5] transition-colors">#SpaceXLaunch</a>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Search Popup Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <button onClick={() => setIsSearchOpen(false)} className="absolute top-6 right-6 text-white hover:text-gray-300 p-2" aria-label="Close search">
            <X size={28} />
          </button>
          <div className="w-full max-w-xl px-6 text-center">
            <form onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }} className="space-y-4">
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-3xl font-light py-2 text-center focus:outline-none focus:border-white transition-colors"
                autoFocus
              />
              <p className="text-[12px] text-gray-500 uppercase tracking-widest font-bold">Press Enter to search, or Esc to close</p>
            </form>
          </div>
        </div>
      )}

      {/* 5. Mobile Slide-In Navigation Drawer */}
      {isMobileOpen && (
        <>
          <div onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black/60 z-50 animate-fade-in lg:hidden"></div>
          <div className="fixed top-0 left-0 bottom-0 w-[300px] bg-[#0c1015] z-50 p-6 flex flex-col justify-between text-white animate-slide-in lg:hidden">
            <div>
              {/* Drawer Top */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <h2 className="font-serif italic font-extrabold text-xl tracking-tight">MORNING<span className="text-blue-400">POST</span></h2>
                <button onClick={() => setIsMobileOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>

              {/* Mobile links list */}
              <nav className="flex flex-col gap-5 text-md font-bold uppercase tracking-wider">
                <Link onClick={() => setIsMobileOpen(false)} href="/morning-post" className="hover:text-blue-400 transition-colors">Home</Link>
                <div className="flex justify-between items-center hover:text-blue-400 transition-colors cursor-pointer">
                  <span>Features</span>
                  <Plus size={16} />
                </div>
                <div className="flex justify-between items-center hover:text-blue-400 transition-colors cursor-pointer">
                  <span>World</span>
                  <Plus size={16} />
                </div>
                <Link onClick={() => setIsMobileOpen(false)} href="#" className="hover:text-blue-400 transition-colors">Politics</Link>
                <div className="flex justify-between items-center hover:text-blue-400 transition-colors cursor-pointer">
                  <span>Technology</span>
                  <Plus size={16} />
                </div>
                <Link onClick={() => setIsMobileOpen(false)} href="#" className="hover:text-blue-400 transition-colors">Markets</Link>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Widgets */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <h4 className="text-[11px] font-black text-gray-500 tracking-wider uppercase">Subscribe to Updates</h4>
                <p className="text-[12px] text-gray-400 leading-relaxed">Get the latest creative news from FooBar about art, design and business.</p>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 pt-2">
                  <input type="email" placeholder="Your email..." className="bg-white/10 border border-white/10 rounded-sm px-3 py-2 text-xs flex-1 focus:outline-none focus:bg-white focus:text-black placeholder:text-gray-500" />
                  <button className="bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-blue-700">Sub</button>
                </form>
              </div>
              
              <div className="flex gap-4 justify-center pt-2">
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter"><Twitter size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Youtube"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
