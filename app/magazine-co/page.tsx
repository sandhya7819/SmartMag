"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Play, 
  Music, 
  Clock, 
  MessageSquare, 
  Flame, 
  Heart,
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  Star,
  Facebook,
  Instagram
} from "lucide-react";
import MagazineCoHeader from "@/components/MagazineCoHeader";
import MagazineCoFooter from "@/components/MagazineCoFooter";
import {
  sec1LeftMain,
  sec1LeftGrid,
  sec1RightMain,
  sec1RightList,
  trendingPosts,
  sportsMainLeft,
  sportsMainRight,
  sportsGrid,
  dontMissList,
  editorsPicks,
  perfumesGrid,
  fashionMain,
  fashionGrid,
  dietMain,
  dietGrid,
  latestTech,
  lifestylePosts,
  popularPosts,
  celebsNews,
  latestPostsLoop
} from "@/lib/magazineCoData";

export default function MagazineCoPage() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [editorsIndex, setEditorsIndex] = useState(0);
  const [fashionIndex, setFashionIndex] = useState(0);
  const [celebsIndex, setCelebsIndex] = useState(0);
  const [postsCount, setPostsCount] = useState(3); // load-more simulation

  // Force Light Mode on Mount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // Auto-scroll Editor's Picks every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleEditorsNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [editorsIndex]);

  const handleEditorsPrev = () => {
    setEditorsIndex((prev) => (prev === 0 ? editorsPicks.length - 1 : prev - 1));
  };

  const handleEditorsNext = () => {
    setEditorsIndex((prev) => (prev === editorsPicks.length - 1 ? 0 : prev + 1));
  };

  const handleFashionPrev = () => {
    setFashionIndex((prev) => (prev === 0 ? fashionGrid.length - 3 : prev - 1));
  };

  const handleFashionNext = () => {
    setFashionIndex((prev) => (prev >= fashionGrid.length - 3 ? 0 : prev + 1));
  };

  const handleCelebsPrev = () => {
    setCelebsIndex((prev) => (prev === 0 ? celebsNews.length - 4 : prev - 1));
  };

  const handleCelebsNext = () => {
    setCelebsIndex((prev) => (prev >= celebsNews.length - 4 ? 0 : prev + 1));
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
    <main className="min-h-screen bg-white dark:bg-[#0c0d12] text-[#1c1e21] dark:text-gray-300 font-sans selection:bg-[#3b82f6] selection:text-white">
      
      {/* SECTION: Top Ad Banner */}
      <div className="bg-[#111319] py-4 border-b border-gray-800 flex flex-col items-center justify-center">
        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Advertisement</span>
        <a 
          href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
          target="_blank" 
          rel="noopener" 
          className="hover:opacity-95 transition-opacity max-w-[970px] px-4"
        >
          <img 
            src="https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/magazineco-top.jpg" 
            alt="Magazine Co Top Advertisement" 
            className="w-full h-auto object-contain rounded-sm"
          />
        </a>
      </div>

      {/* Header */}
      <MagazineCoHeader />

      {/* SECTION 1: Hero Block (66% Left / 33% Right) */}
      <div className="bg-white dark:bg-[#0c0d12] py-8">
        <div className="container mx-auto max-w-[1200px] px-4">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                
                {/* Feature Post */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                    <img 
                      src={sec1LeftMain.image} 
                      alt={sec1LeftMain.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase text-[#3b82f6] tracking-widest">{sec1LeftMain.category}</span>
                    <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight hover:text-[#3b82f6] transition-colors">
                      <Link href="/magazine-co">{sec1LeftMain.title}</Link>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">{sec1LeftMain.excerpt}</p>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase pt-1">
                      <span>By {sec1LeftMain.author}</span>
                      <span>•</span>
                      <span>{sec1LeftMain.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-orange-500"><Flame size={10} /> {sec1LeftMain.views} Views</span>
                    </div>
                  </div>
                </div>

                {/* Sub Grid (3 cols) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                  {sec1LeftGrid.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-2.5">
                      <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{post.category}</span>
                        <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-3 hover:text-[#3b82f6] transition-colors">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right Hero Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-5">
                
                {/* Right Main Card */}
                <div className="group cursor-pointer space-y-3 pb-4 border-b border-gray-100 dark:border-white/5">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                    <img 
                      src={sec1RightMain.image} 
                      alt={sec1RightMain.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{sec1RightMain.category}</span>
                    <h3 className="text-sm font-black text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors">
                      <Link href="/magazine-co">{sec1RightMain.title}</Link>
                    </h3>
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 font-bold block uppercase">{sec1RightMain.date}</span>
                  </div>
                </div>

                {/* Right Lists */}
                <div className="space-y-4">
                  {sec1RightList.map((post, idx) => (
                    <div key={idx} className="flex justify-between items-center gap-4 group cursor-pointer">
                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] font-black uppercase text-[#3b82f6] tracking-widest block mb-0.5">{post.category}</span>
                        <h4 className="text-xs font-extrabold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h4>
                        <span className="text-[9px] text-gray-400 dark:text-gray-500 font-bold uppercase mt-1 block">{post.views} Views</span>
                      </div>
                      <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-sm overflow-hidden shrink-0 relative aspect-square shadow-sm">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </section>
        </div>
      </div>


      {/* SECTION 2: Trending Small Posts (Full Width Shaded) */}
      <div className="bg-[#f2f3fd] dark:bg-[#16171d] py-8 border-y border-gray-100 dark:border-white/5">
        <div className="container mx-auto max-w-[1200px] px-4">
          <section className="space-y-6">
            <div className="text-center pb-2 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Trending</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingPosts.map((post, idx) => (
                <div key={idx} className="bg-white dark:bg-[#111217] p-4 border border-gray-100/80 dark:border-white/5 rounded-sm shadow-sm flex gap-4 group cursor-pointer items-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-sm overflow-hidden shrink-0 relative aspect-square shadow-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[7px] font-black uppercase text-orange-500 tracking-widest block flex items-center gap-0.5"><Flame size={8} /> Viral ({post.views} views)</span>
                    <h4 className="text-[11px] font-black text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                      <Link href="/magazine-co">{post.title}</Link>
                    </h4>
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 font-semibold block uppercase mt-0.5">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>


      {/* SECTION 3: Main Left splits vs Right Editor's picks */}
      <div className="bg-white dark:bg-[#0c0d12] py-8">
        <div className="container mx-auto max-w-[1200px] px-4">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Sports + Grid + Don't Miss) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Sports Widget */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Sports</h4>
                </div>

                {/* Main splits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Col 1 */}
                  <div className="group cursor-pointer space-y-3">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm">
                      <img 
                        src={sportsMainLeft.image} 
                        alt={sportsMainLeft.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors">
                        <Link href="/magazine-co">{sportsMainLeft.title}</Link>
                      </h3>
                      <div className="flex items-center gap-2 text-[8px] text-gray-400 dark:text-gray-500 font-bold uppercase">
                        <span>By {sportsMainLeft.author}</span>
                        <span>•</span>
                        <span>{sportsMainLeft.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Col 2 */}
                  <div className="group cursor-pointer space-y-3">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm">
                      <img 
                        src={sportsMainRight.image} 
                        alt={sportsMainRight.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors">
                        <Link href="/magazine-co">{sportsMainRight.title}</Link>
                      </h3>
                      <div className="flex items-center gap-2 text-[8px] text-gray-400 dark:text-gray-500 font-bold uppercase">
                        <span>By {sportsMainRight.author}</span>
                        <span>•</span>
                        <span>{sportsMainRight.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Grid (4 items) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 border-t border-gray-100 dark:border-white/5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
                  {sportsGrid.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-2.5">
                      <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                            <span className="w-8 h-8 rounded-full bg-white text-[#3b82f6] flex items-center justify-center shadow-lg"><Play size={10} fill="currentColor" className="ml-0.5" /></span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-[11px] font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-3 hover:text-[#3b82f6] transition-colors">
                        <Link href="/magazine-co">{post.title}</Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Don't Miss! */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Don't Miss!</h4>
                </div>

                <div className="space-y-6">
                  {dontMissList.map((post, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-5 group cursor-pointer pb-6 border-b border-gray-100 dark:border-white/5 last:pb-0 last:border-0">
                      <div className="w-full sm:w-[200px] aspect-[3/2] bg-gray-100 dark:bg-neutral-800 overflow-hidden rounded-sm shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col justify-center">
                        <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{post.category}</span>
                        <h3 className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-3 text-[8px] text-gray-400 dark:text-gray-500 font-bold uppercase pt-0.5">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (Editor's picks + Social + Perfumes) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
              
              {/* Editor's Picks Carousel */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-5">
                <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-2.5">
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 dark:text-white relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Editor's Picks</h4>
                  <div className="flex items-center space-x-1">
                    <button 
                      onClick={handleEditorsPrev}
                      className="w-5 h-5 bg-gray-50 dark:bg-white/5 hover:bg-[#3b82f6] hover:text-white flex items-center justify-center rounded-sm text-gray-400 transition-colors"
                    >
                      <ChevronLeft size={12} />
                    </button>
                    <button 
                      onClick={handleEditorsNext}
                      className="w-5 h-5 bg-gray-50 dark:bg-white/5 hover:bg-[#3b82f6] hover:text-white flex items-center justify-center rounded-sm text-gray-400 transition-colors"
                    >
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Slider View */}
                <div className="space-y-4">
                  <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                    <img 
                      src={editorsPicks[editorsIndex].image} 
                      alt={editorsPicks[editorsIndex].title} 
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{editorsPicks[editorsIndex].category}</span>
                    <h3 className="text-sm font-black text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors line-clamp-2">
                      <Link href="/magazine-co">{editorsPicks[editorsIndex].title}</Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">{editorsPicks[editorsIndex].excerpt}</p>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-4">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white">Social</h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold text-gray-700 dark:text-gray-300">
                  <a href="#" className="border border-gray-200 dark:border-white/10 hover:border-[#1877f2] p-2 flex items-center gap-2 transition-colors bg-white dark:bg-white/5 rounded-sm">
                    <Facebook size={12} className="text-[#1877f2] fill-[#1877f2]" />
                    <span>1.1K <span className="text-gray-400 font-medium">Facebook</span></span>
                  </a>
                  <a href="#" className="border border-gray-200 dark:border-white/10 hover:border-[#1da1f2] p-2 flex items-center gap-2 transition-colors bg-white dark:bg-white/5 rounded-sm">
                    <span className="text-[#1da1f2] font-black">𝕏</span>
                    <span>68.9K <span className="text-gray-400 font-medium">Twitter</span></span>
                  </a>
                  <a href="#" className="border border-gray-200 dark:border-white/10 hover:border-[#e60023] p-2 flex items-center gap-2 transition-colors bg-white dark:bg-white/5 rounded-sm">
                    <span className="text-[#e60023] font-black">P</span>
                    <span>10.7K <span className="text-gray-400 font-medium">Pinterest</span></span>
                  </a>
                  <a href="#" className="border border-gray-200 dark:border-white/10 hover:border-[#e1306c] p-2 flex items-center gap-2 transition-colors bg-white dark:bg-white/5 rounded-sm">
                    <Instagram size={12} className="text-[#e1306c]" />
                    <span>46K <span className="text-gray-400 font-medium">Instagram</span></span>
                  </a>
                  <a href="#" className="border border-gray-200 dark:border-white/10 hover:border-[#ff4500] p-2 flex items-center gap-2 transition-colors bg-white dark:bg-white/5 rounded-sm">
                    <span className="text-[#ff4500] font-black">R</span>
                    <span>818 <span className="text-gray-400 font-medium">Reddit</span></span>
                  </a>
                  <a href="#" className="border border-gray-200 dark:border-white/10 hover:border-[#1ab7ea] p-2 flex items-center gap-2 transition-colors bg-white dark:bg-white/5 rounded-sm">
                    <span className="text-[#1ab7ea] font-black">V</span>
                    <span>17.7K <span className="text-gray-400 font-medium">Vimeo</span></span>
                  </a>
                </div>
              </div>

              {/* Perfume List Widget */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-4">
                <div className="space-y-4">
                  {perfumesGrid.map((post, idx) => (
                    <div key={idx} className="flex gap-3.5 group cursor-pointer">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-sm overflow-hidden shrink-0 relative aspect-square shadow-sm">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                            <span className="w-6 h-6 rounded-full bg-white text-[#3b82f6] flex items-center justify-center"><Play size={6} fill="currentColor" className="ml-0.5" /></span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug hover:text-[#3b82f6] transition-colors line-clamp-3">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </section>
        </div>
      </div>


      {/* SECTION 4: Style & Fashion (Full Width panel overlay) */}
      <div className="w-full">
        {/* Dark section header bar */}
        <div className="bg-[#1c2233] py-4 text-white">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
            <h4 className="text-xs font-black uppercase tracking-widest">Style &amp; Fashion</h4>
            <Link href="/magazine-co" className="text-[10px] font-black uppercase tracking-widest text-[#3b82f6] hover:text-[#2563eb] transition-colors">View More</Link>
          </div>
        </div>

        {/* Section Content Area with soft gray background */}
        <div className="bg-[#f2f3fd] dark:bg-[#16171d] py-8 border-b border-gray-100 dark:border-white/5">
          <div className="container mx-auto max-w-[1200px] px-4 space-y-6">
            
            {/* Main Overlay Banner */}
            <div className="relative group cursor-pointer aspect-[21/9] w-full overflow-hidden rounded-sm bg-gray-900 shadow-sm">
              <img 
                src={fashionMain.image} 
                alt={fashionMain.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.01] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-2 text-white pointer-events-none">
                <span className="text-[9px] font-black uppercase text-white bg-[#3b82f6] tracking-widest px-2 py-0.5 rounded-sm">{fashionMain.category}</span>
                <h2 className="text-lg md:text-3xl font-black leading-tight pointer-events-auto hover:text-[#3b82f6] transition-colors pt-1.5">
                  <Link href="/magazine-co">{fashionMain.title}</Link>
                </h2>
                <div className="flex items-center gap-3 text-[9px] text-gray-400 dark:text-gray-500 font-semibold uppercase pt-0.5">
                  <span>By {fashionMain.author}</span>
                  <span>•</span>
                  <span>{fashionMain.date}</span>
                </div>
              </div>
            </div>

            {/* Horizontal 5-column grid with white cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 pt-2">
              {fashionGrid.slice(0, 5).map((post, idx) => (
                <div key={idx} className="bg-white dark:bg-[#111217] p-3 border border-gray-100/80 dark:border-white/5 rounded-sm shadow-sm group cursor-pointer space-y-2 hover:shadow-md transition-shadow">
                  <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-[11px] font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-3 hover:text-[#3b82f6] transition-colors">
                    <Link href="/magazine-co">{post.title}</Link>
                  </h4>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>


      {/* SECTION 5: Diet & Health / Tech / Lifestyle vs Sidebar Popular */}
      <div className="bg-white dark:bg-[#0c0d12] py-8">
        <div className="container mx-auto max-w-[1200px] px-4">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Diet & Health */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Diet &amp; Health</h4>
                </div>

                {/* Main row split */}
                <div className="flex flex-col md:flex-row gap-5 group cursor-pointer pb-6 border-b border-gray-100 dark:border-white/5">
                  <div className="w-full md:w-[320px] aspect-[4/3] bg-gray-100 dark:bg-neutral-800 overflow-hidden rounded-sm shrink-0">
                    <img 
                      src={dietMain.image} 
                      alt={dietMain.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{dietMain.category}</span>
                    <h3 className="text-sm md:text-xl font-extrabold text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors">
                      <Link href="/magazine-co">{dietMain.title}</Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{dietMain.excerpt}</p>
                    <div className="flex items-center gap-3 text-[8px] text-gray-400 dark:text-gray-500 font-bold uppercase pt-0.5">
                      <span>By {dietMain.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {dietMain.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Grid 4 columns under */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {dietGrid.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-2">
                      <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-[10px] font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-3 hover:text-[#3b82f6] transition-colors">
                        <Link href="/magazine-co">{post.title}</Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest In Tech list block */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Latest In Tech</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {latestTech.map((post, idx) => (
                    <div key={idx} className="flex gap-3 group cursor-pointer pb-3 border-b border-gray-100 dark:border-white/5 last:border-0">
                      <div className="w-14 h-14 bg-gray-100 dark:bg-neutral-800 rounded-sm overflow-hidden shrink-0 relative aspect-square">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.isAudio && (
                          <span className="absolute bottom-1 left-1 bg-black/60 text-white p-0.5 rounded-sm"><Music size={8} /></span>
                        )}
                        {post.isVideo && (
                          <span className="absolute bottom-1 left-1 bg-black/60 text-white p-0.5 rounded-sm"><Play size={8} fill="currentColor" /></span>
                        )}
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <h4 className="text-[11px] font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h4>
                        <span className="text-[8px] text-gray-400 dark:text-gray-500 font-semibold uppercase mt-0.5 block">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Lifestyle</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lifestylePosts.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer space-y-3">
                      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-sm">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{post.category}</span>
                        <h4 className="text-xs font-extrabold text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors line-clamp-2">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Posts with Load More simulation */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                  <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Latest Posts</h4>
                </div>

                <div className="space-y-6">
                  {latestPostsLoop.slice(0, postsCount).map((post, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-5 group cursor-pointer pb-6 border-b border-gray-100 dark:border-white/5 last:pb-0 last:border-0">
                      <div className="w-full sm:w-[200px] aspect-[3/2] bg-gray-100 dark:bg-neutral-800 overflow-hidden rounded-sm shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col justify-center">
                        <span className="text-[8px] font-black uppercase text-[#3b82f6] tracking-widest block">{post.category}</span>
                        <h3 className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white leading-snug hover:text-[#3b82f6] transition-colors">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-3 text-[8px] text-gray-400 dark:text-gray-500 font-bold uppercase pt-0.5">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {postsCount < latestPostsLoop.length && (
                  <div className="text-center pt-4">
                    <button 
                      onClick={() => setPostsCount(postsCount + 2)}
                      className="border border-gray-200 dark:border-white/10 hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-sm text-gray-600 dark:text-gray-300"
                    >
                      Load More Posts
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
              
              {/* Popular Posts */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-5">
                <div className="border-b border-gray-100 dark:border-white/5 pb-2.5">
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-900 dark:text-white relative after:absolute after:bottom-[-12px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Popular Posts</h4>
                </div>

                <div className="space-y-6">
                  {popularPosts.map((post, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer relative pl-9">
                      {/* Circle number */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200 dark:border-white/10 text-gray-400 group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white flex items-center justify-center font-black text-[10px] transition-all duration-300">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                          <Link href="/magazine-co">{post.title}</Link>
                        </h4>
                        <span className="text-[8px] text-gray-400 dark:text-gray-500 font-semibold uppercase mt-0.5 block">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Split box: Newsletter (left/top) + Ad wrapper (right/bottom) */}
              <div className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-5">
                {/* Newsletter */}
                <div className="bg-[#0b0c11] dark:bg-[#06070a] text-white p-5 rounded-sm space-y-4">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-[#3b82f6]">Subscribe to Updates</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Get the latest creative news from FooBar about art, design and business.
                  </p>
                  {newsletterSubscribed ? (
                    <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] p-3 text-xs font-bold rounded-sm">
                      Thank you! Subscribed successfully.
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email address.." 
                        required 
                        value={subscribedEmail}
                        onChange={(e) => setSubscribedEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#3b82f6] px-3 py-2 text-xs text-white placeholder-white/30 rounded-sm outline-none"
                      />
                      <button 
                        type="submit" 
                        className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-2.5 text-[10px] font-black uppercase tracking-widest transition-colors rounded-sm"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>

                {/* Advertisement Widget */}
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Advertisement</span>
                  <a href="#" className="hover:opacity-95 transition-opacity">
                    <img 
                      src="https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/smartmag-sports.jpg" 
                      alt="Sports ad" 
                      className="w-full h-auto object-contain rounded-sm"
                    />
                  </a>
                </div>
              </div>

            </div>

          </section>
        </div>
      </div>


      {/* SECTION 6: Celebs News Carousel Slider (Bottom) */}
      <div className="bg-white dark:bg-[#0c0d12] py-8">
        <div className="container mx-auto max-w-[1200px] px-4">
          <section className="bg-white dark:bg-[#111217] p-5 border border-gray-100 dark:border-white/5 rounded-sm shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-3">
              <h4 className="text-xs font-black uppercase text-gray-900 dark:text-white tracking-widest relative after:absolute after:bottom-[-13px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Celebs News</h4>
              <div className="flex items-center space-x-3">
                <Link href="/magazine-co" className="text-[9px] font-black uppercase tracking-widest text-[#3b82f6] hover:underline">View More</Link>
                <div className="flex items-center space-x-1">
                  <button 
                    onClick={handleCelebsPrev}
                    className="w-5 h-5 bg-gray-50 dark:bg-white/5 hover:bg-[#3b82f6] hover:text-white flex items-center justify-center rounded-sm text-gray-400 transition-colors"
                  >
                    <ChevronLeft size={12} />
                  </button>
                  <button 
                    onClick={handleCelebsNext}
                    className="w-5 h-5 bg-gray-50 dark:bg-white/5 hover:bg-[#3b82f6] hover:text-white flex items-center justify-center rounded-sm text-gray-400 transition-colors"
                  >
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
              {celebsNews.slice(celebsIndex, celebsIndex + 4).map((post, idx) => (
                <div key={idx} className="group cursor-pointer space-y-3 relative">
                  <div className="aspect-[3/2] w-full overflow-hidden bg-gray-50 dark:bg-neutral-800 rounded-sm relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.rating && (
                      <div className="absolute bottom-2 right-2 bg-black/75 px-2 py-1 rounded-sm text-[10px] font-black text-white flex items-center gap-0.5">
                        <Star size={10} className="fill-[#3b82f6] text-[#3b82f6]" /> {post.rating}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 hover:text-[#3b82f6] transition-colors">
                      <Link href="/magazine-co">{post.title}</Link>
                    </h4>
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 font-bold block uppercase">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <MagazineCoFooter />
    </main>
  );
}
