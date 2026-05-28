"use client";

import FamilyMagHeader from "@/components/FamilyMagHeader";
import FamilyMagFooter from "@/components/FamilyMagFooter";
import Link from "next/link";
import { useState } from "react";
import {
  heroMain, heroGrid, technologySection, tvDramaSection,
  sportsSection, celebritiesSection, lifestyleSection,
  postsJustIn, trendingSidebar, whatsHotSidebar, IMG
} from "@/lib/familyMagData";
import { Flame, Play, Volume2, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const CORAL = "#e26a6a"; // FamilyMag Brand Coral

/* ═══════════════════════════════════════════
   LOCAL HELPER COMPONENTS
   ═══════════════════════════════════════════ */

/** Block Head (Section headings) */
function BlockHead({ title, accentText, dark }: { title: string; accentText?: string; dark?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between border-b-2 mb-6 pb-2 ${dark ? "border-white/10" : "border-gray-900"}`}>
      <h4 className={`text-[14px] font-black uppercase tracking-[1px] flex items-center gap-2 ${dark ? "text-white" : "text-gray-900"}`}>
        <span className="inline-block w-[3px] h-[16px] rounded-[1px] bg-[#e26a6a]"/>
        {accentText ? (
          <>
            {title} <span className="text-[#e26a6a]">{accentText}</span>
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
  height = "h-[300px]", titleClass = "text-[16px] font-bold", isVideo, rating
}: {
  img: string; title: string; category?: string; author?: string; date?: string; views?: string; href?: string;
  height?: string; titleClass?: string; isVideo?: boolean; rating?: string;
}) {
  return (
    <Link href={href} className={`group relative flex flex-col justify-end overflow-hidden rounded-[3px] bg-[#1a1a1a] ${height} transition-shadow hover:shadow-lg`}>
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
      
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <span className="w-12 h-12 rounded-full bg-[#e26a6a] text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            <Play size={20} className="fill-current translate-x-0.5" />
          </span>
        </div>
      )}

      {rating && (
        <span className="absolute top-3 left-3 bg-black/80 text-white text-[11px] font-bold px-2 py-0.5 rounded-[2px]">
          ★ {rating}
        </span>
      )}

      <div className="relative z-10 p-5">
        {category && (
          <span className="inline-block text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[2px] mb-2.5 bg-[#e26a6a]">
            {category}
          </span>
        )}
        <h3 className={`text-white leading-[1.3] group-hover:opacity-90 transition-opacity font-extrabold ${titleClass}`}>
          {title}
        </h3>
        {(author || date || views) && (
          <div className="flex items-center gap-2 mt-2.5 text-white/60 text-[10.5px]">
            {author && <span className="font-semibold text-white/80">By {author}</span>}
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
      <Link href={href} className="relative block overflow-hidden bg-gray-100 aspect-[3/2] rounded-[3px] mb-3">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {category && (
          <span className="absolute bottom-2 left-2 text-[8px] font-black uppercase tracking-wider text-white px-1.5 py-0.5 rounded-[1.5px] bg-[#e26a6a]">
            {category}
          </span>
        )}
      </Link>
      <h3 className={`leading-[1.35] text-gray-900 group-hover:text-[#e26a6a] transition-colors line-clamp-3 font-extrabold ${titleClass}`}>
        <Link href={href}>{title}</Link>
      </h3>
      {(date || views) && (
        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-400">
          <span>By Shane Doe</span>
          <span>·</span>
          {date && <span>{date}</span>}
          {views && <span>· {views} Views</span>}
        </div>
      )}
    </div>
  );
}

/** Small Post (thumbnail left + details right) */
function SmallPost({
  img, title, date, views, rating, isAudio, href = "#", showUnderline = true, dark
}: {
  img: string; title: string; date?: string; views?: string; rating?: string; isAudio?: boolean; href?: string; showUnderline?: boolean; dark?: boolean;
}) {
  return (
    <div className={`flex gap-3.5 group py-3 items-start cursor-pointer ${showUnderline ? (dark ? "border-b border-white/5" : "border-b border-gray-100") : ""} last:border-0 last:pb-0`}>
      <Link href={href} className="shrink-0 w-[72px] h-[72px] overflow-hidden bg-gray-100 rounded-[3px] relative aspect-square">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {rating && (
          <div className="absolute right-0 bottom-0 bg-[#080808] text-white text-[9px] font-bold px-1.5 py-0.5">
            {rating}
          </div>
        )}
        {isAudio && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 text-white">
            <Volume2 size={16} />
          </span>
        )}
      </Link>
      <div className="flex-1 min-w-0">
        <h4 className={`text-[13px] font-bold leading-[1.35] group-hover:text-[#e26a6a] transition-colors line-clamp-2 ${dark ? "text-white/90" : "text-gray-900"}`}>
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

/** Numbered Top Post Row */
function TopPostRow({ idx, title, date, href = "#" }: { idx: number; title: string; date: string; href?: string }) {
  return (
    <div className="flex gap-4 items-start py-3 border-b border-gray-100 last:border-0 last:pb-0 group cursor-pointer">
      <span className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[13px] font-black text-gray-400 group-hover:bg-[#e26a6a] group-hover:text-white group-hover:border-transparent transition-colors">
        {idx}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold leading-[1.35] text-gray-900 group-hover:text-[#e26a6a] transition-colors line-clamp-2">
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
      <Link href={href} className="shrink-0 w-full sm:w-[260px] aspect-[3/2] overflow-hidden bg-gray-100 rounded-[3px]">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex-1 min-w-0 py-1">
        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#e26a6a]">
          {category}
        </span>
        <h3 className="text-[17px] font-extrabold leading-[1.3] text-gray-900 group-hover:text-[#e26a6a] transition-colors mt-1 mb-2">
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

/** Social Counter Follow grid */
function SocialFollowerWidget() {
  const items = [
    { name: "Facebook", count: "1.2M", color: "#1a6dd4", icon: <Facebook size={16} /> },
    { name: "Twitter", count: "54.2K", color: "#55acef", icon: <Twitter size={16} /> },
    { name: "Instagram", count: "120K", color: "#c13584", icon: <Instagram size={16} /> },
    { name: "Pinterest", count: "80.4K", color: "#bd081c", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.98-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.3.12-.34.3-.04.14-.14.2-.28.14-1-.46-1.62-1.92-1.62-3.1 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.46-6.2 7.46-1.21 0-2.35-.63-2.74-1.37 0 0-.6 2.28-.74 2.85-.27 1.04-1 2.35-1.5 3.14 1.13.33 2.3.51 3.53.51 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg> },
  ];

  return (
    <div className="grid grid-cols-2 gap-2.5 text-white">
      {items.map((s, idx) => (
        <a key={idx} href="#" className="flex items-center gap-3 p-3 transition-opacity hover:opacity-90 rounded-[3px]"
          style={{ background: s.color }}>
          <span className="shrink-0 flex items-center">{s.icon}</span>
          <div>
            <div className="text-[9.5px] font-black uppercase leading-none opacity-60">{s.name}</div>
            <div className="text-[12px] font-black leading-none mt-1">{s.count}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN FAMILY MAG HOMEPAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function FamilyMagPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] text-gray-900" style={{ fontFamily: "var(--font-public-sans, sans-serif)" }}>
      <FamilyMagHeader />

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        
        {/* ══════════════════════════════════════════════════════════
            § 1 — TOP HERO FEATURED 3-POST GRID
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-10">
          {/* Left Main Large Post Card */}
          <div className="lg:col-span-8">
            <OverlayCard
              img={heroMain.img}
              title={heroMain.title}
              category={heroMain.cat}
              author={heroMain.author}
              date={heroMain.date}
              height="h-[380px] md:h-[460px]"
              titleClass="text-[20px] md:text-[30px] font-black leading-[1.2]"
            />
          </div>
          
          {/* Right Two Stacked Post Cards */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {heroGrid.map((post, idx) => (
              <OverlayCard
                key={idx}
                img={post.img}
                title={post.title}
                category={post.cat}
                author={post.author}
                date={post.date}
                height="h-[185px] md:h-[224px]"
                titleClass="text-[14px] md:text-[16px] font-extrabold leading-snug"
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            § 2 — TWO-COLUMN MAIN CONTENT (8/12 MAIN + 4/12 SIDEBAR)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 pt-4">
          
          {/* ─── LEFT MAIN SECTION (8/12) ─── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Technology Block */}
            <div>
              <BlockHead title="Technology" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Large Post */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[3px] mb-4">
                    <img src={technologySection[0].img} alt="Tech Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[1.5px] bg-[#e26a6a]">
                      {technologySection[0].cat}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-black leading-[1.3] text-gray-900 group-hover:text-[#e26a6a] transition-colors mb-2.5">
                    <Link href="/family-mag">{technologySection[0].title}</Link>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    {technologySection[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-600">By Shane Doe</span>
                    <span>·</span>
                    <span>{technologySection[0].date}</span>
                  </div>
                </div>

                {/* Right Lists */}
                <div className="space-y-1">
                  {technologySection.slice(1).map((post, idx) => (
                    <SmallPost key={idx} img={post.img} title={post.title} date={post.date} />
                  ))}
                </div>
              </div>
            </div>

            {/* TV & Drama Block */}
            <div className="border-t border-gray-100 pt-8">
              <BlockHead title="TV &" accentText="Drama" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Large Post */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[3px] mb-4">
                    <img src={tvDramaSection[0].img} alt="TV Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[1.5px] bg-[#e26a6a]">
                      {tvDramaSection[0].cat}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-black leading-[1.3] text-gray-900 group-hover:text-[#e26a6a] transition-colors mb-2.5">
                    <Link href="/family-mag">{tvDramaSection[0].title}</Link>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    {tvDramaSection[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-600">By Shane Doe</span>
                    <span>·</span>
                    <span>{tvDramaSection[0].date}</span>
                  </div>
                </div>

                {/* Right Lists */}
                <div className="space-y-1">
                  {tvDramaSection.slice(1).map((post, idx) => (
                    <SmallPost key={idx} img={post.img} title={post.title} date={post.date} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sports Roundup Block */}
            <div className="border-t border-gray-100 pt-8">
              <BlockHead title="Sports Roundup" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Large Post */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[3px] mb-4">
                    <img src={sportsSection[0].img} alt="Sports Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[1.5px] bg-[#e26a6a]">
                      {sportsSection[0].cat}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-black leading-[1.3] text-gray-900 group-hover:text-[#e26a6a] transition-colors mb-2.5">
                    <Link href="/family-mag">{sportsSection[0].title}</Link>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    {sportsSection[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-600">By Shane Doe</span>
                    <span>·</span>
                    <span>{sportsSection[0].date}</span>
                  </div>
                </div>

                {/* Right Lists */}
                <div className="space-y-1">
                  {sportsSection.slice(1).map((post, idx) => (
                    <SmallPost key={idx} img={post.img} title={post.title} date={post.date} />
                  ))}
                </div>
              </div>
            </div>

            {/* Celebrities Block */}
            <div className="border-t border-gray-100 pt-8">
              <BlockHead title="Celebrities" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Large Post */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[3px] mb-4">
                    <img src={celebritiesSection[0].img} alt="Celebrities Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-2.5 left-2.5 text-[8.5px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-[1.5px] bg-[#e26a6a]">
                      {celebritiesSection[0].cat}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-black leading-[1.3] text-gray-900 group-hover:text-[#e26a6a] transition-colors mb-2.5">
                    <Link href="/family-mag">{celebritiesSection[0].title}</Link>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    {celebritiesSection[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-600">By Shane Doe</span>
                    <span>·</span>
                    <span>{celebritiesSection[0].date}</span>
                  </div>
                </div>

                {/* Right Lists */}
                <div className="space-y-1">
                  {celebritiesSection.slice(1).map((post, idx) => (
                    <SmallPost key={idx} img={post.img} title={post.title} date={post.date} />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ─── RIGHT SIDEBAR SECTION (4/12) ─── */}
          <div className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-[80px] lg:self-start">
            
            {/* What's Hot Widget */}
            <div className="bg-white p-5 rounded-[4px] border border-gray-100 shadow-sm">
              <BlockHead title="What's Hot" />
              <div className="space-y-1">
                {whatsHotSidebar.map((post, idx) => (
                  <TopPostRow key={idx} idx={idx + 1} title={post.title} date={post.date} />
                ))}
              </div>
            </div>

            {/* Subscribe Widget */}
            <div className="bg-white p-6 rounded-[4px] border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-[#e26a6a]">
                <Flame size={32} className="animate-pulse" />
              </div>
              <h4 className="text-[15px] font-black uppercase tracking-wider text-gray-900">Subscribe to Updates</h4>
              <p className="text-[12px] text-gray-500 mt-2 mb-5 leading-relaxed">
                Join our family newsletter to receive tips, design trends, and latest reviews.
              </p>
              <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2.5">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  className="bg-gray-50 border border-gray-200 text-[13px] px-4 py-2 rounded-[3px] text-gray-800 outline-none focus:border-[#e26a6a]"
                  required
                />
                <button type="submit" className="bg-[#e26a6a] text-white text-[11px] font-black uppercase tracking-widest py-2 rounded-[3px] hover:bg-[#d65f5f] transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Trending Now Widget */}
            <div className="bg-white p-5 rounded-[4px] border border-gray-100 shadow-sm">
              <BlockHead title="Trending Now" />
              <div className="space-y-1">
                {trendingSidebar.map((post, idx) => (
                  <SmallPost key={idx} img={post.img} title={post.title} date={post.date} />
                ))}
              </div>
            </div>

            {/* Social Channels Widget */}
            <div className="bg-white p-5 rounded-[4px] border border-gray-100 shadow-sm">
              <BlockHead title="We Are Social" />
              <SocialFollowerWidget />
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            § 3 — FULL-WIDTH LIFESTYLE BAR (DARK BACKGROUND)
            ══════════════════════════════════════════════════════════ */}
      </div>

      <div className="bg-[#0e0e0e] text-white py-12 my-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <BlockHead title="Lifestyle" dark />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleSection.map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/2] overflow-hidden bg-white/5 rounded-[3px] mb-3">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-[14px] font-extrabold leading-[1.35] text-white/90 group-hover:text-[#e26a6a] transition-colors line-clamp-2">
                  <Link href="/family-mag">{post.title}</Link>
                </h3>
                <div className="text-[10px] text-white/40 mt-2">{post.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-4">

        {/* ══════════════════════════════════════════════════════════
            § 4 — BOTTOM LAYOUT (POSTS JUST IN + SIDEBAR BANNER)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column (8/12) — Posts Just In */}
          <div className="lg:col-span-8">
            <BlockHead title="Posts" accentText="Just In" />
            <div className="divide-y divide-gray-100">
              {postsJustIn.map((post, idx) => (
                <HorizontalListPost
                  key={idx}
                  img={post.img}
                  title={post.title}
                  category={post.cat || "Family"}
                  date={post.date}
                  excerpt={post.excerpt || "We look into the latest trends, habits and activities that are shaping modern family lives around the globe."}
                />
              ))}
            </div>
          </div>

          {/* Right Column (4/12) — Sidebar ad & info */}
          <div className="lg:col-span-4 space-y-8 lg:pl-4">
            
            {/* Sidebar ad container */}
            <div className="bg-white p-5 rounded-[4px] border border-gray-100 shadow-sm text-center">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Advertisement</span>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block relative aspect-[300/250] overflow-hidden rounded-[3px] bg-gray-50 border border-gray-100">
                <img src={IMG.generic} alt="Sidebar Ad" className="w-full h-full object-cover transition-opacity hover:opacity-95" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
                  <h4 className="text-[18px] font-black uppercase tracking-wider">SmartMag Theme</h4>
                  <p className="text-[12px] text-white/80 mt-1 mb-4">Ultimate Newspaper & Magazine WordPress theme.</p>
                  <span className="bg-[#e26a6a] hover:bg-[#d65f5f] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-[2px] transition-colors">
                    Buy Theme
                  </span>
                </div>
              </a>
            </div>

            {/* Editor info box */}
            <div className="bg-[#e26a6a] text-white p-6 rounded-[4px] shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full" />
              <h4 className="text-[16px] font-black uppercase tracking-wider mb-2">Editor's Note</h4>
              <p className="text-[13px] text-white/90 leading-relaxed">
                "FamilyMag is designed to bring families closer with curated insights, health guides, and technological trends designed for the home. We appreciate you being part of our reader community."
              </p>
              <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-white/80">— Shane Doe, Editor in Chief</div>
            </div>

          </div>

        </div>

      </div>{/* /container */}

      <FamilyMagFooter />
    </main>
  );
}
