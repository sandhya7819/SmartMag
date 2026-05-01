import VoiceDailyHeader from "@/components/VoiceDailyHeader";
import VoiceDailyFooter from "@/components/VoiceDailyFooter";
import Link from "next/link";
import { ChevronRight, Play, Mail as MailIcon, Clock, MessageSquare } from "lucide-react";

export default function VoiceDailyPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#0066cc] selection:text-white">
      <VoiceDailyHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        
        {/* Trending News Red Bar */}
        <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-1 mb-8">
          <div className="bg-[#cc0000] text-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest shrink-0">
            TRENDING NEWS
          </div>
          <div className="text-[13px] font-bold text-gray-700 truncate cursor-pointer hover:text-[#0066cc]">
            Papua New Guinea Is In a State of Emergency As Riots Kill 16 People in the Capital
          </div>
        </div>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Large Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 group cursor-pointer">
              <h2 className="text-[34px] font-black text-[#111] leading-[1.1] group-hover:text-[#0066cc] transition-colors font-serif">
                Demonstrators Call on US to Continue to Support Ukraine War Efforts Against Russia
              </h2>
              <div className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                <span className="text-[#0066cc]">Ukraine Conflict</span>
                <span>•</span>
                <span>Updated: Sep 12, 2024</span>
              </div>
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Main story"
                />
              </div>
              <p className="text-[#444] text-[15px] leading-relaxed">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson, the implications are becoming clearer as the conflict reaches a new phase...
              </p>
            </div>
          </div>

          {/* Center Column List (3 cols) */}
          <div className="lg:col-span-3 space-y-8 border-x border-gray-100 px-6">
            {[
              { cat: "ECONOMY", date: "Jan 16, 2021", title: "Digital Economy to See Exponential Growth to USD 800 bn by 2030" },
              { cat: "HEALTH", date: "Jan 15, 2021", title: "WHO Sounds Alarm on Viral Hepatitis Infections Claiming 3500 Lives Each Day" },
              { cat: "INVESTMENTS", date: "Jan 15, 2021", title: "Review: AI Tops World Economic Forum's List of Top 10 Emerging Technologies of 2024" },
              { cat: "VACCINES", date: "Jan 15, 2021", title: "Coronavirus Latest: Japan's Vaccination Rate Tops 75% As Cases Drop Drastically" },
              { cat: "POLITICS", date: "Jan 15, 2021", title: "Celebrating Russian Art: Exhibition of Contemporary Works in the Capital Moscow" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-2 pb-6 last:pb-0 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3 text-[10px] font-black tracking-widest">
                  <span className="text-[#0066cc] uppercase">{post.cat}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h4 className="text-[15px] font-bold text-[#111] leading-snug group-hover:text-[#0066cc] transition-colors">
                  {post.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Right Column Grid (3 cols) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Featured Image Box */}
            <div className="group cursor-pointer relative overflow-hidden aspect-square bg-gray-900 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110" 
                alt="Statistics"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-[18px] font-bold text-white leading-tight mb-2 group-hover:text-[#0066cc] transition-colors">
                  Car Crash Statistics: Insight Into the Latest Car Crash Fatality Stats
                </h3>
                <div className="flex items-center gap-3 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <span>John Doe</span>
                  <span>•</span>
                  <span>Feb 11, 2021</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MessageSquare size={10} /> 3</span>
                </div>
              </div>
            </div>

            {/* List with Text Excerpt */}
            <div className="space-y-6">
              <div className="group cursor-pointer space-y-3">
                <div className="text-[10px] font-black text-[#0066cc] uppercase tracking-widest">US & CANADA</div>
                <h4 className="text-[16px] font-bold text-[#111] leading-tight group-hover:text-[#0066cc] transition-colors">
                  US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley...
                </p>
              </div>

              {/* Smaller List with Thumbnails */}
              <div className="space-y-6 pt-4 border-t border-gray-100">
                {[
                  { title: "North East Politician Speak Out About Election Abuse", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=200&auto=format&fit=crop" },
                  { title: "Bitcoin ETF Inflow: Fidelity Overtakes BlackRock In Surprise Move", img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=200&auto=format&fit=crop" },
                  { title: "Growing Concerns Over 2024 Re-Election Bid", img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=200&auto=format&fit=crop" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-[85px] h-[65px] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h5 className="text-[14px] font-bold text-[#111] leading-snug group-hover:text-[#0066cc] transition-colors">
                      {item.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-20">
            
            {/* 2. World Politics Hub */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-[#111] pb-2">
                <h3 className="text-xl font-black uppercase tracking-tighter">World Politics Hub</h3>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-[#0066cc]">
                    <span>INTERNATIONAL</span>
                    <span>•</span>
                    <span>MAR 5, 2025</span>
                  </div>
                  <h4 className="text-[24px] font-black leading-tight group-hover:text-[#0066cc] transition-colors font-serif">Global Leaders Convene in Geneva to Address Rising Trade Tension</h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">The high-stakes meeting has drawn diplomats from over 50 nations as they attempt to finalize a framework for digital trade agreements...</p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Peace Negotiations Stall as Regional Powers Assert New Demands", cat: "Diplomacy" },
                    { title: "New Environmental Pact Signed by Major Industrial Economies", cat: "Policy" },
                    { title: "Cyber Warfare Becomes Primary Focus for National Security Agencies", cat: "Security" },
                    { title: "Economic Recovery Forecasts Show Mixed Results for Emerging Markets", cat: "Finance" }
                  ].map((post, i) => (
                    <div key={i} className="group cursor-pointer border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                      <div className="text-[9px] font-black text-[#0066cc] uppercase tracking-widest mb-1">{post.cat}</div>
                      <h5 className="text-[16px] font-bold text-gray-800 leading-snug group-hover:text-[#0066cc] transition-colors">{post.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Entertainment Hub Grid */}
            <section className="bg-gray-50 p-10 rounded-sm space-y-8">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h3 className="text-xl font-black uppercase tracking-tighter">Entertainment & Culture</h3>
                <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-[#0066cc] hover:underline">View All</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Behind the Scenes of the Season's Biggest Blockbuster Release", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop" },
                  { title: "The Evolution of Digital Art: How NFTs are Changing the Landscape", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop" },
                  { title: "Top 10 Cultural Festivals to Attend in Europe This Summer", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="space-y-4 group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm bg-gray-200">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0066cc] transition-colors leading-tight">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Sports Spotlight (Horizontal Grid) */}
            <section className="space-y-8 pt-8">
              <div className="flex items-center gap-4 border-b-2 border-[#111] pb-2">
                <h3 className="text-xl font-black uppercase tracking-tighter">Sports Spotlight</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Major League Expansion: Which Cities are Next on the List?", img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=600&auto=format&fit=crop" },
                  { title: "The Science of Performance: How Data is Transforming Training", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop" },
                  { title: "Iconic Stadiums: The Architecture of Modern Sports Arenas", img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=600&auto=format&fit=crop" },
                  { title: "Rivalry Renewed: A Deep Dive into the Season's Biggest Matchup", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-[110px] h-[85px] shrink-0 overflow-hidden rounded-sm bg-gray-100">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#0066cc] transition-colors">{post.title}</h4>
                      <div className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Football • 3 Min Read</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Opinion & Deep Dive (Styled Section) */}
            <section className="bg-[#111] text-white p-12 -mx-4 md:-mx-12 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block bg-[#0066cc] text-white text-[10px] font-black px-3 py-1 tracking-widest uppercase">EDITOR'S OPINION</div>
                  <h3 className="text-[32px] font-black leading-tight font-serif italic">Why the Digital Age Requires a New Form of Journalism</h3>
                  <p className="text-white/60 text-[16px] leading-relaxed">As the information landscape shifts, the responsibility of the press has never been more critical to the survival of democratic discourse...</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" />
                    </div>
                    <div>
                      <div className="font-bold text-[15px]">Robert Henderson</div>
                      <div className="text-[11px] text-white/40 uppercase tracking-widest">Senior Political Editor</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "The Paradox of Privacy in an Interconnected World",
                    "How Economic Shifts are Redefining the Middle Class",
                    "The Silent Revolution: Clean Energy's Quiet Victory"
                  ].map((title, i) => (
                    <div key={i} className="group cursor-pointer border-l-4 border-[#0066cc] pl-6 py-2 hover:bg-white/5 transition-colors">
                      <h4 className="text-[17px] font-bold group-hover:text-[#0066cc] transition-colors">{title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3 space-y-16">
            
            {/* Numbered Most Read Sidebar */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Most Read Weekly</h3>
              <div className="space-y-6 pt-2">
                {[
                  "Apple's Next Big Move: The Integration of Generative AI in Every Device",
                  "Why the Housing Market is Finally Showing Signs of a Cooling Period",
                  "Analysis: The Strategy Behind the Latest Policy Shifts in Washington",
                  "Deep Dive: How Remote Work is Permanently Reshaping Our Cities"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-[36px] font-black text-gray-100 group-hover:text-[#0066cc] transition-colors leading-none italic">{i + 1}</span>
                    <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#0066cc] transition-colors pt-1">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Big Widget */}
            <div className="bg-[#111] p-10 text-center text-white relative overflow-hidden group rounded-sm shadow-xl border-b-4 border-[#0066cc]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={48} className="mx-auto mb-6 text-[#0066cc] opacity-50" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">Daily Insight</h3>
              <p className="text-white/60 text-[14px] mb-8 leading-relaxed">Join 150k+ readers who start their morning with The Voice Daily briefing.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066cc] transition-all text-center placeholder:text-white/30" />
                <button className="w-full bg-[#0066cc] text-white font-black uppercase tracking-widest text-[12px] py-4 hover:bg-white hover:text-black transition-colors shadow-2xl">SUBSCRIBE NOW</button>
              </form>
            </div>

            {/* Social Connect Columns */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b border-gray-100 w-full pb-2">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Facebook", count: "2.5M", color: "#1877F2" },
                  { name: "Twitter", count: "1.8M", color: "#1DA1F2" },
                  { name: "Instagram", count: "4.2M", color: "#E4405F" },
                  { name: "Youtube", count: "3.5M", color: "#FF0000" }
                ].map((social, i) => (
                  <a key={i} href="#" className="flex flex-col items-center justify-center p-5 bg-gray-50 border border-gray-100 hover:border-[#0066cc] transition-colors group">
                    <div className="text-[16px] font-black mb-1 group-hover:text-[#0066cc] transition-colors">{social.count}</div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* Thumbnail Bottom Grid Section */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-16 pt-20">
          {[
            "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=400&auto=format&fit=crop"
          ].map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer">
              <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          ))}
        </section>

      </div>

      <VoiceDailyFooter />
    </main>
  );
}
