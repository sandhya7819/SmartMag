import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function NewsVerifiedFooter() {
  return (
    <footer className="bg-[#0f0f11] text-white pt-16 pb-8 font-sans mt-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Top Widget Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Most Popular */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider relative inline-block">
              Most Popular
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#e91e63]"></span>
            </h4>
            <div className="space-y-5 pt-4">
              {[
                { title: "Global Climate Summit Reaches New Historic Agreement", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=200&auto=format&fit=crop" },
                { title: "Tech Giants Announce Unified Privacy Standards", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop" },
                { title: "Breakthrough in Renewable Energy Storage Solutions", img: "https://images.unsplash.com/photo-1509391366360-1f9509e088eb?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 shrink-0 overflow-hidden bg-gray-800">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={post.title} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[14px] font-semibold leading-snug group-hover:text-[#e91e63] transition-colors line-clamp-2">{post.title}</h5>
                    <div className="text-[11px] text-gray-500 uppercase">Oct 12, 2023</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Picks */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider relative inline-block">
              Our Picks
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#e91e63]"></span>
            </h4>
            <div className="space-y-5 pt-4">
              {[
                { title: "The Future of Artificial Intelligence in Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=200&auto=format&fit=crop" },
                { title: "Exploring the Deep Ocean: New Discoveries Made", img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=200&auto=format&fit=crop" },
                { title: "A Guide to Sustainable Living in Modern Cities", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 shrink-0 overflow-hidden bg-gray-800">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={post.title} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[14px] font-semibold leading-snug group-hover:text-[#e91e63] transition-colors line-clamp-2">{post.title}</h5>
                    <div className="text-[11px] text-gray-500 uppercase">Oct 10, 2023</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider relative inline-block">
              Subscribe to Updates
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#e91e63]"></span>
            </h4>
            <div className="pt-4 space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                Get the latest news and updates delivered straight to your inbox. No spam, we promise.
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-[#1a1a1d] text-white px-4 py-3 text-sm border border-white/10 focus:outline-none focus:border-[#e91e63] transition-colors"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#e91e63] text-white font-bold uppercase tracking-wider text-sm py-3 rounded-md hover:bg-pink-700 transition-colors"
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
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e91e63] transition-colors group">
                <Icon size={16} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="flex gap-6 text-[13px] text-gray-400 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Politics</Link>
            <Link href="#" className="hover:text-white transition-colors">Business</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <p className="text-[12px] text-gray-500">
            © {new Date().getFullYear()} NewsVerified. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
