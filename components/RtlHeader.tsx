"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, Facebook, Twitter, Instagram, ChevronDown, Moon, Sun, ChevronLeft, Rss, ArrowLeft } from "lucide-react";
import { latestNewsList } from "@/lib/rtlData";

export default function RtlHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 120);
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
        setOpenMega(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isDrawerOpen]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const topLinks = [
    { label: "تبدأ هنا", href: "#" },
    { label: "أعلن معنا", href: "#" },
    { label: "اتصل بنا", href: "#" },
    { label: "اشتري الآن", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", external: true }
  ];

  const mainLinks = [
    { label: "الرئيسية", href: "/rtl", active: true },
    { label: "المميزات", href: "#", dropdown: true },
    { label: "السياسة", href: "#", mega: true },
    { label: "التكنولوجيا", href: "#" },
    { label: "الصحة", href: "#" },
  ];

  return (
    <div dir="rtl">
      
      {/* ── MOBILE MENU BACKDROP ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/75 z-[100]" onClick={() => setIsDrawerOpen(false)} />
      )}

      {/* ── MOBILE SIDE DRAWER ── */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[310px] bg-[#111111] text-white z-[110] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out font-sans ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Head */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
          <Link href="/rtl" onClick={() => setIsDrawerOpen(false)}>
            <img 
              src="https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/al-arbiya-logo-04@2x.png" 
              alt="SmartMag RTL Logo" 
              className="h-[38px] w-auto brightness-95" 
            />
          </Link>
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1" aria-label="أغلق القائمة">
            <X size={22} />
          </button>
        </div>

        {/* Links Menu */}
        <nav className="py-2 border-b border-white/5 flex-shrink-0">
          {mainLinks.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsDrawerOpen(false)}
              className="block px-6 py-3.5 text-[14px] font-extrabold uppercase tracking-wide text-gray-300 hover:text-[#cf2e2e] transition-colors border-r-2 border-transparent hover:border-[#cf2e2e]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Newsletter Widget */}
        <div className="px-6 py-6 border-b border-white/5 flex-shrink-0">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-[#cf2e2e] mb-3">اشترك في نشرتنا الإلكترونية مجاناً</h4>
          <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
            اشترك في نشرتنا الإلكترونية مجاناً ليصلك كل جديد.
          </p>
          <form onSubmit={e => e.preventDefault()} className="space-y-2.5">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني.." 
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 rounded-sm outline-none focus:bg-white focus:text-black focus:border-[#cf2e2e] transition-all"
              required 
            />
            <button 
              type="submit" 
              className="w-full bg-[#cf2e2e] text-white text-[12px] font-black uppercase tracking-wide py-3 rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              إشترك
            </button>
          </form>
        </div>

        {/* Drawer Editor Choices */}
        <div className="px-6 py-6 flex-shrink-0">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-[#cf2e2e] mb-4">اختيارات المحرر</h4>
          <div className="space-y-4">
            {latestNewsList.slice(0, 3).map((p, i) => (
              <div key={i} className="flex gap-3 group items-start">
                <div className="w-[65px] h-[48px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-sm">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-[12px] text-gray-300 hover:text-[#cf2e2e] leading-snug font-bold line-clamp-2 transition-colors">{p.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer Socials */}
        <div className="px-6 py-6 mt-auto border-t border-white/5 bg-black/20 flex gap-3 flex-shrink-0 justify-center">
          <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#cf2e2e] hover:text-white transition-all"><Facebook size={14} /></a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#cf2e2e] hover:text-white transition-all"><Twitter size={14} /></a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#cf2e2e] hover:text-white transition-all"><Instagram size={14} /></a>
        </div>
      </aside>

      {/* ── SEARCH OVERLAY ── */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center px-4">
          <div className="w-full max-w-2xl text-center space-y-4">
            <div className="flex items-center bg-white dark:bg-[#1c1c1c] rounded overflow-hidden shadow-2xl border border-gray-150 dark:border-white/10 p-1">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="ابحث عن الأخبار، والمقالات..."
                className="flex-grow px-5 py-4 text-[16px] bg-transparent text-gray-800 dark:text-white outline-none text-right"
              />
              <button onClick={() => setIsSearchOpen(false)} className="px-4 py-4 text-gray-400 hover:text-[#cf2e2e] transition-colors" aria-label="أغلق">
                <X size={20} />
              </button>
            </div>
            <p className="text-white/50 text-xs">اضغط على زر <kbd className="bg-white/15 rounded px-2 py-0.5 font-mono">Esc</kbd> للإغلاق</p>
          </div>
        </div>
      )}

      {/* ── MAIN HEADER CONTAINER ── */}
      <header className="w-full bg-white dark:bg-[#111111] relative z-40 font-sans border-b border-gray-150 dark:border-white/5">
        
        {/* ROW 1: Top Stripe */}
        <div className="bg-[#0f111e] text-gray-300 text-[11px] border-b border-white/5">
          <div className="max-w-[1200px] mx-auto px-5 h-[44px] flex items-center justify-between">
            {/* Right items: Date and top small links */}
            <div className="flex items-center gap-5">
              <span className="font-bold text-gray-400">الأربعاء, مايو 20, 2026</span>
              <div className="h-3 w-px bg-white/10 hidden sm:block" />
              <nav className="hidden md:flex items-center space-x-reverse space-x-4 font-extrabold uppercase">
                {topLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Left items: Social icons */}
            <div className="flex items-center space-x-reverse space-x-3.5 text-gray-400">
              <a href="#" className="hover:text-white transition-colors" aria-label="فيسبوك"><Facebook size={12} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="تويتر"><Twitter size={12} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="انستغرام"><Instagram size={12} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="RSS"><Rss size={12} /></a>
            </div>
          </div>
        </div>

        {/* ROW 2: Mid Logo Area */}
        <div className="max-w-[1200px] mx-auto px-5 h-[84px] flex items-center justify-between">
          <Link href="/rtl" className="flex-shrink-0">
            <img 
              src="https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/al-arbiya-logo-04-white.png" 
              alt="SmartMag RTL Logo" 
              className="h-[44px] w-auto hidden dark:block"
            />
            <img 
              src="https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/al-arbiya-logo-04.png" 
              alt="SmartMag RTL Logo" 
              className="h-[44px] w-auto block dark:hidden"
            />
          </Link>

          <a 
            href="http://eepurl.com/hq-3Xb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#cf2e2e] hover:bg-[#b02222] text-white text-[12px] font-black uppercase px-6 py-2.5 rounded-sm transition-colors shadow-sm"
          >
            إشترك الآن
          </a>
        </div>

        {/* ROW 3: Sticky Nav Row */}
        <div className={`transition-all duration-300 border-t border-gray-100 dark:border-white/5 ${isScrolled ? "fixed top-0 left-0 right-0 shadow-lg bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md z-50 border-b border-gray-150 dark:border-white/5 animate-slideDown" : ""}`}>
          <div className="max-w-[1200px] mx-auto px-5 h-[58px] flex items-center justify-between">
            
            {/* Mobile Menu & Nav Links */}
            <div className="flex items-center h-full">
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="text-gray-700 dark:text-gray-200 hover:text-[#cf2e2e] transition-colors pl-4"
                aria-label="قائمة"
              >
                <Menu size={20} />
              </button>

              <nav className="hidden lg:flex items-center h-full">
                <ul className="flex items-center h-full space-x-reverse space-x-1.5">
                  {mainLinks.map((item) => (
                    <li 
                      key={item.label}
                      className="relative h-full group"
                      onMouseEnter={() => item.mega && setOpenMega(true)}
                      onMouseLeave={() => item.mega && setOpenMega(false)}
                    >
                      <Link 
                        href={item.href}
                        className={`flex items-center gap-1.5 h-full px-4 text-[13px] font-extrabold uppercase transition-colors ${item.active ? "text-[#cf2e2e]" : "text-gray-800 dark:text-gray-100 hover:text-[#cf2e2e]"}`}
                      >
                        {item.label}
                        {(item.dropdown || item.mega) && <ChevronDown size={11} className="opacity-50" />}
                      </Link>

                      {/* Dropdown Layout */}
                      {item.dropdown && (
                        <div className="absolute right-0 top-[58px] w-[210px] bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/5 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-right">
                          <Link href="/good-news" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#cf2e2e]/5 hover:text-[#cf2e2e]">GoodNews</Link>
                          <Link href="/tech-blog" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#cf2e2e]/5 hover:text-[#cf2e2e]">Tech Blog</Link>
                          <Link href="/discover" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#cf2e2e]/5 hover:text-[#cf2e2e]">Discover</Link>
                          <Link href="/coinbase" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#cf2e2e]/5 hover:text-[#cf2e2e]">Crypto Coinbase</Link>
                        </div>
                      )}

                      {/* Mega Dropdown for Politics */}
                      {item.mega && openMega && (
                        <div 
                          className="absolute top-[58px] -right-[150px] w-[750px] bg-white dark:bg-[#161616] shadow-2xl border border-gray-100 dark:border-white/5 z-50 p-5 grid grid-cols-5 gap-4 rounded-sm animate-fadeIn text-right"
                          onMouseEnter={() => setOpenMega(true)}
                          onMouseLeave={() => setOpenMega(false)}
                        >
                          {latestNewsList.slice(0, 5).map((p, i) => (
                            <Link key={i} href="#" className="group/item block">
                              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-800 mb-2 relative shadow-xs">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover/item:scale-103 transition-transform duration-300" />
                              </div>
                              <p className="text-[11px] font-extrabold text-gray-900 dark:text-gray-100 group-hover/item:text-[#cf2e2e] leading-snug line-clamp-3 transition-colors">{p.title}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Left triggers: Dark Mode & Search */}
            <div className="flex items-center space-x-reverse space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-[#cf2e2e] transition-colors p-1"
                aria-label="تبديل المظهر"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 dark:text-gray-300 hover:text-[#cf2e2e] transition-colors p-1"
                aria-label="بحث"
              >
                <Search size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* Height spacer for sticky nav */}
        {isScrolled && <div className="h-[58px]" />}

      </header>
    </div>
  );
}
