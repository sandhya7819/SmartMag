import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function VoiceDailyFooter() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 font-sans mt-16 border-t border-white/5">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-[24px] font-black italic tracking-tighter text-white">The Voice Daily</h2>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Bringing you the most accurate and up-to-date news from around the world. Trusted by millions for comprehensive coverage and expert analysis.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066cc] transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#0066cc]">Top Categories</h4>
            <ul className="grid grid-cols-1 gap-3">
              {["World News", "Politics", "Technology", "Economy", "Health", "Sports"].map((cat, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors text-[14px] font-medium flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#0066cc] rounded-full"></span>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#0066cc]">Stay Connected</h4>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Sign up for our daily newsletter and never miss a critical update.
            </p>
            <form className="flex flex-col gap-3 mt-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0066cc] transition-colors"
              />
              <button className="w-full bg-[#0066cc] text-white font-black uppercase tracking-widest text-[11px] py-3.5 hover:bg-blue-700 transition-colors">
                SIGN UP NOW
              </button>
            </form>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-white/30">
          <p>© {new Date().getFullYear()} The Voice Daily. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
