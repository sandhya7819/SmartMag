"use client";

import React, { useState } from "react";
import Link from "next/link";
import CityTodayHeader from "@/components/CityTodayHeader";
import CityTodayFooter from "@/components/CityTodayFooter";
import { 
  Play, 
  Volume2, 
  Clock, 
  User, 
  ChevronRight, 
  ExternalLink,
  MessageSquare,
  TrendingUp,
  Award
} from "lucide-react";
import { 
  heroMain, 
  heroGrid, 
  peoplesFavorite, 
  worldNewsMain, 
  worldNewsList, 
  mostReadSidebar, 
  editorsPicks, 
  dontMissGrid, 
  justInMain, 
  justInList, 
  healthSidebar, 
  trendingSidebar, 
  lifestyleBottom 
} from "@/lib/cityTodayData";

// Circular Rating Indicator (ThemeSphere style)
interface RatingCircleProps {
  score: number; // e.g. 8.9 (out of 10) or 85 (percent)
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
          stroke="#EF4444" // red-500
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

export default function CityTodayPage() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

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
    <main className="min-h-screen bg-white font-sans text-[#222] selection:bg-red-600 selection:text-white">
      {/* CityToday Header */}
      <CityTodayHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        
        {/* SECTION 1: Hero Split (Lifestyle Featured + 3 Grid + People's Favorite) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Left Column: Big Overlay Featured + 3 Columns Below */}
          <div className="lg:col-span-8 space-y-8 lg:sticky lg:top-[80px]">
            {/* Large Overlay Post */}
            <article className="group cursor-pointer relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.5] lg:aspect-[16/8] overflow-hidden bg-gray-900 rounded-sm">
              <img 
                src={heroMain.img} 
                alt={heroMain.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-75 transition-all duration-[1.5s] ease-out"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 space-y-3.5">
                <span className="inline-block bg-red-600 text-white px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-sm">
                  {heroMain.cat}
                </span>
                <h2 className="text-xl md:text-3.5xl font-black text-white leading-tight font-serif tracking-tight group-hover:text-red-500 transition-colors duration-300">
                  <Link href="/city-today">{heroMain.title}</Link>
                </h2>
                <div className="flex items-center gap-4 text-[9px] font-bold text-gray-300 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 shrink-0">
                    <img src={heroMain.authorImg} alt={heroMain.author} className="w-5 h-5 rounded-full object-cover" />
                    {heroMain.author}
                  </span>
                  <span>•</span>
                  <span>{heroMain.date}</span>
                </div>
              </div>
            </article>

            {/* 3 Grid Posts Below Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {heroGrid.map((post, idx) => (
                <article key={idx} className="group cursor-pointer space-y-3">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm relative">
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                      {post.cat}
                    </div>
                    <h3 className="text-sm font-black text-black leading-snug font-serif line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                      <Link href="/city-today">{post.title}</Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: People's Favorite List */}
          <div className="lg:col-span-4 lg:pl-4 space-y-6 lg:sticky lg:top-[80px] self-start">
            <div className="border-b-2 border-black pb-2 flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#111] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                People's Favorite
              </h4>
            </div>

            <div className="divide-y divide-gray-100 space-y-5">
              {peoplesFavorite.map((post, idx) => (
                <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-5" : ""}`}>
                  <div className="flex-1 space-y-1">
                    <div className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                      {post.cat}
                    </div>
                    <h5 className="text-[13px] font-black text-black font-serif leading-snug line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                      <Link href="/city-today">{post.title}</Link>
                    </h5>
                    <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={9} /> {post.readTime}</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded-full bg-gray-50 aspect-square">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Top Banner Ad (Wide) */}
        <section className="w-full flex justify-center py-6 border-t border-b border-gray-100 my-8 bg-gray-50/50">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block max-w-[970px] hover:opacity-95 transition-opacity">
            <img 
              src="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/CityToday-Top.jpg" 
              alt="Theme Purchase Ad" 
              className="w-full object-contain max-h-[110px]"
            />
          </a>
        </section>

        {/* SECTION 3: World News Block (Left) & Sidebar (Right) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          
          {/* Left Column: World News & Editor's Picks */}
          <div className="lg:col-span-8 space-y-12 lg:sticky lg:top-[80px]">
            
            {/* World News Block */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  World News
                </h4>
              </div>

              {/* Sub-split: Left Big Card, Right Small List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Big Card */}
                <article className="group cursor-pointer space-y-4">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm">
                    <img 
                      src={worldNewsMain.img} 
                      alt={worldNewsMain.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                      {worldNewsMain.cat}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-black font-serif leading-snug group-hover:text-red-600 transition-colors duration-300">
                      <Link href="/city-today">{worldNewsMain.title}</Link>
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {worldNewsMain.excerpt}
                    </p>
                    <div className="text-[9px] text-gray-400 font-bold uppercase">{worldNewsMain.date}</div>
                  </div>
                </article>

                {/* Right Small List */}
                <div className="divide-y divide-gray-100 space-y-4">
                  {worldNewsList.map((post, idx) => (
                    <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-4" : ""}`}>
                      <div className="w-24 h-18 shrink-0 overflow-hidden rounded-sm bg-gray-100 aspect-[4/3] relative">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                        {post.isVideo && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md">
                              <Play size={10} fill="currentColor" className="ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="text-xs font-black text-black font-serif leading-snug line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                          <Link href="/city-today">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor's Picks Section */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Editor's Picks
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {editorsPicks.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {post.isAudio && (
                        <div className="absolute bottom-2 right-2 bg-black/60 p-1.5 rounded-sm text-white flex items-center justify-center">
                          <Volume2 size={12} />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                        {post.cat}
                      </div>
                      <h3 className="text-sm font-black text-black leading-snug font-serif line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                        <Link href="/city-today">{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Don't Miss! Section */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Don't Miss
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dontMissGrid.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {post.rating && (
                        <div className="absolute bottom-2 right-2">
                          <RatingCircle score={post.rating} isPercent />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                        {post.cat}
                      </div>
                      <h3 className="text-xs font-black text-black font-serif leading-snug line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                        <Link href="/city-today">{post.title}</Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar (Most Read reviews + Social widget) */}
          <div className="lg:col-span-4 lg:pl-4 space-y-10 lg:sticky lg:top-[80px] self-start">
            
            {/* Most Read circular scores widget */}
            <div className="space-y-6 bg-gray-50/50 p-6 rounded-sm border border-gray-100">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Most Read
                </h4>
              </div>

              <div className="divide-y divide-gray-100 space-y-5">
                {mostReadSidebar.map((post, idx) => (
                  <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-5" : ""}`}>
                    <div className="w-20 h-15 shrink-0 overflow-hidden rounded-sm bg-gray-100 relative aspect-[4/3]">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                      {post.rating && (
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <RatingCircle score={post.rating} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h5 className="text-[13px] font-black text-black font-serif leading-snug line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                        <Link href="/city-today">{post.title}</Link>
                      </h5>
                      <span className="text-[9px] text-gray-400 font-bold uppercase block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* We Are Social! Follow widget */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  We Are Social!
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <a href="#" className="flex items-center gap-3.5 bg-[#3B5998]/5 hover:bg-[#3B5998]/10 text-[#3B5998] p-3 rounded-sm border border-[#3B5998]/10 hover:border-[#3B5998]/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#3B5998] text-white flex items-center justify-center shrink-0">
                    <span className="font-black text-sm">F</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#111]">Facebook</div>
                    <div className="text-[9px] text-gray-400 font-bold">1.1K Fans</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3.5 bg-[#1DA1F2]/5 hover:bg-[#1DA1F2]/10 text-[#1DA1F2] p-3 rounded-sm border border-[#1DA1F2]/10 hover:border-[#1DA1F2]/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shrink-0">
                    <span className="font-black text-sm">T</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#111]">Twitter</div>
                    <div className="text-[9px] text-gray-400 font-bold">68.9K Followers</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3.5 bg-[#E1306C]/5 hover:bg-[#E1306C]/10 text-[#E1306C] p-3 rounded-sm border border-[#E1306C]/10 hover:border-[#E1306C]/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#E1306C] text-white flex items-center justify-center shrink-0">
                    <span className="font-black text-sm">I</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#111]">Instagram</div>
                    <div className="text-[9px] text-gray-400 font-bold">46.4K Followers</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3.5 bg-[#FF0000]/5 hover:bg-[#FF0000]/10 text-[#FF0000] p-3 rounded-sm border border-[#FF0000]/10 hover:border-[#FF0000]/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center shrink-0">
                    <span className="font-black text-sm">Y</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#111]">YouTube</div>
                    <div className="text-[9px] text-gray-400 font-bold">105K Subs</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Sidebar ad banner */}
            <div className="border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener">
                <img 
                  src="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/CityToday-Side.jpg" 
                  alt="Side Ad Banner" 
                  className="w-full object-contain"
                />
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 4: Just In Layout (Left Main split, right Health lists & Trending) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          
          {/* Left Column: Just In main + Lifestyle grids */}
          <div className="lg:col-span-8 space-y-12 lg:sticky lg:top-[80px]">
            
            {/* Just In block */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Just In
                </h4>
              </div>

              {/* Sub-split: Large overlay left, list cards right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Large Overlay Post */}
                <article className="group cursor-pointer relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-900 rounded-sm min-h-[350px] flex flex-col justify-end">
                  <img 
                    src={justInMain.img} 
                    alt={justInMain.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-70 transition-all duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="relative z-10 p-6 space-y-2.5">
                    <span className="inline-block bg-red-600 text-white px-2.5 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm">
                      {justInMain.cat}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-white font-serif leading-tight group-hover:text-red-500 transition-colors duration-300">
                      <Link href="/city-today">{justInMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[9px] text-gray-300 font-bold uppercase">
                      <span>By {justInMain.author}</span>
                      <span>•</span>
                      <span>{justInMain.date}</span>
                    </div>
                  </div>
                </article>

                {/* List cards right */}
                <div className="divide-y divide-gray-100 space-y-4">
                  {justInList.map((post, idx) => (
                    <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-4" : ""}`}>
                      <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm bg-gray-100 aspect-square">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="text-[9px] font-black text-red-600 uppercase tracking-widest">{post.cat}</div>
                        <h4 className="text-xs font-black text-black font-serif leading-snug line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                          <Link href="/city-today">{post.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Wide Banner Ad */}
            <div className="w-full flex justify-center py-2 border-t border-b border-gray-100 my-6 bg-gray-50/50">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block max-w-[728px] hover:opacity-95 transition-opacity">
                <img 
                  src="https://smartmag.theme-sphere.com/city-today/wp-content/uploads/sites/41/2023/11/CityToday-Bottom.png" 
                  alt="Theme Purchases Ad" 
                  className="w-full object-contain max-h-[160px]"
                />
              </a>
            </div>

            {/* Lifestyle Section */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Lifestyle
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {lifestyleBottom.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[16/9] overflow-hidden bg-gray-100 rounded-sm">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                        {post.cat}
                      </span>
                      <h3 className="text-sm font-black text-black leading-snug font-serif line-clamp-3 group-hover:text-red-600 transition-colors duration-300">
                        <Link href="/city-today">{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Health side widget + Trending + Subscription */}
          <div className="lg:col-span-4 lg:pl-4 space-y-12 lg:sticky lg:top-[80px] self-start">
            
            {/* Health Widget */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Health
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {healthSidebar.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-2">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.isVideo && (
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <Play size={14} fill="white" className="text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xs font-black text-black leading-snug font-serif line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                      <Link href="/city-today">{post.title}</Link>
                    </h3>
                  </article>
                ))}
              </div>
            </div>

            {/* Trending Widget */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
                  Trending
                </h4>
              </div>

              <div className="divide-y divide-gray-100 space-y-5">
                {trendingSidebar.map((post, idx) => (
                  <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-5" : ""}`}>
                    <div className="w-18 h-18 shrink-0 overflow-hidden rounded-full bg-gray-50 aspect-square">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <div className="text-[9px] font-black text-red-600 uppercase tracking-widest">{post.cat}</div>
                      <h5 className="text-xs font-black text-black font-serif leading-snug line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                        <Link href="/city-today">{post.title}</Link>
                      </h5>
                      <span className="text-[9px] text-gray-400 font-bold block">{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter form widget */}
            <div id="subscribe" className="bg-[#111] text-white p-8 rounded-sm border border-white/5 relative overflow-hidden group shadow-xl">
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none transform group-hover:scale-110 transition-transform duration-[2s]">
                <Award size={180} />
              </div>
              <div className="relative z-10 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-lg font-black uppercase tracking-widest text-red-600 font-serif">Subscribe to Updates</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Get the latest creative news from FooBar about art, design and business.
                  </p>
                </div>
                {newsletterSubscribed ? (
                  <div className="p-4 bg-green-900/20 border border-green-800/30 text-green-400 text-xs font-bold rounded-sm text-center">
                    Thank you! You have subscribed successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3.5">
                    <input 
                      type="email" 
                      placeholder="Your email address.." 
                      required 
                      value={subscribedEmail}
                      onChange={(e) => setSubscribedEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-red-600 transition-colors rounded-sm"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs py-3.5 transition-colors rounded-sm"
                    >
                      Subscribe
                    </button>
                    <label className="flex items-start gap-2.5 cursor-pointer mt-2 text-[10px] text-gray-400 leading-relaxed">
                      <input type="checkbox" required className="mt-0.5 accent-red-600" />
                      <span>By signing up, you agree to our terms and our Privacy Policy agreement.</span>
                    </label>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* CityToday Footer */}
      <CityTodayFooter />
    </main>
  );
}
