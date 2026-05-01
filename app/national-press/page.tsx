import NationalPressHeader from "@/components/NationalPressHeader";
import TechBlogFooter from "@/components/TechBlogFooter";
import { Play, Search, Mail as MailIcon, ChevronRight } from "lucide-react";

export default function NationalPressPage() {
   return (
      <main className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white pb-0">
         <NationalPressHeader />

         {/* 1. Hero Grid - Exactly per SS2 */}
         <section className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
               {/* Left Big Column */}
               <div className="lg:col-span-8 flex flex-col md:flex-row gap-10 border-r border-gray-100 pr-10">
                  <div className="flex-1 space-y-6 group cursor-pointer order-2 md:order-1">
                     <span className="bg-[#0066cc] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">US POLITICS</span>
                     <h2 className="text-3xl md:text-[38px] font-serif font-black leading-[1.1] text-[#1e293b] group-hover:text-blue-700 transition-colors tracking-tight">
                        Poll Shows Clinton-Harris Ticket Leading Over Biden-Harris Against Trump
                     </h2>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">BY JOHN DOE — JAN 4, 2021</div>
                     <p className="text-gray-500 text-[15px] leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of...</p>
                  </div>
                  <div className="md:w-[450px] aspect-[4/3] shrink-0 overflow-hidden rounded-[1px] order-1 md:order-2 group cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                  </div>
               </div>
               
               {/* Right Column Stack */}
               <div className="lg:col-span-4 space-y-10">
                  <div className="group cursor-pointer space-y-4">
                     <div className="aspect-[16/9] overflow-hidden rounded-[1px]">
                        <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="text-lg font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">Scientists Track Sea Level Rise From Glaciers in Greenland & Antarctica</h3>
                     <p className="text-gray-400 text-[13px] leading-relaxed">To understand the new politics stance and other pro nationals of recent times...</p>
                  </div>
                  <div className="flex gap-4 group cursor-pointer items-start">
                     <div className="w-20 h-20 bg-black flex items-center justify-center p-4">
                        <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=200" className="w-full grayscale brightness-200" />
                     </div>
                     <div className="space-y-1">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">BUSINESS</span>
                        <h4 className="text-[14px] font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">OpenAI Working on New Reasoning Tech Under Code Name 'Strawberry'</h4>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Row of Hero Section - Related News per SS2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 mt-10 border-t border-gray-100">
               {[
                  { title: "Angry Farmers Block Brussels to Protest EU Policies, Cheap Imports", img: "https://images.unsplash.com/photo-1502484736528-7440011f3d59?q=80&w=400" },
                  { title: "Nearly 55 Million Face Hunger in West and Central Africa, UN", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400" },
                  { title: "100 Women Race in Hamilton to Win Back a World Record", img: "https://images.unsplash.com/photo-1533035353720-f1c6a75108bb?q=80&w=400" },
                  { title: "What is The EU Doing in Response to The COVID-19 Coronavirus?", img: "https://images.unsplash.com/photo-1584118624012-df456bdca98c?q=80&w=400" }
               ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start border-r border-gray-50 pr-4 last:border-0">
                     <div className="space-y-2">
                        <h4 className="text-[14px] font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">{post.title}</h4>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">JAN 4, 2021</div>
                     </div>
                     <div className="w-20 h-16 shrink-0 overflow-hidden">
                        <img src={post.img} className="w-full h-full object-cover" />
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* 2. News Just In Section - Matching SS1 5-Col Grid */}
         <section className="bg-[#f8f9fa] py-16 mt-10 border-y border-gray-100">
            <div className="container mx-auto px-4">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-serif font-black flex items-center gap-3">News Just In</h3>
                  <button className="text-[11px] font-black uppercase text-gray-400 bg-white border border-gray-200 px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-all">View More</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {[
                     { title: "EU Economy will Grow and Inflation Decline Further, New Forecast Says", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400" },
                     { title: "European Fashion Industry Projected to Expand by 48% by 2025", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400" },
                     { title: "Europe's Economic Pain Drags on With Zero Growth At The End of Last Year", img: "https://images.unsplash.com/photo-1611974714851-48210433d711?q=80&w=400" },
                     { title: "Police Investigating 2 Car Wrecks at Separate Woburn Businesses", img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=400" },
                     { title: "5 Important Things You Should Know About the War in Ukraine", img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=400" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-4">
                        <div className="aspect-[1.4/1] overflow-hidden rounded-[1px]">
                           <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <h4 className="text-[15px] font-serif font-black leading-tight group-hover:text-blue-700 transition-colors line-clamp-3">{post.title}</h4>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">BY JOHN DOE — JAN 4, 2021</div>
                        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and...</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 3. World Politics Section - Matching SS1 */}
         <section className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
               <h3 className="text-xl font-serif font-black border-l-4 border-blue-600 pl-4">World Politics</h3>
               <button className="text-[11px] font-black uppercase text-gray-400 hover:text-black transition-colors">More from Politics</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Left Main Article */}
               <div className="lg:col-span-8 group cursor-pointer space-y-6">
                  <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
                     <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-3xl font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">How an EU-Funded Security Force Helped Senegal Crush Democracy Protests</h2>
                  <div className="flex gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                     <span className="text-blue-600">EURO ZONE</span>
                     <span>— BY JOHN DOE</span>
                  </div>
                  <p className="text-gray-500 text-[16px] leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson...</p>
               </div>
               
               {/* Right List articles */}
               <div className="lg:col-span-4 space-y-12">
                  <div className="space-y-6 group cursor-pointer">
                     <h3 className="text-2xl font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">IMF Warns Italy on High Public Debt and Urges Fiscal Reforms</h3>
                     <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">POLITICS — BY JOHN DOE</span>
                     <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
                        <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800" className="w-full h-full object-cover" />
                     </div>
                     <p className="text-gray-400 text-sm leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley...</p>
                  </div>
                  <div className="flex gap-4 group cursor-pointer items-start">
                     <div className="flex-1 space-y-2">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">US POLITICS</span>
                        <h4 className="text-[15px] font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">Elon Musk's SpaceX Deepening Ties to US Intelligence Agencies</h4>
                     </div>
                     <div className="w-24 h-16 shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400" className="w-full h-full object-cover" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Newsletter Section - Matching SS4 */}
         <section className="container mx-auto px-4 py-20">
            <div className="bg-white border-[3px] border-blue-600 p-12 relative rounded-[1px] flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-serif font-black leading-tight">Sign up to our daily Newsletter, get the latest news and reviews from our specialist writers</h2>
               </div>
               <div className="flex-1 w-full space-y-4">
                  <div className="flex">
                     <input type="email" placeholder="Your email address..." className="flex-1 bg-gray-50 border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-blue-600" />
                     <button className="bg-blue-600 text-white px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-black transition-colors">SUBSCRIBE</button>
                  </div>
                  <div className="flex items-center gap-3">
                     <input type="checkbox" className="w-4 h-4" />
                     <p className="text-[11px] text-gray-400">By signing up, you agree to the our terms and our Privacy Policy agreement.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. Ukraine Conflict Section - Matching SS4 */}
         <section className="container mx-auto px-4 py-20 pb-40">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
               <h3 className="text-xl font-serif font-black border-l-4 border-blue-600 pl-4">Ukraine Conflict</h3>
               <button className="text-[11px] font-black uppercase text-gray-400 hover:text-black transition-colors">View All</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Left Large Column */}
               <div className="lg:col-span-8 group cursor-pointer space-y-6">
                  <div className="relative aspect-[1.2/1] overflow-hidden rounded-[1px]">
                     <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=1200" className="w-full h-full object-cover" />
                     <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">UKRAINE CONFLICT</div>
                     <div className="absolute bottom-6 right-6 bg-blue-600 text-white text-xs font-black p-1.5 rounded-sm shadow-xl">7.2</div>
                  </div>
                  <h2 className="text-3xl font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">Review: Russia's Putin Sets Out Conditions for Peace Talks with Ukraine</h2>
                  <div className="text-[10px] text-gray-400 tracking-widest uppercase font-bold">JOHN DOE — JAN 20, 2021</div>
               </div>
               
               {/* Right 4-Grid Column */}
               <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  {[
                     { title: "White House Urges Ukraine Aid Be Expedited Before Winter Arrives", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400" },
                     { title: "China, Russia Talk of Bolstering Security Cooperation in Lavrov Visit", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400" },
                     { title: "Protesters Rally All Over World To Demand Putin End War in Ukraine", img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=400" },
                     { title: "Russia-Ukraine War Updates: At Least 31 Killed in Missile Strikes", img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=400" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-4">
                        <div className="aspect-[1.5/1] overflow-hidden rounded-[1px]">
                           <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <h4 className="text-[14px] font-serif font-black leading-tight group-hover:text-blue-700 transition-colors line-clamp-3">{post.title}</h4>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 6. Banner Ad - Matching SS5 */}
         <section className="container mx-auto px-4 py-16">
            <div className="bg-[#fcfcfc] border border-gray-100 p-12 text-center group cursor-pointer relative overflow-hidden rounded-[1px]">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200')] opacity-[0.04]"></div>
               <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center gap-8 mb-6">
                     <span className="text-[10px] font-black text-gray-300 uppercase tracking-[6px]">THE NEW SMARTMAG</span>
                     <div className="w-[1px] h-8 bg-gray-100"></div>
                     <div className="text-left">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">TRUSTED BY</div>
                        <div className="text-2xl font-black tracking-tighter">18000+</div>
                     </div>
                  </div>
                  <button className="bg-black text-white px-10 py-3.5 text-[11px] font-black uppercase tracking-[4px] hover:bg-blue-600 transition-all rounded-[1px]">GET STARTED</button>
               </div>
            </div>
         </section>

         {/* 7. Business & Economy Section with Sidebar Ad - Matching SS5 */}
         <section className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Business Column */}
            <div className="lg:col-span-5 space-y-10">
               <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-serif font-black">Business News</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="group cursor-pointer space-y-6">
                  <div className="aspect-[16/10] overflow-hidden rounded-[1px] relative">
                     <img src="https://images.unsplash.com/photo-1611974714851-48210433d711?q=80&w=800" className="w-full h-full object-cover" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-serif font-black opacity-40 select-none">WALL ST</div>
                  </div>
                  <h3 className="text-2xl font-serif font-black leading-tight group-hover:text-blue-700 transition-colors">Wall Street's Upbeat Earnings Expectations Set High Bar for US Companies</h3>
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">ECONOMY — BY JOHN DOE</div>
                  <p className="text-gray-400 text-sm leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement...</p>
               </div>
            </div>

            {/* Economy Column */}
            <div className="lg:col-span-3 space-y-10">
               <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-serif font-black">Economy</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="space-y-10">
                  {[
                     { title: "Qantas Settles Flight Cancellation Lawsuit with $66 Million Penalty", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400" },
                     { title: "United Economy Vs Basic Economy: What You Need To Know", img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=400" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-4">
                        <div className="aspect-[1.5/1] overflow-hidden rounded-[1px]">
                           <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <h4 className="text-[15px] font-serif font-black leading-tight group-hover:text-blue-700 transition-colors text-center px-4">{post.title}</h4>
                        <div className="text-[10px] text-gray-400 font-bold uppercase text-center">BY SHANE DOE</div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Sidebar Ad Column */}
            <div className="lg:col-span-4 space-y-10">
               <div className="bg-[#f8f9fa] border border-gray-100 p-1 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800')] bg-cover bg-center opacity-70"></div>
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-between py-20 px-8 bg-gradient-to-t from-black/80 via-transparent to-black/20 text-white">
                     <div className="text-center space-y-4">
                        <div className="text-[10px] font-black tracking-[4px] uppercase">THE NEW</div>
                        <div className="text-4xl font-serif font-black tracking-tighter">SMARTMAG</div>
                     </div>
                     <div className="text-center space-y-8">
                        <button className="bg-[#e21c23] text-white px-10 py-3.5 text-[11px] font-black uppercase tracking-[4px] hover:bg-white hover:text-black transition-all rounded-sm">GET STARTED</button>
                        <h3 className="text-5xl font-serif font-black leading-tight">Top Trending</h3>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <TechBlogFooter />
      </main>
   );
}
