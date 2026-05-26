"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, Facebook, Twitter, Instagram, Youtube, Mail, ChevronDown } from "lucide-react";

export default function CupOfCoffeeHeader() {
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

  const techPosts = [
    {
      title: "Bitcoin Q1 Technical Outlook: Chart Signals Remain Constructive",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a16df646595a3817abdc13d5d2234e0f-450x299.jpg",
      href: "#"
    },
    {
      title: "Soon You Can Give Your iPhone a Physical Keyboard With Real Buttons",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/59467acc317229b35f7605257a027fc2-450x300.jpeg",
      href: "#"
    },
    {
      title: "Review: Xiaomi Redmi 13C: Small Upgrades, Big Value",
      date: "Jan 14, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/frederik-lipfert-tJr0BZ-9tTo-unsplash-450x300.jpg",
      href: "#"
    },
    {
      title: "Get this 4K HD Dual-Camera Drone with WiFi for $75",
      date: "Jan 14, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/d5c279c21fd7eb9bda49101c7f587195-450x300.jpeg",
      href: "#"
    },
    {
      title: "Tips To Get The Most Out Of Your New Nvidia RTX 2060",
      date: "Jan 14, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/c925205784e6fb2aed675f1893f989ed-450x212.jpeg",
      href: "#"
    }
  ];

  const lifestylePosts = [
    {
      title: "The Masked Singer 2024: Chicken Caesar Becomes Second Celebrity Contestant Revealed",
      date: "Jan 6, 2020",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/f78d2a8e671a69301e3b4fd6817017b0-768x519.jpeg",
      href: "#"
    },
    {
      title: "Over Half of Pet Owners are Worried About Their Animal's Weight, Study Finds",
      date: "Jan 15, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/e9ebaac329f3eca64e5ae35a88a4be6c-300x220.jpeg",
      href: "#"
    },
    {
      title: "Money Heist Series Writer Returns to Scene of the Crime with Prequel Berlin",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/15e3da686d116b12f82aefc780ecdd5c-300x195.jpeg",
      href: "#"
    },
    {
      title: "11 Japandi Style Home Décor Finds From Amazon This Year",
      date: "Jan 13, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/10bf4816f1db30880247ffaae7ae7898-450x300.jpeg",
      href: "#"
    },
    {
      title: "Dog Food Recall as Urgent Warning Issued to Pet Owners in 16 States",
      date: "Jan 14, 2020",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/d1b998484548c9450b9b96f2c1e73c86-450x300.jpeg",
      href: "#"
    }
  ];

  return (
    <>
      <header className="w-full bg-white font-sans border-b border-gray-100 relative">
        {/* Top Bar - Desktop only */}
        <div className="bg-white border-b border-gray-100 text-[#666] text-[12px] font-semibold hidden lg:block">
          <div className="container mx-auto px-4 max-w-[1200px] h-[45px] flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <Link href="#" className="hover:text-[#e21d23] transition-colors">Start Here</Link>
              <span className="text-gray-200">|</span>
              <Link href="#" className="hover:text-[#e21d23] transition-colors">Demos</Link>
              <span className="text-gray-200">|</span>
              <Link href="#" className="hover:text-[#e21d23] transition-colors">Contact</Link>
              <span className="text-gray-200">|</span>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:text-[#e21d23] transition-colors">Buy Now</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-[#e21d23] transition-colors"><Facebook size={14} /></Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors"><Twitter size={14} /></Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors"><Instagram size={14} /></Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors"><Youtube size={14} /></Link>
            </div>
          </div>
        </div>

        {/* Middle Area (Logo area) - Desktop only */}
        <div className="container mx-auto px-4 max-w-[1200px] py-6 hidden lg:flex items-center justify-between">
          <div className="w-[200px]"></div>
          <Link href="/cup-of-coffee" className="block">
            <img 
              src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2023/12/logo-cupofcoffee-01.png" 
              alt="SmartMag CupOfCoffee" 
              className="h-[35px] w-auto mx-auto"
            />
          </Link>
          <div className="w-[200px] flex justify-end">
            <div className="flex items-center space-x-3 text-gray-400">
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#e21d23] hover:text-white transition-all"><Facebook size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#e21d23] hover:text-white transition-all"><Twitter size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#e21d23] hover:text-white transition-all"><Instagram size={12} /></Link>
            </div>
          </div>
        </div>

        {/* Sticky Row (Navigation Row) */}
        <div className="w-full bg-white border-t border-b border-gray-100 sticky top-0 z-40 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex items-center justify-between h-[60px] relative">
              
              {/* Left Side: Drawer Toggle & Brand on Mobile */}
              <div className="flex items-center">
                <button 
                  onClick={() => setIsDrawerOpen(true)}
                  className="text-[#111] hover:text-[#e21d23] mr-4 lg:block"
                  aria-label="Menu"
                >
                  <Menu size={22} strokeWidth={2.5} />
                </button>
                <Link href="/cup-of-coffee" className="block lg:hidden">
                  <img 
                    src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/02/logo-cupofcoffee-01@125x.png" 
                    alt="SmartMag CupOfCoffee" 
                    className="h-[22px] w-auto"
                  />
                </Link>
              </div>

              {/* Center Menu: Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-7 h-full text-[13px] font-bold uppercase tracking-wider text-[#111]">
                <Link href="/cup-of-coffee" className="hover:text-[#e21d23] transition-colors h-full flex items-center text-[#e21d23]">Home</Link>
                
                {/* Features Dropdown */}
                <div className="group h-full flex items-center relative cursor-pointer">
                  <span className="hover:text-[#e21d23] transition-colors flex items-center">
                    Features <ChevronDown size={12} className="ml-1 mt-[-2px]" />
                  </span>
                  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl py-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#e21d23] transition-colors">Post Styles</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#e21d23] transition-colors">Category Layouts</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#e21d23] transition-colors">Review Examples</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#e21d23] transition-colors">Shop / WooCommerce</Link>
                    <Link href="#" className="block px-5 py-2 text-[12px] hover:bg-gray-50 hover:text-[#e21d23] transition-colors">Typography Elements</Link>
                  </div>
                </div>

                {/* Technology Mega Menu */}
                <div className="group h-full flex items-center relative">
                  <span className="hover:text-[#e21d23] transition-colors flex items-center cursor-pointer">
                    Technology <ChevronDown size={12} className="ml-1 mt-[-2px]" />
                  </span>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-[-300px] w-[1000px] bg-white border border-gray-100 shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="grid grid-cols-5 gap-4">
                      {techPosts.map((post, idx) => (
                        <Link href={post.href} key={idx} className="block group/item">
                          <div className="aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm mb-3">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" />
                          </div>
                          <h4 className="text-[12px] font-bold leading-snug text-[#111] hover:text-[#e21d23] line-clamp-2 mb-1.5 transition-colors uppercase">
                            {post.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-semibold">{post.date}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="#" className="hover:text-[#e21d23] transition-colors h-full flex items-center">World</Link>

                {/* Lifestyle Mega Menu */}
                <div className="group h-full flex items-center relative">
                  <span className="hover:text-[#e21d23] transition-colors flex items-center cursor-pointer">
                    Lifestyle <ChevronDown size={12} className="ml-1 mt-[-2px]" />
                  </span>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-[-400px] w-[1000px] bg-white border border-gray-100 shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="grid grid-cols-5 gap-4">
                      {lifestylePosts.map((post, idx) => (
                        <Link href={post.href} key={idx} className="block group/item">
                          <div className="aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm mb-3">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" />
                          </div>
                          <h4 className="text-[12px] font-bold leading-snug text-[#111] hover:text-[#e21d23] line-clamp-2 mb-1.5 transition-colors uppercase">
                            {post.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-semibold">{post.date}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:text-[#e21d23] transition-colors h-full flex items-center">Buy Theme</a>
              </nav>

              {/* Right Side: Actions (Search, Subscribe) */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-[#111] hover:text-[#e21d23] transition-colors p-2"
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={2.5} />
                </button>
                <a 
                  href="http://eepurl.com/hq-3Xb" 
                  target="_blank" 
                  rel="noopener"
                  className="hidden sm:inline-block bg-[#111] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 hover:bg-[#e21d23] transition-colors"
                >
                  Subscribe
                </a>
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
        <div className={`absolute top-0 left-0 h-full w-[300px] bg-[#161616] text-[#ccc] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
              <img 
                src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/logo-cupofcoffee-01-white.png" 
                alt="Cup of Coffee" 
                className="h-[24px] w-auto"
              />
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="text-white hover:text-[#e21d23] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Search input */}
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 pr-10 text-[13px] text-white focus:outline-none focus:border-[#e21d23] transition-colors"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={16} />
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-4 text-[13px] font-bold uppercase tracking-wider text-white">
              <Link href="/cup-of-coffee" className="hover:text-[#e21d23] transition-colors" onClick={() => setIsDrawerOpen(false)}>Home</Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors" onClick={() => setIsDrawerOpen(false)}>Features</Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors" onClick={() => setIsDrawerOpen(false)}>Technology</Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors" onClick={() => setIsDrawerOpen(false)}>World</Link>
              <Link href="#" className="hover:text-[#e21d23] transition-colors" onClick={() => setIsDrawerOpen(false)}>Lifestyle</Link>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:text-[#e21d23] transition-colors" onClick={() => setIsDrawerOpen(false)}>Buy Theme</a>
            </nav>
          </div>

          {/* Bottom segment in drawer */}
          <div className="pt-6 border-t border-white/5 space-y-6">
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-white mb-2">Subscribe to newsletter</h4>
              <p className="text-[11px] text-gray-400 mb-3">Get standard updates in your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-[12px] text-white rounded-sm focus:outline-none focus:border-[#e21d23]"
                />
                <button className="bg-[#e21d23] text-white px-3 py-2 text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                  Go
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white/50">
              <Link href="#" className="hover:text-white transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram size={16} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Youtube size={16} /></Link>
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
                className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-[24px] md:text-[32px] text-white font-bold placeholder-white/20 outline-none focus:border-[#e21d23] transition-colors text-center"
              />
              <button type="submit" className="hidden">Submit</button>
            </form>
            <p className="text-[12px] text-white/40 uppercase tracking-widest font-semibold">
              Type above and press <span className="text-white font-bold">Enter</span> to search. Press <span className="text-white font-bold">Esc</span> to cancel.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
