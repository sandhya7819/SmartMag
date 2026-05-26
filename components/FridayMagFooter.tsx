"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, PinIcon, ArrowUp, BarChart2, Mail } from "lucide-react";

const popularPosts = [
  { title: "Frequent TV Series Cancellations Altering Viewer Behavior, Survey Shows", date: "Sep 13, 2020", views: "9,700", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/sports-conference-2021-09-24-03-25-56-utc-1-300x192.jpg" },
  { title: "The Top Three Scandinavian Home Décor Trends This Winter", date: "Sep 12, 2020", views: "9,246", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_307544172_xl-2015-1-450x253.jpg" },
  { title: "Does Drinking Coffee Help Stave Off Diabetes and Heart Disease?", date: "Sep 11, 2020", views: "8,979", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/sea_-IREmctokfjU-unsplash-450x300.jpg" },
  { title: "Rising Folk Singer-Songwriter to Perform at St. Joe's Amp", date: "Sep 10, 2020", views: "8,832", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/obie-fernandez-uDAr4KFKY40-unsplash-1-450x282.jpg" },
];

const ourPicks = [
  { cat: "Food & Diet", title: "What are the Top Sodium Food Sources in the United States?", date: "Nov 19, 2022", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_360174566_xl-2015-2-300x165.jpg" },
  { cat: "Travel", title: "Travel and Tourism Contribute Greatly to Europe’s Economies", date: "Mar 10, 2022", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/view-of-the-dome-of-reichstag-building-seat-of-the-german-parliament-view-at-sunset-with-people_t20_Ll62z1-1-300x200.jpg" },
  { cat: "Travel", title: "Backpacking In Europe This Spring? Visit These 10 Budget Hotels", date: "Mar 10, 2022", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/a-young-woman-stands-against-the-backdrop-of-a-beautiful-building-with-christmas-lights-travels-in_t20_moxKYj-300x200.jpg" },
];

const footerLinks = [
  { name: "Home", href: "/friday-mag" },
  { name: "Health & Fitness", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function FridayMagFooter() {
  return (
    <footer className="bg-[#0f0f11] text-white border-t border-white/5" style={{ fontFamily: "'Public Sans', system-ui, sans-serif" }}>
      {/* Upper Footer */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-[35px] py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1: Most Popular */}
          <div>
            <div className="pb-3 mb-5 border-b border-white/10 flex items-center">
              <h5 className="text-[14px] font-extrabold uppercase tracking-wider" style={{ borderLeft: "3px solid #2ab391", paddingLeft: 10 }}>
                Most Popular
              </h5>
            </div>
            <div className="flex flex-col gap-1.5">
              {popularPosts.map((post, i) => (
                <article key={i} className="flex gap-3.5 group cursor-pointer py-3 border-b border-white/5 last:border-0 items-start">
                  <div className="w-[80px] sm:w-[90px] flex-shrink-0 rounded-[4px] overflow-hidden aspect-[4/3] bg-white/5">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-bold leading-snug text-white/85 group-hover:text-[#2ab391] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-white/55 text-[11px] font-medium">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <BarChart2 size={11} className="inline text-white/40" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Col 2: Our Picks */}
          <div>
            <div className="pb-3 mb-5 border-b border-white/10 flex items-center">
              <h5 className="text-[14px] font-extrabold uppercase tracking-wider" style={{ borderLeft: "3px solid #2ab391", paddingLeft: 10 }}>
                Our Picks
              </h5>
            </div>
            <div className="flex flex-col gap-1.5">
              {ourPicks.map((post, i) => (
                <article key={i} className="flex gap-3.5 group cursor-pointer py-3 border-b border-white/5 last:border-0 items-start">
                  <div className="w-[80px] sm:w-[90px] flex-shrink-0 rounded-[4px] overflow-hidden aspect-[4/3] bg-white/5">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-bold leading-snug text-white/85 group-hover:text-[#2ab391] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="text-[#2ab391] text-[10.5px] font-extrabold uppercase tracking-wider mt-1">
                      {post.cat}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Col 3: Subscribe widget */}
          <div>
            <div className="pb-3 mb-5 border-b border-white/10 flex items-center">
              <h5 className="text-[14px] font-extrabold uppercase tracking-wider" style={{ borderLeft: "3px solid #2ab391", paddingLeft: 10 }}>
                Subscribe
              </h5>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-[6px] p-5 text-center relative">
              <div className="w-10 h-10 rounded-full bg-[#2ab391]/10 flex items-center justify-center mx-auto mb-3">
                <Mail size={18} className="text-[#2ab391]" />
              </div>
              <h4 className="text-[18px] font-bold text-white mb-1.5">Subscribe to Updates</h4>
              <p className="text-white/60 text-[12.5px] mb-4.5 leading-relaxed font-medium">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address.."
                  className="w-full border border-white/10 bg-white/10 px-3.5 py-2.5 text-[13px] text-white focus:outline-none focus:border-[#2ab391] transition-colors rounded-[4px] placeholder-white/40"
                />
                <button className="w-full bg-[#2ab391] text-white py-2.5 text-[12px] font-bold uppercase tracking-wider hover:bg-[#1d8a6f] transition-colors rounded-[3px]">
                  Subscribe
                </button>
              </form>
              <p className="text-white/45 text-[10px] mt-3 leading-normal">
                By signing up, you agree to our terms and our <a href="#" className="underline hover:text-[#2ab391]">Privacy Policy</a> agreement.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-[#040404] border-t border-white/5 py-6">
        <div className="max-w-[1200px] mx-auto px-4 md:px-[35px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/45 font-medium">
            &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ab391]">ThemeSphere</a>.
          </div>
          
          <div className="flex items-center gap-4 text-[12px] font-bold uppercase tracking-wider text-white/60">
            {footerLinks.map((link, i) => (
              <Link key={i} href={link.href} className="hover:text-[#2ab391] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2.5 bg-[#2ab391] text-white rounded-[3px] hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
