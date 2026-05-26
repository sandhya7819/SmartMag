"use client";

import React, { useState } from "react";
import Link from "next/link";
import CuratedMagHeader from "@/components/CuratedMagHeader";
import CuratedMagFooter from "@/components/CuratedMagFooter";
import { 
  Play, 
  Mail, 
  TrendingUp, 
  MessageSquare, 
  Clock, 
  ArrowRight, 
  ExternalLink,
  Volume2,
  Image as ImageIcon,
  User,
  Heart
} from "lucide-react";
import { 
  heroMain, 
  heroGrid, 
  newsJustIn, 
  editorsPicks,
  techMain,
  techList,
  techListPlain,
  techGrid,
  lifestyleMain,
  lifestyleList,
  lifestyleListPlain,
  lifestyleGrid,
  trendingVideos,
  worldNews,
  highlights,
  mustRead,
  cultureMain,
  cultureList,
  cultureListPlain,
  cultureGrid,
  otherNews
} from "@/lib/curatedMagData";

export default function CuratedMagPage() {
  const [activeVideo, setActiveVideo] = useState(trendingVideos[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = useState("");

  const handleVideoSelect = (video: typeof trendingVideos[0]) => {
    setActiveVideo(video);
    setIsVideoPlaying(true);
  };

  const handleSubscribe = (e: React.FormEvent, email: string, setter: (val: string) => void) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setter("");
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E40784] selection:text-white text-[#111]">
      <CuratedMagHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-12">
        
        {/* SECTION A: Hero & News Just In */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Big Featured Post & 4 Grid Cards */}
          <div className="lg:col-span-8 space-y-8">
            <article className="group cursor-pointer space-y-5">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-50 rounded-sm">
                <img 
                  src={heroMain.img} 
                  alt={heroMain.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 bg-[#E40784] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm">
                  {heroMain.cat}
                </div>
              </div>
              <div className="space-y-3.5">
                <h2 className="text-3xl md:text-4.5xl font-black text-black leading-tight tracking-tight group-hover:text-[#E40784] transition-colors duration-300">
                  <Link href="/curated-mag">{heroMain.title}</Link>
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {heroMain.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><User size={10} /> By {heroMain.author}</span>
                  <span>•</span>
                  <span>{heroMain.date}</span>
                </div>
              </div>
            </article>

            <hr className="border-gray-100" />

            {/* 4-Column Grid Below Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {heroGrid.map((post, idx) => (
                <article key={idx} className="group cursor-pointer space-y-3">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm relative">
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-[#E40784] text-white px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm">
                      {post.cat}
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                    <Link href="/curated-mag">{post.title}</Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: News Just In Sidebar */}
          <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-gray-100 space-y-6">
            <div className="block-head border-b-2 border-black pb-2 mb-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-black flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                News Just In
              </h4>
            </div>

            <div className="divide-y divide-gray-100 space-y-5">
              {newsJustIn.map((post, idx) => (
                <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-5" : ""}`}>
                  <div className="flex-1 space-y-1">
                    <h5 className="text-[13px] font-bold text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                      <Link href="/curated-mag">{post.title}</Link>
                    </h5>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">{post.date}</span>
                  </div>
                  <div className="w-20 h-14 shrink-0 overflow-hidden rounded-sm bg-gray-50 aspect-[4/3]">
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

        {/* SECTION B: Editor's Picks */}
        <section className="mb-20 border-t border-b border-gray-100 py-10">
          <div className="block-head mb-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Editor's Picks</h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {editorsPicks.map((post, idx) => (
              <article key={idx} className="group cursor-pointer space-y-3">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm relative">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {post.isVideo && (
                    <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#E40784] text-white flex items-center justify-center shadow-md">
                      <Play size={10} fill="currentColor" className="ml-0.5" />
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 bg-black text-white px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm">
                    {post.cat}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] font-black text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                    <Link href="/curated-mag">{post.title}</Link>
                  </h3>
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION C: Sticky Mid Area (Split 66% left / 33% right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Technology & Lifestyle Blocks */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Technology Block */}
            <div className="space-y-6">
              <div className="block-head border-b-2 border-black pb-2 flex justify-between items-center">
                <h4 className="text-base font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                  Technology
                </h4>
                <Link href="/curated-mag" className="text-[10px] font-black uppercase tracking-widest text-[#E40784] hover:underline">
                  View All
                </Link>
              </div>

              {/* 3-Column Split (Main + Small List + Plain Text List) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Inner Col 1: main */}
                <div className="space-y-3 group cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm">
                    <img 
                      src={techMain.img} 
                      alt={techMain.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-black text-black leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                    <Link href="/curated-mag">{techMain.title}</Link>
                  </h3>
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{techMain.date}</div>
                </div>

                {/* Inner Col 2: with images */}
                <div className="space-y-4 divide-y divide-gray-100">
                  {techList.map((post, idx) => (
                    <div key={idx} className={`flex gap-3 group cursor-pointer ${idx > 0 ? "pt-4" : ""}`}>
                      <div className="flex-1 space-y-1">
                        <div className="text-[8px] font-black text-[#E40784] uppercase tracking-wider">{post.cat}</div>
                        <h4 className="text-xs font-bold text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                          <Link href="/curated-mag">{post.title}</Link>
                        </h4>
                      </div>
                      <div className="w-16 h-12 shrink-0 overflow-hidden rounded-sm bg-gray-50 relative aspect-[4/3]">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                        {post.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <Play size={10} fill="currentColor" className="text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inner Col 3: plain text only */}
                <div className="space-y-4 divide-y divide-gray-100">
                  {techListPlain.map((post, idx) => (
                    <div key={idx} className={`group cursor-pointer space-y-1 ${idx > 0 ? "pt-4" : ""}`}>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Bottom 4 Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {techGrid.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xs font-black text-black leading-snug line-clamp-2 group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 2. Lifestyle Block */}
            <div className="space-y-6">
              <div className="block-head border-b-2 border-black pb-2 flex justify-between items-center">
                <h4 className="text-base font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                  Lifestyle
                </h4>
                <Link href="/curated-mag" className="text-[10px] font-black uppercase tracking-widest text-[#E40784] hover:underline">
                  View All
                </Link>
              </div>

              {/* 3-Column Split (Main + Small List + Plain Text List) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Inner Col 1: main */}
                <div className="space-y-3 group cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm">
                    <img 
                      src={lifestyleMain.img} 
                      alt={lifestyleMain.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-black text-black leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                    <Link href="/curated-mag">{lifestyleMain.title}</Link>
                  </h3>
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{lifestyleMain.date}</div>
                </div>

                {/* Inner Col 2: with images */}
                <div className="space-y-4 divide-y divide-gray-100">
                  {lifestyleList.map((post, idx) => (
                    <div key={idx} className={`flex gap-3 group cursor-pointer ${idx > 0 ? "pt-4" : ""}`}>
                      <div className="flex-1 space-y-1">
                        <div className="text-[8px] font-black text-[#E40784] uppercase tracking-wider">{post.cat}</div>
                        <h4 className="text-xs font-bold text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                          <Link href="/curated-mag">{post.title}</Link>
                        </h4>
                      </div>
                      <div className="w-16 h-12 shrink-0 overflow-hidden rounded-sm bg-gray-50 aspect-[4/3]">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inner Col 3: plain text only */}
                <div className="space-y-4 divide-y divide-gray-100">
                  {lifestyleListPlain.map((post, idx) => (
                    <div key={idx} className={`group cursor-pointer space-y-1 ${idx > 0 ? "pt-4" : ""}`}>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Bottom 4 Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {lifestyleGrid.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xs font-black text-black leading-snug line-clamp-2 group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 lg:pl-6 space-y-8">
            <div className="lg:sticky lg:top-20 space-y-8 self-start">
              
              {/* Sidebar Widget 1: Newsletter */}
              <div className="bg-[#E40784] text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-1000">
                  <Mail size={180} />
                </div>
                <div className="relative z-10 space-y-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tight">Newsletter</h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Get the latest creative news from FooBar about art, design and business.
                    </p>
                  </div>
                  <form onSubmit={(e) => handleSubscribe(e, sidebarSubscribed, setSidebarSubscribed)} className="space-y-3 pt-2">
                    <input 
                      type="email" 
                      placeholder="Your email address.." 
                      required 
                      value={sidebarSubscribed}
                      onChange={(e) => setSidebarSubscribed(e.target.value)}
                      className="w-full bg-white/15 border border-white/10 px-4 py-3 text-xs text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors rounded-sm"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-white hover:bg-black hover:text-white text-[#E40784] font-black uppercase tracking-widest text-[11px] py-3.5 transition-all duration-300 rounded-sm"
                    >
                      Subscribe
                    </button>
                    <label className="flex items-start gap-2 cursor-pointer mt-2 text-[10px] text-white/60">
                      <input type="checkbox" required className="mt-0.5" />
                      <span>By signing up, you agree to our terms and privacy policy.</span>
                    </label>
                  </form>
                </div>
              </div>

              {/* Sidebar Widget 2: About CuratedMag */}
              <div className="bg-gray-50 border border-gray-100 p-8 text-center rounded-sm space-y-4">
                <h3 className="text-2xl font-black tracking-tighter uppercase text-black">
                  CURATED<span className="text-[#E40784]">MAG</span>
                </h3>
                <p className="text-gray-500 text-xs italic leading-relaxed max-w-[240px] mx-auto">
                  "Well-curated information to inspire. Refined daily digests for the modern reader."
                </p>
              </div>

              {/* Sidebar Widget 3: Circular ad placeholder */}
              <div className="border border-gray-100 p-4 rounded-sm flex items-center justify-center bg-gray-50">
                <div className="w-[300px] h-[250px] bg-gray-200 flex items-center justify-center text-xs font-black text-gray-400 uppercase tracking-widest border border-dashed border-gray-300">
                  Advertisement
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION D: Wide Ad Banner */}
        <section className="w-full flex justify-center py-8 border-t border-b border-gray-100 my-16 bg-gray-50">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block max-w-[970px] hover:opacity-95 transition-opacity">
            <img 
              src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/01/DigitalHub-Top.jpg" 
              alt="DigitalHub Demo" 
              className="w-full object-contain"
            />
          </a>
        </section>

        {/* SECTION E: Trending Videos (Dark Backdrop Section) */}
        <section className="bg-[#111] text-white py-16 px-6 md:px-10 mb-20 relative rounded-sm overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <div className="border-l-4 border-[#E40784] pl-4 flex justify-between items-center">
              <h3 className="text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
                Trending Videos
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Video Frame */}
              <div className="lg:col-span-8 space-y-4">
                <div className="relative aspect-video bg-black overflow-hidden rounded-sm group/vid cursor-pointer shadow-2xl">
                  {isVideoPlaying ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#222] p-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#E40784] flex items-center justify-center animate-ping absolute" />
                      <div className="w-16 h-16 rounded-full bg-[#E40784] flex items-center justify-center z-10 shadow-lg">
                        <Play size={24} fill="currentColor" />
                      </div>
                      <h4 className="text-lg font-bold max-w-md">{activeVideo.title}</h4>
                      <p className="text-xs text-gray-400">Mocking Video Autoplay Frame... Click play lists to toggle.</p>
                      <button 
                        onClick={() => setIsVideoPlaying(false)}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
                      >
                        Reset Frame
                      </button>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={activeVideo.img} 
                        alt={activeVideo.title} 
                        className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover/vid:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center" onClick={() => setIsVideoPlaying(true)}>
                        <div className="w-16 h-16 bg-[#E40784] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                          <Play size={24} fill="currentColor" className="ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black via-black/70 to-transparent">
                        <div className="text-[10px] font-black uppercase text-[#E40784] tracking-widest mb-2 inline-block bg-black/30 px-2 py-0.5 rounded-sm">
                          {activeVideo.cat || "Highlights"}
                        </div>
                        <h4 className="text-xl md:text-2xl font-black line-clamp-2">
                          {activeVideo.title}
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Video Playlist Selection */}
              <div className="lg:col-span-4 space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar divide-y divide-white/5">
                {trendingVideos.map((video, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleVideoSelect(video)}
                    className={`flex gap-3 group/item cursor-pointer items-center transition-all ${
                      idx > 0 ? "pt-4" : ""
                    } ${
                      activeVideo.title === video.title ? "bg-white/5 p-2 rounded-sm" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="w-20 h-14 shrink-0 bg-[#222] overflow-hidden rounded-sm relative aspect-[4/3]">
                      <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/item:bg-[#E40784] transition-colors">
                          <Play size={10} fill="currentColor" className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h5 className={`text-xs font-bold leading-snug line-clamp-2 transition-colors ${
                        activeVideo.title === video.title ? "text-[#E40784]" : "text-gray-300 group-hover/item:text-white"
                      }`}>
                        {video.title}
                      </h5>
                      <span className="text-[9px] text-gray-500 font-bold uppercase">{video.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION F: Bottom Content Area (Split 66% left / 33% right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Left Column: World News, Must Read, Culture, Other News */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* 1. World News Block */}
            <div className="space-y-6">
              <div className="block-head border-b-2 border-black pb-2">
                <h4 className="text-base font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                  World News
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {worldNews.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-black text-black leading-snug line-clamp-2 group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 2. Must Read Block */}
            <div className="space-y-6">
              <div className="block-head border-b-2 border-black pb-2">
                <h4 className="text-base font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                  Must Read
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mustRead.map((post, idx) => (
                  <article key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="w-24 h-16 shrink-0 overflow-hidden rounded-sm bg-gray-50 aspect-[4/3] relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                      {post.isGallery && (
                        <div className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 text-[8px] text-white uppercase rounded-xs">
                          Pics
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 pt-1">
                      <h3 className="text-xs font-bold text-black leading-snug line-clamp-2 group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h3>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 3. Culture Block */}
            <div className="space-y-6">
              <div className="block-head border-b-2 border-black pb-2 flex justify-between items-center">
                <h4 className="text-base font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                  Culture
                </h4>
                <Link href="/curated-mag" className="text-[10px] font-black uppercase tracking-widest text-[#E40784] hover:underline">
                  View All
                </Link>
              </div>

              {/* 3-Column Split */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Inner Col 1: main */}
                <div className="space-y-3 group cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-50 rounded-sm">
                    <img 
                      src={cultureMain.img} 
                      alt={cultureMain.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-black text-black leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                    <Link href="/curated-mag">{cultureMain.title}</Link>
                  </h3>
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{cultureMain.date}</div>
                </div>

                {/* Inner Col 2: with images */}
                <div className="space-y-4 divide-y divide-gray-100">
                  {cultureList.map((post, idx) => (
                    <div key={idx} className={`flex gap-3 group cursor-pointer ${idx > 0 ? "pt-4" : ""}`}>
                      <div className="flex-1 space-y-1">
                        <div className="text-[8px] font-black text-[#E40784] uppercase tracking-wider">{post.cat}</div>
                        <h4 className="text-xs font-bold text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                          <Link href="/curated-mag">{post.title}</Link>
                        </h4>
                      </div>
                      <div className="w-16 h-12 shrink-0 overflow-hidden rounded-sm bg-gray-50 aspect-[4/3]">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inner Col 3: plain text only */}
                <div className="space-y-4 divide-y divide-gray-100">
                  {cultureListPlain.map((post, idx) => (
                    <div key={idx} className={`group cursor-pointer space-y-1 ${idx > 0 ? "pt-4" : ""}`}>
                      <h4 className="text-xs font-bold text-gray-800 leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h4>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Bottom 4 Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cultureGrid.map((post, idx) => (
                  <article key={idx} className="group cursor-pointer space-y-3.5">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xs font-black text-black leading-snug line-clamp-2 group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 4. Other News Block */}
            <div className="space-y-6">
              <div className="block-head border-b-2 border-black pb-2">
                <h4 className="text-base font-black uppercase tracking-tight text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E40784] rounded-full inline-block"></span>
                  Other News
                </h4>
              </div>

              <div className="divide-y divide-gray-100 space-y-6">
                {otherNews.map((post, idx) => (
                  <div key={idx} className={`flex flex-col sm:flex-row gap-5 group cursor-pointer ${idx > 0 ? "pt-6" : ""}`}>
                    <div className="sm:w-1/3 aspect-[4/3] overflow-hidden rounded-sm bg-gray-50 relative shrink-0">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="text-[8px] font-black text-[#E40784] uppercase tracking-wider">{post.cat}</div>
                      <h3 className="text-lg font-black text-black leading-snug group-hover:text-[#E40784] transition-colors duration-300">
                        <Link href="/curated-mag">{post.title}</Link>
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar Highlights & Ad placeholder */}
          <div className="lg:col-span-4 lg:pl-6 space-y-8">
            <div className="lg:sticky lg:top-20 space-y-8 self-start">
              
              {/* Highlights widget */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-sm space-y-6">
                <div className="block-head border-b-2 border-black pb-2">
                  <h4 className="text-sm font-black uppercase tracking-widest text-black flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#E40784] rounded-full inline-block"></span>
                    Highlights
                  </h4>
                </div>

                <div className="divide-y divide-gray-100 space-y-5">
                  {highlights.map((post, idx) => (
                    <div key={idx} className={`flex gap-4 group cursor-pointer items-start ${idx > 0 ? "pt-5" : ""}`}>
                      <div className="w-20 h-14 shrink-0 overflow-hidden rounded-sm bg-gray-100 relative aspect-[4/3]">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                        {post.rating && (
                          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                            <span className="text-[10px] font-black text-white px-1.5 py-0.5 rounded-sm bg-[#E40784]">
                              {post.rating}
                            </span>
                          </div>
                        )}
                        {post.isAudio && (
                          <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded-sm text-white flex items-center justify-center">
                            <Volume2 size={8} />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <h5 className="text-[13px] font-bold text-black leading-snug line-clamp-3 group-hover:text-[#E40784] transition-colors duration-300">
                          <Link href="/curated-mag">{post.title}</Link>
                        </h5>
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blue ad banner widget */}
              <div className="border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
                <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener">
                  <img 
                    src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/01/Blue-Wide.png" 
                    alt="Blue Wide Ad" 
                    className="w-full object-contain"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>

      <CuratedMagFooter />
    </main>
  );
}
