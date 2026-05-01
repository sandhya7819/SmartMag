"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";

export default function HealthFooter() {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Footer Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
          
          {/* Column 1: About */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2fa09a] rounded-full flex items-center justify-center text-white">
                <span className="text-lg font-black">+</span>
              </div>
              <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
                Health<span className="text-[#2fa09a]">Care</span>
              </h1>
            </Link>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              HealthCare is your ultimate destination for the latest health news, wellness tips, and research-backed medical information to help you live a better life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#2fa09a] transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#2fa09a] transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#2fa09a] transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-8">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#2fa09a]">Our Top Picks</h3>
            <div className="space-y-6">
              {[
                { title: "10 Natural Ways to Boost Your Immune System Fast", img: "https://images.unsplash.com/photo-1505575967455-40e256f7377c?q=80&w=100" },
                { title: "Why Mental Health is More Important Than Ever in 2025", img: "https://images.unsplash.com/photo-1493839523149-2864fca44919?q=80&w=100" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 shrink-0 overflow-hidden bg-gray-800 rounded-sm">
                    <img src={post.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-[14px] font-bold text-gray-300 leading-snug group-hover:text-[#2fa09a] transition-colors pt-1">{post.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Subscribe */}
          <div className="space-y-8">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#2fa09a]">Health Briefing</h3>
            <p className="text-gray-400 text-[14px]">Join our community of 250,000+ health enthusiasts and get our weekly wellness guide.</p>
            <form className="space-y-3">
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2fa09a] transition-colors" />
              <button className="w-full bg-[#2fa09a] text-white py-3 text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Sign Up Free</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-[11px] font-bold uppercase tracking-widest">
          <p>© 2025 HealthCare Media. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Buy Theme</Link>
          </div>
          <button className="p-4 bg-white/5 rounded-full hover:bg-[#2fa09a] transition-all text-white">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
