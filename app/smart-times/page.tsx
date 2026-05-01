import SmartTimesHeader from "@/components/SmartTimesHeader";
import TechBlogFooter from "@/components/TechBlogFooter";
import { MessageCircle, Clock, ArrowRight, Play, Eye, Share2, Facebook, Twitter, Instagram, Youtube, ChevronRight, Bookmark } from "lucide-react";
import Link from "next/link";

const heroPosts = [
  {
    cat: "POLITICS",
    title: "White House Preparing New Rules for Private Space Industry Expansion",
    author: "James Dean",
    date: "April 21, 2026",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200",
    size: "huge"
  },
  {
    cat: "BUSINESS",
    title: "Global Markets Rally as Tech Giants Report Record Profits",
    date: "April 20, 2026",
    img: "https://images.unsplash.com/photo-1611974714851-48210433d711?q=80&w=800",
    size: "small"
  },
  {
    cat: "WORLD",
    title: "Breakthrough in Fusion Energy Research Promises Clean Power",
    date: "April 20, 2026",
    img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800",
    size: "small"
  }
];

export default function SmartTimesPage() {
   return (
      <main className="min-h-screen bg-white font-serif selection:bg-[#e21c23] selection:text-white pb-0">
         <SmartTimesHeader />

         {/* 1. Featured Top Row (4 Small Articles) - Exact Match Screenshot 1 */}
         <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
               {[
                  { cat: "SCIENCE", title: "SpaceX Launches Starlink Satellites on 'American Ground'", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400" },
                  { cat: "POLITICS", title: "The China-Built Ship that Pulled a US Navy Jet Wreckage", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400" },
                  { cat: "EUROPE", title: "Anti-War Protests Intensify in World Along with Global", img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=400" },
                  { cat: "WORLD", title: "US Nod to Nato for Sending Fighter Jets to Ukraine", img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=400" }
               ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                     <div className="w-[85px] h-[75px] shrink-0 overflow-hidden rounded-[1px]">
                        <img src={post.img} className="w-full h-full object-cover" />
                     </div>
                     <div className="space-y-1.5 pt-0.5">
                        <span className="text-[11px] font-black text-[#e21c23] tracking-widest uppercase font-sans">{post.cat}</span>
                        <h4 className="text-[14px] font-black leading-tight group-hover:text-red-700 transition-colors line-clamp-2">{post.title}</h4>
                     </div>
                  </div>
               ))}
            </div>
            <div className="w-full h-[1px] bg-gray-100 mt-10"></div>
         </section>

         {/* 2. Main Hero Section (Large Left, Just In Right) */}
         <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Left Column: Big Article */}
            <div className="lg:col-span-8 space-y-8">
               <div className="group cursor-pointer space-y-6">
                  <h2 className="text-[42px] lg:text-[52px] font-black leading-[1.05] group-hover:text-red-700 transition-colors tracking-tight">EU's New Sanctions Aim to Cut Russia Off From World Bank, IMF</h2>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 capitalize tracking-widest font-sans">
                     <span className="text-[#e21c23] font-black uppercase">EUROPE</span>
                     <span className="text-gray-300">By</span>
                     <span className="text-black font-black">John Doe</span>
                     <span>— Jan 4, 2021</span>
                  </div>
                  <div className="relative aspect-[16/9.2] overflow-hidden rounded-[1px]">
                     <img src="https://images.unsplash.com/photo-1577017040065-650ee4d43339?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                     <div className="absolute bottom-6 left-6 bg-white/95 px-6 py-3 text-[22px] font-black italic tracking-tighter shadow-2xl">#SPPraTodos</div>
                  </div>
                  <p className="text-[#333] text-[18px] leading-relaxed max-w-[95%]">The European Union is preparing a new round of severe sanctions aimed at further isolating Moscow's financial system from the global economy...</p>
                  <button className="text-[11px] font-black uppercase tracking-[2.5px] border-2 border-gray-100 px-6 py-2.5 hover:bg-black hover:text-white transition-all font-sans">READ MORE</button>
               </div>

               {/* Below Big Article: 2 Columns of Smaller Articles */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-gray-100">
                  <div className="space-y-10">
                     {[
                        { title: "Oil Rises as Investors Look Past Possible Reserve Releases", img: "https://images.unsplash.com/photo-1611974714851-48210433d711?q=80&w=800" },
                        { title: "Kevin Durant Pulled from Game Due to H&S Protocols", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800" }
                     ].map((post, i) => (
                        <div key={i} className="group cursor-pointer space-y-6">
                           <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
                              <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                           </div>
                           <h3 className="text-2xl font-black leading-tight group-hover:text-red-700 transition-colors tracking-tight italic">{post.title}</h3>
                           <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement...</p>
                        </div>
                     ))}
                  </div>
                  <div className="space-y-10">
                     {[
                        { title: "U.S. Senate Passes $1.5 Trillion Gov't Funding Bill with Ukraine", img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=800" },
                        { title: "Oxford University Launches Covid-19 Vaccine Study on Children", img: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=800", isVideo: true }
                     ].map((post, i) => (
                        <div key={i} className="group cursor-pointer space-y-6">
                           <div className="aspect-[16/10] overflow-hidden rounded-[1px] relative">
                              <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                              {post.isVideo && <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white"><Play size={16} fill="white" className="ml-0.5" /></div></div>}
                           </div>
                           <h3 className="text-2xl font-black leading-tight group-hover:text-red-700 transition-colors tracking-tight italic">{post.title}</h3>
                           <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement...</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Column: Sidebar (Just In + Opinion) */}
            <div className="lg:col-span-4 space-y-16">
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                     <h3 className="text-[15px] font-black uppercase tracking-[3px] font-sans">JUST IN</h3>
                     <div className="flex-1 h-[2px] bg-black"></div>
               </div>
               <div className="space-y-8">
                  {[
                     { title: "A New Asset Class? Bitcoin's Bid to Go Mainstream", date: "JAN 3, 2021", img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400" },
                     { title: "Review: How Hard will it be to Defend Ukraine from Russia?", date: "JAN 4, 2021", img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=400", review: "8.5" },
                     { title: "Europeans are Rushing to Distance Themselves from Putin", date: "JAN 13, 2021", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400" },
                     { title: "German Pharmacies Will Start to Get a Big Infusion of Vaccines", date: "JAN 3, 2021", img: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=400" },
                     { title: "President Presses for $1.9 Trillion COVID Relief Plan 2023", date: "JAN 3, 2021", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400" }
                  ].map((post, i) => (
                     <div key={i} className="flex gap-4 group cursor-pointer items-start">
                        <div className="flex-1 space-y-2">
                           <h4 className="text-[15px] font-black leading-tight group-hover:text-red-600 transition-colors line-clamp-3">{post.title}</h4>
                           <div className="text-[10px] font-bold text-gray-400 font-sans tracking-widest">{post.date}</div>
                        </div>
                        <div className="w-[85px] h-[75px] shrink-0 relative rounded-[1px] overflow-hidden">
                           <img src={post.img} className="w-full h-full object-cover" />
                           {post.review && <div className="absolute bottom-1 right-1 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-sm">{post.review}</div>}
                        </div>
                     </div>
                  ))}
               </div>
               </div>

               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                     <h3 className="text-[15px] font-black uppercase tracking-[3px] font-sans">OPINION</h3>
                     <div className="flex-1 h-[2px] bg-black"></div>
                  </div>
                  <div className="relative group overflow-hidden cursor-pointer h-[420px] rounded-[1px]">
                     <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=600" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                     <div className="absolute bottom-8 left-8 right-8 space-y-4">
                        <span className="text-[10px] font-black text-white bg-red-600 px-2 py-1 uppercase font-sans tracking-widest">EUROPE — JAN 4, 2021</span>
                        <h4 className="text-white text-2xl font-black leading-tight italic group-hover:text-red-400 transition-colors">France's Largest Business Summit to Conclude on Mar 22</h4>
                     </div>
                  </div>
                  <div className="space-y-6 pt-4">
                     {[
                        "AI in Basketball: Could an Algorithm Really Predict Injuries?",
                        "Can Cash Strapped Barcelona Afford to Keep Messi?",
                        "Ricardo Ferreira Switches Soccer Allegiance to Canada"
                     ].map((title, i) => (
                        <div key={i} className="group cursor-pointer border-b border-gray-50 pb-4 last:border-0 grow">
                           <h5 className="text-[16px] font-black leading-tight group-hover:text-red-600 transition-colors">{title}</h5>
                           <div className="text-[10px] text-gray-400 mt-2 uppercase font-bold font-sans tracking-widest">JAN 4, 2021</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Banner Ad (Screenshot 3 Style) */}
         <section className="container mx-auto px-4 mb-20">
            <div className="bg-[#fcfcfc] border border-gray-100 p-16 text-center group cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200')] opacity-[0.03]"></div>
               <div className="relative z-10 flex flex-col items-center">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-[6px] mb-4">THE NEW SMARTMAG</span>
                  <h2 className="text-4xl font-black text-black mb-4 tracking-tighter italic">Trusted by Over 14000 Users Worldwide</h2>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-8">BLOG, MAGAZINE, NEWS WORDPRESS THEME</p>
                  <button className="bg-black text-white px-12 py-4 text-[11px] font-black uppercase tracking-[4px] hover:bg-red-600 transition-all rounded-[1px]">GET STARTED</button>
               </div>
            </div>
         </section>

         {/* 4. Sports Section */}
         <section className="container mx-auto px-4 py-20 border-t-4 border-black">
            <div className="flex items-center justify-between mb-12">
               <h3 className="text-[22px] font-black uppercase tracking-tighter">SPORTS</h3>
               <span className="text-[12px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 cursor-pointer transition-colors font-sans">View All Posts</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 group cursor-pointer space-y-8">
                  <div className="relative aspect-[16/9.5] overflow-hidden rounded-[1px]">
                     <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all scale-90 group-hover:scale-100">
                           <Play size={32} fill="white" className="text-white ml-2" />
                        </div>
                     </div>
                  </div>
                  <h2 className="text-4xl font-black leading-tight group-hover:text-red-700 transition-colors tracking-tight italic">Marquez Explains Lack of Confidence During Qatar GP Race</h2>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase font-sans tracking-widest">
                     <span className="text-[#e21c23] font-black">SPORTS</span>
                     <span>—</span>
                     <span>JAN 13, 2021</span>
                  </div>
                  <p className="text-[#333] text-[17px] leading-relaxed">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement...</p>
               </div>
               <div className="lg:col-span-4 grid grid-cols-1 gap-10">
                  {[
                     { title: "It's Time for Basketball: Spurs at Timberwolves", img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=400" },
                     { title: "Can Wisconsin Clinch the Big Ten West this Weekend", img: "https://images.unsplash.com/photo-1521404121619-79ad05ae39d7?q=80&w=400" },
                     { title: "Olympic Great Todd Loses Training License for Hittin...", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400" },
                     { title: "Royal Challengers Bangalore Announce Faf d...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=400" },
                     { title: "Women's Tennis Association Could Pull Out...", img: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=400" }
                  ].map((post, i) => (
                     <div key={i} className="flex gap-4 group cursor-pointer items-start">
                        <div className="w-[100px] h-[75px] shrink-0 overflow-hidden rounded-[1px]">
                           <img src={post.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1 pt-0.5">
                           <h4 className="text-[15px] font-black leading-tight group-hover:text-red-600 transition-colors line-clamp-3 italic tracking-tight">{post.title}</h4>
                           <div className="text-[10px] text-gray-400 font-sans tracking-widest">JAN 14, 2021</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 5. Bottom Multi-Column Section */}
         <section className="container mx-auto px-4 py-20 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
               { title: "TRAVEL", color: "bg-blue-400", posts: ["Dubai Live Entertainment Ban Extends to Yachts", "Museum to Display More New Artists in 2021", "Dubai Tourism Song Celebrating Festival"] },
               { title: "UK NEWS", color: "bg-red-400", posts: ["London Market Stalls Facing New Regulations", "Historic Pub in Chelsea Reopens After 2 Years", "UK High Street Seeing Unexpected Growth"] },
               { title: "SCIENCE", color: "bg-green-400", posts: ["New Study on Sleep Patterns and Productivity", "NASA's Latest Mars Images Reveal New Data", "Breakthrough in Fusion Energy Research"] },
               { title: "ECONOMY", color: "bg-yellow-400", posts: ["Global Markets React to New Interest Rates", "Rising Energy Costs Impacting Small Businesses", "Consumer Spending Hits Record High in Q1"] }
            ].map((col, i) => (
               <div key={i} className="space-y-8">
                  <div className="flex items-center gap-4">
                     <h3 className="text-[14px] font-black uppercase tracking-[3px] font-sans">{col.title}</h3>
                     <div className="flex-1 h-[2px] bg-black"></div>
                  </div>
                  <div className="space-y-8">
                     {col.posts.map((post, j) => (
                        <div key={j} className="group cursor-pointer border-b border-gray-50 pb-6 last:border-0 grow">
                           <h4 className="text-[15px] font-black leading-tight group-hover:text-red-600 transition-colors italic tracking-tight">{post}</h4>
                           <div className="text-[10px] text-gray-400 mt-2 font-sans tracking-widest uppercase font-black">JAN 14, 2021 — BY SHANE DOE</div>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </section>

         <TechBlogFooter />
      </main>
   );
}
