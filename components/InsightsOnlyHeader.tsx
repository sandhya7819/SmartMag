"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { megaMenuTech, megaMenuLifestyle } from "@/lib/insightsOnlyData";

const ACCENT_RED = "#ef2c32";

const TOP_NAV = [
  { label: "Start Here", href: "#" },
  { label: "Demos", href: "/" },
  { label: "Contact", href: "#" },
  { label: "Buy Now", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" },
];

const MAIN_NAV = [
  { label: "Home", href: "/insights-only", active: true },
  { label: "Features", href: "#" },
  { label: "Technology", href: "#" },
  { label: "Health", href: "/insights-only" },
  { label: "Lifestyle", href: "#" },
  { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" },
];

const FEATURES_DROPDOWN = [
  { label: "58+ Unique Demos", href: "/" },
  { label: "Post Styles", href: "#", children: ["Multi-page Slides", "Modern Spacious", "Creative/Cover", "Large Bold"] },
  { label: "Category Layouts", href: "#", children: ["Grid Style", "Posts List", "Overlay Grid", "Infinite Load"] },
  { label: "Header Styles", href: "https://theme-sphere.com/demo/smartmag-landing/#features-headers" },
  { label: "bbPress Forums", href: "#" },
  { label: "Google AMP", href: "#" },
];

function Hamburger() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function SocialIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
    pinterest: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.98-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.3.12-.34.3-.04.14-.14.2-.28.14-1-.46-1.62-1.92-1.62-3.1 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.46-6.2 7.46-1.21 0-2.35-.63-2.74-1.37 0 0-.6 2.28-.74 2.85-.27 1.04-1 2.35-1.5 3.14 1.13.33 2.3.51 3.53.51 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>,
    vimeo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M22.396 7.21c-.097 2.146-1.605 5.09-4.526 8.835-3.007 3.864-5.55 5.797-7.63 5.797-1.282 0-2.366-1.182-3.256-3.548l-1.96-7.185c-.663-2.417-1.378-3.626-2.147-3.626-.162 0-.73.34-1.702 1.02L0 7.3c1.026-.897 2.036-1.79 3.033-2.684 1.385-1.196 2.417-1.84 3.097-1.927 1.606-.204 2.593.896 2.96 3.298.404 2.64 1.002 6.446 1.793 6.446.59 0 1.258-.934 2.004-2.8 1.12-2.8 1.2-4.147.242-4.147-.456 0-1.04.185-1.752.556 1.442-4.708 4.2-6.953 8.272-6.735 3.013.163 4.417 2.19 4.21 6.082z"/></svg>,
  };

  return icons[service] || null;
}

