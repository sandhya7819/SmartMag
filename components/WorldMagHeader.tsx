"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  Globe, 
  Activity,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { megaMenuTech, megaMenuWorld, tickerCarousel } from "@/lib/worldMagData";

export default function WorldMagHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Close search on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleAccordion = (item: string) => {
    if (activeAccordion === item) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(item);
    }
  };

  const hotPosts = tickerCarousel.slice(0, 3);

  return (
    <>
      {/* Off-Canvas Backdrop */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[9999] transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Off-Canvas Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-[#0c0d13] text-white z-[10000] shadow-2xl transform transition-transform duration-300 overflow-y-auto flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Head */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#090a0f] relative">
          <div className="mx-auto">
            <Link href="/world-mag" onClick={() => setIsDrawerOpen(false)}>
              <img 
                className="h-10 object-contain" 
                src="https://smartmag.theme-sphere.com/world-mag/wp-content/uploads/sites/43/2023/11/logo-WorldMag-01@2x.png" 
                alt="SmartMag WorldMag" 
              />
            </Link>
          </div>
          <button 
            onClick={() => setIsDrawerOpen(false)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1b1c25] hover:bg-[#2ab391] text-white p-1.5 rounded-sm transition-colors"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-8">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Search news..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs rounded-sm focus:outline-none focus:border-[#2ab391] text-white placeholder-white/30"
            />
            <button type="submit" className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors">
              <Search size={14} />
            </button>
          </form>

          {/* Mobile Accordion Menu */}
          <div className="space-y-1">
            <div className="border-b border-white/5 pb-2">
              <Link 
                href="/world-mag" 
                className="flex items-center justify-between py-2 text-sm font-black uppercase tracking-wider text-white hover:text-[#2ab391] transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                Home
              </Link>
            </div>

            <div className="border-b border-white/5 py-2">
              <button 
                onClick={() => toggleAccordion("features")}
                className="w-full flex items-center justify-between py-1 text-sm font-black uppercase tracking-wider text-white hover:text-[#2ab391] transition-colors"
              >
                <span>Features</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeAccordion === "features" ? "rotate-180" : ""}`} />
              </button>
              {activeAccordion === "features" && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  <li><Link href="/world-mag" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#2ab391]">Demo Landing</Link></li>
                  <li><span className="block py-1 text-gray-600 cursor-not-allowed">Post Layouts</span></li>
                  <li><span className="block py-1 text-gray-600 cursor-not-allowed">Category Layouts</span></li>
                </ul>
              )}
            </div>

            <div className="border-b border-white/5 py-2">
              <button 
                onClick={() => toggleAccordion("tech")}
                className="w-full flex items-center justify-between py-1 text-sm font-black uppercase tracking-wider text-white hover:text-[#2ab391] transition-colors"
              >
                <span>Technology</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeAccordion === "tech" ? "rotate-180" : ""}`} />
              </button>
              {activeAccordion === "tech" && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {megaMenuTech.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        href="/world-mag" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="block py-1 hover:text-[#2ab391] line-clamp-1 normal-case font-bold text-xs"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-b border-white/5 py-2">
              <Link 
                href="/world-mag" 
                className="flex items-center justify-between py-2 text-sm font-black uppercase tracking-wider text-white hover:text-[#2ab391] transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                Sports
              </Link>
            </div>

            <div className="border-b border-white/5 py-2">
              <button 
                onClick={() => toggleAccordion("world")}
                className="w-full flex items-center justify-between py-1 text-sm font-black uppercase tracking-wider text-white hover:text-[#2ab391] transition-colors"
              >
                <span>World</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeAccordion === "world" ? "rotate-180" : ""}`} />
              </button>
              {activeAccordion === "world" && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {megaMenuWorld.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        href="/world-mag" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="block py-1 hover:text-[#2ab391] line-clamp-1 normal-case font-bold text-xs"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Off-Canvas Widgets: Newsletter */}
          <div className="bg-white/5 p-5 rounded-sm border border-white/5 space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2ab391] flex items-center gap-1.5">
              <TrendingUp size={12} /> Subscribe to Updates
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="space-y-2.5">
              <input 
                type="email" 
                placeholder="Your email address.." 
                required 
                className="w-full bg-[#1c1d26] border border-white/10 px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-[#2ab391] text-white placeholder-white/30"
              />
              <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight">
                <input type="checkbox" required className="mt-0.5 rounded-sm bg-black border-white/15 text-[#2ab391] focus:ring-0 focus:ring-offset-0" />
                <span>By signing up, you agree to our terms and privacy policy.</span>
              </label>
              <button 
                type="submit" 
                className="w-full bg-[#2ab391] hover:bg-[#239579] text-white py-2 text-[10px] font-black uppercase tracking-widest transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Off-Canvas Widgets: Hot List */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">What's Hot</h4>
            <div className="space-y-4">
              {hotPosts.map((post, idx) => (
                <div key={idx} className="flex gap-3 group">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-16 h-12 object-cover rounded-sm bg-white/5 shrink-0" 
                  />
                  <div className="space-y-1">
                    <h5 className="text-[11px] font-bold text-gray-200 line-clamp-2 hover:text-[#2ab391] transition-colors leading-snug">
                      <Link href="/world-mag" onClick={() => setIsDrawerOpen(false)}>{post.title}</Link>
                    </h5>
                    <span className="text-[8px] text-gray-500 font-bold uppercase block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials follow */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/5">
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#2ab391] hover:bg-[#2ab391] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Facebook size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#2ab391] hover:bg-[#2ab391] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Twitter size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#2ab391] hover:bg-[#2ab391] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Instagram size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#2ab391] hover:bg-[#2ab391] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Youtube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Desktop Header */}
      <header className="bg-[#090b11] text-white w-full sticky top-0 z-[90] shadow-xl font-sans">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="flex items-center justify-between h-[80px] lg:h-[96px]">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/world-mag" className="logo-link">
                <img 
                  src="https://smartmag.theme-sphere.com/world-mag/wp-content/uploads/sites/43/2023/11/logo-WorldMag-01.png" 
                  alt="SmartMag WorldMag Logo" 
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full ml-10">
              <ul className="flex items-center h-full space-x-1 font-bold text-xs uppercase tracking-wider text-gray-100">
                {/* Home */}
                <li className="relative group h-full flex items-center">
                  <Link 
                    href="/world-mag" 
                    className="px-4 py-2 hover:text-[#2ab391] transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#2ab391] after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform duration-200"
                  >
                    Home
                  </Link>
                </li>

                {/* Features */}
                <li className="relative group h-full flex items-center">
                  <button className="px-4 py-2 flex items-center gap-1.5 hover:text-[#2ab391] transition-colors uppercase tracking-wider">
                    <span>Features</span>
                    <ChevronDown size={12} className="text-gray-400 group-hover:text-[#2ab391]" />
                  </button>
                  {/* Dropdown Menu */}
                  <ul className="absolute top-[100%] left-0 w-[220px] bg-[#0d0f17] border border-white/5 p-2 rounded-sm shadow-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 space-y-1">
                    <li><Link href="/world-mag" className="block px-4 py-2.5 text-[10px] uppercase font-bold text-gray-300 hover:bg-white/5 hover:text-[#2ab391] transition-colors rounded-sm">Demo Landing</Link></li>
                    <li><span className="block px-4 py-2.5 text-[10px] uppercase font-bold text-gray-600 cursor-not-allowed">Standard Page</span></li>
                    <li><span className="block px-4 py-2.5 text-[10px] uppercase font-bold text-gray-600 cursor-not-allowed">Category Layouts</span></li>
                    <li><span className="block px-4 py-2.5 text-[10px] uppercase font-bold text-gray-600 cursor-not-allowed">Post Layouts</span></li>
                  </ul>
                </li>

                {/* Technology Mega Menu */}
                <li className="group h-full flex items-center static">
                  <button className="px-4 py-2 flex items-center gap-1.5 hover:text-[#2ab391] transition-colors uppercase tracking-wider">
                    <span>Technology</span>
                    <ChevronDown size={12} className="text-gray-400 group-hover:text-[#2ab391]" />
                  </button>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-0 right-0 w-full bg-[#0d0f17] border-b border-white/5 shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[120]">
                    <div className="container mx-auto max-w-[1200px] px-8 py-8">
                      <div className="grid grid-cols-5 gap-6">
                        {megaMenuTech.map((item, idx) => (
                          <div key={idx} className="space-y-3 group/item cursor-pointer">
                            <div className="aspect-[3/2] w-full overflow-hidden rounded-sm bg-white/5 relative">
                              <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-widest block">{item.cat}</span>
                              <h5 className="text-xs font-bold text-white leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                                <Link href="/world-mag">{item.title}</Link>
                              </h5>
                              <span className="text-[9px] text-gray-500 font-bold block uppercase">{item.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* Sports */}
                <li className="relative group h-full flex items-center">
                  <Link 
                    href="/world-mag" 
                    className="px-4 py-2 hover:text-[#2ab391] transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#2ab391] after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform duration-200"
                  >
                    Sports
                  </Link>
                </li>

                {/* World Mega Menu */}
                <li className="group h-full flex items-center static">
                  <button className="px-4 py-2 flex items-center gap-1.5 hover:text-[#2ab391] transition-colors uppercase tracking-wider">
                    <span>World</span>
                    <ChevronDown size={12} className="text-gray-400 group-hover:text-[#2ab391]" />
                  </button>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-0 right-0 w-full bg-[#0d0f17] border-b border-white/5 shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[120]">
                    <div className="container mx-auto max-w-[1200px] px-8 py-8">
                      <div className="flex gap-8 justify-center">
                        {megaMenuWorld.map((item, idx) => (
                          <div key={idx} className="w-[280px] space-y-3 group/item cursor-pointer shrink-0">
                            <div className="aspect-[3/2] w-full overflow-hidden rounded-sm bg-white/5 relative">
                              <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-widest block">{item.cat}</span>
                              <h5 className="text-xs font-bold text-white leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                                <Link href="/world-mag">{item.title}</Link>
                              </h5>
                              <span className="text-[9px] text-gray-500 font-bold block uppercase">{item.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Right Tools */}
            <div className="flex items-center space-x-3.5">
              {/* Social icons */}
              <div className="hidden lg:flex items-center space-x-2">
                <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#2ab391] flex items-center justify-center text-gray-300 hover:text-white transition-all"><Facebook size={12} /></a>
                <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#2ab391] flex items-center justify-center text-gray-300 hover:text-white transition-all"><Twitter size={12} /></a>
                <a href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#2ab391] flex items-center justify-center text-gray-300 hover:text-white transition-all"><Instagram size={12} /></a>
              </div>

              {/* Vertical Separator */}
              <div className="hidden lg:block w-px h-5 bg-white/10" />

              {/* Search Toggle */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-300 hover:text-[#2ab391] p-1.5 transition-colors focus:outline-none"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Hamburger Toggler */}
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="text-gray-300 hover:text-[#2ab391] p-1.5 transition-colors focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#07070b]/98 z-[20000] flex items-center justify-center p-6 animate-fade-in">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Close search"
          >
            <X size={36} className="stroke-[1.5]" />
          </button>

          <div className="w-full max-w-[720px] text-center space-y-6">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text" 
                placeholder="Type and press Enter to search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#2ab391] text-3xl md:text-5xl font-black text-white placeholder-white/10 pb-4 outline-none transition-colors text-center"
              />
            </form>
            <p className="text-sm text-gray-400 tracking-wider font-semibold uppercase">
              Press <kbd className="bg-white/5 px-2 py-1 rounded text-white text-xs">Esc</kbd> to close.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
