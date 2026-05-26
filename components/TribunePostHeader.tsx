"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, X, ChevronDown } from "lucide-react";

export default function TribunePostHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 font-sans">
        {/* Top Branding Row */}
        <div className="border-b border-gray-100 hidden md:block">
          <div className="container mx-auto max-w-[1200px] px-4 py-4 flex justify-between items-center">
            {/* Left: Social Media Connect */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0086F9] hover:border-[#0086F9] transition-all">
                <Facebook size={14} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0086F9] hover:border-[#0086F9] transition-all">
                <span className="text-[12px] font-bold">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0086F9] hover:border-[#0086F9] transition-all">
                <Instagram size={14} />
              </a>
            </div>

            {/* Center: Centered Branding Logo */}
            <Link href="/tribune-post" className="block">
              <img
                src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/01/Logo-TribunePost-01.png"
                alt="SmartMag TribunePost"
                width={275}
                height={38}
                className="h-10 w-auto object-contain mx-auto"
              />
            </Link>

            {/* Right: Subscribe Link Button */}
            <div>
              <a
                href="http://eepurl.com/hq-3Xb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0086F9] hover:bg-black text-white text-[11px] font-black uppercase tracking-wider px-6 py-3 transition-colors duration-300 rounded-none shadow-sm"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Header Row */}
        <div className="md:hidden border-b border-gray-100 py-3 px-4 bg-white flex justify-between items-center">
          <button onClick={() => setIsDrawerOpen(true)} className="text-gray-900 focus:outline-none">
            <Menu size={24} />
          </button>
          
          <Link href="/tribune-post">
            <img
              src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/02/Logo-TribunePost-01@15x.png"
              alt="SmartMag TribunePost"
              width={160}
              height={22}
              className="h-6 w-auto object-contain"
            />
          </Link>

          <button onClick={() => setIsSearchOpen(true)} className="text-gray-900 focus:outline-none">
            <Search size={22} />
          </button>
        </div>

        {/* Desktop Main Navigation Bar */}
        <div className="bg-white hidden md:block border-b border-gray-100">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-12">
            <nav className="flex items-center gap-6 text-[13px] font-bold text-gray-800 uppercase tracking-wider h-full">
              <Link href="/tribune-post" className="hover:text-[#0086F9] transition-colors border-b-2 border-transparent hover:border-[#0086F9] flex items-center h-full">
                Home
              </Link>
              
              <div className="relative group h-full flex items-center cursor-pointer">
                <span className="hover:text-[#0086F9] flex items-center gap-1 transition-colors">
                  Features <ChevronDown size={12} />
                </span>
                <div className="absolute top-[48px] left-0 bg-white shadow-xl border border-gray-100 py-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-50 hover:text-[#0086F9]">58+ Unique Demos</Link>
                  <Link href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-50 hover:text-[#0086F9]">Post Styles</Link>
                  <Link href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-50 hover:text-[#0086F9]">Category Layouts</Link>
                  <Link href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-50 hover:text-[#0086F9]">Header Styles</Link>
                </div>
              </div>

              <Link href="#" className="hover:text-[#0086F9] transition-colors flex items-center h-full">
                World Politics
              </Link>

              <Link href="#" className="hover:text-[#0086F9] transition-colors flex items-center h-full">
                Sports
              </Link>

              <Link href="#" className="hover:text-[#0086F9] transition-colors flex items-center h-full">
                Technology
              </Link>

              <Link href="#" className="hover:text-[#0086F9] transition-colors flex items-center h-full">
                Economy
              </Link>

              <a
                href="https://theme-sphere.com/buy/go.php?theme=smartmag"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0086F9] transition-colors flex items-center h-full text-gray-400"
              >
                Buy Theme
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center gap-4 text-gray-700">
              <button onClick={() => setIsSearchOpen(true)} className="hover:text-[#0086F9] transition-colors p-1">
                <Search size={18} />
              </button>
              <button onClick={() => setIsDrawerOpen(true)} className="hover:text-[#0086F9] transition-colors p-1">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center transition-all duration-300 animate-fadeIn">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-2xl px-6 text-center">
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl md:text-5xl py-4 focus:outline-none focus:border-[#0086F9] text-center transition-colors placeholder:text-white/20"
                autoFocus
              />
              <p className="text-white/40 text-sm mt-4 tracking-widest">
                TYPE ABOVE AND PRESS <em className="text-white">ENTER</em> TO SEARCH. ESC TO CANCEL.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Mobile / Full Side Navigation Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Drawer container */}
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slideRight">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <img
                src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/02/Logo-TribunePost-01@15x.png"
                alt="SmartMag TribunePost"
                width={160}
                className="h-6 w-auto object-contain"
              />
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-gray-900 hover:text-[#0086F9] p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Search Widget */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-none text-sm focus:outline-none focus:border-[#0086F9]"
                />
                <Search size={16} className="absolute right-3 top-3.5 text-gray-400" />
              </div>

              {/* Navigation Links list */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-black tracking-widest text-[#0086F9] uppercase">Navigation</h4>
                <nav className="flex flex-col gap-3 font-bold text-gray-800 text-sm">
                  <Link href="/tribune-post" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#0086F9]">Home</Link>
                  <Link href="#" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#0086F9]">World Politics</Link>
                  <Link href="#" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#0086F9]">Sports</Link>
                  <Link href="#" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#0086F9]">Technology</Link>
                  <Link href="#" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#0086F9]">Economy</Link>
                </nav>
              </div>

              {/* What's Hot Sidebar Widget */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-black tracking-widest text-red-600 uppercase">What's Hot</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <img
                      src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/01/bd69541896851acf28d6b56dc28dd555-150x100.jpeg"
                      className="w-16 h-12 object-cover shrink-0"
                      alt=""
                    />
                    <div>
                      <h5 className="text-[12px] font-bold text-gray-900 leading-tight hover:text-[#0086F9] cursor-pointer">
                        Global Banking Crisis Fears and Slowdown Approaching in 2024
                      </h5>
                      <span className="text-[10px] text-gray-400">Jan 30, 2025</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/01/091b1957ab1d15589cbadf0d37001132-150x179.jpeg"
                      className="w-16 h-12 object-cover shrink-0"
                      alt=""
                    />
                    <div>
                      <h5 className="text-[12px] font-bold text-gray-900 leading-tight hover:text-[#0086F9] cursor-pointer">
                        Trevor Lawrance to Throw for Teams Sooner Than Expected
                      </h5>
                      <span className="text-[10px] text-gray-400">Jan 30, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer Social Connect */}
            <div className="p-6 border-t border-gray-100 flex items-center justify-center gap-4 bg-gray-50">
              <a href="#" className="text-gray-500 hover:text-[#0086F9] transition-colors"><Facebook size={16} fill="currentColor" className="stroke-none" /></a>
              <a href="#" className="text-gray-500 hover:text-[#0086F9] transition-colors font-bold text-sm">𝕏</a>
              <a href="#" className="text-gray-500 hover:text-[#0086F9] transition-colors"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
