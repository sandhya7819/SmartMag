import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown, Youtube } from "lucide-react";
import Link from "next/link";

export default function NewsOne24Header() {
  return (
    <header className="w-full font-bitter">
      {/* Top Black Bar */}
      <div className="bg-black text-white py-2 hidden lg:block">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[12px] font-bold">
          <div className="flex gap-4 items-center">
            <span className="opacity-60">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <div className="flex gap-4 ml-6">
              <Link href="#" className="hover:text-[#ffe500] transition-colors">Start Here</Link>
              <Link href="#" className="hover:text-[#ffe500] transition-colors">Contact</Link>
              <Link href="#" className="hover:text-[#ffe500] transition-colors">Buy Now</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 opacity-70">
              <Facebook size={14} className="hover:text-[#ffe500] cursor-pointer transition-colors" />
              <Twitter size={14} className="hover:text-[#ffe500] cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-[#ffe500] cursor-pointer transition-colors" />
            </div>
            <Search size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Red Header */}
      <div className="bg-[#b30000] text-white py-6 shadow-md relative z-50">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link href="/news-one24" className="group">
              <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                NewsOne<span className="font-light">24</span>
              </h1>
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-bold uppercase tracking-tight">
              <Link href="#" className="hover:text-[#ffe500] transition-colors">Home</Link>
              <Link href="#" className="flex items-center gap-1 group hover:text-[#ffe500] transition-colors">World <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
              <Link href="#" className="flex items-center gap-1 group hover:text-[#ffe500] transition-colors">Politics <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
              <Link href="#" className="hover:text-[#ffe500] transition-colors">Business</Link>
              <Link href="#" className="flex items-center gap-1 group hover:text-[#ffe500] transition-colors">Lifestyle <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
              <Link href="#" className="hover:text-[#ffe500] transition-colors">Culture</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
             <button className="bg-[#ffe500] text-[#b30000] text-[12px] font-black uppercase tracking-widest px-8 py-3 rounded-sm hover:bg-white hover:text-black transition-all shadow-lg">
                SUBSCRIBE
             </button>
             <Menu className="lg:hidden cursor-pointer" size={28} />
          </div>
        </div>
      </div>
    </header>
  );
}
