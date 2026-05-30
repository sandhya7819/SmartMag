"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  whatsHotPosts,
  megaMenuHealthFitness,
  megaMenuHealthFinance,
  megaMenuHealthCulture,
  horizontalTopBarPosts,
  Post
} from "@/lib/bloggerData";

const ALL_BLOGGER_POSTS: Post[] = [
  ...whatsHotPosts,
  ...megaMenuHealthFitness,
  ...megaMenuHealthFinance,
  ...megaMenuHealthCulture,
  ...horizontalTopBarPosts
].filter(Boolean);

const TOP_NAV_LINKS = [
  { label: "Start Here", href: "#" },
  { label: "Demos", href: "https://theme-sphere.com/demo/smartmag-landing/" },
  { label: "Contact", href: "#" },
  { label: "Buy Now", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" }
];

const MAIN_NAV_LINKS = [
  { label: "Home", href: "/blogger", active: true },
  { label: "Features", href: "#", hasDropdown: true },
  { label: "Health", href: "#", hasMegaMenu: true },
  { label: "Pages & Templates", href: "#", hasDropdown: true },
  { label: "Autoload Next Post", href: "#" },
  { label: "Gutenberg Styles", href: "#" },
  { label: "Shop / WooCommerce", href: "#", hasDropdown: true }
];

const FEATURES_DROPDOWN = [
  { label: "58+ Unique Demos", href: "#" },
  { label: "Post Styles", href: "#" },
  { label: "Category Layouts", href: "#" },
  { label: "Header Styles", href: "#" },
  { label: "Homepage Blocks", href: "#" },
  { label: "bbPress Forums", href: "#" },
  { label: "Google AMP", href: "#" }
];

const PAGES_DROPDOWN = [
  { label: "Standard Page", href: "#" },
  { label: "Author Page", href: "#" },
  { label: "Authors List", href: "#" },
  { label: "Full Width Page", href: "#" },
  { label: "Full Spacious", href: "#" },
  { label: "Contact Me", href: "#" },
  { label: "404 Page", href: "#" },
  { label: "Typography", href: "#" }
];

const SHOP_DROPDOWN = [
  { label: "The Shop", href: "#" },
  { label: "Cart", href: "#" },
  { label: "My Account", href: "#" },
  { label: "Checkout", href: "#" }
];

function SocialIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  };
  return icons[service] || null;
}

