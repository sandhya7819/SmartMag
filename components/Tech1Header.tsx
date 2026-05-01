import { Search, Moon, Menu, Facebook, Twitter, Instagram, Youtube, Phone } from "lucide-react";
import Link from "next/link";

export default function Tech1Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#111] text-white py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-[#ff4e50] transition-colors">Demos</Link>
            <Link href="#" className="hover:text-[#ff4e50] transition-colors">Gadgets</Link>
            <Link href="#" className="hover:text-[#ff4e50] transition-colors">Buy Theme</Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 pr-5 border-r border-white/10 hidden sm:flex">
              <Link href="#"><Facebook size={12} /></Link>
              <Link href="#"><Twitter size={12} /></Link>
              <Link href="#"><Instagram size={12} /></Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-[#ff4e50] transition-colors"><Moon size={14} /></button>
              <button className="hover:text-[#ff4e50] transition-colors"><Search size={14} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Section */}
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer group">
              <span className="w-6 h-[2px] bg-black group-hover:bg-[#ff4e50] transition-colors"></span>
              <span className="w-6 h-[2px] bg-black group-hover:bg-[#ff4e50] transition-colors"></span>
              <span className="w-6 h-[2px] bg-black group-hover:bg-[#ff4e50] transition-colors"></span>
            </div>
          </div>
          
          <Link href="/tech-1" className="flex items-center">
             <img 
               src="https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/iGadgets-logo-01.png" 
               alt="SmartMag Tech 1" 
               className="h-10 md:h-14 w-auto"
             />
          </Link>

          <div className="flex items-center">
            <button className="px-6 py-2.5 bg-gray-50 border border-gray-200 text-[11px] font-black uppercase tracking-widest hover:bg-[#d40713] hover:border-[#d40713] hover:text-white transition-all rounded-[3px]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu (Sticky) */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center gap-x-12 py-5 text-[13px] font-black uppercase tracking-widest text-black">
            <li><Link href="/tech-1" className="text-[#d40713]">Home</Link></li>
            <li className="group relative">
               <Link href="#" className="hover:text-[#d40713] transition-colors flex items-center gap-1">Features <span className="bg-[#d40713] text-[8px] text-white px-1 ml-1 rounded-[2px] leading-tight">HOT</span></Link>
            </li>
            <li><Link href="#" className="hover:text-[#d40713] transition-colors">Mobiles</Link></li>
            <li><Link href="#" className="hover:text-[#d40713] transition-colors">Top Apps</Link></li>
            <li><Link href="#" className="hover:text-[#d40713] transition-colors">Hot Tech</Link></li>
            <li><Link href="#" className="hover:text-[#d40713] transition-colors font-bold text-[#d40713]">Gadgets</Link></li>
            <li><Link href="#" className="hover:text-[#d40713] transition-colors">Buy Theme</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
