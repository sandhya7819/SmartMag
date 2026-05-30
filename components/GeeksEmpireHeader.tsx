"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  megaMenuMovies,
  megaMenuGaming,
  heroPost,
  featuredLeft,
  featuredRight,
  latestMovies,
  topGames,
  bingeWatchMain,
  bingeWatchList,
  trendyTV,
  latestUpdates,
  mustRead,
  bottomGrid,
  Post
} from "@/lib/geeksEmpireData";

const ALL_POSTS: Post[] = [
  heroPost,
  featuredLeft,
  ...featuredRight,
  ...latestMovies,
  ...topGames,
  bingeWatchMain,
  ...bingeWatchList,
  ...trendyTV,
  ...latestUpdates,
  ...mustRead,
  ...bottomGrid
].filter(Boolean);

const ACCENT_RED = "#ef2626";

const TOP_NAV_SOCIALS = [
  { service: "facebook", url: "#" },
  { service: "twitter", url: "#" },
  { service: "instagram", url: "#" },
  { service: "youtube", url: "#" }
];

const MAIN_NAV = [
  { label: "Home", href: "/geeks-empire", active: true },
  { label: "Features", href: "#" },
  { label: "Movies", href: "#" },
  { label: "TV Stream", href: "/geeks-empire" },
  { label: "Gaming", href: "#" },
  { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" }
];

const FEATURES_DROPDOWN = [
  { label: "58+ Unique Demos", href: "#" },
  { label: "Post Styles", href: "#", children: ["Multi-page Slides", "Modern Spacious", "Creative/Cover", "Large Bold"] },
  { label: "Category Layouts", href: "#", children: ["Grid Style", "Posts List", "Overlay Grid", "Infinite Load"] },
  { label: "Header Styles", href: "https://theme-sphere.com/demo/smartmag-landing/#features-headers" },
  { label: "bbPress Forums", href: "#" },
  { label: "Google AMP", href: "#" }
];

function Hamburger() {
  return (
    <div className="flex flex-col gap-1 w-[18px]">
      <span className="h-[2px] w-full bg-white rounded-xs"></span>
      <span className="h-[2px] w-full bg-white rounded-xs"></span>
      <span className="h-[2px] w-full bg-white rounded-xs"></span>
    </div>
  );
}

function SocialIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
    pinterest: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.98-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.3.12-.34.3-.04.14-.14.2-.28.14-1-.46-1.62-1.92-1.62-3.1 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.46-6.2 7.46-1.21 0-2.35-.63-2.74-1.37 0 0-.6 2.28-.74 2.85-.27 1.04-1 2.35-1.5 3.14 1.13.33 2.3.51 3.53.51 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>,
    youtube: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.556a3.003 3.003 0 0 0 2.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  };

  return icons[service] || null;
}

