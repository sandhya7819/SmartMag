"use client";
import NewsVerifiedHeader from "@/components/NewsVerifiedHeader";

const B = "https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/";

const CC: Record<string, string> = {
  "US News": "#c0392b", "World News": "#2980b9", "Politics": "#8e44ad",
  "Travel & Tourism": "#27ae60", "Sports": "#e67e22", "Business": "#16a085",
  "Animals": "#2ecc71", "Population": "#f39c12", "Lifestyle": "#e91e63",
};

function Cat({ name, date }: { name?: string; date?: string }) {
  return (
    <div className="flex items-center gap-2 mt-1 flex-wrap">
      {name && <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: CC[name] ?? "#888" }}>{name}</span>}
      {date && <span className="text-[10px] text-gray-400">{date}</span>}
    </div>
  );
}

function SHead({ title, center }: { title: string; center?: boolean }) {
  return (
    <div className={`mb-5 ${center ? "text-center" : ""}`}>
      <div className="border-b-2 border-gray-200">
        <span className="inline-block font-extrabold text-[13px] uppercase tracking-wider text-gray-900 border-b-[3px] border-gray-900 pb-[10px] -mb-[2px]">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function NewsVerifiedPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
      <NewsVerifiedHeader />
      <div className="max-w-[1200px] mx-auto px-4 pt-6 pb-10">

        {/* HERO: 66/33 */}
        <div className="grid grid-cols-3 gap-7 mb-8">
          <div className="col-span-2">
            <article className="mb-5">
              <img src={`${B}2025/01/0c3a8793a02b5558640bcefb1fb9d222-1024x576.jpeg`} className="w-full h-[370px] object-cover mb-3" alt="" />
              <h2 className="font-bold text-[22px] leading-tight mb-2">Australia, New Zealand Welcome 2025 as New Year's Celebrations Kick Off Around Globe</h2>
              <p className="text-[13px] text-gray-500 leading-relaxed">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement of the latest generation. Apple's Watch records exercise, tracks our moves throughout the day, assesses the amount of time…</p>
            </article>
            <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-5">
              <div>
                <article className="mb-4">
                  <img src={`${B}2025/01/dd6e51c39b9121ff2cb142b163e13ade-450x300.jpeg`} className="w-full h-[175px] object-cover mb-2" alt="" />
                  <h2 className="font-bold text-[15px] leading-snug mb-1">Mongolia: Putin Must be Arrested and Surrendered to the International Criminal Court</h2>
                  <Cat date="Jan 14, 2020" />
                  <p className="text-[12px] text-gray-500 mt-1 line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the…</p>
                </article>
                <div>
                  <SHead title="Promoted Content" />
                  {["Elon Musk Spent More than $290 Million on the 2024 Election, Year-End FEC Filings Show",
                    "European Stocks Close Higher as Earnings Ramp Up; Watches of Switzerland Down 36% in Day Trading",
                    "COVID-19 Hit The World Five Years ago. These Numbers Show its Impact",
                  ].map((t, i) => <p key={i} className="text-[12px] font-semibold py-2 border-b border-gray-100 last:border-0 cursor-pointer hover:text-gray-600">{t}</p>)}
                </div>
              </div>
              <div className="border-l border-gray-100 pl-5">
                {[
                  { img: `${B}2025/01/80687a008ae9d5258391da0e8b91bfde-450x300.jpeg`, t: "Rebecca P. ID'd as Female Soldier Inside Doomed Helicopter During Fatal Crash", cat: "US News", d: "Jan 13, 2020" },
                  { img: `${B}2025/01/41ee9f0edc28fe65d4e3e16fca72b38d-450x253.jpeg`, t: "Army Kicks Off 250th Anniversary Celebration at the Rose Parade", cat: "Travel & Tourism", d: "Jan 12, 2020" },
                  { img: `${B}2025/01/177c1c51e9fa6d1afdc5ee76a5915b4f-450x300.jpeg`, t: "Handball Championships: Preview, Schedule, and How to Watch in Our Complete Guide", cat: "Sports", d: "Jan 11, 2020" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0">
                    <div className="flex-1">
                      <h2 className="font-bold text-[13px] leading-snug mb-1 cursor-pointer hover:text-gray-600 line-clamp-3">{a.t}</h2>
                      <Cat name={a.cat} date={a.d} />
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look…</p>
                    </div>
                    <img src={a.img} className="w-[90px] h-[65px] object-cover flex-shrink-0" alt="" />
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-span-1 space-y-5">
            <a href="#" className="block">
              <img src={`${B}2025/01/Newsboard-Sidebar.jpg`} className="w-full" alt="Ad" />
            </a>
            <article>
              <img src={`${B}2025/01/010987e754c0f97a9720c6b3c1957fd9-450x338.jpeg`} className="w-full h-[190px] object-cover mb-2" alt="" />
              <h2 className="font-bold text-[15px] leading-snug cursor-pointer hover:text-gray-600">Celebrations of 70th Anniversary of Revolution With Military Parade, Pardons</h2>
            </article>
            {[
              { img: `${B}2025/01/4e2f9d664351fcc62e2a10bc2274d6b0-150x108.jpeg`, t: "My Remarks at the 2024 Obama Foundation Democracy Forum", cat: "Politics" },
              { img: `${B}2025/01/8476c285ee53bdded0cce327bcd70a53-150x100.jpeg`, t: "Serbia PM Milos Vucevic Quits After Months of Mass Protests", cat: "Politics" },
              { img: `${B}2025/01/7d2453f277d792cd9b2a01954a7919ec-150x100.jpeg`, t: "These are 6 of the Best Desert Safaris in Riyadh Right Now", cat: "Travel & Tourism" },
              { img: `${B}2025/01/51b816bebb4694a0067bc400616c8ed2-150x128.jpeg`, t: "Real Madrid Beaten by Espanyol After Late Romero Goal", cat: "Sports" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[72px] h-[54px] object-cover flex-shrink-0" alt="" />
                <div>
                  <span className="text-[10px] font-bold uppercase block" style={{ color: CC[a.cat] ?? "#888" }}>{a.cat}</span>
                  <h4 className="font-bold text-[12px] leading-snug cursor-pointer hover:text-gray-600 mt-0.5">{a.t}</h4>
                </div>
              </article>
            ))}
            <div className="border border-gray-200 p-4 text-center bg-gray-50">
              <h3 className="font-bold text-[14px] mb-3">Subscribe to Updates</h3>
              <input type="email" placeholder="Your email address.." className="w-full border border-gray-300 px-3 py-2 text-[12px] mb-2 outline-none" />
              <button className="w-full bg-gray-900 text-white text-[12px] font-bold py-2 hover:bg-black transition-colors">Subscribe</button>
              <label className="flex items-start gap-2 mt-3 text-left">
                <input type="checkbox" className="mt-0.5 flex-shrink-0" />
                <span className="text-[10px] text-gray-400">By signing up, you agree to the our terms and our <a href="#" className="underline">Privacy Policy</a> agreement.</span>
              </label>
            </div>
          </div>
        </div>

        {/* TRENDING ARTICLES */}
        <section className="mb-8">
          <SHead title="Trending Articles" />
          <div className="grid grid-cols-5 gap-3">
            {[
              { img: `${B}2025/01/8769f9250454da4a52c65ce2fda68bf6-450x300.jpeg`, t: "Gorilla Tech Secures Massive AI Tourism Safety Project in Thailand" },
              { img: `${B}2025/01/56da200554774f6501836d621a9d4c2e-450x299.jpeg`, t: "Egypt Tourism Revenues Soar to 4.8 Billion USD in Q1 FY 2024/25" },
              { img: `${B}2025/01/a8d1c80661e55179d13a667572cdb160-450x338.jpeg`, t: "See the Winners of The Post's 25th Annual Travel Photo Contest" },
              { img: `${B}2025/01/ab92580724d06711ef076b02fd55c735-450x338.jpeg`, t: "Infinix Zero Flip 5G: A Stylish Flip Phone with Modern Features" },
              { img: `${B}2025/01/40c5c3f1f8fc11c930aec053ab364b3e-450x563.jpeg`, t: "How Climate Risk Assessments Drive Adaptation Strategies in Rural Mongolia" },
            ].map((a, i) => (
              <article key={i} className="relative overflow-hidden group cursor-pointer">
                <img src={a.img} className="w-full h-[210px] object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h2 className="text-white font-bold text-[12px] leading-snug line-clamp-3">{a.t}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AROUND THE WORLD + DON'T MISS */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <SHead title="Around the World" />
            {[
              { img: `${B}2025/01/8e0396c52e581d2f44a5dbd6ba101a7a-768x349.jpeg`, t: "Loyalty to King Underlined at Rehearsal for Annual Parade", cat: "World News", d: "Jan 12, 2021" },
              { img: `${B}2025/01/49121d78d0bba7d43b69ac9bd28b86e0-768x512.jpeg`, t: "As Washington Unveils Pandas, China Cracks Down on Their Biggest Fans", cat: "Animals", d: "Jan 12, 2021" },
              { img: `${B}2025/01/bed116c352d4ff63620998e6704d8443-768x512.jpeg`, t: "Upgrades To Bali Airport Will Further Speed Up Tourist Security Checks", cat: "Travel & Tourism", d: "Jan 12, 2021" },
            ].map((a, i) => (
              <article key={i} className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[165px] h-[110px] object-cover flex-shrink-0" alt="" />
                <div className="flex-1">
                  <h2 className="font-bold text-[15px] leading-snug cursor-pointer hover:text-gray-600 line-clamp-3 mb-1">{a.t}</h2>
                  <Cat name={a.cat} date={a.d} />
                  <p className="text-[12px] text-gray-500 mt-1.5 line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement…</p>
                </div>
              </article>
            ))}
          </div>
          <div className="border-l border-gray-100 pl-8">
            <a href="#" className="block mb-5">
              <img src={`${B}2025/01/Tall-Woman.jpg`} className="w-full max-h-[340px] object-cover object-top" alt="Ad" />
            </a>
            <SHead title="Don't Miss" />
            {[
              { img: `${B}2025/01/bd69541896851acf28d6b56dc28dd555-150x100.jpeg`, t: "US Business Delegation Explores Investment Opportunities in Asia", cat: "US News" },
              { img: `${B}2025/01/ab96f9d515b5a858c198dbc23b9144f2-150x100.jpeg`, t: "Trump Signs Bill Easing Deportation of Immigrants Accused of Crimes", cat: "US News" },
              { img: `${B}2025/01/5cd849c05d18f37721bb4eae53e13d57-150x113.jpeg`, t: "Maersk Shares Jump as US Port Strike Looms, Boosting Rates", cat: "Business" },
              { img: `${B}2025/01/863980aac534e253bca8c9764b90c072-150x100.jpeg`, t: "Which Metropolitan Areas in the United States Have the Largest Populations?", cat: "Population" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0">
                <img src={a.img} className="w-[72px] h-[54px] object-cover flex-shrink-0" alt="" />
                <div>
                  <span className="text-[10px] font-bold uppercase block" style={{ color: CC[a.cat] ?? "#888" }}>{a.cat}</span>
                  <h4 className="font-bold text-[12px] leading-snug cursor-pointer hover:text-gray-600 mt-0.5">{a.t}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* INTERNATIONAL POLITICS */}
        <section className="mb-8 border-t-2 border-gray-100 pt-6">
          <SHead title="International Politics" center />
          <div className="grid grid-cols-3 gap-7">
            <div>
              {[
                { t: "War in Ukraine: Teen's Journey from Home to Oxford University", d: "Jan 14, 2021" },
                { t: "Parliament Speaker, Foreign Minister React to EU Freezing Aid to Georgia", d: "Jan 14, 2021" },
                { t: "Record Police Officers Sacked for Misconduct in England & Wales", d: "Jan 14, 2021" },
              ].map((a, i) => (
                <article key={i} className="py-3.5 border-b border-gray-100 last:border-0">
                  <h2 className="font-bold text-[14px] leading-snug cursor-pointer hover:text-gray-600 mb-1">{a.t}</h2>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span>{a.d}</span><span>·</span><span>5 Mins Read</span>
                  </div>
                  <p className="text-[12px] text-gray-500 mt-1.5">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the…</p>
                </article>
              ))}
            </div>
            <div className="border-x border-gray-100 px-7">
              <article>
                <img src={`${B}2025/01/df1b70ae49af4e6e4f98000ab2fd86cf-768x519.jpeg`} className="w-full h-[220px] object-cover mb-3" alt="" />
                <h2 className="font-bold text-[17px] leading-snug cursor-pointer hover:text-gray-600 mb-1">Hungary to Decide on Anti-Russian Sanctions Only After Talks with Trump, FM Says</h2>
                <div className="text-[10px] text-gray-400 mb-2">By Shane Doe · Jan 14, 2021</div>
                <p className="text-[13px] text-gray-500">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement…</p>
              </article>
            </div>
            <div>
              {["Europe 'Must Fix' Weaknesses to Compete Globally, European Commission President Says",
                "Italy's Undersecretary of State for Foreign Affairs shares Insights into Italian Policy",
                "South Korea Opens Embassy in Cuba Nearly a Year After Establishing Diplomatic Ties",
                "UN Official: Nearly 30% of Syrian Refugees Express Desire to Return Home",
                "Hostile Interviews with Opposition Media may be Politicians' Secret Weapon",
                "Claiming Global Progress For LGBTQ Rights? Complicated At Best, Dangerous At Worst",
                "Trump Pardons Imprisoned Pro-Life Activists for Abortion Clinic Protests",
                "From Georgia to Transnistria to Belarus, the Domino Theory Is Coming for Putin",
              ].map((t, i) => (
                <p key={i} className="text-[13px] font-semibold py-2.5 border-b border-gray-100 last:border-0 cursor-pointer hover:text-gray-500 leading-snug">{t}</p>
              ))}
            </div>
          </div>
        </section>

        {/* TRAVEL & TOURISM */}
        <section className="mb-8 border-t-2 border-gray-100 pt-6">
          <SHead title="Travel &amp; Tourism" />
          <div className="grid grid-cols-5 gap-4">
            {[
              { img: `${B}2025/01/9bad22eb3ddbdfed98c4bcba2c909abd-450x300.jpeg`, t: "An Underwater Volcano Off of Oregon Coast May Erupt by End of 2025", d: "Jan 14, 2021" },
              { img: `${B}2025/01/44194883d1d659ea7731ca073a2ba8f9-450x300.jpeg`, t: "Animal Activists Clash with Shoppers as they Block Meat Aisle in Protest", d: "Jan 14, 2021" },
              { img: `${B}2025/01/fb9d4a6f75ac354c24800ef3cdb7e1eb-450x299.jpeg`, t: "Thailand Uncovered: An Insider's Guide to the Best Places to Visit", d: "Jan 14, 2021" },
              { img: `${B}2025/01/8c2a3a16dee1c5ef45113ce73ad75c7d-450x282.jpeg`, t: "Royal Caribbean Announces Return of Seminar at Sea Agent Event", d: "Jan 14, 2021" },
              { img: `${B}2025/01/2f3714a51abcb3d0291bd57116a91b4f-450x338.jpeg`, t: "Review: 50 Easy Travelling Habits That Help You Live Longer", d: "Jan 14, 2021" },
            ].map((a, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="overflow-hidden mb-2">
                  <img src={a.img} className="w-full h-[145px] object-cover group-hover:opacity-90 transition-opacity" alt="" />
                </div>
                <h2 className="font-bold text-[13px] leading-snug line-clamp-3 mb-1">{a.t}</h2>
                <p className="text-[10px] text-gray-400">By Shane Doe · {a.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SPORTS */}
        <section className="border-t-2 border-gray-100 pt-6 mb-8">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <SHead title="Sports" />
              <article className="mb-5 group cursor-pointer">
                <div className="overflow-hidden mb-3">
                  <img src={`${B}2025/01/193b0a52a809cc0c93d85b20bcb7c6c2-768x512.jpeg`} className="w-full h-[270px] object-cover group-hover:opacity-90 transition-opacity" alt="" />
                </div>
                <h2 className="font-bold text-[19px] leading-snug mb-1">Pakistan and Australia Set to Swing the Changes for Second Test</h2>
                <Cat name="Sports" date="Jan 14, 2021" />
              </article>
              <div className="grid grid-cols-2 gap-5 border-t border-gray-100 pt-4">
                {[
                  { img: `${B}2025/01/51b816bebb4694a0067bc400616c8ed2-450x385.jpeg`, t: "Real Madrid Beaten by Espanyol After Late Romero Goal", d: "Jan 15, 2021" },
                  { img: `${B}2025/01/177c1c51e9fa6d1afdc5ee76a5915b4f-450x300.jpeg`, t: "Handball Championships: Preview, Schedule, and How to Watch in Our Complete Guide", d: "Jan 11, 2020" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-3">
                    <img src={a.img} className="w-[90px] h-[65px] object-cover flex-shrink-0" alt="" />
                    <div>
                      <h2 className="font-bold text-[13px] leading-snug line-clamp-3 cursor-pointer hover:text-gray-600">{a.t}</h2>
                      <Cat name="Sports" date={a.d} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-span-1 border-l border-gray-100 pl-7">
              <SHead title="Most Popular" />
              {[
                { t: "Egypt Tourism Revenues Soar to 4.8 Billion USD in Q1 FY 2024/25", d: "Jan 12, 2021" },
                { t: "China's Railways See Over 200m Passengers Since Start of Spring Festival", d: "Feb 2, 2025" },
                { t: "Thailand Uncovered: An Insider's Guide to the Best Places to Visit", d: "Jan 14, 2021" },
                { t: "Royal Caribbean Announces Return of Seminar at Sea Agent Event", d: "Jan 14, 2021" },
                { t: "Infinix Zero Flip 5G: A Stylish Flip Phone with Modern Features", d: "Jan 14, 2021" },
              ].map((a, i) => (
                <div key={i} className="py-2.5 border-b border-gray-100 last:border-0">
                  <p className="text-[13px] font-semibold cursor-pointer hover:text-gray-500 leading-snug">{a.t}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white pt-10 pb-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <img src={`${B}2025/01/logo-NewsVerified-02-01.png`} className="h-7 mb-4 brightness-200" alt="NewsVerified" />
              <p className="text-gray-400 text-[12px] leading-relaxed">Your trusted source for verified news, world events, and in-depth reporting.</p>
            </div>
            {[
              { h: "Categories", links: ["US News", "World News", "Politics", "Sports", "Travel & Tourism"] },
              { h: "Quick Links", links: ["Home", "Features", "Contact", "About", "Privacy Policy"] },
              { h: "Follow Us", links: ["Facebook", "X (Twitter)", "Instagram", "Threads"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-[12px] uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">{col.h}</h5>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" className="text-gray-400 text-[12px] hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-5 text-center">
            <p className="text-gray-500 text-[11px]">© 2025 SmartMag NewsVerified. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
