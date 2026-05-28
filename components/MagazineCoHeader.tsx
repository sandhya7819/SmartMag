"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  TrendingUp, 
  Moon, 
  Sun 
} from "lucide-react";
import { lifestyleMegaMenu, newsMegaMenu, offCanvasHot } from "@/lib/magazineCoData";

export default function MagazineCoHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [theme, setTheme] = useState("light");

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

  // Initialize theme
  useEffect(() => {
    if (window.location.pathname.includes("magazine-co") || window.location.pathname.includes("maqazine-co")) {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

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
            <Link href="/magazine-co" onClick={() => setIsDrawerOpen(false)}>
              <img 
                className="h-7 object-contain" 
                src="https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/LOGO-MAGAZINE-CO-01-mobile.png" 
                alt="SmartMag Magazine Co." 
              />
            </Link>
          </div>
          <button 
            onClick={() => setIsDrawerOpen(false)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1b1c25] hover:bg-[#3b82f6] text-white p-1.5 rounded-sm transition-colors"
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
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs rounded-sm focus:outline-none focus:border-[#3b82f6] text-white placeholder-white/30"
            />
            <button type="submit" className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors">
              <Search size={14} />
            </button>
          </form>

          {/* Mobile Accordion Menu */}
          <div className="space-y-1">
            <div className="border-b border-white/5 pb-2">
              <Link 
                href="/magazine-co" 
                className="flex items-center justify-between py-2 text-sm font-black uppercase tracking-wider text-white hover:text-[#3b82f6] transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                Home
              </Link>
            </div>

            <div className="border-b border-white/5 py-2">
              <button 
                onClick={() => toggleAccordion("features")}
                className="w-full flex items-center justify-between py-1 text-sm font-black uppercase tracking-wider text-white hover:text-[#3b82f6] transition-colors"
              >
                <span>Features</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeAccordion === "features" ? "rotate-180" : ""}`} />
              </button>
              {activeAccordion === "features" && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  <li><Link href="/magazine-co" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#3b82f6]">Demo Landing</Link></li>
                  <li><span className="block py-1 text-gray-600 cursor-not-allowed">Post Layouts</span></li>
                  <li><span className="block py-1 text-gray-600 cursor-not-allowed">Category Layouts</span></li>
                </ul>
              )}
            </div>

            <div className="border-b border-white/5 py-2">
              <button 
                onClick={() => toggleAccordion("lifestyle")}
                className="w-full flex items-center justify-between py-1 text-sm font-black uppercase tracking-wider text-white hover:text-[#3b82f6] transition-colors"
              >
                <span>Lifestyle</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeAccordion === "lifestyle" ? "rotate-180" : ""}`} />
              </button>
              {activeAccordion === "lifestyle" && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {lifestyleMegaMenu.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        href="/magazine-co" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="block py-1 hover:text-[#3b82f6] line-clamp-1 normal-case font-bold text-xs"
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
                href="/magazine-co" 
                className="flex items-center justify-between py-2 text-sm font-black uppercase tracking-wider text-white hover:text-[#3b82f6] transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                Technology
              </Link>
            </div>

            <div className="border-b border-white/5 py-2">
              <button 
                onClick={() => toggleAccordion("news")}
                className="w-full flex items-center justify-between py-1 text-sm font-black uppercase tracking-wider text-white hover:text-[#3b82f6] transition-colors"
              >
                <span>News</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeAccordion === "news" ? "rotate-180" : ""}`} />
              </button>
              {activeAccordion === "news" && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {newsMegaMenu.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        href="/magazine-co" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="block py-1 hover:text-[#3b82f6] line-clamp-1 normal-case font-bold text-xs"
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
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#3b82f6] flex items-center gap-1.5">
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
                className="w-full bg-[#1c1d26] border border-white/10 px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-[#3b82f6] text-white placeholder-white/30"
              />
              <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight">
                <input type="checkbox" required className="mt-0.5 rounded-sm bg-black border-white/15 text-[#3b82f6] focus:ring-0 focus:ring-offset-0" />
                <span>By signing up, you agree to our terms and privacy policy.</span>
              </label>
              <button 
                type="submit" 
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-2 text-[10px] font-black uppercase tracking-widest transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Off-Canvas Widgets: What's Hot */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">What's Hot</h4>
            <div className="space-y-4">
              {offCanvasHot.map((post, idx) => (
                <div key={idx} className="flex gap-3 group">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-16 h-12 object-cover rounded-sm bg-white/5 shrink-0" 
                  />
                  <div className="space-y-1">
                    <h5 className="text-[11px] font-bold text-gray-200 line-clamp-2 hover:text-[#3b82f6] transition-colors leading-snug">
                      <Link href="/magazine-co" onClick={() => setIsDrawerOpen(false)}>{post.title}</Link>
                    </h5>
                    <span className="text-[8px] text-gray-500 font-bold uppercase block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials follow */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/5">
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#3b82f6] hover:bg-[#3b82f6] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Facebook size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#3b82f6] hover:bg-[#3b82f6] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Twitter size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-[#3b82f6] hover:bg-[#3b82f6] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Desktop Header */}
      <header className="bg-white dark:bg-[#111217] border-b border-gray-100 dark:border-white/5 w-full z-[90] font-sans">
        {/* Row 1: Top Bar */}
        <div className="border-b border-gray-100 dark:border-white/5 py-4">
          <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between">
            {/* Social Links */}
            <div className="flex items-center space-x-3 text-gray-400">
              <a href="#" className="hover:text-[#3b82f6] transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors"><Twitter size={14} /></a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors"><Instagram size={14} /></a>
            </div>

            {/* Logo */}
            <div>
              <Link href="/magazine-co">
                <img 
                  src={theme === "dark" 
                    ? "https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/LOGO-MAGAZINE-CO-01-light.png" 
                    : "https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/LOGO-MAGAZINE-CO-01.png"
                  } 
                  alt="SmartMag Magazine Co. Logo" 
                  className="h-8 lg:h-9 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Subscribe Button */}
            <div>
              <Link 
                href="/magazine-co" 
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 transition-colors rounded-sm"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Navigation Bar */}
        <div className="sticky top-0 bg-white dark:bg-[#111217] border-b border-gray-100 dark:border-white/5 z-50">
          <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between h-[54px]">
            {/* Hamburger Toggle */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="text-gray-900 dark:text-white hover:text-[#3b82f6] p-2 transition-colors focus:outline-none"
                aria-label="Open Menu"
              >
                <Menu size={18} />
              </button>
            </div>

            {/* Centered Navigation */}
            <nav className="hidden lg:flex items-center h-full">
              <ul className="flex items-center h-full space-x-8 font-black text-xs uppercase tracking-widest text-gray-800 dark:text-gray-200">
                <li className="h-full flex items-center">
                  <Link href="/magazine-co" className="hover:text-[#3b82f6] transition-colors py-4">Home</Link>
                </li>

                {/* Features */}
                <li className="relative group h-full flex items-center">
                  <button className="flex items-center gap-1 hover:text-[#3b82f6] transition-colors uppercase py-4">
                    <span>Features</span>
                    <ChevronDown size={11} className="text-gray-400 group-hover:text-[#3b82f6]" />
                  </button>
                  <ul className="absolute top-[100%] left-0 w-[220px] bg-white dark:bg-[#111217] border border-gray-100 dark:border-white/5 p-2 rounded-sm shadow-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 space-y-1 z-50">
                    <li><Link href="/magazine-co" className="block px-4 py-2.5 text-[9px] uppercase font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#3b82f6] transition-colors rounded-sm">Demo Landing</Link></li>
                    <li><span className="block px-4 py-2.5 text-[9px] uppercase font-bold text-gray-300 dark:text-gray-600 cursor-not-allowed">Standard Page</span></li>
                    <li><span className="block px-4 py-2.5 text-[9px] uppercase font-bold text-gray-300 dark:text-gray-600 cursor-not-allowed">Category Layouts</span></li>
                  </ul>
                </li>

                {/* Lifestyle Mega Menu */}
                <li className="group h-full flex items-center static">
                  <button className="flex items-center gap-1 hover:text-[#3b82f6] transition-colors uppercase py-4">
                    <span>Lifestyle</span>
                    <ChevronDown size={11} className="text-gray-400 group-hover:text-[#3b82f6]" />
                  </button>
                  <div className="absolute top-[100%] left-0 right-0 w-full bg-white dark:bg-[#111217] border-b border-gray-100 dark:border-white/5 shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[120]">
                    <div className="container mx-auto max-w-[1200px] px-8 py-8">
                      <div className="grid grid-cols-5 gap-6">
                        {lifestyleMegaMenu.map((item, idx) => (
                          <div key={idx} className="space-y-3 group/item cursor-pointer">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-sm bg-gray-50 dark:bg-neutral-800 relative">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{item.category}</span>
                              <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                                <Link href="/magazine-co">{item.title}</Link>
                              </h5>
                              <span className="text-[9px] text-gray-400 font-bold block uppercase">{item.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="h-full flex items-center">
                  <Link href="/magazine-co" className="hover:text-[#3b82f6] transition-colors py-4">Technology</Link>
                </li>

                {/* News Mega Menu */}
                <li className="group h-full flex items-center static">
                  <button className="flex items-center gap-1 hover:text-[#3b82f6] transition-colors uppercase py-4">
                    <span>News</span>
                    <ChevronDown size={11} className="text-gray-400 group-hover:text-[#3b82f6]" />
                  </button>
                  <div className="absolute top-[100%] left-0 right-0 w-full bg-white dark:bg-[#111217] border-b border-gray-100 dark:border-white/5 shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[120]">
                    <div className="container mx-auto max-w-[1200px] px-8 py-8">
                      <div className="grid grid-cols-5 gap-6">
                        {newsMegaMenu.map((item, idx) => (
                          <div key={idx} className="space-y-3 group/item cursor-pointer">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-sm bg-gray-50 dark:bg-neutral-800 relative">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{item.category}</span>
                              <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                                <Link href="/magazine-co">{item.title}</Link>
                              </h5>
                              <span className="text-[9px] text-gray-400 font-bold block uppercase">{item.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Right switchers / Search */}
            <div className="flex items-center space-x-4 text-gray-800 dark:text-gray-200">
              <button 
                onClick={toggleTheme}
                className="hover:text-[#3b82f6] transition-colors p-1"
                aria-label="Toggle Theme Mode"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-[#3b82f6] transition-colors p-1"
                aria-label="Open Search"
              >
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Header */}
      <header className="bg-[#0b0c11] text-white h-[60px] lg:hidden flex items-center justify-between px-4 sticky top-0 z-[80] shadow-md">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="text-white hover:text-[#3b82f6] p-2 focus:outline-none"
          aria-label="Open Mobile Menu"
        >
          <Menu size={20} />
        </button>
        <div>
          <Link href="/magazine-co">
            <img 
              src="https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/LOGO-MAGAZINE-CO-01-mobile.png" 
              alt="Mobile Logo" 
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="text-white hover:text-[#3b82f6] p-2 focus:outline-none"
          aria-label="Open Search"
        >
          <Search size={18} />
        </button>
      </header>

      {/* Full-Screen Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 z-[20000] flex items-center justify-center p-6 animate-fade-in">
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
                className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#3b82f6] text-2xl md:text-4xl font-black text-white placeholder-white/10 pb-4 outline-none transition-colors text-center"
              />
            </form>
            <p className="text-xs text-gray-500 tracking-widest font-semibold uppercase">
              Press <kbd className="bg-white/5 px-2 py-1 rounded text-white text-[10px]">Esc</kbd> to close.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
