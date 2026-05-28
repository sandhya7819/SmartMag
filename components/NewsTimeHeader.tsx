"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ── CDN base ── */
const CDN28 = "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03";

/* ── Trending headlines ── */
const TRENDING = [
  "7 Benefits of Using an 85mm Lens for Portrait Photography",
  "Keep an Eye on Cell Phone Use by Mobile Cell Phone Monitoring",
  "Buy Now Pay Later in Lifestyle Purchases Showing Non-Payments",
  "The Day – Living a Vacation-Like Lifestyle, Every Day",
  "Nutritionist Recommends Four Simple Ways to Build Health and Boost Immunity",
  "Lifestyle Interventions that Did Not Prevent Glycemic Deterioration",
  "Six Key Lifestyle Changes Can Help Avert the Climate Crisis",
  "One Doc's Personal Journey to Practicing Lifestyle Medicine",
];

/* ── Main nav items ── */
const MAIN_NAV = [
  { label: "Home",      href: "/news-time", active: true },
  { label: "Features",  href: "#", hasDropdown: true },
  { label: "Politics",  href: "#", hasDropdown: true },
  { label: "Sports",    href: "#" },
  { label: "Science",   href: "#", hasDropdown: true },
  { label: "Buy Theme", href: "https://theme-sphere.com/buy/go.php?theme=smartmag" },
];

const FEATURES_DROPDOWN = [
  { label: "Post Styles", href: "#", children: ["Multi-page Slides", "Modern Spacious", "Creative/Cover", "Large Style", "Large Bold Style"] },
  { label: "Category Layouts", href: "#", children: ["Grid Style", "Posts List", "Overlay Grid", "Infinite Load"] },
  { label: "Header Styles", href: "#" },
  { label: "Homepage Blocks", href: "#" },
  { label: "12+ Premium Widgets", href: "#" },
];

const LIFESTYLE_DROPDOWN = [
  { label: "Travel & Leisure", href: "#" },
  { label: "Food & Recipes", href: "#" },
  { label: "Fashion & Beauty", href: "#" },
  { label: "Relationships", href: "#" },
  { label: "Health & Fitness", href: "#" },
];

/* ── Social icons ── */
type SocialService = "facebook" | "twitter" | "instagram";

function SocialBubble({ service, href }: { service: SocialService; href: string }) {
  const colors: Record<SocialService, string> = {
    facebook: "#3b5998",
    twitter:  "#1da1f2",
    instagram:"#e1306c",
  };
  const icons: Record<SocialService, React.ReactNode> = {
    facebook:  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter:   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>,
  };
  return (
    <a href={href} target="_blank" rel="nofollow noopener" aria-label={service}
       className="w-[26px] h-[26px] flex items-center justify-center text-white text-[11px] font-bold
                  rounded-[3px] transition-opacity hover:opacity-85"
       style={{ background: colors[service] }}>
      {icons[service]}
    </a>
  );
}

/* ── Animated trending ticker ── */
function TrendingTicker() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive(i => (i + 1) % TRENDING.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 min-w-0 overflow-hidden flex-1">
      <span className="shrink-0 text-[10px] font-black uppercase tracking-[2px] bg-[#D82A50]
                       text-white px-2.5 py-1 rounded-[2px]">
        Trending
      </span>
      <span className={`text-[12px] text-gray-700 font-semibold truncate transition-opacity duration-300
                        ${fade ? "opacity-100" : "opacity-0"}`}>
        {TRENDING[active]}
      </span>
    </div>
  );
}

/* ── Hamburger ── */
function Hamburger() {
  return (
    <span className="flex flex-col gap-[5px] w-[18px]">
      <span className="block w-full h-[2px] bg-current"/>
      <span className="block w-full h-[2px] bg-current"/>
      <span className="block w-[70%] h-[2px] bg-current"/>
    </span>
  );
}

