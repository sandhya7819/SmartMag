'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Moon, Sun, Menu, Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';

export default function Tech2Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar - Dark */}
      <div className="bg-[#111] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-white transition-colors">Demos</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:text-[#fa057b] transition-colors">Buy Now!</Link>
          </div>
          <div className="flex items-center gap-4">
            <Facebook size={14} className="cursor-pointer hover:text-[#fa057b] transition-colors" />
            <Twitter size={14} className="cursor-pointer hover:text-[#fa057b] transition-colors" />
            <Instagram size={14} className="cursor-pointer hover:text-[#fa057b] transition-colors" />
            <Youtube size={14} className="cursor-pointer hover:text-[#fa057b] transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <button className="md:hidden">
              <Menu size={24} />
            </button>
            <Link href="/tech-2" className="flex items-center">
              <span className="text-3xl font-black text-black italic tracking-tighter">THE</span>
              <span className="text-3xl font-black text-[#fa057b] italic tracking-tighter">WIRE</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-x-10 text-[13px] font-black uppercase tracking-widest text-black">
              <li><Link href="/tech-2" className="hover:text-[#fa057b] transition-colors">Home</Link></li>
              <li className="group relative">
                <Link href="#" className="hover:text-[#fa057b] transition-colors flex items-center gap-1 uppercase">Features <ChevronDown size={14} /> <span className="bg-[#fa057b] text-[8px] text-white px-1 ml-1 rounded-[2px] leading-tight normal-case">HOT</span></Link>
              </li>
              <li><Link href="#" className="hover:text-[#fa057b] transition-colors">Mobiles</Link></li>
              <li><Link href="#" className="hover:text-[#fa057b] transition-colors">Gadgets</Link></li>
              <li><Link href="#" className="hover:text-[#fa057b] transition-colors">Hot Tech</Link></li>
              <li><Link href="#" className="hover:text-[#fa057b] transition-colors">Gaming</Link></li>
              <li><Link href="#" className="hover:text-[#fa057b] transition-colors">Buy Theme</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-black">
              <Moon size={20} className="cursor-pointer hover:text-[#fa057b] transition-colors" />
              <Search size={22} className="cursor-pointer hover:text-[#fa057b] transition-colors" />
            </div>
            <button className="hidden md:block px-6 py-2 bg-[#fa057b] text-white text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-black transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
