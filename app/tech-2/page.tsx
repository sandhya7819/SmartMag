'use client';

import React from 'react';
import Link from 'next/link';
import Tech2Header from '@/components/Tech2Header';
import { MessageCircle, MoveRight, Facebook, Twitter, Instagram, Youtube, Play, TrendingUp } from 'lucide-react';

const heroPosts = [
  { id: 1, title: "Oculus Quest X Headset: Discover a Shining New Star", img: "https://images.unsplash.com/photo-1592477942917-4633e72cc857?q=80&w=800", cat: "GAMING", author: "Shane Doe", date: "Jan 5, 2021" },
  { id: 2, title: "iPhone Pro 13 Rumored to Feature 1 TB of Storage", img: "https://images.unsplash.com/photo-1593121925328-369ec8459c08?q=80&w=800", cat: "MOBILES", author: "Shane Doe", date: "Jan 5, 2021" },
  { id: 3, title: "Fujifilm's 102-Megapixel Camera is the Size of a Typical DSLR", img: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=800", cat: "TECH", author: "Shane Doe", date: "Jan 5, 2021" }
];

const trendingPosts = [
  { title: "Apple Patents a Periscopic Zoom Camera Lens for Future iPhone", img: "https://images.unsplash.com/photo-1512499617640-c74ae3a70237?q=80&w=400", date: "Jan 14, 2021" },
  { title: "IE is Dead as Microsoft Kills Off 25-Year-Old Browser", img: "https://images.unsplash.com/photo-1522071823945-81138ee5040d?q=80&w=400", date: "Jan 14, 2021" },
  { title: "The 6 Best Nail Lamps for a Salon-Quality Manicure at Home", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400", date: "Jan 14, 2021" }
];

const feedPosts = [
  { title: "Lenovo Unveils IdeaPad Laptops, 5G Internet & a Snapdragon 8cx Chipset", cat: "TECH", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=400" },
  { title: "Buy the Best Gaming Accessories at Amazon Grand Gaming Days", cat: "GAMING", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400" },
  { title: "PlayStation 5 vs Xbox Series X Review: The 'Consumer Choice' Debate", cat: "GAMING", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400" },
  { title: "Apple has Updated Their Patent to Protect the Use of Mesh Fabrics for its Canopy", cat: "GADGETS", img: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=400" },
  { title: "Review: Mi 10 Mobile with Qualcomm Snapdragon 870 Mobile Platform", cat: "MOBILES", img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=400", rating: "9.1", ratingColor: "#1bc47d" },
  { title: "2021 Apple MacBook Air: Apple's New Leak Reveals Razor-thin Redesign", cat: "TECH", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400" },
  { title: "Review: Xiaomi's New Loudspeakers for Hi-fi and Home Cinema Systems", cat: "MOBILES", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400", rating: "8.9", ratingColor: "#ff9800" },
  { title: "Comparison of Mobile Phone Providers: 4G Connectivity & Speed", cat: "MOBILES", img: "https://images.unsplash.com/photo-1562016600-ece13e8bd570?q=80&w=400" },
  { title: "Which LED Lights for Nail Salon Safe? Comparison of Major Brands", cat: "MOBILES", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400", rating: "8.9", ratingColor: "#ff9800" },
  { title: "Co-WIN Centre Warns People Against Fake Coronavirus Vaccine Apps", cat: "MOBILES", img: "https://images.unsplash.com/photo-1614812513172-567d2fe96a75?q=80&w=400" },
  { title: "Electric Scooters are Bucking the Work From Home Trend – And are Here to Stay", cat: "TECH", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400" },
  { title: "Hi-Tech Loop Technology Delivers Luxury Five-Star Travel Even at Extreme Speeds", cat: "TECH", img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=400" }
];

export default function TechTwoPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#fa057b] selection:text-white">
      <Tech2Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-10">
        <div className="grid grid_cols-12 lg:grid-cols-12 gap-6 h-[550px] overflow-hidden">
          <div className="col-span-12 lg:col-span-8 relative group overflow-hidden cursor-pointer h-full">
            <img src={heroPosts[0].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-[#fa057b] text-white text-[10px] font-black uppercase px-2 py-1 mb-5 inline-block tracking-widest leading-none">GAMING</span>
              <h1 className="text-white text-3xl lg:text-[42px] font-black leading-tight mb-5 group-hover:text-[#fa057b] transition-colors">{heroPosts[0].title}</h1>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest opacity-60">
                <span>By Shane Doe</span>
                <span>—</span>
                <span>{heroPosts[0].date}</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 h-full">
            {heroPosts.slice(1).map((post) => (
              <div key={post.id} className="relative flex-1 group overflow-hidden cursor-pointer">
                <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="bg-[#fa057b] text-white text-[9px] font-black uppercase px-2 py-1 mb-3 inline-block tracking-widest leading-none">{post.cat}</span>
                  <h2 className="text-white text-[20px] font-black leading-tight group-hover:text-[#fa057b] transition-colors line-clamp-2">{post.title}</h2>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-3 flex items-center gap-2">
                    <span>Shane Doe</span>
                    <span>—</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-10">
           <h3 className="text-[18px] font-black text-[#fa057b] uppercase tracking-tight">TRENDING</h3>
           <div className="flex-1 h-[1px] bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {trendingPosts.map((post, i) => (
            <div key={i} className="space-y-4 group cursor-pointer">
              <img src={post.img} className="w-full aspect-[1.6/1] object-cover rounded-sm group-hover:opacity-80 transition-opacity" />
              <div className="space-y-2">
                <h4 className="text-[17px] font-black leading-tight group-hover:text-[#fa057b] transition-colors tracking-tight line-clamp-2">{post.title}</h4>
                <div className="text-[11px] font-bold text-gray-400 uppercase">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-4 mb-20">
        <div className="relative h-[250px] overflow-hidden group">
           <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/60 flex items-center px-12">
              <div className="space-y-4">
                 <span className="text-[10px] font-black text-white/60 tracking-[4px] uppercase">NEW SMARTMAG</span>
                 <h2 className="text-white text-4xl lg:text-5xl font-black italic tracking-tighter uppercase">TRY IT, YOU'LL LOVE IT</h2>
                 <button className="bg-[#fa057b] text-white px-8 py-3 text-[11px] font-black uppercase tracking-[2px] mt-4 hover:bg-white hover:text-black transition-all">EXPLORE SMARTMAG</button>
              </div>
           </div>
        </div>
      </section>

      {/* Main Feed Content Layout */}
      <section className="container mx-auto px-4 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-8">
            {feedPosts.slice(0, 6).map((post, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-8 group pb-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors p-2">
                <div className="sm:w-[260px] aspect-[1.6/1] overflow-hidden rounded-sm relative shrink-0">
                  <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {post.rating && (
                     <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
                          <circle cx="22" cy="22" r="20.5" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                          <circle cx="22" cy="22" r="20.5" fill="transparent" stroke={post.ratingColor || "#fa057b"} strokeWidth="3" strokeDasharray="128.8" strokeDashoffset={19.32} />
                        </svg>
                        <span className="relative z-10 text-white font-black text-[11px]">{post.rating}</span>
                     </div>
                  )}
                  <span className="absolute bottom-0 left-0 bg-[#fa057b] text-white text-[9px] font-black uppercase px-2 py-1 tracking-widest">{post.cat}</span>
                </div>
                <div className="space-y-4 pt-1">
                  <h4 className="text-[22px] font-black leading-tight group-hover:text-[#fa057b] transition-colors line-clamp-2 tracking-tight">{post.title}</h4>
                  <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                     <span>By Shane Doe</span>
                     <span>—</span>
                     <span>Jan 15, 2021</span>
                     <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={10} /> 3</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CES 2021 Section */}
          <div className="mt-20">
             <div className="flex items-center gap-4 mb-10">
                <h3 className="text-[18px] font-black text-[#fa057b] uppercase tracking-tight">CES 2021</h3>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
             </div>
             
             <div className="relative group cursor-pointer overflow-hidden rounded-sm mb-12">
                <img src="https://images.unsplash.com/photo-1558239325-f716631be773?q=80&w=1200" className="w-full aspect-[2/1] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <span className="bg-[#fa057b] text-white text-[9px] font-black uppercase px-2 py-1 mb-4 inline-block">GAMING</span>
                   <h2 className="text-white text-3xl font-black mb-4">Apple’s AR/VR Headsets are Expected to launch in 1st Quarter of 2022</h2>
                   <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Shane Doe — Jan 12, 2021</div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { title: "iPhone 13 Series to Launch in 2021: Possible Specs", img: "https://images.unsplash.com/photo-1542751110-9743a2e55e75?q=80&w=400" },
                   { title: "Samsung Unleashed Newest 108Mp Mobile Image Sensor", img: "https://images.unsplash.com/photo-1510511459019-5dee997dd1db?q=80&w=400" },
                   { title: "Microsoft’s New Xbox Wireless Controller Launched", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=400" }
                ].map((post, i) => (
                   <div key={i} className="space-y-4 group cursor-pointer">
                      <img src={post.img} className="w-full aspect-[1.5/1] object-cover rounded-sm" />
                      <h4 className="text-[15px] font-black leading-tight group-hover:text-[#fa057b] transition-colors">{post.title}</h4>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jan 12, 2021</div>
                   </div>
                ))}
             </div>
          </div>

          {/* GADGETS Section */}
          <div className="mt-20">
             <div className="flex items-center gap-4 mb-10">
                <h3 className="text-[18px] font-black text-[#fa057b] uppercase tracking-tight">GADGETS</h3>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                   { title: "Apple has Updated Their Patent to Protect the Use of Mesh Fabrics for its Canopy", img: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=400", date: "Jan 15, 2021" },
                   { title: "Samsung Announces Galaxy Buds Pro, its Most Premium Earbuds", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", date: "Jan 13, 2021", isVideo: true },
                   { title: "A Science Breakthrough Will Help in Extending Life of Your Gadgets", img: "https://images.unsplash.com/photo-1511174511562-5f7f18b854f2?q=80&w=400", date: "Jan 13, 2021" },
                   { title: "PlayStation 5’s Mario Game & Watch is a Choice Gaming Stuffer", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=400", date: "Jan 13, 2021" }
                ].map((post, i) => (
                   <div key={i} className="space-y-4 group cursor-pointer">
                      <div className="relative aspect-square overflow-hidden rounded-sm">
                         <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         {post.isVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                                  <Play fill="white" size={20} className="ml-1" />
                               </div>
                            </div>
                         )}
                      </div>
                      <h4 className="text-[14px] font-black leading-tight group-hover:text-[#fa057b] transition-colors line-clamp-2">{post.title}</h4>
                      <div className="text-[10px] font-bold text-gray-400 uppercase">{post.date}</div>
                   </div>
                ))}
             </div>
          </div>

          {/* Extended Feed Section */}
          <div className="mt-20 space-y-8">
            {feedPosts.slice(6).map((post, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-8 group pb-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors p-2">
                <div className="sm:w-[200px] aspect-[1.6/1] overflow-hidden rounded-sm relative shrink-0">
                  <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {post.rating && (
                     <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
                          <circle cx="22" cy="22" r="20.5" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                          <circle cx="22" cy="22" r="20.5" fill="transparent" stroke={post.ratingColor || "#fa057b"} strokeWidth="3" strokeDasharray="128.8" strokeDashoffset={19.32} />
                        </svg>
                        <span className="relative z-10 text-white font-black text-[11px]">{post.rating}</span>
                     </div>
                  )}
                  <span className="absolute bottom-0 left-0 bg-[#fa057b] text-white text-[9px] font-black uppercase px-2 py-1 tracking-widest">{post.cat}</span>
                </div>
                <div className="space-y-3 pt-1">
                  <h4 className="text-[18px] font-black leading-tight group-hover:text-[#fa057b] transition-colors line-clamp-2 tracking-tight">{post.title}</h4>
                  <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                     <span>By Shane Doe</span>
                     <span>—</span>
                     <span>Jan 15, 2021</span>
                     <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={10} /> 3</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <button className="px-10 py-3 border-2 border-gray-100 text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:bg-[#fa057b] hover:text-white hover:border-[#fa057b] transition-all rounded-sm shadow-sm flex items-center justify-center mx-auto gap-3 group">
               LOAD MORE <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-4 space-y-16">
          <div className="space-y-10">
            <div className="flex items-center gap-4 border-b-2 border-[#fa057b] pb-2">
              <h3 className="text-[16px] font-black text-[#fa057b] uppercase tracking-tight">EDITOR'S PICKS</h3>
            </div>
            <div className="space-y-10 pt-4">
               <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm mb-4 aspect-[1.6/1]">
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h4 className="text-[18px] font-black leading-tight group-hover:text-[#fa057b] transition-colors tracking-tight">5 Things the Canon EOS R1 Needs to Compete With the Sony A1</h4>
               </div>
              <div className="space-y-8">
                {[
                  { title: "VR – How the Gaming Industry Adapts to a New Reality", img: "https://images.unsplash.com/photo-1592477942917-4633e72cc857?q=80&w=200" },
                  { title: "Hyundai's Value Surges Amid Reports of Apple Electric Car Deal", img: "https://images.unsplash.com/photo-1617788138017-80ad422432bd?q=80&w=200" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer border-t border-gray-100 pt-8 first:border-0 first:pt-0">
                    <div className="w-[110px] h-[75px] shrink-0 rounded-sm overflow-hidden">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h5 className="text-[14px] font-black leading-tight group-hover:text-[#fa057b] transition-colors tracking-tight">{post.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#f0e6d2] p-10 text-center space-y-6 sticky top-24">
             <span className="text-[10px] font-black text-black/50 tracking-[4px] uppercase">THE NEW</span>
             <h3 className="text-black text-3xl font-black italic tracking-tighter">SMARTMAG</h3>
             <p className="text-[12px] font-black text-gray-500 italic pb-8">Trusted by over 12,000 users worldwide</p>
             <button className="bg-black text-white px-10 py-3 text-[11px] font-black uppercase tracking-[2px] hover:bg-[#fa057b] transition-all">EXPLORE NOW</button>
             <div className="pt-10">
               <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400" className="w-full h-auto drop-shadow-xl" />
             </div>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Link href="/tech-2" className="flex items-center mb-12">
            <span className="text-5xl font-black italic tracking-tighter text-white">THE</span>
            <span className="text-5xl font-black italic tracking-tighter text-[#fa057b]">WIRE</span>
          </Link>
          <div className="flex items-center gap-5 mb-16">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#fa057b] hover:border-transparent transition-all group">
                <Icon size={18} className="text-white/60 group-hover:text-white" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-[11px] font-black uppercase tracking-[2px] text-gray-500">
             <Link href="#" className="hover:text-white transition-colors">Home</Link>
             <Link href="#" className="hover:text-white transition-colors">About Us</Link>
             <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="#" className="hover:text-white transition-colors">Advertise</Link>
             <Link href="#" className="hover:text-white transition-colors">Get In Touch</Link>
          </div>
          <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest text-center opacity-50">
            © 2026 ThemeSphere. Designed by ThemeSphere.
          </p>
        </div>
      </footer>
    </main>
  );
}
