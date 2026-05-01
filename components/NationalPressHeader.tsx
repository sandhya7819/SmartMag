import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown, Bell } from "lucide-react";

export default function NationalPressHeader() {
  return (
    <header className="w-full bg-white font-sans">
      {/* Top Bar - Socials and Links */}
      <div className="bg-[#111] text-white py-1.5 text-[11px] font-black uppercase tracking-widest">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-400 transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">Demos</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link>
            <Link href="#" className="text-red-500">Buy Now!</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Facebook size={14} className="hover:text-blue-400 cursor-pointer" />
            <Twitter size={14} className="hover:text-blue-400 cursor-pointer" />
            <Instagram size={14} className="hover:text-blue-400 cursor-pointer" />
            <div className="w-[1px] h-3 bg-white/20 mx-2"></div>
            <Search size={14} className="hover:text-blue-400 cursor-pointer outline-none" />
          </div>
        </div>
      </div>

      {/* Main Logo Section */}
      <div className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-col items-center relative">
          <Menu size={24} className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400" />
          
          <div className="text-center group cursor-pointer lg:pb-2">
            <div className="text-[10px] text-gray-400 font-bold tracking-[4px] mb-1">FRIDAY, APRIL 17</div>
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-[#1e293b] flex flex-col items-center">
               National Press
            </h1>
            <div className="text-[9px] text-gray-400 font-black tracking-[6px] mt-2 uppercase border-t border-gray-100 pt-2 w-full text-center">Authentic News</div>
          </div>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
             <button className="bg-[#0066cc] text-white text-[11px] font-black uppercase tracking-[3px] px-8 py-3 hover:bg-black transition-all rounded-[1px] shadow-sm">
               SUBSCRIBE
             </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-14">
            <div className="flex gap-10 text-[13px] font-black uppercase tracking-widest text-[#1e293b] h-full items-center">
              <Link href="#" className="text-blue-600 border-b-[3px] border-blue-600 h-full flex items-center">Home</Link>
              <Link href="#" className="hover:text-blue-600 flex items-center gap-1 group">Features <ChevronDown size={14} className="opacity-40" /></Link>
              <Link href="#" className="hover:text-blue-600 flex items-center gap-1 group">Politics <ChevronDown size={14} className="opacity-40" /></Link>
              <Link href="#" className="hover:text-blue-600 h-full flex items-center">Business</Link>
              <Link href="#" className="hover:text-blue-600 h-full flex items-center">World</Link>
              <Link href="#" className="hover:text-blue-600 h-full flex items-center">Economy <ChevronDown size={14} className="opacity-40" /></Link>
              <Link href="#" className="hover:text-blue-600 h-full flex items-center">Buy Theme</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* News Ticker Row - Matching SS2 */}
      <div className="bg-[#fcfcfc] border-b border-gray-100 py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex gap-x-12 animate-scroll-ticker">
            {[
              { title: "Supersonic Planes will Replace Jets Sooner, Says Aviation CEO", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=200" },
              { title: "Chasing History — Laureus World Sportsman of the Year Nominees", img: "https://images.unsplash.com/photo-1461896756913-c23ee572a1bd?q=80&w=200" },
              { title: "People visit City Walk Amid High Ticket Citations", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=200" },
              { title: "A Huge Imbalance of Energy Has Been Detected on Saturn Just Recently", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=200" }
            ].map((ticker, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 group cursor-pointer">
                <img src={ticker.img} className="w-10 h-7 object-cover grayscale group-hover:grayscale-0 transition-all" />
                <span className="text-[11px] font-black leading-tight text-gray-500 hover:text-black transition-colors max-w-[200px] truncate">{ticker.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
