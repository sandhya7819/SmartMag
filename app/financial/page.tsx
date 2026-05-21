"use client";
import FinancialHeader from "@/components/FinancialHeader";

const B = "https://smartmag.theme-sphere.com/financial/wp-content/uploads/sites/16/";

const CAT: Record<string, string> = {
  Markets: "#1a6aa8", Investments: "#e07b1a", Stocks: "#27a35e", Funds: "#1a9ea8",
};

function Cat({ name, date }: { name: string; date: string }) {
  return (
    <div className="flex items-center gap-2 mt-1.5">
      <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: CAT[name] ?? "#888" }}>{name}</span>
      <span className="text-[11px] text-gray-400">— {date}</span>
    </div>
  );
}

function SecHead({ title, color = "#222" }: { title: string; color?: string }) {
  return (
    <div className="border-b-2 pb-2 mb-5" style={{ borderColor: color }}>
      <h4 className="font-bold text-[14px] uppercase tracking-wider" style={{ color }}>{title}</h4>
    </div>
  );
}

export default function FinancialPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <FinancialHeader />

      <div className="max-w-[1280px] mx-auto px-6 py-8">

        {/* ── TOP 3-COL SECTION ── */}
        <div className="grid grid-cols-3 gap-8 mb-10">

          {/* COL 1 – Top Stories */}
          <div>
            <div className="bg-black text-white text-[13px] font-bold uppercase tracking-wider px-4 py-2.5 mb-4">Top Stories</div>
            <article className="mb-4">
              <img src={`${B}2021/01/Depositphotos_6881336_xl-2015-450x281.jpg`} className="w-full h-[200px] object-cover mb-3" alt="" />
              <h2 className="font-bold text-[17px] leading-snug hover:text-[#1a6aa8] cursor-pointer">Bottleneck At Chinese Port Cause Trouble For Oil Shipping</h2>
              <Cat name="Stocks" date="Jan 11, 2021" />
              <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">To understand the new politics stance and other pro nationals of recent…</p>
            </article>
            <hr className="border-gray-200 mb-4" />
            {[
              { img: `${B}2021/01/Depositphotos_32435379_xl-2015-1-300x199.jpg`, t: "3 Moves to Make If the Stock Market Plummets", d: "Jan 11, 2021" },
              { img: `${B}2021/01/Depositphotos_19915825_xl-2015-1-300x300.jpg`, t: "Town Helping Business Owners With Funds", d: "Jan 9, 2021" },
              { img: `${B}2021/01/Depositphotos_1011524_xl-2015-1-300x200.jpg`, t: "GOP Leaders Fight Biden Over COVID-19 Funds", d: "Jan 4, 2021" },
              { img: `${B}2021/01/Depositphotos_433967254_xl-2015-1-300x200.jpg`, t: "Paytm Aims To Raise $1.6 Billion With Fresh Shares in IPO", d: "Jan 3, 2021" },
              { img: `${B}2021/01/Depositphotos_192067810_xl-2015-1-300x200.jpg`, t: "Crypto Miner Hive Blockchain to List Shares on Nasdaq", d: "Jan 2, 2021" },
              { img: `${B}2021/01/jingming-pan-iYsrkq5qq0Q-unsplash-300x200.jpg`, t: "Gold Set For Worst Week Since March 2020 After Hawkish", d: "Jan 1, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[95px] h-[68px] object-cover flex-shrink-0" alt="" />
                <div>
                  <h4 className="font-bold text-[13px] leading-snug hover:text-[#1a6aa8] cursor-pointer">{a.t}</h4>
                  <p className="text-[11px] text-gray-400 mt-1">{a.d}</p>
                </div>
              </article>
            ))}
          </div>

          {/* COL 2 – G7 featured + 2 list posts */}
          <div>
            <article className="mb-5">
              <img src={`${B}2021/01/Depositphotos_235278760_xl-2015-4-768x526.jpg`} className="w-full h-[280px] object-cover mb-3" alt="" />
              <h2 className="font-bold text-[22px] leading-tight hover:text-[#1a6aa8] cursor-pointer">G7 Climate Finance Initiative Will Struggle Against China's Belt and Road Project</h2>
              <Cat name="Markets" date="Jan 14, 2021" />
              <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the…</p>
            </article>
            <hr className="border-gray-200 mb-4" />
            {[
              { img: `${B}2021/01/Depositphotos_8712051_xl-2015-1-450x315.jpg`, t: "Gold Prices Bounce Ahead of Fed Policy Release", cat: "Stocks", d: "Jan 12, 2021" },
              { img: `${B}2021/01/Depositphotos_173034712_xl-2015-1-450x253.jpg`, t: "There's More To This Market Than Bitcoin", cat: "Markets", d: "Jan 11, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[150px] h-[105px] object-cover flex-shrink-0" alt="" />
                <div>
                  <h2 className="font-bold text-[15px] leading-snug hover:text-[#1a6aa8] cursor-pointer">{a.t}</h2>
                  <Cat name={a.cat} date={a.d} />
                  <p className="text-[12px] text-gray-500 mt-1.5">To understand the new politics stance and other pro nationals of…</p>
                </div>
              </article>
            ))}
          </div>

          {/* COL 3 – Ad + Investments */}
          <div>
            <a href="#" className="block mb-5">
              <img src={`${B}2021/06/300x250-banner-ad-001@2x.jpg`} className="w-full" alt="Ad" />
            </a>
            <SecHead title="Investments" color="#e07b1a" />
            <article className="mb-4">
              <img src={`${B}2021/01/Depositphotos_162800718_xl-2015-1-450x253.jpg`} className="w-full h-[180px] object-cover mb-3" alt="" />
              <h2 className="font-bold text-[16px] leading-snug hover:text-[#1a6aa8] cursor-pointer">Cainiao Partners With Government To Help It Become a 'Smart Supply Chain Zone'</h2>
              <Cat name="Investments" date="Jan 1, 2021" />
              <p className="text-[13px] text-gray-500 mt-2">To understand the new politics stance and other pro nationals of recent…</p>
            </article>
            <hr className="border-gray-200 mb-4" />
            {[
              { img: `${B}2021/01/pexels-michael-steinberg-321463-300x200.jpg`, t: "Troubled Gold Miner Sold Stake For 75% Less", d: "Jan 1, 2021" },
              { img: `${B}2021/01/pexels-tom-fisk-2231744-1-300x200.jpg`, t: "IPO: Up to 10% of Issue Size to be Reserved", d: "Jan 1, 2021" },
              { img: `${B}2021/01/executium-5z36YztTtM-unsplash.jpg`, t: "Hedge Funds Expected to Hold 7% of Assets in Crypto Within Five Years", d: "Jan 1, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[95px] h-[68px] object-cover flex-shrink-0" alt="" />
                <div>
                  <h4 className="font-bold text-[13px] leading-snug hover:text-[#1a6aa8] cursor-pointer">{a.t}</h4>
                  <p className="text-[11px] text-gray-400 mt-1">{a.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── ECONOMY INSIGHTS ── */}
        <section className="bg-[#0d1b2a] py-10 px-8 mb-10 -mx-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="border-b-2 border-[#1a6aa8] pb-2.5 mb-6">
              <h4 className="font-bold text-[14px] uppercase tracking-wider text-white">Economy Insights</h4>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                { img: `${B}2021/03/Depositphotos_234586970_xl-2015-1-450x275.jpg`, t: "Top UK Stocks to Watch: Capita Shares Rise as it Unveils", cat: "Investments", d: "Jan 15, 2021" },
                { img: `${B}2021/01/Depositphotos_61584077_xl-2015-1-450x300.jpg`, t: "Digital Euro Might Suck Away 8% of Banks' Deposits", cat: "Funds", d: "Jan 12, 2021" },
                { img: `${B}2021/01/Depositphotos_13662166_xl-2015-3-450x295.jpg`, t: "Oil Gains on OPEC Outlook That U.S. Growth Will Slow", cat: "Funds", d: "Jan 11, 2021" },
                { img: `${B}2021/01/Depositphotos_469345962_xl-2015-1-450x315.jpg`, t: "Post Covid, How Bitcoin Will Impact Investors?", cat: "Stocks", d: "Jan 4, 2021" },
              ].map((a, i) => (
                <article key={i}>
                  <img src={a.img} className="w-full h-[160px] object-cover mb-3" alt="" />
                  <h2 className="font-bold text-[14px] text-white leading-snug hover:text-gray-300 cursor-pointer">{a.t}</h2>
                  <Cat name={a.cat} date={a.d} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── NATIONAL NEWS + SIDEBAR ── */}
        <div className="grid grid-cols-3 gap-8">

          {/* National News – 2 cols */}
          <div className="col-span-2">
            <SecHead title="National News" color="#1a9ea8" />
            {[
              { img: `${B}2021/03/Depositphotos_294996210_xl-2015-1-450x300.jpg`, t: "Eurozone: Digital Euro Could Boost Single Currency's International Use", cat: "Markets", d: "Mar 16, 2021" },
              { img: `${B}2021/03/Depositphotos_235246358_xl-2015-1-450x300.jpg`, t: "Chinese Internet Majors' Investments to Slow Profit Growth", cat: "Investments", d: "Mar 16, 2021" },
              { img: `${B}2021/02/4_TWluaW1hbC1pbmZvZ3JhcGhpYy1lbGVtZW50MDYuanBn-1024x1024.jpg`, t: "2021 PDPW Conference Content Now Available On-Demand", cat: "Markets", d: "Feb 11, 2021" },
              { img: `${B}2021/02/Depositphotos_49778575_xl-2015-1-450x300.jpg`, t: "Huawei Announces Watch Fit Elegant With Steel Frame", cat: "Markets", d: "Feb 11, 2021" },
              { img: `${B}2021/02/Depositphotos_111315810_xl-2015-1-450x298.jpg`, t: "'Unceasing Congestion': China's Shipping Delays Snarl Trade", cat: "Stocks", d: "Feb 11, 2021" },
              { img: `${B}2021/02/Depositphotos_278832120_xl-2015-1-450x300.jpg`, t: "Downtown San Diego Business Spaces: Comparison Gallery", cat: "Funds", d: "Feb 4, 2021" },
              { img: `${B}2021/02/Depositphotos_5186129_xl-2015-1-450x293.jpg`, t: "$100 Oil Predictions Soar As Analysts Warn Of Supply Crisis", cat: "Stocks", d: "Feb 4, 2021" },
              { img: `${B}2021/02/Depositphotos_467482108_xl-2015-1-450x300.jpg`, t: "Gupta, Greensill and Credit Suisse. How a Business Collapsed", cat: "Stocks", d: "Feb 4, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-6 py-6 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[300px] h-[200px] object-cover flex-shrink-0" alt="" />
                <div className="flex-1">
                  <h2 className="font-bold text-[20px] leading-snug hover:text-[#1a6aa8] cursor-pointer mb-1.5">{a.t}</h2>
                  <Cat name={a.cat} date={a.d} />
                  <p className="text-[14px] text-gray-500 mt-2.5 leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.…</p>
                </div>
              </article>
            ))}
            <div className="mt-6 text-center">
              <button className="border border-gray-300 text-[13px] font-bold uppercase tracking-wider px-10 py-3 hover:bg-gray-50 transition-colors">
                Load More ↻
              </button>
            </div>
          </div>

          {/* Sidebar – 1 col */}
          <div className="col-span-1 sticky top-[130px] self-start">
            <SecHead title="Europe" color="#1a9ea8" />
            <article className="mb-5">
              <img src={`${B}2021/01/Depositphotos_380045390_xl-2015-450x300.jpg`} className="w-full h-[200px] object-cover mb-3" alt="" />
              <h2 className="font-bold text-[17px] leading-snug hover:text-[#1a6aa8] cursor-pointer">Euro Business Growth Accelerating At Its Fastest Pace Since 2019</h2>
              <Cat name="Markets" date="Jan 16, 2021" />
            </article>
            {[
              { img: `${B}2021/01/Depositphotos_235246358_xl-2015-1-300x200.jpg`, t: "Shipping Lines Continue to Increase Fees, Firms Face More…", d: "Jan 16, 2021" },
              { img: `${B}2021/01/Depositphotos_419155798_xl-2015-1-450x300.jpg`, t: "Qatar Airways Helps Bring Tens of Thousands of Seafarers", d: "Jan 15, 2021" },
              { img: `${B}2021/01/Depositphotos_205982792_xl-2015-1-450x254.jpg`, t: "DHL Completes $5M Investment in New Service…", d: "Jan 14, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-3.5 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[95px] h-[68px] object-cover flex-shrink-0" alt="" />
                <div>
                  <h4 className="font-bold text-[13px] leading-snug hover:text-[#1a6aa8] cursor-pointer">{a.t}</h4>
                  <p className="text-[11px] text-gray-400 mt-1">{a.d}</p>
                </div>
              </article>
            ))}

            {/* SmartMag Promo */}
            <div className="mt-6 border border-gray-200 p-6 text-center">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">The New</p>
              <h3 className="font-black text-[26px] leading-tight mb-2">SMARTMAG</h3>
              <p className="text-[13px] text-gray-500 mb-4">Trusted by over 12,000 users worldwide</p>
              <a href="#" className="inline-block bg-[#27a35e] text-white text-[12px] font-bold uppercase tracking-wide px-6 py-2.5 hover:bg-[#1e8a4f] transition-colors">Explore Now</a>
              <img src={`${B}2021/06/300x250-banner-ad-001@2x.jpg`} className="w-full mt-5" alt="SmartMag" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111] text-white mt-12 py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-10 mb-8">
            <div>
              <img src={`${B}2021/06/FINANCIAL-LOGO.png`} className="h-9 mb-4 opacity-90" alt="Financial" />
              <p className="text-gray-400 text-[13px] leading-relaxed">Your trusted source for financial news, market insights, and investment strategies.</p>
            </div>
            {[
              { h: "Top Insights", links: ["Stocks", "Funds", "Markets", "Investments"] },
              { h: "Get Informed", links: ["Home", "Features", "About", "Contact"] },
              { h: "Categories", links: ["Economy", "Real Estate", "Crypto", "Banking"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-[13px] uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">{col.h}</h5>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" className="text-gray-400 text-[13px] hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-5 text-center">
            <p className="text-gray-500 text-[12px]">© 2025 SmartMag Financial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
