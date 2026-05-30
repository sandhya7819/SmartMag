"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, ChevronRight, BarChart2, Mail } from "lucide-react";
import { footerPopularPosts, latestNewsList } from "@/lib/rtlData";

export default function RtlFooter() {
  const quickLinks = [
    { label: "تبدأ هنا", href: "#" },
    { label: "أعلن معنا", href: "#" },
    { label: "اتصل بنا", href: "#" },
    { label: "اشتري الآن", href: "https://theme-sphere.com/buy/go.php?theme=smartmag" },
  ];

  return (
    <footer className="bg-[#0f111e] text-gray-400 font-sans border-t border-white/5 pt-16 pb-8" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
        
        {/* Column 1: Most Viewed (الأكثر مشاهدة) */}
        <div className="space-y-5 text-right">
          <h4 className="text-[14px] font-black uppercase tracking-wider text-white border-r-2 border-[#cf2e2e] pr-2.5">
            الأكثر مشاهدة
          </h4>
          <div className="space-y-4">
            {footerPopularPosts.map((post, i) => (
              <div key={i} className="flex gap-3.5 group items-start">
                <div className="w-[60px] h-[45px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-sm">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-grow min-w-0 space-y-1">
                  <Link href="#" className="text-xs text-gray-300 hover:text-[#cf2e2e] font-bold leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </Link>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-semibold leading-none">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5"><BarChart2 size={10} className="text-[#cf2e2e]" /> {post.views} زيارة</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Editor's Choices (اختيارات المحرر) */}
        <div className="space-y-5 text-right">
          <h4 className="text-[14px] font-black uppercase tracking-wider text-white border-r-2 border-[#cf2e2e] pr-2.5">
            اختيارات المحرر
          </h4>
          <div className="space-y-4">
            {latestNewsList.slice(0, 3).map((post, i) => (
              <div key={i} className="flex gap-3.5 group items-start">
                <div className="w-[60px] h-[45px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-sm">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-grow min-w-0 space-y-1">
                  <Link href="#" className="text-xs text-gray-300 hover:text-[#cf2e2e] font-bold leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </Link>
                  <div className="text-[10px] text-gray-500 font-semibold leading-none">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Newsletter Widget (مع كل متابعة جديدة) */}
        <div className="space-y-5 text-right">
          <h4 className="text-[14px] font-black uppercase tracking-wider text-white border-r-2 border-[#cf2e2e] pr-2.5">
            مع كل متابعة جديدة
          </h4>
          <div className="bg-white/5 border border-white/10 rounded-sm p-6 space-y-4 text-center">
            <Mail size={28} className="mx-auto text-[#cf2e2e]" />
            <h5 className="text-xs font-black uppercase tracking-wide text-white">مع كل متابعة جديدة</h5>
            <p className="text-[11px] text-gray-400 leading-relaxed max-w-[210px] mx-auto">
              اشترك في نشرتنا الإلكترونية مجاناً ليصلك كل جديد في عالم السياسة، التكنولوجيا والرياضة.
            </p>
            <form onSubmit={e => e.preventDefault()} className="space-y-2">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني.." 
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-500 rounded-sm outline-none focus:bg-white focus:text-black transition-all text-center"
              />
              <button 
                type="submit" 
                className="w-full bg-[#cf2e2e] hover:bg-white hover:text-black text-white text-[11px] font-black uppercase py-2.5 rounded-sm transition-colors shadow-md"
              >
                إشترك
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Row */}
      <div className="max-w-[1200px] mx-auto px-5 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <div>
          © 2026 جميع الحقوق محفوظة لـ SmartMag Clone.
        </div>
        <div className="flex space-x-reverse space-x-6">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
