import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function NewsVerifiedHeader() {
  return (
    <header className="w-full bg-white font-sans">
      {/* Top Bar */}
      <div className="border-b border-gray-100 py-2 hidden lg:block">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[12px] text-gray-500 font-medium">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#e91e63] transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-[#e91e63] transition-colors">Demos</Link>
            <Link href="#" className="hover:text-[#e91e63] transition-colors">Contact</Link>
            <Link href="#" className="hover:text-[#e91e63] transition-colors">Buy Theme</Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-3 text-gray-400">
              <Facebook size={14} className="hover:text-[#e91e63] cursor-pointer transition-colors" />
              <Twitter size={14} className="hover:text-[#e91e63] cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-[#e91e63] cursor-pointer transition-colors" />
            </div>
            <button className="bg-black text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full hover:bg-[#e91e63] transition-colors">
               SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Middle Header - Logo */}
      <div className="py-10 text-center">
        <Link href="/news-verified" className="inline-flex items-center gap-1 group">
          <span className="text-4xl font-bold tracking-tight text-[#111]">News</span>
          <span className="text-4xl font-light tracking-tight text-[#111]">Verified</span>
          <CheckCircle2 size={32} className="text-[#3f51b5] ml-1 group-hover:scale-110 transition-transform" />
        </Link>
      </div>

      {/* Sticky Main Navigation */}
      <div className="border-y border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-14">
          <Menu className="cursor-pointer text-[#111] hover:text-[#e91e63] transition-colors" size={24} />
          
          <nav className="hidden lg:flex gap-8 text-[13px] font-semibold text-[#161616]">
             <Link href="#" className="hover:text-[#e91e63] transition-colors text-[#e91e63]">Home</Link>
             <Link href="#" className="hover:text-[#e91e63] transition-colors flex items-center gap-1 group">Politics <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#e91e63] transition-colors flex items-center gap-1 group">Business <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#e91e63] transition-colors">Technology</Link>
             <Link href="#" className="hover:text-[#e91e63] transition-colors flex items-center gap-1 group">Health <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#e91e63] transition-colors">World</Link>
          </nav>

          <Search size={20} className="text-[#111] hover:text-[#e91e63] cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
}
