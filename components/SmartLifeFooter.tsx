"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const BASE = "https://smartmag.theme-sphere.com/smart-life/wp-content/uploads/sites/40/";

const ourPicks = [
  { title: "Top 5 Reasons Why Group Travel Is Beneficial For Young Friends", date: "Mar 10, 2022", img: `${BASE}2023/06/edson-diogo-Z9FZQMwCPpk-unsplash-300x200.jpg` },
  { title: "Maximizing the Benefits of Supplements for an Active Lifestyle", date: "Mar 10, 2022", img: `${BASE}2023/06/pexels-jellybee-8940745.jpg` },
  { title: "1 in 3 Can't Get Through Meal Without Looking at Phone, Survey Finds", date: "Mar 10, 2022", img: `${BASE}2023/06/freestocks-hRVrvH9-dG0-unsplash-4-300x200.jpg` },
];

const mostPopular = [
  { title: "UAE's Travel and Tourism Industry Created Thousands of Jobs in 2022", date: "Mar 15, 2020", img: `${BASE}2020/03/kent-tupas-PsGNSpf3vKc-unsplash-450x300.jpg` },
  { title: "Best Destinations for Adventure Travel Enthusiasts", date: "Mar 15, 2020", img: `${BASE}2020/03/Depositphotos_416022816_xl-2015-1-450x300.jpg` },
  { title: "Students Get Ready to Showcase Musical Talent at Singing Festival", date: "Mar 15, 2020", img: `${BASE}2023/06/obie-fernandez-uDAr4KFKY40-unsplash-2-450x308.jpg` },
];

export default function SmartLifeFooter() {
  return (
    <footer className="bg-[#111111] text-white font-sans border-t-4 border-[#2ab391]">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About Us */}
          <div>
            <div className="mb-6">
              <img
                src={`${BASE}2023/06/logo-SMART-LIFE-light@2x.png`}
                alt="SmartLife"
                className="h-[34px] w-auto mb-4"
              />
            </div>
            <div className="text-[#999] text-[13px] leading-relaxed mb-6 space-y-3">
              <p>Your source for smart lifestyle content. This demo is crafted specifically to exhibit the use of the SmartMag theme as a lifestyle site.</p>
              <p>We&apos;re accepting new partnerships right now.</p>
              <p className="text-white font-bold text-[12px] pt-1">
                Email Us: <span className="text-gray-300 font-normal">info@example.com</span>
                <br />
                Contact: <span className="text-gray-300 font-normal">+1-320-0123-451</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2ab391] hover:text-white hover:border-[#2ab391] transition-all">
                <Facebook size={12} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2ab391] hover:text-white hover:border-[#2ab391] transition-all">
                <Twitter size={12} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2ab391] hover:text-white hover:border-[#2ab391] transition-all">
                <Instagram size={12} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2ab391] hover:text-white hover:border-[#2ab391] transition-all">
                <span className="text-[10px] font-black">YT</span>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2ab391] hover:text-white hover:border-[#2ab391] transition-all text-[#23c761]">
                <span className="text-[10px] font-black">WA</span>
              </Link>
            </div>
          </div>

          {/* Our Picks */}
          <div>
            <h3 className="text-[13px] font-black uppercase tracking-wider mb-7 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#2ab391] pb-1">
              Our Picks
            </h3>
            <div className="space-y-5">
              {ourPicks.map((p, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="w-[70px] h-[50px] flex-shrink-0 overflow-hidden rounded">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href="#" className="text-[12px] text-gray-300 hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors font-medium">
                      {p.title}
                    </Link>
                    <p className="text-[10px] text-gray-500 mt-1">{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Popular */}
          <div>
            <h3 className="text-[13px] font-black uppercase tracking-wider mb-7 text-white relative inline-block after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#2ab391] pb-1">
              Most Popular
            </h3>
            <div className="space-y-5">
              {mostPopular.map((p, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <span className="text-[28px] font-black text-[#2ab391]/30 leading-none w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <Link href="#" className="text-[12px] text-gray-300 hover:text-[#2ab391] leading-tight line-clamp-2 transition-colors font-medium">
                      {p.title}
                    </Link>
                    <p className="text-[10px] text-gray-500 mt-1">{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-500">
            © {new Date().getFullYear()} SmartMag SmartLife. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-gray-500">
            <Link href="#" className="hover:text-[#2ab391] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#2ab391] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#2ab391] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
