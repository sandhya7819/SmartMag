"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const BRAND_TEAL = "#2ab391";

const TOP_NAV = [
  { label: "Start Here", href: "#" },
  { label: "Demos", href: "/" },
  { label: "Contact", href: "#" },
  { label: "Buy Now", href: "https://theme-sphere.com/buy/go.php?theme=smartmag", target: "_blank" },
];

const MAIN_NAV = [
  { label: "Home", href: "/daily-scoop", active: true },
  { label: "Features", href: "#" },
  { label: "Lifestyle", href: "#" },
  { label: "World", href: "#" },
  { label: "Technology", href: "#" },
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

  return (
    <a href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all bg-white/5">
      {icons[service] || null}
    </a>
  );
}

function MegaMenu({ category, posts }: { category: string; posts: any[] }) {
  return (
    <div className="absolute left-0 top-[46px] w-full bg-[#151516] text-white border-t border-white/10 p-6 hidden group-hover:grid grid-cols-5 gap-5 z-50 shadow-2xl">
      {posts.map((post, idx) => (
        <div key={idx} className="group/post cursor-pointer space-y-2.5">
          <div className="aspect-[16/9] overflow-hidden bg-white/5 rounded-[2px] relative">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-105"
            />
          </div>
          <h5 className="text-[12.5px] font-bold leading-[1.35] text-white/95 group-hover/post:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-2">
            <Link href={post.href}>{post.title}</Link>
          </h5>
          <div className="text-[10px] text-white/40">{post.date}</div>
        </div>
      ))}
    </div>
  );
}

