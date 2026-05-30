"use client";
import LazyBusyHeader from "@/components/LazyBusyHeader";
import LazyBusyFooter from "@/components/LazyBusyFooter";
import Link from "next/link";
import { MessageCircle, Star, TrendingUp, Calendar, Heart, Shield, Terminal, ArrowRight, Flame, Eye, ThumbsUp } from "lucide-react";
import { useState } from "react";

// Post Interface
interface Post {
  title: string;
  category?: string;
  date?: string;
  rating?: string;
  img: string;
  excerpt?: string;
  author?: string;
  views?: string;
}

// Data sets matching parsed_lazybusy.txt
const heroPosts: Post[] = [
  {
    category: "Lifestyle",
    title: "Hottest Sunglasses Trends Inspired by Hollywood Celebrities for Summer 2023",
    date: "Jan 7, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/10b71532d978233fc01c636e75ce605b-768x469.jpeg",
    excerpt: "Sunglasses have become an indispensable fashion accessory, transcending their functional purpose. Let's dive deep into the top eyewear styles...",
    author: "Shane Doe"
  },
  {
    category: "Health",
    title: "Why Drinking Tea First Thing In The Morning Is Not Advisable For A Healthy Lifestyle",
    date: "Jan 6, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/0826715ea5ec4adea2c62179f5405bbe-450x338.jpg",
    excerpt: "While tea offers numerous antioxidants, starting your day on an empty stomach with a cup of hot brew can trigger several gut issues...",
    author: "Jane Doe"
  }
];

const block6Posts: Post[] = [
  {
    category: "Lifestyle",
    title: "Tips And Tricks For Summer To Give Your Home A Festive Colorful Look",
    date: "Jan 15, 2021",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/38480a8083472dc1048eea05db81dc5b-300x228.jpg",
    excerpt: "Inject a burst of energy and cheerful colors into your living room with these simple decorating concepts that celebrate summer..."
  },
  {
    category: "Health",
    title: "What Is Hand Sanitizer, And Does It Keep Your Hands Germ-Free?",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/fd602e240c94a0e689474e2f8ac2ba6c-300x207.jpeg",
    excerpt: "An in-depth review of active ingredients, correct application guidelines, and limitations of gel sanitizers compared to washing with soap..."
  }
];

const block8Post: Post = {
  category: "Health",
  title: "Only 45% School Kids In State Given Health Check Under New Central Health Scheme",
  date: "Jan 11, 2020",
  img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/07bb999275243b4d351043b5feaa9ffc-768x513.jpeg",
  excerpt: "The latest educational department report shows that more than half of the government schools are yet to start periodic health screening checks..."
};

const block9Posts: Post[] = [
  {
    title: "How Do You Stay Out of the Avoid the Medicare Donut Hole?",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/aa39bfb2cca6b32bf6b16f89872a65fe-450x292.jpeg"
  },
  {
    title: "Reviving The Culture Of Watching TV With Family Members",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/f2eaa25f3e172e0d069b18f12dc7bec9-450x313.jpeg"
  },
  {
    title: "Mood Changes: Causes of Mood Swings & Ways to Manage Them",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d708af20d0b059afb782f31a7efa1887-450x300.jpg"
  },
  {
    title: "Jabra Invisible Earbuds For Exercise Go On A $20 Price Cut",
    date: "Jan 10, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/c152217bbc3252338993d8240151ef83-450x322.jpg"
  },
  {
    title: "Can Food Balance Hormones? 5 Hormone Diet Tips, Per Dietitians",
    date: "Jan 9, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d4ac0e9cd34c10b2388fba2c1776efd3-450x300.jpg"
  },
  {
    title: "Ways by Which Your Partner Impacts Your Life: Therapist Explains",
    date: "Jan 8, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/c1c050a03574b333d949b378927f5cf1-450x247.jpeg"
  }
];

