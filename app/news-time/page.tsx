"use client";

import NewsTimeHeader from "@/components/NewsTimeHeader";
import NewsTimeFooter from "@/components/NewsTimeFooter";
import Link from "next/link";
import { useState } from "react";

/* ═══════════════════════════════════════════
   CDN & Base Constants
   ═══════════════════════════════════════════ */
const CDN = "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03";
const CDN21 = "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2021/01";

const ACCENT = "#D82A50";

const IMG = {
  /* ─ Featured grid ─ */
  feat_hero: `${CDN}/Depositphotos_286561994_XL-1-1024x476.jpg`,
  feat_sm1:  `${CDN}/Depositphotos_442034052_XL-1-450x302.jpg`,
  feat_sm2:  `${CDN}/julien-tromeur-wZgWgriWCAo-unsplash-450x269.jpg`,
  feat_sm3:  `${CDN}/Depositphotos_49700347_XL-2-450x318.jpg`,
  feat_sm4:  `${CDN}/Depositphotos_373474714_XL-1-450x253.jpg`,
  feat_sm5:  `${CDN}/Depositphotos_285454824_XL-1-450x252.jpg`,

  /* ─ Politics / Geo Politics ─ */
  pol_main: `${CDN}/Depositphotos_6376035_XL-1-450x264.jpg`,
  pol_sm1:  `${CDN}/brooke-cagle-ZdUNNTZdHag-unsplash-450x300.jpg`,
  pol_sm2:  `${CDN}/airport_t20_wKbZ9m-450x300.jpg`,
  pol_sm3:  `${CDN}/fezbot2000-_5V_ML38aFc-unsplash-450x300.jpg`,
  pol_sm4:  `${CDN}/history-in-hd-DhwKbmdlJa0-unsplash-1-450x281.jpg`,

  /* ─ Politics mega grid ─ */
  pol_g1: `${CDN}/Depositphotos_6376035_XL-1-450x264.jpg`,
  pol_g2: `${CDN}/fezbot2000-_5V_ML38aFc-unsplash-450x300.jpg`,
  pol_g3: `${CDN21}/clinton-speaks-at-a-recent-campaign-rally_t20_kn7GBp-1-450x450.jpg`,
  pol_g4: `${CDN21}/donald-trump-speaks-in-des-moines-iowa-december-11-2015_t20_x6knNm-2-450x309.jpg`,

  /* ─ Lifestyle overlay ─ */
  life1: `${CDN}/jakob-owens-DQPP9rVLYGQ-unsplash-1-450x266.jpg`,
  life2: `${CDN}/Depositphotos_87199440_XL-1-450x300.jpg`,

  /* ─ Lifestyle small ─ */
  life_s1: `${CDN}/black-jazz-performer-plays-the-saxophone-on-stage-2022-02-08-22-39-25-utc-1-300x200.jpg`,
  life_s2: `${CDN}/mitchell-luo-L6GAPZIhmA0-unsplash-200x300.jpg`,
  life_s3: `${CDN}/bart-vermeiren-Zp4EsKXArw-unsplash-300x200.jpg`,
  life_s4: `${CDN}/aydin-ghadakchi-lamor-RKtt0TKG8wE-unsplash-300x200.jpg`,
  life_s5: `${CDN}/jorge-zapata-QksrZ5RfE2w-unsplash-300x200.jpg`,
  life_s6: `${CDN}/colin-lloyd-2ULmNrj44QY-unsplash-200x300.jpg`,

  /* ─ Media & Culture ─ */
  media1: `${CDN}/executium-A1y4og_hIgs-unsplash-1-300x200.jpg`,
  media2: `${CDN}/nicola-fioravanti-Z9Lb-GmVdoo-unsplash-300x200.jpg`,
  media3: `${CDN}/stem-t4l-G-vWUkGQeZc-unsplash-300x200.jpg`,
  media4: `${CDN}/flaunter-QcaO9fbH1Cg-unsplash-300x200.jpg`,
  media5: `${CDN}/apple-marina-bay-sands-the-first-apple-store-in-the-world-that-floats-on-the-water-is-opening-soon-in_t20_XvgEV9-300x200.jpg`,
  media6: `${CDN}/jorge-flores-oeghhMy5jz0-unsplash-300x200.jpg`,

  /* ─ Sports Carousel ─ */
  sports_c1: `${CDN}/keith-johnston-v_D1Cz99SR4-unsplash-450x630.jpg`,
  sports_c2: `${CDN21}/Depositphotos_200738926_xl-2015-450x299.jpg`,

  /* ─ Section 2 video overlay ─ */
  bmw_video: `${CDN}/tyler-clemmensen-h5XcT5T0ST8-unsplash-768x1150.jpg`,

  /* ─ Economy (Sidebar dark) ─ */
  eco_s1: `${CDN}/cookie-the-pom-SNf-hZz6zOY-unsplash-300x200.jpg`,
  eco_s2: `${CDN}/ian-dooley-C6BrEIucDDU-unsplash-300x200.jpg`,
  eco_s3: `${CDN}/eduardo-froza-XPaF7xAOEBw-unsplash-300x199.jpg`,
  eco_s4: `${CDN}/asal-mshk-8tWsZHubj2c-unsplash-300x200.jpg`,
  eco_s5: `${CDN}/woman-protester-complete-with-megaphone-and-giant-peace-symbol-purple-earrings-yelling-to-the-crowd_t20_LzNYQ7-300x200.jpg`,

  /* ─ Health Sciences ─ */
  health_main1: `${CDN}/young-man-physical-fitness-workout-gym-champion-olympics-flag-olympics-games-young-athlete_t20_BaVyNr-450x300.jpg`,
  health_main2: `${CDN}/cute-little-girl-4-5-years-with-her-toy-bunny-using-laptop-sitting-on-a-bed-child-watching-videos-or_t20_2KroZE-450x300.jpg`,
  health_sub1: `${CDN}/yoga-girl_t20_d1BnVo-300x228.jpg`,
  health_sub2: `${CDN}/rondon-andrade-mRZgVH0F4ic-unsplash-1-300x146.jpg`,
  health_sub3: `${CDN}/shutterstock_390729346-1-300x200.jpg`,
  health_sub4: `${CDN}/women-play-with-dog-on-bed_t20_pRnVLO-300x200.jpg`,

  /* ─ Luxury ─ */
  lux_main: `${CDN}/happy-dog-happy-guy_t20_Kod199-1-768x540.jpg`,
  lux_sub1: `${CDN}/mark-adriane-Ze2DKiidLQs-unsplash-1-768x915.jpg`,
  lux_sub2: `${CDN}/thats-mine-thank-you_t20_A9KGLW-768x512.jpg`,
  lux_sub3: `${CDN}/person-care-beauty-family-relaxation-spa-wellness-health-skin-female-lifestyle-beautiful-treatment_t20_N03GRr-1-768x558.jpg`,
  lux_sub4: `${CDN}/kam-idris-kyt0PkBSCNQ-unsplash-768x678.jpg`,

  /* ─ Science ─ */
  sci1: `${CDN}/paolo-resteghini-si_GoKVfKIY-unsplash-450x300.jpg`,
  sci2: `${CDN}/vandan-patel-K36G2owpGmw-unsplash-450x338.jpg`,
  sci3: `${CDN}/jonathan-gallegos-5FGqfV6UjzI-unsplash-450x300.jpg`,
  sci4: `${CDN}/salman-sidheek-etioN-4WxZo-unsplash-450x600.jpg`,

  /* ─ Sports sidebar ─ */
  spt_main: `${CDN}/Depositphotos_76019771_XL-1-450x300.jpg`,
  spt_sub1: `${CDN}/pexels-patrick-case-3616888-1-300x200.jpg`,
  spt_sub2: `${CDN}/gene-devine-YwjY-8Ivag4-unsplash-300x232.jpg`,
  spt_sub3: `${CDN}/andre-ouellet-KKMEfxJYGqs-unsplash-300x200.jpg`,
};

