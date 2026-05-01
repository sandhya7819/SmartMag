import { Facebook, Twitter, Instagram, Youtube, Search, Moon, Menu, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function TechBlogHeader() {
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 hidden lg:block border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest opacity-80">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#ab07ab] transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-[#ab07ab] transition-colors">Demos</Link>
            <Link href="#" className="hover:text-[#ab07ab] transition-colors">Contact</Link>
            <Link href="#" className="hover:text-[#ab07ab] transition-colors">Buy Now</Link>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex gap-4">
                <Facebook size={12} className="hover:text-[#ab07ab] cursor-pointer" />
                <Twitter size={12} className="hover:text-[#ab07ab] cursor-pointer text-white/50" />
                <Instagram size={12} className="hover:text-[#ab07ab] cursor-pointer text-white/50" />
                                <svg size={12} className="w-3 h-3 hover:text-[#ab07ab] cursor-pointer text-white/50" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.771-2.249 3.771-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.164 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
                <Youtube size={12} className="hover:text-[#ab07ab] cursor-pointer text-white/50" />
             </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Menu className="lg:hidden cursor-pointer" />
            <Link href="/tech-blog" className="flex items-center gap-3 font-outfit">
               <div className="w-10 h-10 bg-[#ab07ab] rounded-full flex items-center justify-center text-white font-black text-xl">T</div>
               <span className="text-[26px] font-black tracking-tight text-black uppercase">TECH<span className="font-light">BLOG</span></span>
            </Link>
            
            <nav className="hidden lg:flex gap-7 ml-8 text-[14px] font-black text-[#111]">
               <Link href="#" className="hover:text-[#ab07ab] transition-colors border-b-2 border-[#ab07ab] pb-1">Home</Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors flex items-center gap-1 group">Features <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors flex items-center gap-1 group">Technology <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Gadgets</Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors flex items-center gap-1 group">Phones <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" /></Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Buy Theme</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-[#3c3fde] text-white text-[11px] font-black uppercase tracking-[2px] px-6 py-2.5 rounded hover:bg-[#ab07ab] transition-all">
               SUBSCRIBE
            </button>
            <div className="flex items-center gap-4 text-gray-900 border-l border-gray-100 pl-4">
               <Moon size={18} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
               <Search size={18} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
