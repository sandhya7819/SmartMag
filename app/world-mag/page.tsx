"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Play, 
  Volume2, 
  Music, 
  Clock, 
  User, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink,
  MessageSquare,
  Flame,
  Eye,
  TrendingUp,
  Mail,
  Award,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";
import WorldMagHeader from "@/components/WorldMagHeader";
import WorldMagFooter from "@/components/WorldMagFooter";
import { 
  tickerCarousel,
  highlightsMain,
  highlightsGrid,
  sidebarMain,
  sidebarList,
  worldNewsMain,
  worldNewsList,
  morningsMain,
  morningsGrid,
  lifestyleList,
  dontMissSidebar,
  topStoriesSidebar,
  reviewsGrid,
  travelMain,
  travelGrid,
  techHighlightsMain,
  techHighlightsSmall,
  fitnessGrid
} from "@/lib/worldMagData";

// Rating Circle Badge Component
interface RatingCircleProps {
  score: number;
  isPercent?: boolean;
}
function RatingCircle({ score, isPercent = false }: RatingCircleProps) {
  const percent = isPercent ? score : score * 10;
  const radius = 20.5;
  const circumference = 2 * Math.PI * radius; // 128.805
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <div className="relative w-11 h-11 flex items-center justify-center bg-black/60 rounded-full select-none text-white shrink-0">
      <svg className="absolute -rotate-90 transform" width="44" height="44">
        {/* Track circle */}
        <circle 
          fill="transparent" 
          stroke="rgba(255, 255, 255, 0.15)" 
          strokeWidth="3" 
          r={radius} 
          cx="22" 
          cy="22" 
        />
        {/* Progress circle */}
        <circle 
          fill="transparent" 
          stroke="#2ab391" 
          strokeWidth="3" 
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={radius} 
          cx="22" 
          cy="22" 
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="text-[11px] font-black tracking-tighter z-10">
        {score}{isPercent && "%"}
      </span>
    </div>
  );
}

