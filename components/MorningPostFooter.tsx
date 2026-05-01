"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

export default function MorningPostFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Footer Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* About Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tighter uppercase font-serif italic">
              MORNING<span className="text-blue-400">POST</span>
            </h2>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Delivering the most important news from across the globe, MorningPost provides deep analysis and expert coverage of the events that shape our world.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-blue-600 transition-all"><Facebook size={18} /></a>
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-blue-400 transition-all"><Twitter size={18} /></a>
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-pink-600 transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-8">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-blue-400 border-b border-white/10 pb-2 inline-block">Daily Navigation</h3>
            <ul className="space-y-4">
              {["World News", "Political Analysis", "Technology & Innovation", "Business Morning", "Sports Daily", "Culture & Arts"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] font-bold text-gray-300 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Sections Column */}
          <div className="space-y-8">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-blue-400 border-b border-white/10 pb-2 inline-block">Popular Categories</h3>
            <ul className="space-y-4">
              {["Economy", "Science", "Education", "Health", "Opinion", "Environment"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] font-bold text-gray-300 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-8">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-blue-400 border-b border-white/10 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-400 text-[14px]">Receive the MorningPost briefing directly in your inbox every morning at 7:00 AM.</p>
            <form className="space-y-3">
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors" />
              <button className="w-full bg-blue-600 text-white py-3 text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Sign Up Free</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-[11px] font-bold uppercase tracking-widest">
           <div className="flex gap-8">
             <p>© 2025 MorningPost Media Group. All Rights Reserved.</p>
           </div>
           <div className="flex gap-8">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
             <Link href="#" className="hover:text-white transition-colors">Editorial Guidelines</Link>
           </div>
           <button className="p-4 bg-white/5 rounded-full hover:bg-blue-600 transition-all text-white">
             <ArrowUp size={20} />
           </button>
        </div>
      </div>
    </footer>
  );
}
