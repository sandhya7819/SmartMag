"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

export default function FridayMagFooter() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-[1200px] px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Column 1: About */}
          <div className="space-y-8">
            <h1 className="text-4xl font-black tracking-tighter uppercase font-outfit">
              Fr<span className="text-[#f7b500]">.</span>day
            </h1>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Leading the way in digital magazine innovation, FridayMag delivers the best in culture, tech, and lifestyle directly to your screen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-[#f7b500] hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-[#f7b500] hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-[#f7b500] hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-[#f7b500] inline-block pb-1">Quick Explore</h3>
            <ul className="space-y-3">
              {["Latest News", "TV & Drama", "Technology", "Health & Fitness", "Work With Us", "Our Team"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[14px] font-bold text-gray-800 hover:text-[#f7b500] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-[#f7b500] inline-block pb-1">Most Read</h3>
            <div className="space-y-6">
              {[
                { title: "The Best Modern Sound Systems for Your Home Office", date: "Jan 15, 2024" },
                { title: "Why Mindful Living is the Trend of the Decade", date: "Jan 12, 2024" }
              ].map((post, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-[14px] font-bold leading-tight hover:text-[#f7b500] cursor-pointer transition-colors">{post.title}</h4>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">{post.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-[#f7b500] inline-block pb-1">Weekly Pulse</h3>
            <p className="text-gray-500 text-[13px]">Get our most impactful stories delivered to your inbox every Friday.</p>
            <form className="space-y-3">
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#f7b500] transition-colors" />
              <button className="w-full bg-black text-white py-3 text-[12px] font-black uppercase tracking-widest hover:bg-[#f7b500] transition-all shadow-xl">Join Us</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-8 text-white">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">© 2025 FridayMag - Built with Next.js & Tailwind</p>
          <button className="p-4 bg-white/10 rounded-full hover:bg-[#f7b500] transition-all">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
