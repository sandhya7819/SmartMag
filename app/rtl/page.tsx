"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  ChevronLeft,
  Image as ImageIcon
} from "lucide-react";
import RtlHeader from "@/components/RtlHeader";
import RtlFooter from "@/components/RtlFooter";
import {
  heroMain,
  heroGridSmall,
  latestNewsMain,
  latestNewsList,
  arabWorldMain,
  arabWorldList,
  sidebarMostRead,
  footballPosts,
  techMain,
  techList,
  editorChoicesPosts,
  explorationPosts,
  mixList,
  economyPosts,
  healthPosts,
  socialFollowers
} from "@/lib/rtlData";

/* ═══════════════════════════════════════════
   HELPER COMPONENTS
   ═══════════════════════════════════════════ */

function SectionHead({ title, viewMoreText, viewMoreHref = "#", borderClass = "border-gray-900 dark:border-white/10" }: { title: string; viewMoreText?: string; viewMoreHref?: string; borderClass?: string }) {
  return (
    <div className={`flex items-baseline justify-between border-b-2 mb-6 pb-2.5 ${borderClass}`}>
      <h3 className="text-[15px] font-black uppercase tracking-wide flex items-center gap-2 text-gray-900 dark:text-white">
        <span className="w-[3px] h-[15px] rounded-[1px] bg-[#cf2e2e]" />
        {title}
      </h3>
      {viewMoreText && (
        <Link href={viewMoreHref} className="text-[11px] font-extrabold text-gray-400 hover:text-[#cf2e2e] transition-colors">
          {viewMoreText}
        </Link>
      )}
    </div>
  );
}

function SidebarHead({ title }: { title: string }) {
  return (
    <div className="flex items-baseline border-b-2 border-gray-900 dark:border-white/10 mb-5 pb-2.5">
      <h4 className="text-[13px] font-black uppercase tracking-wide flex items-center gap-2 text-gray-900 dark:text-white">
        <span className="w-[3px] h-[14px] rounded-[1px] bg-[#cf2e2e]" />
        {title}
      </h4>
    </div>
  );
}

