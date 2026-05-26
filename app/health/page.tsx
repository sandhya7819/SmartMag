"use client";

import React, { useState } from "react";
import Link from "next/link";
import HealthHeader from "@/components/HealthHeader";
import HealthFooter from "@/components/HealthFooter";
import { ChevronRight, Play, MessageSquare, Clock, ArrowRight, Heart, Activity, Image as ImageIcon, Volume2, Mail } from "lucide-react";

export default function HealthPage() {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const wellnessPosts = [
    {
      id: 1,
      title: "COVID Antiviral Pills: What Scientists Still Want to Know",
      cat: "COVID'19",
      catColor: "bg-[#e25c5c]",
      author: "Shane Doe",
      date: "Oct 9, 2021",
      comments: 3,
      excerpt: "To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_416102608_xl-2015-1-300x207.jpg"
    },
    {
      id: 2,
      title: "Does CBD Live Up to Its Claims of Health Benefits?",
      cat: "Health",
      catColor: "bg-[#2ab391]",
      author: "Shane Doe",
      date: "Oct 9, 2021",
      comments: 3,
      excerpt: "To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_314367688_XL-1-300x195.jpg"
    },
    {
      id: 3,
      title: "Ministers Could be Forced to Make NHS Workforce Plans Public",
      cat: "News",
      catColor: "bg-[#357ebd]",
      author: "Shane Doe",
      date: "Oct 8, 2021",
      comments: 3,
      excerpt: "To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_442664362_XL-1-300x200.jpg"
    },
    {
      id: 4,
      title: "Student Gives Prosthesis Project a Lightning-Themed Touch",
      cat: "Health",
      catColor: "bg-[#2ab391]",
      author: "Shane Doe",
      date: "Oct 7, 2021",
      comments: 3,
      excerpt: "To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/tom-claes-CfdzNybONzc-unsplash-300x200.jpg"
    },
    {
      id: 5,
      title: "FDA Authorizes Marketing of VR System for Chronic Pain Relief",
      cat: "News",
      catColor: "bg-[#357ebd]",
      author: "Shane Doe",
      date: "Oct 7, 2021",
      comments: 3,
      excerpt: "To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_512599164_XL-1-300x214.jpg"
    },
    {
      id: 6,
      title: "Hospital Fined for Allowing Medical Student to Suture Patient",
      cat: "Health",
      catColor: "bg-[#2ab391]",
      author: "Shane Doe",
      date: "Oct 6, 2021",
      comments: 3,
      excerpt: "To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_9751942_XL-1-300x200.jpg"
    },
    {
      id: 7,
      title: "4 Factors To Consider When Buying Your Next Toothbrush",
      cat: "Health",
      catColor: "bg-[#2ab391]",
      author: "Shane Doe",
      date: "May 16, 2021",
      comments: 2,
      excerpt: "Good oral hygiene starts with selecting the right toolkit for your teeth, but with so many choices...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/goby-CgY8wincR0U-unsplash-450x300.jpg"
    },
    {
      id: 8,
      title: "How to Keep Your Mind Sharp and Active as You Get Older",
      cat: "Lifestyle",
      catColor: "bg-[#8a6d3b]",
      author: "Shane Doe",
      date: "Mar 18, 2021",
      comments: 1,
      excerpt: "Maintaining cognitive vitality is just as important as bodily strength. Here are key lifestyle practices...",
      img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/couple-doing-abs-workout-together_t20_1JNVkn-300x200.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-[#333] font-sans selection:bg-[#2ab391] selection:text-white">
      <HealthHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        
        {/* ==================== 1. HERO GRID SECTION ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Left Column (24%) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-[76px] self-start">
            {/* Post 1 */}
            <article className="group cursor-pointer flex flex-col bg-white border border-gray-100 rounded-[3px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.02)] h-full">
              <div className="aspect-[3/2] overflow-hidden relative bg-gray-100">
                <img 
                  src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_499917926_XL-1-450x300.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="" 
                />
                <span className="absolute bottom-2 left-2 bg-[#8a6d3b] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Fitness
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-[17px] font-black text-[#111] leading-[1.3] group-hover:text-[#2ab391] transition-colors line-clamp-3">
                  <Link href="#">Coronavirus latest: Japan's Vaccination Rate Tops 75% As Cases Drop</Link>
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400 mt-4">
                  <span>By Shane Doe</span>
                  <span>•</span>
                  <span>Sep 9, 2021</span>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="group cursor-pointer flex flex-col bg-white border border-gray-100 rounded-[3px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.02)] h-full">
              <div className="aspect-[3/2] overflow-hidden relative bg-gray-100">
                <img 
                  src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_513688372_XL-1-450x300.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="" 
                />
                
                {/* Circular Score Overlay */}
                <div className="absolute top-2 right-2 bg-black/85 text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/10 shadow-md">
                  <span className="text-[11.5px] font-black tracking-tighter text-[#2ab391]">8.9</span>
                </div>

                <span className="absolute bottom-2 left-2 bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Lifestyle
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-[17px] font-black text-[#111] leading-[1.3] group-hover:text-[#2ab391] transition-colors line-clamp-3">
                  <Link href="#">Review: Denmark Proposes Corona Pass Mandate for Workers</Link>
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400 mt-4">
                  <span>By Shane Doe</span>
                  <span>•</span>
                  <span>Sep 9, 2021</span>
                </div>
              </div>
            </article>
          </div>

          {/* Center Column (52%) */}
          <div className="lg:col-span-6">
            <article className="group cursor-pointer bg-white border border-gray-100 rounded-[3px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.02)] h-full flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                <img 
                  src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2020/01/Depositphotos_448973218_XL-1-1024x697.jpg" 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-103" 
                  alt="" 
                />
                <span className="absolute bottom-4 left-4 bg-[#e25c5c] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                  COVID'19
                </span>
              </div>
              <div className="p-7 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="text-[28px] md:text-[32px] font-black text-[#111] leading-[1.15] tracking-tight group-hover:text-[#2ab391] transition-colors">
                    <Link href="#">Large Study of COVID Vaccine Side Effects in Sweden</Link>
                  </h2>
                  <p className="text-gray-500 text-[14.5px] leading-relaxed line-clamp-3 font-semibold">
                    To understand the new smart monitors and other pro devices of tech health, we should look to Silicon Valley and other pioneers who are reshaping medicine with data-driven technologies...
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-gray-400 mt-6 pt-6 border-t border-gray-50">
                  <span>By Shane Doe</span>
                  <span>•</span>
                  <span>Jan 12, 2020</span>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column (24%) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-[76px] self-start">
            {/* Post 1 */}
            <article className="group cursor-pointer flex flex-col bg-white border border-gray-100 rounded-[3px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.02)] h-full">
              <div className="aspect-[3/2] overflow-hidden relative bg-gray-100">
                <img 
                  src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_441685450_XL-1-450x281.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="" 
                />
                <span className="absolute bottom-2 left-2 bg-[#357ebd] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  News
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-[17px] font-black text-[#111] leading-[1.3] group-hover:text-[#2ab391] transition-colors line-clamp-3">
                  <Link href="#">J&J's New Vaccines Leader Talks Covid-19 & Pipeline Plans</Link>
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400 mt-4">
                  <span>By Shane Doe</span>
                  <span>•</span>
                  <span>Nov 21, 2021</span>
                </div>
              </div>
            </article>

            {/* Banner Ad Widget */}
            <div className="bg-white border border-gray-100 rounded-[3px] p-4 flex flex-col items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.02)] h-full">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Advertisement</span>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="block relative overflow-hidden rounded-sm w-full max-w-[250px] aspect-square">
                <img 
                  src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/MedicalHealth.jpg" 
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity" 
                  alt="ThemeSphere Buy Ad" 
                />
              </a>
            </div>
          </div>

        </section>

        {/* ==================== 2. MAIN SPLIT FEED (Wellness & Research / Sidebar) ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main List Posts (66%) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b-2 border-[#2ab391] pb-3 mb-6">
              <h3 className="text-xl font-black uppercase tracking-wider text-[#111] flex items-center gap-2">
                <Activity size={18} className="text-[#2ab391]" /> Wellness & Research
              </h3>
            </div>

            <div className="space-y-6">
              {wellnessPosts.slice(0, visiblePosts).map((post) => (
                <div 
                  key={post.id} 
                  className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-5 rounded-[4px] shadow-[0_3px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all duration-300 group cursor-pointer"
                >
                  {/* Image wrapper */}
                  <div className="md:w-[280px] aspect-[3/2] shrink-0 overflow-hidden rounded-sm relative bg-gray-50">
                    <img 
                      src={post.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                      alt="" 
                    />
                    <span className={`absolute top-2 left-2 text-[9px] text-white font-black uppercase tracking-wider px-2 py-0.5 rounded-sm ${post.catColor}`}>
                      {post.cat}
                    </span>
                  </div>

                  {/* Content details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-[20px] md:text-[22px] font-black text-[#111] leading-tight group-hover:text-[#2ab391] transition-colors line-clamp-2">
                        <Link href="#">{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-[13.5px] leading-relaxed line-clamp-2 font-medium">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wider text-gray-400 mt-4 pt-3 border-t border-gray-50">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      {post.comments > 0 && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1"><MessageSquare size={10} /> {post.comments} Comments</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visiblePosts < wellnessPosts.length && (
              <button 
                onClick={() => setVisiblePosts((prev) => prev + 2)}
                className="w-full py-4 border border-gray-200 hover:border-[#2ab391] bg-white hover:bg-[#2ab391] text-gray-700 hover:text-white font-black uppercase tracking-widest text-[11px] transition-all rounded-[3px] shadow-sm flex items-center justify-center gap-2"
              >
                Load More Wellness Stories <ArrowRight size={12} />
              </button>
            )}
          </div>

          {/* Sidebar Area (33%) */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-[76px] self-start">
            
            {/* Trending / Highlights Block */}
            <div className="bg-white border border-gray-100 p-6 rounded-[4px] shadow-[0_3px_10px_rgba(0,0,0,0.02)]">
              <h3 className="text-[12px] font-black uppercase tracking-widest text-[#111] border-b-2 border-[#2ab391] inline-block pb-1 mb-6">
                Trending
              </h3>

              <div className="space-y-6">
                {/* Main post inside Trending widget */}
                <div className="group cursor-pointer space-y-3">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm relative bg-gray-50">
                    <img 
                      src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/daily-nouri-D37STEwmyqY-unsplash-450x329.jpg" 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      alt="" 
                    />
                    <span className="absolute top-2 left-2 bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      Health
                    </span>
                  </div>
                  <h4 className="text-[16px] font-black text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors">
                    5 Best Probiotic Supplements for Gut Health in 2021
                  </h4>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-gray-400">
                    <span>By Shane Doe</span>
                    <span>•</span>
                    <span>Jan 13, 2021</span>
                  </div>
                </div>

                {/* Dotted border separator */}
                <div className="border-t border-dashed border-gray-100"></div>

                {/* Numbered small loops */}
                <div className="space-y-5">
                  {[
                    { id: 1, title: "Spine Devices Market to Surpass US$ 17 Bn as Demand Rises", date: "Jan 13, 2021" },
                    { id: 2, title: "Do Antacids Affect Kidneys, and Also Lead to Osteoporosis?", date: "Jan 13, 2021" },
                    { id: 3, title: "One Major Effect Coffee Has on Your Body, New Study Says", date: "Jan 13, 2021" }
                  ].map((trendingPost) => (
                    <div key={trendingPost.id} className="flex gap-4 group cursor-pointer items-start">
                      <span className="text-[32px] font-black text-gray-200 leading-none italic group-hover:text-[#2ab391] transition-colors">
                        0{trendingPost.id}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-[13px] font-extrabold text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors">
                          {trendingPost.title}
                        </h4>
                        <span className="text-[9.5px] text-gray-400 font-bold block">{trendingPost.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Newsletter Subscription Widget */}
            <div className="bg-[#1a1c1e] text-white p-8 rounded-[4px] shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ab391]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-105 transition-transform duration-700"></div>
              <Mail className="text-[#2ab391] mb-4" size={36} />
              <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2">The Health Brief</h3>
              <p className="text-white/60 text-[13px] leading-relaxed mb-6 font-medium">
                Expert wellness strategies and breaking health updates delivered directly to your inbox weekly.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2ab391] focus:bg-white focus:text-[#111] transition-all rounded-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#2ab391] text-white py-3 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </aside>
        </section>

      </div>

      {/* ==================== 3. FEATURED VIDEOS (Dark Classic Section) ==================== */}
      <section className="bg-[#014C62] text-white py-16 mb-16 select-none">
        <div className="container mx-auto max-w-[1200px] px-4">
          
          <div className="border-b border-white/10 pb-4 mb-8 flex justify-between items-center">
            <h3 className="text-2xl font-black uppercase tracking-wider text-white flex items-center gap-2">
              <Play size={20} fill="currentColor" /> Featured Videos
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Big Video post (66%) */}
            <div className="lg:col-span-8">
              <div className="group cursor-pointer relative rounded-[4px] overflow-hidden shadow-2xl bg-black aspect-[16/9]">
                <img 
                  src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_211944860_XL-1-1024x683.jpg" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700" 
                  alt="" 
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Central Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/95 text-[#014C62] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#2ab391] group-hover:text-white transition-all duration-300">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </span>
                </div>

                {/* Content details overlay */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2 max-w-xl">
                  <span className="bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-sm shadow-sm inline-block">
                    Fitness
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-[#2ab391] transition-colors">
                    Hospitalizations Rising Among Fully Vaccinated in US, Study Finds
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-white/50 pt-2">
                    <span>By Shane Doe</span>
                    <span>•</span>
                    <span>Sep 9, 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Video list (33%) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {[
                { title: "Law to Stop Surprise Medical Bills Faces Pushback from Doctors", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/sammy-williams-38Un6Oi5beE-unsplash-300x200.jpg" },
                { title: "Why Health Care Systems Should Invest in Medical Malls", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/medical-stethoscope-laying-on-a-blue-flat-surface-copy-space-background-negative-space-for-text_t20_jRQ7QW-300x200.jpg" },
                { title: "What’s Really Happening in Herbal Medicines Market", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/daily-nouri-D37STEwmyqY-unsplash-300x219.jpg" },
                { title: "Patient Testifies Blood Test Showed HIV False Positive", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/louis-reed-pwcKF7L4-no-unsplash-300x200.jpg" }
              ].map((vid, idx) => (
                <div key={idx} className="flex gap-4 group/vitem cursor-pointer items-center bg-white/5 p-2 rounded-sm border border-white/5 hover:bg-white/10 transition-colors">
                  
                  {/* Thumbnail with overlay play icon */}
                  <div className="w-24 aspect-[4/3] rounded-sm overflow-hidden relative shrinkage-0 bg-black">
                    <img src={vid.img} className="w-full h-full object-cover opacity-75 group-hover/vitem:scale-103 transition-transform" alt="" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-7 h-7 rounded-full bg-white/90 text-[#014C62] flex items-center justify-center shadow-md group-hover/vitem:bg-[#2ab391] group-hover/vitem:text-white transition-all">
                        <Play size={10} fill="currentColor" className="ml-0.5" />
                      </span>
                    </span>
                  </div>

                  <div className="space-y-1 flex-1">
                    <h4 className="text-[13px] font-extrabold text-white group-hover/vitem:text-[#2ab391] transition-colors leading-snug line-clamp-2">
                      {vid.title}
                    </h4>
                    <span className="text-[10px] text-white/40 font-bold block">{vid.date}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ==================== 4. SPLIT BLOCKS (Lifestyle, Nutrition, Opinion) ==================== */}
      <section className="container mx-auto max-w-[1200px] px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Lifestyle */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#111] border-b-2 border-[#2ab391] inline-block pb-1">
              Lifestyle
            </h3>
            
            <div className="space-y-6">
              {/* Feature style */}
              <div className="group cursor-pointer space-y-3">
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative bg-gray-50">
                  <img 
                    src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/07bb999275243b4d351043b5feaa9ffc-450x300.jpg" 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    alt="" 
                  />
                  <span className="absolute top-2 left-2 bg-[#2ab391] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    Lifestyle
                  </span>
                </div>
                <h4 className="text-[16px] font-black text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors">
                  Doctors Research Effects of Covid-19 on Children
                </h4>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-gray-400">
                  <span>By Shane Doe</span>
                  <span>•</span>
                  <span>Aug 16, 2020</span>
                </div>
              </div>

              {/* Sub items */}
              <div className="space-y-4 pt-4 border-t border-dashed border-gray-200">
                {[
                  { title: "A Brain Scan is Letting us Understand How Toddlers Think", date: "Aug 16, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/education-technology-brain-laptop-screen-hospital-medical-xray-doctor-using-technology_t20_R63ZLB-300x169.jpg" },
                  { title: "Health System Under ‘Unyielding Unrelenting’ Strain", date: "Aug 15, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_4970081_XL-1-300x204.jpg" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-16 h-12 rounded-sm overflow-hidden bg-gray-50 shrink-0">
                      <img src={item.img} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-[12.5px] font-extrabold text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <span className="text-[9px] text-gray-400 font-bold block">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Nutrition */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#111] border-b-2 border-[#2ab391] inline-block pb-1">
              Nutrition
            </h3>

            <div className="space-y-4">
              {[
                { title: "Medical Practitioners Well-Being in US & COVID-19", date: "Nov 21, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_150955568_XL-1-300x200.jpg" },
                { title: "Covid Pregnancies: Symptoms, Risks, and Delivery", date: "Nov 21, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/making-sure-her-maternal-health-stays-in-check-closeup-shot-of-a-doctor-using-a-stethoscope-while_t20_OpQakE-300x192.jpg" },
                { title: "How to Make Fitness Part of Your Daily Lifestyle", date: "Nov 21, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/sergio-pedemonte-ERLfti-kyCg-unsplash-300x200.jpg" },
                { title: "Norway Plans Third Vaccine Dose for all Adults", date: "Nov 21, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_357938508_XL-1-300x175.jpg" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-center border-b border-dashed border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="w-16 h-12 rounded-sm overflow-hidden bg-gray-50 shrink-0">
                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[12.5px] font-extrabold text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-[9px] text-gray-400 font-bold block">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Opinion */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#111] border-b-2 border-[#2ab391] inline-block pb-1">
              Opinion
            </h3>

            <div className="space-y-4">
              {[
                { title: "Corona vs. Flu: Here’s How to Tell the Major Difference", author: "Shane Doe", date: "Mar 15, 2021" },
                { title: "5 Superfoods – Your Winter Diet for a Perfect Glowing Skin", author: "Shane Doe", date: "Mar 14, 2021" },
                { title: "Review: How Research Could Help with Spinal Cord Injuries", author: "Shane Doe", date: "Mar 14, 2021", rating: "8.5" },
                { title: "New Fitness Gear Puts Cameras Front and Center", author: "Shane Doe", date: "Mar 13, 2021" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer border-b border-dashed border-gray-150 pb-3 last:border-0 last:pb-0 space-y-1.5">
                  
                  {/* Title and Rating inline */}
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-[13.5px] font-extrabold text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors">
                      {item.title}
                    </h4>
                    {item.rating && (
                      <span className="bg-[#2ab391] text-white font-extrabold text-[10px] px-1.5 py-0.5 rounded-sm shrink-0">
                        {item.rating}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-gray-400">
                    <span>By {item.author}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 5. SUBSCRIBE & APP CTA (Gray Section) ==================== */}
      <section className="bg-[#F4F3F3] py-16 mb-16 select-none border-y border-gray-200">
        <div className="container mx-auto max-w-[1200px] px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left newsletter (50%) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[4px] border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xl font-black uppercase tracking-wider text-[#111]">Subscribe to Updates</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed font-semibold">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  className="flex-grow bg-white border border-gray-200 px-4 py-2 text-sm text-[#111] focus:outline-none focus:border-[#2ab391] rounded-l-[3px] border-r-0"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#2ab391] text-white px-6 text-[11px] font-black uppercase tracking-widest hover:bg-black transition-colors rounded-r-[3px] shadow-sm"
                >
                  Subscribe
                </button>
              </div>
              <label className="flex items-start gap-2 cursor-pointer mt-3">
                <input type="checkbox" className="mt-1 accent-[#2ab391]" required />
                <span className="text-[10px] text-gray-400 font-bold leading-normal">
                  By signing up, you agree to our terms and our <Link href="#" className="underline hover:text-[#2ab391]">Privacy Policy</Link> agreement.
                </span>
              </label>
            </form>
          </div>

          {/* Center Text app download (40%) */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-4 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-[#111] tracking-tight">
              Download HealthCare App.<br /> It's 100% FREE.
            </h3>
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              {/* Mock App badges */}
              <a href="#" className="h-10 opacity-90 hover:opacity-100 transition-opacity">
                <img src="https://theme-sphere.com/demo/smartmag-landing/img/prev-frame.png" className="hidden" alt="" />
                <span className="inline-block bg-[#111] text-white px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-wider shadow-md hover:bg-[#2ab391] transition-colors">
                  App Store
                </span>
              </a>
              <a href="#" className="h-10 opacity-90 hover:opacity-100 transition-opacity">
                <span className="inline-block bg-[#111] text-white px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-wider shadow-md hover:bg-[#2ab391] transition-colors">
                  Google Play
                </span>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup image (30%) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <img 
              src="https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/elementor/thumbs/image005@2x-pftpwhjpdo7pwi16y3f7itso84gjv1xitznqkg142i.png" 
              className="w-full max-w-[210px] h-auto block object-contain" 
              alt="HealthCare App Mockup" 
            />
          </div>

        </div>
      </section>

      {/* ==================== 6. HEALTHY LIVING SECTION (Split Loops) ==================== */}
      <section className="container mx-auto max-w-[1200px] px-4 mb-16">
        
        <div className="border-b-2 border-black pb-3 mb-6">
          <h3 className="text-xl font-black uppercase tracking-wider text-[#111] flex items-center gap-2">
            <Heart size={18} fill="currentColor" className="text-[#2ab391]" /> Healthy Living
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column */}
          <div className="space-y-4">
            {[
              { title: "Covid-Resistant People Inspire New Vaccine Tactic", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/coronavirus-syringe-drawing-an-injection-of-covid-19-vaccine_t20_E03p3Z-1-290x300.jpg", play: true },
              { title: "Winter Fitness: These Poses Can Keep You Warm", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/mother-and-baby-doing-yoga-at-home-1_t20_BlkxB9-300x203.jpg" },
              { title: "Can Orange Juice Reduce Inflammation, Oxidative Stress?", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/tangerine-newt-hINQgaTqg7Q-unsplash-240x300.jpg" },
              { title: "Hip Mobility Exercises and Stretches to Try", date: "Mar 16, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/couple-doing-abs-workout-together_t20_1JNVkn-300x200.jpg" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer items-center border-b border-dashed border-gray-150 pb-3 last:border-0 last:pb-0">
                <div className="w-[100px] aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 shrink-0 relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-103 transition-transform" alt="" />
                  {item.play && (
                    <span className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="w-6 h-6 rounded-full bg-white/95 text-[#2ab391] flex items-center justify-center shadow-md">
                        <Play size={8} fill="currentColor" className="ml-0.5" />
                      </span>
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="text-[13.5px] font-extrabold text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-[9.5px] text-gray-400 font-bold block">{item.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {[
              { title: "Mask-Wearing Cuts Covid Incidence by 53%, Says Study", date: "Jan 14, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/pexels-nilay-ramoliya-3964833-1-300x200.jpg" },
              { title: "Pfizer Files for US Authorization of Promising Covid-19 Pill", date: "Jan 14, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_427251088_xl-2015-1-300x199.jpg" },
              { title: "Boiled Lemon Water: Benefits of Drinking it Daily", date: "Jan 14, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/taylor-simpson-ltc0g_mWnIE-unsplash-300x240.jpg" },
              { title: "What Makes Family Life Meaningful? Views From Experts", date: "Jan 14, 2020", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/6688768e3508a3210e5ea5b40b9a240e-1-300x200.jpg" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer items-center border-b border-dashed border-gray-150 pb-3 last:border-0 last:pb-0">
                <div className="w-[100px] aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 shrink-0">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-103 transition-transform" alt="" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[13.5px] font-extrabold text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-[9.5px] text-gray-400 font-bold block">{item.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== 7. EDITOR'S PICKS SECTION ==================== */}
      <section className="container mx-auto max-w-[1200px] px-4 mb-16">
        
        <div className="border-b-2 border-black pb-3 mb-6">
          <h3 className="text-xl font-black uppercase tracking-wider text-[#111]">
            Editor's Picks
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "30 Minutes of Exercise vs 100 Steps a Day: Which One is Better?", 
              cat: "Lifestyle", 
              catColor: "bg-[#2ab391]",
              date: "May 12, 2021", 
              img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/05/shutterstock_133546589-1-450x299.jpg" 
            },
            { 
              title: "Minimal Access Surgery Training Institute Highlights", 
              cat: "COVID'19", 
              catColor: "bg-[#e25c5c]",
              date: "May 12, 2021", 
              gallery: true,
              img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/jafar-ahmed-E285pJbC4uE-unsplash-450x300.jpg" 
            },
            { 
              title: "Review: Denmark Proposes Corona Pass Mandate for Workers", 
              cat: "Lifestyle", 
              catColor: "bg-[#2ab391]",
              date: "Jan 9, 2020", 
              img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_513688372_XL-1-450x300.jpg" 
            }
          ].map((post, idx) => (
            <article key={idx} className="group cursor-pointer bg-white border border-gray-100 rounded-[3px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-gray-50">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" alt="" />
                  <span className={`absolute top-2 left-2 text-[9px] text-white font-black uppercase tracking-wider px-2 py-0.5 rounded-sm ${post.catColor}`}>
                    {post.cat}
                  </span>
                  {post.gallery && (
                    <span className="absolute bottom-2 right-2 bg-black/75 text-white p-1 rounded-full shadow-md">
                      <ImageIcon size={12} />
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-[16px] font-black text-[#111] leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400 border-t border-gray-50 pt-3">
                  <span>Shane Doe</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      <HealthFooter />
    </main>
  );
}
