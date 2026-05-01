import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function NewsOne24Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 font-bitter mt-16 border-t-[4px] border-[#b30000]">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-[28px] font-black italic tracking-tighter text-white uppercase">
              NewsOne<span className="font-light text-[#b30000]">24</span>
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Your comprehensive source for the latest world news, politics, and culture. We bring you the stories that matter, 24 hours a day.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#b30000] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#b30000] border-b border-white/10 pb-2">Quick Sections</h4>
            <ul className="grid grid-cols-2 gap-y-3">
              {["World", "US News", "Politics", "Business", "Tech", "Lifestyle", "Culture", "Sports"].map((cat, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/50 hover:text-[#ffe500] transition-colors text-[14px] font-bold">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#b30000] border-b border-white/10 pb-2">Newsletter</h4>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Stay ahead with our daily morning briefing delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3 mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ffe500] transition-colors"
              />
              <button className="w-full bg-[#b30000] text-white font-black uppercase tracking-widest text-[12px] py-4 hover:bg-[#ffe500] hover:text-black transition-colors">
                JOIN THE LIST
              </button>
            </form>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-bold text-white/40">
          <p>© {new Date().getFullYear()} NewsOne24. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
