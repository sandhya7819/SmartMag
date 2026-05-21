import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SmartTimesFooter() {
  return (
    <footer className="bg-[#111] text-white font-sans">
      {/* Top columns */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo + about */}
          <div className="space-y-6">
            <Link href="/smart-times" className="block">
              <h2 className="text-3xl font-serif font-black italic tracking-tight text-white">
                The Smart <span className="text-[#e21c23]">Times</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the latest in world news, politics, sports and more. Our mission is to keep you informed with accurate, timely reporting.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#e21c23] hover:border-transparent transition-all">
                  <Icon size={14} className="text-white/60" />
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[3px] text-white border-b border-white/10 pb-3">Useful Links</h3>
            <div className="space-y-3 text-[13px] font-bold text-gray-400 uppercase tracking-wide">
              {["About Us", "Our Authors", "Advertise", "Contact Us", "Newsletter"].map((l) => (
                <div key={l}><Link href="#" className="hover:text-white transition-colors">{l}</Link></div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[3px] text-white border-b border-white/10 pb-3">Categories</h3>
            <div className="space-y-3 text-[13px] font-bold text-gray-400 uppercase tracking-wide">
              {["Politics", "Money", "Sports", "Opinion", "Europe", "Science"].map((l) => (
                <div key={l}><Link href="#" className="hover:text-[#e21c23] transition-colors">{l}</Link></div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[3px] text-white border-b border-white/10 pb-3">Newsletter</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get the latest news delivered directly to your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#e21c23] transition-all text-white placeholder:text-gray-600"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#e21c23] px-4 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-bold text-gray-500 uppercase tracking-[1.5px]">
          <p>© 2026 ThemeSphere. Designed by ThemeSphere.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
