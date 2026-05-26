"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, X, PinIcon, ChevronDown, BookOpen, Film, Heart } from "lucide-react";

// Mega menu data
const megaMenuTV = [
  {
    title: "Behind the Scenes Look at Stacy Martin's Venice Film Festival Stunning Looks",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_390584698_xl-2015-1-450x300.jpg",
    cat: "Drama"
  },
  {
    title: "Chris Hardwick and Lydia Hearst Welcome First Child, Daughter Dimity",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_171618968_xl-2015-1-450x344.jpg",
    cat: "Celebrities"
  },
  {
    title: "Eiza Gonzalez celebrates volunteers for Women's Day",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_354759992_XL-1-450x360.jpg",
    cat: "TV"
  },
  {
    title: "Two Yellowstone Stars Weigh In on Costner Behind-the-Scene Rumors",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_152152322_xl-2015-1-450x293.jpg",
    cat: "Drama"
  },
  {
    title: "Law Roach Says He's Not 'Breaking Up' with Zendaya",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_332310054_xl-2015-1-450x360.jpg",
    cat: "Celebrities"
  }
];

const megaMenuFitness = [
  {
    title: "What are the Top Sodium Food Sources in the United States?",
    date: "Nov 19, 2022",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_360174566_xl-2015-2-450x247.jpg",
    cat: "Food & Diet"
  },
  {
    title: "Boost Your Health and Fitness This Weekend with These Tips",
    date: "Jan 19, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/shutterstock_390729346-1-768x512.jpg",
    cat: "Workout"
  },
  {
    title: "Why is Nutrition Important in Overall Physical Fitness?",
    date: "Jan 18, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/nathan-dumlao-kVv8rucgGtc-unsplash-1-450x675.jpg",
    cat: "Supplements"
  },
  {
    title: "Top Five Fitness Trends to Help You Rejuvenate Your Health",
    date: "Jan 17, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/fighting-thinker_t20_x606YX-768x511.jpg",
    cat: "Workout"
  },
  {
    title: "Core Strength Benefits and Exercises to Improve Your Workout",
    date: "Jan 16, 2021",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/amol-sonar-wMZx-PVUg5Y-unsplash-450x300.jpg",
    cat: "Workout"
  }
];

const hotTopics = ["Demos", "Top Picks", "Featured", "Contact", "Buy Now"];

