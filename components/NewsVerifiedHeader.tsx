"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Mail 
} from "lucide-react";

// X (Twitter) Icon Component
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Threads Icon Component
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.26 14.86c-1.34.09-2.58-.33-3.13-1.14-.38-.55-.49-1.24-.49-1.9v-3.79c0-.46.06-.9.18-1.29.35-1.11 1.25-1.92 2.37-2.12.35-.06.72-.09 1.1-.09 2.05 0 3.48 1.15 3.48 3.32v.22c0 .94-.23 1.69-.69 2.22-.38.44-.92.68-1.61.73-.65.05-1.19-.18-1.52-.64-.22-.3-.31-.69-.31-1.18v-2.12c0-.52.28-.96.79-1.11.2-.06.41-.09.63-.09.78 0 1.27.39 1.27 1.2v.32c0 .24.1.37.33.37.16 0 .28-.09.34-.27.12-.35.18-.75.18-1.17 0-1.74-1.07-2.67-2.73-2.67-.32 0-.63.03-.92.08-.87.16-1.57.77-1.84 1.62-.09.3-.14.63-.14.99v3.74c0 .48.06.87.18 1.17.43.99 1.48 1.48 2.67 1.41 1.26-.07 2.21-.62 2.76-1.6.24-.43.37-.93.37-1.48V9.89c0-.28-.19-.48-.48-.48-.19 0-.34.09-.43.27-.12.24-.31.42-.56.55-.46.24-1.01.37-1.64.37-1.83 0-3.05-1.03-3.05-2.6v-.21c0-.85.22-1.53.66-2.02.43-.48 1.05-.73 1.85-.73.49 0 .94.1 1.34.31.25.13.52.2.78.2.35 0 .6-.21.6-.56 0-.21-.08-.41-.23-.58-.66-.75-1.64-1.17-2.78-1.17-1.17 0-2.11.37-2.79 1.1-.64.7-1.01 1.68-1.01 2.87v.21c0 2.21 1.58 3.52 3.86 3.52.53 0 1.03-.07 1.49-.22.14-.04.28-.06.4-.06.32 0 .53.18.53.48v2.1c0 1.1-.38 1.95-1.12 2.51-.62.47-1.45.71-2.45.71z" />
    </svg>
  );
}

const POLITICS_MEGA_POSTS = [
  {
    title: "Elon Musk Spent More than $290 Million on the 2024 Election, Year-End FEC Filings Show",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/a09ab803a8edff4eed964e3020fa6450-450x256.jpeg",
    d: "Feb 2, 2025",
    href: "/news-verified"
  },
  {
    title: "European Stocks Close Higher as Earnings Ramp Up; Watches of Switzerland Down 36% in Day Trading",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/f7e8f10e9df565d1a1d2c069c7433a7d-450x300.jpeg",
    d: "Feb 2, 2025",
    href: "/news-verified"
  },
  {
    title: "China’s Railways See Over 200m Passengers Since Start of Spring Festival",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/ar-1dEExQjVQQA-unsplash-450x300.jpg",
    d: "Feb 2, 2025",
    href: "/news-verified"
  },
  {
    title: "More than 80 Dead After Super Typhoon Sweeps Across Country",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/joao-marcelo-martins-QY7gWbNX75Y-unsplash-450x298.jpg",
    d: "Feb 2, 2025",
    href: "/news-verified"
  },
  {
    title: "Southeast Asia’s Leadership Crucibles: Past Visions, Present Struggles",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/samantha-sophia-zFIKq7VEk1o-unsplash-450x300.jpg",
    d: "Feb 2, 2025",
    href: "/news-verified"
  }
];

const LIFESTYLE_MEGA_POSTS = [
  {
    title: "Tech Lifestyle: Apple Patent Reveals Software That Can Take Group Selfies From A Distance",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/01/b5f212518675aec8d6b9e20ca1038395-450x322.jpeg",
    d: "Jan 14, 2025",
    href: "/news-verified"
  },
  {
    title: "Exploring the Deep Ocean: New Discoveries Made",
    img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=200&auto=format&fit=crop",
    d: "Jan 12, 2025",
    href: "/news-verified"
  },
  {
    title: "A Guide to Sustainable Living in Modern Cities",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=200&auto=format&fit=crop",
    d: "Jan 10, 2025",
    href: "/news-verified"
  },
  {
    title: "An Underwater Volcano Off of Oregon Coast May Erupt by End of 2025",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/01/9bad22eb3ddbdfed98c4bcba2c909abd-450x300.jpeg",
    d: "Jan 9, 2025",
    href: "/news-verified"
  },
  {
    title: "Review: 50 Easy Travelling Habits That Help You Live Longer",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/01/2f3714a51abcb3d0291bd57116a91b4f-450x338.jpeg",
    d: "Jan 8, 2025",
    href: "/news-verified"
  }
];