export default function DailyScoopHeader() {
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

  const lifestylePosts = [
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/28cd5ae5b8a25faf56a57c185f16ea02-450x170.jpeg",
      title: "Queen Enjoys Traditional Dance In Kenya With Maasai Women",
      date: "Jan 18, 2024",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/b84a053196ae4d843d13b00fd0d1fd67-450x300.jpeg",
      title: "The 3 Zodiac Signs Most Likely To Initiate A Friendship Breakup",
      date: "Jan 18, 2024",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/8d767af99cafe2513ec57f9923f764c0-450x300.jpeg",
      title: "Why Being Stressed Makes Us Crave Junk Food, Study",
      date: "Jan 18, 2024",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/08ba4a96fde07ecf5b825cfe9227637d-450x300.jpg",
      title: "Caffeine Problem? These are the signs to look out for",
      date: "Jan 18, 2024",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/52e8df359def61be6ace266d15fa1767-1-450x300.jpeg",
      title: "This Is What Your Lifestyle Will Be Like If You Retire at 55 With $5 Million",
      date: "Jan 14, 2021",
      href: "#"
    }
  ];

  const techPosts = [
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/48e1dfe67f2c5c6542b8bce284ee349f-450x300.jpeg",
      title: "3D Printing is the Future of Healthcare in Developing Countries",
      date: "Jan 18, 2024",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/0d2cf585ec33796ac62878520e2a65d7-450x675.jpeg",
      title: "Launch of Smarty, the Ultimate Smartwatch for an Active Lifestyle",
      date: "Jan 22, 2021",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/e7ce131632d204e132a0168b35e017ca-450x316.jpg",
      title: "How T-Mobile is Winning 5G Race Around the World, an Analysis",
      date: "Jan 18, 2024",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/9a03515227057d959ecf30c0e71c2c08-300x200.jpeg",
      title: "Review: Average Mobile Data Usage Now Exceeds 10GB Per Month",
      date: "Jan 15, 2021",
      href: "#"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/ecfb7b3ae5a4607e5a1a22642fa63ebd-300x200.jpeg",
      title: "Review: Latest Windows 11 Preview Build Lets You Search Copied Text",
      date: "Jan 14, 2021",
      href: "#"
    }
  ];

  return (
    <>
      <style>{`
        :root { --ds-accent: ${BRAND_TEAL}; }
      `}</style>

      {/* ── MOBILE MENU SLIDE OUT (OFF CANVAS) ── */}
      <div className={`fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm transition-opacity duration-300
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`fixed top-0 left-0 bottom-0 z-[1001] w-[320px] max-w-[85vw] bg-[#151516] text-white p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out shadow-2xl
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <img src="https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/Logo-DailyScooop-01-white@2x.png"
              alt="Logo" className="h-[28px] w-auto object-contain" />
            <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white text-2xl font-light">&times;</button>
          </div>

          <nav className="flex flex-col space-y-4 text-[15px] font-bold">
            {MAIN_NAV.map(item => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} target={item.target} rel={item.target ? "noopener noreferrer" : undefined}
                className="hover:text-[var(--ds-accent)] transition-colors py-1.5 border-b border-white/5">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          {/* Mobile Newsletter inside menu */}
          <div className="bg-white/5 border border-white/10 rounded-[3px] p-4 text-center mt-6">
            <h5 className="text-[13px] font-black uppercase tracking-wide text-white">Subscribe to Updates</h5>
            <p className="text-[11px] text-white/60 mt-1 mb-3">Get the latest news from DailyScoop directly.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
              <input type="email" placeholder="Your email address.."
                className="bg-white/10 border border-white/15 text-[12px] px-3 py-1.5 rounded-[2px] text-white outline-none focus:border-[var(--ds-accent)]" />
              <button type="submit" className="bg-[var(--ds-accent)] text-white text-[10px] font-black uppercase tracking-wider py-1.5 rounded-[2px] hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {["facebook", "twitter", "instagram"].map(srv => (
              <SocialIcon key={srv} service={srv} />
            ))}
          </div>
        </div>
      </div>

      {/* ── SEARCH MODAL ── */}
      {searchOpen && (
        <div className="fixed inset-0 z-[1002] bg-[#151516]/98 flex items-center justify-center p-6 animate-fade-in">
          <button onClick={() => setSearchOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white text-5xl font-light">&times;</button>
          <div className="w-full max-w-[640px] text-center space-y-6">
            <form onSubmit={e => e.preventDefault()} className="relative">
              <input type="text" placeholder="Search..." autoFocus
                className="w-full bg-transparent border-b-2 border-white/10 focus:border-[var(--ds-accent)] text-white text-[32px] md:text-[44px] font-bold text-center pb-4 outline-none transition-colors placeholder-white/20" />
            </form>
            <p className="text-[14px] text-white/40">Type above and press <em>Enter</em> to search. Press <em>Esc</em> to cancel.</p>
          </div>
        </div>
      )}

      {/* ── HEADER CONTAINER ── */}
      <header className="w-full font-sans bg-white">
        
        {/* ROW 1: Top Bar (Dark - `#1a1a1a`) */}
        <div className="bg-[#1a1a1a] text-white/70 text-[11px] font-semibold border-b border-black/5">
          <div className="max-w-[1200px] mx-auto px-4 h-[40px] flex items-center justify-between">
            {/* Left side: Hamburger (mobile) + Top Nav links (desktop) */}
            <div className="flex items-center gap-4">
              <button onClick={() => setMenuOpen(true)} className="lg:hidden text-white/80 hover:text-white transition-colors flex items-center">
                <Hamburger />
              </button>
              <div className="hidden lg:flex items-center gap-5">
                {TOP_NAV.map((item, idx) => (
                  <a key={idx} href={item.href} target={item.target} rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side: Social links + Search Icon */}
            <div className="flex items-center gap-4.5">
              <div className="hidden sm:flex items-center gap-3">
                {["facebook", "twitter", "instagram", "pinterest", "vimeo"].map(srv => (
                  <a key={srv} href="#" className="hover:text-white transition-colors">
                    <SocialIcon service={srv} />
                  </a>
                ))}
              </div>
              <span className="w-px h-[14px] bg-white/10 hidden sm:inline-block" />
              <button onClick={() => setSearchOpen(true)} className="hover:text-white transition-colors flex items-center p-1">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: Main Branding & Navigation Row (Light/White) */}
        <div className={`w-full bg-white border-b border-gray-100 z-50 transition-all duration-300
          ${sticky ? "fixed top-0 left-0 right-0 shadow-[0_3px_15px_rgba(0,0,0,0.06)] py-2" : "relative py-4 md:py-6"}`}>
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/daily-scoop" className="shrink-0 flex items-center">
              <img
                src="https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/Logo-DailyScooop-01.png"
                alt="SmartMag DailyScoop"
                className="h-[32px] md:h-[38px] w-auto object-contain block"
              />
            </Link>

            {/* Main Navigation links */}
            <nav className="hidden lg:flex items-center h-full relative">
              {MAIN_NAV.map(item => {
                if (item.label === "Features") {
                  return (
                    <div key={item.label} className="group relative h-full flex items-center">
                      <Link href={item.href}
                        className="px-4 py-2 text-[13.5px] font-bold text-gray-900 hover:text-[var(--ds-accent)] transition-colors flex items-center gap-1">
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Link>
                      {/* Dropdown menu */}
                      <div className="absolute left-0 top-[40px] w-[200px] bg-[#151516] text-white border-t-2 border-[var(--ds-accent)] py-2 hidden group-hover:block z-50 shadow-2xl rounded-b-[2px]">
                        {FEATURES_DROPDOWN.map((sub, sIdx) => (
                          <div key={sIdx} className="relative group/sub">
                            <Link href={sub.href} className="px-4 py-2 text-[12px] font-bold text-white/80 hover:bg-white/5 hover:text-[var(--ds-accent)] transition-colors flex items-center justify-between">
                              {sub.label}
                              {sub.children && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              )}
                            </Link>
                            {sub.children && (
                              <div className="absolute left-[200px] top-0 w-[180px] bg-[#151516] border-l border-white/5 py-2 hidden group-hover/sub:block shadow-2xl">
                                {sub.children.map((child, cIdx) => (
                                  <Link key={cIdx} href="#" className="px-4 py-1.5 text-[11.5px] font-semibold text-white/60 hover:text-[var(--ds-accent)] transition-colors block">
                                    {child}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.label === "Lifestyle") {
                  return (
                    <div key={item.label} className="group h-full flex items-center">
                      <Link href={item.href}
                        className="px-4 py-2 text-[13.5px] font-bold text-gray-900 hover:text-[var(--ds-accent)] transition-colors flex items-center gap-1">
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Link>
                      <MegaMenu category="Lifestyle" posts={lifestylePosts} />
                    </div>
                  );
                }

                if (item.label === "Technology") {
                  return (
                    <div key={item.label} className="group h-full flex items-center">
                      <Link href={item.href}
                        className="px-4 py-2 text-[13.5px] font-bold text-gray-900 hover:text-[var(--ds-accent)] transition-colors flex items-center gap-1">
                        {item.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 opacity-60 group-hover:rotate-180 transition-transform duration-250">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Link>
                      <MegaMenu category="Technology" posts={techPosts} />
                    </div>
                  );
                }

                return (
                  <Link key={item.label} href={item.href} target={item.target} rel={item.target ? "noopener noreferrer" : undefined}
                    className={`px-4 py-2 text-[13.5px] font-bold transition-colors
                      ${item.active ? "text-[var(--ds-accent)]" : "text-gray-900 hover:text-[var(--ds-accent)]"}`}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Subscribe Button & Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <a
                  href="#"
                  className="bg-[#009bf6] hover:bg-[#008ae0] text-white text-[11px] font-black uppercase tracking-wider px-5 py-2.5 rounded-[2px] transition-colors"
                >
                  Subscribe
                </a>
              </div>
              <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-800 hover:text-black transition-colors flex items-center">
                <Hamburger />
              </button>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}
