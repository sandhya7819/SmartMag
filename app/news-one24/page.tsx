"use client";

import { useState } from "react";
import NewsOne24Header from "@/components/NewsOne24Header";
import NewsOne24Footer from "@/components/NewsOne24Footer";
import Link from "next/link";
import { 
  Play, 
  Zap, 
  Flame, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Mail, 
  Star, 
  ArrowUpRight 
} from "lucide-react";
import {
  breakingNews,
  heroMain,
  heroRight,
  threeColCol1,
  threeColCol2,
  threeColCol3,
  handPickedMain,
  handPickedList,
  sportsMain,
  sportsGrid,
  moreNews,
  featuredVideos,
  sponsoredAds,
  businessEconomyMain,
  businessEconomyList,
  eastAsiaMain,
  eastAsiaList,
  missedList,
  techMain,
  techList,
  healthMain,
  healthList,
  lifestyleMain,
  lifestyleList,
  ukraineMain,
  ukraineList,
  newsRoundup
} from "@/lib/newsOne24Data";

export default function NewsOne24Page() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [tickerIndex, setTickerIndex] = useState(0);

  const prevVideo = () => {
    setVideoIndex((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);
  };

  const nextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % featuredVideos.length);
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#111111] font-sans selection:bg-[#cc0000] selection:text-white antialiased">
      <NewsOne24Header />

      {/* Breaking News Ticker */}
      <div className="bg-[#111111] text-white py-2.5 overflow-hidden border-t border-white/5 relative z-10">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-5">
          <div className="flex items-center gap-1.5 shrink-0 bg-[#cc0000] text-white px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-[2px] select-none">
            <Zap size={11} fill="currentColor" />
            <span>Breaking</span>
          </div>
          <div className="flex-1 flex items-center justify-between overflow-hidden">
            <div className="flex gap-4">
              <button 
                onClick={() => setTickerIndex((prev) => (prev - 1 + breakingNews.length) % breakingNews.length)}
                className="text-white/40 hover:text-[#ffe500] transition-colors p-1"
                aria-label="Previous Headline"
              >
                <ChevronLeft size={14} />
              </button>
              <button 
                onClick={() => setTickerIndex((prev) => (prev + 1) % breakingNews.length)}
                className="text-white/40 hover:text-[#ffe500] transition-colors p-1"
                aria-label="Next Headline"
              >
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="flex-1 px-4 overflow-hidden">
              <Link 
                href="#" 
                className="text-[13.5px] font-bold text-white/95 hover:text-[#ffe500] transition-colors line-clamp-1 block text-left"
              >
                {breakingNews[tickerIndex].title}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        
        {/* SECTION 1: HERO GRID (Left 66% Column with Main and Right list) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6.5 mb-12">
          {/* Main Hero Card (2/3 width) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs">
            {/* Left Main Article */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-[2px] group cursor-pointer mb-4">
                  <img 
                    src={heroMain.image} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" 
                    alt={heroMain.title} 
                  />
                  <span className="absolute top-3 left-3 bg-[#cc0000] text-white text-[9.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {heroMain.category || "EXCLUSIVE"}
                  </span>
                </div>
                <h2 className="text-[22px] md:text-[25px] font-extrabold font-bitter leading-tight text-gray-900 hover:text-[#cc0000] transition-colors cursor-pointer">
                  <Link href="#">{heroMain.title}</Link>
                </h2>
              </div>
              <div>
                <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3 mb-4">
                  {heroMain.excerpt}
                </p>
                <div className="flex items-center gap-2.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <span className="text-[#cc0000]">John Doe</span>
                  <span>•</span>
                  <span>{heroMain.date}</span>
                </div>
              </div>
            </div>

            {/* Right Side Two Stacked Articles */}
            <div className="space-y-6 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 pt-6 md:pt-0">
              {heroRight.slice(0, 2).map((post, i) => (
                <article key={i} className="group space-y-3 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] cursor-pointer">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                      alt={post.title} 
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-[#ffe500] text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                      {post.category || "Politics"}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-extrabold font-bitter leading-snug text-gray-900 hover:text-[#cc0000] transition-colors cursor-pointer">
                    <Link href="#">{post.title}</Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar Highlight Block (1/3 width) */}
          <div className="lg:col-span-4 bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                <h4 className="text-[12px] font-black uppercase tracking-wider text-gray-900">Featured</h4>
              </div>
              <div className="space-y-5">
                {threeColCol1.slice(0, 3).map((item, i) => (
                  <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4.5 last:border-0 last:pb-0">
                    <div className="text-[8.5px] font-black text-[#cc0000] uppercase tracking-widest mb-1.5">{item.category}</div>
                    <h5 className="text-[14.5px] font-bold text-gray-900 leading-snug group-hover:text-[#cc0000] transition-colors font-bitter">
                      <Link href="#">{item.title}</Link>
                    </h5>
                    <span className="text-[10px] text-gray-400 font-bold uppercase mt-2.5 block">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Embedded Mini Newsletter */}
            <div className="bg-[#cc0000] text-white p-5 rounded-[2px] mt-6 relative overflow-hidden select-none">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full" />
              <h5 className="text-[13px] font-black uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Mail size={12} />
                <span>The Briefing</span>
              </h5>
              <p className="text-white/75 text-[11.5px] mb-3 leading-normal">
                Join 50k+ readers. Get the latest world news digest in your inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-1.5">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="flex-1 bg-white/10 border border-white/20 px-3 py-1.5 text-[12.5px] rounded-[1px] focus:outline-none focus:bg-white focus:text-black placeholder:text-white/45 text-white"
                />
                <button type="submit" className="bg-[#ffe500] text-black font-extrabold text-[11px] px-3.5 rounded-[1px] hover:bg-white transition-colors uppercase">
                  OK
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* SECTION 2: THREE COLUMN LIST & CARD SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 mb-12">
          {/* Column 1: Vertical List of Posts */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-2">
              <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
              <h4 className="text-[12px] font-black uppercase tracking-wider text-gray-900">Latest Briefs</h4>
            </div>
            <div className="space-y-4.5 divide-y divide-gray-100">
              {threeColCol1.map((post, i) => (
                <div key={i} className={`group flex gap-4 pt-4 first:pt-0 cursor-pointer`}>
                  <div className="relative w-[75px] h-[55px] overflow-hidden rounded-[2px] bg-gray-100 shrink-0">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                    {post.title.includes("Dancing") && (
                      <span className="absolute bottom-1 right-1 bg-black/60 p-0.5 rounded-full text-[#ffe500]">
                        <Volume2 size={10} />
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[13.5px] font-bold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2 font-bitter">
                      <Link href="#">{post.title}</Link>
                    </h5>
                    <span className="text-[10px] text-gray-400 mt-1 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Large Economy Feature Card */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs flex flex-col justify-between group cursor-pointer">
            <div>
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                <h4 className="text-[12px] font-black uppercase tracking-wider text-gray-900">Economy Feature</h4>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] mb-4">
                <img src={threeColCol2.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" alt="" />
                <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                  {threeColCol2.category}
                </span>
              </div>
              <h4 className="text-[17px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                <Link href="#">{threeColCol2.title}</Link>
              </h4>
              <p className="text-gray-500 text-[13px] leading-relaxed mt-2.5 line-clamp-3">
                {threeColCol2.excerpt}
              </p>
            </div>
            <div className="text-[10.5px] text-gray-400 font-bold uppercase mt-4.5 pt-3 border-t border-gray-50 flex justify-between">
              <span>By Shane Doe</span>
              <span>{threeColCol2.date}</span>
            </div>
          </div>

          {/* Column 3: Large World Report Card */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs flex flex-col justify-between group cursor-pointer">
            <div>
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                <h4 className="text-[12px] font-black uppercase tracking-wider text-gray-900">World Report</h4>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] mb-4">
                <img src={threeColCol3.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" alt="" />
                <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                  {threeColCol3.category}
                </span>
              </div>
              <h4 className="text-[17px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                <Link href="#">{threeColCol3.title}</Link>
              </h4>
              <p className="text-gray-500 text-[13px] leading-relaxed mt-2.5 line-clamp-3">
                {threeColCol3.excerpt}
              </p>
            </div>
            <div className="text-[10.5px] text-gray-400 font-bold uppercase mt-4.5 pt-3 border-t border-gray-50 flex justify-between">
              <span>By Peter Wilson</span>
              <span>{threeColCol3.date}</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: IMMERSIVE GRADIENT (Handpicked Editor Selection) */}
        <section className="bg-gradient-to-br from-[#800000] to-[#121212] text-white p-6 md:p-8 rounded-[4px] shadow-lg mb-12 relative overflow-hidden select-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-5 bg-[#ffe500] block" />
                <h3 className="text-xl font-extrabold uppercase tracking-wider italic font-bitter">Hand-Picked by Editor</h3>
              </div>
              <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#ffe500] uppercase tracking-wider border border-white/5 shadow-xs">
                <Star size={11} fill="currentColor" />
                <span>Featured Selection</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Large Highlight Article (6 cols) */}
              <div className="lg:col-span-6 space-y-4 group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-black/30 shadow-2xl">
                  <img src={handPickedMain.image} className="w-full h-full object-cover opacity-85 group-hover:scale-[1.03] transition-transform duration-700" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#cc0000] text-white text-[9.5px] font-extrabold uppercase px-2.5 py-1 tracking-wider rounded-[1px] shadow-lg">
                    {handPickedMain.category}
                  </span>
                  <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded-[1px] text-[#ffe500] font-black text-[12px] flex items-center gap-1 border border-white/5 shadow-md">
                    <span>★ 8.5</span>
                    <span className="text-[10px] text-white/50">/ 10</span>
                  </div>
                </div>
                <h4 className="text-[20px] md:text-[23px] font-extrabold font-bitter leading-tight text-white group-hover:text-[#ffe500] transition-colors">
                  <Link href="#">{handPickedMain.title}</Link>
                </h4>
                <p className="text-white/70 text-[13.5px] leading-relaxed line-clamp-3">
                  {handPickedMain.excerpt}
                </p>
                <div className="flex items-center gap-2.5 text-[10.5px] font-bold text-white/40 uppercase tracking-widest pt-1">
                  <span>Editor Choice</span>
                  <span>•</span>
                  <span>{handPickedMain.date}</span>
                </div>
              </div>

              {/* Right List Grid of 6 smaller articles (6 cols) */}
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-5.5">
                {handPickedList.map((post, i) => (
                  <article key={i} className="group flex gap-3.5 items-start cursor-pointer">
                    <img 
                      src={post.image} 
                      className="w-[85px] h-[65px] object-cover rounded-[2px] shrink-0 bg-black/20 shadow-md group-hover:scale-105 transition-transform duration-300" 
                      alt="" 
                    />
                    <div className="min-w-0">
                      <h5 className="text-[13px] font-bold leading-snug text-white/95 group-hover:text-[#ffe500] transition-colors line-clamp-2 font-bitter">
                        <Link href="#">{post.title}</Link>
                      </h5>
                      <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider mt-1 block">{post.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SPORTS WRAP (Full-width grid) */}
        <section className="bg-white p-6 rounded-[3px] border border-gray-200/80 shadow-xs mb-12">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
              <h4 className="text-[14px] font-black uppercase tracking-wider text-gray-900">Sports Desk</h4>
            </div>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-[#cc0000] hover:text-black transition-colors flex items-center gap-1.5">
              <span>View Category</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Left Large Sports Article */}
            <div className="lg:col-span-5 flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] mb-4">
                  <img src={sportsMain.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" alt="" />
                  <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {sportsMain.category}
                  </span>
                </div>
                <h4 className="text-[18px] md:text-[21px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                  <Link href="#">{sportsMain.title}</Link>
                </h4>
                <p className="text-gray-500 text-[13.5px] leading-relaxed mt-2.5 line-clamp-3">
                  {sportsMain.excerpt}
                </p>
              </div>
              <div className="text-[10.5px] text-gray-400 font-bold uppercase mt-4 pt-3 border-t border-gray-50 flex justify-between">
                <span>By Sports Editor</span>
                <span>{sportsMain.date}</span>
              </div>
            </div>

            {/* Right Sports Grid items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5.5">
              {sportsGrid.map((post, i) => (
                <article key={i} className="group flex gap-4 cursor-pointer">
                  <div className="relative w-[100px] h-[75px] overflow-hidden rounded-[2px] bg-gray-100 shrink-0">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                  </div>
                  <div className="min-w-0 flex flex-col justify-between">
                    <h5 className="text-[13.5px] font-bold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2 font-bitter">
                      <Link href="#">{post.title}</Link>
                    </h5>
                    <span className="text-[9.5px] text-gray-400 font-bold uppercase tracking-wider block mt-1.5">{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: MORE NEWS & SIDEBAR WIDGETS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main List Area (2/3 width) */}
          <div className="lg:col-span-8 bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-2">
              <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
              <h4 className="text-[13px] font-black uppercase tracking-wider text-gray-900">More News</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6.5">
              {moreNews.map((post, i) => (
                <article key={i} className="group space-y-3.5 cursor-pointer pb-6 border-b border-gray-100 last:border-0 last:pb-0 md:[&:nth-last-child(-n+2)]:border-0 md:[&:nth-last-child(-n+2)]:pb-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px]">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" alt="" />
                    <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-[#ffe500] text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                      {post.category}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[15.5px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1 block">{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar Widgets (1/3 width) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Widget 1: Video Desk (Immersive Card) */}
            <div className="bg-[#111111] text-white p-5.5 rounded-[3px] shadow-md border border-white/5 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                  <h4 className="text-[12px] font-black uppercase tracking-wider text-white">Video Desk</h4>
                </div>
                <div className="flex gap-1">
                  <button onClick={prevVideo} className="p-1 border border-white/10 hover:bg-[#cc0000] transition-colors rounded-[1px]" aria-label="Previous Video"><ChevronLeft size={12} /></button>
                  <button onClick={nextVideo} className="p-1 border border-white/10 hover:bg-[#cc0000] transition-colors rounded-[1px]" aria-label="Next Video"><ChevronRight size={12} /></button>
                </div>
              </div>

              {/* Main Active Video Post */}
              <div className="group cursor-pointer relative aspect-video bg-black rounded-[2px] overflow-hidden shadow-lg">
                <img 
                  src={featuredVideos[videoIndex].image} 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-[1.03] transition-transform duration-700" 
                  alt="" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 bg-[#cc0000] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                    <Play size={16} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black/90 to-transparent">
                  <h5 className="text-[13px] font-bold leading-snug line-clamp-2 text-white">
                    {featuredVideos[videoIndex].title}
                  </h5>
                </div>
              </div>

              {/* Other Videos List */}
              <div className="space-y-3.5">
                {featuredVideos.map((vid, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setVideoIndex(idx)}
                    className={`flex gap-3 cursor-pointer group items-center p-1 rounded-[2px] transition-colors ${
                      videoIndex === idx ? "bg-white/5" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="relative w-[50px] h-[36px] overflow-hidden bg-black shrink-0 rounded-[1px]">
                      <img src={vid.image} className="w-full h-full object-cover opacity-60" alt="" />
                      <div className="absolute inset-0 flex items-center justify-center text-white/80">
                        <Play size={8} fill="currentColor" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h6 className="text-[11.5px] font-medium leading-snug text-white/95 group-hover:text-[#ffe500] line-clamp-1">
                        {vid.title}
                      </h6>
                      <span className="text-[9px] text-white/40 block uppercase tracking-wider mt-0.5">Video Desk</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Review/Sponsored Ad */}
            <div className="bg-white p-5.5 rounded-[3px] border border-gray-200/80 shadow-xs">
              <div className="flex items-center gap-1.5 border-b border-gray-100 pb-3 mb-4.5">
                <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                <h4 className="text-[12px] font-black uppercase tracking-wider text-gray-900 font-sans">Editor Reviews</h4>
              </div>
              <div className="space-y-4">
                {sponsoredAds.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="group flex gap-3.5 items-start cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <img src={item.image} className="w-[65px] h-[50px] object-cover rounded-[2px] shrink-0 bg-gray-50 border border-gray-100" alt="" />
                    <div className="min-w-0">
                      <h5 className="text-[12.5px] font-extrabold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2 font-bitter">
                        <Link href="#">{item.title}</Link>
                      </h5>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-[#ffe500] font-black">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={9.5} fill={i < 4 ? "currentColor" : "transparent"} className="stroke-current" />
                        ))}
                        <span className="text-gray-400 text-[10px] ml-1.5 font-bold uppercase tracking-wider">Reviewed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BUSINESS & ECONOMY / EAST ASIA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6.5 mb-12">
          {/* Business & Economy Block */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4.5">
              <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
              <h4 className="text-[13px] font-black uppercase tracking-wider text-gray-900">Business & Economy</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5">
              {/* Left Main Article */}
              <div className="group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-[2px] mb-3.5">
                    <img src={businessEconomyMain.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" alt="" />
                    <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                      {businessEconomyMain.category}
                    </span>
                  </div>
                  <h4 className="text-[16px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                    <Link href="#">{businessEconomyMain.title}</Link>
                  </h4>
                  <p className="text-gray-500 text-[12.5px] leading-relaxed mt-2 line-clamp-3">
                    {businessEconomyMain.excerpt}
                  </p>
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-3 pt-2.5 border-t border-gray-50">{businessEconomyMain.date}</span>
              </div>

              {/* Right List Articles */}
              <div className="space-y-4 border-t sm:border-t-0 sm:border-l border-gray-100 sm:pl-5.5 pt-4 sm:pt-0">
                {businessEconomyList.slice(0, 4).map((post, i) => (
                  <article key={i} className="group cursor-pointer">
                    <span className="text-[8px] font-black text-[#cc0000] uppercase tracking-widest block mb-0.5">{post.category || "Economy"}</span>
                    <h5 className="text-[13px] font-bold leading-snug text-gray-950 group-hover:text-[#cc0000] transition-colors font-bitter line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h5>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* East Asia Block */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4.5">
              <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
              <h4 className="text-[13px] font-black uppercase tracking-wider text-gray-900">East Asia Report</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5">
              {/* Left Main Article */}
              <div className="group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-[2px] mb-3.5">
                    <img src={eastAsiaMain.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" alt="" />
                    <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                      {eastAsiaMain.category}
                    </span>
                  </div>
                  <h4 className="text-[16px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                    <Link href="#">{eastAsiaMain.title}</Link>
                  </h4>
                  <p className="text-gray-500 text-[12.5px] leading-relaxed mt-2 line-clamp-3">
                    {eastAsiaMain.excerpt}
                  </p>
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-3 pt-2.5 border-t border-gray-50">{eastAsiaMain.date}</span>
              </div>

              {/* Right List Articles */}
              <div className="space-y-4 border-t sm:border-t-0 sm:border-l border-gray-100 sm:pl-5.5 pt-4 sm:pt-0">
                {eastAsiaList.slice(0, 4).map((post, i) => (
                  <article key={i} className="group cursor-pointer">
                    <span className="text-[8px] font-black text-[#cc0000] uppercase tracking-widest block mb-0.5">{post.category || "East Asia"}</span>
                    <h5 className="text-[13px] font-bold leading-snug text-gray-950 group-hover:text-[#cc0000] transition-colors font-bitter line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h5>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: YOU MAY HAVE MISSED (4-column grid) */}
        <section className="bg-white p-6 rounded-[3px] border border-gray-200/80 shadow-xs mb-12">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-5.5">
            <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
            <h4 className="text-[13.5px] font-black uppercase tracking-wider text-gray-900">You May Have Missed</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
            {missedList.map((post, i) => (
              <article key={i} className="group cursor-pointer space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px]">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" alt="" />
                  <span className="absolute bottom-2 left-2 bg-[#cc0000] text-white text-[8px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {post.category || "News"}
                  </span>
                </div>
                <h5 className="text-[13.5px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2">
                  <Link href="#">{post.title}</Link>
                </h5>
                <span className="text-[9.5px] text-gray-400 font-bold uppercase tracking-wider block mt-1">{post.date}</span>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 8: 3-COLUMNS CATEGORIES (Tech, Health, Lifestyle) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 mb-12">
          {/* Column 1: Info Tech */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                  <h4 className="text-[12.5px] font-black uppercase tracking-wider text-gray-900">Information Tech</h4>
                </div>
                <Link href="#" className="text-[9.5px] font-bold text-[#cc0000] uppercase hover:underline">All Tech</Link>
              </div>

              <div className="group cursor-pointer mb-5">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] mb-3.5">
                  <img src={techMain.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" alt="" />
                  <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {techMain.category}
                  </span>
                </div>
                <h4 className="text-[15.5px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                  <Link href="#">{techMain.title}</Link>
                </h4>
              </div>

              <div className="space-y-3.5 border-t border-gray-50 pt-4.5">
                {techList.slice(0, 3).map((post, i) => (
                  <article key={i} className="group flex gap-3 cursor-pointer items-start">
                    <img src={post.image} className="w-[50px] h-[38px] object-cover rounded-[1px] shrink-0 bg-gray-100" alt="" />
                    <h5 className="text-[12.5px] font-bold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors font-bitter line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h5>
                  </article>
                ))}
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-4 pt-3 border-t border-gray-50">Updated Hourly</span>
          </div>

          {/* Column 2: Health Sciences */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                  <h4 className="text-[12.5px] font-black uppercase tracking-wider text-gray-900">Health Sciences</h4>
                </div>
                <Link href="#" className="text-[9.5px] font-bold text-[#cc0000] uppercase hover:underline">All Health</Link>
              </div>

              <div className="group cursor-pointer mb-5">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] mb-3.5">
                  <img src={healthMain.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" alt="" />
                  <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {healthMain.category}
                  </span>
                </div>
                <h4 className="text-[15.5px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                  <Link href="#">{healthMain.title}</Link>
                </h4>
              </div>

              <div className="space-y-3.5 border-t border-gray-50 pt-4.5">
                {healthList.slice(0, 3).map((post, i) => (
                  <article key={i} className="group flex gap-3 cursor-pointer items-start">
                    <img src={post.image} className="w-[50px] h-[38px] object-cover rounded-[1px] shrink-0 bg-gray-100" alt="" />
                    <h5 className="text-[12.5px] font-bold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors font-bitter line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h5>
                  </article>
                ))}
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-4 pt-3 border-t border-gray-50">Updated Hourly</span>
          </div>

          {/* Column 3: Lifestyle */}
          <div className="bg-white p-5 rounded-[3px] border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
                  <h4 className="text-[12.5px] font-black uppercase tracking-wider text-gray-900">Lifestyle</h4>
                </div>
                <Link href="#" className="text-[9.5px] font-bold text-[#cc0000] uppercase hover:underline">All Life</Link>
              </div>

              <div className="group cursor-pointer mb-5">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px] mb-3.5">
                  <img src={lifestyleMain.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" alt="" />
                  <span className="absolute top-2.5 left-2.5 bg-[#cc0000] text-white text-[8px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {lifestyleMain.category}
                  </span>
                </div>
                <h4 className="text-[15.5px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors">
                  <Link href="#">{lifestyleMain.title}</Link>
                </h4>
              </div>

              <div className="space-y-3.5 border-t border-gray-50 pt-4.5">
                {lifestyleList.slice(0, 3).map((post, i) => (
                  <article key={i} className="group flex gap-3 cursor-pointer items-start">
                    <img src={post.image} className="w-[50px] h-[38px] object-cover rounded-[1px] shrink-0 bg-gray-100" alt="" />
                    <h5 className="text-[12.5px] font-bold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors font-bitter line-clamp-2">
                      <Link href="#">{post.title}</Link>
                    </h5>
                  </article>
                ))}
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-4 pt-3 border-t border-gray-50">Updated Hourly</span>
          </div>
        </section>

        {/* SECTION 9: UKRAINE CONFLICT (Full-width grid row) */}
        <section className="bg-white p-6 rounded-[3px] border border-gray-200/80 shadow-xs mb-12">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-5.5">
            <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
            <h4 className="text-[14px] font-black uppercase tracking-wider text-gray-900">Ukraine Crisis</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ukraineList.slice(0, 4).map((post, i) => (
              <article key={i} className="group cursor-pointer space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px]">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" alt="" />
                  <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-[#ffe500] text-[8.5px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-[1px]">
                    {post.category || "Ukraine"}
                  </span>
                </div>
                <h5 className="text-[13.5px] font-extrabold font-bitter leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2">
                  <Link href="#">{post.title}</Link>
                </h5>
                <span className="text-[9.5px] text-gray-400 font-bold uppercase tracking-wider block mt-1">{post.date}</span>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 10: BOTTOM NEWS ROUNDUP */}
        <section className="bg-white p-6 rounded-[3px] border border-gray-200/80 shadow-xs mb-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-5">
            <span className="w-1.5 h-3.5 bg-[#cc0000] block" />
            <h4 className="text-[14px] font-black uppercase tracking-wider text-gray-900">News Roundup</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6.5">
            {newsRoundup.map((post, i) => (
              <article key={i} className="group flex gap-3.5 items-start cursor-pointer">
                <div className="relative w-[75px] h-[55px] overflow-hidden rounded-[2px] bg-gray-100 shrink-0">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[12.5px] font-extrabold leading-snug text-gray-900 group-hover:text-[#cc0000] transition-colors line-clamp-2 font-bitter">
                    <Link href="#">{post.title}</Link>
                  </h5>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block mt-1">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      <NewsOne24Footer />
    </main>
  );
}
