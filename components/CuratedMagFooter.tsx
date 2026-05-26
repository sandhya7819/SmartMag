"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Rss, ArrowRight, Phone, Mail, Award } from "lucide-react";
import { footerPicks, footerPopular } from "@/lib/curatedMagData";

export default function CuratedMagFooter() {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Footer Top Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Column 1: About Us */}
          <div className="space-y-6">
            <div className="widget-title border-b border-white/10 pb-3 mb-6">
              <h5 className="text-[14px] font-black uppercase tracking-widest text-[#E40784]">About Us</h5>
            </div>
            <div className="space-y-5">
              <img 
                src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/02/logo-curatedMag-footer.png" 
                alt="CuratedMag" 
                className="h-7 object-contain"
                srcSet="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/02/logo-curatedMag-footer.png ,https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/02/logo-curatedMag-footer@2x.png 2x"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <div className="space-y-2 text-xs font-bold text-gray-300 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-[#E40784]" />
                  <span>Email Us: <a href="mailto:info@example.com" className="text-white hover:text-[#E40784] transition-colors">info@example.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-[#E40784]" />
                  <span>Contact: <a href="tel:+13200123451" className="text-white hover:text-[#E40784] transition-colors">+1-320-0123-451</a></span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3.5 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E40784] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Facebook size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E40784] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E40784] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Instagram size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E40784] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Youtube size={14} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-6">
            <div className="widget-title border-b border-white/10 pb-3 mb-6">
              <h5 className="text-[14px] font-black uppercase tracking-widest text-[#E40784]">Our Picks</h5>
            </div>
            <div className="space-y-6">
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
                    <h6 className="text-[13px] font-bold text-gray-200 group-hover:text-[#E40784] transition-colors leading-snug line-clamp-2">
                      <Link href="/curated-mag">{post.title}</Link>
                    </h6>
                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div className="space-y-6">
            <div className="widget-title border-b border-white/10 pb-3 mb-6">
              <h5 className="text-[14px] font-black uppercase tracking-widest text-[#E40784]">Most Popular</h5>
            </div>
            <div className="space-y-6">
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
                    <h6 className="text-[13px] font-bold text-gray-200 group-hover:text-[#E40784] transition-colors leading-snug line-clamp-2">
                      <Link href="/curated-mag">{post.title}</Link>
                    </h6>
                    <div className="flex items-center gap-2 text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-none stroke-current stroke-2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                        {post.views} Views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <div className="text-center md:text-left">
            © 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">ThemeSphere</a>.
          </div>
          
          <ul className="flex flex-wrap gap-5 justify-center">
            <li><Link href="/curated-mag" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/curated-mag" className="hover:text-white transition-colors">Lifestyle</Link></li>
            <li><Link href="/curated-mag" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/curated-mag" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
