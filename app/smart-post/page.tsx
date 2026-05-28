"use client";

import SmartPostHeader from "@/components/SmartPostHeader";
import SmartPostFooter from "@/components/SmartPostFooter";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   CDN IMAGE CONSTANTS  (all from live SmartPost CDN)
═══════════════════════════════════════════════════════ */
const CDN = "https://smartmag.theme-sphere.com/smart-post/wp-content/uploads/sites/37/2023/03";

const IMG = {
  /* ─ Top 6-grid ─ */
  g1: `${CDN}/edson-diogo-Z9FZQMwCPpk-unsplash-450x300.jpg`,
  g2: `${CDN}/tamara-malaniy-gdiNvl_hvso-unsplash-450x300.jpg`,
  g3: `${CDN}/Depositphotos_536809216_XL-450x300.jpg`,
  g4: `${CDN}/Depositphotos_8866595_XL-1-450x302.jpg`,
  g5: `${CDN}/Depositphotos_336500226_XL-2-450x300.jpg`,
  g6: `${CDN}/stem-t4l-G-vWUkGQeZc-unsplash-1-450x300.jpg`,

  /* ─ Featured grid ─ */
  feat_lg:  `${CDN}/Depositphotos_529513236_XL-2-1024x683.jpg`,
  feat_md1: `${CDN}/t20_1nn29V-450x301.jpg`,
  feat_md2: `${CDN}/young-woman-refreshing-in-shower-near-outdoor-pool_t20_e83jLL-450x331.jpg`,
  feat_sm1: `${CDN}/Depositphotos_529513236_XL-2-300x200.jpg`,
  feat_sm2: `${CDN}/atlas-green-hRRjixxRgfQ-unsplash-450x291.jpg`,
  feat_sm3: `${CDN}/brandon-lee-YSDnqZpknTA-unsplash-1-450x346.jpg`,

  /* ─ Lifestyle section ─ */
  life_hero: `${CDN}/Depositphotos_529513236_XL-2-450x300.jpg`,
  life1: `${CDN}/angela-bailey-tuJtzghMuEw-unsplash-450x300.jpg`,
  life2: `${CDN}/spacejoy-GNs831kqdoM-unsplash-450x330.jpg`,
  life3: `${CDN}/stem-t4l-G-vWUkGQeZc-unsplash-1-450x300.jpg`,
  life4: `${CDN}/kam-idris-kyt0PkBSCNQ-unsplash-450x397.jpg`,
  life5: `${CDN}/pexels-marcus-aurelius-4063532-450x675.jpg`,

  /* ─ Travel section ─ */
  travel_hero: `${CDN}/edson-diogo-Z9FZQMwCPpk-unsplash-450x300.jpg`,
  travel1: `${CDN}/atlas-green-hRRjixxRgfQ-unsplash-450x291.jpg`,
  travel2: `${CDN}/adam-le-sommer-igp4EuThQgw-unsplash-450x300.jpg`,
  travel3: `${CDN}/brandon-lee-YSDnqZpknTA-unsplash-1-450x346.jpg`,
  travel4: `${CDN}/tamara-malaniy-gdiNvl_hvso-unsplash-450x300.jpg`,

  /* ─ Sidebar ─ */
  hot1: `${CDN}/terrance-raper-DmaWGb1w2a8-unsplash-300x166.jpg`,
  hot2: `${CDN}/atlas-green-hRRjixxRgfQ-unsplash-300x194.jpg`,
  hot3: `${CDN}/adam-le-sommer-igp4EuThQgw-unsplash-300x200.jpg`,

  /* ─ Pink sidebar (must read) ─ */
  pink1: `${CDN}/angela-bailey-tuJtzghMuEw-unsplash-450x300.jpg`,
  pink2: `${CDN}/spacejoy-GNs831kqdoM-unsplash-450x330.jpg`,
  pink3: `${CDN}/pexels-marcus-aurelius-4063532-450x675.jpg`,

  /* ─ Health section ─ */
  health_main: `${CDN}/Depositphotos_336500226_XL-2-450x300.jpg`,
  health1: `${CDN}/Depositphotos_336500226_XL-2-300x200.jpg`,
  health2: `${CDN}/Depositphotos_8866595_XL-1-450x302.jpg`,

  /* ─ Sports ─ */
  sports1: `${CDN}/Depositphotos_536809216_XL-450x300.jpg`,
  sports2: `${CDN}/Depositphotos_536809216_XL-2-300x200.jpg`,
  sports3: `${CDN}/terrance-raper-DmaWGb1w2a8-unsplash-300x166.jpg`,
  sports_hero: `${CDN}/edson-diogo-Z9FZQMwCPpk-unsplash-450x300.jpg`,
};

