"use client";

import React, { useState } from "react";
import Link from "next/link";
import MorningPostHeader from "@/components/MorningPostHeader";
import MorningPostFooter from "@/components/MorningPostFooter";
import { ArrowRight, Play, Eye, Clock, Mail, ChevronRight } from "lucide-react";

// Mock Database of exact articles parsed from the live site
const mockArticles = {
  justIn: [
    {
      title: "SpaceX Launches Starlink Satellites and Lands Rocket at Sea at 5pm ET",
      category: "Just In",
      catColor: "text-red-500",
      date: "Jan 17, 2024",
      url: "#"
    },
    {
      title: "U.S. Senate Passes $1.5 Trillion Gov’t Funding Bill with Ukraine",
      category: "Russia War",
      catColor: "text-[#0693e3]",
      date: "Jan 17, 2024",
      url: "#"
    },
    {
      title: "Election 2024: What Will Markets Do With Trump Victory Over Biden?",
      category: "US Politics",
      catColor: "text-red-500",
      date: "Jan 17, 2024",
      url: "#"
    },
    {
      title: "Air Pollution & Politics Pose Cross-Border Challenges in South Asia",
      category: "Politics",
      catColor: "text-red-500",
      date: "Jan 17, 2024",
      url: "#"
    },
    {
      title: "Melbourne: All Refugees Held in Hotel Detention to be Released",
      category: "Australia",
      catColor: "text-[#cf2e2e]",
      date: "Jan 17, 2024",
      url: "#"
    },
    {
      title: "Korea Closes 4 Diplomatic Missions, Suggesting Economic Woes",
      category: "SouthEast Asia",
      catColor: "text-orange-500",
      date: "Mar 11, 2022",
      url: "#"
    },
    {
      title: "The China-Built Ship that Pulled a US Navy Jet Wreck from the South China Sea",
      category: "SouthEast Asia",
      catColor: "text-orange-500",
      date: "Mar 11, 2022",
      url: "#"
    },
    {
      title: "Anti-War Protests Intensify in World Along with Crackdown",
      category: "Oceana",
      catColor: "text-[#8c68ff]",
      date: "Mar 11, 2022",
      url: "#"
    },
    {
      title: "US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers",
      category: "Russia War",
      catColor: "text-[#0693e3]",
      date: "Mar 11, 2022",
      url: "#"
    }
  ],
  heroFeatured: {
    title: "U.S. Senate Passes $1.5 Trillion Gov’t Funding Bill with Ukraine",
    category: "Featured",
    img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/f79ecc4d4df08c23010e7154279db154-1024x684.jpeg"
  },
  heroRightGrid: [
    {
      title: "New Virtual Reality Tool Allows Users to Build and Control Shapes",
      category: "Technology",
      catColor: "text-[#0693e3]",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/e8b56990eabee8bef246760573f79d7e-450x578.jpeg",
      hasAudio: true
    },
    {
      title: "Fully Remote Jobs at Google You Can Apply for in Early January 2024",
      category: "Online Jobs",
      catColor: "text-green-500",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/39ef1a46b990a27e8413dce5bcaf2a7b-450x282.jpeg"
    },
    {
      title: "World Music Day 2023: What is it & Why Do We Celebrate it?",
      category: "Culture",
      catColor: "text-red-500",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/71d14d5b32b409b8cd7ff045c3dc2794-450x294.jpeg"
    },
    {
      title: "CL Final 2023: Who Really Owns European Basketball?",
      category: "Soccer",
      catColor: "text-blue-500",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/091b1957ab1d15589cbadf0d37001132-450x536.jpeg"
    }
  ],
  trending: [
    {
      title: "European Countries Rushed to Distance Themselves from Putin",
      date: "Jan 4, 2021",
      views: "9,514",
      tag: "viral"
    },
    {
      title: "President Presses for $1.9 Trillion COVID Relief Plan 2023",
      date: "Jan 4, 2021",
      views: "9,309",
      tag: "viral"
    },
    {
      title: "World’s Most Advanced Oil Rig Commissioned at ONGC Well",
      date: "Jan 4, 2021",
      views: "1,427",
      tag: "hot"
    },
    {
      title: "UK Announces Plan to Ban Exports of Luxury Goods to Russia",
      date: "Jan 4, 2021",
      views: "1,353",
      tag: "hot"
    }
  ],
  dontMiss: [
    {
      title: "Before Hundreds of Protesters Were Killed, Egypt Debated Less Lethal Options",
      category: "Middle East",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/4bfc3008c4b2b05e4ba0c20bac2ed861-450x300.jpeg"
    },
    {
      title: "Case of Fraud Against Donald Trump, in Which His Properties Could be Seized?",
      category: "Politics",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a706a43bf3bf9d4560f229ff846dc83b-450x300.jpeg",
      hasGallery: true
    },
    {
      title: "The End of Roe is the Beginning of the Fight for a Whole-Life Culture",
      category: "US Laws",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/b2e0080127a231950f524d74dbd561b9-450x299.jpeg"
    },
    {
      title: "Papua New Guinea Is In a State of Emergency As Riots Kill 16",
      category: "Oceana",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/7c07027ed05e5796e9ba05d7bc440f04-450x431.jpg"
    }
  ],
  technology: {
    columnLeft: {
      top: {
        title: "Stanford’s Mobile Robot Can Learn From Humans to Cook, Clean, Do Laundry",
        category: "Robotics",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/04b14f3f5c9fbe2fac1ba38f7c8c6987-450x300.jpeg",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement..."
      },
      bottom: {
        title: "OnePlus 12 Pro Will Focus on a Premium Build Over Camera Performance",
        category: "Tech",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement..."
      }
    },
    columnRight: {
      top: {
        title: "Why Are iPhones More Expensive Than Most of The Android Phones?",
        category: "Apple",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement..."
      },
      bottom: {
        title: "Explore Latest Innovations for Your Retail Workers with Microsoft Teams",
        category: "Microsoft",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/bf240241b47162fde1f22070c5e66f9f-450x300.jpeg",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement..."
      }
    },
    list: [
      {
        title: "Xiaomi Redmi Note 12R Pro Launched with Snapdragon 4 Gen1",
        date: "Jan 7, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/af8488e1bcf32dfcead42abf2afc7d7a-300x191.jpeg"
      },
      {
        title: "Teenage Girl Finds Mom’s Debit Card, Spends $64k on Games",
        date: "Jan 5, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/90773f2227cb66fce248b6b2039a2468-300x200.jpeg"
      }
    ]
  },
  featuredVideos: {
    featured: {
      title: "This US Ski Resort Receives The World's Greatest Snowfall In Winter",
      category: "Travel & Tourism",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case...",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/0b107c55eed4710e4936ac721ae53d68-1024x683.jpeg"
    },
    list: [
      {
        title: "Masters of the Air: Why Band of Brothers is the Last Great Uncool TV Show",
        date: "Jan 12, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/ec3e05ccf1ae414cf59105aa236562a4-300x200.jpeg"
      },
      {
        title: "Google Home Tips & Tricks: Master your Nest Mini, Audio & Hub",
        date: "Jan 11, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/94a0f26b611b391370fb8ef48a54ed29-240x300.jpeg"
      },
      {
        title: "Scientists Use Penguins to Study Antarctic Climate Change",
        date: "Jan 11, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/09550a5c46410e13b3f393fa4eea1910-300x199.jpeg"
      },
      {
        title: "Russian Riot Police Raid Gay Club Amid Crackdown on 'LGBT Movement'",
        date: "Jan 11, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/484df2ed8232a177576f6a083072b2cd-300x169.jpeg"
      },
      {
        title: "What is the Metaverse? Detailed Explanation & In-Depth Guide",
        date: "Jan 11, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/b00e745cfb9e384019953820aae3b855-300x200.jpeg"
      },
      {
        title: "Bill Gates Expects to Have Given Away Most of His Wealth in 20 Years",
        date: "Jan 11, 2021",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/c6e37f92be00ce5868f86420e2b50732-300x221.jpeg"
      }
    ]
  },
  marketsBusinessFinance: {
    markets: {
      title: "Markets Review: Indexes, Bonds, ETFs, Forex, Key Commodities",
      category: "Markets",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/6b05d1824ef595cbfcd83bb0bb30fba6-450x300.jpeg",
      score: "9.1",
      list: [
        "Red Sea Crisis: Oil Markets Make Contingency Plans for Weeks of Chaos",
        "FTSE 100 Live: What’s Moving UK Markets, Pound (GBP/USD); Retail Sales",
        "European Stocks Close Higher as Earnings Ramp Up; Watches of Switzerland Down 36%"
      ]
    },
    business: {
      title: "A Looming Recession Shadows Aspirations and Property Markets",
      category: "Economy",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/7735f9f23996e854722533197fa13777-450x253.jpeg",
      list: [
        "Best Business Sole Proprietorships Bank Accounts For January 2024",
        "Barclays to Shrink Investment Bank's Share of Business, CEO Says",
        "HSBC Completes Sale of Retail Banking Business in France, Insider Details"
      ]
    },
    finance: {
      title: "US & China Officials Conclude Meeting on Key Financial Issues",
      category: "US Finance",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a4bc720a75f03680c1f888b23d010241-450x300.jpeg",
      list: [
        "Hungary Finance Minister Says Inflation Sensitive to Global Economic Shocks",
        "Review: IMF Says: Elevated Gross Financing Needs Constitute High Risk",
        "Business Community Demands Cut in Interest Rates – Business & Finance"
      ]
    }
  },
  opinion: [
    {
      title: "Metro: Classical Music Plan at Some Stations for ‘More Soothing Journeys’",
      category: "Travel & Tourism",
      date: "Jan 16, 2021",
      views: "36",
      readTime: "8 Mins Read",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/1766125eb688c592f17ce9325bf16862-450x327.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
    },
    {
      title: "Extreme Cold Weather Makes Snow Removal Challenging in Edmonton in Year 2023",
      category: "Weather",
      date: "Jan 15, 2021",
      views: "36",
      readTime: "8 Mins Read",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a5ba38ea3ce8e534051fb60d25b40db6-450x369.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
    }
  ],
  moreNewsGrid: [
    {
      title: "Winter Travel Tips 2024: How to Prepare for Snowy Airport Journeys",
      category: "Travel & Tourism",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/bf1b6a42dd45498854c651a356dbebd9-450x360.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and..."
    },
    {
      title: "Tourist Numbers in Greece Hit a Record High Despite Heatwaves",
      category: "Travel & Tourism",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/5fc94eea87310e602e52ff81136e18a4-450x298.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and..."
    }
  ],
  worldNation: [
    {
      title: "San Francisco Fed Chief Sees U.S. Economy in ‘Really Good Place’ with Inflation Coming Down",
      category: "US Finance",
      date: "Mar 11, 2022",
      views: "37",
      readTime: "8 Mins Read",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/d3bb8a1429a2f42060c0b8c77fe352ec-450x675.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
    },
    {
      title: "Machine Learning Approach for Study on Subway Passenger Flow",
      category: "Travel & Tourism",
      date: "Mar 11, 2022",
      views: "38",
      readTime: "8 Mins Read",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/5a574f87866d486cf57a52d4bad61ff3-450x300.jpeg",
      excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..."
    }
  ],
  bottomThumbList: [
    {
      title: "How Bad is a Phoenix Heat Wave? The Perils of Burning Pavements, Water Hoses",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/95dcfc431ed5c5e66ec5d2b4fdc649c2-450x300.jpeg"
    },
    {
      title: "US Extends Technology Restrictions to the Russian Oil Industry",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/52bbefd8df674f996a4a6391f5e735ac-450x461.jpg"
    },
    {
      title: "March for Life 2024: Thousands Brave Snow to Rally Against Abortion Rights",
      date: "Feb 11, 2021",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/6a189b78ce15bcde1f117107bf6c7260-450x300.jpeg"
    },
    {
      title: "Traffic Disruptions and CCTV Deployment for Downtown Demonstration on Sunday",
      date: "Feb 11, 2021",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/be177e6414c0adaeb0f097363a2cf3e7-450x450.jpeg"
    }
  ],
  editorsPicks: [
    {
      title: "Rewiring the Brain: The Neural Code of Traumatic Memories",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/05e8d3749345658da25d0aaf8dedaa9f-300x169.jpeg"
    },
    {
      title: "France Will Host Tourissima Lille 2024 to Allure Global Travel Industry",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/8c868d39d9410329f8488e9c279fe844-300x155.jpeg"
    },
    {
      title: "How T-Mobile is Winning 5G Race Around the World, an Analysis",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/8393dcd293c071a97913c774f41d5694-300x208.jpeg"
    },
    {
      title: "Reflections on the Identity at Indigenous Popular Music Training Camp in Taiwan",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/d242b1ed64af3e4f2f2c2e3ccf992609-300x203.jpeg"
    },
    {
      title: "Kamay Ventures Invests in Sensify for Food Preservation Tech",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a85181005fbac5d98c948f5813fb305d-300x188.jpeg"
    },
    {
      title: "Japans Moon Rover Faces Power Crisis Just One Day into Lunar Mission",
      date: "Mar 11, 2022",
      img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/6e778db1db32676c0070efa76595ea57-300x225.jpeg"
    }
  ],
  businessWorldBottom: {
    topGrid: [
      {
        title: "This is The Most Dangerous Thing To Do on Your Phone While in The Street",
        category: "Culture",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/bbdcbcd658769e68a08b7a14ef8ae96b-450x346.jpeg",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of..."
      },
      {
        title: "Road Accident Kills 18 People, Mostly Iranian Pilgrims, North of Iraq",
        category: "World",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/8d1a430ab38dbd89c6c05a428c74450b-450x300.jpeg",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of..."
      },
      {
        title: "Why New York Will Charge Up to $23 Per Day to Drive into Manhattan",
        category: "Travel & Tourism",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/61e51d431b89c889c02ff9b90987a1b1-450x300.jpeg",
        excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of..."
      }
    ],
    bottomGrid: [
      {
        title: "Miami Exchange Preps Trading Floor in Wynwood During Options Boom",
        category: "US Finance",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/f7e8f10e9df565d1a1d2c069c7433a7d-450x300.jpeg"
      },
      {
        title: "EU’s New Sanctions Aim to Cut Russia Off From World Bank, IMF",
        category: "World",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2022/03/Depositphotos_536809216_XL-1-450x300.jpg"
      },
      {
        title: "US Tax Reform to Focus on Individuals, Natural Resources",
        category: "Economy",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/a70da9a03156ba75ffafb1834b65b956-450x300.jpeg"
      },
      {
        title: "China’s Charm Offensive in Davos to Woo Investors Falls Short",
        category: "Economy",
        img: "https://smartmag.theme-sphere.com/morning-post/wp-content/uploads/sites/53/2024/01/8c2a3a16dee1c5ef45113ce73ad75c7d-450x282.jpeg"
      }
    ]
  }
};

