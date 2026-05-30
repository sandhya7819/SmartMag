"use client";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube, UserCircle, ChevronDown, X, Star, Calendar, ArrowRight, Flame } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BeTheChangeHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hotPosts = [
    {
      title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b49fb6c176b4d7ec4cd12b2bad465588-1-150x93.jpeg"
    },
    {
      title: "Xbox Game Pass Is Practically Free in End of 2023 Deal",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ef475228391d98c9021847c54e518dee-150x89.jpeg"
    },
    {
      title: "The Role of Flexible Roofing Membranes in Sustainable Building Design",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/8655bd68cc6deefc2da0e20c1271881d-150x100.jpeg"
    }
  ];

  const techMegaPosts = [
    {
      title: "Top Tried & Tested Ways, You Can Increase Mobile Battery Life by 30%",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/59467acc317229b35f7605257a027fc2-450x300.jpeg"
    },
    {
      title: "Review of Oculus Studios: These 9 VR Studios Are Now Owned by Meta",
      date: "Jan 15, 2021",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/e3ac378f7cd6066d4d9ce35a2af14443-450x301.jpeg",
      rating: "8.9"
    },
    {
      title: "T-Mobile Commits to Android 13 Updates on These Flagship Mobile Phones",
      date: "Jan 15, 2021",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/37c050137ecef4cdb13f88004de19bb0-450x313.jpeg"
    },
    {
      title: "Review: Keep Mobile Technologies Safe with Adaptive Protection",
      date: "Jan 15, 2021",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ea716788019796a95595b99247743b96-450x450.jpeg",
      rating: "7.2"
    }
  ];

  const lifestyleMegaPosts = [
    {
      title: "This Is What Your Lifestyle Will Be Like If You Retire at 55 With $5 Million",
      date: "Jan 5, 2020",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/52e8df359def61be6ace266d15fa1767-768x512.jpeg"
    },
    {
      title: "Coddled Junk-Eating Pets Getting Lifestyle Diseases Like Diabetes, BP",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/0efa8d468b335ca4e9946e2040442dc2-450x300.jpeg"
    },
    {
      title: "How to Integrate Lifestyle Medicine in Primary Care",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/3ebd6a9eb26fbd389a21398463340818-450x300.jpeg"
    },
    {
      title: "Find Smart Home Décor Items and Collections We're Excited About Now",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/cd407154ccadcec3e1a2f83351aeaf7c-450x330.jpeg"
    }
  ];

  return (
    <>
      {/* Search Overlay */}
      <div className={`fixed inset-0 z-[150] bg-black/95 flex items-center justify-center transition-all duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 text-white hover:text-[#2ab391] transition-colors"><X size={32} /></button>
        <div className="w-full max-w-2xl px-6 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-[3px] mb-4">Type to Search</p>
          <div className="relative border-b-2 border-white/20 focus-within:border-[#2ab391] transition-colors">
            <input 
              type="text" 
              placeholder="Search articles, news or categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-white text-2xl py-4 pr-12 focus:outline-none placeholder:text-gray-600"
            />
            <Search className="absolute right-2 top-5 text-gray-400" size={24} />
          </div>
          {searchQuery && (
            <p className="text-[#2ab391] text-sm mt-4 animate-pulse">Press Enter to Search</p>
          )}
        </div>
      </div>

      {/* Off-canvas Menu (Mobile Side Menu) */}
      <div className={`fixed inset-0 z-[120] transition-opacity duration-300 ${isOffCanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setIsOffCanvasOpen(false)}></div>
        <div className={`absolute top-0 left-0 w-[340px] max-w-full h-full bg-[#0a0b16] text-white overflow-y-auto transition-transform duration-300 transform ${isOffCanvasOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col justify-between custom-scrollbar`}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/5">
              <Link href="/be-the-change" className="block">
                <img 
                  src="https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/11/Logo-Be.the_.Change-01.png" 
                  alt="Be The Change logo" 
                  className="h-6 w-auto"
                />
              </Link>
              <button onClick={() => setIsOffCanvasOpen(false)} className="text-white/40 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Menu Links */}
              <ul className="space-y-5 text-sm font-bold uppercase tracking-wider mb-10 border-b border-white/5 pb-8">
                <li className="text-[#2ab391]"><Link href="/be-the-change">Home</Link></li>
                <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Features</Link></li>
                <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Technology</Link></li>
                <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Lifestyle</Link></li>
                <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Culture</Link></li>
                <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Contact</Link></li>
              </ul>

              {/* Newsletter Block */}
              <div className="bg-white/5 border border-white/5 p-6 rounded-md mb-10">
                <h4 className="text-[15px] font-black uppercase text-center tracking-wider mb-2">Subscribe to Updates</h4>
                <p className="text-[12px] text-gray-400 text-center leading-relaxed mb-4">Get the latest creative news from FooBar about art, design and business.</p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email address.." 
                    required 
                    className="w-full bg-[#0a0b16] border border-white/10 px-4 py-2.5 text-xs text-white rounded focus:outline-none focus:border-[#2ab391]"
                  />
                  <button type="submit" className="w-full bg-[#2ab391] text-black font-black uppercase text-[11px] py-2.5 rounded hover:bg-white hover:text-[#0a0b16] transition-colors tracking-widest">Subscribe</button>
                  <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight mt-2 select-none">
                    <input type="checkbox" required className="mt-0.5 rounded-sm" />
                    <span>By signing up, you agree to our terms & privacy policy.</span>
                  </label>
                </form>
              </div>

              {/* What's Hot Widget */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[2px] mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> What's Hot
                </h4>
                <div className="space-y-5">
                  {hotPosts.map((post, idx) => (
                    <Link href="#" key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="w-16 h-12 overflow-hidden rounded bg-white/10 shrink-0">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h5 className="text-[11.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">{post.title}</h5>
                        <span className="text-[10px] text-gray-500 block">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-8 border-t border-white/5 bg-[#070810]">
            <div className="flex gap-6 justify-center items-center">
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={16} /></Link>
            </div>
          </div>
        </div>
      </div>

      <header className="w-full relative z-[100] font-sans">
        
        {/* TOP ROW: Dark background */}
        <div className="bg-[#0a0b16] text-[#eef] border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-12">
            
            {/* Left Nav */}
            <div className="flex items-center gap-6">
              <button onClick={() => setIsOffCanvasOpen(true)} className="lg:hidden text-white hover:text-[#2ab391] transition-colors">
                <Menu size={20} />
              </button>
              
              <ul className="hidden lg:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-wider text-gray-300">
                <li className="hover:text-white transition-colors"><Link href="#">Start Here</Link></li>
                <li className="hover:text-white transition-colors"><Link href="/">Demos</Link></li>
                <li className="hover:text-white transition-colors"><Link href="#">Contact</Link></li>
                <li className="text-[#2ab391] hover:text-white transition-colors"><a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener">Buy Now</a></li>
              </ul>
            </div>

            {/* Right Nav */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-4 text-gray-400 py-1 border-r border-white/10 pr-6 mr-1">
                <Link href="#" className="hover:text-white transition-colors"><Facebook size={13} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Twitter size={13} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Instagram size={13} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Youtube size={13} /></Link>
              </div>

              <button onClick={() => setIsSearchOpen(true)} className="text-gray-300 hover:text-white transition-colors">
                <Search size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* MID ROW: Light background, sticky-capable */}
        <div className={`w-full bg-white text-[#16171f] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-lg border-b border-gray-100 transform translate-y-0 animate-fade-in z-[110]' : 'border-b border-gray-100'}`}>
          <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-[72px] lg:h-[80px]">
            
            {/* Logo and Navigation Block */}
            <div className="flex items-center gap-8 lg:gap-12 w-full lg:w-auto">
              <Link href="/be-the-change" className="block shrink-0">
                <img 
                  src="https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/11/Logo-Be.the_.Change-01.png" 
                  alt="Be The Change logo" 
                  className="h-6 lg:h-7 w-auto"
                />
              </Link>

              {/* Main Desktop Navigation Menu */}
              <nav className="hidden lg:block h-full">
                <ul className="flex items-center space-x-7 text-[13px] font-bold uppercase tracking-wider h-full">
                  
                  {/* Home */}
                  <li className="text-[#2ab391] h-[72px] lg:h-[80px] flex items-center border-b-[3px] border-[#2ab391]">
                    <Link href="/be-the-change">Home</Link>
                  </li>
                  
                  {/* Features with Dropdown */}
                  <li className="hover:text-[#2ab391] transition-colors h-[72px] lg:h-[80px] flex items-center gap-1 group relative cursor-pointer">
                    <span>Features</span>
                    <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                    <div className="absolute top-[80px] left-0 w-48 bg-white border border-gray-100 text-black shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 rounded-b-md z-50">
                      <ul className="text-[11.5px] space-y-3 px-5 py-2 font-semibold">
                        <li className="hover:text-[#2ab391] transition-colors"><Link href="/">58+ Unique Demos</Link></li>
                        <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Post Styles</Link></li>
                        <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Category Layouts</Link></li>
                        <li className="hover:text-[#2ab391] transition-colors"><Link href="#">Header Styles</Link></li>
                        <li className="hover:text-[#2ab391] transition-colors"><Link href="#">WooCommerce</Link></li>
                      </ul>
                    </div>
                  </li>

                  {/* Technology Mega Menu */}
                  <li className="hover:text-[#2ab391] transition-colors h-[72px] lg:h-[80px] flex items-center gap-1 group cursor-pointer static">
                    <span>Technology</span>
                    <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                    <div className="absolute top-[80px] left-0 right-0 w-full bg-white border-b border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-8">
                      <div className="container mx-auto px-8 grid grid-cols-4 gap-6">
                        {techMegaPosts.map((post, index) => (
                          <div key={index} className="group/item flex flex-col gap-3">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded relative">
                              <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" />
                              {post.rating && (
                                <div className="absolute top-2 right-2 bg-black/85 text-white border border-white/10 px-2 py-0.5 rounded text-[10px] font-black tracking-tight flex items-center gap-0.5 shadow-md">
                                  <Star size={10} fill="currentColor" className="text-[#2ab391]" /> {post.rating}
                                </div>
                              )}
                            </div>
                            <div className="space-y-1">
                              <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-widest">Technology</span>
                              <h4 className="text-[12.5px] font-black text-gray-900 leading-snug group-hover/item:text-[#2ab391] transition-colors line-clamp-2">{post.title}</h4>
                              <p className="text-[10px] text-gray-400 font-medium">{post.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>

                  {/* Lifestyle Mega Menu */}
                  <li className="hover:text-[#2ab391] transition-colors h-[72px] lg:h-[80px] flex items-center gap-1 group cursor-pointer static">
                    <span>Lifestyle</span>
                    <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                    <div className="absolute top-[80px] left-0 right-0 w-full bg-white border-b border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-8">
                      <div className="container mx-auto px-8 grid grid-cols-4 gap-6">
                        {lifestyleMegaPosts.map((post, index) => (
                          <div key={index} className="group/item flex flex-col gap-3">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded">
                              <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" />
                            </div>
                            <div className="space-y-1">
                              <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-widest">Lifestyle</span>
                              <h4 className="text-[12.5px] font-black text-gray-900 leading-snug group-hover/item:text-[#2ab391] transition-colors line-clamp-2">{post.title}</h4>
                              <p className="text-[10px] text-gray-400 font-medium">{post.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>

                  {/* Culture */}
                  <li className="hover:text-[#2ab391] transition-colors h-[72px] lg:h-[80px] flex items-center">
                    <Link href="#">Culture</Link>
                  </li>

                  {/* Entertainment */}
                  <li className="hover:text-[#2ab391] transition-colors h-[72px] lg:h-[80px] flex items-center">
                    <Link href="#">Entertainment</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Quick Menu Button */}
            <div className="flex items-center gap-4 shrink-0">
              <button onClick={() => setIsOffCanvasOpen(true)} className="lg:hidden text-gray-700 hover:text-[#2ab391] transition-colors p-1">
                <Menu size={24} />
              </button>
              
              <Link href="#" className="hidden md:flex items-center gap-2 bg-[#2ab391] hover:bg-black hover:text-white text-black font-black text-[11px] tracking-widest uppercase px-6 py-3.5 rounded transition-all duration-300 shadow-md shadow-[#2ab391]/15">
                Subscribe <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>

      </header>
    </>
  );
}
