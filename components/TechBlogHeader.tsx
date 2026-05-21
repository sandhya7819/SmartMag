"use client";
import { Facebook, Twitter, Instagram, Youtube, Search, Moon, Menu, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TechBlogHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#0f121a] text-white hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center h-10 text-[11px] font-bold uppercase tracking-widest">
          <div className="flex gap-7 text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Start Here</Link>
            <Link href="/" className="hover:text-white transition-colors">Demos</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:text-white transition-colors text-[#ab07ab]">Buy Now</Link>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Facebook size={12} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
            <Twitter size={12} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
            <Instagram size={12} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
            <Youtube size={12} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-[70px]">
          {/* Left: hamburger + logo + nav */}
          <div className="flex items-center gap-6">
            <button
              className="lg:hidden text-gray-700 hover:text-[#ab07ab] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/tech-blog" className="flex items-center gap-0">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark.png"
                alt="TechBlog Logo"
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const next = e.currentTarget.nextElementSibling as HTMLElement;
                  if (next) next.style.display = 'flex';
                }}
              />
              <span className="hidden text-[26px] font-black tracking-tight text-black uppercase">
                TECH<span className="text-[#ab07ab]">BLOG</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 ml-4">
              {[
                { label: "Home", href: "/tech-blog", active: true },
                { label: "Features", href: "#", dropdown: true },
                { label: "Technology", href: "#", dropdown: true },
                { label: "Gadgets", href: "#" },
                { label: "Phones", href: "#", dropdown: true },
                { label: "Buy Theme", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1 text-[14px] font-bold transition-colors ${
                    item.active ? "text-[#ab07ab]" : "text-gray-800 hover:text-[#ab07ab]"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={13} className="opacity-50" />}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: subscribe + icons */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:block bg-[#ab07ab] text-white text-[11px] font-black uppercase tracking-[2px] px-6 py-2.5 hover:bg-black transition-all"
            >
              Subscribe
            </Link>
            <div className="flex items-center gap-3 text-gray-500 border-l border-gray-100 pl-3 ml-1">
              <Moon size={18} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
              <Search size={18} className="hover:text-[#ab07ab] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg z-50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {["Home", "Features", "Technology", "Gadgets", "Phones", "Buy Theme"].map((item) => (
              <Link key={item} href="#" className="block text-[14px] font-black text-gray-800 hover:text-[#ab07ab] transition-colors py-2 border-b border-gray-50">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
