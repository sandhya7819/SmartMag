"use client";

import Link from "next/link";
import { ChevronRight, Play, Heart, Mail, Repeat } from "lucide-react";
import SpotlightHeader from "@/components/SpotlightHeader";
import SpotlightFooter from "@/components/SpotlightFooter";

// Custom RadialProgress badge for review ratings
function RadialProgress({ value, max = 10, isPercent = false }: { value: number; max?: number; isPercent?: boolean }) {
  const r = 20.5;
  const circ = 2 * Math.PI * r; // ~128.8
  const offset = circ * (1 - value / max);
  return (
    <div className="absolute bottom-3 right-3 bg-black/85 rounded-full w-[44px] h-[44px] flex items-center justify-center shadow-lg backdrop-blur-xs z-10 select-none">
      <svg className="absolute transform -rotate-90 w-[44px] h-[44px]" viewBox="0 0 44 44">
        <circle 
          fill="transparent" 
          stroke="rgba(255, 255, 255, 0.2)" 
          strokeWidth="3" 
          r={r} 
          cx="22" 
          cy="22" 
        />
        <circle 
          fill="transparent" 
          stroke="#CF2E2E" 
          strokeWidth="3" 
          strokeDasharray={`${circ} ${circ}`}
          strokeDashoffset={offset}
          r={r} 
          cx="22" 
          cy="22" 
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <span className="text-[11px] font-black text-white relative z-10 tracking-tight font-sans">
        {value}{isPercent && "%"}
      </span>
    </div>
  );
}