const sidebarWhatsHot: Post[] = [
  {
    title: "Running In Cold Weather: 8 Rules To Follow For A Safe And Healthy Exercise",
    date: "Jan 22, 2021",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d01cbcffe7151b9690a60ff450665d2e-300x200.jpeg"
  },
  {
    title: "The Unexpected Scenes That Gave Audience 'Lifelong Phobia'",
    date: "Jan 16, 2021",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/9faf676d5ebf399427636b11d69dc46b-300x193.jpeg"
  },
  {
    title: "Dr. Jenny Pets Adds 5 Dog Diets Tailored To Specific Dietary Needs",
    date: "Jan 16, 2021",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d1b998484548c9450b9b96f2c1e73c86-300x200.jpeg"
  }
];

const sidebarMostPopular: Post[] = [
  {
    title: "10 Things You Didn't See on TV During the 2021 Latin Grammys",
    date: "Jan 14, 2021",
    views: "15.7K",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_414215728_XL-2-300x253.jpg"
  },
  {
    title: "'No Time to Die' Wins at 2021 Hollywood Music in Media Awards",
    date: "Jan 14, 2021",
    views: "11.2K",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_163097708_XL-1-300x200.jpg"
  },
  {
    title: "Actress Receive Achievement Award at Palm Springs Film Festival",
    date: "Jan 14, 2021",
    views: "9.3K",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_333764180_xl-2015-1-300x182.jpg"
  }
];

const trendingNowPosts: Post[] = [
  {
    title: "These Stylish Beats EP Headphones Are A Way to Upgrade Your Style",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/ad1aadc876e79d8b37fcff7c582a157e-450x202.jpg"
  },
  {
    title: "Happy Weekend: Try This Healthy Fruit Cake Recipe For Your Children",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/6545b95d51ef1b84cdd657489cd5ca96-450x300.jpeg"
  },
  {
    title: "For Smartwatch Brands, 2024 To Be A Year Of Make Or Break",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/c3485841757d78e181a67c651430ce71-450x300.jpg"
  },
  {
    title: "What Is 'Coffee Badging'? New Office Trend Takes Over Workplaces",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/0d41477d070149a9cdf195d3fd333b7e-450x309.jpg"
  }
];

const megaLeftPost: Post = {
  category: "Lifestyle",
  title: "These Two Face Makeup Trends Are Illuminating US Searches",
  date: "Jan 12, 2020",
  img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/76d0c895e33d8229f200f666dd4042eb-450x300.jpg",
  excerpt: "From dewy finishes to bold accents, recent retail metrics confirm that beauty search traffic is dominated by these specific techniques..."
};

const megaRightPosts: Post[] = [
  {
    category: "Technology",
    title: "Apple Books Names 2023 Bestsellers, Launches 'Year in Review' Feature",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/c046a2f9c5031729e013296a74fa85bc-300x200.jpeg"
  },
  {
    category: "Technology",
    title: "The Rise of the Machines: A Look into the Fascinating World of Robotics",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/04b14f3f5c9fbe2fac1ba38f7c8c6987-300x200.jpeg"
  },
  {
    category: "Technology",
    title: "OnePlus Will Focus on a Premium Build Over Camera Performance",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/569a9b21b79b7a25fa3333af1e144612-300x200.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Ricardo Ferreira Switches Soccer Allegiance to Canadian International Team",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/5ed1f8d6c2a2f339052fc6438bf252bd-300x200.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Scuba-Diving Youtuber Helped Find The Body In A 10-Year-Old Cold Case",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/ceb46dd691a1fb29f8f656bb16b1bf50-300x200.jpeg"
  }
];

const block12Post: Post = {
  category: "TV & Drama",
  title: "Netflix's Red Notice Has Too Many Movie Stars & Not Enough Actors",
  date: "Mar 15, 2020",
  img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/3235ad75cf976747e8fb2baedca1219f-768x470.jpeg",
  excerpt: "Director Rawson Marshall Thurber's heist comedy features three of Hollywood's biggest superstars: Dwayne Johnson, Ryan Reynolds, and Gal Gadot. But does the star power translate into a compelling narrative or just an expensive showcase?"
};

