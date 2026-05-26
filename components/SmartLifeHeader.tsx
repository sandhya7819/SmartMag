"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";

const BASE = "https://smartmag.theme-sphere.com/smart-life/wp-content/uploads/sites/40/";

export default function SmartLifeHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) setTimeout(() => searchInputRef.current?.focus(), 80);
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsSearchOpen(false); setOpenMega(null); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isDrawerOpen]);

  const navLinks = [
    { label: "Home", href: "/smart-life", active: true },
    { label: "Features", href: "#" },
    { label: "Lifestyle", href: "#", mega: "lifestyle" },
    { label: "Technology", href: "#" },
    { label: "Travel & Tourism", href: "#", mega: "travel" },
    { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", external: true },
  ];

  const megaPosts = {
    lifestyle: [
      { title: "Maximizing the Benefits of Supplements for an Active Lifestyle", img: `${BASE}2023/06/pexels-jellybee-8940745.jpg` },
      { title: "Scientists Think They've Found The Cause of Morning Sickness", img: `${BASE}2023/06/pexels-pavel-danilyuk-6753348-450x300.jpg` },
      { title: "Check Out the Celebrities From the International Film Festival", img: `${BASE}2021/01/Depositphotos_268168544_xl-2015-1-450x300.jpg` },
      { title: "Review: Vogue's Fashion Week Show this Year Was Exceptional", img: `${BASE}2021/01/Depositphotos_29756187_XL-1-450x322.jpg` },
      { title: "Veterinarians Recommend Animal Heat Pads to Save on Energy Bills", img: `${BASE}2023/06/mikhail-vasilyev-NodtnCsLdTE-unsplash-450x281.jpg` },
    ],
    travel: [
      { title: "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends", img: `${BASE}2023/06/edson-diogo-Z9FZQMwCPpk-unsplash-450x300.jpg` },
      { title: "Greece Tourism Receipts on Record Breaking Track for 2023", img: `${BASE}2023/06/Depositphotos_21917103_xl-2015-3-450x300.jpg` },
      { title: "UAE's Travel and Tourism Industry Created Thousands of Jobs", img: `${BASE}2020/03/kent-tupas-PsGNSpf3vKc-unsplash-450x300.jpg` },
      { title: "Best Destinations for Adventure Travel Enthusiasts Worldwide", img: `${BASE}2020/03/Depositphotos_416022816_xl-2015-1-450x300.jpg` },
      { title: "Finland Introduces World's First Phone-Free Island Destination", img: `${BASE}2023/06/tamara-bellis-9OOtGftSVUI-unsplash-450x300.jpg` },
    ],
  };

  const drawerPosts = [
    { title: "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends", date: "Mar 10, 2022", img: `${BASE}2023/06/edson-diogo-Z9FZQMwCPpk-unsplash-300x200.jpg` },
    { title: "Maximizing the Benefits of Supplements for an Active Lifestyle", date: "Mar 10, 2022", img: `${BASE}2023/06/pexels-jellybee-8940745.jpg` },
    { title: "1 in 3 Can't Get Through Meal Without Looking at Phone, Survey Finds", date: "Mar 10, 2022", img: `${BASE}2023/06/freestocks-hRVrvH9-dG0-unsplash-4-300x200.jpg` },
  ];

  return (
    <>
      {/* ── OFF CANVAS BACKDROP ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100]" onClick={() => setIsDrawerOpen(false)} />
      )}

      {/* ── OFF CANVAS DRAWER ── */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[290px] bg-[#1a1a1a] z-[110] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Head */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <img src={`${BASE}2023/06/logo-SMART-LIFE-light@2x.png`} alt="SmartLife" className="h-[26px] w-auto" />
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="py-2 border-b border-white/10 flex-shrink-0">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className={`block px-5 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors ${item.active ? "text-[#2ab391]" : "text-gray-200 hover:text-[#2ab391]"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* What's Hot */}
        <div className="px-5 py-5 flex-shrink-0">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-[#2ab391] mb-4 border-b border-white/10 pb-2">What&apos;s Hot</h4>
          <div className="space-y-4">
            {drawerPosts.map((p, i) => (
              <div key={i} className="flex gap-3 group">
                <div className="w-[62px] h-[46px] flex-shrink-0 overflow-hidden rounded">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-[11px] text-gray-300 hover:text-[#2ab391] leading-tight line-clamp-2 font-medium transition-colors">{p.title}</Link>
                  <p className="text-[10px] text-gray-500 mt-1">{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="px-5 pb-6 flex-shrink-0">
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <Link key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#2ab391] hover:text-white transition-all">
                <Icon size={13} />
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* ── SEARCH OVERLAY ── */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-2xl">
              <Search size={18} className="ml-5 text-gray-400 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for articles, topics, and more..."
                className="flex-1 px-4 py-5 text-[15px] text-gray-800 outline-none"
              />
              <button onClick={() => setIsSearchOpen(false)} className="px-5 py-5 text-gray-400 hover:text-gray-700 transition-colors">
                <X size={18} />
              </button>
            </div>
            <p className="text-center text-white/50 text-[11px] mt-3">Press <kbd className="bg-white/15 rounded px-1.5 py-0.5 font-mono">Esc</kbd> to close</p>
          </div>
        </div>
      )}

      {/* ── HEADER WRAPPER ── */}
      <header className="w-full bg-white relative z-40 font-sans">

        {/* Top stripe — logo + social + subscribe */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-5 h-[72px] flex items-center justify-between gap-4">
            {/* Social — left */}
            <div className="hidden lg:flex items-center gap-4 text-gray-400">
              <Link href="#" className="hover:text-[#3b5998] transition-colors"><Facebook size={14} /></Link>
              <Link href="#" className="hover:text-[#1da1f2] transition-colors"><Twitter size={14} /></Link>
              <Link href="#" className="hover:text-[#e1306c] transition-colors"><Instagram size={14} /></Link>
            </div>

            {/* Logo — center */}
            <Link href="/smart-life" className="absolute left-1/2 -translate-x-1/2">
              <img
                src={`${BASE}2023/06/logo-SMART-LIFE-01@2x.png`}
                alt="SmartMag SmartLife"
                className="h-[34px] w-auto"
              />
            </Link>

            {/* Subscribe — right */}
            <a
              href="#"
              className="ml-auto hidden lg:inline-flex items-center bg-[#2ab391] hover:bg-[#22977a] text-white text-[11px] font-black uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>

        {/* ── STICKY NAV ── */}
        <div className={`${isScrolled ? "fixed top-0 left-0 right-0 shadow-md" : ""} bg-white border-b border-gray-100 z-50 transition-shadow duration-300`}>
          <div className="max-w-[1200px] mx-auto px-5 h-[52px] flex items-center gap-3">

            {/* Hamburger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-500 hover:text-[#2ab391] transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>

            {/* Nav */}
            <nav className="hidden lg:flex flex-1 items-center justify-center h-full">
              <ul className="flex items-center h-full">
                {navLinks.map((item) => (
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
                        className="flex items-center h-full px-4 text-[12px] font-black uppercase tracking-wide text-[#333] hover:text-[#2ab391] transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 h-full px-4 text-[12px] font-black uppercase tracking-wide transition-colors ${item.active ? "text-[#2ab391] border-b-2 border-[#2ab391]" : "text-[#333] hover:text-[#2ab391]"}`}
                      >
                        {item.label}
                        {item.mega && <ChevronDown size={11} className="opacity-60 mt-0.5" />}
                      </Link>
                    )}

                    {/* Mega dropdown */}
                    {item.mega && openMega === item.mega && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white shadow-2xl border border-gray-100 z-50 p-5 grid grid-cols-5 gap-4"
                        onMouseEnter={() => setOpenMega(item.mega!)}
                        onMouseLeave={() => setOpenMega(null)}
                      >
                        {megaPosts[item.mega as keyof typeof megaPosts].map((p, i) => (
                          <Link key={i} href="#" className="group/c block">
                            <div className="aspect-[4/3] overflow-hidden rounded mb-2">
                              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover/c:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-[11px] font-bold text-[#222] hover:text-[#2ab391] leading-tight line-clamp-3 transition-colors">{p.title}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="ml-auto text-gray-500 hover:text-[#2ab391] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Spacer when sticky kicks in */}
        {isScrolled && <div className="h-[52px]" />}
      </header>
    </>
  );
}
