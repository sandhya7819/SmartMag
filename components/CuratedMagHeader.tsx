"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu } from "lucide-react";

export default function CuratedMagHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-[#111] text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#E40784] transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-[#E40784] transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-[#E40784] transition-colors"><Instagram size={14} /></a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Monday, March 10, 2025</span>
            <button className="bg-[#E40784] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#E40784] transition-all">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="py-8 text-center border-b border-gray-50">
        <Link href="/" className="inline-block">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
            CURATED<span className="text-[#E40784]">MAG</span>
          </h1>
          <p className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-1">Refining Your Daily Reading</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center py-4">
          <div className="md:hidden">
            <Menu size={24} />
          </div>
          
          <ul className="hidden md:flex items-center justify-center gap-8 flex-1">
            {["Home", "Features", "Technology", "Lifestyle", "Culture", "World", "Buy Theme"].map((item) => (
              <li key={item}>
                <Link 
                  href="#" 
                  className={`text-[13px] font-black uppercase tracking-widest hover:text-[#E40784] transition-colors ${item === 'Home' ? 'text-[#E40784]' : 'text-[#111]'}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="hover:text-[#E40784] transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
