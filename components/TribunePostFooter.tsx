"use client";

import Link from "next/link";
import { Facebook, Instagram, Send } from "lucide-react";

export default function TribunePostFooter() {
  return (
    <footer className="bg-[#0b0c10] text-[#a4a6b2] font-sans border-t border-gray-800">
      {/* Footer Top Branding Bar */}
      <div className="container mx-auto max-w-[1200px] px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/5">
          <Link href="/tribune-post" className="block">
            <img
              src="https://smartmag.theme-sphere.com/tribune-post/wp-content/uploads/sites/58/2025/02/logo-tribunePost-footer@2x.png"
              alt="SmartMag TribunePost"
              width={240}
              height={32}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Social Links Row */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Facebook size={16} fill="currentColor" className="stroke-none" />, name: "Facebook" },
              { icon: <span className="text-xs font-black">𝕏</span>, name: "Twitter" },
              { icon: <Instagram size={16} />, name: "Instagram" },
              { icon: <span className="text-sm font-bold">P</span>, name: "Pinterest" },
              { icon: <span className="text-sm font-bold">W</span>, name: "WhatsApp" },
              { icon: <span className="text-xs font-black">T</span>, name: "TikTok" }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                title={social.name}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#0086F9] hover:border-[#0086F9] transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Middle Section (4 Columns) */}
      <div className="container mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: News categories */}
          <div className="space-y-5">
            <h4 className="text-white text-[13px] font-black uppercase tracking-wider border-l-[3px] border-[#0086F9] pl-3">
              News
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {["World", "US Politics", "EU Politics", "Business", "Opinions", "Connections", "Science"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company Info */}
          <div className="space-y-5">
            <h4 className="text-white text-[13px] font-black uppercase tracking-wider border-l-[3px] border-[#0086F9] pl-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {["Information", "Advertising", "Classified Ads", "Contact Info", "Do Not Sell Data", "GDPR Policy", "Media Kits"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-5">
            <h4 className="text-white text-[13px] font-black uppercase tracking-wider border-l-[3px] border-[#0086F9] pl-3">
              Services
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {["Subscriptions", "Customer Support", "Bulk Packages", "Newsletters", "Sponsored News", "Work With Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter subscribe module */}
          <div className="space-y-5">
            <h4 className="text-white text-[13px] font-black uppercase tracking-wider border-l-[3px] border-[#0086F9] pl-3">
              Subscribe to Updates
            </h4>
            <p className="text-sm leading-relaxed text-[#818390]">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="flex bg-white/5 border border-white/10 focus-within:border-[#0086F9] transition-all">
                <input
                  type="email"
                  placeholder="Your email address.."
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white focus:outline-none placeholder:text-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0086F9] hover:bg-blue-600 text-white px-5 flex items-center justify-center transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>

              <label className="flex items-start gap-2.5 text-[11px] text-[#818390] cursor-pointer hover:text-white/70 transition-colors">
                <input type="checkbox" className="mt-1 rounded-none shrink-0" required />
                <span>
                  By signing up, you agree to our terms and our{" "}
                  <Link href="#" className="underline text-white/60 hover:text-white">
                    Privacy Policy
                  </Link>{" "}
                  agreement.
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#07080a] py-6 border-t border-white/5">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-wider text-[#636570]">
          <p>© {new Date().getFullYear()} ThemeSphere. Designed by <a href="https://theme-sphere.com" className="hover:text-white">ThemeSphere</a>.</p>
          <div className="flex gap-6 uppercase">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
