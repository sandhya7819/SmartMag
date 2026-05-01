import CoinbaseHeader from "@/components/CoinbaseHeader";
import CoinbaseFooter from "@/components/CoinbaseFooter";
import Link from "next/link";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, ExternalLink, ArrowRight } from "lucide-react";

export default function CoinbasePage() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white font-sans selection:bg-[#ffb300] selection:text-[#0f172a]">
      <CoinbaseHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-12">
        
        {/* 1. Hero Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Main Hero (2/3) */}
          <div className="lg:col-span-2 group cursor-pointer relative overflow-hidden bg-gray-900 aspect-[16/10] rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
              alt="Bitcoin Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="bg-[#ffb300] text-[#0f172a] text-[10px] font-black uppercase tracking-widest px-2 py-1 inline-block mb-4">
                Bitcoin Focus
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 group-hover:text-[#ffb300] transition-colors">
                Bitcoin Surges Past $65,000 as Institutional Interest Reaches All-Time High
              </h1>
              <div className="flex items-center gap-4 text-[12px] font-bold text-white/60 uppercase tracking-widest">
                <span>By Alex Crypto</span>
                <span>•</span>
                <span>Oct 15, 2023</span>
              </div>
            </div>
          </div>

          {/* Side Hero Stack */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {[
              { title: "Ethereum Foundation Announces Major Network Upgrade", cat: "ETH", img: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?q=80&w=600&auto=format&fit=crop" },
              { title: "New DeFi Protocols to Watch This Quarter", cat: "DeFi", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop" },
              { title: "Regulatory Clarity Coming to Crypto Markets", cat: "Laws", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="flex-1 group cursor-pointer relative overflow-hidden bg-gray-900 rounded-sm">
                <img src={post.img} className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="text-[#ffb300] text-[9px] font-black uppercase tracking-widest mb-1">{post.cat}</div>
                  <h3 className="text-[15px] font-bold leading-snug group-hover:text-[#ffb300] transition-colors">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* The Latest List */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#ffb300]">The Latest</h3>
                <div className="flex-1 h-[1px] bg-white/5"></div>
              </div>
              <div className="space-y-10">
                {[
                  { title: "Why Solana is Outperforming Major L1s This Week", cat: "Altcoins", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop" },
                  { title: "NFT Market Resurgence: The Return of Digital Art", cat: "NFTs", img: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=800&auto=format&fit=crop" },
                  { title: "The Role of Web3 in Modern Gaming Communities", cat: "Web3", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop" },
                  { title: "Central Bank Digital Currencies: Pros and Cons", cat: "Economy", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop" },
                  { title: "Hardware Wallets: Protecting Your Digital Assets", cat: "Security", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                    <div className="md:w-[280px] aspect-video shrink-0 overflow-hidden rounded-sm relative">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                      <div className="absolute top-2 left-2 bg-[#ffb300] text-[#0f172a] text-[9px] font-black uppercase tracking-widest px-2 py-0.5">
                        {post.cat}
                      </div>
                    </div>
                    <div className="space-y-3 py-1">
                      <h4 className="text-[22px] font-black leading-tight group-hover:text-[#ffb300] transition-colors">{post.title}</h4>
                      <p className="text-white/50 text-[14px] leading-relaxed line-clamp-2">
                        Investors are closely watching the latest developments in the crypto space as new technologies and regulations reshape the landscape...
                      </p>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                        <span>OCT 14, 2023</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>5 MIN READ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Section (Full Width Style) */}
            <section className="bg-[#0f172a] p-12 -mx-4 md:-mx-12 border border-white/5 relative group cursor-pointer rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#ffb300] rounded-full flex items-center justify-center text-[#0f172a] mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
                <div className="text-[#ffb300] text-[12px] font-black uppercase tracking-widest mb-3">Crypto Spotlight</div>
                <h3 className="text-3xl font-black mb-4">How Decentralized Exchanges Are Changing The World</h3>
                <p className="text-white/60 max-w-xl mx-auto text-[15px] leading-relaxed">
                  Join us as we explore the inner workings of the most successful DEXs and how they are providing financial freedom to millions.
                </p>
              </div>
            </section>

            {/* 3. DeFi & Yield Farming */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#ffb300]">DeFi & Yield</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-sm bg-gray-900 border border-white/5">
                    <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                  </div>
                  <h4 className="text-2xl font-black group-hover:text-[#ffb300] transition-colors leading-tight">Mastering Yield Farming: Strategies for 2024</h4>
                  <p className="text-white/50 text-sm leading-relaxed">As the DeFi landscape matures, new opportunities for high-yield farming are emerging across multiple chains...</p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Top 5 Decentralized Lending Protocols Compared", cat: "Lending" },
                    { title: "The Rise of Liquid Staking: Risks and Rewards", cat: "Staking" },
                    { title: "Cross-Chain Bridges: How to Move Assets Safely", cat: "Bridges" },
                    { title: "Governance Tokens: Does Voting Power Matter?", cat: "DAO" }
                  ].map((item, i) => (
                    <div key={i} className="group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="text-[9px] font-black text-[#ffb300] uppercase tracking-widest mb-1">{item.cat}</div>
                      <h5 className="text-[16px] font-bold group-hover:text-[#ffb300] transition-colors leading-snug">{item.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. NFT & Digital Collectibles */}
            <section className="bg-[#1e293b] p-10 rounded-sm space-y-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#ffb300]">NFT Hub</h3>
                <Link href="#" className="text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">Explore Gallery</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "The Next Generation of Generative Art on the Blockchain", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop" },
                  { title: "Phygital NFTs: Bridging the Gap Between Physical and Digital", img: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=400&auto=format&fit=crop" },
                  { title: "Gaming NFTs: The Future of In-Game Asset Ownership", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="space-y-4 group cursor-pointer">
                    <div className="aspect-square overflow-hidden rounded-sm bg-black border border-white/5">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-[15px] font-bold group-hover:text-[#ffb300] transition-colors leading-tight">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Crypto Learning Center */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#ffb300]">Learning Center</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Crypto 101: A Beginner's Guide to Digital Assets", img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop" },
                  { title: "Understanding Smart Contracts: The Code That Powers DeFi", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop" },
                  { title: "Security Best Practices: How to Never Get Hacked", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop" },
                  { title: "Tax Implications of Crypto Trading: What You Need to Know", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center bg-white/5 p-4 rounded-sm border border-transparent hover:border-[#ffb300]/20 transition-all">
                    <div className="w-[100px] h-[75px] shrink-0 overflow-hidden rounded-sm">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-[14px] font-bold group-hover:text-[#ffb300] transition-colors leading-tight">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Regulation & Policy */}
            <section className="space-y-8 pt-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#ffb300]">Regulation & Policy</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: "EU's MiCA Framework: A Blueprint for Global Crypto Regulation?", date: "Oct 12, 2023" },
                  { title: "US Congress Debates New Stablecoin Legislation", date: "Oct 11, 2023" },
                  { title: "The Impact of CBDCs on Traditional Banking Systems", date: "Oct 10, 2023" },
                  { title: "Global Tax Standards for Digital Assets: What's Changing?", date: "Oct 09, 2023" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer flex justify-between items-center border-b border-white/5 pb-4">
                    <h4 className="text-[16px] font-bold group-hover:text-[#ffb300] transition-colors leading-tight">{post.title}</h4>
                    <span className="text-[10px] text-white/30 font-bold uppercase shrink-0 ml-4">{post.date}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            
            {/* Trending Coins Sidebar */}
            <div className="bg-[#0f172a] border border-white/5 p-8 rounded-sm">
              <h3 className="text-[14px] font-black uppercase tracking-widest text-[#ffb300] mb-8 flex items-center gap-2">
                <TrendingUp size={18} /> Trending Coins
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Bitcoin", symbol: "BTC", price: "$64,231.50", change: "+2.4%", img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=100&auto=format&fit=crop" },
                  { name: "Ethereum", symbol: "ETH", price: "$3,412.10", change: "+1.8%", img: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?q=80&w=100&auto=format&fit=crop" },
                  { name: "Solana", symbol: "SOL", price: "$145.20", change: "-0.5%", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=100&auto=format&fit=crop" },
                  { name: "Cardano", symbol: "ADA", price: "$0.45", change: "+0.2%", img: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?q=80&w=100&auto=format&fit=crop" }
                ].map((coin, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 overflow-hidden border border-white/10 group-hover:border-[#ffb300] transition-colors">
                        <img src={coin.img} className="w-full h-full object-cover" alt={coin.name} />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold">{coin.name}</div>
                        <div className="text-[10px] text-white/40 font-bold uppercase">{coin.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[14px] font-bold">{coin.price}</div>
                      <div className={`text-[11px] font-black ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {coin.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-widest hover:bg-[#ffb300] hover:text-[#0f172a] transition-all">
                View All Markets
              </button>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-[#ffb300] p-8 text-[#0f172a] rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={40} className="mb-4 opacity-40" />
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Crypto Alert</h3>
              <p className="text-[#0f172a]/70 text-[14px] font-bold mb-6 leading-snug">Get the biggest crypto moves delivered to your inbox instantly.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/40 border border-[#0f172a]/10 px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#0f172a]/40 focus:outline-none focus:bg-white transition-all" />
                <button className="w-full bg-[#0f172a] text-[#ffb300] font-black uppercase tracking-widest text-[11px] py-3.5 hover:bg-white hover:text-black transition-colors shadow-lg">Join Pro List</button>
              </form>
            </div>

            {/* Top Stories Small */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-[#ffb300] inline-block pb-1">Top Stories</h3>
              <div className="space-y-6">
                {[
                  { title: "Mining Profitability Reaches New Milestone This Month", time: "2 Hours Ago" },
                  { title: "The Best Hardware Wallets for Secure Storage", time: "4 Hours Ago" },
                  { title: "Why Institutional Investors are Moving to Ethereum", time: "6 Hours Ago" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-2xl font-black text-white/10 group-hover:text-[#ffb300] transition-colors leading-none pt-1">0{i+1}</span>
                    <div>
                      <h4 className="text-[15px] font-bold leading-snug group-hover:text-[#ffb300] transition-colors">{post.title}</h4>
                      <span className="text-[10px] text-white/30 font-bold uppercase mt-2 block">{post.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* Economy Insights Grid */}
        <section className="mt-20 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#ffb300]">Market Analysis</h3>
            <Link href="#" className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest hover:text-[#ffb300] transition-colors group">
              Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technical Analysis: BTC Consolidates", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop" },
              { title: "Whale Movements Indicate Bullish Trend", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&auto=format&fit=crop" },
              { title: "Exchange Reserves Hit 3-Year Low", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=400&auto=format&fit=crop" },
              { title: "The Impact of US Spot Bitcoin ETFs", img: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?q=80&w=400&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="aspect-[4/3] overflow-hidden bg-gray-900 rounded-sm">
                  <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80" alt={post.title} />
                </div>
                <h4 className="text-[16px] font-bold leading-tight group-hover:text-[#ffb300] transition-colors">{post.title}</h4>
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Oct 12, 2023</div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <CoinbaseFooter />
    </main>
  );
}