// Centered Play/Music/Gallery Icons overlays
function CenterOverlayIcon({ type }: { type: 'gallery' | 'audio' }) {
  return (
    <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black/20">
      <div className="w-11 h-11 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-350">
        {type === 'gallery' ? (
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </div>
    </div>
  );
}

// styled Section Heading component
function SectionHeading({ title, href }: { title: string; href?: string }) {
  return (
    <div className="block-head block-head-ac block-head-b is-left mb-6 border-b border-gray-100 pb-3 relative">
      <h3 className="text-[14px] font-black uppercase tracking-widest text-[#111] relative inline-block after:absolute after:-bottom-[15px] after:left-0 after:w-12 after:h-[3px] after:bg-[#CF2E2E] font-sans">
        {title}
      </h3>
      {href && (
        <Link href={href} className="absolute right-0 bottom-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#CF2E2E] transition-colors flex items-center gap-0.5">
          View All <ChevronRight size={10} className="mt-[-1px]" />
        </Link>
      )}
    </div>
  );
}

export default function SpotlightPage() {
  
  // Section 1: Hero Featured Post
  const heroFeatured = {
    title: "Palm Springs Film Festival Awards 2024 Red Carpet: All National Celebrity Looks",
    category: "Fashion & Style",
    catUrl: "#",
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson,...",
    img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/c99f864a8a35ba84c940d0cf68581839-768x686.jpeg",
    href: "#"
  };

  // Section 1: Trending Now Sidebar Widget
  const trendingNow = [
    {
      title: "The Curly Bob Is the Coolest Haircut for Seamless Volume and Bouncy Texture",
      date: "Jan 10, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/153043b65bd880d10318496299422da0-450x300.jpeg",
      href: "#"
    },
    {
      title: "New Year Film Screening at Korean Cultural Centre Resonates with Viewers",
      date: "Jan 9, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/a379706b51c46ce03dd1e5fa66b03441-1-450x300.jpeg",
      href: "#"
    },
    {
      title: "Day in the Life: The Dubai Architect Building a Futuristic Metropolis in the Desert",
      date: "Jan 8, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/c4bc7227e4f6166ad14a7ae2f9f6064f-450x300.jpeg",
      href: "#"
    }
  ];

  // Section 1.5: 3-column posts grid below hero
  const rowOfThree = [
    {
      title: "Country Music Superstar to Host Enormous Concert to Benefit Hall of Fame",
      date: "Jan 6, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/10545f5c78c8b16808e960710a761d3b-450x676.jpeg",
      href: "#"
    },
    {
      title: "Greece Wants to Manage Tourists on Overrun Santorini for Summer 2024",
      date: "Jan 5, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/4d539b0a48424ff4809ad10d4f6e990a-1-450x300.jpeg",
      href: "#"
    },
    {
      title: "Stella DIY Educational Gadget for Measuring Daily Health",
      date: "Jan 4, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/0c8ec6f0247e19fac86abfebcf647a0e-450x293.jpeg",
      href: "#"
    }
  ];

  // Section 2: Life & Style Content
  const lifeStyleFeatured = {
    title: "Launch of Smarty, the Ultimate Smartwatch for an Active and Healthy Lifestyle",
    category: "Life & Style",
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and...",
    img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/0d2cf585ec33796ac62878520e2a65d7-450x675.jpeg",
    href: "#"
  };

  const lifeStyleLeftList = [
    {
      title: "Rolling Stone Names Jimi Hendrix The Greatest Guitar Player Of All Time",
      category: "Culture",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/1e22c283f8bec883112c435ac556a647-450x296.jpg",
      href: "#"
    },
    {
      title: "21 Camera-Ready Beauty Products That Will Blur Your Complexion",
      category: "Beauty",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/07e75b31971e4b15017290ab29fd1135-450x338.jpeg",
      href: "#"
    },
    {
      title: "The Best Perfumes Under $100 For Men: Zara, Marks & Spencer And More",
      category: "Perfumes",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/571ee9419d5169c6ca96e790605710e3-450x675.jpeg",
      href: "#"
    }
  ];

  // Section 2: Life & Style Sidebar Widgets
  const mustReadFeatured = {
    title: "Fashion Experts Reveal The 9 Trends They Won't Be Caught Wearing",
    category: "Life & Style",
    img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/572e54158c21cfb3d8011b027009e7f0-450x253.jpeg",
    href: "#"
  };

  const mustReadList = [
    {
      title: "5 Ways Artificial Intelligence Technology has Improved Our Quality of Life",
      date: "Jan 14, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/9c68a64261dbfeb69ba75fc5c2dae7ab-240x300.jpeg",
      href: "#"
    },
    {
      title: "Google DeepMind has New Rules to Make AI Robots Behave in Your Home",
      date: "Jan 13, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/b2f15c14772149b871811a3b21d969a4-199x300.jpeg",
      href: "#"
    },
    {
      title: "European Royals Ditch Heels for Flats: Royal Fashion Redefined",
      date: "Jan 12, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/a8f04b3f6790787eee950742ed18479f-300x300.jpeg",
      href: "#"
    }
  ];

  // Section 3: Dark Card Grid
  const darkCardPosts = [
    {
      title: "The Most Popular Outfit on Friends Probably Isn't What You'd Expect",
      category: "Fashion & Style",
      author: "Shane Doe",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/4f9a0003bf252c5085b692982d89eef4-768x512.jpg",
      href: "#"
    },
    {
      title: "The 12 Best Sunglasses Brands To Shop For Spring/Summer 2024",
      category: "Fashion & Style",
      author: "Shane Doe",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/0a238c897154c5baf422f1955197e808-768x356.jpeg",
      href: "#"
    }
  ];

  // Section 4: Guides & Advice Cards
  const guidesAdviceCards = [
    {
      title: "14 Best Travel Size Perfumes to Ensure You Smell Heavenly on the Go",
      category: "Perfumes",
      author: "Shane Doe",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/6f56c714b591e2edbd470d2c9fd7daa7-450x272.jpeg",
      href: "#"
    },
    {
      title: "12 Must-Have Affordable Minimalist Outfits to Make Your Own This Winter",
      category: "Apparel",
      author: "Shane Doe",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/8aee4fe72667812854bd942a43b4fd86-450x310.jpeg",
      href: "#"
    },
    {
      title: "How To Start A Clothing Business: Everything You Need To Know",
      category: "Fashion & Style",
      author: "Shane Doe",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/b87502269bbc996e242752d47b05a122-450x271.jpeg",
      href: "#"
    }
  ];

  const guidesAdviceList = [
    {
      title: "4 Morning Weight Loss Drinks That Are Healthier Than Coffee",
      date: "Jan 12, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/0826715ea5ec4adea2c62179f5405bbe-300x225.jpg",
      href: "#"
    },
    {
      title: "How Does a Walk on a Treadmill Compare to a Walk Outdoors?",
      date: "Jan 12, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/c152217bbc3252338993d8240151ef83-300x215.jpg",
      href: "#"
    },
    {
      title: "7 New York Fashion Week Top Makeup Trends We Spotted",
      date: "Jan 12, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/cfa22f0058c5e86550c2fbbbb7e6d676-300x300.jpg",
      href: "#"
    },
    {
      title: "12 Must-Have Minimalist Outfits to Make Your Own This Winter",
      date: "Jan 12, 2021",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/b499a934878d69e5e74130a697348eb7-300x192.jpg",
      href: "#"
    },
    {
      title: "12 Best Lavender Essential Oils for Ultimate Relaxation",
      date: "Jan 12, 2021",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Louis Vuitton's Sandwich Bag: A Bold Move in Luxury Fashion",
      date: "Mar 15, 2020",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/b07363e1e45d011bd01a29b6f9d0e7cd-300x200.jpg",
      href: "#"
    }
  ];

  // Section 6: Latest Articles Split (6 posts list)
  const latestArticles = [
    {
      title: "Eating Habits Courteney Cox Swears By to Look Amazing at 59",
      date: "Jan 22, 2021",
      readTime: "3 Mins Read",
      views: "364 Views",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/995a72edb76e21e7d5c88813c736acb1-300x200.jpg",
      excerpt: "Jungfrau A. Bietschhorn This region is a magnificent area with high mountain ranges, glaciers and is actually the most glaciated...",
      href: "#"
    },
    {
      title: "20 Living Room Color Combinations – Best Living Room Color Scheme",
      date: "Jan 16, 2021",
      readTime: "8 Mins Read",
      views: "86 Views",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/a66f99ad233894120896c18218d8c6ae-300x180.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and...",
      overlay: "gallery",
      href: "#"
    },
    {
      title: "15 Best Exercises to Lose Belly Fat – How to Burn Belly Fat Fast",
      date: "Jan 16, 2021",
      readTime: "8 Mins Read",
      views: "407 Views",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/cd0372ed780a684a448f7144366cfa60-300x198.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and...",
      href: "#"
    },
    {
      title: "Review: Listening Habits May Affect Music's Benefits for Memory",
      date: "Jan 15, 2021",
      readTime: "2 Mins Read",
      views: "86 Views",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/ad1aadc876e79d8b37fcff7c582a157e-300x182.jpg",
      excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...",
      rating: 8.9,
      href: "#"
    },
    {
      title: "The Health Impact of Natural vs. Artificial Light: How It Affects Us",
      date: "Jan 15, 2021",
      readTime: "8 Mins Read",
      views: "46 Views",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/591361cdedd4fe6c95822a9dced1544d-300x200.jpg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and...",
      overlay: "audio",
      href: "#"
    },
    {
      title: "Review: 6 Health Benefits of Consuming Ghee Coffee In Winters",
      date: "Jan 15, 2021",
      readTime: "2 Mins Read",
      views: "57 Views",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/0d41477d070149a9cdf195d3fd333b7e-300x206.jpg",
      excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...",
      ratingPercent: 72,
      href: "#"
    }
  ];

  // Section 6 Sidebar widget loop
  const dontMissSidebar = [
    {
      title: "Sustainable Fashion Revolution: The Impact of Gen AI",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/01f6de26e9903ae244e9c65625f42ba0-450x188.jpg",
      href: "#"
    },
    {
      title: "7 Best Fall 2024 Bag Trends: The Bags You'll See Everywhere",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/ebb3e84a0f4d719db08ca6bb9b0048f0-450x300.jpg",
      href: "#"
    },
    {
      title: "10 Health Focused Smartwatches for Heart Patients",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/0cd5265c43c413a7b7a46dde2fa0e4c9-450x300.jpg",
      href: "#"
    },
    {
      title: "15 Best Gifts in 2024 for Valentine's Day Gifting",
      img: "https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/23a5efbf36cf79ea7805430c95bbbaaf-450x300.jpg",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans selection:bg-[#CF2E2E] selection:text-white">
      <SpotlightHeader />

      <main className="container mx-auto px-6 max-w-[1200px] py-10">
        
        {/* ==================== 1. HERO GRID SECTION ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left Column (66.6%): Single Large Grid Post */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <article className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] w-full overflow-hidden relative rounded-sm bg-gray-100">
                <img 
                  src={heroFeatured.img} 
                  alt={heroFeatured.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="py-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#CF2E2E] hover:underline mb-2.5 inline-block">
                    {heroFeatured.category}
                  </span>
                  <h2 className="text-[28px] md:text-[34px] font-black tracking-tight text-[#111] leading-tight group-hover:text-[#CF2E2E] transition-colors mb-4 font-sans">
                    {heroFeatured.title}
                  </h2>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6 font-medium">
                    {heroFeatured.excerpt}
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column (33.3%): Trending Now Loop */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_3px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="mb-6">
              <SectionHeading title="Trending Now" />
            </div>
            
            <div className="space-y-6 flex-grow flex flex-col justify-around">
              {trendingNow.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-5 last:border-0 last:pb-0 text-left">
                  <div className="text-[28px] font-black text-gray-200 italic leading-none group-hover:text-[#CF2E2E] transition-colors font-sans mt-0.5 select-none w-10 shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase line-clamp-3 font-sans">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1.5">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-10"></div>

        {/* ==================== 1.5. ROW OF THREE SMALL POSTS ==================== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {rowOfThree.map((post, idx) => (
            <Link href={post.href} key={idx} className="flex gap-4 group cursor-pointer items-center text-left">
              <div className="w-[100px] h-[100px] shrink-0 overflow-hidden rounded-sm bg-gray-100 relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase line-clamp-3 font-sans">
                  {post.title}
                </h4>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-2">{post.date}</span>
              </div>
            </Link>
          ))}
        </section>

        {/* ==================== 2. DESKTOP AD BANNER 1 ==================== */}
        <div className="w-full flex justify-center mb-12 py-3 border-t border-b border-gray-100 bg-[#fafafa]">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block max-w-full">
            <img 
              src="https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2024/01/spotlight-top.jpg" 
              alt="Spotlight Top Banner Advertisement" 
              width={970} 
              height={125}
              className="w-auto max-h-[125px] object-contain mx-auto"
            />
          </a>
        </div>

        {/* ==================== 3. LIFE & STYLE (SPLIT LAYOUT) ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Side (66.6%): Life & Style Main Content */}
          <div className="lg:col-span-8">
            <SectionHeading title="Life & Style" href="#" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Featured Smartwatch */}
              <article className="group cursor-pointer flex flex-col justify-between">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 relative">
                  <img src={lifeStyleFeatured.img} alt={lifeStyleFeatured.title} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-[#111] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1">
                    {lifeStyleFeatured.category}
                  </span>
                </div>
                <div className="py-4">
                  <h3 className="text-[20px] font-black leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase font-sans mb-3">
                    {lifeStyleFeatured.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                    {lifeStyleFeatured.excerpt}
                  </p>
                </div>
              </article>

              {/* Stack of 3 smaller lists */}
              <div className="space-y-6">
                {lifeStyleLeftList.map((post, idx) => (
                  <Link href={post.href} key={idx} className="flex gap-4 group cursor-pointer text-left items-center border-b border-gray-50 pb-5 last:border-0 last:pb-0">
                    <div className="w-[100px] h-[100px] shrink-0 overflow-hidden rounded-sm bg-gray-100 relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#CF2E2E] block mb-1">{post.category}</span>
                      <h4 className="text-[13px] font-bold leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase line-clamp-3 font-sans">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side (33.3%): Life & Style Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-[80px] self-start">
            
            {/* Widget: Must Read */}
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_3px_12px_rgba(0,0,0,0.02)] text-left">
              <SectionHeading title="Must Read" />
              
              {/* Featured Post Card */}
              <div className="group cursor-pointer mb-6 border-b border-gray-100 pb-6">
                <div className="aspect-[3/2] overflow-hidden rounded-sm bg-gray-100 relative mb-4">
                  <img src={mustReadFeatured.img} alt={mustReadFeatured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-[#CF2E2E] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {mustReadFeatured.category}
                  </span>
                </div>
                <h4 className="text-[14px] font-bold leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase font-sans">
                  {mustReadFeatured.title}
                </h4>
              </div>

              {/* List items */}
              <div className="space-y-4">
                {mustReadList.map((post, idx) => (
                  <Link href={post.href} key={idx} className="flex gap-3 group cursor-pointer text-left items-center">
                    <div className="w-[60px] h-[60px] shrink-0 overflow-hidden rounded-sm bg-gray-100">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold text-[#111] leading-snug line-clamp-2 group-hover:text-[#CF2E2E] transition-colors uppercase font-sans">
                        {post.title}
                      </h5>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block mt-1">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget: Ad Box */}
            <div className="bg-white border border-gray-100 p-4 flex flex-col items-center justify-center rounded-sm shadow-[0_3px_12px_rgba(0,0,0,0.01)] text-center">
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-3">- Advertisement -</span>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block border border-gray-100">
                <img 
                  src="https://smartmag.theme-sphere.com/spotlight/wp-content/uploads/sites/51/2023/11/Woman-Square.jpg" 
                  alt="Spotlight Sidebar Ad Banner" 
                  width={300} 
                  height={250}
                  className="w-[300px] h-[250px] object-cover"
                />
              </a>
            </div>

          </div>
        </section>

        {/* ==================== 4. DARK CARD GRID SECTION (FULL WIDTH SPLIT) ==================== */}
        <section className="bg-[#111111] text-white py-12 px-6 md:px-10 rounded-sm mb-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {darkCardPosts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer flex flex-col justify-between">
                <div className="aspect-[16/9] overflow-hidden rounded-sm bg-[#222] relative mb-4">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#CF2E2E] block mb-2">{post.category}</span>
                  <h3 className="text-[18px] md:text-[22px] font-black leading-snug text-white group-hover:text-[#CF2E2E] transition-colors uppercase font-sans mb-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest space-x-2">
                    <span>By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================== 5. GUIDES & ADVICE ==================== */}
        <section className="mb-12">
          <SectionHeading title="Guides & Advice" href="#" />
          
          {/* Upper: 3 cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
            {guidesAdviceCards.map((post, i) => (
              <article key={i} className="group cursor-pointer flex flex-col justify-between">
                <div className="aspect-[1/1] overflow-hidden rounded-sm bg-gray-100 relative mb-4">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-[#CF2E2E] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {post.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-black leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase font-sans mb-2">
                    {post.title}
                  </h3>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">By {post.author}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Lower: 6 horizontal loop grid items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {guidesAdviceList.map((post, idx) => (
              <Link href={post.href} key={idx} className="flex gap-4 group cursor-pointer items-center border-b border-gray-50 pb-5 last:border-0 last:pb-0">
                <div className="w-[75px] h-[75px] shrink-0 overflow-hidden rounded-sm bg-gray-100">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase line-clamp-3 font-sans">
                    {post.title}
                  </h4>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block mt-1.5">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ==================== 6. AD BANNER 2 ==================== */}
        <div className="w-full flex justify-center mb-12 py-3 border-t border-b border-gray-100 bg-[#fafafa] hidden md:flex">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block max-w-full">
            <img 
              src="https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/Wide-Top.jpg" 
              alt="Spotlight Middle Banner Advertisement" 
              width={970} 
              height={125}
              className="w-auto max-h-[125px] object-contain mx-auto"
            />
          </a>
        </div>

        {/* ==================== 7. LATEST ARTICLES SPLIT ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column (66.6%): 6 articles vertical list with radial scores */}
          <div className="lg:col-span-8">
            <SectionHeading title="Latest Articles" />
            
            <div className="space-y-8">
              {latestArticles.map((post, idx) => (
                <article key={idx} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0 last:pb-0 items-start">
                  
                  {/* Article Media with badge overlays */}
                  <div className="w-full md:w-[40%] shrink-0 relative aspect-[3/2] overflow-hidden rounded-sm bg-gray-100">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    {/* Media Overlays */}
                    {post.overlay === 'gallery' && <CenterOverlayIcon type="gallery" />}
                    {post.overlay === 'audio' && <CenterOverlayIcon type="audio" />}
                    {post.rating && <RadialProgress value={post.rating} />}
                    {post.ratingPercent && <RadialProgress value={post.ratingPercent} max={100} isPercent />}
                  </div>

                  {/* Article Content */}
                  <div className="flex-1">
                    <h3 className="text-[18px] md:text-[20px] font-black leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors uppercase font-sans mb-3">
                      {post.title}
                    </h3>
                    
                    {/* Meta segments */}
                    <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest space-x-3 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 mt-[-1px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                        {post.views}
                      </span>
                    </div>

                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                </article>
              ))}
            </div>

            {/* Pagination / Load More button */}
            <div className="mt-12 text-center">
              <button className="bg-white border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white transition-colors duration-300 text-[11px] font-black uppercase tracking-widest px-8 py-3.5 inline-flex items-center gap-2 rounded-sm shadow-[0_2px_7px_rgba(0,0,0,0.05)]">
                Load More 
                <Repeat size={14} className="mt-[-1px]" />
              </button>
            </div>
          </div>

          {/* Right Column (33.3%): Don't Miss & Updates */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-[80px] self-start">
            
            {/* Widget: Don't Miss Grid loop */}
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_3px_12px_rgba(0,0,0,0.02)]">
              <SectionHeading title="Don't Miss" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dontMissSidebar.map((post, idx) => (
                  <Link href={post.href} key={idx} className="block group cursor-pointer text-left">
                    <div className="aspect-[3/2] overflow-hidden rounded-sm bg-gray-100 mb-2.5 relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h5 className="text-[12px] font-bold leading-snug text-[#111] group-hover:text-[#CF2E2E] transition-colors line-clamp-3 uppercase font-sans">
                      {post.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget: Subscribe to Updates Form */}
            <div className="bg-[#FFFFFF] border border-gray-100 p-8 rounded-sm shadow-[0_3px_15px_rgba(0,0,0,0.025)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#CF2E2E]"></div>
              
              <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center mx-auto mb-5 text-[#CF2E2E]">
                <Mail size={20} strokeWidth={2.5} />
              </div>

              <h3 className="text-[18px] font-black text-[#111] uppercase tracking-wider mb-2 font-sans">
                Subscribe to Updates
              </h3>
              <p className="text-gray-500 text-[12px] mb-6 leading-relaxed">
                Get the latest creative news from FooBar about art, design and business.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required
                  className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-[12px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#CF2E2E] focus:bg-white transition-all rounded-sm font-semibold"
                />
                
                <label className="flex items-start gap-2.5 text-left cursor-pointer group mt-2.5">
                  <input 
                    type="checkbox" 
                    required 
                    className="mt-0.5 w-3.5 h-3.5 accent-[#CF2E2E] border-gray-300 rounded-sm cursor-pointer"
                  />
                  <span className="text-[10px] text-gray-400 font-bold uppercase leading-tight select-none">
                    By signing up, you agree to our terms and our <Link href="#" className="text-[#CF2E2E] underline">Privacy Policy</Link> agreement.
                  </span>
                </label>

                <button 
                  type="submit"
                  className="w-full bg-[#CF2E2E] text-white hover:bg-[#111] transition-colors duration-300 text-[11px] font-black uppercase tracking-widest py-3 rounded-[2px]"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

        </section>

      </main>

      <SpotlightFooter />
    </div>
  );
}
