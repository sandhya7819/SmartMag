"use client";

import PoliticalHeader from "@/components/PoliticalHeader";
import Link from "next/link";
import { Camera, Mail } from "lucide-react";

const B = "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/";

function SHead({ title, center }: { title: string; center?: boolean }) {
  return (
    <div className={`mb-6 ${center ? "text-center" : ""}`}>
      <div className="border-b border-gray-200 relative">
        <span className="inline-block font-extrabold text-[12.5px] uppercase tracking-wider text-gray-900 border-b-[2.5px] border-black pb-2.5 -mb-[1.5px] font-sans">
          {title}
        </span>
      </div>
    </div>
  );
}

function Cat({ name, date, color = "#c0392b" }: { name?: string; date?: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 mt-1.5 flex-wrap text-[10.5px] font-bold tracking-wide uppercase font-sans">
      {name && (
        <span style={{ color }}>
          {name}
        </span>
      )}
      {name && date && <span className="text-gray-300">—</span>}
      {date && <span className="text-gray-400 font-medium normal-case">{date}</span>}
    </div>
  );
}

const ARTICLES = {
  hero1: { img: `${B}8ad0f0d0ec802e746210ad584fda95a7-768x576.jpeg`, t: "New Government, New Opportunity To End The Hostile Environment For Refugees", cat: "Politics", d: "Jun 30, 2024" },
  hero2: { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`, t: "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High", cat: "Science & Tech", d: "Jun 30, 2024" },
  hero3: { img: `${B}eebef64be67aa7c0e24060147fd919dd-200x300.jpeg`, t: "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout", cat: "Economy", d: "Jun 30, 2024" },
  hero4: { img: `${B}Depositphotos_241506218_XL-1-450x300.jpg`, t: "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation", cat: "Politics", d: "Jun 30, 2024" },
  hero5: { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US", cat: "Politics", d: "Jun 30, 2024" },
};

export default function PoliticalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased selection:bg-[#c0392b] selection:text-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <PoliticalHeader />

      <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-12">

        {/* ── HERO GRID SECTION (1 Large Left, 4 Right Cards) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">

          {/* Big Featured Story (7 Cols) */}
          <article className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-sm shadow-sm bg-black aspect-[4/3] lg:h-[490px]">
            <img 
              src={ARTICLES.hero1.img}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 group-hover:opacity-85" 
              alt="Refugees Environment" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block text-[9.5px] font-black uppercase tracking-widest bg-[#c0392b] text-white px-2 py-0.5 mb-3 font-sans rounded-sm">
                Politics
              </span>
              <Link href="/political">
                <h1 
                  className="text-white font-bold text-[24px] md:text-[32px] leading-tight hover:text-red-300 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                >
                  {ARTICLES.hero1.t}
                </h1>
              </Link>
              <div className="flex items-center gap-3 text-gray-300 text-[10.5px] mt-3.5 font-sans font-bold uppercase tracking-wider">
                <span>Jun 30, 2024</span>
                <span>·</span>
                <span>5 Mins Read</span>
              </div>
            </div>
          </article>

          {/* Right Cards Layout (5 Cols) */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-5">
            {/* Top row cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { data: ARTICLES.hero2, color: "text-blue-400" },
                { data: ARTICLES.hero3, color: "text-green-400" }
              ].map((a, i) => (
                <article key={i} className="relative group cursor-pointer overflow-hidden rounded-sm shadow-sm bg-black aspect-[4/3] lg:h-[235px]">
                  <img 
                    src={a.data.img} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103 group-hover:opacity-80" 
                    alt="" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`inline-block text-[9px] font-black uppercase tracking-widest ${a.color} mb-1.5 font-sans`}>
                      {a.data.cat}
                    </span>
                    <Link href="/political">
                      <h2 
                        className="text-white font-bold text-[13.5px] leading-snug line-clamp-3 hover:text-gray-200 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.data.t}
                      </h2>
                    </Link>
                    <p className="text-gray-400 text-[10px] mt-1 font-sans">{a.data.d}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom row cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { data: ARTICLES.hero4, color: "text-[#c0392b]" },
                { data: ARTICLES.hero5, color: "text-[#c0392b]" }
              ].map((a, i) => (
                <article key={i} className="relative group cursor-pointer overflow-hidden rounded-sm shadow-sm bg-black aspect-[4/3] lg:h-[235px]">
                  <img 
                    src={a.data.img} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 group-hover:opacity-80" 
                    alt="" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`inline-block text-[9px] font-black uppercase tracking-widest ${a.color} mb-1.5 font-sans`}>
                      {a.data.cat}
                    </span>
                    <Link href="/political">
                      <h2 
                        className="text-white font-bold text-[13.5px] leading-snug line-clamp-3 hover:text-gray-200 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.data.t}
                      </h2>
                    </Link>
                    <p className="text-gray-400 text-[10px] mt-1 font-sans">{a.data.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── POLITICS & SIDEBAR (2/3 vs 1/3) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 border-t border-gray-150 pt-8">
          
          {/* Main Politics Feed */}
          <div className="lg:col-span-2">
            <SHead title="Politics" />
            
            {/* Main Featured Politics Article */}
            <article className="mb-6 cursor-pointer group flex flex-col">
              <div className="overflow-hidden bg-gray-100 aspect-[16/9] mb-4 relative rounded-sm shadow-sm">
                <img 
                  src={`${B}Depositphotos_241506218_XL-1-450x300.jpg`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" 
                  alt="Shanghai Cooperation" 
                />
              </div>
              <Link href="/political">
                <h2 
                  className="font-bold text-[22px] md:text-[26px] leading-snug text-gray-900 hover:text-[#c0392b] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                >
                  Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation: Envoy
                </h2>
              </Link>
              <Cat date="Jun 30, 2024" />
              <p className="text-[13.5px] text-gray-500 mt-2.5 leading-relaxed font-normal">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US politics...
              </p>
            </article>

            {/* Politics list (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-5">
              {[
                { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US", d: "Jun 30, 2024" },
                { img: `${B}1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg`, t: "Morocco Allows Israeli Warship to Dock After Spain Refused", d: "Jun 30, 2024" },
                { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`, t: "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High", d: "Jun 30, 2024" },
                { img: `${B}1f62f16c278c045d5f00c5e2f528b39f-450x675.jpeg`, t: "New Government, New Opportunity To End The Hostile Environment For Refugees", d: "Jun 30, 2024" },
              ].map((a, i) => (
                <article key={i} className="flex gap-4 py-3 border-b border-gray-100 last:border-0 cursor-pointer group">
                  <div className="w-[100px] h-[70px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm shadow-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt="" 
                    />
                  </div>
                  <div>
                    <Link href="/political">
                      <h4 
                        className="font-bold text-[13.5px] leading-snug text-gray-900 hover:text-[#c0392b] transition-colors line-clamp-3"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.t}
                      </h4>
                    </Link>
                    <Cat date={a.d} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar 1 */}
          <div className="lg:col-span-1 lg:sticky lg:top-[72px] self-start space-y-8 lg:pl-4">
            
            <div>
              <SHead title="What's Hot" />
              <div className="flex flex-col divide-y divide-gray-100 gap-4">
                {[
                  { img: `${B}1f62f16c278c045d5f00c5e2f528b39f-150x225.jpeg`, t: "New Government, New Opportunity To End The Hostile Environment For Refugees", d: "Jun 30, 2024" },
                  { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-300x169.jpeg`, t: "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High", d: "Jun 30, 2024" },
                  { img: `${B}eebef64be67aa7c0e24060147fd919dd-150x225.jpeg`, t: "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout", d: "Jun 30, 2024" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-3.5 pt-4 first:pt-0 cursor-pointer group">
                    <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm">
                      <img 
                        src={a.img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt="" 
                      />
                    </div>
                    <div>
                      <Link href="/political">
                        <h4 
                          className="font-bold text-[12px] leading-snug text-gray-900 hover:text-[#c0392b] transition-colors line-clamp-3"
                          style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                        >
                          {a.t}
                        </h4>
                      </Link>
                      <p className="text-[10px] text-gray-400 mt-1 font-sans">{a.d}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Desktop Sidebar Ad */}
            <div className="w-full flex justify-center bg-gray-50 border border-gray-150 py-16 text-center rounded-sm select-none">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Advertisement
              </span>
            </div>

            {/* Trending Numbers List */}
            <div>
              <SHead title="Trending" />
              <div className="flex flex-col divide-y divide-gray-100 gap-3.5">
                {[
                  "Singapore Economy Expands Slower Than Expected in First Quarter",
                  "Kevin Durant Pulled from Game Due to Health & Safety Protocols",
                  "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
                  "Trump Outraised by Nikki Haley PAC By $5M Thanks to Wall Street Donors",
                ].map((t, i) => (
                  <div key={i} className="flex gap-4 pt-3.5 first:pt-0 cursor-pointer group items-start">
                    <span className="text-[28px] font-black text-gray-150 leading-none flex-shrink-0 w-8 select-none font-sans group-hover:text-[#c0392b] transition-colors">
                      {i + 1}
                    </span>
                    <Link href="/political">
                      <p 
                        className="text-[12.5px] font-bold leading-snug text-gray-800 hover:text-[#c0392b] transition-colors"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {t}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── ECONOMY OVERLAY GRID (4 COLUMNS) ── */}
        <section className="mb-10 border-t border-gray-150 pt-8">
          <SHead title="Economy" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: `${B}Depositphotos_241506218_XL-1-450x300.jpg`, t: "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation" },
              { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US" },
              { img: `${B}1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg`, t: "Morocco Allows Israeli Warship to Dock After Spain Refused" },
              { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`, t: "Mount Etna Erupts Dramatically, Sending Ash 4.5 Kilometers High" },
            ].map((a, i) => (
              <article key={i} className="relative overflow-hidden group cursor-pointer aspect-[16/11] rounded-sm shadow-sm bg-black">
                <img 
                  src={a.img} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-75" 
                  alt="" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Link href="/political">
                    <h2 
                      className="text-white font-bold text-[12.5px] leading-snug line-clamp-3 group-hover:text-red-200 transition-colors"
                      style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                    >
                      {a.t}
                    </h2>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── WORLD POLITICS (3 EQUAL COLUMNS) ── */}
        <section className="mb-10 border-t border-gray-150 pt-8">
          <SHead title="World Politics" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1: Featured + 1 small list */}
            <div className="flex flex-col">
              <article className="mb-5 cursor-pointer group flex flex-col">
                <div className="overflow-hidden bg-gray-100 aspect-[16/11] mb-3 relative rounded-sm shadow-sm">
                  <img 
                    src={`${B}a4bc720a75f03680c1f888b23d010241-768x512.jpeg`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102" 
                    alt="" 
                  />
                </div>
                <span className="text-[9.5px] font-black text-blue-600 uppercase tracking-widest font-sans">Europe</span>
                <Link href="/political">
                  <h2 
                    className="font-bold text-[16px] leading-snug mt-1 group-hover:text-[#c0392b] transition-colors"
                    style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                  >
                    The Far-Right is Set to Make Huge Gains in EU Elections. It Could Define the Next Five Years of European Politics
                  </h2>
                </Link>
                <Cat date="Mar 11, 2022" />
                <p className="text-[12.5px] text-gray-500 mt-2.5 leading-relaxed">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.
                </p>
              </article>
              
              <article className="flex gap-3.5 cursor-pointer py-4 border-t border-gray-100 group">
                <div className="w-[68px] h-[68px] overflow-hidden bg-gray-100 relative rounded-sm flex-shrink-0">
                  <img src={`${B}33b9e77a3513f9a76b559386ed356758-200x300.jpeg`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
                </div>
                <div>
                  <Link href="/political">
                    <h4 
                      className="font-bold text-[12.5px] leading-snug text-gray-900 group-hover:text-[#c0392b] transition-colors line-clamp-3"
                      style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                    >
                      Kenya's Mission to Haiti Faces Scrutiny After Deadly Protests
                    </h4>
                  </Link>
                  <p className="text-[10px] text-gray-400 mt-1 font-sans">Mar 11, 2022</p>
                </div>
              </article>
            </div>

            {/* Column 2: 3 Medium list posts */}
            <div className="border-x border-gray-100 px-0 md:px-7 flex flex-col divide-y divide-gray-100 gap-4">
              {[
                { img: `${B}e8d2562f3cd5f3d894d338921d0d4af8-450x300.jpeg`, t: "Biden v Trump: What are they thinking in Moscow & Beijing?", cat: "World", d: "Mar 11, 2022" },
                { img: `${B}a706a43bf3bf9d4560f229ff846dc83b-450x300.jpeg`, t: "Here's Who's Leading Trump Vs. Biden Election Polls", cat: "US Politics", d: "Mar 11, 2022" },
                { img: `${B}43d7b5e506539c3792a64cc8858f39f9-450x338.jpeg`, t: "Russian-Made Car Putin Gifted to Kim Uses South Korean Parts", cat: "Russia", d: "Mar 11, 2022" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3.5 pt-4 first:pt-0 cursor-pointer group">
                  <div className="w-[90px] h-[65px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm">
                    <img 
                      src={a.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt="" 
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-wide font-sans">{a.cat}</span>
                    <Link href="/political">
                      <h4 
                        className="font-bold text-[13px] leading-snug text-gray-900 group-hover:text-[#c0392b] transition-colors line-clamp-2 mt-0.5"
                        style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                      >
                        {a.t}
                      </h4>
                    </Link>
                    <p className="text-[10px] text-gray-400 mt-1 font-sans">{a.d}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Column 3: Horizontal small list items (image right) */}
            <div className="flex flex-col divide-y divide-gray-100 gap-3.5">
              {[
                { img: `${B}13f451fba5175c85a63f72660d1a5d81-150x99.jpeg`, t: "Trump Outraised by Nikki Haley PAC By $5M Thanks to Wall Street Donors" },
                { img: `${B}0614cc992ea6f725abe46c5d99e5d1e8-300x139.jpeg`, t: "A Crisis of One's Own: The Politics of Trauma in Europe's Election Year" },
                { img: `${B}b020f6f089b5f9b2c0ad64ca3dc4cd41-300x225.jpeg`, t: "Celebrating Russian Art: Exhibition of Contemporary Works in the Capital" },
                { img: `${B}16f258c7845ae429e81cc0da525a25b1-300x195.jpeg`, t: "US Bid to Curb Iranian Oil Bedeviled by Economic, Election Risks" },
                { img: `${B}9541dbc15ff9e6c5fd353b43fd7b699b-300x187.jpeg`, t: "Growing Democratic Concerns Over Biden's 2024 Re-Election Bid" },
                { img: `${B}3f6333e1047405381936a317684d6748-300x188.jpeg`, t: "UAE Armed Forces Unification Anniversary is Rich in Lessons and Experiences" },
                { img: `${B}c25d934c23d0395fac94493baea06425-200x300.jpeg`, t: "The Black Lives Matter Movement Goes Beyond Black and White" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3.5 pt-3.5 first:pt-0 cursor-pointer group items-center justify-between">
                  <Link href="/political">
                    <p 
                      className="font-bold text-[12.5px] leading-snug text-gray-900 group-hover:text-[#c0392b] transition-colors flex-1"
                      style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                    >
                      {a.t}
                    </p>
                  </Link>
                  <div className="w-[62px] h-[45px] overflow-hidden bg-gray-100 relative rounded-sm flex-shrink-0 ml-3">
                    <img src={a.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPORTS ROUNDUP (4-COLUMN GRID + 4-COLUMN FOOTER LINKS) ── */}
        <section className="mb-10 border-t border-gray-150 pt-8">
          <SHead title="Sports Roundup" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
            {[
              { img: `${B}4a7975c604a0b24eb2c8f24e0e231a73-450x300.jpeg`, t: "Nations with Most Olympic Medals ft United States, France, China, Germany" },
              { img: `${B}747c4a15c42e2f8899fcd528fd2314d2-450x300.jpeg`, t: "Top 5: List of Batters with Most Runs in 2024 ICC Men's T20 World Cup" },
              { img: `${B}3969089f9d8b15304fe0670adefab72a-450x300.jpeg`, t: "Gallery: Flat-Track Motorcycle Racing Is a Midsummer Night's Dream" },
              { img: `${B}2a5228c1accbbcd35190fe1f3bf0c90f-450x331.jpeg`, t: "5 Cycling Races Even More Intense Than the Tour de France" },
            ].map((a, i) => (
              <article key={i} className="cursor-pointer group flex flex-col">
                <div className="overflow-hidden bg-gray-100 aspect-[3/2] mb-3 relative rounded-sm shadow-sm">
                  <img 
                    src={a.img} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103" 
                    alt="" 
                  />
                </div>
                <Link href="/political">
                  <h2 
                    className="font-bold text-[13.5px] leading-snug text-gray-900 group-hover:text-[#c0392b] transition-colors line-clamp-3"
                    style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                  >
                    {a.t}
                  </h2>
                </Link>
                <p className="text-[10px] text-gray-400 mt-1.5 font-sans">Jun 30, 2024</p>
              </article>
            ))}
          </div>

          {/* Sports text row links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 border-t border-gray-150 pt-5">
            {[
              "Singapore Economy Expands Slower Than Expected in First Quarter",
              "Kevin Durant Pulled from Game Due to Health & Safety Protocols",
              "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
              "Growing Democratic Concerns Over Biden's 2024 Re-Election Bid",
            ].map((t, i) => (
              <Link 
                key={i} 
                href="/political"
                className="text-[12.5px] font-bold leading-snug text-gray-800 hover:text-[#c0392b] cursor-pointer border-l-2 border-gray-300 pl-3.5 block transition-colors duration-200"
                style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
              >
                {t}
              </Link>
            ))}
          </div>
        </section>

        {/* ── SCIENCE & TECH + SIDEBAR ── */}
        <section className="border-t border-gray-150 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main column: Featured + list */}
            <div className="lg:col-span-2">
              <SHead title="Science &amp; Tech" />
              
              <article className="mb-6 cursor-pointer group flex flex-col">
                <div className="overflow-hidden bg-gray-100 aspect-[16/9] mb-4 relative rounded-sm shadow-sm">
                  <img 
                    src={`${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" 
                    alt="Mount Etna" 
                  />
                </div>
                <Link href="/political">
                  <h3 
                    className="font-bold text-[22px] md:text-[25px] leading-snug text-gray-900 hover:text-[#c0392b] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                  >
                    Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High
                  </h3>
                </Link>
                <Cat name="Science & Tech" date="Jun 30, 2024" color="#2980b9" />
                <p className="text-[13.5px] text-gray-500 mt-2.5 leading-relaxed font-normal">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.
                </p>
              </article>

              <div className="flex flex-col divide-y divide-gray-100 gap-5 border-t border-gray-100 pt-5">
                {[
                  { img: `${B}Depositphotos_241506218_XL-1-450x300.jpg`, t: "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation: Envoy", d: "Jun 30, 2024" },
                  { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US", d: "Jun 30, 2024" },
                  { img: `${B}1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg`, t: "Morocco Allows Israeli Warship to Dock After Spain Refused", d: "Jun 30, 2024" },
                ].map((a, i) => (
                  <article key={i} className="flex flex-col sm:flex-row gap-5 pt-5 first:pt-0 group cursor-pointer">
                    <div className="w-full sm:w-[155px] h-[105px] flex-shrink-0 overflow-hidden bg-gray-100 relative rounded-sm shadow-sm">
                      <img 
                        src={a.img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                        alt="" 
                      />
                    </div>
                    <div className="flex-1">
                      <Link href="/political">
                        <h2 
                          className="font-bold text-[16px] leading-snug text-gray-900 group-hover:text-[#c0392b] transition-colors line-clamp-3 mb-1.5"
                          style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                        >
                          {a.t}
                        </h2>
                      </Link>
                      <Cat date={a.d} />
                      <p className="text-[12.5px] text-gray-500 mt-2 line-clamp-2">
                        To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified...
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar 2 */}
            <div className="lg:col-span-1 lg:sticky lg:top-[72px] self-start space-y-8 lg:pl-4">
              
              {/* Ad Widget */}
              <div className="w-full flex justify-center bg-gray-50 border border-gray-150 py-24 text-center rounded-sm select-none">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Advertisement
                </span>
              </div>

              {/* Most Popular */}
              <div>
                <SHead title="Most Popular" />
                <div className="flex flex-col divide-y divide-gray-100 gap-3.5">
                  {[
                    "New Government, New Opportunity To End The Hostile Environment For Refugees",
                    "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High",
                    "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout",
                    "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation",
                    "How the Middle East Became an Arena for Putin's Power Struggle with the US",
                  ].map((t, i) => (
                    <div key={i} className="flex gap-4 pt-3.5 first:pt-0 cursor-pointer group items-start">
                      <span className="text-[28px] font-black text-gray-150 leading-none w-8 flex-shrink-0 select-none font-sans group-hover:text-[#c0392b] transition-colors">
                        {i + 1}
                      </span>
                      <Link href="/political">
                        <p 
                          className="text-[12.5px] font-bold leading-snug text-gray-800 hover:text-[#c0392b] transition-colors"
                          style={{ fontFamily: "var(--font-pt-serif), Georgia, serif" }}
                        >
                          {t}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER SECTION ── */}
      <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-gray-900 mt-12">
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* Logo block */}
          <div className="flex justify-center mb-12">
            <img 
              src="https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/09/Logo-Political-footer-1@2x.png"
              className="h-10 object-contain brightness-200" 
              alt="Political Logo White" 
              width="181"
              height="32"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
            {[
              { h: "Categories", links: ["Politics", "Economy", "Science & Tech", "Sports", "World"] },
              { h: "Quick Links", links: ["Home", "Features", "Contact", "Our Authors", "Privacy Policy"] },
              { h: "Follow Us", links: ["Facebook", "X (Twitter)", "Instagram"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
                  {col.h}
                </h5>
                <ul className="space-y-2.5 font-sans">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <Link href="/political" className="text-gray-400 hover:text-white text-[12.5px] transition-colors duration-200">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter widget */}
            <div>
              <h5 className="font-bold text-[12.5px] uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
                Newsletter
              </h5>
              <p className="text-gray-400 text-[12px] mb-4 leading-normal">
                Receive top headlines and verified reports straight to your inbox daily.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 font-sans">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required 
                  className="w-full bg-[#1c1c1c] text-white border border-gray-800 focus:border-gray-600 focus:outline-none text-[12.5px] px-3.5 py-2.5 rounded-sm"
                />
                <button 
                  type="submit" 
                  className="w-full bg-white hover:bg-gray-100 text-black text-[11px] font-black uppercase tracking-wider py-2.5 rounded-sm transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[11.5px] text-center sm:text-left">
              &copy; {new Date().getFullYear()} SmartMag Political. All rights reserved. Powered by ThemeSphere.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <Link href="/political" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/political" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/political" className="hover:text-white transition-colors">Advertise</Link>
              <Link href="/political" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
