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
  Moon, 
  Sun, 
  ChevronDown, 
  Mail,
  CheckSquare
} from "lucide-react";
import { techFeatured, politicsGrid } from "@/lib/everydayNewsData";

export default function EverydayNewsHeader() {
  const [theme, setTheme] = useState("light");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Dynamic date to prevent Next.js hydration mismatch
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    setCurrentDate(`${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`);
    
    // Set initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
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
    alert(`Searching for: ${searchQuery}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="w-full bg-[#111] dark:bg-[#0a0a0a] text-white select-none relative z-50">
      {/* 1. Main Logo & Date Row (Smart Head Mid) */}
      <div className="border-b border-white/5 py-6">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo & Date */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <Link href="/everyday-news" className="block">
              <img 
                src="https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/logo-everydayNews-01-1.png"
                alt="SmartMag Everyday News"
                className="h-[38px] w-auto object-contain brightness-100 invert-0"
              />
            </Link>
            <span className="hidden md:inline-block text-xs font-bold text-gray-400 border-l border-white/10 pl-4 py-1">
              {currentDate || "Thursday, April 30"}
            </span>
          </div>

          {/* Right Area Nav & Socials */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {/* Top Navigation links */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-5 text-[11px] font-black uppercase tracking-widest text-gray-400">
                <li><Link href="#" className="hover:text-[#FB3158] transition-colors">Start Here</Link></li>
                <li><Link href="https://theme-sphere.com/demo/smartmag-landing/" target="_blank" className="hover:text-[#FB3158] transition-colors">Demos</Link></li>
                <li><Link href="#" className="hover:text-[#FB3158] transition-colors">Contact</Link></li>
                <li><Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="hover:text-[#FB3158] transition-colors">Buy Now</Link></li>
              </ul>
            </nav>

            {/* Social Block */}
            <div className="flex items-center gap-3 text-gray-400 border-l border-white/10 pl-5">
              <a href="#" className="hover:text-[#FB3158] transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-[#FB3158] transition-colors"><Twitter size={14} /></a>
              <a href="#" className="hover:text-[#FB3158] transition-colors"><Instagram size={14} /></a>
            </div>

            {/* Subscribe Button */}
            <a 
              href="#subscribe" 
              className="bg-[#FB3158] hover:bg-white hover:text-black text-white text-[11px] font-black uppercase tracking-widest px-4 py-2.5 rounded-sm transition-all duration-300 shadow-lg shadow-black/20"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Menu Row (Sticky-safe) */}
      <div className="bg-white dark:bg-[#161616] text-black dark:text-white border-b border-gray-100 dark:border-white/5 py-4">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          {/* Left Menu toggle & list */}
          <div className="flex items-center gap-6">
            {/* Hamburger menu button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="hover:text-[#FB3158] transition-colors p-1"
              aria-label="Toggle Menu"
            >
              <Menu size={22} />
            </button>

            {/* Main Desktop Nav Menu Links */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-[12px] font-black uppercase tracking-widest">
                <li>
                  <Link href="/everyday-news" className="text-[#FB3158] hover:text-[#FB3158]">Home</Link>
                </li>
                {/* Mega Menu Dropdown 1: Technology */}
                <li className="group relative">
                  <Link href="#" className="hover:text-[#FB3158] transition-colors flex items-center gap-1">
                    Technology <ChevronDown size={12} />
                  </Link>
                  {/* Mega Menu Dropdown Content */}
                  <div className="absolute top-[100%] left-0 w-[800px] bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/5 p-6 rounded-b shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="grid grid-cols-3 gap-6">
                      {techFeatured.map((item, idx) => (
                        <div key={idx} className="group/item cursor-pointer space-y-3">
                          <div className="aspect-[3/2] rounded-sm overflow-hidden bg-gray-50 dark:bg-neutral-800 relative">
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" 
                            />
                            {item.rating && (
                              <div className="absolute bottom-2 right-2 bg-[#FB3158] text-white text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                                {item.rating}
                              </div>
                            )}
                          </div>
                          <h4 className="text-[13px] font-black leading-snug text-gray-800 dark:text-gray-200 group-hover/item:text-[#FB3158] transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FB3158] transition-colors">Fashion</Link>
                </li>
                {/* Mega Menu Dropdown 2: Lifestyle */}
                <li className="group relative">
                  <Link href="#" className="hover:text-[#FB3158] transition-colors flex items-center gap-1">
                    Lifestyle <ChevronDown size={12} />
                  </Link>
                  {/* Mega Menu Dropdown Content */}
                  <div className="absolute top-[100%] left-0 w-[800px] bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/5 p-6 rounded-b shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="grid grid-cols-3 gap-6">
                      {politicsGrid.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="group/item cursor-pointer space-y-3">
                          <div className="aspect-[3/2] rounded-sm overflow-hidden bg-gray-50 dark:bg-neutral-800 relative">
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" 
                            />
                          </div>
                          <h4 className="text-[13px] font-black leading-snug text-gray-800 dark:text-gray-200 group-hover/item:text-[#FB3158] transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li><Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="hover:text-[#FB3158] transition-colors">Buy Theme</Link></li>
              </ul>
            </nav>
          </div>

          {/* Right Action Switchers */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="hover:text-[#FB3158] transition-colors p-1"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Dark Mode Switcher */}
            <div className="flex items-center">
              <button 
                onClick={toggleTheme}
                className="hover:text-[#FB3158] transition-colors p-1 flex items-center justify-center"
                title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sliding Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />
          {/* Drawer Panel */}
          <div className="relative w-full max-w-[340px] bg-[#111] text-white flex flex-col h-full shadow-2xl z-10 p-6 overflow-y-auto animate-slide-in">
            {/* Header close & logo */}
            <div className="flex justify-between items-center mb-10">
              <img 
                src="https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/logo-everydayNews-01@2x.png"
                alt="SmartMag Mobile logo"
                className="h-[28px] w-auto"
              />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FB3158] transition-colors p-1 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <div className="space-y-6">
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                <li><Link href="/everyday-news" className="block py-2 text-[#FB3158]" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                <li><Link href="#" className="block py-2 hover:text-[#FB3158]" onClick={() => setMobileMenuOpen(false)}>Technology</Link></li>
                <li><Link href="#" className="block py-2 hover:text-[#FB3158]" onClick={() => setMobileMenuOpen(false)}>Fashion</Link></li>
                <li><Link href="#" className="block py-2 hover:text-[#FB3158]" onClick={() => setMobileMenuOpen(false)}>Lifestyle</Link></li>
                <li><Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="block py-2 hover:text-[#FB3158]">Buy Theme</Link></li>
              </ul>
            </div>

            <hr className="border-white/5 my-8" />

            {/* Newsletter widget inside drawer */}
            <div className="bg-[#181818] p-5 rounded border border-white/5 space-y-4 text-center">
              <Mail className="mx-auto text-[#FB3158]" size={28} />
              <h3 className="text-md font-black uppercase tracking-wider">Subscribe to Updates</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Get the latest creative news from ThemeSphere about art, design and business.
              </p>
              <form onSubmit={handleSearchSubmit} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required
                  className="w-full text-center bg-white/5 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:bg-white focus:text-black rounded-sm transition-all"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#FB3158] text-white py-2 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm"
                >
                  Subscribe
                </button>
                <p className="text-[9px] text-gray-500 text-left mt-2 flex items-start gap-1">
                  <CheckSquare size={10} className="shrink-0 mt-0.5" />
                  By signing up, you agree to our terms and our Privacy Policy.
                </p>
              </form>
            </div>

            <hr className="border-white/5 my-8" />

            {/* Social Block */}
            <div className="flex justify-center gap-6 text-gray-400 mt-auto pb-4">
              <a href="#" className="hover:text-[#FB3158] transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-[#FB3158] transition-colors"><Twitter size={16} /></a>
              <a href="#" className="hover:text-[#FB3158] transition-colors"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
      )}

      {/* 4. Interactive Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300">
          <button 
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
            aria-label="Close search"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-[600px] px-6 text-center space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#FB3158]">Search Everyday News</h3>
            <form onSubmit={handleSearchSubmit} className="relative border-b-2 border-white/20 focus-within:border-[#FB3158] transition-colors py-2">
              <input 
                type="search" 
                autoFocus
                placeholder="Type to search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-2xl md:text-3xl text-center text-white placeholder-gray-600 focus:outline-none"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={24} />
              </button>
            </form>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Press Enter to search or ESC to close</p>
          </div>
        </div>
      )}
    </header>
  );
}
