import FinancialHeader from "@/components/FinancialHeader";
import TechBlogFooter from "@/components/TechBlogFooter";
import { Play, Search, Mail as MailIcon, ChevronRight, TrendingUp } from "lucide-react";

export default function FinancialPage() {
   return (
      <main className="min-h-screen bg-white font-sans selection:bg-green-500 selection:text-white pb-0">
         <FinancialHeader />

         {/* 1. Hero Grid - Matching SS2 */}
         <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
               {/* Left Column: Top Stories */}
               <div className="lg:col-span-3 space-y-8">
                  <div className="bg-black text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest inline-block">TOP STORIES</div>
                  <div className="space-y-8">
                     <div className="group cursor-pointer space-y-4">
                        <div className="aspect-[16/10] overflow-hidden rounded-[2px]">
                           <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-black leading-tight group-hover:text-green-600 transition-colors">Bottleneck At Chinese Port Cause Trouble For Oil Shipping</h3>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                           <span className="text-green-600">STOCKS</span>
                           <span>JAN 11, 2021</span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">To understand the new politics stance and other pro nationals of recent...</p>
                     </div>
                     <div className="space-y-6">
                        {[
                           { title: "3 Moves to Make If the Stock Market Plummets", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&auto=format&fit=crop" },
                           { title: "Town Helping Business Owners With Funds", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop" },
                           { title: "GOP Leaders Fight Biden Over COVID-19 Funds", img: "https://images.unsplash.com/photo-1644363758117-91953245f782?q=80&w=400&auto=format&fit=crop" }
                        ].map((post, i) => (
                           <div key={i} className="flex gap-4 group cursor-pointer items-start">
                              <div className="flex-1 space-y-1">
                                 <h4 className="text-[14px] font-black leading-tight group-hover:text-green-600 transition-colors">{post.title}</h4>
                                 <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">JAN 11, 2021</div>
                              </div>
                              <div className="w-16 h-16 shrink-0 overflow-hidden rounded-[1px]">
                                 <img src={post.img} className="w-full h-full object-cover" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Center Column: Big Feature */}
               <div className="lg:col-span-6 space-y-6 group cursor-pointer border-x border-gray-100 px-10">
                  <div className="aspect-[4/3] overflow-hidden rounded-[2px]">
                     <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-6">
                     <h2 className="text-4xl font-black leading-tight tracking-tighter text-[#111] group-hover:text-green-600 transition-colors">
                        G7 Climate Finance Initiative Will Struggle Against China's Belt and Road Project
                     </h2>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="text-green-600">MARKETS</span>
                        <span>JAN 14, 2021</span>
                     </div>
                     <p className="text-gray-500 text-[16px] leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case...</p>
                  </div>
               </div>

               {/* Right Column: Ad & Investments */}
               <div className="lg:col-span-3 space-y-10">
                  <div className="bg-[#0f1218] p-8 text-center rounded-[4px] relative overflow-hidden group cursor-pointer h-56 flex flex-col justify-center items-center gap-6">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=600&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
                     <div className="relative z-10 space-y-4">
                        <div className="text-[10px] font-black text-gray-400 tracking-[3px]">EXPLORE ALL NEW</div>
                        <div className="text-2xl font-black text-white tracking-tighter">SMARTMAG</div>
                        <button className="bg-white text-black px-6 py-2 text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-green-500 hover:text-white transition-all">GET STARTED</button>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#111]">INVESTMENTS</h3>
                     </div>
                     <div className="group cursor-pointer space-y-6">
                        <div className="aspect-[16/10] overflow-hidden rounded-[2px]">
                           <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-lg font-black leading-tight group-hover:text-green-600 transition-colors px-1">Cainiao Partners With Government To Help It Become a 'Smart Supply Chain Zone'</h4>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-1">INVESTMENTS — JAN 1, 2021</div>
                        <p className="text-gray-400 text-xs px-1 leading-relaxed">To understand the new politics stance and other pro nationals of recent...</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 2. Grid Articles - Matching SS3 */}
         <section className="container mx-auto px-4 py-20 border-t border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                     { title: "Paytm Aims To Raise $1.6 Billion With Fresh Share...", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop" },
                     { title: "Crypto Miner Hive Blockchain To List Share...", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop" },
                     { title: "Gold Set For Worst Week Since March 2020 After...", img: "https://images.unsplash.com/photo-1610375461246-8360f06ec144?q=80&w=600&auto=format&fit=crop" },
                     { title: "Gold Prices Bounce Ahead of Fed Policy Release", img: "https://images.unsplash.com/photo-1589750670744-dc964451797f?q=80&w=600&auto=format&fit=crop" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-4">
                        <div className="aspect-[1.5/1] overflow-hidden rounded-[2px]">
                           <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        </div>
                        <h3 className="text-base font-black leading-tight group-hover:text-green-600 transition-colors">{post.title}</h3>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">JAN 4, 2021</div>
                     </div>
                  ))}
               </div>

               <div className="space-y-12">
                  <div className="group cursor-pointer space-y-6">
                     <div className="aspect-[16/8] overflow-hidden rounded-[2px] relative">
                        <img src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 px-6 py-3 text-white text-2xl font-black uppercase tracking-tighter cursor-pointer hover:bg-green-600 transition-all">GOLD PRICES</div>
                     </div>
                     <h3 className="text-2xl font-black leading-tight group-hover:text-green-600 transition-colors">Gold Prices Bounce Ahead of Fed Policy Release</h3>
                     <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">STOCKS — JAN 12, 2021</span>
                     <p className="text-gray-400 text-sm leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley...</p>
                  </div>
                  <div className="group cursor-pointer space-y-6">
                     <div className="aspect-[16/8] overflow-hidden rounded-[2px] relative">
                        <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 text-white text-3xl font-black uppercase tracking-tighter">BITCOIN</div>
                     </div>
                     <h3 className="text-2xl font-black leading-tight group-hover:text-green-600 transition-colors text-center px-10">There's More To This Market Than Bitcoin</h3>
                     <div className="text-[10px] font-black text-green-600 uppercase tracking-widest text-center">MARKETS — JAN 11, 2021</div>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Economy Insights - Matching SS4 Horizontal Dark Block */}
         <section className="bg-[#0f1218] py-20 my-10 overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10"></div>
            <div className="container mx-auto px-4">
               <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-sm font-black uppercase tracking-[3px] text-white">ECONOMY INSIGHTS</h3>
                  <div className="flex-1 h-[1px] bg-white/10"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { title: "Top UK Stocks to Watch: Capita Shares Rise as it Unveils", img: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?q=80&w=800&auto=format&fit=crop", badge: "INVESTMENTS" },
                     { title: "Digital Euro Might Suck Away 8% of Banks' Deposits", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop", badge: "FUNDS" },
                     { title: "Oil Gains on OPEC Outlook That U.S. Growth Will Slow", img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=800&auto=format&fit=crop", badge: "FUNDS" },
                     { title: "Post Covid, How Bitcoin Will Impact Investors?", img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800&auto=format&fit=crop", badge: "STOCKS" }
                  ].map((item, i) => (
                     <div key={i} className="group cursor-pointer relative overflow-hidden h-[350px] flex flex-col justify-end p-8 border border-white/5 bg-gradient-to-t from-black to-transparent">
                        <img src={item.img} className="absolute inset-0 w-full h-full object-cover -z-10 transition-transform group-hover:scale-110 opacity-60" />
                        <div className="space-y-4">
                           <div className="text-[9px] font-black tracking-widest text-[#32d583] uppercase">{item.badge} — JAN 15, 2021</div>
                           <h4 className="text-lg font-black text-white leading-tight group-hover:text-[#32d583] transition-colors">{item.title}</h4>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. Banking & Fintech Revolution */}
         <section className="container mx-auto px-4 py-20 space-y-12">
            <div className="flex items-center gap-4">
               <h3 className="text-sm font-black uppercase tracking-[3px] text-[#111]">BANKING & FINTECH</h3>
               <div className="flex-1 h-[1px] bg-gray-100"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                  { title: "The Rise of Neo-Banks: How Digital Challengers are Winning", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop" },
                  { title: "Open Banking Protocols: The Future of Financial Interoperability", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" },
                  { title: "AI in Wealth Management: Personalized Portfolio Strategies", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" }
               ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-4">
                     <div className="aspect-video overflow-hidden rounded-[2px] bg-gray-100">
                        <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                     </div>
                     <h4 className="text-[18px] font-black leading-tight group-hover:text-green-600 transition-colors">{post.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">Financial technology is evolving at an unprecedented pace, reshaping how consumers interact with their money...</p>
                  </div>
               ))}
            </div>
         </section>

         {/* 5. Markets Monitor (Detailed Table-style Grid) */}
         <section className="bg-gray-50 py-20 border-y border-gray-100">
            <div className="container mx-auto px-4">
               <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-sm font-black uppercase tracking-[3px] text-[#111]">MARKETS MONITOR</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <h4 className="text-xl font-black text-green-600 border-b-2 border-green-600 inline-block pb-1 uppercase tracking-tighter">Global Indices</h4>
                     <div className="space-y-4">
                        {[
                           { name: "S&P 500", value: "4,783.45", change: "+1.24%", color: "text-green-500" },
                           { name: "Nasdaq 100", value: "16,423.10", change: "+0.85%", color: "text-green-500" },
                           { name: "FTSE 100", value: "7,621.50", change: "-0.32%", color: "text-red-500" },
                           { name: "DAX 40", value: "15,892.40", change: "+0.45%", color: "text-green-500" }
                        ].map((index, i) => (
                           <div key={i} className="flex justify-between items-center bg-white p-4 border border-gray-100 hover:shadow-md transition-shadow">
                              <span className="font-black text-sm">{index.name}</span>
                              <div className="flex gap-6 items-center">
                                 <span className="font-bold text-sm">{index.value}</span>
                                 <span className={`font-black text-xs ${index.color}`}>{index.change}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-6">
                     <h4 className="text-xl font-black text-green-600 border-b-2 border-green-600 inline-block pb-1 uppercase tracking-tighter">Commodities</h4>
                     <div className="space-y-4">
                        {[
                           { name: "Gold", value: "$2,042.50", change: "+0.15%", color: "text-green-500" },
                           { name: "Silver", value: "$23.12", change: "-0.45%", color: "text-red-500" },
                           { name: "Brent Oil", value: "$82.14", change: "+1.85%", color: "text-green-500" },
                           { name: "Natural Gas", value: "$2.45", change: "-2.10%", color: "text-red-500" }
                        ].map((index, i) => (
                           <div key={i} className="flex justify-between items-center bg-white p-4 border border-gray-100 hover:shadow-md transition-shadow">
                              <span className="font-black text-sm">{index.name}</span>
                              <div className="flex gap-6 items-center">
                                 <span className="font-bold text-sm">{index.value}</span>
                                 <span className={`font-black text-xs ${index.color}`}>{index.change}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. Personal Finance & Investment Academy */}
         <section className="container mx-auto px-4 py-20 space-y-12">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
               <h3 className="text-sm font-black uppercase tracking-[3px] text-[#111]">FINANCE ACADEMY</h3>
               <Link href="#" className="text-[10px] font-black uppercase text-green-600 hover:underline">Explore All Guides</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { title: "Retirement Planning: A Step-by-Step Guide for Every Age", img: "https://images.unsplash.com/photo-1593114183058-c3fd20f393be?q=80&w=400&auto=format&fit=crop" },
                  { title: "Investing 101: Building Your First Diversified Portfolio", img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400&auto=format&fit=crop" },
                  { title: "Tax Optimization Strategies for High Earners in 2024", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop" },
                  { title: "The Psychology of Money: Why We Spend and Save", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=400&auto=format&fit=crop" }
               ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-4">
                     <div className="aspect-square overflow-hidden rounded-[2px] bg-gray-100 relative">
                        <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                        <div className="absolute top-4 left-4 bg-green-500 text-white text-[9px] font-black px-2 py-1 uppercase tracking-widest">GUIDE</div>
                     </div>
                     <h4 className="text-[16px] font-black leading-tight group-hover:text-green-600 transition-colors">{post.title}</h4>
                  </div>
               ))}
            </div>
         </section>

         {/* 7. Video Market Reports (Immersive Section) */}
         <section className="bg-[#0f1218] text-white p-16 -mx-4 md:-mx-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
               <div className="space-y-8">
                  <div className="inline-block bg-green-500 text-white text-[10px] font-black px-4 py-1.5 tracking-[0.2em] uppercase">VIDEO DESK</div>
                  <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">Daily Market Analysis & Economic Forecasts</h3>
                  <p className="text-white/60 text-lg leading-relaxed">Join our senior analysts as they break down the day's biggest financial headlines and what they mean for your portfolio.</p>
                  <div className="flex gap-4">
                     <button className="bg-white text-black px-8 py-3 text-sm font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all rounded-sm flex items-center gap-2"><Play size={16} fill="currentColor" /> Watch Now</button>
                     <button className="border border-white/20 text-white px-8 py-3 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm">All Videos</button>
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-6">
                  {[
                     { title: "Weekly Roundup: The Global Economy Under Scrutiny", time: "12:45" },
                     { title: "Interview: Fed Chair on Inflation Targets for 2024", time: "08:20" },
                     { title: "Tech Stocks Spotlight: Why AI is Driving Valuations", time: "05:15" }
                  ].map((vid, i) => (
                     <div key={i} className="flex gap-6 group cursor-pointer items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
                        <div className="w-32 h-20 bg-black rounded-sm overflow-hidden relative shrink-0">
                           <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover opacity-40" />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <Play fill="currentColor" size={16} />
                           </div>
                        </div>
                        <div className="space-y-1">
                           <h5 className="text-[16px] font-bold group-hover:text-green-500 transition-colors leading-tight">{vid.title}</h5>
                           <span className="text-[11px] text-white/40 font-black uppercase tracking-widest">{vid.time}</span>
                        </div>
                      </div>
                   ))}
                </div>
             </div>
          </section>

         {/* 4. National News List & Sidebar - Matching SS4/SS5 */}
         <section className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 grow">
            {/* Left Content: National News */}
            <div className="lg:col-span-8 space-y-12">
               <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-sm font-black uppercase tracking-[3px] text-[#111]">NATIONAL NEWS</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="space-y-16">
                  {[
                     { title: "Eurozone: Digital Euro Could Boost Single Currency's International Use", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
                     { title: "Chinese Internet Majors' Investments to Slow Profit Growth", img: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop" },
                     { title: "2021 PDPW Conference Content Now Available On-Demand", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
                     { title: "Huawei Announces Watch Fit Elegant With Steel Frame", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop" },
                     { title: "'Unceasing Congestion': China's Shipping Delays Snarl Trade", img: "https://images.unsplash.com/photo-1586528116311-ad86d7c7170a?q=80&w=800&auto=format&fit=crop" }
                  ].map((post, i) => (
                     <div key={i} className="flex flex-col md:flex-row gap-10 group items-center">
                        <div className="md:w-[350px] aspect-[1.5/1] shrink-0 overflow-hidden rounded-[1px]">
                           <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="space-y-4 flex-1">
                           <h3 className="text-2xl font-black leading-tight group-hover:text-green-600 transition-colors">{post.title}</h3>
                           <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">MARKETS — MAR 15, 2021</div>
                           <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement...</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-16">
               <div className="space-y-10">
                  <div className="flex items-center gap-4 mb-4">
                     <h3 className="text-sm font-black uppercase tracking-[3px]">EUROPE</h3>
                     <div className="flex-1 h-[1px] bg-gray-100"></div>
                  </div>
                  <div className="group cursor-pointer space-y-6">
                     <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
                        <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" />
                     </div>
                     <h4 className="text-xl font-black leading-tight group-hover:text-green-600 transition-colors">Euro Business Growth Accelerating At Its Fastest Pace Since 2019</h4>
                     <div className="text-[10px] text-green-600 font-black uppercase">MARKETS — JUN 18, 2021</div>
                  </div>
                  <div className="space-y-6">
                     {[
                        { title: "Shipping Lines Continue to Increase Fees, Firms Face Mor...", img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=400&auto=format&fit=crop" },
                        { title: "Qatar Airways Helps Bring Tens of Thousands of Seafarers", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=400&auto=format&fit=crop" },
                        { title: "DHL Completes $5M Investment in New Service...", img: "https://images.unsplash.com/photo-1580674684081-77673f4bb012?q=80&w=400&auto=format&fit=crop" }
                     ].map((post, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer items-start">
                           <div className="w-20 h-16 shrink-0 overflow-hidden rounded-[1px]">
                              <img src={post.img} className="w-full h-full object-cover" />
                           </div>
                           <div className="space-y-1 flex-1">
                              <h4 className="text-[14px] font-black leading-tight group-hover:text-green-600 transition-colors line-clamp-2">{post.title}</h4>
                              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">JAN 15, 2021</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Sidebar Phone Ad - Matching SS5 */}
               <div className="bg-white border border-gray-100 p-12 text-center rounded-[1px] space-y-8 relative overflow-hidden group cursor-pointer h-[700px] flex flex-col items-center">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">THE NEW</div>
                  <div className="text-3xl font-black tracking-tighter text-black uppercase">SMARTMAG</div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">Trusted by over 12,000 users worldwide</p>
                  <button className="bg-[#32d583] text-white px-8 py-3 text-[12px] font-black uppercase tracking-widest rounded-sm hover:bg-black transition-colors">EXPLORE NOW</button>
                  <div className="mt-12 w-full h-full max-h-[400px] relative">
                     <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-contain transform rotate-x-12 group-hover:scale-105 transition-transform" />
                  </div>
               </div>
            </div>
         </section>

         <TechBlogFooter />
      </main>
   );
}
