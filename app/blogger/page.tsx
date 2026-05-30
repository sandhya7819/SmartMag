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
  ourPicksPosts
} from "@/lib/bloggerData";

function RadialScore({ score }: { score: string }) {
  const numScore = parseFloat(score);
  const r = 18;
  const circ = 2 * Math.PI * r;
  const pct = (100 - numScore) / 100;
  const offset = circ * pct;

  return (
    <div className="absolute bottom-3 right-3 w-10 h-10 bg-black/85 rounded-full flex items-center justify-center border border-white/10 shadow-md z-10 select-none">
      <svg className="absolute -rotate-90" height="40" width="40">
        <circle 
          fill="transparent" 
          stroke="rgba(255,255,255,0.08)" 
          strokeWidth="2.5" 
          r={r} 
          cx="20" 
          cy="20" 
        /> 
        <circle 
          fill="transparent" 
          stroke="#E54E53" 
          strokeDasharray={`${circ} ${circ}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth="2.5" 
          r={r} 
          cx="20" 
          cy="20" 
          className="transition-all duration-500"
        />
      </svg> 
      <span className="text-[11px] font-black text-white relative z-10 leading-none">{score}</span>
    </div>
  );
}

export default function BloggerPage() {
  const [subbed, setSubbed] = useState(false);
  const [petsLimit, setPetsLimit] = useState(6);
  const [relationshipsLimit, setRelationshipsLimit] = useState(4);

  const getCatColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "travel":
        return "bg-amber-600";
      case "pets & care":
      case "pets":
        return "bg-sky-600";
      case "food":
        return "bg-emerald-600";
      case "technology":
        return "bg-teal-600";
      case "culture":
        return "bg-purple-600";
      case "fitness":
        return "bg-red-500";
      case "relationships":
        return "bg-pink-500";
      case "finance":
        return "bg-blue-800";
      case "home décor":
        return "bg-orange-500";
      default:
        return "bg-red-500";
    }
  };

  const getCatTextColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "travel":
        return "text-amber-600";
      case "pets & care":
      case "pets":
        return "text-sky-600";
      case "food":
        return "text-emerald-600";
      case "technology":
        return "text-teal-600";
      case "culture":
        return "text-purple-600";
      case "fitness":
        return "text-red-500";
      case "relationships":
        return "text-pink-500";
      case "finance":
        return "text-blue-800";
      case "home décor":
        return "text-orange-500";
      default:
        return "text-red-500";
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-gray-800 theme-blogger selection:bg-red-500 selection:text-white">
      
      {/* ── HEADER ── */}
      <BloggerHeader />

      {/* ── MAIN CONTENT BODY ── */}
      <div className="max-w-[1200px] mx-auto px-4 pb-16 pt-6">
        
        {/* ── ROW 1: TOP HORIZONTAL SMALL POSTS LOOP ── */}
        <section className="w-full border-b border-gray-100 pb-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {horizontalTopBarPosts.map((post, idx) => (
              <article key={idx} className="flex gap-4 items-center group cursor-pointer">
                <div className="w-[100px] h-[70px] shrink-0 overflow-hidden rounded-xs bg-gray-100 relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  {post.isVideo && (
                    <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                      </span>
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${getCatTextColor(post.cat)}`}>
                    {post.cat || "General"}
                  </span>
                  <h4 className="text-[13.5px] font-bold text-gray-900 group-hover:text-red-500 leading-snug line-clamp-2 transition-colors font-title">
                    <Link href={post.url}>{post.title}</Link>
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ROW 2: HERO BLOCK (Large Banner Card + 5-Col Grid Below) ── */}
        <section className="w-full mb-10">
          {heroPost && (
            <div className="w-full h-[400px] md:h-[500px] rounded-xs overflow-hidden relative group shadow-sm bg-black/40 cursor-pointer">
              <img
                src={heroPost.img}
                alt={heroPost.title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-[1.01] transition-transform duration-[800ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className={`${getCatColor(heroPost.cat)} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xs w-fit mb-3`}>
                  {heroPost.cat || "Culture"}
                </span>
                <h2 className="text-2xl md:text-[34px] font-black text-white leading-tight group-hover:text-red-500 transition-colors mb-3 max-w-[850px] font-title">
                  <Link href={heroPost.url}>{heroPost.title}</Link>
                </h2>
                <div className="flex items-center gap-3.5 text-[11.5px] font-bold uppercase tracking-wider text-white/50">
                  <span className="text-white/80 hover:text-white transition-colors">{heroPost.author || "Shane Doe"}</span>
                  <span>•</span>
                  <span>{heroPost.date}</span>
                </div>
              </div>
            </div>
          )}

          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
            {heroGridPosts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer space-y-3">
                <div className="aspect-[16/10] overflow-hidden bg-gray-150 rounded-xs relative">
                  <img
                    src={post.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  {post.isVideo && (
                    <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                      </span>
                    </span>
                  )}
                  <span className="absolute bottom-2.5 left-2.5 bg-black/80 text-white text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                    {post.cat || "General"}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                    <Link href={post.url}>{post.title}</Link>
                  </h4>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ROW 3: TWO-COLUMN MAIN CONTENT (66% Left / 33% Right) ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* LEFT COLUMN: 66% */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Trending Block */}
            <div className="space-y-6">
              <div className="flex items-center border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Trending</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trendingPosts.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs relative">
                      <img
                        src={post.img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      {post.rating && <RadialScore score={post.rating} />}
                      {post.isVideo && (
                        <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">{post.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 2. Fitness Block (Dark Styled Row) */}
            <div className="bg-[#101010] text-white p-6 md:p-8 rounded-sm space-y-6">
              <div className="flex items-center border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-white font-title">Fitness</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fitnessPosts.map((post, idx) => (
                  <article key={idx} className="flex gap-4 items-start group cursor-pointer border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                    <div className="w-[100px] aspect-[16/10] overflow-hidden bg-white/5 rounded-xs shrink-0 relative">
                      <img
                        src={post.img}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-[13.5px] font-bold text-white group-hover:text-red-500 leading-snug line-clamp-2 transition-colors font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <span className="text-[10px] text-white/40 font-semibold uppercase block">{post.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 3. Celebrity Block */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left side: Large featured list post */}
                {celebrityPost && (
                  <div className="md:col-span-6 group cursor-pointer flex flex-col justify-between space-y-4">
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs relative">
                      <img
                        src={celebrityPost.img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Celebrity</span>
                      <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title">
                        <Link href={celebrityPost.url}>{celebrityPost.title}</Link>
                      </h4>
                      <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-2">
                        {celebrityPost.excerpt || "Get the latest updates from Paris Fashion Week and celebrity interviews."}
                      </p>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block pt-1">{celebrityPost.date}</span>
                    </div>
                  </div>
                )}
                {/* Right side: 3 smaller grid items */}
                <div className="md:col-span-6 space-y-5">
                  {celebrityGridPosts.map((post, idx) => (
                    <article key={idx} className="flex gap-4 items-center group cursor-pointer border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="w-[90px] h-[60px] shrink-0 bg-gray-100 rounded-xs overflow-hidden relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        {post.rating && <span className="absolute top-1 right-1 bg-black/85 text-red-500 text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center border border-white/5">{post.rating}</span>}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                          <Link href={post.url}>{post.title}</Link>
                        </h4>
                        <span className="text-[9.5px] text-gray-400 font-semibold uppercase block">{post.date}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Relationships Block */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Relationships</h3>
                <Link href="/blogger" className="text-[11px] font-bold uppercase tracking-wider text-red-500 hover:text-black transition-colors">View More Posts &rarr;</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relationshipsPosts.slice(0, relationshipsLimit).map((post, idx) => (
                  <article key={idx} className="group cursor-pointer flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0">
                    <div className="w-[100px] aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs shrink-0 relative">
                      <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      {post.rating && <span className="absolute top-1 right-1 bg-black/85 text-red-500 text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center border border-white/5">{post.rating}</span>}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-[13.5px] font-bold text-gray-900 group-hover:text-red-500 leading-snug line-clamp-2 transition-colors font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block">{post.date}</span>
                    </div>
                  </article>
                ))}
              </div>
              {relationshipsLimit < relationshipsPosts.length && (
                <div className="pt-2 flex justify-center">
                  <button 
                    onClick={() => setRelationshipsLimit(prev => prev + 3)}
                    className="px-6 py-2.5 border-2 border-gray-150 hover:border-black text-gray-600 hover:text-black font-black uppercase tracking-wider text-[10px] transition-all rounded-xs shadow-sm bg-white"
                  >
                    Load More Relationships
                  </button>
                </div>
              )}
            </div>

            {/* 5. Food Block */}
            <div className="space-y-6">
              <div className="flex items-center border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Food</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left: Featured overlay post */}
                {foodPost && (
                  <div className="md:col-span-6 h-[300px] md:h-[350px] rounded-xs overflow-hidden relative group shadow-sm bg-black/30 cursor-pointer">
                    <img src={foodPost.img} alt="" className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
                      <span className="bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-xs w-fit mb-2.5">Food</span>
                      <h4 className="text-base font-bold text-white leading-snug group-hover:text-red-500 transition-colors line-clamp-3 font-title">
                        <Link href={foodPost.url}>{foodPost.title}</Link>
                      </h4>
                      <div className="text-[10px] text-white/40 font-semibold uppercase mt-1">{foodPost.date || "Jan 14, 2021"}</div>
                    </div>
                  </div>
                )}
                {/* Right: 4 small items grid */}
                <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {foodGridPosts.map((post, idx) => (
                    <article key={idx} className="group cursor-pointer space-y-2">
                      <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                        {post.isAudio && (
                          <span className="absolute top-2 left-2 bg-black/80 text-white p-1 rounded-full">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>
                          </span>
                        )}
                        {post.isVideo && (
                          <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                              <svg viewBox="0 0 24 24" className="w-2 h-2 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                          </span>
                        )}
                      </div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                    </article>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR COLUMN: 33% */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 1. Social Follow Count Widget */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-4">
              <div className="flex items-center justify-center border-b border-gray-100 pb-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Follow Us</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { srv: "facebook", count: "1.1K", color: "bg-[#1877F2]/5 hover:bg-[#1877F2] text-[#1877F2]" },
                  { srv: "twitter", count: "68.9K", color: "bg-black/5 hover:bg-black text-black" },
                  { srv: "pinterest", count: "10.7K", color: "bg-[#BD081C]/5 hover:bg-[#BD081C] text-[#BD081C]" },
                  { srv: "instagram", count: "46.4K", color: "bg-[#E1306C]/5 hover:bg-[#E1306C] text-[#E1306C]" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`p-3 rounded-xs flex flex-col items-center justify-center gap-0.5 transition-all text-center group/sc hover:text-white ${item.color}`}
                  >
                    <span className="font-bold text-xs uppercase group-hover/sc:text-white">{item.srv}</span>
                    <span className="text-[10px] font-semibold opacity-60 group-hover/sc:text-white/90">{item.count}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Finance Widget Block */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              <div className="flex items-center border-b border-gray-100 pb-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Finance</h4>
              </div>
              
              {/* Overlay post */}
              {financePost && (
                <div className="h-[180px] rounded-xs overflow-hidden relative group bg-black/45 cursor-pointer">
                  <img src={financePost.img} alt="" className="w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4">
                    <span className="bg-blue-800 text-white text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-xs w-fit mb-1.5">Finance</span>
                    <h5 className="text-[12.5px] font-bold text-white leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                      <Link href={financePost.url}>{financePost.title}</Link>
                    </h5>
                  </div>
                </div>
              )}

              {/* Grid lists */}
              <div className="space-y-4 pt-1">
                {financeGridPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-3 group cursor-pointer items-start border-b border-gray-50 pb-3.5 last:border-0 last:pb-0">
                    <div className="w-[75px] h-[50px] shrink-0 bg-gray-100 overflow-hidden rounded-xs relative">
                      <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-[12.5px] font-bold text-gray-900 group-hover:text-red-500 transition-colors leading-snug line-clamp-2 font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h5>
                      <span className="text-[9.5px] text-gray-400 font-semibold uppercase block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* ── ROW 4: PETS & PET CARE (FULL-WIDTH CONTAINER) ── */}
        <section className="w-full bg-[#F5F7FA] p-6 md:p-8 rounded-sm mb-10">
          <div className="flex items-center border-l-[3px] border-red-500 pl-3 mb-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Pets &amp; Pet Care</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column (Overlay banner) */}
            {petsPost && (
              <div className="lg:col-span-4 h-[300px] lg:h-auto rounded-xs overflow-hidden relative group bg-black/35 cursor-pointer shadow-sm min-h-[300px]">
                <img src={petsPost.img} alt="" className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5">
                  <span className="bg-sky-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-xs w-fit mb-2.5">Pets &amp; Care</span>
                  <h4 className="text-base font-bold text-white leading-snug group-hover:text-red-500 transition-colors line-clamp-3 font-title">
                    <Link href={petsPost.url}>{petsPost.title}</Link>
                  </h4>
                  <div className="text-[10px] text-white/40 font-semibold uppercase mt-1.5">{petsPost.date || "Oct 4, 2022"}</div>
                </div>
              </div>
            )}
            {/* Right Column (List Grid) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {petsGridPosts.slice(0, petsLimit).map((post, idx) => (
                <article key={idx} className="group cursor-pointer space-y-2.5 bg-white p-3 rounded-xs border border-gray-100/50 shadow-xs">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs relative">
                    <img src={post.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                      <Link href={post.url}>{post.title}</Link>
                    </h4>
                    <span className="text-[9.5px] text-gray-400 font-semibold uppercase">{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {petsLimit < petsGridPosts.length && (
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setPetsLimit(prev => prev + 3)}
                className="px-8 py-3 bg-red-500 hover:bg-black text-white font-black uppercase tracking-widest text-[10px] transition-all rounded-xs shadow-md"
              >
                Load More Pet Care &rarr;
              </button>
            </div>
          )}
        </section>

        {/* ── ROW 5: LOWER TWO-COLUMN MAIN CONTENT (66% Left / 33% Right) ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: 66% */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Culture Section */}
            <div className="space-y-6">
              <div className="flex items-center border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Culture</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left overlay post */}
                {culturePost && (
                  <div className="md:col-span-6 h-[260px] md:h-auto rounded-xs overflow-hidden relative group bg-black/40 cursor-pointer shadow-sm min-h-[220px]">
                    <img src={culturePost.img} alt="" className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                      <span className="bg-purple-600 text-white text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-xs w-fit mb-2">Culture</span>
                      <h4 className="text-[14.5px] font-bold text-white leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                        <Link href={culturePost.url}>{culturePost.title}</Link>
                      </h4>
                    </div>
                  </div>
                )}
                {/* Right small list */}
                <div className="md:col-span-6 space-y-4">
                  {cultureGridPosts.map((post, idx) => (
                    <article key={idx} className="flex gap-4 items-center group cursor-pointer border-b border-gray-100 pb-3.5 last:border-0 last:pb-0">
                      <div className="w-[85px] h-[55px] shrink-0 bg-gray-150 rounded-xs overflow-hidden relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                          <Link href={post.url}>{post.title}</Link>
                        </h4>
                        <span className="text-[9.5px] text-gray-400 font-semibold uppercase block">{post.date}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Home Décor Section */}
            <div className="space-y-6">
              <div className="flex items-center border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Home D&eacute;cor</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left: Large horizontal list card */}
                {decorPost && (
                  <div className="md:col-span-6 group cursor-pointer flex flex-col justify-between space-y-3.5">
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs relative">
                      <img src={decorPost.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Home D&eacute;cor</span>
                      <h4 className="text-base font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors font-title">
                        <Link href={decorPost.url}>{decorPost.title}</Link>
                      </h4>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block">{decorPost.date}</span>
                    </div>
                  </div>
                )}
                {/* Right: 3 items grid */}
                <div className="md:col-span-6 space-y-4">
                  {decorGridPosts.map((post, idx) => (
                    <article key={idx} className="flex gap-4 items-center group cursor-pointer border-b border-gray-100 pb-3.5 last:border-0 last:pb-0">
                      <div className="w-[85px] h-[55px] shrink-0 bg-gray-150 rounded-xs overflow-hidden relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                          <Link href={post.url}>{post.title}</Link>
                        </h4>
                        <span className="text-[9.5px] text-gray-400 font-semibold uppercase block">{post.date}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Travel & Tourism Section */}
            <div className="space-y-6">
              <div className="flex items-center border-l-[3px] border-red-500 pl-3">
                <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 font-title">Travel &amp; Tourism</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left featured overlay post */}
                {travelPost && (
                  <div className="md:col-span-6 h-[260px] md:h-auto rounded-xs overflow-hidden relative group bg-black/45 cursor-pointer shadow-sm min-h-[220px]">
                    <img src={travelPost.img} alt="" className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                      <span className="bg-amber-600 text-white text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-xs w-fit mb-2">Travel</span>
                      <h4 className="text-[14.5px] font-bold text-white leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                        <Link href={travelPost.url}>{travelPost.title}</Link>
                      </h4>
                    </div>
                  </div>
                )}
                {/* Right 4 grid cards */}
                <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {travelGridPosts.map((post, idx) => (
                    <article key={idx} className="group cursor-pointer space-y-2">
                      <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-xs relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                      </div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors line-clamp-2 font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                    </article>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR COLUMN: 33% */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-20 self-start">
            
            {/* 1. Newsletter Form widget */}
            <div className="bg-[#101010] text-white p-6 rounded-sm shadow-md space-y-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-red-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-white">Subscribe to Updates</h3>
              
              {subbed ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xs text-[11px] font-black uppercase tracking-wider">
                  Success! You have subscribed.
                </div>
              ) : (
                <>
                  <p className="text-white/50 text-[12.5px] leading-relaxed font-semibold">
                    Get the latest creative news from FooBar about art, design and business.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubbed(true); }} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address.."
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-500 transition-colors rounded-xs font-semibold"
                    />
                    <button
                      type="submit"
                      className="w-full bg-red-500 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-[10px] py-3 rounded-xs transition-all shadow-md"
                    >
                      Subscribe
                    </button>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input type="checkbox" className="mt-1 accent-red-500" required />
                      <span className="text-[10px] text-white/35 font-bold leading-normal">
                        By signing up, you agree to our terms and our <a href="#" className="underline hover:text-white">Privacy Policy</a> agreement.
                      </span>
                    </label>
                  </form>
                </>
              )}
            </div>

            {/* 2. Our Picks List Widget */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              <div className="flex items-center justify-center border-b border-gray-100 pb-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Our Picks</h4>
              </div>
              <div className="space-y-4">
                {ourPicksPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-3 group cursor-pointer items-center border-b border-gray-50 pb-3.5 last:border-0 last:pb-0">
                    <div className="w-[85px] h-[55px] shrink-0 bg-gray-150 rounded-xs overflow-hidden relative">
                      <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h5 className="text-[12.5px] font-bold text-gray-900 group-hover:text-red-500 transition-colors leading-snug line-clamp-2 font-title">
                        <Link href={post.url}>{post.title}</Link>
                      </h5>
                      <span className="text-[9.5px] text-gray-400 font-semibold uppercase">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

      </div>

      {/* ── FOOTER ── */}
      <BloggerFooter />

    </main>
  );
}