export default function BloggerHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<"fitness" | "finance" | "culture">("fitness");

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = ALL_BLOGGER_POSTS.filter(post =>
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
    setSearchResults(unique.slice(0, 5));
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
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActiveTabPosts = () => {
    switch (activeTab) {
      case "fitness":
        return megaMenuHealthFitness;
      case "finance":
        return megaMenuHealthFinance;
      case "culture":
        return megaMenuHealthCulture;
      default:
        return megaMenuHealthFitness;
    }
  };

  return (
    <>
      {/* ── MOBILE DRAWER BACKDROP ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[9999] transition-opacity duration-300 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── MOBILE OFF-CANVAS SLIDE DRAWER ── */}
      <div
        className={`fixed top-0 left-0 bottom-0 h-full w-[320px] bg-[#101010] text-white z-[10000] shadow-3xl transform transition-transform duration-300 overflow-y-auto flex flex-col justify-between font-sans ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Head */}
          <div className="p-5 border-b border-white/[0.05] flex justify-between items-center bg-[#151516]">
            <Link href="/blogger" onClick={() => setDrawerOpen(false)}>
              <img
                className="h-9 w-auto object-contain"
                src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Blogger-logo-white@2x.png"
                alt="SmartMag Blogger Logo"
              />
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white/60 hover:text-white text-3xl font-light leading-none p-1 transition-colors focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-5 space-y-8">
            
            {/* Newsletter widget */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-sm space-y-3.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Subscribe to Updates</h3>
              <p className="text-[12px] text-white/50 leading-relaxed font-semibold">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address.."
                  required
                  className="w-full bg-white/5 border border-white/10 px-3.5 py-2.5 text-xs rounded-sm focus:outline-none focus:border-red-500 transition-colors text-white placeholder-white/20"
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-sm transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* What's Hot Widget */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-red-500 border-b border-white/10 pb-2">What's Hot</h3>
              <div className="space-y-4">
                {whatsHotPosts.slice(0, 3).map((post, idx) => (
                  <div key={idx} className="flex gap-3.5 group cursor-pointer items-start">
                    <div className="w-[80px] h-[55px] shrink-0 bg-white/5 rounded-sm overflow-hidden relative">
                      <img
                        src={post.img}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[12px] font-bold text-white/90 group-hover:text-red-500 leading-snug line-clamp-2 transition-colors">
                        <Link href="/blogger" onClick={() => setDrawerOpen(false)}>{post.title}</Link>
                      </h4>
                      <span className="text-[10px] text-white/40 font-bold uppercase block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-white/[0.05] bg-[#0c0c0d]">
          <div className="flex gap-4 items-center justify-center text-white/40">
            {["facebook", "twitter", "instagram"].map((srv) => (
              <a key={srv} href="#" className="hover:text-white transition-colors">
                <SocialIcon service={srv} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEARCH OVERLAY ── */}
      {searchOpen && (
        <div className="fixed inset-0 bg-[#101010]/95 z-[20000] flex flex-col items-center justify-center p-4 animate-fade-in font-sans">
          <button
            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
            className="absolute top-6 right-6 text-white/50 hover:text-white text-5xl font-light focus:outline-none"
          >
            &times;
          </button>
          
          <div className="w-full max-w-[650px] space-y-8">
            <form
              onSubmit={(e) => { e.preventDefault(); alert(`Search: ${searchQuery}`); setSearchOpen(false); }}
              className="relative w-full border-b border-white/20 pb-2"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-white text-3xl font-light placeholder-white/25 focus:outline-none"
              />
              <button type="submit" className="absolute right-2 top-2 text-white/45 hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" /></svg>
              </button>
            </form>

            {/* Live Search Results */}
            {searchResults.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500">Search Results</h4>
                <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 divide-y divide-white/5">
                  {searchResults.map((post, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex gap-4 items-center group cursor-pointer">
                      <div className="w-[70px] aspect-[16/9] bg-white/5 overflow-hidden shrink-0 rounded-sm">
                        <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold text-sm group-hover:text-red-500 transition-colors line-clamp-1">
                          <Link href="/blogger" onClick={() => { setSearchOpen(false); setSearchQuery(""); }}>{post.title}</Link>
                        </h5>
                        <span className="text-[11px] text-white/40 font-semibold">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {searchQuery.trim() && searchResults.length === 0 && (
              <p className="text-white/40 text-sm font-semibold text-center py-4">No results found.</p>
            )}
          </div>
        </div>
      )}

      {/* ── HEADER CONTAINER ── */}
      <header className="w-full font-sans bg-white select-none relative z-50">
        
        {/* ── TOP HEADER ROW (LIGHT BACKGROUND) ── */}
        <div className="w-full bg-white border-b border-gray-100 hidden lg:block">
          <div className="max-w-[1200px] mx-auto px-4 h-24 flex items-center justify-between">
            
            {/* Left: Logo */}
            <div className="shrink-0">
              <Link href="/blogger" className="block">
                <img
                  src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Blogger-logo-01.png"
                  alt="SmartMag Blogger Logo"
                  width="177"
                  height="48"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Right Group: Links, Socials, Subscribe */}
            <div className="flex items-center gap-6">
              
              {/* Mini Links */}
              <nav className="flex items-center gap-5 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
                {TOP_NAV_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.target}
                    className="hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Social Block */}
              <div className="flex items-center gap-3.5 text-gray-400 border-l border-gray-150 pl-6 h-4">
                {["facebook", "twitter", "instagram"].map((srv) => (
                  <a key={srv} href="#" className="hover:text-black transition-colors">
                    <SocialIcon service={srv} />
                  </a>
                ))}
              </div>

              {/* Subscribe button */}
              <a
                href="https://themeforest.net/item/smartmag-responsive-retina-wordpress-magazine/6652608?ref=ThemeSphere"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-black text-white px-5 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-sm transition-colors shadow-sm ml-2"
              >
                SUBSCRIBE
              </a>

            </div>

          </div>
        </div>

        {/* ── BOTTOM STICKY BAR (DARK BACKGROUND) ── */}
        <div
          className={`w-full bg-[#101010] text-white transition-all duration-300 ${
            sticky
              ? `fixed top-0 left-0 right-0 shadow-lg z-[999] ${
                  visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`
              : "relative"
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-4 h-14 flex items-center justify-between">
            
            {/* Left: Toggle & Navigation Links */}
            <div className="flex items-center gap-4 flex-1">
              
              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="hover:text-red-500 transition-colors p-1.5 focus:outline-none flex items-center justify-center shrink-0"
                aria-label="Toggle Menu"
              >
                <div className="flex flex-col gap-1 w-5">
                  <span className="h-[2px] w-full bg-white rounded-xs"></span>
                  <span className="h-[2px] w-full bg-white rounded-xs"></span>
                  <span className="h-[2px] w-full bg-white rounded-xs"></span>
                </div>
              </button>

              {/* Mobile Logo (Visible only on sticky/mobile) */}
              <div className="lg:hidden shrink-0 ml-1">
                <Link href="/blogger">
                  <img
                    src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Blogger-logo-white.png"
                    alt="Logo"
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Menu Links */}
              <nav className="hidden lg:flex items-center gap-0.5 text-[12.5px] font-black uppercase tracking-wider relative h-14">
                {MAIN_NAV_LINKS.map((link, idx) => (
                  <div
                    key={idx}
                    className="group h-full flex items-center px-4 hover:bg-white/[0.04] transition-colors relative cursor-pointer"
                  >
                    <span className="group-hover:text-red-500 transition-colors flex items-center gap-1">
                      {link.label}
                      {link.hasDropdown || link.hasMegaMenu ? (
                        <svg className="w-2.5 h-2.5 opacity-60 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      ) : null}
                    </span>

                    {/* ── STANDARD DROPDOWNS ── */}
                    {link.hasDropdown && (
                      <div className="absolute left-0 top-full bg-[#101010] min-w-[210px] border-t-2 border-red-500 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2.5 flex flex-col font-sans normal-case text-sm tracking-normal z-50">
                        {(link.label === "Features"
                          ? FEATURES_DROPDOWN
                          : link.label === "Pages & Templates"
                          ? PAGES_DROPDOWN
                          : SHOP_DROPDOWN
                        ).map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.href}
                            className="px-5 py-2 hover:bg-white/5 hover:text-red-500 text-white/80 transition-colors font-semibold"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* ── HEALTH CATEGORY MEGA MENU ── */}
                    {link.hasMegaMenu && (
                      <div className="absolute left-1/2 -translate-x-[42%] top-full w-[1170px] bg-[#101010] text-white border-t border-white/[0.06] py-6 hidden group-hover:block z-[999] shadow-2xl animate-fade-in font-sans">
                        <div className="grid grid-cols-12 gap-6 px-6">
                          
                          {/* Left category navigation */}
                          <div className="col-span-2 border-r border-white/5 pr-4 flex flex-col justify-between py-1 normal-case text-sm font-semibold tracking-normal text-white/50">
                            <ol className="space-y-3.5">
                              {["fitness", "finance", "culture"].map((cat) => (
                                <li
                                  key={cat}
                                  onClick={(e) => { e.stopPropagation(); setActiveTab(cat as any); }}
                                  className={`capitalize cursor-pointer transition-colors ${
                                    activeTab === cat ? "text-red-500 font-bold" : "hover:text-white"
                                  }`}
                                >
                                  {cat === "fitness" ? "Fitness" : cat === "finance" ? "Finance" : "Culture"}
                                </li>
                              ))}
                            </ol>
                            <div className="text-xs font-bold uppercase tracking-wider text-red-500 hover:text-white transition-colors pt-4">
                              <Link href="/blogger">View All Category &rarr;</Link>
                            </div>
                          </div>

                          {/* Right loop posts */}
                          <div className="col-span-10 grid grid-cols-4 gap-5">
                            {getActiveTabPosts().slice(0, 4).map((post, pIdx) => (
                              <div key={pIdx} className="group/post cursor-pointer space-y-3 normal-case tracking-normal">
                                <div className="aspect-[16/10] overflow-hidden bg-white/5 rounded-xs relative">
                                  <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-[1.03]"
                                  />
                                  {post.isVideo && (
                                    <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                      <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                                      </span>
                                    </span>
                                  )}
                                  {post.rating && (
                                    <span className="absolute top-2 right-2 bg-black/85 text-red-500 text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center border border-white/10 shadow-md">
                                      {post.rating}
                                    </span>
                                  )}
                                </div>
                                <h5 className="text-[12.5px] font-bold leading-snug text-white/95 group-hover/post:text-red-500 transition-colors line-clamp-3">
                                  <Link href="/blogger">{post.title}</Link>
                                </h5>
                                <div className="text-[10px] text-white/40 font-semibold">{post.date}</div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    )}

                  </div>
                ))}
              </nav>

            </div>

            {/* Right: Search button trigger */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="hover:text-red-500 transition-colors p-2 focus:outline-none flex items-center justify-center"
                aria-label="Open Search"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" /></svg>
              </button>
            </div>

          </div>
        </div>

      </header>
    </>
  );
}
