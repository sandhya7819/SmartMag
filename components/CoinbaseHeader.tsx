"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react";

// X (Twitter) Icon Component
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const TECH_MEGA_POSTS = [
  {
    title: "Bitcoin Climbs as Elon Musk Says Tesla ‘Likely’ to Accept it Again",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/03/Depositphotos_328674290_xl-2015-1-300x200.jpg",
    d: "Mar 16, 2021",
    href: "/coinbase"
  },
  {
    title: "Can Cryptocurrency Be Hacked, Stolen Or Scammed? How Can You Be Safe?",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/02/Depositphotos_56545139_xl-2015-1-450x332.jpg",
    d: "Feb 11, 2021",
    href: "/coinbase"
  },
  {
    title: "How Investors Can Get In On Crypto Without Actually Buying Any",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_168713846_xl-2015-1-450x297.jpg",
    d: "Feb 4, 2021",
    href: "/coinbase"
  },
  {
    title: "Ethereum Just Underwent a Major Change – Hence, The 25% Jump in a Week!",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_174889758_xl-2015-1-450x244.jpg",
    d: "Feb 4, 2021",
    href: "/coinbase"
  },
  {
    title: "HSBC Becomes Latest Bank to Suspend Payments to Crypto Clients",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_353861418_xl-2015-1-450x284.jpg",
    d: "Feb 4, 2021",
    href: "/coinbase"
  }
];

const BUSINESS_MEGA_POSTS = [
  {
    title: "Warren Buffett-Backed Brazilian Crypto Bank Plans $2B IPO",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/02/Depositphotos_433967254_xl-2015-1-450x300.jpg",
    d: "Feb 3, 2021",
    href: "/coinbase"
  },
  {
    title: "NCR Buys Cryptocurrency ATM Firm LibertyX – A Big Deal",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_130306336_xl-2015-1-450x300.jpg",
    d: "Feb 1, 2021",
    href: "/coinbase"
  },
  {
    title: "Crypto Payment Systems Have Increased Over 70% This Year",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_178035294_xl-2015-1-300x177.jpg",
    d: "Feb 1, 2021",
    href: "/coinbase"
  },
  {
    title: "Bitcoin, Ether Lower Whereas XRP, Litecoin Gain",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_168183508_xl-2015-1-300x169.jpg",
    d: "Feb 1, 2021",
    href: "/coinbase"
  },
  {
    title: "Millennials Are Quitting Job to Become Day Traders",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/Depositphotos_402408846_xl-2015-1-300x200.jpg",
    d: "Jan 20, 2021",
    href: "/coinbase"
  }
];

const SIDEBAR_HOT_POSTS = [
  {
    title: "Bitcoin Climbs as Elon Musk Says Tesla ‘Likely’ to Accept it Again",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/03/Depositphotos_328674290_xl-2015-1-300x200.jpg",
    d: "Mar 16, 2021"
  },
  {
    title: "XRP Price Chart ‘Double Bottom’ Puts Next Bullish Target at $1",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/03/Depositphotos_471848636_xl-2015-1-300x169.jpg",
    d: "Mar 16, 2021"
  },
  {
    title: "Fidelity Buys 7.4% Of Bitcoin Mining Company Marathon Digital Holdings",
    img: "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/02/Depositphotos_50133523_xl-2015-1-300x185.jpg",
    d: "Feb 11, 2021"
  }
];

