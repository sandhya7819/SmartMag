import TechBlogHeader from "@/components/TechBlogHeader";
import TechBlogFooter from "@/components/TechBlogFooter";
import { MessageCircle, Clock, ArrowRight, Play, Eye, Search, Moon, ChevronRight } from "lucide-react";
import Link from "next/link";

const peoplesFavorite = [
  { cat: "TECHNOLOGY", title: "Schools, Parents Disagree over Bans on Student Mobile Phones", author: "Shane Doe", readTime: "6 Mins Read", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200" },
  { cat: "GADGETS", title: "PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More", author: "Shane Doe", readTime: "6 Mins Read", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=200" },
  { cat: "TECHNOLOGY", title: "Electric Car Owners to Pay Road Tax from 2025, Hunt Announces", author: "Shane Doe", readTime: "6 Mins Read", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=200" },
  { cat: "PHONES", title: "Tackling Smartphone Addiction: Village Bans Mobiles for Minors", author: "Shane Doe", readTime: "6 Mins Read", img: "https://images.unsplash.com/photo-1558971852-42d458c6d705?q=80&w=200" }
];

const editorsPicks = [
  { cat: "GADGETS", title: "Study: Earbuds Use, Youngsters at High Risk of Hearing Loss", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400", author: "Shane Doe", date: "Mar 15, 2020" },
  { cat: "TECHNOLOGY", title: "Telescope is Revealing the Galaxies of the Universe Like Never Before", img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=400", author: "Shane Doe", date: "Mar 15, 2020" },
  { cat: "PHONES", title: "CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design", img: "https://images.unsplash.com/photo-1616422285623-13ff0167f9a8?q=80&w=400", author: "Shane Doe", date: "Mar 15, 2020" },
  { cat: "TECHNOLOGY", title: "Latest Windows 11 Preview Build Finally Lets You Search for Copied Text", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=400", author: "Shane Doe", date: "Mar 15, 2020" }
];

const videoList = [
  { title: "Photography: Save $800 on a Fujifilm Camera Before Black...", img: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=400" },
  { title: "Wireless Earbuds May Help Amplify Sound for People with...", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
  { title: "Google Play Store Will Ask You to Update Apps if they Crash", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400" },
  { title: "Does The Budget-Friendly PICO 4 VR Headset Live Up To The...", img: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=400" }
];

const videoBottom = [
  { title: "Leaf Headphones: Here are Some of The Best Devices...", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400" },
  { title: "A Piece of The Wrecked 1986 Challenger Space...", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400" },
  { title: "Security Cameras Make Us Feel Safe, but Are they...", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=400" },
  { title: "This Bedside Table Lamp Will Light Up Your World...", img: "https://images.unsplash.com/photo-1507473885765-e6ed457f7815?q=80&w=400" }
];

export default function TechBlogPage() {
  return (
    <main className="min-h-screen bg-white font-inter selection:bg-[#ab07ab] selection:text-white pb-0">
      <TechBlogHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="relative group overflow-hidden cursor-pointer h-[500px] rounded-lg">
               <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10">
                  <span className="bg-[#ab07ab] text-white text-[11px] font-black tracking-widest px-3 py-1 mb-5 inline-block uppercase rounded-sm">GADGETS</span>
                  <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight mb-5 group-hover:text-[#ab07ab] transition-colors">Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone</h2>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-white uppercase tracking-widest opacity-60">
                     <span className="flex items-center gap-2"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" className="w-5 h-5 rounded-full object-cover" /> BY Shane Doe</span>
                     <span>Jan 12, 2020</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                     <img src="https://images.unsplash.com/photo-1510511459019-5dee997dd1db?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                     <span className="text-[#3c3fde] text-[10px] font-black uppercase tracking-widest">TECHNOLOGY</span>
                     <h3 className="text-[20px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2">Tablet PC Market to Witness Exponential Growth by 2028, Sources Say</h3>
                     <div className="text-[11px] font-bold text-gray-400 capitalize">Shane Doe — Jan 11, 2020</div>
                  </div>
               </div>
               <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                     <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                     <span className="text-[#3c3fde] text-[10px] font-black uppercase tracking-widest">TECHNOLOGY</span>
                     <h3 className="text-[20px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2">Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks</h3>
                     <div className="text-[11px] font-bold text-gray-400 capitalize">Shane Doe — Jan 11, 2020</div>
                  </div>
               </div>
            </div>
          </div>

          {/* People's Favorite Sidebar */}
          <aside className="lg:col-span-4 self-start">
             <div className="flex items-center gap-3 mb-8">
                <h3 className="text-[18px] font-black text-black uppercase tracking-tight">People's <span className="text-[#ab07ab]">Favorite</span></h3>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
             </div>
             <div className="space-y-8">
                {peoplesFavorite.map((post, idx) => (
                  <div key={idx} className="flex gap-6 group cursor-pointer items-start border-b border-gray-100 pb-8 last:border-0 grow font-outfit">
                     <div className="flex-1 space-y-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${post.cat === 'GADGETS' ? 'text-[#ab07ab]' : post.cat === 'PHONES' ? 'text-blue-500' : 'text-[#3c3fde]'}`}>{post.cat}</span>
                        <h4 className="text-[16px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2 tracking-tight">{post.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                           <span>Shane Doe</span>
                           <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                           <span>{post.readTime}</span>
                        </div>
                     </div>
                     <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-[#ab07ab] transition-all">
                        <img src={post.img} className="w-full h-full object-cover" />
                     </div>
                  </div>
                ))}
             </div>
          </aside>
        </div>
      </section>

      {/* Ad Banner Section */}
      <section className="container mx-auto px-4 py-12">
         <div className="bg-black py-12 px-12 rounded-lg flex flex-col md:flex-row items-center justify-between relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[#111] transition-colors group-hover:bg-[#1a1a1a]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
               <div className="space-y-2 text-center md:text-left">
                  <span className="text-[10px] font-black text-white/40 tracking-[5px] uppercase">Sponsored</span>
                  <h2 className="text-3xl font-black text-white italic tracking-tighter">NEW SMARTMAG</h2>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Trusted by 15000+ users worldwide</p>
               </div>
               <button className="bg-white text-black px-10 py-3.5 font-black uppercase text-[11px] tracking-[2px] hover:bg-[#ab07ab] hover:text-white transition-all transform hover:scale-105">GET SMARTMAG</button>
            </div>
            <div className="relative z-10 hidden lg:block">
               <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=400" className="w-[450px] h-32 object-cover rounded-md opacity-80" />
            </div>
         </div>
      </section>

      {/* Editor's Picks Section */}
      <section className="container mx-auto px-4 py-16">
         <div className="flex items-center gap-6 mb-16">
            <div className="flex-1 h-[1px] bg-gray-100"></div>
            <h3 className="text-2xl font-black text-black uppercase tracking-tight">Editor's Picks</h3>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {editorsPicks.map((post, i) => (
               <div key={i} className="group cursor-pointer relative">
                  <div className="overflow-hidden rounded-lg mb-6 relative aspect-[1.1/1]">
                     <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <span className={`absolute top-4 left-4 text-white text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-sm uppercase ${post.cat === 'GADGETS' ? 'bg-[#ab07ab]' : post.cat === 'PHONES' ? 'bg-blue-500' : 'bg-[#3c3fde]'}`}>
                        {post.cat}
                     </span>
                  </div>
                  <div className="flex gap-4 items-start">
                     <span className="text-[52px] font-black text-gray-100 leading-none group-hover:text-[#ab07ab] transition-colors">{i + 1}</span>
                     <div className="space-y-3">
                        <h4 className="text-[17px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2 tracking-tight">{post.title}</h4>
                        <div className="text-[11px] font-bold text-gray-400 capitalize">{post.author} — {post.date}</div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Trending Videos Section */}
      <section className="bg-[#111425] py-24 text-white">
         <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-16">
               <h3 className="text-2xl font-black uppercase tracking-tight">Trending Videos</h3>
               <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
               <div className="lg:col-span-8 relative group overflow-hidden cursor-pointer rounded-xl h-[480px]">
                  <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/50 group-hover:bg-[#ab07ab] group-hover:border-transparent transition-all">
                        <Play size={32} fill="white" className="ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#ab07ab] text-white text-[10px] font-black uppercase px-2 py-0.5 mb-4 inline-block tracking-widest">GADGETS</span>
                     <h2 className="text-3xl font-black mb-6 leading-tight group-hover:text-[#ab07ab] transition-colors">Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched</h2>
                     <div className="flex items-center gap-3 text-xs font-bold text-white/50 uppercase">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" className="w-5 h-5 rounded-full object-cover" />
                        <span>Shane Doe — Sep 20, 2020</span>
                     </div>
                  </div>
               </div>
               
               <div className="lg:col-span-4 flex flex-col gap-6">
                  {videoList.map((video, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                       <div className="w-36 aspect-video overflow-hidden rounded-lg relative shrink-0">
                          <img src={video.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                <Play size={12} fill="white" />
                             </div>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-[14px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2 tracking-tight">{video.title}</h4>
                          <div className="text-[10px] font-bold text-white/30 uppercase">Shane Doe — Sep 12, 2020</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/5">
                {videoBottom.map((video, idx) => (
                   <div key={idx} className="space-y-4 group cursor-pointer">
                      <div className="relative aspect-video overflow-hidden rounded-xl">
                         <img src={video.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#ab07ab] transition-all">
                                <Play size={16} fill="white" />
                             </div>
                          </div>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-[16px] font-black group-hover:text-[#ab07ab] transition-colors line-clamp-2">{video.title}</h4>
                         <div className="text-[11px] font-bold text-white/30 uppercase font-outfit">Shane Doe — Sep 17, 2020</div>
                      </div>
                   </div>
                ))}
            </div>
         </div>
      </section>

      {/* New Gadgets Section + Sidebar */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
         <div className="lg:col-span-8 flex flex-col gap-12">
            <div>
               <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">New <span className="text-[#ab07ab]">Gadgets</span></h3>
                  <div className="flex-1 h-[2px] bg-gray-50 uppercase text-[10px] text-gray-400 text-right pr-4 tracking-widest font-black">
                     See All &gt;
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-6 group cursor-pointer">
                     <div className="relative aspect-[16/18] overflow-hidden rounded-2xl mb-8">
                        <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <span className="absolute bottom-5 left-5 bg-[#ab07ab] text-white text-[11px] font-black uppercase px-3 py-1 tracking-widest">GADGETS</span>
                     </div>
                  </div>
                  <div className="md:col-span-6 space-y-6 pt-4">
                     <h2 className="text-3xl font-black tracking-tight leading-tight group-hover:text-[#ab07ab] transition-colors">Oculus Founder Makes a VR Headset That Can Literally Kill You</h2>
                     <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 capitalize">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" className="w-6 h-6 rounded-full object-cover" />
                        <span>Shane Doe — Jan 13, 2021</span>
                     </div>
                     <p className="text-gray-500 text-[15px] leading-relaxed">
                        To understand the new smart watched and other pro devices of recent focus, we should look to the past to find inspiration for building the future of humanity...
                     </p>
                     <Link href="#" className="inline-block text-[#3c3fde] text-[11px] font-black uppercase tracking-[2px] border-b-2 border-transparent hover:border-[#3c3fde] transition-all">Read More &gt;</Link>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-16 pt-16 border-t border-gray-100">
                  {[
                    { title: "Braun Series 7 Electric Shaver Review: Quality at a Good Price", img: "https://images.unsplash.com/photo-1599351431247-f13b38466847?q=80&w=400", cat: "GADGETS" },
                    { title: "Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=400", cat: "PHONES" },
                    { title: "Why Apple Should Skip The MacBook Pro Launch Event", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400", cat: "COMPUTING" },
                    { title: "Apollo G2J Showcases Electric Sports Car Prototype for 2026", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400", cat: "TECHNOLOGY" },
                    { title: "The Famous Dyson Bladeless Fan is on Sale at Walmart Store", img: "https://images.unsplash.com/photo-1591147139223-846f70d79044?q=80&w=400", cat: "GADGETS" },
                    { title: "Best Luxury Hotels In Bogotà 2022: Where To Stay This Year", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=400", cat: "LIFESTYLE" }
                  ].map((post, i) => (
                    <div key={i} className="flex gap-6 group cursor-pointer items-start">
                       <div className="w-[100px] h-[85px] bg-gray-100 shrink-0 relative overflow-hidden rounded-xl">
                          <img src={post.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                       </div>
                       <div className="space-y-1.5 pt-0.5">
                          <h5 className="text-[15px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2 tracking-tight">{post.title}</h5>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Shane Doe — Jan 13, 2021</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Right Sidebar Newsletter */}
         <aside className="lg:col-span-4 space-y-16 sticky top-24">
            <div className="bg-white border-2 border-[#f0f0f0] rounded-2xl p-10 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
               <div className="w-16 h-16 bg-[#3c3fde] rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-200">
                  <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" className="w-8 h-8 invert" />
               </div>
               <h3 className="text-[22px] font-black uppercase tracking-tight mb-4">Subscribe to <span className="text-[#3c3fde]">Updates</span></h3>
               <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Get the latest creative news from FooBar about art, design and business.
               </p>
               <input type="email" placeholder="Your email address.." className="w-full bg-gray-100 px-6 py-4 rounded-lg text-sm mb-4 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all border border-transparent focus:border-blue-200" />
               <button className="w-full bg-[#3c3fde] text-white py-4 rounded-lg font-black uppercase text-[12px] tracking-[3px] hover:bg-black transition-all mb-4">SUBSCRIBE</button>
               <div className="flex gap-3 items-start text-left">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <p className="text-[10px] font-bold text-gray-400">By signing up, you agree to the our terms and our Privacy Policy agreement.</p>
               </div>
            </div>

            <div className="space-y-8">
               <div className="flex items-center gap-4">
                  <h3 className="text-[18px] font-black text-black uppercase tracking-tight whitespace-nowrap">Popular Now</h3>
                  <div className="flex-1 h-[2px] bg-gray-50"></div>
               </div>
               <div className="space-y-8">
                  {[
                    { num: 1, title: "Popular New Xbox Game Pass Game Being Review Bombed With 0s", views: "7,783 Views", color: "bg-blue-600" },
                    { num: 2, title: "Samsung is Developing Bright MicroLED on Displays for AR Headsets", views: "6,885 Views", color: "bg-purple-600" },
                    { num: 3, title: "Warner Bros. Games Announces Mortal Kombat: Onslaught", views: "4,385 Views", color: "bg-red-600" },
                    { num: 4, title: "Super League Gaming now Publisher of Roblox Anime Battlegrounds", views: "1,938 Views", color: "bg-indigo-600" },
                    { num: 5, title: "Holgate Announces New Plans for First Large Format World VR Arcade", views: "765 Views", color: "bg-pink-600" }
                  ].map((post, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer items-start border-b border-gray-50 pb-8 last:border-0 grow">
                       <div className={`w-8 h-8 ${post.color} rounded-full flex items-center justify-center text-white text-xs font-black shrink-0`}>
                          {post.num}
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-[15px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors">{post.title}</h4>
                          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                             <span>Shane Doe</span>
                             <span className="w-1 h-1 bg-gray-200"></span>
                             <span>Jan 14, 2021</span>
                             <span className="w-1 h-1 bg-gray-200"></span>
                             <span className="text-[#e54e53] flex items-center gap-1"><img src="https://cdn-icons-png.flaticon.com/512/159/159653.png" className="w-3 h-3 invert opacity-10" /> {post.views}</span>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </aside>
      </section>

      <TechBlogFooter />
    </main>
  );
}