/* ═══════════════════════════════════════════════════════
   SHARED DESIGN TOKENS
═══════════════════════════════════════════════════════ */
const ACCENT = "#e9622b";

/* ═══════════════════════════════════════════════════════
   REUSABLE ATOMS
═══════════════════════════════════════════════════════ */

/** Section heading with left-aligned thick bottom-border underline */
function BlockHead({ title, color = "#000" }: { title: string; color?: string }) {
  return (
    <div className="block-head mb-5 border-b border-gray-200">
      <h5 className="inline-block text-[12px] font-black uppercase tracking-[2px] pb-[10px]
                     border-b-[3px] -mb-[1px] pr-6 whitespace-nowrap"
          style={{ borderColor: color, color }}>
        {title}
      </h5>
    </div>
  );
}

/** Category label badge */
function CatBadge({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link href={href}
      className="inline-block text-[9px] font-black uppercase tracking-widest
                 text-white px-2 py-0.5 rounded-[2px]"
      style={{ background: ACCENT }}>
      {label}
    </Link>
  );
}

/** Full-bleed overlay card with gradient text at bottom */
function OverlayCard({
  img, title, category, date, href = "#",
  titleClass = "text-[16px] font-bold",
  height = "h-[220px]",
}: {
  img: string; title: string; category?: string; date?: string; href?: string;
  titleClass?: string; height?: string;
}) {
  return (
    <Link href={href}
      className={`group relative flex flex-col justify-end overflow-hidden bg-gray-900 ${height}`}
      style={{ display: "flex" }}>
      <img src={img} alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"/>
      <div className="relative z-10 p-4">
        {category && <CatBadge label={category}/>}
        <h2 className={`text-white leading-[1.25] mt-1.5 group-hover:opacity-90 transition-opacity ${titleClass}`}>
          {title}
        </h2>
        {date && <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mt-1">{date}</p>}
      </div>
    </Link>
  );
}

/** Small post: thumbnail LEFT + text RIGHT */
function SmallPost({
  img, title, date, category, href = "#",
}: {
  img: string; title: string; date?: string; category?: string; href?: string;
}) {
  return (
    <div className="flex gap-3 group py-3.5 border-b border-gray-100 last:border-0 last:pb-0 items-start">
      <Link href={href} className="relative shrink-0 w-[85px] h-[63px] overflow-hidden bg-gray-100 rounded-[1px]">
        <img src={img} alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
      </Link>
      <div className="flex-1 min-w-0">
        {category && (
          <span className="block text-[9px] font-black uppercase tracking-widest mb-1"
                style={{ color: ACCENT }}>{category}</span>
        )}
        <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900 group-hover:text-[var(--sp-accent,#e9622b)]
                       transition-colors line-clamp-2 cursor-pointer">
          {title}
        </h4>
        {date && <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mt-0.5">{date}</div>}
      </div>
    </div>
  );
}

/** Grid card: image top + text below */
function GridCard({
  img, title, date, category, excerpt, href = "#",
  titleClass = "text-[15px] font-bold",
}: {
  img: string; title: string; date?: string; category?: string; excerpt?: string; href?: string;
  titleClass?: string;
}) {
  return (
    <div className="group cursor-pointer">
      <Link href={href} className="relative block aspect-[3/2] overflow-hidden bg-gray-100 mb-2.5">
        <img src={img} alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        {category && (
          <span className="absolute top-2 left-2 text-[8.5px] font-black uppercase tracking-widest
                           text-white px-1.5 py-0.5 rounded-[2px]"
                style={{ background: ACCENT }}>
            {category}
          </span>
        )}
      </Link>
      <h3 className={`leading-[1.3] text-gray-900 group-hover:text-[var(--sp-accent,#e9622b)]
                      transition-colors line-clamp-3 ${titleClass}`}>
        {title}
      </h3>
      {excerpt && <p className="text-[12.5px] text-gray-500 leading-relaxed mt-1 line-clamp-2">{excerpt}</p>}
      {date && <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mt-1">{date}</div>}
    </div>
  );
}

/** Text-only list post */
function TextPost({ title, date, href = "#" }: { title: string; date: string; href?: string }) {
  return (
    <div className="group border-b border-gray-100 py-3.5 last:border-0 last:pb-0 cursor-pointer">
      <h4 className="text-[13.5px] font-bold leading-[1.35] text-gray-900
                     group-hover:text-[var(--sp-accent,#e9622b)] transition-colors mb-0.5">
        {title}
      </h4>
      <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{date}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════ */
export default function SmartPostPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "var(--font-geist-sans, sans-serif)" }}>
      <style>{`
        :root { --sp-accent: #e9622b; }
        .has-lb img { transition: transform .5s ease; }
        .has-lb:hover img { transform: scale(1.04); }
      `}</style>

      <SmartPostHeader/>

      {/* ══════════════════════════════════════════════════════════
          § 1 — TOP 6-COLUMN GRID BAR  (desktop only, 25px top margin)
          Matches: elementor-element-33523f4 margin-top:25px margin-bottom:30px
          grid-6, gap=1px, post-title font-size:15px
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block" style={{ marginTop: 25, marginBottom: 30 }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-6" style={{ gap: 1 }}>
            {[
              { img: IMG.g1, title: "How to Watch Euro 2024 Qualifier Soccer From Anywhere FREE" },
              { img: IMG.g2, title: "Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms" },
              { img: IMG.g3, title: "Global Banking Crisis Fears and More news on Economy" },
              { img: IMG.g4, title: "This Banking Crisis Won't Wreck the Economy: Special Report" },
              { img: IMG.g5, title: "7 Popular Supplements With Potential Hidden Risks: Analysis" },
              { img: IMG.g6, title: "Report – Traveling, an Essential Part of Their Lifestyle" },
            ].map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/2] overflow-hidden bg-gray-100">
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                {/* content: padding:0 5px, margin:-7px 0 0 0, title font-size:15px */}
                <div style={{ padding: "0 5px", marginTop: -7 }}>
                  <h2 className="font-bold leading-[1.3] text-gray-900 group-hover:text-[var(--sp-accent)]
                                 transition-colors line-clamp-3"
                      style={{ fontSize: 15 }}>
                    {p.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          § 2 — FEATURED GRID  (feat-grid-b)
          Large left (2/3 w) + 2 medium right stacked (1/3 w)
          Then 3 more small in equal thirds below
          margin:0px -26px 0px -26px  (full-bleed from elementor container)
          item-large title: 35px 700  |  item-medium title: 20px 700
      ══════════════════════════════════════════════════════════ */}
      <div style={{ marginTop: 0, marginBottom: 55 }}>
        <div className="max-w-[1200px] mx-auto px-4">
          {/* We replicate the -26px margin with -mx-6 equivalent */}
          <div className="-mx-[26px]">
            {/* Top row: large + 2 medium */}
            <div className="flex" style={{ gap: 2 }}>
              {/* Large item (54% of width roughly = same as 2/3) */}
              <div style={{ flex: "0 0 calc(60% - 1px)" }}>
                <OverlayCard
                  img={IMG.feat_lg}
                  title="From Private Jets to Ranches: Most Expensive Things Owned by People In Year 2023"
                  category="Travel"
                  date="Jan 9, 2020"
                  height="h-[460px]"
                  titleClass="text-[35px] font-bold leading-[1.2]"
                />
              </div>
              {/* 2 medium items stacked */}
              <div className="flex flex-col flex-1" style={{ gap: 2 }}>
                <OverlayCard
                  img={IMG.feat_md1}
                  title="Want To Charter A Private Jet? Here's What It'll Cost You"
                  category="Luxury"
                  date="Jan 8, 2020"
                  height="h-[229px]"
                  titleClass="text-[20px] font-bold leading-[1.25]"
                />
                <OverlayCard
                  img={IMG.feat_md2}
                  title="5 Things That Surprised Me On a Mediterranean Cruise"
                  category="Travel"
                  date="Jan 7, 2020"
                  height="h-[229px]"
                  titleClass="text-[20px] font-bold leading-[1.25]"
                />
              </div>
            </div>

            {/* Bottom row: 3 small in equal thirds */}
            <div className="grid grid-cols-3" style={{ gap: 2, marginTop: 2 }}>
              <OverlayCard img={IMG.feat_sm1} title="Algeria Takes New Measures to Boost Desert Tourism" category="Travel" date="Mar 10, 2022" height="h-[180px]" titleClass="text-[14px] font-bold"/>
              <OverlayCard img={IMG.feat_sm2} title="Dubai's Tourism Sector Witnesses Unprecedented Growth in 2023" category="Travel" date="Mar 10, 2022" height="h-[180px]" titleClass="text-[14px] font-bold"/>
              <OverlayCard img={IMG.feat_sm3} title="Tourist Quotas Come To French Countryside to Combat Over-tourism" category="Europe" date="Mar 10, 2022" height="h-[180px]" titleClass="text-[14px] font-bold"/>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          § 3 — TWO-COLUMN MAIN LAYOUT  (col-9 + col-3)
          Left: Lifestyle section (loop-grid-sm, 19px post titles, row-gap:35px)
          Right: Newsletter widget + What's Hot sidebar
          margin-bottom: 60px
      ══════════════════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-4" style={{ marginBottom: 60 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">

          {/* LEFT 9/12 */}
          <div className="lg:col-span-9">
            <BlockHead title="Lifestyle"/>

            {/* Lifestyle hero: featured post (large left text, image right) */}
            {/* content padding:0 90px 0 0, post-title font-size:26px */}
            <div className="group cursor-pointer mb-9">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-7" style={{ paddingRight: "0px" }}>
                  <span className="block text-[9px] font-black uppercase tracking-widest mb-2"
                        style={{ color: ACCENT }}>Lifestyle</span>
                  <h2 className="font-bold leading-[1.2] text-gray-900 group-hover:text-[var(--sp-accent)]
                                 transition-colors mb-3"
                      style={{ fontSize: 26 }}>
                    100 Stylish Bedroom Ideas – Modern Bedroom Design Inspiration
                  </h2>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed mb-4">
                    Discover the most captivating bedroom design trends of the year, from minimalist sanctuaries to bold, maximalist retreats that will transform your living space entirely.
                  </p>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-4">Mar 10, 2022</div>
                  <Link href="#"
                    className="inline-block text-[10px] font-black uppercase tracking-[2px]
                               border border-gray-300 px-5 py-2 rounded-[2px]
                               hover:bg-[var(--sp-accent)] hover:text-white hover:border-transparent transition-all">
                    Read More
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-5 overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img src={IMG.life_hero} alt="Lifestyle"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                </div>
              </div>
            </div>

            {/* 5-column smaller lifestyle grid — loop-grid-sm, post-title:19px, grid-row-gap:35px */}
            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 30, rowGap: 35 }}>
              {[
                { img: IMG.life1, title: "100 Stylish Bedroom Ideas – Modern Bedroom Design Inspiration", date: "Mar 10, 2022" },
                { img: IMG.life2, title: "What Color Should I Use for My Living Room Décor?", date: "Mar 10, 2022" },
                { img: IMG.life3, title: "Report – Traveling, an Essential Part of Their Lifestyle", date: "Jan 19, 2021" },
                { img: IMG.life4, title: "Home Décor Tips to Champion Contemporary Interiors", date: "Jan 14, 2021" },
                { img: IMG.life5, title: "Tips to Manage Relationship in the Modern Era of Dating", date: "Jan 14, 2021" },
              ].map((p, i) => (
                <GridCard key={i} img={p.img} title={p.title} date={p.date} titleClass="text-[13.5px] font-bold"/>
              ))}
            </div>
          </div>

          {/* RIGHT 3/12 sidebar */}
          <div className="lg:col-span-3">
            {/* Newsletter widget — bg:#F7E6E7, padding:25px 25px 35px 25px */}
            <div className="mb-6" style={{ background: "#F7E6E7", padding: "25px 25px 35px 25px" }}>
              <BlockHead title="Subscribe" color="#000"/>
              <h3 className="font-black text-[15px] text-gray-900 mb-2">Subscribe to Updates</h3>
              <p className="text-[12px] text-gray-600 mb-4 leading-relaxed">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={e => e.preventDefault()} className="space-y-2">
                <input type="email" placeholder="Your email address.." required
                  className="w-full border border-gray-300 bg-white text-[12.5px] px-3 py-2.5
                             rounded-[2px] outline-none focus:border-[var(--sp-accent)] transition-colors"/>
                <button type="submit"
                  className="w-full bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest
                             py-2.5 rounded-[2px] hover:bg-[var(--sp-accent)] transition-colors">
                  Subscribe
                </button>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  By signing up, you agree to our terms and our{" "}
                  <Link href="#" className="underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>

            {/* What's Hot widget — media width:32%, post-title:16px line-height:1.3 */}
            <div>
              <BlockHead title="What's Hot" color={ACCENT}/>
              <div>
                <SmallPost img={IMG.hot1} title="Confused Between Metro City and Metropolitan City? Here is the Difference" date="Mar 10, 2022"/>
                <SmallPost img={IMG.hot2} title="Algeria Takes New Measures to Boost Desert Tourism" date="Mar 10, 2022"/>
                <SmallPost img={IMG.hot3} title="Dubai's Tourism Sector Witnesses Unprecedented Growth in 2023" date="Mar 10, 2022"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          § 4 — TRAVEL + SIDEBAR  (col-9 + col-3)
          margin-bottom: 60px
          Main: hero article (title 26px) + 4-col grid (17px)
          Sidebar: small posts list
      ══════════════════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-4 border-t-[3px] border-gray-900 pt-7" style={{ marginBottom: 60 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">

          {/* LEFT 9/12 */}
          <div className="lg:col-span-9">
            <BlockHead title="Travel" color={ACCENT}/>

            {/* Travel hero — content:padding 0 90px 0 0, title:26px */}
            <div className="group cursor-pointer mb-9">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-7">
                  <span className="block text-[9px] font-black uppercase tracking-widest mb-2"
                        style={{ color: ACCENT }}>Travel</span>
                  <h2 className="font-bold leading-[1.2] text-gray-900 group-hover:text-[var(--sp-accent)]
                                 transition-colors mb-3"
                      style={{ fontSize: 26 }}>
                    How to Watch Euro 2024 Qualifier Soccer From Anywhere FREE
                  </h2>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed mb-4">
                    Whether you're following your national team or the world's best players, here's your complete guide to streaming every match live online—no cable needed.
                  </p>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-4">Mar 10, 2022</div>
                  <Link href="#"
                    className="inline-block text-[10px] font-black uppercase tracking-[2px]
                               border border-gray-300 px-5 py-2 rounded-[2px]
                               hover:bg-[var(--sp-accent)] hover:text-white hover:border-transparent transition-all">
                    Read More
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-5 overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img src={IMG.travel_hero} alt="Travel"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                </div>
              </div>
            </div>

            {/* 4-col travel grid — gutter:30px, row-gap:36px, post-title:17px */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 30, rowGap: 36 }}>
              {[
                { img: IMG.travel1, title: "Algeria Takes New Measures to Boost Desert Tourism", date: "Mar 10, 2022" },
                { img: IMG.travel2, title: "Dubai's Tourism Sector Witnesses Unprecedented Growth in 2023", date: "Mar 10, 2022" },
                { img: IMG.travel3, title: "Tourist Quotas Come To French Countryside to Combat Over-tourism", date: "Mar 10, 2022" },
                { img: IMG.travel4, title: "Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms", date: "Mar 12, 2021" },
              ].map((p, i) => (
                <GridCard key={i} img={p.img} title={p.title} date={p.date} titleClass="text-[17px] font-bold"/>
              ))}
            </div>
          </div>

          {/* RIGHT 3/12 sidebar */}
          <div className="lg:col-span-3">
            <BlockHead title="Sports" color={ACCENT}/>
            <div>
              <SmallPost img={IMG.sports1} title="Champions League Round of 16 Preview: Who Will Advance?" date="Mar 10, 2022" category="Sports"/>
              <SmallPost img={IMG.sports2} title="Global Banking Crisis Fears and More News on Economy" date="Mar 10, 2022" category="Finance"/>
              <SmallPost img={IMG.sports3} title="Confused Between Metro City and Metropolitan City?" date="Mar 10, 2022" category="City"/>
              <SmallPost img={IMG.life5} title="Tips to Manage Relationship in the Modern Era of Dating" date="Jan 14, 2021" category="Lifestyle"/>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          § 5 — HEALTH + PINK SIDEBAR  (col-9 + col-3)
          Left: main article 26px + 2-col sub-grid (17px) + list
          Right: pink widget (#F7E6E7) with small posts (media 32%, title 16px)
          margin-bottom: 60px
      ══════════════════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-4 border-t-[3px] border-gray-900 pt-7" style={{ marginBottom: 60 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">

          {/* LEFT 9/12 */}
          <div className="lg:col-span-9">
            <BlockHead title="Health & Wellness"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: featured large */}
              <GridCard
                img={IMG.health_main}
                title="7 Popular Supplements With Potential Hidden Risks: Analysis"
                date="Mar 10, 2022"
                category="Health"
                excerpt="Researchers warn that common supplements, including fish oil and vitamin E, may carry unexpected health risks for certain populations."
                titleClass="text-[19px] font-bold"
              />

              {/* Right: 2-col sub-grid + text list */}
              <div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <GridCard img={IMG.health1} title="100 Stylish Bedroom Ideas for Modern Living" date="Mar 10, 2022" titleClass="text-[14px] font-bold"/>
                  <GridCard img={IMG.health2} title="This Banking Crisis Won't Wreck the Economy" date="Mar 10, 2022" titleClass="text-[14px] font-bold"/>
                </div>
                <div className="border-t border-gray-100 pt-1">
                  <TextPost title="Greece's Famous Beach May Close Due to Safety Risk" date="Mar 10, 2022"/>
                  <TextPost title="Tourist Quotas Come To French Countryside to Combat Over-tourism" date="Mar 10, 2022"/>
                  <TextPost title="Confused Between Metro City and Metropolitan City?" date="Mar 10, 2022"/>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 3/12 — Pink sidebar (bg:#F7E6E7, pad:25px 25px 35px 25px) */}
          <div className="lg:col-span-3">
            {/* Must Read pink block */}
            <div style={{ background: "#F7E6E7", padding: "25px 25px 35px 25px", marginBottom: 40 }}>
              {/* block-head: --c-main:#000, --c-block:#000, --line-weight:3px */}
              <div className="border-b border-gray-300 mb-4">
                <h5 className="text-[12px] font-black uppercase tracking-[2px] pb-[10px]
                               border-b-[3px] border-black -mb-[1px] pr-5 inline-block">
                  Must Read
                </h5>
              </div>
              {/* media width:32%, post-title:16px line-height:1.3 */}
              {[
                { img: IMG.pink1, title: "100 Stylish Bedroom Ideas – Modern Bedroom Design Inspiration", date: "Mar 10, 2022" },
                { img: IMG.pink2, title: "What Color Should I Use for My Living Room Décor?", date: "Mar 10, 2022" },
                { img: IMG.pink3, title: "Tips to Manage Relationship in the Modern Era of Dating", date: "Jan 14, 2021" },
              ].map((p, i) => (
                <div key={i} className="flex gap-2 group py-3 border-b border-black/10 last:border-0 last:pb-0 items-start cursor-pointer">
                  {/* media width 32% */}
                  <div className="shrink-0 overflow-hidden bg-gray-200 rounded-[1px]" style={{ width: "32%", aspectRatio: "1/1" }}>
                    <img src={p.img} alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  </div>
                  <div className="flex-1 min-w-0" style={{ marginLeft: -5 }}>
                    <h4 className="text-gray-900 group-hover:text-[var(--sp-accent)] transition-colors line-clamp-3"
                        style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>
                      {p.title}
                    </h4>
                    <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mt-1">{p.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* More stories text list */}
            <BlockHead title="More Stories" color={ACCENT}/>
            <div>
              <TextPost title="Dubai's Tourism Sector Witnesses Unprecedented Growth in 2023" date="Mar 10, 2022"/>
              <TextPost title="Algeria Takes New Measures to Boost Desert Tourism" date="Mar 10, 2022"/>
              <TextPost title="Greece's Famous Beach May Close Due to Safety Risk" date="Mar 10, 2022"/>
              <TextPost title="Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms" date="Mar 12, 2021"/>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          § 6 — 4-COLUMN BOTTOM CATEGORY BLOCKS
          Each col: section-head + main image-card + 3 text posts
      ══════════════════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-4 border-t-[3px] border-gray-900 pt-7 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {[
            {
              cat: "Travel",
              accentColor: ACCENT,
              mainImg: IMG.travel1,
              mainTitle: "Algeria Takes New Measures to Boost Desert Tourism",
              mainDate: "Mar 10, 2022",
              posts: [
                { title: "Booking, Airbnb See Pent-Up Travel Demand Unrestrained", date: "Mar 11, 2022" },
                { title: "As Travel Bookings Rise, Hotel Room Rates Zoom in Leisure Destinations", date: "Mar 11, 2022" },
                { title: "Shipwreck Discoveries and a Crowdfunded Country: Travel This Week", date: "Mar 11, 2022" },
              ],
            },
            {
              cat: "Lifestyle",
              accentColor: "#000",
              mainImg: IMG.life2,
              mainTitle: "What Color Should I Use for My Living Room Décor?",
              mainDate: "Mar 10, 2022",
              posts: [
                { title: "Home Décor Tips to Champion Contemporary Interiors", date: "Jan 14, 2021" },
                { title: "Tips to Manage Relationship in the Modern Era of Dating", date: "Jan 14, 2021" },
                { title: "100 Stylish Bedroom Ideas – Modern Bedroom Design Inspiration", date: "Mar 10, 2022" },
              ],
            },
            {
              cat: "Health",
              accentColor: "#000",
              mainImg: IMG.health_main,
              mainTitle: "7 Popular Supplements With Potential Hidden Risks: Analysis",
              mainDate: "Mar 10, 2022",
              posts: [
                { title: "Top Tips for Staying Healthy During Your Summer Travel", date: "Mar 11, 2022" },
                { title: "Virtual Reality Therapy Gets Bigger with Zero Latency Entry", date: "Mar 11, 2022" },
                { title: "Pfizer Planning to Submit Data on New Treatment Soon", date: "Mar 11, 2022" },
              ],
            },
            {
              cat: "Sports",
              accentColor: "#000",
              mainImg: IMG.sports_hero,
              mainTitle: "How to Watch Euro 2024 Qualifier Soccer From Anywhere FREE",
              mainDate: "Mar 10, 2022",
              posts: [
                { title: "Champions League Round of 16 Preview: Who Will Advance?", date: "Mar 11, 2022" },
                { title: "Global Banking Crisis and Its Impact on Sports Sponsorships", date: "Mar 11, 2022" },
                { title: "Women's Tennis Association Could Pull Out of China Tournaments", date: "Jan 12, 2021" },
              ],
            },
          ].map((col, i) => (
            <div key={i} className={`space-y-4 ${i > 0 ? "md:pl-7 pt-8 md:pt-0" : ""}`}>
              <BlockHead title={col.cat} color={col.accentColor}/>

              {/* Main image card */}
              <div className="group cursor-pointer space-y-3">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={col.mainImg} alt={col.mainTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <h3 className="font-bold leading-[1.3] text-gray-900 group-hover:text-[var(--sp-accent)]
                               transition-colors line-clamp-3"
                    style={{ fontSize: 15 }}>
                  {col.mainTitle}
                </h3>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{col.mainDate}</div>
              </div>

              <div className="border-t border-gray-100"/>

              {/* Text posts */}
              <div>
                {col.posts.map((p, j) => (
                  <TextPost key={j} title={p.title} date={p.date}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SmartPostFooter/>
    </main>
  );
}
