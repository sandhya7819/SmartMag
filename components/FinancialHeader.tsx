import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown } from "lucide-react";

export default function FinancialHeader() {
  return (
    <header className="w-full bg-white font-sans">
      {/* Top Bar - Dark */}
      <div className="bg-[#0f1218] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="flex gap-4">
              <Facebook size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="w-[1px] h-4 bg-white/10 hidden md:block"></div>
          </div>

          <Link href="/financial" className="flex items-center gap-3 group">
            <div className="flex items-center">
               <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45 mr-2"></div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[4px] text-gray-500 uppercase leading-none mb-1">News</span>
                  <span className="text-2xl font-black tracking-tight text-white uppercase leading-none">Financial</span>
               </div>
            </div>
          </Link>

          <button className="border border-white/20 text-white text-[11px] font-black uppercase tracking-[2px] px-6 py-2 hover:bg-white hover:text-black transition-all rounded-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Nav Menu - White */}
      <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-[60px]">
          <div className="flex items-center gap-8">
            <Menu size={20} className="cursor-pointer text-gray-400 lg:hidden" />
            <div className="hidden lg:flex gap-10 text-[13px] font-black uppercase tracking-widest text-[#111]">
              <Link href="#" className="text-green-500">Home</Link>
              <Link href="#" className="hover:text-green-500 transition-colors flex items-center gap-1 group">Features <ChevronDown size={14} className="opacity-40" /></Link>
              <Link href="#" className="hover:text-green-500 transition-colors flex items-center gap-1 group">Funds <ChevronDown size={14} className="opacity-40" /></Link>
              <Link href="#" className="hover:text-green-500 transition-colors">Investments</Link>
              <Link href="#" className="hover:text-green-500 transition-colors flex items-center gap-1 group">Markets <ChevronDown size={14} className="opacity-40" /></Link>
              <Link href="#" className="hover:text-green-500 transition-colors">Buy Theme</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Search size={20} className="text-gray-400 cursor-pointer hover:text-black" />
          </div>
        </div>
      </nav>
    </header>
  );
}
