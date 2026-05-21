"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Moon, Sun, Menu, X, ChevronDown, Facebook, Twitter, Instagram, Pin } from "lucide-react";

export default function Tech2Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, we would toggle a class on the body/html
  };

  const navItems = [
    { name: "Home", href: "/tech-2" },
    { 
      name: "Features", 
      href: "#", 
      hasChildren: true,
      children: ["Unique Demos", "Post Styles", "Category Layouts", "Header Styles"]
    },
    { 
      name: "Mobiles", 
      href: "#", 
      isMega: true 
    },
    { name: "Gadgets", href: "#" },
    { 
      name: "Hot Tech", 
      href: "#", 
      hasChildren: true,
      children: ["Mobiles", "Gaming", "Gadgets"]
    },
    { name: "Gaming", href: "#" },
    { name: "Buy Theme", href: "#", isSpecial: true },
  ];

  return (
    <header className={`w-full z-50 font-outfit ${isSticky ? "relative" : ""}`}>
      {/* Top Bar */}
      <div className="bg-[#111] text-white py-2 hidden lg:block">
        <div className="container flex justify-between items-center">
          <nav className="flex gap-6 text-[11px] font-bold uppercase tracking-wider">
            <Link href="#" className="hover:text-blue-500 transition-colors">Start Here</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Demos</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">Contact</Link>
            <Link href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Buy Now!</Link>
          </nav>
          <div className="flex gap-4">
            <Facebook size={14} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Twitter size={14} className="cursor-pointer hover:text-blue-400 transition-colors" />
            <Instagram size={14} className="cursor-pointer hover:text-pink-500 transition-colors" />
            <Pin size={14} className="cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 shadow-md py-2" : "py-6"}`}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/tech-2" className="flex-shrink-0">
              <img 
                src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/LOGO-THE-WIRE-WIDE.png" 
                alt="Tech 2 Logo" 
                className={`${isSticky ? "h-7" : "h-9"} w-auto transition-all duration-300`}
              />
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href} 
                    className={`flex items-center gap-1 text-[14px] font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors py-2 ${item.isSpecial ? "text-blue-600" : ""}`}
                  >
                    {item.name}
                    {item.hasChildren && <ChevronDown size={14} className="mt-0.5" />}
                  </Link>
                  {item.hasChildren && (
                    <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 py-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60]">
                      {item.children?.map((child) => (
                        <Link key={child} href="#" className="block px-6 py-2 text-[13px] font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
                          {child}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button 
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <button 
              className="lg:hidden text-gray-900"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-0 left-0 bottom-0 w-[300px] bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-10">
              <img 
                src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/LOGO-THE-WIRE-mobile.png" 
                alt="Tech 2 Mobile Logo" 
                className="h-8 w-auto"
              />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} className="text-gray-900" />
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.hasChildren && <ChevronDown size={18} />}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <Facebook size={20} className="text-gray-400 hover:text-blue-500" />
                <Twitter size={20} className="text-gray-400 hover:text-blue-400" />
                <Instagram size={20} className="text-gray-400 hover:text-pink-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