/* ═══════════════════════════════════════════
   ATOMS / HELPERS
   ═══════════════════════════════════════════ */

/** Section heading — thick left accent line style (block-head-c is-left) */
function BlockHead({
  title, color = ACCENT, sub, onSubClick, activeSub, viewMore
}: {
  title: string; color?: string; viewMore?: string;
  sub?: string[]; activeSub?: string; onSubClick?: (s: string) => void;
}) {
  return (
    <div className="flex items-baseline justify-between border-b-2 border-gray-900 mb-5 pb-2 flex-wrap gap-2">
      <div className="flex items-baseline gap-5">
        <h4 className="text-[14px] font-black uppercase tracking-[1px] text-gray-900 flex items-center gap-2">
          <span className="inline-block w-[3px] h-[16px] rounded-[1px]" style={{ background: color }}/>
          {title}
        </h4>
        {sub && (
          <div className="hidden md:flex items-center gap-4">
            {["All", ...sub].map(s => (
              <button key={s} onClick={() => onSubClick?.(s)}
                className={`text-[11px] font-bold uppercase tracking-wide transition-colors
                  ${(activeSub ?? "All") === s ? "text-[var(--nt-accent,#D82A50)]" : "text-gray-500 hover:text-gray-900"}`}>
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
      {viewMore && (
        <Link href="#"
          className="text-[11px] font-bold uppercase tracking-wide text-gray-400 hover:text-[var(--nt-accent,#D82A50)]
                     transition-colors flex items-center gap-0.5">
          {viewMore} →
        </Link>
      )}
    </div>
  );
}

/** Overlay card (image with gradient text at bottom) */
function OverlayCard({
  img, title, category, author, date, href = "#",
  height = "h-[220px]", titleClass = "text-[15px] font-bold", isVideo
}: {
  img: string; title: string; category?: string; author?: string; date?: string; href?: string;
  height?: string; titleClass?: string; isVideo?: boolean;
}) {
  return (
    <Link href={href}
      className={`group relative flex flex-col justify-end overflow-hidden bg-gray-800 ${height}`}>
      <img src={img} alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"/>
      
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <span className="w-14 h-14 rounded-full bg-white text-[#D82A50] flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}

      <div className="relative z-10 p-5">
        {category && (
          <span className="inline-block text-[8.5px] font-black uppercase tracking-widest
                           text-white px-2 py-0.5 rounded-[2px] mb-1.5"
                style={{ background: ACCENT }}>
            {category}
          </span>
        )}
        <h2 className={`text-white leading-[1.25] group-hover:opacity-90 transition-opacity ${titleClass}`}>
          {title}
        </h2>
        {(author || date) && (
          <div className="flex items-center gap-2 mt-2">
            {author && <span className="text-white/60 text-[10.5px] font-semibold">By {author}</span>}
            {date   && <span className="text-white/45 text-[10.5px]">{date}</span>}
          </div>
        )}
      </div>
    </Link>
  );
}

/** Small post: thumbnail LEFT + text RIGHT */
function SmallPost({ img, title, date, href = "#", showUnderline = true }: { img: string; title: string; date?: string; href?: string; showUnderline?: boolean }) {
  return (
    <div className={`flex gap-3.5 group py-3 items-start cursor-pointer ${showUnderline ? "border-b border-gray-100 last:border-0 last:pb-0" : ""}`}>
      <Link href={href} className="shrink-0 w-[80px] h-[60px] overflow-hidden bg-gray-100 rounded-[1px]">
        <img src={img} alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
      </Link>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900
                       group-hover:text-[var(--nt-accent,#D82A50)] transition-colors line-clamp-2">
          {title}
        </h4>
        {date && <div className="text-[10px] text-gray-400 mt-0.5">{date}</div>}
      </div>
    </div>
  );
}

/** Grid card: image top + title below */
function GridCard({
  img, title, date, category, author, href = "#",
  titleClass = "text-[14px] font-bold", noDate, rating
}: {
  img: string; title: string; date?: string; category?: string; author?: string; href?: string;
  titleClass?: string; noDate?: boolean; rating?: string;
}) {
  return (
    <div className="group cursor-pointer">
      <Link href={href} className="relative block overflow-hidden bg-gray-100 aspect-[3/2] mb-2.5">
        <img src={img} alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        {category && (
          <span className="absolute bottom-2 left-2 text-[8px] font-black uppercase tracking-widest
                           text-white px-1.5 py-0.5 rounded-[2px]"
                style={{ background: ACCENT }}>
            {category}
          </span>
        )}
        {rating && (
          <span className="absolute top-2 left-2 bg-[#D82A50] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-[2px] shadow-sm">
            ★ {rating}
          </span>
        )}
      </Link>
      <h3 className={`leading-[1.3] text-gray-900 group-hover:text-[var(--nt-accent,#D82A50)]
                      transition-colors line-clamp-3 ${titleClass}`}>
        {title}
      </h3>
      {!noDate && (author || date) && (
        <div className="flex items-center gap-2 mt-1">
          {author && <span className="text-[10px] text-gray-500 font-semibold">By {author}</span>}
          {date   && <span className="text-[10px] text-gray-400">{date}</span>}
        </div>
      )}
    </div>
  );
}

/** Custom Sports Carousel slider */
function SportsCarousel() {
  const [active, setActive] = useState(0);
  const slides = [
    {
      img: IMG.sports_c1,
      title: "Young Teen Sucker-punches Opponent During Basketball Game",
      category: "Sports",
    },
    {
      img: IMG.sports_c2,
      title: "It’s Time for Basketball: Spurs at Timberwolves",
      category: "Sports",
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-800 h-[280px] group rounded-[1px]">
      {slides.map((s, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 z-20">
            <span className="inline-block text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[2px] mb-2 bg-[#D82A50]">
              {s.category}
            </span>
            <h3 className="text-white text-[15.5px] font-bold leading-snug line-clamp-3">
              {s.title}
            </h3>
          </div>
        </div>
      ))}
      {/* Slider controls */}
      <div className="absolute top-3 right-3 z-30 flex gap-1">
        <button onClick={() => setActive(a => (a - 1 + slides.length) % slides.length)}
          className="w-6 h-6 rounded-full bg-black/45 hover:bg-[#D82A50] text-white flex items-center justify-center transition-colors text-[9px]">
          ◀
        </button>
        <button onClick={() => setActive(a => (a + 1) % slides.length)}
          className="w-6 h-6 rounded-full bg-black/45 hover:bg-[#D82A50] text-white flex items-center justify-center transition-colors text-[9px]">
          ▶
        </button>
      </div>
    </div>
  );
}

/** Numbered list post */
function NumberedListPost({ num, title, author, date, views, href = "#" }: { num: number; title: string; author: string; date: string; views?: string; href?: string }) {
  return (
    <div className="flex gap-4 items-start py-3 border-b border-gray-100 last:border-0 last:pb-0 group cursor-pointer">
      <span className="shrink-0 w-8 h-8 rounded-full border border-gray-250 flex items-center justify-center text-[13px] font-black text-gray-400 group-hover:bg-[#D82A50] group-hover:text-white group-hover:border-transparent transition-colors">
        {num}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900 group-hover:text-[#D82A50] transition-colors line-clamp-2">
          <Link href={href}>{title}</Link>
        </h4>
        <div className="flex items-center gap-1.5 text-[9.5px] text-gray-400 mt-1">
          <span className="font-semibold text-gray-500">By {author}</span>
          <span>·</span>
          <span>{date}</span>
          {views && (
            <>
              <span>·</span>
              <span>{views} views</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/** Social blocks grid with counts */
function WeAreSocial() {
  const socialItems = [
    { name: "Facebook", count: "1.1K", color: "#3b5998", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, href: "https://facebook.com/themesphere" },
    { name: "Twitter", count: "68.9K", color: "#1c1c28", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: "https://twitter.com/envato" },
    { name: "YouTube", count: "105K", color: "#ff0000", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>, href: "https://youtube.com" },
    { name: "TikTok", count: "Follow", color: "#010101", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12.97 2.62 1.49 4.12 1.58v3.86c-1.87-.02-3.7-.74-5.11-1.97-.05 1.51-.02 3.01-.03 4.5-.1 2.32-.89 4.67-2.52 6.36-1.97 2.07-5.02 2.94-7.81 2.27-2.61-.59-4.88-2.57-5.74-5.1-1.08-3.08-.2-6.73 2.19-8.91 1.77-1.66 4.29-2.31 6.64-1.76.08-.55.06-1.12.06-1.68 0-1.82.01-3.64.01-5.46.03.02.02 0 .04.02z"/></svg>, href: "https://tiktok.com" },
    { name: "Telegram", count: "Join", color: "#0088cc", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.86-1.68 6.43-2.78 7.72-3.3 3.67-1.49 4.43-1.75 4.93-1.76.11 0 .36.03.52.16.13.1.17.24.19.34.02.07.02.21 0 .28z"/></svg>, href: "https://telegram.org" },
    { name: "WhatsApp", count: "Share", color: "#25d366", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.092-2.868-6.944-1.851-1.852-4.312-2.871-6.942-2.872-5.441 0-9.866 4.413-9.869 9.831-.001 1.737.453 3.433 1.314 4.931l-.973 3.556 3.65-.957zM17.48 15.02c-.3-.15-1.782-.88-2.062-.98-.28-.1-.486-.15-.69.15-.204.3-.79.99-.968 1.2-.178.204-.356.23-.656.08-1.123-.563-1.884-.962-2.637-2.25-.195-.333.195-.31.559-1.03.06-.12.03-.225-.015-.325-.045-.1-.486-1.17-.666-1.6-.176-.425-.356-.367-.486-.373-.125-.006-.27-.007-.413-.007-.143 0-.377.054-.574.27-.197.215-.752.736-.752 1.795s.77 2.085.877 2.23c.107.145 1.516 2.314 3.67 3.242 1.797.776 2.164.622 2.54.587.378-.035 1.782-.73 2.03-1.433.25-.703.25-1.305.175-1.43-.075-.127-.28-.203-.58-.353z"/></svg>, href: "https://whatsapp.com" }
  ];

  return (
    <div className="grid grid-cols-2 gap-2 text-white">
      {socialItems.map((s, idx) => (
        <a key={idx} href={s.href} target="_blank" rel="nofollow noopener"
          className="flex items-center gap-3 p-3 transition-opacity hover:opacity-90 rounded-[2px]"
          style={{ background: s.color }}>
          <span className="shrink-0">{s.icon}</span>
          <div className="min-w-0">
            <div className="text-[10px] font-black uppercase leading-none opacity-60">{s.name}</div>
            <div className="text-[12px] font-black leading-none mt-1">{s.count}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

/** Homepage newsletter widget wrapper */
function HomepageNewsletter() {
  return (
    <div className="bg-[#fdf9f9] border border-[#f5e6e6] rounded-[4px] p-8 md:p-12 text-center relative overflow-hidden my-12 max-w-[800px] mx-auto">
      {/* Background envelope overlay */}
      <div className="absolute -right-8 -bottom-8 text-black/[0.02] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-[500px] mx-auto space-y-4">
        <div className="flex justify-center text-[#D82A50]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h3 className="text-[20px] font-black text-gray-900 tracking-wide">
          Subscribe to Updates
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">
          Get the latest creative news from FooBar about art, design and business.
        </p>
        <form
          method="post"
          action="https://exocrew.us2.list-manage.com/subscribe/post?u=80cb35f637e636563aeaa0499&amp;id=77f92c609a"
          className="space-y-4 pt-2"
          target="_blank"
          rel="noopener"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="EMAIL"
              placeholder="Your email address.."
              required
              className="flex-1 bg-white border border-gray-250 text-gray-800 text-[13px] px-4 py-2.5 rounded-[3px] outline-none focus:border-[#D82A50] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#D82A50] text-white text-[12px] font-black uppercase tracking-wider px-6 py-2.5 rounded-[3px] hover:bg-[#b51f3e] transition-colors"
            >
              Subscribe
            </button>
          </div>
          <label className="flex items-start gap-2 text-left cursor-pointer text-gray-400 text-[11px] select-none leading-normal">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-0.5 rounded-[2px] border-gray-300 checked:bg-[#D82A50] checked:border-transparent cursor-pointer"
            />
            <span>
              By signing up, you agree to our terms and our{" "}
              <a href="#" className="underline text-gray-500 hover:text-[#D82A50] transition-colors">
                Privacy Policy
              </a>{" "}
              agreement.
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}

/** Sidebar mini newsletter */
function SidebarNewsletter() {
  return (
    <div className="bg-[#fdf9f9] border border-[#f5e6e6] rounded-[3px] p-6 text-center relative overflow-hidden">
      <div className="absolute -right-6 -bottom-6 text-black/[0.015] pointer-events-none select-none">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </div>
      <div className="relative z-10 space-y-3">
        <div className="flex justify-center text-[#D82A50]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h4 className="text-[15px] font-black text-gray-900 tracking-wide">
          Subscribe to Updates
        </h4>
        <p className="text-[11.5px] text-gray-500 leading-normal">
          Get the latest creative news from FooBar about art, design and business.
        </p>
        <form
          method="post"
          action="https://exocrew.us2.list-manage.com/subscribe/post?u=80cb35f637e636563aeaa0499&amp;id=77f92c609a"
          className="space-y-3 pt-1"
          target="_blank"
          rel="noopener"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address.."
            required
            className="w-full bg-white border border-gray-250 text-gray-800 text-[12.5px] px-3.5 py-2 rounded-[2px] outline-none focus:border-[#D82A50] transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-[#D82A50] text-white text-[11px] font-black uppercase tracking-wider py-2 rounded-[2px] hover:bg-[#b51f3e] transition-colors"
          >
            Subscribe
          </button>
          <label className="flex items-start gap-2 text-left cursor-pointer text-gray-400 text-[10px] select-none leading-normal">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-0.5 rounded-[1px] border-gray-300 checked:bg-[#D82A50] checked:border-transparent cursor-pointer"
            />
            <span>By signing up, you agree to our terms and our privacy policy.</span>
          </label>
        </form>
      </div>
    </div>
  );
}

function EntertainmentCard({
  img, title, date, category, href = "#", format
}: {
  img: string; title: string; date: string; category: string; href?: string; format?: "video" | "audio";
}) {
  return (
    <div className="group cursor-pointer">
      <Link href={href} className="relative block overflow-hidden bg-gray-100 aspect-[3/2] mb-3">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <span className="absolute bottom-2 left-2 text-[8.5px] font-black uppercase tracking-wider text-white px-2 py-0.5 rounded-[2px]" style={{ background: ACCENT }}>
          {category}
        </span>

        {format === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <span className="w-10 h-10 rounded-full bg-white text-[#D82A50] flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}

        {format === "audio" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <span className="w-10 h-10 rounded-full bg-white text-[#D82A50] flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </span>
          </div>
        )}
      </Link>
      
      <h3 className="text-[13.5px] font-bold leading-[1.3] text-gray-900 group-hover:text-[var(--nt-accent)] transition-colors line-clamp-2">
        <Link href={href}>{title}</Link>
      </h3>
      <div className="text-[10px] text-gray-400 mt-1">{date}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function NewsTimePage() {
  const [geoTab, setGeoTab] = useState("All");

  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "var(--font-geist-sans, sans-serif)" }}>
      <style>{`
        :root { --nt-accent: #D82A50; }
      `}</style>
      <NewsTimeHeader/>

      <div className="max-w-[1200px] mx-auto px-4">

        {/* ══════════════════════════════════════════════════════════
            § 1 — TWO-COLUMN MAIN WRAPPER (COL-8 + COL-4)
            - Main Area (8/12): Featured Grid, Geo Politics, Lifestyle, Ad Banner, Media & Culture, Sports Carousel & Top Posts.
            - Sidebar Area (4/12): Economy sidebar, Politics 4-col mini grid.
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-9">
          
          {/* ─── LEFT COLUMN (8/12) ─── */}
          <div className="lg:col-span-8">
            
            {/* Main Featured Grid */}
            <div className="mb-10">
              <OverlayCard
                img={IMG.feat_hero}
                title="EU Looking to Relax Rules to Allow Funding of Cutting Edge Chip"
                category="Politics"
                author="Shane Doe"
                date="Jan 9, 2020"
                height="h-[380px]"
                titleClass="text-[26px] md:text-[30px] font-extrabold leading-[1.35]"
              />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4.5 mt-4.5">
                {[
                  { img: IMG.feat_sm1, title: "Oil Rises as Investors Look Past Possible Reserve Releases" },
                  { img: IMG.feat_sm2, title: "France's Largest Business Summit to Conclude" },
                  { img: IMG.feat_sm3, title: "U.S. Senate Passes $1.5 Trillion Gov't Funding Bill with Ukraine" },
                  { img: IMG.feat_sm4, title: "Covid Vaccines Not Linked to Deaths, Major US Study Finds" },
                  { img: IMG.feat_sm5, title: "Chinese Business Leaders Call for International Cooperation" },
                ].map((p, i) => (
                  <GridCard key={i} img={p.img} title={p.title} titleClass="text-[12.5px] font-bold" noDate/>
                ))}
              </div>
            </div>

            {/* Geo Politics Layout */}
            <div className="mb-10 border-t border-gray-150 pt-7">
              <BlockHead
                title="Geo Politics"
                sub={["World", "US & Canada", "Europe", "Asia"]}
                activeSub={geoTab}
                onSubClick={setGeoTab}
                viewMore="More from Politics"
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Large main post */}
                <div className="md:col-span-7">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-3 rounded-[1px]">
                      <img src={IMG.pol_main} alt="Geo Politics Main"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                      <span className="absolute top-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest
                                       text-white px-2 py-0.5 rounded-[2px]"
                            style={{ background: ACCENT }}>US & Canada</span>
                    </div>
                    <h2 className="text-[19px] font-bold leading-[1.3] text-gray-900 mb-2
                                   group-hover:text-[var(--nt-accent)] transition-colors">
                      White House Announces New Sanctions on Russian Oligarchs & Putin&apos;s &apos;Cronies&apos;
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed mb-3.5">
                      To understand the new politics stance and other pro nationals of recent times, we should look at the broader picture…
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <span className="font-semibold text-gray-600">By Shane Doe</span>
                      <span>·</span>
                      <span>Jan 22, 2021</span>
                      <span>·</span>
                      <span>386 views</span>
                    </div>
                  </div>
                </div>

                {/* Small list posts right */}
                <div className="md:col-span-5 space-y-0.5">
                  <SmallPost img={IMG.pol_sm1} title="Europe Must Slash Gas Dependence to Help Stop Russia's War" date="Jan 22, 2021"/>
                  <SmallPost img={IMG.pol_sm2} title="At White House, Frustration Over Who Gets to Ask Questions" date="Jan 22, 2021"/>
                  <SmallPost img={IMG.pol_sm3} title="Police Department Saved Newest K-9 from Euthanization" date="Jan 16, 2021"/>
                  <SmallPost img={IMG.pol_sm4} title="Statement by President George W. Bush on Ukraine | Bush Center" date="Jan 14, 2021"/>
                </div>
              </div>
            </div>

            {/* Lifestyle Section */}
            <div className="mb-10 border-t border-gray-150 pt-7">
              <BlockHead title="Lifestyle" viewMore="More from Lifestyle"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <OverlayCard
                  img={IMG.life1}
                  title="7 Benefits of Using an 85mm Lens for Portrait Photography"
                  category="Lifestyle"
                  author="Shane Doe"
                  date="Mar 10, 2022"
                  height="h-[210px]"
                  titleClass="text-[15.5px] font-bold"
                />
                <OverlayCard
                  img={IMG.life2}
                  title="Keep an Eye on Cell Phone Use by Mobile Cell Phone Monitoring"
                  category="Lifestyle"
                  author="Shane Doe"
                  date="Mar 10, 2022"
                  height="h-[210px]"
                  titleClass="text-[15.5px] font-bold"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 mt-5">
                <SmallPost img={IMG.life_s1} title="Buy Now Pay Later in Lifestyle Purchases Showing Non-Payments" date="Mar 10, 2022"/>
                <SmallPost img={IMG.life_s2} title="The Day – Living a Vacation-Like Lifestyle, Every Day" date="Mar 10, 2022"/>
                <SmallPost img={IMG.life_s3} title="Nutritionist Recommends Four Simple Ways to Build Health and Boost Immunity" date="Mar 10, 2022"/>
                <SmallPost img={IMG.life_s4} title="Lifestyle Interventions that Did Not Prevent Glycemic Deterioration" date="Mar 10, 2022"/>
                <SmallPost img={IMG.life_s5} title="Six Key Lifestyle Changes Can Help Avert the Climate Crisis" date="Mar 10, 2022"/>
                <SmallPost img={IMG.life_s6} title="One Doc's Personal Journey to Practicing Lifestyle Medicine" date="Mar 10, 2022"/>
              </div>
            </div>

            {/* Ad Banner (Middle) */}
            <div className="my-8">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/yellow-sofa-and-text.jpg"
                  alt="Advertisement Banner"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </a>
            </div>

            {/* Media & Culture */}
            <div className="mb-10 border-t border-gray-150 pt-7">
              <BlockHead title="Media & Culture" viewMore="View More"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
                <SmallPost img={IMG.media1} title="Is it the Internet or Society? How Social Media has Changed" date="Mar 10, 2022"/>
                <SmallPost img={IMG.media2} title="Media Advisory: Premier Furey to Make Arts and Cultural" date="Mar 10, 2022"/>
                <SmallPost img={IMG.media3} title="Consumer Interest in South Korean Culture on Social Media" date="Mar 10, 2022"/>
                <SmallPost img={IMG.media4} title="A New Index Measures Representation in Media & Entertainment" date="Mar 10, 2022"/>
                <SmallPost img={IMG.media5} title="Cell Culture Media Market is Expected to Reach US$ 25.09b" date="Mar 10, 2022"/>
                <SmallPost img={IMG.media6} title="Entertainment Industry Choreographers Are Starting to Unionize" date="Mar 10, 2022"/>
              </div>
            </div>

            {/* Sports Carousel & Top Posts */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 border-t border-gray-150 pt-7">
              <div className="md:col-span-7">
                <BlockHead title="Sports"/>
                <SportsCarousel />
              </div>
              <div className="md:col-span-5">
                <BlockHead title="Top Posts"/>
                <div className="space-y-0.5">
                  <NumberedListPost num={1} title="Review: Can Wisconsin Clinch the Big Ten West this Weekend" author="Shane Doe" date="Jan 15, 2021" views="173" />
                  <NumberedListPost num={2} title="Women's Tennis Association Could Pull Out of China" author="Shane Doe" date="Jan 14, 2021" views="44" />
                  <NumberedListPost num={3} title="Marquez Explains Lack of Confidence During Qatar GP Race" author="Shane Doe" date="Jan 14, 2021" views="38" />
                </div>
              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN (4/12) ─── */}
          <div className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-[110px] lg:self-start">
            
            {/* Economy dark block */}
            <div className="bg-black text-white p-7 rounded-[2px]">
              <div className="border-b border-white/15 pb-3.5 mb-5">
                <h4 className="text-[12px] font-black uppercase tracking-[2px] text-white flex items-center gap-2">
                  <span className="inline-block w-[3px] h-[14px] rounded-[1px] bg-[#D82A50]"/>
                  Economy
                </h4>
              </div>
              <div className="space-y-1">
                {[
                  { img: IMG.feat_sm1, title: "Oil Rises as Investors Look Past Possible Reserve Releases", date: "Mar 10, 2022" },
                  { img: IMG.feat_sm2, title: "France's Largest Business Summit to Conclude", date: "Mar 10, 2022" },
                  { img: IMG.feat_sm3, title: "U.S. Senate Passes $1.5 Trillion Gov't Funding Bill with Ukraine", date: "Mar 10, 2022" },
                ].map((p, i) => (
                  <div key={i} className="flex gap-3.5 py-3 border-b border-white/10 last:border-0 last:pb-0 items-start group cursor-pointer">
                    <div className="shrink-0 w-[72px] h-[54px] overflow-hidden bg-gray-900 rounded-[1px]">
                      <img src={p.img} alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[12.5px] font-bold leading-[1.35] text-white/90 group-hover:text-[#D82A50] transition-colors line-clamp-3">
                        {p.title}
                      </h4>
                      <div className="text-[10px] text-white/40 mt-0.5">{p.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Politics Mini Grid */}
            <div>
              <BlockHead title="Politics"/>
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  { img: IMG.pol_g1, title: "White House Announces New Sanctions on Russian Oligarchs" },
                  { img: IMG.pol_g2, title: "Police Department Saved Newest K-9 from Euthanization" },
                  { img: IMG.pol_g3, title: "Why Redistricting May Lead to a More Balanced U.S. Congress" },
                  { img: IMG.pol_g4, title: "Full Transcript of Trump's State of the Union Address" },
                ].map((p, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-2 rounded-[1px]">
                      <img src={p.img} alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    </div>
                    <p className="text-[11.5px] font-bold leading-[1.3] text-gray-900 group-hover:text-[#D82A50] transition-colors line-clamp-2">
                      {p.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            § 2 — SECOND ROW WRAPPER (COL-8 + COL-4)
            - Main Area (8/12): BMW Recalls video overlay.
            - Sidebar Area (4/12): Economy block continued.
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 border-t border-gray-150 pt-8">
          
          {/* Main Area */}
          <div className="lg:col-span-8">
            <OverlayCard
              img={IMG.bmw_video}
              title="BMW Recalls Over One Million Cars over Engine Fire Risk in US"
              category="Lifestyle"
              date="Jan 13, 2021"
              height="h-[350px]"
              titleClass="text-[22px] md:text-[26px] font-extrabold leading-[1.35]"
              isVideo={true}
            />
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 lg:pl-4 lg:sticky lg:top-[110px] lg:self-start">
            <div className="bg-black text-white p-7 rounded-[2px] h-full flex flex-col justify-between">
              <div className="space-y-1">
                {[
                  { img: IMG.eco_s1, title: "How Much More Tech is On Tap for Tomorrow's Mobiles?", date: "Jan 13, 2021" },
                  { img: IMG.eco_s2, title: "Pandemic Changed Tech, So Galaxy is Changing", date: "Mar 16, 2020" },
                  { img: IMG.eco_s3, title: "New Alt-Protein as Central to Chinese Food Security", date: "Mar 15, 2020" },
                  { img: IMG.eco_s4, title: "How P-22, L.A.'s Famous Cat, Survived Freeways and Urban Ills", date: "Jan 14, 2020" },
                  { img: IMG.eco_s5, title: "Overall Heart-Healthy Lifestyle Needed to Ward Off Heart Failure", date: "Jan 14, 2020" },
                ].map((p, i) => (
                  <div key={i} className="flex gap-3.5 py-2.5 border-b border-white/10 last:border-0 last:pb-0 items-start group cursor-pointer">
                    <div className="shrink-0 w-[64px] h-[48px] overflow-hidden bg-gray-900 rounded-[1px]">
                      <img src={p.img} alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[12.5px] font-bold leading-[1.35] text-white/90 group-hover:text-[#D82A50] transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                      <div className="text-[9.5px] text-white/40 mt-0.5">{p.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            § 3 — THIRD ROW WRAPPER (COL-8 + COL-4)
            - Main Area (8/12): Health Sciences, Luxury.
            - Sidebar Area (4/12): Science, We Are Social, Sports, Sidebar Newsletter.
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 border-t border-gray-150 pt-8">
          
          {/* Main Area (LEFT) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Health Sciences Section */}
            <div>
              <BlockHead title="Health Sciences" viewMore="View More"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GridCard img={IMG.health_main1} title="Olympic Athletes Face Mental Health Challenges After the Games" category="Health Science" author="Shane Doe" date="Mar 16, 2020" titleClass="text-[16px] font-bold" />
                <GridCard img={IMG.health_main2} title="Most Kids Under 5 Getting Too Much Screen Time, Study Finds" category="Health Science" author="Shane Doe" date="Mar 15, 2020" titleClass="text-[16px] font-bold" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 mt-5">
                <SmallPost img={IMG.health_sub1} title="This Workout Is Even Better For Sleep Than Cardio, Research Finds" date="Mar 15, 2020"/>
                <SmallPost img={IMG.health_sub2} title="NT Recommends: Can Mushroom Coffee Replace Your Morning Joe?" date="Mar 15, 2020"/>
                <SmallPost img={IMG.health_sub3} title="Making Coffee, Tea and Other Hot Drinks Healthy as Well as Tasty" date="Mar 15, 2020"/>
                <SmallPost img={IMG.health_sub4} title="Too Tired to Hit the Gym? 6 exercises You can Do From Your Bed" date="Mar 15, 2020"/>
              </div>
            </div>

            {/* Luxury Focus Grid Section */}
            <div className="border-t border-gray-150 pt-7">
              <BlockHead title="Luxury" viewMore="View More"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="md:col-span-1">
                  <GridCard img={IMG.lux_main} title="Give Your Furry Friend a Pawsome Experience at These 8 Luxury Pet Hotels" category="Luxury" author="Shane Doe" date="Mar 15, 2020" titleClass="text-[16.5px] font-bold" />
                </div>
                <div className="grid grid-cols-2 gap-4 md:col-span-1">
                  <GridCard img={IMG.lux_sub1} title="How Lifestyle Changes Affect Luxury Brands" date="Mar 15, 2020" titleClass="text-[11.5px] font-bold" />
                  <GridCard img={IMG.lux_sub2} title="A Dream Luxury Living In The Heart Of Southlake" date="Mar 15, 2020" titleClass="text-[11.5px] font-bold" />
                  <GridCard img={IMG.lux_sub3} title="Big Life: A Small Oasis of Luxury Living" date="Mar 15, 2020" titleClass="text-[11.5px] font-bold" />
                  <GridCard img={IMG.lux_sub4} title="Changing Demands and Demographics" date="Mar 15, 2020" titleClass="text-[11.5px] font-bold" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Area (RIGHT) */}
          <div className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-[110px] lg:self-start">
            
            {/* Science block */}
            <div>
              <BlockHead title="Science"/>
              <div className="grid grid-cols-2 gap-4">
                <GridCard img={IMG.sci1} title="2023 iX5 Hydrogen First Drive" date="Jan 19, 2021" titleClass="text-[11.5px] font-bold" />
                <GridCard img={IMG.sci2} title="It’s Hard Buying a Car During Shortage" date="Jan 15, 2021" titleClass="text-[11.5px] font-bold" />
                <GridCard img={IMG.sci3} title="A Superior Car Battery Breakthrough" date="Jan 15, 2021" titleClass="text-[11.5px] font-bold" />
                <GridCard img={IMG.sci4} title="Review: Kia EV6 2022 The Best EV?" date="Jan 14, 2021" rating="8.5" titleClass="text-[11.5px] font-bold" />
              </div>
            </div>

            {/* We Are Social */}
            <div>
              <BlockHead title="We Are Social" />
              <WeAreSocial />
            </div>

            {/* Sports Sidebar Block */}
            <div>
              <BlockHead title="Sports"/>
              <div className="space-y-4">
                <GridCard img={IMG.spt_main} title="Pakistan and Australia Set to Swing the Changes for Second Test" category="Sports" author="Shane Doe" date="Jan 14, 2021" titleClass="text-[13.5px] font-bold" />
                <div className="space-y-0.5">
                  <SmallPost img={IMG.spt_sub1} title="2022 NCAA Women's Hockey Tournament: Schedule & Scores" date="Jan 14, 2021" />
                  <SmallPost img={IMG.spt_sub2} title="Olympic Great Todd Loses Training License for Hitting Horse" date="Jan 14, 2021" />
                  <SmallPost img={IMG.spt_sub3} title="China May Start Reopening After Winter Olympics: Top Adviser" date="Jan 14, 2021" />
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <SidebarNewsletter />
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            § 4 — FOURTH ROW WRAPPER (FULL-WIDTH 100%)
            - Entertainment Section.
            ══════════════════════════════════════════════════════════ */}
        <div className="border-t border-gray-150 pt-8 pb-16">
          <div className="flex items-baseline justify-between mb-6 pb-2.5 flex-wrap gap-2">
            <h4 className="text-[14px] font-black uppercase tracking-[1px] text-gray-900 flex items-center gap-2">
              <span className="inline-block w-[3px] h-[16px] rounded-[1px] bg-[#D82A50]"/>
              Entertainment
            </h4>
            <Link href="#" className="text-[11px] font-black uppercase tracking-wider text-gray-400 hover:text-[#D82A50] transition-colors flex items-center gap-1">
              See More Posts
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/brooke-cagle-ZdUNNTZdHag-unsplash-450x300.jpg",
                title: "First Look At Joaquin Phoenix in Ridley Scott Movie",
                date: "Jan 14, 2021",
                category: "Film & Drama"
              },
              {
                img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/christian-lambert-L8tVuGiK6YY-unsplash-2-450x275.jpg",
                title: "The Best Movies and TV Shows Leaving Netflix This Month – March 2022",
                date: "Jan 14, 2021",
                category: "Ent & Arts"
              },
              {
                img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/anthony-peters-LDELJihVlMw-unsplash-1-450x438.jpg",
                title: "Efron Gives a Blistering Performance in This Dry Desert Drama",
                date: "Jan 14, 2021",
                category: "videos",
                format: "video" as const
              },
              {
                img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/slashio-photography-7o7BQQgkFPU-unsplash-1-450x591.jpg",
                title: "How Many Motors Should a Drone Have? Drones Explained",
                date: "Jan 14, 2021",
                category: "Ent & Arts",
                format: "audio" as const
              },
              {
                img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/brooke-cagle-uWVWQ8gF8PE-unsplash-450x300.jpg",
                title: "Real-Life K-Drama Is Streaming on Your Samsung",
                date: "Jan 13, 2021",
                category: "Film & Drama"
              }
            ].map((p, i) => (
              <EntertainmentCard key={i} {...p} />
            ))}
          </div>
        </div>

      </div>{/* /max-w container */}

      <NewsTimeFooter/>
    </main>
  );
}