/* ── Mobile sidebar "What's Hot" posts ── */
const HOT_POSTS = [
  { img: `${CDN28}/jakob-owens-DQPP9rVLYGQ-unsplash-1-300x177.jpg`,   title: "7 Benefits of Using an 85mm Lens for Portrait Photography",   date: "Mar 10, 2022" },
  { img: `${CDN28}/Depositphotos_87199440_XL-1-300x200.jpg`,           title: "Keep an Eye on Cell Phone Use by Mobile Cell Phone Monitoring", date: "Mar 10, 2022" },
  { img: `${CDN28}/black-jazz-performer-plays-the-saxophone-on-stage-2022-02-08-22-39-25-utc-1-300x200.jpg`, title: "Buy Now Pay Later in Lifestyle Purchases Showing Non-Payments", date: "Mar 10, 2022" },
];

const ACCENT = "#D82A50";

function PoliticsMegaMenu() {
  return (
    <div className="absolute left-0 top-[46px] w-full bg-[#1c1c28] text-white border-t border-white/10 p-6 hidden group-hover:grid grid-cols-12 gap-6 z-50 shadow-2xl">
      {/* Left 3 cols: Subcategories */}
      <div className="col-span-3 border-r border-white/10 pr-6">
        <ul className="space-y-3">
          <li>
            <Link href="#" className="text-[13px] font-extrabold uppercase tracking-wider text-[#D82A50] block mb-2">
              Politics
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[12px] font-bold text-white/70 hover:text-[#D82A50] transition-colors block py-1 pl-3 border-l-2 border-transparent hover:border-[#D82A50]">
              US & Canada
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[12px] font-bold text-white/70 hover:text-[#D82A50] transition-colors block py-1 pl-3 border-l-2 border-transparent hover:border-[#D82A50]">
              Europe
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[12px] font-bold text-white/40 hover:text-white transition-colors block py-1 pl-3">
              View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Right 9 cols: 4 Recent Posts Grid */}
      <div className="col-span-9">
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/Depositphotos_6376035_XL-1-450x264.jpg",
              title: "White House Announces New Sanctions on Russian Oligarchs & Putin's 'Cronies'",
              date: "Jan 22, 2021",
              href: "#"
            },
            {
              img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/fezbot2000-_5V_ML38aFc-unsplash-450x300.jpg",
              title: "Police Department Saved Newest K-9 from Euthanization",
              date: "Jan 16, 2021",
              href: "#"
            },
            {
              img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2021/01/clinton-speaks-at-a-recent-campaign-rally_t20_kn7GBp-1-450x450.jpg",
              title: "Why Redistricting May Lead to a More Balanced U.S. Congress",
              date: "Jan 14, 2021",
              href: "#"
            },
            {
              img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2021/01/donald-trump-speaks-in-des-moines-iowa-december-11-2015_t20_x6knNm-2-450x309.jpg",
              title: "Full Transcript of Trump's State of the Union Address",
              date: "Jan 13, 2021",
              href: "#"
            }
          ].map((post, idx) => (
            <div key={idx} className="group/post cursor-pointer space-y-2">
              <div className="aspect-[3/2] overflow-hidden bg-white/5 rounded-[1px] relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-105"
                />
              </div>
              <h5 className="text-[12px] font-bold leading-[1.3] text-white/90 group-hover/post:text-[#D82A50] transition-colors line-clamp-2">
                <Link href={post.href}>{post.title}</Link>
              </h5>
              <div className="text-[9.5px] text-white/40">{post.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScienceMegaMenu() {
  return (
    <div className="absolute left-0 top-[46px] w-full bg-[#1c1c28] text-white border-t border-white/10 p-6 hidden group-hover:grid grid-cols-5 gap-5 z-50 shadow-2xl">
      {[
        {
          img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/paolo-resteghini-si_GoKVfKIY-unsplash-450x300.jpg",
          title: "2023 iX5 Hydrogen First Drive: More Than Just a Science Project",
          date: "Jan 19, 2021",
          href: "#"
        },
        {
          img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/vandan-patel-K36G2owpGmw-unsplash-450x338.jpg",
          title: "It’s Hard Buying a Car During the Chip Shortage. Here’s Our Best Advice",
          date: "Jan 15, 2021",
          href: "#"
        },
        {
          img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/jonathan-gallegos-5FGqfV6UjzI-unsplash-450x300.jpg",
          title: "A Superior Car Battery, Potential Breakthrough in US Research",
          date: "Jan 15, 2021",
          href: "#"
        },
        {
          img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/salman-sidheek-etioN-4WxZo-unsplash-450x600.jpg",
          title: "Review: Kia EV6 2022 The Best Electric Vehicle Ever?",
          date: "Jan 14, 2021",
          href: "#",
          rating: "8.5"
        },
        {
          img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/young-man-physical-fitness-workout-gym-champion-olympics-flag-olympics-games-young-athlete_t20_BaVyNr-450x300.jpg",
          title: "Olympic Athletes Face Mental Health Challenges After the Games",
          date: "Mar 16, 2020",
          href: "#"
        }
      ].map((post, idx) => (
        <div key={idx} className="group/post cursor-pointer space-y-2">
          <div className="aspect-[3/2] overflow-hidden bg-white/5 rounded-[1px] relative">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-105"
            />
            {post.rating && (
              <span className="absolute top-2 left-2 bg-[#D82A50] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-[2px] shadow-sm">
                ★ {post.rating}
              </span>
            )}
          </div>
          <h5 className="text-[12px] font-bold leading-[1.3] text-white/90 group-hover/post:text-[#D82A50] transition-colors line-clamp-2">
            <Link href={post.href}>{post.title}</Link>
          </h5>
          <div className="text-[9.5px] text-white/40">{post.date}</div>
        </div>
      ))}
    </div>
  );
}

export default function NewsTimeHeader() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden,     setHidden]     = useState(false);
  const lastY = useRef(0);

  /* Smart sticky */
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 180);
      lastY.current = y;
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* Body lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, searchOpen]);

  return (
    <>
      {/* ═══════ SEARCH OVERLAY ═══════ */}
      <div className={`fixed inset-0 z-[400] bg-black/90 flex items-start justify-center pt-24 px-4
          transition-all duration-200 ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="w-full max-w-2xl">
          <div className="flex items-center border-b-2 border-white/30 pb-3">
            <svg className="w-5 h-5 text-white/50 mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
            </svg>
            <input autoFocus type="text" placeholder="Search..."
              className="flex-1 bg-transparent text-white text-xl outline-none placeholder-white/30"/>
            <button onClick={() => setSearchOpen(false)} className="text-white/50 hover:text-white ml-4 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p className="text-white/30 text-xs mt-3">Hit Enter to search</p>
        </div>
      </div>

      {/* ═══════ OFF-CANVAS MOBILE DRAWER ═══════ */}
      <div onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[300] bg-black/50 transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}/>
      <div className={`fixed top-0 left-0 z-[310] h-full w-[300px] bg-white flex flex-col
          transform transition-transform duration-300 ease-in-out border-r border-gray-200
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Head */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 shrink-0">
          <Link href="#" onClick={() => setMenuOpen(false)} className="block">
            <img src={`${CDN28}/logo-Newstime-01-mobile.png`}
              width={143} height={25} alt="SmartMag NewsTime"
              className="h-[25px] w-auto"/>
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Nav links */}
          <nav className="py-1">
            {MAIN_NAV.map(item => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-3 text-[12px] font-bold text-gray-700
                           uppercase tracking-[1.2px] border-b border-gray-100 hover:bg-gray-50 hover:text-[#D82A50] transition-colors">
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M9 5l7 7-7 7"/>
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Newsletter (spc-newsletter-b styling replicate) */}
          <div className="p-5 border-t border-gray-200 bg-gray-50/50">
            <div className="bg-[#fdf9f9] p-4 border border-[#f5e6e6] rounded-[3px] text-center">
              <h3 className="font-black text-[14px] text-gray-900 mb-1">Subscribe to Updates</h3>
              <p className="text-[11.5px] text-gray-500 mb-3.5 leading-relaxed">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form method="post" action="https://exocrew.us2.list-manage.com/subscribe/post?u=80cb35f637e636563aeaa0499&amp;id=77f92c609a" className="space-y-3.5" target="_blank" rel="noopener">
                <div className="space-y-2">
                  <input type="email" name="EMAIL" placeholder="Your email address.." required
                    className="w-full border border-gray-300 text-[12.5px] px-3 py-2 rounded-[2px] outline-none
                               focus:border-[#D82A50] bg-white transition-colors"/>
                  <button type="submit" className="w-full bg-[#D82A50] text-white text-[11px] font-black uppercase tracking-wider
                                     py-2.5 rounded-[2px] hover:bg-[#b51f3e] transition-colors">
                    Subscribe
                  </button>
                </div>
                <label className="flex items-start gap-2 text-left cursor-pointer text-gray-400 text-[10px] select-none leading-normal mt-2.5">
                  <input type="checkbox" name="privacy" required className="mt-0.5 rounded-[2px] border-gray-300 checked:bg-[#D82A50] checked:border-transparent cursor-pointer"/>
                  <span>By signing up, you agree to our terms and our <a href="#" className="underline text-gray-500 hover:text-[#D82A50]">Privacy Policy</a> agreement.</span>
                </label>
              </form>
            </div>
          </div>

          {/* What's Hot in drawer */}
          <div className="p-5 border-t border-gray-200">
            <div className="flex items-baseline border-b border-gray-200 mb-4 pb-2">
              <h4 className="text-[12px] font-black uppercase tracking-[1px] text-gray-900 flex items-center gap-1.5">
                <span className="inline-block w-[2.5px] h-[12px] rounded-[1px] bg-[#D82A50]"/>
                What's Hot
              </h4>
            </div>
            {HOT_POSTS.map((p, i) => (
              <div key={i} className="flex gap-3 py-2.5 border-b border-gray-150 last:border-0 last:pb-0 items-start group cursor-pointer">
                <div className="shrink-0 w-[70px] h-[52px] overflow-hidden bg-gray-100 rounded-[1px]">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-bold text-gray-800 leading-[1.35] line-clamp-2
                                 group-hover:text-[#D82A50] transition-colors">{p.title}</p>
                  <span className="text-[10px] text-gray-400">{p.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-2 px-5 py-4 border-t border-gray-200 bg-gray-50/50">
            <SocialBubble service="facebook"  href="#"/>
            <SocialBubble service="twitter"   href="#"/>
            <SocialBubble service="instagram" href="#"/>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          STICKY HEADER WRAPPER (smart sticky behavior)
      ═══════════════════════════════════════════════ */}
      <style>{`:root { --nt-accent: #D82A50; }`}</style>
      <div id="smart-head"
        className={`sticky top-0 z-[200] w-full bg-white border-b border-gray-200 shadow-sm
          transition-transform duration-300 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}`}>

        {/* ── ROW 1: Top bar — Trending ticker LEFT | Social colored squares + Search RIGHT ── */}
        <div className="border-b border-gray-150 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 h-[42px] flex items-center gap-4">
            {/* Hamburger (mobile) */}
            <button onClick={() => setMenuOpen(true)} aria-label="Menu"
              className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors mr-1">
              <Hamburger/>
            </button>

            {/* Trending ticker */}
            <TrendingTicker/>

            {/* Right: social + search */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-1.5">
                <SocialBubble service="facebook"  href="#"/>
                <SocialBubble service="twitter"   href="#"/>
                <SocialBubble service="instagram" href="#"/>
              </div>
              {/* Inline search input (visible in top bar) */}
              <div className="hidden md:flex items-center border border-gray-200 rounded-[3px] overflow-hidden ml-2">
                <input type="text" placeholder="Search..."
                  className="text-[12px] text-gray-700 px-3 py-[5px] outline-none w-[140px] placeholder-gray-400"/>
                <button className="px-2.5 py-[5px] bg-gray-100 border-l border-gray-200 text-gray-500 hover:text-gray-800 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              </div>
              {/* Mobile search */}
              <button onClick={() => setSearchOpen(true)} aria-label="Search"
                className="md:hidden text-gray-500 hover:text-gray-900 p-1 transition-colors">
                <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Logo LEFT | 728×90 Ad Banner RIGHT ── */}
        <div className="border-b border-gray-100 bg-white hidden md:block">
          <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="#" rel="home" title="SmartMag NewsTime" className="shrink-0">
              <img
                src={`${CDN28}/../logo-Newstime-01.png`}
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                  const d = document.createElement("div");
                  d.className = "font-black text-[22px] tracking-tight text-gray-900";
                  d.textContent = "NewsTime";
                  t.parentNode?.insertBefore(d, t.nextSibling);
                }}
                width={200} height={36} alt="SmartMag NewsTime"
                className="h-[36px] w-auto object-contain"
              />
            </Link>
            {/* 728×90 banner */}
            <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener"
               className="hidden lg:block shrink-0">
              <img
                src={`${CDN28}/newstime-top.jpg`}
                width={728} height={90} alt="Advertisement"
                className="h-[70px] w-auto object-contain block"
              />
            </a>
          </div>
        </div>

        {/* ── ROW 3: Dark nav bar — main menu (sticky / always shown) ── */}
        <div className="bg-[#1c1c28] text-white">
          <div className="max-w-[1200px] mx-auto px-4 h-[46px] flex items-center justify-between">

            {/* Left: hamburger (desktop) + logo (mobile, shown here) + main nav */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {/* Hamburger desktop */}
              <button onClick={() => setMenuOpen(true)} aria-label="Menu"
                className="hidden lg:flex text-white/70 hover:text-white transition-colors mr-2">
                <Hamburger/>
              </button>

              {/* Mobile logo in dark bar */}
              <Link href="#" className="md:hidden mr-4 shrink-0">
                <span className="font-black text-[16px] tracking-tight text-white">NewsTime</span>
              </Link>

              {/* Nav links */}
              <nav className="hidden lg:flex items-center h-full">
                {MAIN_NAV.map(item => {
                  if (item.label === "Politics") {
                    return (
                      <div key={item.label} className="group h-full flex items-center">
                        <Link href={item.href}
                          className="px-3.5 py-1 text-[12.5px] font-bold uppercase tracking-[0.3px] whitespace-nowrap text-white/80 hover:text-[#D82A50] transition-colors flex items-center gap-1">
                          {item.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Link>
                        <PoliticsMegaMenu />
                      </div>
                    );
                  }

                  if (item.label === "Science") {
                    return (
                      <div key={item.label} className="group h-full flex items-center">
                        <Link href={item.href}
                          className="px-3.5 py-1 text-[12.5px] font-bold uppercase tracking-[0.3px] whitespace-nowrap text-white/80 hover:text-[#D82A50] transition-colors flex items-center gap-1">
                          {item.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Link>
                        <ScienceMegaMenu />
                      </div>
                    );
                  }
                  
                  if (item.label === "Features") {
                    return (
                      <div key={item.label} className="group relative h-full flex items-center">
                        <Link href={item.href}
                          className="px-3.5 py-1 text-[12.5px] font-bold uppercase tracking-[0.3px] whitespace-nowrap text-white/80 hover:text-[#D82A50] transition-colors flex items-center gap-1">
                          {item.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Link>
                        {/* Features Dropdown */}
                        <div className="absolute left-0 top-[46px] w-[220px] bg-[#1c1c28] text-white border-t border-[#D82A50] py-2 hidden group-hover:block z-50 shadow-2xl rounded-b-[3px]">
                          {FEATURES_DROPDOWN.map((sub, sIdx) => (
                            <div key={sIdx} className="relative group/sub">
                              <Link href={sub.href} className="px-4 py-2.5 text-[12px] font-bold hover:bg-white/5 hover:text-[#D82A50] transition-colors flex items-center justify-between">
                                {sub.label}
                                {sub.children && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 opacity-60">
                                    <polyline points="9 18 15 12 9 6" />
                                  </svg>
                                )}
                              </Link>
                              {sub.children && (
                                <div className="absolute left-[220px] top-0 w-[200px] bg-[#1c1c28] border-l border-white/5 py-2 hidden group-hover/sub:block shadow-2xl">
                                  {sub.children.map((child, cIdx) => (
                                    <Link key={cIdx} href="#" className="px-4 py-2 text-[11.5px] font-semibold text-white/70 hover:bg-white/5 hover:text-[#D82A50] transition-colors block">
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

                  return (
                    <Link key={item.label} href={item.href}
                      className={`px-3.5 py-1 text-[12.5px] font-bold uppercase tracking-[0.3px] whitespace-nowrap
                        transition-colors rounded-[2px]
                        ${item.active ? "text-[#D82A50]" : "text-white/80 hover:text-white"}`}>
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: mobile search icon in dark bar */}
            <button onClick={() => setSearchOpen(true)} aria-label="Search"
              className="lg:hidden text-white/70 hover:text-white transition-colors p-1">
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
