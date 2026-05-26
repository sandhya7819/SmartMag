"use client";

import CoinbaseHeader from "@/components/CoinbaseHeader";
import Link from "next/link";

const B19 = "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/";
const ACCENT = "#3b82f6";

function SHead({ title, style = "b" }: { title: string; style?: "b" | "c" }) {
  return (
    <div className="mb-6">
      <div className="border-b border-white/10 pb-3 relative">
        <span 
          className="inline-block font-extrabold text-[12.5px] uppercase tracking-wider text-white border-b-[2.5px] pb-3.5 -mb-[13.5px] font-sans"
          style={{ borderColor: ACCENT }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

const ARTICLES = {
  hero1: { img: `${B19}2021/03/Depositphotos_328674290_xl-2015-1-450x300.jpg`, t: "Bitcoin Climbs as Elon Musk Says Tesla 'Likely' to Accept it Again", cat: "Bitcoin", d: "Mar 16, 2021" },
  hero2: { img: `${B19}2021/03/Depositphotos_471848636_xl-2015-1-450x253.jpg`, t: "XRP Price Chart 'Double Bottom' Puts Next Bullish Target at $1", cat: "XRP", d: "Mar 16, 2021" },
  hero3: { img: `${B19}2021/02/Depositphotos_50133523_xl-2015-1-450x277.jpg`, t: "Fidelity Buys 7.4% Of Bitcoin Mining Company Marathon Digital Holdings", cat: "Bitcoin", d: "Feb 11, 2021" },
};

export default function CoinbasePage() {
  return (
    <main className="min-h-screen bg-[#111625] text-gray-100 antialiased selection:bg-[#3b82f6] selection:text-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <CoinbaseHeader />

      <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-12">

        {/* ── HERO GRID SECTION (1 Large Left + 2 Stacked Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
          {/* Large Left Story (8 Cols) */}
          <article className="lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-sm shadow-lg bg-black aspect-[16/10] lg:h-[460px]">
            <img 
              src={ARTICLES.hero1.img}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102 group-hover:opacity-85" 
              alt="Bitcoin Musk" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/95 via-[#0b0e17]/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span 
                className="inline-block text-[9.5px] font-black uppercase tracking-widest text-white px-2.5 py-0.5 mb-3 font-sans rounded-sm"
                style={{ backgroundColor: ACCENT }}
              >
                Bitcoin
              </span>
              <Link href="/coinbase">
                <h1 className="text-white font-black text-[24px] md:text-[32px] leading-tight hover:text-[#3b82f6] transition-colors duration-200">
                  {ARTICLES.hero1.t}
                </h1>
              </Link>
              <div className="flex items-center gap-3 text-gray-300 text-[10.5px] mt-3.5 font-sans font-bold uppercase tracking-wider">
                <span>By John Doe</span>
                <span>·</span>
                <span>Mar 16, 2021</span>
              </div>
            </div>
          </article>

          {/* Stacked Right Stories (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {[ARTICLES.hero2, ARTICLES.hero3].map((a, i) => (
              <article key={i} className="relative group cursor-pointer overflow-hidden rounded-sm shadow-md bg-black flex-1 min-h-[220px]">
                <img 
                  src={a.img} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 group-hover:opacity-80" 
                  alt="" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/90 via-[#0b0e17]/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest mb-1.5 font-sans" style={{ color: ACCENT }}>
                    {a.cat}
                  </span>
                  <Link href="/coinbase">
                    <h2 className="text-white font-bold text-[14.5px] leading-snug line-clamp-3 hover:text-[#3b82f6] transition-colors duration-200">
                      {a.t}
                    </h2>
                  </Link>
                  <p className="text-gray-400 text-[10.5px] mt-1 font-sans">{a.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── BUSINESS ARTICLES & SIDEBAR (2/3 vs 1/3) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 border-t border-white/5 pt-8">
          {/* Main Feed Column */}
          <div className="lg:col-span-2">
            <SHead title="Business" />

            {/* Main Business Story */}
            <article className="flex flex-col md:flex-row gap-6 pb-6 mb-6 border-b border-white/5 cursor-pointer group">
              <div className="w-full md:w-[300px] h-[200px] flex-shrink-0 overflow-hidden bg-gray-900 relative rounded-sm shadow-sm">
                <img 
                  src={`${B19}2021/02/Depositphotos_56545139_xl-2015-1-450x332.jpg`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-hover:opacity-90" 
                  alt="" 
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[9.5px] font-black uppercase tracking-widest font-sans" style={{ color: ACCENT }}>
                  Technology
                </span>
                <Link href="/coinbase">
                  <h2 className="font-bold text-[18px] md:text-[20px] leading-snug text-white hover:text-[#3b82f6] transition-colors duration-200 mt-1 mb-2">
                    Can Cryptocurrency Be Hacked, Stolen Or Scammed? How Can You Be Safe?
                  </h2>
                </Link>
                <div className="text-[10.5px] text-gray-400 mb-2 font-sans">By John Doe · Feb 11, 2021</div>
                <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-3 font-sans">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement...
                </p>
              </div>
            </article>

            {/* List items */}
            <div className="flex flex-col gap-6">
              {[
                { img: `${B19}2021/08/Depositphotos_168713846_xl-2015-1-450x297.jpg`, cat: "Business", t: "How Investors Can Get In On Crypto Without Actually Buying Any", d: "Feb 4, 2021" },
                { img: `${B19}2021/08/Depositphotos_174889758_xl-2015-1-450x244.jpg`, cat: "Technology", t: "Ethereum Just Underwent a Major Change – Hence, The 25% Jump in a Week!", d: "Feb 4, 2021" },
                { img: `${B19}2021/08/Depositphotos_353861418_xl-2015-1-450x284.jpg`, cat: "Business", t: "HSBC Becomes Latest Bank to Suspend Payments to Crypto Clients", d: "Feb 4, 2021" },
              ].map((a, i) => (
                <article key={i} className="flex flex-col md:flex-row gap-6 pb-6 border-b border-white/5 last:border-0 last:mb-0 last:pb-0 cursor-pointer group">
                  <div className="w-full md:w-[280px] h-[180px] flex-shrink-0 overflow-hidden bg-gray-900 relative rounded-sm shadow-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-hover:opacity-90" 
                      alt="" 
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-[9.5px] font-black uppercase tracking-widest font-sans" style={{ color: ACCENT }}>{a.cat}</span>
                    <Link href="/coinbase">
                      <h2 className="font-bold text-[16px] md:text-[17.5px] leading-snug text-white hover:text-[#3b82f6] transition-colors duration-200 mt-1 mb-2 line-clamp-2">{a.t}</h2>
                    </Link>
                    <div className="text-[10.5px] text-gray-400 mb-2 font-sans">By John Doe · {a.d}</div>
                    <p className="text-[12.5px] text-gray-400 line-clamp-2 leading-relaxed font-sans">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon...</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center md:text-left">
              <button className="border border-white/20 text-gray-300 hover:text-white hover:border-white text-[11px] font-black uppercase tracking-widest px-8 py-3.5 hover:bg-white/5 transition-all duration-300 rounded-sm">
                Load More Posts 
              </button>
            </div>
          </div>

          {/* Sticky Sidebar 1 */}
          <div className="lg:col-span-1 lg:sticky lg:top-[80px] self-start space-y-8 lg:pl-4">
            
            {/* Europe Featured Section */}
            <div>
              <SHead title="Europe" style="c" />
              <article className="group cursor-pointer mb-5">
                <div className="overflow-hidden bg-gray-900 aspect-[16/10] mb-3.5 relative rounded-sm shadow-sm">
                  <img 
                    src={`${B19}2021/08/Depositphotos_130306336_xl-2015-1-450x300.jpg`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 group-hover:opacity-90" 
                    alt="LibertyX ATM" 
                  />
                </div>
                <span className="text-[9.5px] font-black uppercase tracking-widest font-sans" style={{ color: "#10b981" }}>
                  Investments
                </span>
                <Link href="/coinbase">
                  <h3 className="font-bold text-[15px] leading-snug text-white hover:text-[#3b82f6] transition-colors duration-200 mt-1.5 mb-1">
                    NCR Buys Cryptocurrency ATM Firm LibertyX – A Big Deal
                  </h3>
                </Link>
                <p className="text-[10.5px] text-gray-500 font-sans">By John Doe · Feb 1, 2021</p>
              </article>

              {/* Sidebar articles list */}
              <div className="flex flex-col divide-y divide-white/5 gap-3.5">
                {[
                  { img: `${B19}2021/08/Depositphotos_178035294_xl-2015-1-300x177.jpg`, t: "Crypto Payment Systems Have Increased Over 70% This Year", d: "Feb 1, 2021" },
                  { img: `${B19}2021/08/Depositphotos_168183508_xl-2015-1-300x169.jpg`, t: "Bitcoin, Ether Lower Whereas XRP, Litecoin Gain", d: "Feb 1, 2021" },
                  { img: `${B19}2021/08/Depositphotos_402408846_xl-2015-1-300x200.jpg`, t: "Millennials Are Quitting Job to Become Day Traders", d: "Jan 20, 2021" },
                  { img: `${B19}2021/08/Depositphotos_458703222_xl-2015-1-300x150.jpg`, t: "EU Will Make Bitcoin Traceable & Ban Anonymous Crypto", d: "Jan 18, 2021" },
                  { img: `${B19}2021/08/Depositphotos_475476518_xl-2015-1-300x199.jpg`, t: "Changing Crypto Trading Patterns Reveal the Market's Power", d: "Jan 16, 2021" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-3.5 pt-3.5 first:pt-0 cursor-pointer group">
                    <div className="w-[72px] h-[54px] flex-shrink-0 overflow-hidden bg-gray-950 relative rounded-sm">
                      <img 
                        src={a.img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt="" 
                      />
                    </div>
                    <div>
                      <Link href="/coinbase">
                        <h4 className="font-bold text-[12px] leading-snug text-gray-300 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                          {a.t}
                        </h4>
                      </Link>
                      <p className="text-[10px] text-gray-500 mt-1 font-sans">{a.d}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="bg-[#1a2130] border border-white/5 p-6 rounded-sm text-center">
              <h3 className="font-bold text-[15px] mb-1.5 text-white">Subscribe to Updates</h3>
              <p className="text-[11.5px] text-gray-400 mb-4 leading-normal">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 font-sans">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required 
                  className="w-full bg-[#111625] border border-white/10 px-3.5 py-2.5 text-[12.5px] text-white placeholder-gray-600 focus:border-white/20 focus:outline-none rounded-sm"
                />
                <button 
                  type="submit" 
                  className="w-full text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm hover:bg-opacity-95 transition-all duration-300"
                  style={{ backgroundColor: ACCENT }}
                >
                  Subscribe
                </button>
                <label className="flex items-start gap-2.5 text-[10px] text-gray-500 cursor-pointer select-none text-left mt-2 leading-normal">
                  <input type="checkbox" required className="mt-0.5 flex-shrink-0" />
                  <span>
                    By signing up, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a> agreement.
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* ── FEATURED VIDEOS (2/3 Overlay + 1/3 List) ── */}
        <section className="mb-10 border-t border-white/5 pt-8">
          <SHead title="Featured Videos" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Big Video Card (2 Cols) */}
            <article className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-sm shadow-md bg-black aspect-[16/9] lg:h-[340px]">
              <img 
                src={`${B19}2021/08/Depositphotos_473000906_xl-2015-1-1024x576.jpg`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102 group-hover:opacity-85" 
                alt="" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/90 via-[#0b0e17]/30 to-transparent" />
              {/* Play symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#3b82f6]/20 group-hover:border-[#3b82f6]/30 transition-all duration-300">
                  <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-white ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="inline-block text-[9.5px] font-black uppercase tracking-widest mb-2 font-sans" style={{ color: "#a78bfa" }}>
                  Ethereum
                </span>
                <Link href="/coinbase">
                  <h2 className="text-white font-bold text-[18px] md:text-[22px] leading-snug hover:text-[#3b82f6] transition-colors">
                    Cryptocurrency Prices Today on August 11: Ethereum Gains 25% in a Week
                  </h2>
                </Link>
                <p className="text-gray-400 text-[10.5px] mt-2 font-sans">By John Doe · Jan 11, 2021</p>
              </div>
            </article>

            {/* Video List (1 Col) */}
            <div className="lg:col-span-1 flex flex-col gap-3.5 justify-between">
              {[
                { img: `${B19}2021/08/Depositphotos_474939806_xl-2015-1-450x300.jpg`, cat: "Bitcoin", t: "Crypto Lending in a Nutshell: Principles, Rates, Safety" },
                { img: `${B19}2021/08/Depositphotos_243022762_xl-2015-1-450x281.jpg`, cat: "Monero", t: "Bug Found in Decoy Algorithm for Privacy Coin Monero" },
                { img: `${B19}2021/08/Depositphotos_177502930_xl-2015-1-450x300.jpg`, cat: "Bitcoin", t: "Memestock AMC Now Plans to Accept Bitcoin" },
                { img: `${B19}2021/08/Depositphotos_24331933_xl-2015-1-450x300.jpg`, cat: "Eurozone", t: "Digital Euro: Aspirations of a Sovereign Alternative to Crypto-Assets" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3.5 py-2.5 border-b border-white/5 last:border-0 last:pb-0 cursor-pointer group items-start">
                  <div className="relative flex-shrink-0 w-[90px] h-[64px] overflow-hidden bg-black rounded-sm shadow-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90" 
                      alt="" 
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[7px] border-transparent border-l-white ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider block font-sans" style={{ color: ACCENT }}>{a.cat}</span>
                    <Link href="/coinbase">
                      <h4 className="font-bold text-[12px] leading-snug text-gray-200 group-hover:text-[#3b82f6] transition-colors line-clamp-2 mt-0.5">
                        {a.t}
                      </h4>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ECONOMY INSIGHTS (4 COLUMNS) ── */}
        <section className="mb-10 border-t border-white/5 pt-8">
          <SHead title="Economy Insights" style="c" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { img: `${B19}2021/08/Depositphotos_216984086_xl-2015-1-450x300.jpg`, t: "PoS Coins, Lightning, DeFi & DEXes In Danger as US Bill Chaos Intensifies", d: "Jan 15, 2021" },
              { img: `${B19}2021/08/Depositphotos_193678754_xl-2015-1-450x282.jpg`, t: "Jack Dorsey Says Bitcoin Will Unite The World", d: "Jan 15, 2021", stars: "9.1" },
              { img: `${B19}2021/08/Depositphotos_252260404_xl-2015-1-450x232.jpg`, t: "Hong Kong Customs Arrest Four in Crypto Laundering Bust", d: "Jan 15, 2021" },
              { img: `${B19}2021/02/Depositphotos_433967254_xl-2015-1-450x300.jpg`, t: "Warren Buffett-Backed Brazilian Crypto Bank Plans $2B IPO", d: "Feb 3, 2021" },
            ].map((a, i) => (
              <article key={i} className="cursor-pointer group flex flex-col">
                <div className="overflow-hidden bg-gray-900 aspect-[16/10] mb-3 relative rounded-sm shadow-sm">
                  <img 
                    src={a.img} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103" 
                    alt="" 
                  />
                </div>
                <Link href="/coinbase">
                  <h2 className="font-bold text-[13px] leading-snug text-gray-200 group-hover:text-[#3b82f6] transition-colors line-clamp-3 mb-1.5">{a.t}</h2>
                </Link>
                {a.stars && (
                  <div className="flex items-center gap-1 mb-1.5 font-sans">
                    <span className="text-yellow-400 text-[10px]">★★★★★</span>
                    <span className="text-[10px] text-gray-400 font-bold">{a.stars}</span>
                  </div>
                )}
                <p className="text-[10px] text-gray-500 font-sans mt-auto">{a.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── MARKETS SECTION (3 COLUMNS BLOCK BOXES) ── */}
        <section className="border-t border-white/5 pt-8 mb-4">
          <SHead title="Markets" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: `${B19}2021/03/Depositphotos_471848636_xl-2015-1-450x253.jpg`, cat: "XRP", t: "XRP Price Chart 'Double Bottom' Puts Next Bullish Target at $1", d: "Mar 16, 2021", desc: "XRP's technical chart shows a classic double bottom pattern, signaling a potential bullish reversal toward the $1 price target." },
              { img: `${B19}2021/02/Depositphotos_50133523_xl-2015-1-450x277.jpg`, cat: "Mining", t: "Fidelity Buys 7.4% Of Bitcoin Mining Company Marathon Digital Holdings", d: "Feb 11, 2021", desc: "Fidelity Investments has acquired a 7.4% stake in Marathon Digital Holdings, signaling growing institutional interest in crypto mining." },
              { img: `${B19}2021/08/Depositphotos_130306336_xl-2015-1-450x300.jpg`, cat: "Investments", t: "NCR Buys Cryptocurrency ATM Firm LibertyX – A Big Deal", d: "Feb 1, 2021", desc: "NCR Corporation has acquired LibertyX, a leading cryptocurrency ATM company, in a deal that expands its digital currency footprint." },
            ].map((a, i) => (
              <article key={i} className="cursor-pointer group bg-[#161c2b] border border-white/5 rounded-sm overflow-hidden flex flex-col">
                <div className="overflow-hidden bg-gray-900 aspect-[16/10] relative">
                  <img 
                    src={a.img} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-hover:opacity-90" 
                    alt="" 
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-[9.5px] font-black uppercase tracking-widest font-sans" style={{ color: ACCENT }}>{a.cat}</span>
                  <Link href="/coinbase">
                    <h2 className="font-bold text-[14.5px] leading-snug text-white group-hover:text-[#3b82f6] transition-colors mt-1 mb-2 line-clamp-2">{a.t}</h2>
                  </Link>
                  <p className="text-[12.5px] text-gray-400 leading-relaxed font-sans line-clamp-2 mb-3">{a.desc}</p>
                  <p className="text-[10px] text-gray-500 font-sans mt-auto">{a.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* ── PREMIUM WIDGET FOOTER ── */}
      <footer className="bg-[#0b0e17] border-t border-white/5 pt-16 pb-8 mt-12">
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* Logo block */}
          <div className="flex justify-start mb-10">
            <img 
              src="https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/CoinBase-logo-white.png"
              className="h-8 object-contain" 
              alt="CoinBase Logo" 
              width="180"
              height="32"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
            {[
              { h: "Categories", links: ["Technology", "Insights", "Business", "Markets", "Videos"] },
              { h: "Quick Links", links: ["Home", "Features", "Contact", "Privacy Policy"] },
              { h: "Follow Us", links: ["Facebook", "X (Twitter)", "Instagram"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2 border-b border-white/10 text-gray-300">
                  {col.h}
                </h5>
                <ul className="space-y-2.5 font-sans">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <Link href="/coinbase" className="text-gray-400 hover:text-[#3b82f6] text-[12.5px] transition-colors duration-200">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter widget */}
            <div>
              <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2 border-b border-white/10 text-gray-300">
                Newsletter
              </h5>
              <p className="text-gray-400 text-[12px] mb-4 leading-normal">
                Receive the most important crypto news delivered to your inbox every morning.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 font-sans">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required 
                  className="w-full bg-[#161b22] border border-white/10 focus:border-white/20 focus:outline-none text-[12.5px] px-3.5 py-2.5 text-white placeholder-gray-600 rounded-sm"
                />
                <button 
                  type="submit" 
                  className="w-full text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm hover:bg-opacity-95 transition-all duration-300"
                  style={{ backgroundColor: ACCENT }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[11.5px] text-center sm:text-left">
              &copy; {new Date().getFullYear()} SmartMag CoinBase. All rights reserved. Powered by ThemeSphere.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider font-sans">
              <Link href="/coinbase" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/coinbase" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/coinbase" className="hover:text-white transition-colors">Advertise</Link>
              <Link href="/coinbase" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