export default function MorningPostPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#3f51b5] selection:text-white antialiased">
      {/* Dynamic Navigation Header */}
      <MorningPostHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        
        {/* ================= SECTION 1: HERO CONTAINER ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Just In (33% or 4 cols) */}
          <div className="lg:col-span-4 border-r border-gray-100 pr-0 lg:pr-8">
            <div className="border-b-2 border-[#3f51b5] pb-2.5 mb-6 flex justify-between items-center">
              <h3 className="text-[12px] font-black uppercase tracking-wider text-gray-900 font-sans">Just In</h3>
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
            </div>
            <div className="space-y-5">
              {mockArticles.justIn.map((art, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-50 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider ${art.catColor}`}>{art.category}</span>
                    <span className="text-gray-300 text-[10px]">•</span>
                    <span className="text-[10px] text-gray-400 font-semibold">{art.date}</span>
                  </div>
                  <h4 className="text-[14px] font-bold text-gray-900 leading-snug group-hover:text-[#3f51b5] transition-colors duration-200">
                    {art.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Overlay + Bottom Splits (66% or 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Top: Large Overlay Post */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm group cursor-pointer shadow-premium bg-gray-900">
              <img
                src={mockArticles.heroFeatured.img}
                alt={mockArticles.heroFeatured.title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-[1.5s]"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-3.5">
                <span className="bg-[#cf2e2e] text-white font-extrabold text-[10px] uppercase tracking-wider py-1 px-2.5 rounded-sm">
                  {mockArticles.heroFeatured.category}
                </span>
                <h2 className="text-white text-xl md:text-3xl font-extrabold leading-tight group-hover:text-blue-200 transition-colors font-serif italic max-w-2xl">
                  {mockArticles.heroFeatured.title}
                </h2>
              </div>
            </div>

            {/* Bottom: Splits (2-col grid + Ad/Trending widgets) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Grid (8 cols of the split) */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mockArticles.heroRightGrid.map((art, i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      {art.hasAudio && (
                        <div className="absolute top-2.5 right-2.5 bg-black/60 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">
                          🎧
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${art.catColor}`}>{art.category}</span>
                      <h4 className="text-[14px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200 line-clamp-3">
                        {art.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar: Ad + Trending (4 cols of the split) */}
              <div className="md:col-span-4 space-y-6">
                {/* 300x250 Premium Ad */}
                <div className="bg-[#1a202c] rounded-sm p-4 text-center border border-gray-800 shadow-sm flex flex-col justify-between h-[210px] relative overflow-hidden group">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <span className="text-[9px] font-extrabold text-blue-400 uppercase tracking-widest block">SPONSORED AD</span>
                  <div className="my-auto">
                    <p className="text-white font-serif italic text-lg leading-tight font-extrabold">Build a Stunning Website Today</p>
                    <p className="text-gray-400 text-[10px] mt-1 font-bold">Discover SmartMag's 58+ Demos</p>
                  </div>
                  <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="bg-[#3f51b5] hover:bg-blue-700 text-white font-bold text-[10px] uppercase tracking-wider py-2 rounded-sm transition-all shadow-md block">
                    Get SmartMag
                  </a>
                </div>

                {/* Trending Posts */}
                <div className="space-y-4">
                  <h4 className="text-[12px] font-black uppercase tracking-wider text-gray-900 border-b-2 border-black pb-1">Trending Posts</h4>
                  <div className="space-y-4">
                    {mockArticles.trending.map((art, i) => (
                      <div key={i} className="flex gap-3 group cursor-pointer items-start">
                        <span className="text-[20px] font-black text-gray-200 group-hover:text-[#3f51b5] transition-colors italic leading-none pt-0.5">
                          {i + 1}
                        </span>
                        <div className="space-y-1">
                          <h5 className="text-[12.5px] font-bold text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200 leading-snug line-clamp-3">
                            {art.title}
                          </h5>
                          <div className="flex items-center gap-2 text-[9px] text-gray-400 font-semibold uppercase">
                            <span>{art.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5"><Eye size={10} />{art.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: DONT MISS ================= */}
        <section className="mb-16">
          <div className="border-b-2 border-[#3f51b5] pb-2.5 mb-8 flex justify-between items-center">
            <h3 className="text-[16px] font-black uppercase tracking-wider text-gray-900">Don't Miss</h3>
            <Link href="#" className="text-gray-400 hover:text-[#3f51b5] font-black text-[11px] uppercase tracking-wider flex items-center gap-1">
              Read More <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockArticles.dontMiss.map((art, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-md">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {art.hasGallery && (
                    <div className="absolute top-2.5 left-2.5 bg-black/60 text-white w-7 h-7 rounded-sm flex items-center justify-center text-xs">
                      🖼️
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 bg-white/90 text-[#3f51b5] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-sm rounded-sm">
                    {art.category}
                  </div>
                </div>
                <h4 className="text-[14px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200 line-clamp-3">
                  {art.title}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: TECHNOLOGY & SIDEBAR ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Technology splits (8 cols or 66%) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="border-b-2 border-black pb-2.5 mb-2">
              <h3 className="text-[16px] font-black uppercase tracking-wider text-gray-900">Technology</h3>
            </div>
            
            {/* Split row: Robot (left) and iPhone/Innovations (right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Sub-col 1 */}
              <div className="space-y-6">
                {/* Stanford's Robot */}
                <div className="group cursor-pointer space-y-3">
                  <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                    <img src={mockArticles.technology.columnLeft.top.img} alt={mockArticles.technology.columnLeft.top.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-2.5 left-2.5 bg-[#3f51b5] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-sm">
                      {mockArticles.technology.columnLeft.top.category}
                    </div>
                  </div>
                  <h4 className="text-[18px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200">
                    {mockArticles.technology.columnLeft.top.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
                    {mockArticles.technology.columnLeft.top.excerpt}
                  </p>
                </div>
                <div className="border-t border-gray-100 my-4"></div>
                {/* OnePlus 12 Pro (no image) */}
                <div className="group cursor-pointer space-y-2">
                  <span className="text-[9px] font-black text-[#3f51b5] uppercase tracking-wider">{mockArticles.technology.columnLeft.bottom.category}</span>
                  <h4 className="text-[15px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200">
                    {mockArticles.technology.columnLeft.bottom.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                    {mockArticles.technology.columnLeft.bottom.excerpt}
                  </p>
                </div>
              </div>

              {/* Sub-col 2 */}
              <div className="space-y-6">
                {/* iPhones (no image) */}
                <div className="group cursor-pointer space-y-2">
                  <span className="text-[9px] font-black text-[#3f51b5] uppercase tracking-wider">{mockArticles.technology.columnRight.top.category}</span>
                  <h4 className="text-[15px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200">
                    {mockArticles.technology.columnRight.top.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                    {mockArticles.technology.columnRight.top.excerpt}
                  </p>
                </div>
                <div className="border-t border-gray-100 my-4"></div>
                {/* Microsoft Teams */}
                <div className="group cursor-pointer space-y-3">
                  <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                    <img src={mockArticles.technology.columnRight.bottom.img} alt={mockArticles.technology.columnRight.bottom.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-2.5 left-2.5 bg-[#3f51b5] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-sm">
                      {mockArticles.technology.columnRight.bottom.category}
                    </div>
                  </div>
                  <h4 className="text-[18px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200">
                    {mockArticles.technology.columnRight.bottom.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
                    {mockArticles.technology.columnRight.bottom.excerpt}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-4"></div>

            {/* Bottom 2-col thumbnail list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mockArticles.technology.list.map((art, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-center bg-gray-50/50 p-2.5 rounded-sm hover:bg-gray-50 transition-colors">
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[13.5px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200 line-clamp-2">
                      {art.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-semibold">{art.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tall 300x600 Ad (4 cols or 33%) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-[#1f242e] w-[300px] h-[600px] rounded-sm p-6 text-center border border-gray-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              {/* Abstract decorative elements */}
              <div className="absolute top-10 -left-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
              
              <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-[0.25em] block">PREMIUM THEME BY THEMESPHERE</span>
              
              <div className="my-auto space-y-6">
                <div className="space-y-2">
                  <span className="bg-[#cf2e2e] text-white font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm">HOT DEAL</span>
                  <h3 className="text-white text-3xl font-extrabold leading-tight font-serif italic pt-2">Unleash the Power of SmartMag</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Join 25,000+ satisfied developers and creators. Create beautiful online magazines, news blogs, and reviews with ease.
                </p>
                <div className="text-white font-sans font-bold text-lg">
                  Starting at only <span className="text-yellow-400 font-extrabold text-2xl">$59</span>
                </div>
              </div>

              <div className="space-y-3">
                <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="bg-[#3f51b5] hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider py-4.5 rounded-sm transition-all shadow-lg block">
                  Purchase License
                </a>
                <p className="text-[10px] text-gray-500 font-semibold uppercase">100% Secure Checkout & 6 Months Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: FEATURED VIDEOS (DARK IMMERSIVE) ================= */}
      </div>

      <section className="bg-[#1f1f1f] text-white py-16 mb-16 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="border-b border-white/10 pb-4 mb-8">
            <h3 className="text-[16px] font-black uppercase tracking-wider text-white border-l-4 border-[#3f51b5] pl-4">Featured Videos</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Large Video Player (66% or 8 cols) */}
            <div className="lg:col-span-8 group/player cursor-pointer space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-black shadow-2xl">
                <img
                  src={mockArticles.featuredVideos.featured.img}
                  alt={mockArticles.featuredVideos.featured.title}
                  className="w-full h-full object-cover opacity-75 group-hover/player:scale-102 transition-transform duration-[2s]"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#3f51b5] hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover/player:scale-110">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
                {/* Exclusive label */}
                <div className="absolute top-4 left-4 bg-[#cf2e2e] text-white px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-sm">
                  Exclusive Video
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">{mockArticles.featuredVideos.featured.category}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white group-hover/player:text-blue-300 transition-colors font-serif italic">
                  {mockArticles.featuredVideos.featured.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {mockArticles.featuredVideos.featured.excerpt}
                </p>
              </div>
            </div>

            {/* Right: Small video list list (33% or 4 cols) */}
            <div className="lg:col-span-4 space-y-5 flex flex-col justify-between max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
              {mockArticles.featuredVideos.list.map((art, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="w-24 h-16 shrink-0 overflow-hidden rounded-sm relative bg-black shadow-md">
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="w-6 h-6 rounded-full bg-white/90 text-[#3f51b5] flex items-center justify-center text-[10px]">
                        ▶
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[13px] font-extrabold leading-snug text-gray-200 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {art.title}
                    </h4>
                    <span className="text-[9px] text-gray-500 font-semibold">{art.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1200px] px-4">

        {/* ================= SECTION 5: MARKETS, BUSINESS, FINANCE ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Markets Column */}
          <div className="space-y-5">
            <div className="border-b-2 border-black pb-2.5 mb-2">
              <h3 className="text-[15px] font-black uppercase tracking-wider text-gray-900">Markets</h3>
            </div>
            
            {/* Featured Markets Card with Radial Rating wheel */}
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-md">
                <img src={mockArticles.marketsBusinessFinance.markets.img} alt={mockArticles.marketsBusinessFinance.markets.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Radial progress badge */}
                <div className="absolute bottom-2.5 left-2.5 bg-black/75 rounded-sm p-1.5 flex items-center gap-1.5 backdrop-blur-sm border border-white/10">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg className="w-full h-full rotate-[-90deg]">
                      <circle cx="16" cy="16" r="13" stroke="#ffffff15" strokeWidth="2.5" fill="transparent" />
                      <circle cx="16" cy="16" r="13" stroke="#fcb900" strokeWidth="2.5" fill="transparent" strokeDasharray="81.68" strokeDashoffset="7.35" />
                    </svg>
                    <span className="absolute text-[10px] font-black text-white">9.1</span>
                  </div>
                  <span className="text-[9px] font-black text-white uppercase tracking-wider pr-1">RATING</span>
                </div>
              </div>
              <span className="text-[9px] font-black text-[#3f51b5] uppercase tracking-wider">{mockArticles.marketsBusinessFinance.markets.category}</span>
              <h4 className="text-[16px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors font-serif italic">
                {mockArticles.marketsBusinessFinance.markets.title}
              </h4>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            
            {/* Markets small texts */}
            <div className="space-y-3.5 pt-1.5">
              {mockArticles.marketsBusinessFinance.markets.list.map((title, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <h5 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#3f51b5] transition-colors">
                    {title}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Business Column */}
          <div className="space-y-5">
            <div className="border-b-2 border-black pb-2.5 mb-2">
              <h3 className="text-[15px] font-black uppercase tracking-wider text-gray-900">Business</h3>
            </div>
            
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-md">
                <img src={mockArticles.marketsBusinessFinance.business.img} alt={mockArticles.marketsBusinessFinance.business.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-[9px] font-black text-[#3f51b5] uppercase tracking-wider">{mockArticles.marketsBusinessFinance.business.category}</span>
              <h4 className="text-[16px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors font-serif italic">
                {mockArticles.marketsBusinessFinance.business.title}
              </h4>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            
            <div className="space-y-3.5 pt-1.5">
              {mockArticles.marketsBusinessFinance.business.list.map((title, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <h5 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#3f51b5] transition-colors">
                    {title}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Finance Column */}
          <div className="space-y-5">
            <div className="border-b-2 border-black pb-2.5 mb-2">
              <h3 className="text-[15px] font-black uppercase tracking-wider text-gray-900">Finance</h3>
            </div>
            
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-md">
                <img src={mockArticles.marketsBusinessFinance.finance.img} alt={mockArticles.marketsBusinessFinance.finance.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-[9px] font-black text-[#3f51b5] uppercase tracking-wider">{mockArticles.marketsBusinessFinance.finance.category}</span>
              <h4 className="text-[16px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors font-serif italic">
                {mockArticles.marketsBusinessFinance.finance.title}
              </h4>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            
            <div className="space-y-3.5 pt-1.5">
              {mockArticles.marketsBusinessFinance.finance.list.map((title, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <h5 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#3f51b5] transition-colors">
                    {title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: WIDE AD BANNER ================= */}
        <section className="mb-16 hidden md:block">
          <div className="w-full bg-[#1b212f] py-6 px-10 text-white rounded-sm border border-gray-800 shadow-premium relative overflow-hidden flex flex-col md:flex-row justify-between items-center group">
            <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            <div className="space-y-1 text-center md:text-left relative z-10">
              <span className="text-blue-400 font-extrabold tracking-widest text-[9px] uppercase">PREMIUM ADVERTISEMENT</span>
              <h3 className="text-xl font-extrabold font-serif italic">Experience Global News Reimagined</h3>
              <p className="text-gray-400 text-xs font-bold pt-0.5">Subscribe to the weekly physical package & get 30% off.</p>
            </div>
            <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="bg-[#3f51b5] hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-sm transition-all shadow-lg mt-4 md:mt-0 relative z-10">
              Subscribe Now
            </a>
          </div>
        </section>

        {/* ================= SECTION 7: OPINION, MORE NEWS, WORLD & NATION + SIDEBAR ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Area (8 cols or 66%) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Opinion block */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2.5 mb-2">
                <h3 className="text-[16px] font-black uppercase tracking-wider text-gray-900">Opinion</h3>
              </div>
              <div className="space-y-6">
                {mockArticles.opinion.map((art, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 group cursor-pointer items-start border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                    <div className="w-full sm:w-[200px] aspect-[16/11] shrink-0 overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="space-y-2.5 flex-1">
                      <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                        <span className="text-[#3f51b5]">{art.category}</span>
                        <span>•</span>
                        <span>{art.date}</span>
                      </div>
                      <h4 className="text-[17px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors font-serif italic">
                        {art.title}
                      </h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                        {art.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-gray-400 font-semibold uppercase">
                        <span className="flex items-center gap-0.5"><Eye size={10} />{art.views} Views</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"><Clock size={10} />{art.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* More News block */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2.5 mb-2 flex justify-between items-center">
                <h3 className="text-[16px] font-black uppercase tracking-wider text-gray-900">More News...</h3>
                <Link href="#" className="text-[#3f51b5] font-extrabold text-[11px] uppercase tracking-wider hover:underline">
                  View More
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mockArticles.moreNewsGrid.map((art, i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute bottom-2.5 left-2.5 bg-white/90 text-[#3f51b5] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-sm rounded-sm">
                        {art.category}
                      </div>
                    </div>
                    <h4 className="text-[14px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors line-clamp-3">
                      {art.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* World & Nation block */}
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-2.5 mb-2">
                <h3 className="text-[16px] font-black uppercase tracking-wider text-gray-900">World & Nation</h3>
              </div>
              <div className="space-y-6">
                {mockArticles.worldNation.map((art, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 group cursor-pointer items-start border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                    <div className="w-full sm:w-[200px] aspect-[16/11] shrink-0 overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="space-y-2.5 flex-1">
                      <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                        <span className="text-[#3f51b5]">{art.category}</span>
                        <span>•</span>
                        <span>{art.date}</span>
                      </div>
                      <h4 className="text-[17px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors font-serif italic">
                        {art.title}
                      </h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                        {art.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-gray-400 font-semibold uppercase">
                        <span className="flex items-center gap-0.5"><Eye size={10} />{art.views} Views</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"><Clock size={10} />{art.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom small thumb list */}
            <div className="border-t border-gray-100 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {mockArticles.bottomThumbList.map((art, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h4 className="text-[13px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200 line-clamp-2">
                      {art.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols or 33%) */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Editor's Picks */}
            <div className="space-y-5">
              <div className="border-b-2 border-black pb-2.5 mb-2">
                <h3 className="text-[14px] font-black uppercase tracking-wider text-gray-900">Editor's Picks</h3>
              </div>
              <div className="space-y-4">
                {mockArticles.editorsPicks.map((art, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-[13px] font-bold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors duration-200 line-clamp-2">
                        {art.title}
                      </h4>
                      <span className="text-[9px] text-gray-400 font-semibold">{art.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Ad (300x600) */}
            <div className="flex justify-center pt-2">
              <div className="bg-[#1f242e] w-[300px] h-[600px] rounded-sm p-6 text-center border border-gray-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-10 -left-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-20 -right-20 w-48 h-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                
                <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-[0.25em] block">PREMIUM THEME BY THEMESPHERE</span>
                
                <div className="my-auto space-y-6">
                  <div className="space-y-2">
                    <span className="bg-red-500 text-white font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm">HOT DEAL</span>
                    <h3 className="text-white text-3xl font-extrabold leading-tight font-serif italic pt-2">Unlock Unlimited Possibilities</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Build layouts like a pro using Elementor and SmartMag templates. Clean, fast, and optimized for SEO.
                  </p>
                </div>

                <div className="space-y-3">
                  <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="bg-[#3f51b5] hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider py-4.5 rounded-sm transition-all shadow-lg block">
                    Buy SmartMag
                  </a>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Regular License with lifetime updates</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* ================= SECTION 8: BUSINESS & WORLD (BOTTOM GRID) ================= */}
        <section className="mb-10">
          <div className="border-b-2 border-black pb-2.5 mb-8 flex justify-between items-center">
            <h3 className="text-[16px] font-black uppercase tracking-wider text-gray-900">Business & World</h3>
            <Link href="#" className="text-gray-400 hover:text-[#3f51b5] font-black text-[11px] uppercase tracking-wider flex items-center gap-1">
              Read More <ArrowRight size={12} />
            </Link>
          </div>
          
          {/* Top 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {mockArticles.businessWorldBottom.topGrid.map((art, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-md">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-2.5 left-2.5 bg-[#3f51b5] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-sm">
                    {art.category}
                  </div>
                </div>
                <h4 className="text-[17px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors font-serif italic">
                  {art.title}
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom 4-column smaller grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-gray-100">
            {mockArticles.businessWorldBottom.bottomGrid.map((art, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <div className="aspect-[1.5/1] overflow-hidden rounded-sm relative bg-gray-100 shadow-sm">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-2.5 left-2.5 bg-white/90 text-[#3f51b5] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-sm rounded-sm">
                    {art.category}
                  </div>
                </div>
                <h4 className="text-[13.5px] font-extrabold leading-snug text-gray-900 group-hover:text-[#3f51b5] transition-colors line-clamp-3">
                  {art.title}
                </h4>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Dynamic Navigation Footer */}
      <MorningPostFooter />
    </main>
  );
}
