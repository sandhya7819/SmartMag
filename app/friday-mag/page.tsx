"use client";

import React from "react";
import Link from "next/link";
import FridayMagHeader from "@/components/FridayMagHeader";
import FridayMagFooter from "@/components/FridayMagFooter";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, Instagram, Twitter, Facebook, MessageSquare, Clock, ArrowRight, Star } from "lucide-react";

export default function FridayMagPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#f7b500] selection:text-black">
      <FridayMagHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* 1. Hero Section (2 Large + 4 Small Grid) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Main Hero Stack (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm relative">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-[#f7b500] text-black px-3 py-1 text-[11px] font-black uppercase tracking-widest">Fashion</div>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-black leading-tight group-hover:text-[#f7b500] transition-colors font-outfit">The New Minimalist: Why Less is More in 2025</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Exploring the shift towards quality-over-quantity in the global fashion industry and how it's redefining personal style for the modern era.</p>
              </div>
            </div>
            <div className="space-y-6 group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm relative">
                <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-black text-white px-3 py-1 text-[11px] font-black uppercase tracking-widest">Lifestyle</div>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-black leading-tight group-hover:text-[#f7b500] transition-colors font-outfit">10 Essential Habits for a Productive Morning Routine</h2>
                <p className="text-gray-500 text-sm leading-relaxed">How high-performers structure their first 60 minutes to ensure peak creativity and sustained energy throughout the workday.</p>
              </div>
            </div>
          </div>

          {/* Side Hero Grid (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-8">
            {[
              { title: "Review: The Best Noise-Cancelling Headphones of the Year", cat: "Tech", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
              { title: "The Ultimate Guide to Custom PC Building for Beginners", cat: "Gaming", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400" },
              { title: "Travel: Why Tokyo remains the world's most exciting city", cat: "Travel", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=400" }
            ].map((post, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm bg-gray-50">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-[9px] font-black text-[#f7b500] uppercase tracking-widest">{post.cat}</span>
                  <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#f7b500] transition-colors line-clamp-2">{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Editor's Choice (Large Cards with Overlays) */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-100">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Editor's Top Picks</h3>
            <div className="flex-1 h-[1px] bg-gray-50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How to Build a Sustainable Wardrobe on a Budget", cat: "Style", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600" },
              { title: "The Rise of Electric Vehicles: What You Need to Know", cat: "Auto", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600" },
              { title: "Exploring the Future of Renewable Energy Solutions", cat: "Science", img: "https://images.unsplash.com/photo-1509391366360-fe5bb658589b?q=80&w=600" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-3">
                  <div className="bg-[#f7b500] text-black px-2 py-0.5 text-[9px] font-black uppercase tracking-widest inline-block">{post.cat}</div>
                  <h3 className="text-2xl font-black text-white leading-tight group-hover:text-[#f7b500] transition-colors font-outfit">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Main Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Latest News (66%) */}
          <div className="lg:w-2/3 space-y-16">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Latest from Friday</h3>
              <div className="flex-1 h-[1px] bg-gray-50"></div>
            </div>
            <div className="space-y-12">
              {[
                { title: "The Best Modern Sound Systems for Your Home Office Setup", cat: "Audio", img: "https://images.unsplash.com/photo-1508685096489-7aac241bd9b2?q=80&w=800" },
                { title: "Why Mindful Living is the Most Important Trend of the Decade", cat: "Wellness", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800" },
                { title: "Top 10 Most Underrated Cities to Visit in Western Europe", cat: "Travel", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800" },
                { title: "The Impact of Artificial Intelligence on Modern Web Design", cat: "Tech", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" }
              ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-10 group cursor-pointer items-center border-b border-gray-50 pb-12 last:border-0 last:pb-0">
                  <div className="md:w-[350px] aspect-[1.5/1] shrink-0 overflow-hidden rounded-sm relative">
                    <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="text-[10px] text-[#f7b500] font-black uppercase tracking-widest">{post.cat}</div>
                    <h3 className="text-2xl font-black leading-tight group-hover:text-[#f7b500] transition-colors font-outfit">{post.title}</h3>
                    <div className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                      <span>John Doe</span>
                      <span>•</span>
                      <span>Mar 8, 2025</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">Exploring the latest developments in {post.cat.toLowerCase()} and how they are impacting our daily lives in ways we never expected...</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-gray-50 text-black font-black uppercase tracking-widest text-[12px] hover:bg-[#f7b500] transition-all rounded-sm">
              Explore More Stories
            </button>
          </div>

          {/* Sidebar (33%) */}
          <aside className="lg:w-1/3 space-y-16">
            {/* Dark Newsletter Widget */}
            <div className="bg-[#111] p-10 text-center text-white relative overflow-hidden group rounded-sm shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7b500]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={40} className="mx-auto mb-6 text-[#f7b500] opacity-50" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 font-outfit">Stay in the Loop</h3>
              <p className="text-white/60 text-[14px] mb-8 leading-relaxed">Join 25,000+ subscribers for our weekly curated digest.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all text-center" />
                <button className="w-full bg-[#f7b500] text-black font-black uppercase tracking-widest text-[12px] py-4 hover:bg-white transition-all shadow-lg">Subscribe</button>
              </form>
            </div>

            {/* Trending Sidebar */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Trending Now</h3>
              <div className="space-y-8">
                {[
                  { title: "How Urban Planning is Adapting to Climate Change", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=200" },
                  { title: "The Global Impact of New Semiconductor Policies", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200" },
                  { title: "Review: The New MacBook Pro M3 Max is a Beast", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=200" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm bg-gray-50">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#f7b500] transition-colors">{post.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Space */}
            <div className="aspect-square bg-gray-50 border border-gray-100 rounded-sm flex flex-col items-center justify-center p-12 text-center group cursor-pointer relative overflow-hidden">
               <div className="relative z-10 space-y-4">
                 <div className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">Advertisement</div>
                 <h3 className="text-2xl font-black uppercase tracking-tighter text-black">Unlock Premium Access</h3>
                 <button className="bg-black text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#f7b500] transition-colors">Learn More</button>
               </div>
            </div>
          </aside>
        </div>
      </div>

      <FridayMagFooter />
    </main>
  );
}
