"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube, Flame } from "lucide-react";
import { footerPicks, footerPopular } from "@/lib/familyMagData";

export default function FamilyMagFooter() {
  return (
    <footer className="bg-[#0f0f11] text-white pt-16 pb-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Footer Top Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About Us */}
          <div className="space-y-5">
            <div className="widget-title border-b border-white/10 pb-3 mb-5">
              <h5 className="text-[14px] font-black uppercase tracking-wider text-[#e26a6a]">About Us</h5>
            </div>
            <div className="space-y-4">
              <img 
                src="https://smartmag.theme-sphere.com/family-mag/wp-content/uploads/sites/50/2024/01/logo-familyMag-01@15x.png" 
                alt="FamilyMag" 
                className="h-8 object-contain"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Your daily destination for family-focused news, lifestyle guides, technology insights, and relationship advice. Designed with care and crafted for the modern household.
              </p>
              <div className="space-y-2 text-xs font-bold text-gray-300 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-[#e26a6a]" />
                  <span>Email: <a href="mailto:contact@familymag.com" className="text-white hover:text-[#e26a6a] transition-colors">contact@familymag.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-[#e26a6a]" />
                  <span>Phone: <a href="tel:+18001234567" className="text-white hover:text-[#e26a6a] transition-colors">+1 (800) 123-4567</a></span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e26a6a] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Facebook size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e26a6a] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e26a6a] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Instagram size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e26a6a] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"><Youtube size={14} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-5">
            <div className="widget-title border-b border-white/10 pb-3 mb-5">
              <h5 className="text-[14px] font-black uppercase tracking-wider text-[#e26a6a]">Our Picks</h5>
            </div>
            <div className="space-y-5">
              {footerPicks.map((post, idx) => (
                <div key={idx} className="flex gap-3.5 group cursor-pointer">
                  <div className="w-16 h-12 shrink-0 bg-white/5 overflow-hidden rounded-[2px] relative aspect-[4/3]">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h6 className="text-[12.5px] font-bold text-gray-200 group-hover:text-[#e26a6a] transition-colors leading-snug line-clamp-2">
                      <Link href={post.url}>{post.title}</Link>
                    </h6>
                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div className="space-y-5">
            <div className="widget-title border-b border-white/10 pb-3 mb-5">
              <h5 className="text-[14px] font-black uppercase tracking-wider text-[#e26a6a]">Most Popular</h5>
            </div>
            <div className="space-y-5">
              {footerPopular.map((post, idx) => (
                <div key={idx} className="flex gap-3.5 group cursor-pointer">
                  <div className="w-16 h-12 shrink-0 bg-white/5 overflow-hidden rounded-[2px] relative aspect-[4/3]">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h6 className="text-[12.5px] font-bold text-gray-200 group-hover:text-[#e26a6a] transition-colors leading-snug line-clamp-2">
                      <Link href={post.url}>{post.title}</Link>
                    </h6>
                    <div className="flex items-center gap-1.5 text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <Flame size={10} className="text-[#e26a6a]" />
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
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10.5px] font-bold uppercase tracking-wider text-gray-500">
          <div className="text-center md:text-left">
            © 2026 SmartMag Demos. Recreated beautifully for users.
          </div>
          
          <ul className="flex flex-wrap gap-5 justify-center">
            <li><Link href="/family-mag" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/family-mag" className="hover:text-white transition-colors">Lifestyle</Link></li>
            <li><Link href="/family-mag" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/family-mag" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
