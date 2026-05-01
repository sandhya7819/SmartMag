import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function TribunePostFooter() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 font-sans mt-16 border-t-[4px] border-[#0369d1]">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0369d1] rounded-full flex items-center justify-center text-white italic font-black text-xl">T</div>
              <h2 className="text-[24px] font-black tracking-tight text-white uppercase">Tribune Post</h2>
            </div>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Delivering independent and authoritative news coverage for a global audience. Our mission is to provide clear, unbiased journalism on the issues that matter most.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#0369d1] transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#0369d1] mb-2">Editorial Sections</h4>
            <ul className="grid grid-cols-2 gap-y-3">
              {["World Politics", "Economic Insight", "Technology", "Health & Wellness", "Sports Hub", "Opinion", "Lifestyle", "Culture"].map((cat, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors text-[14px] font-medium">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#0369d1] mb-2">The Morning Brief</h4>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Join 120,000+ subscribers and get the most important stories delivered to your inbox every day.
            </p>
            <form className="flex flex-col gap-3 mt-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0369d1] transition-colors"
              />
              <button className="w-full bg-[#0369d1] text-white font-black uppercase tracking-widest text-[11px] py-4 hover:bg-blue-700 transition-colors">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-white/30">
          <p>© {new Date().getFullYear()} Tribune Post Media Group. All rights reserved.</p>
          <div className="flex gap-8 text-[12px] uppercase font-bold tracking-wider">
            <Link href="#" className="hover:text-white transition-colors">Archives</Link>
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
