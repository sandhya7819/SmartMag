"use client";

import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { NO_LOGO, NO_LOGO_MOBILE } from "@/lib/newsOne24Data";

export default function NewsOne24Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const dateStr = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(dateStr);

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

  const navLinks = [
    { label: "Home", href: "/new-one24" },
    { label: "Features", href: "#", hasDropdown: true },
    { label: "Politics", href: "#", hasDropdown: true },
    { label: "Economy", href: "#" },
    { label: "Technology", href: "#", hasDropdown: true },
    { label: "Sports", href: "#" },
    { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", external: true },
  ];

  return (
    <>
      <header className="w-full font-sans select-none relative z-50">
        {/* Top Dark Bar */}
        <div className="bg-[#111111] text-white border-b border-white/5 py-2.5 hidden lg:block text-[12px] font-medium tracking-wide">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span className="text-white/60">{currentDate}</span>
              <span className="text-white/15">|</span>
              <div className="flex gap-4.5">
                <Link href="#" className="hover:text-[#ffe500] text-white/80 transition-colors">Start Here</Link>
                <Link href="#" className="hover:text-[#ffe500] text-white/80 transition-colors">Demos</Link>
                <Link href="#" className="hover:text-[#ffe500] text-white/80 transition-colors">Contact</Link>
                <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="hover:text-[#ffe500] text-white/80 transition-colors">Buy Now!</Link>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-3 text-white/65">
                <a href="#" className="hover:text-[#ffe500] transition-colors"><Facebook size={13.5} /></a>
                <a href="#" className="hover:text-[#ffe500] transition-colors">
                  <svg className="w-[13.5px] h-[13.5px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#ffe500] transition-colors"><Instagram size={13.5} /></a>
              </div>
              <span className="text-white/15">|</span>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className="text-white/75 hover:text-[#ffe500] flex items-center gap-1 transition-colors"
                aria-label="Search"
              >
                <Search size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div 
          className={`w-full bg-[#161616] text-white border-b border-white/5 py-4 lg:py-0 transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-xl z-[999] animate-slideDown bg-[#161616]/95 backdrop-blur-md" : ""
          }`}
        >
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center lg:h-[76px]">
            {/* Logo */}
            <Link href="/new-one24" className="flex items-center shrink-0">
              <img 
                src={NO_LOGO} 
                alt="NewsOne24 Logo" 
                className="h-[30px] md:h-[34px] w-auto block object-contain brightness-0 invert"
                width={183} 
                height={28} 
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 h-full text-[14.5px] font-bold uppercase tracking-[0.5px]">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group h-full flex items-center">
                  <Link 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    className="hover:text-[#ffe500] text-white/90 h-full flex items-center gap-1 transition-colors py-4"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-[220px] bg-[#161616] border-t-2 border-[#ffe500] py-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.label === "Features" && (
                        <>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">58+ Unique Demos</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Post Styles</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Category Layouts</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Header Styles</a>
                        </>
                      )}
                      {link.label === "Politics" && (
                        <>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">US & Canada</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Europe</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Middle East</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">World Report</a>
                        </>
                      )}
                      {link.label === "Technology" && (
                        <>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Gadgets & Gear</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Information Tech</a>
                          <a href="#" className="block px-5 py-2 text-[12.5px] font-bold text-white/80 hover:bg-white/5 hover:text-[#ffe500] transition-colors">Science & Tech</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Subscribe & Mobile Toggle */}
            <div className="flex items-center gap-4.5">
              <Link 
                href="http://eepurl.com/hq-3Xb" 
                target="_blank" 
                className="hidden md:inline-block bg-[#ffe500] text-[#111111] hover:bg-white hover:text-black font-extrabold text-[12.5px] uppercase tracking-wider px-6 py-2.5 rounded-[2px] transition-colors duration-300 shadow-md shadow-black/10"
              >
                Subscribe
              </Link>
              <button 
                onClick={() => setIsDrawerOpen(true)} 
                className="lg:hidden p-1.5 text-white/90 hover:text-[#ffe500] transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#111111] border-b border-white/10 shadow-2xl py-5 z-40 animate-slideDown">
            <div className="container mx-auto max-w-[700px] px-4 flex gap-3">
              <input
                type="text"
                placeholder="Search articles, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-[2px] px-4 py-2.5 text-[14px] text-white focus:outline-none focus:border-[#ffe500] transition-colors"
                autoFocus
              />
              <button className="bg-[#ffe500] text-black font-bold px-6 rounded-[2px] hover:bg-white transition-colors text-[13px] uppercase tracking-wider">
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Slide-out Off-Canvas Drawer Menu for Mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Overlay Backdrop */}
          <div 
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Drawer Panel */}
          <div className="relative flex flex-col w-[300px] h-full bg-[#111111] text-white p-6 shadow-2xl z-50 overflow-y-auto animate-slideRight">
            <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-6">
              <img 
                src={NO_LOGO_MOBILE} 
                alt="NewsOne24 Logo" 
                className="h-6 w-auto object-contain brightness-0 invert" 
                width={183} 
                height={28}
              />
              <button 
                onClick={() => setIsDrawerOpen(false)} 
                className="p-1.5 text-white/55 hover:text-white transition-colors"
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[14px] font-bold uppercase tracking-wider mb-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white/80 hover:text-[#ffe500] py-1 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Drawer Socials */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-3">Connect With Us</p>
              <div className="flex gap-4 text-white/60">
                <a href="#" className="hover:text-[#ffe500] transition-colors"><Facebook size={16} /></a>
                <a href="#" className="hover:text-[#ffe500] transition-colors">
                  <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#ffe500] transition-colors"><Instagram size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
