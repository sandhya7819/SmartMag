"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react";

export default function CupOfCoffeeFooter() {
  return (
    <footer className="bg-[#111111] text-white font-sans mt-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: About Us */}
          <div>
            <div className="mb-6 flex items-center">
              <span className="text-[32px] font-black tracking-tight text-white uppercase leading-none">CupOf</span>
              <span className="text-[32px] font-black tracking-tight text-[#e21d23] uppercase leading-none ml-1">Coffee</span>
              <span className="text-[32px] font-black tracking-tight text-white leading-none ml-1">.</span>
            </div>
            <p className="text-[#999] text-[14px] leading-relaxed mb-6 font-medium">
              We provide the latest news, reviews, and lifestyle tips for coffee lovers around the world. Stay updated with our daily curated content.
            </p>
            <div className="text-[#999] text-[13px] space-y-2 mb-8">
              <p><strong className="text-white">Email:</strong> hello@cupofcoffee.demo</p>
              <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="#" className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#3b5998] transition-colors"><Facebook size={14} /></Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#1da1f2] transition-colors"><Twitter size={14} /></Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#e1306c] transition-colors"><Instagram size={14} /></Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#bd081c] transition-colors"><Youtube size={14} /></Link>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div>
            <h3 className="text-[14px] font-black uppercase tracking-wider mb-8 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-8 after:h-[2px] after:bg-[#e21d23]">Our Picks</h3>
            <div className="space-y-6">
              {[
                { title: "The Best Morning Routines for Productivity", date: "May 12, 2026", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=200&auto=format&fit=crop" },
                { title: "10 Minimalist Desk Setups to Inspire You", date: "May 10, 2026", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=200&auto=format&fit=crop" },
                { title: "How to Brew the Perfect Pour Over Coffee", date: "May 8, 2026", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-[80px] h-[80px] shrink-0 overflow-hidden rounded-sm">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white leading-snug group-hover:text-[#e21d23] transition-colors line-clamp-2 mb-2 cursor-pointer">
                      {post.title}
                    </h4>
                    <span className="text-[11px] text-[#999] uppercase tracking-wider font-semibold">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Categories / Links */}
          <div>
            <h3 className="text-[14px] font-black uppercase tracking-wider mb-8 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-8 after:h-[2px] after:bg-[#e21d23]">Explore</h3>
            <ul className="space-y-3">
              {['Lifestyle', 'Health & Wellness', 'Travel & Adventure', 'Food & Drink', 'Culture & Arts', 'Photography'].map((category, i) => (
                <li key={i} className="border-b border-[#222] pb-3 last:border-0">
                  <Link href="#" className="text-[13px] text-[#aaa] font-semibold hover:text-[#e21d23] transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-2 text-[#444]" />
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0a0a0a] border-t border-[#222] py-6">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#777] text-[12px] font-semibold mb-4 md:mb-0">
            © 2026 CupOfCoffee Magazine. Designed with precision.
          </p>
          <div className="flex items-center space-x-6 text-[12px] font-semibold text-[#777]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
