import SmartTimesHeader from "@/components/SmartTimesHeader";
import SmartTimesFooter from "@/components/SmartTimesFooter";
import { Play } from "lucide-react";
import Link from "next/link";

/* ─── Image assets (direct SmartTimes URLs from the original) ─── */
const IMG = {
  spacex: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/spacex-Ptd-iTdrCJM-unsplash-300x200.jpg",
  china:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/arron-choi-cMyTiCrgnbE-unsplash-300x169.jpg",
  antiwar:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/gayatri-malhotra-fhxGJj9lz-k-unsplash-1-300x200.jpg",
  nato:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/cibi-chakravarthi-WPEx2mvZg20-unsplash-300x137.jpg",
  hero:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_536809216_XL-1-1024x683.jpg",
  tank:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_61395557_XL-1-450x300.jpg",
  opinion:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_481566624_XL-1-450x300.jpg",
  bush:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_287440426_XL-1-450x304.jpg",
  bitcoin:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_373474714_XL-1-300x169.jpg",
  ukraine:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/kedar-gadge-A69UZJ5cnaQ-unsplash-11-300x200.jpg",
  europeans:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_442034052_XL-1-300x202.jpg",
  pharma: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/angelo-abear-RHyJdCu9YbU-unsplash-200x300.jpg",
  covid:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_49700347_XL-2-300x212.jpg",
  oil:    "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_286561994_XL-1-300x139.jpg",
  durant: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_527742458_XL-300x200.jpg",
  senate: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/daniel-eledut-yk9qMOst4jk-unsplash-300x200.jpg",
  oxford: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/jp-valery-BjbCnw18kpQ-unsplash-300x225.jpg",
  moto:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_375698458_xl-2015-12-450x300.jpg",
  bball:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/john-torcasio-GM4sf9ltjFE-unsplash-11-300x225.jpg",
  wisc:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/sheri-hooley-tkwfu4R1Lxk-unsplash-300x219.jpg",
  horse:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_174144472_xl-2015-11-300x200.jpg",
  rcb:    "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/6efcd9fdf4b988e8b3e8dc852e16b0f0-1-300x200.jpg",
  banner: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/TheSmartTimes-wide-middle.jpg",
};

/* ─── Reusable section heading ─── */
function SectionHead({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-0 mb-10 border-b border-gray-200">
      <h4 className="text-[13px] font-black uppercase tracking-[2px] border-b-[3px] border-black pb-[11px] pr-6 font-sans whitespace-nowrap -mb-[1px]">
        {title}
      </h4>
    </div>
  );
}

function SmallPost({ img, title, date, review }: { img: string; title: string; date?: string; review?: string }) {
  return (
    <div className="flex gap-4 group cursor-pointer items-start border-b border-gray-100 py-5 last:border-0 last:pb-0">
      <div className="flex-1 space-y-1">
        <h4 className="text-[14px] font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-3">{title}</h4>
        {date && <div className="text-[10px] text-gray-400 font-bold font-sans uppercase tracking-widest">{date}</div>}
      </div>
      <div className="relative w-[80px] h-[60px] shrink-0 overflow-hidden">
        <img src={img} className="w-full h-full object-cover" alt={title} />
        {review && (
          <div className="absolute bottom-1 right-1 bg-[#e21c23] text-white text-[9px] font-black px-1 py-0.5">{review}</div>
        )}
      </div>
    </div>
  );
}

/* ─── Text-only list post ─── */
function TextPost({ title, date }: { title: string; date: string }) {
  return (
    <div className="group cursor-pointer border-b border-gray-100 py-6 last:border-0 last:pb-0">
      <h4 className="text-[15px] font-bold leading-snug group-hover:text-red-600 transition-colors mb-2">{title}</h4>
      <div className="text-[10px] text-gray-400 font-bold font-sans uppercase tracking-widest">{date}</div>
    </div>
  );
}

