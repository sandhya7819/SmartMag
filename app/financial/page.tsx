"use client";

import { useState } from "react";
import Link from "next/link";
import FinancialHeader from "@/components/FinancialHeader";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Play, 
  Music, 
  Camera, 
  Mail,
  ArrowRight,
  TrendingUp,
  MessageSquare
} from "lucide-react";

const B = "https://smartmag.theme-sphere.com/financial/wp-content/uploads/sites/16/";

const CAT: Record<string, string> = {
  Markets: "#1a6aa8",
  Investments: "#e07b1a",
  Stocks: "#27a35e",
  Funds: "#1a9ea8",
};

const HOVER_CLASS: Record<string, string> = {
  Markets: "hover:text-[#1a6aa8]",
  Investments: "hover:text-[#e07b1a]",
  Stocks: "hover:text-[#27a35e]",
  Funds: "hover:text-[#1a9ea8]",
};

function Cat({ name, date }: { name: string; date: string }) {
  return (
    <div className="flex items-center gap-1.5 mt-1.5 text-[11px] font-bold uppercase tracking-wider">
      <span style={{ color: CAT[name] ?? "#888" }}>{name}</span>
      <span className="text-gray-300">—</span>
      <span className="text-gray-400 font-medium normal-case">{date}</span>
    </div>
  );
}

function SecHead({ title, color = "#222" }: { title: string; color?: string }) {
  return (
    <div className="border-b-2 pb-2 mb-5 flex items-center justify-between" style={{ borderColor: color }}>
      <h4 className="font-bold text-[14px] uppercase tracking-widest" style={{ color }}>{title}</h4>
    </div>
  );
}

// Initial bottom posts feed
const INITIAL_BOTTOM_POSTS = [
  { 
    img: `${B}2021/03/Depositphotos_294996210_xl-2015-1-450x300.jpg`, 
    t: "Eurozone: Digital Euro Could Boost Single Currency's International Use", 
    cat: "Markets", 
    d: "Mar 16, 2021",
    desc: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. We must understand how it impacts international trade."
  },
  { 
    img: `${B}2021/03/Depositphotos_235246358_xl-2015-1-450x300.jpg`, 
    t: "Chinese Internet Majors' Investments to Slow Profit Growth", 
    cat: "Investments", 
    d: "Mar 16, 2021",
    desc: "Investment ventures from Chinese tech giants are expected to slow overall profit margins over the coming financial cycles as regulatory bounds expand and R&D budgets increase."
  },
  { 
    img: `${B}2021/02/4_TWluaW1hbC1pbmZvZ3JhcGhpYy1lbGVtZW50MDYuanBn-1024x1024.jpg`, 
    t: "2021 PDPW Conference Content Now Available On-Demand", 
    cat: "Markets", 
    d: "Feb 11, 2021",
    desc: "Missed the annual PDPW conference? Complete session recordings, keynote analysis, and strategy guidelines are now available for on-demand streaming to registered participants."
  },
  { 
    img: `${B}2021/02/Depositphotos_49778575_xl-2015-1-450x300.jpg`, 
    t: "Huawei Announces Watch Fit Elegant With Steel Frame", 
    cat: "Markets", 
    d: "Feb 11, 2021",
    desc: "Huawei expands its smart wearables portfolio with a refined edition of its flagship fitness tracker, offering a stainless steel frame and elegant design lines for styling versatility."
  },
  { 
    img: `${B}2021/02/Depositphotos_111315810_xl-2015-1-450x298.jpg`, 
    t: "'Unceasing Congestion': China's Shipping Delays Snarl Trade", 
    cat: "Stocks", 
    d: "Feb 11, 2021",
    desc: "Port delays and labor shortages across key terminal nodes continue to bottleneck standard shipping channels, keeping ocean freight tariffs at historical highs."
  },
  { 
    img: `${B}2021/02/Depositphotos_278832120_xl-2015-1-450x300.jpg`, 
    t: "Downtown San Diego Business Spaces: Comparison Gallery", 
    cat: "Funds", 
    d: "Feb 4, 2021",
    isGallery: true,
    desc: "Take an inside visual look at commercial real estate spaces across downtown San Diego, contrasting open concept shared hubs with corporate headquarters."
  },
  { 
    img: `${B}2021/02/Depositphotos_5186129_xl-2015-1-450x293.jpg`, 
    t: "$100 Oil Predictions Soar As Analysts Warn Of Supply Crisis", 
    cat: "Stocks", 
    d: "Feb 4, 2021",
    desc: "Energy supply bottlenecks and rising geopolitical concerns push major institutions to adjust their crude price forecasts upward, warning of a prolonged global capacity crunch."
  },
  { 
    img: `${B}2021/02/Depositphotos_467482108_xl-2015-1-450x300.jpg`, 
    t: "Gupta, Greensill and Credit Suisse. How a Business Collapsed", 
    cat: "Stocks", 
    d: "Feb 4, 2021",
    desc: "A deep dive into the complex web of trade finance, receivables mapping, and relationship breaches that led to the collapse of Greensill Capital and impacted Credit Suisse."
  }
];

