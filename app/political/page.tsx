"use client";
import PoliticalHeader from "@/components/PoliticalHeader";

const B = "https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/06/";

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

function Cat({ name, date, color = "#c0392b" }: { name?: string; date?: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 mt-1 flex-wrap">
      {name && <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color }}>{name}</span>}
      {date && <span className="text-[10px] text-gray-400">{date}</span>}
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
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
      <PoliticalHeader />

      <div className="max-w-[1200px] mx-auto px-4 pt-7 pb-12">

        {/* ── HERO GRID: 1 big left + 4 right ── */}
        <div className="grid grid-cols-12 gap-4 mb-8">

          {/* Big feature – 7 cols */}
          <article className="col-span-7 relative group cursor-pointer overflow-hidden">
            <img src={ARTICLES.hero1.img}
              className="w-full h-[490px] object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 mb-2">Politics</span>
              <h1 className="text-white font-bold text-[24px] leading-tight mb-2">
                {ARTICLES.hero1.t}
              </h1>
              <div className="flex items-center gap-3 text-gray-300 text-[11px]">
                <span>Jun 30, 2024</span><span>·</span><span>5 Mins Read</span>
              </div>
            </div>
          </article>

          {/* Right 2x2 grid – 5 cols */}
          <div className="col-span-5 grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[ARTICLES.hero2, ARTICLES.hero3].map((a, i) => (
                <article key={i} className="relative group cursor-pointer overflow-hidden">
                  <img src={a.img} className="w-full h-[235px] object-cover object-top group-hover:scale-105 transition-transform duration-500" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-yellow-400 mb-1">{a.cat}</span>
                    <h2 className="text-white font-bold text-[13px] leading-snug line-clamp-3">{a.t}</h2>
                    <p className="text-gray-300 text-[10px] mt-1">{a.d}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[ARTICLES.hero4, ARTICLES.hero5].map((a, i) => (
                <article key={i} className="relative group cursor-pointer overflow-hidden">
                  <img src={a.img} className="w-full h-[235px] object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-blue-400 mb-1">{a.cat}</span>
                    <h2 className="text-white font-bold text-[13px] leading-snug line-clamp-3">{a.t}</h2>
                    <p className="text-gray-300 text-[10px] mt-1">{a.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── POLITICS + SIDEBAR ── */}
        <div className="grid grid-cols-3 gap-7 mb-8">
          <div className="col-span-2">
            <SHead title="Politics" />
            {/* Featured article */}
            <article className="mb-5 cursor-pointer group">
              <div className="overflow-hidden mb-3">
                <img src={`${B}Depositphotos_241506218_XL-1-450x300.jpg`}
                  className="w-full h-[280px] object-cover group-hover:opacity-90 transition-opacity" alt="" />
              </div>
              <h2 className="font-bold text-[21px] leading-snug mb-1">
                Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation: Envoy
              </h2>
              <Cat date="Jun 30, 2024" />
              <p className="text-[13px] text-gray-500 mt-2 leading-relaxed line-clamp-3">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US politics…
              </p>
            </article>
            {/* 2-col sub grid */}
            <div className="grid grid-cols-2 gap-5 border-t border-gray-100 pt-4">
              {[
                { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US", d: "Jun 30, 2024" },
                { img: `${B}1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg`, t: "Morocco Allows Israeli Warship to Dock After Spain Refused", d: "Jun 30, 2024" },
                { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`, t: "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High", d: "Jun 30, 2024" },
                { img: `${B}1f62f16c278c045d5f00c5e2f528b39f-450x675.jpeg`, t: "New Government, New Opportunity To End The Hostile Environment For Refugees", d: "Jun 30, 2024" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0 cursor-pointer group">
                  <img src={a.img} className="w-[100px] h-[70px] object-cover flex-shrink-0 group-hover:opacity-90" alt="" />
                  <div>
                    <h4 className="font-bold text-[13px] leading-snug line-clamp-3 group-hover:text-gray-600">{a.t}</h4>
                    <Cat date={a.d} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-1 border-l border-gray-100 pl-7">
            <SHead title="What's Hot" />
            {[
              { img: `${B}1f62f16c278c045d5f00c5e2f528b39f-150x225.jpeg`, t: "New Government, New Opportunity To End The Hostile Environment For Refugees", d: "Jun 30, 2024" },
              { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-300x169.jpeg`, t: "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High", d: "Jun 30, 2024" },
              { img: `${B}eebef64be67aa7c0e24060147fd919dd-150x225.jpeg`, t: "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout", d: "Jun 30, 2024" },
            ].map((a, i) => (
              <article key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0 cursor-pointer">
                <img src={a.img} className="w-[72px] h-[72px] object-cover flex-shrink-0" alt="" />
                <div>
                  <h4 className="font-bold text-[12px] leading-snug hover:text-gray-600 line-clamp-3">{a.t}</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">{a.d}</p>
                </div>
              </article>
            ))}

            {/* Ad */}
            <div className="bg-gray-100 h-[250px] flex items-center justify-center my-5 text-gray-400 text-[11px] uppercase tracking-wider">Advertisement</div>

            {/* Trending text list */}
            <SHead title="Trending" />
            {[
              "Singapore Economy Expands Slower Than Expected in First Quarter",
              "Kevin Durant Pulled from Game Due to Health & Safety Protocols",
              "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
              "Trump Outraised by Nikki Haley PAC By $5M Thanks to Wall Street Donors",
            ].map((t, i) => (
              <div key={i} className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0 cursor-pointer">
                <span className="text-[26px] font-black text-gray-100 leading-none flex-shrink-0 w-7">{i + 1}</span>
                <p className="text-[12px] font-semibold leading-snug hover:text-gray-600">{t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ECONOMY: 4-col overlay grid ── */}
        <section className="mb-8 border-t-2 border-gray-100 pt-6">
          <SHead title="Economy" />
          <div className="grid grid-cols-4 gap-4">
            {[
              { img: `${B}Depositphotos_241506218_XL-1-450x300.jpg`, t: "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation" },
              { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US" },
              { img: `${B}1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg`, t: "Morocco Allows Israeli Warship to Dock After Spain Refused" },
              { img: `${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`, t: "Mount Etna Erupts Dramatically, Sending Ash 4.5 Kilometers High" },
            ].map((a, i) => (
              <article key={i} className="relative overflow-hidden group cursor-pointer">
                <img src={a.img} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h2 className="text-white font-bold text-[12px] leading-snug line-clamp-3">{a.t}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── WORLD POLITICS: 3 EQUAL COLS ── */}
        <section className="mb-8 border-t-2 border-gray-100 pt-6">
          <SHead title="World Politics" />
          <div className="grid grid-cols-3 gap-7">

            {/* Col 1: Big featured + 1 small text */}
            <div>
              <article className="mb-4 cursor-pointer group">
                <div className="overflow-hidden mb-2">
                  <img src={`${B}a4bc720a75f03680c1f888b23d010241-768x512.jpeg`}
                    className="w-full h-[210px] object-cover group-hover:opacity-90" alt="" />
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase">Europe</span>
                <h2 className="font-bold text-[16px] leading-snug mt-0.5 group-hover:text-gray-600">
                  The Far-Right is Set to Make Huge Gains in EU Elections. It Could Define the Next Five Years of European Politics
                </h2>
                <Cat date="Mar 11, 2022" />
                <p className="text-[12px] text-gray-500 mt-1.5 line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.</p>
              </article>
              <article className="flex gap-3 cursor-pointer py-3 border-t border-gray-100">
                <img src={`${B}33b9e77a3513f9a76b559386ed356758-200x300.jpeg`} className="w-[68px] h-[68px] object-cover flex-shrink-0" alt="" />
                <div>
                  <h4 className="font-bold text-[12px] leading-snug hover:text-gray-600">Kenya's Mission to Haiti Faces Scrutiny After Deadly Protests</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Mar 11, 2022</p>
                </div>
              </article>
            </div>

            {/* Col 2: 3 medium posts */}
            <div className="border-x border-gray-100 px-7 space-y-0">
              {[
                { img: `${B}e8d2562f3cd5f3d894d338921d0d4af8-450x300.jpeg`, t: "Biden v Trump: What are they thinking in Moscow & Beijing?", cat: "World", d: "Mar 11, 2022" },
                { img: `${B}a706a43bf3bf9d4560f229ff846dc83b-450x300.jpeg`, t: "Here's Who's Leading Trump Vs. Biden Election Polls", cat: "US Politics", d: "Mar 11, 2022" },
                { img: `${B}43d7b5e506539c3792a64cc8858f39f9-450x338.jpeg`, t: "Russian-Made Car Putin Gifted to Kim Uses South Korean Parts", cat: "Russia", d: "Mar 11, 2022" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0 cursor-pointer group">
                  <img src={a.img} className="w-[90px] h-[65px] object-cover flex-shrink-0 group-hover:opacity-90" alt="" />
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase">{a.cat}</span>
                    <h4 className="font-bold text-[13px] leading-snug group-hover:text-gray-600 line-clamp-2 mt-0.5">{a.t}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{a.d}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Col 3: text+image small list (image right) */}
            <div className="space-y-0">
              {[
                { img: `${B}13f451fba5175c85a63f72660d1a5d81-150x99.jpeg`, t: "Trump Outraised by Nikki Haley PAC By $5M Thanks to Wall Street Donors" },
                { img: `${B}0614cc992ea6f725abe46c5d99e5d1e8-300x139.jpeg`, t: "A Crisis of One's Own: The Politics of Trauma in Europe's Election Year" },
                { img: `${B}b020f6f089b5f9b2c0ad64ca3dc4cd41-300x225.jpeg`, t: "Celebrating Russian Art: Exhibition of Contemporary Works in the Capital" },
                { img: `${B}16f258c7845ae429e81cc0da525a25b1-300x195.jpeg`, t: "US Bid to Curb Iranian Oil Bedeviled by Economic, Election Risks" },
                { img: `${B}9541dbc15ff9e6c5fd353b43fd7b699b-300x187.jpeg`, t: "Growing Democratic Concerns Over Biden's 2024 Re-Election Bid" },
                { img: `${B}3f6333e1047405381936a317684d6748-300x188.jpeg`, t: "UAE Armed Forces Unification Anniversary is Rich in Lessons and Experiences" },
                { img: `${B}c25d934c23d0395fac94493baea06425-200x300.jpeg`, t: "The Black Lives Matter Movement Goes Beyond Black and White" },
              ].map((a, i) => (
                <article key={i} className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0 cursor-pointer group">
                  <p className="font-semibold text-[12px] leading-snug flex-1 group-hover:text-gray-600">{a.t}</p>
                  <img src={a.img} className="w-[68px] h-[50px] object-cover flex-shrink-0" alt="" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPORTS ROUNDUP: 4-col grid ── */}
        <section className="mb-8 border-t-2 border-gray-100 pt-6">
          <SHead title="Sports Roundup" />
          <div className="grid grid-cols-4 gap-5 mb-5">
            {[
              { img: `${B}4a7975c604a0b24eb2c8f24e0e231a73-450x300.jpeg`, t: "Nations with Most Olympic Medals ft United States, France, China, Germany" },
              { img: `${B}747c4a15c42e2f8899fcd528fd2314d2-450x300.jpeg`, t: "Top 5: List of Batters with Most Runs in 2024 ICC Men's T20 World Cup" },
              { img: `${B}3969089f9d8b15304fe0670adefab72a-450x300.jpeg`, t: "Gallery: Flat-Track Motorcycle Racing Is a Midsummer Night's Dream" },
              { img: `${B}2a5228c1accbbcd35190fe1f3bf0c90f-450x331.jpeg`, t: "5 Cycling Races Even More Intense Than the Tour de France" },
            ].map((a, i) => (
              <article key={i} className="cursor-pointer group">
                <div className="overflow-hidden mb-2">
                  <img src={a.img} className="w-full h-[155px] object-cover group-hover:opacity-90 transition-opacity" alt="" />
                </div>
                <h2 className="font-bold text-[13px] leading-snug line-clamp-3 group-hover:text-gray-600">{a.t}</h2>
                <p className="text-[10px] text-gray-400 mt-1">Jun 30, 2024</p>
              </article>
            ))}
          </div>
          {/* Sports text-list row */}
          <div className="grid grid-cols-4 gap-5 border-t border-gray-100 pt-4">
            {[
              "Singapore Economy Expands Slower Than Expected in First Quarter",
              "Kevin Durant Pulled from Game Due to Health & Safety Protocols",
              "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
              "Growing Democratic Concerns Over Biden's 2024 Re-Election Bid",
            ].map((t, i) => (
              <p key={i} className="text-[12px] font-semibold leading-snug hover:text-gray-600 cursor-pointer border-l-2 border-gray-200 pl-3">{t}</p>
            ))}
          </div>
        </section>

        {/* ── SCIENCE & TECH + SIDEBAR ── */}
        <section className="border-t-2 border-gray-100 pt-6 mb-8">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <SHead title="Science & Tech" />
              <article className="mb-5 cursor-pointer group">
                <div className="overflow-hidden mb-3">
                  <img src={`${B}e2ef634e41f7cc8deb0ec0ec70651166-1024x576.jpeg`}
                    className="w-full h-[270px] object-cover group-hover:opacity-90 transition-opacity" alt="" />
                </div>
                <h2 className="font-bold text-[20px] leading-snug mb-1">
                  Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High
                </h2>
                <Cat name="Science & Tech" date="Jun 30, 2024" color="#2980b9" />
                <p className="text-[13px] text-gray-500 mt-2 line-clamp-3">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.
                </p>
              </article>
              <div className="space-y-0 border-t border-gray-100 pt-4">
                {[
                  { img: `${B}Depositphotos_241506218_XL-1-450x300.jpg`, t: "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation: Envoy", d: "Jun 30, 2024" },
                  { img: `${B}a51e68eb08355feb0d951b9194080e62-450x278.jpeg`, t: "How the Middle East Became an Arena for Putin's Power Struggle with the US", d: "Jun 30, 2024" },
                  { img: `${B}1caf0937d7c1a250f47d864b049f9b79-450x253.jpeg`, t: "Morocco Allows Israeli Warship to Dock After Spain Refused", d: "Jun 30, 2024" },
                ].map((a, i) => (
                  <article key={i} className="flex gap-4 py-4 border-b border-gray-100 last:border-0 cursor-pointer group">
                    <img src={a.img} className="w-[155px] h-[105px] object-cover flex-shrink-0 group-hover:opacity-90" alt="" />
                    <div className="flex-1">
                      <h2 className="font-bold text-[15px] leading-snug group-hover:text-gray-600 line-clamp-3 mb-1">{a.t}</h2>
                      <Cat date={a.d} />
                      <p className="text-[12px] text-gray-500 mt-1.5 line-clamp-2">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified…</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-span-1 border-l border-gray-100 pl-7">
              <div className="bg-gray-100 h-[300px] flex items-center justify-center mb-5 text-gray-400 text-[11px] uppercase tracking-wider">Advertisement</div>
              <SHead title="Most Popular" />
              {[
                "New Government, New Opportunity To End The Hostile Environment For Refugees",
                "Mount Etna Erupts Dramatically, Sending ash 4.5 Kilometers High",
                "City Council Audit Trail is an Audit Fail After Disastrous Oracle ERP Rollout",
                "Beijing ready to cooperate with Doha to enhance role of Shanghai Cooperation Organisation",
                "How the Middle East Became an Arena for Putin's Power Struggle with the US",
              ].map((t, i) => (
                <div key={i} className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0 cursor-pointer">
                  <span className="text-[28px] font-black text-gray-100 leading-none w-8 flex-shrink-0">{i + 1}</span>
                  <p className="text-[12px] font-semibold leading-snug hover:text-gray-600">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111] text-white pt-10 pb-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img src="https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/09/Logo-Political-footer-1@2x.png"
              className="h-10 object-contain" alt="Political" />
          </div>
          <div className="grid grid-cols-4 gap-8 mb-8">
            {[
              { h: "Categories", links: ["Politics", "Economy", "Science & Tech", "Sports", "World"] },
              { h: "Quick Links", links: ["Home", "Features", "Contact", "Our Authors", "Privacy Policy"] },
              { h: "Follow Us", links: ["Facebook", "X (Twitter)", "Instagram"] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-[12px] uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">{col.h}</h5>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" className="text-gray-400 text-[12px] hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h5 className="font-bold text-[12px] uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Newsletter</h5>
              <input type="email" placeholder="Your email address.." className="w-full bg-gray-800 border border-gray-700 px-3 py-2 text-[12px] mb-2 outline-none text-white" />
              <button className="w-full bg-white text-black text-[12px] font-bold py-2 hover:bg-gray-200 transition-colors">Subscribe</button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-5 text-center">
            <p className="text-gray-500 text-[11px]">© 2024 SmartMag Political. All rights reserved. Powered by ThemeSphere.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
