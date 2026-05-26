"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, X, Mail, ChevronDown, Check } from "lucide-react";
import { megaMenuTech, megaMenuLifestyle } from "@/lib/curatedMagData";

export default function CuratedMagHeader() {
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
          className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Off-Canvas Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[300px] bg-white text-black z-[1000] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <Link href="/curated-mag">
            <img 
              className="h-8 object-contain" 
              src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/02/logo-curatedMag-01@15x.png" 
              alt="SmartMag CuratedMag" 
            />
          </Link>
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-500 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm rounded-sm focus:outline-none focus:border-[#E40784]"
            />
            <button type="submit" className="absolute right-3 top-3 text-gray-400 hover:text-black">
              <Search size={16} />
            </button>
          </form>

          {/* Mobile Menu Links */}
          <ul className="space-y-4 font-black uppercase text-sm tracking-wider">
            <li><Link href="/curated-mag" className="block py-2 hover:text-[#E40784]" onClick={() => setIsDrawerOpen(false)}>Home</Link></li>
            <li><span className="block py-2 text-gray-400">Features</span></li>
            <li><Link href="/curated-mag" className="block py-2 hover:text-[#E40784]" onClick={() => setIsDrawerOpen(false)}>Technology</Link></li>
            <li><Link href="/curated-mag" className="block py-2 hover:text-[#E40784]" onClick={() => setIsDrawerOpen(false)}>Lifestyle</Link></li>
            <li><Link href="/curated-mag" className="block py-2 hover:text-[#E40784]" onClick={() => setIsDrawerOpen(false)}>Culture</Link></li>
            <li><Link href="/curated-mag" className="block py-2 hover:text-[#E40784]" onClick={() => setIsDrawerOpen(false)}>World</Link></li>
          </ul>

          {/* Subscribe Widget */}
          <div className="bg-gray-50 p-5 rounded-sm border border-gray-100 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-700">Subscribe to Updates</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="space-y-2.5">
              <input 
                type="email" 
                placeholder="Your email address.." 
                required 
                className="w-full bg-white border border-gray-200 px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-[#E40784]"
              />
              <button 
                type="submit" 
                className="w-full bg-black hover:bg-[#E40784] text-white py-2 text-xs font-black uppercase tracking-widest transition-colors rounded-sm"
              >
                Subscribe
              </button>
              <label className="flex items-start gap-2 cursor-pointer mt-2 text-[10px] text-gray-400">
                <input type="checkbox" required className="mt-0.5" />
                <span>By signing up, you agree to our terms and privacy policy.</span>
              </label>
            </form>
          </div>

          {/* What's Hot Widget */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-700 border-b border-gray-100 pb-2">What's Hot</h4>
            <div className="space-y-4">
              {[
                {
                  title: "Should I Warm Up My Car Before Driving on Frigid Winter Days?",
                  img: "https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/01/96744055b110d208a91b732b760b746b-150x100.jpeg",
                  date: "Jan 31, 2025"
                },
                {
                  title: "Conversational Banking, Financial Inclusion, Crypto, and More",
                  img: "https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/01/7735f9f23996e854722533197fa13777-150x84.jpeg",
                  date: "Jan 31, 2025"
                }
              ].map((post, i) => (
                <div key={i} className="flex gap-3">
                  <img src={post.img} alt={post.title} className="w-16 h-12 object-cover rounded-sm bg-gray-100 shrink-0" />
                  <div className="space-y-0.5">
                    <h5 className="text-xs font-bold text-gray-800 line-clamp-2 hover:text-[#E40784] transition-colors">
                      <Link href="/curated-mag">{post.title}</Link>
                    </h5>
                    <span className="text-[9px] text-gray-400 font-bold uppercase">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-gray-400 pt-2">
            <a href="#" className="hover:text-black transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-black transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-black transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <header className="w-full bg-white relative">
        {/* Desktop Midbranding Bar */}
        <div className="border-b border-gray-100 py-6 px-4 hidden lg:block">
          <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
            {/* Logo left */}
            <Link href="/curated-mag" className="inline-block">
              <img 
                src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/01/logo-curatedMag-01.png" 
                alt="SmartMag CuratedMag" 
                className="h-10 object-contain"
              />
            </Link>

            {/* Socials & Subscribe right */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-[#111] mr-2">
                <a href="#" className="hover:text-[#E40784] transition-colors"><Facebook size={14} /></a>
                <a href="#" className="hover:text-[#E40784] transition-colors"><Twitter size={14} /></a>
                <a href="#" className="hover:text-[#E40784] transition-colors"><Instagram size={14} /></a>
              </div>
              <a 
                href="http://eepurl.com/hq-3Xb" 
                target="_blank" 
                rel="noopener"
                className="border-2 border-black text-black px-5 py-2 text-[11px] font-black uppercase tracking-widest hover:bg-[#E40784] hover:border-[#E40784] hover:text-white transition-all duration-300 rounded-sm"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Midbranding Bar */}
        <div className="border-b border-gray-100 py-3.5 px-4 block lg:hidden bg-white sticky top-0 z-[40]">
          <div className="flex justify-between items-center">
            <button onClick={() => setIsDrawerOpen(true)} className="text-black hover:text-[#E40784] transition-colors">
              <Menu size={22} />
            </button>
            <Link href="/curated-mag" className="inline-block">
              <img 
                src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/02/logo-curatedMag-01@15x.png" 
                alt="SmartMag CuratedMag" 
                className="h-8 object-contain"
              />
            </Link>
            <button onClick={() => setIsSearchOpen(true)} className="text-black hover:text-[#E40784] transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Menu Bar (Desktop only) */}
        <nav className="border-b border-gray-100 hidden lg:block bg-white sticky top-0 z-50">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-14">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsDrawerOpen(true)} 
                className="text-black hover:text-[#E40784] transition-colors flex items-center gap-1.5"
                title="Menu"
              >
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-0.5 bg-black w-full rounded-sm"></span>
                  <span className="h-0.5 bg-black w-3/4 rounded-sm"></span>
                  <span className="h-0.5 bg-black w-full rounded-sm"></span>
                </div>
              </button>

              {/* Menu Links */}
              <ul className="flex items-center gap-7 h-full">
                <li className="h-full flex items-center">
                  <Link href="/curated-mag" className="text-[13px] font-black uppercase tracking-widest text-[#E40784] h-full flex items-center border-b-2 border-[#E40784]">
                    Home
                  </Link>
                </li>
                
                {/* Features Dropdown */}
                <li className="relative group h-full flex items-center">
                  <span className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#E40784] transition-colors flex items-center gap-0.5 cursor-pointer">
                    Features <ChevronDown size={12} className="mt-0.5" />
                  </span>
                  <ul className="absolute top-full left-0 w-56 bg-white border border-gray-100 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-sm">
                    <li><Link href="/curated-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#E40784]">58+ Unique Demos</Link></li>
                    <li><Link href="/curated-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#E40784]">Post Styles</Link></li>
                    <li><Link href="/curated-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#E40784]">Category Layouts</Link></li>
                    <li><Link href="/curated-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#E40784]">Gutenberg Elements</Link></li>
                    <li><Link href="/curated-mag" className="block px-5 py-2.5 hover:bg-gray-50 hover:text-[#E40784]">bbPress Forums</Link></li>
                  </ul>
                </li>

                {/* Technology Mega Menu */}
                <li 
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveMega("tech")}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <span className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#E40784] transition-colors flex items-center gap-0.5 cursor-pointer">
                    Technology <ChevronDown size={12} className="mt-0.5" />
                  </span>
                  {activeMega === "tech" && (
                    <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-100 py-6 shadow-xl z-50 transition-all">
                      <div className="container mx-auto max-w-[1200px] px-4">
                        <div className="grid grid-cols-5 gap-6">
                          {megaMenuTech.map((post, idx) => (
                            <div key={idx} className="group/item space-y-3 cursor-pointer">
                              <div className="aspect-[3/2] overflow-hidden bg-gray-100 relative rounded-sm">
                                <img 
                                  src={post.img} 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                />
                                {post.isVideo && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <div className="w-8 h-8 rounded-full bg-[#E40784] text-white flex items-center justify-center shadow-lg">
                                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-[13px] font-black text-black leading-snug line-clamp-3 group-hover/item:text-[#E40784] transition-colors">
                                  <Link href="/curated-mag">{post.title}</Link>
                                </h4>
                                <div className="text-[10px] text-gray-400 font-bold uppercase">{post.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* Lifestyle Mega Menu */}
                <li 
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveMega("lifestyle")}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <span className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#E40784] transition-colors flex items-center gap-0.5 cursor-pointer">
                    Lifestyle <ChevronDown size={12} className="mt-0.5" />
                  </span>
                  {activeMega === "lifestyle" && (
                    <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-100 py-6 shadow-xl z-50 transition-all">
                      <div className="container mx-auto max-w-[1200px] px-4">
                        <div className="grid grid-cols-5 gap-6">
                          {megaMenuLifestyle.map((post, idx) => (
                            <div key={idx} className="group/item space-y-3 cursor-pointer">
                              <div className="aspect-[3/2] overflow-hidden bg-gray-100 relative rounded-sm">
                                <img 
                                  src={post.img} 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                />
                                {post.isAudio && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
                                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M9 18V5l12-2v13M9 9l12-2M9 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-2c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" /></svg>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-[13px] font-black text-black leading-snug line-clamp-3 group-hover/item:text-[#E40784] transition-colors">
                                  <Link href="/curated-mag">{post.title}</Link>
                                </h4>
                                <div className="text-[10px] text-gray-400 font-bold uppercase">{post.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li className="h-full flex items-center">
                  <Link href="/curated-mag" className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#E40784] transition-colors">
                    Culture
                  </Link>
                </li>
                <li className="h-full flex items-center">
                  <Link href="/curated-mag" className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#E40784] transition-colors">
                    World
                  </Link>
                </li>
                <li className="h-full flex items-center">
                  <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#E40784] transition-colors">
                    Buy Theme
                  </a>
                </li>
              </ul>
            </div>

            <button onClick={() => setIsSearchOpen(true)} className="text-black hover:text-[#E40784] transition-colors" title="Search">
              <Search size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#111]/95 text-white z-[2000] flex items-center justify-center p-6 animate-fade-in">
          <button 
            onClick={() => setIsSearchOpen(false)} 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-2xl text-center space-y-6">
            <form onSubmit={handleSearchSubmit} className="relative border-b-2 border-white/20 pb-4">
              <input 
                type="search" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-3xl md:text-5xl font-black placeholder-white/20 focus:outline-none"
                autoFocus
              />
              <button type="submit" className="absolute right-0 top-3 text-white/40 hover:text-white">
                <Search size={32} />
              </button>
            </form>
            <p className="text-sm text-white/40 font-bold uppercase tracking-widest">
              Type above and press <em className="text-[#E40784] not-italic">Enter</em> to search. Press <em className="text-[#E40784] not-italic">Esc</em> to cancel.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
