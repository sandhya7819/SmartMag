import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function PoliticalHeader() {
  return (
    <header className="w-full bg-white font-serif">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-100 py-1.5 hidden lg:block">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[11px] text-gray-500 font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#e01111] transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-[#e01111] transition-colors">Demos</Link>
            <Link href="#" className="hover:text-[#e01111] transition-colors">Our Authors</Link>
          </div>
          <div>
            <Link href="#" className="hover:text-[#e01111] transition-colors">Buy Now</Link>
          </div>
        </div>
      </div>

      {/* Middle Brand Bar */}
      <div className="py-8">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <div className="flex gap-4 text-gray-800">
            <Facebook size={16} className="hover:text-[#e01111] cursor-pointer transition-colors" />
            <Twitter size={16} className="hover:text-[#e01111] cursor-pointer transition-colors" />
            <Instagram size={16} className="hover:text-[#e01111] cursor-pointer transition-colors" />
          </div>
          
          <Link href="/political" className="text-center group">
            <h1 className="text-5xl font-black tracking-tight text-[#111] group-hover:text-[#e01111] transition-colors uppercase">
              POLITICAL
            </h1>
          </Link>

          <button className="bg-[#e01111] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-black transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <div className="border-y border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-14">
          <div className="text-[12px] text-gray-500 font-bold uppercase tracking-wider hidden lg:block">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          
          <nav className="hidden lg:flex gap-8 text-[14px] font-bold text-[#111] uppercase">
             <Link href="#" className="text-[#e01111] transition-colors border-b-2 border-[#e01111] pb-[17px] mt-[19px]">Home</Link>
             <Link href="#" className="hover:text-[#e01111] transition-colors flex items-center gap-1 group">Politics <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#e01111] transition-colors flex items-center gap-1 group">Economy <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#e01111] transition-colors">Science & Tech</Link>
             <Link href="#" className="hover:text-[#e01111] transition-colors flex items-center gap-1 group">Sports <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#e01111] transition-colors">World</Link>
          </nav>

          <div className="flex items-center gap-5">
            <Search size={20} className="text-[#111] hover:text-[#e01111] cursor-pointer transition-colors" />
            <div className="h-6 w-[1px] bg-gray-200 hidden lg:block"></div>
            <Menu className="cursor-pointer text-[#111] hover:text-[#e01111] transition-colors" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
