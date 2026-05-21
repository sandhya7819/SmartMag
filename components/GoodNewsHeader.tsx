"use client";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube, User, Moon, Mail, X, Plus, UserCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function GoodNewsHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [trendingIndex, setTrendingIndex] = useState(0);

  const trendingNews = [
    "Mercedes' Lead Designer Talks to Euronews About Future",
    "Scientists bid Goodbye to Virus With Latest Vaccine",
    "The Right Morning Routine Can Keep You Energized",
    "How to Make Perfume Last Longer Than Before"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    
    const interval = setInterval(() => {
      setTrendingIndex((prev) => (prev + 1) % trendingNews.length);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Off-canvas Menu (Mobile Menu) */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOffCanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOffCanvasOpen(false)}></div>
        <div className={`absolute top-0 left-0 w-80 h-full bg-[#19232D] text-white overflow-y-auto transition-transform duration-300 transform ${isOffCanvasOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-8 pb-4">
            <Link href="/good-news" className="block">
              <img 
                src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/goodnews-logo-2-mobile.png" 
                alt="SmartMag GoodNews" 
                className="w-[198px] h-auto"
              />
            </Link>
            <button onClick={() => setIsOffCanvasOpen(false)} className="text-white/50 hover:text-white transition-colors"><X size={24} /></button>
          </div>
          
          <div className="p-8 pt-4">
            <ul className="space-y-6 text-sm font-black uppercase tracking-widest border-b border-white/5 pb-8">
              <li className="text-[#3bc492]"><Link href="/good-news">Home</Link></li>
              <li><Link href="#" className="hover:text-[#3bc492] transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-[#3bc492] transition-colors">Technology</Link></li>
              <li><Link href="#" className="hover:text-[#3bc492] transition-colors">Politics</Link></li>
              <li><Link href="#" className="hover:text-[#3bc492] transition-colors">Lifestyle</Link></li>
              <li><Link href="#" className="hover:text-[#3bc492] transition-colors">Health</Link></li>
            </ul>

            <div className="mt-12 space-y-12">
              <div className="text-center">
                  <h3 className="text-[17px] font-black uppercase tracking-tight mb-4">Subscribe to Updates</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed mb-6">Get the latest creative news from SmartMag about art, design and business.</p>
                  <form className="space-y-3">
                     <input type="email" placeholder="Your email address.." className="w-full bg-white/5 border-none px-4 py-3.5 text-xs outline-none focus:ring-1 focus:ring-[#3bc492] rounded-sm" required />
                     <button className="w-full bg-[#3bc492] text-black text-[11px] font-black uppercase py-4 hover:bg-white transition-colors tracking-widest rounded-sm">Subscribe</button>
                  </form>
              </div>

              <div>
                  <h3 className="text-xs font-black uppercase tracking-[2px] mb-6 border-b border-white/10 pb-3">What's Hot</h3>
                  <div className="space-y-6">
                      {[
                          { title: "Ryan Reynolds, Blake Lively Arrive at Film Festival", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_268168544_xl-2015-150x100.jpg" },
                          { title: "Santorini and Athens Make Most 'Instagrammable' Places", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/alexandre-chambon-aapSemzfsOk-unsplash-1-150x100.jpg" },
                          { title: "Dubai Properties Review: Sales on An Upswing, Despite Covid-19", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/kent-tupas-PsGNSpf3vKc-unsplash-1-150x100.jpg" }
                      ].map((post, i) => (
                          <div key={i} className="flex gap-4 group cursor-pointer">
                              <div className="w-16 h-12 overflow-hidden shrink-0">
                                <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                              </div>
                              <div className="space-y-1">
                                  <h4 className="text-[12px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h4>
                                  <div className="text-[10px] text-white/30 font-bold uppercase">{post.date}</div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
            </div>

            <div className="mt-20 border-t border-white/5 pt-8 pb-12">
               <div className="flex gap-6 justify-center">
                  <Link href="#"><Facebook size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" /></Link>
                  <Link href="#"><Twitter size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" /></Link>
                  <Link href="#"><Instagram size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" /></Link>
                  <Link href="#"><Youtube size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" /></Link>
               </div>
            </div>
          </div>
        </div>
      </div>

      <header className="w-full bg-[#111] text-white">
        {/* Top Header Row */}
        <div className="border-b border-white/5 py-8 md:py-12">
          <div className="container mx-auto px-4 flex justify-between items-center relative">
            {/* Social Left */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Youtube size={16} /></Link>
            </div>

            {/* Logo Center */}
            <Link href="/good-news" className="block mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <img 
                src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/goodnews-logo-2.png" 
                alt="SmartMag GoodNews" 
                className="w-[220px] md:w-[263px] h-auto"
              />
            </Link>

            {/* Actions Right */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#" className="text-[11px] font-black uppercase tracking-[2px] bg-[#3bc492] text-black px-7 py-2.5 hover:bg-white transition-all rounded-sm shadow-lg shadow-[#3bc492]/10">Subscribe</Link>
              <Link href="#" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[2px] hover:text-[#3bc492] transition-colors">
                <UserCircle size={20} className="text-white/60" /> Login
              </Link>
            </div>
            
            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsOffCanvasOpen(true)}><Menu size={28} /></button>
          </div>
        </div>

        {/* Trending Ticker */}
        <div className="bg-[#181818] border-b border-white/5 py-3 hidden md:block">
          <div className="container mx-auto px-4 flex items-center gap-6">
            <div className="flex items-center gap-2 shrink-0">
               <span className="w-2 h-2 bg-[#3bc492] rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black uppercase tracking-[1.5px] text-[#3bc492]">Trending Now:</span>
            </div>
            <div className="relative h-5 flex-1 overflow-hidden">
               {trendingNews.map((news, i) => (
                 <p 
                   key={i} 
                   className={`absolute inset-0 text-[12px] font-bold text-white/80 hover:text-[#3bc492] transition-all duration-500 cursor-pointer ${i === trendingIndex ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                 >
                   {news}
                 </p>
               ))}
            </div>
            <div className="flex items-center gap-1">
               <button onClick={() => setTrendingIndex((prev) => (prev - 1 + trendingNews.length) % trendingNews.length)} className="p-1 hover:text-[#3bc492] transition-colors"><ChevronLeft size={14} /></button>
               <button onClick={() => setTrendingIndex((prev) => (prev + 1) % trendingNews.length)} className="p-1 hover:text-[#3bc492] transition-colors"><ChevronRight size={14} /></button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={`bg-[#111] border-b border-white/10 z-[60] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-2xl' : ''}`}>
          <div className="container mx-auto px-4 flex justify-between items-center h-[65px]">
            <div className="flex items-center gap-10">
              <button className="hover:text-[#3bc492] transition-colors group p-2" onClick={() => setIsOffCanvasOpen(true)}>
                 <div className="flex flex-col gap-1.5 w-5">
                    <span className="w-full h-[2px] bg-white group-hover:bg-[#3bc492] transition-all"></span>
                    <span className="w-3/4 h-[2px] bg-white group-hover:bg-[#3bc492] transition-all"></span>
                    <span className="w-full h-[2px] bg-white group-hover:bg-[#3bc492] transition-all"></span>
                 </div>
              </button>
              
              <ul className="hidden lg:flex items-center space-x-10 text-[12px] font-black uppercase tracking-[2px]">
                <li className="text-[#3bc492] border-b-2 border-[#3bc492] h-[65px] flex items-center"><Link href="/good-news">Home</Link></li>
                <li className="hover:text-[#3bc492] transition-colors cursor-pointer h-[65px] flex items-center gap-1.5 group relative">
                  Features <Plus size={10} className="group-hover:rotate-90 transition-transform" />
                  <div className="absolute top-[65px] left-0 w-48 bg-white text-black shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-4 z-50">
                    <ul className="text-[10px] space-y-4 px-6">
                      <li className="hover:text-[#3bc492] transition-colors">Post Layouts</li>
                      <li className="hover:text-[#3bc492] transition-colors">Category Layouts</li>
                      <li className="hover:text-[#3bc492] transition-colors">Header Styles</li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#3bc492] transition-colors h-[65px] flex items-center"><Link href="#">Technology</Link></li>
                <li className="hover:text-[#3bc492] transition-colors h-[65px] flex items-center"><Link href="#">Politics</Link></li>
                <li className="hover:text-[#3bc492] transition-colors h-[65px] flex items-center"><Link href="#">Lifestyle</Link></li>
                <li className="hover:text-[#3bc492] transition-colors h-[65px] flex items-center"><Link href="#">Health</Link></li>
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-white/60 hover:text-[#3bc492] transition-colors" aria-label="Toggle Dark Mode"><Moon size={18} /></button>
              <div className="w-[1px] h-4 bg-white/10"></div>
              <button className="text-white/60 hover:text-[#3bc492] transition-colors" aria-label="Search"><Search size={18} /></button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
