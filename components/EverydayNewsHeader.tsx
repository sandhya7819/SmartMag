"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, Bell } from "lucide-react";

export default function EverydayNewsHeader() {
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 py-2 hidden md:block">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <div className="flex gap-6">
            <span>Monday, March 10, 2025</span>
            <Link href="#" className="hover:text-[#e91e63] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#e91e63] transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 border-r border-gray-200 pr-4 mr-4">
              <a href="#" className="hover:text-[#e91e63] transition-colors"><Facebook size={12} /></a>
              <a href="#" className="hover:text-[#e91e63] transition-colors"><Twitter size={12} /></a>
              <a href="#" className="hover:text-[#e91e63] transition-colors"><Instagram size={12} /></a>
            </div>
            <button className="flex items-center gap-2 text-[#e91e63] hover:text-black transition-colors">
              <Bell size={12} /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="container mx-auto max-w-[1200px] px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="group">
          <h1 className="text-4xl font-black tracking-tighter text-[#111] uppercase">
            Everyday<span className="text-[#e91e63]">News</span>
          </h1>
          <div className="h-1 w-12 bg-[#e91e63] mt-1 group-hover:w-full transition-all duration-500"></div>
        </Link>
        
        {/* Header Ad Space */}
        <div className="hidden lg:block w-[728px] h-[90px] bg-gray-50 border border-gray-100 flex items-center justify-center relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e91e63]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">Advertisement Space</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-y border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center py-4">
          <div className="md:hidden"><Menu size={24} /></div>
          
          <ul className="hidden md:flex items-center gap-8">
            {["Home", "Politics", "Technology", "Fashion", "Lifestyle", "World", "Sports"].map((item) => (
              <li key={item}>
                <Link href="#" className={`text-[12px] font-black uppercase tracking-widest hover:text-[#e91e63] transition-colors ${item === 'Home' ? 'text-[#e91e63]' : 'text-[#111]'}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button className="hover:text-[#e91e63] transition-colors"><Search size={20} /></button>
          </div>
        </div>
      </nav>
    </header>
  );
}