export default function SmartTimesPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#e21c23] selection:text-white">
      <SmartTimesHeader />

      {/* ══ 1. TOP 4-COLUMN SNIPPET BAR ══ */}
      <section className="border-b border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {[
              { cat: "Science",  title: "SpaceX Launches Starlink Satellites on 'American Broomstick' and Lands Rocket at Sea", img: IMG.spacex },
              { cat: "Politics", title: "The China-Built Ship that Pulled a US Navy Jet Wreck from the South China Sea", img: IMG.china },
              { cat: "Europe",   title: "Anti-War Protests Intensify in World Along with Crackdown", img: IMG.antiwar },
              { cat: "World",    title: "US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers", img: IMG.nato },
            ].map((p, i) => (
              <div key={i} className={`flex gap-4 group cursor-pointer items-center py-3 ${i > 0 ? 'pl-7' : ''} ${i < 3 ? 'pr-7' : ''}`}>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-black text-[#e21c23] uppercase tracking-widest font-sans">{p.cat}</span>
                  <h4 className="text-[13px] font-bold leading-snug group-hover:text-red-700 transition-colors line-clamp-3">{p.title}</h4>
                </div>
                <div className="w-[100px] h-[75px] shrink-0 overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover" alt={p.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. MAIN 3-COLUMN CONTENT AREA ══ */}
      <section className="container mx-auto px-4 pt-14 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* ─ LEFT: large hero + 4 list posts (col-span-6) ─ */}
          <div className="lg:col-span-6 space-y-8 border-r border-gray-200 pr-10">
            {/* Hero article */}
            <div className="group cursor-pointer space-y-6">
              <div className="space-y-3">
                <h2 className="text-[38px] font-black leading-[1.05] group-hover:text-red-700 transition-colors tracking-tight">
                  EU&apos;s New Sanctions Aim to Cut Russia Off From World Bank, IMF
                </h2>
                <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 font-sans uppercase tracking-widest">
                  <span className="text-[#e21c23] font-black">Europe</span>
                  <span>·</span>
                  <span>By <strong className="text-black">John Doe</strong></span>
                  <span>· Jan 4, 2021</span>
                </div>
              </div>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={IMG.hero} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" alt="hero" />
              </div>
              <p className="text-[16px] leading-relaxed text-gray-700">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson…
              </p>
              <button className="text-[11px] font-black uppercase tracking-[2px] border border-gray-300 px-6 py-2.5 hover:bg-black hover:text-white transition-all font-sans">
                Read More
              </button>
            </div>

            <div className="border-t border-gray-200 pt-10 space-y-0">
              {[
                { img: IMG.oil,    title: "Oil Rises as Investors Look Past Possible Reserve Releases",                 excerpt: true },
                { img: IMG.durant, title: "Kevin Durant Pulled from Game Due to H&S Protocols",                         excerpt: true },
                { img: IMG.senate, title: "U.S. Senate Passes $1.5 Trillion Gov't Funding Bill with Ukraine",           excerpt: true },
                { img: IMG.oxford, title: "Oxford University Launches Covid-19 Vaccine Study on Children",              excerpt: true, audio: true },
              ].map((p, i) => (
                <div key={i} className="flex gap-5 group cursor-pointer items-start border-b border-gray-100 py-7 last:border-0 last:pb-0">
                  <div className="relative w-[140px] h-[95px] shrink-0 overflow-hidden">
                    <img src={p.img} className="w-full h-full object-cover" alt={p.title} />
                    {p.audio && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                          <Play size={11} fill="black" className="text-black" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-[16px] font-black leading-tight group-hover:text-red-600 transition-colors">{p.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                      To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley…
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─ CENTRE: grid card + opinion (col-span-3) ─ */}
          <div className="lg:col-span-3 space-y-8 border-r border-gray-200 px-8">
            {/* Featured card */}
            <div className="group cursor-pointer space-y-4">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={IMG.tank} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="tank" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[18px] font-black leading-tight group-hover:text-red-600 transition-colors">
                  Battle Analysis: Russian Tank Armada vs Ukraine
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400">
                  <span className="text-[#e21c23]">World</span><span>· Jan 4, 2021</span>
                </div>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation…
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-0">
              <TextPost title="US HY Defaults Return as Rate Inches Up to 0.5%; Forecasts" date="Jan 3, 2021" />
              <TextPost title="E.U. Leaders Consider Faster Vaccine Funds Rollouts" date="Jan 3, 2021" />
            </div>

            {/* Opinion */}
            <div className="border-t border-gray-200 pt-8 space-y-6">
              <SectionHead title="Opinion" />
              <div className="group cursor-pointer space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={IMG.opinion} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="opinion" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[17px] font-black leading-tight group-hover:text-red-600 transition-colors">
                    France&apos;s Largest Business Summit to Conclude on Mar 22
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400">
                    <span className="text-[#e21c23]">Europe</span><span>· Jan 4, 2021</span>
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley…
                </p>
              </div>
              <div className="space-y-0 border-t border-gray-200 pt-4">
                <TextPost title="AI in Basketball: Could an Algorithm Really Predict Injuries?" date="Jan 4, 2021" />
                <TextPost title="Can Cash-Strapped Barcelona Afford to Keep Messi?" date="Jan 4, 2021" />
                <TextPost title="Ricardo Ferreira Switches Soccer Allegiance to Canada" date="Jan 4, 2021" />
              </div>
            </div>
          </div>

          {/* ─ RIGHT: Just In + another card (col-span-3) ─ */}
          <div className="lg:col-span-3 space-y-0 pl-8">
            <SectionHead title="Just In" />
            <div className="space-y-0">
              {[
                { img: IMG.bitcoin,   title: "A New Asset Class? Bitcoin's Bid to Go Mainstream" },
                { img: IMG.ukraine,   title: "Review: How Hard will it be to Defend Ukraine from Russia?", review: "8.5" },
                { img: IMG.europeans, title: "Europeans are Rushing to Distance Themselves from Putin" },
                { img: IMG.pharma,    title: "German Pharmacies Will Start to Get a Big Infusion of Vaccines" },
                { img: IMG.covid,     title: "President Presses for $1.9 Trillion COVID Relief Plan 2023" },
              ].map((p, i) => (
                <div key={i} className="flex gap-3 group cursor-pointer items-start border-b border-gray-100 py-5 last:border-0 last:pb-0">
                  <div className="relative w-[80px] h-[60px] shrink-0 overflow-hidden">
                    <img src={p.img} className="w-full h-full object-cover" alt={p.title} />
                    {p.review && (
                      <div className="absolute bottom-1 right-1 bg-[#e21c23] text-white text-[9px] font-black px-1 py-0.5 font-sans">
                        {p.review}
                      </div>
                    )}
                  </div>
                  <h4 className="flex-1 text-[13px] font-black leading-tight group-hover:text-red-600 transition-colors">{p.title}</h4>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8 space-y-6">
              {/* Second card */}
              <div className="group cursor-pointer space-y-3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={IMG.bush} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="bush" />
                </div>
                <h3 className="text-[16px] font-black leading-tight group-hover:text-red-600 transition-colors">
                  Statement by President Bush on Ukraine | Bush Center
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-widest text-gray-400">
                  <span className="text-[#e21c23]">Money</span><span>· Jan 8, 2021</span>
                </div>
                <p className="text-[13px] text-gray-500 line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley…</p>
              </div>
              <div className="space-y-0 border-t border-gray-200 pt-4">
                <TextPost title="SEC Sets Clock for Delisting Chinese Companies Over US Audit" date="Jan 8, 2021" />
                <TextPost title="Europe's Central Bank Speeding Up End to Economic Stimulus" date="Jan 7, 2021" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 3. WIDE BANNER AD ══ */}
      <section className="container mx-auto px-4 py-10">
        <Link href="#">
          <img src={IMG.banner} className="w-full h-auto" alt="SmartMag Banner" />
        </Link>
      </section>

      {/* ══ 4. SPORTS SECTION ══ */}
      <section className="container mx-auto px-4 pt-10 pb-12 border-t-[3px] border-black">
        <SectionHead title="Sports" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: featured sports - text left, image right */}
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="grid grid-cols-2 gap-5 mb-6">
                <div className="space-y-3">
                  <h2 className="text-[24px] font-black leading-tight group-hover:text-red-700 transition-colors">
                    Marquez Explains Lack of Confidence During Qatar GP Race
                  </h2>
                  <div className="flex items-center gap-2 text-[11px] font-bold font-sans uppercase tracking-widest text-gray-400">
                    <span className="text-[#e21c23] font-black">Sports</span><span>· Jan 15, 2021</span>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement. Apple&apos;s Watch…
                  </p>
                  <button className="text-[11px] font-black uppercase tracking-[2px] border border-gray-300 px-5 py-2 hover:bg-black hover:text-white transition-all font-sans">Read More</button>
                </div>
                <div className="overflow-hidden">
                  <img src={IMG.moto} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" alt="sports" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              {[
                { title: "Young Teen Sucker-punches Opponent During Basketball Game", date: "Jan 15, 2021" },
                { title: "China May Start Reopening After Winter Olympics: Top Adviser", date: "Jan 15, 2021" },
                { title: "2022 NCAA Women's Hockey Tournament: Schedule & Scores", date: "Jan 14, 2021" },
              ].map((p, i) => (
                <div key={i} className="group cursor-pointer space-y-2">
                  <h4 className="text-[14px] font-bold leading-tight group-hover:text-red-600 transition-colors mb-2">{p.title}</h4>
                  <div className="text-[10px] text-gray-400 font-bold font-sans uppercase tracking-widest">{p.date}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: small sports posts */}
          <div className="space-y-0 border-l border-gray-200 pl-10 pt-0">
            {[
              { img: IMG.bball, title: "It's Time for Basketball: Spurs at Timberwolves", date: "Jan 14, 2021" },
              { img: IMG.wisc,  title: "Can Wisconsin Clinch the Big Ten West this Weekend", date: "Jan 14, 2021" },
              { img: IMG.horse, title: "Olympic Great Todd Loses Training License for Hitting Horse", date: "Jan 13, 2021" },
              { img: IMG.rcb,   title: "Royal Challengers Bangalore Announce Faf du Plessis as New Captain", date: "Jan 13, 2021" },
            ].map((p, i) => (
              <SmallPost key={i} img={p.img} title={p.title} date={p.date} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. BOTTOM 4-COLUMN CATEGORY SECTION ══ */}
      <section className="container mx-auto px-4 pt-16 pb-20 border-t-[3px] border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
          {[
            {
              title: "Travel",
              posts: [
                { title: "Dubai Live Entertainment Ban Extends to Yachts", date: "Jan 14, 2021" },
                { title: "Museum to Display More New Artists in 2021",     date: "Jan 13, 2021" },
                { title: "Dubai Tourism Song Celebrating the Festival",    date: "Jan 12, 2021" },
              ],
            },
            {
              title: "UK News",
              posts: [
                { title: "London Market Stalls Facing New Regulations",     date: "Jan 11, 2021" },
                { title: "Historic Pub in Chelsea Reopens After 2 Years",   date: "Jan 10, 2021" },
                { title: "UK High Street Seeing Unexpected Growth",         date: "Jan 9, 2021"  },
              ],
            },
            {
              title: "Science",
              posts: [
                { title: "New Study on Sleep Patterns and Productivity",    date: "Jan 8, 2021" },
                { title: "NASA's Latest Mars Images Reveal New Data",       date: "Jan 7, 2021" },
                { title: "Breakthrough in Fusion Energy Research Promises", date: "Jan 6, 2021" },
              ],
            },
            {
              title: "Economy",
              posts: [
                { title: "Global Markets React to New Interest Rates",        date: "Jan 5, 2021" },
                { title: "Rising Energy Costs Impacting Small Businesses",    date: "Jan 4, 2021" },
                { title: "Consumer Spending Hits Record High in Q1 2021",     date: "Jan 3, 2021" },
              ],
            },
          ].map((col, i) => (
            <div key={i} className={`${i > 0 ? 'pl-8' : ''}`}>
              <SectionHead title={col.title} />
              <div className="space-y-0">
                {col.posts.map((p, j) => (
                  <TextPost key={j} title={p.title} date={p.date} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SmartTimesFooter />
    </main>
  );
}