export default function WorldMagPage() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Auto scroll ticker every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleTickerNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [tickerIndex]);

  const handleTickerPrev = () => {
    setTickerIndex((prev) => (prev === 0 ? tickerCarousel.length - 4 : prev - 1));
  };

  const handleTickerNext = () => {
    setTickerIndex((prev) => (prev >= tickerCarousel.length - 4 ? 0 : prev + 1));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setSubscribedEmail("");
      }, 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-[#222] font-sans selection:bg-[#2ab391] selection:text-white">
      {/* Header */}
      <WorldMagHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-8 space-y-12">

        {/* SECTION 1: Top Carousel Ticker */}
        <section className="relative bg-[#0d0f17] text-white p-6 rounded-sm shadow-md overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2ab391] flex items-center gap-1.5">
              <Flame size={12} className="text-[#2ab391]" /> Trending Today
            </h4>
            <div className="flex items-center space-x-1.5">
              <button 
                onClick={handleTickerPrev}
                className="w-6 h-6 rounded-sm bg-white/5 hover:bg-[#2ab391] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Previous posts"
              >
                <ChevronLeft size={14} />
              </button>
              <button 
                onClick={handleTickerNext}
                className="w-6 h-6 rounded-sm bg-white/5 hover:bg-[#2ab391] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Next posts"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Sliding container */}
          <div className="relative overflow-hidden w-full h-[76px]">
            <div 
              className="absolute top-0 left-0 flex transition-transform duration-500 ease-out"
              style={{ 
                width: `${(tickerCarousel.length / 4) * 100}%`,
                transform: `translateX(-${(tickerIndex * (100 / tickerCarousel.length)) * 4 / 4}%)` 
              }}
            >
              {tickerCarousel.map((post, idx) => (
                <div 
                  key={idx} 
                  className="w-1/4 shrink-0 px-2 flex gap-3 group cursor-pointer"
                  style={{ width: "25%" }}
                >
                  <div className="w-16 h-12 rounded-sm overflow-hidden bg-white/10 shrink-0 relative aspect-[4/3]">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11px] font-bold text-gray-200 hover:text-[#2ab391] transition-colors leading-snug line-clamp-2">
                      <Link href="/world-mag">{post.title}</Link>
                    </h5>
                    <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mt-0.5 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION 2: Highlights Split (66% left, 33% right) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Highlights + Grid) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-6">
              {/* Main highlights post */}
              <div className="group cursor-pointer space-y-4">
                <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                  <img 
                    src={highlightsMain.img} 
                    alt={highlightsMain.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-widest">{highlightsMain.cat}</span>
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight hover:text-[#2ab391] transition-colors">
                    <Link href="/world-mag">{highlightsMain.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{highlightsMain.excerpt}</p>
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase pt-1">
                    <span className="flex items-center gap-1"><User size={10} /> {highlightsMain.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {highlightsMain.date}</span>
                  </div>
                </div>
              </div>

              {/* Under-grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                {highlightsGrid.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-2.5">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug line-clamp-3 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <span className="text-[8px] text-gray-400 font-bold block uppercase">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              {/* Heading */}
              <div className="border-b-2 border-gray-100 pb-2.5">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Latest Features</h4>
              </div>

              {/* Main sidebar post */}
              <div className="group cursor-pointer space-y-3 pb-4 border-b border-gray-100">
                <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                  <img 
                    src={sidebarMain.img} 
                    alt={sidebarMain.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{sidebarMain.cat}</span>
                  <h3 className="text-sm font-black text-gray-900 leading-snug hover:text-[#2ab391] transition-colors">
                    <Link href="/world-mag">{sidebarMain.title}</Link>
                  </h3>
                  <span className="text-[8px] text-gray-400 font-bold block uppercase">{sidebarMain.date}</span>
                </div>
              </div>

              {/* Sidebar list items */}
              <div className="space-y-4">
                {sidebarList.map((post, idx) => (
                  <div key={idx} className="flex gap-3 group cursor-pointer">
                    <div className="w-14 h-14 bg-gray-100 rounded-sm overflow-hidden shrink-0 relative aspect-square">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <h4 className="text-[11px] font-bold text-gray-800 leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <span className="text-[8px] text-gray-400 font-semibold uppercase mt-0.5 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: Large Ad Banner (Envato Affiliate placeholder) */}
        <section className="flex justify-center border-y border-gray-200/50 py-4">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="hover:opacity-95 transition-opacity">
            <img 
              src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/Discover-Top.jpg" 
              alt="Discover Top Ad Banner" 
              className="max-w-full h-auto object-contain rounded-sm"
            />
          </a>
        </section>


        {/* SECTION 4: World News / Mornings / Lifestyle vs Right Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (World News + Overlay + Lifestyle) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* World News */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">World News</h4>
                <Link href="/world-mag" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#2ab391] border border-gray-200 hover:border-[#2ab391] px-3 py-1 rounded-full transition-all">View More</Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left inner column (Main post - Title above image) */}
                <div className="group cursor-pointer flex flex-col justify-between">
                  <div className="space-y-2 mb-4">
                    <h3 className="text-lg md:text-xl font-extrabold text-gray-900 leading-snug hover:text-[#2ab391] transition-colors">
                      <Link href="/world-mag">{worldNewsMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-2 text-[8px] text-gray-400 font-bold uppercase">
                      <span>{worldNewsMain.author}</span>
                      <span>•</span>
                      <span>{worldNewsMain.date}</span>
                    </div>
                  </div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 rounded-sm mb-4">
                    <img 
                      src={worldNewsMain.img} 
                      alt={worldNewsMain.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{worldNewsMain.excerpt}</p>
                </div>

                {/* Right inner column (List) */}
                <div className="space-y-6">
                  {worldNewsList.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-3">
                      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                        <h4 className="text-xs md:text-sm font-extrabold text-gray-800 leading-snug hover:text-[#2ab391] transition-colors">
                          <Link href="/world-mag">{post.title}</Link>
                        </h4>
                        <span className="text-[8px] text-gray-400 font-bold block uppercase">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mid Ad Banner */}
            <div className="flex justify-center">
              <a href="#" className="hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/world-mag/wp-content/uploads/sites/43/2023/11/Bottom-mid.jpg" 
                  alt="Mid Ad Banner" 
                  className="max-w-full h-auto object-contain rounded-sm"
                />
              </a>
            </div>

            {/* WMag Mornings (Overlay post + grid) */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">WMag Mornings</h4>
              </div>

              {/* Big overlay card */}
              <div className="relative group cursor-pointer aspect-[16/9] w-full overflow-hidden rounded-sm bg-gray-900 shadow-md">
                <img 
                  src={morningsMain.img} 
                  alt={morningsMain.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-102 group-hover:opacity-75 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-white pointer-events-none">
                  <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest bg-black/40 px-2.5 py-1 rounded-sm">{morningsMain.cat}</span>
                  <h3 className="text-lg md:text-2xl font-black leading-tight pointer-events-auto hover:text-[#2ab391] transition-colors pt-2">
                    <Link href="/world-mag">{morningsMain.title}</Link>
                  </h3>
                  <div className="flex items-center gap-3 text-[9px] text-gray-300 font-semibold uppercase pt-1">
                    <span>By {morningsMain.author}</span>
                    <span>•</span>
                    <span>{morningsMain.date}</span>
                  </div>
                </div>
              </div>

              {/* Under grid-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {morningsGrid.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-2.5">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <span className="w-9 h-9 rounded-full bg-white/95 text-[#2ab391] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"><Play size={14} fill="currentColor" className="ml-0.5" /></span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug line-clamp-3 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <span className="text-[8px] text-gray-400 font-bold block uppercase">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Lifestyle */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">The Lifestyle</h4>
                <Link href="/world-mag" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#2ab391] border border-gray-200 hover:border-[#2ab391] px-3 py-1 rounded-full transition-all">View More</Link>
              </div>

              {/* List loops */}
              <div className="space-y-6">
                {lifestyleList.map((post, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-5 group cursor-pointer pb-6 border-b border-gray-100 last:pb-0 last:border-0">
                    <div className="w-full sm:w-[240px] aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm shrink-0 relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.isAudio && (
                        <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-white p-1 rounded-sm flex items-center justify-center">
                          <Music size={12} />
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                      <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                      <h3 className="text-sm md:text-base font-extrabold text-gray-900 leading-snug hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-[8px] text-gray-400 font-bold uppercase pt-0.5">
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

          {/* Right Column (Sidebar: Don't Miss + Top Stories + Ad) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8">
            {/* Don't Miss! */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              <div className="border-b-2 border-gray-100 pb-2.5">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Don't Miss!</h4>
              </div>

              <div className="space-y-4">
                {dontMissSidebar.map((post, idx) => (
                  <div key={idx} className="flex gap-3.5 group cursor-pointer">
                    <div className="w-14 h-14 bg-gray-100 rounded-sm overflow-hidden shrink-0 relative aspect-square">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col justify-center space-y-1">
                      <h4 className="text-[11px] font-extrabold text-gray-800 leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-2 text-[8px] text-gray-400 font-bold">
                        <span className="flex items-center gap-0.5 text-orange-500"><Flame size={9} /> {post.views} Views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Stories (Numbered Grid) */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              <div className="border-b-2 border-gray-100 pb-2.5">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Top Stories</h4>
              </div>

              <div className="space-y-5">
                {topStoriesSidebar.map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer relative pl-10">
                    {/* Big number counter */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 text-gray-400 group-hover:border-[#2ab391] group-hover:bg-[#2ab391] group-hover:text-white flex items-center justify-center font-black text-xs transition-all duration-300">
                      {idx + 1}
                    </div>
                    
                    <div className="w-14 h-14 bg-gray-100 rounded-sm overflow-hidden shrink-0 relative aspect-square">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.isVideo && (
                        <div className="absolute bottom-1 right-1 bg-black/60 p-0.5 text-white rounded-sm flex items-center justify-center">
                          <Play size={8} fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <h4 className="text-[11px] font-bold text-gray-800 leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <span className="text-[8px] text-gray-400 font-semibold uppercase mt-0.5 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Ad */}
            <div className="bg-white p-2 border border-gray-100 rounded-sm shadow-sm flex justify-center">
              <a href="#" className="hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/world-mag/wp-content/uploads/sites/43/2023/11/CityToday-Side.jpg" 
                  alt="CityToday Side Ad" 
                  className="max-w-full h-auto object-contain rounded-sm"
                />
              </a>
            </div>
          </div>
        </section>


        {/* SECTION 5: Dark Newsletter Banner (Full Width) */}
        <section className="bg-gradient-to-r from-[#0d0d17] via-[#101428] to-[#1c1322] text-white p-8 md:p-12 rounded-sm shadow-xl flex flex-col md:flex-row items-center gap-8">
          {/* Left panel */}
          <div className="flex-1 space-y-5">
            <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-widest flex items-center gap-1.5"><Sparkles size={11} /> Stay Updated</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-none text-white">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-lg">
              Get the latest hand selected news from FooBar about art, design, politics and business. We do not spam and/or send unsolicited emails.
            </p>
            <div className="pt-2">
              {newsletterSubscribed ? (
                <div className="bg-[#2ab391]/10 border border-[#2ab391]/30 text-[#2ab391] p-3 text-xs font-bold rounded-sm animate-fade-in">
                  Thank you! You have successfully subscribed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex max-w-md">
                    <input 
                      type="email" 
                      placeholder="Your email address.." 
                      required 
                      value={subscribedEmail}
                      onChange={(e) => setSubscribedEmail(e.target.value)}
                      className="bg-white/5 border border-white/10 focus:border-[#2ab391] px-4 py-2.5 text-xs text-white placeholder-white/30 rounded-l-sm outline-none flex-1 min-w-0"
                    />
                    <button 
                      type="submit" 
                      className="bg-[#2ab391] hover:bg-[#239579] text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-colors rounded-r-sm shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer text-[10px] text-gray-500 leading-tight">
                    <input type="checkbox" required className="mt-0.5 rounded-sm bg-black border-white/15 text-[#2ab391] focus:ring-0 focus:ring-offset-0" />
                    <span>By signing up, you agree to our terms and our privacy policy agreements.</span>
                  </label>
                </form>
              )}
            </div>
          </div>

          {/* Right panel */}
          <div className="w-[200px] md:w-[280px] shrink-0">
            <img 
              src="https://smartmag.theme-sphere.com/world-mag/wp-content/uploads/sites/43/2023/11/team.png" 
              alt="WorldMag Team" 
              className="w-full h-auto object-contain"
            />
          </div>
        </section>


        {/* SECTION 6: Dark Review Grid block (Full Width) */}
        <section className="bg-[#0b0c11] text-white p-6 md:p-8 rounded-sm shadow-md space-y-6">
          <div className="border-b border-white/5 pb-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#2ab391] relative after:absolute after:bottom-[-13px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Review Spotlight</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {reviewsGrid.map((post, idx) => (
              <div key={idx} className="group cursor-pointer space-y-3 relative">
                <div className="aspect-square w-full overflow-hidden bg-white/5 rounded-sm relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  {post.rating && (
                    <div className="absolute bottom-2.5 right-2.5">
                      <RatingCircle score={post.rating} isPercent={post.isPercent} />
                    </div>
                  )}
                  {post.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                      <span className="w-8 h-8 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"><Play size={12} fill="currentColor" className="ml-0.5" /></span>
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                  <h4 className="text-xs font-bold text-gray-200 leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                    <Link href="/world-mag">{post.title}</Link>
                  </h4>
                  <span className="text-[8px] text-gray-500 font-bold block uppercase">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 7: Travel / Tech vs Fitness */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Travel + Tech) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Travel & Tourism */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Travel &amp; Tourism</h4>
              </div>

              {/* Main post */}
              <div className="group cursor-pointer space-y-4 pb-6 border-b border-gray-100">
                <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                  <img 
                    src={travelMain.img} 
                    alt={travelMain.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest">{travelMain.cat}</span>
                  <h3 className="text-lg md:text-2xl font-black text-gray-900 leading-snug hover:text-[#2ab391] transition-colors">
                    <Link href="/world-mag">{travelMain.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{travelMain.excerpt}</p>
                </div>
              </div>

              {/* Under grid-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {travelGrid.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-2.5">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug line-clamp-3 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <span className="text-[8px] text-gray-400 font-bold block uppercase">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Science & Tech (Mixed Highlights) */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Science &amp; Tech</h4>
              </div>

              {/* Two columns main mixed highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techHighlightsMain.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-4">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[8px] font-black uppercase text-[#2ab391] tracking-widest block">{post.cat}</span>
                      <h3 className="text-sm md:text-base font-extrabold text-gray-900 leading-snug hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-[8px] text-gray-400 font-bold uppercase pt-0.5">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"><MessageSquare size={10} /> {post.comments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Small posts row under mixed highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                {techHighlightsSmall.map((post, idx) => (
                  <div key={idx} className="flex gap-3 group cursor-pointer">
                    <div className="w-14 h-14 bg-gray-100 rounded-sm overflow-hidden shrink-0 relative aspect-square">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <h4 className="text-[11px] font-bold text-gray-800 leading-snug line-clamp-2 hover:text-[#2ab391] transition-colors">
                        <Link href="/world-mag">{post.title}</Link>
                      </h4>
                      <span className="text-[8px] text-gray-400 font-semibold uppercase mt-0.5 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar: Fitness + Social follow + Ad banner) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8">
            
            {/* Fitness Grid */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              <div className="border-b-2 border-gray-100 pb-2.5">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">Fitness</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {fitnessGrid.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-2">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-[10px] font-bold text-gray-800 leading-snug line-clamp-3 hover:text-[#2ab391] transition-colors">
                      <Link href="/world-mag">{post.title}</Link>
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Tall Banner Ad (300x600) */}
            <div className="bg-white p-2 border border-gray-100 rounded-sm shadow-sm flex justify-center">
              <a href="#" className="hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/world-mag/wp-content/uploads/sites/43/2023/11/Tall-Woman.jpg" 
                  alt="Tall Woman Side Ad" 
                  className="max-w-full h-auto object-contain rounded-sm"
                />
              </a>
            </div>

            {/* We Are Social */}
            <div className="bg-white p-5 border border-gray-100 rounded-sm shadow-sm space-y-5">
              <div className="border-b-2 border-gray-100 pb-2.5">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#2ab391]">We Are Social</h4>
              </div>

              {/* Social boxes grid */}
              <div className="grid grid-cols-2 gap-3.5 text-xs text-white">
                <a href="#" className="bg-[#1877f2] hover:opacity-90 transition-opacity p-3 rounded-sm flex items-center gap-3">
                  <Facebook size={16} fill="currentColor" />
                  <div>
                    <div className="font-bold text-[11px]">1.1K</div>
                    <div className="text-[8px] uppercase tracking-wider text-white/70">Fans</div>
                  </div>
                </a>
                <a href="#" className="bg-[#1da1f2] hover:opacity-90 transition-opacity p-3 rounded-sm flex items-center gap-3">
                  <Twitter size={16} fill="currentColor" />
                  <div>
                    <div className="font-bold text-[11px]">68.9K</div>
                    <div className="text-[8px] uppercase tracking-wider text-white/70">Followers</div>
                  </div>
                </a>
                <a href="#" className="bg-[#e1306c] hover:opacity-90 transition-opacity p-3 rounded-sm flex items-center gap-3">
                  <Instagram size={16} />
                  <div>
                    <div className="font-bold text-[11px]">46.4K</div>
                    <div className="text-[8px] uppercase tracking-wider text-white/70">Followers</div>
                  </div>
                </a>
                <a href="#" className="bg-[#ff0000] hover:opacity-90 transition-opacity p-3 rounded-sm flex items-center gap-3">
                  <Youtube size={16} fill="currentColor" />
                  <div>
                    <div className="font-bold text-[11px]">105K</div>
                    <div className="text-[8px] uppercase tracking-wider text-white/70">Subscribers</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </section>

      </div>

      {/* Footer */}
      <WorldMagFooter />
    </main>
  );
}
