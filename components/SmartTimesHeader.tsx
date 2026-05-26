"use client";

import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Search, Menu, X, ChevronDown, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

/* ─── Trending Ticker Articles ─── */
const TICKER_ARTICLES = [
  "SpaceX Launches Starlink Satellites on ‘American Broomstick’ and Lands Rocket at Sea",
  "The China-Built Ship that Pulled a US Navy Jet Wreck from the South China Sea",
  "Anti-War Protests Intensify in World Along with Crackdown",
  "US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers",
  "U.S. Warns Financial Institutions to be on Watch for Russian Sanctions",
  "Everything You Need to Know About Personal Finance: Pocket-sized Edition",
  "EXCLUSIVE: US Tax Reform to Focus on Individuals, Natural",
  "Healthcare Alliance’s CFO to Scale, Lock Down Finance Functions"
];

/* ─── Mega Menu Posts (Politics & Sports) ─── */
const MEGA_POLITICS = [
  {
    category: "World",
    title: "US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers",
    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/cibi-chakravarthi-WPEx2mvZg20-unsplash-450x206.jpg",
    date: "Mar 11, 2022",
    link: "#"
  },
  {
    category: "Europe",
    title: "Queen Elizabeth the Last! Monarchy Faces Fresh Demand to be Axed",
    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2021/01/Depositphotos_427179760_xl-2015-450x300.jpg",
    date: "Jan 20, 2021",
    rating: "7.2",
    link: "#"
  },
  {
    category: "US Politics",
    title: "A New Asset Class? Bitcoin’s Bid to Go Mainstream",
    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_373474714_XL-1-450x253.jpg",
    date: "Jan 12, 2021",
    link: "#"
  },
  {
    category: "World",
    title: "Review: How Hard will it be to Defend Ukraine from Russia?",
    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/kedar-gadge-A69UZJ5cnaQ-unsplash-11-450x300.jpg",
    date: "Jan 12, 2021",
    rating: "8.5",
    link: "#"
  }
];

