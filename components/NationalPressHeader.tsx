"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Moon, Menu } from "lucide-react";

export default function NationalPressHeader() {
  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* Row 1: Top utility bar - dark */}
      <div className="bg-[#1a1a2e] text-white text-[11px] font-bold uppercase tracking-widest border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center h-9">
          <nav className="flex gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Demos</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link>
            <Link href="#" className="text-red-400 hover:text-red-300 transition-colors">Buy Now!</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#"><Facebook size={13} className="hover:text-blue-400 transition-colors" /></Link>
            <Link href="#"><Twitter size={13} className="hover:text-sky-400 transition-colors" /></Link>
            <Link href="#"><Instagram size={13} className="hover:text-pink-400 transition-colors" /></Link>
            <div className="w-px h-3 bg-white/20 mx-1" />
            <button aria-label="Dark mode"><Moon size={13} className="hover:text-yellow-300 transition-colors" /></button>
            <button aria-label="Search"><Search size={13} className="hover:text-gray-300 transition-colors" /></button>
          </div>
        </div>
      </div>

      {/* Row 2: Logo row - dark */}
      <div className="bg-[#1a1a2e] text-white border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between h-[72px]">
          <div className="flex items-center gap-3 text-[12px] font-bold text-gray-400 uppercase tracking-widest">
            <button className="hover:text-white transition-colors"><Menu size={20} /></button>
            <span className="hidden md:inline">Friday, May 15</span>
          </div>
          <Link href="/national-press" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="https://smartmag.theme-sphere.com/national-press/wp-content/uploads/sites/55/2024/07/logo-NationalPress-01.png"
              alt="National Press"
              width={247}
              height={53}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <a
            href="http://eepurl.com/hq-3Xb"
            target="_blank"
            rel="noopener"
            className="bg-[#e21c23] text-white text-[11px] font-black uppercase tracking-[2px] px-6 py-2.5 hover:bg-white hover:text-black transition-all"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Row 3: Main Nav - dark */}
      <nav className="bg-[#1a1a2e] text-white border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-12 gap-10 text-[12px] font-black uppercase tracking-widest">
            <Link href="/national-press" className="text-[#e21c23] border-b-2 border-[#e21c23] pb-[2px]">Home</Link>
            <Link href="#" className="hover:text-[#e21c23] transition-colors">Features</Link>
            <Link href="#" className="hover:text-[#e21c23] transition-colors">Politics</Link>
            <Link href="#" className="hover:text-[#e21c23] transition-colors">Business</Link>
            <Link href="#" className="hover:text-[#e21c23] transition-colors">World</Link>
            <Link href="#" className="hover:text-[#e21c23] transition-colors">Economy</Link>
            <Link href="#" className="hover:text-[#e21c23] transition-colors">Buy Theme</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
