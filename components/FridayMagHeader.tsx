"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu } from "lucide-react";

export default function FridayMagHeader() {
  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button className="text-black hover:text-[#f7b500] transition-colors">
              <Menu size={24} />
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              {["Home", "Features", "TV & Drama", "Technology", "Health & Fitness", "Buy Theme"].map((item) => (
                <Link key={item} href="#" className="text-[13px] font-black uppercase tracking-widest text-black hover:text-[#f7b500] transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <button className="text-black hover:text-[#f7b500] transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="bg-[#111] py-8 text-white">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#f7b500] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-[#f7b500] transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-[#f7b500] transition-colors"><Instagram size={18} /></a>
          </div>
          
          <Link href="/" className="group">
            <h1 className="text-5xl font-black tracking-tighter uppercase font-outfit">
              Fr<span className="text-[#f7b500]">.</span>dayMag
            </h1>
          </Link>

          <button className="bg-[#f7b500] text-black px-6 py-2.5 text-[12px] font-black uppercase tracking-widest hover:bg-white transition-all rounded-sm shadow-lg">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Hot Topics Bar */}
      <div className="bg-white border-b border-gray-50 py-2.5">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-6 overflow-x-auto whitespace-nowrap">
          <span className="bg-[#f7b500] text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">Hot Topics</span>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-black transition-colors underline decoration-[#f7b500] decoration-2 underline-offset-4">Premium Demos</Link>
            <Link href="#" className="hover:text-black transition-colors">Editor's Top Picks</Link>
            <Link href="#" className="hover:text-black transition-colors">Contact Us</Link>
            <Link href="#" className="hover:text-black transition-colors">Buy Curated Theme</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
