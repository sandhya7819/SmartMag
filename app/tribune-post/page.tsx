"use client";

import Link from "next/link";
import { Play, MessageSquare, Clock, Zap, BookOpen, User, Flame } from "lucide-react";
import TribunePostHeader from "@/components/TribunePostHeader";
import TribunePostFooter from "@/components/TribunePostFooter";
import {
  heroMain,
  newsJustIn,
  heroMiddle,
  heroRightMain,
  heroRightList,
  russiaUkraineMain,
  russiaUkraineList,
  politicsMain,
  politicsList,
  moreNewsMain,
  moreNewsList,
  moreNewsBottom,
  columnsSidebar,
  opinionSidebar,
  marketsMain,
  marketsList,
  marketsBottom,
  lifestyleTechLeft,
  lifestyleTechPoster,
  lifestyleTechGrid5,
  sportsMain,
  sportsList,
  cricketMain,
  moreSportsMain,
  moreSportsList,
  exclusiveNews,
  editorsPicks,
  currenciesCryptoMain,
  currenciesCryptoList,
  educationMain,
  educationList,
  schoolsMain,
  schoolsList,
  youMayHaveMissedMain,
  youMayHaveMissedList,
  topTrending
} from "@/lib/tribunePostData";

export default function TribunePostPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-[#0086F9] selection:text-white text-[#222]">
      {/* Premium Header */}
      <TribunePostHeader />

      {/* Main Home Container */}
      <div className="container mx-auto max-w-[1200px] px-4 py-8 bg-white shadow-sm border-x border-gray-100">
        
        {/* ================= HERO GRID SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-100">
          
          {/* Hero Left Column: Live Updates & News Just In (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:border-r lg:border-gray-100 lg:pr-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#0086F9]">
                <span className="flex items-center gap-1.5 bg-[#0086F9] text-white px-2 py-0.5 text-[9px]">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                  {heroMain.category}
                </span>
                <span className="text-gray-400 font-bold">{heroMain.date}</span>
              </div>

              <Link href={heroMain.url} className="block group">
                <h1 className="text-2xl md:text-[34px] font-serif font-black leading-tight text-gray-900 group-hover:text-[#0086F9] transition-colors duration-300">
                  {heroMain.title}
                </h1>
              </Link>

              <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100 relative group cursor-pointer">
                <img
                  src={heroMain.image}
                  alt={heroMain.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed font-sans">
                {heroMain.excerpt}
              </p>
            </div>

            {/* News Just In ticker block */}
            <div className="bg-gray-50/50 border-t-2 border-red-600 p-5 mt-6">
              <div className="flex items-center gap-2 mb-4 text-[#d92121] font-black uppercase text-[11px] tracking-widest">
                <Flame size={14} fill="currentColor" />
                <span>News Just In</span>
              </div>
              <ul className="space-y-3.5">
                {newsJustIn.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                    <Link
                      href={item.url}
                      className="text-gray-800 font-bold text-sm leading-snug group-hover:text-[#0086F9] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hero Middle Column: 2 Main Cards & Excerpts (3 cols) */}
          <div className="lg:col-span-3 space-y-8 lg:border-r lg:border-gray-100 lg:px-4">
            {heroMiddle.map((item, i) => (
              <div key={i} className="group flex flex-col gap-3 pb-8 border-b border-gray-100 last:border-none last:pb-0">
                {item.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <Link href={item.url}>
                  <h3 className="text-[17px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                    {item.title}
                  </h3>
                </Link>
                {item.excerpt && (
                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                    {item.excerpt}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Hero Right Column: 1 Poster Card & Thumbnail List (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="group space-y-3 pb-6 border-b border-gray-100">
              <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                <img
                  src={heroRightMain.image}
                  alt={heroRightMain.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <Link href={heroRightMain.url}>
                <h3 className="text-base font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                  {heroRightMain.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <span>Shane Doe</span>
                <span>•</span>
                <span>Jan 30, 2025</span>
              </div>
            </div>

            {/* Thumbnail post list */}
            <div className="space-y-4">
              {heroRightList.map((item, i) => (
                <div key={i} className="flex gap-3 justify-between items-start group">
                  <Link href={item.url} className="flex-1">
                    <h4 className="text-[13px] font-bold text-gray-800 leading-tight group-hover:text-[#0086F9] transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                  {item.image && (
                    <div className="w-16 h-11 shrink-0 overflow-hidden bg-gray-50 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Banner Ad Row */}
        <div className="my-8 py-2 flex justify-center border-b border-gray-100">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block max-w-full">
            <img
              src="https://smartmag.theme-sphere.com/curated-mag/wp-content/uploads/sites/59/2025/01/DigitalHub-Top.jpg"
              alt="ThemeSphere Ad"
              className="w-full max-w-[970px] h-auto object-contain"
            />
          </a>
        </div>

        {/* ================= MIDDLE MAIN + SIDEBAR LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-100">
          
          {/* LEFT MAIN AREA (8 cols) */}
          <div className="lg:col-span-8 space-y-12 lg:border-r lg:border-gray-100 lg:pr-8">
            
            {/* Section: Russia/Ukraine Conflict */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                <h2 className="text-[16px] font-black uppercase tracking-wider text-gray-900">
                  Russia/Ukraine Conflict
                </h2>
                <Link href="#" className="text-xs text-[#0086F9] hover:underline font-bold">See All</Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large Video Post */}
                <div className="space-y-4 group">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100 relative cursor-pointer">
                    <img
                      src={russiaUkraineMain.image}
                      alt={russiaUkraineMain.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-[#0086F9] text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <Play size={18} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                    <span>{russiaUkraineMain.author}</span>
                    <span>•</span>
                    <span>{russiaUkraineMain.date}</span>
                  </div>
                  <Link href={russiaUkraineMain.url}>
                    <h3 className="text-[20px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {russiaUkraineMain.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {russiaUkraineMain.excerpt}
                  </p>
                </div>

                {/* Sublist of headlines */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-4 divide-y divide-gray-100">
                    {russiaUkraineList.map((item, i) => (
                      <div key={i} className="pt-4 first:pt-0 group">
                        <Link href={item.url}>
                          <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                            {item.title}
                          </h4>
                        </Link>
                        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold mt-2 uppercase">
                          <span>Jan 30, 2025</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Politics & More News */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              
              {/* Politics Column */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                  <h2 className="text-[15px] font-black uppercase tracking-wider text-gray-900">
                    Politics
                  </h2>
                </div>
                <div className="group space-y-3">
                  <Link href={politicsMain.url}>
                    <h3 className="text-[17px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {politicsMain.title}
                    </h3>
                  </Link>
                  <div className="text-[10px] text-gray-400 font-bold">Jan 30, 2025</div>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  {politicsList.slice(0, 4).map((item, i) => (
                    <div key={i} className="pt-4 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* More News Column */}
              <div className="space-y-6 md:border-l md:border-gray-100 md:pl-6">
                <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                  <h2 className="text-[15px] font-black uppercase tracking-wider text-gray-900">
                    More News
                  </h2>
                </div>
                <div className="group space-y-3">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={moreNewsMain.image}
                      alt={moreNewsMain.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <Link href={moreNewsMain.url}>
                    <h3 className="text-[17px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {moreNewsMain.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                    {moreNewsMain.excerpt}
                  </p>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  {moreNewsList.slice(0, 3).map((item, i) => (
                    <div key={i} className="pt-4 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom list for Left content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {moreNewsBottom.map((item, i) => (
                <div key={i} className="group space-y-2">
                  <div className="text-[9px] text-[#0086F9] font-black uppercase tracking-wider">Geopolitics</div>
                  <Link href={item.url}>
                    <h4 className="text-[13px] font-serif font-bold text-gray-900 leading-snug group-hover:text-[#0086F9] transition-colors line-clamp-3">
                      {item.title}
                    </h4>
                  </Link>
                </div>
              ))}
            </div>

            {/* Section: Markets */}
            <section className="space-y-6 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                <h2 className="text-[16px] font-black uppercase tracking-wider text-gray-900">
                  Markets &amp; Economy
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 group">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={marketsMain.image}
                      className="w-full h-full object-cover transform transition-transform duration-750 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                    <span>{marketsMain.author}</span>
                    <span>•</span>
                    <span>{marketsMain.date}</span>
                  </div>
                  <Link href={marketsMain.url}>
                    <h3 className="text-[20px] font-serif font-black leading-tight text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {marketsMain.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 leading-relaxed">{marketsMain.excerpt}</p>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  {marketsList.map((item, i) => (
                    <div key={i} className="pt-4 first:pt-0 group">
                      <Link href={item.url}>
                        <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                      <span className="text-[9px] text-gray-400 font-bold uppercase mt-2 block">Mar 11, 2022</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-grid with progress score dials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                {marketsBottom.map((item, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 border border-gray-100 relative">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        alt=""
                      />
                      {item.score && (
                        /* Circular Score Rating overlay */
                        <div className="absolute top-2 left-2 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-[10px] font-black border border-white/10">
                          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-white/20"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-[#0086F9]"
                              strokeWidth="2.5"
                              strokeDasharray={`${item.score}, 100`}
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="relative">{item.score}</span>
                        </div>
                      )}
                    </div>
                    <Link href={item.url}>
                      <h4 className="text-[13px] font-bold text-gray-800 leading-tight group-hover:text-[#0086F9] transition-colors line-clamp-3">
                        {item.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR AREA (4 cols) */}
          <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-6 self-start">
            
            {/* Columns Widget */}
            <div className="bg-gray-50/50 border border-gray-100 p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 border-l-[3px] border-[#0086F9] pl-3 mb-6">
                Columns
              </h3>
              <div className="space-y-5">
                {columnsSidebar.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-1 flex-1">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                      </Link>
                      <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                        By {item.author}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opinion Widget */}
            <div className="bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 border-l-[3px] border-[#0086F9] pl-3 mb-6">
                Opinion
              </h3>
              <div className="space-y-4 divide-y divide-gray-100">
                {opinionSidebar.map((item, i) => (
                  <div key={i} className="pt-4 first:pt-0 group">
                    <Link href={item.url}>
                      <h4 className="text-[13px] font-serif font-bold text-gray-800 hover:text-[#0086F9] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Ad Placement */}
            <div className="flex justify-center">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/01/Tall-Woman.jpg"
                  alt="Advertisement Banner"
                  width={300}
                  height={600}
                  className="w-full max-w-[300px] h-auto object-contain border border-gray-100"
                />
              </a>
            </div>

          </aside>

        </div>

        {/* ================= LIFESTYLE TECH SEGMENT (VIBRANT LIGHT BLUE BACKGROUND) ================= */}
        <section className="bg-[#eef8fc] p-8 md:p-12 -mx-4 md:-mx-8 my-10 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto space-y-8">
            
            <div className="flex items-center justify-between border-b border-blue-200 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="text-[#0086F9]" size={20} />
                <h2 className="text-[18px] font-black uppercase tracking-wider text-gray-900">
                  Lifestyle Tech
                </h2>
              </div>
              <Link href="#" className="text-xs text-[#0086F9] hover:underline font-bold">View More</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Segment: 2 stacked posts (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                {lifestyleTechLeft.map((item, i) => (
                  <div key={i} className="bg-white p-5 border border-gray-100 flex flex-col md:flex-row gap-5 group shadow-sm">
                    <div className="md:w-1/2 aspect-[3/2] overflow-hidden bg-gray-50 shrink-0">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between space-y-2">
                      <div className="space-y-2">
                        <Link href={item.url}>
                          <h3 className="text-base font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase mt-auto">
                        <span>{item.author}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Segment: Poster Overlay (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[300px] overflow-hidden group border border-gray-100 shadow-sm">
                  <img
                    src={lifestyleTechPoster.image}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3 text-white">
                    <span className="bg-[#0086F9] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">
                      {lifestyleTechPoster.category}
                    </span>
                    <Link href={lifestyleTechPoster.url}>
                      <h3 className="text-xl md:text-2xl font-serif font-black leading-snug hover:text-blue-300 transition-colors">
                        {lifestyleTechPoster.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-[10px] text-white/60 font-bold uppercase">
                      <span>{lifestyleTechPoster.author}</span>
                      <span>•</span>
                      <span>{lifestyleTechPoster.date}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom 5-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6 border-t border-blue-200">
              {lifestyleTechGrid5.map((item, i) => (
                <div key={i} className="bg-white p-4 border border-gray-100 space-y-3 group shadow-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 border border-gray-100">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        alt=""
                      />
                    </div>
                    <Link href={item.url}>
                      <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors line-clamp-3">
                        {item.title}
                      </h4>
                    </Link>
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold uppercase mt-auto block">{item.date}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= SPORTS + EXCLUSIVE SIDEBAR SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-100">
          
          {/* Left Area (8 cols) */}
          <div className="lg:col-span-8 space-y-10 lg:border-r lg:border-gray-100 lg:pr-8">
            
            {/* Sports Widget */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                <h2 className="text-[16px] font-black uppercase tracking-wider text-gray-900">
                  Sports
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 group">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={sportsMain.image}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <Link href={sportsMain.url}>
                    <h3 className="text-lg font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {sportsMain.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{sportsMain.excerpt}</p>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  {sportsList.map((item, i) => (
                    <div key={i} className="pt-4 first:pt-0 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                      <span className="text-[9px] text-gray-400 font-bold uppercase mt-2 block">Mar 11, 2022</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Cricket / More Sports subcolumns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              
              {/* Cricket Column */}
              <div className="space-y-5">
                <h3 className="text-[14px] font-black uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1.5">
                  Cricket
                </h3>
                <div className="group space-y-3">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={cricketMain.image}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <Link href={cricketMain.url}>
                    <h4 className="text-[15px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {cricketMain.title}
                    </h4>
                  </Link>
                </div>
              </div>

              {/* More Sports Column */}
              <div className="space-y-5 md:border-l md:border-gray-100 md:pl-6">
                <h3 className="text-[14px] font-black uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1.5">
                  More Sports
                </h3>
                <div className="group">
                  <Link href={moreSportsMain.url}>
                    <h4 className="text-[15px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {moreSportsMain.title}
                    </h4>
                  </Link>
                </div>
                <div className="space-y-4 divide-y divide-gray-100">
                  {moreSportsList.map((item, i) => (
                    <div key={i} className="pt-4 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-6 self-start">
            
            {/* Exclusive News */}
            <div className="bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 border-l-[3px] border-[#0086F9] pl-3 mb-6">
                Exclusive News
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {exclusiveNews.map((item, i) => (
                  <div key={i} className="flex gap-3 justify-between items-start group border-b border-gray-50 pb-4 last:border-none last:pb-0">
                    <div className="space-y-1 flex-1">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-tight group-hover:text-[#0086F9] transition-colors line-clamp-3">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                    {item.image && (
                      <div className="w-20 h-14 shrink-0 overflow-hidden bg-gray-50 border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Square Banner Ad */}
            <div className="bg-gray-50 border border-gray-100 p-4 flex justify-center">
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/01/Newsboard-Sidebar.jpg"
                  alt="Sidebar Advertisement"
                  width={300}
                  height={250}
                  className="w-full max-w-[300px] h-auto object-contain border border-gray-200"
                />
              </a>
            </div>

          </aside>

        </div>

        {/* ================= EDITOR'S PICKS GRID (FULL WIDTH 5 COLUMNS OVERLAY) ================= */}
        <section className="py-10 border-b border-gray-100">
          <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2 mb-8">
            <h2 className="text-[16px] font-black uppercase tracking-wider text-gray-900">
              Editor's Picks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {editorsPicks.map((item, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden group shadow-md border border-gray-100">
                <img
                  src={item.image}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 text-white">
                  <span className="text-[9px] text-[#0086F9] font-black uppercase tracking-widest">
                    {item.category}
                  </span>
                  <Link href={item.url || "#"}>
                    <h3 className="text-[13px] font-serif font-black leading-snug hover:text-blue-300 transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CURRENCIES, SCHOOLS + TOP TRENDING SEGMENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Left content: 8 cols */}
          <div className="lg:col-span-8 space-y-12 lg:border-r lg:border-gray-100 lg:pr-8">
            
            {/* Currencies & Crypto Widget */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                <h2 className="text-[16px] font-black uppercase tracking-wider text-gray-900">
                  Currencies &amp; Crypto
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 group">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={currenciesCryptoMain.image}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">{currenciesCryptoMain.date}</div>
                  <Link href={currenciesCryptoMain.url}>
                    <h3 className="text-lg font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {currenciesCryptoMain.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{currenciesCryptoMain.excerpt}</p>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  {currenciesCryptoList.map((item, i) => (
                    <div key={i} className="pt-4 first:pt-0 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                      <span className="text-[9px] text-gray-400 font-bold uppercase mt-2 block">Jan 30, 2025</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education & Schools subcolumns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              
              {/* Higher Education */}
              <div className="space-y-5">
                <h3 className="text-[14px] font-black uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1.5">
                  Education
                </h3>
                <div className="group space-y-3">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={educationMain.image}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                  <Link href={educationMain.url}>
                    <h4 className="text-[15px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {educationMain.title}
                    </h4>
                  </Link>
                </div>
                <div className="space-y-3.5 divide-y divide-gray-100">
                  {educationList.map((item, i) => (
                    <div key={i} className="pt-3 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schools */}
              <div className="space-y-5 md:border-l md:border-gray-100 md:pl-6">
                <h3 className="text-[14px] font-black uppercase tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1.5">
                  Schools
                </h3>
                <div className="group">
                  <Link href={schoolsMain.url}>
                    <h4 className="text-[15px] font-serif font-black leading-snug text-gray-900 group-hover:text-[#0086F9] transition-colors">
                      {schoolsMain.title}
                    </h4>
                  </Link>
                </div>
                <div className="space-y-3.5 divide-y divide-gray-100">
                  {schoolsList.map((item, i) => (
                    <div key={i} className="pt-3 group">
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 group-hover:text-[#0086F9] transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Section: You May Have Missed */}
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-2">
                <h2 className="text-[16px] font-black uppercase tracking-wider text-gray-900">
                  You May Have Missed
                </h2>
              </div>

              <div className="bg-gray-50/50 p-6 border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 group">
                <div className="md:col-span-5 aspect-[3/2] overflow-hidden bg-white border border-gray-100 shrink-0">
                  <img
                    src={youMayHaveMissedMain.image}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    alt=""
                  />
                </div>
                <div className="md:col-span-7 flex flex-col justify-between space-y-2">
                  <div className="space-y-2">
                    <div className="text-[9px] text-[#0086F9] font-black uppercase tracking-widest">Financials</div>
                    <Link href={youMayHaveMissedMain.url}>
                      <h3 className="text-[20px] font-serif font-black leading-tight text-gray-900 hover:text-[#0086F9] transition-colors">
                        {youMayHaveMissedMain.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                      {youMayHaveMissedMain.excerpt}
                    </p>
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase mt-auto">{youMayHaveMissedMain.date}</div>
                </div>
              </div>

              {/* Grid of bottom items with thumbnails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                {youMayHaveMissedList.map((item, i) => (
                  <div key={i} className="flex gap-3 justify-between items-start group">
                    <Link href={item.url} className="flex-1">
                      <h4 className="text-[13px] font-bold text-gray-800 leading-tight group-hover:text-[#0086F9] transition-colors line-clamp-3">
                        {item.title}
                      </h4>
                    </Link>
                    {item.image && (
                      <div className="w-16 h-11 shrink-0 overflow-hidden bg-gray-50 border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right sidebar: 4 cols */}
          <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-6 self-start">
            
            {/* Top Trending Widget */}
            <div className="bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 border-l-[3px] border-[#0086F9] pl-3 mb-6">
                Top Trending
              </h3>

              <div className="space-y-6">
                {topTrending.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <span className="text-4xl font-serif font-black text-gray-200 group-hover:text-[#0086F9] transition-colors leading-none italic">
                      {i + 1}
                    </span>
                    <div className="space-y-2 flex-1">
                      {item.image && (
                        <div className="aspect-[16/10] overflow-hidden bg-gray-50 border border-gray-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <Link href={item.url}>
                        <h4 className="text-[13px] font-bold text-gray-800 leading-snug group-hover:text-[#0086F9] transition-colors line-clamp-3">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="bg-[#0086F9] p-8 text-center text-white relative overflow-hidden group shadow-md">
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">Join Our Insight List</h3>
              <p className="text-white/80 text-xs mb-6 leading-relaxed">
                Deep analysis and morning briefings delivered to your inbox daily.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/15 border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:bg-white focus:text-black transition-all text-center placeholder:text-white/60"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-black uppercase tracking-widest text-[11px] py-3.5 hover:bg-white hover:text-black transition-colors"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>

          </aside>

        </div>

      </div>

      {/* Premium Footer */}
      <TribunePostFooter />
    </main>
  );
}
