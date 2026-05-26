"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUp, Mail, Phone, Heart } from "lucide-react";

export default function HealthFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 select-none">
      <div className="container mx-auto max-w-[1200px] px-4">
        
        {/* UPPER FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Column 1: About Us */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-black uppercase tracking-tight">
                Health<span className="text-[#2ab391]">Care</span>
              </span>
            </div>
            
            <div className="text-gray-400 text-[13.5px] leading-relaxed space-y-4">
              <p>
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <p>We're accepting new partnerships right now.</p>
              
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-[#2ab391]" />
                  <span className="font-bold text-white/80">Email Us:</span> info@example.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#2ab391]" />
                  <span className="font-bold text-white/80">Contact:</span> +1-320-0123-451
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#2ab391] border-b border-white/5 pb-2">
              Our Picks
            </h3>
            
            <div className="space-y-4">
              {[
                { 
                  title: "Large Study of COVID Vaccine Side Effects in Sweden", 
                  date: "Jan 12, 2020", 
                  img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2020/01/Depositphotos_448973218_XL-1-300x204.jpg" 
                },
                { 
                  title: "Coronavirus latest: Japan's Vaccination Rate Tops 75% As Cases Drop", 
                  date: "Jan 10, 2020", 
                  img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_499917926_XL-1-300x200.jpg" 
                },
                { 
                  title: "Review: Denmark Proposes Corona Pass Mandate for Workers", 
                  date: "Jan 9, 2020", 
                  rating: "8.9",
                  img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_513688372_XL-1-300x200.jpg" 
                }
              ].map((post, idx) => (
                <Link href="#" key={idx} className="flex gap-4 group/pick items-center">
                  <div className="w-16 h-12 rounded-sm overflow-hidden bg-white/5 shrink-0 relative">
                    <img src={post.img} className="w-full h-full object-cover group-hover/pick:scale-105 transition-transform duration-300" alt="" />
                    {post.rating && (
                      <span className="absolute bottom-1 right-1 bg-[#2ab391] text-white font-extrabold text-[8px] px-1 rounded-sm shadow-sm">
                        {post.rating}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-extrabold text-white/90 group-hover/pick:text-[#2ab391] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-white/30 font-bold block mt-0.5">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: New Comments */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest text-[#2ab391] border-b border-white/5 pb-2">
              New Comments
            </h3>

            <div className="space-y-4">
              {[
                { 
                  author: "Jane Doe", 
                  comment: "on J&J’s New Vaccines Leader Talks Covid-19 & Pipeline Plans"
                },
                { 
                  author: "Jane Doe", 
                  comment: "on Review: Denmark Proposes Corona Pass Mandate for Workers"
                },
                { 
                  author: "Jane Doe", 
                  comment: "on Coronavirus latest: Japan’s Vaccination Rate Tops 75% As Cases Drop"
                },
                { 
                  author: "Jane Doe", 
                  comment: "on Large Study of COVID Vaccine Side Effects in Sweden"
                }
              ].map((comment, idx) => (
                <div key={idx} className="text-[13px] leading-snug border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="font-extrabold text-white hover:text-[#2ab391] cursor-pointer transition-colors mr-1">
                    {comment.author}
                  </span>
                  <span className="text-gray-400 font-semibold">{comment.comment}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* LOWER FOOTER */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social icons */}
          <div className="flex gap-2">
            {[
              { icon: <Facebook size={16} />, key: "facebook" },
              { icon: <Twitter size={16} />, key: "twitter" },
              { icon: <Instagram size={16} />, key: "instagram" }
            ].map((soc) => (
              <a 
                key={soc.key} 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#2ab391] hover:text-white transition-all border border-white/5"
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[11px] font-black uppercase tracking-widest text-white/30 text-center md:text-left">
            &copy; 2026 ThemeSphere. Designed by{" "}
            <a href="https://theme-sphere.com" target="_blank" className="text-white/60 hover:text-[#2ab391] transition-colors">
              ThemeSphere
            </a>
            .
          </p>

          {/* Back to top button */}
          <button 
            onClick={scrollToTop} 
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#2ab391] flex items-center justify-center text-white transition-all shadow-lg hover:-translate-y-0.5"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}
