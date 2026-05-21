import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu } from "lucide-react";

export default function FinancialHeader() {
  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Row 1: Dark – Socials | Logo | Subscribe */}
      <div className="bg-[#181818] text-white py-3 border-b border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook"><Facebook size={14} className="text-gray-400 hover:text-white transition-colors" /></a>
            <a href="#" aria-label="Twitter"><Twitter size={14} className="text-gray-400 hover:text-white transition-colors" /></a>
            <a href="#" aria-label="Instagram"><Instagram size={14} className="text-gray-400 hover:text-white transition-colors" /></a>
          </div>
          <Link href="/financial" className="flex items-center gap-2">
            <img
              src="https://smartmag.theme-sphere.com/financial/wp-content/uploads/sites/16/2021/06/FINANCIAL-LOGO.png"
              alt="Financial"
              className="h-9 object-contain"
            />
          </Link>
          <a
            href="http://eepurl.com/hq-3Xb"
            target="_blank"
            rel="noopener"
            className="border border-gray-500 text-white text-[11px] font-bold uppercase tracking-widest px-5 py-1.5 hover:bg-white hover:text-black transition-colors"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Row 2: White – Hamburger | Centered Nav | Search */}
      <div className="bg-white border-b border-gray-200 py-2.5">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center">
          {/* Hamburger */}
          <button aria-label="Menu" className="mr-auto">
            <Menu size={18} className="text-gray-600" />
          </button>
          {/* Centered nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold uppercase tracking-wide">
            <Link href="/financial" className="text-[#c49a1a] border-b-2 border-[#c49a1a] pb-0.5">Home</Link>
            <Link href="#" className="text-gray-700 hover:text-[#1a6aa8] transition-colors">Features</Link>
            <Link href="#" className="text-gray-700 hover:text-[#1a6aa8] transition-colors">Funds</Link>
            <Link href="#" className="text-gray-700 hover:text-[#1a6aa8] transition-colors">Investments</Link>
            <Link href="#" className="text-gray-700 hover:text-[#1a6aa8] transition-colors">Markets</Link>
            <Link href="#" className="text-gray-700 hover:text-[#1a6aa8] transition-colors">Buy Theme</Link>
          </nav>
          {/* Search */}
          <button className="ml-auto" aria-label="Search">
            <Search size={15} className="text-gray-500 hover:text-black transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
