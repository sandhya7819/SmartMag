"use client";

import React from "react";
import Link from "next/link";
import { ourPicksPosts } from "@/lib/bloggerData";

const SOCIAL_LINKS = [
  { service: "facebook", url: "#" },
  { service: "twitter", url: "#" },
  { service: "instagram", url: "#" }
];

function SocialIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  };
  return icons[service] || null;
}

export default function BloggerFooter() {
  return (
    <footer className="bg-[#101010] text-white border-t border-white/[0.05] font-sans">
      
      {/* Upper Footer: 3 Columns Grid */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Widget 1: About Us */}
          <div className="space-y-6">
            <div className="border-l-[3px] border-red-500 pl-3.5 mb-5">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-white">About Us</h5>
            </div>
            <div className="space-y-5">
              <img 
                src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Blogger-logo-white@2x.png" 
                alt="SmartMag Blogger Logo" 
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
              <p className="text-[13px] text-white/55 leading-relaxed font-semibold">
                Your source for creative news, styling tips, and trends. This demo is designed specifically to exhibit the utility of the premium magazine theme for creative bloggers and lifestyle content creators.
              </p>
              <p className="text-[13px] text-white/55 leading-relaxed font-semibold">
                Get in touch for custom partnerships and guest features.
              </p>
              <div className="text-[13px] text-white/80 space-y-1 font-bold">
                <div><span className="text-white/40">Email Us:</span> <a href="mailto:contact@blogger.com" className="hover:text-red-500 transition-colors">contact@blogger.com</a></div>
                <div><span className="text-white/40">Contact:</span> +1-320-987-6543</div>
              </div>
            </div>
          </div>

          {/* Widget 2: Our Picks */}
          <div className="space-y-6">
            <div className="border-l-[3px] border-red-500 pl-3.5 mb-5">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-white">Our Picks</h5>
            </div>
            <div className="space-y-4">
              {ourPicksPosts.map((post, idx) => (
                <div key={idx} className="flex gap-3.5 group cursor-pointer items-center border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                  <div className="w-[85px] h-[55px] shrink-0 bg-white/5 rounded-xs overflow-hidden relative">
                    <img 
                      src={post.img} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h5 className="text-[12.5px] font-bold text-white/90 leading-snug group-hover:text-red-500 transition-colors line-clamp-2">
                      <Link href={post.url}>{post.title}</Link>
                    </h5>
                    <span className="text-[9.5px] text-white/40 font-bold uppercase">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 3: New Comments */}
          <div className="space-y-6">
            <div className="border-l-[3px] border-red-500 pl-3.5 mb-5">
              <h5 className="text-[13px] font-black uppercase tracking-widest text-white">New Comments</h5>
            </div>
            <ul className="space-y-4 text-[13px] font-semibold text-white/50">
              {[
                {
                  author: "Shane Doe",
                  post: "Is Breakfast the Best Time of the Day to Eat a Big Meal",
                  comment: "Very informative article on nutrition!"
                },
                {
                  author: "Jane Doe",
                  post: "Why You Should Not Over-Cook Frozen Food",
                  comment: "Learned a lot of practical tips here."
                },
                {
                  author: "Alex Smith",
                  post: "Singapore Has Been Ranked as the Fifth-Richest City",
                  comment: "Interesting economic insights, thanks for sharing."
                },
                {
                  author: "Elena Popova",
                  post: "Catch Last Of The Summer Sun On Santorini This Year",
                  comment: "Santorini is absolutely gorgeous, great photos."
                }
              ].map((c, idx) => (
                <li key={idx} className="border-b border-white/[0.04] pb-3.5 last:border-0 last:pb-0 leading-relaxed">
                  <span className="font-bold text-white/90 hover:text-red-500 transition-colors cursor-pointer">{c.author}</span>:{" "}
                  <span className="italic text-white/40">"{c.comment}"</span>
                  <a href="/blogger" className="text-white/60 hover:text-red-500 transition-colors font-bold block line-clamp-1 text-[12px] mt-1">
                    on {c.post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer: copyright & socials */}
      <div className="border-t border-white/[0.05] bg-[#0c0c0d] text-white/40 text-[11px] font-bold py-6">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((soc) => (
              <a 
                key={soc.service} 
                href={soc.url} 
                className="w-7.5 h-7.5 rounded-xs bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                title={soc.service}
              >
                <SocialIcon service={soc.service} />
              </a>
            ))}
          </div>

          {/* Copyright Info */}
          <div className="text-center sm:text-right font-medium tracking-wide">
            &copy; 2026 SmartMag Blogger. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-500 transition-colors font-bold">ThemeSphere</a>.
          </div>
        </div>
      </div>

    </footer>
  );
}
