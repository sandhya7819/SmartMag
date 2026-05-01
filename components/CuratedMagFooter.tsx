"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Rss } from "lucide-react";

export default function CuratedMagFooter() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Footer Top: Social Hub */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 pb-16 border-b border-white/5">
          {[
            { icon: <Facebook size={24} />, name: "Facebook", color: "hover:text-[#1877F2]" },
            { icon: <Twitter size={24} />, name: "Twitter", color: "hover:text-[#1DA1F2]" },
            { icon: <Instagram size={24} />, name: "Instagram", color: "hover:text-[#E4405F]" },
            { icon: <Youtube size={24} />, name: "Youtube", color: "hover:text-[#FF0000]" },
            { icon: <Rss size={24} />, name: "RSS Feed", color: "hover:text-[#FFA500]" }
          ].map((social, i) => (
            <a key={i} href="#" className={`flex items-center gap-3 ${social.color} transition-all group`}>
              <span className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                {social.icon}
              </span>
              <span className="text-sm font-black uppercase tracking-widest hidden md:inline">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Footer Middle: Multi-Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter uppercase">
              CURATED<span className="text-[#E40784]">MAG</span>
            </h2>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              CuratedMag is your premium source for high-quality content across technology, lifestyle, and culture.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#E40784]">Recent Stories</h3>
            <div className="space-y-6">
              {[
                { title: "The Evolution of Urban Architecture in the 21st Century", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=100" },
                { title: "Why Sustainable Travel is the Future of Global Tourism", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=100" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 shrink-0 overflow-hidden bg-gray-800 rounded-sm">
                    <img src={post.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-[14px] font-bold text-gray-300 leading-snug group-hover:text-white transition-colors pt-1">{post.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#E40784]">Stay Informed</h3>
            <p className="text-gray-400 text-[14px]">Subscribe to our newsletter for the best stories.</p>
            <form className="space-y-3">
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E40784] transition-colors" />
              <button className="w-full bg-[#E40784] text-white py-3 text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Sign Up</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[11px] font-bold uppercase tracking-widest">
          <p>© 2025 CuratedMag. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
