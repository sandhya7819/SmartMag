"use client";

import Link from "next/link";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function SpotlightHeader() {
  return (
    <header className="w-full bg-white font-sans">
      
      {/* Top Bar */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] h-[45px] flex items-center justify-between">
          <div className="flex items-center space-x-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            <Link href="#" className="hover:text-[#e21d23] transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-[#e21d23] transition-colors">Demos</Link>
            <Link href="#" className="hover:text-[#e21d23] transition-colors">Contact Us</Link>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-4 text-gray-400">
              <Link href="#" className="hover:text-[#3b5998] transition-colors"><Facebook size={14} strokeWidth={2.5} /></Link>
              <Link href="#" className="hover:text-[#1da1f2] transition-colors"><Twitter size={14} strokeWidth={2.5} /></Link>
              <Link href="#" className="hover:text-[#e1306c] transition-colors"><Instagram size={14} strokeWidth={2.5} /></Link>
              <Link href="#" className="hover:text-[#ff0000] transition-colors"><Youtube size={14} strokeWidth={2.5} /></Link>
            </div>
            <button className="bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 hover:bg-[#111] transition-colors h-full flex items-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Logo & Navigation */}
      <div className="border-b border-gray-100 shadow-sm relative z-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="flex items-center justify-between h-[80px]">
            
            {/* Hamburger (Left) */}
            <div className="w-[100px]">
              <button className="text-[#111] hover:text-[#e21d23] transition-colors flex items-center group">
                <Menu size={24} strokeWidth={2} />
              </button>
            </div>

            {/* Logo Center */}
            <div className="flex flex-col items-center justify-center">
              <Link href="/spotlight" className="flex flex-col items-center group">
                <span className="text-[34px] font-black tracking-tighter text-[#111] uppercase leading-none mb-1">
                  Spotlight
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[4px] text-gray-400 group-hover:text-[#e21d23] transition-colors">
                  News Magazine
                </span>
              </Link>
            </div>

            {/* Search (Right) */}
            <div className="w-[100px] flex justify-end">
              <button className="text-[#111] hover:text-[#e21d23] transition-colors">
                <Search size={20} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center border-t border-gray-100 h-[50px]">
          <nav className="flex items-center space-x-8">
            <Link href="#" className="text-[13px] font-bold text-[#e21d23] uppercase tracking-wider h-full flex items-center relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Home</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Features</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Fashion & Style</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Culture</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Health</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Life</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Buy Theme</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
