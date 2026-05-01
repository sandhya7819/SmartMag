import TribunePostHeader from "@/components/TribunePostHeader";
import TribunePostFooter from "@/components/TribunePostFooter";
import Link from "next/link";
import { ChevronRight, Play, Zap, MessageSquare, Clock, Mail as MailIcon } from "lucide-react";

export default function TribunePostPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#0369d1] selection:text-white">
      <TribunePostHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* 3-Column Hero Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <div className="bg-[#0369d1] text-white px-2 py-0.5 text-[9px] font-black flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  LIVE UPDATES
                </div>
                <span>Updated: Mar 8, 2025</span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-black text-[#111] leading-[1.1] font-bitter group cursor-pointer hover:text-[#0369d1] transition-colors">
                Ballistic Missiles and Drones Damage Diplomatic Missions in Attack in One of The Largest Air Attacks
              </h2>
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer" 
                  alt="Main story"
                />
              </div>
              <p className="text-[#444] text-[15px] leading-relaxed">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson, 16-year-old American journalist...
              </p>
              
              {/* News Just In Widget */}
              <div className="bg-white border-t border-gray-100 pt-6 mt-8">
                <h4 className="text-[11px] font-black text-[#b30000] uppercase tracking-widest mb-4">NEWS JUST IN</h4>
                <ul className="space-y-4">
                  {[
                    "Trump Response to Biden Dropping Out: President 'Not Fit to Run'",
                    "Papua New Guinea Is In a State of Emergency As Riots Kill 16",
                    "High-Profile Chinese Business Delegation Meets Planning Minister to Attract Chinese..."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 group cursor-pointer">
                      <span className="w-1.5 h-1.5 bg-[#0369d1] rounded-full mt-1.5 shrink-0"></span>
                      <span className="text-[14px] font-bold text-gray-800 group-hover:text-[#0369d1] transition-colors leading-tight">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Middle Column (3 cols) */}
          <div className="lg:col-span-3 space-y-10 border-x border-gray-50 px-6">
            {[
              { title: "Former President Poroshenko Donates $1 Million in Military Aid to Ukraine", excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon...", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=600&auto=format&fit=crop" },
              { title: "Protests Across Europe Show Solidarity with Ukraine, Demand End to Invasion", excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon...", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-4 pb-10 border-b border-gray-50 last:border-0">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111] leading-snug group-hover:text-[#0369d1] transition-colors font-bitter">{post.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Right Column (3 cols) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Top Featured with Large Image */}
            <div className="group cursor-pointer space-y-4">
              <div className="aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm relative">
                <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#0369d1] text-white px-1.5 py-0.5 text-[8px] font-black uppercase tracking-widest">WORLD</div>
              </div>
              <h3 className="text-[17px] font-bold text-[#111] leading-tight group-hover:text-[#0369d1] transition-colors font-bitter">
                Sarah Palin Defends Trump, Criticizes Kamala Harris for 'Lies' & Media Bias
              </h3>
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>John Doe</span>
                <span>•</span>
                <span>Feb 11, 2021</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MessageSquare size={10} /> 3</span>
              </div>
            </div>

            {/* List with Thumbnails on Right */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              {[
                { title: "Scientists Track Sea Level Rise from Glaciers in Greenland & Antarctica", img: "https://images.unsplash.com/photo-1471970333252-70802777b1e4?q=80&w=100&auto=format&fit=crop" },
                { title: "OpenAI Working on New Reasoning Tech Under Code Name 'Strawberry'", img: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=100&auto=format&fit=crop" },
                { title: "Supersonic Planes will Replace Jets Sooner, Says Aviation CEO", img: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=100&auto=format&fit=crop" },
                { title: "Chasing History – Laureus World Sportsman of the Year Nominees", img: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=100&auto=format&fit=crop" },
                { title: "People visit City Walk Amid High Ticket Citations", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=100&auto=format&fit=crop" },
                { title: "A Huge Imbalance of Energy Has Been Detected on Saturn Just Recently", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=100&auto=format&fit=crop" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-start justify-between">
                  <h5 className="text-[13px] font-bold text-[#111] leading-snug group-hover:text-[#0369d1] transition-colors flex-1">{item.title}</h5>
                  <div className="w-[60px] h-[45px] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-20">
            
            {/* 2. World Politics & Crisis */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">World Politics & Crisis</h3>
                <div className="flex-1 h-[1px] bg-gray-50"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="text-[10px] font-black text-[#0369d1] uppercase tracking-widest">DIPLOMACY</div>
                  <h4 className="text-[22px] font-black leading-tight group-hover:text-[#0369d1] transition-colors font-bitter">International Summit Fails to Reach Consensus on Trade Tariffs</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">Global leaders gathered in Brussels this week for a high-stakes summit that many hoped would resolve long-standing trade disputes...</p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "New Peace Treaty Negotiated in Eastern Europe After Months of Tension", cat: "Treaty" },
                    { title: "Election Results Spark Protests in Central Asian Republics", cat: "Elections" },
                    { title: "Humanitarian Aid Convoys Reach Besieged Cities in Conflict Zones", cat: "Humanitarian" },
                    { title: "Cyber Warfare Becomes Primary Tool in Modern Geopolitical Rivalries", cat: "Security" }
                  ].map((post, i) => (
                    <div key={i} className="group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="text-[9px] font-black text-[#0369d1] uppercase tracking-widest mb-1">{post.cat}</div>
                      <h5 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#0369d1] transition-colors font-bitter">{post.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Market & Economy Grid */}
            <section className="space-y-8 pt-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Market & Economy</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Global Stock Markets Slide Amidst Rising Inflation Concerns", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop" },
                  { title: "The Rise of Decentralized Finance: A New Era for Banking?", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop" },
                  { title: "Real Estate Markets Face Cooling Period as Interest Rates Climb", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop" },
                  { title: "Cryptocurrency Regulations: What Investors Need to Know Now", img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-[120px] h-[90px] shrink-0 overflow-hidden rounded-sm bg-gray-100">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#0369d1] transition-colors font-bitter line-clamp-3">{post.title}</h4>
                      <div className="text-[10px] text-gray-400 font-bold uppercase mt-2 block">Mar 5, 2025</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Video Highlights (Dark Section) */}
            <section className="bg-[#0b0c10] text-white p-12 -mx-4 md:-mx-12 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-widest">Video Highlights</h3>
                  <Link href="#" className="text-[11px] font-black uppercase tracking-widest hover:text-[#0369d1] transition-colors">View All Videos</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Documentary: The Silent War in the Arctic", img: "https://images.unsplash.com/photo-1471970333252-70802777b1e4?q=80&w=400&auto=format&fit=crop" },
                    { title: "Interview: The Future of AI with Industry Leaders", img: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=400&auto=format&fit=crop" },
                    { title: "Special Report: Climate Change on the Front Lines", img: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400&auto=format&fit=crop" }
                  ].map((vid, i) => (
                    <div key={i} className="space-y-3 group cursor-pointer">
                      <div className="aspect-video overflow-hidden bg-gray-800 rounded-sm relative">
                        <img src={vid.img} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-[#0369d1] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                            <Play size={16} fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-[14px] font-bold text-center group-hover:text-[#0369d1] transition-colors font-bitter">{vid.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Lifestyle & Tech */}
            <section className="space-y-8 pt-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Lifestyle & Tech</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { title: "The Best High-End Audio Gear for 2025", cat: "Audio", img: "https://images.unsplash.com/photo-1508685096489-7aac241bd9b2?q=80&w=600&auto=format&fit=crop" },
                  { title: "Why Mindful Living is More Than Just a Trend", cat: "Health", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop" },
                  { title: "Top Destinations for Sustainable Travel in Europe", cat: "Travel", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="space-y-4 group cursor-pointer">
                    <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="text-[10px] font-black text-[#0369d1] uppercase tracking-widest">{post.cat}</div>
                    <h4 className="text-[16px] font-black leading-tight group-hover:text-[#0369d1] transition-colors font-bitter">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3 space-y-16">
            
            {/* Editor's Choice Sidebar (Small Thumbnails) */}
            <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-l-[4px] border-[#0369d1] pl-3 mb-8">Editor's Choice</h3>
              <div className="space-y-6">
                {[
                  { title: "The Future of Space Exploration: What to Expect Next", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=200&auto=format&fit=crop" },
                  { title: "How Urban Planning is Adapting to Climate Change", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=200&auto=format&fit=crop" },
                  { title: "The Global Impact of New Semiconductor Policies", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop" },
                  { title: "Analysis: Why Regional Conflicts Are Becoming Global", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=200&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-[65px] h-[65px] shrink-0 overflow-hidden rounded-sm bg-gray-100">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#0369d1] transition-colors font-bitter">{post.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Big Widget */}
            <div className="bg-[#0369d1] p-10 text-center text-white relative overflow-hidden group rounded-sm shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={48} className="mx-auto mb-6 opacity-30" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">Join Our Insight List</h3>
              <p className="text-white/70 text-[14px] mb-8 leading-relaxed">Deep analysis and morning briefings delivered to your inbox.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/20 border border-white/30 px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all text-center placeholder:text-white/60" />
                <button className="w-full bg-white text-[#0369d1] font-black uppercase tracking-widest text-[12px] py-4 hover:bg-black hover:text-white transition-colors shadow-2xl">SUBSCRIBE NOW</button>
              </form>
            </div>

            {/* Numbered Trending */}
            <div className="space-y-8">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Most Read Stories</h3>
              <div className="space-y-6 pt-2">
                {[
                  "Report: Global Trade Shifts Expected to Redefine Economy",
                  "Why Climate Policy is the Primary Challenge of the Decade",
                  "Deep Dive: The Evolution of Campaign Strategy",
                  "Interview: New Tech Innovation Set to Disrupt Markets"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-[42px] font-black text-gray-100 group-hover:text-[#0369d1] transition-colors leading-none italic">{i + 1}</span>
                    <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#0369d1] transition-colors pt-3 font-bitter">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Connect Columns (2 cols) */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b border-gray-100 w-full pb-2">Follow Tribune Post</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Facebook", count: "1.2M", color: "#1877F2" },
                  { name: "Twitter", count: "850K", color: "#1DA1F2" },
                  { name: "Instagram", count: "2.4M", color: "#E4405F" },
                  { name: "Youtube", count: "1.5M", color: "#FF0000" }
                ].map((social, i) => (
                  <a key={i} href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-100 hover:border-[#0369d1] transition-colors group">
                    <div className="text-[15px] font-black mb-1 group-hover:text-[#0369d1] transition-colors">{social.count}</div>
                    <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      <TribunePostFooter />
    </main>
  );
}
