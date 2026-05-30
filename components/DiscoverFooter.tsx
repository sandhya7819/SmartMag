"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";
import { sidebarWhatsHot } from "@/lib/discoverData";

export default function DiscoverFooter() {
  const categories = [
    { label: "Lifestyle", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Travel", href: "#" },
    { label: "Celebrities", href: "#" },
    { label: "Health", href: "#" },
    { label: "Decor", href: "#" },
  ];

  const quickLinks = [
    { label: "Home", href: "/discover" },
    { label: "Travel", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-[#0f111e] text-gray-400 font-sans border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        
        {/* Column 1: About */}
        <div className="md:col-span-5 space-y-5">
          <Link href="/discover">
            <img 
              src="https://smartmag.theme-sphere.com/discover/wp-content/uploads/sites/38/2023/03/logo-discover-mobile@2x.png" 
              alt="SmartMag Discover Footer Logo" 
              className="h-[32px] w-auto brightness-95" 
            />
          </Link>
          <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
            Discover is a clean, modern layout tailored for news, lifestyle blogs, and magazines. Re-engineered using Next.js and Tailwind CSS for optimized responsiveness and premium performance.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#e24e54] hover:text-white transition-all"><Facebook size={13} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#e24e54] hover:text-white transition-all"><Twitter size={13} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#e24e54] hover:text-white transition-all"><Instagram size={13} /></a>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-white border-l-2 border-[#e24e54] pl-2.5">
            Categories
          </h4>
          <ul className="grid grid-cols-1 gap-2 text-xs">
            {categories.map((cat) => (
              <li key={cat.label}>
                <a href={cat.href} className="hover:text-[#e24e54] transition-colors flex items-center gap-1 group">
                  <ChevronRight size={10} className="text-[#e24e54] opacity-0 group-hover:opacity-100 transition-all -ml-1 group-hover:ml-0" />
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Popular Posts */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[12px] font-black uppercase tracking-wider text-white border-l-2 border-[#e24e54] pl-2.5">
            Popular Right Now
          </h4>
          <div className="space-y-4">
            {sidebarWhatsHot.slice(0, 2).map((post, i) => (
              <div key={i} className="flex gap-3 group items-center">
                <div className="w-[54px] h-[40px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="text-xs text-gray-300 hover:text-[#e24e54] font-bold leading-tight line-clamp-2 transition-colors">
                    {post.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: copyright and footer links */}
      <div className="max-w-[1200px] mx-auto px-5 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <div>
          © 2026 SmartMag Theme. Recreated with premium aesthetics.
        </div>
        <div className="flex space-x-6">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
