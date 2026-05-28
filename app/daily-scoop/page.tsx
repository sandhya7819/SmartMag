"use client";

import DailyScoopHeader from "@/components/DailyScoopHeader";
import DailyScoopFooter from "@/components/DailyScoopFooter";
import Link from "next/link";
import { useState } from "react";

const BRAND_TEAL = "#2ab391";

/* ═══════════════════════════════════════════
   IMAGE ASSET OBJECT
   ═══════════════════════════════════════════ */
const IMG = {
  // Hero & Ads
  hero: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/8351c201fe82664e213a11ce2e6b2dca.jpeg",
  top_ad: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/CityToday-Top.jpg",
  world_music_day: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/71d14d5b32b409b8cd7ff045c3dc2794-768x502.jpeg",
  kitchen_appliances: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/27d44d89782a3f4822333554d35189fb-768x622.jpeg",
  swimming_preview: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/7e44ef929f90b611116e6c62bc5a4c90-1024x683.jpeg",
  
  // Don't Miss
  dm_archaeology: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/1ade2787edc8ef099c43bd9b0231054b-1.jpeg",
  dm_facemasks: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/e349d70df4d6621f01f289a3c22fe9a0.jpeg",
  dm_tmobile: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/e7ce131632d204e132a0168b35e017ca.jpg",
  dm_palmsprings: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/c99f864a8a35ba84c940d0cf68581839.jpeg",

  // The World Section
  world_smarty: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/0d2cf585ec33796ac62878520e2a65d7.jpeg",
  world_sanitizer: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/fd602e240c94a0e689474e2f8ac2ba6c-300x207.jpeg",
  world_hilton: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/cd59a236910b99ea8a453fa9428660c1.jpeg",
  world_protests: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/b4dc89718c7860056b762f02b5e17bd4.jpeg",
  world_tennis: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/fcdb165c1436ad73813305180360e6d7.jpeg",

  // More from World
  more_queen: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/28cd5ae5b8a25faf56a57c185f16ea02.jpeg",
  more_printing: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/48e1dfe67f2c5c6542b8bce284ee349f.jpeg",
  more_immunity: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/1bd51c153e019db22af2001dccd53a2b.jpeg",

  // Featured Carousel
  feat_luxury: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/79d34b0cdcf7be65e623f9061935d5d5-1.jpeg",
  feat_oneplus: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2020/03/569a9b21b79b7a25fa3333af1e144612.jpeg",
  feat_ceo: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2020/03/b0ffe155281728061ccc9254ea933144.jpeg",

  // Videos
  video_gates: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/c6e37f92be00ce5868f86420e2b50732.jpeg",
  video_data: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/9a03515227057d959ecf30c0e71c2c08.jpeg",
  video_windows: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/ecfb7b3ae5a4607e5a1a22642fa63ebd.jpeg",
  video_camera: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/07950dbc2d29b87dc2868ce308ffa00d.jpeg",
  video_ev: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/384770f270b69d29739d1f28ad811eca.jpeg",

  // Sports
  spt_basketball: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/091b1957ab1d15589cbadf0d37001132-1.jpeg",
  spt_ricardo: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/42fc16cc45b125f19621725b837f810f.jpeg",
  spt_extreme: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/07817f5d640d11d2b65faf91788bbb71.jpeg",
  spt_alphatauri: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/9a52f2eaea582157df4318666308ecb1.jpeg",
  spt_kenin: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/211dcf9f33f563538d1ee9137197d4b5.jpeg",

  // Mid Ad Banner
  ad_banner: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2023/11/newstime-mid-blue.jpg",

  // Lifestyle Trends
  life_beach: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/92acc61bc99249203cf09d9a17410b5c.jpeg",
  life_longer: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/94440cf74c41beed1d60d9a4b0fc52c9.jpeg",
  life_kids: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/d3eb428d0ee31975644a39da6c73abe3-300x240.jpg",

  // Editor's Picks
  ed_xiaomi: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/af8488e1bcf32dfcead42abf2afc7d7a.jpeg",
  ed_warzone: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/c925205784e6fb2aed675f1893f989ed.jpeg",
  ed_hologram: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/659c1c12bf2e0edbea1af64fa0a2b56f.jpeg",
  ed_facemasks: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/e349d70df4d6621f01f289a3c22fe9a0-1.jpeg",
  ed_fortnite: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/51fdc9ad7f4a430749f0b278912aa9eb.jpg",

  // Trending Sidebar
  tr_crisis: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/b8f92d6d6007d5e3c3a2b007d89c2f68.jpeg",
  tr_wallstreet: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/635ab1cbafcde3130c8066f1b1967107-300x190.jpeg",
  tr_conference: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/d22a68b11b49f63b2c2dada756a13ffe.jpeg",
  tr_romania: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/3c095f1a34e7e9ebab895e1a777a578c.jpeg",

  // World & Nation Sidebar
  wn_strategic: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/2cff205ceb1f6cf9bd1c1d3d1a285e38.jpeg",
  wn_penguins: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/09550a5c46410e13b3f393fa4eea1910.jpeg",
  wn_planning: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/6ea5a9de5ab6c9837db7e6fa17321885.jpeg",
  wn_rabat: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/bb8c5e29d2d9df91dea8643dfaefd5ba.jpeg",
};

