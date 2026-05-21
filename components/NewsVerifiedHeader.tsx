"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu } from "lucide-react";

export default function NewsVerifiedHeader() {
  const topNav = ["Start Here", "Demos", "Contact", "Buy Now"];
  const mainNav = ["Home", "Features", "US News", "World News", "Politics", "Lifestyle", "Buy Theme"];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Row 1: Top – Small nav | Logo | Socials + Subscribe */}
      <div className="border-b border-gray-200 py-3">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-5">
            {topNav.map((item, i) => (
              <Link key={i} href="#" className="text-[11px] text-gray-500 hover:text-gray-900 font-medium transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <Link href="/news-verified" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="https://smartmag.theme-sphere.com/news-verified/wp-content/uploads/sites/61/2025/01/logo-NewsVerified-02-01.png"
              alt="NewsVerified"
              className="h-8 object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3">
              <a href="#"><Facebook size={14} className="text-gray-400 hover:text-gray-800" /></a>
              <a href="#"><Twitter size={14} className="text-gray-400 hover:text-gray-800" /></a>
              <a href="#"><Instagram size={14} className="text-gray-400 hover:text-gray-800" /></a>
            </div>
            <a href="#" className="bg-gray-900 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 hover:bg-black transition-colors">
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: Main Nav */}
      <div className="border-b border-gray-200 py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center gap-4">
          <button aria-label="Menu" className="flex-shrink-0">
            <Menu size={18} className="text-gray-600" />
          </button>
          <nav className="hidden lg:flex items-center gap-6 flex-1">
            {mainNav.map((item, i) => (
              <Link key={i} href={i === 0 ? "/news-verified" : "#"}
                className={`text-[13px] font-semibold transition-colors ${i === 0 ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}>
                {item}
              </Link>
            ))}
          </nav>
          <button aria-label="Search" className="ml-auto">
            <Search size={15} className="text-gray-500 hover:text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
