"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react";

export default function SpotlightFooter() {
  return (
    <footer className="bg-[#111111] text-white font-sans mt-20 border-t-4 border-[#e21d23]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <span className="text-[28px] font-black tracking-tighter text-white uppercase leading-none block">
                Spotlight
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[4px] text-[#e21d23]">
                News Magazine
              </span>
            </div>
            <p className="text-[#999] text-[13px] leading-relaxed mb-8 font-medium">
              Spotlight is a premier online destination for the latest news, features, and in-depth analysis on culture, fashion, and lifestyle. Stay informed and inspired.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-[#999] hover:text-white transition-colors"><Facebook size={16} strokeWidth={2.5} /></Link>
              <Link href="#" className="text-[#999] hover:text-[#1da1f2] transition-colors"><Twitter size={16} strokeWidth={2.5} /></Link>
              <Link href="#" className="text-[#999] hover:text-[#e1306c] transition-colors"><Instagram size={16} strokeWidth={2.5} /></Link>
              <Link href="#" className="text-[#999] hover:text-[#ff0000] transition-colors"><Youtube size={16} strokeWidth={2.5} /></Link>
            </div>
          </div>

          {/* Column 2: Editor's Picks */}
          <div>
            <h3 className="text-[13px] font-black uppercase tracking-wider mb-8 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">
              Editor's Picks
            </h3>
            <div className="space-y-6">
              {[
                { title: "The Future of Sustainable Fashion Trends", date: "May 10, 2026", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&auto=format&fit=crop" },
                { title: "How to Build a Minimalist Wardrobe", date: "May 8, 2026", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=200&auto=format&fit=crop" },
                { title: "Top 10 Accessories Every Woman Needs", date: "May 5, 2026", img: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-[70px] h-[70px] shrink-0 overflow-hidden rounded-sm relative">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-[13px] font-bold text-white leading-snug group-hover:text-[#e21d23] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-[#777] uppercase tracking-wider font-bold">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h3 className="text-[13px] font-black uppercase tracking-wider mb-8 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">
              Explore Topics
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {['Fashion', 'Lifestyle', 'Culture', 'Health', 'Travel', 'Beauty', 'Tech', 'Food'].map((category, i) => (
                <li key={i} className="border-b border-[#222] pb-2 last:border-0">
                  <Link href="#" className="text-[12px] text-[#aaa] font-bold hover:text-[#e21d23] transition-colors flex items-center group">
                    <ChevronRight size={12} className="mr-2 text-[#444] group-hover:text-[#e21d23] transition-colors" />
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0a0a0a] border-t border-[#222] py-6">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#666] text-[11px] font-bold uppercase tracking-widest mb-4 md:mb-0">
            © 2026 Spotlight Magazine. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] font-bold uppercase tracking-widest text-[#666]">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