/* ═══════════════════════════════════════════
   LOCAL HELPER COMPONENTS
   ═══════════════════════════════════════════ */

/** Block Head (Section headings) */
function BlockHead({ title, accentText }: { title: string; accentText?: string }) {
  return (
    <div className="flex items-baseline justify-between border-b-2 border-gray-900 mb-6 pb-2">
      <h4 className="text-[14px] font-black uppercase tracking-[1px] text-gray-900 flex items-center gap-2">
        <span className="inline-block w-[3px] h-[16px] rounded-[1px] bg-[var(--ds-accent,#2ab391)]"/>
        {accentText ? (
          <>
            {title} <span className="text-[var(--ds-accent,#2ab391)]">{accentText}</span>
          </>
        ) : (
          title
        )}
      </h4>
    </div>
  );
}

/** Overlay Card (large overlay with gradient bottom) */
function OverlayCard({
  img, title, category, author, date, views, href = "#",
  height = "h-[300px]", titleClass = "text-[16px] font-bold", isVideo, rating, badgeBg
}: {
  img: string; title: string; category?: string; author?: string; date?: string; views?: string; href?: string;
  height?: string; titleClass?: string; isVideo?: boolean; rating?: string; badgeBg?: string;
}) {
  return (
    <Link href={href} className={`group relative flex flex-col justify-end overflow-hidden rounded-[2px] bg-[#1a1a1a] ${height}`}>
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <span className="w-12 h-12 rounded-full bg-white text-[var(--ds-accent,#2ab391)] flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}

      {rating && (
        <span className="absolute top-3 left-3 bg-[#080808]/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-[2px]">
          ★ {rating}
        </span>
      )}

      <div className="relative z-10 p-5">
        {category && (
          <span className="inline-block text-[8.5px] font-black uppercase tracking-widest text-white px-1.5 py-0.5 rounded-[1.5px] mb-2"
                style={{ background: badgeBg || BRAND_TEAL }}>
            {category}
          </span>
        )}
        <h3 className={`text-white leading-[1.3] group-hover:opacity-90 transition-opacity ${titleClass}`}>
          {title}
        </h3>
        {(author || date || views) && (
          <div className="flex items-center gap-2 mt-2.5 text-white/60 text-[10px]">
            {author && <span className="font-semibold text-white/85">By {author}</span>}
            {date   && <span>{date}</span>}
            {views  && <span>· {views} Views</span>}
          </div>
        )}
      </div>
    </Link>
  );
}

/** Grid Card (image top + details below) */
function GridCard({
  img, title, category, date, views, href = "#",
  titleClass = "text-[14px] font-bold"
}: {
  img: string; title: string; category?: string; date?: string; views?: string; href?: string; titleClass?: string;
}) {
  return (
    <div className="group cursor-pointer">
      <Link href={href} className="relative block overflow-hidden bg-gray-100 aspect-[16/10] rounded-[2px] mb-3">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {category && (
          <span className="absolute bottom-2 left-2 text-[8px] font-black uppercase tracking-wider text-white px-1.5 py-0.5 rounded-[1.5px]"
                style={{ background: BRAND_TEAL }}>
            {category}
          </span>
        )}
      </Link>
      <h3 className={`leading-[1.35] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-3 ${titleClass}`}>
        <Link href={href}>{title}</Link>
      </h3>
      {(date || views) && (
        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-400">
          {date && <span>{date}</span>}
          {views && <span>· {views} Views</span>}
        </div>
      )}
    </div>
  );
}