const block13Posts: Post[] = [
  {
    title: "Hollywood Actress Hits 4.5 Million Followers On Instagram",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/516d93a7ca3a5a4ce8315b3bca82e7ef-450x360.jpeg"
  },
  {
    title: "Creative Sisters Celebrate Culture in Nostalgic Animated Videos",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/4b6934a7b4c7a95e26a9b451c36d3f74-450x289.jpeg"
  },
  {
    title: "The 10 best TV Shows to Watch This Week on Netflix",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/085f346a4a96791f137bf4bd73499d40-450x300.jpeg"
  },
  {
    title: "Marvel Movies in Order: How to Watch Chronologically",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/c45af34034b208f045fa583318e2ce3e-450x331.jpeg"
  }
];

const block14Post: Post = {
  category: "Health",
  title: "Running In Cold Weather: 8 Rules To Follow For A Safe And Healthy Exercise",
  date: "Jan 22, 2021",
  img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d01cbcffe7151b9690a60ff450665d2e-768x512.jpeg",
  excerpt: "Before tying your running laces in freezing temperatures, there are safety regulations regarding thermal regulation, warm-up patterns, and hydration that you must understand to protect your cardiovascular system..."
};

const block15Posts: Post[] = [
  {
    category: "TV & Drama",
    title: "The Unexpected Scenes That Gave Audience 'Lifelong Phobia'",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/9faf676d5ebf399427636b11d69dc46b-450x290.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Dr. Jenny Pets Adds 5 Dog Diets Tailored To Specific Dietary Needs",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d1b998484548c9450b9b96f2c1e73c86-450x300.jpeg"
  },
  {
    category: "Technology",
    title: "Review: Our Memories of COVID-19 are Biased — and Why it Matters",
    rating: "8.9",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/3822b2af3d5e583534dc82de42e9486d-450x311.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Try These Tips And Tricks To Give Your Home A Festive Look",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/231a204003e09661c31969bfd71eed25-450x450.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Review: 7 Future Fashion Trends Shaping the Future of Fashion",
    rating: "72%",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/32e6c4cc58b14aa398767a73b3f80e7c-450x300.jpeg"
  }
];

const block16Posts: Post[] = [
  {
    title: "How To Make Sure Your Kids Are Prepared For A Beach Holiday",
    date: "Jan 12, 2021",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/ea904d63773b284cf93fe3b95d160779-450x300.jpeg"
  },
  {
    title: "10 Lessons To Learn From The Book 'Sapiens: A Brief History Of Humankind'",
    date: "Mar 16, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/6d59ecac0e7ed2e115a3824b8bcafdde-450x300.jpeg"
  },
  {
    title: "50 Best Dog Instagram Captions – Short & Funny Captions for Dogs",
    date: "Mar 16, 2020",
    img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/Depositphotos_185152932_XL-450x300.jpg"
  }
];

// Helper helper functions for category badges
const getCategoryColor = (category?: string) => {
  switch (category?.toLowerCase()) {
    case "health":
    case "fitness":
    case "technology":
      return "bg-[#2ab391] text-black";
    case "lifestyle":
    case "tv & drama":
    default:
      return "bg-[#f52549] text-white";
  }
};

const getCategoryTextColor = (category?: string) => {
  switch (category?.toLowerCase()) {
    case "health":
    case "fitness":
    case "technology":
      return "text-[#2ab391]";
    case "lifestyle":
    case "tv & drama":
    default:
      return "text-[#f52549]";
  }
};

// Radial Percentage Review Badge
function RatingCircle({ value }: { value: number }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm shadow border border-white/10 shrink-0">
      <svg className="w-9 h-9 transform -rotate-90">
        <circle
          cx="18"
          cy="18"
          r={radius}
          className="text-white/20"
          strokeWidth="2.2"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="18"
          cy="18"
          r={radius}
          className="text-[#f52549]"
          strokeWidth="2.2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>
      <span className="absolute text-[9px] font-black text-white">{value}%</span>
    </div>
  );
}

// Decimal rating badge
function RatingBadge({ value }: { value: string }) {
  return (
    <div className="bg-[#2ab391] text-black px-1.5 py-0.5 rounded-sm text-[9px] font-black tracking-tight flex items-center gap-0.5 shadow-md shrink-0">
      <Star size={9} fill="currentColor" />
      <span>{value}</span>
    </div>
  );
}

