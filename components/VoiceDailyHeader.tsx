import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown, Youtube } from "lucide-react";
import Link from "next/link";

export default function VoiceDailyHeader() {
  return (
    <header className="w-full font-sans">
      {/* Top Main Blue Bar */}
      <div className="bg-[#0066cc] text-white py-4 shadow-md">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/the-voice-daily" className="flex items-center gap-2 group">
            <h1 className="text-[28px] font-black tracking-tighter italic">The Voice Daily</h1>
          </Link>

          {/* Navigation links (main) */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-bold uppercase tracking-wider">
            <Link href="#" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-blue-200 transition-colors">Features <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-blue-200 transition-colors">Politics <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">Technology</Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-blue-200 transition-colors">Sports <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">Health</Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">Buy Theme</Link>
          </nav>

          {/* Socials & Subscribe */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-3 border-r border-white/20 pr-5">
              <Facebook size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
              <Twitter size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
              <Instagram size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-black uppercase tracking-widest px-6 py-2 border border-white/30 rounded-sm transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Bar with Trending Topics */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center h-10">
          <div className="flex items-center gap-6">
            <Menu className="cursor-pointer text-gray-700 hover:text-[#0066cc]" size={20} />
            <div className="flex items-center gap-4 text-[13px]">
              <span className="font-black text-[#0066cc] uppercase tracking-wider">Trending Topics:</span>
              <div className="flex gap-4 font-bold text-gray-600">
                <Link href="#" className="hover:text-[#0066cc]">Ukraine Conflict</Link>
                <Link href="#" className="hover:text-[#0066cc]">US Elections</Link>
                <Link href="#" className="hover:text-[#0066cc]">Investments</Link>
                <Link href="#" className="hover:text-[#0066cc]">Middle East</Link>
              </div>
            </div>
          </div>
          <Search size={18} className="text-gray-500 hover:text-[#0066cc] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
