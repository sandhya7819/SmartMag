import { Facebook, Twitter, Instagram, Youtube, Search, Menu, Moon, ChevronDown, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CoinbaseHeader() {
  return (
    <header className="w-full bg-[#0f172a] text-white font-sans">
      {/* Top Bar */}
      <div className="border-b border-white/10 py-2 hidden lg:block bg-[#0b1120]">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-[12px] font-medium tracking-wide">
          <div className="flex gap-6 opacity-70">
            <Link href="#" className="hover:text-[#ffb300] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#ffb300] transition-colors">Contact</Link>
            <Link href="#" className="hover:text-[#ffb300] transition-colors">Advertise</Link>
            <Link href="#" className="hover:text-[#ffb300] transition-colors">Crypto Prices</Link>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex gap-3 text-white/50 border-r border-white/10 pr-4 mr-1">
                <Facebook size={14} className="hover:text-[#ffb300] cursor-pointer transition-colors" />
                <Twitter size={14} className="hover:text-[#ffb300] cursor-pointer transition-colors" />
                <Instagram size={14} className="hover:text-[#ffb300] cursor-pointer transition-colors" />
                <Youtube size={14} className="hover:text-[#ffb300] cursor-pointer transition-colors" />
             </div>
             <button className="bg-[#ffb300] text-[#0f172a] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-sm hover:bg-white transition-colors">
                Sign In
             </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-6 border-b border-white/5">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <Link href="/coinbase" className="flex items-center gap-1 group">
            <span className="text-3xl font-black tracking-tighter text-white">COIN</span>
            <span className="text-3xl font-black tracking-tighter text-[#ffb300]">BASE</span>
          </Link>
          
          <nav className="hidden lg:flex gap-8 text-[14px] font-bold text-white/90 uppercase tracking-wide">
             <Link href="#" className="text-[#ffb300] transition-colors">Bitcoin</Link>
             <Link href="#" className="hover:text-[#ffb300] transition-colors flex items-center gap-1 group">Ethereum <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#ffb300] transition-colors flex items-center gap-1 group">Altcoins <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#ffb300] transition-colors">Blockchain</Link>
             <Link href="#" className="hover:text-[#ffb300] transition-colors flex items-center gap-1 group">DeFi <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform opacity-50" /></Link>
             <Link href="#" className="hover:text-[#ffb300] transition-colors">Guides</Link>
          </nav>

          <div className="flex items-center gap-5">
            <Moon size={20} className="text-white/70 hover:text-[#ffb300] cursor-pointer transition-colors" />
            <Search size={20} className="text-white/70 hover:text-[#ffb300] cursor-pointer transition-colors" />
            <Menu className="lg:hidden cursor-pointer text-[#ffb300]" size={24} />
          </div>
        </div>
      </div>

      {/* Crypto Price Ticker (Yellow Bar) */}
      <div className="bg-[#ffb300] py-2 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-6">
          <div className="flex items-center gap-2 shrink-0 bg-[#0f172a] px-3 py-1 text-[10px] font-black uppercase tracking-widest">
            <TrendingUp size={12} className="text-[#ffb300]" />
            <span className="text-white">Live Prices</span>
          </div>
          <div className="flex gap-10 whitespace-nowrap animate-marquee">
            {[
              { coin: "BTC", price: "$64,231.50", change: "+2.4%" },
              { coin: "ETH", price: "$3,412.10", change: "+1.8%" },
              { coin: "SOL", price: "$145.20", change: "-0.5%" },
              { coin: "ADA", price: "$0.45", change: "+0.2%" },
              { coin: "XRP", price: "$0.62", change: "+4.1%" },
              { coin: "DOT", price: "$7.20", change: "-1.2%" },
              { coin: "DOGE", price: "$0.16", change: "+12.5%" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#0f172a] font-black text-[13px]">{item.coin}</span>
                <span className="text-[#0f172a] font-bold text-[13px]">{item.price}</span>
                <span className={`text-[11px] font-black ${item.change.startsWith('+') ? 'text-green-700' : 'text-red-700'}`}>{item.change}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { coin: "BTC", price: "$64,231.50", change: "+2.4%" },
              { coin: "ETH", price: "$3,412.10", change: "+1.8%" }
            ].map((item, i) => (
              <div key={i+10} className="flex items-center gap-2 group cursor-pointer lg:flex hidden">
                <span className="text-[#0f172a] font-black text-[13px]">{item.coin}</span>
                <span className="text-[#0f172a] font-bold text-[13px]">{item.price}</span>
                <span className={`text-[11px] font-black ${item.change.startsWith('+') ? 'text-green-700' : 'text-red-700'}`}>{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
