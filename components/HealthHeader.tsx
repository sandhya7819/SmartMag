"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, Search as SearchIcon, Bell } from "lucide-react";

export default function HealthHeader() {
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2fa09a] rounded-full flex items-center justify-center text-white">
                <span className="text-lg font-black">+</span>
              </div>
              <h1 className="text-2xl font-black tracking-tighter text-[#111] uppercase">
                Health<span className="text-[#2fa09a]">Care</span>
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
              <Link href="#" className="hover:text-[#2fa09a] transition-colors">Demos</Link>
              <Link href="#" className="hover:text-[#2fa09a] transition-colors">Contact</Link>
              <Link href="#" className="hover:text-[#2fa09a] transition-colors">Buy Now</Link>
            </nav>
            <div className="hidden md:flex items-center gap-4 border-l border-gray-100 pl-8 ml-2">
              <a href="#" className="text-gray-400 hover:text-[#2fa09a] transition-colors"><Facebook size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-[#2fa09a] transition-colors"><Twitter size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-[#2fa09a] transition-colors"><Instagram size={16} /></a>
            </div>
            <button className="bg-[#2fa09a] text-white px-6 py-2.5 text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-lg flex items-center gap-2 ml-4">
              <Bell size={14} /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center h-16">
          <button className="text-black hover:text-[#2fa09a] mr-8">
            <Menu size={24} />
          </button>
          
          <ul className="flex items-center justify-center gap-10 flex-1">
            {["Home", "Features", "Health", "Fitness", "Research", "Nutrition", "Lifestyle"].map((item) => (
              <li key={item}>
                <Link 
                  href="#" 
                  className={`text-[13px] font-black uppercase tracking-widest hover:text-[#2fa09a] transition-colors ${item === 'Home' ? 'text-[#2fa09a]' : 'text-[#111]'}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button className="text-black hover:text-[#2fa09a] ml-8 transition-colors">
            <SearchIcon size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