export default function RtlPage() {
  const [activeTab, setActiveTab] = useState("الكل");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const handleSubscribe = (e: React.FormEvent, email: string, setEmail: (val: string) => void) => {
    e.preventDefault();
    alert(`شكراً لاشتراكك: ${email}`);
    setEmail("");
  };

  return (
    <div dir="rtl" className="bg-white dark:bg-[#111111] min-h-screen text-gray-800 dark:text-gray-200 font-sans selection:bg-[#cf2e2e] selection:text-white transition-colors duration-300">
      
      {/* Header Component */}
      <RtlHeader />

      <main className="max-w-[1200px] mx-auto px-5 py-8 space-y-12">
        
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO FEATURED GRID A (Type A)
            ══════════════════════════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          
          {/* Main Large Card (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 h-[340px] md:h-[440px] relative rounded-sm overflow-hidden group shadow-md bg-neutral-900">
            <img 
              src={heroMain.img} 
              alt={heroMain.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            
            <div className="absolute bottom-0 right-0 left-0 p-6 space-y-3 text-right">
              <span className="inline-block bg-[#cf2e2e] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                {heroMain.cat}
              </span>
              <h2 className="text-white text-xl md:text-2xl font-black leading-snug group-hover:text-[#cf2e2e] transition-colors">
                <Link href="#">{heroMain.title}</Link>
              </h2>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{heroMain.date}</div>
            </div>
          </div>

          {/* Left Column Stacked 2x2 Grid (4 Small Cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {heroGridSmall.map((post, idx) => (
              <div key={idx} className="h-[160px] md:h-[212px] relative rounded-sm overflow-hidden group shadow-sm bg-neutral-900">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
                
                <div className="absolute bottom-0 right-0 left-0 p-4 space-y-2 text-right">
                  <span className={`text-[9px] font-black uppercase tracking-wider ${post.catColor}`}>
                    {post.cat}
                  </span>
                  <h3 className="text-white text-[13px] md:text-[14px] font-black leading-snug group-hover:text-[#cf2e2e] transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: MAIN LAYOUT SPLIT (8/12 Content + 4/12 Sidebar)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── RIGHT MAIN CONTENT AREA (66% / Spans 8 cols) ─── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Block A: Latest News (جديد الأخبار) */}
            <div className="space-y-6">
              <div className="flex items-baseline justify-between border-b-2 border-gray-900 dark:border-white/10 mb-6 pb-2.5">
                <h3 className="text-[15px] font-black uppercase tracking-wide flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="w-[3px] h-[15px] rounded-[1px] bg-[#cf2e2e]" />
                  جديد الأخبار
                </h3>
                <div className="flex gap-4 text-[11px] font-extrabold text-gray-400">
                  {["الكل", "السياسة", "الصحة", "التكنولوجيا"].map((tab) => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab)}
                      className={`transition-colors pb-2 -mb-[12px] border-b-2 ${activeTab === tab ? "border-[#cf2e2e] text-gray-900 dark:text-white" : "border-transparent hover:text-[#cf2e2e]"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large main featured card */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                    <img 
                      src={latestNewsMain.img} 
                      alt={latestNewsMain.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <span className="inline-block bg-[#cf2e2e] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {latestNewsMain.cat}
                    </span>
                    <h3 className="text-xl font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{latestNewsMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <span>{latestNewsMain.date}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {latestNewsMain.excerpt}
                    </p>
                    <Link href="#" className="inline-block text-xs font-black uppercase tracking-wider text-gray-955 dark:text-white border-b-2 border-transparent hover:border-[#cf2e2e] transition-all pt-1">
                      اقرأ المزيد
                    </Link>
                  </div>
                </div>

                {/* Left list of stacked posts (4 cards) */}
                <div className="space-y-5">
                  {latestNewsList.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0 text-right">
                      <div className="w-[88px] h-[66px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <div className="space-y-1.5 flex-grow min-w-0">
                        <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                          <Link href="#">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Block B: Arab & World Section (العرب والعالم) */}
            <div className="space-y-6">
              <SectionHead title="العرب والعالم" viewMoreText="شاهد المزيد" borderClass="border-[#0693e3]" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large main featured card */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-sm">
                    <img 
                      src={arabWorldMain.img} 
                      alt={arabWorldMain.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <span className="inline-block bg-[#0693e3] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {arabWorldMain.cat}
                    </span>
                    <h3 className="text-xl font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{arabWorldMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <span>{arabWorldMain.date}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {arabWorldMain.excerpt}
                    </p>
                    <Link href="#" className="inline-block text-xs font-black uppercase tracking-wider text-gray-955 dark:text-white border-b-2 border-transparent hover:border-[#cf2e2e] transition-all pt-1">
                      اقرأ المزيد
                    </Link>
                  </div>
                </div>

                {/* Left list of stacked posts (4 cards) */}
                <div className="space-y-5">
                  {arabWorldList.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-100 dark:border-white/5 pb-4 last:border-0 last:pb-0 text-right">
                      <div className="w-[88px] h-[66px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <div className="space-y-1.5 flex-grow min-w-0">
                        <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                          <Link href="#">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Horizontal Advertisement Banner */}
            <div className="py-2 border-y border-gray-150 dark:border-white/5 flex justify-center bg-gray-50 dark:bg-neutral-900/10 rounded-sm">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full overflow-hidden hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/Wide-Top.jpg" 
                  alt="SmartMag RTL Ad" 
                  className="h-auto max-w-full rounded-sm"
                />
              </a>
            </div>

            {/* Block B: Football Section (كرة القدم) */}
            <div className="space-y-6">
              <SectionHead title="كرة القدم" viewMoreText="شاهد المزيد" borderClass="border-[#93c669]" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {footballPosts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer bg-white dark:bg-[#161616] rounded-sm overflow-hidden border border-gray-150 dark:border-white/5 shadow-xs transition-shadow hover:shadow-md">
                    <div className="aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <span className="w-8 h-8 rounded-full bg-[#cf2e2e] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                            <Play size={12} className="fill-current translate-x-[-0.5px]" />
                          </span>
                        </span>
                      )}
                      {post.isGallery && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <span className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center shadow-md">
                            <ImageIcon size={14} />
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-2 text-right">
                      <span className="text-[8px] font-black text-[#cf2e2e] uppercase tracking-wider">{post.cat}</span>
                      <h4 className="text-[12px] font-extrabold leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block C: Technology Section (التكنولوجيا) */}
            <div className="space-y-6">
              <SectionHead title="التكنولوجيا" viewMoreText="الكل في التكنولوجيا" borderClass="border-[#fcb900]" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {techMain.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer bg-white dark:bg-[#161616] rounded-sm overflow-hidden border border-gray-150 dark:border-white/5 shadow-xs">
                    <div className="aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <span className="w-8 h-8 rounded-full bg-[#cf2e2e] text-white flex items-center justify-center shadow">
                            <Play size={12} className="fill-current translate-x-[-0.5px]" />
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-2 text-right">
                      <span className="text-[8px] font-black text-[#cf2e2e] uppercase tracking-wider">{post.cat}</span>
                      <h4 className="text-[12px] font-extrabold leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sub-grid of small tech posts list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-150 dark:border-white/5">
                {techList.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-3.5 items-center text-right">
                    <div className="w-[72px] h-[54px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                      {post.rating && (
                        <div className="absolute bottom-0 right-0 bg-[#cf2e2e] text-white font-extrabold text-[8px] px-1 rounded-sm shadow-xs">
                          {post.rating}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[8px] font-bold text-[#cf2e2e] uppercase">{post.cat}</span>
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block: Editor Choices (إختيار المحرر) */}
            <div className="space-y-6">
              <SectionHead title="إختيار المحرر" viewMoreText="شاهد المزيد" borderClass="border-[#cf2e2e]" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {editorChoicesPosts.slice(0, 3).map((post, idx) => (
                  <div key={idx} className="group cursor-pointer bg-white dark:bg-[#161616] rounded-sm overflow-hidden border border-gray-150 dark:border-white/5 shadow-xs">
                    <div className="aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-4 space-y-2 text-right">
                      <span className="text-[8px] font-black text-[#cf2e2e] uppercase tracking-wider">{post.cat}</span>
                      <h4 className="text-[12px] font-extrabold leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sub-grid of small editor choices posts list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-150 dark:border-white/5">
                {editorChoicesPosts.slice(3, 5).map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-3.5 items-center text-right">
                    <div className="w-[72px] h-[54px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[8px] font-bold text-[#cf2e2e] uppercase">{post.cat}</span>
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block D: Exploration (استكشاف) */}
            <div className="space-y-6">
              <SectionHead title="استكشاف" viewMoreText="شاهد المزيد" borderClass="border-[#00d084]" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {explorationPosts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[3/2] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <span className="w-8 h-8 rounded-full bg-[#cf2e2e] text-white flex items-center justify-center shadow">
                            <Play size={12} className="fill-current translate-x-[-0.5px]" />
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5 text-right">
                      <span className="text-[8px] font-black text-[#cf2e2e] uppercase tracking-wider">{post.cat}</span>
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ─── LEFT STICKY SIDEBAR (33% / Spans 4 cols) ─── */}
          <aside className="lg:col-span-4 space-y-10 lg:pr-4 lg:sticky lg:top-24 lg:self-start">
            
            {/* Widget 1: Social Follow widget */}
            <div className="bg-white dark:bg-[#161616] p-5 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
              <SidebarHead title="إتبعنا" />
              <div className="grid grid-cols-2 gap-2 text-white text-xs font-bold font-sans">
                {socialFollowers.map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`flex items-center gap-3 p-3 ${social.color} hover:opacity-90 transition-opacity rounded-sm text-right`}
                  >
                    <div>
                      <div className="text-[9px] font-black uppercase opacity-70 leading-none">{social.label}</div>
                      {social.count && <div className="text-[12px] font-black leading-none mt-1">{social.count}</div>}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Widget 2: Most Read (الأكثر قراءة) */}
            <div className="bg-white dark:bg-[#161616] p-5 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
              <SidebarHead title="الأكثر قراءة" />
              <div className="space-y-4">
                {sidebarMostRead.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-4 items-start pb-4 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0 text-right">
                    <span className="text-2xl font-black text-gray-200 dark:text-neutral-800 group-hover:text-[#cf2e2e] transition-colors leading-none italic font-serif">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase tracking-wider leading-none">
                        <span className="text-[#cf2e2e] font-black">{post.cat}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Square ad widget */}
            <div className="flex justify-center bg-gray-50 dark:bg-[#161616] p-4 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
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
            SECTION 3: LOWER SPLIT LAYOUT (8/12 Mix Posts + 4/12 Economy)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-150 dark:border-white/5">
          
          {/* Lower Left Column: Mix List (منوعات) */}
          <div className="lg:col-span-8 space-y-6">
            <SectionHead title="منوعات" viewMoreText="شاهد المزيد" borderClass="border-[#0693e3]" />
            
            <div className="space-y-6">
              {mixList.map((post, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col sm:flex-row gap-5 pb-6 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0 text-right">
                  <div className="sm:w-[220px] aspect-[3/2] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    />
                    {post.rating && (
                      <div className="absolute top-2 right-2 bg-[#cf2e2e] text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded-sm shadow-md">
                        {post.rating}%
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <span className="text-[9px] font-black text-[#cf2e2e] uppercase tracking-wider">{post.cat}</span>
                    <h3 className="text-base font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors">
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <div className="text-[10px] text-gray-400 font-bold">{post.date}</div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <button className="bg-gray-100 dark:bg-white/5 hover:bg-[#cf2e2e] hover:text-white text-gray-800 dark:text-gray-300 font-black text-xs uppercase px-8 py-3 rounded-sm transition-all shadow-xs">
                تحميل المزيد
              </button>
            </div>
          </div>

          {/* Lower Right Sidebar: Economy & newsletter */}
          <div className="lg:col-span-4 space-y-10 lg:pr-4">
            
            {/* Economy Block */}
            <div className="bg-white dark:bg-[#161616] p-5 rounded-sm border border-gray-150 dark:border-white/5 shadow-xs">
              <SidebarHead title="الاقتصاد" />
              <div className="space-y-4">
                {economyPosts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-3.5 items-center text-right">
                    <div className="w-[72px] h-[54px] shrink-0 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-xs">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                      {post.isVideo && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <Play size={10} className="text-white fill-current translate-x-[-0.5px]" />
                        </span>
                      )}
                      {post.rating && (
                        <div className="absolute bottom-0 right-0 bg-[#cf2e2e] text-white font-extrabold text-[8px] px-1 rounded-sm shadow-xs">
                          {post.rating}%
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 min-w-0 flex-grow">
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription Card */}
            <div className="bg-[#131627] text-white p-6 rounded-sm text-center relative overflow-hidden group shadow-md border border-white/5">
              <Mail size={32} className="mx-auto mb-4 text-[#cf2e2e]" />
              <h3 className="text-sm font-black uppercase tracking-wider mb-2">مع كل متابعة جديدة</h3>
              <p className="text-gray-400 text-[11px] mb-6 max-w-[220px] mx-auto leading-relaxed">
                اشترك في نشرتنا الإلكترونية مجاناً ليصلك كل جديد في عالم الأخبار والتقارير الحصرية.
              </p>
              <form onSubmit={(e) => handleSubscribe(e, email2, setEmail2)} className="space-y-2.5">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني.." 
                  required
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:bg-white focus:text-black rounded-sm transition-all text-center"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#cf2e2e] text-white text-[11px] font-black uppercase tracking-wider py-3 hover:bg-white hover:text-black transition-colors rounded-sm shadow-md"
                >
                  إشترك
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: HEALTH GRID (صحتك وجمالك)
            ══════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 dark:bg-[#161616] py-10 px-6 rounded-sm border border-gray-150 dark:border-white/5">
          <SectionHead title="صحتك وجمالك" viewMoreText="الكل في صحتك وجمالك" borderClass="border-[#cf2e2e]" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthPosts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer bg-white dark:bg-[#111111] rounded-sm overflow-hidden border border-gray-100 dark:border-white/5 shadow-xs transition-all hover:shadow-md">
                <div className="aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                  {post.rating && (
                    <div className="absolute top-2 right-2 bg-[#cf2e2e] text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded-sm shadow-md">
                      {post.rating}%
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-2 text-right">
                  <span className="text-[8px] font-bold text-[#cf2e2e] uppercase">{post.cat}</span>
                  <h4 className="text-xs font-black leading-snug group-hover:text-[#cf2e2e] text-gray-900 dark:text-white transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h4>
                  <div className="text-[9px] text-gray-400 font-bold">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer Component */}
      <RtlFooter />

    </div>
  );
}