function MegaMenu({ category, posts }: { category: string; posts: any[] }) {
  return (
    <div className="absolute left-0 right-0 top-full w-full bg-white text-black border-t border-gray-100 py-6 hidden group-hover:block z-50 shadow-2xl animate-fade-in">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-5 gap-6">
        {posts.map((post, idx) => (
          <div key={idx} className="group/post cursor-pointer space-y-3">
            <div className="aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-105"
              />
              {post.rating && (
                <div className="absolute top-2 right-2 bg-black/85 text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/10 shadow-md">
                  <span className="text-[11.5px] font-black tracking-tighter text-[#ef2c32]">{post.rating}</span>
                </div>
              )}
              {post.isAudio && (
                <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md hover:bg-[#ef2c32] hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M9 18V5l12-2v13M9 9l12-2M9 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-2c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" /></svg>
                  </span>
                </span>
              )}
              {post.isVideo && (
                <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md hover:bg-[#ef2c32] hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </span>
              )}
            </div>
            <h5 className="text-[13px] font-black leading-[1.35] text-gray-900 group-hover/post:text-[#ef2c32] transition-colors line-clamp-3">
              <Link href={post.url}>{post.title}</Link>
            </h5>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InsightsOnlyHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 150) {
        setSticky(false);
        setVisible(true);
      } else {
        setSticky(true);
        if (currentScrollY > lastScrollY) {
          setVisible(false); // Scrolling down: hide header
        } else {
          setVisible(true); // Scrolling up: show header
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Search Query: ${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* ── MOBILE OFF-CANVAS BACKDROP ── */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 bg-black/55 z-[999] transition-opacity duration-300 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── MOBILE OFF-CANVAS SLIDE DRAWER ── */}
      <div 
        className={`fixed top-0 left-0 bottom-0 h-full w-[310px] bg-[#101118] text-white z-[1000] shadow-3xl transform transition-transform duration-300 overflow-y-auto flex flex-col justify-between ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Head */}
        <div>
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#0d0e14]">
            <Link href="/insights-only" onClick={() => setDrawerOpen(false)}>
              <img 
                className="h-8 w-auto object-contain" 
                src="https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/logo-insightsonly-low2.png" 
                alt="Logo" 
              />
            </Link>
            <button 
              onClick={() => setDrawerOpen(false)} 
              className="text-white/60 hover:text-white text-3xl font-light leading-none p-1 transition-colors"
            >
              &times;
            </button>
          </div>

          <div className="p-5 space-y-6">
            {/* Search Form */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm rounded-sm focus:outline-none focus:border-[#ef2c32] focus:bg-white/10 transition-all text-white placeholder-white/30"
              />
              <button type="submit" className="absolute right-3 top-3 text-white/40 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </form>

            {/* Mobile Nav Links */}
            <ul className="space-y-4 font-black uppercase text-[13px] tracking-widest border-t border-white/5 pt-4">
              <li>
                <Link href="/insights-only" className="block py-1 hover:text-[#ef2c32] transition-colors" onClick={() => setDrawerOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <span className="block py-1 text-white/30 cursor-not-allowed">
                  Features
                </span>
              </li>
              <li>
                <Link href="/insights-only" className="block py-1 hover:text-[#ef2c32] transition-colors" onClick={() => setDrawerOpen(false)}>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/insights-only" className="block py-1 hover:text-[#ef2c32] transition-colors" onClick={() => setDrawerOpen(false)}>
                  Health
                </Link>
              </li>
              <li>
                <Link href="/insights-only" className="block py-1 hover:text-[#ef2c32] transition-colors" onClick={() => setDrawerOpen(false)}>
                  Lifestyle
                </Link>
              </li>
            </ul>

            {/* Newsletter widget */}
            <div className="bg-white/[0.03] border border-white/5 p-5 rounded-sm space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-white/90">Subscribe to Updates</h4>
              <p className="text-[11.5px] text-white/50 leading-relaxed font-medium">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required 
                  className="w-full bg-white/5 border border-white/10 px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-[#ef2c32] transition-colors text-white placeholder-white/30"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#ef2c32] hover:bg-white hover:text-black text-white py-2 text-xs font-black uppercase tracking-widest transition-all rounded-sm shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* What's Hot Widget */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/5 pb-2">What's Hot</h4>
              <div className="space-y-3">
                {[
                  {
                    title: "Fitness As A Family: Benefits And Routines – InsightsOnly Health",
                    img: "https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/shutterstock_560096887-150x100.jpg",
                    date: "Jan 22, 2021"
                  },
                  {
                    title: "Lifting Weights Might Help Prevent Skin Aging, Study Shows",
                    img: "https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/94440cf74c41beed1d60d9a4b0fc52c9-150x100.jpeg",
                    date: "Jan 16, 2021"
                  }
                ].map((post, i) => (
                  <div key={i} className="flex gap-3">
                    <img src={post.img} alt="" className="w-14 h-11 object-cover rounded-sm shrink-0 bg-white/5" />
                    <div className="space-y-0.5">
                      <h5 className="text-[11.5px] font-bold text-white/90 line-clamp-2 hover:text-[#ef2c32] transition-colors">
                        <Link href="/insights-only" onClick={() => setDrawerOpen(false)}>{post.title}</Link>
                      </h5>
                      <span className="text-[9px] text-white/40 font-bold uppercase">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Social links */}
        <div className="p-5 border-t border-white/5 flex gap-3 text-white/40 justify-center">
          {["facebook", "twitter", "instagram"].map((srv) => (
            <a 
              key={srv} 
              href="#" 
              className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:border-white/10 hover:text-white transition-colors bg-white/[0.02]"
            >
              <SocialIcon service={srv} />
            </a>
          ))}
        </div>
      </div>

      {/* ── FULLSCREEN SEARCH MODAL OVERLAY ── */}
      {searchOpen && (
        <div className="fixed inset-0 bg-[#0d0e14]/98 text-white z-[2000] flex items-center justify-center p-6 animate-fade-in">
          <button 
            onClick={() => setSearchOpen(false)} 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 text-4xl font-light"
          >
            &times;
          </button>
          <div className="w-full max-w-2xl text-center space-y-6">
            <form onSubmit={handleSearchSubmit} className="relative border-b-2 border-white/15 pb-4">
              <input 
                type="search" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-3xl md:text-5xl font-black placeholder-white/10 focus:outline-none"
                autoFocus
              />
              <button type="submit" className="absolute right-0 top-3 text-white/40 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </form>
            <p className="text-xs md:text-sm text-white/30 font-bold uppercase tracking-widest">
              Type above and press <span className="text-[#ef2c32]">Enter</span> to search. Press <span className="text-[#ef2c32]">Esc</span> to cancel.
            </p>
          </div>
        </div>
      )}

      {/* ── MAIN HEADER WRAPPER ── */}
      <header className="w-full bg-white select-none font-sans">
        
        {/* Row 1: Top Bar (Dark - `#0d0e14`) */}
        <div className="bg-[#0d0e14] text-white/70 text-[11px] font-black uppercase tracking-widest border-b border-black/10">
          <div className="max-w-[1200px] mx-auto px-4 h-[44px] flex items-center justify-between">
            {/* Left Menu / Toggle */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setDrawerOpen(true)} 
                className="text-white/80 hover:text-[#ef2c32] transition-colors p-1"
                aria-label="Menu"
              >
                <Hamburger />
              </button>
              <div className="hidden md:flex items-center gap-6 h-full">
                {TOP_NAV.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    target={item.target} 
                    rel={item.target ? "noopener noreferrer" : undefined}
                    className="hover:text-white transition-colors py-1.5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Socials & Search trigger */}
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex items-center gap-3">
                {["facebook", "twitter", "instagram", "pinterest", "vimeo"].map((srv) => (
                  <a 
                    key={srv} 
                    href="#" 
                    className="hover:text-[#ef2c32] text-white/60 transition-colors p-1"
                    title={srv}
                  >
                    <SocialIcon service={srv} />
                  </a>
                ))}
              </div>
              <span className="w-px h-3 bg-white/10 hidden sm:inline-block" />
              <button 
                onClick={() => setSearchOpen(true)} 
                className="hover:text-[#ef2c32] text-white/80 transition-colors p-1" 
                title="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Main Navigation Bar (White, Sticky capable) */}
        <div className={`w-full bg-white border-b border-gray-100 z-[100] transition-transform duration-300 ${
          sticky ? "fixed top-0 left-0 right-0 shadow-[0_2px_12px_rgba(0,0,0,0.06)] py-1.5" : "relative py-4 md:py-6"
        } ${sticky && !visible ? "-translate-y-full" : "translate-y-0"}`}>
          <div className="max-w-[1200px] w-full mx-auto px-4 flex items-center justify-between">
            {/* Logo Left */}
            <Link href="/insights-only" className="inline-block shrink-0">
              <img 
                src="https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/logo-insightsonly-low2.png" 
                alt="SmartMag InsightsOnly Logo" 
                className="h-[32px] md:h-[37px] w-auto object-contain block"
              />
            </Link>

            {/* Menu Links Center */}
            <nav className="hidden lg:flex items-center h-full">
              {MAIN_NAV.map((item) => {
                if (item.label === "Features") {
                  return (
                    <div key={item.label} className="group relative h-full flex items-center">
                      <span className="px-4 py-2 text-[13px] font-black uppercase tracking-widest text-[#16171f] hover:text-[#ef2c32] transition-colors flex items-center gap-1 cursor-pointer">
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                      {/* Simple Dropdown list */}
                      <ul className="absolute top-full left-0 w-52 bg-white border border-gray-100 py-3 text-[11px] font-black uppercase tracking-widest text-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-sm">
                        {FEATURES_DROPDOWN.map((sub, sIdx) => (
                          <li key={sIdx} className="relative group/sub">
                            <Link 
                              href={sub.href} 
                              className="px-5 py-2.5 hover:bg-gray-50 hover:text-[#ef2c32] transition-colors flex items-center justify-between"
                            >
                              {sub.label}
                              {sub.children && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              )}
                            </Link>
                            {sub.children && (
                              <ul className="absolute left-full top-0 w-48 bg-white border border-gray-100 py-2 hidden group-hover/sub:block shadow-xl rounded-sm">
                                {sub.children.map((child, cIdx) => (
                                  <li key={cIdx}>
                                    <Link href="/insights-only" className="block px-5 py-2 hover:bg-gray-50 hover:text-[#ef2c32] transition-colors">
                                      {child}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                if (item.label === "Technology") {
                  return (
                    <div key={item.label} className="group h-full flex items-center">
                      <span className="px-4 py-2 text-[13px] font-black uppercase tracking-widest text-[#16171f] hover:text-[#ef2c32] transition-colors flex items-center gap-1 cursor-pointer">
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                      <MegaMenu category="Technology" posts={megaMenuTech} />
                    </div>
                  );
                }

                if (item.label === "Lifestyle") {
                  return (
                    <div key={item.label} className="group h-full flex items-center">
                      <span className="px-4 py-2 text-[13px] font-black uppercase tracking-widest text-[#16171f] hover:text-[#ef2c32] transition-colors flex items-center gap-1 cursor-pointer">
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                      <MegaMenu category="Lifestyle" posts={megaMenuLifestyle} />
                    </div>
                  );
                }

                return (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    target={item.target}
                    rel={item.target ? "noopener noreferrer" : undefined}
                    className={`px-4 py-2 text-[13px] font-black uppercase tracking-widest transition-colors ${
                      item.active ? "text-[#ef2c32]" : "text-[#16171f] hover:text-[#ef2c32]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Subscribe Right Button */}
            <div>
              <a 
                href="http://eepurl.com/hq-3Xb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-black hover:border-[#ef2c32] hover:bg-[#ef2c32] hover:text-white text-black px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 rounded-sm inline-block"
              >
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>

      </header>

      {/* Spacer to prevent layout shift when header becomes sticky */}
      {sticky && <div className="h-[68px] md:h-[86px] w-full bg-transparent" />}
    </>
  );
}
