"use client";

import NewsVerifiedHeader from "@/components/NewsVerifiedHeader";
import Link from "next/link";
import { Camera, Mail } from "lucide-react";

const B = "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/";

const CC: Record<string, string> = {
  "US News": "#c0392b", 
  "World News": "#2980b9", 
  "Politics": "#8e44ad",
  "Travel & Tourism": "#27ae60", 
  "Sports": "#e67e22", 
  "Business": "#16a085",
  "Animals": "#2ecc71", 
  "Population": "#f39c12", 
  "Lifestyle": "#e91e63",
};

const HOVER_BORDER: Record<string, string> = {
  "US News": "hover:border-[#c0392b]", 
  "World News": "hover:border-[#2980b9]", 
  "Politics": "hover:border-[#8e44ad]",
  "Travel & Tourism": "hover:border-[#27ae60]", 
  "Sports": "hover:border-[#e67e22]", 
  "Business": "hover:border-[#16a085]",
  "Animals": "hover:border-[#2ecc71]", 
  "Population": "hover:border-[#f39c12]", 
  "Lifestyle": "hover:border-[#e91e63]",
};

const HOVER_TEXT: Record<string, string> = {
  "US News": "hover:text-[#c0392b]", 
  "World News": "hover:text-[#2980b9]", 
  "Politics": "hover:text-[#8e44ad]",
  "Travel & Tourism": "hover:text-[#27ae60]", 
  "Sports": "hover:text-[#e67e22]", 
  "Business": "hover:text-[#16a085]",
  "Animals": "hover:text-[#2ecc71]", 
  "Population": "hover:text-[#f39c12]", 
  "Lifestyle": "hover:text-[#e91e63]",
};

function Cat({ name, date }: { name?: string; date?: string }) {
  return (
    <div className="flex items-center gap-2 mt-1.5 flex-wrap text-[10.5px] font-bold tracking-wide uppercase font-sans">
      {name && (
        <span style={{ color: CC[name] ?? "#888" }}>
          {name}
        </span>
      )}
      {name && date && <span className="text-gray-300">—</span>}
      {date && <span className="text-gray-400 font-medium normal-case">{date}</span>}
    </div>
  );
}

