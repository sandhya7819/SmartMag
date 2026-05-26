"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, X, Bell, Mail, ChevronDown, Play, FileText, ArrowRight } from "lucide-react";

export default function HealthHeader() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Monitor scroll to trigger sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full bg-white select-none relative z-40">
        
        {/* DESKTOP TOP HEADER (Logo, Aux Nav, Socials, Subscribe) */}
        <div className="bg-white border-b border-gray-100 py-6 hidden lg:block">
          <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/health" className="flex items-center gap-2">
                <span className="text-[#111] text-3xl font-black tracking-[-0.04em] uppercase">
                  Health<span className="text-[#2ab391]">Care</span>
                </span>
              </Link>
            </div>

            {/* Aux Navigation & Actions */}
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-widest text-[#666]">
                <Link href="#" className="hover:text-[#2ab391] transition-colors">Demos</Link>
                <Link href="#" className="hover:text-[#2ab391] transition-colors">Contact</Link>
                <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="hover:text-[#2ab391] transition-colors">Buy Now</Link>
              </nav>

              {/* Social Block */}
              <div className="flex items-center gap-3 border-l border-gray-100 pl-6 h-4">
                <a href="#" className="text-gray-400 hover:text-[#2ab391] transition-colors"><Facebook size={14} /></a>
                <a href="#" className="text-gray-400 hover:text-[#2ab391] transition-colors"><Twitter size={14} /></a>
                <a href="#" className="text-gray-400 hover:text-[#2ab391] transition-colors"><Instagram size={14} /></a>
              </div>

              {/* Subscribe button */}
              <a 
                href="#subscribe" 
                className="bg-[#2ab391] text-white px-5 py-2.5 text-[11px] font-black uppercase tracking-widest hover:bg-[#111] transition-all rounded-sm shadow-sm flex items-center gap-2"
              >
                <Bell size={13} className="animate-pulse" /> SUBSCRIBE
              </a>
            </div>

          </div>
        </div>

        {/* DESKTOP MAIN NAVIGATION (Sticky Bottom Bar) */}
        <nav className="w-full bg-white border-b border-gray-100 hidden lg:block sticky top-0 z-40 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="container mx-auto max-w-[1200px] px-4 flex items-center h-14 justify-between">
            
            <div className="flex items-center h-full">
              {/* Off-canvas Toggle */}
              <button 
                onClick={() => setIsOffCanvasOpen(true)}
                className="text-black hover:text-[#2ab391] transition-colors mr-6 flex items-center"
                aria-label="Toggle Menu"
              >
                <Menu size={22} />
              </button>

              {/* Navigation Links */}
              <ul className="flex items-center gap-8 h-full">
                <li>
                  <Link href="/health" className="text-[13px] font-black uppercase tracking-widest text-[#2ab391] hover:text-[#2ab391] transition-colors h-full flex items-center">
                    Home
                  </Link>
                </li>
                
                {/* Features (Dropdown) */}
                <li className="relative group h-full flex items-center">
                  <span className="text-[13px] font-black uppercase tracking-widest text-[#111] hover:text-[#2ab391] cursor-pointer transition-colors flex items-center gap-1">
                    Features <ChevronDown size={12} className="text-gray-400" />
                  </span>
                  
                  {/* Dropdown Menu */}
                  <ul className="absolute top-[100%] left-0 w-52 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 rounded-b-sm z-50">
                    {["Post Styles", "Category Layouts", "Header Styles", "Review Posts", "Shop / WooCommerce"].map((feat, idx) => (
                      <li key={idx}>
                        <Link href="#" className="block px-6 py-2 text-[12px] font-bold text-gray-700 hover:text-[#2ab391] hover:bg-gray-50 transition-all">
                          {feat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Health (Mega Menu) */}
                <li className="group/mega h-full flex items-center">
                  <span className="text-[13px] font-black uppercase tracking-widest text-[#111] hover:text-[#2ab391] cursor-pointer transition-colors flex items-center gap-1">
                    Health <ChevronDown size={12} className="text-gray-400" />
                  </span>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-200 z-50">
                    <div className="container mx-auto max-w-[1200px] px-4 py-8 grid grid-cols-5 gap-8">
                      
                      {/* Left categories column */}
                      <div className="col-span-1 border-r border-gray-100 pr-6 space-y-4">
                        <h4 className="text-[12px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2">Sub Categories</h4>
                        <ul className="space-y-3">
                          <li>
                            <Link href="#" className="block text-[13px] font-extrabold text-gray-800 hover:text-[#2ab391] transition-colors">Fitness</Link>
                          </li>
                          <li>
                            <Link href="#" className="block text-[13px] font-extrabold text-gray-800 hover:text-[#2ab391] transition-colors">News</Link>
                          </li>
                          <li>
                            <Link href="#" className="block text-[13px] font-extrabold text-[#2ab391] hover:underline transition-colors">View All</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Right Articles grid */}
                      <div className="col-span-4 grid grid-cols-4 gap-6">
                        {[
                          { title: "Hospitalizations Rising Among Fully Vaccinated in US, Study Finds", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_211944860_XL-1-450x300.jpg", play: true },
                          { title: "Law to Stop Surprise Medical Bills Faces Pushback from Doctors", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/sammy-williams-38Un6Oi5beE-unsplash-450x300.jpg", play: true },
                          { title: "Why Health Care Systems Should Invest in Medical Malls", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/medical-stethoscope-laying-on-a-blue-flat-surface-copy-space-background-negative-space-for-text_t20_jRQ7QW-450x300.jpg", play: true },
                          { title: "What’s Really Happening in Herbal Medicines Market", date: "Sep 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/daily-nouri-D37STEwmyqY-unsplash-450x329.jpg", play: true }
                        ].map((post, i) => (
                          <div key={i} className="group/item cursor-pointer space-y-3">
                            <div className="aspect-[16/10] bg-gray-100 rounded-sm overflow-hidden relative">
                              <img src={post.img} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" alt="" />
                              {post.play && (
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                  <span className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center text-[#2ab391] shadow-md group-hover/item:bg-[#2ab391] group-hover/item:text-white transition-all duration-300">
                                    <Play size={12} fill="currentColor" className="ml-0.5" />
                                  </span>
                                </div>
                              )}
                            </div>
                            <div>
                              <h4 className="text-[12.5px] font-extrabold text-[#111] leading-snug group-hover/item:text-[#2ab391] transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <span className="text-[10px] text-gray-400 font-bold block mt-1">{post.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </li>

                <li>
                  <Link href="#" className="text-[13px] font-black uppercase tracking-widest text-[#111] hover:text-[#2ab391] transition-colors h-full flex items-center">
                    Fitness
                  </Link>
                </li>

                {/* Research (Mega Menu with 5 cols) */}
                <li className="group/mega h-full flex items-center">
                  <span className="text-[13px] font-black uppercase tracking-widest text-[#111] hover:text-[#2ab391] cursor-pointer transition-colors flex items-center gap-1">
                    Research <ChevronDown size={12} className="text-gray-400" />
                  </span>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-200 z-50">
                    <div className="container mx-auto max-w-[1200px] px-4 py-8">
                      <div className="grid grid-cols-5 gap-6">
                        {[
                          { title: "Ministers Could be Forced to Make NHS Workforce Plans Public", date: "Oct 8, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_442664362_XL-1-450x300.jpg" },
                          { title: "FDA Authorizes Marketing of VR System for Chronic Pain Relief", date: "Oct 7, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_512599164_XL-1-450x322.jpg" },
                          { title: "Corona vs. Flu: Here’s How to Tell the Major Difference", date: "Mar 15, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/medicine-needle-health-vaccination-diversity-medical-doctors-office-saving-lives-medical-care_t20_Llm1Bz-450x300.jpg" },
                          { title: "5 Superfoods – Your Winter Diet for a Perfect Glowing Skin", date: "Mar 14, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/03/oil-for-body-care-and-aromatherapy-body-care-aromatherapy-rejuvenation-body-oil-spa-still-life-towel_t20_YQP0JW-450x299.jpg" },
                          { title: "Review: How Research Could Help with Spinal Cord Injuries", date: "Mar 14, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/03/pexels-edward-jenner-4033018-1-450x300.jpg" }
                        ].map((post, i) => (
                          <div key={i} className="group/item cursor-pointer space-y-3">
                            <div className="aspect-[16/10] bg-gray-100 rounded-sm overflow-hidden">
                              <img src={post.img} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" alt="" />
                            </div>
                            <div>
                              <h4 className="text-[12.5px] font-extrabold text-[#111] leading-snug group-hover/item:text-[#2ab391] transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <span className="text-[10px] text-gray-400 font-bold block mt-1">{post.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="#" className="text-[13px] font-black uppercase tracking-widest text-[#111] hover:text-[#2ab391] transition-colors h-full flex items-center">
                    COVID'19
                  </Link>
                </li>
                <li>
                  <Link href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" className="text-[13px] font-black uppercase tracking-widest text-[#111] hover:text-[#2ab391] transition-colors h-full flex items-center">
                    Buy Theme
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Search Button */}
            <div>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-black hover:text-[#2ab391] transition-colors flex items-center"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>

          </div>
        </nav>

        {/* MOBILE HEADER BAR */}
        <div className="lg:hidden w-full border-b border-gray-100 py-3 sticky top-0 left-0 right-0 bg-white shadow-sm z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
            
            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsOffCanvasOpen(true)}
              className="text-black hover:text-[#2ab391] transition-colors"
            >
              <Menu size={22} />
            </button>

            {/* Centered Mobile Logo */}
            <Link href="/health" className="flex items-center gap-1.5">
              <span className="text-[#111] text-xl font-black uppercase tracking-tight">
                Health<span className="text-[#2ab391]">Care</span>
              </span>
            </Link>

            {/* Mobile Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-black hover:text-[#2ab391] transition-colors"
            >
              <Search size={18} />
            </button>

          </div>
        </div>

      </header>

      {/* OFF-CANVAS SIDEBAR DRAWER */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOffCanvasOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOffCanvasOpen(false)}
      >
        <div 
          className={`fixed top-0 bottom-0 left-0 w-[320px] max-w-[85vw] bg-[#111] text-white p-6 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col justify-between transition-transform duration-300 z-50 ${
            isOffCanvasOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Panel (Logo & Close Button) */}
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="text-white text-2xl font-black uppercase tracking-tight">
                Health<span className="text-[#2ab391]">Care</span>
              </span>
              <button 
                onClick={() => setIsOffCanvasOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <nav className="mb-10">
              <ul className="space-y-4">
                <li>
                  <Link href="/health" onClick={() => setIsOffCanvasOpen(false)} className="block text-[13px] font-black uppercase tracking-widest text-[#2ab391]">
                    Home
                  </Link>
                </li>
                {["Features", "Health", "Fitness", "Research", "COVID'19", "Contact", "Buy Theme"].map((navItem) => (
                  <li key={navItem} className="border-t border-white/5 pt-3">
                    <Link 
                      href="#" 
                      onClick={() => setIsOffCanvasOpen(false)}
                      className="block text-[13px] font-black uppercase tracking-widest text-white/80 hover:text-[#2ab391] transition-all"
                    >
                      {navItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter widget inside Off-Canvas */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-[4px] mb-8">
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-2">Subscribe</h3>
              <p className="text-white/50 text-[11.5px] mb-4 leading-relaxed">
                Get the latest news and research tips to live a healthier life.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  className="w-full bg-white/5 border border-white/10 px-3 py-2 text-[12px] text-white placeholder-white/30 focus:outline-none focus:border-[#2ab391] transition-colors rounded-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#2ab391] text-white py-2 text-[10px] font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all rounded-sm"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* Small list of posts - What's Hot */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">What's Hot</h4>
              {[
                { title: "COVID Antiviral Pills: What Scientists Still Want to Know", date: "Oct 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_416102608_xl-2015-1-300x207.jpg" },
                { title: "Does CBD Live Up to Its Claims of Health Benefits?", date: "Oct 9, 2021", img: "https://smartmag.theme-sphere.com/health/wp-content/uploads/sites/22/2021/11/Depositphotos_314367688_XL-1-300x195.jpg" }
              ].map((item, idx) => (
                <Link href="#" key={idx} onClick={() => setIsOffCanvasOpen(false)} className="flex gap-3 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-sm overflow-hidden shrink-0">
                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-white/80 group-hover/item:text-[#2ab391] transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h5>
                    <span className="text-[9px] text-white/30 block mt-1">{item.date}</span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* Social icons at bottom */}
          <div className="flex gap-4 pt-6 border-t border-white/5">
            <a href="#" className="text-white/40 hover:text-[#2ab391] transition-colors"><Facebook size={16} /></a>
            <a href="#" className="text-white/40 hover:text-[#2ab391] transition-colors"><Twitter size={16} /></a>
            <a href="#" className="text-white/40 hover:text-[#2ab391] transition-colors"><Instagram size={16} /></a>
          </div>

        </div>
      </div>

      {/* FULLSCREEN SEARCH MODAL OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#111]/95 z-50 flex items-center justify-center transition-all duration-300 ${
          isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-8 right-8 text-white/55 hover:text-white transition-colors"
          aria-label="Close Search"
        >
          <X size={26} />
        </button>

        <div className="w-full max-w-[600px] px-6 text-center">
          <form onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }} className="relative">
            <input 
              type="search" 
              placeholder="Search..."
              className="w-full bg-transparent border-b-2 border-white/10 text-white text-2xl md:text-3xl focus:outline-none focus:border-[#2ab391] transition-colors py-4 px-2 text-center placeholder-white/20"
              autoFocus={isSearchOpen}
            />
            <button type="submit" className="absolute right-2 bottom-4 text-white/60 hover:text-[#2ab391] transition-colors">
              <Search size={22} />
            </button>
          </form>
          <p className="text-[12px] text-white/40 mt-4 tracking-wider uppercase">
            Type above and press Enter. Press <span className="font-extrabold text-white/60">ESC</span> to exit.
          </p>
        </div>
      </div>
    </>
  );
}
