"use client";

import { useState } from "react";
import CupOfCoffeeHeader from "@/components/CupOfCoffeeHeader";
import CupOfCoffeeFooter from "@/components/CupOfCoffeeFooter";
import { Play, ChevronRight, Mail, ChevronLeft, Eye, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function CupOfCoffeePage() {
  // "Don't Miss" Carousel state
  const [dontMissIndex, setDontMissIndex] = useState(0);
  const dontMissPosts = [
    {
      title: "Money Heist Series Writer Returns to Scene of the Crime with Prequel Berlin",
      cat: "TV & Drama",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/15e3da686d116b12f82aefc780ecdd5c-300x195.jpeg",
      date: "Jan 13, 2021",
      href: "#"
    },
    {
      title: "Check Out the Celebrities From the International Film Festival Awards 2023",
      cat: "World",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/33e3cacaba86eaca751f44748886d19a-300x229.jpeg",
      date: "Jan 14, 2021",
      href: "#"
    },
    {
      title: "R. Ferreira Switches Soccer Allegiance to Canadian International Team",
      cat: "Sports",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/ecc286caf77c7dba9c8a6375e0a85fe0-300x263.jpeg",
      date: "Jan 14, 2021",
      isVideo: true,
      href: "#"
    },
    {
      title: "Exploring the Golden Age of Analog Audio & Vintage Turntables",
      cat: "Culture",
      img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=600&auto=format&fit=crop",
      date: "Jan 12, 2021",
      href: "#"
    }
  ];

  const handleNextDontMiss = () => {
    setDontMissIndex((prev) => (prev + 1) % (dontMissPosts.length - 2));
  };

  const handlePrevDontMiss = () => {
    setDontMissIndex((prev) => (prev - 1 + (dontMissPosts.length - 2)) % (dontMissPosts.length - 2));
  };

  // "Pets Care" widget Carousel state
  const [petsCareIndex, setPetsCareIndex] = useState(0);
  const petsCarePosts = [
    {
      title: "Dog Food Recall as Urgent Warning Issued to Pet Owners in 16 States",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/d1b998484548c9450b9b96f2c1e73c86-450x300.jpeg",
      date: "Jan 14, 2020",
      href: "#"
    },
    {
      title: "Kitten Recovering at Oregon Shelter After Being Dyed Bright Pink",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2020/01/raul-varzar-1l2waV8glIQ-unsplash-450x332.jpg",
      date: "Jan 13, 2020",
      href: "#"
    },
    {
      title: "Hamsters Do Not Make Great Pets for Children and Here's 6 Reasons Why",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2020/01/karlijn-prot-5hMlxeWjVCo-unsplash-450x298.jpg",
      date: "Jan 12, 2020",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#111] antialiased">
      <CupOfCoffeeHeader />

      <main className="container mx-auto px-4 max-w-[1200px] py-8">
        
        {/* Section 1: Hero Grid (1 + 2 Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Left large column (Span 2) */}
          <div className="lg:col-span-2 relative group overflow-hidden cursor-pointer bg-neutral-950 aspect-[3/2] flex flex-col justify-end">
            <img 
              src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/f78d2a8e671a69301e3b4fd6817017b0-768x519.jpeg" 
              alt="The Masked Singer" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="relative p-6 md:p-10 z-10 space-y-3">
              <span className="bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 inline-block rounded-xs">
                Lifestyle
              </span>
              <h2 className="text-white text-[24px] md:text-[34px] font-extrabold leading-tight hover:text-[#e21d23] transition-colors">
                <Link href="#">The Masked Singer 2024: Chicken Caesar Becomes Second Celebrity Contestant Revealed</Link>
              </h2>
              <p className="text-gray-300 text-[13px] md:text-[14px] line-clamp-2 leading-relaxed">
                To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
              </p>
              <div className="flex items-center text-gray-400 text-[11px] font-bold uppercase tracking-wider space-x-3 pt-1">
                <span className="text-white">By Shane Doe</span>
                <span>•</span>
                <span>Jan 6, 2020</span>
              </div>
            </div>
          </div>

          {/* Right Column Stack (1 column, 2 posts vertical) */}
          <div className="flex flex-col gap-6 justify-between">
            {[
              {
                title: "US Soldier Dead After A Truck Hit His Military Vehicle On A Highway",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/4b6d058ef8bad80d06f408ad27daa2da-450x300.jpeg",
                date: "Jan 5, 2020",
                author: "Shane Doe"
              },
              {
                title: "Challenging the Skating Quo: Nation's Youth Embracing Skateboarder Mentality",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/93975168ae87d18eccd3bbdd8b396332-450x300.jpeg",
                date: "Jan 4, 2020",
                author: "Shane Doe"
              }
            ].map((post, idx) => (
              <div key={idx} className="relative group overflow-hidden cursor-pointer bg-neutral-900 aspect-[3/2] flex flex-col justify-end flex-1">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="relative p-6 z-10 space-y-2">
                  <h3 className="text-white text-[16px] md:text-[18px] font-extrabold leading-snug hover:text-[#e21d23] transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-wider space-x-2.5">
                    <span className="text-white">By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard Ad Banner */}
        <div className="w-full flex justify-center py-6 mb-12 border-t border-b border-gray-100">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block max-w-full">
            <img 
              loading="lazy" 
              src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2023/11/newstime-mid-blue.jpg" 
              width="728" 
              height="90" 
              alt="Advertisement banner" 
              className="max-h-[90px] w-auto mx-auto object-contain"
            />
          </a>
        </div>

        {/* Section 2: Don't Miss (Carousel) */}
        <section className="mb-16">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
              <h2 className="text-[18px] font-black uppercase tracking-wider text-[#111]">Don't Miss</h2>
            </div>
            <div className="flex space-x-1.5">
              <button 
                onClick={handlePrevDontMiss}
                className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#e21d23] hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNextDontMiss}
                className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#e21d23] hover:text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${dontMissIndex * (100 / 3.05)}%)` }}
            >
              {dontMissPosts.map((post, idx) => (
                <div key={idx} className="min-w-[100%] sm:min-w-[48%] lg:min-w-[31.5%] group cursor-pointer space-y-3">
                  <div className="relative aspect-[3/2] bg-neutral-100 overflow-hidden rounded-sm">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {post.isVideo && (
                      <span className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#e21d23] flex items-center justify-center text-white shadow-lg"><Play size={14} fill="white" /></span>
                    )}
                  </div>
                  <div>
                    <span className="text-[#e21d23] text-[10px] font-black uppercase tracking-wider block mb-1">
                      {post.cat}
                    </span>
                    <h3 className="text-[15px] font-extrabold leading-snug text-[#111] hover:text-[#e21d23] transition-colors line-clamp-2 uppercase">
                      <Link href={post.href}>{post.title}</Link>
                    </h3>
                    <span className="text-[10px] text-gray-400 font-semibold block mt-1">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Top Posts (4 columns) */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-6">
            <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
            <h2 className="text-[18px] font-black uppercase tracking-wider text-[#111]">Top Posts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hundred Good Questions to Ask Friends, From BFFs to New Pals",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/8a16a1d99c4d365b0ab8548f0fb6ebc3-450x300.jpeg",
                date: "Jan 10, 2020",
                cat: "Lifestyle"
              },
              {
                title: "Researchers 3D Print Components for a Portable Mass Spectrometer",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/8823cd8619367dc0a5991ec9bb27f98c-450x338.jpeg",
                date: "Jan 9, 2020",
                cat: "Science"
              },
              {
                title: "Women Living In More Walkable Neighborhoods Have Lower Rates of Some Cancers",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/8305c6537a0356d1823f2b25713b6a30-450x300.jpeg",
                date: "Jan 8, 2020",
                cat: "Health"
              },
              {
                title: "Airport Lounges are Less Exclusive. Not Everyone is Happy About It",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/4cffe0548fc3073c2c86d694c9758c02-450x300.jpeg",
                date: "Jan 7, 2020",
                cat: "Travel"
              }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer space-y-3">
                <div className="relative aspect-[3/2] bg-neutral-100 overflow-hidden rounded-sm">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-[#111] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-xs">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold leading-snug text-[#111] hover:text-[#e21d23] transition-colors line-clamp-2 uppercase">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-wider space-x-2 mt-1.5">
                    <span>By Shane Doe</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Split Layout (Main content feed left + sticky sidebar right) */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column (66%) */}
          <div className="lg:w-[68%] space-y-12">
            
            {/* Sub-section: Health & Lifestyle */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
                  <h2 className="text-[18px] font-black uppercase tracking-wider text-[#111]">Health & Lifestyle</h2>
                </div>
              </div>

              {/* Main featured moisturizer post */}
              <div className="group cursor-pointer mb-8 space-y-4">
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 rounded-sm">
                  <img 
                    src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/fbab2fdd5e4fd481139b15df9b542278-768x513.jpeg" 
                    alt="Skincare moisturiser" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[20px] md:text-[24px] font-extrabold leading-snug text-[#111] hover:text-[#e21d23] transition-colors uppercase">
                    <Link href="#">Revitalise Your Skin: 10 Top-Rated Premium Face Moisturisers on Amazon, at Up To 25% Off</Link>
                  </h3>
                  <div className="flex items-center text-gray-400 text-[11px] font-bold uppercase tracking-wider space-x-3.5">
                    <span className="text-[#111]">By Shane Doe</span>
                    <span>•</span>
                    <span>Jan 11, 2020</span>
                  </div>
                </div>
              </div>

              {/* Grid block underneath featured */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "You Can Now Uber a Hot Air Balloon Ride in this Country!",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/52e19ff6b2ed7f540d62bb2f17eb3365-450x300.jpeg",
                    date: "Jan 11, 2020"
                  },
                  {
                    title: "New Brain Imaging Technique Sheds Light on Invisible mTBIs",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/855b48698e797ffaf683299e4003cc85-450x253.jpeg",
                    date: "Jan 11, 2020"
                  },
                  {
                    title: "How To Set Up Your Artisan Skincare Lab In 2021?",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/fb27117c368c0c8c91253b0b89d4915b-450x300.jpg",
                    date: "Jan 11, 2020"
                  },
                  {
                    title: "Blurred Lips – A Makeup Technique for Lush and Irresistable Lips",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/f5ec31a3d8c2fa48c684b562b805f28f-450x319.jpeg",
                    date: "Jan 11, 2020"
                  }
                ].map((post, idx) => (
                  <div key={idx} className="group flex gap-4 items-start cursor-pointer">
                    <div className="w-[100px] h-[75px] shrink-0 overflow-hidden rounded-sm bg-neutral-100">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-extrabold text-[#111] leading-snug hover:text-[#e21d23] line-clamp-2 transition-colors uppercase">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <span className="text-[10px] text-gray-400 font-semibold block mt-1">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-section: Featured Articles (Detailed list feed) */}
            <div>
              <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-6">
                <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
                <h2 className="text-[18px] font-black uppercase tracking-wider text-[#111]">Featured Articles</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Forgotten Comedy Actors That Need to Make a Comeback",
                    cat: "TV & Drama",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/14db516e40f5744c1e169883bcfb33f9-300x200.jpeg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Mar 15, 2020"
                  },
                  {
                    title: "Ottawa County Partners With 123NET To Install 380 Miles Of Internet Fiber",
                    cat: "Software",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/4b6c53605612dfd75af35054508beff0-300x200.jpg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Mar 15, 2020"
                  },
                  {
                    title: "Santorini Is Getting A New Hotel Next Year — With A Rooftop Garden & Stunning Views",
                    cat: "World",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/4d539b0a48424ff4809ad10d4f6e990a-300x200.jpeg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Mar 15, 2020"
                  },
                  {
                    title: "The Beautiful Little Greek Island Set to Rival Santorini and Mykonos with Posh New Hotel",
                    cat: "World",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/5dc4e4b801a218696ff037a6da76c51b-300x198.jpg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Jan 14, 2020"
                  },
                  {
                    title: "25 Cool Face Mask Styles We Love That You Can Buy Online or Make Yourself",
                    cat: "Health",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a882221546d2deccf24446f90a9e425b-300x200.jpeg",
                    excerpt: "Jungfrau A. Bietschhorn This region is a magnificent area with high mountain ranges, glaciers and is actually the most glaciated...",
                    date: "Jan 22, 2021",
                    comments: 3
                  },
                  {
                    title: "Bitcoin Q1 Technical Outlook: Chart Signals Remain Constructive",
                    cat: "Technology",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a16df646595a3817abdc13d5d2234e0f-300x200.jpg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Jan 16, 2021",
                    comments: 3
                  },
                  {
                    title: "Soon You Can Give Your iPhone a Physical Keyboard With Real Buttons",
                    cat: "Technology",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/59467acc317229b35f7605257a027fc2-300x200.jpeg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Jan 16, 2021",
                    comments: 3
                  },
                  {
                    title: "Review: Cold Showers Health Benefits and The Best Way to do Them",
                    cat: "Health",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a63a62ea9fec75962aa8901d747c9c3d-200x300.jpeg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Jan 15, 2021",
                    score: "8.9",
                    comments: 3
                  },
                  {
                    title: "Over Half of Pet Owners are Worried About Their Animal's Weight, Study Finds",
                    cat: "Lifestyle",
                    img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/e9ebaac329f3eca64e5ae35a88a4be6c-300x220.jpeg",
                    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified...",
                    date: "Jan 15, 2021",
                    comments: 3
                  }
                ].map((post, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-5 border-b border-gray-100 pb-6 last:border-0 last:pb-0 cursor-pointer">
                    <div className="md:w-[35%] shrink-0 relative aspect-[4/3] bg-neutral-100 overflow-hidden rounded-sm">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {post.score && (
                        <div className="absolute top-3 left-3 bg-[#e21d23] text-white text-[11px] font-black w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                          {post.score}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center space-y-2">
                      <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-wider space-x-3">
                        <span className="text-[#e21d23] font-black">{post.cat}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        {post.comments && (
                          <>
                            <span>•</span>
                            <span className="flex items-center"><MessageSquare size={10} className="mr-0.5" /> {post.comments}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-[17px] md:text-[19px] font-extrabold leading-snug text-[#111] hover:text-[#e21d23] transition-colors line-clamp-2 uppercase">
                        <Link href="#">{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 font-medium">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Trigger */}
              <div className="mt-8 text-center border-t border-gray-100 pt-8">
                <button className="bg-white border border-gray-200 text-[#111] text-[11px] font-black uppercase tracking-widest px-8 py-3.5 hover:bg-[#e21d23] hover:text-white hover:border-[#e21d23] transition-colors rounded-sm inline-flex items-center">
                  Load More <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Sidebar Column (33%) */}
          <div className="lg:w-[32%] space-y-10 lg:sticky lg:top-[85px] self-start">
            
            {/* Widget: Pets Care (Carousel) */}
            <div className="border border-gray-100 p-6 rounded-sm bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
                  <h3 className="text-[13px] font-black uppercase tracking-wider text-[#111]">Pets Care</h3>
                </div>
                <div className="flex space-x-1">
                  <button 
                    onClick={() => setPetsCareIndex((prev) => (prev - 1 + petsCarePosts.length) % petsCarePosts.length)}
                    className="w-6 h-6 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#e21d23] hover:text-white transition-colors"
                  >
                    <ChevronLeft size={12} />
                  </button>
                  <button 
                    onClick={() => setPetsCareIndex((prev) => (prev + 1) % petsCarePosts.length)}
                    className="w-6 h-6 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#e21d23] hover:text-white transition-colors"
                  >
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>

              {/* Slider Panel */}
              <div className="relative overflow-hidden aspect-[3/2] rounded-sm bg-neutral-100 mb-3 group cursor-pointer">
                <img 
                  src={petsCarePosts[petsCareIndex].img} 
                  alt="Pet care" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-[13px] font-extrabold text-[#111] hover:text-[#e21d23] leading-snug transition-colors line-clamp-2 uppercase">
                <Link href={petsCarePosts[petsCareIndex].href}>{petsCarePosts[petsCareIndex].title}</Link>
              </h4>
              <span className="text-[10px] text-gray-400 font-semibold block mt-1.5">{petsCarePosts[petsCareIndex].date}</span>
            </div>

            {/* Widget: We Are Social */}
            <div className="border border-gray-100 p-6 rounded-sm bg-white">
              <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3 mb-5">
                <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
                <h3 className="text-[13px] font-black uppercase tracking-wider text-[#111]">We Are Social!</h3>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[12px] font-bold">
                {[
                  { name: "Facebook", count: "1.1K Fans", color: "bg-[#3b5998]" },
                  { name: "YouTube", count: "105K Subs", color: "bg-[#ff0000]" },
                  { name: "Twitter", count: "68.9K Follows", color: "bg-[#1da1f2]" },
                  { name: "Instagram", count: "46.4K Follows", color: "bg-[#e1306c]" }
                ].map((serv, idx) => (
                  <div key={idx} className={`${serv.color} text-white p-3 rounded-sm flex flex-col justify-center items-center text-center cursor-pointer hover:opacity-90 transition-opacity`}>
                    <span>{serv.name}</span>
                    <span className="text-[10px] opacity-75 font-semibold mt-0.5">{serv.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget: Intl. Politics */}
            <div className="border border-gray-100 p-6 rounded-sm bg-white">
              <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3 mb-5">
                <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
                <h3 className="text-[13px] font-black uppercase tracking-wider text-[#111]">Intl. Politics</h3>
              </div>

              <div className="space-y-5">
                {/* Large main Politics card */}
                <div className="group cursor-pointer space-y-2">
                  <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100 rounded-sm">
                    <img 
                      src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a379706b51c46ce03dd1e5fa66b03441-450x300.jpeg" 
                      alt="North Korea" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-[13px] font-extrabold text-[#111] hover:text-[#e21d23] leading-snug line-clamp-2 uppercase">
                    <Link href="#">North Korea Closes 4 Diplomatic Missions, Suggesting Economic Woes</Link>
                  </h4>
                  <span className="text-[10px] text-gray-400 font-semibold block mt-1">Mar 16, 2020</span>
                </div>

                {/* Sublist stack */}
                <div className="space-y-3.5 pt-3 border-t border-gray-50">
                  {[
                    {
                      title: "U.S. to Finally Have a Secretary-Level Position for Tourism",
                      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/e9fa2fb78164547dd5c183b7b7f23e96-300x200.jpeg",
                      date: "Mar 16, 2020"
                    },
                    {
                      title: "Global Banking Crisis Fears and Slowdown Approaching in 2024",
                      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/e857d45fd6e0ca5d282dbbe7a4312b95-300x176.jpg",
                      date: "Mar 15, 2020"
                    },
                    {
                      title: "Transport Project to Link India to Middle East, Europe Unveiled",
                      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/68928fa37417aa1801e652343383e25b-300x210.jpeg",
                      date: "Mar 15, 2020"
                    }
                  ].map((sub, idx) => (
                    <div key={idx} className="group flex gap-3 items-center cursor-pointer">
                      <div className="w-[60px] h-[45px] shrink-0 overflow-hidden rounded-sm bg-neutral-100">
                        <img src={sub.img} alt={sub.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-[12px] font-extrabold text-[#111] leading-snug line-clamp-2 hover:text-[#e21d23] transition-colors uppercase">
                          <Link href="#">{sub.title}</Link>
                        </h5>
                        <span className="text-[9px] text-gray-400 font-semibold">{sub.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Widget: Subscribe Newsletter */}
            <div className="bg-[#ECECEC] p-6 text-center rounded-sm">
              <Mail className="w-8 h-8 text-[#e21d23] mx-auto mb-3" />
              <h3 className="text-[16px] font-extrabold mb-1.5 text-[#111] uppercase tracking-wider">Subscribe to Updates</h3>
              <p className="text-gray-500 text-[12px] mb-5 leading-relaxed font-semibold">
                Get the latest news and articles delivered straight to your inbox weekly.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 text-[12px] text-[#111] outline-none focus:border-[#e21d23] transition-colors rounded-sm"
                  required
                />
                <button type="submit" className="w-full bg-[#e21d23] text-white text-[11px] font-black uppercase tracking-widest py-3 hover:bg-[#111] transition-colors rounded-sm">
                  Subscribe
                </button>
                <div className="flex items-start text-left text-[11px] text-gray-500 mt-2 font-medium">
                  <input type="checkbox" id="privacy-check" className="mt-0.5 mr-2 rounded-xs accent-[#e21d23]" required />
                  <label htmlFor="privacy-check" className="cursor-pointer leading-tight">
                    By signing up, you agree to our terms and our <Link href="#" className="underline">Privacy Policy</Link> agreement.
                  </label>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* Section 5: Featured Tech (Light BG section `#F8F3F4`) */}
        <section className="mt-16 bg-[#F8F3F4] -mx-4 px-4 py-12 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 rounded-xs">
          <div className="container mx-auto max-w-[1200px] space-y-8">
            <div className="flex items-center space-x-3 border-b border-gray-200 pb-3 mb-6">
              <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
              <h2 className="text-[18px] font-black uppercase tracking-wider text-[#111]">Featured Tech</h2>
            </div>

            {/* Split row (2 columns large grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Most Teens Actually Have Healthy Relationship with Digital Technology: Study",
                  cat: "Software",
                  img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/bd63b385cd05834dc72f3c4ff6305173-768x512.jpeg",
                  date: "Mar 15, 2020"
                },
                {
                  title: "Top Tried & Tested Ways, You Can Increase Mobile Battery Life by 30%",
                  cat: "Mobiles",
                  img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/9a03515227057d959ecf30c0e71c2c08-768x512.jpeg",
                  date: "Mar 15, 2020"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group overflow-hidden cursor-pointer bg-neutral-950 aspect-[16/10] rounded-sm flex flex-col justify-end">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                  <div className="relative p-6 z-10 space-y-2">
                    <span className="bg-[#e21d23] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 inline-block rounded-xs">
                      {item.cat}
                    </span>
                    <h3 className="text-white text-[18px] md:text-[22px] font-extrabold leading-snug hover:text-[#e21d23] transition-colors line-clamp-2 uppercase">
                      <Link href="#">{item.title}</Link>
                    </h3>
                    <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-wider space-x-2 pt-1">
                      <span className="text-white">By Shane Doe</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lower row (4 columns card feed) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {[
                {
                  title: "Can I Withdraw Money From the ATM of Another Bank in Australia, Bank Replies",
                  img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/18f0b132ee35df545fbfe4c0c5fc0e92-450x300.jpeg",
                  date: "Jan 14, 2021"
                },
                {
                  title: "Tips To Get The Most Out Of Your New Nvidia RTX 2060",
                  img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/c925205784e6fb2aed675f1893f989ed-450x212.jpeg",
                  date: "Jan 14, 2021"
                },
                {
                  title: "Review: Xiaomi Redmi 13C: Small Upgrades, Big Value",
                  img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/frederik-lipfert-tJr0BZ-9tTo-unsplash-450x300.jpg",
                  date: "Jan 14, 2021",
                  score: "85%"
                },
                {
                  title: "Get this 4K HD Dual-Camera Drone with WiFi for $75",
                  img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/d5c279c21fd7eb9bda49101c7f587195-450x300.jpeg",
                  date: "Jan 14, 2021"
                }
              ].map((card, idx) => (
                <div key={idx} className="group cursor-pointer bg-white p-4 border border-gray-100 rounded-sm space-y-3">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-neutral-100">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {card.score && (
                      <div className="absolute top-2.5 right-2.5 bg-[#2ab391] text-white text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                        {card.score}
                      </div>
                    )}
                  </div>
                  <h4 className="text-[13px] font-extrabold text-[#111] leading-snug line-clamp-2 hover:text-[#e21d23] transition-colors uppercase">
                    <Link href="#">{card.title}</Link>
                  </h4>
                  <span className="text-[10px] text-gray-400 font-semibold block">{card.date}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: Editor's Picks */}
        <section className="mt-16">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-6">
            <span className="w-2.5 h-2.5 bg-[#e21d23]"></span>
            <h2 className="text-[18px] font-black uppercase tracking-wider text-[#111]">Editor's Picks</h2>
          </div>

          {/* Upper segment (3 columns large grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Registration for Youth Excellence Award 2023 Opens on Monday",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/af92311443af9b1fcec5726b3bc770f1-450x299.jpeg",
                date: "Jan 13, 2021"
              },
              {
                title: "11 Japandi Style Home Décor Finds From Amazon This Year",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/10bf4816f1db30880247ffaae7ae7898-450x300.jpeg",
                date: "Jan 13, 2021"
              },
              {
                title: "‘No Time to Die’ Wins at 2021 Hollywood Music in Media Awards",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/c5e024bd65767280384579f0e375179a-450x300.jpeg",
                date: "Jan 13, 2021"
              }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer space-y-3">
                <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100 rounded-sm">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold leading-snug text-[#111] hover:text-[#e21d23] transition-colors line-clamp-2 uppercase">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-wider space-x-2 mt-1.5">
                    <span>By Shane Doe</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lower segment (4 columns cards grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-gray-50">
            {[
              {
                title: "The 30 Hottest Bladeless Fan Models in the World Today (Updated 2023)",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/58ea0603bc8839414edbf52338744fdd-450x300.jpeg",
                date: "Jan 12, 2021"
              },
              {
                title: "Daring Looks Pets Wore to Tech Fashion Week this Year",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/ceade5c6c45b0dbfbea4827d184f5b91-450x300.jpeg",
                date: "Jan 12, 2021"
              },
              {
                title: "Dubai-Based Yacht Company is Offering Socially-Distanced Luxury",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/b937fc81e58b2af354b4f4c0b2494444-450x308.jpg",
                date: "Jan 12, 2021"
              },
              {
                title: "White or Brown: A Healthy Comparison Between the Daily Breads",
                img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/716c2a7cfdbf3e64c6d2b97fc6fa06fb-450x299.jpeg",
                date: "Jan 12, 2021"
              }
            ].map((card, idx) => (
              <div key={idx} className="group cursor-pointer space-y-3">
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-neutral-100">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h4 className="text-[13px] font-extrabold text-[#111] leading-snug line-clamp-2 hover:text-[#e21d23] transition-colors uppercase">
                  <Link href="#">{card.title}</Link>
                </h4>
                <span className="text-[10px] text-gray-400 font-semibold block">{card.date}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <CupOfCoffeeFooter />
    </div>
  );
}
