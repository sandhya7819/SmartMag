import GadgetsMeHeader from "@/components/GadgetsMeHeader";
import TechBlogFooter from "@/components/TechBlogFooter";
import { Play, Search, Mail as MailIcon, ChevronRight, Eye } from "lucide-react";

export default function GadgetsMePage() {
   return (
      <main className="min-h-screen bg-white font-sans selection:bg-[#e21b7a] selection:text-white pb-0">
         <GadgetsMeHeader />

         {/* 1. Hero Section - Matching SS2 */}
         <section className="container mx-auto px-4 py-8">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[4px] group cursor-pointer mb-[-100px] z-0">
               <img src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto bg-white p-8 md:p-12 shadow-2xl rounded-[1px]">
               <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                     <span className="text-[#e21b7a]">MOBILE PHONES</span>
                     <span className="text-gray-300">|</span>
                     <span className="text-gray-400">JAN 12, 2020</span>
                     <span className="text-gray-300">|</span>
                     <span className="text-gray-400">SHANE DOE</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-[#111] group-hover:text-[#e21b7a] transition-colors">
                     Leak reveals details of upcoming OnePlus mid-range phone with Dimensity SoC
                  </h2>
               </div>
            </div>

            {/* Hero Sub-grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
               <div className="flex gap-6 group cursor-pointer bg-gray-50 p-6 rounded-[2px] hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-32 h-32 shrink-0 overflow-hidden rounded-[2px]">
                     <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba3f21?q=80&w=400" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-3">
                     <span className="text-[10px] font-black text-[#e21b7a] tracking-widest uppercase">GADGETS</span>
                     <h3 className="text-lg font-black leading-tight group-hover:text-[#e21b7a] transition-colors">The Ultimate Guide to Select Which Apple Smartwatch Is Best for You</h3>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">JAN 11, 2020</div>
                  </div>
               </div>
               <div className="flex gap-6 group cursor-pointer bg-gray-50 p-6 rounded-[2px] hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-32 h-32 shrink-0 overflow-hidden rounded-[2px]">
                     <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=400" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-3">
                     <span className="text-[10px] font-black text-[#e21b7a] tracking-widest uppercase">SCIENCE & TECH</span>
                     <h3 className="text-lg font-black leading-tight group-hover:text-[#e21b7a] transition-colors">Scientists Create First Map of DNA Modification in the Developing Human Brain</h3>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">JAN 11, 2020</div>
                  </div>
               </div>
            </div>
         </section>

         {/* 2. Don't Miss! Horizontal 5-Col Grid - Matching SS3 */}
         <section className="container mx-auto px-4 py-16 border-t border-gray-100">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-sm font-black uppercase tracking-[3px] text-[#111]">DON'T MISS!</h3>
               <button className="text-[10px] font-black uppercase text-gray-400 hover:text-[#e21b7a] transition-colors">More from Technology</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
               {[
                  { cat: "GADGETS", title: "China's 'Black Panther 2.0' Robot Dog Run Can Even Outrun Usain Bolt", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=400" },
                  { cat: "MOBILE PHONES", title: "ChatGPT: Everything You Need to Know About the AI-Powered Chatbot", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400" },
                  { cat: "GADGETS", title: "Keto vs Mediterranean: Which Diet is Best for Metabolic Health?", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400" },
                  { cat: "TUTORIALS", title: "How to Take a Screenshot on an iPhone or Android Phone, Unknown Tricks", img: "https://images.unsplash.com/photo-1556656793-062ff98782ee?q=80&w=400" },
                  { cat: "GADGETS", title: "Electric Bikes: The Future of Urban Mobility? Discover the Game-Changer!", img: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=400" }
               ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-4">
                     <div className="aspect-[1/1] overflow-hidden rounded-[4px]">
                        <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                     </div>
                     <div className="space-y-1.5">
                        <h4 className="text-[14px] font-black leading-tight group-hover:text-[#e21b7a] transition-colors line-clamp-3">{post.title}</h4>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex gap-2">
                           <span>MAR 15, 2020</span>
                           <span>|</span>
                           <span>SHANE DOE</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* 3. Latest Tech & People's Favorite - Matching SS3 */}
         <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
               <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-sm font-black uppercase tracking-[3px] text-white bg-black px-4 py-1">LATEST TECH.</h3>
                  <div className="flex-1 h-[2px] bg-black"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                     { title: "Maximize Your Old iPhone's Battery Life with These Tips", img: "https://images.unsplash.com/photo-1556656793-062ff98782ee?q=80&w=600" },
                     { title: "How to Make a PS4 Or PS5 Controller Work with PC Games", img: "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?q=80&w=600" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-6">
                        <div className="aspect-[16/10] overflow-hidden rounded-[2px] relative">
                           <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                           <div className="absolute bottom-6 left-6 right-6">
                              <h3 className="text-white text-2xl font-black leading-tight group-hover:text-[#e21b7a] transition-colors">{post.title}</h3>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-10">
               <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-sm font-black uppercase tracking-[3px]">PEOPLE'S FAVORITE</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="space-y-6">
                  {[
                     { title: "Teens & Video Games: New Research on Teenage Video Game...", date: "SEP 13, 2020", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200" },
                     { title: "Grab the Latest Beats Solo Wireless Headphones for Half...", date: "SEP 12, 2020", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200" },
                     { title: "Bali Airport Autogates Make Tourist Arrival Process Super Speedy", date: "SEP 10, 2020", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=200" },
                     { title: "AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem", date: "SEP 9, 2020", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=200" }
                  ].map((post, i) => (
                     <div key={i} className="flex gap-4 group cursor-pointer items-start">
                        <div className="w-20 h-20 shrink-0 overflow-hidden rounded-[2px]">
                           <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <div className="space-y-1.5">
                           <h4 className="text-[14px] font-black leading-tight group-hover:text-[#e21b7a] transition-colors line-clamp-2">{post.title}</h4>
                           <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{post.date}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. Trending Videos - Matching SS6 */}
         <section className="container mx-auto px-4 py-16">
            <div className="bg-[#0f1218] rounded-[4px] p-10 lg:p-14 space-y-10">
               <div className="flex items-center gap-3">
                  <h3 className="text-xl font-black uppercase text-white tracking-widest">TRENDING VIDEOS<span className="text-[#e21b7a]">.</span></h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group cursor-pointer space-y-6">
                     <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
                        <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-[#e21b7a]/90 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                              <Play size={24} fill="white" className="ml-1" />
                           </div>
                        </div>
                     </div>
                     <h3 className="text-white text-xl md:text-2xl font-black leading-tight group-hover:text-[#e21b7a] transition-colors line-clamp-2">
                        Apple and Sony Still Working to Bring VR Gaming Controller Support to Vision Pro
                     </h3>
                  </div>
                  <div className="group cursor-pointer space-y-6">
                     <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
                        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                              <Play size={24} fill="white" className="ml-1" />
                           </div>
                        </div>
                     </div>
                     <h3 className="text-white text-xl md:text-2xl font-black leading-tight group-hover:text-[#e21b7a] transition-colors line-clamp-2">
                        The Cities with The Most Skyscrapers in 2024: Hong Kong, Dubai, New York City & More
                     </h3>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. More From Tech & Ad - Matching SS6 */}
         <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
               <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-sm font-black uppercase tracking-[3px]">MORE FROM TECH...</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="flex flex-col md:flex-row gap-8 group pb-12 border-b border-gray-50 last:border-0 grow items-center">
                  <div className="md:w-[320px] aspect-[1.5/1] shrink-0 overflow-hidden rounded-[4px] relative">
                     <img src="https://images.unsplash.com/photo-1544244015-0cd4b3ff869d?q=80&w=400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 text-white">
                           <Search size={20} />
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4 flex-1">
                     <div className="flex items-center gap-3 text-[10px] font-black tracking-widest uppercase">
                        <span className="text-[#e21b7a]">GAMING</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">MAR 12, 2021</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">92 VIEWS</span>
                     </div>
                     <h3 className="text-2xl font-black leading-tight group-hover:text-[#e21b7a] transition-colors tracking-tight">Top Features of RedMagic Nova Gaming Tablet Review: An Android Gaming Powerhouse</h3>
                     <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement...</p>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-4">
               <div className="bg-white border border-gray-100 p-10 text-center rounded-[4px] space-y-6 relative overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">THE NEW</div>
                  <div className="text-3xl font-black tracking-tighter text-black uppercase">SMARTMAG</div>
                  <button className="bg-[#e21b23] text-white px-8 py-3 text-[12px] font-black uppercase tracking-widest rounded-sm block w-full hover:bg-black transition-colors">GET STARTED</button>
               </div>
            </div>
         </section>

         {/* 6. Main List & Sidebar Picks */}
         <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-100">
            <div className="lg:col-span-8 space-y-12">
               {[
                  { cat: "GAMING", title: "The Less We Know About Fumito Ueda's New Game The Better", views: "84 Views", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400" },
                  { cat: "GAMING", title: "Indigenous Gamers Group Aims to Show How to Make a Living While Uplifting Culture", views: "71 Views", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400" },
                  { cat: "SCIENCE & TECH", title: "Feb. 01, Today in History: Space Shuttle Columbia Destroyed During Re-Entry", views: "62 Views", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400" },
                  { cat: "SCIENCE & TECH", title: "Team's Hip Replacement Surgery Invention is Set to be World First", views: "45 Views", img: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=400" },
                  { cat: "GADGETS", title: "How to Pair Wireless Headphones and Earphones to Your Phone or Computer", views: "101 Views", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" }
               ].map((post, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 group pb-12 border-b border-gray-50 last:border-0 grow items-center">
                     <div className="md:w-[320px] aspect-[1.5/1] shrink-0 overflow-hidden rounded-[4px]">
                        <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     </div>
                     <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-3 text-[10px] font-black tracking-widest uppercase">
                           <span className="text-[#e21b7a]">{post.cat}</span>
                           <span className="text-gray-300">|</span>
                           <span className="text-gray-400">MAR 15, 2020</span>
                           <span className="text-gray-300">|</span>
                           <span className="flex items-center gap-1 text-gray-400"><Eye size={12} /> {post.views}</span>
                        </div>
                        <h3 className="text-2xl font-black leading-tight group-hover:text-[#e21b7a] transition-colors tracking-tight">{post.title}</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement...</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="lg:col-span-4 space-y-16">
               <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-4">
                     <h3 className="text-sm font-black uppercase tracking-[3px]">OUR PICKS</h3>
                     <div className="flex-1 h-[1px] bg-gray-100"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                     {[
                        { title: "ASUS Vs Dell Laptops: Discover Which Brand Offers...", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200" },
                        { title: "Best Smartwatches with SIM Cards in 2025: Stay...", img: "https://images.unsplash.com/photo-1508685096489-775b3433c056?q=80&w=200" },
                        { title: "Figure AI Plans to Ship 100,000 Humanoid Robots...", img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=200" },
                        { title: "Advertisement Feature: 10 Great Gadgets to Make...", img: "https://images.unsplash.com/photo-1544244015-0cd4b3ff869d?q=80&w=200" }
                     ].map((post, i) => (
                        <div key={i} className="group cursor-pointer space-y-3">
                           <div className="aspect-[4/3] overflow-hidden rounded-[2px]">
                              <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                           </div>
                           <h4 className="text-[13px] font-black leading-tight group-hover:text-[#e21b7a] transition-colors line-clamp-3">{post.title}</h4>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Banner Case (Blue SS5 Style) */}
               <div className="bg-[#0047ba] rounded-[4px] p-10 py-16 text-center space-y-8 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                  <div className="relative z-10 space-y-6">
                     <p className="text-white text-[16px] leading-relaxed font-bold">Trusted by thousands. SmartMag is Flexible and Useable for most of the News & Blogging Websites.</p>
                     <button className="bg-[#f0c400] text-black px-8 py-3 text-[13px] font-black uppercase tracking-widest flex items-center gap-3 mx-auto shadow-xl hover:bg-black hover:text-white transition-all transform group-hover:translate-x-2">
                        Get SmartMag Now <ChevronRight size={18} />
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <TechBlogFooter />
      </main>
   );
}
