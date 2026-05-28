"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown, Facebook, Twitter, Instagram } from "lucide-react";
import { megaMenuTech, megaMenuLifestyle } from "@/lib/familyMagData";

const ACCENT_COLOR = "#e26a6a"; // Coral color for FamilyMag

const TOP_NAV = [
  { label: "Start Here", href: "#" },
  { label: "Demos", href: "/" },
  { label: "Contact", href: "#" },
  { label: "Buy Now", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" },
];

const MAIN_NAV = [
  { label: "Home", href: "/family-mag", active: true },
  { label: "Features", href: "#" },
  { label: "Technology", href: "#" },
  { label: "TV & Drama", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Celebrities", href: "#" },
  { label: "Lifestyle", href: "#" },
  { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" },
];

const FEATURES_DROPDOWN = [
  { label: "58+ Unique Demos", href: "/" },
  { label: "Post Styles", href: "#" },
  { label: "Category Layouts", href: "#" },
  { label: "Gutenberg Block Elements", href: "#" },
  { label: "bbPress Forums", href: "#" },
];

const TV_DRAMA_DROPDOWN = [
  { label: "Reviews", href: "#" },
  { label: "Upcoming Movies", href: "#" },
  { label: "TV Shows", href: "#" },
];

function SocialIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <Facebook size={14} />,
    twitter: <Twitter size={14} />,
    instagram: <Instagram size={14} />,
    pinterest: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.98-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.3.12-.34.3-.04.14-.14.2-.28.14-1-.46-1.62-1.92-1.62-3.1 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.46-6.2 7.46-1.21 0-2.35-.63-2.74-1.37 0 0-.6 2.28-.74 2.85-.27 1.04-1 2.35-1.5 3.14 1.13.33 2.3.51 3.53.51 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>,
  };
  return (
    <a href="#" className="text-white/70 hover:text-[#e26a6a] transition-colors flex items-center">
      {icons[service] || null}
    </a>
  );
}

function MegaMenu({ posts }: { posts: any[] }) {
  return (
    <div className="absolute left-0 top-full w-full bg-[#151516] text-white border-t-2 border-[#e26a6a] p-6 hidden group-hover:grid grid-cols-5 gap-5 z-50 shadow-2xl">
      {posts.map((post, idx) => (
        <div key={idx} className="group/post cursor-pointer space-y-2.5">
          <div className="aspect-[3/2] overflow-hidden bg-white/5 rounded-[2px] relative">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-105"
            />
          </div>
          <h5 className="text-[12.5px] font-bold leading-[1.35] text-white/95 group-hover/post:text-[#e26a6a] transition-colors line-clamp-2">
            <Link href={post.url}>{post.title}</Link>
          </h5>
          <div className="text-[10px] text-white/40">{post.date}</div>
        </div>
      ))}
    </div>
  );
}

export default function FamilyMagHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root { --fm-accent: ${ACCENT_COLOR}; }
      `}</style>

      {/* Off-Canvas Backdrop */}
      {menuOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Off-Canvas Mobile Drawer */}
      <div className={`fixed top-0 left-0 bottom-0 z-[1001] w-[320px] max-w-[85vw] bg-[#151516] text-white p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out shadow-2xl
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <img src="https://smartmag.theme-sphere.com/family-mag/wp-content/uploads/sites/50/2024/01/logo-familyMag-01@15x.png"
              alt="FamilyMag Logo" className="h-[28px] w-auto object-contain" />
            <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-[15px] font-bold">
            {MAIN_NAV.map(item => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} target={item.target} rel={item.target ? "noopener noreferrer" : undefined}
                className="hover:text-[#e26a6a] transition-colors py-1.5 border-b border-white/5">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="bg-white/5 border border-white/10 rounded-[3px] p-4 text-center mt-6">
            <h5 className="text-[13px] font-black uppercase tracking-wide text-white">Subscribe to Updates</h5>
            <p className="text-[11px] text-white/60 mt-1 mb-3">Get family & lifestyle news directly in your inbox.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
              <input type="email" placeholder="Your email address.."
                className="bg-white/10 border border-white/15 text-[12px] px-3 py-1.5 rounded-[2px] text-white outline-none focus:border-[#e26a6a]" />
              <button type="submit" className="bg-[#e26a6a] text-white text-[10px] font-black uppercase tracking-wider py-1.5 rounded-[2px] hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            {["facebook", "twitter", "instagram", "pinterest"].map(srv => (
              <SocialIcon key={srv} service={srv} />
            ))}
          </div>
        </div>
      </div>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[1002] bg-[#151516]/98 flex items-center justify-center p-6 animate-fade-in">
          <button onClick={() => setSearchOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div className="w-full max-w-[640px] text-center space-y-6">
            <form onSubmit={e => e.preventDefault()} className="relative">
              <input type="text" placeholder="Search..." autoFocus
                className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#e26a6a] text-white text-[32px] md:text-[44px] font-bold text-center pb-4 outline-none transition-colors placeholder-white/20" />
            </form>
            <p className="text-[14px] text-white/40 font-bold uppercase tracking-widest">
              Type above and press <em className="text-[#e26a6a] not-italic">Enter</em> to search.
            </p>
          </div>
        </div>
      )}

      {/* Header Container */}
      <header className="w-full font-sans bg-[#0e0e0e] text-white">
        
        {/* ROW 1: Desktop Midbranding Bar */}
        <div className="border-b border-white/10 py-5 px-4 hidden lg:block">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            {/* Top Bar Links */}
            <div className="flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-white/60">
              {TOP_NAV.map((item, idx) => (
                <a key={idx} href={item.href} target={item.target} rel={item.target ? "noopener noreferrer" : undefined} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>

            {/* Logo Center */}
            <Link href="/family-mag" className="inline-block translate-x-8">
              <img 
                src="https://smartmag.theme-sphere.com/family-mag/wp-content/uploads/sites/50/2024/01/logo-familyMag-01@15x.png" 
                alt="SmartMag FamilyMag" 
                className="h-9 object-contain"
              />
            </Link>

            {/* Socials & Subscribe right */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-white/70">
                {["facebook", "twitter", "instagram", "pinterest"].map(srv => (
                  <SocialIcon key={srv} service={srv} />
                ))}
              </div>
              <a 
                href="#" 
                className="border-2 border-[#e26a6a] text-[#e26a6a] px-4 py-1.5 text-[10px] font-black uppercase tracking-wider hover:bg-[#e26a6a] hover:text-white transition-all duration-300 rounded-[2px]"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="py-3 px-4 block lg:hidden bg-[#0e0e0e] border-b border-white/10 sticky top-0 z-[40]">
          <div className="flex justify-between items-center">
            <button onClick={() => setMenuOpen(true)} className="text-white hover:text-[#e26a6a] transition-colors">
              <Menu size={22} />
            </button>
            <Link href="/family-mag" className="inline-block">
              <img 
                src="https://smartmag.theme-sphere.com/family-mag/wp-content/uploads/sites/50/2024/01/logo-familyMag-01@15x.png" 
                alt="SmartMag FamilyMag" 
                className="h-7 object-contain"
              />
            </Link>
            <button onClick={() => setSearchOpen(true)} className="text-white hover:text-[#e26a6a] transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Menu Bar (Desktop only) */}
        <nav className={`hidden lg:block border-b border-gray-100 bg-white text-gray-900 transition-all duration-300
          ${sticky ? "fixed top-0 left-0 right-0 z-50 shadow-[0_3px_15px_rgba(0,0,0,0.06)] py-1.5 h-auto" : "relative h-13"}`}>
          <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-full">
            <div className="flex items-center gap-6 h-full">
              {/* Menu trigger */}
              <button 
                onClick={() => setMenuOpen(true)} 
                className="text-gray-800 hover:text-[#e26a6a] transition-colors flex items-center"
              >
                <Menu size={20} />
              </button>

              {/* Menu Links */}
              <ul className="flex items-center gap-6 h-full relative">
                {MAIN_NAV.map(item => {
                  if (item.label === "Features") {
                    return (
                      <li key={item.label} className="relative group h-full flex items-center py-3">
                        <span className="text-[13px] font-black uppercase tracking-wider text-gray-900 hover:text-[#e26a6a] transition-colors flex items-center gap-0.5 cursor-pointer">
                          Features <ChevronDown size={11} className="mt-0.5" />
                        </span>
                        <ul className="absolute top-full left-0 w-52 bg-[#151516] text-white border-t-2 border-[#e26a6a] py-2 text-xs font-bold uppercase tracking-wider shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-[2px]">
                          {FEATURES_DROPDOWN.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link href={sub.href} className="block px-4 py-2 hover:bg-white/5 hover:text-[#e26a6a] transition-colors">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  if (item.label === "TV & Drama") {
                    return (
                      <li key={item.label} className="relative group h-full flex items-center py-3">
                        <span className="text-[13px] font-black uppercase tracking-wider text-gray-900 hover:text-[#e26a6a] transition-colors flex items-center gap-0.5 cursor-pointer">
                          TV & Drama <ChevronDown size={11} className="mt-0.5" />
                        </span>
                        <ul className="absolute top-full left-0 w-52 bg-[#151516] text-white border-t-2 border-[#e26a6a] py-2 text-xs font-bold uppercase tracking-wider shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-[2px]">
                          {TV_DRAMA_DROPDOWN.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link href={sub.href} className="block px-4 py-2 hover:bg-white/5 hover:text-[#e26a6a] transition-colors">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  if (item.label === "Technology") {
                    return (
                      <li key={item.label} className="group h-full flex items-center py-3">
                        <span className="text-[13px] font-black uppercase tracking-wider text-gray-900 hover:text-[#e26a6a] transition-colors flex items-center gap-0.5 cursor-pointer">
                          Technology <ChevronDown size={11} className="mt-0.5" />
                        </span>
                        <MegaMenu posts={megaMenuTech} />
                      </li>
                    );
                  }

                  if (item.label === "Lifestyle") {
                    return (
                      <li key={item.label} className="group h-full flex items-center py-3">
                        <span className="text-[13px] font-black uppercase tracking-wider text-gray-900 hover:text-[#e26a6a] transition-colors flex items-center gap-0.5 cursor-pointer">
                          Lifestyle <ChevronDown size={11} className="mt-0.5" />
                        </span>
                        <MegaMenu posts={megaMenuLifestyle} />
                      </li>
                    );
                  }

                  return (
                    <li key={item.label} className="h-full flex items-center py-3">
                      <Link href={item.href} target={item.target} rel={item.target ? "noopener noreferrer" : undefined}
                        className={`text-[13px] font-black uppercase tracking-wider transition-colors
                          ${item.active ? "text-[#e26a6a]" : "text-gray-900 hover:text-[#e26a6a]"}`}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button onClick={() => setSearchOpen(true)} className="text-gray-800 hover:text-[#e26a6a] transition-colors" title="Search">
              <Search size={18} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
