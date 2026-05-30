"use client";

import React, { useState } from "react";
import Link from "next/link";
import InsightsOnlyHeader from "@/components/InsightsOnlyHeader";
import InsightsOnlyFooter from "@/components/InsightsOnlyFooter";
import { 
  heroGrid, 
  trendingPosts, 
  worldMain, 
  worldList, 
  mostViewed, 
  techPosts, 
  lifestyleMain, 
  lifestyleList, 
  featuredSidebarPosts, 
  dontMissPosts, 
  bottomGridPosts 
} from "@/lib/insightsOnlyData";

const ACCENT_RED = "#ef2c32";

export default function InsightsOnlyPage() {
  const [lifestyleLimit, setLifestyleLimit] = useState(4);
  const [emailSubbed, setEmailSubbed] = useState(false);

  const getCatColor = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case "technology":
        return "bg-[#009bf6]";
      case "lifestyle":
        return "bg-[#e54e53]";
      case "world":
        return "bg-[#3b82f6]";
      case "health":
        return "bg-[#10b981]";
      default:
        return "bg-[#ef2c32]";
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F0F0] text-[#16171f] font-sans selection:bg-[#ef2c32] selection:text-white pb-0">
      
      {/* Header component */}
      <InsightsOnlyHeader />

      {/* Main Container */}
      <div className="w-full">

        {/* ── SECTION 1: HERO GRID (Lifestyle / World / Technology) ── */}
        <section className="w-full bg-[#F0F0F0] pt-6 pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (60%): Large Hero Post */}
              {heroGrid[0] && (
                <div className="lg:col-span-7 h-[460px] md:h-[530px] rounded-[3px] overflow-hidden relative group shadow-[0_1px_2px_rgba(0,0,0,0.08)] bg-black">
                  <img 
                    src={heroGrid[0].img} 
                    alt={heroGrid[0].title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <span className={`${getCatColor(heroGrid[0].cat)} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-[2px] mb-3 w-fit`}>
                      {heroGrid[0].cat}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-[#ef2c32] transition-colors mb-3">
                      <Link href={heroGrid[0].url}>{heroGrid[0].title}</Link>
                    </h2>
                    <div className="flex items-center gap-3.5 text-[11px] font-black uppercase tracking-wider text-white/50">
                      <span>By {heroGrid[0].author}</span>
                      <span>•</span>
                      <span>{heroGrid[0].date}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Right Column (40%): Two Stacked Medium Posts */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {heroGrid.slice(1, 3).map((post, idx) => (
                  <div key={idx} className="h-[218px] md:h-[252px] rounded-[3px] overflow-hidden relative group shadow-[0_1px_2px_rgba(0,0,0,0.08)] bg-black">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6">
                      <span className={`${getCatColor(post.cat)} text-white text-[9.5px] font-black uppercase tracking-widest px-2 py-0.5 rounded-[2px] mb-2.5 w-fit`}>
                        {post.cat}
                      </span>
                      <h3 className="text-[17px] md:text-[19px] font-black text-white leading-snug group-hover:text-[#ef2c32] transition-colors mb-2 line-clamp-2">
                        <Link href={post.url}>{post.title}</Link>
                      </h3>
                      <div className="flex items-center gap-3 text-[10.5px] font-black uppercase tracking-wider text-white/50">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 2: TRENDING NOW (4 Cards Grid) ── */}
        <section className="w-full bg-[#F0F0F0] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                  Trending Now
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingPosts.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[14.5px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-3">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
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


        {/* ── SECTION 3: TOP BANNER AD ── */}
        <section className="w-full bg-[#F0F0F0] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-center">
            <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden rounded-sm hover:opacity-95 transition-opacity">
              <img 
                src="https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/03/Discover-Top.jpg" 
                alt="Envato Theme Purchase Advertisement Banner" 
                width="970" 
                height="125"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
        </section>


        {/* ── SECTION 4: THE WORLD & SIDEBAR COLUMN (Split Layout 1) ── */}
        <section className="w-full bg-[#F0F0F0] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Main (66%): The World */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                      The World
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Left Column (Main featured post) */}
                    <div className="md:col-span-6 group cursor-pointer space-y-4">
                      <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm relative">
                        <img 
                          src={worldMain.img} 
                          alt="" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[20px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors">
                          <Link href={worldMain.url}>{worldMain.title}</Link>
                        </h3>
                        <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
                          <span>By {worldMain.author}</span>
                          <span>•</span>
                          <span>{worldMain.date}</span>
                        </div>
                        <p className="text-gray-500 text-[13.5px] leading-relaxed line-clamp-3 font-medium">
                          {worldMain.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Right Column (List details loop) */}
                    <div className="md:col-span-6 flex flex-col gap-4 justify-between">
                      {worldList.map((post, idx) => (
                        <div key={idx} className="flex gap-4 group cursor-pointer border-b border-dashed border-gray-100 pb-4 last:border-0 last:pb-0 items-center">
                          <div className="w-[100px] h-[75px] shrink-0 bg-gray-150 rounded-sm overflow-hidden relative">
                            <img 
                              src={post.img} 
                              alt="" 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                            {post.cat && (
                              <span className="absolute top-1 left-1 bg-black/85 text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
                                {post.cat}
                              </span>
                            )}
                          </div>
                          <div className="space-y-1.5 flex-1">
                            <h4 className="text-[13px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-2">
                              <Link href={post.url}>{post.title}</Link>
                            </h4>
                            <span className="text-[9.5px] text-gray-400 font-bold block">{post.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

              {/* Right Sidebar (33%): Most Viewed & Social Follow */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* 1. Most Viewed Small Posts */}
                <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                      Most Viewed
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {mostViewed.map((post, idx) => (
                      <div key={idx} className="flex gap-3 group cursor-pointer items-start">
                        <span className="text-[28px] font-black text-gray-150 leading-none italic group-hover:text-[#ef2c32] transition-colors shrink-0 w-8 text-center">
                          0{idx + 1}
                        </span>
                        <div className="space-y-1 flex-grow">
                          <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-2">
                            <Link href={post.url}>{post.title}</Link>
                          </h5>
                          <span className="text-[9.5px] text-gray-400 font-bold block">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Social Follow Counts */}
                <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { srv: "facebook", count: "1.1K", color: "bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2]" },
                      { srv: "instagram", count: "46.4K", color: "bg-[#E1306C]/10 hover:bg-[#E1306C] text-[#E1306C]" },
                      { srv: "youtube", count: "105K", color: "bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000]" },
                      { srv: "tiktok", count: "Follow", color: "bg-black/5 hover:bg-black text-black" },
                      { srv: "whatsapp", count: "Follow", color: "bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366]" },
                      { srv: "twitter", count: "68.9K", color: "bg-black/5 hover:bg-black text-black" }
                    ].map((item, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className={`p-3 rounded-sm flex flex-col items-center justify-center gap-1.5 transition-all text-center group/sc hover:text-white ${item.color}`}
                      >
                        <span className="font-black text-xs group-hover/sc:text-white">{item.srv.toUpperCase()}</span>
                        <span className="text-[10px] font-bold opacity-60 group-hover/sc:text-white/90">{item.count}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 5: FROM TECH (4 Cards Grid) ── */}
        <section className="w-full bg-[#F0F0F0] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                  From Tech
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techPosts.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <span className="w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md hover:bg-[#ef2c32] hover:text-white transition-all">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[14px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-3">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="text-[9.5px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 6: THE LIFESTYLE & SIDEBAR (Split Layout 2) ── */}
        <section className="w-full bg-[#F0F0F0] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (66%): The Lifestyle */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                      The Lifestyle
                    </h4>
                  </div>

                  <div className="space-y-6">
                    
                    {/* Big horizontally list layout first */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-6 group cursor-pointer">
                      <div className="md:w-[45%] aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm shrink-0 relative">
                        <img 
                          src={lifestyleMain.img} 
                          alt="" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                        <span className="absolute top-2.5 left-2.5 bg-[#ef2c32] text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm shadow-sm">
                          {lifestyleMain.cat}
                        </span>
                        {lifestyleMain.isVideo && (
                          <span className="absolute inset-0 bg-black/15 flex items-center justify-center">
                            <span className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg hover:bg-[#ef2c32] hover:text-white transition-all">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-center space-y-2">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors">
                          <Link href={lifestyleMain.url}>{lifestyleMain.title}</Link>
                        </h3>
                        <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
                          <span>By {lifestyleMain.author}</span>
                        </div>
                      </div>
                    </div>

                    {/* Small layout cards sub-grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {lifestyleList.slice(0, lifestyleLimit).map((post, idx) => (
                        <div key={idx} className="flex gap-4 group cursor-pointer border-b border-dashed border-gray-100 pb-4 last:border-0 last:pb-0 items-center">
                          <div className="w-[100px] h-[75px] shrink-0 bg-gray-50 rounded-sm overflow-hidden relative">
                            <img 
                              src={post.img} 
                              alt="" 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                            {post.rating && (
                              <div className="absolute top-1 right-1 bg-black/85 text-white w-6 h-6 rounded-full flex items-center justify-center border border-white/10 shadow-md">
                                <span className="text-[9px] font-black tracking-tighter text-[#ef2c32]">{post.rating}</span>
                              </div>
                            )}
                            {post.isAudio && (
                              <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <span className="w-7 h-7 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md hover:bg-[#ef2c32] hover:text-white transition-colors">
                                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2"><path d="M9 18V5l12-2v13M9 9l12-2M9 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-2c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" /></svg>
                                </span>
                              </span>
                            )}
                            {post.isVideo && (
                              <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <span className="w-7 h-7 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md hover:bg-[#ef2c32] hover:text-white transition-colors">
                                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                                </span>
                              </span>
                            )}
                          </div>
                          <div className="space-y-1 flex-1">
                            <h4 className="text-[13.5px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-2">
                              <Link href={post.url}>{post.title}</Link>
                            </h4>
                            <div className="flex items-center gap-2.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                              <span>By {post.author}</span>
                              {post.cat && (
                                <>
                                  <span>•</span>
                                  <span className="text-[#ef2c32] font-black">{post.cat}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination Button */}
                    {lifestyleLimit < lifestyleList.length && (
                      <div className="pt-4 flex justify-center">
                        <button 
                          onClick={() => setLifestyleLimit(prev => prev + 3)}
                          className="px-8 py-3.5 border-2 border-gray-150 hover:border-black bg-white text-gray-700 hover:text-black font-black uppercase tracking-widest text-[11px] transition-all rounded-sm flex items-center gap-2 shadow-sm"
                        >
                          Load More 
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 animate-spin"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                        </button>
                      </div>
                    )}

                  </div>

                </div>
              </div>

              {/* Right Column (33%): Featured Posts & Subscribe Updates widget */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* 1. Featured Posts loop */}
                <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                    <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                      Featured Posts
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {featuredSidebarPosts.map((post, idx) => (
                      <div key={idx} className="flex gap-4 group cursor-pointer items-center">
                        <div className="w-[85px] h-[64px] shrink-0 bg-gray-50 rounded-sm overflow-hidden relative aspect-[4/3]">
                          <img 
                            src={post.img} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                          {post.isVideo && (
                            <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                              <span className="w-6 h-6 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md">
                                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                              </span>
                            </span>
                          )}
                        </div>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-[12.5px] font-extrabold text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-2">
                            <Link href={post.url}>{post.title}</Link>
                          </h4>
                          <span className="text-[9.5px] text-gray-400 font-bold block">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Subscribe Updates Widget */}
                <div className="bg-[#101118] text-white p-7 rounded-[3px] shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef2c32]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-105 transition-transform duration-700"></div>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ef2c32] mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-widest text-white">Subscribe to Updates</h3>
                    
                    {emailSubbed ? (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-sm text-center text-xs font-bold uppercase tracking-wider">
                        Thank you for subscribing!
                      </div>
                    ) : (
                      <p className="text-white/50 text-[13px] leading-relaxed font-semibold">
                        Get the latest creative news from FooBar about art, design and business.
                      </p>
                    )}

                    {!emailSubbed && (
                      <form 
                        onSubmit={(e) => { e.preventDefault(); setEmailSubbed(true); }} 
                        className="space-y-3"
                      >
                        <input 
                          type="email" 
                          placeholder="Your email address.." 
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ef2c32] focus:bg-white focus:text-[#111] transition-all rounded-sm font-semibold"
                          required
                        />
                        <button 
                          type="submit" 
                          className="w-full bg-[#ef2c32] text-white py-3 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm shadow-md"
                        >
                          Subscribe
                        </button>
                        <label className="flex items-start gap-2.5 cursor-pointer mt-3">
                          <input type="checkbox" className="mt-1 accent-[#ef2c32]" required />
                          <span className="text-[10px] text-white/40 font-bold leading-normal">
                            By signing up, you agree to our terms and our Privacy Policy agreement.
                          </span>
                        </label>
                      </form>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 7: DON'T MISS (3 Cards Grid) ── */}
        <section className="w-full bg-[#F0F0F0] pb-6">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                <h4 className="text-[13px] font-black uppercase tracking-widest text-[#16171f] relative after:content-[''] after:absolute after:-bottom-[13px] after:left-0 after:w-12 after:h-0.5 after:bg-[#ef2c32]">
                  Don't Miss
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dontMissPosts.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[14.5px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-3">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
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


        {/* ── SECTION 8: BOTTOM GRID (4 Cards Grid) ── */}
        <section className="w-full bg-[#F0F0F0] pb-10">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="bg-white p-5 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bottomGridPosts.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <span className="w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md hover:bg-[#ef2c32] hover:text-white transition-all">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[14px] font-black text-gray-900 leading-snug group-hover:text-[#ef2c32] transition-colors line-clamp-3">
                        <Link href={post.url}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400">
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

      </div>

      {/* Footer component */}
      <InsightsOnlyFooter />

    </main>
  );
}
