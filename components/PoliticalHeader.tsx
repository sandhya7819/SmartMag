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

const POLITICS_MEGA_POSTS = [
  {
    title: "New Government, New Opportunity To End The Hostile Environment For Refugees",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/1f62f16c278c045d5f00c5e2f528b39f-450x675.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/eebef64be67aa7c0e24060147fd919dd-450x675.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation: Envoy",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/Depositphotos_241506218_XL-1-450x300.jpg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "How the Middle East Became an Arena for Putin’s Power Struggle with the US",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/a51e68eb08355feb0d951b9194080e62-450x278.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "Morocco Allows Israeli Warship to Dock After Spain Refused",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  }
];

const SPORTS_MEGA_POSTS = [
  {
    title: "Kevin Durant Pulled from Game Due to Health & Safety Protocols",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/pexels-pixabay-207693-scaled-1-450x462.jpg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/Depositphotos_19410973_xl-2015-scaled-1-450x297.jpg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "Nations with Most Olympic Medals ft United States, France, China, Germany",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/4a7975c604a0b24eb2c8f24e0e231a73-450x300.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "Top 5: List of Batters with Most Runs in 2024 ICC Men's T20 World Cup",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/747c4a15c42e2f8899fcd528fd2314d2-450x300.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  },
  {
    title: "5 Cycling Races Even More Intense Tour de France",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/2a5228c1accbbcd35190fe1f3bf0c90f-450x331.jpeg",
    d: "Jun 30, 2024",
    href: "/political"
  }
];

const SIDEBAR_HOT_POSTS = [
  {
    title: "New Government, New Opportunity To End The Hostile Environment For Refugees",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/1f62f16c278c045d5f00c5e2f528b39f-200x300.jpeg",
    d: "Jun 30, 2024"
  },
  {
    title: "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/e2ef634e41f7cc8deb0ec0ec70651166-300x169.jpeg",
    d: "Jun 30, 2024"
  },
  {
    title: "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout",
    img: "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/eebef64be67aa7c0e24060147fd919dd-150x225.jpeg",
    d: "Jun 30, 2024"
  }
];

export default function PoliticalHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDateStr, setCurrentDateStr] = useState("Sunday, May 24");

  useEffect(() => {
    // Generate formatted date like "Sunday, May 24"
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    setCurrentDateStr(new Date().toLocaleDateString('en-US', options));

    const handleScroll = () => {
      if (window.scrollY > 150) {
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
        {/* Row 1: Dark top bar – Centered links */}
        <div className="bg-[#111111] py-2.5 text-center border-b border-gray-800">
          <nav className="flex items-center justify-center gap-6 flex-wrap">
            {["Start Here", "Demos", "Our Authors", "Contact", "Buy Now!"].map((item, i) => (
              <a
                key={i}
                href={item === "Demos" ? "https://theme-sphere.com/demo/smartmag-landing/" : "#"}
                className="text-[11.5px] text-gray-400 hover:text-white font-bold uppercase tracking-wider transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2: Logo bar – Socials on left | Centered logo | Subscribe on right */}
        <div className="bg-white border-b border-gray-150 py-4.5">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between relative">
            {/* Left: Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Center: Branding Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <Link href="/political" className="block">
                <img
                  src="https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/09/Logo-Political-01-1.png"
                  alt="SmartMag Political Logo"
                  className="h-10 object-contain mx-auto"
                  width="251"
                  height="44"
                />
              </Link>
            </div>

            {/* Right: Subscribe Button */}
            <div>
              <a
                href="http://eepurl.com/hq-3Xb"
                target="_blank"
                rel="noopener"
                className="bg-black text-white text-[11px] font-extrabold uppercase tracking-widest px-5 py-2 hover:bg-[#c0392b] transition-colors duration-300 rounded-sm"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Row 3: Main Navigation (Sticky Container) */}
        <div
          className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50 animate-slideDown" : ""
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[52px]">
            {/* Left: Hamburger menu toggle + Current Date */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 text-gray-700 hover:text-black transition-colors"
                aria-label="Toggle Drawer Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <span className="hidden sm:inline text-[11.5px] text-gray-500 font-bold uppercase tracking-wider font-sans ml-1 border-l border-gray-200 pl-4">
                {currentDateStr}
              </span>
            </div>

            {/* Center Main Navigation links with hover dropdown/mega menu */}
            <nav className="hidden lg:flex items-center gap-7 h-full">
              {/* Home */}
              <Link
                href="/political"
                className="text-gray-900 hover:text-[#c0392b] text-[13px] font-black uppercase tracking-wider h-full flex items-center border-b-2 border-black transition-colors duration-200"
              >
                Home
              </Link>

              {/* Features Dropdown */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#c0392b] text-[13px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Features <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c0392b]" />
                </button>
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-150 py-2 shadow-lg hidden group-hover:block transition-all duration-200 z-50">
                  <a href="https://theme-sphere.com/demo/smartmag-landing/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#c0392b]">58+ Unique Demos</a>
                  <a href="https://smartmag.theme-sphere.com/good-news/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#c0392b]">GoodNews</a>
                  <a href="https://smartmag.theme-sphere.com/tech-1/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#c0392b]">Tech 1: iGadgets</a>
                  <a href="https://smartmag.theme-sphere.com/tech-2/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#c0392b]">Tech 2: TheWire</a>
                  <a href="https://smartmag.theme-sphere.com/tech-blog/" target="_blank" className="block px-4 py-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#c0392b]">Tech Blog</a>
                </div>
              </div>

              {/* Politics Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#c0392b] text-[13px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Politics <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c0392b]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[40%] w-[900px] bg-white border border-gray-150 p-6 shadow-xl hidden group-hover:block z-50">
                  <div className="grid grid-cols-5 gap-4">
                    {POLITICS_MEGA_POSTS.map((p, idx) => (
                      <Link key={idx} href={p.href} className="group/item block text-left">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-100">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                        </div>
                        <h4 className="text-[12px] font-bold leading-snug text-gray-900 group-hover/item:text-[#c0392b] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-1 font-sans">{p.d}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Economy */}
              <Link
                href="/political"
                className="text-gray-700 hover:text-[#c0392b] text-[13px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Economy
              </Link>

              {/* Science & Tech */}
              <Link
                href="/political"
                className="text-gray-700 hover:text-[#c0392b] text-[13px] font-black uppercase tracking-wider h-full flex items-center transition-colors"
              >
                Science & Tech
              </Link>

              {/* Sports Mega Menu (5 Columns) */}
              <div className="relative group h-full">
                <button className="text-gray-700 hover:text-[#c0392b] text-[13px] font-black uppercase tracking-wider h-full flex items-center gap-1 transition-colors">
                  Sports <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c0392b]" />
                </button>
                {/* Mega Menu Panel */}
                <div className="absolute top-full left-1/2 -translate-x-[60%] w-[900px] bg-white border border-gray-150 p-6 shadow-xl hidden group-hover:block z-50">
                  <div className="grid grid-cols-5 gap-4">
                    {SPORTS_MEGA_POSTS.map((p, idx) => (
                      <Link key={idx} href={p.href} className="group/item block text-left">
                        <div className="relative overflow-hidden aspect-[16/11] mb-2.5 bg-gray-100">
                          <img 
                            src={p.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                        </div>
                        <h4 className="text-[12px] font-bold leading-snug text-gray-900 group-hover/item:text-[#c0392b] transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 mt-1 font-sans">{p.d}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right: Search Action toggle */}
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

        {/* Search Overlay Dropdown */}
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
              <button className="bg-[#c0392b] text-white font-extrabold text-[11.5px] uppercase tracking-wider px-5 py-2 hover:bg-[#962d22] transition-colors">
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
          <div className="relative flex flex-col w-[295px] sm:w-[350px] h-full bg-[#0f0f11] text-white p-6.5 shadow-2xl z-50 overflow-y-auto animate-slideRight">
            
            {/* Header: Close button and Logo */}
            <div className="flex items-center justify-between mb-8.5">
              <img
                src="https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/09/Logo-Political-footer-1@2x.png"
                alt="SmartMag Logo White"
                className="h-7.5 object-contain"
                width="181"
                height="32"
              />
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-4 border-b border-gray-800 pb-7 mb-7 font-sans">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Navigation</span>
              {["Home", "Features", "Politics", "Economy", "Science & Tech", "Sports"].map((l, idx) => (
                <Link
                  key={idx}
                  href="/political"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[13.5px] font-black text-white hover:text-[#c0392b] transition-colors"
                >
                  {l}
                </Link>
              ))}
              <a 
                href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
                target="_blank" 
                className="text-[13.5px] font-black text-white hover:text-[#c0392b] transition-colors"
              >
                Buy Theme
              </a>
            </nav>

            {/* What's Hot Widget */}
            <div className="mb-7.5 flex flex-col gap-3 font-sans">
              <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2">What's Hot</span>
              <div className="flex flex-col gap-4.5 pt-2">
                {SIDEBAR_HOT_POSTS.map((p, idx) => (
                  <Link
                    key={idx}
                    href="/political"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex gap-3.5 items-start group"
                  >
                    <img
                      src={p.img}
                      alt=""
                      className="w-[60px] h-[60px] object-cover flex-shrink-0 bg-gray-900 rounded-sm"
                    />
                    <div>
                      <h4 className="text-[12px] font-bold text-gray-200 group-hover:text-[#c0392b] leading-snug transition-colors line-clamp-3">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 mt-1 block">{p.d}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Block */}
            <div className="mt-auto border-t border-gray-800 pt-6">
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
