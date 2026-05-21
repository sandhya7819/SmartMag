"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu } from "lucide-react";

export default function CoinbaseHeader() {
  const topNav = ["Start Here", "Demos", "Contact", "Buy Now!"];
  const mainNav = ["Home", "Features", "Technology", "Insights", "Business", "Markets"];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Row 1: Dark top bar – Left nav | Right socials */}
      <div className="bg-[#0d1117] border-b border-white/10 py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center gap-5">
            {topNav.map((item, i) => (
              <Link key={i} href="#" className="text-[11px] text-gray-400 hover:text-white font-medium transition-colors tracking-wide">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#"><Facebook size={14} className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Twitter size={14} className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Instagram size={14} className="text-gray-400 hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Row 2: Dark main – Logo Left | Nav Center */}
      <div className="bg-[#0d1117] border-b border-white/10 py-3">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/coinbase">
            <img
              src="https://smartmag.theme-sphere.com/coinbase/wp-content/uploads/sites/19/2021/08/CoinBase-logo-white.png"
              alt="SmartMag CoinBase"
              className="h-8 object-contain"
            />
          </Link>
          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {mainNav.map((item, i) => (
              <Link key={i} href={i === 0 ? "/coinbase" : "#"}
                className={`text-[13px] font-semibold transition-colors ${i === 0 ? "text-white border-b-2 border-[#3b82f6] pb-0.5" : "text-gray-300 hover:text-white"}`}>
                {item}
              </Link>
            ))}
          </nav>
          {/* Right: Search + Menu */}
          <div className="flex items-center gap-3">
            <button><Search size={15} className="text-gray-400 hover:text-white" /></button>
            <button className="lg:hidden"><Menu size={18} className="text-gray-300" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}
