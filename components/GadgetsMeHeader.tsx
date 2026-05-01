import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown } from "lucide-react";

export default function GadgetsMeHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      <div className="container mx-auto px-4 h-[72px] flex justify-between items-center">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-6">
          <Menu size={24} className="cursor-pointer text-gray-800" />
          <Link href="/gadgets-me" className="flex items-center gap-1 group">
            <h1 className="text-2xl font-black italic tracking-tighter text-black uppercase">
               GADGETS<span className="text-[#e21b7a]">ME</span>
            </h1>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-[13px] font-black uppercase tracking-widest text-black/80 h-full items-center">
          <Link href="#" className="text-[#e21b7a]">Home</Link>
          <Link href="#" className="hover:text-[#e21b7a] transition-colors flex items-center gap-1 group">Features <ChevronDown size={14} className="opacity-40" /></Link>
          <Link href="#" className="hover:text-[#e21b7a] transition-colors flex items-center gap-1 group">Mobile Phones <ChevronDown size={14} className="opacity-40" /></Link>
          <Link href="#" className="hover:text-[#e21b7a] transition-colors flex items-center gap-1 group">Gaming <ChevronDown size={14} className="opacity-40" /></Link>
          <Link href="#" className="hover:text-[#e21b7a] transition-colors">Gadgets</Link>
          <Link href="#" className="hover:text-[#e21b7a] transition-colors">Science</Link>
          <Link href="#" className="hover:text-[#e21b7a] transition-colors">Buy Theme</Link>
        </nav>

        {/* Right: Social, Search, Subscribe */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 items-center">
            <Facebook size={16} className="text-black/60 hover:text-[#e21b7a] cursor-pointer transition-colors" />
            <Twitter size={16} className="text-black/60 hover:text-[#e21b7a] cursor-pointer transition-colors" />
            <Instagram size={16} className="text-black/60 hover:text-[#e21b7a] cursor-pointer transition-colors" />
            <Search size={20} className="text-black/60 hover:text-[#e21b7a] cursor-pointer transition-colors ml-2" />
          </div>
          <button className="bg-[#e21b7a] text-white text-[11px] font-black uppercase tracking-[2px] px-6 py-2.5 hover:bg-black transition-all rounded-sm shadow-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </header>
  );
}
