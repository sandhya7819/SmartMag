import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function PoliticalFooter() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 font-serif mt-16 border-t-[4px] border-[#e01111]">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Widget Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* About Column */}
          <div className="space-y-6">
            <Link href="/political" className="inline-block">
              <h2 className="text-3xl font-black tracking-tight text-white uppercase">
                POLITICAL
              </h2>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed pr-6">
              Political is a modern magazine dedicated to offering the most comprehensive news on politics, world economy, and current affairs globally.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#e01111] transition-colors rounded-full">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#e01111] transition-colors rounded-full">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#e01111] transition-colors rounded-full">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-white border-l-2 border-[#e01111] pl-3">
              Latest News
            </h4>
            <div className="space-y-6 pt-2">
              {[
                { title: "Senate Passes Historic Infrastructure Bill Amidst Debates", img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=200&auto=format&fit=crop" },
                { title: "Economic Policy Shifts Impact Global Trade Markets", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=200&auto=format&fit=crop" },
                { title: "New Measures Introduced to Combat Climate Change", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-[70px] h-[70px] shrink-0 overflow-hidden bg-gray-800">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[14px] font-bold leading-tight group-hover:text-[#e01111] transition-colors text-gray-200">{post.title}</h5>
                    <div className="text-[11px] text-gray-500 font-sans uppercase tracking-wider mt-1">Oct 15, 2023</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-white border-l-2 border-[#e01111] pl-3">
              Newsletter
            </h4>
            <div className="pt-2 space-y-4">
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Subscribe to our newsletter to receive the most important political updates directly in your inbox.
              </p>
              <form className="flex flex-col gap-3 font-sans mt-4">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-[#1a1a1d] text-white px-4 py-3 text-sm border border-white/10 focus:outline-none focus:border-[#e01111] transition-colors"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#e01111] text-white font-bold uppercase tracking-widest text-[12px] py-3.5 hover:bg-white hover:text-[#111] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-sans font-medium text-gray-500">
          <p>
            © {new Date().getFullYear()} Political Magazine Theme. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
