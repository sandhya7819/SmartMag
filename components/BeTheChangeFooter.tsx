"use client";
import { Facebook, Twitter, Instagram, Youtube, Flame, Mail, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function BeTheChangeFooter() {
  const popularPosts = [
    {
      title: "Top 6 Ideas to Have a Memorable & Entertaining Celebrations at Home with Friends",
      date: "Jan 14, 2021",
      views: "12.4K",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2021/01/nominated-woman-champagne-glass-girl-wine-happy-drink-people-person-celebration-pouring-bubbly-bottle_t20_noOmoO-22-150x150.jpg"
    },
    {
      title: "Marvel Movies in Order: How to Watch Chronologically",
      date: "Dec 7, 2023",
      views: "9.8K",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/Depositphotos_344357462_XL-3-150x150.jpg"
    },
    {
      title: "Celebrity Hunted 2023: Who is Taking Part in the Channel 4 Show?",
      date: "Dec 7, 2023",
      views: "8.2K",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/85b6705c951b68cf94ec72bda4d435af-150x150.jpeg"
    }
  ];

  const ourPicks = [
    {
      title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b49fb6c176b4d7ec4cd12b2bad465588-1-150x150.jpeg"
    },
    {
      title: "Xbox Game Pass Is Practically Free in End of 2023 Deal",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ef475228391d98c9021847c54e518dee-150x150.jpeg"
    },
    {
      title: "The Role of Flexible Roofing Membranes in Sustainable Building Design",
      date: "Dec 7, 2023",
      img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/8655bd68cc6deefc2da0e20c1271881d-150x150.jpeg"
    }
  ];

  return (
    <footer className="bg-[#0a0b16] text-[#eef] pt-16 pb-12 mt-12 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top 3-Column Footer Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-12 mb-16">
          
          {/* Widget 1: Most Popular (col-4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[13px] font-black uppercase tracking-[2px] text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> Most Popular
            </h4>
            <div className="space-y-5">
              {popularPosts.map((post, idx) => (
                <Link href="#" key={idx} className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-[72px] h-[72px] rounded overflow-hidden shrink-0 bg-white/5 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h5 className="text-[12.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-2.5 text-[10px] text-gray-500 font-medium">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-0.5 text-[#2ab391] font-bold">
                        <Flame size={10} fill="currentColor" /> {post.views}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Widget 2: Our Picks (col-4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[13px] font-black uppercase tracking-[2px] text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> Our Picks
            </h4>
            <div className="space-y-5">
              {ourPicks.map((post, idx) => (
                <Link href="#" key={idx} className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-[72px] h-[72px] rounded overflow-hidden shrink-0 bg-white/5 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h5 className="text-[12.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <span className="text-[10px] text-gray-500 font-medium block">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Widget 3: Newsletter Sign-up (col-4) */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 border border-white/5 p-6 rounded-md shadow-md space-y-4 max-w-[380px] lg:max-w-none mx-auto lg:mx-0">
              <h3 className="text-[15px] font-black text-white text-center uppercase tracking-wider">
                Subscribe to Updates
              </h3>
              <p className="text-gray-400 text-[12.5px] text-center leading-normal">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address.."
                    required
                    className="w-full bg-[#0a0b16] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-gray-500 rounded focus:outline-none focus:border-[#2ab391] text-center"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2ab391] text-black font-black tracking-widest text-[11px] py-3.5 rounded hover:bg-white hover:text-[#0a0b16] transition-colors uppercase flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={12} />
                </button>
                <label className="flex items-start gap-2.5 cursor-pointer text-gray-500 text-[10px] leading-normal select-none">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded-sm bg-black/40 border border-white/10 checked:bg-[#2ab391] checked:border-transparent cursor-pointer"
                  />
                  <span className="text-center w-full block">
                    By signing up, you agree to our terms and our <Link href="#" className="underline hover:text-[#2ab391] transition-colors">Privacy Policy</Link> agreement.
                  </span>
                </label>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Sub-row with Social Follow and Branding */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Logo Sign-off */}
          <div>
            <Link href="/be-the-change" className="block">
              <img 
                src="https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/11/Logo-Be.the_.Change-01.png" 
                alt="Be The Change logo" 
                className="h-5 w-auto brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Social Icons Footer */}
          <div className="flex gap-3 justify-center items-center">
            {[
              { icon: Facebook, name: "Facebook" },
              { icon: Twitter, name: "Twitter" },
              { icon: Instagram, name: "Instagram" },
              { icon: Youtube, name: "Youtube" }
            ].map((social, idx) => (
              <Link
                key={idx}
                href="#"
                aria-label={social.name}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#2ab391] hover:border-transparent hover:text-black transition-all duration-300"
              >
                <social.icon size={13} fill="currentColor" className="stroke-none" />
              </Link>
            ))}
          </div>

          {/* Copyright Area */}
          <div className="text-center sm:text-right text-gray-500 text-[10px] uppercase tracking-widest font-black flex items-center gap-1.5">
            <span>© 2026 SmartMag. Made with</span>
            <Heart size={10} className="text-[#2ab391]" fill="currentColor" />
            <span>by ThemeSphere.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
