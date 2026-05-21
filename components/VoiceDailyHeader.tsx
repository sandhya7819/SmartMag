"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { VD_LOGO, trendingHeadlines } from "@/lib/voiceDailyData";

const nav = ["Home", "Features", "Politics", "Technology", "Sports", "Health", "Buy Theme"];
const trending = ["Ukraine Conflict", "US Elections", "Investments", "Middle East"];

export default function VoiceDailyHeader() {
  const [trendIdx, setTrendIdx] = useState(0);

  return (
    <header className="w-full sticky top-0 z-[100] font-[Faustina,Georgia,serif] shadow-sm">
      {/* Main nav — s-dark */}
      <div className="bg-[#161616] text-white">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-[auto_1fr_auto] items-center gap-4 min-h-[72px]">
          <Link href="/thevoice-daily" className="shrink-0 py-2">
            <img src={VD_LOGO} alt="The Voice Daily" width={209} height={35} className="h-[32px] w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[13px] font-bold uppercase tracking-[0.5px]">
            {nav.map((item, i) => (
              <Link
                key={item}
                href={item === "Home" ? "/thevoice-daily" : "#"}
                className={`hover:text-[#0c77e2] transition-colors whitespace-nowrap ${i === 0 ? "text-white" : "text-white/85"}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 text-white/70">
              <Facebook size={14} className="hover:text-[#0c77e2] cursor-pointer transition-colors" />
              <Twitter size={14} className="hover:text-[#0c77e2] cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-[#0c77e2] cursor-pointer transition-colors" />
            </div>
            <a
              href="http://eepurl.com/hq-3Xb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#161616] text-[12px] font-black uppercase tracking-wide px-5 py-2 hover:bg-[#0c77e2] hover:text-white transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Trending topics */}
      <div className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[42px]">
          <div className="flex items-center gap-4 overflow-hidden">
            <button type="button" className="lg:hidden text-[#444]" aria-label="Menu">
              <Menu size={18} />
            </button>
            <span className="text-[12px] font-bold text-[#666] whitespace-nowrap">Trending Topics:</span>
            <div className="hidden sm:flex items-center gap-5 text-[13px] font-semibold text-[#333]">
              {trending.map((t) => (
                <Link key={t} href="#" className="hover:text-[#0c77e2] whitespace-nowrap transition-colors">
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <Link href="#" className="text-[#444] hover:text-[#0c77e2]" aria-label="Search">
            <Search size={17} />
          </Link>
        </div>
      </div>

      {/* Trending news ticker */}
      <div className="hidden md:block bg-white border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto flex">
          <div className="w-[185px] shrink-0 bg-[#161616] flex items-center justify-center px-3 min-h-[48px]">
            <h2 className="text-white text-[12px] font-black uppercase tracking-[2.5px]">Trending News</h2>
          </div>
          <div className="flex-1 flex items-center min-h-[48px] bg-[#f7f7f7] px-2">
            <button
              type="button"
              onClick={() => setTrendIdx((i) => (i - 1 + trendingHeadlines.length) % trendingHeadlines.length)}
              className="text-[#888] hover:text-[#0c77e2] p-2 shrink-0"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <Link
              href="#"
              className="flex-1 text-center text-[14px] font-semibold text-[#161616] hover:text-[#0c77e2] px-3 line-clamp-1 transition-colors"
            >
              {trendingHeadlines[trendIdx]}
            </Link>
            <button
              type="button"
              onClick={() => setTrendIdx((i) => (i + 1) % trendingHeadlines.length)}
              className="text-[#888] hover:text-[#0c77e2] p-2 shrink-0"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