/** Small Post (thumbnail left + details right) */
function SmallPost({
  img, title, date, views, rating, isAudio, href = "#", showUnderline = true
}: {
  img: string; title: string; date?: string; views?: string; rating?: string; isAudio?: boolean; href?: string; showUnderline?: boolean;
}) {
  return (
    <div className={`flex gap-3.5 group py-3 items-start cursor-pointer ${showUnderline ? "border-b border-gray-100 last:border-0 last:pb-0" : ""}`}>
      <Link href={href} className="shrink-0 w-[76px] h-[76px] overflow-hidden bg-gray-100 rounded-[2px] relative">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {rating && (
          <div className="absolute right-0 bottom-0 bg-[#080808] text-white text-[9px] font-bold px-1.5 py-0.5">
            {rating}
          </div>
        )}
        {isAudio && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </span>
        )}
      </Link>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-3">
          <Link href={href}>{title}</Link>
        </h4>
        {(date || views) && (
          <div className="flex items-center gap-1.5 text-[9.5px] text-gray-400 mt-1">
            {date && <span>{date}</span>}
            {views && (
              <>
                <span>·</span>
                <span>{views} Views</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/** Featured Carousel Slider widget */
function FeaturedCarousel() {
  const [active, setActive] = useState(0);
  const slides = [
    {
      img: IMG.feat_luxury,
      title: "Smart Watches: The Fever that’s Changing the Rules of Luxury",
      author: "Shane Doe",
      date: "Mar 15, 2020",
    },
    {
      img: IMG.feat_oneplus,
      title: "OnePlus Will Focus on a Premium Build Over Camera Performance",
      author: "Shane Doe",
      date: "Mar 15, 2020",
    },
    {
      img: IMG.feat_ceo,
      title: "The New CEO Stresses Commitment to Free Speech in First Speech",
      author: "Shane Doe",
      date: "Mar 15, 2020",
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#1a1a1a] h-[260px] group rounded-[2px]">
      {slides.map((s, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 z-20">
            <h3 className="text-white text-[15px] font-bold leading-snug line-clamp-2">
              {s.title}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-[10px] text-white/60">
              <span className="font-semibold text-white/80">By {s.author}</span>
              <span>{s.date}</span>
            </div>
          </div>
        </div>
      ))}
      {/* Slider dots/arrows */}
      <div className="absolute top-3 right-3 z-30 flex gap-1">
        <button onClick={() => setActive(a => (a - 1 + slides.length) % slides.length)}
          className="w-6 h-6 rounded-full bg-black/45 hover:bg-[var(--ds-accent)] text-white flex items-center justify-center transition-colors text-[9px]">
          ◀
        </button>
        <button onClick={() => setActive(a => (a + 1) % slides.length)}
          className="w-6 h-6 rounded-full bg-black/45 hover:bg-[var(--ds-accent)] text-white flex items-center justify-center transition-colors text-[9px]">
          ▶
        </button>
      </div>
    </div>
  );
}

/** Social Counter Follow grid */
function SocialFollowerWidget() {
  const items = [
    { name: "Facebook", count: "1.1K", color: "#1a6dd4", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: "Twitter", count: "68.9K", color: "#55acef", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: "Instagram", count: "46.4K", color: "#c13584", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
    { name: "YouTube", count: "105K", color: "#f00", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg> },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 text-white">
      {items.map((s, idx) => (
        <a key={idx} href="#" className="flex items-center gap-3 p-3 transition-opacity hover:opacity-90 rounded-[2px]"
          style={{ background: s.color }}>
          <span className="shrink-0">{s.icon}</span>
          <div>
            <div className="text-[10px] font-black uppercase leading-none opacity-60">{s.name}</div>
            <div className="text-[12px] font-black leading-none mt-1">{s.count}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

/** Numbered Top Post Row */
function TopPostRow({ idx, title, date, href = "#" }: { idx: number; title: string; date: string; href?: string }) {
  return (
    <div className="flex gap-4 items-start py-3 border-b border-gray-100 last:border-0 last:pb-0 group cursor-pointer">
      <span className="shrink-0 w-8 h-8 rounded-full border border-gray-250 flex items-center justify-center text-[13px] font-black text-gray-400 group-hover:bg-[var(--ds-accent,#2ab391)] group-hover:text-white group-hover:border-transparent transition-colors">
        {idx}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-2">
          <Link href={href}>{title}</Link>
        </h4>
        <div className="flex items-center gap-1.5 text-[9.5px] text-gray-400 mt-1">
          <span>By Shane Doe</span>
          <span>·</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

/** Horizontal List Post (large image left + excerpt right) */
function HorizontalListPost({
  img, title, category, date, excerpt, href = "#"
}: {
  img: string; title: string; category: string; date: string; excerpt: string; href?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 group items-start py-6 border-b border-gray-100 last:border-0 last:pb-0 cursor-pointer">
      <Link href={href} className="shrink-0 w-full sm:w-[270px] aspect-[3/2] overflow-hidden bg-gray-100 rounded-[2px]">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex-1 min-w-0 py-1">
        <span className="text-[9px] font-black uppercase tracking-wider text-[var(--ds-accent,#2ab391)]">
          {category}
        </span>
        <h3 className="text-[17px] font-bold leading-[1.3] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors mt-1 mb-2">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-3">
          {excerpt}
        </p>
        <div className="text-[10px] text-gray-400">{date}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN DAILY SCOOP COMPONENT
   ═══════════════════════════════════════════ */
export default function DailyScoopPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "var(--font-public-sans, sans-serif)" }}>
      <DailyScoopHeader />

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        
        {/* Top Ad Banner */}
        <div className="flex justify-center mb-6 py-2 border-b border-gray-100">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full">
            <img src={IMG.top_ad} alt="Top Banner Ad" className="max-w-full h-auto object-cover rounded-[2px]" width={970} height={125} />
          </a>
        </div>

        {/* ══════════════════════════════════════════════════════════
            § 1 — TOP HERO SECTION & DONT MISS GRID
            ══════════════════════════════════════════════════════════ */}
        <div className="space-y-10 mb-12">
          {/* Featured Grid D Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* Left large column */}
            <div className="lg:col-span-7">
              <OverlayCard
                img={IMG.world_music_day}
                title="World Music Day 2023: What Is It and Why Do We Celebrate It?"
                category="Lifestyle"
                author="Shane Doe"
                date="Jan 7, 2020"
                height="h-[380px] md:h-[500px]"
                titleClass="text-[18px] md:text-[28px] font-extrabold leading-[1.25]"
                badgeBg="#009bf6"
              />
            </div>
            {/* Right smaller column */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <OverlayCard
                img={IMG.kitchen_appliances}
                title="21 Best Smart Kitchen Appliances 2024 – Smart Cooking Devices"
                category="Cooking"
                author="Shane Doe"
                date="Jan 6, 2020"
                height="h-[220px] md:h-[246px]"
                titleClass="text-[15px] md:text-[18px] font-extrabold leading-[1.3]"
                badgeBg="#009bf6"
              />
              <div className="grid grid-cols-2 gap-2">
                <OverlayCard
                  img={IMG.swimming_preview}
                  title="Swimming at the 2023 World Aquatics Championships Preview"
                  category="Sports"
                  author="Shane Doe"
                  date="Jan 5, 2020"
                  height="h-[220px] md:h-[246px]"
                  titleClass="text-[12px] md:text-[14px] font-bold leading-[1.35]"
                  badgeBg="#009bf6"
                />
                <OverlayCard
                  img={IMG.hero}
                  title="7 Best Smart Watches in 2024, According to Experts"
                  category="Gadgets"
                  author="Shane Doe"
                  date="Jan 4, 2020"
                  height="h-[220px] md:h-[246px]"
                  titleClass="text-[12px] md:text-[14px] font-bold leading-[1.35]"
                  badgeBg="#009bf6"
                />
              </div>
            </div>
          </div>

          {/* "Don't Miss" 4-Column Grid */}
          <div>
            <BlockHead title="Don't Miss" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <GridCard img={IMG.dm_archaeology} title="2023 in Review: Most Important Archaeological Discoveries in Japan This Year" category="World" date="Jan 18, 2024" views="59" />
              <GridCard img={IMG.dm_facemasks} title="Fashion Face Masks That Have Matching Shirts, Dresses, and Accessories" category="World" date="Jan 18, 2024" views="102" />
              <GridCard img={IMG.dm_tmobile} title="How T-Mobile is Winning 5G Race Around the World, an Analysis" category="Technology" date="Jan 18, 2024" views="68" />
              <GridCard img={IMG.dm_palmsprings} title="Palm Springs Film Festival Awards 2024 Red Carpet: All New Looks" category="Lifestyle" date="Jan 18, 2024" views="57" />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            § 2 — TWO-COLUMN MAIN WRAPPER (8/12 MAIN + 4/12 SIDEBAR)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 border-t border-gray-100 pt-8">
          
          {/* ─── LEFT COLUMN (8/12) ─── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The World Layout */}
            <div>
              <BlockHead title="The" accentText="World" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Large Main Post Card */}
                <div className="md:col-span-7 group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[2px] mb-4">
                    <img src={IMG.world_smarty} alt="The World Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[1.5px]"
                          style={{ background: BRAND_TEAL }}>Technology</span>
                  </div>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors mb-2.5">
                    <Link href="#">Launch of Smarty, the Ultimate Smartwatch for an Active and Healthy Lifestyle</Link>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    Jungfrau A. Bietschhorn This region is a magnificent area with high mountain ranges, glaciers and is actually the most glaciated part of the European…
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-600">By Shane Doe</span>
                    <span>·</span>
                    <span>Jan 22, 2021</span>
                  </div>
                </div>

                {/* List of 4 Posts Right */}
                <div className="md:col-span-5 space-y-0.5">
                  <SmallPost img={IMG.world_sanitizer} title="Review: 6 Best Alcohol Based Hand Sanitizers Review By Experts" date="Jan 16, 2021" />
                  <SmallPost img={IMG.world_hilton} title="Hilton Taps Luxury Portfolio to Arrive at 1,000 Hotels in Asia-Pacific by 2025" date="Jan 16, 2021" />
                  <SmallPost img={IMG.world_protests} title="Review of UK police New Expanded Powers to Crack Down on Protests" date="Jan 15, 2021" rating="8.9" />
                  <SmallPost img={IMG.world_tennis} title="Sumit Nagal in Australian Open 2nd Round with Historic Win" date="Jan 15, 2021" isAudio />
                </div>
              </div>
            </div>

            {/* More from World */}
            <div className="border-t border-gray-100 pt-8">
              <BlockHead title="More from" accentText="World" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GridCard img={IMG.more_queen} title="Queen Enjoys Traditional Dance In Kenya With Maasai Women" date="Jan 18, 2024" />
                <GridCard img={IMG.more_printing} title="3D Printing is the Future of Healthcare in Developing Countries" date="Jan 18, 2024" />
                <GridCard img={IMG.more_immunity} title="Trump hearing: Judges Sound Skeptical of Trump's Immunity Defense" date="Jan 18, 2024" />
              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN (4/12 SIDEBAR - STICKY) ─── */}
          <div className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-[110px] lg:self-start">
            
            {/* Featured Posts Carousel */}
            <div>
              <BlockHead title="Featured Posts" />
              <FeaturedCarousel />
            </div>

            {/* Social Block Follow */}
            <div>
              <SocialFollowerWidget />
            </div>

            {/* Top Posts list */}
            <div>
              <BlockHead title="Top Posts" />
              <div className="space-y-0.5">
                <TopPostRow idx={1} title="Eating Habits Courteney Swears By to Look Amazing at 59" date="Mar 15, 2020" />
                <TopPostRow idx={2} title="15 Best Exercises to Lose Belly Fat – How to Burn Belly Fat Fast" date="Mar 15, 2020" />
                <TopPostRow idx={3} title="6 Health Benefits of Consuming Ghee Coffee In Winters" date="Mar 15, 2020" />
                <TopPostRow idx={4} title="Jabra’s Elite 4 Earbuds Forgo a Few Niceties for a $20 Price Cut" date="Mar 15, 2020" />
                <TopPostRow idx={5} title="Get this 4K HD Dual-Camera Drone with WiFi for $75" date="Mar 15, 2020" />
              </div>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            § 3 — FULL-WIDTH VIDEOS BAR
            ══════════════════════════════════════════════════════════ */}
        <div className="bg-[#151516] text-white my-12 rounded-[2px] p-6 md:p-8">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Header section */}
            <div className="flex items-baseline justify-between border-b border-white/10 pb-2 mb-6">
              <h4 className="text-[14px] font-black uppercase tracking-[1px] text-white flex items-center gap-2">
                <span className="inline-block w-[3px] h-[16px] rounded-[1px] bg-[var(--ds-accent,#2ab391)]"/>
                Featured Videos
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Main large video overlay card */}
              <div className="lg:col-span-8">
                <OverlayCard
                  img={IMG.video_gates}
                  title="Bill Gates Expects to Have Given Away Most of His Wealth in 20 Years"
                  category="Technology"
                  author="Shane Doe"
                  date="Jan 14, 2021"
                  height="h-[360px] md:h-[400px]"
                  titleClass="text-[20px] md:text-[26px] font-extrabold leading-[1.3]"
                  isVideo
                />
              </div>

              {/* Sidebar list of videos */}
              <div className="lg:col-span-4 space-y-1">
                {[
                  { img: IMG.video_data, title: "Review: Average Mobile Data Usage Now Exceeds 10GB Per Month", date: "Jan 15, 2021", rating: "7.2" },
                  { img: IMG.video_windows, title: "Review: Latest Windows 11 Preview Build Lets You Search for Copied Text", date: "Jan 14, 2021", rating: "8.5" },
                  { img: IMG.video_camera, title: "Best Camera for Photography 2024: Top Picks for Any Budget", date: "Jan 14, 2021" },
                  { img: IMG.video_ev, title: "Perfect Storm To Blame For Cold Weather EV Charging Woes", date: "Jan 14, 2021" }
                ].map((post, idx) => (
                  <div key={idx} className="flex gap-3.5 py-2.5 border-b border-white/10 last:border-0 last:pb-0 items-start group cursor-pointer">
                    <div className="shrink-0 w-[68px] h-[68px] overflow-hidden bg-white/5 rounded-[2px] relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {post.rating && (
                        <div className="absolute right-0 bottom-0 bg-[var(--ds-accent,#2ab391)] text-white text-[8.5px] font-bold px-1 py-0.5 leading-none">
                          {post.rating}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[12.5px] font-bold leading-[1.35] text-white/90 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9.5px] text-white/40 mt-1">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            § 4 — SECOND TWO-COLUMN SECTION (8/12 MAIN + 4/12 SIDEBAR)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* ─── LEFT COLUMN (8/12) ─── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Sports Roundup */}
            <div>
              <BlockHead title="Sports Roundup" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Large Main Post Card */}
                <div className="md:col-span-7 group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[2px] mb-4">
                    <img src={IMG.spt_basketball} alt="Sports Roundup Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[1.5px]"
                          style={{ background: BRAND_TEAL }}>Sports</span>
                  </div>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors mb-2.5">
                    <Link href="#">CL Final 2023: Who Really Owns European Basketball?</Link>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest…
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-600">By Shane Doe</span>
                    <span>·</span>
                    <span>Jan 11, 2020</span>
                  </div>
                </div>

                {/* List of 4 Posts Right */}
                <div className="md:col-span-5 space-y-0.5">
                  <SmallPost img={IMG.spt_ricardo} title="Ricardo Ferreira Switches Soccer Allegiance to Canadian International Team" date="Jan 11, 2020" />
                  <SmallPost img={IMG.spt_extreme} title="Into the Abyss: An Extreme Sports Reading List" date="Jan 11, 2020" />
                  <SmallPost img={IMG.spt_alphatauri} title="F1 News: AlphaTauri Changes Name In Surprise Social Media Move" date="Jan 11, 2020" />
                  <SmallPost img={IMG.spt_kenin} title="Australian Open: Women’s Draw as Sofia Kenin Defends Title" date="Jan 11, 2020" />
                </div>
              </div>
            </div>

            {/* Mid Banner Advertisement */}
            <div className="py-2">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block">
                <img src={IMG.ad_banner} alt="Mid-page Advertisement" className="w-full h-auto object-cover rounded-[2px]" />
              </a>
            </div>

            {/* Lifestyle Trends List Posts */}
            <div className="border-t border-gray-100 pt-8">
              <BlockHead title="Lifestyle Trends" />
              <div className="divide-y divide-gray-100">
                <HorizontalListPost
                  img={IMG.life_beach}
                  title="Fun Games: Kill The Boredom And Enjoy Your Family Time on Beach"
                  category="Lifestyle"
                  date="Jan 10, 2020"
                  excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
                />
                <HorizontalListPost
                  img={IMG.life_longer}
                  title="Lifestyle Tips to Live Longer: Eat Mediterranean Diet, Lift Weight Daily"
                  category="Health"
                  date="Jan 9, 2020"
                  excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
                />
                <HorizontalListPost
                  img={IMG.life_kids}
                  title="Year Ender 2023: Top Healthy Habits in Kids that Left Parents Worried"
                  category="Childhood"
                  date="Jan 8, 2020"
                  excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
                />
              </div>
            </div>

            {/* Editor's Picks Grid */}
            <div className="border-t border-gray-100 pt-8">
              <BlockHead title="Editor's" accentText="Picks" />
              {/* Top 2 large grid posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <GridCard img={IMG.ed_xiaomi} title="Xiaomi Redmi Note 12R Pro Launched with Snapdragon 4 Gen1, OLED 120Hz" category="Redmi Phones" date="Jan 13, 2021" titleClass="text-[16px] font-bold" />
                <GridCard img={IMG.ed_warzone} title="Best Warzone 3 Graphics Settings for Nvidia RTX 2060 and RTX 2060 Super" category="Gaming Tech" date="Jan 13, 2021" titleClass="text-[16px] font-bold" />
              </div>
              {/* Bottom 3 grid posts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GridCard img={IMG.ed_hologram} title="Hologram Breakthrough – New Technology Transforms Ordinary 2D Images" category="Technology" date="Jan 12, 2021" titleClass="text-[13px] font-bold" />
                <GridCard img={IMG.ed_facemasks} title="Healthcare Group Calls for Return of Face Mask Guidance" category="World" date="Jan 12, 2021" titleClass="text-[13px] font-bold" />
                <GridCard img={IMG.ed_fortnite} title="Fortnite Refer a Friend 3.0: Play Together & Earn Rewards, Hurry Up!" category="Gadgets" date="Jan 12, 2021" titleClass="text-[13px] font-bold" />
              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN (4/12 SIDEBAR - STICKY) ─── */}
          <div className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-[110px] lg:self-start">
            
            {/* Trending Posts list */}
            <div>
              <BlockHead title="Trending Posts" />
              <div className="space-y-1">
                {[
                  { img: IMG.tr_crisis, title: "Global Banking Crisis Fears and Slowdown Approaching in 2024", date: "Jan 18, 2024" },
                  { img: IMG.tr_wallstreet, title: "Wall Street Opens 2024 With Mix of Optimism, Pessimism and Mystery", date: "Jan 18, 2024" },
                  { img: IMG.tr_conference, title: "WHO events around the Union World Conference on Lung Health", date: "Jan 18, 2024" },
                  { img: IMG.tr_romania, title: "Romanian Truck Drivers & Small Farmers Protest Near Border with Ukraine", date: "Jan 14, 2021" },
                ].map((post, idx) => (
                  <div key={idx} className="flex gap-3.5 py-3 border-b border-gray-100 last:border-0 last:pb-0 items-start group cursor-pointer">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--ds-accent,#2ab391)] text-white flex items-center justify-center text-[11px] font-black leading-none">
                      {idx + 1}
                    </span>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9.5px] text-gray-400 mt-1">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* World & Nation */}
            <div>
              <BlockHead title="World & Nation" />
              <div className="space-y-4">
                <GridCard img={IMG.wn_strategic} title="Global Visualization and 3D Rendering Software Strategic Business Report 2023" date="Jan 14, 2021" titleClass="text-[13.5px] font-bold" />
                <div className="space-y-0.5">
                  <SmallPost img={IMG.wn_penguins} title="Emperor Penguins Could Go Extinct By 2100 Due To Climate Change, Study Says" date="Jan 14, 2021" />
                  <SmallPost img={IMG.wn_planning} title="Planning Commission Could Lift Height Limit to Allow Little Italy High-Rise" date="Jan 14, 2021" />
                  <SmallPost img={IMG.wn_rabat} title="Rabat Declaration Adopted to Improve Refugee Housing and Migrant Health" date="Jan 14, 2021" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>{/* /max-w container */}

      <DailyScoopFooter />
    </main>
  );
}
