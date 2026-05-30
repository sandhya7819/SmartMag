"use client";

import React, { useState } from "react";
import Link from "next/link";
import GeeksEmpireHeader from "@/components/GeeksEmpireHeader";
import GeeksEmpireFooter from "@/components/GeeksEmpireFooter";
import {
  heroPost,
  featuredLeft,
  featuredRight,
  latestMovies,
  topGames,
  bingeWatchMain,
  bingeWatchList,
  trendyTV,
  latestUpdates,
  mustRead,
  bottomGrid,
  Post
} from "@/lib/geeksEmpireData";

const ACCENT_RED = "#ef2626";

function RadialScore({ score }: { score: string }) {
  const numScore = parseFloat(score);
  const r = 18.5;
  const circ = 2 * Math.PI * r; // ~116.23
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
          stroke="#ef2626" 
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

export default function GeeksEmpirePage() {
  const [updatesLimit, setUpdatesLimit] = useState(4);
  const [emailSubbed, setEmailSubbed] = useState(false);

  const getCatColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "gaming":
        return "bg-[#0093cc]";
      case "netflix":
      case "hollywood":
        return "bg-[#7900c1]";
      case "movies":
      case "gossip":
        return "bg-[#ef2626]";
      case "anime":
        return "bg-[#049e57]";
      case "celebrity":
        return "bg-[#0093cc]";
      default:
        return "bg-[#ef2626]";
    }
  };

  const getCatTextColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "gaming":
        return "text-[#0093cc]";
      case "netflix":
      case "hollywood":
        return "text-[#7900c1]";
      case "movies":
      case "gossip":
        return "text-[#ef2626]";
      case "anime":
        return "text-[#049e57]";
      case "celebrity":
        return "text-[#0093cc]";
      default:
        return "text-[#ef2626]";
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#111] theme-geeks-empire selection:bg-[#ef2626] selection:text-white pb-0">
      
      {/* Header component */}
      <GeeksEmpireHeader />

      {/* Main Container */}
      <div className="w-full">
        
        {/* ── SECTION 1: HERO GRID (Full-Width Large Banner) ── */}
        <section className="w-full bg-[#F3F3F3] pt-6 pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            {heroPost && (
              <div className="w-full h-[480px] md:h-[520px] rounded-[3px] overflow-hidden relative group shadow-[0_1px_2px_rgba(0,0,0,0.08)] bg-[#111]">
                <img 
                  src={heroPost.img} 
                  alt={heroPost.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-10">
                  <span className={`${getCatColor(heroPost.cat)} text-white text-[10.5px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-[2px] mb-4.5 w-fit`}>
                    {heroPost.cat}
                  </span>
                  <h2 className="text-2xl md:text-[38px] font-bold text-white leading-tight group-hover:text-[#ef2626] transition-colors mb-4 max-w-[850px]">
                    <Link href={heroPost.url}>{heroPost.title}</Link>
                  </h2>
                  <div className="flex items-center gap-3.5 text-[12.5px] font-bold uppercase tracking-wider text-white/50">
                    <span className="text-white/80 hover:text-white transition-colors">{heroPost.author}</span>
                    <span>•</span>
                    <span>{heroPost.date}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>


        {/* ── SECTION 2: FEATURED SPLIT GRID (50% Overlay Card + 4 small grid cards) ── */}
        <section className="w-full bg-[#F3F3F3] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Big Overlay Card */}
              {featuredLeft && (
                <div className="h-[432px] md:h-[495px] rounded-[3px] overflow-hidden relative group shadow-[0_1px_2px_rgba(0,0,0,0.08)] bg-[#111]">
                  <img 
                    src={featuredLeft.img} 
                    alt={featuredLeft.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
                  />
                  {featuredLeft.isGallery && (
                    <span className="absolute inset-0 bg-black/5 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg hover:bg-[#ef2626] hover:text-white transition-colors">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </span>
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <span className={`${getCatColor(featuredLeft.cat)} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-[2px] mb-3 w-fit`}>
                      {featuredLeft.cat}
                    </span>
                    <h3 className="text-xl md:text-[25px] font-bold text-white leading-snug group-hover:text-[#ef2626] transition-colors mb-3 line-clamp-3">
                      <Link href={featuredLeft.url}>{featuredLeft.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-wider text-white/50">
                      <span>By {featuredLeft.author}</span>
                      <span>•</span>
                      <span>{featuredLeft.date}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Right Column: 4 Small Grids (2x2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredRight.map((post, idx) => (
                  <article key={idx} className="bg-white rounded-[3px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.08)] flex flex-col group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative shrink-0">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        {post.cat}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <h4 className="text-[14.5px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-3 text-center">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 3: LATEST MOVIES (3 Cards Grid) ── */}
        <section className="w-full bg-[#F3F3F3] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              
              <div className="flex items-center border-l-[3px] border-[#ef2626] pl-3 mb-6">
                <h4 className="text-[17px] font-bold uppercase tracking-wider text-gray-900">
                  Latest Movies
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestMovies.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[16/9] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-[#ef2626] hover:text-white transition-colors">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                          </span>
                        </span>
                      )}
                      <span className="absolute bottom-3 left-3 bg-[#ef2626] text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm shadow-sm">
                        {post.cat}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[14.5px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 4: ADVERTISEMENT BANNER ── */}
        <section className="w-full bg-[#F3F3F3] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-center">
            <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden rounded-sm hover:opacity-95 transition-opacity">
              <img 
                src="https://smartmag.theme-sphere.com/gaming/wp-content/uploads/sites/9/2021/02/SMARTMAG-BANNER-1200-19@2x.jpg" 
                alt="SmartMag Purchase Advertisement Banner" 
                width="1200" 
                height="133"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
        </section>


        {/* ── SECTION 5: TOP GAMES (Dark Theme Row) ── */}
        <section className="w-full bg-[#1A1B1D] py-12 mb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            
            <div className="flex items-center border-l-[3px] border-[#ef2626] pl-3 mb-8">
              <h4 className="text-[17px] font-bold uppercase tracking-wider text-white">
                Top Games
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topGames.map((post, idx) => (
                <div key={idx} className="h-[210px] sm:h-[240px] rounded-[3px] overflow-hidden relative group shadow-[0_1px_2px_rgba(0,0,0,0.15)] bg-black/40">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {post.rating && <RadialScore score={post.rating} />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <span className={`${getCatColor(post.cat)} text-white text-[8.5px] font-black uppercase tracking-widest px-2 py-0.5 rounded-[2px] mb-2 w-fit`}>
                      {post.cat}
                    </span>
                    <h3 className="text-[14.5px] font-bold text-white leading-snug group-hover:text-[#ef2626] transition-colors mb-1.5 line-clamp-3">
                      <Link href={post.url}>{post.title}</Link>
                    </h3>
                    <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ── SECTION 6: BINGE WATCH & SIDEBAR COLUMN (Two-Column Layout 1) ── */}
        <section className="w-full bg-[#F3F3F3] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (66%): Binge Watch */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  
                  <div className="flex items-center border-l-[3px] border-[#ef2626] pl-3 mb-6">
                    <h4 className="text-[17px] font-bold uppercase tracking-wider text-gray-900">
                      Binge Watch
                    </h4>
                  </div>

                  <div className="space-y-6">
                    {/* Big Overlay Card */}
                    {bingeWatchMain && (
                      <div className="h-[300px] md:h-[350px] rounded-[3px] overflow-hidden relative group bg-black/40">
                        <img 
                          src={bingeWatchMain.img} 
                          alt="" 
                          className="w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
                          <span className={`${getCatColor(bingeWatchMain.cat)} text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-[2px] mb-2.5 w-fit`}>
                            {bingeWatchMain.cat}
                          </span>
                          <h3 className="text-xl md:text-[23px] font-bold text-white leading-snug group-hover:text-[#ef2626] transition-colors mb-2.5 max-w-[650px]">
                            <Link href={bingeWatchMain.url}>{bingeWatchMain.title}</Link>
                          </h3>
                          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wider text-white/50">
                            <span>By {bingeWatchMain.author}</span>
                            <span>•</span>
                            <span>{bingeWatchMain.date}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Horizontal List items underneath */}
                    <div className="space-y-5">
                      {bingeWatchList.map((post, idx) => (
                        <div key={idx} className="flex gap-4 group cursor-pointer border-b border-dashed border-gray-150 pb-5 last:border-0 last:pb-0 items-center">
                          <div className="w-[110px] md:w-[150px] aspect-[16/9] shrink-0 bg-gray-50 rounded-sm overflow-hidden relative">
                            <img 
                              src={post.img} 
                              alt="" 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                            <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[7.5px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm">
                              {post.cat}
                            </span>
                          </div>
                          <div className="space-y-1.5 flex-1">
                            <h4 className="text-[13.5px] md:text-[15.5px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
                              <Link href={post.url}>{post.title}</Link>
                            </h4>
                            <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                              <span>By {post.author}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Load More Button */}
                    <div className="pt-2 flex justify-center">
                      <button className="px-8 py-3.5 border-2 border-gray-200 hover:border-black bg-white text-gray-700 hover:text-black font-black uppercase tracking-widest text-[11px] transition-all rounded-sm flex items-center gap-2 shadow-sm">
                        Load More 
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                      </button>
                    </div>

                  </div>

                </div>
              </div>

              {/* Right Sidebar (33%): Trendy TV */}
              <div className="lg:col-span-4 lg:sticky lg:top-20 self-start">
                <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-gray-900 border-b-3 border-[#ef2626] pb-1.5 w-full text-center">
                      Trendy TV
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {trendyTV.map((post, idx) => (
                      <article key={idx} className="group cursor-pointer flex flex-col items-center">
                        <div className="w-full aspect-[16/9] overflow-hidden bg-gray-50 rounded-sm relative shrink-0 mb-3.5">
                          <img 
                            src={post.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                          <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                            {post.cat}
                          </span>
                        </div>
                        <div className="space-y-1.5 text-center px-2">
                          <h4 className="text-[14px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
                            <Link href={post.url}>{post.title}</Link>
                          </h4>
                          <div className="flex items-center justify-center gap-2 text-[10.5px] font-bold uppercase tracking-wider text-gray-400">
                            <span>By {post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 7: NEWSLETTER BANNER (Dark Theme `#101010`) ── */}
        <section className="w-full bg-[#101010] py-16 mb-6 font-sans">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-center text-center">
            <div className="max-w-[650px] space-y-6 text-white">
              
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#ef2626] mx-auto mb-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">Join our mailing list</h3>
              
              {emailSubbed ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-sm text-xs font-bold uppercase tracking-wider">
                  Success! You have subscribed.
                </div>
              ) : (
                <p className="text-white/50 text-[13px] leading-relaxed font-semibold">
                  Get the latest creative news from FooBar about art, design and business.
                </p>
              )}

              {!emailSubbed && (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setEmailSubbed(true); }} 
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Your email address.." 
                      className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ef2626] focus:bg-white focus:text-[#111] transition-all rounded-sm font-semibold"
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-[#ef2626] text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm shadow-md shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer mt-3 justify-center">
                    <input type="checkbox" className="mt-1 accent-[#ef2626]" required />
                    <span className="text-[10px] text-white/40 font-bold text-left leading-normal max-w-[400px]">
                      By signing up, you agree to our terms and our Privacy Policy agreement.
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>
        </section>


        {/* ── SECTION 8: LATEST UPDATES & SIDEBARS (Two-Column Layout 2) ── */}
        <section className="w-full bg-[#F3F3F3] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (66%): Latest Updates */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  
                  <div className="flex items-center border-l-[3px] border-[#ef2626] pl-3 mb-6">
                    <h4 className="text-[17px] font-bold uppercase tracking-wider text-gray-900">
                      Latest Updates
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {latestUpdates.slice(0, updatesLimit).map((post, idx) => (
                      <article key={idx} className="group cursor-pointer flex flex-col space-y-3.5 bg-white border border-gray-100 p-4 rounded-sm hover:border-[#ef2626]/20 transition-all">
                        <div className="aspect-[16/9] overflow-hidden bg-gray-50 rounded-sm relative">
                          <img 
                            src={post.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                          <span className="absolute bottom-2.5 left-2.5 bg-[#ef2626] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm shadow-sm">
                            {post.cat}
                          </span>
                        </div>
                        <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                          <div className="space-y-2">
                            <h4 className="text-[14.5px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
                              <Link href={post.url}>{post.title}</Link>
                            </h4>
                            {post.excerpt && (
                              <p className="text-gray-400 text-[12.5px] leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2.5 text-[10.5px] font-bold uppercase tracking-wider text-gray-400 pt-2 border-t border-gray-50 mt-1">
                            <span>By {post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Pagination load button */}
                  {updatesLimit < latestUpdates.length && (
                    <div className="pt-6 flex justify-center border-t border-gray-100 mt-6">
                      <button 
                        onClick={() => setUpdatesLimit(prev => prev + 2)}
                        className="px-8 py-3.5 border-2 border-gray-200 hover:border-black bg-white text-gray-700 hover:text-black font-black uppercase tracking-widest text-[11px] transition-all rounded-sm flex items-center gap-2 shadow-sm"
                      >
                        Load More 
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                      </button>
                    </div>
                  )}

                </div>
              </div>

              {/* Right Sidebar (33%): Follow Us & Must Read */}
              <div className="lg:col-span-4 lg:sticky lg:top-20 self-start space-y-6">
                
                {/* Social follow list */}
                <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-gray-900 border-b-3 border-[#ef2626] pb-1.5 w-full text-center">
                      Follow Us
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3.5">
                    {[
                      { srv: "facebook", count: "1.1K", color: "bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2]" },
                      { srv: "twitter", count: "68.9K", color: "bg-black/5 hover:bg-black text-black" },
                      { srv: "pinterest", count: "10.7K", color: "bg-[#BD081C]/10 hover:bg-[#BD081C] text-[#BD081C]" },
                      { srv: "instagram", count: "46.4K", color: "bg-[#E1306C]/10 hover:bg-[#E1306C] text-[#E1306C]" }
                    ].map((item, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className={`p-3.5 rounded-sm flex flex-col items-center justify-center gap-1 transition-all text-center group/sc hover:text-white ${item.color}`}
                      >
                        <span className="font-bold text-xs uppercase group-hover/sc:text-white">{item.srv}</span>
                        <span className="text-[10px] font-bold opacity-60 group-hover/sc:text-white/90">{item.count}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Must Read Posts list */}
                <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-gray-900 border-b-3 border-[#ef2626] pb-1.5 w-full text-center">
                      Must Read
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {mustRead.map((post, idx) => (
                      <div key={idx} className="flex gap-3.5 group cursor-pointer items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="w-[85px] h-[58px] shrink-0 bg-gray-50 rounded-sm overflow-hidden relative aspect-[16/9]">
                          <img 
                            src={post.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <h4 className="text-[12.5px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
                            <Link href={post.url}>{post.title}</Link>
                          </h4>
                          <span className="text-[9.5px] text-gray-400 font-bold uppercase block">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 9: BOTTOM GRID (4 Cards Grid with Ratings & Media Overlays) ── */}
        <section className="w-full bg-[#F3F3F3] pb-12">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="bg-white p-6 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bottomGrid.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[16/9] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.rating && <RadialScore score={post.rating} />}
                      {post.isVideo && (
                        <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-[#ef2626] hover:text-white transition-colors">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                          </span>
                        </span>
                      )}
                      <span className={`${getCatColor(post.cat)} absolute bottom-3 left-3 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm`}>
                        {post.cat}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14.5px] font-bold text-gray-900 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-wider text-gray-400">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More bottom button */}
              <div className="pt-6 flex justify-center border-t border-gray-100 mt-6">
                <button className="px-8 py-3.5 border-2 border-gray-200 hover:border-black bg-white text-gray-700 hover:text-black font-black uppercase tracking-widest text-[11px] transition-all rounded-sm flex items-center gap-2 shadow-sm">
                  Load More 
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                </button>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* Footer component */}
      <GeeksEmpireFooter />

    </main>
  );
}
