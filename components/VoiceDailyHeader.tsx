"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, Search, Menu, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { VD_LOGO, trendingHeadlines } from "@/lib/voiceDailyData";

// X (Twitter) Icon Component
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const nav = ["Home", "Features", "Politics", "Technology", "Sports", "Health", "Buy Theme"];
const trending = ["Ukraine Conflict", "US Elections", "Investments", "Middle East"];

const POLITICS_MEGA_POSTS = [
  {
    title: "Modi-Gates Meeting: A Collaboration for Profit and Control Over India’s Digital Economy",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/c6e37f92be00ce5868f86420e2b50732-300x221.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "South Korea’s Top Court Grants State Benefits To Gay Couples In Landmark Ruling",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/484df2ed8232a177576f6a083072b2cd-300x169.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "Election 2024: What Will Markets Do With Trump Victory Over Biden?",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/visuals-vnfyiXo0BR8-unsplash-300x210.jpg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "Anti-War Protests Intensify in World Along with Crackdown",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/colin-lloyd-x5-62_ZWDlk-unsplash-450x299.jpg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "Korea Closes 4 Diplomatic Missions, Suggesting Economic Woes",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/a379706b51c46ce03dd1e5fa66b03441-450x300.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  }
];

const SPORTS_MEGA_POSTS = [
  {
    title: "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/d3e037ae0ac042874d07c34a4f26f8ed-450x286.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "Australian Open: Women’s Draw as Sofia Kenin Defends Title",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/211dcf9f33f563538d1ee9137197d4b5-450x349.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "2024 NCAA Baseball Bracket: Men’s College World Series Scores, Schedule",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/193b0a52a809cc0c93d85b20bcb7c6c2-450x300.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "MotoAmerica: More From WeatherTech Raceway Laguna Seca (Updated)",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/22e5561568a13afda9d7cf86150c1fbc-450x300.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  },
  {
    title: "Tokyo Officials Plan For a Safe Olympic Games Without Quarantines",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/4a7975c604a0b24eb2c8f24e0e231a73-450x300.jpeg",
    date: "Jul 18, 2024",
    href: "#"
  }
];

const HOT_WIDGET_POSTS = [
  {
    title: "Modi-Gates Meeting: A Collaboration for Profit and Control Over India’s Digital Economy",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/c6e37f92be00ce5868f86420e2b50732-300x221.jpeg",
    href: "#"
  },
  {
    title: "South Korea’s Top Court Grants State Benefits To Gay Couples In Landmark Ruling",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/484df2ed8232a177576f6a083072b2cd-300x169.jpeg",
    href: "#"
  },
  {
    title: "Election 2024: What Will Markets Do With Trump Victory Over Biden?",
    img: "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/visuals-vnfyiXo0BR8-unsplash-300x210.jpg",
    href: "#"
  }
];

export default function VoiceDailyHeader() {
  const [trendIdx, setTrendIdx] = useState(0);
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
      <header className="w-full relative z-[100]">
        {/* Row 1: Main navigation & branding — s-dark */}
        <div className="w-full bg-[#161616]">
          <div
            className={`w-full bg-[#161616] text-white transition-all duration-300 ${
              isSticky ? "fixed top-0 left-0 right-0 shadow-lg z-[110] animate-slideDown border-b border-white/5" : ""
            }`}
          >
            <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between min-h-[72px] relative">
              {/* Left branding logo */}
              <Link href="/thevoice-daily" className="shrink-0 py-2 flex items-center">
                <img
                  src={VD_LOGO}
                  alt="The Voice Daily"
                  width={209}
                  height={35}
                  className="h-[32px] w-auto block object-contain"
                />
              </Link>

              {/* Center Menu Navigation */}
              <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[13px] font-bold uppercase tracking-[0.5px] h-[72px] font-['Inter',sans-serif]">
                {nav.map((item, i) => {
                  const isPolitics = item === "Politics";
                  const isSports = item === "Sports";
                  const isFeatures = item === "Features";

                  return (
                    <div key={item} className="relative group h-full flex items-center">
                      <Link
                        href={item === "Home" ? "/thevoice-daily" : "#"}
                        className={`hover:text-[#0c77e2] transition-colors whitespace-nowrap h-full flex items-center ${
                          i === 0 ? "text-white" : "text-white/85"
                        }`}
                      >
                        {item}
                        {(isPolitics || isSports || isFeatures) && (
                          <ChevronDown className="w-3.5 h-3.5 ml-1 text-white/50 group-hover:text-[#0c77e2] transition-colors" />
                        )}
                      </Link>

                      {/* Features Dropdown */}
                      {isFeatures && (
                        <div className="absolute top-full left-0 w-52 bg-[#161616] border-t-2 border-[#0c77e2] py-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <a
                            href="https://theme-sphere.com/demo/smartmag-landing/"
                            target="_blank"
                            rel="noopener"
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-[#0c77e2] transition-colors"
                          >
                            58+ Unique Demos
                          </a>
                          <a
                            href="https://smartmag.theme-sphere.com/good-news/"
                            target="_blank"
                            rel="noopener"
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-[#0c77e2] transition-colors"
                          >
                            GoodNews
                          </a>
                          <a
                            href="https://smartmag.theme-sphere.com/tech-1/"
                            target="_blank"
                            rel="noopener"
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-[#0c77e2] transition-colors"
                          >
                            Tech 1: iGadgets
                          </a>
                          <a
                            href="https://smartmag.theme-sphere.com/tech-2/"
                            target="_blank"
                            rel="noopener"
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-[#0c77e2] transition-colors"
                          >
                            Tech 2: TheWire
                          </a>
                          <a
                            href="https://smartmag.theme-sphere.com/tech-blog/"
                            target="_blank"
                            rel="noopener"
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-[#0c77e2] transition-colors"
                          >
                            Tech Blog
                          </a>
                        </div>
                      )}

                      {/* Politics Mega Menu */}
                      {isPolitics && (
                        <div className="absolute top-full left-1/2 -translate-x-[45%] w-[1100px] bg-[#161616] border-t-2 border-[#0c77e2] p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="grid grid-cols-5 gap-5">
                            {POLITICS_MEGA_POSTS.map((p, idx) => (
                              <Link key={idx} href={p.href} className="group/item block text-left">
                                <div className="relative overflow-hidden aspect-[3/2] mb-3 bg-neutral-800">
                                  <img
                                    src={p.img}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-[1.05]"
                                  />
                                </div>
                                <h4 className="text-[13px] font-bold leading-snug text-white group-hover/item:text-[#0c77e2] transition-colors line-clamp-2 font-['Faustina',serif]">
                                  {p.title}
                                </h4>
                                <p className="text-[10px] text-white/50 font-semibold tracking-wider uppercase mt-2 font-['Inter',sans-serif]">
                                  {p.date}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Sports Mega Menu */}
                      {isSports && (
                        <div className="absolute top-full left-1/2 -translate-x-[55%] w-[1100px] bg-[#161616] border-t-2 border-[#0c77e2] p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="grid grid-cols-5 gap-5">
                            {SPORTS_MEGA_POSTS.map((p, idx) => (
                              <Link key={idx} href={p.href} className="group/item block text-left">
                                <div className="relative overflow-hidden aspect-[3/2] mb-3 bg-neutral-800">
                                  <img
                                    src={p.img}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-[1.05]"
                                  />
                                </div>
                                <h4 className="text-[13px] font-bold leading-snug text-white group-hover/item:text-[#0c77e2] transition-colors line-clamp-2 font-['Faustina',serif]">
                                  {p.title}
                                </h4>
                                <p className="text-[10px] text-white/50 font-semibold tracking-wider uppercase mt-2 font-['Inter',sans-serif]">
                                  {p.date}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Right Social connect & Subscribe */}
              <div className="flex items-center gap-4 shrink-0 font-['Inter',sans-serif]">
                <div className="hidden md:flex items-center gap-3 text-white/70">
                  <a href="#" className="hover:text-[#0c77e2] transition-colors" aria-label="Facebook">
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="hover:text-[#0c77e2] transition-colors" aria-label="X (Twitter)">
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="hover:text-[#0c77e2] transition-colors" aria-label="Instagram">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
                <a
                  href="http://eepurl.com/hq-3Xb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#161616] text-[11px] font-extrabold uppercase tracking-[0.5px] px-5 py-2.5 hover:bg-[#0c77e2] hover:text-white transition-colors duration-300 rounded-[2px]"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Space occupant for sticky navigation */}
        {isSticky && <div className="h-[72px] w-full bg-transparent" />}

        {/* Row 2: Mobile Hamburger menu, Trending Topics list, and Search overlay toggle */}
        <div className="bg-white border-b border-[#e8e8e8]">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[48px] relative">
            <div className="flex items-center gap-4 overflow-hidden">
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="text-[#161616] hover:text-[#0c77e2] p-1 transition-colors flex items-center justify-center"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <span className="text-[12px] font-extrabold text-[#666] tracking-wider uppercase whitespace-nowrap font-['Inter',sans-serif]">
                Trending:
              </span>
              <div className="hidden sm:flex items-center gap-5 text-[12.5px] font-bold text-[#161616] font-['Inter',sans-serif]">
                {trending.map((t) => (
                  <Link key={t} href="#" className="hover:text-[#0c77e2] whitespace-nowrap transition-colors">
                    {t}
                  </Link>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#161616] hover:text-[#0c77e2] p-1 transition-colors flex items-center justify-center"
              aria-label="Toggle Search"
            >
              {isSearchOpen ? <X className="w-4.5 h-4.5" /> : <Search className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Sliding Search Overlay Dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#111111] py-4.5 px-6 border-t border-neutral-800 shadow-xl z-[90] animate-slideDown">
            <div className="max-w-[750px] mx-auto flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your search and press Enter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white border-b border-neutral-700 focus:border-white focus:outline-none text-[15px] py-1.5 px-1 font-sans"
                autoFocus
              />
              <button className="bg-[#0c77e2] text-white font-extrabold text-[11.5px] uppercase tracking-wider px-5 py-2 hover:bg-[#0960b8] transition-colors rounded-[2px]">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Row 3: Trending News Ticker */}
        <div className="hidden md:block bg-white border-b border-[#e8e8e8]">
          <div className="max-w-[1200px] mx-auto flex">
            <div className="w-[185px] shrink-0 bg-[#161616] flex items-center justify-center px-3 min-h-[48px]">
              <h2 className="text-white text-[12px] font-black uppercase tracking-[2.5px] font-['Inter',sans-serif]">
                Trending News
              </h2>
            </div>
            <div className="flex-1 flex items-center min-h-[48px] bg-[#f7f7f7] px-4 justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTrendIdx((i) => (i - 1 + trendingHeadlines.length) % trendingHeadlines.length)}
                  className="text-[#888] hover:text-[#0c77e2] p-1.5 shrink-0 transition-colors"
                  aria-label="Previous Headline"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setTrendIdx((i) => (i + 1) % trendingHeadlines.length)}
                  className="text-[#888] hover:text-[#0c77e2] p-1.5 shrink-0 transition-colors"
                  aria-label="Next Headline"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <Link
                href="#"
                className="flex-1 text-center text-[14px] font-semibold text-[#161616] hover:text-[#0c77e2] px-6 line-clamp-1 transition-colors font-['Faustina',serif]"
              >
                {trendingHeadlines[trendIdx]}
              </Link>
              <div className="w-[50px]" /> {/* Spacer to balance arrows */}
            </div>
          </div>
        </div>
      </header>

      {/* ── Slide-in Off-Canvas Mobile/Tablet Drawer Menu ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[120] flex">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Drawer Sidebar Content */}
          <div className="relative flex flex-col w-[300px] h-full bg-[#161616] text-white p-6.5 shadow-2xl z-50 overflow-y-auto animate-slideRight">
            {/* Header: Logo & Close Icon */}
            <div className="flex items-center justify-between mb-8.5">
              <img
                src={VD_LOGO}
                alt="The Voice Daily Logo"
                className="h-7 w-auto object-contain"
                width="209"
                height="35"
              />
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu List links */}
            <nav className="flex flex-col gap-4 border-b border-white/10 pb-7 mb-7 font-['Inter',sans-serif]">
              <span className="text-[9.5px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                Navigation
              </span>
              {nav.map((l, idx) => (
                <Link
                  key={idx}
                  href={l === "Home" ? "/thevoice-daily" : "#"}
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[13px] font-extrabold uppercase tracking-wider text-white hover:text-[#0c77e2] transition-colors"
                >
                  {l}
                </Link>
              ))}
            </nav>

            {/* What's Hot Widget */}
            <div className="mb-7.5 flex flex-col gap-3 font-['Inter',sans-serif]">
              <span className="text-[9.5px] font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
                What's Hot
              </span>
              <div className="flex flex-col gap-4.5 pt-2">
                {HOT_WIDGET_POSTS.map((p, idx) => (
                  <Link
                    key={idx}
                    href={p.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex gap-3.5 items-start group"
                  >
                    <img
                      src={p.img}
                      alt=""
                      className="w-[72px] h-[52px] object-cover flex-shrink-0 bg-neutral-900 rounded-[1px]"
                    />
                    <div>
                      <h4 className="text-[12px] font-bold text-white/90 group-hover:text-[#0c77e2] leading-snug transition-colors line-clamp-3 font-['Faustina',serif]">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="mt-auto border-t border-white/10 pt-6 font-['Inter',sans-serif]">
              <span className="text-[9.5px] font-bold text-white/40 uppercase tracking-widest block mb-3.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0c77e2] text-white/60 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook Connect"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0c77e2] text-white/60 hover:text-white flex items-center justify-center transition-all"
                  aria-label="X Connect"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0c77e2] text-white/60 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram Connect"
                >
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
