"use client";

import React from "react";
import Link from "next/link";
import HealthHeader from "@/components/HealthHeader";
import HealthFooter from "@/components/HealthFooter";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, Instagram, Twitter, Facebook, MessageSquare, Clock, ArrowRight, Heart, Activity } from "lucide-react";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#2fa09a] selection:text-white">
      <HealthHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-12">
        
        {/* 1. Hero Section (3-Column Vertical Cards) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "The Ultimate Guide to Intermittent Fasting for Beginners", cat: "Nutrition", img: "https://images.unsplash.com/photo-1505575967455-40e256f7377c?q=80&w=800" },
            { title: "Why Sleep is the Most Important Pillar of Your Health", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1511295742364-9031f00a6b2e?q=80&w=800" },
            { title: "10 Minutes of Daily Mindfulness: A Game Changer", cat: "Mental Health", img: "https://images.unsplash.com/photo-1493839523149-2864fca44919?q=80&w=800" }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-[4px] shadow-2xl">
              <img src={post.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <div className="bg-[#2fa09a] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest inline-block">{post.cat}</div>
                <h3 className="text-3xl font-black text-white leading-tight tracking-tighter group-hover:text-[#2fa09a] transition-colors">{post.title}</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <span>Dr. John Smith</span>
                  <span>•</span>
                  <span>5 Min Read</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 2. Trending Wellness Bar */}
        <div className="bg-[#f0f9f8] border border-[#d1ebe8] p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-20 rounded-[4px]">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-[#2fa09a] rounded-full flex items-center justify-center text-white shadow-lg">
               <Activity size={20} />
             </div>
             <div>
               <h4 className="text-[14px] font-black uppercase tracking-tighter text-[#111]">Daily Wellness Pulse</h4>
               <p className="text-[12px] text-[#2fa09a] font-bold">Today's Trending Health Topics</p>
             </div>
          </div>
          <div className="flex-1 h-[1px] bg-[#d1ebe8] hidden md:block mx-8"></div>
          <div className="flex flex-wrap gap-8 justify-center">
             <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#2fa09a] transition-colors">#VeganLife</Link>
             <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#2fa09a] transition-colors">#MentalHealthMatters</Link>
             <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#2fa09a] transition-colors">#BioHacking</Link>
             <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#2fa09a] transition-colors">#Longevity</Link>
          </div>
        </div>

        {/* 3. Mental Health & Research Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Main Feed (66%) */}
          <div className="lg:col-span-8 space-y-16">
            <div className="flex items-center justify-between border-b-2 border-[#2fa09a] pb-4">
               <h3 className="text-2xl font-black uppercase tracking-tighter text-[#111]">Wellness & Research</h3>
               <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-[#2fa09a] hover:text-black transition-colors flex items-center gap-2">View All <ChevronRight size={14} /></Link>
            </div>
            
            <div className="space-y-12">
               {[
                 { title: "New Study Reveals the Surprising Benefits of Morning Sunlight", cat: "Research", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800" },
                 { title: "How to Build a Sustainable Exercise Routine That You Actually Enjoy", cat: "Fitness", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800" },
                 { title: "The Impact of Sugar on Brain Function: What Science Says", cat: "Nutrition", img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=800" },
                 { title: "Mindfulness vs. Meditation: Understanding the Key Differences", cat: "Mental Health", img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=800" }
               ].map((post, i) => (
                 <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer items-center border-b border-gray-50 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-[320px] aspect-[1.4/1] shrink-0 overflow-hidden rounded-[4px] relative shadow-lg">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="space-y-4 flex-1 text-center md:text-left">
                       <div className="text-[10px] text-[#2fa09a] font-black uppercase tracking-widest">{post.cat}</div>
                       <h3 className="text-[26px] font-black leading-tight group-hover:text-[#2fa09a] transition-colors tracking-tighter">{post.title}</h3>
                       <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">Understanding the complex relationship between {post.cat.toLowerCase()} and our overall well-being is crucial for a healthier future...</p>
                       <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                         <span>John Doe</span>
                         <span>•</span>
                         <span>March 8, 2025</span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full py-4 bg-[#2fa09a] text-white font-black uppercase tracking-widest text-[12px] hover:bg-black transition-all rounded-[4px] shadow-xl">
              Load More Wellness Stories
            </button>
          </div>

          {/* Sidebar (33%) */}
          <aside className="lg:col-span-4 space-y-16">
            {/* Newsletter Card */}
            <div className="bg-[#111] p-10 text-center text-white relative overflow-hidden group rounded-[4px] shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2fa09a]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={44} className="mx-auto mb-6 text-[#2fa09a] opacity-50" />
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">The Health Brief</h3>
              <p className="text-white/60 text-[14px] mb-8 leading-relaxed">Expert health advice and research delivered to your inbox weekly.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all text-center rounded-sm" />
                <button className="w-full bg-[#2fa09a] text-white font-black uppercase tracking-widest text-[12px] py-4 hover:bg-white hover:text-black transition-all shadow-lg rounded-sm">Subscribe Now</button>
              </form>
            </div>

            {/* Trending Numbered List */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-[#2fa09a] inline-block pb-1">Most Read Now</h3>
              <div className="space-y-8">
                {[
                  "Why High-Protein Diets are Making a Massive Comeback in 2025",
                  "The Surprising Link Between Gut Health and Your Mood",
                  "Review: The Best Fitness Trackers for Serious Athletes",
                  "10 Essential Habits for a Longer, Healthier Life This Year"
                ].map((title, i) => (
                  <div key={i} className="flex gap-5 group cursor-pointer items-start">
                    <span className="text-[42px] font-black text-gray-100 group-hover:text-[#2fa09a] transition-colors leading-none italic">{i + 1}</span>
                    <h4 className="text-[15px] font-bold text-[#111] leading-snug group-hover:text-[#2fa09a] transition-colors pt-2">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Pills */}
            <div className="space-y-8">
               <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Categories</h3>
               <div className="flex flex-wrap gap-2 pt-2">
                 {["Nutrition", "Mental Health", "Fitness", "Research", "Lifestyle", "Diseases", "First Aid", "Bio-Hacking"].map((cat) => (
                   <Link key={cat} href="#" className="px-4 py-2 bg-gray-50 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:bg-[#2fa09a] hover:text-white transition-all rounded-full border border-gray-100">
                     {cat}
                   </Link>
                 ))}
               </div>
            </div>
          </aside>
        </div>

        {/* 4. Special "Nutrition Lab" Section (Dark) */}
        <section className="bg-[#1a1c1e] p-12 -mx-4 md:-mx-12 mb-20 rounded-[4px] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2fa09a]/10 to-transparent"></div>
           <div className="relative z-10 space-y-12">
             <div className="flex items-center gap-4">
                <Heart className="text-[#2fa09a]" size={32} fill="currentColor" />
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Nutrition Lab</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Superfoods for Brain Health", img: "https://images.unsplash.com/photo-1490818387583-1bbf5e6382b7?q=80&w=400" },
                 { title: "The Truth About Vegan Protein", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400" },
                 { title: "Understanding Macro Ratios", img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=400" },
                 { title: "Healthy Meal Prep 101", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400" }
               ].map((post, i) => (
                 <div key={i} className="group cursor-pointer space-y-4">
                   <div className="aspect-square overflow-hidden rounded-[4px]">
                     <img src={post.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                   </div>
                   <h4 className="text-[16px] font-bold text-white leading-tight group-hover:text-[#2fa09a] transition-colors">{post.title}</h4>
                 </div>
               ))}
             </div>
           </div>
        </section>
      </div>

      <HealthFooter />
    </main>
  );
}