export default function FridayMagHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  return (
    <header className="w-full font-[var(--font-public-sans,system-ui,sans-serif)] select-none">
      {/* Row 1: Main Nav (light/white) */}
      <div className="bg-white border-b border-gray-100 relative">
        <div className="max-w-[1200px] mx-auto px-[35px] flex items-center justify-between h-14">
          
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-800 hover:text-[#2ab391] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-0 h-full">
            <Link
              href="/friday-mag"
              className="px-4 h-14 flex items-center text-[13px] font-black uppercase tracking-wider text-gray-800 hover:text-[#2ab391] transition-colors border-r border-gray-100 first:border-l first:border-gray-100"
            >
              Home
            </Link>

            {/* Features Dropdown */}
            <div className="relative group h-full flex items-center border-r border-gray-100">
              <span className="px-4 h-14 flex items-center text-[13px] font-black uppercase tracking-wider text-gray-800 hover:text-[#2ab391] transition-colors gap-0.5 cursor-pointer">
                Features <ChevronDown size={12} className="mt-0.5" />
              </span>
              <ul className="absolute top-full left-0 w-60 bg-white border border-gray-100 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[90] rounded-sm">
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">58+ Unique Demos</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">Post Styles</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">Category Layouts</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">Header Styles</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">Homepage Blocks</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">Featured Grids / Sliders</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">12+ Premium Widgets</Link></li>
                <li><Link href="/friday-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#2ab391]">Shop / WooCommerce</Link></li>
              </ul>
            </div>

            {/* TV & Drama Mega Menu */}
            <div 
              className="relative h-full flex items-center border-r border-gray-100"
              onMouseEnter={() => setActiveMega("tv")}
              onMouseLeave={() => setActiveMega(null)}
            >
              <span className="px-4 h-14 flex items-center text-[13px] font-black uppercase tracking-wider text-gray-800 hover:text-[#2ab391] transition-colors gap-0.5 cursor-pointer">
                TV & Drama <ChevronDown size={12} className="mt-0.5" />
              </span>
              {activeMega === "tv" && (
                <div className="absolute top-full left-[-150px] w-[950px] bg-white border border-gray-100 p-6 shadow-2xl z-[90] rounded-sm transition-all duration-300">
                  <div className="grid grid-cols-5 gap-4">
                    {megaMenuTV.map((post, idx) => (
                      <div key={idx} className="group/item space-y-2 cursor-pointer">
                        <div className="aspect-[3/2] overflow-hidden bg-gray-50 relative rounded-[4px]">
                          <img 
                            src={post.img} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[#2ab391] text-[10px] font-black uppercase tracking-widest">{post.cat}</span>
                          <h4 className="text-[12px] font-bold text-gray-800 leading-snug line-clamp-3 group-hover/item:text-[#2ab391] transition-colors">
                            {post.title}
                          </h4>
                          <div className="text-[9px] text-gray-400 font-medium">{post.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/friday-mag"
              className="px-4 h-14 flex items-center text-[13px] font-black uppercase tracking-wider text-gray-800 hover:text-[#2ab391] transition-colors border-r border-gray-100"
            >
              Technology
            </Link>

            {/* Health & Fitness Mega Menu */}
            <div 
              className="relative h-full flex items-center border-r border-gray-100"
              onMouseEnter={() => setActiveMega("fitness")}
              onMouseLeave={() => setActiveMega(null)}
            >
              <span className="px-4 h-14 flex items-center text-[13px] font-black uppercase tracking-wider text-gray-800 hover:text-[#2ab391] transition-colors gap-0.5 cursor-pointer">
                Health & Fitness <ChevronDown size={12} className="mt-0.5" />
              </span>
              {activeMega === "fitness" && (
                <div className="absolute top-full right-[-200px] w-[950px] bg-white border border-gray-100 p-6 shadow-2xl z-[90] rounded-sm transition-all duration-300">
                  <div className="grid grid-cols-5 gap-4">
                    {megaMenuFitness.map((post, idx) => (
                      <div key={idx} className="group/item space-y-2 cursor-pointer">
                        <div className="aspect-[3/2] overflow-hidden bg-gray-50 relative rounded-[4px]">
                          <img 
                            src={post.img} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[#2ab391] text-[10px] font-black uppercase tracking-widest">{post.cat}</span>
                          <h4 className="text-[12px] font-bold text-gray-800 leading-snug line-clamp-3 group-hover/item:text-[#2ab391] transition-colors">
                            {post.title}
                          </h4>
                          <div className="text-[9px] text-gray-400 font-medium">{post.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/friday-mag"
              className="px-4 h-14 flex items-center text-[13px] font-black uppercase tracking-wider text-gray-800 hover:text-[#2ab391] transition-colors border-r border-gray-100"
            >
              Buy Theme
            </Link>
          </nav>

          {/* Right: search icon */}
          <button
            className="flex items-center gap-2 text-gray-500 hover:text-[#2ab391] transition-colors ml-auto"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Row 2: Branding (dark) */}
      <div className="bg-[#0A0F15]">
        <div className="max-w-[1200px] mx-auto px-[35px] flex items-center justify-between py-6">
          {/* Left: social icons */}
          <div className="flex items-center gap-4">
            <a href="http://facebook.com/themesphere" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="http://twitter.com/Theme_Sphere" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Pinterest">
              <PinIcon size={16} />
            </a>
          </div>

          {/* Center: Logo */}
          <Link href="/friday-mag" className="flex-shrink-0">
            {/* Using the actual high-res image from the live site */}
            <img
              src="https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Logo-FridayMag-01@2x.png"
              alt="FridayMag"
              width={220}
              height={56}
              className="h-[52px] w-auto object-contain"
              onError={(e) => {
                // Fallback text logo mimicking the Fr.dayMag brand
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  e.currentTarget.style.display = "none";
                  const container = document.createElement("div");
                  container.className = "flex items-center text-white text-3xl font-black tracking-tight";
                  container.innerHTML = '<span>Fr</span><span class="text-[#f5ba43]">.</span><span>day</span><span class="text-[#2ab391] ml-0.5">Mag</span>';
                  parent.appendChild(container);
                }
              }}
            />
          </Link>

          {/* Right: Subscribe button - Yellow accent to match live site / screenshot */}
          <a
            href="#"
            className="bg-[#f5ba43] hover:bg-white text-black px-6 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all rounded-[3px]"
          >
            Subscribe Now
          </a>
        </div>
      </div>

      {/* Row 3: Hot Topics bar (white/light) */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-[35px] flex items-center justify-start h-10 gap-0">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#f5ba43] mr-4 shrink-0">HOT TOPICS</span>
          <nav className="flex items-center overflow-x-auto scrollbar-hide py-1">
            {hotTopics.map((item, i) => (
              <Link
                key={item}
                href="#"
                className={`px-3.5 text-[12px] font-semibold text-gray-700 hover:text-[#2ab391] transition-colors whitespace-nowrap ${i === 0 ? "text-[#2ab391]" : ""}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-start justify-center pt-24">
          <div className="bg-white w-full max-w-2xl mx-4 rounded-sm shadow-2xl">
            <div className="flex items-center px-6 py-4 border-b border-gray-100">
              <Search size={20} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search articles..."
                autoFocus
                className="flex-1 text-lg outline-none text-gray-800 font-semibold"
              />
              <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-black ml-3">
                <X size={22} />
              </button>
            </div>
            <div className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Type to search articles, categories and more...</div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0A0F15] z-[100] flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img
              src="https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Logo-FridayMag-01@2x.png"
              alt="FridayMag"
              className="h-10 w-auto"
            />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
            {["Home", "Features", "TV & Drama", "Technology", "Health & Fitness", "Buy Theme"].map((label) => (
              <Link
                key={label}
                href="#"
                className="block px-4 py-3 text-white text-base font-semibold border-b border-white/5 hover:text-[#2ab391] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-6 flex gap-4 border-t border-white/5">
            <a href="#" className="text-white/60 hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="text-white/60 hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="text-white/60 hover:text-white"><Instagram size={18} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
