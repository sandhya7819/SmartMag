"use client";

import React from "react";
import Link from "next/link";
import { ourPicksFooter, popularFooter } from "@/lib/insightsOnlyData";

export default function InsightsOnlyFooter() {
  return (
    <footer className="bg-[#101118] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto max-w-[1200px] px-4">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: About Us */}
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-3">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-[#ef2c32]">About Us</h5>
            </div>
            <div className="space-y-5">
              <img 
                src="https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/logo-insightsonly-01-white@05x.png" 
                alt="About Us" 
                className="h-8 object-contain bg-transparent block"
                srcSet="https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/logo-insightsonly-01-white@05x.png ,https://smartmag.theme-sphere.com/insights-only/wp-content/uploads/sites/48/2023/12/logo-insightsonly-01-white.png 2x"
              />
              <p className="text-gray-400 text-[13.5px] leading-relaxed font-medium">
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <p className="text-gray-400 text-[13.5px] leading-relaxed font-medium">
                We're accepting new partnerships right now.
              </p>
              <div className="space-y-1.5 text-xs font-bold text-gray-300 uppercase tracking-widest pt-1">
                <div>
                  <span className="text-white/40 mr-1.5">Email Us:</span> 
                  <a href="mailto:info@example.com" className="text-white hover:text-[#ef2c32] transition-colors">info@example.com</a>
                </div>
                <div>
                  <span className="text-white/40 mr-1.5">Contact:</span> 
                  <a href="tel:+13200123451" className="text-white hover:text-[#ef2c32] transition-colors">+1-320-0123-451</a>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                {["facebook", "twitter", "pinterest", "youtube", "whatsapp"].map((srv) => (
                  <a 
                    key={srv}
                    href="#" 
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ef2c32] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="text-xs uppercase font-black">{srv[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-3">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-[#ef2c32]">Our Picks</h5>
            </div>
            <div className="space-y-5">
              {ourPicksFooter.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-12 shrink-0 bg-white/5 overflow-hidden rounded-sm relative aspect-[3/2]">
                    <img 
                      src={post.img} 
                      alt="" 
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-103 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h6 className="text-[13px] font-bold text-gray-200 group-hover:text-[#ef2c32] transition-colors leading-snug line-clamp-2">
                      <Link href="/insights-only">{post.title}</Link>
                    </h6>
                    <div className="text-[9.5px] text-gray-500 font-bold uppercase tracking-wider">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-3">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-[#ef2c32]">Most Popular</h5>
            </div>
            <div className="space-y-5">
              {popularFooter.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-12 shrink-0 bg-white/5 overflow-hidden rounded-sm relative aspect-[3/2]">
                    <img 
                      src={post.img} 
                      alt="" 
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-103 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h6 className="text-[13px] font-bold text-gray-200 group-hover:text-[#ef2c32] transition-colors leading-snug line-clamp-2">
                      <Link href="/insights-only">{post.title}</Link>
                    </h6>
                    <div className="flex items-center gap-2 text-[9.5px] text-gray-500 font-bold uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-[2.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 19.5h16.5M12 4.5v12m0 0-3.75-3.75M12 16.5l3.75-3.75"/></svg>
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
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10.5px] font-black uppercase tracking-widest text-gray-500">
          <div className="text-center md:text-left">
            &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ThemeSphere</a>.
          </div>
          
          <ul className="flex flex-wrap gap-5 justify-center">
            <li><Link href="/insights-only" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/insights-only" className="hover:text-white transition-colors">Lifestyle</Link></li>
            <li><Link href="/insights-only" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/insights-only" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
