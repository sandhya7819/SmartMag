"use client";
import CoinbaseHeader from "@/components/CoinbaseHeader";

const B19 = "https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/";

const ACCENT = "#3b82f6";

function SHead({ title, style = "b" }: { title: string; style?: "b" | "c" }) {
  return (
    <div className="mb-5">
      <div className={`border-b ${style === "c" ? "border-white/10" : "border-white/10"} pb-[10px]`}>
        <span className={`inline-block font-extrabold text-[13px] uppercase tracking-wider text-white border-b-[3px] pb-[10px] -mb-[2px]`}
          style={{ borderColor: ACCENT }}>
          {title}
        </span>
      </div>
    </div>
  );
}

export default function CoinbasePage() {
  const B = B19;

  return (
    <main className="min-h-screen bg-[#141920] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <CoinbaseHeader />

      <div className="max-w-[1200px] mx-auto px-4 pt-6 pb-12">

        {/* ── HERO: Featured Overlay Grid (1 big + 2 right) ── */}
        <div className="grid grid-cols-12 gap-4 mb-6">

          {/* Big hero – 8 cols */}
          <article className="col-span-8 relative group cursor-pointer overflow-hidden">
            <img src={`${B}2021/03/Depositphotos_328674290_xl-2015-1-450x300.jpg`}
              className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mb-3 text-white" style={{ backgroundColor: ACCENT }}>Bitcoin</span>
              <h1 className="text-white font-bold text-[26px] leading-tight mb-3">
                Bitcoin Climbs as Elon Musk Says Tesla 'Likely' to Accept it Again
              </h1>
              <div className="flex items-center gap-2 text-gray-300 text-[11px]">
                <span>By John Doe</span><span>·</span><span>Mar 16, 2021</span>
              </div>
            </div>
          </article>

          {/* Right 2 stacked – 4 cols */}
          <div className="col-span-4 flex flex-col gap-4">
            {[
              { img: `${B}2021/03/Depositphotos_471848636_xl-2015-1-450x253.jpg`, t: "XRP Price Chart 'Double Bottom' Puts Next Bullish Target at $1", cat: "XRP", d: "Mar 16, 2021" },
              { img: `${B}2021/02/Depositphotos_50133523_xl-2015-1-450x277.jpg`, t: "Fidelity Buys 7.4% Of Bitcoin Mining Company Marathon Digital Holdings", cat: "Bitcoin", d: "Feb 11, 2021" },
            ].map((a, i) => (
              <article key={i} className="relative group cursor-pointer overflow-hidden flex-1">
                <img src={a.img} className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: ACCENT }}>{a.cat}</span>
                  <h2 className="text-white font-bold text-[14px] leading-snug line-clamp-3">{a.t}</h2>
                  <p className="text-gray-400 text-[10px] mt-1">{a.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT: 66% + 33% SIDEBAR ── */}
        <div className="grid grid-cols-3 gap-7 mb-8">

          {/* Left: Business list posts (66%) */}
          <div className="col-span-2">
            <SHead title="Business" />

            {/* Featured large */}
            <article className="flex gap-5 pb-5 mb-5 border-b border-white/10 cursor-pointer group">
              <div className="flex-shrink-0 overflow-hidden">
                <img src={`${B}2021/02/Depositphotos_56545139_xl-2015-1-450x332.jpg`}
                  className="w-[300px] h-[200px] object-cover group-hover:opacity-80 transition-opacity" alt="" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: ACCENT }}>Technology</span>
                <h2 className="font-bold text-[18px] leading-snug mt-1 mb-2 group-hover:text-blue-400 transition-colors">
                  Can Cryptocurrency Be Hacked, Stolen Or Scammed? How Can You Be Safe?
                </h2>
                <div className="text-[11px] text-gray-400 mb-2">By John Doe · Feb 11, 2021</div>
                <p className="text-[13px] text-gray-400 line-clamp-3">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon…
                </p>
              </div>
            </article>

            {/* List of posts */}
            {[
              { img: `${B}2021/08/Depositphotos_168713846_xl-2015-1-450x297.jpg`, cat: "Business", t: "How Investors Can Get In On Crypto Without Actually Buying Any", a: "John Doe", d: "Feb 4, 2021" },
              { img: `${B}2021/08/Depositphotos_174889758_xl-2015-1-450x244.jpg`, cat: "Technology", t: "Ethereum Just Underwent a Major Change – Hence, The 25% Jump in a Week!", a: "John Doe", d: "Feb 4, 2021" },
              { img: `${B}2021/08/Depositphotos_353861418_xl-2015-1-450x284.jpg`, cat: "Business", t: "HSBC Becomes Latest Bank to Suspend Payments to Crypto", a: "John Doe", d: "Feb 4, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-4 pb-5 mb-5 border-b border-white/10 last:border-0 last:mb-0 last:pb-0 cursor-pointer group">
                <div className="flex-shrink-0 overflow-hidden">
                  <img src={a.img} className="w-[280px] h-[180px] object-cover group-hover:opacity-80 transition-opacity" alt="" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: ACCENT }}>{a.cat}</span>
                  <h2 className="font-bold text-[16px] leading-snug mt-1 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{a.t}</h2>
                  <div className="text-[11px] text-gray-400 mb-2">By {a.a} · {a.d}</div>
                  <p className="text-[12px] text-gray-400 line-clamp-2">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon…</p>
                </div>
              </article>
            ))}

            <button className="mt-4 border border-white/20 text-gray-300 text-[12px] font-bold px-8 py-2.5 hover:bg-white/10 transition-colors flex items-center gap-2">
              Load More <span>↻</span>
            </button>
          </div>

          {/* RIGHT STICKY SIDEBAR (33%) */}
          <div className="col-span-1 border-l border-white/10 pl-7">
            {/* "Europe" featured */}
            <SHead title="Europe" style="c" />
            <article className="mb-5 cursor-pointer group">
              <div className="overflow-hidden mb-3">
                <img src={`${B}2021/08/Depositphotos_130306336_xl-2015-1-450x300.jpg`}
                  className="w-full h-[170px] object-cover group-hover:opacity-80 transition-opacity" alt="" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#10b981" }}>Investments</span>
              <h2 className="font-bold text-[15px] leading-snug mt-1 mb-1 group-hover:text-blue-400 transition-colors">
                NCR Buys Cryptocurrency ATM Firm LibertyX – A Big Deal
              </h2>
              <p className="text-[11px] text-gray-400">By John Doe · Feb 1, 2021</p>
            </article>

            {/* Small list */}
            {[
              { img: `${B}2021/08/Depositphotos_178035294_xl-2015-1-300x177.jpg`, t: "Crypto Payment Systems Have Increased Over 70% This Year", d: "Feb 1, 2021" },
              { img: `${B}2021/08/Depositphotos_168183508_xl-2015-1-300x169.jpg`, t: "Bitcoin, Ether Lower Whereas XRP, Litecoin Gain", d: "Feb 1, 2021" },
              { img: `${B}2021/08/Depositphotos_402408846_xl-2015-1-300x200.jpg`, t: "Millennials Are Quitting Job to Become Day Traders", d: "Jan 20, 2021" },
              { img: `${B}2021/08/Depositphotos_458703222_xl-2015-1-300x150.jpg`, t: "EU Will Make Bitcoin Traceable & Ban Anonymous Crypto", d: "Jan 18, 2021" },
              { img: `${B}2021/08/Depositphotos_475476518_xl-2015-1-300x199.jpg`, t: "Changing Crypto Trading Patterns Reveal the Market's Power", d: "Jan 16, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-3 border-b border-white/10 last:border-0 cursor-pointer group">
                <img src={a.img} className="w-[80px] h-[58px] object-cover flex-shrink-0 group-hover:opacity-80" alt="" />
                <div>
                  <h4 className="font-semibold text-[12px] leading-snug text-gray-300 group-hover:text-white line-clamp-2">{a.t}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">{a.d}</p>
                </div>
              </article>
            ))}

            {/* Newsletter */}
            <div className="bg-[#1a2130] border border-white/10 p-5 mt-5">
              <h3 className="font-bold text-[15px] mb-1 text-white text-center">Subscribe to Updates</h3>
              <p className="text-[11px] text-gray-400 mb-3 text-center">Get the latest creative news from FooBar about art, design and business.</p>
              <input type="email" placeholder="Your email address.." className="w-full bg-[#0d1117] border border-white/20 px-3 py-2 text-[12px] mb-2 outline-none text-white placeholder-gray-600 rounded-sm" />
              <button className="w-full text-white text-[12px] font-bold py-2.5 rounded-sm transition-colors" style={{ backgroundColor: ACCENT }}>Subscribe</button>
              <p className="text-[10px] text-gray-500 mt-2 text-center">
                <input type="checkbox" className="mr-1" />
                By signing up, you agree to our <a href="#" className="text-blue-400">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* ── FEATURED VIDEOS: 66% big overlay + 33% list ── */}
        <section className="mb-8 border-t border-white/10 pt-6">
          <SHead title="Featured Videos" />
          <div className="grid grid-cols-3 gap-6">

            {/* Big video overlay – 2 cols */}
            <article className="col-span-2 relative group cursor-pointer overflow-hidden">
              <img src={`${B}2021/08/Depositphotos_473000906_xl-2015-1-1024x576.jpg`}
                className="w-full h-[340px] object-cover group-hover:opacity-80 transition-opacity" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-white ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#a78bfa" }}>Ethereum</span>
                <h2 className="text-white font-bold text-[20px] leading-snug">
                  Cryptocurrency Prices Today on August 11: Ethereum Gains 25% in a Week
                </h2>
                <p className="text-gray-300 text-[11px] mt-2">By John Doe · Jan 11, 2021</p>
              </div>
            </article>

            {/* Right video list – 1 col */}
            <div className="col-span-1 space-y-0">
              {[
                { img: `${B}2021/08/Depositphotos_474939806_xl-2015-1-450x300.jpg`, cat: "Bitcoin", t: "Crypto Lending in a Nutshell: Principles, Rates, Safety" },
                { img: `${B}2021/08/Depositphotos_243022762_xl-2015-1-450x281.jpg`, cat: "Monero", t: "Bug Found in Decoy Algorithm for Privacy Coin Monero" },
                { img: `${B}2021/08/Depositphotos_177502930_xl-2015-1-450x300.jpg`, cat: "Bitcoin", t: "Memestock AMC Now Plans to Accept Bitcoin" },
                { img: `${B}2021/08/Depositphotos_24331933_xl-2015-1-450x300.jpg`, cat: "Eurozone", t: "Digital Euro: Aspirations of a Sovereign Alternative to Crypto-Assets" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3 py-3 border-b border-white/10 last:border-0 cursor-pointer group">
                  <div className="relative flex-shrink-0">
                    <img src={a.img} className="w-[90px] h-[64px] object-cover group-hover:opacity-80" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[7px] border-transparent border-l-white ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase" style={{ color: ACCENT }}>{a.cat}</span>
                    <h4 className="font-semibold text-[12px] leading-snug text-gray-300 group-hover:text-white line-clamp-2 mt-0.5">{a.t}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ECONOMY INSIGHTS: 4-col grid ── */}
        <section className="mb-8 border-t border-white/10 pt-6">
          <SHead title="Economy Insights" style="c" />
          <div className="grid grid-cols-4 gap-5">
            {[
              { img: `${B}2021/08/Depositphotos_216984086_xl-2015-1-450x300.jpg`, t: "PoS Coins, Lightning, DeFi & DEXes In Danger as US Bill Chaos Intensifies", d: "Jan 15, 2021" },
              { img: `${B}2021/08/Depositphotos_193678754_xl-2015-1-450x282.jpg`, t: "Jack Dorsey Says Bitcoin Will Unite The World", d: "Jan 15, 2021", stars: "9.1" },
              { img: `${B}2021/08/Depositphotos_252260404_xl-2015-1-450x232.jpg`, t: "Hong Kong Customs Arrest Four in Crypto Laundering Bust", d: "Jan 15, 2021" },
              { img: `${B}2021/02/Depositphotos_433967254_xl-2015-1-450x300.jpg`, t: "Warren Buffett-Backed Brazilian Crypto Bank Plans $2B IPO", d: "Feb 3, 2021" },
            ].map((a, i) => (
              <article key={i} className="cursor-pointer group">
                <div className="overflow-hidden mb-3">
                  <img src={a.img} className="w-full h-[160px] object-cover group-hover:opacity-80 transition-opacity" alt="" />
                </div>
                <h2 className="font-bold text-[13px] leading-snug text-gray-200 group-hover:text-blue-400 transition-colors line-clamp-3 mb-1">{a.t}</h2>
                {(a as any).stars && (
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-[11px]">★★★★★</span>
                    <span className="text-[11px] text-gray-400">{(a as any).stars}</span>
                  </div>
                )}
                <p className="text-[10px] text-gray-500">{a.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── MARKETS section ── */}
        <section className="border-t border-white/10 pt-6 mb-8">
          <SHead title="Markets" />
          <div className="grid grid-cols-3 gap-6">
            {[
              { img: `${B}2021/03/Depositphotos_471848636_xl-2015-1-450x253.jpg`, cat: "XRP", t: "XRP Price Chart 'Double Bottom' Puts Next Bullish Target at $1", d: "Mar 16, 2021", desc: "XRP's technical chart shows a classic double bottom pattern, signaling a potential bullish reversal toward the $1 price target." },
              { img: `${B}2021/02/Depositphotos_50133523_xl-2015-1-450x277.jpg`, cat: "Mining", t: "Fidelity Buys 7.4% Of Bitcoin Mining Company Marathon Digital Holdings", d: "Feb 11, 2021", desc: "Fidelity Investments has acquired a 7.4% stake in Marathon Digital Holdings, signaling growing institutional interest in crypto mining." },
              { img: `${B}2021/08/Depositphotos_130306336_xl-2015-1-450x300.jpg`, cat: "Investments", t: "NCR Buys Cryptocurrency ATM Firm LibertyX – A Big Deal", d: "Feb 1, 2021", desc: "NCR Corporation has acquired LibertyX, a leading cryptocurrency ATM company, in a deal that expands its digital currency footprint." },
            ].map((a, i) => (
              <article key={i} className="cursor-pointer group bg-[#1a2130] border border-white/10 overflow-hidden">
                <div className="overflow-hidden">
                  <img src={a.img} className="w-full h-[170px] object-cover group-hover:opacity-80 transition-opacity" alt="" />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: ACCENT }}>{a.cat}</span>
                  <h2 className="font-bold text-[14px] leading-snug text-gray-200 group-hover:text-blue-400 transition-colors mt-1 mb-2 line-clamp-2">{a.t}</h2>
                  <p className="text-[12px] text-gray-400 line-clamp-2">{a.desc}</p>
                  <p className="text-[10px] text-gray-500 mt-2">{a.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0e14] border-t border-white/10 pt-10 pb-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-start mb-8">
            <img src="https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/CoinBase-logo-white.png"
              className="h-8 object-contain" alt="CoinBase" />
          </div>
          <div className="grid grid-cols-4 gap-8 mb-8">
            {[
              { h: "Categories", links: ["Technology", "Insights", "Business", "Markets", "Videos"] },
              { h: "Quick Links", links: ["Home", "Features", "Contact", "Privacy Policy"] },
              { h: "Follow Us", links: ["Facebook", "X (Twitter)", "Instagram"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-[12px] uppercase tracking-wider mb-4 border-b border-white/10 pb-2 text-gray-300">{col.h}</h5>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" className="text-gray-500 text-[12px] hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h5 className="font-bold text-[12px] uppercase tracking-wider mb-4 border-b border-white/10 pb-2 text-gray-300">Newsletter</h5>
              <input type="email" placeholder="Your email address.." className="w-full bg-[#161b22] border border-white/20 px-3 py-2 text-[12px] mb-2 outline-none text-white placeholder-gray-600" />
              <button className="w-full text-white text-[12px] font-bold py-2 transition-colors" style={{ backgroundColor: ACCENT }}>Subscribe</button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 text-center">
            <p className="text-gray-600 text-[11px]">© 2024 SmartMag CoinBase. All rights reserved. Powered by ThemeSphere.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
