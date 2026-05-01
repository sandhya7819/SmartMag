import { Facebook, Twitter, Instagram, Youtube, Search, Moon, Menu, CloudSun, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function SmartTimesHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans">
      {/* Top Bar - Black */}
      <div className="bg-[#111] text-white py-2.5 hidden lg:block text-[11px] font-black uppercase tracking-widest">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <span className="text-gray-400 font-black">TRENDING</span>
            <div className="w-[1px] h-3 bg-white/20"></div>
            <span className="truncate max-w-[500px] text-white/90">US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers</span>
          </div>
          <div className="flex gap-7 uppercase text-[10px] tracking-[2px] font-black">
            <Link href="#" className="hover:text-red-500 transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Demos</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Contact</Link>
            <Link href="#" className="text-red-500 font-black">Buy Now!</Link>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          <div className="flex gap-5 items-center">
            <Facebook size={18} className="text-black cursor-pointer hover:text-red-600 transition-colors" />
            <Twitter size={18} className="text-black cursor-pointer hover:text-red-600 transition-colors" />
            <Instagram size={18} className="text-black cursor-pointer hover:text-red-600 transition-colors" />
          </div>

          <Link href="/smart-times" className="absolute left-1/2 -translate-x-1/2 text-center group">
            <h1 className="text-6xl md:text-7xl font-serif font-black tracking-[-3px] text-black uppercase leading-none italic select-none">
               The <span className="group-hover:text-red-600 transition-colors">Smart</span> Times
            </h1>
          </Link>

          <button className="bg-[#e21c23] text-white text-[11px] font-black uppercase tracking-[3px] px-8 py-3 hover:bg-black transition-all rounded-sm shadow-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Navigation Menu - Centered with Red Indicator */}
      <nav className="bg-white sticky top-0 z-50 border-y border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center h-[52px]">
          <div className="flex gap-9 text-[13px] font-black uppercase tracking-widest text-black/90 h-full items-center">
            <Link href="#" className="text-red-600 border-b-[3px] border-red-600 h-full flex items-center px-1">Home</Link>
            <Link href="#" className="hover:text-red-600 transition-colors flex items-center gap-1 group h-full px-1">Features <ChevronDown size={14} className="opacity-40" /></Link>
            <Link href="#" className="hover:text-red-600 transition-colors flex items-center gap-1 group h-full px-1">Politics <ChevronDown size={14} className="opacity-40" /></Link>
            <Link href="#" className="hover:text-red-600 transition-colors h-full flex items-center px-1">Money</Link>
            <Link href="#" className="hover:text-red-600 transition-colors h-full flex items-center px-1">Sports</Link>
            <Link href="#" className="hover:text-red-600 transition-colors h-full flex items-center px-1">Opinion</Link>
            <Link href="#" className="hover:text-red-600 transition-colors h-full flex items-center px-1 text-red-600">Europe</Link>
            <Link href="#" className="hover:text-red-600 transition-colors h-full flex items-center px-1">Buy Theme</Link>
          </div>
          <div className="flex items-center gap-6 text-black">
            <Search size={20} className="cursor-pointer hover:text-red-600 stroke-[2.5]" />
            <Menu size={22} className="cursor-pointer hover:text-red-600 stroke-[2.5]" />
          </div>
        </div>
      </nav>
    </header>
  );
}
