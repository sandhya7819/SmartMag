"use client";

import SmartLifeHeader from "@/components/SmartLifeHeader";
import SmartLifeFooter from "@/components/SmartLifeFooter";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const BASE = "https://smartmag.theme-sphere.com/smart-life/wp-content/uploads/sites/40/";
const ACCENT = "#2ab391";

// ──────────────────────────────────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────────────────────────────────

const heroMain = {
  title: "Apple's Beats Studio Pro Headphones Listed in FCC Database Ahead of Launch",
  category: "Gadgets",
  author: "Shane Doe",
  date: "Jan 10, 2020",
  image: `${BASE}2023/06/pexels-pavel-danilyuk-8001223-768x513.jpg`,
  excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement of the latest generation.",
};

const heroRight = [
  {
    title: "Teenage Girl Finds Mom's Debit Card, Spends $64,000 on Mobile Games",
    category: "Technology",
    image: `${BASE}2023/06/woman-wearing-headset-and-playing-online-game-on-s-2023-01-27-02-08-56-utc-1-450x300.jpg`,
  },
  {
    title: "From Chaucer to Chocolates: How Valentine's Day Gifts have Changed Over the Centuries",
    category: "Relations",
    image: `${BASE}2023/06/pexels-andres-ayrton-6578933.jpg`,
  },
];

const lifestyleFeatured = {
  title: "Students Get Ready to Showcase Musical Talent at Singing Festival",
  category: "Lifestyle",
  date: "Mar 15, 2020",
  image: `${BASE}2023/06/obie-fernandez-uDAr4KFKY40-unsplash-2-450x308.jpg`,
};

const lifestyleList = [
  { title: "World Music Day 2023: What Is It and Why Do We Celebrate It?", date: "Jan 14, 2020", image: `${BASE}2023/06/pexels-yan-krukau-8192116-450x300.jpg` },
  { title: "Top Luxury Ideas for a High-End Home Exterior Decoration", date: "Jan 14, 2020", image: `${BASE}2023/06/large-glass-building-under-the-blue-sky-2023-01-26-09-35-49-utc-1-450x300.jpg` },
  { title: "How Does Your Gut Microbiome Impact Your Overall Health?", date: "Jan 13, 2020", image: `${BASE}2023/06/cdc-y-8fqaK1kY-unsplash.jpg` },
  { title: "The Best Gifts for Women to Receive for Mother's Day and Beyond", date: "Jan 11, 2020", image: `${BASE}2023/06/Depositphotos_529513236_XL-2-450x300.jpg` },
  { title: "Family Connections: A Source of Strength in Challenging Times", date: "Jan 11, 2020", image: `${BASE}2023/06/pexels-andrea-piacquadio-3818958-450x300.jpg` },
];

const trendingNow = [
  { title: "Greece Tourism Receipts on Record Breaking Track for 2023", category: "Travel & Tourism", date: "Mar 15, 2020", image: `${BASE}2023/06/Depositphotos_21917103_xl-2015-3-450x300.jpg` },
  { title: "UAE's Travel and Tourism Industry Created Thousands of Jobs in 2022", category: "Travel & Tourism", date: "Mar 15, 2020", image: `${BASE}2020/03/kent-tupas-PsGNSpf3vKc-unsplash-450x300.jpg` },
  { title: "Best Destinations for Adventure Travel Enthusiasts", category: "Travel & Tourism", date: "Mar 15, 2020", image: `${BASE}2020/03/Depositphotos_416022816_xl-2015-1-450x300.jpg` },
];

const editorsPicks = [
  { title: "Yoga Can Fix All Lifestyle Issues: Man Who Quit Job To Teach Yoga", image: `${BASE}2023/06/joshua-rondeau-dPBlIVElN4Y-unsplash-450x675.jpg` },
  { title: "Family Relations Matter More Than Love When it Comes to Health", image: `${BASE}2023/06/pexels-wilson-vitorino-2782682.jpg` },
  { title: "iPhone 15 Tipped to Steal 4 Key Features of iPhone 14 Pro Models", image: `${BASE}2023/06/onur-binay-yvcGXgc14rE-unsplash-450x253.jpg` },
  { title: "Dubai Sees Tourism Surge as 'Diversified Approach' Helps it Tap New Markets", image: `${BASE}2023/06/golden-signboard-dubai-frame_t20_XxXadz-1-450x252.jpg` },
  { title: "Don't Let Pet Allergies Get in the Way of Your Relationships", image: `${BASE}2023/06/michael-hardy-hLbi5hve5Yc-unsplash-450x300.jpg` },
];

