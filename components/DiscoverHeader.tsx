"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, Facebook, Twitter, Instagram, ChevronDown, Moon, Sun } from "lucide-react";
import { sidebarWhatsHot } from "@/lib/discoverData";

export default function DiscoverHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setOpenMega(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isDrawerOpen]);

  // Dark mode switcher logic
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const topLinks = [
    { label: "Home", href: "/discover" },
    { label: "Travel", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ];

  const mainLinks = [
    { label: "Home", href: "/discover", active: true },
    { label: "Features", href: "#" },
    { label: "Lifestyle", href: "#", mega: "lifestyle" },
    { label: "Technology", href: "#" },
    { label: "Travel", href: "#", mega: "travel" },
    { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", external: true }
  ];

  const megaPosts = {
    lifestyle: [
      { title: "Queensland Couple’s COVID-19 Hotel Quarantine Exemption Photo Story", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/pexels-pavel-danilyuk-7674848-450x300.jpg" },
      { title: "Grooming Tips to Get Your Pet Ready for Spring", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Depositphotos_160108810_xl-2015-1-450x300.jpg" },
      { title: "9 Wireless Headphones That Are High Quality and Super Cute", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/shutterstock_546272956-33-1-450x290.jpg" },
      { title: "How Your ‘Healthy’ Lifestyle Can Be Making You Tired", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/shutterstock_502332187-1-450x301.jpg" },
      { title: "How to Apply Perfume and Make It Last Longer", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/pexels-djordje-vezilic-10278995-450x675.jpg" }
    ],
    travel: [
      { title: "5 Best European Countries To Visit If You Are On A Budget", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/leonard-cotte-R5scocnOOdM-unsplash-450x318.jpg" },
      { title: "Greece is Officially Open — But Will the Tourists Come?", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2021/01/Depositphotos_21917103_xl-2015-3-450x300.jpg" },
      { title: "Review: Bucket List Destinations 2021 Across the Globe", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Depositphotos_272476474_XL-1-450x300.jpg" },
      { title: "This Moomin-Themed Hotel Room in Saitama Lets You Have Fun", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/large-glass-building-under-the-blue-sky-2023-01-26-09-35-49-utc-1-450x300.jpg" },
      { title: "China Travel Growth Slows During Dragon Holidays", img: "https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Depositphotos_169360020_xl-2015-1-450x300.jpg" }
    ]
  };

  return (
    <>
      {/* ── OFF-CANVAS MOBILE DRAWER BACKDROP ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/70 z-[100]" onClick={() => setIsDrawerOpen(false)} />
      )}

      {/* ── OFF-CANVAS MOBILE DRAWER ── */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[300px] bg-[#111111] text-white z-[110] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out font-sans ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Head */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
          <Link href="/discover" onClick={() => setIsDrawerOpen(false)}>
            <img 
              src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/logo-discover-mobile@2x.png" 
              alt="Discover Logo" 
              className="h-[28px] w-auto" 
            />
          </Link>
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Links Menu */}
        <nav className="py-2 border-b border-white/5 flex-shrink-0">
          {mainLinks.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsDrawerOpen(false)}
              className="block px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-gray-300 hover:text-[#e24e54] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Newsletter Widget */}
        <div className="px-6 py-6 border-b border-white/5 flex-shrink-0">
          <h4 className="text-[11px] font-black uppercase tracking-wider text-[#e24e54] mb-3">Subscribe to Updates</h4>
          <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
            Get the latest creative news from FooBar about art, design and business.
          </p>
          <form onSubmit={e => e.preventDefault()} className="space-y-2">
            <input 
              type="email" 
              placeholder="Your email address.." 
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-500 rounded-sm outline-none focus:bg-white focus:text-black focus:border-[#e24e54] transition-all"
              required 
            />
            <button 
              type="submit" 
              className="w-full bg-[#e24e54] text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Drawer What's Hot Widget */}
        <div className="px-6 py-6 flex-shrink-0">
          <h4 className="text-[11px] font-black uppercase tracking-wider text-[#e24e54] mb-4">What&apos;s Hot</h4>
          <div className="space-y-4">
            {sidebarWhatsHot.map((p, i) => (
              <div key={i} className="flex gap-3 group items-center">
                <div className="w-[60px] h-[45px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-[11px] text-gray-300 hover:text-[#e24e54] leading-tight font-bold line-clamp-2 transition-colors">{p.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer Socials */}
        <div className="px-6 py-6 mt-auto border-t border-white/5 bg-black/20 flex gap-3 flex-shrink-0">
          <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e24e54] hover:text-white transition-all"><Facebook size={12} /></a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e24e54] hover:text-white transition-all"><Twitter size={12} /></a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e24e54] hover:text-white transition-all"><Instagram size={12} /></a>
        </div>
      </aside>

      {/* ── SEARCH OVERLAY ── */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            <div className="flex items-center bg-white dark:bg-[#1c1c1c] rounded overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10">
              <Search size={18} className="ml-5 text-gray-400 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for articles, tags, and categories..."
                className="flex-1 px-4 py-5 text-[15px] bg-transparent text-gray-800 dark:text-white outline-none"
              />
              <button onClick={() => setIsSearchOpen(false)} className="px-5 py-5 text-gray-400 hover:text-[#e24e54] transition-colors">
                <X size={18} />
              </button>
            </div>
            <p className="text-center text-white/50 text-[11px] mt-3">Press <kbd className="bg-white/15 rounded px-1.5 py-0.5 font-mono">Esc</kbd> to close</p>
          </div>
        </div>
      )}

      {/* ── MAIN HEADER WRAPPER ── */}
      <header className="w-full bg-white dark:bg-[#111111] relative z-40 font-sans border-b border-gray-150 dark:border-white/5">
        
        {/* ROW 1: Dark Top Stripe */}
        <div className="bg-[#0f111e] text-gray-300 text-xs">
          <div className="max-w-[1200px] mx-auto px-5 h-[44px] flex items-center justify-between">
            {/* Mobile Menu trigger & simple menu links */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="hover:text-white transition-colors"
                aria-label="Open Mobile Drawer"
              >
                <Menu size={16} />
              </button>
              <div className="h-3 w-px bg-white/10" />
              <nav className="hidden md:flex items-center space-x-5 font-bold uppercase tracking-wider text-[10.5px]">
                {topLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={13} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={13} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={13} /></a>
            </div>
          </div>
        </div>

        {/* ROW 2: Main Middle Header & Menu */}
        <div className={`${isScrolled ? "fixed top-0 left-0 right-0 shadow-md bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md" : ""} transition-all duration-300 z-50`}>
          <div className="max-w-[1200px] mx-auto px-5 h-[80px] flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/discover" className="flex-shrink-0">
              <img 
                src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/logo-discover-01.png" 
                alt="SmartMag Discover Logo"
                className="h-[34px] w-auto block dark:hidden"
              />
              <img 
                src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/logo-discover-mobile@2x.png" 
                alt="SmartMag Discover Logo"
                className="h-[28px] w-auto hidden dark:block"
              />
            </Link>

            {/* Main Navigation Menu links */}
            <nav className="hidden lg:flex items-center h-full ml-10">
              <ul className="flex items-center h-full">
                {mainLinks.map((item) => (
                  <li 
                    key={item.label}
                    className="relative h-full group"
                    onMouseEnter={() => item.mega ? setOpenMega(item.mega) : setOpenMega(null)}
                    onMouseLeave={() => setOpenMega(null)}
                  >
                    {item.external ? (
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center h-full px-4 text-[12px] font-black uppercase tracking-wider text-gray-800 dark:text-gray-100 hover:text-[#e24e54] transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link 
                        href={item.href}
                        className={`flex items-center gap-1 h-full px-4 text-[12px] font-black uppercase tracking-wider transition-colors ${item.active ? "text-[#e24e54]" : "text-gray-800 dark:text-gray-100 hover:text-[#e24e54]"}`}
                      >
                        {item.label}
                        {item.mega && <ChevronDown size={11} className="opacity-50 mt-0.5" />}
                      </Link>
                    )}

                    {/* Mega Dropdown */}
                    {item.mega && openMega === item.mega && (
                      <div 
                        className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[720px] bg-white dark:bg-[#161616] shadow-2xl border border-gray-100 dark:border-white/5 z-50 p-5 grid grid-cols-5 gap-4"
                        onMouseEnter={() => setOpenMega(item.mega!)}
                        onMouseLeave={() => setOpenMega(null)}
                      >
                        {megaPosts[item.mega as keyof typeof megaPosts].map((p, i) => (
                          <Link key={i} href="#" className="group/item block text-left">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-800 mb-2">
                              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-[10.5px] font-extrabold text-gray-900 dark:text-gray-100 hover:text-[#e24e54] leading-tight line-clamp-3 transition-colors">{p.title}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side items: Subscribe, switcher, search */}
            <div className="flex items-center space-x-4">
              <a 
                href="http://eepurl.com/hq-3Xb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:inline-flex bg-[#e24e54] hover:bg-[#c93c41] text-white text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors shadow-sm"
              >
                Subscribe
              </a>
              
              <button 
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-[#e24e54] transition-colors p-1"
                aria-label="Switch Dark/Light Theme"
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 dark:text-gray-300 hover:text-[#e24e54] transition-colors p-1"
                aria-label="Open search box"
              >
                <Search size={17} />
              </button>
            </div>

          </div>
        </div>

        {/* Sticky menu spacer */}
        {isScrolled && <div className="h-[80px]" />}
      </header>
    </>
  );
}
