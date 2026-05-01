"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";

export default function EverydayNewsFooter() {
  return (
    <footer className="bg-[#111] text-white pt-20">
      <div className="container mx-auto max-w-[1200px] px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Column 1: About */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tighter uppercase">
            Everyday<span className="text-[#e91e63]">News</span>
          </h2>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            Your daily destination for breaking news, in-depth analysis, and expert opinion on the stories that matter most to you and your community.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#e91e63] transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#e91e63] transition-all"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#e91e63] transition-all"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Column 2: Popular Categories */}
        <div className="space-y-8">
          <h3 className="text-[12px] font-black uppercase tracking-widest text-[#e91e63]">Popular Categories</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-8">
            {["Politics", "Technology", "Fashion", "Lifestyle", "World", "Sports", "Finance", "Entertainment"].map((cat) => (
              <Link key={cat} href="#" className="text-[13px] font-bold text-gray-300 hover:text-white transition-colors">{cat}</Link>
            ))}
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className="space-y-6">
          <h3 className="text-[12px] font-black uppercase tracking-widest text-[#e91e63]">Subscribe</h3>
          <p className="text-gray-400 text-[14px]">Get the day's most important stories delivered to your inbox every morning.</p>
          <form className="space-y-3">
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e91e63] transition-colors" />
            <button className="w-full bg-[#e91e63] text-white py-3 text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all">Sign Up Now</button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">© 2025 EverydayNews. All rights reserved.</p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
