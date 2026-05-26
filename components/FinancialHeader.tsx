"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Play, 
  Music, 
  Camera 
} from "lucide-react";

// Asset base URL
const B = "https://smartmag.theme-sphere.com/financial/wp-content/uploads/sites/16/";

const FUNDS_POSTS = [
  {
    title: "Downtown San Diego Business Spaces: Comparison Gallery",
    date: "Feb 4, 2021",
    img: `${B}2021/02/Depositphotos_278832120_xl-2015-1-450x300.jpg`,
    href: "/financial/post-format-gallery",
    isGallery: true
  },
  {
    title: "US Airline Industry Rebounds As 2m Travel Since March 2020",
    date: "Feb 1, 2021",
    img: `${B}2021/02/pexels-pixabay-164589-450x266.jpg`,
    href: "/financial/us-airline-industry-rebounds-as-2m-travel-since-march-2020"
  },
  {
    title: "Analysis: Buyers Return But Dubai Real Estate Faces Long Road to Recovery",
    date: "Feb 1, 2021",
    img: `${B}2021/02/Depositphotos_15756277_xl-2015-1-450x301.jpg`,
    href: "/financial/analysis-buyers-return-but-dubai-real-estate-faces-long-road-to-recovery"
  },
  {
    title: "Tight Real Estate Market Driving Home Prices Up Dramatically in Middletown Area",
    date: "Feb 1, 2021",
    img: `${B}2021/02/Depositphotos_45227311_xl-2015-1-450x300.jpg`,
    href: "/financial/post-format-audio",
    isAudio: true
  },
  {
    title: "Record-Breaking Hudson Valley Real Estate Market Pace Continues",
    date: "Feb 1, 2021",
    img: `${B}2021/02/Depositphotos_386580122_xl-2015-450x300.jpg`,
    href: "/financial/post-multi-page-slideshow"
  }
];

const MARKETS_POSTS = [
  {
    title: "Downtown San Diego Business Spaces: Comparison Gallery",
    date: "Feb 4, 2021",
    img: `${B}2021/02/Depositphotos_278832120_xl-2015-1-450x300.jpg`,
    href: "/financial/post-format-gallery",
    isGallery: true
  },
  {
    title: "US Airline Industry Rebounds As 2m Travel Since March 2020",
    date: "Feb 1, 2021",
    img: `${B}2021/02/pexels-pixabay-164589-450x266.jpg`,
    href: "/financial/us-airline-industry-rebounds-as-2m-travel-since-march-2020"
  },
  {
    title: "Analysis: Buyers Return But Dubai Real Estate Faces Long Road to Recovery",
    date: "Feb 1, 2021",
    img: `${B}2021/02/Depositphotos_15756277_xl-2015-1-450x301.jpg`,
    href: "/financial/analysis-buyers-return-but-dubai-real-estate-faces-long-road-to-recovery"
  },
  {
    title: "Tight Real Estate Market Driving Home Prices Up Dramatically in Middletown Area",
    date: "Feb 1, 2021",
    img: `${B}2021/02/Depositphotos_45227311_xl-2015-1-450x300.jpg`,
    href: "/financial/post-format-audio",
    isAudio: true
  }
];

const HOT_POSTS = [
  {
    title: "Eurozone: Digital Euro Could Boost Single Currency’s International Use",
    date: "Mar 16, 2021",
    img: `${B}2021/03/Depositphotos_294996210_xl-2015-1-150x100.jpg`,
    href: "/financial/eurozone-digital-euro-could-boost-single-currencys-international-use"
  },
  {
    title: "Chinese Internet Majors’ Investments to Slow Profit Growth",
    date: "Mar 16, 2021",
    img: `${B}2021/03/Depositphotos_235246358_xl-2015-1-150x100.jpg`,
    href: "/financial/chinese-internet-majors-investments-to-slow-profit-growth"
  },
  {
    title: "2021 PDPW Conference Content Now Available On-Demand",
    date: "Feb 11, 2021",
    img: `${B}2021/02/4_TWluaW1hbC1pbmZvZ3JhcGhpYy1lbGVtZW50MDYuanBn-150x150.jpg`,
    href: "/financial/2021-pdpw-conference-content-now-available-on-demand"
  }
];