export default function CoinbaseHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full relative z-40 bg-[#0d1117] border-b border-white/10">
        {/* Row 1: Dark top bar – Left nav | Right socials */}
        <div className="bg-[#0a0e14] py-2.5">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
            <nav className="flex items-center gap-5">
              {["Start Here", "Demos", "Contact", "Buy Now!"].map((item, i) => (
                <a
                  key={i}
                  href={item === "Demos" ? "https://theme-sphere.com/demo/smartmag-landing/" : "#"}
                  className="text-[11px] text-gray-400 hover:text-white font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Dark main – Logo Left | Nav Center | Search & Hamburger Right */}
        <div
          className={`w-full bg-[#0d1117] border-b border-white/10 transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-xl z-50 animate-slideDown border-b border-white/10" : ""
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[60px]">
            {/* Left: Brand Logo */}
            <div className="flex items-center">
              <Link href="/coinbase" className="block">
                <img
                  src="https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/CoinBase-logo-white.png"
                  alt="SmartMag CoinBase Logo"
                  className="h-7.5 object-contain"
                  width="180"
                  height="32"
                />
              </Link>
            </div>

            {/* Center: Main Navigation */}
            <nav className="hidden lg:flex items-center gap-7 h-full">
              {/* Home */}
              <Link
                href="/coinbase"
                className="text-white hover:text-[#3b82f6] text-[13px] font-black uppercase tracking-wider h-full flex items-center border-b-2 border-[#3b82f6] transition-colors duration-200"
              >
                Home
              </Link>

              {/* Features Dropdown */}
              <div className="relative group h-full">
                <button className="text-gray-300 hover:text-[#3b82f6] text-[13px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Features <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3b82f6]" />
                </button>
                <div className="absolute top-full left-0 w-52 bg-[#0d1117] border border-white/10 py-2 shadow-xl hidden group-hover:block transition-all duration-200 z-50 text-left">
                  <a href="https://theme-sphere.com/demo/smartmag-landing/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-300 hover:bg-white/5 hover:text-white">58+ Unique Demos</a>
                  <a href="https://smartmag.theme-sphere.com/good-news/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-300 hover:bg-white/5 hover:text-white">GoodNews</a>
                  <a href="https://smartmag.theme-sphere.com/tech-1/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-300 hover:bg-white/5 hover:text-white">Tech 1: iGadgets</a>
                  <a href="https://smartmag.theme-sphere.com/tech-2/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-300 hover:bg-white/5 hover:text-white">Tech 2: TheWire</a>
                  <a href="https://smartmag.theme-sphere.com/tech-blog/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-300 hover:bg-white/5 hover:text-white">Tech Blog</a>
                </div>
              </div>

              {/* Technology Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-300 hover:text-[#3b82f6] text-[13px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Technology <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3b82f6]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[40%] w-[900px] bg-[#0d1117] border border-white/10 p-6 shadow-2xl hidden group-hover:block z-50 text-left">
                  <div className="grid grid-cols-5 gap-4">
                    {TECH_MEGA_POSTS.map((p, idx) => (
                      <Link key={idx} href={p.href} className="group/item block">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-900 rounded-sm">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                        </div>
                        <h4 className="text-[12.5px] font-bold leading-snug text-white group-hover/item:text-[#3b82f6] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-1 font-sans">{p.d}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insights */}
              <Link
                href="/coinbase"
                className="text-gray-300 hover:text-[#3b82f6] text-[13px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Insights
              </Link>

              {/* Business Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-300 hover:text-[#3b82f6] text-[13px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Business <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3b82f6]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[60%] w-[900px] bg-[#0d1117] border border-white/10 p-6 shadow-2xl hidden group-hover:block z-50 text-left">
                  <div className="grid grid-cols-5 gap-4">
                    {BUSINESS_MEGA_POSTS.map((p, idx) => (
                      <Link key={idx} href={p.href} className="group/item block">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-900 rounded-sm">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                        </div>
                        <h4 className="text-[12.5px] font-bold leading-snug text-white group-hover/item:text-[#3b82f6] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-1 font-sans">{p.d}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Markets */}
              <Link
                href="/coinbase"
                className="text-gray-300 hover:text-[#3b82f6] text-[13px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Markets
              </Link>
            </nav>

            {/* Right: Search + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle Search Overlay"
              >
                {isSearchOpen ? <X className="w-4.5 h-4.5" /> : <Search className="w-4.5 h-4.5" />}
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle Drawer Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#0a0e14] py-4.5 px-6 border-t border-white/10 shadow-2xl z-50 animate-slideDown">
            <div className="max-w-[750px] mx-auto flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your search and press Enter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white border-b border-gray-700 focus:border-white focus:outline-none text-[15px] py-1.5 px-1 font-sans"
                autoFocus
              />
              <button className="bg-[#3b82f6] text-white font-extrabold text-[11.5px] uppercase tracking-wider px-5 py-2 hover:bg-[#1d4ed8] transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Slide-in Off-Canvas Mobile/Tablet Drawer Menu (s-dark Style) ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Drawer Sidebar Container */}
          <div className="relative flex flex-col w-[295px] sm:w-[350px] h-full bg-[#0d1117] border-r border-white/10 text-white p-6.5 shadow-2xl z-50 overflow-y-auto animate-slideRight">
            
            {/* Header: Close Button and Logo */}
            <div className="flex items-center justify-between mb-8.5">
              <img
                src="https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/CoinBase-logo-mobile-2x.png"
                alt="SmartMag CoinBase Logo White"
                className="h-6.5 object-contain"
                width="152"
                height="27"
              />
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Navigation Directory */}
            <nav className="flex flex-col gap-4 border-b border-white/10 pb-7 mb-7 font-sans">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Navigation</span>
              {["Home", "Features", "Technology", "Insights", "Business", "Markets"].map((l, idx) => (
                <Link
                  key={idx}
                  href="/coinbase"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[13.5px] font-black text-white hover:text-[#3b82f6] transition-colors"
                >
                  {l}
                </Link>
              ))}
              <a 
                href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
                target="_blank" 
                className="text-[13.5px] font-black text-white hover:text-[#3b82f6] transition-colors"
              >
                Buy Theme
              </a>
            </nav>

            {/* What's Hot Widget */}
            <div className="mb-7.5 flex flex-col gap-3 font-sans">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">What's Hot</span>
              <div className="flex flex-col gap-4.5 pt-2">
                {SIDEBAR_HOT_POSTS.map((p, idx) => (
                  <Link
                    key={idx}
                    href="/coinbase"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex gap-3.5 items-start group"
                  >
                    <img
                      src={p.img}
                      alt=""
                      className="w-[68px] h-[48px] object-cover flex-shrink-0 bg-gray-900 rounded-sm"
                    />
                    <div>
                      <h4 className="text-[12.5px] font-bold text-gray-200 group-hover:text-[#3b82f6] leading-snug transition-colors line-clamp-3">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 mt-1 block">{p.d}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Block */}
            <div className="mt-auto border-t border-white/10 pt-6">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest block mb-3.5">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#3b5998] text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e1306c] text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
