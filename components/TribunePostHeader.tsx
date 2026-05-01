import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown, X } from "lucide-react";
import Link from "next/link";

export default function TribunePostHeader() {
  return (
    <header className="w-full bg-white font-sans border-b border-gray-100">
      {/* Top Branding Bar */}
      <div className="container mx-auto max-w-[1200px] px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/tribune-post" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#0369d1] rounded-full flex items-center justify-center text-white italic font-black text-xl">T</div>
          <h1 className="text-[26px] font-black tracking-tight text-[#111]">Tribune Post</h1>
        </Link>

        {/* Action Bar */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-gray-500 mr-4 border-r border-gray-100 pr-6">
            <Facebook size={16} className="hover:text-[#0369d1] cursor-pointer transition-colors" />
            <span className="text-gray-900 font-bold hover:text-[#0369d1] cursor-pointer transition-colors">𝕏</span>
            <Instagram size={16} className="hover:text-[#0369d1] cursor-pointer transition-colors" />
          </div>
          <button className="bg-[#0369d1] text-white text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-sm hover:bg-black transition-all shadow-md">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-12">
          <nav className="flex items-center gap-8 text-[13px] font-bold text-gray-700 uppercase tracking-wider">
            <Link href="#" className="text-[#0369d1]">Home</Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-[#0369d1] transition-colors">Features <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-[#0369d1] transition-colors">World Politics <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="hover:text-[#0369d1] transition-colors">Sports</Link>
            <Link href="#" className="hover:text-[#0369d1] transition-colors">Technology</Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-[#0369d1] transition-colors">Economy <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="hover:text-[#0369d1] transition-colors">Buy Theme</Link>
          </nav>

          <div className="flex items-center gap-4 text-gray-600">
             <Search size={18} className="hover:text-[#0369d1] cursor-pointer transition-colors" />
             <Menu className="hover:text-[#0369d1] cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