const ADDITIONAL_POSTS = [
  {
    img: `${B}2021/02/Depositphotos_214076282_xl-2015-1-450x253.jpg`,
    t: "Luxury Retail Giants See Portfolio Revenues Reshuffle",
    cat: "Investments",
    d: "Feb 4, 2021",
    desc: "As consumer behaviors evolve in major metropolitan regions, high-end design houses are shifting investments toward boutique experiential flagships."
  },
  {
    img: `${B}2021/01/greg-bulla-BaZjB1S18fI-unsplash-450x317.jpg`,
    t: "10 Trends From Year 2020 That Predict Business Apps Popularity",
    cat: "Markets",
    d: "Jan 20, 2021",
    desc: "Remote collaboration software, automated accounts mapping, and decentralized workflow management lead the corporate software landscape heading into the new cycle."
  },
  {
    img: `${B}2021/01/Depositphotos_257428884_xl-2015-1-300x200.jpg`,
    t: "Shipping Lines Continue to Increase Fees, Firms Face More Difficulties",
    cat: "Markets",
    d: "Jan 15, 2021",
    desc: "Container availability issues and fuel surcharges keep ocean shipping costs elevated, forcing importer margins to adjust dynamically."
  },
  {
    img: `${B}2021/01/Depositphotos_419155798_xl-2015-1-450x300.jpg`,
    t: "Qatar Airways Helps Bring Tens of Thousands of Seafarers",
    cat: "Markets",
    d: "Jan 15, 2021",
    desc: "Qatar Airways facilitates large-scale crew changes via custom transit schedules to ensure maritime supply lines remain operational during local lockdowns."
  }
];

