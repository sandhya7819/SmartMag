"use client";

import React from "react";
import Link from "next/link";
import CuratedMagHeader from "@/components/CuratedMagHeader";
import CuratedMagFooter from "@/components/CuratedMagFooter";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, Instagram, Twitter, Facebook, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function CuratedMagPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E40784] selection:text-white">
      <CuratedMagHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 group cursor-pointer space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-[2px]">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute top-6 left-6 bg-[#E40784] text-white px-3 py-1 text-[11px] font-black uppercase tracking-widest">Technology</div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-tight tracking-tighter group-hover:text-[#E40784] transition-colors">The Rise of Neural Networks: How AI is Redefining Creative Boundaries</h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">As artificial intelligence continues to evolve at an exponential rate, its impact on the creative industries has sparked both wonder and concern.</p>
              <div className="flex items-center gap-4 text-[11px] font-black text-gray-400 uppercase tracking-widest"><span>By Sarah Mitchell</span><span>•</span><span>March 10, 2025</span></div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black pb-2 mb-6">News Just In</h3>
            <div className="space-y-8">
              {[
                { title: "Apple Announces Revolutionary New AR Glasses", time: "2 Hours Ago", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=200" },
                { title: "SpaceX Successfully Lands Starship on Mars", time: "4 Hours Ago", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=200" },
                { title: "Global Markets Stabilize After Volatility", time: "6 Hours Ago", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=200" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-start">
                  <div className="flex-1 space-y-1"><h4 className="text-[14px] font-bold text-[#111] group-hover:text-[#E40784] transition-colors">{post.title}</h4><span className="text-[10px] text-gray-400 font-bold uppercase">{post.time}</span></div>
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm"><img src={post.img} className="w-full h-full object-cover" /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editor's Picks */}
        <section className="mb-20">
          <h3 className="text-xl font-black uppercase tracking-widest text-[#111] mb-10 pb-4 border-b border-gray-100">Editor's Picks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "The Hidden Gems of Southern Italy", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=400&auto=format&fit=crop" },
              { title: "Minimalism: Finding Focus in a Digital World", cat: "Culture", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400&auto=format&fit=crop" },
              { title: "Future of Work: The Hybrid Office Model", cat: "Business", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&auto=format&fit=crop" },
              { title: "Modernist Cuisine: The Science of Cooking", cat: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop" },
              { title: "Sustainable Fashion: Brands You Need to Know", cat: "Style", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-[2px] relative">
                  <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-3 left-3 bg-[#E40784] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">{post.cat}</div>
                </div>
                <h4 className="text-[15px] font-black group-hover:text-[#E40784] transition-colors leading-snug">{post.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Technology & Lifestyle (Split 1+3 Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Technology */}
          <section className="space-y-8">
            <div className="border-l-4 border-[#E40784] pl-4 flex justify-between items-center">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Technology</h3>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-[#E40784] transition-colors">View All</Link>
            </div>
            <div className="space-y-8">
              <div className="group cursor-pointer space-y-4">
                <div className="aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-[24px] font-black leading-tight group-hover:text-[#E40784] transition-colors">Silicon Valley's Newest Unicorn is Solving the Energy Crisis</h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">The latest tech giant to emerge from Palo Alto has revealed a breakthrough in solid-state battery technology that could power cities for centuries...</p>
              </div>
              <div className="space-y-6 pt-6 border-t border-gray-100">
                {[
                  { title: "Top 5 AI Apps for Professional Productivity in 2025", cat: "Software" },
                  { title: "Review: The New MacBook Pro M4 Max is a Beast", cat: "Hardware" },
                  { title: "Cybersecurity Trends: How to Protect Your Data Today", cat: "Security" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="w-1.5 h-1.5 bg-[#E40784] rounded-full mt-2 shrink-0"></span>
                    <div className="space-y-1">
                      <div className="text-[9px] font-black text-[#E40784] uppercase tracking-[0.2em]">{post.cat}</div>
                      <h5 className="text-[16px] font-bold text-[#111] leading-tight group-hover:text-[#E40784] transition-colors">{post.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lifestyle */}
          <section className="space-y-8">
            <div className="border-l-4 border-black pl-4 flex justify-between items-center">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Lifestyle</h3>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-[#E40784] transition-colors">Explore</Link>
            </div>
            <div className="space-y-8">
              <div className="group cursor-pointer space-y-4">
                <div className="aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-[24px] font-black leading-tight group-hover:text-[#E40784] transition-colors">The Art of Slow Living: Reclaiming Time in a Fast-Paced World</h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">In an era defined by constant connectivity, a new movement is encouraging people to slow down and rediscover the joy of the present moment...</p>
              </div>
              <div className="space-y-6 pt-6 border-t border-gray-100">
                {[
                  { title: "10 Essential Habits for a Healthier Morning Routine", cat: "Wellness" },
                  { title: "Home Design: How to Create a Zen Office Space", cat: "Interiors" },
                  { title: "Travel Guide: The Most Underrated Cities in Asia", cat: "Travel" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                    <div className="space-y-1">
                      <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{post.cat}</div>
                      <h5 className="text-[16px] font-bold text-[#111] leading-tight group-hover:text-[#E40784] transition-colors">{post.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Video Desk */}
        <section className="bg-[#111] text-white p-12 -mx-4 md:-mx-12 mb-20 relative overflow-hidden group">
          <div className="relative z-10 space-y-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter italic">Video Desk</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 group/vid cursor-pointer relative aspect-video overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-20 h-20 bg-[#E40784] rounded-full flex items-center justify-center"><Play size={32} fill="currentColor" /></div></div>
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black to-transparent"><h4 className="text-3xl font-black">The Future of AI: New Documentary</h4></div>
              </div>
              <div className="lg:col-span-4 space-y-6">
                {[
                  { title: "Interview with AI Robot", time: "12:45", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=200" },
                  { title: "Deep Ocean Secrets", time: "08:20", img: "https://images.unsplash.com/photo-1471970333252-70802777b1e4?q=80&w=200" }
                ].map((vid, i) => (
                  <div key={i} className="flex gap-4 group/item cursor-pointer items-center border-b border-white/5 pb-6 last:border-0">
                    <div className="w-24 h-16 shrink-0 overflow-hidden rounded-sm relative bg-gray-900"><img src={vid.img} className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 flex items-center justify-center"><Play size={16} fill="currentColor" /></div></div>
                    <div className="space-y-1"><h5 className="text-[14px] font-bold group-hover/item:text-[#E40784] transition-colors leading-tight">{vid.title}</h5><span className="text-[10px] text-gray-500 font-bold uppercase">{vid.time}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Feed */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-2/3 space-y-16">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">World News \u0026 Culture</h3>
            <div className="space-y-12">
              {[
                { title: "European Trade Future", cat: "World", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800" },
                { title: "Berlin Cultural Festival", cat: "Culture", img: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?q=80&w=800" }
              ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer items-center">
                  <div className="md:w-1/2 aspect-[4/3] overflow-hidden rounded-sm relative"><img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" /><div className="absolute top-4 left-4 bg-[#E40784] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">{post.cat}</div></div>
                  <div className="md:w-1/2 space-y-4"><h3 className="text-2xl font-black leading-tight group-hover:text-[#E40784] transition-colors">{post.title}</h3><p className="text-gray-500 text-sm leading-relaxed">Global trade is shifting as digital infrastructure evolves...</p></div>
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:w-1/3 space-y-16">
            <div className="bg-[#f9f9f9] p-10 text-center rounded-sm space-y-6"><h2 className="text-3xl font-black tracking-tighter uppercase">CURATED<span className="text-[#E40784]">MAG</span></h2><p className="text-gray-500 text-[14px] italic">"Well-curated information to inspire."</p></div>
            <div className="bg-[#E40784] text-white p-10 rounded-sm relative overflow-hidden group shadow-xl"><MailIcon size={40} className="mb-6 opacity-30" /><h3 className="text-2xl font-black uppercase tracking-tight mb-3">Newsletter</h3><button className="w-full bg-white text-[#E40784] font-black uppercase tracking-widest text-[12px] py-4 mt-6">Subscribe</button></div>
          </aside>
        </div>
      </div>

      <CuratedMagFooter />
    </main>
  );
}
