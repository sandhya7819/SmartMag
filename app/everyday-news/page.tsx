"use client";

import React from "react";
import Link from "next/link";
import EverydayNewsHeader from "@/components/EverydayNewsHeader";
import EverydayNewsFooter from "@/components/EverydayNewsFooter";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, Instagram, Twitter, Facebook, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function EverydayNewsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#e91e63] selection:text-white">
      <EverydayNewsHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* 1. Hero Grid (1 Large + 2 Supporting) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 group cursor-pointer space-y-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
              <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute top-6 left-6 bg-[#e91e63] text-white px-3 py-1 text-[11px] font-black uppercase tracking-widest">Politics</div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[42px] font-black leading-tight text-[#111] group-hover:text-[#e91e63] transition-colors">Economic Summit Fails to Reach Agreement on Global Carbon Tax</h2>
              <p className="text-gray-500 text-lg leading-relaxed">Global leaders gathered in Geneva this week for high-stakes talks that ended in a stalemate, as emerging economies and developed nations remained divided over funding mechanisms...</p>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            {[
              { title: "New Technology Breakthrough Could Double Battery Life of Smartphones", cat: "Tech", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400" },
              { title: "Report: How Remote Work is Transforming Global Real Estate Markets", cat: "Business", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative">
                  <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute top-4 left-4 bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">{post.cat}</div>
                </div>
                <h4 className="text-xl font-black leading-tight group-hover:text-[#e91e63] transition-colors">{post.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Trending Bar */}
        <div className="bg-[#f8f9fa] p-4 flex items-center gap-6 mb-20 rounded-sm">
          <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#e91e63]">
            <TrendingUp size={16} /> Trending
          </span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <div className="flex gap-8 text-[11px] font-bold text-gray-400 overflow-hidden whitespace-nowrap">
            <Link href="#" className="hover:text-black transition-colors">#CyberSecurity</Link>
            <Link href="#" className="hover:text-black transition-colors">#Election2024</Link>
            <Link href="#" className="hover:text-black transition-colors">#AIFuture</Link>
            <Link href="#" className="hover:text-black transition-colors">#ClimateAction</Link>
          </div>
        </div>

        {/* 3. Fashion Trends (Special Light Green Section) */}
        <section className="bg-[#dcedc8] p-12 -mx-4 md:-mx-12 mb-20 rounded-sm border-y border-[#c5e1a5]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-[#33691e]">Fashion Trends</h3>
            <Link href="#" className="text-[11px] font-black uppercase tracking-widest hover:text-[#33691e] transition-colors">See the Gallery</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 group cursor-pointer space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <h4 className="text-2xl font-black leading-tight text-[#1b5e20] group-hover:text-black transition-colors">Sustainable Chic: Why Eco-Friendly Fabrics are Taking Over the Runway</h4>
            </div>
            <div className="space-y-8">
               {[
                 { title: "The Return of 90s Minimalism", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400" },
                 { title: "Top 5 Accessories for Fall", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" }
               ].map((post, i) => (
                 <div key={i} className="group cursor-pointer space-y-3">
                   <div className="aspect-square overflow-hidden rounded-sm">
                     <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <h5 className="text-[14px] font-black leading-tight text-[#33691e] group-hover:text-black transition-colors">{post.title}</h5>
                 </div>
               ))}
            </div>
            <div className="space-y-8">
               {[
                 { title: "Bold Colors: Neon is Back", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400" },
                 { title: "Streetwear's New Luxury Era", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400" }
               ].map((post, i) => (
                 <div key={i} className="group cursor-pointer space-y-3">
                   <div className="aspect-square overflow-hidden rounded-sm">
                     <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <h5 className="text-[14px] font-black leading-tight text-[#33691e] group-hover:text-black transition-colors">{post.title}</h5>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 4. News Feed + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-16">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#111] border-b-2 border-black inline-block pb-1">Finance & Politics</h3>
            <div className="space-y-12">
              {[
                { title: "Wall Street Rallies as Inflation Data Shows Cooling Trend", cat: "Finance", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600" },
                { title: "Elections: Surprising Results in the Mid-Western Primaries", cat: "Politics", img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=600" },
                { title: "New Banking Regulations Aim to Increase Market Stability", cat: "Finance", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600" },
                { title: "Diplomatic Tensions Rise Over New Trade Agreements", cat: "Politics", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600" }
              ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer items-center border-b border-gray-50 pb-12 last:border-0">
                  <div className="md:w-[280px] aspect-[1.4/1] shrink-0 overflow-hidden rounded-sm relative">
                    <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="text-[10px] text-[#e91e63] font-black uppercase tracking-widest">{post.cat}</div>
                    <h3 className="text-2xl font-black leading-tight group-hover:text-[#e91e63] transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      <span>John Doe</span>
                      <span>•</span>
                      <span>Mar 8, 2025</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">Exploring the latest developments in {post.cat.toLowerCase()} and how they are impacting our daily lives...</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 border-2 border-black text-black font-black uppercase tracking-widest text-[12px] hover:bg-black hover:text-white transition-all">Load More Stories</button>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3 space-y-16">
            <div className="bg-[#111] p-10 text-center text-white relative overflow-hidden group rounded-sm shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e91e63]/10 rounded-full group-hover:scale-110 transition-transform"></div>
              <MailIcon size={40} className="mx-auto mb-6 text-[#e91e63] opacity-30" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">The Briefing</h3>
              <p className="text-white/60 text-[14px] mb-8 leading-relaxed">Join 150k+ readers who start their day with our curated news.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all text-center" />
                <button className="w-full bg-[#e91e63] text-white font-black uppercase tracking-widest text-[12px] py-4 hover:bg-black transition-all shadow-lg">Subscribe Now</button>
              </form>
            </div>

            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Trending Stories</h3>
              <div className="space-y-6 pt-2">
                {[
                  "Scientists Discover New Species in the Deep Amazon",
                  "Why Digital Privacy is the Most Important Issue of 2024",
                  "Review: The Future of Electric High-Performance SUVs",
                  "10 Essential Habits for Sustainable Living This Year"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-[38px] font-black text-gray-100 group-hover:text-[#e91e63] transition-colors leading-none italic">{i + 1}</span>
                    <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#e91e63] transition-colors pt-2">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[3/4] bg-gray-50 border border-gray-100 rounded-sm flex flex-col items-center justify-center p-12 text-center group cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400')] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity"></div>
               <div className="relative z-10 space-y-4">
                 <div className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">Advertisement</div>
                 <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Everyday News Premium</h3>
                 <p className="text-gray-500 text-sm">Unlock the full potential of high-quality journalism.</p>
                 <button className="bg-black text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#e91e63] transition-colors">Join Member</button>
               </div>
            </div>
          </aside>
        </div>
      </div>

      <EverydayNewsFooter />
    </main>
  );
}
