"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ── Social icons ── */
const SOCIAL = [
  { id: "fb",  label: "Facebook",    href: "http://facebook.com/themesphere",   path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { id: "tw",  label: "X (Twitter)", href: "http://twitter.com/Theme_Sphere",   path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { id: "ig",  label: "Instagram",   href: "#",  path: "" },
  { id: "pi",  label: "Pinterest",   href: "#",  path: "" },
  { id: "yt",  label: "YouTube",     href: "#",  path: "" },
];

function SocialIcon({ s }: { s: typeof SOCIAL[0] }) {
  if (s.id === "ig") return (
    <a href={s.href} target="_blank" rel="nofollow noopener" aria-label={s.label}
       className="text-white/70 hover:text-white transition-colors duration-200">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    </a>
  );
  if (s.id === "pi") return (
    <a href={s.href} target="_blank" rel="nofollow noopener" aria-label={s.label}
       className="text-white/70 hover:text-white transition-colors duration-200">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.36-.719-.36-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    </a>
  );
  if (s.id === "yt") return (
    <a href={s.href} target="_blank" rel="nofollow noopener" aria-label={s.label}
       className="text-white/70 hover:text-white transition-colors duration-200">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
      </svg>
    </a>
  );
  return (
    <a href={s.href} target="_blank" rel="nofollow noopener" aria-label={s.label}
       className="text-white/70 hover:text-white transition-colors duration-200">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
        <path d={s.path}/>
      </svg>
    </a>
  );
}

/* ── Hamburger icon ── */
function HamburgerIcon() {
  return (
    <span className="flex flex-col gap-[5px] w-[18px]">
      <span className="block w-full h-[2px] bg-current"/>
      <span className="block w-full h-[2px] bg-current"/>
      <span className="block w-[70%] h-[2px] bg-current"/>
    </span>
  );
}

/* ── Main Nav items ── */
const MAIN_NAV = [
  { label: "Home",     href: "#", active: true },
  { label: "Features", href: "#" },
  { label: "Lifestyle",href: "#" },
  { label: "Sports",   href: "#" },
  { label: "Travel",   href: "#" },
  { label: "Buy Theme",href: "#" },
];

const TOP_NAV = [
  { label: "Home",    href: "#" },
  { label: "Travel",  href: "#" },
  { label: "About",   href: "#" },
  { label: "Contact", href: "#" },
];

export default function SmartPostHeader() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden, setHidden]         = useState(false);
  const lastScrollY = useRef(0);
  const headerRef   = useRef<HTMLDivElement>(null);

  /* Smart sticky: hide on scroll-down, reveal on scroll-up */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 130) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, searchOpen]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          OFF-CANVAS MOBILE MENU (slide from left)
      ═══════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[300] bg-black/50 transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      {/* Drawer */}
      <div className={`fixed top-0 left-0 z-[310] h-full w-[300px] bg-[#1c1c26] flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Drawer head */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <img
            src="https://smartmag.theme-sphere.com/smart-post/wp-content/uploads/sites/37/2023/03/logo-SmartPost-01-mobile@2x.png"
            width={120} height={24} alt="SmartMag SmartPost"
            className="h-[24px] w-auto brightness-0 invert"
          />
          <button onClick={() => setMenuOpen(false)}
            className="text-white/60 hover:text-white p-1 transition-colors" aria-label="Close Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="overflow-y-auto flex-1 py-2">
          {[...TOP_NAV, ...MAIN_NAV.slice(1)].map((item) => (
            <Link key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 text-[12.5px] font-bold text-white/75 hover:text-white
                         uppercase tracking-[1.5px] border-b border-white/[0.06] hover:bg-white/[0.04] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Newsletter widget in mobile menu */}
        <div className="p-5 border-t border-white/10">
          <h3 className="text-white text-[13px] font-bold mb-1">Subscribe to Updates</h3>
          <p className="text-white/50 text-[11px] mb-3 leading-relaxed">
            Get the latest creative news from FooBar about art, design and business.
          </p>
          <input type="email" placeholder="Your email address.."
            className="w-full bg-white/10 border border-white/20 text-white text-[12px]
                       placeholder-white/40 px-3 py-2 rounded-sm outline-none mb-2
                       focus:border-[var(--sp-accent)] transition-colors"/>
          <button className="w-full bg-[var(--sp-accent)] text-white text-[11px] font-bold
                             uppercase tracking-wider py-2 rounded-sm hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>

        {/* Social in drawer */}
        <div className="flex gap-4 px-5 py-4 border-t border-white/10">
          {SOCIAL.map(s => <SocialIcon key={s.id} s={s}/>)}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SEARCH OVERLAY
      ═══════════════════════════════════════════════════ */}
      <div className={`fixed inset-0 z-[400] bg-black/90 flex items-start justify-center pt-24 px-4
          transition-all duration-200 ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="w-full max-w-2xl">
          <div className="flex items-center border-b-2 border-white/30 pb-3">
            <svg className="w-5 h-5 text-white/50 mr-3 shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <path strokeLinecap="round" d="m21 21-4.35-4.35"/>
            </svg>
            <input autoFocus type="text" placeholder="Type and hit Enter…"
              className="flex-1 bg-transparent text-white text-xl outline-none placeholder-white/30"/>
            <button onClick={() => setSearchOpen(false)}
              className="text-white/50 hover:text-white ml-4 transition-colors" aria-label="Close search">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p className="text-white/30 text-xs mt-3">Hit Enter to search</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          STICKY HEADER WRAPPER
      ═══════════════════════════════════════════════════ */}
      <style>{`
        :root { --sp-accent: #e9622b; --sp-dark: #1c1c26; }
      `}</style>
      <div
        ref={headerRef}
        id="smart-head"
        className={`sticky top-0 z-[200] w-full bg-[var(--sp-dark)] shadow-md
          transition-transform duration-300 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}`}
        style={{ minHeight: 130 }}
      >

        {/* ── ROW 1: Top bar (hamburger + small nav LEFT | social RIGHT) ── */}
        <div className="smart-head-top border-b border-white/[0.08]">
          <div className="max-w-[1200px] mx-auto px-4 h-[42px] flex items-center justify-between gap-4">

            {/* Left: hamburger + small nav */}
            <div className="flex items-center gap-5">
              <button
                id="offcanvas-toggle"
                onClick={() => setMenuOpen(true)}
                aria-label="Menu"
                className="text-white/80 hover:text-white transition-colors"
              >
                <HamburgerIcon/>
              </button>
              <nav className="hidden md:flex items-center gap-5">
                {TOP_NAV.map((item) => (
                  <Link key={item.label} href={item.href}
                    className="text-[11px] font-semibold text-white/65 hover:text-white
                               uppercase tracking-[1.5px] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: social icons */}
            <div className="flex items-center gap-[10px]">
              {SOCIAL.map(s => <SocialIcon key={s.id} s={s}/>)}
            </div>
          </div>
        </div>

        {/* ── ROW 2: Logo + Main nav + Subscribe ── */}
        <div className="smart-head-mid">
          <div className="max-w-[1200px] mx-auto px-4 h-[72px] flex items-center gap-6">

            {/* Logo */}
            <Link href="#" rel="home"
              className="logo-link shrink-0 mr-1"
              title="SmartMag SmartPost">
              <img
                src="https://smartmag.theme-sphere.com/smart-post/wp-content/uploads/sites/37/2023/03/logo-SmartPost-01.png"
                width={224} height={45} alt="SmartMag SmartPost"
                className="h-[38px] w-auto object-contain"
              />
            </Link>

            {/* Main navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              {MAIN_NAV.map((item) => (
                <Link key={item.label} href={item.href}
                  className={`px-3 py-1 text-[13px] font-bold uppercase tracking-[0.5px] transition-colors
                    whitespace-nowrap rounded-sm
                    ${item.active
                      ? "text-[var(--sp-accent)]"
                      : "text-white/80 hover:text-white"
                    }`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: search + subscribe */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Search */}
              <button
                id="search-icon-btn"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor"
                     strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/>
                  <path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>

              {/* Subscribe button */}
              <a href="http://eepurl.com/hq-3Xb" target="_blank" rel="noopener"
                id="subscribe-btn"
                className="hidden sm:inline-flex items-center bg-[var(--sp-accent)] text-white
                           text-[11px] font-bold uppercase tracking-[1.5px] px-4 py-[7px]
                           rounded-sm hover:bg-[#d4511f] transition-colors">
                Subscribe
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
