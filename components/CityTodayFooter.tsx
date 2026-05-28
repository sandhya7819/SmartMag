"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, Award, Clock, ArrowRight } from "lucide-react";
import { footerPicks, footerPopular } from "@/lib/cityTodayData";

export default function CityTodayFooter() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Footer Top Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Column 1: About Us */}
          <div className="space-y-6">
            <div className="border-b-2 border-white/5 pb-3">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-red-600">About Us</h5>
            </div>
            <div className="space-y-5">
              <Link href="/city-today" className="inline-block">
                <span className="text-2xl font-black tracking-tight font-serif uppercase">
                  CITY<span className="text-red-600">TODAY</span>
                </span>
              </Link>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Your source for the latest city news and reviews. This demo is crafted specifically to exhibit the use of the theme as a modern urban lifestyle news digest.
              </p>
              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-red-600 shrink-0" />
                  <span>Email Us: <a href="mailto:info@example.com" className="text-white hover:text-red-600 transition-colors font-bold">info@example.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-red-600 shrink-0" />
                  <span>Contact: <a href="tel:+13200123451" className="text-white hover:text-red-600 transition-colors font-bold">+1-320-0123-451</a></span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Facebook size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Instagram size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Youtube size={14} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-6">
            <div className="border-b-2 border-white/5 pb-3">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-red-600">Our Picks</h5>
            </div>
            <div className="space-y-5">
              {footerPicks.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-12 shrink-0 bg-white/5 overflow-hidden rounded-sm relative aspect-[4/3]">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-[12px] font-bold text-gray-200 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                      <Link href="/city-today">{post.title}</Link>
                    </h6>
                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div className="space-y-6">
            <div className="border-b-2 border-white/5 pb-3">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-red-600">Most Popular</h5>
            </div>
            <div className="space-y-5">
              {footerPopular.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-12 shrink-0 bg-white/5 overflow-hidden rounded-sm relative aspect-[4/3]">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-[12px] font-bold text-gray-200 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                      <Link href="/city-today">{post.title}</Link>
                    </h6>
                    <div className="flex items-center gap-2 text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-red-600">
                        {post.views} Views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div className="text-center md:text-left">
            © 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">ThemeSphere</a>.
          </div>
          
          <ul className="flex flex-wrap gap-5 justify-center">
            <li><Link href="/city-today" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/city-today" className="hover:text-white transition-colors">World</Link></li>
            <li><Link href="/city-today" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/city-today" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
