import Tech1Header from "@/components/Tech1Header";
import { MoveRight, Clock, User, Share2, Facebook, Twitter, Instagram, Youtube, Play, Star, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const featuredGrid = [
  {
    cat: "COMPUTING",
    title: "Apple Planning Big Mac Redesign and Half-Sized Old Mac",
    author: "Shane Doe",
    date: "Jan 5, 2021",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
    rating: "85%",
    size: "large"
  },
  {
    cat: "TECH",
    title: "Autonomous Driving Startup Attracts Chinese Investor",
    date: "Jan 5, 2021",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200",
    size: "small"
  },
  {
    cat: "GADGETS",
    title: "Onboard Cameras Allow Disabled Quadcopters to Fly",
    date: "Jan 5, 2021",
    img: "https://images.unsplash.com/photo-1473960104372-7a4d8d9b60ad?q=80&w=1200",
    size: "small"
  }
];

const categorySections = [
  {
    name: "Apps",
    main: { title: "How Tinder Became the App That Defines Online Dating", img: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=600" },
    small: [
      { title: "Huawei Planning World's First 3-Nanometer Mobile Chipset", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1544244015-0cd4b3ff869d?q=80&w=150" },
      { title: "The Best Free VPNs: Reasons Why They Don't Exist", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=150" },
      { title: "Samsung Galaxy Fold 2 Gets Updated to Android 11", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=150" }
    ]
  },
  {
    name: "Gadgets",
    main: { title: "Apple Watch Series 7 Could Measure Your Blood Sugar Levels", img: "https://images.unsplash.com/photo-1544117518-29627d736272?q=80&w=600", hasVideo: true },
    small: [
      { title: "A Science Breakthrough Will Help in Extending Life of Your Gadgets", date: "Jan 14, 2021", img: "https://images.unsplash.com/photo-1532187875605-2fe3587b1ee0?q=80&w=150" },
      { title: "Nintendo's Mario Game & Watch is a Choice Gaming Stuffer", date: "Jan 14, 2021", img: "https://images.unsplash.com/photo-1531525645387-7f14be13bd33?q=80&w=150" },
      { title: "Gravity Sketch VR 3D Modeling is Now Free to Use", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=150" }
    ]
  },
  {
    name: "Gear",
    main: { title: "Apple Card Holders Can Earn Bonus for Spending with Apple Pay", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f?q=80&w=600" },
    small: [
      { title: "CES 2021 Highlights: 79 Top Photos, Products, and Much More", date: "Jan 14, 2021", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=150", rating: "7.2" },
      { title: "The Best of Pandemic Tech, The Robot Green Tech", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=150" },
      { title: "Digital Calendars & Organizers to Get You Organized in 2021", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e72ef?q=80&w=150" }
    ]
  }
];

export default function TechOnePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#d40713] selection:text-white">
      <Tech1Header />

      {/* Hero Grid Section */}
      <section className="container mx-auto px-4 mt-8 mb-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0.5 overflow-hidden">
            <div className="lg:col-span-6 relative group overflow-hidden cursor-pointer h-[500px] lg:h-[600px]">
               <img src={featuredGrid[0].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               
               {/* Radial Review Award */}
               <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="20.5" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                    <circle cx="22" cy="22" r="20.5" fill="transparent" stroke="#d40713" strokeWidth="3" strokeDasharray="128.8" strokeDashoffset={128.8 * (1 - 0.85)} />
                  </svg>
                  <span className="relative z-10 text-white font-black text-[12px]">{featuredGrid[0].rating}</span>
               </div>

               <div className="absolute bottom-10 left-10 right-10">
                  <span className="bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1 mb-5 inline-block">COMPUTING</span>
                  <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight mb-5 group-hover:text-[#d40713] transition-colors">{featuredGrid[0].title}</h2>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-widest opacity-60">
                     <span>{featuredGrid[0].author} — {featuredGrid[0].date}</span>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-3 h-[500px] lg:h-full">
               <div className="relative group overflow-hidden cursor-pointer h-full border-l border-white/5">
                  <img src={featuredGrid[1].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1 mb-4 inline-block">TECH</span>
                     <h3 className="text-white text-xl lg:text-2xl font-black leading-tight group-hover:text-[#d40713] transition-colors line-clamp-3">{featuredGrid[1].title}</h3>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracing-widest mt-4">Shane Doe — {featuredGrid[1].date}</div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-3 h-[500px] lg:h-full">
               <div className="relative group overflow-hidden cursor-pointer h-full border-l border-white/5">
                  <img src={featuredGrid[2].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1 mb-4 inline-block">GADGETS</span>
                     <h3 className="text-white text-xl lg:text-2xl font-black leading-tight group-hover:text-[#d40713] transition-colors line-clamp-3">{featuredGrid[2].title}</h3>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracing-widest mt-4">Shane Doe — {featuredGrid[2].date}</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Triple Category Grid */}
      <section className="container mx-auto px-4 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categorySections.map((section, idx) => (
               <div key={idx} className="space-y-8">
                  <div className="flex items-center gap-4 mb-6">
                     <h3 className="text-[18px] font-black text-[#d40713] uppercase tracking-tight">{section.name}</h3>
                     <div className="flex-1 h-[1px] bg-gray-100"></div>
                  </div>
                  <div className="space-y-8">
                     <div className="group cursor-pointer">
                        <div className="relative overflow-hidden mb-5 aspect-[16/10]">
                           <img src={section.main.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                           {section.main.hasVideo && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                    <Play size={18} fill="white" className="text-white ml-0.5" />
                                 </div>
                              </div>
                           )}
                           <span className="absolute bottom-0 left-0 bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1 uppercase">{section.name}</span>
                        </div>
                        <h4 className="text-[20px] font-black leading-tight group-hover:text-[#d40713] transition-colors mb-3">{section.main.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 capitalize">
                           <span>By Shane Doe</span>
                           <span className="text-gray-200">—</span>
                           <span>Jan 14, 2021</span>
                           <span className="flex items-center gap-1 ml-2"><MessageCircle size={10} /> 3</span>
                        </div>
                        <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mt-4">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon...</p>
                     </div>
                     <div className="space-y-6 pt-6 border-t border-gray-100">
                        {section.small.map((post, i) => (
                           <div key={i} className="flex gap-4 group cursor-pointer items-start">
                              <div className="w-[85px] h-[65px] bg-gray-100 shrink-0 relative overflow-hidden">
                                 <img src={post.img} className="w-full h-full object-cover opacity-90 transition-transform group-hover:scale-110" />
                                 {post.rating && (
                                    <div className="absolute bottom-1 right-1 bg-[#d40713] text-white text-[8px] font-black px-1 leading-tight">
                                       {post.rating}
                                    </div>
                                 )}
                              </div>
                              <div className="space-y-1 pt-0.5">
                                 <h5 className="text-[13px] font-black leading-tight group-hover:text-[#d40713] transition-colors line-clamp-2 tracking-tight">{post.title}</h5>
                                 <div className="text-[10px] font-bold text-gray-400 uppercase">{post.date}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* AD Banner: New SmartMag */}
      <section className="container mx-auto px-4 mb-20">
         <div className="bg-[#b31b46] p-12 lg:p-16 relative overflow-hidden group cursor-pointer flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 space-y-4">
               <span className="text-white/60 text-xs font-bold uppercase tracking-[2px]">NEW SMARTMAG</span>
               <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tight leading-none">TRY IT, YOU'LL LOVE IT</h2>
               <button className="bg-white text-black px-10 py-4 font-black uppercase text-[11px] tracking-[2px] rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105">EXPLORE SMARTMAG</button>
            </div>
            <div className="relative z-10 w-full max-w-[500px]">
               <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800" className="w-full h-auto rounded-lg shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            </div>
         </div>
      </section>

      {/* Main Feed + Sidebar Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
         {/* Main Feed */}
         <div className="lg:col-span-8 space-y-16">
            <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-3">
               <h3 className="text-[18px] font-black text-black uppercase tracking-tight">LATEST <span className="text-[#d40713]">IN TECH</span></h3>
               <div className="flex-1 h-[1px] bg-gray-100 hidden sm:block"></div>
            </div>
            
            <div className="space-y-12">
               {[
                 { cat: "MOBILES", title: "Latest Huawei Mobiles P50 and P50 Pro Feature Kirin Chips", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" },
                 { cat: "MOBILES", title: "Samsung Galaxy M62 Benchmarked with Galaxy Note10's Chipset", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800" },
                 { cat: "GAMING", title: "Razer X With 16 Programmable Buttons Launched at MMO Gamers", img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800" },
                 { cat: "COMPUTING", title: "2021 Apple MacBook Air: New leak Reveals Razor-Thin Redesign", img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800" },
                 { cat: "GAMING", title: "Tech Experts Predict 15 Areas AI And VR Are Set To Revolutionize", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800" }
               ].map((post, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 group pb-12 border-b border-gray-100 last:border-0 grow">
                     <div className="md:w-[350px] aspect-[1.5/1] overflow-hidden bg-gray-100 relative shrink-0">
                        <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <span className="absolute bottom-0 left-0 bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1">{post.cat}</span>
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-[28px] font-black leading-tight group-hover:text-[#d40713] transition-colors cursor-pointer tracking-tight">{post.title}</h4>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 capitalize whitespace-nowrap">
                           <span>By Shane Doe</span>
                           <span className="text-gray-200">—</span>
                           <span>Jan 15, 2021</span>
                           <span className="flex items-center gap-1 ml-2"><MessageCircle size={12} /> 3</span>
                        </div>
                        <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the latest trends that define our era...</p>
                     </div>
                  </div>
               ))}
               <button className="w-full py-4 border-2 border-gray-100 text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:bg-[#d40713] hover:text-white hover:border-[#d40713] transition-all flex items-center justify-center gap-2 group bg-white">
                 LOAD MORE <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>

         {/* Sidebar */}
         <aside className="lg:col-span-4 space-y-16">
            {/* In Spotlight Widget */}
            <div>
               <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-[18px] font-black text-[#d40713] uppercase tracking-tight whitespace-nowrap">IN SPOTLIGHT</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="space-y-10">
                  <div className="group cursor-pointer">
                     <div className="relative overflow-hidden mb-5 aspect-[1.6/1]">
                        <img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute bottom-0 left-0 bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1">SPOTLIGHT</span>
                     </div>
                     <h4 className="text-[18px] font-black leading-tight mb-4 group-hover:text-[#d40713] transition-colors line-clamp-2">Sophia the Robots' Mass Rollout Amid Pandemic</h4>
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                        <span>By Shane Doe — Jan 13, 2021</span>
                        <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={10} /> 3</span>
                     </div>
                     <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mt-4 font-medium">To understand the new smart watched and other pro devices of recent focus, we should...</p>
                  </div>
                  
                  <div className="space-y-6 pt-6 border-t border-gray-100">
                    {[
                      { title: "Apple Announced MacBook Air with MagSafe charging", img: "https://images.unsplash.com/photo-1611186871348-71ce5249d238?q=80&w=400" },
                      { title: "iPhone 13 Series to Launch in 2021: Possible Specs", img: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=400" },
                      { title: "Samsung Unleashed Newest 108Mp Mobile Image Sensor", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400" }
                    ].map((post, i) => (
                       <div key={i} className="flex gap-4 group cursor-pointer items-start">
                          <img src={post.img} className="w-[85px] h-[65px] object-cover shrink-0" />
                          <div className="space-y-1">
                             <h5 className="text-[13px] font-black leading-tight group-hover:text-[#d40713] transition-colors line-clamp-2">{post.title}</h5>
                             <div className="text-[10px] font-bold text-gray-400">Jan 12, 2021</div>
                          </div>
                       </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* We Are Social */}
            <div>
               <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-[18px] font-black text-black uppercase tracking-tight whitespace-nowrap">WE ARE SOCIAL</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1877f2] p-3 text-white flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-2">
                        <Facebook size={16} fill="white" />
                        <span className="text-[11px] font-black">1.1K</span>
                     </div>
                     <span className="text-[9px] font-bold opacity-60">Facebook</span>
                  </div>
                  <div className="bg-[#1da1f2] p-3 text-white flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-2">
                        <Twitter size={16} fill="white" />
                        <span className="text-[11px] font-black">68.9K</span>
                     </div>
                     <span className="text-[9px] font-bold opacity-60">Twitter</span>
                  </div>
                  <div className="bg-[#e60023] p-3 text-white flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-2">
                        <Star size={16} fill="white" />
                        <span className="text-[11px] font-black">10.7K</span>
                     </div>
                     <span className="text-[9px] font-bold opacity-60">Pinterest</span>
                  </div>
                  <div className="bg-[#c13584] p-3 text-white flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-2">
                        <Instagram size={16} />
                        <span className="text-[11px] font-black">46.4K</span>
                     </div>
                     <span className="text-[9px] font-bold opacity-60">Instagram</span>
                  </div>
               </div>
            </div>

            {/* Sidebar Ad Banner */}
            <div className="relative group overflow-hidden cursor-pointer">
               <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600" className="w-full aspect-[9/18] object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <span className="text-[10px] font-black text-white/60 tracking-[5px] mb-4 uppercase">EXPLORE</span>
                  <h3 className="text-white text-3xl font-black mb-8 leading-tight">All New<br/><span className="text-[#d40713]">SMARTMAG</span></h3>
                  <button className="bg-white text-black text-[10px] font-black uppercase tracking-[2px] px-8 py-4">GET STARTED</button>
               </div>
            </div>
         </aside>
      </section>

      {/* Tech Footer */}
      <footer className="bg-black text-white pt-24 pb-12">
         <div className="container mx-auto px-4 flex flex-col items-center space-y-12">
            <Link href="/tech-1" className="flex flex-col items-center">
               <span className="text-[42px] font-black tracking-tighter leading-none text-white uppercase">GADGETS</span>
               <span className="text-[9px] font-bold text-gray-400 tracking-[5px] mt-1 ml-2 uppercase">Tech Magazine</span>
            </Link>
            <div className="flex items-center gap-4">
               {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#d40713] hover:border-transparent transition-all group">
                     <Icon size={16} className="opacity-60 group-hover:opacity-100" />
                  </div>
               ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] font-black uppercase tracking-[1.5px] text-gray-500">
               <Link href="#" className="hover:text-white">Home</Link>
               <Link href="#" className="hover:text-white">About Us</Link>
               <Link href="#" className="hover:text-white">Contact</Link>
               <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </div>
            <div className="text-[11px] font-bold text-gray-600">
               © 2021 ThemeSphere. Designed by ThemeSphere.
            </div>
         </div>
      </footer>
    </main>
  );
}
