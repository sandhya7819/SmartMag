"use client";

import React from "react";
import Tech2Header from "@/components/Tech2Header";
import Link from "next/link";
import { MessageCircle, Clock, ChevronRight, PlayCircle, Music, Facebook, Twitter, Instagram, Pin, Share2 } from "lucide-react";

// Mock Data for Tech 2 Demo (High Fidelity)
const featPosts = [
  {
    id: 1,
    title: "Oculus Quest X Headset: Discover a Shining New Star",
    category: "GAMING",
    author: "Shane Doe",
    date: "Jan 5, 2021",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_286775054_xl-2015-1-1536x668.jpg",
  },
  {
    id: 2,
    title: "iPhone Pro 13 Rumored to Feature 1 TB of Storage",
    category: "MOBILES",
    author: "Shane Doe",
    date: "Jan 5, 2021",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/nathan-de-fortunato-Kfjp8qa8_pM-unsplash-1-768x463.jpg",
  },
  {
    id: 3,
    title: "Fujifilm’s 102-Megapixel Camera is the Size of a Typical DSLR",
    category: "TECH",
    author: "Shane Doe",
    date: "Jan 5, 2021",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/pexels-leon-3636001-2-768x512.jpg",
  }
];

const trendingPosts = [
  {
    id: 4,
    title: "Apple Patents a Periscopic Zoom Camera Lens for Future iPhone",
    date: "Jan 14, 2021",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_348492764_xl-2015-450x300.jpg"
  },
  {
    id: 5,
    title: "IE is Dead as Microsoft Kills Off 25-Year-Old Browser",
    date: "Jan 14, 2021",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_24830151_xl-2015-450x299.jpg"
  },
  {
    id: 6,
    title: "The 6 Best Nail Lamps for a Salon-Quality Manicure at Home",
    date: "Jan 14, 2021",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_61682587_xl-2015-450x325.jpg"
  }
];

const mainPosts = [
  {
    id: 7,
    title: "Lenovo Unveils IdeaPad Laptops, 5G Internet & a Snapdragon 8cx Chipset",
    category: "TECH",
    author: "Shane Doe",
    date: "Jan 15, 2021",
    comments: 3,
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_244641208_xl-2015-300x185.jpg",
  },
  {
    id: 8,
    title: "Buy the Best Gaming Accessories at Amazon Grand Gaming Days",
    category: "GAMING",
    author: "Shane Doe",
    date: "Jan 15, 2021",
    comments: 3,
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_253089038_xl-2015-1-300x158.jpg",
  },
  {
    id: 9,
    title: "PlayStation 5 vs Xbox Series X Review: The ‘Consumer Choice’ Debate",
    category: "GAMING",
    author: "Shane Doe",
    date: "Jan 15, 2021",
    comments: 3,
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/chris-taljaard-S__3xvlGDe8-unsplash-1-300x210.jpg",
  },
  {
    id: 10,
    title: "Apple has Updated Their Patent to Protect the Use of Mesh Fabrics for its Canopy",
    category: "GADGETS",
    author: "Shane Doe",
    date: "Jan 15, 2021",
    comments: 3,
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_443021182_xl-2015-300x200.jpg",
  },
  {
    id: 11,
    title: "Review: Mi 10 Mobile with Qualcomm Snapdragon 870 Mobile Platform",
    category: "MOBILES",
    author: "Shane Doe",
    date: "Jan 15, 2021",
    comments: 3,
    score: 9.1,
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_378099058_xl-2015-1-300x180.jpg",
  },
  {
    id: 12,
    title: "2021 Apple MacBook Air: Apples New Leak Reveals Razor-thin Redesign",
    category: "TECH",
    author: "Shane Doe",
    date: "Jan 15, 2021",
    comments: 3,
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/dmitry-chernyshov-mP7aPSUm7aE-unsplash-1-300x240.jpg",
  }
];

