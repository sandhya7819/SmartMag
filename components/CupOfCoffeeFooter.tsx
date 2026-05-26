"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, ChevronRight, MessageSquare, Eye } from "lucide-react";

export default function CupOfCoffeeFooter() {
  const ourPicks = [
    {
      title: "25 Cool Face Mask Styles We Love That You Can Buy Online or Make Yourself",
      date: "Jan 22, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a882221546d2deccf24446f90a9e425b-300x200.jpeg",
      href: "#"
    },
    {
      title: "Bitcoin Q1 Technical Outlook: Chart Signals Remain Constructive",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/a16df646595a3817abdc13d5d2234e0f-300x200.jpg",
      href: "#"
    },
    {
      title: "Soon You Can Give Your iPhone a Physical Keyboard With Real Buttons",
      date: "Jan 16, 2021",
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2024/01/59467acc317229b35f7605257a027fc2-300x200.jpeg",
      href: "#"
    }
  ];

  const mostPopular = [
    {
      title: "World Music Day 2023: What Is It and Why Do We Celebrate It?",
      date: "Jan 14, 2021",
      views: 38,
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/shutterstock_205965994-300x200.jpg",
      href: "#"
    },
    {
      title: "Rumor Roundup: War Games teams, Randy Orton return, CM Punk Speculation",
      date: "Jan 14, 2021",
      views: 43,
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/90773f2227cb66fce248b6b2039a2468-300x200.jpeg",
      href: "#"
    },
    {
      title: "Healthcare Group Calls for Return of Face Mask Guidance",
      date: "Jan 14, 2021",
      views: 43,
      img: "https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2021/01/e349d70df4d6621f01f289a3c22fe9a0-300x200.jpeg",
      href: "#"
    }
  ];

  return (
    <footer className="bg-[#111111] text-[#999999] font-sans mt-16">
      {/* Upper Footer */}
      <div className="container mx-auto px-4 max-w-[1200px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: About Us */}
          <div className="space-y-6">
            <div className="block-head-ac border-b border-white/5 pb-3">
              <h3 className="text-white text-[14px] font-black uppercase tracking-wider relative after:absolute after:-bottom-[13px] after:left-0 after:w-8 after:h-[2px] after:bg-[#e21d23]">About Us</h3>
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://smartmag.theme-sphere.com/cup-of-coffee/wp-content/uploads/sites/49/2023/12/logo-cupofcoffee-01-white.png" 
                alt="SmartMag CupOfCoffee" 
                className="h-[35px] w-auto"
              />
              <p className="text-[13px] leading-relaxed text-[#999999]">
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <p className="text-[13px] leading-relaxed text-[#999999]">
                We're accepting new partnerships right now.
              </p>
              <div className="text-[13px] text-[#aaa] space-y-1">
                <p><strong>Email Us:</strong> info@example.com</p>
                <p><strong>Contact:</strong> +1-320-0123-451</p>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex items-center space-x-3 text-white/60">
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3b5998] hover:text-white transition-all"><Facebook size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-all"><Twitter size={12} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#bd081c] hover:text-white transition-all"><Youtube size={12} /></Link>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div className="space-y-6">
            <div className="block-head-ac border-b border-white/5 pb-3">
              <h3 className="text-white text-[14px] font-black uppercase tracking-wider relative after:absolute after:-bottom-[13px] after:left-0 after:w-8 after:h-[2px] after:bg-[#e21d23]">Our Picks</h3>
            </div>

            <div className="space-y-5">
              {ourPicks.map((post, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-[75px] h-[75px] shrink-0 overflow-hidden rounded-sm bg-neutral-800">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-bold text-white leading-snug line-clamp-2 hover:text-[#e21d23] transition-colors cursor-pointer uppercase">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-semibold block mt-1">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div className="space-y-6">
            <div className="block-head-ac border-b border-white/5 pb-3">
              <h3 className="text-white text-[14px] font-black uppercase tracking-wider relative after:absolute after:-bottom-[13px] after:left-0 after:w-8 after:h-[2px] after:bg-[#e21d23]">Most Popular</h3>
            </div>

            <div className="space-y-5">
              {mostPopular.map((post, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-[75px] h-[75px] shrink-0 overflow-hidden rounded-sm bg-neutral-800">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-bold text-white leading-snug line-clamp-2 hover:text-[#e21d23] transition-colors cursor-pointer uppercase">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-[10px] text-gray-400 font-semibold mt-1 space-x-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center"><Eye size={10} className="mr-0.5" /> {post.views} Views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-[#0a0a0a] border-t border-white/5 py-6">
        <div className="container mx-auto px-4 max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 text-[12px] font-semibold text-gray-500 order-2 md:order-1">
            <Link href="/cup-of-coffee" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Lifestyle</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
          
          <p className="text-gray-500 text-[12px] font-semibold mb-4 md:mb-0 order-1 md:order-2">
            &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">ThemeSphere</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
