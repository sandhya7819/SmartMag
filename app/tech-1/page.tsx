import Tech1Header from "@/components/Tech1Header";
import { MoveRight, Clock, User, Share2, Facebook, Twitter, Instagram, Youtube, Play, Star, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const featuredGrid = [
  {
    cat: "COMPUTING",
    title: "Apple Planning Big Mac Redesign and Half-Sized Old Mac",
    author: "Shane Doe",
    date: "Jan 5, 2021",
    img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/matias-islas-Nw0j-2YAnfI-unsplash-1-1024x683.jpg",
    rating: "85%",
    size: "large"
  },
  {
    cat: "TECH",
    title: "Autonomous Driving Startup Attracts Chinese Investor",
    date: "Jan 5, 2021",
    img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/why-kei-8e2gal_GIE8-unsplash-2-768x512.jpg",
    size: "small"
  },
  {
    cat: "GADGETS",
    title: "Onboard Cameras Allow Disabled Quadcopters to Fly",
    date: "Jan 5, 2021",
    img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/marko-blazevic-WFLRbk562Yo-unsplash-1-768x960.jpg",
    size: "small"
  }
];

const categorySections: Array<{
  name: string;
  main: { title: string; img: string; hasVideo?: boolean };
  small: Array<{ title: string; date: string; img: string; rating?: string }>;
}> = [
  {
    name: "Apps",
    main: { title: "How Tinder Became the App That Defines Online Dating", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/mika-baumeister-4xChyRlbyWM-unsplash-1-450x555.jpg" },
    small: [
      { title: "Huawei Planning World's First 3-Nanometer Mobile Chipset", date: "Jan 13, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/brecht-denil-H54mZnQua8k-unsplash-225x300.jpg" },
      { title: "The Best Free VPNs: Reasons Why They Don't Exist", date: "Jan 13, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/petter-lagson-VH_L_H4w7U8-unsplash-1-300x191.jpg" },
      { title: "Samsung Galaxy Fold 2 Gets Updated to Android 11", date: "Jan 13, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/zana-latif-YVvfrXDYQXE-unsplash-1-300x298.jpg" }
    ]
  },
  {
    name: "Gadgets",
    main: { title: "Apple Watch Series 7 Could Measure Your Blood Sugar Levels", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/daniel-korpai-L8y01mTuDZg-unsplash-1-450x563.jpg", hasVideo: true },
    small: [
      { title: "A Science Breakthrough Will Help in Extending Life of Your Gadgets", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/hussam-abd-augwZS-5neg-unsplash-1-300x200.jpg" },
      { title: "Nintendo's Mario Game & Watch is a Choice Gaming Stuffer", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/pexels-caleb-oquendo-3162044-1-300x200.jpg" },
      { title: "Gravity Sketch VR 3D Modeling is Now Free to Use", date: "Jan 13, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/kelly-sikkema-v9FQR4tbIq8-unsplash-1-300x200.jpg" }
    ]
  },
  {
    name: "Gear",
    main: { title: "Apple Card Holders Can Earn Bonus for Spending with Apple Pay", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/melvin-thambi-8U9CgUVan4M-unsplash-1-450x318.jpg" },
    small: [
      { title: "CES 2021 Highlights: 79 Top Photos, Products, and Much More", date: "Jan 14, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/pexels-jeshootscom-834895-2-300x200.jpg", rating: "7.2" },
      { title: "The Best of Pandemic Tech, The Robot Green Tech", date: "Jan 13, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/possessed-photography-5tb8h8D9k3Y-unsplash-1-300x266.jpg" },
      { title: "Digital Calendars & Organizers to Get You Organized in 2021", date: "Jan 13, 2021", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/daniel-korpai-o1utz9Neufo-unsplash-2-240x300.jpg" }
    ]
  }
];

export default function TechOnePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#d40713] selection:text-white">
      <Tech1Header />

      {/* Hero Grid Section */}
      <section className="w-full mb-20">
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
      <section className="container mx-auto px-4 mb-8">
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
      <section className="container mx-auto px-4 py-[120px] flex justify-center">
         <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="block max-w-[1200px] w-full hover:opacity-95 transition-opacity">
            <img src="https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/banner-tech-02.jpg" alt="Demo" className="w-full h-auto shadow-lg" />
         </Link>
      </section>

      {/* Main Feed + Sidebar Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
         {/* Main Feed */}
         <div className="lg:col-span-8 space-y-16">
            <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-3">
               <h3 className="text-[18px] font-black text-black uppercase tracking-tight">LATEST <span className="text-[#d40713]">IN TECH</span></h3>
               <div className="flex-1 h-[1px] bg-gray-100 hidden sm:block"></div>
            </div>
            
            <div className="space-y-12">
               {[
                 { cat: "MOBILES", title: "Latest Huawei Mobiles P50 and P50 Pro Feature Kirin Chips", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/omid-armin-mP4sfCCoTrI-unsplash-2-300x198.jpg" },
                 { cat: "MOBILES", title: "Samsung Galaxy M62 Benchmarked with Galaxy Note10's Chipset", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/screen-post-c7_blgDvOOs-unsplash-300x191.jpg" },
                 { cat: "GAMING", title: "Razer X With 16 Programmable Buttons Launched at MMO Gamers", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/Depositphotos_299683750_xl-2015-300x200.jpg" },
                 { cat: "COMPUTING", title: "2021 Apple MacBook Air: New leak Reveals Razor-Thin Redesign", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/remy_loz-teTksDuzEWc-unsplash-1-450x398.jpg" },
                 { cat: "GAMING", title: "Tech Experts Predict 15 Areas AI And VR Are Set To Revolutionize", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/Depositphotos_242235046_xl-2015-1-1024x684.jpg", large: true },
                 { cat: "COMPUTING", title: "Concept Images New 32-inch iMac with Edge-to-Edge Design", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/screen-post-Ya3r7oApP4g-unsplash-1-450x600.jpg" }
               ].map((post, i) => (
                  post.large ? (
                     <div key={i} className="flex flex-col group pb-12 border-b border-gray-100 last:border-0 grow">
                        <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100 relative shrink-0 mb-6">
                           <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                  ) : (
                     <div key={i} className="flex flex-col md:flex-row gap-8 group pb-12 border-b border-gray-100 last:border-0 grow">
                        <div className="md:w-[350px] aspect-[1.5/1] overflow-hidden bg-gray-100 relative shrink-0">
                           <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <span className="absolute bottom-0 left-0 bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1">{post.cat}</span>
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-[24px] font-black leading-tight group-hover:text-[#d40713] transition-colors cursor-pointer tracking-tight">{post.title}</h4>
                           <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 capitalize whitespace-nowrap">
                              <span>By Shane Doe</span>
                              <span className="text-gray-200">—</span>
                              <span>Jan 15, 2021</span>
                              <span className="flex items-center gap-1 ml-2"><MessageCircle size={12} /> 3</span>
                           </div>
                           <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the latest trends that define our era...</p>
                        </div>
                     </div>
                  )
               ))}
               <button className="w-full py-4 border-2 border-gray-100 text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:bg-[#d40713] hover:text-white hover:border-[#d40713] transition-all flex items-center justify-center gap-2 group bg-white">
                 LOAD MORE <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>

         {/* Sidebar */}
         <aside className="lg:col-span-4 space-y-16 sticky top-[100px] self-start">
            {/* In Spotlight Widget */}
            <div>
               <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-[18px] font-black text-[#d40713] uppercase tracking-tight whitespace-nowrap">IN SPOTLIGHT</h3>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="space-y-10">
                  <div className="group cursor-pointer">
                     <div className="relative overflow-hidden mb-5 aspect-[1.6/1]">
                        <img src="https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/marko-blazevic-WFLRbk562Yo-unsplash-1-450x563.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute bottom-0 left-0 bg-[#d40713] text-white text-[9px] font-black uppercase px-2 py-1">SPOTLIGHT</span>
                     </div>
                     <h4 className="text-[18px] font-black leading-tight mb-4 group-hover:text-[#d40713] transition-colors line-clamp-2">Wingcopter Raises $22m to Launch a Next-Generation Drone</h4>
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                        <span>By Shane Doe — Jan 13, 2021</span>
                        <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={10} /> 3</span>
                     </div>
                     <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mt-4 font-medium">To understand the new smart watched and other pro devices of recent focus, we should...</p>
                  </div>
                  
                  <div className="space-y-6 pt-6 border-t border-gray-100">
                    {[
                      { title: "Tech Details of iMac Pro for 4k Video Editing and VFX", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/lucian-popescu-s3BF1SKa_co-unsplash-1-450x300.jpg" },
                      { title: "Samsung Galaxy S21 Ultra Review: the New King of Android Phones", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/samsung-s21-5g-450x311.jpg" },
                      { title: "Xiaomi Mi 10: New Variant with Snapdragon 870 Review", img: "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/zana-latif-6kVDN0VGj3c-unsplash-1-450x276.jpg" }
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
                  <div className="bg-[#ff0000] p-3 text-white flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-2">
                        <Youtube size={16} fill="white" />
                        <span className="text-[11px] font-black">105K</span>
                     </div>
                     <span className="text-[9px] font-bold opacity-60">YouTube</span>
                  </div>
                  <div className="bg-[#1ab7ea] p-3 text-white flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-2">
                        <Play size={16} fill="white" />
                        <span className="text-[11px] font-black">17.7K</span>
                     </div>
                     <span className="text-[9px] font-bold opacity-60">Vimeo</span>
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
