"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, Bell, Youtube } from "lucide-react";

export default function MorningPostHeader() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar with Navigation */}
      <div className="bg-white border-b border-gray-100 py-3 hidden md:block">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <nav className="flex gap-8">
            {["Home", "World", "Politics", "Tech", "Business", "Sports", "Culture"].map((item) => (
              <Link key={item} href="#" className="hover:text-[#3f51b5] transition-colors">{item}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
             <span className="text-gray-400">Monday, March 10, 2025</span>
             <Link href="#" className="hover:text-[#3f51b5] transition-colors">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Main Gradient Branding Header */}
      <div className="bg-gradient-to-r from-[#2c3e50] via-[#3f51b5] to-[#2c3e50] py-10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
          {/* Social Icons */}
          <div className="flex gap-5 order-2 md:order-1">
            <a href="#" className="hover:text-blue-300 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Youtube size={18} /></a>
          </div>
          
          {/* Centered Logo */}
          <Link href="/" className="text-center order-1 md:order-2 group">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-serif italic">
              MORNING<span className="text-blue-300">POST</span>
            </h1>
            <p className="text-[10px] font-bold text-blue-200 tracking-[0.4em] uppercase mt-2 opacity-80">Global Perspective, Local Insights</p>
          </Link>

          {/* Action Button */}
          <div className="order-3 flex items-center gap-6">
             <button className="bg-white text-[#3f51b5] px-6 py-2.5 text-[11px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all rounded-sm shadow-xl flex items-center gap-2">
               <Bell size={14} /> Subscribe Now
             </button>
          </div>
        </div>
      </div>

      {/* Hot Topics Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 py-3">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-black text-[#3f51b5] uppercase tracking-widest whitespace-nowrap">
            <TrendingUp size={16} /> Hot Topics:
          </div>
          <div className="flex gap-8 text-[11px] font-bold text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
             <Link href="#" className="hover:text-[#3f51b5] transition-colors">#TrumpTrial</Link>
             <Link href="#" className="hover:text-[#3f51b5] transition-colors">#UkraineWar</Link>
             <Link href="#" className="hover:text-[#3f51b5] transition-colors">#AIRevolution</Link>
             <Link href="#" className="hover:text-[#3f51b5] transition-colors">#EarthquakeUpdate</Link>
             <Link href="#" className="hover:text-[#3f51b5] transition-colors">#SpaceXLaunch</Link>
          </div>
          <div className="flex-1"></div>
          <button className="text-gray-400 hover:text-black"><Search size={20} /></button>
        </div>
      </div>
    </header>
  );
}

function TrendingUp({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}
