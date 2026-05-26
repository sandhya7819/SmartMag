"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube, Mail, ChevronDown } from "lucide-react";

export default function SpotlightHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus input on search modal open
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Handle escape key to close search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const fashionPosts = [
    {
      title: "Sustainable Fashion Revolution: The Impact of Gen AI",
      date: "Jan 14, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/01f6de26e9903ae244e9c65625f42ba0-450x188.jpg",
      href: "#"
    },
    {
      title: "14 Best Travel Size Perfumes to Ensure You Smell Heavenly on the Go",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/6f56c714b591e2edbd470d2c9fd7daa7-450x272.jpeg",
      href: "#"
    },
    {
      title: "12 Must-Have Affordable Minimalist Outfits to Make Your Own This Winter",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/8aee4fe72667812854bd942a43b4fd86-450x310.jpeg",
      href: "#"
    },
    {
      title: "How To Start A Clothing Business: Everything You Need To Know",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/b87502269bbc996e242752d47b05a122-450x271.jpeg",
      href: "#"
    },
    {
      title: "7 New York Fashion Week Top Makeup Trends We Spotted",
      date: "Jan 12, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/cfa22f0058c5e86550c2fbbbb7e6d676-450x450.jpg",
      href: "#"
    }
  ];

  const lifePosts = [
    {
      title: "20 Living Room Color Combinations – Best Living Room Color Scheme",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/a66f99ad233894120896c18218d8c6ae-450x270.jpeg",
      href: "#"
    },
    {
      title: "Review: Listening Habits May Affect Music's Benefits for Memory",
      date: "Jan 15, 2021",
      score: "8.9",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/ad1aadc876e79d8b37fcff7c582a157e-450x273.jpg",
      href: "#"
    },
    {
      title: "7 Best Fall 2024 Bag Trends: The Bags You'll See Everywhere",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/ebb3e84a0f4d719db08ca6bb9b0048f0-450x300.jpg",
      href: "#"
    },
    {
      title: "15 Best Gifts in 2024 for Valentine's Day Gifting",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/23a5efbf36cf79ea7805430c95bbbaaf-450x300.jpg",
      href: "#"
    },
    {
      title: "These Bizarre New Musical Instruments Are Unlike Anything",
      date: "Mar 15, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/3ef0d16cc97064dd1245bf66c290ca32-450x300.jpg",
      href: "#"
    }
  ];

  return (
    <>
      <header className="w-full bg-white font-sans relative">
        {/* Top Bar - Desktop only */}
        <div className="bg-white border-b border-gray-100 text-[#666] text-[11px] font-bold uppercase tracking-widest hidden lg:block">
          <div className="container mx-auto px-6 max-w-[1200px] h-[45px] flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors">Start Here</Link>
              <Link href="https://theme-sphere.com/demo/smartmag-landing/" target="_blank" rel="noopener" className="hover:text-[#CF2E2E] transition-colors">Demos</Link>
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors">Contact</Link>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:text-[#CF2E2E] transition-colors">Buy Now</a>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-4 text-gray-400">
                <Link href="#" className="hover:text-[#3b5998] transition-colors"><Facebook size={13} /></Link>
                <Link href="#" className="hover:text-[#1da1f2] transition-colors"><Twitter size={13} /></Link>
                <Link href="#" className="hover:text-[#e1306c] transition-colors"><Instagram size={13} /></Link>
                <Link href="#" className="hover:text-[#ff0000] transition-colors"><Youtube size={13} /></Link>
              </div>
              <a 
                href="http://eepurl.com/hq-3Xb" 
                target="_blank" 
                rel="noopener"
                className="bg-[#CF2E2E] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 hover:bg-[#111] transition-colors inline-block"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Middle Area (Logo area) - Desktop only */}
        <div className="container mx-auto px-6 max-w-[1200px] py-6 hidden lg:flex items-center justify-between">
          <div className="w-[200px]"></div>
          <Link href="/spotlight" className="block">
            <img 
              src="https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/LOGO-SPOTLIGHTNEWS-01@05x.png" 
              alt="SmartMag Spotlight" 
              className="h-[49px] w-auto mx-auto"
            />
          </Link>
          <div className="w-[200px] flex justify-end">
            <div className="flex items-center space-x-3 text-gray-400">
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all"><Facebook size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all"><Twitter size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all"><Instagram size={12} /></Link>
            </div>
          </div>
        </div>

        {/* Sticky Row (Navigation Row) */}
        <div className="w-full bg-white border-t border-b border-gray-100 sticky top-0 z-40 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="container mx-auto px-6 max-w-[1200px]">
            <div className="flex items-center justify-between h-[60px] relative">
              
              {/* Left Side: Drawer Toggle & Brand on Mobile */}
              <div className="flex items-center">
                <button 
                  onClick={() => setIsDrawerOpen(true)}
                  className="text-[#111] hover:text-[#CF2E2E] mr-4 flex items-center"
                  aria-label="Menu"
                >
                  <Menu size={22} strokeWidth={2.5} />
                </button>
                <Link href="/spotlight" className="block lg:hidden">
                  <img 
                    src="https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/LOGO-SPOTLIGHTNEWS-01-mobile@075x.png" 
                    alt="SmartMag Spotlight" 
                    className="h-[37px] w-auto"
                  />
                </Link>
              </div>

              {/* Center Menu: Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-7 h-full text-[13px] font-bold uppercase tracking-wider text-[#111]">
                <Link href="/spotlight" className="hover:text-[#CF2E2E] transition-colors h-full flex items-center text-[#CF2E2E]">Home</Link>
                
                {/* Features Dropdown */}
                <div className="group h-full flex items-center relative cursor-pointer">
                  <span className="hover:text-[#CF2E2E] transition-colors flex items-center">
                    Features <ChevronDown size={12} className="ml-1 mt-[-2px]" />
                  </span>
                  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl py-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#CF2E2E] transition-colors">Post Styles</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#CF2E2E] transition-colors">Category Layouts</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#CF2E2E] transition-colors">Review Examples</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#CF2E2E] transition-colors">Shop / WooCommerce</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#CF2E2E] transition-colors">Typography Elements</Link>
                  </div>
                </div>

                {/* Fashion & Style Mega Menu */}
                <div className="group h-full flex items-center relative">
                  <span className="hover:text-[#CF2E2E] transition-colors flex items-center cursor-pointer">
                    Fashion & Style <ChevronDown size={12} className="ml-1 mt-[-2px]" />
                  </span>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-[-300px] w-[1000px] bg-white border border-gray-100 shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="grid grid-cols-5 gap-4">
                      {fashionPosts.map((post, idx) => (
                        <Link href={post.href} key={idx} className="block group/item">
                          <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-3">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" />
                          </div>
                          <h4 className="text-[12px] font-bold leading-snug text-[#111] hover:text-[#CF2E2E] line-clamp-2 mb-1.5 transition-colors uppercase font-sans">
                            {post.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-semibold">{post.date}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="#" className="hover:text-[#CF2E2E] transition-colors h-full flex items-center">Culture</Link>
                <Link href="#" className="hover:text-[#CF2E2E] transition-colors h-full flex items-center">Health</Link>

                {/* Life Mega Menu */}
                <div className="group h-full flex items-center relative">
                  <span className="hover:text-[#CF2E2E] transition-colors flex items-center cursor-pointer">
                    Life <ChevronDown size={12} className="ml-1 mt-[-2px]" />
                  </span>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-[-450px] w-[1000px] bg-white border border-gray-100 shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="grid grid-cols-5 gap-4">
                      {lifePosts.map((post, idx) => (
                        <Link href={post.href} key={idx} className="block group/item relative">
                          <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-3 relative">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" />
                            {post.score && (
                              <div className="absolute bottom-2 right-2 bg-[#CF2E2E] text-white font-bold text-[10px] w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                                {post.score}
                              </div>
                            )}
                          </div>
                          <h4 className="text-[12px] font-bold leading-snug text-[#111] hover:text-[#CF2E2E] line-clamp-2 mb-1.5 transition-colors uppercase font-sans">
                            {post.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-semibold">{post.date}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:text-[#CF2E2E] transition-colors h-full flex items-center">Buy Theme</a>
              </nav>

              {/* Right Side: Actions (Search) */}
              <div className="flex items-center">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-[#111] hover:text-[#CF2E2E] transition-colors p-2"
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={2.5} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Off-Canvas Navigation Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop overlay */}
        <div 
          onClick={() => setIsDrawerOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        ></div>

        {/* Drawer Panel */}
        <div className={`absolute top-0 left-0 h-full w-[300px] bg-[#111111] text-[#ccc] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
            <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
              <img 
                src="https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/LOGO-SPOTLIGHTNEWS-01-mobile@075x.png" 
                alt="Spotlight" 
                className="h-[30px] w-auto"
              />
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="text-white hover:text-[#CF2E2E] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Search input */}
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 pr-10 text-[13px] text-white focus:outline-none focus:border-[#CF2E2E] transition-colors"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={16} />
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-4 text-[13px] font-bold uppercase tracking-wider text-white">
              <Link href="/spotlight" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Home</Link>
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Features</Link>
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Fashion & Style</Link>
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Culture</Link>
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Health</Link>
              <Link href="#" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Life</Link>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:text-[#CF2E2E] transition-colors" onClick={() => setIsDrawerOpen(false)}>Buy Theme</a>
            </nav>

            {/* What's Hot Widget in Drawer */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-6 border-b border-[#CF2E2E] pb-2 inline-block">What's Hot</h4>
              <div className="space-y-4">
                {[
                  {
                    title: "Eating Habits Courteney Cox Swears By to Look Amazing at 59",
                    date: "Jan 22, 2021",
                    img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/995a72edb76e21e7d5c88813c736acb1-150x100.jpg",
                    href: "#"
                  },
                  {
                    title: "20 Living Room Color Combinations – Best Living Room Color Scheme",
                    date: "Jan 16, 2021",
                    img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/a66f99ad233894120896c18218d8c6ae-150x90.jpeg",
                    href: "#"
                  },
                  {
                    title: "15 Best Exercises to Lose Belly Fat – How to Burn Belly Fat Fast",
                    date: "Jan 16, 2021",
                    img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/cd0372ed780a684a448f7144366cfa60-150x99.jpeg",
                    href: "#"
                  }
                ].map((post, idx) => (
                  <Link href={post.href} key={idx} className="flex gap-3 group/item text-left items-center">
                    <div className="w-[55px] h-[55px] shrink-0 overflow-hidden rounded-sm bg-[#222]">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[11px] font-bold text-white leading-snug line-clamp-2 group-hover/item:text-[#CF2E2E] transition-colors uppercase font-sans">
                        {post.title}
                      </h5>
                      <span className="text-[9px] text-gray-500 font-bold">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom segment in drawer */}
          <div className="pt-6 border-t border-white/5 space-y-4">
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-white mb-2">Subscribe to Updates</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  className="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-[12px] text-white rounded-sm focus:outline-none focus:border-[#CF2E2E]"
                />
                <button className="bg-[#CF2E2E] text-white px-3 py-2 text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                  Go
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white/50">
              <Link href="#" className="hover:text-white transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram size={16} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#0f0f0f]/95 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white hover:rotate-90 transition-all duration-300 p-2"
            aria-label="Close search"
          >
            <X size={30} />
          </button>
          
          <div className="w-full max-w-[600px] px-6 text-center">
            <form onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }} className="relative mb-4">
              <input 
                ref={searchInputRef}
                type="search" 
                placeholder="Search..." 
                className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-[24px] md:text-[32px] text-white font-bold placeholder-white/20 outline-none focus:border-[#CF2E2E] transition-colors text-center"
              />
              <button type="submit" className="hidden">Submit</button>
            </form>
            <p className="text-[12px] text-white/40 uppercase tracking-widest font-semibold font-sans">
              Type above and press <span className="text-white font-bold">Enter</span> to search. Press <span className="text-white font-bold">Esc</span> to cancel.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
