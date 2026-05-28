"use client";

import React, { useState } from "react";
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
  Clock, 
  Play, 
  FileText 
} from "lucide-react";
import { megaMenuTech, megaMenuLifestyle } from "@/lib/cityTodayData";

export default function CityTodayHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMega, setActiveMega] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Off-Canvas Backdrop */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[999] transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Off-Canvas Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[310px] bg-[#111] text-white z-[1000] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#161616]">
          {/* Logo */}
          <Link href="/city-today" onClick={() => setIsDrawerOpen(false)}>
            <img 
              className="h-8 object-contain" 
              src="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/logo-CityToday-01.png" 
              alt="SmartMag CityToday" 
            />
          </Link>
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X size={22} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Search news..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm rounded-sm focus:outline-none focus:border-red-600 text-white placeholder-white/40"
            />
            <button type="submit" className="absolute right-3 top-3 text-gray-400 hover:text-white">
              <Search size={16} />
            </button>
          </form>

          {/* Mobile Menu Links */}
          <ul className="space-y-4 font-black uppercase text-xs tracking-widest border-b border-white/5 pb-6">
            <li>
              <Link href="/city-today" className="block py-1 hover:text-red-600 transition-colors" onClick={() => setIsDrawerOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <span className="block py-1 text-gray-500 cursor-not-allowed">Features</span>
            </li>
            <li>
              <Link href="/city-today" className="block py-1 hover:text-red-600 transition-colors" onClick={() => setIsDrawerOpen(false)}>
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/city-today" className="block py-1 hover:text-red-600 transition-colors" onClick={() => setIsDrawerOpen(false)}>
                Technology
              </Link>
            </li>
            <li>
              <Link href="/city-today" className="block py-1 hover:text-red-600 transition-colors" onClick={() => setIsDrawerOpen(false)}>
                World
              </Link>
            </li>
          </ul>

          {/* Subscribe Widget */}
          <div className="bg-white/5 p-5 rounded-sm border border-white/5 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600">Subscribe to Updates</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get the latest creative news about art, design, business, and tech events.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="space-y-2.5">
              <input 
                type="email" 
                placeholder="Your email address.." 
                required 
                className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-red-600 text-white placeholder-white/30"
              />
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 text-[10px] font-black uppercase tracking-widest transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Hot Posts Widget */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">What's Hot</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&auto=format&fit=crop&q=60" 
                  alt="Pizza" 
                  className="w-16 h-12 object-cover rounded-sm bg-white/5 shrink-0" 
                />
                <div className="space-y-1">
                  <h5 className="text-[11px] font-bold text-gray-200 line-clamp-2 hover:text-red-600 transition-colors">
                    <Link href="/city-today" onClick={() => setIsDrawerOpen(false)}>Here’s What Happens to Your Body if You Eat Pizza Every Week</Link>
                  </h5>
                  <span className="text-[8px] text-gray-500 font-bold uppercase block">Mar 10, 2022</span>
                </div>
              </div>
              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=150&auto=format&fit=crop&q=60" 
                  alt="Watches" 
                  className="w-16 h-12 object-cover rounded-sm bg-white/5 shrink-0" 
                />
                <div className="space-y-1">
                  <h5 className="text-[11px] font-bold text-gray-200 line-clamp-2 hover:text-red-600 transition-colors">
                    <Link href="/city-today" onClick={() => setIsDrawerOpen(false)}>The 15 Best Watches for Men at Every Price Point</Link>
                  </h5>
                  <span className="text-[8px] text-gray-500 font-bold uppercase block">Mar 10, 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons in drawer */}
          <div className="flex gap-4 text-gray-500 pt-2">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <header className="w-full bg-[#111] text-white">
        {/* Desktop Midbranding Bar */}
        <div className="py-6 px-4 hidden lg:block border-b border-white/5">
          <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
            {/* Social icons on the left */}
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={14} /></a>
            </div>

            {/* Image Logo centered */}
            <Link href="/city-today" className="inline-block max-w-[181px] select-none">
              <img 
                src="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/logo-CityToday-01@05x.png" 
                alt="SmartMag CityToday" 
                srcSet="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/logo-CityToday-01@05x.png ,https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/logo-CityToday-01.png 2x" 
                width="181" 
                height="60" 
                className="h-10 object-contain mx-auto"
              />
            </Link>

            {/* Subscribe Button on the right */}
            <div>
              <a 
                href="#subscribe" 
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-sm"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navbar (Sticky when visible) */}
        <div className="py-3 px-4 block lg:hidden bg-[#111] border-b border-white/5">
          <div className="flex justify-between items-center">
            <button onClick={() => setIsDrawerOpen(true)} className="text-white hover:text-red-600 transition-colors">
              <Menu size={20} />
            </button>
            <Link href="/city-today">
              <img 
                className="h-7 object-contain" 
                src="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/logo-CityToday-01.png" 
                alt="SmartMag CityToday" 
              />
            </Link>
            <button onClick={() => setIsSearchOpen(true)} className="text-white hover:text-red-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Menu Bar (Desktop only, white layout with thin borders) */}
        <nav className="hidden lg:block bg-white text-[#111] border-b border-gray-100 relative">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-[52px]">
            <div className="flex items-center gap-7 h-full">
              {/* Menu Hamburger */}
              <button 
                onClick={() => setIsDrawerOpen(true)} 
                className="hover:text-red-600 transition-colors flex items-center"
                title="Open Navigation Panel"
              >
                <Menu size={18} />
              </button>

              {/* Navigation Links */}
              <ul className="flex items-center gap-8 h-full text-xs font-black uppercase tracking-widest text-[#111]">
                <li className="h-full flex items-center">
                  <Link 
                    href="/city-today" 
                    className="hover:text-red-600 transition-colors h-full flex items-center border-b-2 border-red-600 text-red-600"
                  >
                    Home
                  </Link>
                </li>

                {/* Features (Dropdown) */}
                <li className="relative group h-full flex items-center">
                  <span className="hover:text-red-600 transition-colors flex items-center gap-0.5 cursor-pointer">
                    Features <ChevronDown size={11} className="mt-0.5" />
                  </span>
                  <ul className="absolute top-full left-0 w-52 bg-white border border-gray-100 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-sm">
                    <li><Link href="/city-today" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-red-600">58+ Unique Demos</Link></li>
                    <li><Link href="/city-today" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-red-600">Post Styles</Link></li>
                    <li><Link href="/city-today" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-red-600">Category Layouts</Link></li>
                    <li><Link href="/city-today" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-red-600">Header Styles</Link></li>
                  </ul>
                </li>

                {/* Lifestyle (Mega Menu) */}
                <li 
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveMega("lifestyle")}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <span className="hover:text-red-600 transition-colors flex items-center gap-0.5 cursor-pointer">
                    Lifestyle <ChevronDown size={11} className="mt-0.5" />
                  </span>
                  {activeMega === "lifestyle" && (
                    <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-100 py-6 shadow-lg z-50 transition-all">
                      <div className="container mx-auto max-w-[1200px] px-4">
                        <div className="grid grid-cols-5 gap-6">
                          {megaMenuLifestyle.map((post, idx) => (
                            <div key={idx} className="group/item space-y-3 cursor-pointer text-left">
                              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-sm">
                                <img 
                                  src={post.img} 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                />
                                {post.isAudio && (
                                  <div className="absolute bottom-2 right-2 bg-black/60 p-1.5 rounded-sm text-white flex items-center justify-center">
                                    <FileText size={10} />
                                  </div>
                                )}
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-[12px] font-black text-black leading-snug line-clamp-2 group-hover/item:text-red-600 transition-colors">
                                  <Link href="/city-today">{post.title}</Link>
                                </h4>
                                <div className="text-[9px] text-gray-400 font-bold uppercase">{post.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* Technology (Mega Menu) */}
                <li 
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveMega("tech")}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <span className="hover:text-red-600 transition-colors flex items-center gap-0.5 cursor-pointer">
                    Technology <ChevronDown size={11} className="mt-0.5" />
                  </span>
                  {activeMega === "tech" && (
                    <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-100 py-6 shadow-lg z-50 transition-all">
                      <div className="container mx-auto max-w-[1200px] px-4">
                        <div className="grid grid-cols-5 gap-6">
                          {megaMenuTech.map((post, idx) => (
                            <div key={idx} className="group/item space-y-3 cursor-pointer text-left">
                              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-sm">
                                <img 
                                  src={post.img} 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                />
                                {post.isVideo && (
                                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                    <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg text-white">
                                      <Play size={12} fill="currentColor" className="ml-0.5" />
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-[12px] font-black text-black leading-snug line-clamp-2 group-hover/item:text-red-600 transition-colors">
                                  <Link href="/city-today">{post.title}</Link>
                                </h4>
                                <div className="text-[9px] text-gray-400 font-bold uppercase">{post.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li className="h-full flex items-center">
                  <Link href="/city-today" className="hover:text-red-600 transition-colors">
                    World
                  </Link>
                </li>
              </ul>
            </div>

            {/* Search Icon (Desktop) */}
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="text-black hover:text-red-600 transition-colors"
              title="Search Site"
            >
              <Search size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 text-white z-[2000] flex items-center justify-center p-6 animate-fade-in">
          <button 
            onClick={() => setIsSearchOpen(false)} 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            title="Close Search Modal"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-2xl text-center space-y-6">
            <form onSubmit={handleSearchSubmit} className="relative border-b border-white/20 pb-4">
              <input 
                type="search" 
                placeholder="Type here to search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-3xl md:text-5xl font-black placeholder-white/20 focus:outline-none text-center"
                autoFocus
              />
              <button type="submit" className="absolute right-0 top-3 text-white/40 hover:text-white">
                <Search size={32} />
              </button>
            </form>
            <p className="text-xs text-white/40 font-black uppercase tracking-widest">
              Type above and press <em className="text-red-600 not-italic">Enter</em> to search. Press <em className="text-red-600 not-italic">Esc</em> to cancel.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
