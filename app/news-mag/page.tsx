"use client";

import React, { useState } from "react";
import Link from "next/link";
import NewsMagHeader from "@/components/NewsMagHeader";
import NewsMagFooter from "@/components/NewsMagFooter";
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
  CheckSquare,
  ChevronRight,
  Star
} from "lucide-react";
import {
  whatsHot,
  techMegaMenu,
  lifestyleMegaMenu,
  heroMain,
  featuredNow,
  latestMain,
  latestList,
  topPosts,
  worldNewsMain,
  worldNewsList,
  worldNewsBottom,
  healthLeftMain,
  healthLeftList,
  healthRightMain,
  healthRightList,
  sportsMain,
  sportsList,
  trendingPosts,
  footerPicks,
  footerPopular,
  socialFollowers
} from "@/lib/newsmagData";

/* ═══════════════════════════════════════════
   HELPER COMPONENTS
   ═══════════════════════════════════════════ */

function SectionHead({ title, viewMoreText, viewMoreHref = "#", borderClass = "border-gray-900 dark:border-white/10" }: { title: string; viewMoreText?: string; viewMoreHref?: string; borderClass?: string }) {
  return (
    <div className={`flex items-baseline justify-between border-b-2 mb-6 pb-2.5 ${borderClass}`}>
      <h3 className="text-[14px] font-black uppercase tracking-wider flex items-center gap-2 text-gray-900 dark:text-white">
        <span className="w-[3px] h-[15px] rounded-[1px] bg-[#2ab391]" />
        {title}
      </h3>
      {viewMoreText && (
        <Link href={viewMoreHref} className="text-[10px] font-black uppercase tracking-wider text-gray-400 hover:text-[#2ab391] transition-colors">
          {viewMoreText}
        </Link>
      )}
    </div>
  );
}

function SidebarHead({ title }: { title: string }) {
  return (
    <div className="flex items-baseline border-b-2 border-gray-900 dark:border-white/10 mb-5 pb-2.5">
      <h4 className="text-[12px] font-black uppercase tracking-wider flex items-center gap-2 text-gray-900 dark:text-white">
        <span className="w-[3px] h-[14px] rounded-[1px] bg-[#2ab391]" />
        {title}
      </h4>
    </div>
  );
}

