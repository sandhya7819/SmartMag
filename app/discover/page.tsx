"use client";

import React, { useState } from "react";
import Link from "next/link";
import DiscoverHeader from "@/components/DiscoverHeader";
import DiscoverFooter from "@/components/DiscoverFooter";
import { 
  Play, 
  Volume2, 
  Flame, 
  Facebook, 
  Twitter, 
  Instagram, 
  Clock, 
  ArrowRight,
  Eye,
  BarChart2,
  Mail,
  CheckSquare
} from "lucide-react";
import {
  heroMain,
  heroRightMedium,
  heroRightSmall,
  horizontalSlider,
  featuredStoriesMain,
  featuredStoriesGrid,
  featuredStoriesRelated,
  middleListPost,
  middleGridPosts,
  techMain,
  techList,
  techRelated,
  sidebarWhatsHot,
  sidebarTrendingNow
} from "@/lib/discoverData";

/* ═══════════════════════════════════════════
   HELPER COMPONENTS
   ═══════════════════════════════════════════ */

function SectionHead({ title, viewMoreText, viewMoreHref = "#", dark }: { title: string; viewMoreText?: string; viewMoreHref?: string; dark?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between border-b-2 mb-6 pb-2.5 ${dark ? "border-white/10" : "border-gray-900"}`}>
      <h3 className={`text-[14px] font-black uppercase tracking-[1.5px] flex items-center gap-2.5 ${dark ? "text-white" : "text-gray-900"}`}>
        <span className="w-[3px] h-[15px] rounded-[1px] bg-[#e24e54]" />
        {title}
      </h3>
      {viewMoreText && (
        <Link href={viewMoreHref} className="text-[10px] font-black uppercase tracking-wider text-gray-400 hover:text-[#e24e54] transition-colors">
          {viewMoreText}
        </Link>
      )}
    </div>
  );
}

function SidebarHead({ title }: { title: string }) {
  return (
    <div className="flex items-baseline border-b-2 border-gray-900 dark:border-white/10 mb-5 pb-2.5">
      <h4 className="text-[12px] font-black uppercase tracking-[1.5px] flex items-center gap-2 text-gray-900 dark:text-white">
        <span className="w-[3px] h-[14px] rounded-[1px] bg-[#e24e54]" />
        {title}
      </h4>
    </div>
  );
}

export default function DiscoverPage() {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const handleSubscribe = (e: React.FormEvent, email: string, setEmail: (val: string) => void) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-white dark:bg-[#111111] min-h-screen text-gray-800 dark:text-gray-200 font-sans selection:bg-[#e24e54] selection:text-white transition-colors duration-300">
      
      {/* Header */}
      <DiscoverHeader />

      <main className="max-w-[1200px] mx-auto px-5 py-8 space-y-12">
        
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO FEATURED GRID D (Type D)
            ══════════════════════════════════════════════════════════ */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Main Large Overlay Card (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 h-[320px] md:h-[420px] relative rounded-sm overflow-hidden group shadow-md bg-neutral-900">
            <img 
              src={heroMain.img} 
              alt={heroMain.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <span className={`inline-block ${heroMain.catColor} text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm`}>
                {heroMain.cat}
              </span>
              <h2 className="text-white text-lg md:text-2xl font-black leading-snug group-hover:text-[#e24e54] transition-colors">
                <Link href="#">{heroMain.title}</Link>
              </h2>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{heroMain.date}</div>
            </div>
          </div>

          {/* Center Card (Spans 1 col) */}
          <div className="h-[320px] md:h-[420px] relative rounded-sm overflow-hidden group shadow-md bg-neutral-900">
            <img 
              src={heroRightMedium.img} 
              alt={heroRightMedium.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
              <span className={`inline-block ${heroRightMedium.catColor} text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm`}>
                {heroRightMedium.cat}
              </span>
              <h2 className="text-white text-md font-black leading-snug group-hover:text-[#e24e54] transition-colors line-clamp-3">
                <Link href="#">{heroRightMedium.title}</Link>
              </h2>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{heroRightMedium.date}</div>
            </div>
          </div>

          {/* Right Column Stacked Cards (2 small cards) */}
          <div className="flex flex-col gap-4 h-[320px] md:h-[420px]">
            {heroRightSmall.map((post, idx) => (
              <div key={idx} className="flex-1 relative rounded-sm overflow-hidden group shadow-sm bg-neutral-900">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                  <span className={`inline-block ${post.catColor} text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm`}>
                    {post.cat}
                  </span>
                  <h3 className="text-white text-xs font-black leading-snug group-hover:text-[#e24e54] transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: CAROUSEL SLIDER (Horizontal Bordered Box)
            ══════════════════════════════════════════════════════════ */}
        <section className="border border-gray-200 dark:border-white/5 rounded-sm p-5 bg-white dark:bg-[#161616] shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-100 dark:divide-white/5">
            {horizontalSlider.map((post, idx) => (
              <div key={idx} className={`group cursor-pointer flex justify-between items-center gap-4 ${idx > 0 ? "pt-4 sm:pt-0 lg:pl-6" : ""}`}>
                <div className="flex-1 min-w-0 space-y-1.5">
                  <span className="text-[9px] font-black text-[#e24e54] uppercase tracking-wider">
                    {post.cat}
                  </span>
                  <h4 className="text-xs font-black leading-snug group-hover:text-[#e24e54] transition-colors text-gray-900 dark:text-white line-clamp-3">
                    <Link href="#">{post.title}</Link>
                  </h4>
                </div>
                <div className="w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 bg-neutral-100 dark:bg-neutral-800 shadow-xs border border-gray-100/50 dark:border-white/5">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: MAIN LAYOUT SPLIT (8/12 Content + 4/12 Sidebar)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── LEFT MAIN CONTENT AREA (66% / Spans 8 cols) ─── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Block A: Featured Stories */}
            <div className="space-y-6">
              <SectionHead title="Featured Stories" viewMoreText="View More" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large main card */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                    <img 
                      src={featuredStoriesMain.img} 
                      alt={featuredStoriesMain.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className={`inline-block ${featuredStoriesMain.catColor} text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm`}>
                      {featuredStoriesMain.cat}
                    </span>
                    <h3 className="text-xl font-black leading-snug group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{featuredStoriesMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <span>By {featuredStoriesMain.author}</span>
                      <span>•</span>
                      <span>{featuredStoriesMain.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><BarChart2 size={11} className="text-[#e24e54]" /> {featuredStoriesMain.views} Views</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {featuredStoriesMain.excerpt}
                    </p>
                    <Link href="#" className="inline-block text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-transparent hover:border-[#e24e54] transition-all pt-1">
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Right side 2x2 grid of small cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {featuredStoriesGrid.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-3">
                      <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                        {post.isVideo && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                            <span className="w-9 h-9 rounded-full bg-[#e24e54] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                              <Play size={14} className="fill-current translate-x-0.5" />
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <span className={`inline-block ${post.catColor} text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm`}>
                          {post.cat}
                        </span>
                        <h4 className="text-xs font-black leading-snug group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors line-clamp-3">
                          <Link href="#">{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related posts bottom row (4 grid cards) */}
              <div className="border-t border-gray-100 dark:border-white/5 pt-6 mt-6">
                <h5 className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-4">Related Posts</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {featuredStoriesRelated.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-2">
                      <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-xs">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <h4 className="text-[11px] font-bold leading-tight group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Centered Banner Ad */}
            <div className="py-2 border-y border-gray-150 dark:border-white/5 flex justify-center bg-gray-50 dark:bg-neutral-900/10 rounded-sm">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Discover-Top.jpg" 
                  alt="Discover Top Banner Ad" 
                  className="h-auto max-w-full rounded-sm"
                />
              </a>
            </div>

            {/* Block B: Technology Section */}
            <div className="space-y-6">
              <SectionHead title="Technology" viewMoreText="View All In Tech" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large main card */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-sm">
                    <img 
                      src={techMain.img} 
                      alt={techMain.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className={`inline-block ${techMain.catColor} text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm`}>
                      {techMain.cat}
                    </span>
                    <h3 className="text-xl font-black leading-snug group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{techMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <span>By {techMain.author}</span>
                      <span>•</span>
                      <span>{techMain.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><BarChart2 size={11} className="text-[#e24e54]" /> {techMain.views} Views</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {techMain.excerpt}
                    </p>
                  </div>
                </div>

                {/* Right side list (4 posts stacked) */}
                <div className="space-y-5">
                  {techList.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="w-[88px] h-[66px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                        {post.isAudio && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/25 text-white">
                            <Volume2 size={16} />
                          </span>
                        )}
                        {post.isVideo && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                            <Play size={12} className="fill-current" />
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5 flex-grow min-w-0">
                        <h4 className="text-xs font-black leading-snug group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors line-clamp-2">
                          <Link href="#">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related posts bottom row (4 grid cards) */}
              <div className="border-t border-gray-100 dark:border-white/5 pt-6 mt-6">
                <h5 className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-4">Related Posts</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {techRelated.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-2">
                      <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                        {post.isVideo && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <span className="w-7 h-7 rounded-full bg-[#e24e54] text-white flex items-center justify-center shadow">
                              <Play size={10} className="fill-current translate-x-0.5" />
                            </span>
                          </span>
                        )}
                      </div>
                      <h4 className="text-[11px] font-bold leading-tight group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ─── STICKY RIGHT SIDEBAR (33% / Spans 4 cols) ─── */}
          <aside className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-24 lg:self-start">
            
            {/* Widget 1: Social Counter Follow */}
            <div className="bg-white dark:bg-[#161616] p-5 rounded-sm border border-gray-100 dark:border-white/5 shadow-xs">
              <SidebarHead title="Follow Us!" />
              <div className="grid grid-cols-2 gap-2 text-white text-xs font-bold font-sans">
                <a href="#" className="flex items-center gap-3 p-3 bg-[#3b5998] hover:opacity-90 transition-opacity rounded-sm">
                  <Facebook size={16} />
                  <div>
                    <div className="text-[9px] font-black uppercase opacity-60 leading-none">Facebook</div>
                    <div className="text-[12px] font-black leading-none mt-1">1.2M</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 bg-[#55acef] hover:opacity-90 transition-opacity rounded-sm">
                  <Twitter size={16} />
                  <div>
                    <div className="text-[9px] font-black uppercase opacity-60 leading-none">Twitter</div>
                    <div className="text-[12px] font-black leading-none mt-1">54K</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 bg-[#c13584] hover:opacity-90 transition-opacity rounded-sm">
                  <Instagram size={16} />
                  <div>
                    <div className="text-[9px] font-black uppercase opacity-60 leading-none">Instagram</div>
                    <div className="text-[12px] font-black leading-none mt-1">120K</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 bg-[#bd081c] hover:opacity-90 transition-opacity rounded-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.98-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.3.12-.34.3-.04.14-.14.2-.28.14-1-.46-1.62-1.92-1.62-3.1 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.46-6.2 7.46-1.21 0-2.35-.63-2.74-1.37 0 0-.6 2.28-.74 2.85-.27 1.04-1 2.35-1.5 3.14 1.13.33 2.3.51 3.53.51 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
                  <div>
                    <div className="text-[9px] font-black uppercase opacity-60 leading-none">Pinterest</div>
                    <div className="text-[12px] font-black leading-none mt-1">80K</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Widget 2: Subscribe newsletter widget */}
            <div className="bg-[#161824] text-white p-6 rounded-sm text-center relative overflow-hidden group shadow-md border border-white/5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#e24e54]/5 rounded-full group-hover:scale-110 transition-transform"></div>
              <Mail size={32} className="mx-auto mb-4 text-[#e24e54] opacity-80" />
              <h3 className="text-sm font-black uppercase tracking-wider mb-2">Subscribe to Updates</h3>
              <p className="text-gray-400 text-[11px] mb-6 max-w-[220px] mx-auto leading-relaxed">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => handleSubscribe(e, email1, setEmail1)} className="space-y-2.5">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  required
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:bg-white focus:text-black rounded-sm transition-all text-center"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#e24e54] text-white text-[11px] font-black uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors rounded-sm shadow-md"
                >
                  Subscribe
                </button>
                <label className="flex items-start gap-2 text-left cursor-pointer pt-1.5">
                  <input type="checkbox" className="mt-0.5 rounded border-white/10 accent-[#e24e54]" required />
                  <span className="text-[9px] text-gray-500 font-bold leading-normal">
                    By signing up, you agree to our terms and our <Link href="#" className="underline hover:text-[#e24e54]">Privacy Policy</Link> agreement.
                  </span>
                </label>
              </form>
            </div>

            {/* Widget 3: What's Hot */}
            <div className="bg-white dark:bg-[#161616] p-5 rounded-sm border border-gray-100 dark:border-white/5 shadow-xs">
              <SidebarHead title="What's Hot" />
              <div className="space-y-4">
                {sidebarWhatsHot.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="w-[72px] h-[54px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-xs">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform" 
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 4: Square Ad Banner */}
            <div className="flex justify-center bg-gray-50 dark:bg-[#161616] p-4 rounded-sm border border-gray-100 dark:border-white/5 shadow-xs">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Woman-Square.jpg" 
                  alt="Square Sidebar Ad" 
                  className="h-auto max-w-full rounded-sm"
                />
              </a>
            </div>

            {/* Widget 5: Trending Now (Numbered list) */}
            <div className="bg-white dark:bg-[#161616] p-5 rounded-sm border border-gray-100 dark:border-white/5 shadow-xs">
              <SidebarHead title="Trending Now" />
              <div className="space-y-4">
                {sidebarTrendingNow.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-4 items-start pb-4 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0">
                    <span className="text-2xl font-black text-gray-200 dark:text-neutral-800 group-hover:text-[#e24e54] transition-colors leading-none italic font-serif">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#e24e54] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase tracking-wider leading-none">
                        <span className="text-[#e24e54] font-black">{post.cat}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"><Eye size={10} /> {post.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </main>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: DARK FULL-WIDTH LIFESTYLE BLOCK
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0f111e] text-white py-14 my-12 border-y border-white/5 select-none">
        <div className="max-w-[1200px] mx-auto px-5">
          <SectionHead title="Lifestyle & Entertainment" viewMoreText="Explore Lifestyle" dark />
          
          <div className="space-y-8">
            {/* Top large horizontal post */}
            <div className="group cursor-pointer flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8">
              <div className="md:w-[480px] aspect-[16/10] shrink-0 rounded-sm overflow-hidden bg-neutral-900 relative shadow-md">
                <img 
                  src={middleListPost.img} 
                  alt={middleListPost.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                />
              </div>
              <div className="flex-1 py-2 space-y-4">
                <span className="inline-block bg-[#e24e54] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  {middleListPost.cat}
                </span>
                <h3 className="text-xl md:text-3xl font-black leading-tight text-white group-hover:text-[#e24e54] transition-colors">
                  <Link href="#">{middleListPost.title}</Link>
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
                  <span>By {middleListPost.author}</span>
                  <span>•</span>
                  <span>{middleListPost.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#e24e54]"><BarChart2 size={11} /> {middleListPost.views} Views</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-2xl">
                  Discover the most captivating bedroom design trends of the year, from minimalist sanctuaries to bold, maximalist retreats that will transform your living space entirely.
                </p>
              </div>
            </div>

            {/* 4 grid small posts below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {middleGridPosts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer space-y-3">
                  <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-900 relative shadow-sm">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    />
                    {post.isVideo && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/20 transition-all">
                        <span className="w-9 h-9 rounded-full bg-[#e24e54] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                          <Play size={14} className="fill-current translate-x-0.5" />
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] text-[#e24e54] font-black uppercase tracking-wider">{post.cat}</span>
                    <h4 className="text-xs font-black leading-snug group-hover:text-[#e24e54] text-white/90 transition-colors line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <DiscoverFooter />

    </div>
  );
}
