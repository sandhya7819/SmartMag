"use client";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube, ChevronDown, X, Star, Calendar } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LazyBusyHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Generate formatted date (e.g. Wednesday, May 20)
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString('en-US', options);
    setCurrentDate(dateStr);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hotPosts = [
    {
      title: "Running In Cold Weather: 8 Rules To Follow For A Safe And Healthy Exercise",
      date: "Jan 22, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d01cbcffe7151b9690a60ff450665d2e-150x100.jpeg"
    },
    {
      title: "The Unexpected Scenes That Gave Audience ‘Lifelong Phobia’",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/9faf676d5ebf399427636b11d69dc46b-150x97.jpeg"
    },
    {
      title: "Dr. Jenny Pets Adds 5 Dog Diets Tailored To Specific Dietary Needs",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d1b998484548c9450b9b96f2c1e73c86-150x100.jpeg"
    }
  ];

  const lifestylePosts = [
    {
      title: "Dr. Jenny Pets Adds 5 Dog Diets Tailored To Specific Dietary Needs",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d1b998484548c9450b9b96f2c1e73c86-450x300.jpeg"
    },
    {
      title: "Try These Tips And Tricks To Give Your Home A Festive Look",
      date: "Jan 15, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/231a204003e09661c31969bfd71eed25-450x450.jpeg"
    },
    {
      title: "Review: 7 Future Fashion Trends Shaping the Future of Fashion",
      date: "Jan 15, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/32e6c4cc58b14aa398767a73b3f80e7c-450x300.jpeg",
      rating: "72%"
    },
    {
      title: "How To Make Sure Your Kids Are Prepared For A Beach Holiday",
      date: "Jan 12, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/ea904d63773b284cf93fe3b95d160779-450x300.jpeg"
    }
  ];

  const tvPosts = [
    {
      title: "The Unexpected Scenes That Gave Audience ‘Lifelong Phobia’",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/9faf676d5ebf399427636b11d69dc46b-450x290.jpeg"
    },
    {
      title: "15 Details You May Have Missed In The Netflix Series",
      date: "Jan 14, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_436434486_XL-1-450x300.jpg"
    },
    {
      title: "Movie 'Love in the Villa' Cast, Synopsis, and Wallpapers",
      date: "Jan 14, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_158116498_XL-1-450x288.jpg"
    },
    {
      title: "Netflix's Red Notice Has Too Many Movie Stars & Not Enough Actors",
      date: "Mar 15, 2020",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/3235ad75cf976747e8fb2baedca1219f-768x470.jpeg"
    }
  ];

  return (
    <>
      {/* Search overlay popup */}
      <div className={`fixed inset-0 z-[150] bg-black/95 flex items-center justify-center transition-all duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 text-white hover:text-[#f52549] transition-colors"><X size={32} /></button>
        <div className="w-full max-w-2xl px-6 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-[3px] mb-4">Type to Search</p>
          <div className="relative border-b-2 border-white/20 focus-within:border-[#f52549] transition-colors">
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
            <p className="text-[#f52549] text-sm mt-4 animate-pulse">Press Enter to Search</p>
          )}
        </div>
      </div>

      {/* Off-canvas mobile menu drawer */}
      <div className={`fixed inset-0 z-[120] transition-opacity duration-300 ${isOffCanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setIsOffCanvasOpen(false)}></div>
        <div className={`absolute top-0 left-0 w-[340px] max-w-full h-full bg-[#111] text-white overflow-y-auto transition-transform duration-300 transform ${isOffCanvasOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col justify-between custom-scrollbar`}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-[#0a0a0a]">
              <Link href="/lazy-busy" className="block">
                <img 
                  src="https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/logo-LazyBusy-01.png" 
                  alt="SmartMag LazyBusy" 
                  className="h-10 w-auto"
                />
              </Link>
              <button onClick={() => setIsOffCanvasOpen(false)} className="text-white/40 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Menu Links */}
              <ul className="space-y-5 text-sm font-bold uppercase tracking-wider mb-10 border-b border-white/5 pb-8">
                <li className="text-[#f52549]"><Link href="/lazy-busy">Home</Link></li>
                <li className="hover:text-[#f52549] transition-colors"><Link href="#">Features</Link></li>
                <li className="hover:text-[#f52549] transition-colors"><Link href="#">Lifestyle</Link></li>
                <li className="hover:text-[#f52549] transition-colors"><Link href="#">Health</Link></li>
                <li className="hover:text-[#f52549] transition-colors"><Link href="#">TV & Drama</Link></li>
                <li className="hover:text-[#f52549] transition-colors"><Link href="#">Contact</Link></li>
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
                    className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-xs text-white rounded focus:outline-none focus:border-[#f52549]"
                  />
                  <button type="submit" className="w-full bg-[#f52549] text-white font-black uppercase text-[11px] py-2.5 rounded hover:bg-white hover:text-black transition-colors tracking-widest">Subscribe</button>
                  <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight mt-2 select-none">
                    <input type="checkbox" required className="mt-0.5 rounded-sm" />
                    <span>By signing up, you agree to our terms & privacy policy.</span>
                  </label>
                </form>
              </div>

              {/* What's Hot Widget */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[2px] mb-6 border-b border-white/10 pb-3 flex items-center gap-2 text-white">
                  <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span> What's Hot
                </h4>
                <div className="space-y-5">
                  {hotPosts.map((post, idx) => (
                    <Link href="#" key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="w-16 h-12 overflow-hidden rounded bg-white/10 shrink-0">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h5 className="text-[11.5px] font-bold leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">{post.title}</h5>
                        <span className="text-[10px] text-gray-500 block">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-8 border-t border-white/5 bg-[#0a0a0a]">
            <div className="flex gap-6 justify-center items-center">
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={16} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={16} /></Link>
            </div>
          </div>
        </div>
      </div>

      <header className="w-full relative z-[100] font-sans bg-white border-b border-gray-100">
        
        {/* ROW 1: Top Light Bar */}
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-[76px] md:h-[90px]">
          
          {/* Left: Date & Hamburger */}
          <div className="flex items-center gap-4 text-gray-500">
            <button onClick={() => setIsOffCanvasOpen(true)} className="text-gray-700 hover:text-[#f52549] transition-colors p-1">
              <Menu size={24} />
            </button>
            <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              {currentDate || "Wednesday, May 20"}
            </span>
          </div>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/lazy-busy">
              <img 
                src="https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/logo-LazyBusy-dark-01@05x.png" 
                alt="SmartMag LazyBusy logo" 
                className="h-9 md:h-11 w-auto"
              />
            </Link>
          </div>

          {/* Right: Search & Social Icons */}
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSearchOpen(true)} className="text-gray-700 hover:text-[#f52549] transition-colors p-1">
              <Search size={18} />
            </button>
            <div className="hidden md:flex items-center gap-3 text-gray-400 py-1 border-l border-gray-150 pl-5">
              <Link href="#" className="hover:text-black transition-colors"><Facebook size={14} /></Link>
              <Link href="#" className="hover:text-black transition-colors"><Twitter size={14} /></Link>
              <Link href="#" className="hover:text-black transition-colors"><Instagram size={14} /></Link>
              <Link href="#" className="hover:text-black transition-colors"><Youtube size={14} /></Link>
            </div>
          </div>

        </div>

        {/* ROW 2: Bottom Navigation Bar (Sticky when scrolled) */}
        <div className={`w-full bg-[#111] text-white z-[110] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-lg transform translate-y-0 animate-fade-in' : ''}`}>
          <div className="container mx-auto px-4 lg:px-8 flex justify-center items-center h-[54px]">
            
            <nav className="h-full">
              <ul className="flex items-center space-x-8 text-[12.5px] font-black uppercase tracking-wider h-full">
                
                {/* Home */}
                <li className="text-[#f52549] h-[54px] flex items-center border-b-2 border-[#f52549]">
                  <Link href="/lazy-busy">Home</Link>
                </li>
                
                {/* Features with Dropdown */}
                <li className="hover:text-[#f52549] transition-colors h-[54px] flex items-center gap-1 group relative cursor-pointer text-gray-200">
                  <span>Features</span>
                  <ChevronDown size={11} className="group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute top-[54px] left-0 w-48 bg-white border border-gray-100 text-black shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 rounded-b z-50">
                    <ul className="text-[11px] space-y-3 px-5 py-2 font-bold uppercase tracking-wider">
                      <li className="hover:text-[#f52549] transition-colors"><Link href="/">58+ Demos</Link></li>
                      <li className="hover:text-[#f52549] transition-colors"><Link href="#">Post Styles</Link></li>
                      <li className="hover:text-[#f52549] transition-colors"><Link href="#">Category Layouts</Link></li>
                      <li className="hover:text-[#f52549] transition-colors"><Link href="#">Header Styles</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Lifestyle Mega Menu */}
                <li className="hover:text-[#f52549] transition-colors h-[54px] flex items-center gap-1 group cursor-pointer static text-gray-200">
                  <span>Lifestyle</span>
                  <ChevronDown size={11} className="group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute top-[54px] left-0 right-0 w-full bg-[#16171f] text-white border-b border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-8">
                    <div className="container mx-auto px-8 grid grid-cols-4 gap-6">
                      {lifestylePosts.map((post, index) => (
                        <div key={index} className="group/item flex flex-col gap-3">
                          <div className="aspect-[4/3] w-full overflow-hidden bg-white/5 rounded relative">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover/item:opacity-100 transition-opacity duration-300" />
                            {post.rating && (
                              <div className="absolute top-2 right-2 bg-[#f52549] text-white px-1.5 py-0.5 rounded text-[10px] font-black tracking-tight">
                                {post.rating}
                              </div>
                            )}
                          </div>
                          <div className="space-y-1">
                            <span className="text-[9px] font-black uppercase text-[#f52549] tracking-widest">Lifestyle</span>
                            <h4 className="text-[12.5px] font-black leading-snug group-hover/item:text-[#f52549] transition-colors line-clamp-2">{post.title}</h4>
                            <p className="text-[10px] text-gray-400 font-medium">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Health Link */}
                <li className="hover:text-[#f52549] transition-colors h-[54px] flex items-center text-gray-200">
                  <Link href="#">Health</Link>
                </li>

                {/* TV & Drama Mega Menu */}
                <li className="hover:text-[#f52549] transition-colors h-[54px] flex items-center gap-1 group cursor-pointer static text-gray-200">
                  <span>TV & Drama</span>
                  <ChevronDown size={11} className="group-hover:rotate-180 transition-transform duration-200" />
                  <div className="absolute top-[54px] left-0 right-0 w-full bg-[#16171f] text-white border-b border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-8">
                    <div className="container mx-auto px-8 grid grid-cols-4 gap-6">
                      {tvPosts.map((post, index) => (
                        <div key={index} className="group/item flex flex-col gap-3">
                          <div className="aspect-[4/3] w-full overflow-hidden bg-white/5 rounded">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover/item:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[9px] font-black uppercase text-[#f52549] tracking-widest">TV & Drama</span>
                            <h4 className="text-[12.5px] font-black leading-snug group-hover/item:text-[#f52549] transition-colors line-clamp-2">{post.title}</h4>
                            <p className="text-[10px] text-gray-400 font-medium">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

              </ul>
            </nav>

          </div>
        </div>

      </header>
    </>
  );
}
