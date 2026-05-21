import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu } from "lucide-react";

export default function GadgetsMeHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Left: burger + logo + nav */}
          <div className="flex items-center gap-4">
            <button aria-label="Menu"><Menu size={20} className="text-gray-600 hover:text-black" /></button>
            <Link href="/gadgets-me">
              <img src="https://smartmag.theme-sphere.com/gadgets-me/wp-content/uploads/sites/60/2025/02/LOGO-GadgetsMe-01.png" alt="GadgetsMe" className="h-6 w-auto object-contain" />
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-[12px] font-bold uppercase tracking-wide text-gray-700 ml-4">
              <Link href="/gadgets-me" className="text-[#0066ff] border-b-2 border-[#0066ff] pb-0.5">Home</Link>
              <Link href="#" className="hover:text-[#0066ff] transition-colors">Features</Link>
              <Link href="#" className="hover:text-[#0066ff] transition-colors">Mobile Phones</Link>
              <Link href="#" className="hover:text-[#0066ff] transition-colors">Gaming</Link>
              <Link href="#" className="hover:text-[#0066ff] transition-colors">Gadgets</Link>
              <Link href="#" className="hover:text-[#0066ff] transition-colors">Science</Link>
              <Link href="#" className="hover:text-[#0066ff] transition-colors">Buy Theme</Link>
            </nav>
          </div>
          {/* Right: socials + search + subscribe */}
          <div className="flex items-center gap-3">
            <Link href="#"><Facebook size={14} className="text-gray-500 hover:text-blue-600" /></Link>
            <Link href="#"><Twitter size={14} className="text-gray-500 hover:text-sky-500" /></Link>
            <Link href="#"><Instagram size={14} className="text-gray-500 hover:text-pink-500" /></Link>
            <div className="w-px h-4 bg-gray-200 mx-1" />
            <button><Search size={14} className="text-gray-500 hover:text-black" /></button>
            <a href="http://eepurl.com/hq-3Xb" target="_blank" rel="noopener" className="bg-black text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 hover:bg-[#0066ff] transition-colors ml-2">Subscribe</a>
          </div>
        </div>
      </div>
    </header>
  );
}
