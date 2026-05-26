"use client";

import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import { NO_LOGO } from "@/lib/newsOne24Data";

export default function NewsOne24Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    {
      Icon: () => (
        <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
    },
    { Icon: Instagram, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-10 font-sans border-t-4 border-[#cc0000] mt-16 selection:bg-[#cc0000] selection:text-white">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Intro */}
          <div className="space-y-6">
            <Link href="/new-one24" className="block shrink-0">
              <img 
                src={NO_LOGO} 
                alt="NewsOne24 Logo" 
                className="h-[30px] w-auto block object-contain brightness-0 invert"
                width={183} 
                height={28} 
              />
            </Link>
            <p className="text-white/50 text-[14.5px] leading-relaxed">
              Your comprehensive source for the latest world news, politics, and culture. We bring you the stories that matter, 24 hours a day, 7 days a week.
            </p>
            <div className="flex gap-3 pt-3">
              {socialIcons.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-9 h-9 rounded-[2px] bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#ffe500] hover:text-black transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Sections */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-[#cc0000] border-b border-white/10 pb-2.5">
              Quick Sections
            </h4>
            <ul className="grid grid-cols-2 gap-y-3.5">
              {["Politics", "Economy", "Technology", "Sports", "Exclusive", "US & Canada", "Europe", "Tourism"].map((cat) => (
                <li key={cat}>
                  <Link href="#" className="text-white/60 hover:text-[#ffe500] transition-colors text-[13.5px] font-bold">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-[#cc0000] border-b border-white/10 pb-2.5">
              Newsletter
            </h4>
            <p className="text-white/55 text-[14px] leading-relaxed">
              Stay ahead with our daily morning briefing delivered straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3.5 mt-4">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ffe500] transition-colors rounded-[2px] placeholder:text-white/30"
              />
              <button 
                type="submit" 
                className="w-full bg-[#cc0000] text-white font-extrabold uppercase tracking-widest text-[11.5px] py-3.5 hover:bg-[#ffe500] hover:text-black transition-all duration-300 rounded-[2px] flex items-center justify-center gap-2"
              >
                <Mail size={14} />
                <span>Join the List</span>
              </button>
            </form>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12.5px] font-bold text-white/40">
          <p>© {new Date().getFullYear()} NewsOne24. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-wider text-[11px]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
