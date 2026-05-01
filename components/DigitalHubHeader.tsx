import { Facebook, Twitter, Instagram, Youtube, Search, Menu, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DigitalHubHeader() {
  return (
    <header className="w-full bg-white font-sans sticky top-0 z-50 shadow-sm">
      {/* Top Main Header */}
      <div className="container mx-auto max-w-[1200px] px-4 py-6 flex justify-between items-center h-20">
        
        {/* Social Icons (Left) */}
        <div className="hidden lg:flex items-center gap-4 text-gray-400">
          <Facebook size={18} className="hover:text-[#00d1ac] cursor-pointer transition-colors" />
          <Twitter size={18} className="hover:text-[#00d1ac] cursor-pointer transition-colors" />
          <Instagram size={18} className="hover:text-[#00d1ac] cursor-pointer transition-colors" />
          <Youtube size={18} className="hover:text-[#00d1ac] cursor-pointer transition-colors" />
        </div>

        {/* Logo (Centered) */}
        <Link href="/digital-hub" className="flex items-center gap-1 group">
          <span className="text-[32px] font-black tracking-tight text-[#111]">DIGITAL</span>
          <span className="text-[32px] font-black tracking-tight text-[#00d1ac]">HUB</span>
        </Link>

        {/* Action Icons (Right) */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block bg-[#00d1ac] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-sm hover:bg-[#111] transition-all">
            SUBSCRIBE
          </button>
          <div className="flex items-center gap-4 text-gray-900 border-l border-gray-100 pl-4">
             <Search size={20} className="hover:text-[#00d1ac] cursor-pointer transition-colors" />
             <Menu className="lg:hidden cursor-pointer text-[#111]" size={24} />
          </div>
        </div>
      </div>

      {/* Navigation Bar (Desktop) */}
      <div className="border-t border-gray-50 hidden lg:block">
        <div className="container mx-auto max-w-[1200px] px-4">
          <nav className="flex items-center gap-10 text-[13px] font-bold text-gray-800 uppercase tracking-wider py-4">
            <Link href="#" className="text-[#00d1ac]">Home</Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-[#00d1ac] transition-colors">Technology <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-[#00d1ac] transition-colors">Gadgets <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="hover:text-[#00d1ac] transition-colors">Software</Link>
            <Link href="#" className="flex items-center gap-1 group hover:text-[#00d1ac] transition-colors">Reviews <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link href="#" className="hover:text-[#00d1ac] transition-colors">Gaming</Link>
            <Link href="#" className="hover:text-[#00d1ac] transition-colors">Deals</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
