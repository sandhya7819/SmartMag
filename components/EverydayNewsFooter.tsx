"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  PinIcon as Pinterest, 
  Youtube, 
  Phone,
  Mail,
  Clock,
  ExternalLink
} from "lucide-react";
import { footerPicks, footerPopular } from "@/lib/everydayNewsData";

export default function EverydayNewsFooter() {
  return (
    <footer className="bg-[#111] dark:bg-[#0a0a0a] text-white border-t border-white/5 font-sans">
      {/* 1. Upper Footer Section */}
      <div className="container mx-auto max-w-[1200px] px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: About Us widget */}
        <div className="space-y-6">
          <div className="border-b border-white/5 pb-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158]">About Us</h4>
          </div>
          
          <div className="space-y-4">
            <Link href="/everyday-news" className="block">
              <img 
                src="https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/logo-everydayNews-01-footer.png"
                alt="SmartMag Everyday News Footer Logo"
                className="h-[45px] w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
            </p>
            <p className="text-gray-400 text-sm">
              We&apos;re accepting new partnerships right now.
            </p>
            
            <div className="text-xs text-gray-400 space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-[#FB3158]" />
                <span><strong>Email Us:</strong> info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-[#FB3158]" />
                <span><strong>Contact:</strong> +1-320-0123-451</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FB3158] transition-colors"><Facebook size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FB3158] transition-colors"><Twitter size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FB3158] transition-colors"><Pinterest size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FB3158] transition-colors"><Youtube size={14} /></a>
          </div>
        </div>

        {/* Column 2: Our Picks widget */}
        <div className="space-y-6">
          <div className="border-b border-white/5 pb-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158]">Our Picks</h4>
          </div>

          <div className="space-y-6">
            {footerPicks.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group cursor-pointer">
                <div className="w-[80px] h-[60px] shrink-0 rounded-sm overflow-hidden bg-white/5">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="text-[13px] font-black leading-snug text-gray-200 group-hover:text-[#FB3158] transition-colors line-clamp-2">
                    {item.title}
                  </h5>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Most Popular widget */}
        <div className="space-y-6">
          <div className="border-b border-white/5 pb-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FB3158]">Most Popular</h4>
          </div>

          <div className="space-y-6">
            {footerPopular.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group cursor-pointer">
                <div className="w-[80px] h-[60px] shrink-0 rounded-sm overflow-hidden bg-white/5">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="text-[13px] font-black leading-snug text-gray-200 group-hover:text-[#FB3158] transition-colors line-clamp-2">
                    {item.title}
                  </h5>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#FB3158]">{item.views} Views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Lower Footer Copyright Section */}
      <div className="border-t border-white/5 bg-black/40 py-8">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
          {/* Left Copyright text */}
          <div>
            &copy; 2026 ThemeSphere. Designed by <Link href="https://theme-sphere.com" target="_blank" className="hover:text-white transition-colors flex inline-flex items-center gap-0.5">ThemeSphere <ExternalLink size={10} /></Link>. All rights reserved.
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-6">
            <Link href="/everyday-news" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Lifestyle</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