const editorsPicks = [
  {
    id: 13,
    title: "5 Things the Canon EOS R1 Needs to Compete With the Sony A1",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_108576662_xl-2015-300x200.jpg",
  },
  {
    id: 14,
    title: "VR – How the Gaming Industry Adapts to a New Reality",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_286775054_xl-2015-1-300x130.jpg",
  },
  {
    id: 15,
    title: "Hyundai's Value Surges Amid Reports of Apple Electric Car Deal",
    image: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_443021182_xl-2015-300x200.jpg",
  }
];

export default function Tech2Page() {
  return (
    <div className="min-h-screen bg-white font-outfit selection:bg-[#ff4e50] selection:text-white">
      <Tech2Header />

      <main className="pb-20">
        {/* Featured Grid Section */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 h-[800px] lg:h-[650px] gap-0.5">
            {/* Left Large Post (2/3 width) */}
            <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden cursor-pointer">
              <img src={featPosts[0].image} alt={featPosts[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                <span className="bg-[#ff4e50] text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1 mb-4 inline-block rounded-sm">{featPosts[0].category}</span>
                <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight mb-5 hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">{featPosts[0].title}</h2>
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                  <span className="text-white">By {featPosts[0].author}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span>{featPosts[0].date}</span>
                </div>
              </div>
            </div>

            {/* Right Stacked Posts */}
            <div className="lg:col-span-2 lg:row-span-1 relative group overflow-hidden cursor-pointer">
              <img src={featPosts[1].image} alt={featPosts[1].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="bg-[#ff4e50] text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1 mb-3 inline-block rounded-sm">{featPosts[1].category}</span>
                <h2 className="text-white text-xl lg:text-2xl font-black leading-tight mb-4 hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">{featPosts[1].title}</h2>
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                  <span className="text-white">By {featPosts[1].author}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span>{featPosts[1].date}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-1 relative group overflow-hidden cursor-pointer border-t border-white/5">
              <img src={featPosts[2].image} alt={featPosts[2].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="bg-[#ff4e50] text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1 mb-3 inline-block rounded-sm">{featPosts[2].category}</span>
                <h2 className="text-white text-xl lg:text-2xl font-black leading-tight mb-4 hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">{featPosts[2].title}</h2>
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                  <span className="text-white">By {featPosts[2].author}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span>{featPosts[2].date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="container mb-16 px-4">
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-[14px] font-black uppercase tracking-[4px] text-[#ff4e50] font-outfit">Trending</h4>
            <div className="h-[1px] bg-gray-100 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trendingPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-5 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="text-[19px] font-black text-gray-900 leading-snug group-hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">
                  {post.title}
                </h3>
                <div className="mt-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-outfit">
                  {post.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Banner Section */}
        <section className="container mb-20 px-4">
          <div className="relative w-full h-[250px] lg:h-[300px] overflow-hidden rounded-sm bg-[#111] group flex items-center">
             <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
               <img src="https://images.unsplash.com/photo-1492619334771-b4baa19ff73d?q=80&w=2000&auto=format&fit=crop" alt="Banner Background" className="w-full h-full object-cover" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
             <div className="relative z-10 p-10 lg:p-20 flex flex-col items-start gap-4">
               <span className="text-[12px] font-black text-white/60 uppercase tracking-[3px]">NEW SMARTMAG</span>
               <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight font-outfit">TRY IT, YOU'LL LOVE IT</h2>
               <button className="mt-4 bg-[#ff4e50] text-white text-[12px] font-black uppercase tracking-[3px] px-10 py-4 hover:bg-white hover:text-black transition-all rounded-sm shadow-xl">
                 EXPLORE SMARTMAG
               </button>
             </div>
          </div>
        </section>

        {/* Main Content & Editor's Picks */}
        <section className="container grid grid-cols-1 lg:grid-cols-12 gap-16 px-4">
          {/* Main Post List */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {mainPosts.map((post) => (
                <article key={post.id} className="flex flex-col md:flex-row gap-8 group cursor-pointer border-b border-gray-50 pb-12 last:border-0">
                  <div className="md:w-1/3 relative overflow-hidden rounded-sm flex-shrink-0">
                    <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {post.score && (
                      <div className="absolute top-2 left-2 bg-[#3bc492] text-white w-11 h-11 rounded-full flex items-center justify-center font-black text-[14px] border-4 border-white/20 shadow-lg">
                        {post.score}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#ff4e50] text-[10px] font-black uppercase tracking-[2px] mb-3 inline-block font-outfit">
                      {post.category}
                    </span>
                    <h2 className="text-[26px] font-black text-gray-900 mb-4 group-hover:text-[#ff4e50] transition-colors leading-tight font-outfit tracking-tight">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-outfit">
                      <span className="text-gray-900">By {post.author}</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle size={14} className="text-[#ff4e50]" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - Editor's Picks */}
          <aside className="lg:col-span-4 flex flex-col gap-12">
            <div className="sticky top-28">
              <div className="flex items-center gap-4 mb-10">
                <h4 className="text-[14px] font-black uppercase tracking-[4px] text-[#ff4e50] font-outfit whitespace-nowrap">Editor's Picks</h4>
                <div className="h-[1px] bg-gray-100 flex-grow"></div>
              </div>
              <div className="space-y-10">
                {editorsPicks.map((post) => (
                  <div key={post.id} className="flex flex-col gap-5 group cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h3 className="text-[17px] font-black text-gray-900 leading-tight group-hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* CES 2021 Section (Bottom Featured) */}
        <section className="container mt-28 px-4">
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-[14px] font-black uppercase tracking-[4px] text-[#ff4e50] font-outfit">CES 2021</h4>
            <div className="h-[1px] bg-gray-100 flex-grow"></div>
          </div>
          
          <div className="space-y-10">
            {/* Large Featured Post */}
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-sm group cursor-pointer">
               <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/pexels-sound-on-3761262-1.jpg" alt="CES Large" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-10 lg:p-16 max-w-4xl">
                 <span className="bg-[#ff4e50] text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1 mb-5 inline-block rounded-sm">GAMING</span>
                 <h2 className="text-white text-3xl lg:text-5xl font-black leading-tight mb-6 hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">
                   Apple's AR/VR Headsets are Expected to launch in 1st Quarter of 2022
                 </h2>
                 <div className="flex items-center gap-4 text-[12px] font-bold text-white/50 uppercase tracking-widest">
                   <span className="text-white">Shane Doe</span>
                   <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                   <span>Jan 12, 2021</span>
                 </div>
               </div>
            </div>

            {/* Sub Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "iPhone 13 Series to Launch in 2021: Possible Specs", date: "Jan 12, 2021", img: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_422797426_xl-2015-1-450x299.jpg" },
                { title: "Samsung Unleashed Newest 108Mp Mobile Image Sensor", date: "Jan 12, 2021", img: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_378099058_xl-2015-1-450x270.jpg" },
                { title: "Microsoft’s New Xbox Wireless Controller Launched", date: "Jan 12, 2021", img: "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/chris-taljaard-S__3xvlGDe8-unsplash-1-450x315.jpg" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm mb-5 relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="text-[19px] font-black text-gray-900 leading-snug group-hover:text-[#ff4e50] transition-colors font-outfit tracking-tight">
                    {item.title}
                  </h3>
                  <div className="mt-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-outfit">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] py-20">
        <div className="container px-4 flex flex-col items-center text-center">
          <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/LOGO-THE-WIRE-WIDE.png" alt="Footer Logo" className="h-10 w-auto mb-10 brightness-0 invert" />
          <div className="flex gap-10 text-[12px] font-black uppercase tracking-[3px] mb-12 text-white">
            <Link href="#" className="hover:text-[#ff4e50] transition-colors">Home</Link>
            <Link href="#" className="hover:text-[#ff4e50] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#ff4e50] transition-colors">Contact</Link>
            <Link href="#" className="hover:text-[#ff4e50] transition-colors">Privacy</Link>
          </div>
          <div className="flex gap-6 mb-12">
            <Facebook size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Twitter size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Instagram size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Share2 size={20} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
          </div>
          <p className="text-gray-500 text-[12px] font-bold tracking-widest">© 2026 THE WIRE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
