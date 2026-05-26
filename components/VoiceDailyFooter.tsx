"use client";
import Link from "next/link";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { VD_LOGO } from "@/lib/voiceDailyData";

// X (Twitter) Icon Component
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const newsLinks = ["World", "US Politics", "EU Politics", "Business", "Opinions", "Connections", "Science"];
const companyLinks = ["Information", "Advertising", "Classified Ads", "Contact Info", "Do Not Sell Data", "GDPR Policy", "Media Kits"];
const serviceLinks = ["Subscriptions", "Customer Support", "Bulk Packages", "Newsletters", "Sponsored News", "Work With Us"];

export default function VoiceDailyFooter() {
  return (
    <footer className="bg-[#161616] text-white font-['Inter',sans-serif] border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/10">
          <Link href="/thevoice-daily" className="block shrink-0">
            <img src={VD_LOGO} alt="The Voice Daily" width={209} height={35} className="h-[32px] w-auto brightness-0 invert" />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              aria-label="X (Twitter)"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              aria-label="Share"
            >
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-b border-white/10">
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[1.5px] mb-5 pb-2 border-b-2 border-white/10 font-['Inter',sans-serif] text-white">News</h4>
            <ul className="space-y-3">
              {newsLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[13.5px] text-white/65 hover:text-[#0c77e2] transition-colors font-medium">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[1.5px] mb-5 pb-2 border-b-2 border-white/10 font-['Inter',sans-serif] text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[13.5px] text-white/65 hover:text-[#0c77e2] transition-colors font-medium">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[1.5px] mb-5 pb-2 border-b-2 border-white/10 font-['Inter',sans-serif] text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[13.5px] text-white/65 hover:text-[#0c77e2] transition-colors font-medium">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="font-['Inter',sans-serif]">
            <h4 className="text-[13px] font-extrabold uppercase tracking-[1.5px] mb-4 text-white">Subscribe to Updates</h4>
            <p className="text-[13px] text-white/50 mb-4 leading-relaxed">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
              <input
                type="email"
                placeholder="Your email address.."
                required
                className="w-full bg-white/10 border border-white/10 px-3.5 py-2.5 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#0c77e2] rounded-[2px]"
              />
              <button type="submit" className="w-full bg-[#0c77e2] text-white text-[12px] font-bold py-2.5 hover:bg-[#0960b8] transition-colors uppercase tracking-wider rounded-[2px]">
                Subscribe
              </button>
              <label className="flex items-start gap-2 text-[11px] text-white/40 cursor-pointer select-none leading-relaxed">
                <input type="checkbox" required className="mt-0.5" />
                <span>
                  By signing up, you agree to our terms and our{" "}
                  <Link href="#" className="underline hover:text-white">
                    Privacy Policy
                  </Link>{" "}
                  agreement.
                </span>
              </label>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 text-[13px] text-white/40">
          <p>© {new Date().getFullYear()} ThemeSphere. Designed by ThemeSphere.</p>
          <ul className="flex flex-wrap gap-6">
            {["Privacy Policy", "Terms", "Accessibility"].map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
