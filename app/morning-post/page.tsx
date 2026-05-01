"use client";

import React from "react";
import Link from "next/link";
import MorningPostHeader from "@/components/MorningPostHeader";
import MorningPostFooter from "@/components/MorningPostFooter";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, Instagram, Twitter, Facebook, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function MorningPostPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#3f51b5] selection:text-white">
      <MorningPostHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* 1. Hero Section (List + Featured Stack) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* Left: Just In List (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3 border-b-2 border-[#3f51b5] pb-2 mb-6">
               <h3 className="text-[13px] font-black uppercase tracking-widest text-[#111]">Just In</h3>
            </div>
            <div className="space-y-8">
              {[
                { title: "Apple to Launch New M5 Chip Early Next Year, Reports Suggest", time: "10 Min Ago" },
                { title: "SpaceX Starship Prepares for Historic Fifth Test Flight", time: "25 Min Ago" },
                { title: "Global Markets Stabilize as Inflation Data Meets Forecasts", time: "40 Min Ago" },
                { title: "EU Proposes Stricter Rules for AI Training Data Transparency", time: "1 Hour Ago" },
                { title: "New Cancer Research Breakthrough Shows Promising Early Results", time: "2 Hours Ago" }
              ].map((post, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-50 pb-6 last:border-0">
                  <h4 className="text-[15px] font-bold text-[#111] leading-tight group-hover:text-[#3f51b5] transition-colors">{post.title}</h4>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 inline-block">{post.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured Stack (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Big Main Article (8 cols of the 9) */}
            <div className="md:col-span-8 group cursor-pointer space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
                <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-[#3f51b5] text-white px-3 py-1 text-[11px] font-black uppercase tracking-widest">Politics</div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[44px] font-black leading-tight text-[#111] group-hover:text-[#3f51b5] transition-colors font-serif italic">
                  Summit Ends in Stalemate as Major Powers Clash Over Climate Funding
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  The three-day high-stakes negotiations in Brussels concluded without a joint communique, highlighting the deep rift between developing nations and industrial powers over financial responsibility...
                </p>
                <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>By Sarah Mitchell</span>
                  <span>•</span>
                  <span>March 8, 2025</span>
                </div>
              </div>
            </div>

            {/* Side Grid Articles (4 cols of the 9) */}
            <div className="md:col-span-4 space-y-10">
               {[
                 { title: "Review: The New Era of Urban Architecture", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400" },
                 { title: "How Remote Work is Reshaping Global Economy", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400" },
                 { title: "The Rise of Private Space Exploration in 2025", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400" }
               ].map((post, i) => (
                 <div key={i} className="group cursor-pointer space-y-4">
                   <div className="aspect-[16/10] overflow-hidden rounded-sm relative">
                     <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                   </div>
                   <h4 className="text-[16px] font-black leading-tight group-hover:text-[#3f51b5] transition-colors">{post.title}</h4>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 2. Technology Section (ListView) */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-100">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#111] border-l-4 border-[#3f51b5] pl-4">Technology</h3>
            <div className="flex-1"></div>
            <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-[#3f51b5] transition-colors">View All News</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Quantum Computing Reaches New Milestone in Error Correction", cat: "Science", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600" },
              { title: "Next-Gen EV Batteries Promise 1000-Mile Range in Five Minutes", cat: "Auto", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600" },
              { title: "The Ethics of Generative AI in the Modern Workplace", cat: "Future", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-6">
                <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative shadow-lg">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 text-[#3f51b5] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-sm">
                    {post.cat}
                  </div>
                </div>
                <h4 className="text-xl font-black leading-tight group-hover:text-[#3f51b5] transition-colors">{post.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">Exploring the latest breakthroughs and shifts in global tech industry as we move into a new era of innovation...</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Featured Video (Dark Immersive) */}
        <section className="bg-[#0f1218] p-12 -mx-4 md:-mx-12 mb-20 relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 group/vid cursor-pointer relative aspect-video overflow-hidden rounded-sm shadow-2xl">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200" className="w-full h-full object-cover opacity-60 transition-transform duration-[3s] group-hover/vid:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#3f51b5] rounded-full flex items-center justify-center text-white shadow-2xl group-hover/vid:scale-110 transition-transform">
                  <Play size={40} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black to-transparent">
                <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase mb-4 inline-block">EXCLUSIVE DOCUMENTARY</span>
                <h3 className="text-4xl font-black text-white leading-tight font-serif italic">The Silent Revolution: Inside the New Space Race</h3>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-10">
              <h3 className="text-2xl font-black text-white border-b border-white/10 pb-4">Up Next</h3>
              <div className="space-y-8">
                {[
                  { title: "Interview: The Future of Neural Tech", time: "15:20" },
                  { title: "Climate Summit Highlights 2025", time: "08:45" },
                  { title: "Inside the World's First Mega Factory", time: "22:10" }
                ].map((vid, i) => (
                  <div key={i} className="flex gap-4 group/item cursor-pointer items-center border-b border-white/5 pb-6 last:border-0">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-400 group-hover/item:bg-[#3f51b5] group-hover/item:text-white transition-all">
                      <Play size={16} fill="currentColor" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-[15px] font-bold text-gray-200 group-hover/item:text-blue-400 transition-colors leading-tight">{vid.title}</h5>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">{vid.time} Remaining</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Business & World Feed + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="lg:w-2/3 space-y-16">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#111] border-b-2 border-[#3f51b5] inline-block pb-1">Business & World</h3>
            <div className="space-y-12">
              {[
                { title: "Global Trade Flows Shifting Towards Emerging Asian Markets", cat: "Business", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800" },
                { title: "New Cultural Festival in Berlin Celebrates Modern Art and Diversity", cat: "World", img: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?q=80&w=800" },
                { title: "Archaeological Discovery in Egypt Sheds Light on Ancient Routes", cat: "History", img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800" },
                { title: "Report: The Impact of Remote Work on Global Urban Development", cat: "Economy", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" }
              ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer items-center border-b border-gray-50 pb-12 last:border-0">
                  <div className="md:w-[300px] aspect-[1.5/1] shrink-0 overflow-hidden rounded-sm relative shadow-md">
                    <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="text-[10px] text-[#3f51b5] font-black uppercase tracking-widest">{post.cat}</div>
                    <h3 className="text-2xl font-black leading-tight group-hover:text-[#3f51b5] transition-colors font-serif italic">{post.title}</h3>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      <span>John Doe</span>
                      <span>•</span>
                      <span>Mar 8, 2025</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">As the global landscape continues to shift, experts are looking closer at how digital infrastructure and cultural shifts are shaping the next generation...</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 border-2 border-black text-black font-black uppercase tracking-widest text-[12px] hover:bg-black hover:text-white transition-all shadow-md">Load More Headlines</button>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-16">
            {/* Numbered Trending */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-[#3f51b5] inline-block pb-1">Most Popular</h3>
              <div className="space-y-8 pt-4">
                {[
                  "10 Cities Every Modern Traveler Should Visit in 2025",
                  "Why High-End Audio Gear is Making a Massive Comeback",
                  "Exploring the Future of Sustainable Urban Development",
                  "How to Build a Minimalist Wardrobe That Lasts a Lifetime",
                  "The Rise of Digital Nomads in the Mediterranean Region"
                ].map((title, i) => (
                  <div key={i} className="flex gap-5 group cursor-pointer items-start">
                    <span className="text-[42px] font-black text-gray-100 group-hover:text-[#3f51b5] transition-colors leading-none italic">{i + 1}</span>
                    <h4 className="text-[15px] font-bold text-[#111] leading-snug group-hover:text-[#3f51b5] transition-colors pt-2">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Side */}
            <div className="bg-[#3f51b5] text-white p-10 rounded-sm relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={40} className="mb-6 opacity-30" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">Weekly Digest</h3>
              <p className="text-white/70 text-[14px] mb-8 leading-relaxed font-bold italic">The briefing you need to start your weekend informed.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all placeholder:text-white/60" />
                <button className="w-full bg-white text-[#3f51b5] font-black uppercase tracking-widest text-[12px] py-4 hover:bg-black hover:text-white transition-all shadow-lg">Subscribe Free</button>
              </form>
            </div>

            {/* Editor's Picks Sidebar */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Editor's Picks</h3>
              <div className="space-y-8">
                {[
                  { title: "Review: The Future of Smart Homes in 2025", cat: "Life", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=200" },
                  { title: "Why Traditional Print Media is Seeing a Resurgence", cat: "Media", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=200" },
                  { title: "Top 5 Destination for Sustainable Tourism This Year", cat: "Travel", img: "https://images.unsplash.com/photo-1502484736528-7440011f3d59?q=80&w=200" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm relative shadow-sm">
                      <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-[#3f51b5] uppercase tracking-widest">{post.cat}</span>
                      <h4 className="text-[14px] font-bold text-[#111] leading-tight group-hover:text-[#3f51b5] transition-colors">{post.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <MorningPostFooter />
    </main>
  );
}
