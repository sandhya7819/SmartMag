import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function CoinbaseFooter() {
  return (
    <footer className="bg-[#0b1120] text-white pt-20 pb-10 font-sans border-t border-white/5 mt-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/coinbase" className="flex items-center gap-1">
              <span className="text-3xl font-black tracking-tighter text-white">COIN</span>
              <span className="text-3xl font-black tracking-tighter text-[#ffb300]">BASE</span>
            </Link>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Leading the way in decentralized finance and blockchain news. Your daily source for real-time market analysis, expert opinions, and crypto insights.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ffb300] hover:text-[#0f172a] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#ffb300]">Categories</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                "Bitcoin News", "Ethereum", "Altcoin Analysis", "DeFi Projects", 
                "Blockchain Tech", "Mining Guides", "Crypto Regulations", "Web3 Future"
              ].map((link, i) => (
                <Link key={i} href="#" className="text-white/60 hover:text-[#ffb300] transition-colors text-[14px] font-medium">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#ffb300]">Newsletter</h4>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Get the most important crypto news delivered to your inbox every morning.
            </p>
            <form className="flex flex-col gap-3 mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ffb300] transition-colors"
              />
              <button className="w-full bg-[#ffb300] text-[#0f172a] font-black uppercase tracking-widest text-[12px] py-3.5 hover:bg-white transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-white/40">
          <p>© {new Date().getFullYear()} Coinbase Magazine. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#ffb300] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#ffb300] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#ffb300] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
