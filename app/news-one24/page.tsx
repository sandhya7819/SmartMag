import NewsOne24Header from "@/components/NewsOne24Header";
import NewsOne24Footer from "@/components/NewsOne24Footer";
import Link from "next/link";
import { ChevronRight, Play, Zap, TrendingUp, Mail as MailIcon, ExternalLink } from "lucide-react";

export default function NewsOne24Page() {
  return (
    <main className="min-h-screen bg-white font-bitter selection:bg-[#b30000] selection:text-white">
      <NewsOne24Header />

      {/* Breaking News Ticker */}
      <div className="bg-[#f2f2f2] border-b border-gray-200 py-2.5">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-6 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0 bg-[#b30000] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm">
            <Zap size={12} fill="currentColor" />
            <span>Breaking</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap animate-marquee font-bold text-[13px] text-gray-800 tracking-tight">
            {[
              "Global Leaders Reach Landmark Agreement on Carbon Emissions",
              "New Tech Innovation to Drastically Reduce Smartphone Charging Time",
              "Stock Markets Surge Following Positive Economic Forecasts",
              "Health Experts Recommend New Measures for Post-Pandemic Wellness",
              "Historic Discovery Made in Ancient City of Athens"
            ].map((text, i) => (
              <Link key={i} href="#" className="hover:text-[#b30000] cursor-pointer">{text}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* Hero Grid (Complex 1+2+1+3) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Large (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="group cursor-pointer relative overflow-hidden bg-gray-900 aspect-[16/11] rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" 
                alt="Main News"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-[#b30000] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 inline-block mb-3">
                  World Politics
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 group-hover:text-[#ffe500] transition-colors">
                  Demonstrators Call on US to Continue to Support Conflict Efforts
                </h2>
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/60 uppercase tracking-widest">
                  <span>By Peter Wilson</span>
                  <span>•</span>
                  <span>OCT 15, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked Mid (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {[
              { title: "Economic Forecasts Predict Steady Growth in 2024", cat: "Business", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop" },
              { title: "New Measures Introduced to Combat Climate Change", cat: "Health", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer relative overflow-hidden bg-gray-900 aspect-square rounded-sm shadow-lg">
                <img src={post.img} className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="text-[#ffe500] text-[9px] font-black uppercase tracking-widest mb-1">{post.cat}</div>
                  <h3 className="text-[16px] font-black text-white leading-snug group-hover:text-[#ffe500] transition-colors">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Small List (3 cols) */}
          <div className="lg:col-span-3 space-y-6 bg-gray-50 p-6 rounded-sm border border-gray-100">
            <h4 className="text-[13px] font-black uppercase tracking-widest border-b border-[#b30000] inline-block pb-1 mb-2">Featured</h4>
            <div className="space-y-6">
              {[
                { title: "The Impact of Artificial Intelligence on Future Job Markets", time: "2 Hours Ago" },
                { title: "Space Exploration: Mars Mission Reaches New Milestone", time: "4 Hours Ago" },
                { title: "Global Health Initiative Gains Support from Major Tech Firms", time: "6 Hours Ago" },
                { title: "Cultural Festival Attracts Thousands of Visitors from Europe", time: "8 Hours Ago" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h5 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#b30000] transition-colors">{item.title}</h5>
                  <span className="text-[10px] text-gray-400 font-bold uppercase mt-2 block">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Area */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* National News */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-black pb-2">
                <h3 className="text-xl font-black uppercase tracking-tighter">National News</h3>
              </div>
              <div className="space-y-10">
                {[
                  { title: "Supreme Court Ruling Alter Landscape of Voting Rights in the Country", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", cat: "Politics" },
                  { title: "Defense Budget Allocation Faces New Scrutiny from Oversight Committees", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", cat: "Law" },
                  { title: "Historic Discovery in Ancient City of Athens Revealed by Archaeologists", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop", cat: "History" }
                ].map((post, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                    <div className="md:w-[280px] aspect-[4/3] shrink-0 overflow-hidden rounded-sm relative shadow-md">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                      <div className="absolute top-0 left-0 bg-[#b30000] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                        {post.cat}
                      </div>
                    </div>
                    <div className="space-y-3 pt-1">
                      <h4 className="text-[22px] font-black leading-tight group-hover:text-[#b30000] transition-colors">{post.title}</h4>
                      <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">The developments have sparked intense debate across the country as lawmakers attempt to reach a consensus before the session ends...</p>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-4">
                        <span className="text-[#b30000]">James Smith</span>
                        <span>•</span>
                        <span>OCT 14, 2023</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. World Report */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-black pb-2">
                <h3 className="text-xl font-black uppercase tracking-tighter">World Report</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="bg-[#b30000] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 inline-block">EUROPE</div>
                  <h4 className="text-[20px] font-black leading-tight group-hover:text-[#b30000] transition-colors">Brussels Summit: Economic Leaders Debate Future of Digital Currency</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">The high-stakes meeting in Brussels has drawn attention from financial markets worldwide as leaders seek common ground...</p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Peace Talks in the Middle East Reach Critical Juncture", cat: "Middle East" },
                    { title: "New Trade Agreement Signed Between Asian Economic Blocks", cat: "Asia" },
                    { title: "Humanitarian Crisis in Africa Prompts Global Response", cat: "Africa" },
                    { title: "Latin American Markets Show Resilience Amidst Global Volatility", cat: "Latin Am" }
                  ].map((post, i) => (
                    <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="text-[9px] font-black text-[#b30000] uppercase tracking-widest mb-1">{post.cat}</div>
                      <h5 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#b30000] transition-colors">{post.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Entertainment & Celebrity */}
            <section className="bg-gray-50 p-10 rounded-sm space-y-8">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h3 className="text-xl font-black uppercase tracking-tighter">Entertainment</h3>
                <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-[#b30000] hover:underline">All Ents</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Upcoming Blockbuster Trailer Breaks Global Viewership Records", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop" },
                  { title: "The Return of Classic Television: Why Reboots Are Dominating", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=400&auto=format&fit=crop" },
                  { title: "Music Industry Shifts: The Impact of Streaming on Artist Revenue", img: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?q=80&w=400&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="space-y-3 group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-[15px] font-bold group-hover:text-[#b30000] transition-colors leading-tight">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Video Desk (Immersive Dark Section) */}
            <section className="bg-[#111] text-white p-12 -mx-4 md:-mx-12 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-widest text-[#b30000]">Video Desk</h3>
                  <div className="flex gap-2">
                    <button className="p-2 border border-white/10 hover:bg-[#b30000] transition-colors"><ChevronRight className="rotate-180" size={16} /></button>
                    <button className="p-2 border border-white/10 hover:bg-[#b30000] transition-colors"><ChevronRight size={16} /></button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="aspect-video bg-black rounded-sm overflow-hidden relative group cursor-pointer shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#b30000] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play fill="currentColor" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                      <h4 className="text-xl font-black">Exclusive: Inside the Global Peace Negotiations</h4>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { title: "Climate Summit: Top 5 Takeaways for the Planet", time: "1:24" },
                      { title: "Special Report: The Future of Urban Transportation", time: "3:45" },
                      { title: "Tech Insight: Why Silicon Valley is Betting on Quantum", time: "5:12" },
                      { title: "Cultural Spotlight: The New Art Movement in Tokyo", time: "2:30" }
                    ].map((vid, i) => (
                      <div key={i} className="flex gap-4 group cursor-pointer items-center">
                        <div className="w-24 h-16 bg-black rounded-sm overflow-hidden relative shrink-0">
                          <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover opacity-50" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play fill="currentColor" size={12} />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[14px] font-bold group-hover:text-[#b30000] transition-colors">{vid.title}</h5>
                          <span className="text-[10px] text-gray-500 font-bold uppercase">{vid.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Science & Discovery */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-black pb-2">
                <h3 className="text-xl font-black uppercase tracking-tighter">Science & Discovery</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "New Mars Mission Data Reveals Surprising Geological Features", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&auto=format&fit=crop" },
                  { title: "Breakthrough in Fusion Energy: Researchers Achieve Sustained Reaction", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop" },
                  { title: "The Ocean's Deepest Mysteries: New Exploration Vessel Launched", img: "https://images.unsplash.com/photo-1471970333252-70802777b1e4?q=80&w=600&auto=format&fit=crop" },
                  { title: "New Archaeological Find in Egypt Rewrites Ancient History", img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-[120px] h-[90px] shrink-0 overflow-hidden rounded-sm">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-[15px] font-black group-hover:text-[#b30000] transition-colors leading-tight">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            
            {/* Top Stories Sidebar */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-l-[4px] border-[#b30000] pl-3 mb-8">Top Stories</h3>
              <div className="space-y-6">
                {[
                  { title: "The Strategy Behind Recent Policy Changes Revealed", img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=200&auto=format&fit=crop" },
                  { title: "Global Markets React to Recent Inflation Data", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=200&auto=format&fit=crop" },
                  { title: "New Environmental Regulation Face Backlash from Industry", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=200&auto=format&fit=crop" },
                  { title: "Tech Stocks Rally After Strong Quarter Earnings Report", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=200&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-[80px] h-[80px] shrink-0 overflow-hidden rounded-sm bg-gray-100">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#b30000] transition-colors">{post.title}</h4>
                      <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 block">Oct 14, 2023</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div className="bg-[#b30000] p-10 text-center text-white relative overflow-hidden group rounded-sm shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <MailIcon size={48} className="mx-auto mb-6 text-[#ffe500]" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 italic">The Briefing</h3>
              <p className="text-white/70 text-[14px] mb-8 leading-relaxed">Join 50,000+ subscribers for our daily news summary.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/20 border border-white/30 px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all text-center placeholder:text-white/60" />
                <button className="w-full bg-[#ffe500] text-[#b30000] font-black uppercase tracking-widest text-[12px] py-4 hover:bg-black hover:text-white transition-colors shadow-2xl">SUBSCRIBE NOW</button>
              </form>
            </div>

            {/* Trending Numbers */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block pb-1">Trending Now</h3>
              <div className="space-y-6 pt-2">
                {[
                  "Why Every Developer Should Learn TypeScript in 2024",
                  "Analysis: What the New Tax Plan Means for Small Business",
                  "Report: Economic Shifts Expected to Redefine Trade Routes",
                  "Opinion: Why Climate Change is the Primary Political Challenge"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-[36px] font-black text-gray-100 group-hover:text-[#b30000] transition-colors leading-none italic">{i + 1}</span>
                    <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#b30000] transition-colors pt-2">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      <NewsOne24Footer />
    </main>
  );
}
