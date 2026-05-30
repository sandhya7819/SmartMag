"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, Facebook, Twitter, Instagram, ChevronDown, Moon, Sun, ArrowRight } from "lucide-react";
import { whatsHot, techMegaMenu, lifestyleMegaMenu } from "@/lib/newsmagData";

export default function NewsMagHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
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

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const mainLinks = [
    { label: "Home", href: "/news-mag", active: true },
    { label: "Features", href: "#", dropdown: true },
    { label: "Technology", href: "#", mega: "technology" },
    { label: "Sports", href: "#" },
    { label: "Lifestyle", href: "#", mega: "lifestyle" }
  ];

  return (
    <>
      {/* ── MOBILE MENU BACKDROP ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/75 z-[100]" onClick={() => setIsDrawerOpen(false)} />
      )}

      {/* ── MOBILE SIDE DRAWER ── */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[310px] bg-[#111111] text-white z-[110] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out font-sans ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Head */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
          <Link href="/news-mag" onClick={() => setIsDrawerOpen(false)}>
            <img 
              src="https://smartmag.theme-sphere.com/news-mag/wp-content/uploads/sites/45/2023/11/LOGO-NEWS-MAG-footer-01@05x.png" 
              alt="NewsMag Logo" 
              className="h-[34px] w-auto brightness-95" 
            />
          </Link>
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1" aria-label="Close Menu">
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
              className="block px-6 py-3.5 text-[14px] font-extrabold uppercase tracking-wide text-gray-300 hover:text-[#2ab391] transition-colors border-l-2 border-transparent hover:border-[#2ab391]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Newsletter Widget */}
        <div className="px-6 py-6 border-b border-white/5 flex-shrink-0">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-[#2ab391] mb-3">Subscribe to Updates</h4>
          <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
            Get the latest creative news from FooBar about art, design and business.
          </p>
          <form onSubmit={e => e.preventDefault()} className="space-y-2.5">
            <input 
              type="email" 
              placeholder="Your email address.." 
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 rounded-sm outline-none focus:bg-white focus:text-black focus:border-[#2ab391] transition-all"
              required 
            />
            <button 
              type="submit" 
              className="w-full bg-[#2ab391] text-white text-[12px] font-black uppercase tracking-wide py-3 rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Drawer What's Hot */}
        <div className="px-6 py-6 flex-shrink-0">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-[#2ab391] mb-4">What&apos;s Hot</h4>
          <div className="space-y-4">
            {whatsHot.map((p, i) => (
              <div key={i} className="flex gap-3 group items-start">
                <div className="w-[65px] h-[48px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-sm relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-[12px] text-gray-300 hover:text-[#2ab391] leading-snug font-bold line-clamp-2 transition-colors">{p.title}</Link>
                  <div className="text-[10px] text-gray-500 mt-1">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer Socials */}
        <div className="px-6 py-6 mt-auto border-t border-white/5 bg-black/20 flex gap-3 flex-shrink-0 justify-center">
          <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#2ab391] hover:text-white transition-all"><Facebook size={14} /></a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#2ab391] hover:text-white transition-all"><Twitter size={14} /></a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#2ab391] hover:text-white transition-all"><Instagram size={14} /></a>
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
                placeholder="Search news, reviews, and articles..."
                className="flex-grow px-5 py-4 text-[16px] bg-transparent text-gray-800 dark:text-white outline-none"
              />
              <button onClick={() => setIsSearchOpen(false)} className="px-4 py-4 text-gray-400 hover:text-[#2ab391] transition-colors" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <p className="text-white/50 text-xs">Press <kbd className="bg-white/15 rounded px-2 py-0.5 font-mono">Esc</kbd> to close</p>
          </div>
        </div>
      )}

      {/* ── HEADER CONTAINER ── */}
      <header className={`w-full bg-white dark:bg-[#0e0e0e] z-50 font-sans border-b border-gray-150 dark:border-white/5 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 shadow-md backdrop-blur-md bg-white/95 dark:bg-[#0e0e0e]/95 animate-slideDown" : "relative"}`}>
        <div className="max-w-[1200px] mx-auto px-5 h-[72px] flex items-center justify-between">
          
          {/* Left: Mobile menu trigger + Logo */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-700 dark:text-gray-200 hover:text-[#2ab391] transition-colors lg:hidden p-1"
              aria-label="Menu"
            >
              <Menu size={22} />
            </button>

            <Link href="/news-mag" className="flex-shrink-0">
              <img 
                src="https://smartmag.theme-sphere.com/news-mag/wp-content/uploads/sites/45/2023/11/LOGO-NEWS-MAG-footer-01@05x.png" 
                alt="NewsMag Logo" 
                className="h-[36px] w-auto hidden dark:block"
              />
              <img 
                src="https://smartmag.theme-sphere.com/news-mag/wp-content/uploads/sites/45/2023/11/LOGO-NEWS-MAG-01@05x.png" 
                alt="NewsMag Logo" 
                className="h-[36px] w-auto block dark:hidden"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation menu */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center h-full space-x-1">
              {mainLinks.map((item) => (
                <li 
                  key={item.label}
                  className="relative h-full group"
                  onMouseEnter={() => item.mega && setOpenMega(item.mega)}
                  onMouseLeave={() => item.mega && setOpenMega(null)}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1.5 h-full px-4 text-[13px] font-extrabold uppercase text-gray-800 dark:text-gray-100 hover:text-[#2ab391] transition-colors relative"
                  >
                    {item.label}
                    {(item.dropdown || item.mega) && <ChevronDown size={11} className="opacity-50" />}
                  </Link>

                  {/* Dropdown Layout */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-[72px] w-[210px] bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/5 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href="/good-news" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#2ab391]/5 hover:text-[#2ab391]">GoodNews</Link>
                      <Link href="/tech-blog" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#2ab391]/5 hover:text-[#2ab391]">Tech Blog</Link>
                      <Link href="/discover" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#2ab391]/5 hover:text-[#2ab391]">Discover</Link>
                      <Link href="/coinbase" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#2ab391]/5 hover:text-[#2ab391]">Crypto Coinbase</Link>
                      <Link href="/rtl" className="block px-5 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-[#2ab391]/5 hover:text-[#2ab391]">RTL Arabic</Link>
                    </div>
                  )}

                  {/* Mega Menu Layout */}
                  {item.mega && openMega === item.mega && (
                    <div 
                      className="absolute top-[72px] -left-[200px] w-[800px] bg-white dark:bg-[#161616] shadow-2xl border border-gray-100 dark:border-white/5 z-50 p-5 grid grid-cols-5 gap-4 rounded-sm animate-fadeIn"
                      onMouseEnter={() => setOpenMega(item.mega)}
                      onMouseLeave={() => setOpenMega(null)}
                    >
                      {(item.mega === "technology" ? techMegaMenu : lifestyleMegaMenu).map((p, i) => (
                        <Link key={i} href="#" className="group/item block space-y-2">
                          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover/item:scale-103 transition-transform duration-500" />
                            {p.rating && (
                              <div className="absolute top-2 left-2 bg-[#2ab391] text-white text-[8px] font-black px-1.5 py-0.5 rounded-sm shadow-md">
                                {p.is_points ? `★ ${p.rating}` : `${p.rating}%`}
                              </div>
                            )}
                          </div>
                          <p className="text-[11px] font-extrabold text-gray-900 dark:text-gray-100 group-hover/item:text-[#2ab391] leading-snug line-clamp-3 transition-colors">{p.title}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Triggers for Dark Mode & Search */}
          <div className="flex items-center space-x-3.5">
            <button 
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2ab391] transition-colors p-1.5"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2ab391] transition-colors p-1.5"
              aria-label="Search"
            >
              <Search size={19} />
            </button>
          </div>

        </div>

        {/* Space spacer to prevent height shifting on sticky */}
        {isScrolled && <div className="h-[72px]" />}
      </header>
    </>
  );
}
