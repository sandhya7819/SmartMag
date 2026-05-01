"use client";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-secondary text-white text-[11px] font-bold uppercase tracking-wider py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Clock size={12} className="text-primary" /> April 21, 2026</span>
            <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="#" className="hover:text-primary transition-colors">Advertising</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={14} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Youtube size={14} /></Link>
            <button className="bg-primary px-3 py-1 ml-2 rounded-sm hover:bg-primary-dark transition-colors">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-6">
          <div className="text-4xl font-extrabold tracking-tighter flex items-center">
            <span className="text-secondary uppercase">Smart</span>
            <span className="text-primary uppercase italic">Mag</span>
          </div>
          
          {/* Billboard Ad Placeholder */}
          <div className="w-full max-w-[728px] h-[90px] bg-accent border border-gray-200 flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-[2px]">
            - Billboard Ad 728x90 -
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-white border-b border-gray-200 z-50 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md animate-slideDown' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex items-center space-x-8 text-[13px] font-extrabold uppercase tracking-wide text-secondary h-14">
            <li className="h-full flex items-center border-b-2 border-primary"><Link href="#" className="text-primary">Home</Link></li>
            <li className="h-full flex items-center hover:text-primary transition-colors cursor-pointer group relative">
              <span className="flex items-center gap-1">Tech <span className="text-[10px] bg-primary text-white px-1 ml-1 rounded">HOT</span></span>
            </li>
            <li className="h-full flex items-center hover:text-primary transition-colors cursor-pointer">Lifestyle</li>
            <li className="h-full flex items-center hover:text-primary transition-colors cursor-pointer">Gadgets</li>
            <li className="h-full flex items-center hover:text-primary transition-colors cursor-pointer">Business</li>
            <li className="h-full flex items-center hover:text-primary transition-colors cursor-pointer">Travel</li>
            <li className="h-full flex items-center hover:text-primary transition-colors cursor-pointer">Food</li>
          </ul>
          <div className="flex items-center gap-4 text-secondary">
            <button className="hover:text-primary transition-colors"><Search size={20} /></button>
            <button className="md:hidden"><Menu size={24} /></button>
          </div>
        </div>
      </nav>
    </header>
  );
}
