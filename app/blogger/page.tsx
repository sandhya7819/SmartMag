"use client";

import React, { useState } from "react";
import Link from "next/link";
import BloggerHeader from "@/components/BloggerHeader";
import BloggerFooter from "@/components/BloggerFooter";
import {
  horizontalTopBarPosts,
  heroPost,
  heroGridPosts,
  trendingPosts,
  fitnessPosts,
  celebrityPost,
  celebrityGridPosts,
  relationshipsPosts,
  foodPost,
  foodGridPosts,
  financePost,
  financeGridPosts,
  petsPost,
  petsGridPosts,
  culturePost,
  cultureGridPosts,
  decorPost,
  decorGridPosts,
  travelPost,
  travelGridPosts,
  healthOverlayPost,
  healthLeftListPosts,
  healthRightListPosts,
  techLeftGridPost,
  techLeftListPosts,
  techRightGridPost,
  techRightListPosts,
  tvDramaPosts,
} from "@/lib/bloggerData";

// ── HELPER: Radial Score Badge ──────────────────────────────────────────────
function RadialScore({ score }: { score: string }) {
  const numScore = parseFloat(score);
  const r = 18;
  const circ = 2 * Math.PI * r;
  const pct = (100 - numScore) / 100;
  const offset = circ * pct;

  return (
    <div className="absolute bottom-3 right-3 w-10 h-10 bg-black/85 rounded-full flex items-center justify-center border border-white/10 shadow-md z-10 select-none">
      <svg className="absolute -rotate-90" height="40" width="40">
        <circle fill="transparent" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" r={r} cx="20" cy="20" />
        <circle fill="transparent" stroke="#E54E53" strokeDasharray={`${circ} ${circ}`} strokeDashoffset={offset} strokeLinecap="round" strokeWidth="2.5" r={r} cx="20" cy="20" className="transition-all duration-500" />
      </svg>
      <span className="text-[11px] font-black text-white relative z-10 leading-none">{score}</span>
    </div>
  );
}

// ── HELPER: Section Heading ─────────────────────────────────────────────────
function SectionHeading({ title, catColor }: { title: string; catColor?: string }) {
  return (
    <div className={`flex items-center border-b-2 ${catColor || "border-red-500"} pb-0 mb-5`}>
      <h4 className="text-[15px] font-black uppercase tracking-wider text-gray-900 font-title bg-red-500 text-white px-3 py-1.5 -mb-[2px]">
        {title}
      </h4>
    </div>
  );
}

