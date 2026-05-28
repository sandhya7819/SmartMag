"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, Dribbble, Heart } from "lucide-react";
import { footerPicks, footerPopular } from "@/lib/magazineCoData";

export default function MagazineCoFooter() {
  return (
    <footer className="bg-[#0b0c11] text-white pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Footer Top Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About Us */}
          <div className="space-y-5">
            <div className="border-b border-white/5 pb-2">
              <h5 className="text-[12px] font-black uppercase tracking-widest text-[#3b82f6] relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">About Us</h5>
            </div>
            <div className="space-y-4">
              <Link href="/magazine-co" className="inline-block pt-1">
                <img 
                  src="https://smartmag.theme-sphere.com/magazine-co/wp-content/uploads/sites/39/2023/06/LOGO-MAGAZINE-CO-01-light.png" 
                  alt="Magazine Co. Logo Footer" 
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-semibold">
                We're accepting new partnerships right now.
              </p>
              <div className="space-y-2 text-xs text-gray-300 pt-1">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-[#3b82f6] shrink-0" />
                  <span>Email: <a href="mailto:info@example.com" className="text-white hover:text-[#3b82f6] transition-colors font-bold">info@example.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-[#3b82f6] shrink-0" />
                  <span>Contact: <a href="tel:+13200123451" className="text-white hover:text-[#3b82f6] transition-colors font-bold">+1-320-0123-451</a></span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-5">
            <div className="border-b border-white/5 pb-2">
              <h5 className="text-[12px] font-black uppercase tracking-widest text-[#3b82f6] relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Our Picks</h5>
            </div>
            <div className="space-y-4 pt-1">
              {footerPicks.map((post, idx) => (
                <div key={idx} className="flex gap-3.5 group cursor-pointer">
                  <div className="w-14 h-14 shrink-0 bg-white/5 overflow-hidden rounded-sm relative aspect-square">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <h6 className="text-[11px] font-bold text-gray-200 group-hover:text-[#3b82f6] transition-colors leading-snug line-clamp-2">
                      <Link href="/magazine-co">{post.title}</Link>
                    </h6>
                    <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div className="space-y-5">
            <div className="border-b border-white/5 pb-2">
              <h5 className="text-[12px] font-black uppercase tracking-widest text-[#3b82f6] relative after:absolute after:bottom-[-10px] after:left-0 after:w-8 after:h-0.5 after:bg-[#3b82f6]">Most Popular</h5>
            </div>
            <div className="space-y-4 pt-1">
              {footerPopular.map((post, idx) => (
                <div key={idx} className="flex gap-3.5 group cursor-pointer">
                  <div className="w-14 h-14 shrink-0 bg-white/5 overflow-hidden rounded-sm relative aspect-square">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <h6 className="text-[11px] font-bold text-gray-200 group-hover:text-[#3b82f6] transition-colors leading-snug line-clamp-2">
                      <Link href="/magazine-co">{post.title}</Link>
                    </h6>
                    <div className="flex items-center gap-1.5 text-[8px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="text-orange-400">{post.views} Views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div className="flex items-center gap-3 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={12} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={12} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={12} /></a>
            <a href="#" className="hover:text-white transition-colors"><Dribbble size={12} /></a>
          </div>

          <div className="text-center sm:text-right">
            © 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">ThemeSphere</a>.
          </div>
        </div>
      </div>
    </footer>
  );
}