const HOT_WIDGET_POSTS = [
  {
    title: "Elon Musk Spent More than $290 Million on the 2024 Election, Year-End FEC Filings Show",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/a09ab803a8edff4eed964e3020fa6450-150x85.jpeg",
    d: "Feb 2, 2025"
  },
  {
    title: "European Stocks Close Higher as Earnings Ramp Up; Watches of Switzerland Down 36% in Day Trading",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/f7e8f10e9df565d1a1d2c069c7433a7d-150x100.jpeg",
    d: "Feb 2, 2025"
  },
  {
    title: "COVID-19 Hit The World Five Years ago. These Numbers Show its Impact",
    img: "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/01/9d6953bbd68f5ce4f05a3f2a35053a74-150x100.jpeg",
    d: "Feb 2, 2025"
  }
];

export default function NewsVerifiedHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
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
        {/* Row 1: Top Navigation, Centered Logo, Right Action Elements */}
        <div className="border-b border-gray-150 py-4 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
            {/* Left: Desktop top secondary nav */}
            <div className="hidden lg:flex items-center gap-5">
              {["Start Here", "Demos", "Contact", "Buy Now"].map((item, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-[11.5px] text-gray-500 hover:text-gray-900 font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Center: Main Branding Logo */}
            <div className="flex-1 flex justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10">
              <Link href="/news-verified" className="block">
                <img
                  src="https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/01/logo-NewsVerified-02-01.png"
                  alt="SmartMag NewsVerified Logo"
                  className="h-8 object-contain"
                  width="218"
                  height="32"
                />
              </Link>
            </div>

            {/* Right: Social icons + Subscribe */}
            <div className="flex items-center gap-4.5">
              <div className="hidden lg:flex items-center gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
              <a
                href="http://eepurl.com/hq-3Xb"
                target="_blank"
                rel="noopener"
                className="bg-black text-white text-[10.5px] font-extrabold uppercase tracking-widest px-4.5 py-2 hover:bg-[#e91e63] transition-colors duration-300 rounded-sm"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Navigation (Sticky Container) */}
        <div
          className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50 animate-slideDown" : ""
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[52px]">
            {/* Left: Hamburger menu toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 text-gray-700 hover:text-black transition-colors"
                aria-label="Toggle Drawer Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Center Navigation Links with hover Dropdowns and Mega Menus */}
            <nav className="hidden lg:flex items-center gap-7 h-full">
              {/* Home */}
              <Link
                href="/news-verified"
                className="text-gray-900 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center border-b-2 border-[#e91e63] transition-colors duration-200"
              >
                Home
              </Link>

              {/* Features Dropdown */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Features <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e91e63]" />
                </button>
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-150 py-2 shadow-lg hidden group-hover:block transition-all duration-200 z-50">
                  <a href="https://theme-sphere.com/demo/smartmag-landing/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e91e63]">58+ Unique Demos</a>
                  <a href="https://smartmag.theme-sphere.com/good-news/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e91e63]">GoodNews</a>
                  <a href="https://smartmag.theme-sphere.com/tech-1/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e91e63]">Tech 1: iGadgets</a>
                  <a href="https://smartmag.theme-sphere.com/tech-2/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e91e63]">Tech 2: TheWire</a>
                  <a href="https://smartmag.theme-sphere.com/tech-blog/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e91e63]">Tech Blog</a>
                </div>
              </div>

              {/* US News */}
              <Link
                href="/news-verified"
                className="text-gray-700 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                US News
              </Link>

              {/* World News */}
              <Link
                href="/news-verified"
                className="text-gray-700 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                World News
              </Link>

              {/* Politics Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Politics <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e91e63]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[40%] w-[900px] bg-white border border-gray-150 p-6 shadow-xl hidden group-hover:block z-50">
                  <div className="grid grid-cols-5 gap-4">
                    {POLITICS_MEGA_POSTS.map((p, idx) => (
                      <Link key={idx} href={p.href} className="group/item block">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-100">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                        </div>
                        <h4 className="text-[12px] font-bold leading-snug text-gray-900 group-hover/item:text-[#e91e63] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-1">{p.d}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lifestyle Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Lifestyle <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e91e63]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[50%] w-[900px] bg-white border border-gray-150 p-6 shadow-xl hidden group-hover:block z-50">
                  <div className="grid grid-cols-5 gap-4">
                    {LIFESTYLE_MEGA_POSTS.map((p, idx) => (
                      <Link key={idx} href={p.href} className="group/item block">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-100">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                        </div>
                        <h4 className="text-[12px] font-bold leading-snug text-gray-900 group-hover/item:text-[#e91e63] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-1">{p.d}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buy Theme */}
              <a
                href="https://theme-sphere.com/buy/go.php?theme=smartmag"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-[#e91e63] text-[12.5px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Buy Theme
              </a>
            </nav>

            {/* Right: Search Toggle */}
            <div className="relative flex items-center h-full">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-black transition-colors"
                aria-label="Toggle Search Overlay"
              >
                {isSearchOpen ? <X className="w-4.5 h-4.5" /> : <Search className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#111111] py-4.5 px-6 border-t border-gray-800 shadow-md z-50 animate-slideDown">
            <div className="max-w-[750px] mx-auto flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your search and press Enter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white border-b border-gray-600 focus:border-white focus:outline-none text-[15px] py-1.5 px-1 font-sans"
                autoFocus
              />
              <button className="bg-[#e91e63] text-white font-extrabold text-[11.5px] uppercase tracking-wider px-5 py-2 hover:bg-pink-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Slide-in Off-Canvas Mobile/Tablet Drawer Menu ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Drawer Sidebar Content */}
          <div className="relative flex flex-col w-[295px] sm:w-[350px] h-full bg-[#0f0f11] text-white p-6.5 shadow-2xl z-50 overflow-y-auto animate-slideRight">
            
            {/* Header: Close Button and Logo */}
            <div className="flex items-center justify-between mb-8.5">
              <img
                src="https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/02/logo-NewsVerified-02-02@15x.png"
                alt="SmartMag Logo White"
                className="h-6.5 object-contain"
                width="164"
                height="25"
              />
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu List links */}
            <nav className="flex flex-col gap-4 border-b border-gray-800 pb-7 mb-7 font-sans">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Navigation</span>
              {["Home", "Features", "US News", "World News", "Politics", "Lifestyle"].map((l, idx) => (
                <Link
                  key={idx}
                  href="/news-verified"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[13.5px] font-black text-white hover:text-[#e91e63] transition-colors"
                >
                  {l}
                </Link>
              ))}
              <a 
                href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
                target="_blank" 
                className="text-[13.5px] font-black text-white hover:text-[#e91e63] transition-colors"
              >
                Buy Theme
              </a>
            </nav>

            {/* Newsletter widget */}
            <div className="mb-7.5 bg-white/5 border border-white/10 p-5 rounded-sm font-sans">
              <h3 className="font-bold text-[14.5px] text-white mb-2 uppercase tracking-wide">Subscribe to Updates</h3>
              <p className="text-[12px] text-gray-400 mb-4 leading-normal">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address.."
                  required
                  className="w-full bg-[#0f0f11] text-white border border-gray-800 focus:border-gray-600 focus:outline-none text-[12.5px] px-3.5 py-2.5 rounded-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-[#e91e63] hover:bg-pink-700 text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm transition-colors"
                >
                  Subscribe
                </button>
                <label className="flex items-start gap-2.5 text-[10.5px] text-gray-500 cursor-pointer select-none mt-1 leading-normal">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>
                    By signing up, you agree to our terms and our <a href="#" className="underline hover:text-white">Privacy Policy</a> agreement.
                  </span>
                </label>
              </form>
            </div>

            {/* What's Hot Widget */}
            <div className="mb-7.5 flex flex-col gap-3 font-sans">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2">What's Hot</span>
              <div className="flex flex-col gap-4.5 pt-2">
                {HOT_WIDGET_POSTS.map((p, idx) => (
                  <Link
                    key={idx}
                    href="/news-verified"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex gap-3.5 items-start group"
                  >
                    <img
                      src={p.img}
                      alt=""
                      className="w-[72px] h-[52px] object-cover flex-shrink-0 bg-gray-900 rounded-sm"
                    />
                    <div>
                      <h4 className="text-[12px] font-bold text-gray-200 group-hover:text-[#e91e63] leading-snug transition-colors line-clamp-3">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 mt-1 block">{p.d}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="mt-auto border-t border-gray-800 pt-6">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest block mb-3.5">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e91e63] text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e91e63] text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center transition-all">
                  <ThreadsIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