function SHead({ title, center }: { title: string; center?: boolean }) {
  return (
    <div className={`mb-6 ${center ? "text-center" : ""}`}>
      <div className="border-b border-gray-150 relative">
        <span className="inline-block font-extrabold text-[12.5px] uppercase tracking-wider text-gray-900 border-b-[2.5px] border-gray-900 pb-2 -mb-[1.5px] font-sans">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function NewsVerifiedPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased selection:bg-[#e91e63] selection:text-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* Header */}
      <NewsVerifiedHeader />

      <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-12">
        
        {/* ── HERO GRID SECTION (66 / 33) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* LEFT: Featured Stories (Col-Span 2) */}
          <div className="lg:col-span-2 flex flex-col">
            
            {/* Primary featured story */}
            <article className="group mb-7 pb-6 border-b border-gray-100 flex flex-col">
              <div className="overflow-hidden bg-gray-100 aspect-[16/9] mb-4.5 relative rounded-sm shadow-sm">
                <img 
                  src={`${B}2025/01/0c3a8793a02b5558640bcefb1fb9d222-1024x576.jpeg`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" 
                  alt="Australia New Zealand New Year" 
                />
              </div>
              <Link href="/news-verified">
                <h2 
                  className="font-bold text-[25px] md:text-[30px] leading-tight text-gray-900 hover:text-[#e91e63] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                >
                  Australia, New Zealand Welcome 2025 as New Year's Celebrations Kick Off Around Globe
                </h2>
              </Link>
              <Cat name="World News" date="Jan 15, 2025" />
              <p className="text-[13.5px] text-gray-500 mt-3 leading-relaxed font-normal">
                To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement of the latest generation. Apple's Watch records exercise, tracks our moves throughout the day, assesses the amount of time...
              </p>
            </article>

            {/* Sub-featured grid (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Sub-featured Column 1 */}
              <div className="flex flex-col gap-6">
                <article className="group">
                  <div className="overflow-hidden bg-gray-100 aspect-[3/2] mb-3 relative rounded-sm shadow-sm">
                    <img 
                      src={`${B}2025/01/dd6e51c39b9121ff2cb142b163e13ade-450x300.jpeg`} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
                      alt="Mongolia Putin" 
                    />
                  </div>
                  <Link href="/news-verified">
                    <h3 
                      className="font-bold text-[17px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                    >
                      Mongolia: Putin Must be Arrested and Surrendered to the International Criminal Court
                    </h3>
                  </Link>
                  <Cat name="World News" date="Jan 14, 2025" />
                  <p className="text-[12.5px] text-gray-500 mt-2 leading-relaxed">
                    To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the...
                  </p>
                </article>

                <div className="border-t border-gray-100 pt-5">
                  <SHead title="Promoted Content" />
                  <div className="flex flex-col gap-3 font-sans">
                    {[
                      "Elon Musk Spent More than $290 Million on the 2024 Election, Year-End FEC Filings Show",
                      "European Stocks Close Higher as Earnings Ramp Up; Watches of Switzerland Down 36% in Day Trading",
                      "COVID-19 Hit The World Five Years ago. These Numbers Show its Impact",
                    ].map((title, idx) => (
                      <Link 
                        key={idx} 
                        href="/news-verified"
                        className="text-[12.5px] font-bold text-gray-800 hover:text-[#e91e63] transition-colors py-2 border-b border-dashed border-gray-150 last:border-0 last:pb-0"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-featured Column 2 (List format) */}
              <div className="md:border-l md:border-gray-100 md:pl-7 flex flex-col divide-y divide-gray-100 gap-4.5">
                {[
                  { 
                    img: `${B}2025/01/80687a008ae9d5258391da0e8b91bfde-450x300.jpeg`, 
                    t: "Rebecca P. ID'd as Female Soldier Inside Doomed Helicopter During Fatal Crash", 
                    cat: "US News", 
                    d: "Jan 13, 2025" 
                  },
                  { 
                    img: `${B}2025/01/41ee9f0edc28fe65d4e3e16fca72b38d-450x253.jpeg`, 
                    t: "Army Kicks Off 250th Anniversary Celebration at the Rose Parade", 
                    cat: "Travel & Tourism", 
                    d: "Jan 12, 2025" 
                  },
                  { 
                    img: `${B}2025/01/177c1c51e9fa6d1afdc5ee76a5915b4f-450x300.jpeg`, 
                    t: "Handball Championships: Preview, Schedule, and How to Watch in Our Complete Guide", 
                    cat: "Sports", 
                    d: "Jan 11, 2025" 
                  },
                ].map((a, i) => (
                  <article key={i} className="flex gap-4 pt-4 first:pt-0 group">
                    <div className="flex-1">
                      <Link href="/news-verified">
                        <h4 
                          className="font-bold text-[13.5px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200 line-clamp-3"
                          style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                        >
                          {a.t}
                        </h4>
                      </Link>
                      <Cat name={a.cat} date={a.d} />
                    </div>
                    <div className="w-[85px] h-[65px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm shadow-sm">
                      <img 
                        src={a.img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt="" 
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar (Col-Span 1) */}
          <div className="lg:col-span-1 lg:sticky lg:top-[72px] self-start space-y-8 lg:pl-4">
            {/* Banner Ad */}
            <div className="w-full flex justify-center bg-gray-50 border border-gray-100 p-2 text-center rounded-sm">
              <a href="#" className="block overflow-hidden relative">
                <img 
                  src={`${B}2025/01/Newsboard-Sidebar.jpg`} 
                  alt="Advertisement" 
                  className="max-w-full h-auto object-contain mx-auto"
                />
              </a>
            </div>

            {/* Sidebar featured story */}
            <article className="group">
              <div className="overflow-hidden bg-gray-100 aspect-[4/3] mb-3 relative rounded-sm shadow-sm">
                <img 
                  src={`${B}2025/01/010987e754c0f97a9720c6b3c1957fd9-450x338.jpeg`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
                  alt="Anniversary Parade" 
                />
              </div>
              <Link href="/news-verified">
                <h3 
                  className="font-bold text-[15px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                >
                  Celebrations of 70th Anniversary of Revolution With Military Parade, Pardons
                </h3>
              </Link>
              <Cat name="Politics" date="Jan 14, 2025" />
            </article>

            {/* Sidebar articles list */}
            <div className="flex flex-col divide-y divide-gray-100 gap-4">
              {[
                { img: `${B}2025/01/4e2f9d664351fcc62e2a10bc2274d6b0-150x108.jpeg`, t: "My Remarks at the 2024 Obama Foundation Democracy Forum", cat: "Politics" },
                { img: `${B}2025/01/8476c285ee53bdded0cce327bcd70a53-150x100.jpeg`, t: "Serbia PM Milos Vucevic Quits After Months of Mass Protests", cat: "Politics" },
                { img: `${B}2025/01/7d2453f277d792cd9b2a01954a7919ec-150x100.jpeg`, t: "These are 6 of the Best Desert Safaris in Riyadh Right Now", cat: "Travel & Tourism" },
                { img: `${B}2025/01/51b816bebb4694a0067bc400616c8ed2-150x128.jpeg`, t: "Real Madrid Beaten by Espanyol After Late Romero Goal", cat: "Sports" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3.5 pt-4 first:pt-0 group">
                  <div className="w-[72px] h-[54px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt="" 
                    />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-bold uppercase tracking-wider block" style={{ color: CC[a.cat] ?? "#888" }}>
                      {a.cat}
                    </span>
                    <Link href="/news-verified">
                      <h4 
                        className="font-bold text-[12px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200 mt-0.5"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.t}
                      </h4>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter widget */}
            <div className="bg-[#f9f9f9] border border-gray-150 p-6 rounded-sm text-center">
              <span className="text-[10px] font-black text-[#e91e63] uppercase tracking-wider block mb-1">Get Updates</span>
              <h3 className="font-bold text-[16px] text-gray-900 leading-tight mb-2.5">Subscribe to Updates</h3>
              <p className="text-[12px] text-gray-500 mb-4 leading-normal">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required 
                  className="w-full bg-white text-gray-900 border border-gray-200 focus:border-gray-400 focus:outline-none text-[12.5px] px-3.5 py-2.5 rounded-sm"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#e91e63] hover:bg-black text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm transition-colors duration-300"
                >
                  Subscribe
                </button>
                <label className="flex items-start gap-2 text-[10px] text-gray-400 cursor-pointer select-none text-left mt-2">
                  <input type="checkbox" required className="mt-0.5 flex-shrink-0" />
                  <span>By signing up, you agree to our terms and our <a href="#" className="underline hover:text-black">Privacy Policy</a> agreement.</span>
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* ── TRENDING ARTICLES (5-COLUMN VERTICAL GRID) ── */}
        <section className="mb-12 border-t border-gray-150 pt-10">
          <SHead title="Trending Articles" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { img: `${B}2025/01/8769f9250454da4a52c65ce2fda68bf6-450x300.jpeg`, t: "Gorilla Tech Secures Massive AI Tourism Safety Project in Thailand" },
              { img: `${B}2025/01/56da200554774f6501836d621a9d4c2e-450x299.jpeg`, t: "Egypt Tourism Revenues Soar to 4.8 Billion USD in Q1 FY 2024/25" },
              { img: `${B}2025/01/a8d1c80661e55179d13a667572cdb160-450x338.jpeg`, t: "See the Winners of The Post's 25th Annual Travel Photo Contest" },
              { img: `${B}2025/01/ab92580724d06711ef076b02fd55c735-450x338.jpeg`, t: "Infinix Zero Flip 5G: A Stylish Flip Phone with Modern Features" },
              { img: `${B}2025/01/40c5c3f1f8fc11c930aec053ab364b3e-450x563.jpeg`, t: "How Climate Risk Assessments Drive Adaptation Strategies in Rural Mongolia" },
            ].map((a, i) => (
              <article key={i} className="relative overflow-hidden group cursor-pointer aspect-[3/4] rounded-sm shadow-sm bg-gray-900">
                <img 
                  src={a.img} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-75" 
                  alt="" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Link href="/news-verified">
                    <h4 
                      className="text-white font-bold text-[13px] leading-snug line-clamp-3 group-hover:text-pink-300 transition-colors"
                      style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                    >
                      {a.t}
                    </h4>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── AROUND THE WORLD & DON'T MISS (2 COLUMNS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 border-t border-gray-150 pt-10">
          {/* Left Column: Around the World */}
          <div>
            <SHead title="Around the World" />
            <div className="flex flex-col divide-y divide-gray-100 gap-5">
              {[
                { 
                  img: `${B}2025/01/8e0396c52e581d2f44a5dbd6ba101a7a-768x349.jpeg`, 
                  t: "Loyalty to King Underlined at Rehearsal for Annual Parade", 
                  cat: "World News", 
                  d: "Jan 12, 2025" 
                },
                { 
                  img: `${B}2025/01/49121d78d0bba7d43b69ac9bd28b86e0-768x512.jpeg`, 
                  t: "As Washington Unveils Pandas, China Cracks Down on Their Biggest Fans", 
                  cat: "Animals", 
                  d: "Jan 12, 2025" 
                },
                { 
                  img: `${B}2025/01/bed116c352d4ff63620998e6704d8443-768x512.jpeg`, 
                  t: "Upgrades To Bali Airport Will Further Speed Up Tourist Security Checks", 
                  cat: "Travel & Tourism", 
                  d: "Jan 12, 2025" 
                },
              ].map((a, i) => (
                <article key={i} className="flex flex-col sm:flex-row gap-5 pt-5 first:pt-0 group">
                  <div className="w-full sm:w-[165px] h-[110px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm shadow-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                      alt="" 
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <Link href="/news-verified">
                      <h3 
                        className="font-bold text-[16px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200 line-clamp-2"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.t}
                      </h3>
                    </Link>
                    <Cat name={a.cat} date={a.d} />
                    <p className="text-[12.5px] text-gray-500 mt-2 line-clamp-2">
                      To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement...
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Don't Miss */}
          <div className="lg:border-l lg:border-gray-100 lg:pl-10">
            {/* Horizontal or Vertical Ad Banner */}
            <div className="w-full overflow-hidden bg-gray-50 border border-gray-100 rounded-sm mb-6 flex justify-center max-h-[140px] relative">
              <a href="#" className="block">
                <img 
                  src={`${B}2025/01/Tall-Woman.jpg`} 
                  className="w-full h-full object-cover object-top" 
                  alt="Advertisement" 
                />
              </a>
            </div>

            <SHead title="Don't Miss" />
            <div className="flex flex-col divide-y divide-gray-100 gap-4">
              {[
                { img: `${B}2025/01/bd69541896851acf28d6b56dc28dd555-150x100.jpeg`, t: "US Business Delegation Explores Investment Opportunities in Asia", cat: "US News" },
                { img: `${B}2025/01/ab96f9d515b5a858c198dbc23b9144f2-150x100.jpeg`, t: "Trump Signs Bill Easing Deportation of Immigrants Accused of Crimes", cat: "US News" },
                { img: `${B}2025/01/5cd849c05d18f37721bb4eae53e13d57-150x113.jpeg`, t: "Maersk Shares Jump as US Port Strike Looms, Boosting Rates", cat: "Business" },
                { img: `${B}2025/01/863980aac534e253bca8c9764b90c072-150x100.jpeg`, t: "Which Metropolitan Areas in the United States Have the Largest Populations?", cat: "Population" },
              ].map((a, i) => (
                <article key={i} className="flex gap-4 pt-4 first:pt-0 group">
                  <div className="w-[72px] h-[54px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt="" 
                    />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-bold uppercase tracking-wider block" style={{ color: CC[a.cat] ?? "#888" }}>
                      {a.cat}
                    </span>
                    <Link href="/news-verified">
                      <h4 
                        className="font-bold text-[12.5px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200 mt-0.5"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.t}
                      </h4>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── INTERNATIONAL POLITICS (3 COLUMNS: Lists, Featured, Titles) ── */}
        <section className="mb-12 border-t border-gray-150 pt-10">
          <SHead title="International Politics" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Detailed Text links */}
            <div className="flex flex-col divide-y divide-gray-100 gap-4">
              {[
                { t: "War in Ukraine: Teen's Journey from Home to Oxford University", d: "Jan 14, 2025" },
                { t: "Parliament Speaker, Foreign Minister React to EU Freezing Aid to Georgia", d: "Jan 14, 2025" },
                { t: "Record Police Officers Sacked for Misconduct in England & Wales", d: "Jan 14, 2025" },
              ].map((a, i) => (
                <article key={i} className="pt-4 first:pt-0 group">
                  <Link href="/news-verified">
                    <h3 
                      className="font-bold text-[14.5px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                    >
                      {a.t}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1.5 font-sans uppercase font-bold tracking-wider">
                    <span>{a.d}</span>
                    <span>·</span>
                    <span>5 Mins Read</span>
                  </div>
                  <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                    To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the...
                  </p>
                </article>
              ))}
            </div>

            {/* Column 2: Large Center Featured */}
            <div className="border-x border-gray-100 px-0 md:px-7">
              <article className="group flex flex-col">
                <div className="overflow-hidden bg-gray-100 aspect-[16/11] mb-3.5 relative rounded-sm shadow-sm">
                  <img 
                    src={`${B}2025/01/df1b70ae49af4e6e4f98000ab2fd86cf-768x519.jpeg`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" 
                    alt="Hungary Sanctions" 
                  />
                </div>
                <Link href="/news-verified">
                  <h3 
                    className="font-bold text-[18px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                  >
                    Hungary to Decide on Anti-Russian Sanctions Only After Talks with Trump, FM Says
                  </h3>
                </Link>
                <div className="text-[10px] text-gray-400 mt-1.5 font-sans font-bold uppercase tracking-wider">By Shane Doe · Jan 14, 2025</div>
                <p className="text-[12.5px] text-gray-500 mt-2.5 leading-relaxed">
                  To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement...
                </p>
              </article>
            </div>

            {/* Column 3: Simple Bullet Titles */}
            <div className="flex flex-col justify-between font-sans">
              {[
                "Europe 'Must Fix' Weaknesses to Compete Globally, European Commission President Says",
                "Italy's Undersecretary of State for Foreign Affairs shares Insights into Italian Policy",
                "South Korea Opens Embassy in Cuba Nearly a Year After Establishing Diplomatic Ties",
                "UN Official: Nearly 30% of Syrian Refugees Express Desire to Return Home",
                "Hostile Interviews with Opposition Media may be Politicians' Secret Weapon",
                "Claiming Global Progress For LGBTQ Rights? Complicated At Best, Dangerous At Worst",
                "Trump Pardons Imprisoned Pro-Life Activists for Abortion Clinic Protests",
                "From Georgia to Transnistria to Belarus, the Domino Theory Is Coming for Putin",
              ].map((t, i) => (
                <Link 
                  key={i} 
                  href="/news-verified"
                  className="text-[12.5px] font-bold text-gray-800 hover:text-[#e91e63] transition-colors py-2.5 border-b border-gray-100 last:border-0 leading-snug block"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRAVEL & TOURISM (5-COLUMN HORIZONTAL GRID) ── */}
        <section className="mb-12 border-t border-gray-150 pt-10">
          <SHead title="Travel &amp; Tourism" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
            {[
              { img: `${B}2025/01/9bad22eb3ddbdfed98c4bcba2c909abd-450x300.jpeg`, t: "An Underwater Volcano Off of Oregon Coast May Erupt by End of 2025", d: "Jan 14, 2025" },
              { img: `${B}2025/01/44194883d1d659ea7731ca073a2ba8f9-450x300.jpeg`, t: "Animal Activists Clash with Shoppers as they Block Meat Aisle in Protest", d: "Jan 14, 2025" },
              { img: `${B}2025/01/fb9d4a6f75ac354c24800ef3cdb7e1eb-450x299.jpeg`, t: "Thailand Uncovered: An Insider's Guide to the Best Places to Visit", d: "Jan 14, 2025" },
              { img: `${B}2025/01/8c2a3a16dee1c5ef45113ce73ad75c7d-450x282.jpeg`, t: "Royal Caribbean Announces Return of Seminar at Sea Agent Event", d: "Jan 14, 2025" },
              { img: `${B}2025/01/2f3714a51abcb3d0291bd57116a91b4f-450x338.jpeg`, t: "Review: 50 Easy Travelling Habits That Help You Live Longer", d: "Jan 14, 2025" },
            ].map((a, i) => (
              <article key={i} className="group cursor-pointer flex flex-col">
                <div className="overflow-hidden bg-gray-100 aspect-[3/2] mb-3 relative rounded-sm shadow-sm">
                  <img 
                    src={a.img} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103" 
                    alt="" 
                  />
                </div>
                <Link href="/news-verified">
                  <h4 
                    className="font-bold text-[13px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors line-clamp-3 mb-1"
                    style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                  >
                    {a.t}
                  </h4>
                </Link>
                <p className="text-[10px] text-gray-400 mt-1 font-sans">By Shane Doe · {a.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── SPORTS & MOST POPULAR (2 COLUMNS) ── */}
        <section className="border-t border-gray-150 pt-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left/Center Columns: Sports Feed */}
            <div className="lg:col-span-2">
              <SHead title="Sports" />
              <article className="group cursor-pointer mb-6">
                <div className="overflow-hidden bg-gray-100 aspect-[16/10] mb-4 relative rounded-sm shadow-sm">
                  <img 
                    src={`${B}2025/01/193b0a52a809cc0c93d85b20bcb7c6c2-768x512.jpeg`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" 
                    alt="Pakistan Australia Test" 
                  />
                </div>
                <Link href="/news-verified">
                  <h3 
                    className="font-bold text-[20px] md:text-[22px] leading-tight text-gray-900 hover:text-[#e91e63] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                  >
                    Pakistan and Australia Set to Swing the Changes for Second Test
                  </h3>
                </Link>
                <Cat name="Sports" date="Jan 14, 2025" />
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-5">
                {[
                  { img: `${B}2025/01/51b816bebb4694a0067bc400616c8ed2-450x385.jpeg`, t: "Real Madrid Beaten by Espanyol After Late Romero Goal", d: "Jan 15, 2025" },
                  { img: `${B}2025/01/177c1c51e9fa6d1afdc5ee76a5915b4f-450x300.jpeg`, t: "Handball Championships: Preview, Schedule, and How to Watch in Our Complete Guide", d: "Jan 11, 2025" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-4 group">
                    <div className="w-[90px] h-[65px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm">
                      <img 
                        src={a.img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt="" 
                      />
                    </div>
                    <div>
                      <Link href="/news-verified">
                        <h4 
                          className="font-bold text-[13px] leading-snug text-gray-900 hover:text-[#e91e63] transition-colors line-clamp-3"
                          style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                        >
                          {a.t}
                        </h4>
                      </Link>
                      <Cat name="Sports" date={a.d} />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column: Most Popular */}
            <div className="lg:col-span-1 lg:border-l lg:border-gray-100 lg:pl-10">
              <SHead title="Most Popular" />
              <div className="flex flex-col divide-y divide-gray-100">
                {[
                  { t: "Egypt Tourism Revenues Soar to 4.8 Billion USD in Q1 FY 2024/25", d: "Jan 12, 2025" },
                  { t: "China's Railways See Over 200m Passengers Since Start of Spring Festival", d: "Feb 2, 2025" },
                  { t: "Thailand Uncovered: An Insider's Guide to the Best Places to Visit", d: "Jan 14, 2025" },
                  { t: "Royal Caribbean Announces Return of Seminar at Sea Agent Event", d: "Jan 14, 2025" },
                  { t: "Infinix Zero Flip 5G: A Stylish Flip Phone with Modern Features", d: "Jan 14, 2025" },
                ].map((a, i) => (
                  <div key={i} className="py-3.5 first:pt-0 last:pb-0 group">
                    <Link href="/news-verified">
                      <p 
                        className="text-[13.5px] font-bold text-gray-800 hover:text-[#e91e63] transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.t}
                      </p>
                    </Link>
                    <p className="text-[10px] text-gray-400 mt-1 font-sans font-bold uppercase tracking-wider">{a.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── PREMIUM WIDGET FOOTER ── */}
      <footer className="bg-[#0f0f11] text-white pt-16 pb-8 border-t border-gray-900 mt-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Widget Column 1: Brand Info */}
            <div className="flex flex-col">
              <img 
                src={`${B}2025/01/logo-NewsVerified-02-01.png`} 
                className="h-8 mb-5 object-contain brightness-200 self-start" 
                alt="NewsVerified" 
              />
              <p className="text-gray-400 text-[12.5px] leading-relaxed mb-4">
                Your trusted source for verified news, world events, and in-depth reporting.
              </p>
              <p className="text-gray-500 text-[11px]">
                Providing fact-checked, reliable updates on global affairs, politics, tech, and lifestyle.
              </p>
            </div>

            {/* Widget Column 2: Categories */}
            <div>
              <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2.5 border-b border-white/10">
                Categories
              </h5>
              <ul className="space-y-2.5 font-sans">
                {["US News", "World News", "Politics", "Sports", "Travel & Tourism"].map((l, j) => (
                  <li key={j}>
                    <Link href="/news-verified" className="text-gray-400 hover:text-[#e91e63] text-[12.5px] transition-colors duration-200">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget Column 3: Quick Links */}
            <div>
              <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2.5 border-b border-white/10">
                Quick Links
              </h5>
              <ul className="space-y-2.5 font-sans">
                {["Home", "Features", "Contact", "About", "Privacy Policy"].map((l, j) => (
                  <li key={j}>
                    <Link href="/news-verified" className="text-gray-400 hover:text-[#e91e63] text-[12.5px] transition-colors duration-200">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget Column 4: Follow Us */}
            <div>
              <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2.5 border-b border-white/10">
                Follow Us
              </h5>
              <ul className="space-y-2.5 font-sans">
                {["Facebook", "X (Twitter)", "Instagram", "Threads"].map((l, j) => (
                  <li key={j}>
                    <Link href="/news-verified" className="text-gray-400 hover:text-[#e91e63] text-[12.5px] transition-colors duration-200">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[11.5px] text-center sm:text-left">
              &copy; {new Date().getFullYear()} SmartMag NewsVerified. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <Link href="/news-verified" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/news-verified" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/news-verified" className="hover:text-white transition-colors">Advertise</Link>
              <Link href="/news-verified" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
