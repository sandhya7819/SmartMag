"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import EverydayNewsHeader from "@/components/EverydayNewsHeader";
import EverydayNewsFooter from "@/components/EverydayNewsFooter";
import { 
  Play, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  User, 
  TrendingUp, 
  Mail, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  TrendingDown,
  BarChart2,
  Calendar,
  Layers,
  Heart,
  Volume2
} from "lucide-react";
import { 
  topOverlayPost, 
  heroList, 
  trendingPosts, 
  worldNewsMain, 
  worldNewsGrid, 
  middleFeed, 
  sidebarFeatured, 
  sidebarDontMiss, 
  fashionMain, 
  fashionGrid, 
  politicsMain, 
  politicsGrid, 
  techFeatured, 
  techGrid, 
  everydayFeed, 
  sidebarMostViewed, 
  featuredVideosMain, 
  featuredVideosList 
} from "@/lib/everydayNewsData";

export default function EverydayNewsPage() {
  // Client states
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(featuredVideosMain);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [postsCount, setPostsCount] = useState(3);
  
  // Carousel logic
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % sidebarFeatured.length);
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + sidebarFeatured.length) % sidebarFeatured.length);
  };

  // Video selector logic
  const handleVideoSelect = (video: typeof featuredVideosList[0]) => {
    setActiveVideo({
      title: video.title,
      category: video.category,
      date: video.date,
      author: video.author,
      img: video.img,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    });
    setIsVideoPlaying(true);
  };

  // Form submits
  const handleSubscribe = (e: React.FormEvent, email: string, setter: (val: string) => void) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setter("");
  };

  // Load more posts
  const loadMorePosts = () => {
    if (postsCount < everydayFeed.length) {
      setPostsCount((prev) => Math.min(prev + 2, everydayFeed.length));
    } else {
      alert("All articles are loaded!");
    }
  };

  return (
    <main className="min-h-screen bg-[#f0f2f5] dark:bg-[#0c0c0c] text-[#111] dark:text-gray-100 font-sans selection:bg-[#FB3158] selection:text-white transition-colors duration-300">
      
      {/* Boxed Wrapper */}
      <div className="max-w-[1240px] mx-auto bg-white dark:bg-[#111111] shadow-2xl border-x border-gray-100 dark:border-white/5">
        
        {/* Header Component */}
        <EverydayNewsHeader />

        {/* Outer body wrapper */}
        <div className="px-4 py-8 md:px-8 space-y-12">
          
          {/* SECTION 1: Top Hero Box Layout (Overlay Left + List Right) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (66%): Overlay Post */}
            <div className="lg:col-span-8 flex flex-col justify-end min-h-[420px] md:min-h-[500px] relative rounded-sm overflow-hidden group shadow-lg">
              {/* Bg Image */}
              <div className="absolute inset-0 bg-neutral-900 z-0">
                <img 
                  src={topOverlayPost.img} 
                  alt={topOverlayPost.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                {/* Black gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              </div>

              {/* Text Content */}
              <div className="relative z-20 p-6 md:p-10 space-y-4">
                <span className="inline-block bg-[#FB3158] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
                  {topOverlayPost.category}
                </span>
                
                <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight hover:text-[#FB3158] transition-colors duration-300">
                  <Link href="#">{topOverlayPost.title}</Link>
                </h2>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 max-w-2xl font-medium">
                  {topOverlayPost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2">
                  <span className="flex items-center gap-1"><User size={10} className="text-[#FB3158]" /> By {topOverlayPost.author}</span>
                  <span>•</span>
                  <span>{topOverlayPost.date}</span>
                </div>
              </div>
            </div>

            {/* Right Column (33%): Stacked post cards inside border/shadow box */}
            <div className="lg:col-span-4 bg-white dark:bg-[#161616] p-6 rounded border-b-[3px] border-gray-200 dark:border-white/10 shadow-lg flex flex-col justify-between gap-6">
              <div className="border-b border-gray-100 dark:border-white/5 pb-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158] flex items-center gap-1.5">
                  <Layers size={14} /> Technology & Lifestyle
                </h4>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-6">
                {heroList.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-4 items-center">
                    <div className="w-[100px] h-[75px] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-black text-[#FB3158] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-sm font-extrabold leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-2">
                        <Link href="#">{item.title}</Link>
                      </h3>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: Trending Row Banner & 4-Column Grid */}
          <section className="space-y-6">
            {/* Header / Trending Indicator */}
            <div className="bg-gray-50 dark:bg-[#161616] p-4 flex items-center justify-between rounded-sm border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2 shrink-0">
                <span className="bg-[#FB3158] text-white px-2 py-0.5 rounded-sm"><TrendingUp size={14} /></span>
                <span className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white">Trending Now</span>
              </div>
              <div className="hidden md:block flex-1 h-[1px] bg-gray-200 dark:bg-white/10 mx-6"></div>
              <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest overflow-hidden whitespace-nowrap">
                <Link href="#" className="hover:text-[#FB3158] transition-colors">#CyberSecurity</Link>
                <Link href="#" className="hover:text-[#FB3158] transition-colors">#Fashion2026</Link>
                <Link href="#" className="hover:text-[#FB3158] transition-colors">#AIFuture</Link>
                <Link href="#" className="hover:text-[#FB3158] transition-colors">#GreenLiving</Link>
              </div>
            </div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingPosts.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-[#161616] rounded border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer overflow-hidden p-4 space-y-4">
                  <div className="aspect-[3/2] rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{item.category}</div>
                    <h3 className="text-[14px] font-extrabold leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-3">
                      <Link href="#">{item.title}</Link>
                    </h3>
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: World News Left Column (66%) + Sidebar Right (33%) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Area (66%) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* World News Block Header */}
              <div className="flex justify-between items-center border-b-2 border-gray-900 dark:border-white pb-2.5">
                <h3 className="text-[18px] font-black uppercase tracking-widest text-[#FB3158] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FB3158] rounded-full inline-block"></span>
                  World News
                </h3>
                <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#FB3158] transition-colors flex items-center gap-0.5">
                  View More <ArrowRight size={10} />
                </Link>
              </div>

              {/* World News Layout: 1 large on left + 2 small grid on right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large main card */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[3/2] rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                    <img 
                      src={worldNewsMain.img} 
                      alt={worldNewsMain.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{worldNewsMain.category}</span>
                    <h3 className="text-xl font-black leading-snug group-hover:text-[#FB3158] transition-colors">
                      <Link href="#">{worldNewsMain.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <span>Shane Doe</span>
                      <span>•</span>
                      <span>{worldNewsMain.date}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {worldNewsMain.excerpt}
                    </p>
                  </div>
                </div>

                {/* Right side stacked grid (2 items) */}
                <div className="space-y-6">
                  {worldNewsGrid.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-center border-b border-gray-50 dark:border-white/5 pb-5 last:border-0 last:pb-0">
                      <div className="w-[120px] h-[90px] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{item.category}</span>
                        <h4 className="text-sm font-extrabold leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-2">
                          <Link href="#">{item.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsive Banner Ad space */}
              <div className="py-6 border-y border-gray-100 dark:border-white/5 flex justify-center">
                <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="block max-w-full overflow-hidden hover:opacity-90 transition-opacity">
                  <img 
                    src="https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/newstime-mid-blue.jpg" 
                    alt="Newsletter Ad Space" 
                    className="h-auto max-w-full rounded-sm"
                  />
                </Link>
              </div>

              {/* Vertical Card Feed */}
              <div className="space-y-6">
                {middleFeed.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer flex flex-col md:flex-row gap-6 border-b border-gray-100 dark:border-white/5 pb-6 last:border-0">
                    <div className="md:w-[240px] aspect-[3/2] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800 relative">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      {item.isHot && (
                        <div className="absolute top-2 left-2 bg-[#FB3158] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest animate-pulse">
                          HOT
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{item.category}</span>
                      <h3 className="text-lg font-black leading-snug group-hover:text-[#FB3158] transition-colors">
                        <Link href="#">{item.title}</Link>
                      </h3>
                      <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <span>Shane Doe</span>
                        <span>•</span>
                        <span>{item.date}</span>
                        {item.views && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-0.5 text-[#FB3158]"><BarChart2 size={10} /> {item.views} Views</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar Area (33%) */}
            <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-24">
              
              {/* Widget 1: Interactive Featured Posts Carousel */}
              <div className="bg-gray-50 dark:bg-[#161616] p-6 rounded border border-gray-100 dark:border-white/5 space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158]">Featured Posts</h4>
                  
                  {/* Slider Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={prevSlide}
                      className="w-6 h-6 rounded-full bg-white dark:bg-[#202020] border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-[#FB3158] hover:text-white transition-colors"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-6 h-6 rounded-full bg-white dark:bg-[#202020] border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-[#FB3158] hover:text-white transition-colors"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Slider Item (Active card) */}
                <div className="space-y-4 animate-fade-in">
                  <div className="aspect-[3/2] rounded overflow-hidden bg-gray-200 dark:bg-neutral-800 relative">
                    <img 
                      src={sidebarFeatured[carouselIndex].img} 
                      alt={sidebarFeatured[carouselIndex].title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">
                      {sidebarFeatured[carouselIndex].category}
                    </span>
                    <h3 className="text-md font-extrabold leading-snug hover:text-[#FB3158] transition-colors">
                      <Link href="#">{sidebarFeatured[carouselIndex].title}</Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {sidebarFeatured[carouselIndex].excerpt}
                    </p>
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest pt-1">
                      {sidebarFeatured[carouselIndex].date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Widget 2: Subscribe newsletter briefing */}
              <div id="subscribe" className="bg-[#111] text-white p-8 rounded text-center relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB3158]/5 rounded-full group-hover:scale-110 transition-transform"></div>
                
                <Mail size={32} className="mx-auto mb-4 text-[#FB3158] opacity-80" />
                <h3 className="text-md font-black uppercase tracking-widest mb-1.5">The Briefing</h3>
                <p className="text-gray-400 text-xs mb-6 max-w-[240px] mx-auto leading-relaxed">
                  Join 150k+ readers who start their day with our curated news list.
                </p>

                <form onSubmit={(e) => handleSubscribe(e, sidebarEmail, setSidebarEmail)} className="space-y-2.5">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    required
                    value={sidebarEmail}
                    onChange={(e) => setSidebarEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:bg-white focus:text-black rounded-sm transition-all text-center"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-[#FB3158] text-white text-[11px] font-black uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors rounded-sm shadow-md"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Widget 3: "Don't Miss" post list */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-white/10 pb-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158]">Don&apos;t Miss!</h4>
                </div>

                <div className="space-y-5">
                  {sidebarDontMiss.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-start pb-4 border-b border-gray-50 dark:border-white/5 last:border-0 last:pb-0">
                      <div className="w-[80px] h-[65px] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[13px] font-extrabold leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-2">
                          <Link href="#">{item.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* SECTION 4: Fashion Trends (Special Light Green Container with borders & shadows) */}
          <section className="bg-[#D5E6CE] dark:bg-[#182614] p-8 md:p-12 -mx-4 md:-mx-8 border-y border-[#c0d8b5] dark:border-green-950/40 rounded-sm">
            <div className="flex justify-between items-center border-b border-[#c0d8b5] dark:border-green-950/20 pb-4 mb-8">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2e5d23] dark:text-[#a2d495]">Fashion Trends</h3>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-[#3d7a2e] dark:text-[#a2d495] hover:text-black dark:hover:text-white transition-colors">See Gallery</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (66% height aspect): Large Overlay Card with Author avatar */}
              <div className="lg:col-span-8 flex flex-col justify-end min-h-[380px] relative rounded-sm overflow-hidden group shadow-md border border-[#c0d8b5]/40 dark:border-green-950/10">
                <div className="absolute inset-0 bg-neutral-900 z-0">
                  <img 
                    src={fashionMain.img} 
                    alt={fashionMain.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                </div>

                <div className="relative z-20 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight hover:text-[#D5E6CE] transition-colors">
                    <Link href="#">{fashionMain.title}</Link>
                  </h3>
                  
                  {/* Author Avatar Detail */}
                  <div className="flex items-center gap-3">
                    <div className="w-[30px] h-[30px] rounded-full overflow-hidden border border-white/20 bg-gray-50">
                      <img 
                        src={fashionMain.authorImg} 
                        alt={fashionMain.author} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                      <span>By {fashionMain.author}</span>
                      <span className="mx-2">•</span>
                      <span>{fashionMain.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (33%): Grid list (4 items stacked) */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {fashionGrid.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer flex gap-4 items-center bg-white/40 dark:bg-black/20 p-3 rounded border border-white/20 dark:border-white/5 hover:bg-white dark:hover:bg-[#161616] hover:shadow-md transition-all duration-300">
                    <div className="w-[90px] h-[65px] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[13px] font-extrabold leading-snug text-neutral-800 dark:text-gray-200 group-hover:text-[#FB3158] transition-colors line-clamp-2">
                        <Link href="#">{item.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: World Politics left + Technology left + Sidebar 2 right */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Area (66%) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* World Politics */}
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b-2 border-gray-900 dark:border-white pb-2.5">
                  <h3 className="text-[18px] font-black uppercase tracking-widest text-[#FB3158] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#FB3158] rounded-full inline-block"></span>
                    World Politics
                  </h3>
                  <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#FB3158] transition-colors flex items-center gap-0.5">
                    View More <ArrowRight size={10} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Large main card */}
                  <div className="group cursor-pointer space-y-4">
                    <div className="aspect-[3/2] rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                      <img 
                        src={politicsMain.img} 
                        alt={politicsMain.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{politicsMain.category}</span>
                      <h3 className="text-xl font-black leading-snug group-hover:text-[#FB3158] transition-colors">
                        <Link href="#">{politicsMain.title}</Link>
                      </h3>
                      <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <span>Shane Doe</span>
                        <span>•</span>
                        <span>{politicsMain.date}</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {politicsMain.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* The Lifestyle Grid List (6 stacked items) */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 dark:border-white/5 pb-2">The Lifestyle</h4>
                    
                    <div className="grid grid-cols-1 gap-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                      {politicsGrid.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer flex gap-4 items-center pb-3 border-b border-gray-50 dark:border-white/5 last:border-0 last:pb-0">
                          <div className="w-[70px] h-[55px] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                          </div>
                          <div className="space-y-0.5 flex-1">
                            <h4 className="text-xs font-black leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-2">
                              <Link href="#">{item.title}</Link>
                            </h4>
                            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ad Banner Space 2 */}
              <div className="py-4 border-y border-gray-100 dark:border-white/5 flex justify-center">
                <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="block max-w-full overflow-hidden hover:opacity-90 transition-opacity">
                  <img 
                    src="https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/03/Discover-Top.jpg" 
                    alt="Discover Top Ad Banner" 
                    className="h-auto max-w-full rounded-sm"
                  />
                </Link>
              </div>

              {/* Technology Block with review circles */}
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b-2 border-gray-900 dark:border-white pb-2.5">
                  <h3 className="text-[18px] font-black uppercase tracking-widest text-[#FB3158] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#FB3158] rounded-full inline-block"></span>
                    Technology
                  </h3>
                  <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#FB3158] transition-colors flex items-center gap-0.5">
                    View More <ArrowRight size={10} />
                  </Link>
                </div>

                {/* 3 Featured Tech Articles (Xiaomi 8.5, etc.) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {techFeatured.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-4 bg-gray-50 dark:bg-[#161616] p-4 rounded border border-gray-100 dark:border-white/5 hover:shadow-md transition-all duration-300">
                      <div className="aspect-[3/2] rounded overflow-hidden bg-gray-50 dark:bg-neutral-800 relative">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        {/* Rating circle */}
                        {item.rating && (
                          <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-[#FB3158] text-white border-2 border-white flex flex-col items-center justify-center font-black text-xs shadow-md">
                            <span>{item.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{item.category}</span>
                        <h3 className="text-sm font-extrabold leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-3">
                          <Link href="#">{item.title}</Link>
                        </h3>
                        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                          <span>{item.date}</span>
                          {item.readTime && (
                            <>
                              <span>•</span>
                              <span>{item.readTime}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4 grid tech articles below */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                  {techGrid.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-3">
                      <div className="aspect-[3/2] rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <h4 className="text-xs font-black leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-2">
                        <Link href="#">{item.title}</Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Everyday News Feed */}
              <div className="space-y-6 pt-4">
                <div className="border-b-2 border-gray-900 dark:border-white pb-2.5">
                  <h3 className="text-[18px] font-black uppercase tracking-widest text-[#FB3158] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#FB3158] rounded-full inline-block"></span>
                    Everyday News Feed
                  </h3>
                </div>

                {/* Feed Cards */}
                <div className="space-y-6">
                  {everydayFeed.slice(0, postsCount).map((item, idx) => (
                    <div key={idx} className="group cursor-pointer flex flex-col md:flex-row gap-6 border-b border-gray-100 dark:border-white/5 pb-6 last:border-0">
                      <div className="md:w-[220px] aspect-[3/2] shrink-0 rounded overflow-hidden bg-gray-50 dark:bg-neutral-800">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      </div>
                      <div className="flex-1 space-y-2">
                        <span className="text-[9px] text-[#FB3158] font-black uppercase tracking-widest">{item.category}</span>
                        <h3 className="text-md md:text-lg font-black leading-snug group-hover:text-[#FB3158] transition-colors">
                          <Link href="#">{item.title}</Link>
                        </h3>
                        <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          <span>Shane Doe</span>
                          <span>•</span>
                          <span>{item.date}</span>
                          {item.views && (
                            <>
                              <span>•</span>
                              <span className="text-[#FB3158]">{item.views} Views</span>
                            </>
                          )}
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                          {item.excerpt || "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the latest generation..."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination button */}
                <div className="text-center pt-4">
                  <button 
                    onClick={loadMorePosts}
                    className="px-8 py-3 border-2 border-black dark:border-white hover:border-[#FB3158] hover:bg-[#FB3158] hover:text-white transition-all text-xs font-black uppercase tracking-widest rounded-sm"
                  >
                    Load More Stories
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar Area 2 (33%) */}
            <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-24">
              
              {/* Widget 1: Mock Ad Image Banner */}
              <div className="flex justify-center bg-gray-50 dark:bg-[#161616] p-4 rounded border border-gray-100 dark:border-white/5 shadow-sm">
                <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="block max-w-full overflow-hidden hover:opacity-95 transition-opacity">
                  <img 
                    src="https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/Woman-Square.jpg" 
                    alt="Mock Square Ad Widget" 
                    className="h-auto max-w-full rounded-sm"
                  />
                </Link>
              </div>

              {/* Widget 2: Most Viewed (Rank numbers 1-5) */}
              <div className="bg-gray-50 dark:bg-[#161616] p-6 rounded border border-gray-100 dark:border-white/5 space-y-6">
                <div className="border-b border-gray-200 dark:border-white/10 pb-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158]">Most Viewed</h4>
                </div>

                <div className="space-y-4">
                  {sidebarMostViewed.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer flex gap-4 items-start pb-4 border-b border-gray-200/50 dark:border-white/5 last:border-0 last:pb-0">
                      <span className="text-3xl font-black text-gray-200 dark:text-neutral-800 group-hover:text-[#FB3158] transition-colors leading-none italic font-serif">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1 flex-1">
                        <h4 className="text-[13px] font-extrabold leading-snug group-hover:text-[#FB3158] transition-colors line-clamp-2">
                          <Link href="#">{item.title}</Link>
                        </h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* SECTION 6: Featured Videos Block (Dark Player Playlist Section) */}
          <section className="bg-[#181818] dark:bg-[#0c0c0c] text-white p-8 md:p-12 -mx-4 md:-mx-8 rounded-sm shadow-xl">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-8">
              <span className="w-3 h-3 bg-[#FB3158] rounded-full inline-block animate-ping"></span>
              <h3 className="text-xl font-black uppercase tracking-widest">Featured Videos</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (66%): Video Player with active overlay player */}
              <div className="lg:col-span-8 flex flex-col justify-between bg-[#111] border border-white/5 p-4 rounded-sm min-h-[380px] md:min-h-[460px] relative">
                {isVideoPlaying ? (
                  <div className="w-full h-full min-h-[320px] md:min-h-[400px]">
                    <iframe 
                      src={activeVideo.videoUrl} 
                      title={activeVideo.title}
                      className="w-full h-full rounded-sm"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center min-h-[320px] rounded-sm overflow-hidden bg-neutral-950">
                    <img 
                      src={activeVideo.img} 
                      alt={activeVideo.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60" 
                    />
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 rounded-full bg-[#FB3158] hover:bg-white text-white hover:text-black flex items-center justify-center hover:scale-105 transition-all duration-300 relative z-20 shadow-2xl cursor-pointer"
                      aria-label="Play video"
                    >
                      <Play size={24} className="ml-1" />
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />
                  </div>
                )}

                <div className="pt-4 space-y-2 relative z-20">
                  <span className="inline-block bg-[#FB3158] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-black leading-snug text-white">
                    {activeVideo.title}
                  </h3>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{activeVideo.date}</div>
                </div>
              </div>

              {/* Right Column (33%): Interactive video selection list */}
              <div className="lg:col-span-4 bg-[#141414] border border-white/5 p-4 rounded-sm flex flex-col gap-4 max-h-[480px] overflow-y-auto custom-scrollbar">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158] border-b border-white/5 pb-2">Playlist</h4>
                
                <div className="space-y-4">
                  {featuredVideosList.map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleVideoSelect(item)}
                      className="group cursor-pointer flex gap-3 items-center p-2 rounded hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                    >
                      <div className="w-[70px] h-[50px] shrink-0 rounded overflow-hidden bg-neutral-900 relative">
                        <img 
                      src={item.img} 
                      alt={item.title} 
                          className="w-full h-full object-cover opacity-80" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Play size={10} className="text-white" />
                        </div>
                      </div>
                      <div className="space-y-0.5 flex-1">
                        <h5 className="text-[11px] font-bold leading-snug text-gray-200 group-hover:text-[#FB3158] transition-colors line-clamp-2">
                          {item.title}
                        </h5>
                        <div className="text-[9px] text-gray-500 uppercase tracking-widest">{item.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Component */}
        <EverydayNewsFooter />

      </div>
    </main>
  );
}
