"use client";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube, User, Moon, Mail, X, Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function GoodNewsHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Off-canvas Menu */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOffCanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOffCanvasOpen(false)}></div>
        <div className={`absolute top-0 left-0 w-80 h-full bg-[#19232D] text-white p-8 transition-transform duration-300 transform ${isOffCanvasOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-black italic">SMART<span className="text-[#3bc492]">MAG</span></span>
            <button onClick={() => setIsOffCanvasOpen(false)} className="text-white/50 hover:text-white"><X size={24} /></button>
          </div>
          
          <ul className="space-y-6 text-sm font-black uppercase tracking-widest">
            <li className="text-[#3bc492]"><Link href="/">Home</Link></li>
            <li>Features</li>
            <li>Mobiles</li>
            <li>Technology</li>
            <li>Politics</li>
            <li>Buy Theme</li>
          </ul>

          {/* Off-canvas Widgets */}
          <div className="mt-12 space-y-12">
            {/* Newsletter Widget */}
            <div className="bg-white/5 p-6 rounded-sm">
                <h3 className="text-sm font-black uppercase tracking-[2px] mb-4">Subscribe to Updates</h3>
                <p className="text-[11px] text-white/50 leading-relaxed mb-6 italic">Get the latest creative news from GoodNews about art, design and business.</p>
                <div className="flex flex-col gap-3">
                   <input type="email" placeholder="Your email address.." className="bg-white/10 border-none px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-[#3bc492]" />
                   <button className="bg-[#3bc492] text-black text-[10px] font-black uppercase py-3 hover:bg-white transition-colors">Subscribe</button>
                </div>
            </div>

            {/* What's Hot Widget */}
            <div>
                <h3 className="text-xs font-black uppercase tracking-[2px] mb-6 border-b border-white/10 pb-3">What's Hot</h3>
                <div className="space-y-6">
                    {[
                        { title: "Ryan Reynolds, Blake Lively Arrive at Film Festival", date: "Jan 14, 2021", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=200&auto=format&fit=crop" },
                        { title: "Santorini and Athens Make Most 'Instagrammable' Places", date: "Jan 14, 2021", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=200&auto=format&fit=crop" }
                    ].map((post, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer">
                            <img src={post.img} className="w-16 h-16 object-cover" />
                            <div className="space-y-1">
                                <h4 className="text-[11px] font-black leading-tight group-hover:text-[#3bc492] transition-colors">{post.title}</h4>
                                <div className="text-[9px] text-white/30 font-bold uppercase">{post.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="mt-20 border-t border-white/5 pt-8">
             <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/30 mb-6">Follow Us</h4>
             <div className="flex gap-4">
                <Facebook size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" />
                <Twitter size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" />
                <Instagram size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" />
                <Youtube size={18} className="text-white/50 hover:text-[#3bc492] cursor-pointer transition-colors" />
             </div>
          </div>
        </div>
      </div>

      <header className="w-full bg-black text-white">
        {/* Top Header Row (Social + Logo Center + Actions) */}
        <div className="border-b border-white/5 py-8">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Social Left */}
            <div className="hidden lg:flex items-center gap-5">
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3bc492] transition-colors"><Facebook size={14} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3bc492] transition-colors"><Twitter size={14} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3bc492] transition-colors"><Instagram size={14} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3bc492] transition-colors"><Youtube size={14} /></Link>
            </div>

            {/* Logo Center */}
            <Link href="/good-news" className="flex items-center text-6xl font-black tracking-tighter">
              <span>G</span>
              <div className="w-14 h-14 bg-[#3bc492] rounded-full mx-1 flex items-center justify-center shadow-[0_0_20px_rgba(59,196,146,0.3)]">
                <span className="text-[11px] font-black uppercase text-black leading-none">News</span>
              </div>
              <span>O</span>
              <span>D</span>
            </Link>

            {/* Actions Right */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-[11px] font-black uppercase tracking-[2px] border border-white/20 px-6 py-2 hover:bg-[#3bc492] hover:border-[#3bc492] transition-all">Subscribe</button>
              <Link href="#" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[2px] opacity-70 hover:opacity-100 transition-opacity">
                <User size={16} /> Login
              </Link>
            </div>
            
            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsOffCanvasOpen(true)}><Menu size={28} /></button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={`bg-black border-b border-white/10 z-50 transition-all ${isSticky ? 'fixed top-0 left-0 right-0 shadow-2xl animate-slideDown border-none' : ''}`}>
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <button className="hover:text-[#3bc492] transition-colors" onClick={() => setIsOffCanvasOpen(true)}><Menu size={22} /></button>
              
              <ul className="hidden lg:flex items-center space-x-10 text-[12px] font-black uppercase tracking-[2px]">
                <li className="text-[#3bc492] cursor-pointer"><Link href="/">Home</Link></li>
                <li className="hover:text-[#3bc492] transition-colors cursor-pointer group relative">
                    Features <span className="text-[8px] bg-red-500 px-1 ml-1 rounded-sm">HOT</span>
                </li>
                <li><Link href="/tech-1" className="hover:text-[#3bc492] transition-colors">GADGETS</Link></li>
                <li><Link href="/tech-1" className="hover:text-[#3bc492] transition-colors">TECHNOLOGY</Link></li>
                <li className="hover:text-[#3bc492] transition-colors cursor-pointer">Politics</li>
                <li className="hover:text-[#3bc492] transition-colors cursor-pointer">Buy Theme</li>
              </ul>
            </div>

            {/* Search & Scheme Switcher */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-white/70">
                <div className="cursor-pointer hover:text-[#3bc492] transition-colors">
                  <Moon size={18} />
                </div>
                <div className="cursor-pointer hover:text-[#3bc492] transition-colors border-l border-white/10 pl-4">
                  <Search size={18} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
