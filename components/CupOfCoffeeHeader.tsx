"use client";

import Link from "next/link";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function CupOfCoffeeHeader() {
  return (
    <header className="w-full bg-white font-sans border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-[#111111] text-[#999999] text-[11px] font-semibold uppercase tracking-wider hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] h-[40px] flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:text-white transition-colors">Buy Theme</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors"><Facebook size={14} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter size={14} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Instagram size={14} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Youtube size={14} /></Link>
          </div>
        </div>
      </div>

      {/* Main Header / Logo Area */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-8 flex flex-col items-center justify-center">
        <Link href="/cup-of-coffee" className="flex flex-col items-center group">
          <div className="flex items-center">
            <span className="text-[42px] font-black tracking-tight text-[#111] uppercase leading-none">CupOf</span>
            <span className="text-[42px] font-black tracking-tight text-[#e21d23] uppercase leading-none ml-1">Coffee</span>
            <span className="text-[42px] font-black tracking-tight text-[#111] leading-none ml-1">.</span>
          </div>
          <span className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold mt-2 group-hover:text-[#e21d23] transition-colors">Daily Lifestyle Magazine</span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex items-center justify-between h-[60px] border-t border-gray-100 relative">
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#111]">
            <Menu size={24} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link href="#" className="text-[13px] font-bold text-[#e21d23] uppercase tracking-wider h-full flex items-center relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Home</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Lifestyle</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Culture</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Food & Drink</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Travel</Link>
            <Link href="#" className="text-[13px] font-bold text-[#111] uppercase tracking-wider h-full flex items-center hover:text-[#e21d23] transition-colors">Health</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-5">
            <button className="text-[#111] hover:text-[#e21d23] transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </button>
            <button className="hidden md:flex items-center bg-[#e21d23] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm hover:bg-[#111] transition-colors">
              <Mail size={14} className="mr-2" /> Subscribe
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