const newsFocusTop = [
  { title: "6 Dietary Changes That Can Help Prevent The Risk of Cancer", date: "Jan 13, 2021", image: `${BASE}2023/06/jorge-fernandez-salas-UiKwVbvwo1Q-unsplash-a-450x300.jpg`, excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley." },
  { title: "New Program to Move Potential MND Drugs into Clinical Trials Faster", date: "Jan 12, 2021", image: `${BASE}2023/06/girl-with-red-hat-BBZDOHhYU2s-unsplash-681x1024.jpg`, excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley." },
];

const newsFocusList = [
  { title: "100 Funny Birthday Wishes to Make Them Laugh on Their Big Day", date: "Jan 12, 2021", image: `${BASE}2023/06/jeanie-de-klerk-yhBYT1fBCKU-unsplash-1.jpg` },
  { title: "Singer Hints he May Never Go on a Tour as Calls Experience 'Isolating'", date: "Jan 12, 2021", image: `${BASE}2023/06/street-musician-park-music-musician-crowd-entertainment-performance-band-street-photography-musical_t20_ZVryXg-1-300x203.jpg` },
  { title: "Simple Ways to Care for Each Other During the COVID-19", date: "Jan 12, 2021", image: `${BASE}2023/06/Depositphotos_358396432_xl-2015-2-300x204.jpg` },
  { title: "6 Tropical Plants to Get the Jungle Look at Home", date: "Mar 16, 2020", image: `${BASE}2023/06/pexels-cottonbro-studio-4503735-300x200.jpg` },
];

const whatsHot = [
  { title: "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends", date: "Mar 10, 2022", image: `${BASE}2023/06/edson-diogo-Z9FZQMwCPpk-unsplash-300x200.jpg` },
  { title: "Maximizing the Benefits of Supplements for an Active Lifestyle", date: "Mar 10, 2022", image: `${BASE}2023/06/pexels-jellybee-8940745.jpg` },
  { title: "1 in 3 Can't Get Through Meal Without Looking at Phone, Survey Finds", date: "Mar 10, 2022", image: `${BASE}2023/06/freestocks-hRVrvH9-dG0-unsplash-4-300x200.jpg` },
  { title: "Scientists Think They've Found The Cause of Morning Sickness", date: "Mar 10, 2022", image: `${BASE}2023/06/pexels-pavel-danilyuk-6753348-450x300.jpg` },
  { title: "Discover Travel Hotspots Worldwide: Most Popular Cities Unveiled", date: "Jan 22, 2021", image: `${BASE}2023/06/zhifei-zhou-4nbwQa6A680-unsplash-450x253.jpg` },
  { title: "13 Gift Ideas That Your Girlfriend Will Appreciate As Birthday Surprises", date: "Jan 22, 2021", image: `${BASE}2023/06/pexels-vjapratama-935789-450x300.jpg` },
];

const newWorkouts = [
  { title: "France Lays Out Strategy to Combat 'Overtourism'", image: `${BASE}2023/06/despina-galani-oZE9lXEuVso-unsplash-450x600.jpg` },
  { title: "Finland Introduces World's First Phone-Free Island Destination", image: `${BASE}2023/06/tamara-bellis-9OOtGftSVUI-unsplash-450x300.jpg` },
  { title: "Strange and Unusual Tourist Destinations Around the World", image: `${BASE}2023/06/valeriia-bugaiova-_pPHgeHz1uk-unsplash-450x300.jpg` },
  { title: "How the Lack of Russian Tourists has Impacted Countries Across Europe", image: `${BASE}2023/06/pexels-andrea-piacquadio-3776776-450x300.jpg` },
];

const ourPicksGrid = [
  { title: "Veterinarians Recommend Animal Heat Pads to Save on Energy Bills", date: "Jan 14, 2021", image: `${BASE}2023/06/mikhail-vasilyev-NodtnCsLdTE-unsplash-450x281.jpg` },
  { title: "Freedom Or Fragility: A Photographer's Techniques Comparison", date: "Jan 14, 2021", rating: "7.2", image: `${BASE}2023/06/pexels-ken-tulla-7015216-450x675.jpg` },
  { title: "Best Stock Trading Platforms of June 2023: $0 Commissions and More", date: "Jan 14, 2021", image: `${BASE}2023/06/eric-karim-cornelis-QEh7kSRzTPg-unsplash-1-450x296.jpg` },
  { title: "Fruits On a Keto Diet: What to Eat and What to Skip", date: "Jan 14, 2021", image: `${BASE}2023/06/nonamesontheway-V4LI8S7oYtc-unsplash-450x443.jpg` },
  { title: "Asus to Unveil Autumn 2023 Accessories Collection in International Festival", date: "Jan 14, 2021", image: `${BASE}2023/06/linkedin-sales-solutions-4rvBjoQWERk-unsplash.jpg` },
  { title: "Jellyfish Stings Are Increasing In Los Cabos – Here Is How You Can Stay Safe", date: "Jan 13, 2021", image: `${BASE}2023/06/tavis-beck-gRr64-OCKy0-unsplash-450x300.jpg` },
];

const ourPicksSidebar = [
  { title: "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends", date: "Mar 10, 2022", image: `${BASE}2023/06/edson-diogo-Z9FZQMwCPpk-unsplash-300x200.jpg` },
  { title: "Maximizing the Benefits of Supplements for an Active Lifestyle", date: "Mar 10, 2022", image: `${BASE}2023/06/pexels-jellybee-8940745.jpg` },
  { title: "1 in 3 Can't Get Through Meal Without Looking at Phone", date: "Mar 10, 2022", image: `${BASE}2023/06/freestocks-hRVrvH9-dG0-unsplash-4-300x200.jpg` },
];

const mostPopular = [
  { title: "UAE's Travel and Tourism Industry Created Thousands of Jobs in 2022", date: "Mar 15, 2020", image: `${BASE}2020/03/kent-tupas-PsGNSpf3vKc-unsplash-450x300.jpg` },
  { title: "Best Destinations for Adventure Travel Enthusiasts", date: "Mar 15, 2020", image: `${BASE}2020/03/Depositphotos_416022816_xl-2015-1-450x300.jpg` },
  { title: "Students Get Ready to Showcase Musical Talent at Singing Festival", date: "Mar 15, 2020", image: `${BASE}2023/06/obie-fernandez-uDAr4KFKY40-unsplash-2-450x308.jpg` },
];

// ──────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ──────────────────────────────────────────────────────────────────────────────

function SectionHead({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1 h-6 rounded-sm flex-shrink-0" style={{ backgroundColor: ACCENT }} />
      <h2 className="text-[17px] font-black uppercase tracking-wider text-[#1a1a1a]">{title}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function SidebarHead({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-1 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: ACCENT }} />
      <h3 className="text-[12px] font-black uppercase tracking-widest text-[#1a1a1a]">{title}</h3>
    </div>
  );
}

function SmallPost({ post }: { post: { title: string; date?: string; image: string; category?: string } }) {
  return (
    <div className="flex gap-3 group py-3 border-b border-gray-100 last:border-0">
      <div className="w-[75px] h-[55px] flex-shrink-0 overflow-hidden rounded">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        {post.category && <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: ACCENT }}>{post.category}</span>}
        <h4 className="text-[12px] font-bold text-[#222] hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors mt-0.5">
          <Link href="#">{post.title}</Link>
        </h4>
        {post.date && <p className="text-[10px] text-gray-400 mt-1">{post.date}</p>}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────────

export default function SmartLifePage() {
  return (
    <div className="bg-white min-h-screen text-[#333]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <SmartLifeHeader />

      <main>

        {/* ────────────────────────────────────────────────────
            SECTION 1 — HERO GRID
        ──────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-5 pt-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[500px] lg:h-[420px]">

            {/* Big left */}
            <div className="lg:col-span-2">
              <article className="group relative w-full h-full overflow-hidden rounded">
                <img
                  src={heroMain.image}
                  alt={heroMain.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded text-white mb-3 inline-block" style={{ backgroundColor: ACCENT }}>
                    {heroMain.category}
                  </span>
                  <h1 className="text-white font-black text-[22px] leading-snug mb-2 hover:text-[#a5f3df] transition-colors cursor-pointer">
                    <Link href="#">{heroMain.title}</Link>
                  </h1>
                  <p className="text-white/70 text-[13px] line-clamp-2 mb-3">{heroMain.excerpt}</p>
                  <div className="flex items-center gap-2 text-white/50 text-[11px]">
                    <span>By {heroMain.author}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{heroMain.date}</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Right stack */}
            <div className="flex flex-col gap-4 h-full">
              {heroRight.map((post, i) => (
                <article key={i} className="group relative flex-1 overflow-hidden rounded">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded text-white mb-2 inline-block" style={{ backgroundColor: ACCENT }}>
                      {post.category}
                    </span>
                    <h3 className="text-white font-bold text-[14px] leading-snug line-clamp-2 hover:text-[#a5f3df] transition-colors cursor-pointer">
                      <Link href="#">{post.title}</Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────
            AD BANNER
        ──────────────────────────────────────────────────── */}
        <div className="hidden lg:flex justify-center mb-12 px-5">
          <div className="w-[970px] h-[90px] bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 rounded">
            <span className="text-gray-400 text-[12px] font-medium tracking-widest uppercase">Advertisement</span>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────
            SECTION 2 — LIFESTYLE + SIDEBAR 1
        ──────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-5 mb-14">
          <div className="flex gap-8">

            {/* Main — 69% */}
            <div className="flex-1 min-w-0">
              <SectionHead title="Lifestyle" />

              {/* Featured card */}
              <article className="group relative overflow-hidden rounded mb-4">
                <div className="aspect-[16/8] overflow-hidden">
                  <img
                    src={lifestyleFeatured.image}
                    alt={lifestyleFeatured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded text-white mb-2 inline-block" style={{ backgroundColor: ACCENT }}>
                    {lifestyleFeatured.category}
                  </span>
                  <h2 className="text-white font-black text-[20px] leading-snug hover:text-[#a5f3df] transition-colors cursor-pointer">
                    <Link href="#">{lifestyleFeatured.title}</Link>
                  </h2>
                  <p className="text-white/60 text-[11px] mt-1.5">{lifestyleFeatured.date}</p>
                </div>
              </article>

              {/* List posts */}
              <div>
                {lifestyleList.map((p, i) => <SmallPost key={i} post={p} />)}
              </div>
            </div>

            {/* STICKY SIDEBAR 1 — 31% */}
            <div className="hidden lg:block w-[300px] flex-shrink-0">
              <div className="sticky top-[60px] space-y-8">

                {/* Social Follow */}
                <div>
                  <SidebarHead title="Follow Us" />
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { Icon: Facebook, label: "Facebook", count: "24.5K", color: "#3b5998" },
                      { Icon: Twitter, label: "Twitter", count: "18.2K", color: "#1da1f2" },
                      { Icon: Instagram, label: "Instagram", count: "11.8K", color: "#e1306c" },
                    ].map(({ Icon, label, count, color }) => (
                      <a key={label} href="#" className="flex flex-col items-center py-3 rounded-lg text-white hover:opacity-85 transition-opacity" style={{ backgroundColor: color }}>
                        <Icon size={15} />
                        <span className="text-[14px] font-black mt-1">{count}</span>
                        <span className="text-[8px] uppercase tracking-wider opacity-80">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Trending Now */}
                <div>
                  <SidebarHead title="Trending Now" />
                  <div className="space-y-0">
                    {trendingNow.map((p, i) => (
                      <div key={i} className="flex gap-3 group py-3 border-b border-gray-100 last:border-0">
                        <div className="w-[72px] h-[52px] flex-shrink-0 overflow-hidden rounded">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: ACCENT }}>{p.category}</span>
                          <h5 className="text-[11px] font-bold text-[#222] hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors mt-0.5">
                            <Link href="#">{p.title}</Link>
                          </h5>
                          <p className="text-[10px] text-gray-400 mt-1">{p.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ────────────────────────────────────────────────────
            SECTION 3 — EDITOR'S PICKS (full-width gray bg)
        ──────────────────────────────────────────────────── */}
        <div className="bg-[#F7F5F5] py-10 mb-14">
          <div className="max-w-[1200px] mx-auto px-5">
            <SectionHead title="Editor's Picks" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {editorsPicks.map((post, i) => (
                <article key={i} className="group">
                  <div className="relative overflow-hidden rounded-full mb-3 aspect-square">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <span
                      className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-[12px] shadow"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="text-[13px] font-bold text-[#222] hover:text-[#2ab391] leading-snug line-clamp-3 text-center transition-colors cursor-pointer">
                    <Link href="#">{post.title}</Link>
                  </h4>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────
            SECTION 4 — NEWS FOCUS + STICKY SIDEBAR 2
        ──────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-5 mb-14">
          <div className="flex gap-8">

            {/* Main */}
            <div className="flex-1 min-w-0">
              <SectionHead title="News Focus" />

              {/* Two main cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {newsFocusTop.map((post, i) => (
                  <article key={i} className="group">
                    <div className="relative aspect-[16/10] overflow-hidden rounded mb-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#222] hover:text-[#2ab391] leading-snug transition-colors mb-1 cursor-pointer">
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <p className="text-[11px] text-gray-400 mb-1">{post.date}</p>
                    <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  </article>
                ))}
              </div>

              {/* List */}
              <div>
                {newsFocusList.map((p, i) => <SmallPost key={i} post={p} />)}
              </div>
            </div>

            {/* STICKY SIDEBAR 2 */}
            <div className="hidden lg:block w-[300px] flex-shrink-0">
              <div className="sticky top-[60px] space-y-8">

                {/* What's Hot */}
                <div>
                  <SidebarHead title="What's Hot" />
                  <div className="space-y-0">
                    {whatsHot.map((p, i) => (
                      <div key={i} className="flex gap-3 group py-2.5 border-b border-gray-100 last:border-0">
                        <div className="w-[62px] h-[46px] flex-shrink-0 overflow-hidden rounded">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-[11px] font-bold text-[#222] hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors cursor-pointer">
                            <Link href="#">{p.title}</Link>
                          </h5>
                          <p className="text-[10px] text-gray-400 mt-0.5">{p.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* New Workouts 2×2 grid */}
                <div>
                  <SidebarHead title="New Workouts" />
                  <div className="grid grid-cols-2 gap-2">
                    {newWorkouts.map((p, i) => (
                      <article key={i} className="group relative overflow-hidden rounded aspect-square">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                        <p className="absolute bottom-0 left-0 right-0 p-2 text-[10px] text-white font-bold leading-tight line-clamp-2">
                          <Link href="#">{p.title}</Link>
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-lg p-5 border border-[#e0f2ed] bg-[#f7fdf9]">
                  <h4 className="text-[14px] font-black text-[#222] mb-1">Subscribe to Updates</h4>
                  <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Get the latest creative news from SmartLife about lifestyle, design and wellness.</p>
                  <input
                    type="email"
                    placeholder="Your email address.."
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-[12px] outline-none focus:border-[#2ab391] mb-2 transition-colors"
                  />
                  <button
                    className="w-full py-2.5 text-white text-[11px] font-black uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Subscribe
                  </button>
                  <p className="text-[10px] text-gray-400 mt-2">
                    By signing up, you agree to our <Link href="#" className="hover:underline" style={{ color: ACCENT }}>Privacy Policy</Link>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ────────────────────────────────────────────────────
            SECTION 5 — OUR PICKS + STICKY SIDEBAR 3
        ──────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-5 mb-14">
          <div className="flex gap-8">

            {/* Main — 6 square grid */}
            <div className="flex-1 min-w-0">
              <SectionHead title="Our Picks" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {ourPicksGrid.map((post, i) => (
                  <article key={i} className="group relative overflow-hidden rounded aspect-square">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    {post.rating && (
                      <div
                        className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[12px] shadow-lg"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {post.rating}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white font-bold text-[12px] leading-tight line-clamp-3 hover:text-[#a5f3df] transition-colors cursor-pointer">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <p className="text-white/50 text-[10px] mt-1">{post.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* STICKY SIDEBAR 3 */}
            <div className="hidden lg:block w-[300px] flex-shrink-0">
              <div className="sticky top-[60px] space-y-8">

                {/* About */}
                <div className="bg-gray-50 rounded-lg p-5 text-center">
                  <img
                    src={`${BASE}2023/06/logo-SMART-LIFE-01@2x.png`}
                    alt="SmartLife"
                    className="h-[28px] w-auto mx-auto mb-3"
                  />
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Your source for smart lifestyle content. This demo is crafted specifically to exhibit the use of the SmartMag theme as a lifestyle site.
                  </p>
                </div>

                {/* Our Picks small list */}
                <div>
                  <SidebarHead title="Our Picks" />
                  <div>
                    {ourPicksSidebar.map((p, i) => (
                      <div key={i} className="flex gap-3 group py-3 border-b border-gray-100 last:border-0">
                        <div className="w-[65px] h-[48px] flex-shrink-0 overflow-hidden rounded">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-[11px] font-bold text-[#222] hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors">
                            <Link href="#">{p.title}</Link>
                          </h5>
                          <p className="text-[10px] text-gray-400 mt-0.5">{p.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Most Popular numbered */}
                <div>
                  <SidebarHead title="Most Popular" />
                  <div className="space-y-4">
                    {mostPopular.map((p, i) => (
                      <div key={i} className="flex gap-3 group items-start">
                        <span className="text-[28px] font-black leading-none w-8 flex-shrink-0 mt-0.5" style={{ color: `${ACCENT}55` }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-[12px] font-bold text-[#222] hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors">
                            <Link href="#">{p.title}</Link>
                          </h5>
                          <p className="text-[10px] text-gray-400 mt-0.5">{p.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </main>

      <SmartLifeFooter />
    </div>
  );
}
