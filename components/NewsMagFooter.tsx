"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";
import { footerPicks, footerPopular } from "@/lib/newsmagData";

export default function NewsMagFooter() {
  const quickLinks = [
    { label: "Home", href: "/news-mag" },
    { label: "Features", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Lifestyle", href: "#" }
  ];

  return (
    <footer className="bg-[#0e0e0e] text-gray-400 font-sans border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        
        {/* Column 1: About Us */}
        <div className="md:col-span-4 space-y-5">
          <Link href="/news-mag">
            <img 
              src="https://smartmag.theme-sphere.com/news-mag/wp-content/uploads/sites/45/2023/11/LOGO-NEWS-MAG-footer-01@05x.png" 
              alt="SmartMag NewsMag Footer Logo" 
              className="h-[36px] w-auto brightness-95" 
            />
          </Link>
          <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
            NewsMag is a premium, high-density newspaper and magazine layout tailored for breaking news, reviews, tech, and lifestyle publishers. Built with maximum performance and modern aesthetics.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2ab391] hover:text-white transition-all"><Facebook size={13} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2ab391] hover:text-white transition-all"><Twitter size={13} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2ab391] hover:text-white transition-all"><Instagram size={13} /></a>
          </div>
        </div>

        {/* Column 2: Our Picks */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-white border-l-2 border-[#2ab391] pl-2.5">
            Our Picks
          </h4>
          <div className="space-y-4">
            {footerPicks.map((post, i) => (
              <div key={i} className="flex gap-3.5 group items-start">
                <div className="w-[60px] h-[45px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-sm">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-[12px] text-gray-300 hover:text-[#2ab391] font-bold leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </Link>
                  <div className="text-[10px] text-gray-500 mt-1">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Most Popular */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-white border-l-2 border-[#2ab391] pl-2.5">
            Most Popular
          </h4>
          <div className="space-y-4">
            {footerPopular.map((post, i) => (
              <div key={i} className="flex gap-3.5 group items-start">
                <div className="w-[60px] h-[45px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-sm">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-[12px] text-gray-300 hover:text-[#2ab391] font-bold leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </Link>
                  <div className="text-[10px] text-gray-500 mt-1">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: copyright and links */}
      <div className="max-w-[1200px] mx-auto px-5 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <div>
          © 2026 SmartMag NewsMag Clone. Crafted with modern styling.
        </div>
        <div className="flex space-x-6">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