export default function FinancialHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
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
      <header className="w-full relative z-40 bg-white">
        {/* Row 1: Dark Header Mid - Socials | Centered Logo | Subscribe */}
        <div className="bg-[#111111] text-white py-5 border-b border-gray-800">
          <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
            {/* Left: Socials */}
            <div className="flex items-center gap-3.5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* Custom X Twitter Icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.396-5.877 1.396-5.877s-.357-.709-.357-1.759c0-1.648.961-2.879 2.164-2.879 1.02 0 1.512.76 1.512 1.674 0 1.02-.656 2.548-.996 3.966-.282 1.189.6 2.159 1.781 2.159 2.139 0 3.785-2.249 3.785-5.495 0-2.874-2.077-4.887-5.048-4.887-3.436 0-5.454 2.564-5.454 5.219 0 1.03.399 2.138.899 2.74.098.12.112.224.083.345l-.333 1.349c-.053.22-.178.267-.411.16-1.536-.709-2.497-2.94-2.497-4.73 0-3.853 2.812-7.393 8.118-7.393 4.263 0 7.573 3.023 7.573 7.054 0 4.218-2.673 7.61-6.387 7.61-1.248 0-2.42-.644-2.822-1.409l-.768 2.91c-.278 1.056-1.028 2.378-1.532 3.189C9.57 23.822 10.778 24 12.017 24c6.62 0 11.983-5.36 11.983-11.983C24 5.367 18.638 0 12.017 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.519 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.5 12 20.5 12 20.5s7.519 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Center: Logo */}
            <div>
              <Link href="/financial" className="block">
                <img 
                  src={`${B}2021/06/FINANCIAL-LOGO.png`} 
                  alt="SmartMag Financial" 
                  className="h-10 object-contain mx-auto"
                />
              </Link>
            </div>

            {/* Right: Subscribe Button */}
            <div>
              <a 
                href="http://eepurl.com/hq-3Xb" 
                target="_blank" 
                rel="noopener" 
                className="inline-block border-2 border-gray-600 text-white text-[12px] font-bold uppercase tracking-widest px-6 py-2 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Navigation Bar (Sticky Container) */}
        <div className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50 animate-slideDown" : ""
        }`}>
          <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-14">
            
            {/* Hamburger Button (Mobile & Desktop Drawer Toggle) */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center justify-center p-2 text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle Navigation Drawer"
            >
              <Menu className="w-[22px] h-[22px]" />
            </button>

            {/* Center: Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-7 h-full">
              <Link 
                href="/financial" 
                className="text-gray-900 hover:text-[#1a6aa8] text-[13px] font-bold uppercase tracking-wider h-full flex items-center border-b-2 border-[#1a6aa8] transition-colors"
              >
                Home
              </Link>
              
              {/* Features Dropdown */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#1a6aa8] text-[13px] font-bold uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Features <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1a6aa8]" />
                </button>
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-150 py-2.5 shadow-lg hidden group-hover:block transition-all duration-300 z-50">
                  <a href="https://theme-sphere.com/demo/smartmag-landing/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#1a6aa8]">58+ Unique Demos</a>
                  <a href="https://smartmag.theme-sphere.com/good-news/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#1a6aa8]">GoodNews Demo</a>
                  <a href="https://smartmag.theme-sphere.com/tech-1/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#1a6aa8]">Tech 1: iGadgets</a>
                  <a href="https://smartmag.theme-sphere.com/tech-2/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#1a6aa8]">Tech 2: TheWire</a>
                  <a href="https://smartmag.theme-sphere.com/tech-blog/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#1a6aa8]">Tech Blog</a>
                </div>
              </div>

              {/* Funds Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#1a9ea8] text-[13px] font-bold uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Funds <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1a9ea8]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[40%] w-[900px] bg-white border border-gray-150 p-6 shadow-xl hidden group-hover:block z-50">
                  <div className="grid grid-cols-5 gap-4">
                    {FUNDS_POSTS.map((p, idx) => (
                      <Link key={idx} href="/financial" className="group/item block">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-100">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                          {p.isGallery && (
                            <span className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-sm"><Camera className="w-3.5 h-3.5" /></span>
                          )}
                          {p.isAudio && (
                            <span className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-sm"><Music className="w-3.5 h-3.5" /></span>
                          )}
                        </div>
                        <h4 className="text-[12.5px] font-bold leading-snug text-gray-900 group-hover/item:text-[#1a9ea8] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 mt-1">{p.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Investments Links */}
              <Link 
                href="/financial" 
                className="text-gray-700 hover:text-[#e07b1a] text-[13px] font-bold uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Investments
              </Link>

              {/* Markets Mega Menu (Categories Left, Posts Right) */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#1a6aa8] text-[13px] font-bold uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Markets <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1a6aa8]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[60%] w-[960px] bg-white border border-gray-150 shadow-xl hidden group-hover:block z-50 flex">
                  {/* Left sub-cats */}
                  <div className="w-[200px] border-r border-gray-100 p-5 bg-gray-50 flex flex-col gap-2.5">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Categories</span>
                    <Link href="/financial" className="text-[12.5px] font-bold text-gray-700 hover:text-[#1a9ea8]">Funds</Link>
                    <Link href="/financial" className="text-[12.5px] font-bold text-gray-700 hover:text-[#e07b1a]">Investments</Link>
                    <Link href="/financial" className="text-[12.5px] font-bold text-gray-700 hover:text-[#27a35e]">Stocks</Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <Link href="/financial" className="text-[12px] font-bold text-[#1a6aa8] uppercase tracking-wider">View All</Link>
                  </div>
                  {/* Right posts */}
                  <div className="flex-1 p-6 grid grid-cols-4 gap-4">
                    {MARKETS_POSTS.map((p, idx) => (
                      <Link key={idx} href="/financial" className="group/item block">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-100">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                          {p.isGallery && (
                            <span className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-sm"><Camera className="w-3.5 h-3.5" /></span>
                          )}
                          {p.isAudio && (
                            <span className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-sm"><Music className="w-3.5 h-3.5" /></span>
                          )}
                        </div>
                        <h4 className="text-[12px] font-bold leading-snug text-gray-900 group-hover/item:text-[#1a6aa8] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 mt-1">{p.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Theme Buy Link */}
              <a 
                href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
                target="_blank" 
                rel="noopener"
                className="text-gray-700 hover:text-[#1a6aa8] text-[13px] font-bold uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Buy Theme
              </a>
            </nav>

            {/* Right: Search Action */}
            <div className="relative flex items-center h-full">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-black transition-colors"
                aria-label="Search posts"
              >
                {isSearchOpen ? <X className="w-[18px] h-[18px]" /> : <Search className="w-[18px] h-[18px]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#111111] py-4 px-6 border-t border-gray-800 shadow-md z-50">
            <div className="max-w-[800px] mx-auto flex items-center gap-3">
              <input 
                type="text" 
                placeholder="Type your search and press Enter..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white border-b border-gray-600 focus:border-white focus:outline-none text-[15px] py-1.5 px-1"
                autoFocus
              />
              <button className="bg-[#1a6aa8] text-white font-bold text-[12px] uppercase px-5 py-2 hover:bg-[#155688] transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Slide-in Off-Canvas Mobile/Tablet Drawer ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Dark overlay backdrop */}
          <div 
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Content */}
          <div className="relative flex flex-col w-[290px] sm:w-[340px] h-full bg-[#111111] text-white p-6 shadow-2xl z-50 overflow-y-auto animate-slideRight">
            
            {/* Header: Close and Logo */}
            <div className="flex items-center justify-between mb-8">
              <img 
                src={`${B}2021/06/logo-financial-small-white@2x.png`} 
                alt="SmartMag" 
                className="h-7.5 object-contain"
              />
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Lists */}
            <nav className="flex flex-col gap-4 border-b border-gray-800 pb-6 mb-6">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Main Sections</span>
              <Link href="/financial" onClick={() => setIsDrawerOpen(false)} className="text-[14px] font-bold text-white hover:text-[#1a6aa8] transition-colors">Home</Link>
              <Link href="/financial" onClick={() => setIsDrawerOpen(false)} className="text-[14px] font-bold text-white hover:text-[#1a6aa8] transition-colors">Features</Link>
              <Link href="/financial" onClick={() => setIsDrawerOpen(false)} className="text-[14px] font-bold text-white hover:text-[#1a9ea8] transition-colors">Funds</Link>
              <Link href="/financial" onClick={() => setIsDrawerOpen(false)} className="text-[14px] font-bold text-white hover:text-[#e07b1a] transition-colors">Investments</Link>
              <Link href="/financial" onClick={() => setIsDrawerOpen(false)} className="text-[14px] font-bold text-white hover:text-[#1a6aa8] transition-colors">Markets</Link>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="text-[14px] font-bold text-white hover:text-[#1a6aa8] transition-colors">Buy Theme</a>
            </nav>

            {/* What's Hot Widget */}
            <div className="mb-6 flex flex-col gap-3">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1.5">What's Hot</span>
              <div className="flex flex-col gap-4">
                {HOT_POSTS.map((p, idx) => (
                  <Link key={idx} href="/financial" onClick={() => setIsDrawerOpen(false)} className="flex gap-3 items-center group">
                    <img 
                      src={p.img} 
                      alt="" 
                      className="w-[65px] h-[48px] object-cover flex-shrink-0 bg-gray-900 rounded-sm"
                    />
                    <div>
                      <h4 className="text-[12px] font-bold text-gray-200 group-hover:text-[#1a6aa8] leading-tight transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 mt-1 block">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Block */}
            <div className="mt-auto border-t border-gray-800 pt-6">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-3">Connect With Us</span>
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 bg-gray-900 hover:bg-[#1a6aa8] hover:text-white text-gray-400 rounded-sm transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-900 hover:bg-black hover:text-white text-gray-400 rounded-sm transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-900 hover:bg-pink-700 hover:text-white text-gray-400 rounded-sm transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