export default function SmartTimesHeader() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  // Update trending ticker index
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_ARTICLES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Sticky header behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format current date
  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    };
    setCurrentDate(new Date().toLocaleDateString("en-US", options));
  }, []);

  return (
    <>
      <header className="w-full bg-white font-sans text-black relative z-40">
        
        {/* ══ 1. TOP ROW (TRENDING TICKER) ══ */}
        <div className="bg-[#111] text-white py-2 border-b border-white/5 hidden lg:block text-[11px] font-black uppercase tracking-widest">
          <div className="container mx-auto px-4 flex justify-between items-center">
            
            {/* Ticker Container */}
            <div className="flex gap-4 items-center flex-1 min-w-0">
              <span className="bg-[#e21c23] text-white px-2.5 py-1 text-[10px] font-black rounded-sm tracking-[1.5px]">
                TRENDING
              </span>
              <div className="relative overflow-hidden h-5 flex-1 max-w-[650px] flex items-center">
                {TICKER_ARTICLES.map((article, idx) => (
                  <span
                    key={idx}
                    className={`absolute left-0 transition-all duration-700 ease-in-out truncate w-full text-white/90 hover:text-[#e21c23] cursor-pointer ${
                      idx === tickerIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                  >
                    {article}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Menu Links */}
            <div className="flex gap-6 uppercase text-[10.5px] tracking-[1.5px] font-black text-gray-300">
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Start Here</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Demos</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Contact</Link>
              <Link href="#" className="text-[#e21c23] font-black hover:text-white transition-colors">Buy Now!</Link>
            </div>

          </div>
        </div>

        {/* ══ 2. MIDDLE ROW (SOCIALS, LOGO, SUBSCRIBE) ══ */}
        <div className="bg-white py-8 border-b border-gray-100 hidden lg:block">
          <div className="container mx-auto px-4 flex justify-between items-center relative">
            
            {/* Social Block */}
            <div className="flex gap-5 items-center">
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all">
                <Facebook size={14} className="text-black/70 hover:text-inherit" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all">
                <Twitter size={14} className="text-black/70 hover:text-inherit" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all">
                <Instagram size={14} className="text-black/70 hover:text-inherit" />
              </Link>
            </div>

            {/* Centered Logo */}
            <Link href="/smart-times" className="absolute left-1/2 -translate-x-1/2">
              <img
                src="https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/The-Smart-Times-Logo01.png"
                alt="SmartMag SmartTimes"
                width={335}
                height={40}
                className="max-h-[42px] object-contain"
              />
            </Link>

            {/* Subscribe Button */}
            <button className="bg-[#e21c23] text-white text-[11px] font-black uppercase tracking-[2.5px] px-8 py-3 rounded-sm shadow-sm hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all">
              Subscribe
            </button>

          </div>
        </div>

        {/* ══ 3. BOTTOM NAVIGATION (STICKY NAVIGATION) ══ */}
        <nav
          className={`w-full bg-white border-b border-gray-200 hidden lg:block ${
            isSticky
              ? "fixed top-0 left-0 right-0 shadow-md animate-slideDown z-50 border-b border-gray-200"
              : "relative"
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center h-[54px]">
            
            {/* Dynamic Calendar Date (only shows if not sticky) */}
            <div className="w-[180px] text-gray-500 text-[11px] font-bold uppercase tracking-wider flex items-center gap-2">
              {!isSticky && (
                <>
                  <Calendar size={13} className="text-[#e21c23]" />
                  <span>{currentDate || "Thursday, May 14"}</span>
                </>
              )}
              {isSticky && (
                <Link href="/smart-times">
                  <img
                    src="https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/The-Smart-Times-Logo01.png"
                    alt="SmartTimes"
                    width={180}
                    height={22}
                    className="max-h-[22px] object-contain"
                  />
                </Link>
              )}
            </div>

            {/* Main Menu Links with Mega Menu */}
            <div className="flex gap-8 text-[12.5px] font-black uppercase tracking-wider text-black/90 h-full items-center">
              <Link href="/smart-times" className="text-[#e21c23] border-b-[3px] border-[#e21c23] h-full flex items-center px-1">
                Home
              </Link>
              
              {/* Features Dropdown */}
              <div className="relative group h-full flex items-center">
                <Link href="#" className="hover:text-[#e21c23] transition-colors flex items-center gap-1 group px-1">
                  Features <ChevronDown size={12} className="opacity-50" />
                </Link>
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 py-3 w-[220px] hidden group-hover:block transition-all animate-fadeIn">
                  {[
                    "58+ Unique Demos",
                    "Post Styles",
                    "Category Layouts",
                    "Header Styles",
                    "Homepage Blocks",
                    "12+ Premium Widgets",
                    "Review Posts",
                    "Shop / WooCommerce"
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="px-5 py-2 text-[12px] font-bold text-gray-700 hover:text-[#e21c23] hover:bg-gray-50 flex justify-between items-center transition-all"
                    >
                      {item} <ChevronRight size={12} className="opacity-30" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Politics Dropdown with Hover Mega Menu */}
              <div className="group h-full flex items-center static">
                <Link href="#" className="hover:text-[#e21c23] transition-colors flex items-center gap-1 px-1">
                  Politics <ChevronDown size={12} className="opacity-50" />
                </Link>
                
                {/* POLITICS MEGA MENU DRAWER */}
                <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-y border-gray-200 py-6 hidden group-hover:block transition-all animate-fadeIn z-50">
                  <div className="container mx-auto px-4 grid grid-cols-12 gap-8">
                    
                    {/* Subcategories (left col) */}
                    <div className="col-span-2 border-r border-gray-100 pr-4 flex flex-col gap-3 text-[12px] font-bold text-gray-500">
                      <Link href="#" className="text-[#e21c23] pl-2 border-l-2 border-[#e21c23]">World</Link>
                      <Link href="#" className="hover:text-[#e21c23] transition-all pl-2 hover:translate-x-1">Europe</Link>
                      <Link href="#" className="hover:text-[#e21c23] transition-all pl-2 hover:translate-x-1">US Politics</Link>
                      <Link href="#" className="hover:text-[#e21c23] transition-all pl-2 hover:translate-x-1 font-black mt-2 text-black">View All</Link>
                    </div>

                    {/* Recent Politics Posts Grid */}
                    <div className="col-span-10 grid grid-cols-4 gap-6">
                      {MEGA_POLITICS.map((post, idx) => (
                        <div key={idx} className="group/item cursor-pointer space-y-3">
                          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
                            <img
                              src={post.img}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                            />
                            {post.rating && (
                              <div className="absolute bottom-2 right-2 bg-[#e21c23] text-white text-[9.5px] font-black px-1.5 py-0.5 rounded-sm">
                                ★ {post.rating}
                              </div>
                            )}
                          </div>
                          <div className="space-y-1">
                            <span className="text-[9.5px] font-black text-[#e21c23] tracking-widest">{post.category}</span>
                            <h5 className="text-[12.5px] font-black leading-tight group-hover/item:text-[#e21c23] transition-colors line-clamp-2">
                              {post.title}
                            </h5>
                            <span className="text-[10px] text-gray-400">{post.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

              <Link href="#" className="hover:text-[#e21c23] transition-colors px-1">Money</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors px-1">Sports</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors px-1">Opinion</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors px-1 text-[#e21c23]">Europe</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors px-1">Buy Theme</Link>
            </div>

            {/* Search and Mobile Drawer Toggle */}
            <div className="w-[180px] flex justify-end items-center gap-5 text-black">
              <Search
                size={18}
                className="cursor-pointer hover:text-[#e21c23] stroke-[2.5] transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              <Menu
                size={20}
                className="cursor-pointer hover:text-[#e21c23] stroke-[2.5] transition-colors"
                onClick={() => setOffCanvasOpen(true)}
              />
            </div>

          </div>

          {/* Search Dropdown Overlay */}
          {searchOpen && (
            <div className="bg-black/95 text-white absolute left-0 right-0 top-full py-6 border-t border-white/10 z-50 flex items-center justify-center animate-slideDown">
              <div className="w-full max-w-[600px] px-4 flex items-center gap-3 relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#e21c23] transition-all text-white placeholder:text-gray-500 rounded-sm"
                  autoFocus
                />
                <X
                  size={20}
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={() => setSearchOpen(false)}
                />
              </div>
            </div>
          )}
        </nav>

        {/* ══ 4. MOBILE MOBILE HEADER ══ */}
        <div className="lg:hidden bg-[#111] text-white border-b border-white/5 h-[56px] fixed top-0 left-0 right-0 z-50 shadow-md">
          <div className="px-4 h-full flex justify-between items-center">
            
            <button
              onClick={() => setOffCanvasOpen(true)}
              className="text-white hover:text-[#e21c23] transition-colors"
            >
              <Menu size={22} className="stroke-[2.5]" />
            </button>

            <Link href="/smart-times" className="mx-auto">
              <img
                src="https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/smarttimes-logo-mobile-white-1.png"
                alt="SmartMag SmartTimes"
                width={150}
                height={22}
                className="max-h-[22px] object-contain"
              />
            </Link>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-[#e21c23] transition-colors"
            >
              <Search size={20} className="stroke-[2.5]" />
            </button>

          </div>
        </div>

      </header>

      {/* spacer to prevent content shift from mobile sticky header */}
      <div className="lg:hidden h-[56px]" />

      {/* ══ 5. OFF-CANVAS MENU DRAWER ══ */}
      {offCanvasOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ease-in-out"
            onClick={() => setOffCanvasOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 bottom-0 left-0 w-[300px] md:w-[340px] bg-[#1a1a1a] text-white shadow-2xl z-[60] overflow-y-auto transform transition-transform duration-300 ease-in-out flex flex-col font-sans">
            
            {/* Header */}
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <img
                src="https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/smarttimes-logo-mobile-white-1.png"
                alt="SmartTimes"
                width={150}
                className="max-h-[22px] object-contain"
              />
              <button
                onClick={() => setOffCanvasOpen(false)}
                className="text-white hover:text-[#e21c23] transition-colors"
              >
                <X size={20} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="px-6 py-4 flex flex-col gap-4 text-[14px] font-black uppercase tracking-wider border-b border-white/10">
              <Link href="/smart-times" className="text-[#e21c23]" onClick={() => setOffCanvasOpen(false)}>Home</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Features</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Politics</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Money</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Sports</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Opinion</Link>
              <Link href="#" className="hover:text-[#e21c23] transition-colors">Europe</Link>
            </div>

            {/* What's Hot Section */}
            <div className="p-6 border-b border-white/10 space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-[2px] text-white border-b border-[#e21c23] pb-2 inline-block">
                What&apos;s Hot
              </h4>
              <div className="space-y-4">
                {[
                  {
                    title: "SpaceX Launches Starlink Satellites on ‘American Broomstick’ and Lands Rocket at Sea",
                    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/spacex-Ptd-iTdrCJM-unsplash-300x200.jpg",
                    date: "Mar 11, 2022"
                  },
                  {
                    title: "The China-Built Ship that Pulled a US Navy Jet Wreck from the South China Sea",
                    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/arron-choi-cMyTiCrgnbE-unsplash-300x169.jpg",
                    date: "Mar 11, 2022"
                  },
                  {
                    title: "Anti-War Protests Intensify in World Along with Crackdown",
                    img: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/gayatri-malhotra-fhxGJj9lz-k-unsplash-1-300x200.jpg",
                    date: "Mar 11, 2022"
                  }
                ].map((post, idx) => (
                  <div key={idx} className="flex gap-3 group cursor-pointer items-start">
                    <img
                      src={post.img}
                      alt="post thumbnail"
                      className="w-[70px] h-[50px] object-cover rounded-sm shrink-0 border border-white/5"
                    />
                    <div className="space-y-0.5 min-w-0">
                      <h5 className="text-[12px] font-bold leading-tight line-clamp-2 hover:text-[#e21c23] transition-colors">
                        {post.title}
                      </h5>
                      <span className="text-[9.5px] text-gray-500 font-bold uppercase tracking-widest">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Block */}
            <div className="p-6 flex gap-4 justify-start items-center">
              <Facebook size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>

          </div>
        </>
      )}
    </>
  );
}