export default function NewsMagPage() {
  const [email1, setEmail1] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email1}`);
    setEmail1("");
  };

  return (
    <div className="bg-white dark:bg-[#0c0c0c] min-h-screen text-gray-800 dark:text-gray-200 font-sans selection:bg-[#2ab391] selection:text-white transition-colors duration-300">
      
      {/* Header */}
      <NewsMagHeader />

      <main className="max-w-[1200px] mx-auto px-5 py-8 space-y-12">
        
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO CONTAINER (Horizontal split + Sub Grids)
            ══════════════════════════════════════════════════════════ */}
        <section className="space-y-8">
          
          {/* Main Large Split Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-[#141414] p-6 md:p-8 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
            <div className="aspect-[16/10] overflow-hidden rounded-sm relative bg-neutral-900 group cursor-pointer shadow-sm">
              <img 
                src={heroMain.image} 
                alt={heroMain.title} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-700" 
              />
            </div>
            <div className="space-y-4 text-left">
              <span className="inline-block bg-[#2ab391] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                {heroMain.category || "Technology"}
              </span>
              <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-black leading-tight hover:text-[#2ab391] transition-colors cursor-pointer">
                <Link href="#">{heroMain.title}</Link>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                {heroMain.excerpt}
              </p>
              <div className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                {heroMain.date}
              </div>
            </div>
          </div>

          {/* Featured Now list */}
          <div className="space-y-6">
            <SectionHead title="Featured Now" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredNow.map((post, idx) => (
                <div key={idx} className="group cursor-pointer space-y-3">
                  <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[8px] font-black text-[#2ab391] uppercase">{post.category || "General"}</span>
                    <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h4>
                    <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: SPLIT CONTENT (8/12 Main + 4/12 Sticky Sidebar)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── LEFT MAIN CONTENT AREA (66%) ─── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Block: Latest Articles */}
            <div className="space-y-6">
              <SectionHead title="Latest Articles" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Large main card */}
                <div className="md:col-span-7 group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                    <img 
                      src={latestMain.image} 
                      alt={latestMain.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {latestMain.category || "World"}
                    </span>
                    <h3 className="text-lg font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{latestMain.title}</Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {latestMain.excerpt}
                    </p>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{latestMain.date}</div>
                  </div>
                </div>

                {/* List items */}
                <div className="md:col-span-5 space-y-5">
                  {latestList.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="w-[88px] h-[66px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <div className="space-y-1.5 flex-grow min-w-0">
                        <span className="text-[8px] font-black text-[#2ab391] uppercase">{post.category || "World"}</span>
                        <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                          <Link href="#">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date || "Jan 16, 2021"}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Block: Top Posts */}
            <div className="space-y-6">
              <SectionHead title="Top Posts" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topPosts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer bg-white dark:bg-[#141414] rounded-sm overflow-hidden border border-gray-150 dark:border-white/5 shadow-xs hover:shadow-md transition-shadow">
                    <div className="aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <span className="text-[8px] font-black text-[#2ab391] uppercase">{post.category || "General"}</span>
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Ad between sections */}
            <div className="py-2 border-y border-gray-150 dark:border-white/5 flex justify-center bg-gray-50 dark:bg-neutral-900/10 rounded-sm">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/Wide-Top.jpg" 
                  alt="Advertisement Banner" 
                  className="h-auto max-w-full rounded-sm"
                />
              </a>
            </div>

            {/* Block: World News */}
            <div className="space-y-6">
              <SectionHead title="World News" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Large main card */}
                <div className="md:col-span-7 group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                    <img 
                      src={worldNewsMain.image} 
                      alt={worldNewsMain.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {worldNewsMain.category || "World"}
                    </span>
                    <h3 className="text-lg font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{worldNewsMain.title}</Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {worldNewsMain.excerpt}
                    </p>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{worldNewsMain.date}</div>
                  </div>
                </div>

                {/* List items */}
                <div className="md:col-span-5 space-y-5">
                  {worldNewsList.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="w-[88px] h-[66px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <div className="space-y-1.5 flex-grow min-w-0">
                        <span className="text-[8px] font-black text-[#2ab391] uppercase">{post.category || "World"}</span>
                        <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                          <Link href="#">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date || "Jan 12, 2021"}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom separate card */}
              <div className="group cursor-pointer flex flex-col sm:flex-row gap-5 items-center bg-gray-50 dark:bg-[#141414] p-4 rounded-sm border border-gray-150 dark:border-white/5 mt-4 transition-shadow hover:shadow-md">
                <div className="w-full sm:w-[150px] aspect-[4/3] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                  <img src={worldNewsBottom.image} alt={worldNewsBottom.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                </div>
                <div className="space-y-1.5 flex-grow min-w-0 text-left">
                  <span className="text-[8px] font-bold text-[#2ab391] uppercase">{worldNewsBottom.category || "Fashion"}</span>
                  <h3 className="text-sm font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                    <Link href="#">{worldNewsBottom.title}</Link>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    {worldNewsBottom.excerpt}
                  </p>
                  <div className="text-[9px] text-gray-400 font-bold">{worldNewsBottom.date}</div>
                </div>
              </div>
            </div>

            {/* Block: Health & Fitness (Double Symmetric Columns) */}
            <div className="space-y-6">
              <SectionHead title="Health & Fitness" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                
                {/* Column A (Left) */}
                <div className="space-y-6 border-r border-gray-100 dark:border-white/5 pr-0 md:pr-4">
                  <div className="group cursor-pointer space-y-4">
                    <div className="aspect-[16/10] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                      <img src={healthLeftMain.image} alt={healthLeftMain.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block bg-[#2ab391] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        {healthLeftMain.category || "Health"}
                      </span>
                      <h3 className="text-base font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors">
                        <Link href="#">{healthLeftMain.title}</Link>
                      </h3>
                      <div className="text-[9px] text-gray-400 font-bold">{healthLeftMain.date}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {healthLeftList.map((post, idx) => (
                      <div key={idx} className="group cursor-pointer flex gap-3.5 items-center text-left border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                        <div className="w-[72px] h-[54px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                        </div>
                        <div className="space-y-1.5 min-w-0 flex-grow">
                          <span className="text-[8px] font-bold text-[#2ab391] uppercase">{post.category || "Health"}</span>
                          <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                            <Link href="#">{post.title}</Link>
                          </h4>
                          <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column B (Right) */}
                <div className="space-y-6 pr-0 md:pr-4">
                  <div className="group cursor-pointer space-y-4">
                    <div className="aspect-[16/10] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                      <img src={healthRightMain.image} alt={healthRightMain.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block bg-[#2ab391] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        {healthRightMain.category || "Health"}
                      </span>
                      <h3 className="text-base font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors">
                        <Link href="#">{healthRightMain.title}</Link>
                      </h3>
                      <div className="text-[9px] text-gray-400 font-bold">{healthRightMain.date}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {healthRightList.map((post, idx) => (
                      <div key={idx} className="group cursor-pointer flex gap-3.5 items-center text-left border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                        <div className="w-[72px] h-[54px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                        </div>
                        <div className="space-y-1.5 min-w-0 flex-grow">
                          <span className="text-[8px] font-bold text-[#2ab391] uppercase">{post.category || "Fitness"}</span>
                          <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                            <Link href="#">{post.title}</Link>
                          </h4>
                          <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
          
          {/* ─── RIGHT STICKY SIDEBAR (33%) ─── */}
          <aside className="lg:col-span-4 space-y-10 lg:pl-4 lg:sticky lg:top-24 lg:self-start">
            
            {/* Widget 1: Newsletter */}
            <div className="bg-gray-50 dark:bg-[#141414] p-6 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
              <SidebarHead title="Subscribe to Updates" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  className="w-full bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/10 px-4 py-2.5 text-xs text-gray-800 dark:text-white placeholder-gray-400 rounded-sm focus:outline-none focus:border-[#2ab391]"
                />
                <div className="flex items-start gap-2 pt-1 text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>By signing up, you agree to our terms and our <Link href="#" className="underline hover:text-[#2ab391]">Privacy Policy</Link> agreement.</span>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#2ab391] text-white text-xs font-black uppercase py-3 hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors rounded-sm shadow-xs"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Widget 2: Social */}
            <div className="bg-white dark:bg-[#141414] p-5 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
              <SidebarHead title="We Are Social!" />
              <div className="grid grid-cols-2 gap-2 text-white text-xs font-bold font-sans">
                {socialFollowers.map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`flex items-center gap-3 p-3 ${social.color} hover:opacity-90 transition-opacity rounded-sm`}
                  >
                    <div>
                      <div className="text-[9px] font-black uppercase opacity-70 leading-none">{social.label}</div>
                      {social.count && <div className="text-[12px] font-black leading-none mt-1">{social.count}</div>}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Widget 3: Ad */}
            <div className="flex justify-center bg-gray-50 dark:bg-[#141414] p-4 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Woman-Square.jpg" 
                  alt="Sidebar Square Ad" 
                  className="h-auto max-w-full rounded-sm"
                />
              </a>
            </div>

          </aside>

        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: SPORTS ROUNDUP (Full width background panel)
            ══════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 dark:bg-[#141414] py-10 px-6 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
          <SectionHead title="Sports Roundup" viewMoreText="All Sports" borderClass="border-gray-900 dark:border-white/10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left large featured card */}
            <div className="group cursor-pointer space-y-4">
              <div className="aspect-[16/10] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                <img src={sportsMain.image} alt={sportsMain.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  {sportsMain.category || "Sports"}
                </span>
                <h3 className="text-xl font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors">
                  <Link href="#">{sportsMain.title}</Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {sportsMain.excerpt || "Lionel Messi has been selected as one of the popular finalists for the US Soccer Hall of Fame class of 2024."}
                </p>
                <div className="text-[9px] text-gray-400 font-bold">{sportsMain.date}</div>
              </div>
            </div>

            {/* Right stacked lists */}
            <div className="space-y-4">
              {sportsList.map((post, idx) => (
                <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="w-[88px] h-[66px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1 flex-grow min-w-0">
                    <span className="text-[8px] font-black text-[#2ab391] uppercase">{post.category || "Sports"}</span>
                    <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h4>
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: TRENDING NOW (Grid)
            ══════════════════════════════════════════════════════════ */}
        <section className="space-y-6">
          <SectionHead title="Trending Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingPosts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer bg-white dark:bg-[#141414] border border-gray-150 dark:border-white/5 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[8px] font-black text-[#2ab391] uppercase">{post.category || "General"}</span>
                  <h4 className="text-xs font-black leading-snug group-hover:text-[#2ab391] text-gray-900 dark:text-white transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h4>
                  <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <NewsMagFooter />

    </div>
  );
}