// ── HELPER: Small List Post ──────────────────────────────────────────────────
function SmallListPost({ post, imgLeft = false }: { post: { title: string; url: string; img: string; date?: string; cat?: string }; imgLeft?: boolean }) {
  return (
    <article className={`flex gap-3 group cursor-pointer items-start py-3 border-b border-gray-100 last:border-0`}>
      {imgLeft && (
        <div className="w-[100px] h-[68px] shrink-0 overflow-hidden bg-gray-100 rounded-xs">
          <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="text-[13.5px] font-bold text-gray-900 group-hover:text-red-500 leading-snug line-clamp-3 transition-colors font-title">
          <Link href={post.url}>{post.title}</Link>
        </h4>
        {post.date && <span className="text-[10.5px] text-gray-400 font-medium mt-0.5 block">{post.date}</span>}
      </div>
      {!imgLeft && (
        <div className="w-[90px] h-[60px] shrink-0 overflow-hidden bg-gray-100 rounded-xs ml-2">
          <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
        </div>
      )}
    </article>
  );
}

// ── HELPER: Grid Post Card ──────────────────────────────────────────────────
function GridPostCard({ post, aspectClass = "aspect-[16/10]" }: { post: { title: string; url: string; img: string; date?: string; cat?: string; isVideo?: boolean; isGallery?: boolean; rating?: string }; aspectClass?: string }) {
  return (
    <article className="group cursor-pointer space-y-2.5">
      <div className={`${aspectClass} overflow-hidden bg-gray-100 rounded-xs relative`}>
        <img src={post.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" loading="lazy" />
        {post.isVideo && (
          <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
        )}
        {post.isGallery && (
          <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-1 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>
            </span>
          </span>
        )}
        {post.rating && <RadialScore score={post.rating} />}
        {post.cat && <span className="absolute bottom-2 left-2 bg-red-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5">{post.cat}</span>}
      </div>
      <div>
        <h2 className="text-[14px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-3 font-title">
          <Link href={post.url}>{post.title}</Link>
        </h2>
        {post.date && <span className="text-[10.5px] text-gray-400 font-medium mt-0.5 block">{post.date}</span>}
      </div>
    </article>
  );
}

// ── HELPER: Overlay Post ─────────────────────────────────────────────────────
function OverlayPost({ post }: { post: { title: string; url: string; img: string; date?: string; cat?: string; author?: string } }) {
  return (
    <article className="group cursor-pointer relative rounded-xs overflow-hidden aspect-square">
      <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
        {post.cat && <span className="text-red-400 text-[9px] font-black uppercase tracking-widest mb-2">{post.cat}</span>}
        <h2 className="text-white text-[17px] font-black leading-snug group-hover:text-red-400 transition-colors font-title">
          <Link href={post.url}>{post.title}</Link>
        </h2>
        <div className="flex items-center gap-2 mt-2 text-[10.5px] text-white/60 font-medium">
          {post.author && <span className="text-white/80">{post.author}</span>}
          {post.date && <><span>•</span><span>{post.date}</span></>}
        </div>
      </div>
    </article>
  );
}

// ── HELPER: List Post Row (large image, horizontal, like "TV & Drama")
function ListPostRow({ post }: { post: { title: string; url: string; img: string; date?: string; cat?: string; author?: string } }) {
  return (
    <article className="group cursor-pointer flex gap-5 items-start border-b border-gray-100 pb-6 last:border-0 last:pb-0">
      <div className="w-[200px] h-[130px] shrink-0 overflow-hidden bg-gray-100 rounded-xs">
        <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0 space-y-1.5 pt-1">
        {post.cat && <span className="text-red-500 text-[9.5px] font-black uppercase tracking-widest">{post.cat}</span>}
        <h2 className="text-[17px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title line-clamp-3">
          <Link href={post.url}>{post.title}</Link>
        </h2>
        <div className="flex items-center gap-2 text-[10.5px] text-gray-400 font-medium">
          {post.author && <span className="hover:text-red-500 transition-colors">By {post.author}</span>}
        </div>
      </div>
    </article>
  );
}

export default function BloggerPage() {
  const [subbed, setSubbed] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-gray-800 selection:bg-red-500 selection:text-white">

      {/* ── HEADER ── */}
      <BloggerHeader />

      {/* ── MAIN CONTENT BODY ── */}
      <div className="max-w-[1200px] mx-auto px-4 pb-16 pt-6">

        {/* ── ROW 1: TOP HORIZONTAL SMALL POSTS BAR ── */}
        <section className="w-full border-b border-gray-100 pb-7 mb-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 divide-x-0 lg:divide-x divide-gray-100">
            {horizontalTopBarPosts.map((post, idx) => (
              <article key={idx} className={`flex gap-3 items-center group cursor-pointer py-2 ${idx > 0 ? "lg:pl-6" : ""}`}>
                <div className="w-[95px] h-[65px] shrink-0 overflow-hidden rounded-xs bg-gray-100 relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="eager" />
                </div>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-red-500 block">{post.cat || "General"}</span>
                  <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-red-500 leading-snug line-clamp-2 transition-colors font-title">
                    <Link href={post.url}>{post.title}</Link>
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ROW 2: HERO BLOCK (Large Banner + 5-Col Grid) ── */}
        <section className="w-full mb-10">
          {/* Large Hero Banner */}
          {heroPost && (
            <article className="w-full h-[400px] md:h-[500px] rounded-xs overflow-hidden relative group shadow-sm cursor-pointer bg-black/40">
              <img src={heroPost.img} alt={heroPost.title} className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-[800ms] ease-out" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-7 md:p-10">
                <span className="text-red-400 text-[9.5px] font-black uppercase tracking-widest mb-2.5">{heroPost.cat || "Culture"}</span>
                <h2 className="text-[28px] md:text-[38px] font-black text-white leading-tight group-hover:text-red-400 transition-colors mb-3 max-w-[800px] font-title">
                  <Link href={heroPost.url}>{heroPost.title}</Link>
                </h2>
                <div className="flex items-center gap-2.5 text-[11px] font-semibold text-white/50">
                  <span className="text-white/80 hover:text-white transition-colors">{heroPost.author || "Shane Doe"}</span>
                </div>
              </div>
            </article>
          )}

          {/* 5-Column Hero Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
            {heroGridPosts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer space-y-2">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-xs relative">
                  <img src={post.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {post.isVideo && (
                    <span className="absolute inset-0 bg-black/15 flex items-center justify-center">
                      <span className="w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                      </span>
                    </span>
                  )}
                  {post.cat && <span className="absolute top-2 left-2 bg-red-500 text-white text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5">{post.cat}</span>}
                </div>
                <h4 className="text-[12.5px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                  <Link href={post.url}>{post.title}</Link>
                </h4>
              </article>
            ))}
          </div>
        </section>

        {/* ── AD BANNER (desktop only) ── */}
        <div className="hidden md:flex justify-center items-center mb-10 bg-gray-50 border border-gray-200 rounded-xs overflow-hidden">
          <a href="#" className="block w-full">
            <img
              src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Top-Under-Header.jpg"
              alt="Advertisement"
              className="w-full max-h-[125px] object-cover"
              loading="lazy"
            />
          </a>
        </div>

        {/* ── ROW 3: MAIN TWO-COLUMN (66% Left / 33% Right Sidebar) ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

          {/* ═══════ LEFT COLUMN (66%) ═══════ */}
          <div className="lg:col-span-2 space-y-10">

            {/* HEALTH SECTION */}
            <div>
              <SectionHeading title="Health" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left 50%: Overlay Post + 3 small list posts */}
                <div className="space-y-0">
                  <OverlayPost post={healthOverlayPost} />
                  <div className="mt-1">
                    {healthLeftListPosts.map((post, idx) => (
                      <SmallListPost key={idx} post={post} imgLeft={true} />
                    ))}
                  </div>
                </div>
                {/* Right 50%: 3 small list posts */}
                <div>
                  {healthRightListPosts.map((post, idx) => (
                    <SmallListPost key={idx} post={post} imgLeft={true} />
                  ))}
                </div>
              </div>
            </div>

            {/* AD BANNER - mid (desktop only) */}
            <div className="hidden md:flex justify-center items-center bg-gray-50 border border-gray-200 rounded-xs overflow-hidden">
              <a href="#" className="block w-full">
                <img
                  src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Top-Mid.jpg"
                  alt="Advertisement"
                  className="w-full max-h-[90px] object-cover"
                  loading="lazy"
                />
              </a>
            </div>

            {/* TECHNOLOGY SECTION */}
            <div>
              <SectionHeading title="Technology" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left 50%: 1 large grid + 3 small list */}
                <div>
                  <GridPostCard post={techLeftGridPost} aspectClass="aspect-[16/10]" />
                  <div className="mt-3">
                    {techLeftListPosts.map((post, idx) => (
                      <SmallListPost key={idx} post={post} imgLeft={true} />
                    ))}
                  </div>
                </div>
                {/* Right 50%: 1 large grid + 3 small list */}
                <div>
                  <GridPostCard post={techRightGridPost} aspectClass="aspect-[16/10]" />
                  <div className="mt-3">
                    {techRightListPosts.map((post, idx) => (
                      <SmallListPost key={idx} post={post} imgLeft={true} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ═══════ RIGHT SIDEBAR (33%) ═══════ */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-[80px] space-y-8 self-start">

              {/* Social Widget */}
              <div>
                <div className="flex items-center border-b-2 border-red-500 mb-4">
                  <h5 className="text-[15px] font-black uppercase tracking-wider text-white bg-red-500 px-3 py-1.5 -mb-[2px]">Social</h5>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Facebook", color: "bg-[#3b5998]", icon: "f" },
                    { name: "Twitter", color: "bg-[#1da1f2]", icon: "t" },
                    { name: "Pinterest", color: "bg-[#bd081c]", icon: "P" },
                    { name: "Instagram", color: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", icon: "ig" },
                    { name: "Reddit", color: "bg-[#ff4500]", icon: "r" },
                    { name: "Vimeo", color: "bg-[#1ab7ea]", icon: "v" },
                  ].map((s, idx) => (
                    <a key={idx} href="#" className={`${s.color} text-white text-[11px] font-black uppercase tracking-wide flex items-center justify-between px-3 py-2.5 rounded-xs hover:opacity-90 transition-opacity`}>
                      <span>{s.name}</span>
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[11px] font-black">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trending Widget (numbered) */}
              <div>
                <div className="flex items-center border-b-2 border-red-500 mb-4">
                  <h4 className="text-[15px] font-black uppercase tracking-wider text-white bg-red-500 px-3 py-1.5 -mb-[2px]">Trending</h4>
                </div>
                <div className="space-y-0">
                  {trendingPosts.map((post, idx) => (
                    <article key={idx} className="group cursor-pointer flex gap-3 items-start py-3 border-b border-gray-100 last:border-0">
                      <div className="w-[52px] h-[52px] shrink-0 overflow-hidden bg-gray-100 rounded-xs relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
                        {post.rating && (
                          <div className="absolute bottom-0 right-0 bg-red-500 text-white text-[9px] font-black px-1 leading-tight">{post.rating}%</div>
                        )}
                        {post.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-2 h-2 fill-current ml-0.5 text-black"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-red-500 leading-snug line-clamp-3 transition-colors font-title">
                          <Link href={post.url}>{post.title}</Link>
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ── SUBSCRIBE CTA BANNER ── */}
        <section className="w-full mb-10 bg-gradient-to-r from-[#c13163] to-[#8b1a42] rounded-xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 text-white flex flex-col justify-center">
              <h2 className="text-[22px] md:text-[28px] font-black leading-tight mb-4 font-title">
                Subscribe now and get unlimited access to{" "}
                <span className="underline decoration-white/40">Blogger.</span> &amp; more!
              </h2>
              <ul className="space-y-2 mb-6 text-[13px] font-medium text-white/85">
                <li className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white/70 shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Blogger Digital Content
                </li>
                <li className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white/70 shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Insider News in Newsletter
                </li>
                <li className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white/70 shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Special Discounts at Store Purchases
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-white text-[#c13163] text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xs hover:bg-gray-100 transition-colors w-fit"
              >
                Subscribe Now
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center p-6 bg-black/10">
              <img
                src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/elementor/thumbs/newsletter-image-01-pvoxjphfrxvd4fijjdlmblc8eo5k0knv1ckdghiido.png"
                alt="Newsletter"
                className="max-h-[200px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── TV & DRAMA + SIDEBAR (second 66/33 block) ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

          {/* LEFT: TV & Drama */}
          <div className="lg:col-span-2">
            <SectionHeading title="TV & Drama" />
            <div className="space-y-6">
              {tvDramaPosts.map((post, idx) => (
                <ListPostRow key={idx} post={post} />
              ))}
              {celebrityGridPosts.map((post, idx) => (
                <ListPostRow key={idx} post={post} />
              ))}
            </div>
          </div>

          {/* RIGHT: Our Picks sidebar continuation */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-[80px] space-y-8 self-start">
              <div>
                <div className="flex items-center border-b-2 border-red-500 mb-4">
                  <h4 className="text-[15px] font-black uppercase tracking-wider text-white bg-red-500 px-3 py-1.5 -mb-[2px]">Our Picks</h4>
                </div>
                <div className="space-y-0">
                  {horizontalTopBarPosts.map((post, idx) => (
                    <SmallListPost key={idx} post={post} imgLeft={true} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ── FITNESS SECTION (Dark Background, 4-Col Grid) ── */}
        <section className="w-full mb-10 bg-gray-900 p-6 md:p-8 rounded-xs">
          <div className="flex items-center border-b-2 border-red-500 mb-5">
            <h4 className="text-[15px] font-black uppercase tracking-wider text-white bg-red-500 px-3 py-1.5 -mb-[2px]">Fitness</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {fitnessPosts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer space-y-2.5">
                <div className="aspect-[4/3] overflow-hidden bg-gray-800 rounded-xs relative">
                  <img src={post.img} alt="" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-400" loading="lazy" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5">{post.cat}</span>
                </div>
                <div>
                  <h2 className="text-[13.5px] font-bold text-white leading-snug group-hover:text-red-400 transition-colors line-clamp-3 font-title">
                    <Link href={post.url}>{post.title}</Link>
                  </h2>
                  {post.date && <span className="text-[10px] text-gray-500 font-medium mt-0.5 block">{post.date}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CELEBRITY (Large Left + 3 Grid Right) ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <SectionHeading title="Celebrity" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="group cursor-pointer space-y-3">
                <div className="aspect-[16/12] overflow-hidden bg-gray-100 rounded-xs relative">
                  <img src={celebrityPost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5">{celebrityPost.cat}</span>
                </div>
                <div>
                  <h2 className="text-[18px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title">
                    <Link href={celebrityPost.url}>{celebrityPost.title}</Link>
                  </h2>
                  {celebrityPost.date && <span className="text-[10.5px] text-gray-400 font-medium mt-0.5 block">{celebrityPost.date}</span>}
                </div>
              </article>
              <div className="space-y-4">
                {celebrityGridPosts.slice(0, 3).map((post, idx) => (
                  <SmallListPost key={idx} post={post} imgLeft={true} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Finance widget */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-[80px] self-start">
              <div className="flex items-center border-b-2 border-red-500 mb-4">
                <h4 className="text-[15px] font-black uppercase tracking-wider text-white bg-red-500 px-3 py-1.5 -mb-[2px]">Finance</h4>
              </div>
              <GridPostCard post={financePost} aspectClass="aspect-[16/9]" />
              <div className="mt-3">
                {financeGridPosts.slice(0, 3).map((post, idx) => (
                  <SmallListPost key={idx} post={post} imgLeft={true} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATIONSHIPS (7-col grid) ── */}
        <section className="w-full mb-10">
          <SectionHeading title="Relationships" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {relationshipsPosts.slice(0, 4).map((post, idx) => (
              <GridPostCard key={idx} post={post} aspectClass="aspect-[16/11]" />
            ))}
          </div>
        </section>

        {/* ── FOOD + SIDEBAR ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <SectionHeading title="Food" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Feature post */}
              <article className="group cursor-pointer space-y-3">
                <div className="aspect-[16/11] overflow-hidden bg-gray-100 rounded-xs">
                  <img src={foodPost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div>
                  <span className="text-red-500 text-[9.5px] font-black uppercase tracking-widest">{foodPost.cat}</span>
                  <h2 className="text-[17px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title mt-0.5">
                    <Link href={foodPost.url}>{foodPost.title}</Link>
                  </h2>
                  {foodPost.date && <span className="text-[10.5px] text-gray-400 font-medium mt-0.5 block">{foodPost.date}</span>}
                </div>
              </article>
              {/* Right: 4 small list posts */}
              <div>
                {foodGridPosts.slice(0, 4).map((post, idx) => (
                  <SmallListPost key={idx} post={post} imgLeft={true} />
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar: newsletter */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-[80px] self-start">
              <div className="bg-gray-50 border border-gray-100 rounded-xs p-5 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <h5 className="text-[16px] font-black text-gray-900 mb-2 font-title">Newsletter</h5>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Get the latest updates delivered directly to your inbox.</p>
                {!subbed ? (
                  <form onSubmit={(e) => { e.preventDefault(); setSubbed(true); }} className="space-y-2.5">
                    <input type="email" placeholder="Your email address" className="w-full border border-gray-200 rounded-xs px-3 py-2.5 text-[13px] focus:outline-none focus:border-red-400 transition-colors" required />
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white text-[11.5px] font-black uppercase tracking-widest py-2.5 rounded-xs transition-colors">
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <p className="text-[13px] text-green-600 font-bold">✓ You&apos;re subscribed!</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── PETS (full width grid) ── */}
        <section className="w-full mb-10">
          <SectionHeading title="Pets & Care" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature post */}
            <article className="group cursor-pointer space-y-3">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs">
                <img src={petsPost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div>
                <span className="text-red-500 text-[9.5px] font-black uppercase tracking-widest">{petsPost.cat}</span>
                <h2 className="text-[18px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title mt-0.5">
                  <Link href={petsPost.url}>{petsPost.title}</Link>
                </h2>
                {petsPost.date && <span className="text-[10.5px] text-gray-400 font-medium">{petsPost.date}</span>}
              </div>
            </article>
            {/* 3-col grid of remaining pets posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {petsGridPosts.slice(0, 4).map((post, idx) => (
                <GridPostCard key={idx} post={post} aspectClass="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>

        {/* ── CULTURE + DECOR side by side ── */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Culture */}
          <div>
            <SectionHeading title="Culture" />
            <article className="group cursor-pointer space-y-3 mb-5">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs">
                <img src={culturePost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div>
                <span className="text-red-500 text-[9.5px] font-black uppercase tracking-widest">{culturePost.cat}</span>
                <h2 className="text-[17px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title mt-0.5">
                  <Link href={culturePost.url}>{culturePost.title}</Link>
                </h2>
              </div>
            </article>
            {cultureGridPosts.slice(0, 3).map((post, idx) => (
              <SmallListPost key={idx} post={post} imgLeft={true} />
            ))}
          </div>

          {/* Home Décor */}
          <div>
            <SectionHeading title="Home Décor" />
            <article className="group cursor-pointer space-y-3 mb-5">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs">
                <img src={decorPost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div>
                <span className="text-red-500 text-[9.5px] font-black uppercase tracking-widest">{decorPost.cat}</span>
                <h2 className="text-[17px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title mt-0.5">
                  <Link href={decorPost.url}>{decorPost.title}</Link>
                </h2>
              </div>
            </article>
            {decorGridPosts.slice(0, 3).map((post, idx) => (
              <SmallListPost key={idx} post={post} imgLeft={true} />
            ))}
          </div>
        </section>

        {/* ── TRAVEL (large feature + grid) ── */}
        <section className="w-full mb-10">
          <SectionHeading title="Travel" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="group cursor-pointer space-y-3">
              <div className="aspect-[16/11] overflow-hidden bg-gray-100 rounded-xs">
                <img src={travelPost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div>
                <span className="text-red-500 text-[9.5px] font-black uppercase tracking-widest">{travelPost.cat}</span>
                <h2 className="text-[17px] font-black text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title mt-0.5">
                  <Link href={travelPost.url}>{travelPost.title}</Link>
                </h2>
                {travelPost.date && <span className="text-[10.5px] text-gray-400 font-medium">{travelPost.date}</span>}
              </div>
            </article>
            <div className="grid grid-cols-2 gap-4">
              {travelGridPosts.slice(0, 4).map((post, idx) => (
                <GridPostCard key={idx} post={post} aspectClass="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <BloggerFooter />

    </main>
  );
}
