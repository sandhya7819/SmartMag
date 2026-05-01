import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TechBlogFooter() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 font-inter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="space-y-8">
             <Link href="/tech-blog" className="flex items-center font-outfit">
               <span className="text-3xl font-black tracking-tighter text-white uppercase">TECH<span className="text-[#ab07ab]">B</span>LOG</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the latest in everything tech from across the world. Our mission is to keep you updated with the latest trends and breakthroughs.
            </p>
            <div className="flex gap-4">
               {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                 <Link key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ab07ab] hover:border-transparent transition-all group">
                   <Icon size={14} className="text-white opacity-60 group-hover:opacity-100" />
                 </Link>
               ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-8">
             <h3 className="text-sm font-bold uppercase tracking-widest text-white">Useful Links</h3>
             <div className="grid grid-cols-1 gap-3 text-sm text-gray-400 uppercase font-bold tracking-tight">
               <Link href="#" className="hover:text-white transition-colors">About Us</Link>
               <Link href="#" className="hover:text-white transition-colors">Our Authors</Link>
               <Link href="#" className="hover:text-white transition-colors">Advertise</Link>
               <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
               <Link href="#" className="hover:text-white transition-colors">Subscription</Link>
             </div>
          </div>

          {/* Categories */}
          <div className="space-y-8">
             <h3 className="text-sm font-bold uppercase tracking-widest text-white">Categories</h3>
             <div className="grid grid-cols-1 gap-3 text-sm text-gray-400 uppercase font-bold tracking-tight">
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Gadgets</Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Mobile Tech</Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Computing</Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Internet</Link>
               <Link href="#" className="hover:text-[#ab07ab] transition-colors">Software</Link>
             </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
             <h3 className="text-sm font-bold uppercase tracking-widest text-white">Newsletter</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Join our community and get latest updates directly in your inbox.
             </p>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-sm focus:outline-none focus:border-[#ab07ab] transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#ab07ab] px-3 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <ArrowRight size={18} />
                </button>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-[2px]">
           <p>© 2021 ThemeSphere. All Rights Reserved.</p>
           <div className="flex gap-8">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms & Conditions</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