export default function FinancialPage() {
  const [bottomPosts, setBottomPosts] = useState(INITIAL_BOTTOM_POSTS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setBottomPosts((prev) => [...prev, ...ADDITIONAL_POSTS]);
      setIsLoadingMore(false);
      setHasLoadedMore(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#1a6aa8] selection:text-white antialiased">
      {/* Premium Navigation Header */}
      <FinancialHeader />

      <div className="max-w-[1280px] mx-auto px-6 py-9">

        {/* ── TOP SECTION (3-COLUMN GRID) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* COLUMN 1: TOP STORIES */}
          <div className="flex flex-col">
            <div className="bg-black text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 mb-5 flex items-center justify-between">
              <span>Top Stories</span>
              <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
            </div>
            
            {/* Primary featured story */}
            <article className="group mb-5 flex flex-col">
              <div className="overflow-hidden bg-gray-100 aspect-[16/10] mb-3.5 relative">
                <img 
                  src={`${B}2021/01/Depositphotos_6881336_xl-2015-450x281.jpg`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                  alt="Fuel tanks" 
                />
              </div>
              <Link href="/financial">
                <h2 className="font-extrabold text-[18px] leading-snug text-gray-900 hover:text-[#27a35e] transition-colors duration-200">
                  Bottleneck At Chinese Port Cause Trouble For Oil Shipping
                </h2>
              </Link>
              <Cat name="Stocks" date="Jan 11, 2021" />
              <p className="text-[13px] text-gray-500 mt-2.5 leading-relaxed font-normal">
                To understand the new politics stance and other pro nationals of recent cycles, we should look to coastal hubs...
              </p>
            </article>
            
            <div className="border-t border-gray-150 my-2"></div>
            
            {/* List articles */}
            <div className="flex flex-col gap-4 py-2">
              {[
                { img: `${B}2021/01/Depositphotos_32435379_xl-2015-1-300x199.jpg`, t: "3 Moves to Make If the Stock Market Plummets", cat: "Markets", d: "Jan 11, 2021" },
                { img: `${B}2021/01/Depositphotos_19915825_xl-2015-1-300x300.jpg`, t: "Town Helping Business Owners With Funds", cat: "Funds", d: "Jan 9, 2021" },
                { img: `${B}2021/01/Depositphotos_1011524_xl-2015-1-300x200.jpg`, t: "GOP Leaders Fight Biden Over COVID-19 Funds", cat: "Funds", d: "Jan 4, 2021" },
                { img: `${B}2021/01/Depositphotos_433967254_xl-2015-1-300x200.jpg`, t: "Paytm Aims To Raise $1.6 Billion With Fresh Shares in IPO", cat: "Stocks", d: "Jan 3, 2021" },
                { img: `${B}2021/01/Depositphotos_192067810_xl-2015-1-300x200.jpg`, t: "Crypto Miner Hive Blockchain to List Shares on Nasdaq", cat: "Stocks", d: "Jan 2, 2021" },
                { img: `${B}2021/01/jingming-pan-iYsrkq5qq0Q-unsplash-300x200.jpg`, t: "Gold Set For Worst Week Since March 2020 After Hawkish", cat: "Stocks", d: "Jan 1, 2021" },
              ].map((a, i) => (
                <article key={i} className="flex gap-4 group/item">
                  <div className="w-[85px] h-[60px] flex-shrink-0 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" 
                      alt="" 
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="/financial">
                      <h4 className={`font-bold text-[13px] leading-snug text-gray-900 transition-colors duration-200 ${HOVER_CLASS[a.cat]}`}>
                        {a.t}
                      </h4>
                    </Link>
                    <span className="text-[10px] text-gray-400 mt-1 block">{a.d}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* COLUMN 2: G7 FEATURED */}
          <div className="flex flex-col">
            <div className="h-[36px] mb-5 border-b border-gray-100 hidden lg:block"></div>
            
            <article className="group mb-6 flex flex-col">
              <div className="overflow-hidden bg-gray-100 aspect-[16/11] mb-4 relative">
                <img 
                  src={`${B}2021/01/Depositphotos_235278760_xl-2015-4-768x526.jpg`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                  alt="G7" 
                />
              </div>
              <Link href="/financial">
                <h2 className="font-extrabold text-[21px] leading-snug text-gray-900 hover:text-[#1a6aa8] transition-colors duration-200">
                  G7 Climate Finance Initiative Will Struggle Against China's Belt and Road Project
                </h2>
              </Link>
              <Cat name="Markets" date="Jan 14, 2021" />
              <p className="text-[13px] text-gray-500 mt-3 leading-relaxed">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the unified movement of digital infrastructure initiatives.
              </p>
            </article>

            <div className="border-t border-gray-150 my-3"></div>

            {/* List articles with medium images */}
            <div className="flex flex-col gap-6 py-2">
              {[
                { img: `${B}2021/01/Depositphotos_8712051_xl-2015-1-450x315.jpg`, t: "Gold Prices Bounce Ahead of Fed Policy Release", cat: "Stocks", d: "Jan 12, 2021" },
                { img: `${B}2021/01/Depositphotos_173034712_xl-2015-1-450x253.jpg`, t: "There's More To This Market Than Bitcoin", cat: "Markets", d: "Jan 11, 2021" },
              ].map((a, i) => (
                <article key={i} className="flex gap-4 group/item">
                  <div className="w-[125px] h-[85px] flex-shrink-0 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" 
                      alt="" 
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="/financial">
                      <h3 className={`font-bold text-[14.5px] leading-snug text-gray-900 transition-colors duration-200 ${HOVER_CLASS[a.cat]}`}>
                        {a.t}
                      </h3>
                    </Link>
                    <Cat name={a.cat} date={a.d} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* COLUMN 3: AD + INVESTMENTS */}
          <div className="flex flex-col lg:col-span-1 md:col-span-2">
            {/* 300x250 Desktop Ad */}
            <div className="w-full flex justify-center mb-6 bg-gray-50 border border-gray-100 p-2 text-center select-none">
              <a href="#" className="block overflow-hidden relative">
                <img 
                  src={`${B}2021/06/300x250-banner-ad-001@2x.jpg`} 
                  alt="Advertisement" 
                  className="max-w-full h-auto object-contain mx-auto"
                />
              </a>
            </div>

            <SecHead title="Investments" color="#e07b1a" />

            <article className="group mb-5 flex flex-col">
              <div className="overflow-hidden bg-gray-100 aspect-[16/10] mb-3.5 relative">
                <img 
                  src={`${B}2021/01/Depositphotos_162800718_xl-2015-1-450x253.jpg`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                  alt="Chain Zone" 
                />
              </div>
              <Link href="/financial">
                <h2 className="font-extrabold text-[16px] leading-snug text-gray-900 hover:text-[#e07b1a] transition-colors duration-200">
                  Cainiao Partners With Government To Help It Become a 'Smart Supply Chain Zone'
                </h2>
              </Link>
              <Cat name="Investments" date="Jan 1, 2021" />
              <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">
                To understand the new logistics trends across central distribution grids, we inspect modern supply chain parameters...
              </p>
            </article>

            <div className="border-t border-gray-150 my-2"></div>

            {/* List articles (including video formats and scores) */}
            <div className="flex flex-col gap-4 py-2">
              {[
                { 
                  img: `${B}2021/01/pexels-michael-steinberg-321463-300x200.jpg`, 
                  t: "Troubled Gold Miner Sold Stake For 75% Less", 
                  cat: "Investments", 
                  d: "Jan 1, 2021",
                  isVideo: true 
                },
                { 
                  img: `${B}2021/01/pexels-tom-fisk-2231744-1-300x200.jpg`, 
                  t: "IPO: Up to 10% of Issue Size to be Reserved", 
                  cat: "Investments", 
                  d: "Jan 1, 2021" 
                },
                { 
                  img: `${B}2021/01/executium-5z36YztTtM-unsplash.jpg`, 
                  t: "Hedge Funds Expected to Hold 7% of Assets in Crypto Within Five Years", 
                  cat: "Investments", 
                  d: "Jan 1, 2021" 
                },
              ].map((a, i) => (
                <article key={i} className="flex gap-4 group/item">
                  <div className="w-[85px] h-[60px] flex-shrink-0 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" 
                      alt="" 
                    />
                    {a.isVideo && (
                      <span className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white fill-current" />
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <Link href="/financial">
                      <h4 className={`font-bold text-[13px] leading-snug text-gray-900 transition-colors duration-200 ${HOVER_CLASS[a.cat]}`}>
                        {a.t}
                      </h4>
                    </Link>
                    <span className="text-[10px] text-gray-400 mt-1 block">{a.d}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION: ECONOMY INSIGHTS (DARK BAR SECTION) ── */}
        <section className="bg-[#0e1927] text-white py-12 px-8 mb-12 -mx-6 md:-mx-8 lg:-mx-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="border-b border-[#1a6aa8] pb-3 mb-8 flex items-center justify-between">
              <h4 className="font-extrabold text-[15px] uppercase tracking-widest text-white">Economy Insights</h4>
              <Link href="/financial" className="text-[12px] font-semibold text-gray-400 hover:text-white transition-colors">
                View All Insights
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: `${B}2021/03/Depositphotos_234586970_xl-2015-1-450x275.jpg`, t: "Top UK Stocks to Watch: Capita Shares Rise as it Unveils", cat: "Investments", d: "Jan 15, 2021" },
                { img: `${B}2021/01/Depositphotos_61584077_xl-2015-1-450x300.jpg`, t: "Digital Euro Might Suck Away 8% of Banks' Deposits", cat: "Funds", d: "Jan 12, 2021", rating: "8.5" },
                { img: `${B}2021/01/Depositphotos_13662166_xl-2015-3-450x295.jpg`, t: "Oil Gains on OPEC Outlook That U.S. Growth Will Slow", cat: "Funds", d: "Jan 11, 2021" },
                { img: `${B}2021/01/Depositphotos_469345962_xl-2015-1-450x315.jpg`, t: "Post Covid, How Bitcoin Will Impact Investors?", cat: "Stocks", d: "Jan 4, 2021" },
              ].map((a, i) => (
                <article key={i} className="group flex flex-col">
                  <div className="overflow-hidden bg-[#0d1621] aspect-[16/10] mb-3.5 relative">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                      alt="" 
                    />
                    {a.rating && (
                      <span className="absolute top-2.5 left-2.5 bg-[#f59e0b] text-black font-extrabold text-[11px] px-2 py-0.5 rounded shadow">
                        ★ {a.rating}
                      </span>
                    )}
                  </div>
                  <Link href="/financial">
                    <h3 className="font-extrabold text-[13.5px] leading-snug text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                      {a.t}
                    </h3>
                  </Link>
                  <Cat name={a.cat} date={a.d} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM SECTION: NATIONAL NEWS & SIDEBAR ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: National News List Feed */}
          <div className="lg:col-span-2">
            <SecHead title="National News" color="#1a9ea8" />
            
            <div className="flex flex-col divide-y divide-gray-100">
              {bottomPosts.map((a, i) => (
                <article key={i} className="flex flex-col sm:flex-row gap-6 py-6 first:pt-0 last:pb-0 group">
                  <div className="w-full sm:w-[240px] md:w-[280px] aspect-[16/11] flex-shrink-0 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                      alt="" 
                    />
                    {a.isGallery && (
                      <span className="absolute top-3 right-3 bg-black/60 text-white p-1.5 rounded-sm"><Camera className="w-4 h-4" /></span>
                    )}
                  </div >
                  <div className="flex-1 flex flex-col justify-center">
                    <Link href="/financial">
                      <h2 className={`font-extrabold text-[18px] md:text-[20px] leading-snug text-gray-900 transition-colors duration-200 ${HOVER_CLASS[a.cat]}`}>
                        {a.t}
                      </h2>
                    </Link>
                    <Cat name={a.cat} date={a.d} />
                    <p className="text-[13.5px] text-gray-500 mt-2.5 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {!hasLoadedMore && (
              <div className="mt-10 text-center">
                <button 
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="border border-gray-300 text-gray-700 hover:text-black hover:border-black text-[12px] font-bold uppercase tracking-widest px-12 py-3.5 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoadingMore ? "Loading Posts..." : "Load More Posts"}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-9 lg:sticky lg:top-20 self-start">
            
            {/* Europe widget block */}
            <div className="flex flex-col">
              <SecHead title="Europe" color="#1a9ea8" />
              
              <article className="group mb-5 flex flex-col">
                <div className="overflow-hidden bg-gray-100 aspect-[16/10] mb-3.5 relative">
                  <img 
                    src={`${B}2021/01/Depositphotos_380045390_xl-2015-450x300.jpg`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                    alt="Europe growth" 
                  />
                </div>
                <Link href="/financial">
                  <h2 className="font-extrabold text-[16px] leading-snug text-gray-900 hover:text-[#1a6aa8] transition-colors duration-200">
                    Euro Business Growth Accelerating At Its Fastest Pace Since 2019
                  </h2>
                </Link>
                <Cat name="Markets" date="Jan 16, 2021" />
              </article>

              <hr className="border-gray-150 my-2" />

              <div className="flex flex-col gap-4 py-2">
                {[
                  { img: `${B}2021/01/Depositphotos_235246358_xl-2015-1-300x200.jpg`, t: "Shipping Lines Continue to Increase Fees, Firms Face More Difficulties", d: "Jan 16, 2021" },
                  { img: `${B}2021/01/Depositphotos_419155798_xl-2015-1-450x300.jpg`, t: "Qatar Airways Helps Bring Tens of Thousands of Seafarers", d: "Jan 15, 2021" },
                  { img: `${B}2021/01/Depositphotos_205982792_xl-2015-1-450x254.jpg`, t: "DHL Completes $5M Investment in New Service Center", d: "Jan 14, 2021" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-3 group/item">
                    <div className="w-[85px] h-[60px] flex-shrink-0 overflow-hidden bg-gray-100 relative">
                      <img 
                        src={a.img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" 
                        alt="" 
                      />
                    </div>
                    <div className="flex-1">
                      <Link href="/financial">
                        <h4 className="font-bold text-[12.5px] leading-snug text-gray-900 hover:text-[#1a6aa8] transition-colors line-clamp-2">
                          {a.t}
                        </h4>
                      </Link>
                      <span className="text-[10px] text-gray-400 mt-1 block">{a.d}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* SmartMag Promo Card */}
            <div className="bg-[#f0fbf6] border border-green-150 p-7 text-center rounded-sm">
              <span className="text-[9px] font-black text-[#27a35e] uppercase tracking-widest block mb-1">Premium Platform</span>
              <h3 className="font-black text-[24px] text-gray-900 leading-tight mb-2">SMARTMAG</h3>
              <p className="text-[13px] text-gray-500 mb-5 leading-normal">
                Trusted by over 12,000 professional publishers worldwide. Re-engineer your news stream.
              </p>
              <a 
                href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
                target="_blank" 
                rel="noopener"
                className="inline-block bg-[#27a35e] text-white text-[12px] font-bold uppercase tracking-wider px-8 py-3 hover:bg-[#1f844b] transition-all duration-300 shadow-sm"
              >
                Explore Theme
              </a>
              <div className="w-full border-t border-green-100 my-6"></div>
              <img 
                src={`${B}2021/06/300x250-banner-ad-001@2x.jpg`} 
                className="w-full object-contain mx-auto" 
                alt="Ad" 
              />
            </div>

          </div>
        </div>

      </div>

      {/* ── PREMIUM WIDGET FOOTER (DARK s-dark) ── */}
      <footer className="bg-[#111111] text-white mt-16 border-t border-gray-800">
        
        {/* Upper footer containing main widgets */}
        <div className="max-w-[1280px] mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Widget 1: About */}
            <div className="flex flex-col">
              <div className="mb-5">
                <img 
                  src={`${B}2021/06/lofo-financial-small.png`} 
                  alt="SmartMag Financial" 
                  className="h-11 object-contain"
                />
              </div>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-5">
                Your source for the serious news. This demo is crafted specifically to exhibit the use of the theme as a news site. Visit our main page for more demos.
              </p>
              <span className="text-white text-[12px] font-bold mb-3 block">We're social. Connect with us:</span>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: <Facebook className="w-3.5 h-3.5" />, bg: "hover:bg-[#3b5998]" },
                  { icon: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ), bg: "hover:bg-black" },
                  { icon: <Instagram className="w-3.5 h-3.5" />, bg: "hover:bg-[#e1306c]" },
                ].map((s, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`w-8 h-8 rounded-sm bg-gray-900 border border-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-all ${s.bg}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Widget 2: Top Insights */}
            <div className="flex flex-col">
              <div className="border-b border-gray-800 pb-2.5 mb-5">
                <h5 className="font-extrabold text-[12px] uppercase tracking-widest text-white">Top Insights</h5>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { img: `${B}2021/03/Depositphotos_234586970_xl-2015-1-300x183.jpg`, t: "Top UK Stocks to Watch: Capita Shares Rise as it Unveils", d: "Jan 15, 2021" },
                  { img: `${B}2021/01/Depositphotos_61584077_xl-2015-1-300x200.jpg`, t: "Digital Euro Might Suck Away 8% of Banks' Deposits", d: "Jan 12, 2021", rating: "8.5" },
                  { img: `${B}2021/01/Depositphotos_13662166_xl-2015-3-300x197.jpg`, t: "Oil Gains on OPEC Outlook That U.S. Growth Will Slow", d: "Jan 11, 2021" },
                ].map((p, idx) => (
                  <article key={idx} className="flex gap-3 group">
                    <div className="w-[65px] h-[48px] overflow-hidden bg-gray-900 relative flex-shrink-0">
                      <img 
                        src={p.img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      {p.rating && (
                        <span className="absolute inset-0 bg-[#f59e0b]/80 text-black font-extrabold text-[9px] flex items-center justify-center">
                          ★ {p.rating}
                        </span>
                      )}
                    </div>
                    <div>
                      <Link href="/financial">
                        <h4 className="text-[12px] font-bold text-gray-200 group-hover:text-[#1a6aa8] leading-tight transition-colors line-clamp-2">
                          {p.t}
                        </h4>
                      </Link>
                      <span className="text-[10px] text-gray-500 mt-1 block">{p.d}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Widget 3: Newsletter */}
            <div className="flex flex-col">
              <div className="border-b border-gray-800 pb-2.5 mb-5">
                <h5 className="font-extrabold text-[12px] uppercase tracking-widest text-white">Get Informed</h5>
              </div>
              <div className="bg-gray-950 border border-gray-900 p-6 rounded-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 mb-4 text-[#1a6aa8]">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2">Subscribe to Updates</h3>
                <p className="text-[12.5px] text-gray-400 leading-normal mb-4">
                  Get the latest creative news from FooBar about art, design and business.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address.." 
                    required 
                    className="w-full bg-[#111111] text-white border border-gray-800 focus:border-gray-600 focus:outline-none text-[13px] px-3.5 py-2.5 rounded-sm"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-[#1a6aa8] hover:bg-[#155688] text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm transition-colors"
                  >
                    Subscribe
                  </button>
                  <label className="flex items-start gap-2.5 text-[11px] text-gray-500 cursor-pointer select-none mt-1">
                    <input type="checkbox" required className="mt-0.5" />
                    <span>Agree to the our terms and <a href="#" className="underline hover:text-white">policy</a> agreement.</span>
                  </label>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="border-t border-gray-900 bg-black/40 py-6">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[12px] text-gray-500 text-center md:text-left">
              &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" className="hover:text-white underline">ThemeSphere</a>.
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <Link href="/financial" className="hover:text-white transition-colors">Home</Link>
              <Link href="/financial" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/financial" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/financial" className="hover:text-white transition-colors">Advertise</Link>
              <Link href="/financial" className="hover:text-white transition-colors">Get In Touch</Link>
            </div>
          </div>
        </div>

      </footer>
    </main>
  );
}