function MegaMenu({ category, posts }: { category: string; posts: any[] }) {
  return (
    <div className="absolute left-0 right-0 top-full w-full bg-[#1A1B1D] text-white border-t border-white/[0.08] py-6 hidden group-hover:block z-[999] shadow-2xl animate-fade-in font-sans">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-5 gap-6">
        
        {/* Left Sub-navigation menu */}
        <div className="col-span-1 border-r border-white/5 pr-4 flex flex-col justify-between py-1">
          <ol className="space-y-3.5 text-[12px] font-bold uppercase tracking-wider text-white/55">
            <li className="hover:text-[#ef2626] transition-colors"><Link href="/geeks-empire">Hollywood</Link></li>
            <li className="hover:text-[#ef2626] transition-colors"><Link href="/geeks-empire">Anime</Link></li>
            <li className="hover:text-[#ef2626] transition-colors"><Link href="/geeks-empire">Stream</Link></li>
          </ol>
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#ef2626] hover:text-white transition-colors">
            <Link href="/geeks-empire">View All &rarr;</Link>
          </div>
        </div>

        {/* 4 recent posts */}
        <div className="col-span-4 grid grid-cols-4 gap-6">
          {posts.slice(0, 4).map((post, idx) => (
            <div key={idx} className="group/post cursor-pointer space-y-3">
              <div className="aspect-[16/9] overflow-hidden bg-white/5 rounded-sm relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-105"
                />
                {post.rating && (
                  <div className="absolute top-2 right-2 bg-black/85 text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/10 shadow-md">
                    <span className="text-[11px] font-black tracking-tight text-[#ef2626]">{post.rating}</span>
                  </div>
                )}
                {post.isVideo && (
                  <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-[#ef2626] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </span>
                )}
              </div>
              <h5 className="text-[12.5px] font-bold leading-[1.4] text-white/90 group-hover/post:text-[#ef2626] transition-colors line-clamp-3">
                <Link href={post.url}>{post.title}</Link>
              </h5>
              <div className="text-[9.5px] text-white/40 font-bold uppercase tracking-wider">{post.date}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function GeeksEmpireHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = ALL_POSTS.filter(post => 
      post.title.toLowerCase().includes(query) || 
      (post.cat && post.cat.toLowerCase().includes(query))
    );
    const unique: Post[] = [];
    const seen = new Set();
    for (const post of filtered) {
      if (!seen.has(post.title)) {
        seen.add(post.title);
        unique.push(post);
      }
    }
    setSearchResults(unique.slice(0, 4));
  }, [searchQuery]);

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
          className="fixed inset-0 bg-black/60 z-[999] transition-opacity duration-300 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── MOBILE OFF-CANVAS SLIDE DRAWER ── */}
      <div 
        className={`fixed top-0 left-0 bottom-0 h-full w-[310px] bg-[#1a1b1d] text-white z-[1000] shadow-3xl transform transition-transform duration-300 overflow-y-auto flex flex-col justify-between font-sans ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Head */}
          <div className="p-5 border-b border-white/[0.05] flex justify-between items-center bg-[#151516]">
            <Link href="/geeks-empire" onClick={() => setDrawerOpen(false)}>
              <img 
                className="h-8 w-auto object-contain" 
                src="https://smartmag.theme-sphere.com/geeks-empire/wp-content/uploads/sites/14/2021/03/geeks-empire-logo-mob@2x.png" 
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

          <div className="p-5 space-y-7">
            {/* Newsletter widget */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-sm space-y-3.5">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#ef2626]">Subscribe to Updates</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-semibold">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required 
                  className="w-full bg-white/5 border border-white/10 px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-[#ef2626] transition-colors text-white placeholder-white/30"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#ef2626] hover:bg-white hover:text-black text-white py-2 text-[10.5px] font-black uppercase tracking-widest transition-all rounded-sm shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* What's Hot Widget */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/5 pb-2">What's Hot</h4>
              <div className="space-y-4">
                {[
                  {
                    title: "‘Supergirl’ To End With Upcoming Season 6 On The CW",
                    img: "https://smartmag.theme-sphere.com/geeks-empire/wp-content/uploads/sites/14/2021/03/Depositphotos_186361084_xl-2015-1-150x100.jpg",
                    date: "Mar 14, 2021"
                  },
                  {
                    title: "No Man Skys’ new ‘Desolation’ Update Becomes a Horror Game",
                    img: "https://smartmag.theme-sphere.com/geeks-empire/wp-content/uploads/sites/14/2021/03/Depositphotos_146706937_xl-2015-1-150x101.jpg",
                    date: "Mar 14, 2021"
                  }
                ].map((post, i) => (
                  <div key={i} className="flex gap-3">
                    <img src={post.img} alt="" className="w-14 h-11 object-cover rounded-sm shrink-0 bg-white/5" />
                    <div className="space-y-0.5">
                      <h5 className="text-[11.5px] font-bold text-white/90 line-clamp-2 hover:text-[#ef2626] transition-colors">
                        <Link href="/geeks-empire" onClick={() => setDrawerOpen(false)}>{post.title}</Link>
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
        <div className="fixed inset-0 bg-[#1a1b1d]/98 text-white z-[2000] flex items-center justify-center p-6 animate-fade-in font-sans">
          <button 
            onClick={() => setSearchOpen(false)} 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 text-4xl font-light"
          >
            &times;
          </button>
          <div className="w-full max-w-2xl text-center space-y-6">
            <form onSubmit={handleSearchSubmit} className="relative border-b-2 border-white/10 pb-4">
              <input 
                type="search" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-3xl md:text-5xl font-bold placeholder-white/5 focus:outline-none"
                autoFocus
              />
              <button type="submit" className="absolute right-0 top-3 text-white/40 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </form>

            {/* Live Search Results */}
            {searchResults.length > 0 && (
              <div className="bg-black/40 border border-white/10 rounded-sm p-4 text-left max-w-2xl mx-auto space-y-3.5 shadow-2xl max-h-[300px] overflow-y-auto custom-scrollbar">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#ef2626] mb-2 border-b border-white/5 pb-1.5">Live Search Results</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((post, index) => (
                    <Link 
                      key={index} 
                      href={post.url} 
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="flex gap-3 hover:bg-white/5 p-2 rounded transition-colors group cursor-pointer"
                    >
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-14 h-10 object-cover rounded-sm bg-white/5 shrink-0"
                      />
                      <div className="space-y-0.5">
                        <h5 className="text-[12.5px] font-bold text-white/90 group-hover:text-[#ef2626] line-clamp-2 transition-colors leading-snug">
                          {post.title}
                        </h5>
                        <span className="text-[9.5px] text-white/40 font-bold uppercase">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <p className="text-xs md:text-sm text-white/30 font-bold uppercase tracking-widest">
              Type above and press <span className="text-[#ef2626]">Enter</span> to search. Press <span className="text-[#ef2626]">Esc</span> to cancel.
            </p>
          </div>
        </div>
      )}

      <header className="w-full bg-[#1a1b1d] select-none font-sans text-white border-b border-white/[0.08]">
        
        {/* Row 1: Top Main Row */}
        <div className="max-w-[1200px] mx-auto px-4 h-[72px] flex items-center justify-between">
          {/* Left: Hamburger & Subscribe button */}
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setDrawerOpen(true)} 
              className="text-white hover:text-[#ef2626] transition-colors p-1"
              aria-label="Menu"
            >
              <Hamburger />
            </button>
            <a 
              href="http://eepurl.com/hq-3Xb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-[#ef2626] hover:text-white text-white px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-sm inline-block"
            >
              Subscribe
            </a>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center flex-1 lg:flex-none">
            <Link href="/geeks-empire">
              <img 
                src="https://smartmag.theme-sphere.com/geeks-empire/wp-content/uploads/sites/14/2021/03/geeks-empire-logo.png" 
                alt="SmartMag GeekEmpire Logo" 
                className="h-[32px] md:h-[37px] w-auto object-contain block"
              />
            </Link>
          </div>

          {/* Right: Social icons & Search Icon */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              {TOP_NAV_SOCIALS.map((soc) => (
                <a 
                  key={soc.service} 
                  href={soc.url} 
                  className="hover:text-[#ef2626] text-white/50 transition-colors p-1"
                  title={soc.service}
                >
                  <SocialIcon service={soc.service} />
                </a>
              ))}
            </div>
            <span className="w-px h-3 bg-white/10 hidden sm:inline-block" />
            <button 
              onClick={() => setSearchOpen(true)} 
              className="hover:text-[#ef2626] text-white/70 transition-colors p-1" 
              title="Search"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2: Bottom Navigation Row (Smart Sticky) */}
        <div className={`w-full bg-[#1a1b1d] border-t border-white/[0.08] z-[99] transition-transform duration-300 ${
          sticky ? "fixed top-0 left-0 right-0 shadow-[0_2px_12px_rgba(0,0,0,0.2)] border-b" : "relative"
        } ${sticky && !visible ? "-translate-y-full" : "translate-y-0"}`}>
          <div className="max-w-[1200px] w-full mx-auto px-4 flex items-center justify-between">
            <div className="w-full flex justify-center h-[42px]">
              
              <nav className="flex items-center h-full">
                {MAIN_NAV.map((item) => {
                  if (item.label === "Features") {
                    return (
                      <div key={item.label} className="group relative h-full flex items-center">
                        <span className="px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white/80 hover:text-[#ef2626] transition-colors flex items-center gap-1 cursor-pointer">
                          {item.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                        {/* Dropdown list */}
                        <ul className="absolute top-full left-0 w-52 bg-[#1A1B1D] border border-white/10 py-3 text-[11px] font-bold uppercase tracking-widest text-white/80 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999] rounded-sm">
                          {FEATURES_DROPDOWN.map((sub, sIdx) => (
                            <li key={sIdx} className="relative group/sub">
                              <Link 
                                href={sub.href} 
                                className="px-5 py-2.5 hover:bg-white/5 hover:text-[#ef2626] transition-colors flex items-center justify-between"
                              >
                                {sub.label}
                                {sub.children && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60">
                                    <polyline points="9 18 15 12 9 6" />
                                  </svg>
                                )}
                              </Link>
                              {sub.children && (
                                <ul className="absolute left-full top-0 w-48 bg-[#1A1B1D] border border-white/10 py-2 hidden group-hover/sub:block shadow-xl rounded-sm">
                                  {sub.children.map((child, cIdx) => (
                                    <li key={cIdx}>
                                      <Link href="/geeks-empire" className="block px-5 py-2 hover:bg-white/5 hover:text-[#ef2626] transition-colors">
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

                  if (item.label === "Movies") {
                    return (
                      <div key={item.label} className="group h-full flex items-center">
                        <span className="px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white/80 hover:text-[#ef2626] transition-colors flex items-center gap-1 cursor-pointer">
                          {item.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                        <MegaMenu category="Movies" posts={megaMenuMovies} />
                      </div>
                    );
                  }

                  if (item.label === "Gaming") {
                    return (
                      <div key={item.label} className="group h-full flex items-center">
                        <span className="px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white/80 hover:text-[#ef2626] transition-colors flex items-center gap-1 cursor-pointer">
                          {item.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                        <MegaMenu category="Gaming" posts={megaMenuGaming} />
                      </div>
                    );
                  }

                  return (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className={`px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors ${
                        item.active ? "text-[#ef2626]" : "text-white/80 hover:text-[#ef2626]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

            </div>
          </div>
        </div>

      </header>

      {/* Spacer to prevent layout shift when bottom row goes sticky */}
      {sticky && <div className="h-[42px] w-full bg-transparent" />}
    </>
  );
}
