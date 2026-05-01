import PoliticalHeader from "@/components/PoliticalHeader";
import PoliticalFooter from "@/components/PoliticalFooter";
import Link from "next/link";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, Instagram, Twitter, Facebook } from "lucide-react";

export default function PoliticalPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#111] font-pt-serif selection:bg-[#e01111] selection:text-white">
      <PoliticalHeader />

      {/* 1. Ticker Row */}
      <div className="bg-white border-b border-gray-100 py-3 hidden lg:block">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-6 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-[#e01111] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">Ticker</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[
              "Senate Passes Historic Infrastructure Bill Amidst Debates",
              "Economic Policy Shifts Impact Global Trade Markets",
              "New Measures Introduced to Combat Climate Change",
              "Global Leaders Meet to Discuss the Future of Renewable Energy",
              "Mars Rover Discovers Signs of Ancient Rivers",
              "Tech Giants Announce Unified Privacy Standards"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 cursor-pointer group">
                <span className="w-1.5 h-1.5 bg-[#e01111] rotate-45"></span>
                <span className="text-[13px] font-bold hover:text-[#e01111] transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        {/* 2. 5-Column Hero Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Left Column: Popular (2 cols) */}
          <div className="lg:col-span-2 hidden lg:block space-y-6">
            <h4 className="text-[12px] font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Popular</h4>
            {[
              { title: "The Strategy Behind Recent Policy Changes", time: "2 Hours Ago" },
              { title: "Global Markets React to Inflation Data", time: "4 Hours Ago" },
              { title: "New Environmental Regulation Face Backlash", time: "6 Hours Ago" },
              { title: "Tech Stocks Rally After Strong Earnings", time: "8 Hours Ago" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0">
                <h5 className="text-[14px] font-bold leading-tight group-hover:text-[#e01111] transition-colors mb-2">{post.title}</h5>
                <span className="text-[10px] text-gray-400 font-sans uppercase font-bold">{post.time}</span>
              </div>
            ))}
          </div>

          {/* Center Column: Big Feature (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="group cursor-pointer relative overflow-hidden bg-gray-900 aspect-[16/10]">
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop" 
                alt="Hero Main" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-[#e01111] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-1 inline-block mb-3">
                  World Politics
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-[#e01111] transition-colors">
                  Global Leaders Address the UN General Assembly on Climate Action
                </h2>
                <div className="flex items-center gap-3 text-[11px] font-sans text-gray-300 font-bold uppercase tracking-wider">
                  <span>Oct 15, 2023</span>
                  <span className="w-1 h-1 bg-[#e01111] rounded-full"></span>
                  <span>By James Smith</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Grid (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { title: "New Economic Tariffs Placed on Goods", cat: "Economy", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop" },
              { title: "Midterm Polling Shows Key Shifts", cat: "Elections", img: "https://images.unsplash.com/photo-1575318634080-60b5e28ec7d3?q=80&w=600&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer relative overflow-hidden bg-gray-900 aspect-[4/3] lg:aspect-square">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="bg-[#e01111] text-white text-[9px] font-sans font-bold uppercase tracking-wider px-1.5 py-0.5 inline-block mb-2">
                    {post.cat}
                  </div>
                  <h3 className="text-[15px] font-bold text-white leading-tight group-hover:text-[#e01111] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Far Right Column: Editor's Picks (2 cols) */}
          <div className="lg:col-span-2 hidden lg:block space-y-6 border-l border-gray-200 pl-6">
            <h4 className="text-[12px] font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Editor's Picks</h4>
            {[
              { title: "The Impact of Artificial Intelligence", cat: "Tech" },
              { title: "Health Reform Stalls in Committee", cat: "Politics" },
              { title: "The Future of Sustainable Cities", cat: "Global" },
              { title: "New Space Exploration Records", cat: "Science" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0">
                <div className="text-[9px] text-[#e01111] font-sans font-bold uppercase mb-1">{post.cat}</div>
                <h5 className="text-[13px] font-bold leading-tight group-hover:text-[#e01111] transition-colors">{post.title}</h5>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Area */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* 3. The News Roundup */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                <h3 className="text-xl font-black uppercase tracking-tight">The News Roundup</h3>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Roundup Left */}
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-[18px] font-bold group-hover:text-[#e01111] transition-colors leading-tight">Supreme Court Ruling Alter Landscape of Voting Rights</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">The recent ruling by the Supreme Court has sparked intense debate over the future of voting protections in the country.</p>
                </div>
                {/* Roundup Center */}
                <div className="space-y-6">
                  {[
                    "Foreign Policy Decisions Heavily Criticized by Opposition",
                    "Tech CEOs Summoned for Congressional Hearing on Privacy",
                    "Public Opinion Polls Reflect Changing Demographics",
                    "Economic Forecasts Predict Steady Growth in 2024"
                  ].map((title, i) => (
                    <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0">
                      <h5 className="text-[14px] font-bold group-hover:text-[#e01111] transition-colors leading-tight">{title}</h5>
                    </div>
                  ))}
                </div>
                {/* Roundup Right */}
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-[18px] font-bold group-hover:text-[#e01111] transition-colors leading-tight">Defense Budget Allocation Faces New Scrutiny</h4>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-sans uppercase font-bold">
                    <span>Oct 12, 2023</span>
                    <span>•</span>
                    <span>No Comments</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Business & Economy (Dark Layout) */}
            <section className="bg-[#111] text-white p-10 -mx-4 lg:-mx-10">
              <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-4">
                <h3 className="text-xl font-black uppercase tracking-tight">Business & Economy</h3>
                <Link href="#" className="text-[11px] font-sans font-bold uppercase hover:text-[#e01111] transition-colors">View All</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { title: "Wall Street Reacts to Rate Hike", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop" },
                  { title: "New Crypto Regulation Debated", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&auto=format&fit=crop" },
                  { title: "Global Supply Chain Disruptions", img: "https://images.unsplash.com/photo-1586528116311-ad86d7c7170a?q=80&w=400&auto=format&fit=crop" },
                  { title: "The Rise of Digital Currencies", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=400&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-square overflow-hidden bg-gray-800 relative">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                    </div>
                    <h4 className="text-[14px] font-bold group-hover:text-[#e01111] transition-colors leading-tight text-center">{post.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. World Politics (3-column) */}
            <section className="space-y-8 pt-8">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                <h3 className="text-xl font-black uppercase tracking-tight">World Politics</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* World Left - Large */}
                <div className="space-y-4 group cursor-pointer lg:col-span-1">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-[20px] font-bold text-white group-hover:text-[#e01111] transition-colors leading-tight">Diplomatic Strains Emerge Between Nations</h4>
                    </div>
                  </div>
                </div>
                {/* World Center - Stack */}
                <div className="space-y-6 lg:col-span-1">
                  {[
                    { title: "New Peace Treaty Negotiated in Europe", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" },
                    { title: "Election Results Spark Protests in Region", img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&auto=format&fit=crop" },
                    { title: "Trade Agreement Signed by Global Powers", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" }
                  ].map((post, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-[100px] h-[75px] shrink-0 overflow-hidden bg-gray-100">
                        <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h5 className="text-[14px] font-bold group-hover:text-[#e01111] transition-colors leading-tight">{post.title}</h5>
                    </div>
                  ))}
                </div>
                {/* World Right - List */}
                <div className="space-y-4 lg:col-span-1 border-l border-gray-100 pl-6">
                  {[
                    "Unrest in Border Regions Increases Tension",
                    "New Humanitarian Aid Package Announced",
                    "Environmental Accords Face Compliance Issues",
                    "Global Health Initiative Gains Support",
                    "Military Spending Reaches New Record High"
                  ].map((title, i) => (
                    <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0">
                      <h5 className="text-[13px] font-bold group-hover:text-[#e01111] transition-colors leading-tight">{title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Election 2024 Central */}
            <section className="bg-white p-10 rounded-sm shadow-sm space-y-8 border-t-4 border-[#e01111]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">Election 2024</h3>
                <Link href="#" className="text-[11px] font-sans font-bold uppercase text-[#e01111] hover:underline">Full Coverage</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-sm bg-gray-100 relative">
                    <img src="https://images.unsplash.com/photo-1575318634080-60b5e28ec7d3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white px-2 py-0.5 text-[10px] font-sans font-bold text-black border border-gray-200">ANALYSIS</div>
                  </div>
                  <h4 className="text-2xl font-bold leading-tight group-hover:text-[#e01111] transition-colors">The Swing State Strategy: How Candidates are Targeting the Midwest</h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">As the campaign trail heats up, both parties are pouring record amounts of funding into key battleground states...</p>
                </div>
                <div className="space-y-6">
                  {[
                    "Polling Trends: Young Voters Show Increasing Engagement",
                    "The Impact of Social Media on Modern Campaigning",
                    "Economic Policy Platforms Compared: A Deep Dive",
                    "Voter Registration Drives See Record Numbers Nationwide"
                  ].map((title, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-[#e01111] mt-2 shrink-0"></div>
                      <h5 className="text-[17px] font-bold group-hover:text-[#e01111] transition-colors leading-snug">{title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Opinion & Columnists */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                <h3 className="text-xl font-black uppercase tracking-tight text-[#e01111]">Opinion & Columns</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Robert Henderson", title: "Why Diplomacy is Our Best Tool in the Modern Age", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" },
                  { name: "Elena Rodriguez", title: "The Economic Case for Green Energy Transition", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
                  { name: "David Chen", title: "Technology Governance in a Globalized World", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" }
                ].map((col, i) => (
                  <div key={i} className="bg-white p-6 rounded-sm text-center space-y-4 group cursor-pointer border border-transparent hover:border-gray-100 transition-all shadow-sm hover:shadow-md">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-gray-50 p-1">
                      <img src={col.img} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[12px] font-sans font-black text-[#e01111] uppercase tracking-widest">{col.name}</div>
                      <h4 className="text-[16px] font-bold leading-tight group-hover:text-[#111] transition-colors italic">"{col.title}"</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Video Highlights Desk */}
            <section className="bg-[#0b0c10] text-white p-12 -mx-4 lg:-mx-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-widest text-[#e01111]">Political Video Desk</h3>
                  <Link href="#" className="text-[11px] font-sans font-bold uppercase hover:text-[#e01111] transition-colors">Watch All Reports</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="aspect-video bg-black rounded-sm overflow-hidden relative group cursor-pointer shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#e01111] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play fill="currentColor" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                      <h4 className="text-2xl font-bold">Documentary: The Hidden Forces in Washington</h4>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { title: "Special Report: The Future of NATO Expansion", time: "5:20" },
                      { title: "Interview: The Secretary of State on Global Trade", time: "8:15" },
                      { title: "Debate Highlights: Climate Policy and the Economy", time: "4:45" },
                      { title: "Field Report: Voting Shifts in Rural Battlegrounds", time: "6:30" }
                    ].map((vid, i) => (
                      <div key={i} className="flex gap-5 group cursor-pointer items-center border-b border-white/5 pb-5 last:border-0 last:pb-0">
                        <div className="w-28 h-16 bg-black rounded-sm overflow-hidden relative shrink-0">
                          <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover opacity-40" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play fill="currentColor" size={14} />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[15px] font-bold group-hover:text-[#e01111] transition-colors leading-tight">{vid.title}</h5>
                          <span className="text-[11px] text-white/40 font-sans font-bold uppercase">{vid.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            
            {/* Editor's Picks Sidebar */}
            <div className="bg-white p-6 border border-gray-100">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-[#e01111] inline-block mb-6 pb-1">US Politics</h3>
              <div className="space-y-6">
                {[
                  { title: "Campaign Funding Under Scrutiny Again", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=200&auto=format&fit=crop" },
                  { title: "Senate Minority Leader Outlines Strategy", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=200&auto=format&fit=crop" },
                  { title: "Public Education Reform Bill Gains Speed", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="flex-1">
                      <h4 className="text-[14px] font-bold group-hover:text-[#e01111] transition-colors leading-snug">{post.title}</h4>
                      <span className="text-[10px] text-gray-400 font-sans uppercase font-bold">Oct 14, 2023</span>
                    </div>
                    <div className="w-[60px] h-[60px] shrink-0 overflow-hidden">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div className="bg-[#e01111] text-white p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <MailIcon size={40} className="mb-4 opacity-30" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Subscribe</h3>
              <p className="text-[14px] opacity-80 mb-6 font-sans leading-relaxed">Join 25,000+ others who receive our daily political briefing.</p>
              <form className="space-y-3 font-sans">
                <input type="email" placeholder="Email Address" className="w-full bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:bg-white focus:text-[#111] transition-all" />
                <button className="w-full bg-black text-white font-bold uppercase tracking-widest text-[11px] py-3.5 hover:bg-white hover:text-black transition-colors">Join Now</button>
              </form>
            </div>

            {/* Numbered Trending */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-black inline-block mb-2 pb-1">Trending</h3>
              <div className="space-y-6">
                {[
                  "Analysis: The Future of Global Diplomacy in a Digital Age",
                  "Report: Economic Shifts Expected to Redefine Trade Routes",
                  "Opinion: Why Climate Change is the Primary Political Challenge",
                  "Deep Dive: The Evolution of Campaign Strategy in the 21st Century"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-[32px] font-black text-gray-200 group-hover:text-[#e01111] transition-colors leading-none">{i + 1}</span>
                    <h4 className="text-[15px] font-bold group-hover:text-[#e01111] transition-colors leading-snug pt-1">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-gray-100 w-full mb-6 pb-2">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Facebook", count: "1.2M", icon: Facebook, color: "#1877F2" },
                  { name: "Twitter", count: "850K", icon: Twitter, color: "#1DA1F2" },
                  { name: "Instagram", count: "2.4M", icon: Instagram, color: "#E4405F" },
                  { name: "Youtube", count: "1.5M", icon: Play, color: "#FF0000" }
                ].map((social, i) => (
                  <a key={i} href="#" className="flex items-center gap-3 p-3 bg-white border border-gray-100 hover:border-[#e01111] transition-colors group">
                    <social.icon size={16} style={{ color: social.color }} />
                    <div>
                      <div className="text-[11px] font-bold leading-none">{social.count}</div>
                      <div className="text-[9px] text-gray-400 font-sans font-bold uppercase">{social.name}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      <PoliticalFooter />
    </main>
  );
}
