"use client";

import React from "react";
import Link from "next/link";
import { mustRead } from "@/lib/geeksEmpireData";

const SOCIAL_LINKS = [
  { service: "facebook", url: "#" },
  { service: "twitter", url: "#" },
  { service: "instagram", url: "#" },
  { service: "pinterest", url: "#" }
];

function SocialIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
    pinterest: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.98-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.3.12-.34.3-.04.14-.14.2-.28.14-1-.46-1.62-1.92-1.62-3.1 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.46-6.2 7.46-1.21 0-2.35-.63-2.74-1.37 0 0-.6 2.28-.74 2.85-.27 1.04-1 2.35-1.5 3.14 1.13.33 2.3.51 3.53.51 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>,
  };

  return icons[service] || null;
}

export default function GeeksEmpireFooter() {
  return (
    <footer className="bg-[#1A1B1D] text-white border-t border-white/[0.08] font-sans">
      
      {/* Upper Footer: 3 Columns Widgets */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Widget 1: About Us */}
          <div className="space-y-6">
            <div className="border-l-[3px] border-[#ef2626] pl-3.5 mb-5">
              <h5 className="text-[13px] font-black uppercase tracking-widest">About Us</h5>
            </div>
            <div className="space-y-4">
              <img 
                src="https://smartmag.theme-sphere.com/geeks-empire/wp-content/uploads/sites/14/2021/03/geeks-empire-logo.png" 
                alt="Geeks Empire Logo" 
                className="h-9 w-auto object-contain"
                loading="lazy"
              />
              <p className="text-[13px] text-white/55 leading-relaxed font-medium">
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <p className="text-[13px] text-white/55 leading-relaxed font-medium">
                We're accepting new partnerships right now.
              </p>
              <div className="text-[13px] text-white/80 space-y-1 font-bold">
                <div><span className="text-white/40">Email Us:</span> <a href="mailto:info@example.com" className="hover:text-[#ef2626] transition-colors">info@example.com</a></div>
                <div><span className="text-white/40">Contact:</span> +1-320-0123-451</div>
              </div>
            </div>
          </div>

          {/* Widget 2: Our Picks */}
          <div className="space-y-6">
            <div className="border-l-[3px] border-[#ef2626] pl-3.5 mb-5">
              <h5 className="text-[13px] font-black uppercase tracking-widest">Our Picks</h5>
            </div>
            <div className="space-y-4">
              {mustRead.map((post, idx) => (
                <div key={idx} className="flex gap-3.5 group cursor-pointer items-center border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                  <div className="w-[100px] h-[64px] shrink-0 bg-white/5 rounded-sm overflow-hidden relative aspect-[16/9]">
                    <img 
                      src={post.img} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h5 className="text-[12.5px] font-bold text-white/90 leading-snug group-hover:text-[#ef2626] transition-colors line-clamp-2">
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
            <div className="border-l-[3px] border-[#ef2626] pl-3.5 mb-5">
              <h5 className="text-[13px] font-black uppercase tracking-widest">New Comments</h5>
            </div>
            <ul className="space-y-4 text-[13px] font-medium text-white/55">
              {[
                {
                  author: "John Doe",
                  url: "https://theme-sphere.com",
                  post: "Assassin’s Creed Valhalla Expansion 2 to Take Gamers to Ireland"
                },
                {
                  author: "Sam Doe",
                  url: "https://theme-sphere.com",
                  post: "Samsung Announces Galaxy Buds Pro, Most Premium Earbuds Yet"
                },
                {
                  author: "Jane Doe",
                  url: "https://theme-sphere.com",
                  post: "Guild Wars 2 Art Shows Upcoming Projects"
                },
                {
                  author: "Jane Doe",
                  url: "https://theme-sphere.com",
                  post: "Scary Movie 6: Release Date, Plot, Cast & Preview"
                }
              ].map((comment, idx) => (
                <li key={idx} className="border-b border-white/[0.04] pb-3 last:border-0 last:pb-0 leading-normal">
                  <span className="font-bold text-white/90 hover:text-[#ef2626] transition-colors cursor-pointer">{comment.author}</span> on{" "}
                  <a href="/geeks-empire" className="text-white/70 hover:text-[#ef2626] transition-colors font-bold line-clamp-1 text-[12.5px] mt-0.5">
                    {comment.post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer: copyright & socials */}
      <div className="border-t border-white/[0.06] bg-[#151516] text-white/45 text-[11px] font-bold py-6">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((soc) => (
              <a 
                key={soc.service} 
                href={soc.url} 
                className="w-7 h-7 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#ef2626] hover:text-white transition-colors"
                title={soc.service}
              >
                <SocialIcon service={soc.service} />
              </a>
            ))}
          </div>

          {/* Copyright Info */}
          <div className="text-center sm:text-right font-medium tracking-wide">
            &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#ef2626] transition-colors">ThemeSphere</a>.
          </div>
        </div>
      </div>

    </footer>
  );
}