// Section Title component
function SectionTitle({ title, accentText }: { title: string; accentText?: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h3 className="text-[14px] font-black uppercase tracking-[2.5px] font-sans flex items-center gap-2 text-gray-900">
        <span className="w-2.5 h-2.5 bg-[#f52549] rounded-full"></span>
        {title} {accentText && <span className="text-[#f52549]">{accentText}</span>}
      </h3>
      <div className="flex-1 h-[1px] bg-gray-150"></div>
    </div>
  );
}

export default function LazyBusyPage() {
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (title: string) => {
    setLikes(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + 1
    }));
  };

  return (
    <main className="min-h-screen bg-white text-[#16171f] font-sans selection:bg-[#f52549] selection:text-white antialiased">
      <LazyBusyHeader />

      <div className="container mx-auto px-4 lg:px-8 py-6 max-w-7xl">

        {/* HERO SECTION: Block 4 & 5 side by side */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {heroPosts.map((post, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-gray-950 rounded-md cursor-pointer aspect-[16/10] md:aspect-[16/9] shadow-lg border border-gray-100">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103 opacity-80 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full space-y-3">
                  <span className={`${getCategoryColor(post.category)} text-[8.5px] font-black uppercase tracking-[2px] px-2.5 py-1 inline-block rounded-sm`}>
                    {post.category}
                  </span>
                  <h2 className="text-white text-lg md:text-2xl font-black leading-tight group-hover:text-[#f52549] transition-colors line-clamp-2 md:line-clamp-3">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-3 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    <span className="text-white">{post.author}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN BODY AREA: col-66 (Left Main Content) & col-33 (Right Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Column - col-66 */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Block 6: List posts (Festive Look & Hand Sanitizer) */}
            <div>
              <SectionTitle title="The" accentText="Focus" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {block6Posts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer flex flex-col gap-4 border border-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded bg-gray-50 relative shrink-0">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <span className={`absolute top-3 left-3 ${getCategoryColor(post.category)} text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h4 className="text-[14px] md:text-[15px] font-black text-gray-900 leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-100 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        <span>Shane Doe</span>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleLike(post.title); }}
                          className="flex items-center gap-1 hover:text-[#f52549] transition-colors"
                        >
                          <Heart size={11} className={likes[post.title] ? "fill-[#f52549] text-[#f52549]" : ""} /> 
                          <span>{likes[post.title] || 12}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 8: Health & Fitness Banner */}
            <div className="bg-[#0b0c10] py-10 md:py-14 px-6 md:px-10 rounded-md text-left relative overflow-hidden group shadow-lg border border-white/5">
              <div className="absolute inset-0 bg-[url('https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/07bb999275243b4d351043b5feaa9ffc-768x513.jpeg')] opacity-10 bg-center bg-cover transition-transform duration-[15s] group-hover:scale-103"></div>
              <div className="relative z-10 space-y-4 max-w-xl">
                <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-[3px] block">Health & Wellness Report</span>
                <h3 className="text-white text-xl md:text-2xl font-black leading-tight group-hover:text-[#2ab391] transition-colors">
                  {block8Post.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {block8Post.excerpt}
                </p>
                <div className="pt-2 flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <span className="text-white">Shane Doe</span>
                  <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span>
                  <span>{block8Post.date}</span>
                </div>
              </div>
            </div>

            {/* Block 9: 6-column Grid (Medicare, hormone diet, partner impact, etc.) */}
            <div>
              <SectionTitle title="Essential" accentText="Guides" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {block9Posts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 shadow-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[12.5px] font-black text-gray-900 leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-[9px] text-gray-400 block font-semibold">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar - col-33 */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-[100px]">
            
            {/* Widget 1: What's Hot */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[2px] text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span> What's Hot
              </h4>
              <div className="space-y-5">
                {sidebarWhatsHot.map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-[72px] h-[54px] rounded overflow-hidden shrink-0 bg-gray-100 relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="space-y-1.5 min-w-0">
                      <h5 className="text-[12px] font-bold leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2 text-gray-900">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Newsletter Block */}
            <div className="bg-[#111] text-white p-6 rounded shadow-lg text-center space-y-4">
              <h4 className="text-[14px] font-black uppercase tracking-wider">Subscribe to Updates</h4>
              <p className="text-gray-400 text-[11.5px] leading-relaxed">Get the latest creative news from FooBar about art, design and business.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required
                  className="w-full bg-[#1e1e24] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f52549] rounded text-center"
                />
                <button type="submit" className="w-full bg-[#f52549] text-white font-black uppercase text-[10px] py-2.5 rounded hover:bg-white hover:text-black transition-colors tracking-widest">
                  Subscribe
                </button>
                <label className="flex items-start gap-2 cursor-pointer text-gray-500 text-[9px] leading-normal select-none text-left">
                  <input type="checkbox" required className="mt-0.5 rounded-sm shrink-0 checked:bg-[#f52549]" />
                  <span>By signing up, you agree to our terms and privacy agreement.</span>
                </label>
              </form>
            </div>

            {/* Widget 3: Most Popular */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[2px] text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span> Most Popular
              </h4>
              <div className="space-y-5">
                {sidebarMostPopular.map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-[72px] h-[54px] rounded overflow-hidden shrink-0 bg-gray-100 relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <h5 className="text-[12px] font-bold leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2 text-gray-900">
                        {post.title}
                      </h5>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-0.5 text-[#f52549] font-black">
                          <Flame size={10} fill="currentColor" /> {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* TRENDING NOW: Block 7 - 4-column Grid */}
        <section className="mb-16">
          <SectionTitle title="Trending" accentText="Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingNowPosts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer relative rounded-md overflow-hidden aspect-[4/3] bg-gray-900">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105 opacity-80 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 w-full space-y-2">
                  <h4 className="text-white text-sm font-black leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[9px] text-gray-400 block font-semibold">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MEGA GRID LAYOUT: Block 10 & 11 (Large left card + small right lists) */}
        <section className="mb-16">
          <SectionTitle title="Spotlight" accentText="Topics" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left large card (col-6) */}
            <div className="lg:col-span-6 group cursor-pointer flex flex-col gap-4">
              <div className="aspect-[16/10] w-full overflow-hidden rounded bg-gray-50 shadow-md relative">
                <img 
                  src={megaLeftPost.img} 
                  alt={megaLeftPost.title} 
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-103" 
                />
                <span className="absolute bottom-0 left-0 bg-[#f52549] text-white text-[9px] font-black uppercase tracking-wider px-3.5 py-2 rounded-tr-md">
                  {megaLeftPost.category}
                </span>
              </div>
              <div className="space-y-2.5">
                <h3 className="text-xl md:text-2xl font-black leading-tight text-gray-900 group-hover:text-[#f52549] transition-colors">
                  {megaLeftPost.title}
                </h3>
                <div className="flex items-center gap-2.5 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  <span className="text-gray-900">Shane Doe</span>
                  <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span>
                  <span>{megaLeftPost.date}</span>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {megaLeftPost.excerpt}
                </p>
              </div>
            </div>

            {/* Right list column (col-6) */}
            <div className="lg:col-span-6 space-y-4 border-t lg:border-t-0 pt-6 lg:pt-0">
              {megaRightPosts.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="w-[100px] h-[75px] rounded overflow-hidden bg-gray-50 shrink-0 relative">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className={`text-[8.5px] font-black uppercase tracking-wider block ${getCategoryTextColor(post.category)}`}>
                      {post.category}
                    </span>
                    <h4 className="text-[12.5px] font-black text-gray-900 leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TV & DRAMA IMMERSIVE DARK BANNER: Block 12 */}
        <section className="mb-16 full-bleed-container">
          <div className="bg-[#111] text-white p-8 md:p-12 lg:p-16 rounded-md relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-[url('https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/3235ad75cf976747e8fb2baedca1219f-768x470.jpeg')] opacity-15 bg-center bg-cover transition-transform duration-[18s] group-hover:scale-103"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="bg-[#f52549] text-white text-[9px] font-black uppercase tracking-[3px] px-3 py-1 inline-block rounded-sm">
                  {block12Post.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-black leading-tight text-white group-hover:text-[#f52549] transition-colors">
                  {block12Post.title}
                </h2>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {block12Post.excerpt}
                </p>
                <div className="pt-2 flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <span className="text-white">Shane Doe</span>
                  <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span>
                  <span>{block12Post.date}</span>
                </div>
              </div>

              <div className="lg:col-span-5 aspect-[16/10] w-full overflow-hidden rounded-md bg-white/5 border border-white/10 shadow-lg">
                <img 
                  src={block12Post.img} 
                  alt={block12Post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                />
              </div>

            </div>
          </div>
        </section>

        {/* SPOTLIGHT GRID SECTION: Block 13 */}
        <section className="mb-16">
          <SectionTitle title="TV &" accentText="Drama" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {block13Posts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col gap-3">
                <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 shadow-sm relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                  />
                  <span className="absolute top-3 left-3 bg-[#f52549] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    TV & Drama
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[13px] font-black text-gray-900 leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[9px] text-gray-400 block font-semibold">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LATEST ARTICLES BLOCK: Block 14 & 15 split layout */}
        <section className="mb-16">
          <SectionTitle title="Latest" accentText="Articles" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left featured post - Block 14 (col-5) */}
            <div className="lg:col-span-5 group cursor-pointer flex flex-col gap-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded bg-gray-50 shadow-md relative">
                <img 
                  src={block14Post.img} 
                  alt={block14Post.title} 
                  className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-103" 
                />
                <span className="absolute bottom-0 left-0 bg-[#2ab391] text-black text-[9px] font-black uppercase tracking-wider px-3.5 py-2 rounded-tr-md">
                  {block14Post.category}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black leading-tight text-gray-900 group-hover:text-[#f52549] transition-colors">
                  {block14Post.title}
                </h3>
                <div className="flex items-center gap-2.5 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  <span className="text-gray-900">Shane Doe</span>
                  <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span>
                  <span>{block14Post.date}</span>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {block14Post.excerpt}
                </p>
              </div>
            </div>

            {/* Right horizontal list items - Block 15 (col-7) */}
            <div className="lg:col-span-7 space-y-5 border-t lg:border-t-0 pt-6 lg:pt-0">
              {block15Posts.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-150 pb-4 last:border-b-0 last:pb-0 items-start">
                  <div className="w-[110px] sm:w-[130px] aspect-[4/3] rounded overflow-hidden bg-gray-50 shrink-0 relative">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="space-y-1 min-w-0 flex-1 relative pr-10">
                    <span className={`text-[8.5px] font-black uppercase tracking-wider block ${getCategoryTextColor(post.category)}`}>
                      {post.category}
                    </span>
                    <h4 className="text-[13px] md:text-[14px] font-black text-gray-900 leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-[9px] text-gray-400 block font-semibold mt-1">Shane Doe &bull; Jan 14, 2021</span>
                    
                    {/* Rating dials in list */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      {post.rating && post.rating.includes("%") ? (
                        <RatingCircle value={parseInt(post.rating)} />
                      ) : post.rating ? (
                        <RatingBadge value={post.rating} />
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* MOST VIEWED BLOCK: Block 16 - 3 Columns with Number overlays */}
        <section className="mb-12">
          <SectionTitle title="Most" accentText="Viewed" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {block16Posts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer flex gap-4 border border-gray-100 p-5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 items-start relative">
                <span className="text-4xl font-black text-gray-100 w-8 leading-none shrink-0 text-center font-sans group-hover:text-[#f52549] transition-colors select-none">
                  0{idx + 1}
                </span>
                <div className="space-y-1.5 min-w-0 flex-1">
                  <h4 className="text-[13.5px] font-black text-gray-900 leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[9px] text-gray-400 block font-semibold">{post.date}</span>
                </div>
                <div className="w-[64px] h-[64px] rounded-md overflow-hidden bg-gray-50 shrink-0">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <LazyBusyFooter />
    </main>
  );
}
