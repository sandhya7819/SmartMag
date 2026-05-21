"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search } from "lucide-react";

export default function PoliticalHeader() {
  const topNav = ["Start Here", "Demos", "Our Authors", "Contact", "Buy Now!"];
  const mainNav = ["Home", "Features", "Politics", "Economy", "Science & Tech", "Sports"];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Row 1: Dark top bar – centered small nav */}
      <div className="bg-[#1c1c1c] py-2 text-center">
        <nav className="flex items-center justify-center gap-6">
          {topNav.map((item, i) => (
            <Link key={i} href="#" className="text-[11px] text-gray-300 hover:text-white font-medium transition-colors tracking-wide">
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Row 2: White mid – Socials | Logo | Subscribe */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#"><Facebook size={15} className="text-gray-500 hover:text-gray-900" /></a>
            <a href="#"><Twitter size={15} className="text-gray-500 hover:text-gray-900" /></a>
            <a href="#"><Instagram size={15} className="text-gray-500 hover:text-gray-900" /></a>
          </div>
          <Link href="/political" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="https://smartmag.theme-sphere.com/political/wp-content/uploads/sites/54/2024/09/Logo-Political-01-1.png"
              alt="SmartMag Political"
              className="h-11 object-contain"
            />
          </Link>
          <a href="#" className="bg-[#1c1c1c] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2 hover:bg-black transition-colors">
            Subscribe
          </a>
        </div>
      </div>

      {/* Row 3: White bottom – Date | Center Main Nav | Search */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <span className="text-[12px] text-gray-500 font-medium w-32">Wednesday, May 20</span>
          <nav className="flex items-center gap-7">
            {mainNav.map((item, i) => (
              <Link key={i} href={i === 0 ? "/political" : "#"}
                className={`text-[13px] font-bold transition-colors ${i === 0 ? "text-gray-900 border-b-2 border-gray-900 pb-0.5" : "text-gray-600 hover:text-gray-900"}`}>
                {item}
              </Link>
            ))}
          </nav>
          <button aria-label="Search" className="w-32 flex justify-end">
            <Search size={15} className="text-gray-500 hover:text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
