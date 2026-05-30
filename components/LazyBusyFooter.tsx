"use client";
import { Facebook, Twitter, Instagram, Youtube, Flame, Mail, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function LazyBusyFooter() {
  const popularPosts = [
    {
      title: "10 Things You Didn't See on TV During the 2021 Latin Grammys",
      date: "Jan 14, 2021",
      views: "15.7K",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_414215728_XL-2-150x150.jpg"
    },
    {
      title: "'No Time to Die' Wins at 2021 Hollywood Music in Media Awards",
      date: "Jan 14, 2021",
      views: "11.2K",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_163097708_XL-1-150x150.jpg"
    },
    {
      title: "Actress Receive Achievement Award at Palm Springs Film Festival",
      date: "Jan 14, 2021",
      views: "9.3K",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2021/01/Depositphotos_333764180_xl-2015-1-150x150.jpg"
    }
  ];

  const ourPicks = [
    {
      title: "Running In Cold Weather: 8 Rules To Follow For A Safe And Healthy Exercise",
      date: "Jan 22, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d01cbcffe7151b9690a60ff450665d2e-150x150.jpeg"
    },
    {
      title: "The Unexpected Scenes That Gave Audience 'Lifelong Phobia'",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/9faf676d5ebf399427636b11d69dc46b-150x150.jpeg"
    },
    {
      title: "Dr. Jenny Pets Adds 5 Dog Diets Tailored To Specific Dietary Needs",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/d1b998484548c9450b9b96f2c1e73c86-150x150.jpeg"
    }
  ];

  return (
    <footer className="bg-[#0b0c10] text-[#eef] pt-16 pb-12 mt-12 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top 3-Column Footer Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-12 mb-16">
          
          {/* Widget 1: Most Popular (col-4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[13px] font-black uppercase tracking-[2px] text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span> Most Popular
            </h4>
            <div className="space-y-5">
              {popularPosts.map((post, idx) => (
                <Link href="#" key={idx} className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-[72px] h-[72px] rounded overflow-hidden shrink-0 bg-white/5 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h5 className="text-[12.5px] font-bold leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-2.5 text-[10px] text-gray-500 font-medium">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-0.5 text-[#f52549] font-bold">
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
              <span className="w-1.5 h-1.5 bg-[#f52549] rounded-full"></span> Our Picks
            </h4>
            <div className="space-y-5">
              {ourPicks.map((post, idx) => (
                <Link href="#" key={idx} className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-[72px] h-[72px] rounded overflow-hidden shrink-0 bg-white/5 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h5 className="text-[12.5px] font-bold leading-snug group-hover:text-[#f52549] transition-colors line-clamp-2">
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
                    className="w-full bg-[#0b0c10] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-gray-500 rounded focus:outline-none focus:border-[#f52549] text-center"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f52549] text-white font-black tracking-widest text-[11px] py-3.5 rounded hover:bg-white hover:text-black transition-colors uppercase flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={12} />
                </button>
                <label className="flex items-start gap-2.5 cursor-pointer text-gray-500 text-[10px] leading-normal select-none">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded-sm bg-black/40 border border-white/10 checked:bg-[#f52549] checked:border-transparent cursor-pointer"
                  />
                  <span className="text-center w-full block">
                    By signing up, you agree to our terms and our <Link href="#" className="underline hover:text-[#f52549] transition-colors">Privacy Policy</Link> agreement.
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
            <Link href="/lazy-busy" className="block">
              <img 
                src="https://smartmag.theme-sphere.com/lazy-busy/wp-content/uploads/sites/47/2023/12/logo-LazyBusy-01.png" 
                alt="Lazy Busy logo" 
                className="h-7 w-auto brightness-90 hover:brightness-100 transition-all duration-300"
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
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f52549] hover:border-transparent hover:text-white transition-all duration-300"
              >
                <social.icon size={13} fill="currentColor" className="stroke-none" />
              </Link>
            ))}
          </div>

          {/* Copyright Area */}
          <div className="text-center sm:text-right text-gray-500 text-[10px] uppercase tracking-widest font-black flex items-center gap-1.5">
            <span>© 2026 SmartMag. Made with</span>
            <Heart size={10} className="text-[#f52549]" fill="currentColor" />
            <span>by ThemeSphere.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
