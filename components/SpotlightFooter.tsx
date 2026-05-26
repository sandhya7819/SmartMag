"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Compass, Phone } from "lucide-react";

export default function SpotlightFooter() {
  return (
    <footer className="bg-[#111111] text-white font-sans border-t-4 border-[#CF2E2E]">
      <div className="container mx-auto px-6 max-w-[1200px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <img 
                src="https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/LOGO-SPOTLIGHTNEWS-01-white@05x.png" 
                alt="Spotlight" 
                className="h-[45px] w-auto mb-4"
              />
            </div>
            <div className="text-[#999] text-[13px] leading-relaxed mb-6 font-medium space-y-4">
              <p>Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.</p>
              <p>We're accepting new partnerships right now.</p>
              <p className="text-white font-bold text-[12px] pt-2">
                Email Us: <span className="text-gray-300 font-semibold">info@example.com</span>
                <br />
                Contact: <span className="text-gray-300 font-semibold">+1-320-0123-451</span>
              </p>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Link href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all"><Facebook size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all"><Twitter size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all text-[#e4223e]"><span className="text-[12px] font-black uppercase">P</span></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all"><Youtube size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#CF2E2E] hover:text-white transition-all text-[#23c761]"><span className="text-[10px] font-black">WA</span></Link>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div>
            <h3 className="text-[13px] font-black uppercase tracking-wider mb-8 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#CF2E2E] pb-1">
              Our Picks
            </h3>
            <div className="space-y-5">
              {[
                { 
                  title: "Eating Habits Courteney Cox Swears By to Look Amazing at 59", 
                  date: "Jan 22, 2021", 
                  img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/995a72edb76e21e7d5c88813c736acb1-300x200.jpg",
                  href: "#"
                },
                { 
                  title: "20 Living Room Color Combinations – Best Living Room Color Scheme", 
                  date: "Jan 16, 2021", 
                  img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/a66f99ad233894120896c18218d8c6ae-300x180.jpeg",
                  href: "#"
                },
                { 
                  title: "15 Best Exercises to Lose Belly Fat – How to Burn Belly Fat Fast", 
                  date: "Jan 16, 2021", 
                  img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/cd0372ed780a684a448f7144366cfa60-300x198.jpeg",
                  href: "#"
                }
              ].map((post, i) => (
                <Link href={post.href} key={i} className="flex gap-4 group cursor-pointer text-left">
                  <div className="w-[70px] h-[70px] shrink-0 overflow-hidden rounded-sm bg-[#222]">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-[12px] font-bold text-white leading-snug group-hover:text-[#CF2E2E] transition-colors line-clamp-2 mb-1 uppercase font-sans">
                      {post.title}
                    </h4>
                    <span className="text-[9px] text-[#777] uppercase tracking-wider font-bold">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div>
            <h3 className="text-[13px] font-black uppercase tracking-wider mb-8 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#CF2E2E] pb-1">
              Most Popular
            </h3>
            <div className="space-y-5">
              {[
                { 
                  title: "From Bathtubs to Showers: How People Have Bathed Throughout History", 
                  date: "Jan 14, 2021", 
                  views: "34 Views",
                  img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2021/01/a63a62ea9fec75962aa8901d747c9c3d-200x300.jpeg",
                  href: "#"
                },
                { 
                  title: "Study Tries to Determine How Many Licks to The Center of a Tootsie Pop", 
                  date: "Jan 14, 2021", 
                  views: "34 Views",
                  img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2021/01/f5ec31a3d8c2fa48c684b562b805f28f-300x213.jpeg",
                  href: "#"
                },
                { 
                  title: "Elon Musk Lashes Work From Home, Calls it Morally Dubious", 
                  date: "Jan 14, 2021", 
                  views: "36 Views",
                  img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2021/01/bd63b385cd05834dc72f3c4ff6305173-300x200.jpeg",
                  href: "#"
                }
              ].map((post, i) => (
                <Link href={post.href} key={i} className="flex gap-4 group cursor-pointer text-left">
                  <div className="w-[70px] h-[70px] shrink-0 overflow-hidden rounded-sm bg-[#222]">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-[12px] font-bold text-white leading-snug group-hover:text-[#CF2E2E] transition-colors line-clamp-2 mb-1 uppercase font-sans">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-[9px] text-[#777] font-bold uppercase tracking-wider space-x-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.views}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0a0a0a] border-t border-white/5 py-6">
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#666] text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-0">
            © 2026 Spotlight Magazine. Replicated by Antigravity.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-[#666]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
